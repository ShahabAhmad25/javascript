// Array indexOf()
// Array lastIndexOf()
// Array includes()
// Array find() 
// Array findIndex()
// Array findLast()
// Array findLastIndex()


// Array find()
let number =[1,2,3,54,40,78,6,54,586]
// let result=number.find(myfunction)

// let result=number.findIndex(myfunction)
// function myfunction(num,index,array){
//     return  num>50;
//     console.log(result)
// }
let result=number.findLast(num=> num>40)
// let result=number.findLastIndex(num=> num>40)
// // Array indexOf()
console.log(number.indexOf(54))

// console.log(number.lastIndexOf(58))
// // Array includes()
console.log(number.includes(50))
console.log(result)