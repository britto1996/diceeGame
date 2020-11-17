var diceImages = ['' , 'dice1.png' , 'dice2.png' , 'dice3.png' , 'dice4.png' , 'dice5.png' , 'dice6.png'];
console.log(diceImages);

function player1(){
    var upper = 6;
    var lower = 1;
    var randomDice1 = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    // console.log(randomDice1);
    var randomDice2 = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    console.log(randomDice2);
    
    document.querySelector(".img1").src = "images/"+diceImages[randomDice1];
    document.querySelector(".img2").src = "images/"+diceImages[randomDice2];

    if(randomDice1 < randomDice2){
        document.querySelector(".result").style.color = "#4ECCA3";
        document.querySelector(".result").innerHTML = "Player 2 Wins⛳";
     }

    else if(randomDice2 < randomDice1){
        document.querySelector(".result").style.color = "#4ECCA3";
         document.querySelector(".result").innerHTML = "Player 1 Wins⛳";
         
    }else{
        document.querySelector(".result").style.color = "green";
        document.querySelector(".result").innerHTML = "Tie🎈";
    }
}

