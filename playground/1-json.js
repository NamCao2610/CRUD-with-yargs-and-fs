const { json } = require("express");
const { parse } = require("yargs");

const fs = require("fs");
// const book = {
//   title: "Nam dep zai pro",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString();

// const data = JSON.parse(dataJson);

// console.log(typeof data);

const dataBuffer = fs.readFileSync("1-json.json");

//Chuyen qua Json
const dataString = dataBuffer.toString();

//Chuyen qua object

const data = JSON.parse(dataString);

data.name = "Nam dep trai";
data.age = 100;

dataJson = JSON.stringify(data);

fs.writeFileSync("1-json.json", dataJson);
