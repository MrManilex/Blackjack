/*----------------- Constants -----------------*/
let deck = []
let playerHand = []
let dealerHand = []
let isWinner, gameStatus, playerSum, dealerSum, 
card, cardValue, playerDiff, dealerDiff, newArr
const music = new Audio('audio/Mii_paranoia.mp3')
const died = new Audio('audio/YOU_DIED_HD.mp3')
/*------------- Variables (state) -------------*/

/*--------- Cached Element References ---------*/
let hitEl = document.querySelector('.hit')
let resetEl = document.querySelector('.reset')
let standEl = document.querySelector('.stand')
let messageEl = document.getElementById('message')
let playerHandEl = document.getElementById('player-hand')
let dealerHandEl = document.getElementById('dealer-hand')
let startEl = document.querySelector('.start')
let canSeeEl = document.getElementById('can-see')
/*-------------- Event Listeners --------------*/
hitEl.addEventListener('click', playerHit)
resetEl.addEventListener('click', init)
standEl.addEventListener('click', playerStand)
startEl.addEventListener('click', audioPlay)
/*----------------- Functions -----------------*/
init()

function init() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  playerHand = []
  dealerHand = []
  playerSum = null
  dealerSum = null
  isWinner = null
  messageEl.innerText = '\n Welcome to the best never-before-seen blackjack game wooooo!! \n \n Hit Start to play what are you waiting for?!?!'
  canSeeEl.style.visibility = 'hidden'
  startEl.style.visibility = 'visible'
  resetEl.style.visibility = 'hidden'
  hitEl.disabled = false
  standEl.disabled = false
  died.pause()
  music.currentTime = 0
  music.pause()
  render()
}
function audioPlay() {
  music.volume = .15
  music.play()
  theDeal()
}
function diedAudio(){
  died.volume = .20
  died.play()
}
function render() {
  playerHandEl.innerHTML = ''
  dealerHandEl.innerHTML = ''
  playerHand.forEach(card => {
    let cardToAppend = document.createElement('div')
    cardToAppend.className = `card large ${card}`
    playerHandEl.appendChild(cardToAppend)
  })
  dealerHand.forEach(card => {
    let cardToAppend = document.createElement('div')
    cardToAppend.className = `card large back-blue ${card}`
    dealerHandEl.appendChild(cardToAppend)
  })
  myDivChildren = dealerHandEl.children
  myDivChildren[1].classList.remove('back-blue')
  if(isWinner !== null){
  hitEl.disabled = true
  standEl.disabled = true
  myDivChildren[0].classList.remove('back-blue')
    dealerHandEl.classList.remove('back-blue')
    if (isWinner === 'dealer'){
      messageEl.innerText = 'you lost what a shame'
      music.pause()
      diedAudio()
    }else if (isWinner === 'player'){
      messageEl.innerText = 'WINNER WINNER CHICKEN DINNER'
    }else if (isWinner === 'tie'){
      messageEl.innerText = 'PUSHHHH'
    }else if (isWinner === 'valueOver'){
      messageEl.innerText = 'YOU WENT OVER DUMMYYYY BUUUUUUUUUUST'
      music.pause()
      diedAudio()
    }
  }
}
function theDeal () {
  canSeeEl.style.visibility = 'visible'
  startEl.style.visibility = 'hidden'
  resetEl.style.visibility = 'visible'
  starterCards(dealerHand)
  starterCards(playerHand)
  playerSum = checkHandValue(playerHand)
  dealerSum = checkHandValue(dealerHand)
  newPlayerSum = checkAce(playerSum)
  newDealerSum = checkAce(dealerSum)
  playerDiff = 21 - newPlayerSum
  dealerDiff = 21 - newDealerSum
  messageEl.innerText = 'Hit? or Stand?'
  if (playerSum > 21){
    isWinner = 'valueOver'
    render()
  }
}
function playerHit() {
  let randIdx = Math.floor(Math.random() * deck.length)
  let cardPicked = deck.splice(randIdx, 1)
  playerHand.push(cardPicked[0])
  theDeal()
}
function playerStand() {
  compareValues()
}
function compareValues() {
  if (playerSum <= 21){
    if (playerDiff < dealerDiff){
      isWinner = 'player'
      render()
    }else if (playerDiff > dealerDiff){
      isWinner = 'dealer'
      render()
    }else if (playerDiff === dealerDiff){
      isWinner = 'tie'
      render()
    }
  }
}
function checkHandValue(theHand) {
  let sum = 0
  theHand.forEach((el) => {
    cardValue = checkCardValue(el)
    sum = sum + cardValue
  })
  return sum
}
function starterCards(hand) {
  for (let i = 0; 2 > hand.length; i++) { 
    if (deck.length > 0){
      let randIdx = Math.floor(Math.random() * deck.length)
      let cardPicked = deck.splice(randIdx, 1)
      hand.push(cardPicked[0])
    }
  }
  render()
}
function checkAce(sum) { 
  if (sum === playerSum){
    if(playerHand.includes('dA') === true || 
    playerHand.includes('hA') === true || 
    playerHand.includes('cA') === true || 
    playerHand.includes('sA') === true){
      if(sum <= 11){
        sum += 10
        return sum
      }else {return sum}
    }else {return sum}
  }else if(sum === dealerSum){
    if(dealerHand.includes('dA') === true || 
    dealerHand.includes('hA') === true || 
    dealerHand.includes('cA') === true || 
    dealerHand.includes('sA') === true){
      if(sum <= 11){
        sum += 10
        return sum
      }else {return sum}
    }else {return sum}
  }else {return sum}
}  
function checkCardValue(card) {
  if (card === 'dK' || card === 'hK' || card === 'cK' || card === 'sK' ||
  card === 'dQ' || card === 'hQ' || card === 'cQ' || card === 'sQ' ||
  card === 'dJ' || card === 'hJ' || card === 'cJ' || card === 'sJ' ||
  card === 'd10' || card === 'h10' || card === 'c10' || card === 's10'
  ){return cardValue = 10}
  else if (card === 'dA' || card === 'hA' || card === 'cA' || card === 'sA')
  {cardValue = 1}
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