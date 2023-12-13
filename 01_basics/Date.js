let date  = new Date();
console.log(date)
let Date_ = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let Day= date.getDay();
let hours = date.getHours();
let minuts = date.getMinutes();
let seconds = date.getSeconds();
console.log("Current Date:-",Date_,"/",month,"/",year);
console.log("Current Time:-",hours,":",minuts,":",seconds);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());

console.log(`TO day Date is ${Date_} Month is ${month} year is ${year}`);



// To Declearing  espasific Date.
let myCreateDate = new Date(2023,11,13);
console.log(myCreateDate.toLocaleDateString());

// To Declearing  Both Date & Time By You.
let myCreateDateTime = new Date(2023,11,13,9,34,5);
console.log(myCreateDateTime.toLocaleString());

// To display the Date in formate of [yy-mm-dd].
let dateDisplay = new Date("2023-12-13");
let date_display = new Date("12-13-2023");
console.log(dateDisplay.toLocaleDateString());
console.log(date_display.toLocaleDateString());