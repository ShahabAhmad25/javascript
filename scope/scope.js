// --- HOISTING ---
console.log(greetVar); // Outputs: undefined (Hoisted, but uninitialized)
var greetVar = "Hi from var";

// console.log(greetLet); // ReferenceError! (In "Temporal Dead Zone")
let greetLet = "Hi from let";

// --- SCOPE ---
let globalVar = "I'm everywhere!";

function scopeTest() {
    let functionVar = "I'm stuck in this function";
    
    if (true) {
        var blockVar = "I escape blocks!"; // var is function-scoped
        let blockLet = "I'm trapped in this block"; // let/const are block-scoped
    }
    
    console.log(blockVar); // Works!
    // console.log(blockLet); // ReferenceError
}

scopeTest();