// JavaScript Practice File: All String Methods
// Run in VS Code using: node practice.js

// =========================================
// 1. toUpperCase()
// =========================================
let name = "laiba";
let upperName = name.toUpperCase();
console.log("toUpperCase():", upperName);

// =========================================
// 2. toLowerCase()
// =========================================
let text = "HELLO WORLD";
let lowerText = text.toLowerCase();
console.log("toLowerCase():", lowerText);

// =========================================
// 3. trim()
// =========================================
let message = "   hello   ";
let trimmed = message.trim();
console.log("trim():", trimmed);

// =========================================
// 4. slice()
// =========================================
let word1 = "javascript";
let sliced = word1.slice(0, 4);
console.log("slice():", sliced);

// =========================================
// 5. substring()
// =========================================
let word2 = "programming";
let sub = word2.substring(0, 6);
console.log("substring():", sub);

// =========================================
// 6. replace()
// =========================================
let sentence = "I like cats";
let newSentence = sentence.replace("cats", "dogs");
console.log("replace():", newSentence);

// =========================================
// 7. includes()
// =========================================
let checkText = "javascript is fun";
let hasWord = checkText.includes("fun");
console.log("includes():", hasWord);

// =========================================
// 8. indexOf()
// =========================================
let findText = "hello world";
let position = findText.indexOf("world");
console.log("indexOf():", position);

// =========================================
// 9. split()
// =========================================
let data = "apple,banana,mango";
let arr = data.split(",");
console.log("split():", arr);

// =========================================
// 10. concat()
// =========================================
let first = "Hello";
let second = "World";
let combined = first.concat(" ", second);
console.log("concat():", combined);

// =========================================
// BONUS PRACTICE TASKS
// =========================================

// Task 1: Convert your city name to uppercase
let city = "faisalabad";
console.log("City Upper:", city.toUpperCase());

// Task 2: Convert your name to lowercase
let yourName = "LAIBA";
console.log("Name Lower:", yourName.toLowerCase());

// Task 3: Remove spaces
let spaced = "   JS is easy   ";
console.log("Trimmed:", spaced.trim());

// Task 4: Extract "code" from "coding"
let coding = "coding";
console.log("Slice practice:", coding.slice(0, 4));

// Task 5: Replace word
let line = "I love tea";
console.log("Replace practice:", line.replace("tea", "coffee"));

// Task 6: Check word exists
console.log("Includes practice:", "I love JS".includes("JS"));

// Task 7: Find position
console.log("IndexOf practice:", "banana".indexOf("na"));

// Task 8: Convert string to array
console.log("Split practice:", "a-b-c".split("-"));

// Task 9: Join two strings
console.log("Concat practice:", "Hello".concat(" ", "Laiba"));

