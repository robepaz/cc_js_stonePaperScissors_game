const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput
  } else {
    console.log('error')
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) 
      console.log('empate');
    else {
      if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        console.log('gana computadora');
        } else {console.log('gana jugador') 
        } 
      } 
      if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        console.log('gana computadora');
        } else {console.log('gana jugador') 
        } 
      } 
        if (userChoice === 'scissors') {
        if (computerChoice === 'stone') {
        console.log('gana computadora');
        } else {console.log('gana jugador') 
        } 
     } 
    }
  }
  
  
  console.log(determineWinner('scissors', 'stone')); 