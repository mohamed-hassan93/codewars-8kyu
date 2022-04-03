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