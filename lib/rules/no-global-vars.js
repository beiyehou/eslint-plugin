const path = require('path');
const fs = require('fs');

function isSingleComp(filePath) {
  let result = true;
  if (filePath) {
    const curdir = path.dirname(filePath);
    const otherFiles = fs.readdirSync(curdir);
    if (otherFiles && otherFiles.length > 0) {
      result = false;
    }
  }
  return result;
}

function findPlatformFile(filePath, platform) {
  let file = '';
  if (platform) {
    const curdir = path.dirname(filePath);
    const otherFiles = fs.readdirSync(curdir);
    if (otherFiles && otherFiles.length > 0) {
      otherFiles.forEach(fileItem => {
        console.log(`findPlatformFile plaform: ${platform} file : ${fileItem}`);
        if (fileItem.indexOf(platform) > -1) {
          file = fileName;
        }
      });
    }
  }
  return file;
}

module.exports = {
  meta: {
    type: 'problem'
  },
  create: function(context) {
    console.log("enter create");
    const curFileName = context.getFilename();
    console.log("current file name :", curFileName);
    // console.log("create getScope():", context.getScope());
    // console.log("create findPlatform files:", findPlatformFile(curFileName, 'web'));
    return {
      Identifier(node) {
        if (node.name === 'wx') {
          // console.log("create:", context.getDeclaredVariables(node));
          context.report({
            message: 'Global variable {{ varName }} is forbidden in file: {{ fileName }}',
            data: {
              varName: 'wx',
              fileName: curFileName
            },
            loc: node.loc
          });
        }
      }
    }
  }
}