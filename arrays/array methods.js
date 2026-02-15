// // Array length                         => check the length of the array or fixed the length
// // Array toString()                     => convert  array to string
// // Array at()                           => to get the indexed element like arr[0]     
// // Array join()                         => to join the elements of arrays not the arrays
// // Array pop()                          => pop out the element from arrays from last
// // Array push()                         => push the element at the current index of array
// // Array shift()                        => to remove the  first element of an array and shift others to lower indexed
// // Array unshift()                      => to add the new element (at the beginning) and unshift older elements
// // Array delete()                       => delete the element or array but use unshift()or pop() method instead
// // Array concat()                       => to join the two or more arrays  
// // Array copyWithin( target,start,end)  => copy array element to another position in an array.overwrite the existing element
// // Array flat()                         => creates a new array with sub-array elements concatenated to a specified depth. flat(depth//2//))
// // Array flatMap()                      =>method first maps all elements of an array and then creates a new array by flattening the array.
// // Array splice()                       =>add the items at given position | remove element at given position good instead of delete()
// // Array toSpliced()                    =>similar to  splice but return the new array
// // Array slice()                        =>slice out a piece of array into a new array

// // let arr=[]

// const arrayz=[];
// let arr = ["Bravo", "Shahab", "Alyan", 45];
// let del= arr.slice(1,3);
// let del= arr.toSpliced(1,3);
//  console.log(del)
//  console.log(arr)

//  console.log()
//  console.log(arr)
// // Array length ................
// arr.length = 2;

// console.log(arr.length)
// // Array toString()............
// console.log(arr.toString())
// Array at()  ..............
// console.log(arr.at(1))
// // Array push() ................

// // Array pop()...............
// let delString = arr.pop()
// // Array shift()...............
// let adString = arr.shift()
// // Array unshift()...............
// let delString = arr.unshift("Rumaisa")
// let joinString= arr.join(",")
// console.log(joinString)
// delete arr[1]

// let result = arr.copyWithin(2, 0)
// console.log(result)

// console.log(Array.isArray(arr))   // => to check it is array or not it return true or false


// //...........flatMap().....//
// // Task:
// // Use flatMap() to split each sentence into words and create a flat array of all words.
// let sentences = ["I love JS", ["first index array", ["Hello world", "JS is fun"]], "Learn JS daily"];
// const flatMapArray = sentences.flatMap(test => [test])
// console.log({ flatMapArray })
// // let splitSen = sentences.flatMap(sentence => sentence.split(" "))
// // console.log(splitSen)


// // flat()
// let nestedArr = [1, [2, 3], [4, [5, [1, 2, 6]]], 7];
// let toFlat = nestedArr.flat(2)
// console.log(toFlat)


// //splice()
//  let arr = ["Bravo", "Shahab", "Alyan", 45]
// let output = arr.splice(1, 2, "Aftab", "ALi") //alter the original array
// let outputSplice = arr.toSpliced(1, 2, "Aftab", "Ahmad")//return the new array. So console outputSplice
// console.log(outputSplice)
// console.log(arr)

// let array = ["Bravo", "Shahab", "Alyan", 45]
// let sli = array.slice(1, 3)
// console.log(sli)


//.....................String Splitting Example....................//
// let words = ['hello world', 'javascript rocks'];
// let letters = words.flatMap(word => word.split(''));
// console.log(letters);  // ['h','e','l','l','o',' ','w','o','r','l','d','j','a','v','a','s','c','r','i','p','t',' ','r','o','c','k','s']
// Splits each word into letters and flattens into a single array.
// ​

// ...............Object Transformation.........................//
// let users = [{name: 'Ali'}, {name: 'Sara'}];
// let details = users.flatMap(user => [user, {email: `${user.name}@example.com`}]);
// console.log(details);  // [{name: 'Ali'}, {email: 'Ali@example.com'}, {name: 'Sara'}, {email: 'Sara@example.com'}]
// Expands each user object into user + derived email object

let users=[{name:"shahab"},{name:"Sara"}];

