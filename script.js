"use strict";

//

const securNumber = Math.trunc(Math.random() * 100) + 1;
let scoreElement = document.querySelector(".score");
let score = Number(scoreElement.textContent);
let highscore = 0;

const checkBTN = document.querySelector(".check");
const againBTN = document.querySelector(".again");

const selectorText = (selectorClass, text) => {
  document.querySelector(`.${selectorClass}`).textContent = text;
};

checkBTN.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    selectorText("message", "⛔ No Number!");
  } else if (guess == securNumber) {
    selectorText("message", "🎉 Correct Number!");

    document.querySelector(".number").textContent = securNumber;

    document.querySelector("body").style.backgroundColor = "green";

    highscore += score;
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== securNumber) {
    selectorText(
      "message",
      guess > securNumber ? "📈 Too high!" : "📉 Too low!",
    );
    score--;
    score >= 0
      ? (scoreElement.textContent = score)
      : (scoreElement.textContent = 0);
  }
});

againBTN.addEventListener("click", () => {
  const securNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  selectorText("message", "Start guessing...");
  score = 20;
  scoreElement.textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
