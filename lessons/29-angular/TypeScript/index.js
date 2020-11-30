"use strict";
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var user = {
    name: "Марко Вовчок",
    age: 18,
    isAdmin: false,
    y: 5,
};
var Object2 = {
    length: 0,
    name: "Франко",
    sadf: 5,
    ddd: "sdf",
};
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var p1 = { x: 10, y: 20 };
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
function printLabel(labeledObj) {
    var a = 7;
    if (typeof labeledObj.ddd === "string") {
        var b_1 = a + labeledObj.ddd;
    }
    console.log(labeledObj.label);
    console.log(labeledObj.ddd);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function reverse(s) {
    return s.split("").reverse().join("");
}
reverse("hello world");
var f = 7;
f = 8;
f = "Valera";
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substring(1));
// console.log(x[1].substring(1));
var list = [1, 2, 3];
var listStrint = ['1', '2', '3'];
var list2 = [1, 2, 3];
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
var color = "blue";
color = 'red';
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// let big: bigint = 100n;
var isDone = false;
isDone = true;
// isDone = 5;
// console.log(4 / [8]);
var obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
var area = obj.width * obj.height;
var a = "";
var b = '0';
if (a == b) {
    // It is! But why??
}
var x1 = 4;
if (1 < x1 && x1 < 3) {
    // True for *any* value of x!
}
