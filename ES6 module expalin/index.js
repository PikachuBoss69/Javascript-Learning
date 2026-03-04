// ES6 Module
// An external file that contains reusable code
// It can contain variables, classes, functions, etc.
// Introduced in ECMAScript 2015 (ES6)

import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

console.log(`PI: ${PI}`);

const radius = 10;

const circumference = getCircumference(radius);
const area = getArea(radius);
const volume = getVolume(radius);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm²`);
console.log(`${volume.toFixed(2)} cm³`);