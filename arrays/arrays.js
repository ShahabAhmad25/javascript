let arr=["Bravo","Shahab","Alyan",45]
// let result= arr[arr.length-3]
// let result= arr.concat("Bismillah")
// let result= arr.copyWithin(1,0,2)
// let result= arr.slice(2,3)
// let result= arr.toSpliced(2,2)
// let result= numbers.find(searchFunc)
let numbers=[3,4,56,7,8,90,12]
let searchFunc=((value)=>{
return value>10
})
// let result= numbers.sort().findLast(searchFunc)
let result= numbers.sort().findLast(searchFunc)
let maxNum=Math.min(...numbers)
console.log(result)
console.log(maxNum)
// delete arr[1];
// console.log(arr)


// let arr=["Bravo","Shahab","Alyan",45]
// arr[0]="Gayle"
// console.log(arr)


//for-each loop//
// let nameArray=["Bravo","Shahab","Alyan",45]
// let text=""
// nameArray.forEach((value)=>{
// text+= " "+value
// }
// )
//   console.log(text)  


  