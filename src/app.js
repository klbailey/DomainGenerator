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

  //Loop through each array in nested loop
  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        console.log(
          //Concat one per array and add .com at end
          pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com"
        );
      }
    }
  }
};
