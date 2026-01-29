//......Search method....//
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()
 
// return the index of substring of string
// let str="Hello here is the index checking function below here";
// console.log(str.indexOf("here",30))
// console.log(str.lastIndexOf("here"))

// // search() supprot regularexpression(regex) and return a string we can,t pass the second arguement to it like indexOf()
// console.log(str.search("here"))
// console.log(str.search(/Here/i)) //insensitive=> / /i

// // return true if value is present otherwise false
// console.log(str.includes("Hello"))
// // console.log(str.includes("Hello",7))

// console.log(str.startsWith("js"))
// console.log(str.endsWith("here"))

let strElement= "cat is a good cat";
// console.log(strElement.match("cat"))
let matches=strElement.matchAll("cat")
for(let match of matches){
    console.log(match[0])
}
// console.log(Array.from(matches))
// let str="this is testing of creating a string"
// let include=str.includes("creating") 
// if(include){
    
//     let result=  str.replace("creating","updating")
//     console.log(result)
// }
// else
// {
//     throw new Error("invalid")
// }


//let regex = /^(?:\+92|0)?3\d{2}-?\d{7}$/;
