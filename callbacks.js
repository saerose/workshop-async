'use strict';

const fs = require('fs');

exports.uploadFileContents = (data, cb) => {
  // Simulating file upload
  if(!data){
    cb('No data provided');
  }
  setTimeout(() => {
    cb(null)
  }, 1000)
}

exports.uploadFile = (filePath, cb) => {
  fs.readFile(filePath, function(err, data){
    if (err) {
      cb('Error reading file: ' + err)
    } else {
      exports.uploadFileContents(data, cb);
    }
  })
}

const uploadFileList = (source, files, cb) => {
  const fileQueue = [];
  files.forEach(function (filename, fileIndex) {
    const filePath = source+'/'+filename
    // Uploading the file
    fileQueue.push(filePath);
    exports.uploadFile(filePath, () => {
      fileQueue.splice(fileQueue.indexOf(filePath), 1);
      if(fileQueue.length === 0) {
        cb(null, files.length)
      }
    })
  })
}

exports.uploadFolder = (source, cb) => {
  fs.readdir(source, function (err, files) {
    if (err) {
      cb('Error finding files: ' + err)
    } else {
      uploadFileList(source, files, cb);
    }
  })
}
