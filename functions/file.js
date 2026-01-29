// cannot acces the arrow function before initialization 
// simple function can be called before initialization

// Function Declaration (Hoisted)
// JavaScript "moves" this to the top.
table(); 
function table(){
console.log("This is tables of file");
}
// another method:
const file=function(){
    console.log("This is file.js");
}
file();



// //...❌ do not access arrow function before initalization
// rayban();
// const rayban= ()=>{
//     console.log("this is arrow function")
// }

// // ✅... Works perfectly!
// const rayBan= ()=>{
//     console.log("this is arrow function")
// }
// rayBan();










// const newdate=new Date();
// console.log(newdate);

// const firstName="shahab";
// const lastName="Ahmad";
// console.log(`${firstName} ${lastName}`)

// console.error("this is the error occurs many times")

// const n=80;
// console.log(n*n)
// console.log(typeof(n));

// let pi=Math.PI
// console.log(pi)