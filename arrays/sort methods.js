
//.........Alphabetic Sort......
// Array sort()             =>        
// Array reverse()          =>
// Array toSorted()         =>
// Array toReversed()       =>
// Sorting Objects          =>
// .........Numeric Sort.......
// Numeric Sort             =>
// Random Sort              =>
// Math.min()               =>
// Math.max()               =>
// Home made Min()          =>
// Home made Max()          =>


// let arr=["Banana", "Orange", "Apple", "Mango"]
// // Array sort()
// console.log(arr.sort())
// // Array toSorted()
// let sortArray=arr.toSorted()
// console.log(sortArray)
// // Array reverse()
// console.log(arr.reverse())
// // Array toReversed()
//  let reverseArray=arr.toReversed()
// console.log(reverseArray)


const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Toyota", year: 2001 },
    { type: "BMW", year: 2010 }
];
// let sortobj=cars.sort((a,b)=>{
//     return a.type-b.type
// })
// let sortNum=cars.sort(function(a, b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return 1;}
//     if (x > y) {return -1;}
//     return 0;
// });
// console.log(sortNum)

// let sorObj=cars.sort((a,b)=>{
//     let x=a.type.toLowerCase();
//     console.log(x)
//     let y=b.type.toLowerCase();
//     if(x<y){
//         return -1
//     }
//     if(x>y){
//         return 1
//     }

// })
// console.log(sorObj)

// .........sort-Object ascending................
//  let sortObj=cars.sort((a,b)=>{
//    return a.year-b.year
// })
//  console.log(sortObj)

// ..........sort-Object in descending-order................
//   let sortObj=cars.sort((a,b)=>{
//    return b.year-a.year
// })
//  console.log(sortObj)

// ..........sort-number in rendom-order................
// let numbers=[1,23,4,5,67,7,88,100]
//   let sortArray=numbers.sort((a,b)=>{
//    return 0.5-Math.random()
// })
//  console.log(sortArray.toString())


//..sort object in alphabetic order................
// let sortObj = cars.sort((a, b) => {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) { return -1 }
//     if (x > y) { return 1 }
//     return 0;
// });
// // //.... use this to dsiplay 
// let text = "";
// cars.forEach(myFunction)
// function myFunction(value) {
//     text += value.type + " " + value.year + "<br>";
// }
// //......... Or use this to display
// // displayCars();
// // function displayCars() {
// //     console.log(cars[0].type + " " + cars[0].year + "<br>" +
// //         cars[1].type + " " + cars[1].year + "<br>" +
// //         cars[2].type + " " + cars[2].year);
// // }
// // console.log(displayCars)
// console.log(text)


let arrayElement=[1,2,35,6,68,8,85,54,4]
// let max=Math.min(...arrayElement)
// console.log(max)

function maxElement(array){
return Math.max(...array)
}
console.log(maxElement(arrayElement))

// function maxElement(array){
// return Math.min.apply(null,array)
// }
// let result= `Minimum number is: ${maxElement(arrayElement)}`
// console.log(result)



 
// Home made Min() 
// let students = [
//   { name: "Ali", marks: 85 },
//   { name: "Sara", marks: 92 },
//   { name: "Usman", marks: 78 },
//   { name: "Hira", marks: 95 },
//   { name: "Zain", marks: 88 }
// ];
// // ............Home made Max()...........
// function maxMarks(array){
//     let maxNum=students[0]
// for (let i = 0; i < array.length; i++) {
//     if (maxNum.marks<array[i].marks){
//         maxNum=array[i]
//     }
// }
//     return maxNum;
// }
// // ............Home made Min()......
// function minMarks(array){
//     let minNum=students[0]
// for (let i = 0; i < array.length; i++) {
//     if (minNum.marks>array[i].marks){
//         minNum=array[i]
//     }
// }
//     return minNum;
// }
// console.log(minMarks(students))
// console.log(maxMarks(students))


// let sorObj=cars.sort((a,b)=>{
//     let x=a.type.toLowerCase();
//     console.log(x)
//     let y=b.type.toLowerCase();
//     if(x<y){
//         return -1
//     }
//     if(x>y){
//         return 1
//     }

// })
// console.log(sorObj)