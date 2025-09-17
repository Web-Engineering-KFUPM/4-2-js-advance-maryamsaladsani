/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
class Student {

    constructor(firstName, lastName,gpa) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gpa = gpa;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set updateGpa(newGpa){
        if(newGpa >= 0 && newGpa <= 4.0){
            this.gpa = newGpa;
        }
        else {
            console.log("Invalid Gpa");
        }
    }
}

const student = new Student("Maryam", "Aladsani", 3.0)

console.log("Full Name: " + student.fullName); //Maryam Aladsani
console.log("Current GPA: " + student.gpa);   // 3.0

student.updateGpa = 4.0 // valid update
console.log("Updated GPA: " + student.gpa);   // 4.0

student.updateGpa = 5.0 // invalid update
console.log("Updated Gpa: " + student.gpa);   //4.0

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/

const Courses = {
    SWE363: "Web Engineering and Development",
    SWE316: "Software Design",
    MATH101: "Calculus I"
}

for (let key in Courses) {
    console.log(`${key} : ${Courses[key]}`);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const fullName = "Maryam Aladsani";
console.log("The length of [" + fullName + "] is: " + fullName.length)

for (index = 0; index < fullName.length; index++) {
    console.log("Character at index: " + index + ", " + fullName.charAt(index));
}

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/

const now = new Date();
console.log("Date: " + now.getDate())
console.log("Year: " + now.getFullYear())
console.log("Month: ", now.getMonth() + 1 )

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const numbers = [23, 5, 89, 12, 47, 3, 78, 34, 99, 15];

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log("Values are: " + numbers);
console.log("Minimum value: " + minValue);
console.log("Maximum value: " + maxValue);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block, so you can see the flow of control.
*/

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
