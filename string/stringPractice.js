// Task 1: Get the length of this string
// Task 2: Convert it to uppercase and lowercase
// Task 3: Get the first and last character
// Task 4: Get substring "Script" using slice, substring
// Task 5: Replace "fun" with "awesome"
//Task 6: Reverse this string using split + reverse + join
//Task 7: Split "I love JS" into words, store in array
//Task 8: Join array ["I", "love", "JS"] back into string with
// Task 9: Find the index of "JS" in "I love JS and JS is fun"
// Task 10: Find the last index of "JS
// Task 11: Check if string includes "love"
// Task 12: Check if string starts with "I" and ends with "fun"
// Task 13: Search for "JS" using search()



let str = "JavaScript is fun";
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.slice(4,10))
console.log(str.substring(4,11))

let Ename = "Fahad";
let reverseEname=Ename.split("").reverse().join("")
console.log(reverseEname)

let jsArray=["I", "love", "JS"];
let backToString=jsArray.join(" ")
console.log(backToString)

// let  newString="I love JS and JS is fun"
// console.log(newString.indexOf("JS"))
// console.log(newString.lastIndexOf("JS"))
// console.log(newString.includes("love"))
// console.log(newString.startsWith("I"))
// console.log(newString.endsWith("fun"))
// console.log(newString.search(/Js/gi))

//...... Regex Practice ..........

// Task 14: Match all "JS" occurrences using match()
// Task 15: Match all letters in "I love JS123"
// Task 16: Match all numbers in "I love JS123 and HTML456"


// Task 17: Check if "03011234567" is a valid PKR phone number using regex
// let numbers = [
//     "03011234567",
//     "0301-1234567",
//     "+923011234567",
//     "+92-301-1234567",
//     "0312-7654321",
//     "0412-1234567"   // invalid
// ];

// let regex = /^(?:\+92|0)?3\d{2}-?\d{7}$/;

// numbers.forEach(num => {
//     console.log(num, "=>", regex.test(num));
// });







// let str="shahab";
// let spli =str.split("")
// let narray=[]
// for(let i=spli.length-1;i>=0;i--){
//  narray.push(spli[i])
// }
// const results=narray.join("")
// console.log(results)




// ... Given a string, print each character on a new line using a for loop.

// let strin = "Hello";
// for (let i = 0; i < strin.length; i++) {
//     if (i === 0)
//         console.log(strin[i])
//     else if (i === strin.length - 1)
//         console.log(strin[i])
// }


// let strin = "Hello"
// count=0
// for(let char of strin){
// count++;
// }
// console.log(count)
// let str = "Shahab";
// console.log(str[str.length-2 ])

// let number="5";
// let txt= number.toString();
// console.log(txt.padEnd(3,"0"))



// let str="shahab";
// let spli =str.split("")
// let narray=[]
// for(let i=spli.length-1;i>=0;i--){
//  narray.push(spli[i])
// }
// const results=narray.join("")
// console.log(results)


// let namer="ShahabAhmad";
// let result= namer.split("").reverse().join("");
// console.log(result);



// let x = 'Having fun?';
// // const resultant=x.substring(7,9);
// const resultant=x.length;
// console.log (resultant)


// let text = "cat bat cat rat cat";
// let result = [...text.matchAll("cat")]
// console.log(result)

// let text1 = "cat bat cat rat cat";
// let resultant = [...text1.match("cat")]
// console.log(resultant)







