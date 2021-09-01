"use strict";

const button = document.querySelector(".js_button");
const input = document.querySelector(".js_input");
const count = document.querySelector("js_count");
const clue = document.querySelector("js_clue");
const randomNumber = getRandomNumber(100);
let acc = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleClickButton(event) {
    event.preventDefault();
    const number = input.value;
    console.log(number);
}
console.log(randomNumber);
button.addEventListener("click", handleClickButton);