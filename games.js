function getComputerChoice(){
    var game_choices = { // the choices we have in the game rock paper and scissor
        "choice 1" : "Rock",
        "choice 2" : "Paper", 
        "choice 3" : "Scissor",
    };

    var choices = Object.keys(game_choices); // return an arry either choice 1 choice 2 etc
    var computer_choice = choices[Math.floor(Math.random() * choices.length)] //This line calculates a random index and uses it to select one of the keys from the choices array.
    var computer_final_choice = game_choices[computer_choice];
    return computer_final_choice;
    
}

function playerSelection(){ //this function will take the input of the user and return it in the format we want
    var playerchoice = prompt('your choice please')
    if (playerchoice) {
        let formattedInput = playerchoice.charAt(0).toUpperCase() + playerchoice.slice(1).toLowerCase();
        return formattedInput;// formatted input take the first character and make it uper and also slice from the second character onward and make them lower case and return the value
    }
}

function playRound(playerSelect, ComputerSelect){   


    if(//if the player select any of the winning condition then we return that the player won
    (playerSelect === "Rock" && ComputerSelect === "Scissor") || 
    (playerSelect === "Scissor" && ComputerSelect === "Paper") || 
    (playerSelect === "Paper" && ComputerSelect === "Rock")
    )
    {
        //console.log("the player won, player selection is " + playerSelect + " computer selection is " + ComputerSelect);
        return "Player";
    }
    else if (playerSelect === ComputerSelect)//if it is a tie we return tie and in the function down will loop back again to ask the user to inter his input again
    {
        //console.log("player selection is " + playerSelect + " computer selection is " + ComputerSelect + " its a tie ");
        return "Tie";
    }
    else
    {
        //console.log("Player lost, Computer won, player choice " + playerSelect + " computer choice " + ComputerSelect);
        return "Computer";
    }
    
}

function startgame(){
    let playerscore = 0;
    let computerscore = 0;
    let tie = 0;

    //run the game 5 times using for loop and defining round inside for
    for(let round = 0; round < 5; round++){//define round and run it 5 times as long as round is less than 5 rounds the for loop will run
        const playerSelect = playerSelection(); // get the player selection from the function above
        const computerSelect = getComputerChoice(); // get the computer selection from the function above
        const result = playRound(playerSelect, computerSelect); // get the result which will call on play round function which run and return the result
        if(result === "Player"){ //if the result is the same as player add to the player score above +1
            console.log(`Player won this round ${playerSelect} beats ${computerSelect}.`);//declare the winner 
            playerscore++;//append +1 to playerscore
        }
        else if(result === "Computer"){//if the reuslt is the same as computer append +1 to the computer score
            console.log(`Computer won this round ${computerSelect} beats ${playerSelect}.`);//declare the winner
            computerscore++;//append +1 to computerscore
        }
        else if(result === "Tie"){ // if the returned result is tie append +1 to tie
            console.log("It is a Tie.");
            tie++;
        }
        console.log(`Round number ${round + 1} of 5`) // this show which round we are in
    
    }
    //show the score after the 5 runs are over
    console.log(`Total score after 5 rounds, Player score is ${playerscore} and Computer score is ${computerscore} Tie is ${tie}`);
    if(playerscore > computerscore){//declare the winner is the player if the player score higher than the computer
        console.log('Player won this match.');
    }
    else if(computerscore > playerscore){//declare the winner is the computer if its score higher than the player
        console.log(`Computer won this match.`);
    }
    else if (computerscore === playerscore === tie){//else declare it is a tie
        console.log(`It is a Tie.`);
    }
    else{
        console.log(`It is a Tie.`);
    }


}
startgame()
    