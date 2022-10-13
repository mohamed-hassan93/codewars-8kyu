// 8 kyu - I love you, a little , a lot, passionately ... not at all

// /Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// If there are more than 6 petals, you start over with "I love you" and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.


function howMuchILoveYou(nbPetals) {
  // created a num variable to account for array indices starting at 0
  let num = nbPetals - 1
  // created an options variable array to list all the options 
  let options = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  // conditional: if the num is less than or equal to 5 -> return options[num], if its greater than 5 return the remainder of num%5
  if (num <= 5){
    return options[num]
  }else{
    return options[num%6]
  }
}


