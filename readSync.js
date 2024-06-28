const fs=require("fs");
console.log("first line");
let data=fs.readFileSync("f1.txt");
console.log(data.toString());
console.log("last line");
