/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = [
    "Ronald McDonald",
    "Uruguayan Spiderman",
    "a homeless man",
    "a Village People guy",
    "a Disco Stu guy"
  ];
  let action = [
    "took a hell of a bite of",
    "ran away with",
    "made a graffiti on",
    "kicked",
    "peed on"
  ];
  let what = [
    "my report",
    "an angry man",
    "my sandwich",
    "an old lady",
    "my shoes"
  ];
  let when = [
    "while I was in the toilete",
    "while I was buying my lunch",
    "when I was on my way to the office",
    "while I was taking my daily nap",
    "while was hanging over the street"
  ];

  function random(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }

  let excuse = `
    Sorry boss, 
    ${random(who)} 
    ${random(action)} 
    ${random(what)} 
    ${random(when)}`;

  console.log(excuse);
  document.getElementById("excuse").innerHTML = excuse;
};
