"use strict";

let misteryNumber = Number(Math.trunc(Math.random() * 20) + 1);

document.querySelector(".check").addEventListener("click", function () {
  let guessTry = Number(document.querySelector(".guess").value);
  let scoreNumber = Number(document.querySelector(".score").textContent);
  let highScore = document.querySelector(".highscore").textContent;

  //If the score is different from 0. Play untill it's not.
  if (scoreNumber > 1) {
    //If the guess field is empty or 0.
    if (!guessTry) {
      document.querySelector(".message").textContent =
        "No number! Choose between 1 and 20!";
      scoreNumber--;
      document.querySelector(".score").textContent = scoreNumber;

      // If the guess is higher than the mistery number.
    } else if (guessTry > misteryNumber) {
      document.querySelector(".message").textContent =
        "🔻Try a lower number!!!🔻";
      scoreNumber--;
      document.querySelector(".score").textContent = scoreNumber;

      // If the guess is lower than the mistery number;
    } else if (guessTry < misteryNumber) {
      document.querySelector(".message").textContent =
        "🔺Try a higher number!!!🔺";
      scoreNumber--;
      document.querySelector(".score").textContent = scoreNumber;

      //If the number is correct. So you win!!!
    } else if (guessTry === misteryNumber) {
      document.querySelector(".message").textContent =
        "🎉YOU WON! CONGRATULATIONS!🎊";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = misteryNumber;
      document.querySelector(".number").style.width = "30rem";

      //Save the higher Score.
      if (scoreNumber > highScore) {
        document.querySelector(".highscore").textContent = scoreNumber;
      }
    }

    //If the score is iqual zero. Game over.
  } else {
    document.querySelector(".message").textContent =
      "💥GAME OVER! TRY AGAIN!💥";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = 20;
  misteryNumber = Number(Math.trunc(Math.random() * 20) + 1);
});
