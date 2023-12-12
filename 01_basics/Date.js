let date  = new Date();
let Date_ = date.getDate();
let Day= date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minuts = date.getMinutes();
let seconds = date.getSeconds();
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString())
console.log("\n");
console.log("Current Date:-",Date_,"/",month,"/",year);
console.log("Current Time:-",hours,":",minuts,":",seconds);