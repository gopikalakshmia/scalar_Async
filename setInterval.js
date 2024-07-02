let print=()=>{
    console.log("Hi");
}
let timer=setInterval(print,1000);
setTimeout(
    function(){
        clearInterval(timer) //clearing the timer
    },
    5000)