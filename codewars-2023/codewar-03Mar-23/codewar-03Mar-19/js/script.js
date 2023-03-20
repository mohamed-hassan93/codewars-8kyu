// // 8 kyu - Find Nearest Square Number

// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

function nearestSq(n){
  let nS = n**(0.5);
  
  if(nS === Math.floor(nS) && nS === Math.ceil(nS)){
    return n
  }

  let lowerNum = nS - Math.floor(nS);
  let higherNum = Math.ceil(nS) - nS;

  if(lowerNum > higherNum){
    return Math.ceil(nS)**2
  }else{
    return Math.floor(nS)**2
  }


}