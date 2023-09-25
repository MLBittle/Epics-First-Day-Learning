
//Basics and Primitives Video

// Primitives: number, string, boolean, null, undefined
// More complex types: arrays, objects
// Function types, parameters

// Primitives ( use lower case)

let age: number; // can assign a value here after number = 24;

age = 12.1; //works

age = '12'; // error, because a string is not a number


let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;



// Arrays and Objects Video

// More complex types
//Arrays

let hobbies: string[]; //can also do an array of numbers or booleans using the []

hobbies = ['sports', 'cooking', 12]; // would get an error the 12 is not a string

//Objects


let person; //assumes 'any' , try not to use that word as it defeats the puppose of TS

let person: {  // better option
  name: string; // tells TS what types of persons
  age: number;
};

person = {
  name: 'Max', // this object has exactly the structure above
  age: 32
};


//person = {
//  isEmployee: true // this object 9boolean) does NOT have the correct structure and will not be stored
//};


//Combining types

let people: {
  name: string;
  age: number;
}[];

//=========================================================
//Video 6 Type Inference 

let course = "React - The Complete Guide";

course = 12341; //error trype 'number' is not assignable to type 'string'


// TypeScript tries to infer what your are doing. It will see the words above and assign it as a string variable.

//======================================================

//Video 7 Union types


let course: string | number = "React - The Complete Guide";

course 12341; // Now it works! 

let userName: string | string[];

// ==========================================================
// Video 8 Assigning Type Aliases

let  people: {
  name: string;
  age:  number
}[];               //array form

type Person = {
  name: string;  //This is the Alias
  age:  number
}

let person: {
  name: string;
  age: number;
  }     
// now can use let person: Person; or let people: Person[]


//=========================================================

// Video 9 Diving Into Functions & Function Types

// When working with functions, there are different places wher types can be assigned.

function add(a, b) {}

// can set types for variables and parameters and returns.

function add(a: number, b: number) {
  return a + b;  //TS infers this will be a number.
}

function print(value: any) {
  console.log(value); 
    } 
  
  // will get an error becaue of the built in value funciton in JS. Call it print output.  This function does not have a return. It is void.

//===========================================================
 Video 10 Understanding Generics - we don't care what the array is.    

 function insertAtBeginning(array: any[], value: any) {
const newArray = [value, ...array];
return newArray;
 }

 const demoArray = [1, 2, 3];
 const updatedArray = insertAtBeginning(demoArray, -1);
 //[-1, 1, 2, 3]

 //no good TS support because of the any. Cannot use .split, for example. 

  function insertAtBeginning<T>(array: T[], value: T) {
const newArray = [value, ...array];
return newArray;
 }

//This tells TS that the type in the array and the type in the value are the same type, and the return will be the same type.

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

//updatedArray[0].split('');

//========================================================
// Video 11 Classes and TypeScript

class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];

  constructor(first: string, last: string, age: number, course: string[]) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = course;
  }

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  ListCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Max', 'Schwartz', 32, [Angular]);
student.enrol('React'):  // student courses => Angular, React 

// But, a better way is like this -

class Student {
  constructor(public firstName: string, public lastName: string, public age: number, private courses: string[])
   }

   //=================================================

  // Video 12 Working with Interfaces 

   interface Human {
    firstName: string;
    age: number;

    greet; () => void;
   }

   let max: Human;

   max = {
    firstName: 'Max',
    age; 32
    greet() {
      console.log("Hello!");
    },
   };

   class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
      console.log(Hello!!!!);
    }
   }

   //==============================================
   //Video 13 Configuring the TS Compiler  

   //In the terminal, run the following:

//Angular has what I need, so no need to do this step.
