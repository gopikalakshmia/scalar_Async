const fs=require("fs");
console.log("first Line");
fs.readFile("f1.txt","utf8",(data,err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
    
});

console.log("Last Line");
