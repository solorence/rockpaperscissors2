function getComputerChoice(){
    let choice;
    let number = Math.ceil(Math.random() * 3);
    
    switch(number){
        case 1: choice = 'rock';
        break;
        
        case 2: choice = 'paper';
        break;
        
        case 3: choice = 'scissors';
        break;
    }
    return choice;
}

function getPlayerChoice(){
    let choice;
    choice = prompt('Pick your choice!\n ROCK! PAPER! or SCISSORS');
    choice = choice.toLowerCase();
    if (choice==='rock' || choice==='paper' || 'scissors'){
    return choice;
    } else{ 
        alert('wrong choice made! repeat the game')
    }
}



function playGame(computerChoice, playerChoice){
   if((computerChoice === 'rock' && playerChoice === 'scissors') ||
    			  (computerChoice === 'paper' && playerChoice ==='rock') ||
        (computerChoice ==='scissors' && playerChoice === 'paper')){
       return `Computer wins! ${computerChoice} beats ${playerChoice}`;
   } else if (computerChoice === playerChoice){
       return `its a Draw game! just a ${computerChoice} ${playerChoice} fight!`
   }
    
    else{
       return `Player wins! ${playerChoice} beats ${computerChoice}`
   }
}

function game(){
    for(let i =1; i<=5; i++) { 
        console.log(playGame(getComputerChoice(), getPlayerChoice()));
    }
}

game();