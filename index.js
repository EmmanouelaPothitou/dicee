function hideImages() {
    var diceImages = document.querySelectorAll("img");
        for (const diceImage of diceImages) {
            diceImage.classList.add("hidden");   
        }
}


hideImages() 


const input1 = document.getElementById('P1');
const input2 = document.getElementById('P2');


var rollDiceBtn = document.getElementById("roll-dice");
rollDiceBtn.addEventListener("click", function() {
    
        hideImages() 
        

        var num = Math.random();
        num = num*6;
        var dice1 = Math.floor(num) + 1;
        var dice1Id = "P1-"+ dice1;
        var dice1Img = document.getElementById(dice1Id);
        dice1Img.classList.remove("hidden");

        var num = Math.random();
        num = num*6;
        var dice2 = Math.floor(num) + 1;
        var dice2Id = "P2-"+ dice2;
        var dice2Img = document.getElementById(dice2Id);
        dice2Img.classList.remove("hidden");


        var result = document.getElementById('result');
        
        if (dice1>dice2) {
            if (input1.value == 0) {
                result.textContent = "Player 1 is the winner!"
            }
            else{
                result.textContent= input1.value[0].toUpperCase() + input1.value.slice(1,input1.value.length).toLowerCase() + " is the winner!" ;
            }
         }
        else if (dice1<dice2){
            if (input2.value == 0) {
                result.textContent = "Player 2 is the winner!"
            }
            else{
            result.textContent= input2.value[0].toUpperCase() + input2.value.slice(1,input2.value.length).toLowerCase() + "  is the winner!";
            }
        }
        else {
            result.innerText = "DRAW!"
        }


        

    
});    




