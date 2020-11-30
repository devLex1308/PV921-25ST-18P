
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}


interface User {
  [index: string]: any,
  name: string,
  age: number,
  isAdmin: boolean,
}

const user: User = {
  name: "Марко Вовчок",
  age: 18,
  isAdmin: false,
  y:5,
}


interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

const Object2: NumberOrStringDictionary = {
  length: 0,
  name: "Франко",
  sadf: 5,
  ddd: "sdf",
}

interface SearchFunc {
  (source: string, subString: string): void;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};


interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}



interface LabeledValue {
  label: string;
  ddd?: number;
}

function printLabel(labeledObj: LabeledValue) {
  const a: number = 7;

  if (typeof labeledObj.ddd === "string") {
    let b: number = a + labeledObj.ddd;
  }


  console.log(labeledObj.label);
  console.log(labeledObj.ddd);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);



function reverse(s: string): string {
  return s.split("").reverse().join("");
}

reverse("hello world");



let f: number | string | boolean = 7;
f = 8;
f = "Valera";



let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substring(1));

// console.log(x[1].substring(1));


let list: number[] = [1, 2, 3];
let listStrint: string[] = ['1', '2', '3'];
let list2: Array<number> = [1, 2, 3];


let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;



let color: string = "blue";
color = 'red';


let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n;


let isDone: boolean = false;

isDone = true;
// isDone = 5;

// console.log(4 / [8]);


const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.height;



const a = "";
let b = '0';

if (a == b) {
// It is! But why??
}

let x1 = 4;

if (1 < x1 && x1 < 3) {
// True for *any* value of x!
}