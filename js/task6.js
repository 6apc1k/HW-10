var continueGame = true,
  stopGame,
  attempts,
  winningNumber,
  multiplier,
  customNumber,
  multiplier = 0,
  maximum = 5,
  minimum = 1;
  roundWinning = 0,
  winningMax = 10;
  winningSum = 0;

function getNumber(max, min) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

var start = confirm("Хочете почати нову гру?");
if (start) {
  startGame();
} else {
  alert("Сьогодні ви не виграли джекпот, а могли б");
}

function startGame() {

  playingProcess();
  if (winningSum) {    
      console.log(`Дякуємо за гру, ваш виграш становить: ${winningSum}$`);
    }
}

function playingProcess() {
 
  while (continueGame) {
    stopGame = false;
    attempts = 3;
    winningNumber = getNumber(maximum, minimum);
    multiplier = (Math.pow(3, multiplier));
    guessingNumber();
    if (attempts === 0) {
      winningSum = 0;
      multiplier = 0;
      console.log(`Ви програли, Ваш виграш - 0$`);
      continueGame = confirm("Xочете зіграти ще раз?");
    }
  }
}

function guessingNumber() {
  while (attempts && !stopGame) {
    customNumber = parseInt(prompt(`Введіть число, у Вас залишилося ${attempts} спроб. `));
    if (customNumber === winningNumber) {
      if (attempts === 3) {
        roundWinning = winningMax * multiplier;
        winningSum += roundWinning;
      } else if (attempts === 2) {
        roundWinning = winningMax / 2 * multiplier;
        winningSum += roundWinning;
      } else {
        roundWinning = winningMax / 5 * multiplier;
        winningSum += roundWinning;
      }
      console.log(`Ви виграли ${roundWinning}$.  Наразі Ваш виграш ${winningSum}$`);
      stopGame = true;
      continueGame = confirm("Xочете продовжити гру?");
      if (continueGame) {
        multiplier++;
        maximum += (maximum - minimum);
      }
    } else {
      attempts--;
    }
  }
}

