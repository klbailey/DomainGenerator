/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        console.log(
          pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com"
        );
      }
    }
  }
};

// empty for all 3 to go into?

// Another variable to randomly select but I need all list of all possible combinations

// let pronounIndex = Math.floor(Math.random() * pronoun.length);
// let adjIndex = Math.floor(Math.random() * adj.length);
// let nounIndex = Math.floor(Math.random() * noun.length);

//You'll need to use nested for loops in order to mix the different values together for loop string concat
// for (let i = 0; i <) {} if

// innerhtml to add the string together I'd try consol log all of this but nothing is showig
// document.getElementById("domain").innerHTML =
//   pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com";

//Show something on the console and of course it's not showing up in console
// But I want to console log all 8
// console.log("any string");
