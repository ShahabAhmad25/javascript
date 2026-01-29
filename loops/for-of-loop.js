// const scores = [10, 20, 30, 40];
// for (let [index, value] of scores.entries()) {
//     console.log("index", index, value)
// }


//use for-of and foreach. Output must be:
// Shahab total score: 60
// Ali total score: 75
// Sara total score: 90
const students = [
    { name: "Shahab", scores: [10, 20, 30] },
    { name: "Ali", scores: [15, 25, 35] },
    { name: "Sara", scores: [20, 30, 40] }
];
for (let student of students) {
    let sum = 0;
    student.scores.forEach(score => {
        sum = +score
    })
    console.log(`${student.name} total score is: ${sum}`)
}

//......................... uisng pure foreach()method:

// students.forEach((student) => {
//     let sum =0;
//     student.scores.forEach((score)=>{sum+=score})

//     console.log(`${student.name} total score is: ${sum}`)
// });
//.............uisng reduce instead of foreach()
// for (let student of students) {
//     let sum = student.scores.reduce((prev, curr) => { return prev + curr }, 0)
//     console.log(`${student.name} total score is: ${sum}`)
// }
