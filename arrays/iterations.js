// const students = [
//   { name: "Ali", marks: 65 },
//   { name: "Sara", marks: 85 },
//   { name: "John", marks: 45 },
//   { name: "Emma", marks: 90 }
// ];
// let result =students.map(x=>{
//     return{
//         name:x.name,
//         status:x.marks>=50?"Pass":"Fail"
//     }
// })
// console.log(result)


//   Use flatMap() to create a single flat array that shows strings like:"Ali - Math"
// let students = [
//   { name: "Ali", courses: ["Math", "English"] },
//   { name: "Sara", courses: ["Biology", "Chemistry"] },
//   { name: "Usman", courses: ["Physics", "Math"] }
// ];
// let result =students.flatMap(student=>{
//     return student.courses.map(course => `${student.name} - ${course}`)

// })
// console.log(result);
// let numbers=[1,34,2,5,7,8]
// let result= numbers.filter(x=>{
//   return x>5
// })
// console.log(result)

// let result= numbers.reduce(sumNUmber)
// function sumNUmber(total,curr){
// return total+curr
// }
// console.log(result)

// let result= numbers.reduceRight(sumNUmber)
// function sumNUmber(total,curr){
// return total+curr
// }
// console.log(result)



const names = [
  "Zeeshan", "Areeba", "Yasir", "Gul", "Rehan", "Tania", "Owais", "Bushra", "Kashif", "Sumbul"
  , "Ali", "Ahmed", "Ayesha", "Fatima", "Hassan", "Hussain", "Zainab", "Bilal", "Sana", "Umar",
  "Ali", "Ahmed", "Ayesha", "Fatima", "Hassan", "Hussain", "Zainab", "Bilal", "Sana", "Umar",
  "Amna", "Farhan", "Nida", "Tariq", "Rabia", "Junaid", "Maham", "Usman", "Kiran", "Noman",
  "Saad", "Laiba", "Imran", "Sadia", "Kamran", "Hina", "Waqar", "Asma", "Danish", "Mariam",
  "Adnan", "Shazia", "Shahzaib", "Nimra", "Salman", "Mehwish", "Faizan", "Anum", "Waqas", "Iqra",
  "Zeeshan", "Areeba", "Yasir", "Gul", "Rehan", "Tania", "Owais", "Bushra", "Kashif", "Sumbul",
  "Ali", "Ahmed", "Ayesha", "Fatima", "Hassan", "Hussain", "Zainab", "Bilal", "Sana", "Umar",
  "Amna", "Farhan", "Nida", "Tariq", "Rabia", "Junaid", "Maham", "Usman", "Kiran", "Noman",
  "Saad", "Laiba", "Imran", "Sadia", "Kamran", "Hina", "Waqar", "Asma", "Danish", "Mariam",
  "Adnan", "Shazia", "Shahzaib", "Nimra", "Salman", "Mehwish", "Faizan", "Anum", "Waqas", "Iqra",
  "Zeeshan", "Areeba", "Yasir", "Gul", "Rehan", "Tania", "Owais", "Bushra", "Kashif", "Sumbul"
  , "Ali", "Ahmed", "Ayesha", "Fatima", "Hassan", "Hussain", "Zainab", "Bilal", "Sana", "Umar",
  "Amna", "Farhan", "Nida", "Tariq", "Rabia", "Junaid", "Maham", "Usman", "Kiran", "Noman",
  "Saad", "Laiba", "Imran", "Sadia", "Kamran", "Hina", "Waqar", "Asma", "Danish", "Mariam",
  "Adnan", "Shazia", "Shahzaib", "Nimra", "Salman", "Mehwish", "Faizan", "Anum", "Waqas", "Iqra",
  "Amna", "Farhan", "Nida", "Tariq", "Rabia", "Junaid", "Maham", "Usman", "Kiran", "Noman",
  "Saad", "Laiba", "Imran", "Sadia", "Kamran", "Hina", "Waqar", "Asma", "Danish", "Mariam",
  "Adnan", "Shazia", "Shahzaib", "Nimra", "Salman", "Mehwish", "Faizan", "Anum", "Waqas", "Iqra",
  "Zeeshan", "Areeba", "Yasir", "Gul", "Rehan", "Tania", "Owais", "Bushra", "Kashif", "Sumbul"
];

const excludedName = ["Farhan", "Nida", "Rehan", "Tania", "Owais", "Bushra"]

// //Write a function which takes the names as parameter and return the  uppercase name;  //map
// function nameUpper(names){
//   return names.map(name=>name.toUpperCase())

// }
// console.log(nameUpper(names))



//Write a function that takes the names and return the filtered names   // include and filter
// function FilteredNames(names, excludedName) {
//   let result = names.filter(name => !excludedName.includes(name))
//   console.log(result, result.length)
// }

let filtername=(names,excludedName)=>{
    let result=names.filter((name)=>!excludedName.includes(name))
    console.log(result,result.length+1)
}
console.log(filtername(names,excludedName))
// console.log(FilteredNames(names, excludedName))




// console.log(
//   names.reduce((initialValue, name) => {
//     let value = initialValue[name];
//     if (value) {
//       initialValue[name] = initialValue[name] + 1
//       initialValue = {
//         ...initialValue
//       }
//       return initialValue
//     }
//     else
//       return initialValue = {
//         ...initialValue,
//         [name]: 1
//       }
      


//   }, {})
// )

// if (value)
//   return initialValue[name]+=1
// else
//   return initialValue[name] = 1

