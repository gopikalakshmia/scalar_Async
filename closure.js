function test(){
    let a=2;
    function test1(){
        console.log(a);
    }
    return test1
}

console.log(test());
let val=test();
val();