// 8 kyu Remove First and Last Character

// Instructions: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    let arr = str.split('');
    let newArrStr = arr.pop();
    let newShift = arr.shift();
    let newStr = arr.join('') 
    return newStr;
};

// // 8 kyu Remove First and Last Character

// // Instructions: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// // You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){
//     let arr = str.split('');
//     let newArrStr = arr.pop();
//     let newShift = arr.shift();
//     let newStr = arr.join('') 
//     return newStr;
// };

// // 8 kyu Convert a string to an array

// //Instruction: Write a function to split a string and convert it into an array of words.

// // Examples (Input -> Output):
// // * "Robin Singh" ==> ["Robin", "Singh"]

// function stringToArray(string){
//     let stringSplit = string.split(' ');
//     return stringSplit;
// }


// 8 kyu Count Odd Numbers below n

//Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])




// const circle = {
//     const circle = {
//         radius: 1,    //Property
//         location: {   // Property (imbedded object)
//             x: 1,
//             y: 1,
//         },
//         draw: function(){       //method
//             console.log('draw')
//         }
//     }; 
    
//     circle.draw();   //calling the draw method using dot notation 
//     draw: function(){       //method
//         console.log('draw')
//     }
// }; 

// circle.draw();   //calling the draw method using dot notation 


// // factory function

// function createCircle(radius) {      
//     return{
//         radius,    //Property - in HTML 6, if the property is equal to the radius, this notation is sufficent - no need to write radius: radius,
//         location: {   // Property (imbedded object)
//             x: 1,
//             y: 1,
//         },
//         draw: function (){
//             console.log('draw')
//         }
//     }
// }

// const circleNew = createCircle(1);  // new const is calling the the createCircle function and inputting an new radius. 
// circleNew.draw();   // since circleNew is equal to the createCircule function, the .draw method will run. 


// // constuctor function
// // 
// function Circle(radius){            // constuctor fuctions start with an upper case
//     this.radius,                    // defining local variable within the object
//     this.draw = function (){        // no need to return explicit "this" statement, as it will be returned when calling the new function
//         console.log('draw')
//     }
// };

// const another = new Circle(1);     //new Circle('new variables are inputted here to be inlcuded in the propertys of the Circle constuctor function')

// another.draw();                    // new object is run

// // primative

// let x = 10;
// let y = x;

// x = 20  // result x = 20, y = 10

// //Object

// let x = {value: 10};
// let y = x;

// x.value  = 20 // result x = 20, y = 20 <---- same reference. 

// let obj = {value: 10}
// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj.value)

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw')
//     }
// };

// const circle = new Circle(10);

// circle.location = {x: 1, y: 2};  // dot notation added (.location)

// const propertyName = 'location-2'

// //circle.location-2 this wouldnt work, due to the - in the syntax - therefore bracket notation is requried. 
// circle[propertyName] = {z: 3};    // bracket notation to add ([])  <--- same thing. 

// delete circle.location;


//8 kyu - Fundemental: Return 

//Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

//Please use the following function names:

//addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

function add(a,b){
    return a+b
}

function divide(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return a%b
}
   
function exponent(a,b){
    return a**b
}
    
function subt(a,b){
    return a-b
}


// 8kyu - to square (root) or not to square (root)

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
    let newArr = array.map(obj => obj**0.5%1 === 0 ? obj**0.5 : obj**2);
    return newArr
}
squareOrSquareRoot([1,4,7,3,2])


// 8kyu - Capitalization and Mutability

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
    let newWord = word[0].toUpperCase()+word.slice(1);
    return newWord;
  }
