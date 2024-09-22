const pr=new Promise(function exec(res,rej){
    console.log("Executor callback triggered by Promise constructor");
    setTimeout(()=>{
        const randomNumber=Math.floor(Math.random()*100);
        console.log(randomNumber);
        if(randomNumber % 2 ===0){
            res();
        }else {
            rej();
        }
    },5000);
});
console.log("Created the Promise Object");
console.log(pr);