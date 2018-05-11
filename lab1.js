var num = 10;
function multiply(num) {
    return num * 2;
}
console.log(multiply(num));
function addition(num) {
    return num + 10;
}
console.log(addition(num));
function loopcheck() {
    for (var i = 0; i < 10; i++) {
    }
    console.log(i);
}
function letcheck() {
    var x = 10;
    if (true) {
        var x_1 = 20;
        console.log(x_1);
    }
    console.log(x);
}
