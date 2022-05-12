// 8 kyu - Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  // .charAt() method will pull the last character in a string -> we Identify the last character as card.length -1 
  let suitSign = card.charAt(card.length - 1);
  // if/else statement to go through all the possibilities. 
  if(suitSign === '♣'){
    return 'clubs'
  }else if(suitSign === '♦'){
    return 'diamonds'
  }else if(suitSign === '♥'){
    return 'hearts'
  }else{
    return 'spades'
  }
}