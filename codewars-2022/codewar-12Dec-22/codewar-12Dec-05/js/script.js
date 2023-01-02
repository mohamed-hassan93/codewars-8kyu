// 8 kyu - Is it a Palindrome 

// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
  // your code here
  let revStr = x.split('').reverse().join('')
  
  if(revStr.toLowerCase() === x.toLowerCase()){
    return true
  }else{
    return false
  }
}