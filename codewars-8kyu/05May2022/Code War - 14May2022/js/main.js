// 8 kyu - What's in between

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  // the array fill method takes creates 6 cells in the array, and the map function will go to each individual cell, and plot the value a + the index number per interation. 
  return Array(b - a + 1).fill().map((_, idx) => a + idx)
}