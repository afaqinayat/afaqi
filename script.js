age = 28;
console.log("Age is "+ age);

let cat = 12;
var z = 10;
const PI = 3.14;
const q = 2
w = 3;
console.log("cat is "+ cat);
console.log("z is "+ z);
console.log("PI is "+ PI);
console.log("q is "+ q);
let myInt = 12;
let myInt1 = 8;
let myFloat = 14;
x= myInt + myFloat;
y= myInt + myInt1;

console.log("sum of int and float is "+ x);
console.log("sum of 2 integer  is "+ y);

function Add()
{
    // alert("i am  here ");
  var firstnumber =  document.getElementById("TextfirstNumber").value;
  var secondnumber =  document.getElementById("TextSecondNumber").value;
//   console.log(firstnumber,secondnumber)

//   var result = Number.parseInt(firstnumber)+Number.parseInt (secondnumber);
//   console.log(result)
  document.getElementById("spanoutput").innerHTML = Number.parseInt(firstnumber) + Number.parseInt(secondnumber);
}