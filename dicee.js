randomNumber1 = Math.floor(Math.random() * 6) + 1;  // Generating the random numbers and making sure that the number don't exceed the value of 6.
var randomDiceImage = "dice" + randomNumber1 + ".png";  // Selecting the dice images with those random numbers that we are generating.
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Now we are going to do the same thing with the second image
randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// What will happen after the dice are rolled.
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else{
    document.querySelector("h1").innerHTML = "Draw!";
}
