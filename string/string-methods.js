// String split()
// String length
// String concat()
// String [ ]
// String slice()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart(5,"0")
// String padEnd()
// String repeat()   => returns a new string with a number of copies of a string,doesn't change the original.



//string split
// let warn="Fahad";
// const resul=warn.split("a");
// console.log(resul)

// let warning="HELLLO"
// const arr1=warning.split("");
// let text=" ";
// for(let i=0;i<arr1.length;i++){
// text+=arr1[i]," "
// }
// console.log(text)

// // String length
// let element = "These are the \"js\" method";
// console.log(element.length)

// // instead of length-1 we use the at() to get it
// let element1 = "These are the \"js\" method";
// console.log(element1.at(-3))
// // String [ ]
// let element1 = "These are the \"js\" method";
// console.log(element1[3])
// // String concat()
// const firstName = "Shahab"
// const secondName = "Ahmad"
// const fullName = firstName.concat(" ", secondName)
// console.log(fullName)

// // .......String slice()........
// const str="Extract a part of \"string\" in a new string"
// const res=str.substr(8,30);
// const result0=str.substr(-35);
// console.log(result0)
// console.log(str)
// console.log(str.length)
// const result=str.slice(0,26)
// // if second parameter not passed it extract from first to onward
// const result1=str.slice(7)
// // extract from last
// const result2=str.slice(-23)
// const result3=str.slice(-23,-12)
// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)

// // String trim()
// const strElement="      Superior university     ";
// console.log(strElement.toUpperCase())
// console.log(strElement.toLowerCase())
// console.log(strElement.trim())
// console.log(strElement.trimStart())
// console.log(strElement.trimEnd())

// //string pad():  it is string function so first convert number into string then pad the number

// let number="5";
// let txt= number.toString();
// console.log(txt.padEnd(3,"0"))
// console.log(txt.padStart(3,"0"))

// let name = "Characteristics"
// let splitName = name.split("")
// console.log(splitName)


// let revName="";
// for(i=splitName.length-1;i>0;i--){
//     revName=revName.concat(splitName[i])
// }
// console.log(revName)




// var revName = "";


// for (let i = splitName.length - 1; i >= 0; --i) {
//     revName = revName.concat(splitName[i])
// }
// console.log(revName)

