// ==========================================
// JAVASCRIPT NUMBER METHODS PRACTICE FILE
// Beginner Friendly - Run in VS Code
// ==========================================

// HOW TO RUN:
// 1. Save this file as: numberMethods.js
// 2. Open terminal in VS Code
// 3. Run: node numberMethods.js


// ==========================================
// 1. toString()
// ==========================================

console.log("\n===== 1. toString() =====");

let price = 500;

console.log("Original Number:", price);
console.log("Converted to String:", price.toString());

console.log(`
Question:
Convert 900 into string using toString()
Write your answer below:
`);

// Your Answer:
// let answer1 = ?


// Correct Solution:
let answer1 = 900.toString();

console.log("Correct Answer:", answer1);
console.log("Explanation: toString() converts number into text.");


// ==========================================
// 2. toFixed()
// ==========================================

console.log("\n===== 2. toFixed() =====");

let bill = 245.6789;

console.log("Original Bill:", bill);
console.log("2 Decimal Places:", bill.toFixed(2));

console.log(`
Question:
Convert 99.456 into 1 decimal place.
`);

// Your Answer:
// let answer2 = ?


// Correct Solution:
let answer2 = (99.456).toFixed(1);

console.log("Correct Answer:", answer2);
console.log("Explanation: toFixed() controls decimal places.");


// ==========================================
// 3. toPrecision()
// ==========================================

console.log("\n===== 3. toPrecision() =====");

let marks = 98.4567;

console.log("Original Marks:", marks);
console.log("4 Digits:", marks.toPrecision(4));

console.log(`
Question:
Use toPrecision(3) on 45.6789
`);

// Your Answer:
// let answer3 = ?


// Correct Solution:
let answer3 = (45.6789).toPrecision(3);

console.log("Correct Answer:", answer3);
console.log("Explanation: toPrecision() controls total digits.");


// ==========================================
// 4. Number()
// ==========================================

console.log("\n===== 4. Number() =====");

let stringPrice = "250";

console.log("Original Value:", stringPrice);
console.log("Converted Number:", Number(stringPrice));

console.log(`
Question:
Convert "700" into number.
`);

// Your Answer:
// let answer4 = ?


// Correct Solution:
let answer4 = Number("700");

console.log("Correct Answer:", answer4);
console.log("Explanation: Number() converts string into number.");


// ==========================================
// 5. parseInt()
// ==========================================

console.log("\n===== 5. parseInt() =====");

let weight = "78kg";

console.log("Original Value:", weight);
console.log("Integer Value:", parseInt(weight));

console.log(`
Question:
Use parseInt() on "45px"
`);

// Your Answer:
// let answer5 = ?


// Correct Solution:
let answer5 = parseInt("45px");

console.log("Correct Answer:", answer5);
console.log("Explanation: parseInt() extracts whole number.");


// ==========================================
// 6. parseFloat()
// ==========================================

console.log("\n===== 6. parseFloat() =====");

let discount = "12.5%";

console.log("Original Value:", discount);
console.log("Decimal Value:", parseFloat(discount));

console.log(`
Question:
Use parseFloat() on "99.99rs"
`);

// Your Answer:
// let answer6 = ?


// Correct Solution:
let answer6 = parseFloat("99.99rs");

console.log("Correct Answer:", answer6);
console.log("Explanation: parseFloat() extracts decimal number.");


// ==========================================
// 7. isNaN()
// ==========================================

console.log("\n===== 7. isNaN() =====");

console.log(isNaN("hello"));
console.log(isNaN(500));

console.log(`
Question:
What will isNaN("123") return?
`);

// Correct Solution:
let answer7 = isNaN("123");

console.log("Correct Answer:", answer7);
console.log("Explanation: '123' is a valid number.");


// ==========================================
// 8. isFinite()
// ==========================================

console.log("\n===== 8. isFinite() =====");

console.log(isFinite(200));
console.log(isFinite(Infinity));

console.log(`
Question:
What will isFinite(999) return?
`);

// Correct Solution:
let answer8 = isFinite(999);

console.log("Correct Answer:", answer8);
console.log("Explanation: 999 is a finite number.");


// ==========================================
// 9. Math.round()
// ==========================================

console.log("\n===== 9. Math.round() =====");

let total = 19.6;

console.log("Original:", total);
console.log("Rounded:", Math.round(total));

console.log(`
Question:
Round 7.4 using Math.round()
`);

// Your Answer:
// let answer9 = ?


// Correct Solution:
let answer9 = Math.round(7.4);

console.log("Correct Answer:", answer9);
console.log("Explanation: Math.round() rounds to nearest whole number.");


// ==========================================
// 10. Math.ceil()
// ==========================================

console.log("\n===== 10. Math.ceil() =====");

let roomPrice = 15.1;

console.log("Original:", roomPrice);
console.log("Ceil Value:", Math.ceil(roomPrice));

console.log(`
Question:
Use Math.ceil() on 8.2
`);

// Your Answer:
// let answer10 = ?


// Correct Solution:
let answer10 = Math.ceil(8.2);

console.log("Correct Answer:", answer10);
console.log("Explanation: Math.ceil() always rounds UP.");


// ==========================================
// COMBINED EXAMPLE 1
// ==========================================

console.log("\n===== Combined Example 1 =====");

let mobilePrice = "49999.789";

let finalPrice = Number(mobilePrice).toFixed(2);

console.log("Final Mobile Price:", finalPrice);


// ==========================================
// COMBINED EXAMPLE 2
// ==========================================

console.log("\n===== Combined Example 2 =====");

let pizzaBill = "899.67rs";

let cleanBill = parseFloat(pizzaBill);

console.log("Rounded Bill:", Math.round(cleanBill));


// ==========================================
// FINAL PRACTICE PROBLEM
// ==========================================

console.log("\n===== FINAL PRACTICE PROBLEM =====");

console.log(`
Problem:

A product price is:
"1450.789rs"

Tasks:
1. Extract the number
2. Round it to 2 decimal places
3. Convert final answer into string

Try it yourself first!
`);


// ==========================================
// FINAL ANSWER
// ==========================================

let productPrice = "1450.789rs";

let extracted = parseFloat(productPrice);

let fixedPrice = extracted.toFixed(2);

let finalString = fixedPrice.toString();

console.log("\nCorrect Final Answer:", finalString);

console.log(`
Explanation:
parseFloat() -> extracts number
toFixed(2) -> keeps 2 decimal places
toString() -> converts into string
`);


// ==========================================
// END
// ==========================================

console.log("\n🎉 Practice Completed!");