const fs = require('fs');

const { generateLargeFile, checkLargeFileExists, txtFilePath } = require('./utils');

if (!checkLargeFileExists()) {
  generateLargeFile();
}
const controller = new AbortController();
const signal = controller.signal;
fs.readFile(txtFilePath, { signal }, (err, buf) => {
  console.log(buf);
});
// When you want to abort the request
controller.abort();
