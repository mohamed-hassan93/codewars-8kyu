// // 8 kyu - Find out whether the shape is a cube

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

var cubeChecker = function(volume, side){
  if(volume === side**3 && volume > 0 && side > 0){
    return true
  }else{
    return false
  }
};

// 8 kyu - Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
  x = x.map((element) => {
    return element*2
  })
 
  return x
 }


 //8 kyu - Switch it Up!

//  When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){

  switch (number) {
  case 0:
      return 'Zero';
      break;
  case 1:
    return 'One';
    break;
  case 2:
    return 'Two';
    break;
  case 3:
    return 'Three';
    break;
  case 4:
    return 'Four';
    break;
  case 5:
    return 'Five';
    break;
  case 6:
    return 'Six';
    break;
  case 7:
    return 'Seven';
    break;
  case 8:
    return 'Eight';
    break;
  case 9:
    return 'Nine';
    break;
}

  
}


// 8 kyu - Sum The Strings 

//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  
  let numA = Number(a);
  let numB = Number(b);
    
  let sum = numA + numB;
  
  return sum.toString()
}