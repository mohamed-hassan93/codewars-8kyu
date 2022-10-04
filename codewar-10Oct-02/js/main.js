// 8 kyu - My head is at the wrong end!

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

function fixTheMeerkat(arr) {
    //reverse array - the array has three elements, therefore order outside of 1/3 doesnt matter
     return arr.reverse()
   }


// 8 kyu - Beginner Series #4 Cockroach

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    // conversion rate between km/hr and cm/s == 27.778 cm/s for 1 km/hr
    let newSpeed = 27.777778 * s;
    
    return Math.floor(newSpeed)
  }



