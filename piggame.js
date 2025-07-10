const score0 = document.querySelector("#score-0");
const score1 = document.querySelector("#score-1");
const current0 = document.querySelector("#current-0");
const current1 = document.querySelector("#current-1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let player1CurrentScore = 0;
let player2CurrentScore = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;
const maxScore = 30;
let activePlayer = "player1";
let randomNumber;

//posto prvi igra player1, na player1 div staviti belu boju
// to ces uuraditi tako sto ces dati klasu activ-Player u css
// samo igrac koji trenutno igra treba da ima tu klasu

//unutar roll Event Listener:
//izgenerisi random broj
//ako se dobije 1, promeni aktivnog igraca da bude suprotni od ovoga koji je sad i isprazni mu  current score i zaustavi se, return,
//ako je aktivni igrac player1, dodaj mu na current score izrolan broj
//ako je aktivni igrac player2, dodaj mu na current score izrolan broj
