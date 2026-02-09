// Object.assign()         => is used to copy properties from one or more source objects into a target object. Object.assign(target,source)
// Object.create()         =>create object using the existing object
// const man = Object.create(person);
// Object.fromEntries()    =>method creates an object from iterable key / value pairs.make object from arrays
//Object.values(objName)   => creates an array from the property values
//Object.entries()         => makes it simple to use objects in loops: 

 //1️⃣ Loop through a fruits object and print each fruit with its value using Object.entries().
 const fruits = {Bananas:300, Oranges:200, Apples:500};
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "\n";
}
console.log(text)

// ...To add a new property, you must add it to the constructor function prototype:
// Example
// Person.prototype.nationality = "English";

// //2️⃣Convert an array of scores into an object using Object.fromEntries().
let scores = [
  ["Ali", 85],
  ["Sara", 92],
  ["Usman", 78],
  ["Ayesha", 88]
];
const result=Object.fromEntries(scores)
console.log(result)

 //3️⃣ Merge defaultSettings and userSettings using Object.assign() without modifying the original objects.
const defaultSettings = {
  theme: "light",
  notifications: true,
  fontSize: "medium"
};
const userSettings = {
  theme: "dark",
  fontSize: "large"
};
const finalSettings=Object.assign({},defaultSettings,userSettings) //use {} to remain the target element remains same
console.log(finalSettings)

//4️⃣Create a Person constructor with fullName() and changeName() methods using prototype and test multiple instances.
function Person(first,last,age,eyecolor){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyecolor=eyecolor;
    this.haircolor="black"
}
Person.prototype.fullName=function(){
    return this.firstName +" "+this.lastName;
}
const father=new Person("mian","g",66,"red","")
console.log(father.fullName())


const mother=new Person("maa","g",50,"green")
console.log(mother.fullName())
Person.prototype.changeName = function (name) {
  this.lastName = name;
}
mother.changeName("aunti")
console.log(mother.lastName)

//.....................Examples................

// Object.freeze() → prevent modifications
// let newObj={
//     "Name":"Shahab",
//     "age":"25",
//     "education":"BSSE",
// };
// let result=Object.freeze(newObj)
// console.log(result)


// const secondObj= Object.create(newObj)
// secondObj.Name="Alyan"
// let fruits=[
//    ["Apple",200],
//     ["Banana",300],
//     ["pears",400],
// ]
// const Obj=Object.fromEntries(fruits)
// console.log(Obj)
// let result=`${newObj.Name} ${newObj.age} ${newObj.education} `
// console.log(result)



// let person={
//     firstName:"Shahab",
//     lastName:"Ahmad",
//     age:25
// }
// person.email="abc@gmail.com"
// // console.log(person.firstName +" "+person.lastName+" "+ person.age+" "+person.email)
// let objKey= Object.values(person)
//  console.log(objKey)
// ..Why does objKey[x] fail when objKey = Object.values(person) in a for-of loop?
//  function keyvalues(objKey){
//      let arr=[];
// for(let x of objKey){
//     console.log(x)
//   console.log( objKey[x],person[x])
// arr.push(person[x])
// }
// console.log(arr)
//  }

//  keyvalues(objKey);


//.............  here is the solution..........

// function keyvalues(person) {  // Pass object directly
//     let arr = [];
//     for(let i = 0; i < Object.keys(person).length; i++) {
//         console.log(person[Object.entries(person)[i]]);  // Or use entries()
//         arr.push(person[Object.keys(person)[i]]);
//     }
//     console.log(arr);
// }
// keyvalues(person);  // ['Shahab', 'Ahmad', 25, 'abc@gmail.com']


//.........Constructor Function & Arrow Functions........
// function Student(name, marks) {
//   this.name = name;
//   this.marks = marks;

//   this.getResult = () => {
//     return this.name + " scored " + this.marks;
//   };
// }
// const s1 = new Student("Ali", 85);
// const s2 = new Student("Ahmed", 90);
// console.log(s1.getResult());
// console.log(s2.getResult());
// console.log(Student === s1);
// console.log(typeof Student);


// function human(first,last,age,eyecolor){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.eyecolor=eyecolor;
//     this.haircolor="black"
//     this.fullName=function (){
//  return this.firstName +" "+this.lastName
//     };
// }
// const uncle=new human("mian","g",66,"red","")

// console.log(uncle)
