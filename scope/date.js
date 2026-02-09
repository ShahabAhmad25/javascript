const now = new Date();

// 2. Formatting into a readable string
const readable = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
console.log(`Today is: ${readable}`);

// 3. Extracting specific parts
const year = now.getFullYear();
const month = now.getMonth() + 1; // Adding 1 because Jan is 0
const day = now.getDate();

console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);