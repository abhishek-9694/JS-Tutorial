
 /*                               JavaScript String

       The JavaScript string is an object that represents a sequence of characters. */

// 1). By string literal
let stringname = "     String Value    ";
console.log(stringname);

// 2). By string object (using new keyword)
let stringname1 = new String("String Litral");
console.log(stringname1);

/*                             Method of the String in JavaScript    */


// JS String "charat(index)" Method.
let findstr = stringname.charAt(7);
console.log(findstr);

// JS String "concat(str)" Method.
let joinstr = stringname.concat(stringname)
console.log(joinstr);

// JS String "indexof(str)"" Method.
let strindex = stringname.indexOf("String");
console.log(strindex);

// JS String "toLowerCase()"" Method."
let strlowercase = stringname.toLowerCase();
console.log(strlowercase);

// JS String "toUpperCase()"" Method."
let struppercase =  stringname1.toUpperCase();
console.log(struppercase);

// JS String "slice(beginIndex,endIndex)" Method.
let strslising = stringname.slice(6,8);
console.log(strslising);

let sclice_ = "value"[4];
console.log("Scelicing the String:-",sclice_)
 

// JS String "trim()" Method.
console.log(stringname);
let strtrim = stringname.trim();
console.log(strtrim);
// JS String "trimStart()" Method.
let strtrimstart = stringname.trimStart()
console.log("Triming the String In the Starting Space:-",strtrimstart);
// JS String "trimStart()" Method.
let strtrimend = stringname.trimEnd()
console.log("Triming the String In the Ending  Space of the String:-",strtrimend);


// JS String "split()" Method.
let strsplit = stringname1.split('>');
console.log(strsplit);


// Js String " Length " Mehtod.
let strlength = stringname.length;
console.log("Length of the String:-",strlength);

// Template Literal 
let boy1 = "Promod";
let boy2 = "Nikhil";
console.log(`${boy1} is a friend of ${boy2}`)


// JS Replace() Method.
let strreplace =stringname.replace("Value","Statement");
console.log("Replacing the String in the anothe String:-",strreplace.trim());


// JS "charCodeAt(num) 7 codePointAt(num)" Method.
let strcharcode = stringname.charCodeAt(8);
console.log("Unicode of a String Charecter:-",strcharcode);
let strpointcode = stringname.codePointAt(3);
console.log(strpointcode);


// JS "endsWith(str)" Method.
let strendwith = stringname.endsWith("Value",16);
console.log("The Given String endsWith:-",strendwith);

// JS "endsWith(str)" Method.
// let strendwith = stringname.endsWith("Value");
// console.log("The Given String endsWith:-",strendwith);




/* Comparision of the Two String. */

let str1 = "Abhishek singh";
let str2 = "Ravi sirwastav";
if(str1<str2){
      console.log(`${str1} is Less Than ${str2}`);
}else if(str1>str2){
      console.log(`${str1} is Greater Than ${str2}`);
}else{
      console.log(`${str1} is Equal To ${str2}`);
}


let func = function mystrfunction(str1,str2){
      return str1.toLowerCase()=== str2.toLowerCase();
}
console.log(func);