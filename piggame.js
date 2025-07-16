//posto prvi igra player1, na player1 div staviti belu boju
// to ces uuraditi tako sto ces dati klasu activ-Player u css
// samo igrac koji trenutno igra treba da ima tu klasu

//unutar roll Event Listener:
//izgenerisi random broj
//ako se dobije 1, promeni aktivnog igraca da bude suprotni od ovoga koji je sad i isprazni mu  current score i zaustavi se, return,
//ako je aktivni igrac player1, dodaj mu na current score izrolan broj
//ako je aktivni igrac player2, dodaj mu na current score izrolan broj

let player1CurrentScore = 0;
let player2CurrentScore = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;
const maxScore = 30;
let activePlayer = "player1";
let randomNumber;

const diceEl = document.querySelector(".dice");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");

const current1El = document.getElementById("current--0");
const current2El = document.getElementById("current--1");
const score1El = document.getElementById("score--0");
const score2El = document.getElementById("score--1");

const player1El = document.querySelector(".player--0");
const player2El = document.querySelector(".player--1");

function switchPlayer() {
  if (activePlayer === "player1") {
    player1CurrentScore = 0;
    current1El.textContent = 0;
    player1El.classList.remove("active-player");
    player2El.classList.add("active-player");
    activePlayer = "player2";
  } else {
    player2CurrentScore = 0;
    current2El.textContent = 0;
    player2El.classList.remove("active-player");
    player1El.classList.add("active-player");
    activePlayer = "player1";
  }
}
diceEl.src = `${diceNames[randomNumber - 1]}.png`;

btnRoll.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  diceEl.src = `images/${diceNames[randomNumber - 1]}.png`;

  if (randomNumber === 1) {
    switchPlayer();
    return;
  }

  if (activePlayer === "player1") {
    player1CurrentScore += randomNumber;
    current1El.textContent = player1CurrentScore;
  } else {
    player2CurrentScore += randomNumber;
    current2El.textContent = player2CurrentScore;
  }
});

btnNew.addEventListener("click", function () {
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  player1TotalScore = 0;
  player2TotalScore = 0;
  activePlayer = "player1";

  current1El.textContent = 0;
  current2El.textContent = 0;
  score1El.textContent = 0;
  score2El.textContent = 0;

  player1El.classList.add("active-player");
  player2El.classList.remove("active-player");
});
