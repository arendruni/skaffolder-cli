var _0x3ae9=['relationNameService','_ent2','relationNameServiceLowercase','resolveSQLtype','Number','numeric','Date','Integer','int','Decimal','String','varchar(40)','Boolean','ObjectId','varchar(30)','notEmpty','isEmpty2','isEmptyNull','isNull','startWith','time.Time','float32','toTSType','number','string','Int','BigDecimal','Long','Double','toCType','DateTime','boolean','toSwaggerType','integer','removeFinalSlash','removeInitialSlash','isRequired','toFileName','isMtoM','relations','eachResource','_resource','$1-$2','buildUrlSecurity','/**','oneElementArray','findInArray','hasInArray','firstElementArray','urlSecurity','{id}','moreThanOneElement','distinctRelations','equalFindBy','findBy','distinctRelationsEditComponent','_db','getReducerName','list','charAt','update','delete','handlebars-helpers','handlebars-group-by','register','util','_extend','Generated\x20by\x20Skaffolder\x0aFor\x20documentation\x20visit\x20http://skaffolder.com/#/documentation','//\x20-------------\x0a//\x20','\x0a//\x20-------------\x0a\x0a','<!--\x20\x0a\x20\x20\x20\x20\x20','\x0a-->\x0a\x20\x20\x20\x20\x0a','endsWith','template','open','close','indexOf','slice','length','message','generateFile','templateBinary','name','sync','substr','lastIndexOf','writeFileSync','extra','value','{{/$1}}','replace','compile','existsSync','overwrite','readFileSync','module','split','List','templateList','warn','yellow','Template\x20List\x20not\x20found\x20for\x20page\x20','log','Please\x20add\x20file\x20','_SK_LIST.hbs','Edit','Template\x20Edit\x20not\x20found\x20for\x20page\x20','_SK_EDIT.hbs','File\x20with\x20error:\x20','error','params','push','_partials','tagFrom','tagTo','test','normalize','utf8','info','green','registerHelper','joinObj','stringify','joinRoleObj',',\x20\x22ROLE_','SafeString',',\x20\x22','\x22ROLE_','firstUpperCase','toUpperCase','subStr','subStrCap','equal','toString','inverse','isNotLast','isNotLastUser','username','isNotLastRelations','_ent1','_id','hasRelation1m','_relations','_entity','type','1:m','hasRelationmm','checkExternalRelation','notEqual','exact','toLowerCase','create','get','isInUrl','match','find','m:m'];(function(_0xa464c9,_0x7c86d8){var _0x3d73c4=function(_0x5c2056){while(--_0x5c2056){_0xa464c9['push'](_0xa464c9['shift']());}};_0x3d73c4(++_0x7c86d8);}(_0x3ae9,0xdb));var _0x93ae=function(_0x36eaaa,_0x326732){_0x36eaaa=_0x36eaaa-0x0;var _0x461349=_0x3ae9[_0x36eaaa];return _0x461349;};var fs=require('fs');var Handlebars=require('handlebars');var chalk=require('chalk');var helpers=require(_0x93ae('0x0'))({'handlebars':Handlebars});var groupBy=require(_0x93ae('0x1'));groupBy[_0x93ae('0x2')](Handlebars);var mkdirp=require('mkdirp');var extend=require(_0x93ae('0x3'))[_0x93ae('0x4')];var paramsGenerator={};var comment=function(_0x2dc540,_0x2af5aa){var _0x535a12=_0x93ae('0x5');var _0x51e450={'js':{'open':_0x93ae('0x6'),'close':_0x93ae('0x7')},'ts':{'open':_0x93ae('0x6'),'close':_0x93ae('0x7')},'html':{'open':_0x93ae('0x8'),'close':_0x93ae('0x9')},'java':{'open':'//\x20-------------\x0a//\x20','close':_0x93ae('0x7')},'php':{'open':'<?php\x20\x0a//','close':'\x0a?>\x0a\x0a'}};if(_0x2dc540['name'][_0x93ae('0xa')](_0x2af5aa)){_0x2dc540[_0x93ae('0xb')]=_0x51e450[_0x2af5aa][_0x93ae('0xc')]+_0x535a12+_0x51e450[_0x2af5aa][_0x93ae('0xd')]+_0x2dc540[_0x93ae('0xb')];}return _0x2dc540[_0x93ae('0xb')];};exports['init']=function(_0x57bd0d,_0x1acf2f,_0x1a23a3,_0x4a9f52,_0x571e5f){paramsGenerator={'project':_0x1acf2f,'modules':_0x1a23a3,'resources':_0x4a9f52,'dbs':_0x571e5f};pathWorkspace=_0x57bd0d;};var insertInto=function(_0x36f71a,_0x4b2127,_0x337f2e,_0xbaf0e,_0x5b4ea1,_0x392a55){try{var _0x7f8662=_0x36f71a[_0x93ae('0xe')](_0xbaf0e);if(_0x7f8662!=-0x1){var _0x1f8aa2=_0x36f71a[_0x93ae('0xe')](_0x5b4ea1);var _0x2d1df5=Handlebars['compile'](_0x4b2127);var _0x11a9ce=_0x2d1df5(_0x337f2e);_0x36f71a=_0x36f71a[_0x93ae('0xf')](0x0,_0x7f8662+_0xbaf0e[_0x93ae('0x10')])+'\x0a'+_0x11a9ce+_0x36f71a['slice'](_0x1f8aa2-0x1);}return _0x36f71a;}catch(_0x1a1718){console['error'](_0x1a1718);var _0x54cfd0={'Error':{'message':_0x1a1718[_0x93ae('0x11')]}};_0x392a55['push'](_0x54cfd0);}};exports[_0x93ae('0x12')]=function(_0x46b704,_0x508d42,_0x2dd19a,_0x31a8da){var _0x32afa8='';var _0x93302e=require('path');if(_0x508d42[_0x93ae('0x13')]){var _0x141fc1=Handlebars['compile'](_0x508d42[_0x93ae('0x14')]);var _0x3d89ea=_0x141fc1(_0xd33af5);if(pathWorkspace){var _0x93302e=pathWorkspace+_0x3d89ea;mkdirp[_0x93ae('0x15')](_0x93302e[_0x93ae('0x16')](0x0,_0x93302e[_0x93ae('0x17')]('/')));fs[_0x93ae('0x18')](_0x93302e,_0x508d42['templateBinary'],'binary');return;}}try{var _0xd33af5=paramsGenerator;for(var _0x283e50 in _0x2dd19a){_0xd33af5[_0x283e50]=_0x2dd19a[_0x283e50];}_0xd33af5['extra']={};if(_0x31a8da&&_0x31a8da['extra']){for(var _0x59867a in _0x31a8da[_0x93ae('0x19')]){if(_0x31a8da[_0x93ae('0x19')][_0x59867a])_0xd33af5[_0x93ae('0x19')][_0x31a8da[_0x93ae('0x19')][_0x59867a][_0x93ae('0x14')]]=_0x31a8da[_0x93ae('0x19')][_0x59867a][_0x93ae('0x1a')];}}var _0x542656=_0x508d42['name']['replace'](/{{\\(([A-Za-z\s])*)}}/g,_0x93ae('0x1b'));_0x542656=_0x542656[_0x93ae('0x1c')](/\\/g,'\x5c\x5c');var _0x141fc1=Handlebars[_0x93ae('0x1d')](_0x542656);var _0x3d89ea=_0x141fc1(_0xd33af5);if(pathWorkspace){var _0x17fab9=_0x93302e['normalize'](pathWorkspace+_0x3d89ea);if(_0x508d42['ignore']&&fs[_0x93ae('0x1e')](_0x17fab9)){return;}if(!_0x508d42[_0x93ae('0x1f')]&&fs[_0x93ae('0x1e')](_0x17fab9)){_0x32afa8=fs[_0x93ae('0x20')](_0x17fab9,'utf8');}else{var _0x141fc1='';if(_0x2dd19a&&_0x2dd19a['module']&&_0x2dd19a[_0x93ae('0x21')]['template']){var _0x174dca=_0x2dd19a[_0x93ae('0x21')]['template'][_0x93ae('0x22')]('_');if(_0x174dca[0x0]==_0x93ae('0x23')){if(_0x508d42[_0x93ae('0x24')]){_0x141fc1=Handlebars[_0x93ae('0x1d')](_0x508d42[_0x93ae('0x24')]);}else{console[_0x93ae('0x25')](chalk[_0x93ae('0x26')](_0x93ae('0x27')+_0x2dd19a['module'][_0x93ae('0x14')]));console[_0x93ae('0x28')](_0x93ae('0x29')+_0x508d42[_0x93ae('0x14')]+_0x93ae('0x2a'));_0x141fc1=Handlebars[_0x93ae('0x1d')](_0x508d42[_0x93ae('0xb')]);}}if(_0x174dca[0x0]==_0x93ae('0x2b')){if(_0x508d42['templateEdit']){_0x141fc1=Handlebars[_0x93ae('0x1d')](_0x508d42['templateEdit']);}else{console[_0x93ae('0x25')](chalk[_0x93ae('0x26')](_0x93ae('0x2c')+_0x2dd19a[_0x93ae('0x21')][_0x93ae('0x14')]));console[_0x93ae('0x28')]('Please\x20add\x20file\x20'+_0x508d42[_0x93ae('0x14')]+_0x93ae('0x2d'));_0x141fc1=Handlebars[_0x93ae('0x1d')](_0x508d42['template']);}}}else{_0x141fc1=Handlebars[_0x93ae('0x1d')](_0x508d42[_0x93ae('0xb')]);}try{_0x32afa8=_0x141fc1(_0xd33af5);}catch(_0x15e6af){console['log'](chalk['red'](_0x93ae('0x2e'))+_0x17fab9);console[_0x93ae('0x2f')](_0x15e6af);}}}else{_0x31a8da[_0x93ae('0x30')][_0x93ae('0x31')](_0xd33af5);var _0x141fc1='';if(_0x2dd19a&&_0x2dd19a[_0x93ae('0x21')]&&_0x2dd19a[_0x93ae('0x21')][_0x93ae('0xb')]){var _0x174dca=_0x2dd19a[_0x93ae('0x21')][_0x93ae('0xb')][_0x93ae('0x22')]('_');if(_0x174dca[0x0]==_0x93ae('0x23'))_0x141fc1=Handlebars[_0x93ae('0x1d')](_0x508d42['templateList']);if(_0x174dca[0x0]==_0x93ae('0x2b'))_0x141fc1=Handlebars[_0x93ae('0x1d')](_0x508d42['templateEdit']);}else{_0x141fc1=Handlebars[_0x93ae('0x1d')](_0x508d42['template']);}_0x32afa8=_0x141fc1(_0xd33af5);}for(var _0x59867a in _0x508d42[_0x93ae('0x32')]){var _0x55637c=_0x508d42[_0x93ae('0x32')][_0x59867a];_0x32afa8=insertInto(_0x32afa8,_0x55637c[_0x93ae('0xb')],_0xd33af5,_0x55637c[_0x93ae('0x33')],_0x55637c[_0x93ae('0x34')],_0x46b704);}if(_0x31a8da&&_0x31a8da[_0x93ae('0x35')]){return _0x32afa8;}var _0x2fc55e=_0x93302e['normalize'](_0x17fab9[_0x93ae('0x16')](0x0,_0x17fab9[_0x93ae('0x17')](_0x93302e[_0x93ae('0x36')]('/'))));var _0x1a8bee=mkdirp[_0x93ae('0x15')](_0x2fc55e);if(_0x32afa8!=''){if(fs[_0x93ae('0x1e')](_0x17fab9)){let _0xfd2595=fs[_0x93ae('0x20')](_0x17fab9,_0x93ae('0x37'));if(_0xfd2595!=_0x32afa8)console[_0x93ae('0x38')](chalk[_0x93ae('0x39')]('File\x20modified:\x20')+_0x17fab9);}else{console[_0x93ae('0x38')](chalk[_0x93ae('0x39')]('File\x20created:\x20')+_0x17fab9);}fs['writeFileSync'](_0x17fab9,_0x32afa8);}}catch(_0xb014d1){console[_0x93ae('0x2f')](_0xb014d1);var _0x1cbc76={'Error':{'message':_0xb014d1[_0x93ae('0x11')]}};_0x46b704[_0x93ae('0x31')](_0x1cbc76);}};Handlebars[_0x93ae('0x3a')](_0x93ae('0x3b'),function(_0x154877,_0x4ee1b2){var _0x8f595=[];for(i in _0x154877){_0x8f595[_0x93ae('0x31')](_0x154877[i][_0x4ee1b2]);}return JSON[_0x93ae('0x3c')](_0x8f595)[_0x93ae('0x1c')](/,/g,',\x20');});Handlebars[_0x93ae('0x3a')]('joinObj2',function(_0x5d6827){var _0x3d54b8='';for(i in _0x5d6827){_0x3d54b8+=(i!=0x0?',\x20\x22':'\x22')+_0x5d6827[i][_0x93ae('0x14')]+'\x22';}return new Handlebars['SafeString'](_0x3d54b8);});Handlebars['registerHelper'](_0x93ae('0x3d'),function(_0x278256){var _0x2b3e0a='';for(i in _0x278256){_0x2b3e0a+=_0x93ae('0x3e')+_0x278256[i][_0x93ae('0x14')]+'\x22';}return new Handlebars[(_0x93ae('0x3f'))](_0x2b3e0a);});Handlebars[_0x93ae('0x3a')]('roleObj',function(_0x155740){var _0x490ce3='\x22'+_0x155740[0x0]['name']+'\x22';for(i in _0x155740){if(_0x155740[0x0][_0x93ae('0x14')]===_0x155740[i][_0x93ae('0x14')])continue;_0x490ce3+=_0x93ae('0x40')+_0x155740[i][_0x93ae('0x14')]+'\x22';}return new Handlebars['SafeString'](_0x490ce3);});Handlebars[_0x93ae('0x3a')]('joinRoleObj2',function(_0x57136a){var _0x1baba9='';for(let _0x2ce28a=0x0;_0x2ce28a<_0x57136a[_0x93ae('0x10')];_0x2ce28a++){if(_0x2ce28a==0x0){_0x1baba9+=_0x93ae('0x41')+_0x57136a[_0x2ce28a][_0x93ae('0x14')]+'\x22';}else{_0x1baba9+=_0x93ae('0x3e')+_0x57136a[_0x2ce28a][_0x93ae('0x14')]+'\x22';}}return new Handlebars[(_0x93ae('0x3f'))](_0x1baba9);});Handlebars['registerHelper']('roleObj',function(_0x501d57){var _0x4ddece='\x22'+_0x501d57[0x0]['name']+'\x22';for(i in _0x501d57){if(_0x501d57[0x0][_0x93ae('0x14')]===_0x501d57[i][_0x93ae('0x14')])continue;_0x4ddece+=_0x93ae('0x40')+_0x501d57[i][_0x93ae('0x14')]+'\x22';}return new Handlebars['SafeString'](_0x4ddece);});Handlebars[_0x93ae('0x3a')]('json',function(_0x283518){return new Handlebars[(_0x93ae('0x3f'))](JSON[_0x93ae('0x3c')](_0x283518,null,0x2));});Handlebars[_0x93ae('0x3a')](_0x93ae('0x42'),function(_0xd4479a,_0x161f30){return _0xd4479a&&_0xd4479a[0x0][_0x93ae('0x43')]()+_0xd4479a[_0x93ae('0xf')](0x1);});Handlebars['registerHelper'](_0x93ae('0x44'),function(_0x508349,_0x2b1aa2,_0x11644c){return _0x508349[_0x93ae('0x16')](_0x2b1aa2);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x45'),function(_0x3a969e,_0x23f799,_0x576583){return _0x3a969e[_0x93ae('0x16')](_0x23f799)['charAt'](0x0)['toUpperCase']()+_0x3a969e[_0x93ae('0x16')](_0x23f799)[_0x93ae('0xf')](0x1);});Handlebars['registerHelper'](_0x93ae('0x46'),function(_0x7fac87,_0x854ff9,_0x46620c){if(_0x7fac87)_0x7fac87=_0x7fac87[_0x93ae('0x47')]();if(_0x854ff9)_0x854ff9=_0x854ff9[_0x93ae('0x47')]();if(_0x7fac87==_0x854ff9){if(_0x46620c['fn'])return _0x46620c['fn'](this);else return 0x1;}if(_0x46620c[_0x93ae('0x48')])return _0x46620c[_0x93ae('0x48')](this);else return 0x0;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x49'),function(_0xcf2085,_0x50621a,_0x157ed2){if(_0xcf2085[_0x93ae('0x10')]==_0x50621a+0x1)return _0x157ed2[_0x93ae('0x48')](this);else return _0x157ed2['fn'](this);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x4a'),function(_0x1ffa1e,_0x47ce30,_0x422f80){if(_0x1ffa1e[_0x93ae('0x10')]==_0x47ce30+0x1)return _0x422f80[_0x93ae('0x48')](this);else{if(_0x1ffa1e[_0x93ae('0x10')]==_0x47ce30+0x2){arrayTmp=_0x1ffa1e[_0x93ae('0xf')](_0x47ce30);if(arrayTmp['slice'](-0x1)[0x0][_0x93ae('0x14')]==_0x93ae('0x4b'))return _0x422f80[_0x93ae('0x48')](this);}else return _0x422f80['fn'](this);}});Handlebars['registerHelper'](_0x93ae('0x4c'),function(_0xe4d5ea,_0x5605ca,_0x119b5d,_0x45ff85){if(_0xe4d5ea[_0x93ae('0x10')]==_0x119b5d+0x1){return _0x45ff85[_0x93ae('0x48')](this);}else{for(let _0xb38655=_0x119b5d+0x1;_0xb38655<_0xe4d5ea[_0x93ae('0x10')];_0xb38655++){if(_0xe4d5ea[_0xb38655][_0x93ae('0x4d')]['_id'][_0x93ae('0x47')]()!=_0x5605ca['_id']['toString']())return _0x45ff85['fn'](this);return _0x45ff85[_0x93ae('0x48')](this);}}});Handlebars[_0x93ae('0x3a')]('checkRelation',function(_0xd7c2e7,_0x1b039f,_0x5ffdeb){if(_0xd7c2e7[_0x93ae('0x10')]==0x0)return _0x5ffdeb[_0x93ae('0x48')](this);if(_0xd7c2e7)for(let _0x539296 in _0xd7c2e7){if(_0xd7c2e7[_0x539296][_0x93ae('0x4d')][_0x93ae('0x4e')][_0x93ae('0x47')]()==_0x1b039f['_id']['toString']())return _0x5ffdeb['fn'](this);}});Handlebars[_0x93ae('0x3a')](_0x93ae('0x4f'),function(_0xc622ff,_0x40a4b5){var _0xfe944d=_0xc622ff[_0x93ae('0x50')];if(_0xfe944d[_0x93ae('0x10')]==0x0){if(_0x40a4b5['inverse'])return _0x40a4b5['inverse'](this);else return![];}if(_0xfe944d)for(let _0x12dd3c in _0xfe944d){if(_0xfe944d[_0x12dd3c][_0x93ae('0x4d')][_0x93ae('0x4e')][_0x93ae('0x47')]()==_0xc622ff[_0x93ae('0x51')][_0x93ae('0x4e')][_0x93ae('0x47')]()&&_0xfe944d[_0x12dd3c][_0x93ae('0x52')]==_0x93ae('0x53')){if(_0x40a4b5['fn'])return _0x40a4b5['fn'](this);else return![];}}});Handlebars['registerHelper'](_0x93ae('0x54'),function(_0x4e2c7f,_0x4d3ac3){var _0x278f58=_0x4e2c7f[_0x93ae('0x50')];if(_0x278f58[_0x93ae('0x10')]==0x0){if(_0x4d3ac3[_0x93ae('0x48')])return _0x4d3ac3[_0x93ae('0x48')](this);else return![];}if(_0x278f58)for(let _0x1caef0 in _0x278f58){if(_0x278f58[_0x1caef0][_0x93ae('0x4d')][_0x93ae('0x4e')][_0x93ae('0x47')]()==_0x4e2c7f[_0x93ae('0x51')][_0x93ae('0x4e')][_0x93ae('0x47')]()&&_0x278f58[_0x1caef0]['type']=='m:m'){if(_0x4d3ac3['fn'])return _0x4d3ac3['fn'](this);else return![];}}});Handlebars[_0x93ae('0x3a')](_0x93ae('0x55'),function(_0x13842b,_0x4ace5b,_0x57fcc8){if(_0x13842b[_0x93ae('0x10')]==0x0)return _0x57fcc8[_0x93ae('0x48')](this);if(_0x13842b)for(let _0x4d1693 in _0x13842b){if(_0x13842b[_0x4d1693][_0x93ae('0x4d')][_0x93ae('0x4e')][_0x93ae('0x47')]()!=_0x4ace5b[_0x93ae('0x4e')][_0x93ae('0x47')]())return _0x57fcc8['fn'](this);}});Handlebars['registerHelper'](_0x93ae('0x56'),function(_0x42fa3b,_0x2d9f54,_0x53e1c2,_0x1dd8c9){if(_0x42fa3b)_0x42fa3b=_0x42fa3b[_0x93ae('0x47')]();if(_0x2d9f54)_0x2d9f54=_0x2d9f54['toString']();_0x1dd8c9=_0x1dd8c9||_0x53e1c2;_0x53e1c2=_0x53e1c2===_0x93ae('0x57')?!![]:![];var _0x239921=_0x53e1c2?_0x42fa3b===_0x2d9f54:_0x42fa3b==_0x2d9f54;if(!_0x239921)return _0x1dd8c9['fn'](this);return _0x1dd8c9[_0x93ae('0x48')](this);});Handlebars[_0x93ae('0x3a')]('notHome',function(_0x26fd6e,_0x4d3bdf){if(_0x26fd6e)_0x26fd6e=_0x26fd6e[_0x93ae('0x47')]()[_0x93ae('0x58')]();if(_0x26fd6e!=='home')return _0x4d3bdf['fn'](this);return _0x4d3bdf[_0x93ae('0x48')](this);});Handlebars[_0x93ae('0x3a')]('notEqualArray',function(_0x1de80b,_0xf76055){var _0x3aedf4=['update',_0x93ae('0x59'),'delete','list',_0x93ae('0x5a')];for(var _0x57b3b8 in _0x3aedf4){if(_0x3aedf4[_0x57b3b8]==_0x1de80b)return _0xf76055[_0x93ae('0x48')](this);}return _0xf76055['fn'](this);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x5b'),function(_0x18bed6,_0x1e6008,_0x33ab59){var _0x3db0e7=_0x1e6008[_0x93ae('0x5c')](/{\w+}/g);if(_0x3db0e7&&_0x3db0e7[_0x93ae('0xe')]('{'+_0x18bed6+'}')!=-0x1)return _0x33ab59['fn'](this);else return _0x33ab59[_0x93ae('0x48')](this);});Handlebars['registerHelper']('relationName',function(_0x30975d,_0x470662,_0x12fa78,_0x254807){relation=_0x30975d[_0x93ae('0x5d')](_0x574c2c=>_0x574c2c[_0x93ae('0x52')]===_0x93ae('0x5e'));nameRelation=relation&&relation[_0x93ae('0x14')]===_0x470662[_0x93ae('0x16')](0x3)&&relation['_ent2']['name'];return nameRelation;});Handlebars['registerHelper'](_0x93ae('0x5f'),function(_0x4ce390,_0x30fb85,_0x307324,_0x5145a6){relation=_0x4ce390[_0x93ae('0x5d')](_0x149708=>_0x149708[_0x93ae('0x14')][_0x93ae('0x58')]()===_0x30fb85[_0x93ae('0x16')](0x6)[_0x93ae('0x58')]());nameRelation=relation&&relation[_0x93ae('0x14')]===_0x30fb85[_0x93ae('0x16')](0x6)&&relation[_0x93ae('0x60')][_0x93ae('0x14')];return nameRelation;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x61'),function(_0x47eaf7,_0xc486eb,_0x33c857,_0x1f93b5){relation=_0x47eaf7[_0x93ae('0x5d')](_0x13a59d=>_0x13a59d['name'][_0x93ae('0x58')]()===_0xc486eb['substr'](0x6)[_0x93ae('0x58')]());nameRelation=relation&&relation[_0x93ae('0x14')]===_0xc486eb[_0x93ae('0x16')](0x6)&&relation[_0x93ae('0x60')]['name'];return nameRelation[_0x93ae('0x58')]();});Handlebars['registerHelper'](_0x93ae('0x62'),function(_0xa139f1,_0x3aa582){if(_0xa139f1==_0x93ae('0x63'))return _0x93ae('0x64');else if(_0xa139f1==_0x93ae('0x65'))return'date';else if(_0xa139f1==_0x93ae('0x66'))return _0x93ae('0x67');else if(_0xa139f1==_0x93ae('0x68'))return'decimal(6,2)';else if(_0xa139f1==_0x93ae('0x69'))return _0x93ae('0x6a');else if(_0xa139f1==_0x93ae('0x6b'))return'bool';else if(_0xa139f1==_0x93ae('0x6c'))return'int(11)';return _0x93ae('0x6d');});Handlebars[_0x93ae('0x3a')]('isEmptyArray',function(_0x238c08,_0x126267){if(_0x238c08&&_0x238c08[_0x93ae('0x10')]==0x0)return _0x126267['fn'](this);else return _0x126267[_0x93ae('0x48')](this);});Handlebars['registerHelper'](_0x93ae('0x6e'),function(_0xacf1ba,_0x1a6927){if(_0xacf1ba&&_0xacf1ba['length']!=0x0)return _0x1a6927['fn'](this);else return _0x1a6927[_0x93ae('0x48')](this);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x6f'),function(_0x2a20a7,_0x1c4351){if(_0x2a20a7&&_0x2a20a7[_0x93ae('0x10')]!=0x0)return _0x1c4351[_0x93ae('0x48')](this);else return _0x1c4351['fn'](this);});Handlebars['registerHelper'](_0x93ae('0x70'),function(_0x2d94ac,_0x526333){if(_0x2d94ac&&_0x2d94ac[_0x93ae('0x10')]!=0x0)return _0x526333[_0x93ae('0x48')](this);else return _0x526333['fn'](this);});Handlebars[_0x93ae('0x3a')]('notNull',function(_0x3ad95c,_0x54728b){if(_0x3ad95c!=undefined)return _0x54728b['fn'](this);else return _0x54728b[_0x93ae('0x48')](this);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x71'),function(_0x3682d2,_0x199ee6){if(_0x3682d2==null)return _0x199ee6['fn'](this);else return _0x199ee6['inverse'](this);});Handlebars['registerHelper'](_0x93ae('0x72'),function(_0x13b660,_0x43a559,_0x31562b){if(_0x13b660&&_0x13b660['indexOf'](_0x43a559)==0x0&&_0x13b660!=_0x43a559){if(_0x31562b['fn'])return _0x31562b['fn'](this);else return 0x1;}else{if(_0x31562b[_0x93ae('0x48')])return _0x31562b[_0x93ae('0x48')](this);else return 0x0;}});Handlebars[_0x93ae('0x3a')]('notStartWith',function(_0x4e6d86,_0x5627cb,_0x59b637){if(_0x4e6d86&&_0x4e6d86[_0x93ae('0xe')](_0x5627cb)==0x0&&_0x4e6d86!=_0x5627cb)return _0x59b637[_0x93ae('0x48')](this);else return _0x59b637['fn'](this);});Handlebars[_0x93ae('0x3a')]('editUrlParam',function(_0x43d8d2){return _0x43d8d2['replace'](/{/g,':')[_0x93ae('0x1c')](/}/g,'')[_0x93ae('0x1c')](/\/$/,'');});Handlebars[_0x93ae('0x3a')]('editUrlParamGo',function(_0x5e4d82){return _0x5e4d82;});Handlebars['registerHelper']('editUrlParamRegExp',function(_0x6e3646){if(_0x6e3646=='/')_0x6e3646='/*';return _0x6e3646['replace'](/{[\s\S]*}/g,'([^/])+');});Handlebars[_0x93ae('0x3a')]('toGoType',function(_0x4358e2){if(_0x4358e2=='Integer')_0x4358e2=_0x93ae('0x67');if(_0x4358e2==_0x93ae('0x65'))_0x4358e2=_0x93ae('0x73');if(_0x4358e2==_0x93ae('0x63'))_0x4358e2='float32';if(_0x4358e2==_0x93ae('0x68'))_0x4358e2=_0x93ae('0x74');if(_0x4358e2==_0x93ae('0x69'))_0x4358e2='string';if(_0x4358e2=='ObjectId')_0x4358e2='int';return _0x4358e2;});Handlebars[_0x93ae('0x3a')]('toJSType',function(_0x3b32f2){if(_0x3b32f2==_0x93ae('0x66'))_0x3b32f2=_0x93ae('0x63');if(_0x3b32f2==_0x93ae('0x68'))_0x3b32f2=_0x93ae('0x63');return _0x3b32f2;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x75'),function(_0x30d7cb){if(_0x30d7cb==_0x93ae('0x66'))_0x30d7cb=_0x93ae('0x76');if(_0x30d7cb==_0x93ae('0x63'))_0x30d7cb=_0x93ae('0x76');if(_0x30d7cb==_0x93ae('0x68'))_0x30d7cb=_0x93ae('0x76');if(_0x30d7cb=='String')_0x30d7cb=_0x93ae('0x77');return _0x30d7cb;});Handlebars['registerHelper']('toJDBCType',function(_0x2c8455){if(_0x2c8455==_0x93ae('0x66'))_0x2c8455=_0x93ae('0x78');if(_0x2c8455==_0x93ae('0x68'))_0x2c8455=_0x93ae('0x79');if(_0x2c8455==_0x93ae('0x63'))_0x2c8455=_0x93ae('0x79');if(_0x2c8455==_0x93ae('0x6c'))_0x2c8455=_0x93ae('0x7a');return _0x2c8455;});Handlebars[_0x93ae('0x3a')]('toJavaType',function(_0x167d8f){if(_0x167d8f==_0x93ae('0x68'))_0x167d8f=_0x93ae('0x79');if(_0x167d8f==_0x93ae('0x63'))_0x167d8f=_0x93ae('0x7b');if(_0x167d8f==_0x93ae('0x6c'))_0x167d8f=_0x93ae('0x7a');return _0x167d8f;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x7c'),function(_0x4c68c9){if(_0x4c68c9=='Integer')_0x4c68c9=_0x93ae('0x67');if(_0x4c68c9=='Decimal')_0x4c68c9='string';if(_0x4c68c9==_0x93ae('0x63'))_0x4c68c9=_0x93ae('0x67');if(_0x4c68c9==_0x93ae('0x6c'))_0x4c68c9=_0x93ae('0x77');if(_0x4c68c9==_0x93ae('0x69'))_0x4c68c9='string';if(_0x4c68c9==_0x93ae('0x65'))_0x4c68c9=_0x93ae('0x7d');if(_0x4c68c9=='Boolean')_0x4c68c9=_0x93ae('0x7e');return _0x4c68c9;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x7f'),function(_0xec8fc9){if(_0xec8fc9==_0x93ae('0x66'))_0xec8fc9=_0x93ae('0x80');if(_0xec8fc9==_0x93ae('0x68'))_0xec8fc9='number';if(_0xec8fc9=='Number')_0xec8fc9=_0x93ae('0x76');if(_0xec8fc9==_0x93ae('0x6c'))_0xec8fc9=_0x93ae('0x77');if(_0xec8fc9==_0x93ae('0x69'))_0xec8fc9=_0x93ae('0x77');if(_0xec8fc9==_0x93ae('0x65'))_0xec8fc9=_0x93ae('0x80');if(_0xec8fc9==_0x93ae('0x6b'))_0xec8fc9=_0x93ae('0x7e');if(_0xec8fc9==_0x93ae('0x6c'))_0xec8fc9=_0x93ae('0x77');return _0xec8fc9;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x81'),function(_0x726630){if(_0x726630[_0x726630['length']]=='/')_0x726630[_0x93ae('0x16')](0x0,_0x726630[_0x93ae('0x10')]-0x1);return _0x726630;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x82'),function(_0x462f51){if(_0x462f51[0x0]=='/')return _0x462f51[_0x93ae('0x16')](0x1,_0x462f51[_0x93ae('0x10')])['replace'](/{/g,':')['replace'](/}/g,'');return _0x462f51;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x83'),function(_0x1b6e59,_0x1371e5){if(!_0x1b6e59){return _0x1371e5['fn']('?');}});Handlebars[_0x93ae('0x3a')](_0x93ae('0x84'),function(_0x53fdf7){_0x53fdf7=_0x53fdf7['replace'](/([a-z])([A-Z])/g,'$1-$2');_0x53fdf7=_0x53fdf7[_0x93ae('0x58')]();return _0x53fdf7;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x85'),function(_0x443d2a,_0x4fd8d0,_0x25a8eb,_0x48b0d0){var _0x5755b5=![];_0x443d2a=_0x443d2a[_0x93ae('0x16')](0x6);for(var _0x2377fd in _0x4fd8d0){if(_0x4fd8d0[_0x2377fd][_0x93ae('0x14')]==_0x443d2a&&_0x4fd8d0[_0x2377fd]['type']=='m:m'&&_0x4fd8d0[_0x2377fd][_0x93ae('0x4d')]['name']==_0x25a8eb)_0x5755b5=_0x4fd8d0[_0x2377fd];}this[_0x93ae('0x86')]=_0x5755b5;if(_0x5755b5)return _0x48b0d0['fn'](this);else return _0x48b0d0[_0x93ae('0x48')](this);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x87'),function(_0x39da90,_0x391f26){var _0x535ef9={};var _0x1c859d='';for(var _0x321126 in _0x39da90){if(!_0x535ef9[_0x39da90[_0x321126][_0x93ae('0x88')][_0x93ae('0x4e')]]){_0x535ef9[_0x39da90[_0x321126][_0x93ae('0x88')][_0x93ae('0x4e')]]=!![];_0x1c859d+=_0x391f26['fn'](_0x39da90[_0x321126][_0x93ae('0x88')]);}}return _0x1c859d;});Handlebars[_0x93ae('0x3a')]('getDbName',function(_0x514642,_0x25bfbe){for(var _0x4067bc in _0x514642){if(_0x514642[_0x4067bc][_0x93ae('0x4e')][_0x93ae('0x47')]()==_0x25bfbe['toString']())return _0x514642[_0x4067bc][_0x93ae('0x14')];}});Handlebars[_0x93ae('0x3a')]('getDbNameToFileName',function(_0x29f76e,_0xc2970d){for(var _0x118eea in _0x29f76e){if(_0x29f76e[_0x118eea][_0x93ae('0x4e')][_0x93ae('0x47')]()==_0xc2970d[_0x93ae('0x47')]()){var _0x468018=_0x29f76e[_0x118eea][_0x93ae('0x14')];_0x468018=_0x468018[_0x93ae('0x1c')](/([a-z])([A-Z])/g,_0x93ae('0x89'));_0x468018=_0x468018[_0x93ae('0x58')]();return _0x468018;}}});Handlebars[_0x93ae('0x3a')](_0x93ae('0x8a'),function(_0x3df0ca,_0x19e4e4){return _0x3df0ca==='/{id}'?_0x93ae('0x8b'):_0x3df0ca;});Handlebars['registerHelper']('unslug',function(_0x3f8a4d){return _0x3f8a4d[_0x93ae('0x1c')](/_/g,'\x20');});Handlebars[_0x93ae('0x3a')](_0x93ae('0x8c'),function(_0x5a3934,_0x3044eb){if(_0x5a3934&&_0x5a3934[_0x93ae('0x10')]==0x1)return _0x3044eb['fn'](this);else return _0x3044eb[_0x93ae('0x48')](this);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x8d'),function(_0x463bea,_0x17290d,_0x1c5040,_0x33ed22){for(var _0x2f26e2 in _0x463bea){if(_0x463bea[_0x2f26e2][_0x17290d]==_0x1c5040){if(_0x33ed22['fn'])return _0x33ed22['fn'](this);else return!![];}}if(_0x33ed22[_0x93ae('0x48')])return _0x33ed22[_0x93ae('0x48')](this);else return![];});Handlebars['registerHelper'](_0x93ae('0x8e'),function(_0x678df5,_0x46df74,_0x2fb73b){for(var _0x42fda0 in _0x678df5){if(_0x678df5[_0x42fda0][_0x46df74]!=null){if(_0x2fb73b['fn'])return _0x2fb73b['fn'](this);else return!![];}}if(_0x2fb73b['inverse'])return _0x2fb73b[_0x93ae('0x48')](this);else return![];});Handlebars['registerHelper'](_0x93ae('0x8c'),function(_0x20e3ff,_0x31028c){if(_0x20e3ff&&_0x20e3ff[_0x93ae('0x10')]==0x1)return _0x31028c['fn'](this);else return _0x31028c[_0x93ae('0x48')](this);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x8f'),function(_0x1579e0,_0x50ecc0){return _0x1579e0[0x0][_0x93ae('0x14')];});Handlebars[_0x93ae('0x3a')](_0x93ae('0x90'),function(_0x19c328,_0x1b8467){if(_0x19c328==='/')return'';if(_0x19c328['indexOf'](_0x93ae('0x91'))!=-0x1)return _0x19c328[_0x93ae('0x1c')]('{id}','**');});Handlebars[_0x93ae('0x3a')](_0x93ae('0x92'),function(_0x9910f6,_0x231f2a){if(_0x9910f6[_0x93ae('0x10')]>0x1)return _0x231f2a['fn'](this);else return _0x231f2a[_0x93ae('0x48')](this);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x93'),function(_0x1c9c9d,_0x3055c1,_0x5bd8ab){var _0x1d7fff=[];var _0x2e5b7c='';for(var _0xf7a968 in _0x1c9c9d){var _0x2d3263=_0x1c9c9d[_0xf7a968];if(_0x2d3263[_0x93ae('0x52')]==_0x93ae('0x53')&&_0x2d3263[_0x93ae('0x4d')][_0x93ae('0x14')]==_0x3055c1){if(!_0x1d7fff[_0x2d3263[_0x93ae('0x60')]['name']]){_0x1d7fff[_0x2d3263['_ent2'][_0x93ae('0x14')]]=_0x2d3263;_0x2e5b7c+=_0x5bd8ab['fn'](_0x2d3263);}}}return _0x2e5b7c;});Handlebars[_0x93ae('0x3a')]('distinctModules',function(_0x24a86f,_0x4d80c3){var _0x733659=[];var _0xa6175='';for(var _0x96a456 in _0x24a86f){var _0x399a9b=_0x24a86f[_0x96a456];if(!_0x733659[_0x399a9b['name']]){_0x733659[_0x399a9b[_0x93ae('0x14')]]=_0x399a9b;_0xa6175+=_0x4d80c3['fn'](_0x399a9b);}}return _0xa6175;});Handlebars['registerHelper'](_0x93ae('0x94'),function(_0x5082f2,_0x185db5,_0xbddbb0){if((_0x93ae('0x95')+_0x5082f2)[_0x93ae('0x58')]()===_0x185db5[_0x93ae('0x58')]()){if(_0xbddbb0['fn'])return _0xbddbb0['fn'](this);else return 0x1;}});Handlebars['registerHelper']('findByNotRelation',function(_0x59e601,_0x574cdd,_0xe15969){if(_0x59e601[_0x93ae('0x50')]['filter'](_0x4b761c=>_0x4b761c['name']===_0x574cdd[_0x93ae('0xf')](0x6))[_0x93ae('0x10')]>0x0)return _0xe15969['inverse'](this);else return _0xe15969['fn'](this);});Handlebars[_0x93ae('0x3a')](_0x93ae('0x96'),function(_0x319705,_0x22ec5b){var _0x3aeda4=[];var _0x5c94cf='';_0x5c94cf+=_0x22ec5b['fn']({'resourceName':_0x319705[_0x93ae('0x14')],'dbName':_0x319705[_0x93ae('0x97')]});_0x3aeda4[_0x319705[_0x93ae('0x14')]]=!![];for(var _0x1c8ad9 in _0x319705[_0x93ae('0x50')]){var _0x488fa6=_0x319705[_0x93ae('0x50')][_0x1c8ad9];if(_0x488fa6[_0x93ae('0x4d')][_0x93ae('0x4e')][_0x93ae('0x47')]()==_0x319705['_entity'][_0x93ae('0x4e')]['toString']()){var _0x384d73=_0x488fa6[_0x93ae('0x60')][_0x93ae('0x14')];if(!_0x3aeda4[_0x384d73]){var _0x5da0fc={'resourceName':_0x384d73,'dbName':_0x488fa6[_0x93ae('0x60')]['_resource'][_0x93ae('0x97')]};_0x3aeda4[_0x384d73]=_0x5da0fc;_0x5c94cf+=_0x22ec5b['fn'](_0x5da0fc);}}else{var _0x384d73=_0x488fa6['_ent1']['name'];if(!_0x3aeda4[_0x384d73]){var _0x5da0fc={'resourceName':_0x384d73,'dbName':_0x488fa6[_0x93ae('0x60')][_0x93ae('0x88')][_0x93ae('0x97')]};_0x3aeda4[_0x384d73]=_0x5da0fc;_0x5c94cf+=_0x22ec5b['fn'](_0x5da0fc);}}}return _0x5c94cf;});Handlebars[_0x93ae('0x3a')](_0x93ae('0x98'),function(_0x352c6c,_0x79b786){if(_0x352c6c['name']=='list')return _0x93ae('0x99')+_0x352c6c['_resource']['name'][_0x93ae('0x9a')](0x0)[_0x93ae('0x43')]()+_0x352c6c[_0x93ae('0x88')]['name'][_0x93ae('0xf')](0x1);if(_0x352c6c[_0x93ae('0x14')]==_0x93ae('0x9b'))return _0x352c6c[_0x93ae('0x88')][_0x93ae('0x14')]['toLowerCase']();if(_0x352c6c[_0x93ae('0x14')]=='create')return _0x352c6c[_0x93ae('0x88')][_0x93ae('0x14')]['toLowerCase']();if(_0x352c6c[_0x93ae('0x14')]==_0x93ae('0x9c'))return _0x352c6c['_resource'][_0x93ae('0x14')][_0x93ae('0x58')]();if(_0x352c6c['name']=='get')return _0x352c6c[_0x93ae('0x88')][_0x93ae('0x14')][_0x93ae('0x58')]();if(_0x352c6c[_0x93ae('0x14')]['startsWith']('findBy')){return _0x93ae('0x99')+_0x352c6c[_0x93ae('0x88')][_0x93ae('0x14')][_0x93ae('0x9a')](0x0)[_0x93ae('0x43')]()+_0x352c6c['_resource']['name'][_0x93ae('0xf')](0x1);}return _0x352c6c[_0x93ae('0x14')];});