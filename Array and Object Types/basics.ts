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