

// 1️⃣ Round a number to specific decimal places
let price = 299.789;
console.log(price.toFixed(2))

// 2️⃣ Extract numbers from strings like "100px"
let resolution = "1080px"
let totalSales = "55.9percent"
console.log(Number.parseInt(resolution))
console.log(Number.parseFloat(totalSales))

// 3️⃣ Convert string numbers into actual numeric values
let totalProfit = "99.47"
console.log(typeof (totalProfit))
console.log(Number(totalProfit))//now type is number

// 4️⃣ check is it possible to add the string to a number.
const calculation = "Hello" * 5;
console.log(calculation) //NO

//  5️⃣ check the number is precise.    
// Number.MAX_SAFE_INTEGER: The highest number JS can handle safely.
// Number.isSafeInteger(): Checks if the number is within that safe range.
const massiveID = 9007199254740991 + 2;
console.log(Number.isSafeInteger(massiveID)); 


const bigNumber = 1250000.75;
// Basic format (adds commas)
console.log(bigNumber.toLocaleString()); 
// Currency formatting
console.log(bigNumber.toLocaleString('en-US', { style: 'currency', currency: 'AED' }));


let a = 10n;
let b = 20;
console.log(a + BigInt(b));

let price1 = "0.1";
let price2 = 0.2;
// Add them
let sum = price1Conv + price2;
console.log("Sum:", sum);

//Question to solve
let num = "45.67px";
console.log(parseInt(num) + parseFloat(num));




