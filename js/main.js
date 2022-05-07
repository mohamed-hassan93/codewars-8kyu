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

  //Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

let pokeList = 'one, two, three, four, five';

function listReverse(pokelist){
    let arr = pokelist.split(', ');
    let newArr = arr.reverse();
    let newList = newArr.join(' ')
    console.log(newList)
}

listReverse(pokeList)

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of 
// each element in b.

function compareSquareAndCube(a,b){
    console.log(a.reduce((acc,c)=> acc + c**2, 0) > b.reduce((acc,c)=> acc + c**3, 0))
}

compareSquareAndCube([2,2,2], [2,2,2])


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10];

function evenDivide(arr){
    console.log(arr.filter((e,i) => e%i===0))
}

evenDivide([22, -6, 32, 82, 9, 25])



//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr){
    console.log(arr.reduce((acc,c) => acc + Number(c), 0))
}

sumOfValues([3,'4','5',6,9])


// 8 kyu - Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi = weight/(height**2)
    if(bmi<= 18.5){
      return 'Underweight';
    }else if(bmi>18.5 && bmi <= 25){
      return 'Normal'
    }else if(bmi>25 && bmi < 30){
      return 'Overweight'
    }else{
      return 'Obese'
    }
  }


// 8 kyu - Will there be enough space?

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
    let diff = cap - on
    if (wait>diff){
      return wait-diff
    }else{
      return 0
    }
  }


function divisorCount(int){
    let arr = []
    for(i=1; i<=int; i++){
        arr += arr[i];
        console.log(arr);

    }
}

divisorCount (5)

// 8 kyu - Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n){
  //turned the n to a str to allow for split
  let str = n.toString()
  //once split into an array, map method will convert all the elements back into numbers, before reversing
  let arr = str.split('').map(element => Number(element)).reverse()
  //return for result
  return arr
}


// 8 kyu  - Binary to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.
// eg. convert "1001001" to 73


function binToDec(bin){
  let newNum = parseInt(bin,2);
  return newNum
}

// 8 kyu - Opposites Attract

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


function lovefunc(flower1, flower2){
  if(flower1%2 === 0 && flower2%2 !== 0){
    return true
  }else if(flower1%2 !== 0 && flower2%2 === 0){
    return true
  }else{
    return false
  }
}


// 8 kyu - Plural

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.


function plural(n) {
  if (n>=0 && n !== 1){
    return true
  }else{
    return false
  }
}

// 8 Kyu - String Cleaning 

//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
  let noNum = s.replace(/[0-9]/g, '');
  return noNum
}

//8Kyu - Decibel Scale

//The following formula is called the Decibel Scale:

// Decibel Scale Formula

// The Decibel Scale is used to determine the loudness of a sound, measured in dB:

// β is the result we want, defined in dB;
// We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale";
// We provide I, the intensity of the sound wave we need to find the loudness of, which is, for the purposes of this Kata, measured in 2D space and, hence, in Watts per square meter;
// Finally, we divide the intensity by the threshold of human hearing, also measured in Watts per square meter. This is the softest possible sound a human ear can hear;
// Since the threshold of human hearing involves an extremely small, long number, we need to utilize a logarithmic operation that will provide us the result in a convenient way.
// Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.

// Results are automatically rounded to the nearest integer by the test cases.

function dBScale(intensity) {
  let B = 10*Math.log10(intensity/(10**(-12)))
  return B
}