//for  player1
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

// document.querySelector(".img-for-player1").innerHTML="<img src='./images/dice"+randomNumber1+".png' alt=''>"; //my
// or 
document.querySelector(".img-for-player1 img").setAttribute("src","./images/dice"+randomNumber1+".png");         //ma'am



//for player2
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelector(".img-for-player2 img").setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    // document.querySelector("h1").classList.add("player1-wins");
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";   //or we can use textContent
} else if(randomNumber1 < randomNumber2){
    // document.querySelector("h1").classList.add("player2-wins");
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else{
    // document.querySelector("h1").classList.add("draw");
    document.querySelector("h1").innerHTML = "Draw!";
}