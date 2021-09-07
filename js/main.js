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

function writeTip(message) {
    clue.innerHTML = message;
}

function guessNumber() {
    let number = parseInt(input.value);
    console.log(`Has introducido el número ${number}`);
    if (number < 1 || number > 100) {
        writeTip("El número debe estar entre 1 y 100");
    } else if (number > randomNumber) {
        writeTip("Demasiado alto");
    } else if (number < randomNumber) {
        writeTip("Demasiado bajo");
    } else if (number === randomNumber) {
        writeTip("Has ganado campeona!!!");
    } else {
        writeTip("Debes escribir un número");
    }
}

function countClick() {
    acc += 1;
    count.value = `Número de intentos:${acc}`;
}
button.addEventListener("click", handleClickButton);