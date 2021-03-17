// Generate a random number from 1 to 6
const firstRandomNum =
Math.floor(Math.random() * 6) +1

// images/dice1.png to dice 6.png
const firstDiceImage = 'assets/dice' + 
firstRandomNum + '.png'

document.querySelectorAll
('img')[0].setAttribute
('src', firstDiceImage)

// Generate a random number from 1 to 6
const secondRandomNum =
Math.floor(Math.random() * 6) +1

// images/dice1.png to dice 6.png
const secondDiceImage = 'assets/dice' + 
secondRandomNum + '.png'

document.querySelectorAll
('img')[1].setAttribute
('src', secondDiceImage);



function refreshPage(){
    window.location.reload()};





//Logic for winner
if (firstRandomNum > secondRandomNum) {
    document.querySelector
    ('h1').innerHTML = 'The Winner is Player 1'
} else if (firstRandomNum < secondRandomNum) {
    document.querySelector
    ('h1').innerHTML = 'The Winner is Player 2'
} else {
    document.querySelector
    ('h1').innerHTML = "It's a Draw!"
}