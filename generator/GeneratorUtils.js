var fs = require("fs");
var Handlebars = require("handlebars");
var chalk = require("chalk");
var helpers = require("./Helpers");

var mkdirp = require("mkdirp");
var extend = require("util")._extend;

helpers.registerHelpers(Handlebars);

var paramsGenerator = {};

// comment on templates
var comment = function(file, extension) {
  var text = "Generated by Skaffolder\nFor documentation visit http://skaffolder.com/#/documentation";

  var linkDoc = {
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

var insertInto = function(html, partialTmpl, params, tagFrom, tagTo, log) {
  var insertAt = html.indexOf(tagFrom);

  if (insertAt != -1) {
    var untilAt = html.indexOf(tagTo);
    var template = Handlebars.compile(partialTmpl);
    var partialCode = template(params);
    html = html.slice(0, insertAt + tagFrom.length) + "\n" + partialCode + html.slice(untilAt - 1);
  }

  return html;
};

exports.generateFile = function(log, file, paramLoop, opt) {
  var output = "";
  var path = require("path");

  // Bynary files
  if (file.templateBinary) {
    var template = Handlebars.compile(file.name);
    var fileNameDest = template(param);
    if (pathWorkspace) {
      var path = pathWorkspace + fileNameDest;
      mkdirp.sync(path.substr(0, path.lastIndexOf("/")));
      fs.writeFileSync(path, file.templateBinary, "binary");
      return;
    }
  }

  // Text files
  try {
    // SET PARAMS
    var param = paramsGenerator;
    for (var index in paramLoop) {
      param[index] = paramLoop[index];
    }

    param.extra = {};
    if (opt && opt.extra) {
      for (var i in opt.extra) {
        if (opt.extra[i]) param.extra[opt.extra[i].name] = opt.extra[i].value;
      }
    }

    // GET FILE NAME
    //console.info(chalk.gray("log: ") + file.name);
    var fileName = file.name.replace(/{{\\(([A-Za-z\s])*)}}/g, "{{/$1}}");
    fileName = fileName.replace(/\\/g, "\\\\");
    //console.info(chalk.gray("log: ") + fileName);
    var template = Handlebars.compile(fileName);
    var fileNameDest = template(param);
    //console.info(chalk.gray("log: ") + fileNameDest);

    if (pathWorkspace) {
      var pathFile = path.normalize(pathWorkspace + fileNameDest);

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
        var template = "";
        if (paramLoop && paramLoop.module && paramLoop.module.template) {
          var templateSplit = paramLoop.module.template.split("_");
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

      var template = "";
      if (paramLoop && paramLoop.module && paramLoop.module.template) {
        var templateSplit = paramLoop.module.template.split("_");
        if (templateSplit[0] == "List") template = Handlebars.compile(file.templateList);
        if (templateSplit[0] == "Edit") template = Handlebars.compile(file.templateEdit);
      } else {
        template = Handlebars.compile(file.template);
      }

      output = template(param);
    }

    // EXTRA ACTION
    for (var i in file._partials) {
      var partial = file._partials[i];
      output = insertInto(output, partial.template, param, partial.tagFrom, partial.tagTo, log);
    }

    // IF IS TEST PREVIEW
    if (opt && opt.test) {
      return output;
    }

    // WRITE
    var folderFile = path.normalize(pathFile.substr(0, pathFile.lastIndexOf(path.normalize("/"))));
    var res = mkdirp.sync(folderFile);
    if (output != "") {
      if (fs.existsSync(pathFile)) {
        let actual = fs.readFileSync(pathFile, "utf8");
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

    var msg = chalk.red("File with error: ") + pathFile;
    console.log(msg);
    console.error(e);
  }
};
