// Code your solutions in this file
//////////////////   wrapGifts FOR LOOP   ///////////////////////
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

////////////////// writeCards FOR LOOP ///////////////////


const thankYouCards = [];
//return cards;
function writeCards (name, event) {
    for (let i = 0; i < name.length; i++) {
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        //console.log(thankYouCards);
        //debugger;
    }

    return thankYouCards;

}

//writeCards(["Charlie", "Samip", "Ali"], "birthday");


////////////////////// wrapGifts WHILE LOOP ////////////////////

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

////////////////////// countDown WHILE LOOP /////////////////////


//const counted = [];
function countDown (count) {
    let i = count;
    while (i >= 0) {
        //counted.push(i);
        console.log(i);
        --i;
        //debugger;
    }

    //return counted;
}

//countDown (10);