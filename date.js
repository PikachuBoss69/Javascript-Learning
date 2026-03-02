// In JavaScript, the Date object is a built-in object that allows you to work with dates and times. It provides a variety of methods to handle dates, compare them, manipulate them, and format them.

// The Date object in JavaScript represents a single point in time. It provides various functionalities to work with dates and times like creating a Date object in several ways, and it allows you to perform operations like extracting parts of the date (year, month, day), comparing dates, and manipulating dates.

// Creating a Date Object
// You can create a Date object in multiple ways. Below are some of the most common methods:

// 1. Using the Default Date() Constructor
// The default constructor creates a Date object representing the current date and time.




const now = new Date();
console.log(now);

// Output
// 2025-01-16T04:25:58.204Z
new Date() //creates a Date object for the current date and time.
console.log(now) //prints the current date and time to the console.
// 2. Using a specific date string
// You can pass a date string to the constructor to create a Date object for a specific date and time.




const specificDate = new Date("2023-12-25T10:00:00");
console.log(specificDate);

// Output
// 2023-12-25T10:00:00.000Z
new Date("2023-12-25T10:00:00") //creates a date for December 25, 2023, at 10:00 AM.
console.log(specificDate) //shows the date and time: "2023-12-25T10:00:00".
// 3. Using Year, Month, and Other Parameters
// The Date constructor can also take individual parameters for year, month (0-indexed), day, hour, minute, second, and millisecond.

const anotherDate = new Date(2023, 11, 25, 10, 0, 0);
console.log(anotherDate);

// Output
// 2023-12-25T10:00:00.000Z
new Date(2023, 11, 25, 10, 0, 0)// creates a Date object for December 25, 2023, at 10:00 AM (months are 0-indexed, so 11 represents December).
console.log(anotherDate)// outputs the specified date and time: "2023-12-25T10:00:00.000".
// 4. Using Timestamps
// You can create a Date object from a timestamp (milliseconds since January 1, 1970).




const timestampDate = new Date(1672531200000);
console.log(timestampDate);

// Output
// 2023-01-01T00:00:00.000Z
new Date(1672531200000)// creates a Date object based on the number of milliseconds since January 1, 1970 (Unix Epoch).
console.log(timestampDate)// outputs the corresponding date and time for that timestamp, which is "2023-01-01T00:00:00.000Z".

// Getting Date and Time Components
// Once you have a Date object, you can easily extract various components like the year, month, day, hours, minutes, and seconds.

let cDate = new Date();
console.log(cDate.getFullYear()); // Gets the current year
console.log(cDate.getMonth());  // Gets the current month (0-indexed)
console.log(cDate.getDate());   // Gets the current day of the month
console.log(cDate.getHours());  // Gets the current hour
console.log(cDate.getMinutes()); // Gets the current minutes
console.log(cDate.getSeconds()); // Gets the current seconds

// Date Manipulation
// You can perform various date manipulations such as adding or subtracting days, months, or years to/from a specific date.

// Adding Days to a Date


let cDate = new Date();
cDate.setDate(cDate.getDate() + 5); // Adds 5 days to the current date
console.log(cDate);

// Comparing Dates
// JavaScript also allows you to compare two Date objects to check if they are equal or which one is earlier or later.
let date1 = new Date('2023-12-31');
let date2 = new Date('2024-01-01');
if (date1 < date2) {
    console.log('date1 is earlier than date2');
} else if (date1 > date2) {
    console.log('date1 is later than date2');
} else {
    console.log('Both dates are the same');
}
let date1 = new Date('2023-12-31');
let date2 = new Date('2024-01-01');
if (date1 < date2) {
    console.log('date1 is earlier than date2');
} else if (date1 > date2) {
    console.log('date1 is later than date2');
} else {
    console.log('Both dates are the same');
}
