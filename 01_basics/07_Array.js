// Thre Way to Create Array.

/* 1) JavaScript array literal */
let array1 = ["Arun","Arvind","Anuje"];
let length_ = array1.length
for(i=0;i< length_;i++){
    // console.log(array1[i]);
}

/* 2) JavaScript Array directly (new keyword) */

let array2 = new Array();
array2[0] = "Arun";
array2[1] = "Ravi";
array2[3] = "Rajiv";
// console.log(array2);
// console.table(array2);


/* 3) JavaScript array constructor.  */

let  array3 = new Array("Ravi","Sastri","Roshan","Ramshawar");
let length1 = array3.length;
console.log("Length of the Array:-",length1);
let array4 = [];
for(i=0;i<length1;i++){
    if(array3[i]=="Ravi"){
        array4.push(array3[i]);
    }
    if(array3[i]=="Ramshawar"){
        array4.push(array3[i]);
    }
    if(array4){
        array4[2]= "Rudra";
        array4[3]= "Abhishek";
    }
}
console.table(array4);
console.log(array4);