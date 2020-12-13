const { LoremIpsum } = require('lorem-ipsum');
const fs = require('fs');

const txtFilePath = './large.txt';

function checkLargeFileExists() {
  return fs.existsSync(txtFilePath);
}

function generateLargeFile() {
  const loremIpsum = new LoremIpsum();

  const text = loremIpsum.generateParagraphs(100000);
  const data = new Uint8Array(Buffer.from(text));

  fs.writeFile(txtFilePath, data, (err) => {
    if (err) throw  err;

    console.log('file written');
  });

};

module.exports = {
  generateLargeFile,
  checkLargeFileExists,
  txtFilePath
};

