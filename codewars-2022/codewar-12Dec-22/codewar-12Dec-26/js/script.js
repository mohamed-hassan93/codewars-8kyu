// 8 kyu - Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){
  let result = x.reduce((prod,acc) => prod*acc,1);
  return result

}