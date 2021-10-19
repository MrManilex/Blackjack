/*----------------- Constants -----------------*/
let deck = []
let playerHand = []
let dealerHand = []
let isWinner, gameStatus, playerSum, dealerSum, card, cardValue

/*------------- Variables (state) -------------*/


/*--------- Cached Element References ---------*/
let deckEl = document.getElementById('deck')
let reset = document.querySelector('.reset')
let message = document.getElementById('message')
/*-------------- Event Listeners --------------*/
deckEl.addEventListener('click', handleClick)
reset.addEventListener('click', init)

/*----------------- Functions -----------------*/
init()

function init() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  playerHand = []
  dealerHand = []
  playerSum = null
  dealerSum = null
  isWinner = null
  render()
}
function render() {
  starterCards()
  theDeal()
  //Show the cards that are dealt at the start

}
function theDeal () {
  checkHandValue(playerHand)
}

function handleClick() {
  let randIdx = Math.floor(Math.random() * deck.length)
  let cardPicked = deck.splice(randIdx, 1)
  playerHand.push(cardPicked)
  render()
}
function starterCards() {
  for (let i = 0; 2 > playerHand.length; i++) { 
    if (deck.length > 0){
      let randIdx = Math.floor(Math.random() * deck.length)
      let cardPicked = deck.splice(randIdx, 1)
      playerHand.push(cardPicked)
    }
  }
}
function checkHandValue(theHand) {
  let newArr = theHand.map((el) => {
    return el[0]
  })
  console.log(newArr)
  let sum = 0
  newArr.forEach((el) => {
    cardValue = checkCardValue(el)
    console.log(cardValue)
    sum = sum + cardValue
    console.log(sum) 
  })
}
function checkCardValue(card) {
  if (card === 'dK' || card === 'hK' || card === 'cK' || card === 'sK' ||
  card === 'dQ' || card === 'hQ' || card === 'cQ' || card === 'sQ' ||
  card === 'dJ' || card === 'hJ' || card === 'cJ' || card === 'sJ' ||
  card === 'd10' || card === 'h10' || card === 'c10' || card === 's10'
  ){return cardValue = 10}
  else if (card === 'dA' || card === 'hA' || card === 'cA' || card === 'sA'){
    // if (playerSum <= 10){return cardValue = 11}
    // else if (playerSum > 10)
    {cardValue = 1}
  }
  else if (card === 'd09' || card === 'h09' || card === 'c09' || card === 's09'){ cardValue = 9}
  else if (card === 'd08' || card === 'h08' || card === 'c08' || card === 's08'){ cardValue = 8}
  else if (card === 'd07' || card === 'h07' || card === 'c07' || card === 's07'){ cardValue = 7}
  else if (card === 'd06' || card === 'h06' || card === 'c06' || card === 's06'){ cardValue = 6}
  else if (card === 'd05' || card === 'h05' || card === 'c05' || card === 's05'){ cardValue = 5}
  else if (card === 'd04' || card === 'h04' || card === 'c04' || card === 's04'){ cardValue = 4}
  else if (card === 'd03' || card === 'h03' || card === 'c03' || card === 's03'){ cardValue = 3}
  else if (card === 'd02' || card === 'h02' || card === 'c02' || card === 's02'){ cardValue = 2}
  return cardValue
}


// function whatIsAce(card) {
//   if (card === 'dA' || card === 'hA' || card === 'cA' || card === 'sA'){
//     if (playerSum <= 10){
//       return cardValue = 11
//     }else if (playerSum > 10){
//       return cardValue = 1
//     }
//     console.log(cardValue)
//   }
// }



// valueDeck.splice(13,39)
// let deckValues = valueDeck.map((card) => {
  //   let splitCard = card.split('').slice(1, 3).join('')
  //   return splitCard
  // })
  // console.log(deckValues)

// Bust - basically losing (if hand is over 21)
// Hit - drawing an extra card
// Stand - to not take any further cards - also known as 'sitting'.
// Push - DRAWWW (card value is evenly matched for both players)
// Upcard - the dealer's exposed card, seen by all players.
// Hole Card - the dealer's unseen card.