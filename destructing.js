// Destructuring Assignment is a JavaScript expression that allows to unpack of values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, and nested objects, and assigned to variables.

// Array Destructuring
// Array members can be unpacked into different variables. The following are different examples.




const a = [10, 20, 30, 40]
​
console.log("Example 1");
const [x, y, z, w] = a;
console.log(x);
console.log(y);
console.log(z);
console.log(w);
​
const [p, q, , r] = a;
console.log("Example 2");
console.log(p);
console.log(q);
console.log(r);
​
const [s, t] = a;
console.log("Example 3");
console.log(s);
console.log(t);

// Output
// Example 1
// 10
// 20
// 30
// 40
// Example 2
// 10
// 20
// 40
// Example 3
// 10
// 20
// Example with Rest Operator : In order to assign some array elements to variable and rest of the array elements to only a single variable can be achieved by using rest operator (...) as in below implementation. But one limitation of rest operator is that it works correctly only with the last elements implying a subarray cannot be obtained leaving the last element in the array. 




let [fst, , ...last] = ["a", "b", "c", "d"];
​
console.log(fst);
console.log(last);

Output
a
[ 'c', 'd' ]
// Example of Swapping : Values can be swapped using destructuring assignment as below: 




let x = 10, y = 20;
​
// Swapping 
[x, y] = [y, x];
​
console.log(x);
console.log(y);

// Output
// 20
// 10
// Example of Function Return: Data can also be extracted from an array returned from a function. One advantage of using a destructuring assignment is that there is no need to manipulate an entire object in a function but just the fields that are required can be copied inside the function. 




function NamesList() {
    return ["a", "b", "c", "d"]
}
​
let [fst, snd] = NamesList();
​
console.log(fst);
console.log(snd);

// Output
// a
// b
// Example 6: In ES5 to assign variables from objects its implementation is 




let marks = { x: 21, y: -34, z: 47 };
​
const { x, y, z } = marks;
​
console.log(x);
console.log(y);
console.log(z);

// Output
// 21
// -34
// 47
// Object destructuring
// Simple Object destructuring : In the below examplex, properties (and their values) of an object are assigned to variables.




({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

Output
10
20



({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}

// Output
// 10
// 20
// { m: 30, n: 40 }
// Nesyed Object destructuring : The Nested objects can also be destructured using destructuring syntax. 




const marks = {
    section1: { alpha: 15, beta: 16 },
    section2: { alpha: -31, beta: 19 }
};
const { section1: { alpha: alpha1, beta: beta1 } } = marks;
console.log(alpha1, beta1);

// Output
// 15 16



let obj = {
    name: "GFG",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "820800",
            article: {
                topic: "destructuring"
            }
        }
    }
}
​
let { name } = obj;
console.log(name)
​
let { add: { country: abcd } } = obj
console.log(abcd)
​
let { add: { state: { code: cd } } } = obj
console.log(cd)
​
let { add: { state: { article: { topic: ef } } } } = obj
console.log(ef);

// Output
// GFG
// India
// JS
// destructuring