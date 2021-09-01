"use strict";

const button = document.querySelector(".js_button");
const input = document.querySelector(".js_input");
const count = document.querySelector(".js_count");
const clue = document.querySelector(".js_clue");
const randomNumber = getRandomNumber(100);

let acc = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
console.log(`El número a adivinar es ${randomNumber}`);

function handleClickButton(event) {
    event.preventDefault();
    countClick();
    guessNumber();
}

function guessNumber() {
    let number = parseInt(input.value);
    console.log(`Has introducido el número ${number}`);
    if (number < 1 || number > 100) {
        clue.innerHTML = "El número debe estar entre 1 y 100";
    } else if (number > randomNumber) {
        clue.innerHTML = "Demasiado alto";
    } else if (number < randomNumber) {
        clue.innerHTML = "Demasiado bajo";
    } else if (number === randomNumber) {
        clue.innerHTML = "Has ganado campeona!!!";
    }
}

function countClick() {
    acc += 1;
    count.value = `Número de intentos:${acc}`;
}
button.addEventListener("click", handleClickButton);