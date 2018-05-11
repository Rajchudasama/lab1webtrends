var num:number = 10;
function multiply(num:number):number{
    return num*2;
}
console.log(multiply(num));
function addition(num:number):number{
    return num+10;
}
console.log(addition(num));
function loopcheck():void{
    for(var i=0;i<10;i++){

    }
    console.log(i);
}
function letcheck():void{
    let x:number=10;
    if(true){
        let x:number=20;
        console.log(x);
    }
    console.log(x);
}
function forofdemo():void{
    let num:number[] = [10,11,12];
    for (let number of num) {
        console.log(number);
    }
}
