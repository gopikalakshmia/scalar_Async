
let pro=function (drink){
    return new Promise((resolve,reject)=>{

        if(drink==="coffee"){
            resolve("Processed")
        }
        else
        {
            reject("Not processed")
        }
    })
}

let proTime=function(order){
    return  new Promise((resolve)=>{
        console.log("order is processed");
        resolve(`${order} is processed`)
    })
}

// pro("coffee").then((result)=>{
//     console.log(result);
//     let orderplace=proTime(result);
//     return   orderplace; //returning a promise
//     }).then((value)=>{
//         console.log(value);
//     })
//we can use async await instead of promise chaining


async function order(){try {
    let orderplace= await pro("coffee");
    console.log(orderplace);
    let orderServed=await proTime(orderplace);
    console.log(orderServed);
    
} 
catch (error) {
    
}
    
}
order();