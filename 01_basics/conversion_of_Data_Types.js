

// ---------     Topic :- Conversion of the Data Types of the Variable in JavaScript.


/* 1).  Number to String, Booliean, Null and Undefined Conversion . */


let num = 45
 
// Conversion of Number data types to String Types.
let str = String(num)
let type1 = typeof(str)
console.log("Conver the Data Number to String:",str," is ",type1);

// Conversion of Number data types to Boolean Types.
let boolean = Boolean(num)
let type2 = typeof(boolean)
console.log("Conver the Data Number to Boolean:",boolean," is ",type2);

console.table([str, type1, boolean, type2])

// Conversion of Boolean to Number Data Types.
var num2 = true
var num3 = false
var boolean1 = Number(num2)
var boolean2 = Number(num3)
//var num2 = 1
//var num3 = 0
//var boolean1 = Boolean(num2)
//var boolean2 = Boolean(num3)
var type3 = typeof(boolean1)
var type4 = typeof(boolean2)

console.table([boolean1,type3,boolean2,type4])

// note:- In JavaScript not Have Float data Types the Float value in JavaScript it take as Number.
let number = 45.67
console.log(typeof(num))
 



console.log('45'===45);
console.log("45"==45);
console.log(null>=0);
console.log(undefined<=0);
 



