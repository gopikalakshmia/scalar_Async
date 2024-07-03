let obj1={
    name:"gopika",
    age:31,
    address:{
        state:"AZ",
        CITY:"Glendale"
    }
}

let obj2=JSON.parse(JSON.stringify(obj1))
obj1.name="vishnu";
console.log(obj1);
console.log(obj2);