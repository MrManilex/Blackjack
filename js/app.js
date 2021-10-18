/*----------------- Constants -----------------*/
let deck = []
let playerHand = []
let computerHand = []
let isWinner, gameStatus

/*------------- Variables (state) -------------*/


/*--------- Cached Element References ---------*/
let deckEl = document.getElementById('deck')
let reset = document.querySelector('.btn')
let message = document.getElementById('message')
/*-------------- Event Listeners --------------*/
deckEl.addEventListener('click', handleClick)
reset.addEventListener('click', init)

/*----------------- Functions -----------------*/
init()

function init() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  playerHand = []
  computerHand = []
  isWinner = null
  render()
}
function render() {
  //Create values for each of the card strings
  cardValue(deck)
  
  //randomly select cards from deck to computer hand
  // computerCards()
  
  //- Create render function displaying two drawn cards for each player (computer and player).

  //Create the game status message

}
function handleClick() {
  if (playerHand.length < 2){
    let randIdx = Math.floor(Math.random() * deck.length)
    let cardPicked = deck.splice(randIdx, 1)
    playerHand.push(cardPicked)
    render()
  }
}
function computerCards() {
  for (let i = 0; 2 > computerHand.length; i++) { 
    if (deck.length > 0){
      let randIdx = Math.floor(Math.random() * deck.length)
      let cardPicked = deck.splice(randIdx, 1)
      computerHand.push(cardPicked)
    }
    render()
  }
}
function cardValue(deck) {
deck.splice(13,38)
let valueDeck = deck
let deckValues = valueDeck.map((card) => {
  console.log(card)
  let splitCard = card.split('').slice(1, 3).join('')
  return splitCard
})
console.log(deckValues)
}
function cardCompare() {

}

// Bust - basically losing (if hand is over 21)
// Hit - drawing an extra card
// Stand - to not take any further cards - also known as 'sitting'.
// Push - DRAWWW (card value is evenly matched for both players)
// Upcard - the dealer's exposed card, seen by all players.
// Hole Card - the dealer's unseen card.