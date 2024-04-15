Q1 //counterFunc() to arrow function
let counterFunc = counter => {
    if (counter > 100) {
        counter = 0;
    } else {
        counter++;
    }
    return counter;
}
console.log(counterFunc(101));
console.log(counterFunc(50));

Q2 //nameAge function() to arrow function
let nameAge = (name, age) => {
    console.log("Hello, I'm" + " " + name);
    console.log("I am" + " " + age + " " + "years old.");
}
nameAge("Mary", 46);

Q3 //printOnly() to arrow function
let printOnly = () =>
    console.log("printing");
printOnly();

Q4//Code challenge JS
//reverseString() to arrow function
// In JavaScript, there is no built-in method to reverse a string.
// There is however, a built-in method to reverse an array.
// 1. split()
// So the first step is convert our string into an array using 
// the built-in method split().
// 2. reverse()
// Now that we have an array of letters. We can call the built-in
// method, to reverse the array order, called reverse().
// 3. join()
// Now that our array contains the reversed letters.
// Let's convert the array back into a string using the the built-in method join()
let reverseString = str => str.split("").reverse("").join("");
console.log(reverseString("John"));

Q1 //Write an arrow function expression called greet()
let greet = name => "Hi " + name + "!";
// let greet = (name) => `Hi ${name}!`; // using a placeholder

console.log(greet("John"));
console.log(greet("James"));

Q2 //Convert the function isEven() into an equivalent arrow function.

let isEven = num => num % 2 === 0;

console.log(isEven(4)); // true. 4 is an even number.
console.log(isEven(5)); // false. 5 is not an even number.

Q6 //Write a function expression called mostExpensiveItem()
const items = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.4, stock: 38 },
    { item: "7up", price: 3.99, stock: 42 },
];

const mostExpensiveItem = (array) => {
    // Empty object to add the most expensive item
    let mostExpensiveItemObj = {};
    // Cost tied up on the most expensive item
    let mostExpensiveItemCost = 0;
    // For loop to loop through the array of items
    for (let i = 0; i < array.length; i++) {
        // Calculate the cost tied up on a single item
        const costTiedUpSingleItem = array[i].price * array[i].stock;

        // Check the most expensive item
        if (costTiedUpSingleItem > mostExpensiveItemCost) {
            mostExpensiveItemCost = costTiedUpSingleItem;
            mostExpensiveItemObj = array[i];
        }
    }

    return mostExpensiveItemObj;
};
console.log(mostExpensiveItem(items));

//Write a function expression called reverseArray()
// In JavaScript, there a built-in method to reverse an array called reverse()
// Creating a method to reverse an array using reverse()
const reverseArray = (array) => array.reverse();

// Creating a method to reverse an array without using reverse()
const reverseArray2 = (array) => {
    // New array to put the reversed elements into
    const newArray = [];

    // For loop to add elements into the array using unshift()
    //   for (let i = 0; i < array.length; i++) {
    //     // Add to the start of the array
    //     newArray.unshift(array[i]);
    //}

    // For loop to add elements into the array using push()
    for (let i = array.length - 1; i >= 0; i--) {
        // Add to the end of the array
        newArray.push(array[i]);
    }

    return newArray;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["I", "like", "JavaScript"]));
console.log(reverseArray2([1, 2, 3, 4, 5]));
console.log(reverseArray2(["I", "like", "JavaScript"]));


// Q6 Write the arrow function from sum function
let sum = (num1, num2) => num1 + num2;

console.log(sum(10, 10)); // will output 20


