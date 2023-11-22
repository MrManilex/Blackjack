# BLACKJACK
## Objective:
Create a browser game simulating Blackjack

### Getting Started:
Play the game [here.](https://mrmanilex.github.io/Blackjack/)

## Motivation:
### I went into this project not knowing how to play Blackjack. I found the game logic behind Blackjack to be interesting as theres many conditionals to be covered.

## Prototypes/Wireframing
### Wireframe:

![Wireframe](assets/Blackjack_Wireframe.png)

### Functional game before styling: 

![game-before-style](assets/Screenshot%20from%202021-10-21%2013-48-56.png)

### Game after styling:

#### Game before starting:
![game-before-start](assets/Screenshot%20from%202021-10-22%2010-01-06.png)

#### Game after starting:
![game-after-start](assets/Screenshot%20from%202021-10-22%2010-01-15.png)

## Technology implemented:
* Javascript
* CSS
* HTML
* Git
* bootstrap

## Credits
- Background music when starting: [Mii channel theme but each pause descends you further to paranoia](https://www.youtube.com/watch?v=EmOSk2wi0WI)
- Losing sound: [YOU DIED (HD)](https://www.youtube.com/watch?v=-ZGlaAxB7nI)
## Psuedocode:
- Define constants and variables such as card deck, player hand/computer hand, is winner , and center message.
- Add event listeners to draw button and reset button.
- Create initial function that empties hand, makes winner to null, and refills the deck that is drawn from.
- Create function that randomly draws a card when hit
- Create a function when player presses Stand, values are compared then rendering
- Create a function return the value of a card passed through as a string
- Make a function comparing the two totals of each players hand.
- get player's total close to 21 then get computer's total and compare therefore render result
- Changes center message to the state of the game so "Its a tie!", "Do you wish to draw?", "You lose !", "You win!!"
- Results should push to its specific places or arrays.

## Stretch Goals
- Creating a brain for the dealer essentially making them draw after player as hit IF their total hand is low
- More interactive CSS with popup messages telling state of game instead of in the middle
- Adding animation to cards flips or when cards are first drawn to dealer and player
- Adding GIFs or videos that display when game winner has been decided
- Eventually add a rule book helping those who do not know how to play
