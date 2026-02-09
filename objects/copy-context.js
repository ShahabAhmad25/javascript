// A shallow copy  =>copies the reference, not the actual object.If you change the copied object, original object also changes
//A deep copy      =>creates a completely new object in memory. Changes in copied object do not affect original.
// Use-Case        =>Editing user profile form, Undo/Redo functionality, State management (React, Redux)
// JSON.parse(JSON.stringify()):   Removes functions,Removes undefined
// | `call`  | Borrow methods              |
// | `apply` | Math operations with arrays |
// | `bind`  | Event handlers, React       |


//.........call,apply,bind.......

// function introduction(subject){
// console.log(this.name +" teaches "+ subject)
// }
// let teacher1={name:"Shahroz"}
// let teacher2={name:"Rimsha"}

// introduction.call(teacher1,"Web dev");
// introduction.call(teacher2,"OOP");
// introduction.apply(teacher2,["OOPS"]);


// let BindFunc= introduction.bind(teacher1,"Mobile app")
// BindFunc();


//............shallow and deep copy....
let student={
    name:"Shahab",
    skills:[1,2,3]
}
// Shallow copy
let student1=student;
//  Deep copy
 // let student1=JSON.parse(JSON.stringify(student));
student1.skills.push("React")
console.log(student.skills)



