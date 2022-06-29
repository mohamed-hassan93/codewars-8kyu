// 8 kyu - Will you make it 

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let distance = mpg*fuelLeft;
  
  if(distance>=distanceToPump){
    return true
  }else{
    return false
  }
};


const arr = [1,2,3,4,5,6,7,8,9,10];

function swap(arr, i, j) {
  const temp = arr[i];    // 
  arr[i] = arr[j];
  arr[j] = temp;
}

// arr.length = N   O(N/2) = O(N) => time complexity is linear
// SPACE COMPLEXITY = N
// SPACE COMPLEXITY = N IN => 2N OUT => O(2N) => O(N)
// don't use Array.reverse, we want to implement reverse ourselves ;)
// reverse inline (not copy to reduce complexity)
function reverseArray(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  for(let i = 0; i < middleIndex; i++){
    swap(arr, i, arr.length - 1 - i)
 }
  return arr
}

const reversed = reverseArray(arr);
if(reversed[0] !== 10) {
  console.error("Meeeeh")
}



// [10,9,8,7,6,5,4,3,2,1]

const newEmail1 = {
  to: "email@something.com",
  title: "sduhfüasdufasd",
  body: "uhsdpifuhspdfas",
}

const newEmail2 = {
  to: "email@something.com",
  title: "sduhfüasdufasd",
  body: "uhsdpifuhspdfas",
}

const emailHandler = new EmailHandler();

emailHandler.push(newEmail1);
emailHandler.push(newEmail2);


const nextEmail1 = emailHandler.processNext();  // newEmail1
const nextEmail2 = emailHandler.processNext();  // newEmail2


class EmailHandler {
  constructor() {
    this.array = [];
  }
  
  push(email) {
    this.array.push(email);
  }
  
  processNext() {
    return this.array.unshift();
  }
}