// students.forEach((student) => {
//     let sum =0;
//     student.scores.forEach((score)=>{sum+=score})

//     console.log(`${student.name} total score is: ${sum}`)
// });


// .........Print even numbers using forEach.........//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//..........method 1:
//  let result=arr.forEach((number)=>{
//   if (number%2==0) {
//     console.log(number)
//   }
//  })

//.........method 2:
//..using the function...//
// calculateEven(arr)
// function calculateEven(array) {
//   array.forEach((number) => {
//     if (number % 2 == 0) {
//       console.log(number)
//     }
//   })
// }
//..........method 3:
//  let result=arr.forEach((number,index)=>{
//   if (number%2==0) {
//     console.log(`index of digit is ${index} and value is ${number}`)
//   }
//  })
//  console.log(result)
 
// .......... Count vowels using for...of...........
// let str="JavaScript";
// const vowels=["a","e","i","o","u"]
// let counter=0
// for(let vowel of vowels){
// for(let char of str){
// if(char == vowel)
//   counter+=1;
// }
// }
// console.log(counter)

//....method 2,,,,,,//
// let vowels="aeiou";
// for(let char of str){
//   if(vowels.includes(char))
//     counter++
// }
// console.log(counter)


// .......... Count consonents using for...of...........
// let str = "JavaScript is fun";;
// let vowels="aeiou"
// let counter=0;
// for(let char of str.toLowerCase()){
//   if(!vowels.includes(char))
//     counter++
// }
// console.log(counter)

// C) Tricky for...in vs for...of output
// D) Reverse loop (5 → 1)


// let numbers = [2, 4, 6, 8, 10];
// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
// }

// console.log("Sum:", sum);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
