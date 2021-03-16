// What will be printed if we run the previous code snippet?
let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}
// What should be changed to get 1 printed to the console?
let b = 7;
if (b) {
  console.log(1);
} else {
  console.log('Please, define b.')
}
//:-)

// Create a loop which prints the numbers from 0-9.

for (let i = 0; i < 10; i++){
  console.log(i);
}
// Change the previous loop to print the numbers from 1 to 10.
for (let j = 1; j < 11; j++){
  console.log(j);
}
// Print the even numbers between 0 and 20.
for (let k = 0; k < 20; k++){
  if (k % 2 === 0) {
    console.log(k);
  }
}

// Use your previous for loops and create a function which print the first N numbers.

const firstNumbers = (finalNumber) => {
  for (let num = 1; num <= finalNumber; num++){
    console.log(num);
  }
}

firstNumbers(3);

// Create a function which gets a name as parameter and then returns a greeting to the specified person.

const greeting = (name) => {
  return `Hello ${name}!`
}

console.log(greeting('Pepa'));

// Create a function which gets an array as parameter and prints each value from it. (using loop)


const printArrayElement = (array) => {
  for (let element = 0; element < array.length; element++) {
    console.log(array[element]);
  }
}

printArrayElement([0,3,6,7,9]);

// Change your previous printValues function to use forEach loop.

const printArrayElement2 = (array2) => {
  array2.forEach(element2 => console.log(element2))
}

printArrayElement2([10,20,30,50,12]);

