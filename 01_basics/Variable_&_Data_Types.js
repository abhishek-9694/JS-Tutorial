
// ---------------   TOPIC : -  VARIABLES in JavaScript. ------------------------//

/*
const accountID = 64276;
let accountCity = "Gorakhpur";
let accountState ;
var accountEmail = "abhisheksingh08singh@gmail.com";
let accountPassword = 63532476;
console.table([accountID, accountCity, accountState, accountEmail, accountPassword]);

*/


// -------- Topic:-   Data Types In JavaScript.----------//

//->>>>>   This are the Premitive Data Types
 
// Number Data Types
let number = 10
type1 = typeof(number)  

// String Data Types
let string = "Abhishek Singh"
type2 = typeof(string)
// Boolean Data Types
let Boolean = true
type3 = typeof(Boolean)

// null Data Types  or standalone Value
let state = null;
type4 = typeof(state)
// Undefined Data Types
let un_defined;
type5 = typeof(un_defined)
 
console.table([type1, type2, type3, type4, type5])
//console.table([typeof(number), typeof(string), typeof(Boolean), typeof(state), typeof(un_defined)]);


// -- Symbol Data Types in JavaScript.
const id = Symbol("9694")
const anotherid = Symbol("9694")
console.log("Finding the Id of both Variable is same or Not:-",id == anotherid)


// // ->>>>> BigInt Data Type in JavaScript.
const big_number = 647632468767685492758965783266578745832956239472896598723653794698348578936487568729657826n;
console.log(big_number,"\n",typeof(big_number));



// -->>>>> [ This is  non-primitive data types in JavaScript. ]  */


/* [ Object ]	= represents instance through which we can access members.*/

const object1 = {
    Name : "Abhishek Singh",
    Rollno :2200320210004,
    Cource : "B.tech(EN)",
    MObileno:8931894591
}
const object2 = {
    Name : "Adity Monga",
    Rollno :2200320210005,
    Cource : "B.tech(EN)",
    MObileno: "---------"
}
console.log(object1)
console.table([object1,object2])


/*[ Array ]=	represents group of similar values. */ 

let array1 = ["Abhishek Singh",18,"B.tech",2200320210004]
let array2 = ["Abhishek Sharma",20,"B.tech",2200320210003]
let type_ = typeof(array1)
let type__ = typeof(array2)
console.table([array1,type_,array2,type__])


/* [ RegExp ]= represents regular expression.*/

