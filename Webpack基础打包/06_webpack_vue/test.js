"use strict";

var message = "hello, world";
var names = ['abc', 'cba', ' nba'];
names.forEach(function (item) {
  return console.log(item);
}); // 也可以输出文件
// npx babel demo.js --out-file test.js
