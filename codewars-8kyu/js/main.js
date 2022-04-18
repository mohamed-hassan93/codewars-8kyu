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


// In this simple exercise, you will build a program that takes a value, integer , and returns a list of 
//its multiples up to another value, limit . If limit is a multiple of integer, it should be included as 
//well. There will only ever be positive integers passed into the function, not consisting of 0. The limit 
//will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are 
//the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.




function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }


// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.


// function nbDig(n, d) {
//   if (n>=0){
//     let k = [];
//     for (i = 0; i <= n; i++){
//        let arr = k.push([i**2]);
//        console.log(k);
//     }
//   }
// }

// nbDig(10,1)

// INCOMPLETE!!!!

// Take an array and remove every second element from the array. Always keep the first element and 
// start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  // YOU WANT TO RETURN A FILTERED ARRAY, THE FILTER PROPERTIES ARE ELEEM, AND INDEX/
  return arr.filter(function(elem,index){
    // THE FILTER CONDITIONS ARE THE INDEX MODOLUS HAVE TO EQUAL ZERO <--- NO REMAINDER
    return index%2 === 0;
  })//your code here
}



// 7 kyu:  

//JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
  // return an even number in an array
  return numbersArray.filter(function(elem, index){
    return elem%2 === 0
  })
}

//8 Kyu
//Complete the function that calculates the area of the red square, when the length of the circular 
// arc A is given as the input. Return the result rounded to two decimals.

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A){
  let rad = Number(2*A/Math.PI);
  let squareArea = Number((rad*rad).toFixed(2));
  return squareArea;
}




// 7kyu Square every digit

//Instructions: Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer




function squareDigits(num){
  // Before splitting the number, we have to convert it into a string as the .split function works with strings
  let numStr = num.toString();
  let arr = numStr.split('');
  // once the string was split into an array, we us the .map method to **2
  let newArr = arr.map((item) => {
    return item**2
  });
  // once new array is created, newArr => we join it into a new string 
  let newNum = newArr.join('');
  //finally, conver the string back into a number
  return Number(newNum)
}

// 8kyu Square(n) Sums

//Instructions: Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  let newArr = numbers.map((item)=>{
    return item**2
  });
  let newNew = newArr.reduce((sum,items)=>{
    return sum+=items
  }, 0);
  return newNew
}

// 8 kyu - Short to long 

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"



function solution(a, b){
  if(a.length<b.length){
    return newStr = a+b+a
  }else{
    return newStr = b+a+b
  }
}

// 8kyu - Name Shuffler 

// Write a function that returns a string in which firstname is swapped with last name.

// name_shuffler('john McClane'); => "McClane john"

function nameShuffler(str){
  let arr = str.split(" ");
  let newStr = `${arr[1]} ${arr[0]}`;
  return newStr
}

// 8kyu - Capitalization and Mutability 

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
  let newWord = word[0].toUpperCase()+word.slice(1);
  return newWord;
}
