function add(x){
    return function sum(y){
        console.log(x+y);
    }
}

let addtwo=add(2);
console.log(addtwo);
addtwo(3);