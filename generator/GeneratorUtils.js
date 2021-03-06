const fs = require("fs");
const Handlebars = require("handlebars");
const chalk = require("chalk");
const helpers = require("./Helpers");
const mkdirp = require("mkdirp");
const yaml = require("yaml");
const offlineService = require("../utils/offlineService");
const path = require("path");

helpers.registerHelpers(Handlebars);

let paramsGenerator = {};

// comment on templates
let comment = function(file, extension) {
  let text = "Generated by Skaffolder\nFor documentation visit http://skaffolder.com/#/documentation";

  let linkDoc = {
    js: {
      open: "// -------------\n// ",
      close: "\n// -------------\n\n"
    },
    ts: {
      open: "// -------------\n// ",
      close: "\n// -------------\n\n"
    },
    html: {
      open: "<!-- \n     ",
      close: "\n-->\n    \n"
    },
    java: {
      open: "// -------------\n// ",
      close: "\n// -------------\n\n"
    },
    php: {
      open: "<?php \n//",
      close: "\n?>\n\n"
    }
  };

  if (file.name.endsWith(extension)) {
    file.template = linkDoc[extension].open + text + linkDoc[extension].close + file.template;
  }

  return file.template;
};

exports.init = function(pathWorkspace2, project, modules, resources, dbs, roles) {
  paramsGenerator = {
    project: project,
    modules: modules,
    resources: resources,
    dbs: dbs,
    roles: roles
  };

  pathWorkspace = pathWorkspace2;
};

let insertInto = function(html, partialTmpl, params, tagFrom, tagTo, log) {
  let insertAt = html.indexOf(tagFrom);

  if (insertAt != -1) {
    let untilAt = html.indexOf(tagTo);
    let template = Handlebars.compile(partialTmpl);
    let partialCode = template(params);
    html = html.slice(0, insertAt + tagFrom.length) + "\n" + partialCode + html.slice(untilAt - 1);
  }

  return html;
};

exports.generateFile = function(log, file, paramLoop, opt) {
  let output = "";

  // Bynary files
  if (file.templateBinary) {
    let template = Handlebars.compile(file.name);
    let fileNameDest = template(paramLoop);
    if (pathWorkspace) {
      let pathFile = pathWorkspace + fileNameDest;
      let folder = path.dirname(pathFile);
      mkdirp.sync(folder);
      fs.writeFileSync(pathFile, file.templateBinary, "binary");
      return;
    }
  }

  let pathFile = "";
  // Text files
  try {
    // SET PARAMS
    let param = paramsGenerator;
    for (let index in paramLoop) {
      param[index] = paramLoop[index];
    }

    param.extra = {};
    if (opt && opt.extra) {
      for (let i in opt.extra) {
        if (opt.extra[i]) param.extra[opt.extra[i].name] = opt.extra[i].value;
      }
    }

    // GET FILE NAME
    //console.info(chalk.gray("log: ") + file.name);
    let fileName = file.name.replace(/{{\\(([A-Za-z\s])*)}}/g, "{{/$1}}");
    fileName = fileName.replace(/\\/g, "\\\\");
    //console.info(chalk.gray("log: ") + fileName);
    let template = Handlebars.compile(fileName);
    let fileNameDest = template(param);
    //console.info(chalk.gray("log: ") + fileNameDest);
    pathFile = path.normalize(pathWorkspace + fileNameDest);

    if (pathWorkspace) {
      if (file.ignore && fs.existsSync(pathFile)) {
        //console.info(chalk.gray("File ignored: ") + file.name);
        return;
      }

      if (fs.existsSync(pathFile) && !fs.lstatSync(pathFile).isFile()) {
        return;
      }

      // READ FILE OR TEMPLATE
      if (!file.overwrite && fs.existsSync(pathFile)) {
        output = fs.readFileSync(pathFile, "utf8");
        //console.info(chalk.gray("File ignored: ") + pathFile);
      } else {
        let template = "";
        if (paramLoop && paramLoop.module && paramLoop.module.template) {
          let templateSplit = paramLoop.module.template.split("_");
          if (templateSplit[0] == "List") {
            if (file.templateList) {
              template = Handlebars.compile(file.templateList);
            } else {
              console.warn(chalk.yellow("Template List not found for page " + paramLoop.module.name));
              console.log("Please add file " + file.name + "_SK_LIST.hbs");
              template = Handlebars.compile(file.template);
            }
          }
          if (templateSplit[0] == "Edit") {
            if (file.templateEdit) {
              template = Handlebars.compile(file.templateEdit);
            } else {
              console.warn(chalk.yellow("Template Edit not found for page " + paramLoop.module.name));
              console.log("Please add file " + file.name + "_SK_EDIT.hbs");
              template = Handlebars.compile(file.template);
            }
          }
        } else {
          template = Handlebars.compile(file.template);
        }

        output = template(param);
      }
    } else {
      // FOR TESTING PREVIEW
      opt.params.push(param);

      let template = "";
      if (paramLoop && paramLoop.module && paramLoop.module.template) {
        let templateSplit = paramLoop.module.template.split("_");
        if (templateSplit[0] == "List") template = Handlebars.compile(file.templateList);
        if (templateSplit[0] == "Edit") template = Handlebars.compile(file.templateEdit);
      } else {
        template = Handlebars.compile(file.template);
      }

      output = template(param);
    }

    // EXTRA ACTION
    for (let i in file._partials) {
      let partial = file._partials[i];
      output = insertInto(output, partial.template, param, partial.tagFrom, partial.tagTo, log);
    }

    // IF IS TEST PREVIEW
    if (opt && opt.test) {
      return output;
    }

    // WRITE
    let folderFile = path.normalize(pathFile.substr(0, pathFile.lastIndexOf(path.normalize(path.sep))));
    let res = mkdirp.sync(folderFile);
    if (output != "") {
      if (fs.existsSync(pathFile)) {
        let actual = fs.readFileSync(pathFile, "utf8");

        if (file.extra && file.extra.merge == "yaml") {
          // console.log(chalk.green("Extra operation: ") + "Merge YAML on " + pathFile);

          // Extends previous values
          let oldYaml = yaml.parse(actual);
          let newYaml = yaml.parse(output);
          let mergedYaml = offlineService.mergeYaml(oldYaml, newYaml);
          output = yaml.stringify(mergedYaml);
        }

        if (actual != output) {
          log.push(
            "<div class='file-result edit'><label>File modified </label><div class='file-name'>" + pathFile + "</div></div>"
          );
          console.info(chalk.green("File modified: ") + pathFile);
        }
      } else {
        log.push(
          "<div class='file-result created'><label>File created</label><div class='file-name'>" + pathFile + "</div></div>"
        );
        console.info(chalk.green("File created: ") + pathFile);
      }

      fs.writeFileSync(pathFile, output);
    }
  } catch (e) {
    log.push("<div class='file-result error'><label>File with error</label><div class='file-name'>" + pathFile + "</div></div>");
    log.push("<pre>" + e.stack + "</pre>");

    let msg = chalk.red("File with error: ") + pathFile;
    console.log(msg);
    console.error(e);
  }
};
