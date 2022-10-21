// 7 kyu - String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  
  // create a variable to holds the result of the str ending - endsWith method will determine what the string ending is (ie. ending variable)
  let result = str.endsWith(ending);
  
  //testing conditional - verify if the argument is true
  if(result === true){
    return true
  }else{
    return false
  }
}