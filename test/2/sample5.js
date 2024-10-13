// const {dollar, yen} = require("./number.js");
// console.log(dollar);
const app = require("./number.js");
// const {dollorConvert, yenConvert} = require("./func.js");
const convert = require("./func.js");

console.log(app.dollar);
convert.dollorConvert(app.dollar);
convert.yenConvert(app.yen);