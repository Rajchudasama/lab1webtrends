var num = 10;
var names = ["lee", "bernie", "sean"];
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
function forofdemo() {
    var num = [10, 11, 12];
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var number = num_1[_i];
        console.log(number);
    }
}
