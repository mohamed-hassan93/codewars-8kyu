// 8 kyu - Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function abbrevName(name){
  let arr = name.split(' ');
  let first = arr[0].split('');
  let last = arr[1].split('');
  let firstLetter = first[0].toUpperCase();
  let lastLetter = last[0].toUpperCase();
  let initials = [firstLetter, lastLetter];
  let initStr = initials.join('.')
  return initStr
  
}