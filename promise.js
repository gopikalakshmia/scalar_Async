

let pro=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if('2'==='2'){
            resolve(" similar")
        }
        else
        {
            reject("Not")
        }
    })},2000)

console.log(pro);//pending state,tried to print out but it will run only after 2 sec,so it is in pending state
pro.then((result)=>{
    console.log(result);
})
pro.catch((err)=>{
    console.log(err);
})