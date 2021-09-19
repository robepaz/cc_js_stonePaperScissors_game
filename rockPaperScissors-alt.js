const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()
  if (
    userInput === 'piedra' ||
    userInput === 'papel' ||
    userInput === 'tijeras'
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
      return 'piedra'
    case 1:
      return 'papel'
    case 2:
      return 'tijeras'
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) console.log('empate')
  else {
    if (userChoice === 'piedra') {
      if (computerChoice === 'papel') {
        console.log('gana computadora')
      } else {
        console.log('gana jugador')
      }
    }
    if (userChoice === 'papel') {
      if (computerChoice === 'tijeras') {
        console.log('gana computadora')
      } else {
        console.log('gana jugador')
      }
    }
    if (userChoice === 'tijeras') {
      if (computerChoice === 'stone') {
        console.log('gana computadora')
      } else {
        console.log('gana jugador')
      }
    }
  }
}

const playGame = () => {
  let controlSecreto = prompt('Jugador, qué eliges: piedra, papel o tijeras?')
  if (controlSecreto === 'bomba') {
    console.log('gana jugador por ko')
  } else {
    const userChoice = getUserChoice(controlSecreto)
    const computerChoice = getComputerChoice()
    console.log(`jugador eligió ${userChoice}.`)
    console.log(`computadora eligió ${computerChoice}.`)
    console.log(determineWinner(userChoice, computerChoice))
  }
}

playGame()
