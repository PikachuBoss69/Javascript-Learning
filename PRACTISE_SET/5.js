//Create an array of numbers and take input from the user to add numbers to this array.

const prompt = require('prompt-sync')({ sigint: true });

const arr =[];

let n = prompt("Enter the number of elements : ");
for(let i = 0;i<n;i++){
    arr[i]=parseInt(prompt())
}
console.log(arr)

//Keep adding numbers to the array in until 0 is added to the array

const arr1 =[];
let i = 0; 
while(arr1[i-1]!=0){
    arr1[i]=parseInt(prompt())
    i++;
}
console.log(arr1)


//Filter for numbers divisible by 10 from a given array.

const arr2 = [1,2,3,4,5,10,20,30];
const newarr = arr2.filter(num => num % 10 === 0)

console.log(newarr)

// Use reduce to calculate the factorial of a given number n from an array of the first n natural numbers.
const array =[];
let n3 = parseInt(prompt("Value of n : "));
for(let i = 0 ; i<n3;i++){
    array[i]=i+1;
}
const result = array.reduce((accumulator, currentValue)=> {
  return accumulator * currentValue; 
}, 1);
console.log(result)

//Create an array of squares of given numbers.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers)
const squares = numbers.map(num => num * num);
console.log(squares);

