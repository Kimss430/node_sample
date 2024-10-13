const path = require("path");

var txtPath = path.join(__dirname, "qwer", "text.txt");
console.log(txtPath);

var dirPath = path.dirname("D:\\node\\test\\qwer\\text.txt");
console.log(dirPath);

var filename = path.basename("D:\\node\\test\\qwer\\text.txt", ".txt");
console.log(filename);