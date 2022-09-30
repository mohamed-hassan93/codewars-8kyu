// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    let strBreak = str.split('').reverse().join('');
    let arrBreak = strBreak.split(' ').reverse().join(' ')
  
    return arrBreak
    
}

console.log(reverseWords('This is an example!'))