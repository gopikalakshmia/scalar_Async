const fs=require("fs");

console.log("first line");
fs.readFile("f2.txt","utf8",cb1);
function cb1(data,err){
if(err){
    console.log(err)
}
else
console.log(data);
}

fs.readFile("f3.txt","utf8",cb2);
function cb2(data,err){
if(err){
    console.log(err)
}
else
console.log(data);
}

console.log("last line");