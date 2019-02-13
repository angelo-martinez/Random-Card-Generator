//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  //suit type assigned
  var x = document.querySelector("#topish");
  var y = document.querySelector("#bottomish");
  var suit = cardsuits();

  x.innerHTML = suit;
  y.innerHTML = suit;
  //middle number selction
  document.querySelector("#midnum").innerHTML = cardmiddle();
};
// suit type algorithim

// middle number algorithim
let cardmiddle = () => {
  let cardnumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let cardindex = Math.floor(Math.random() * cardnumbers.length);

  return cardnumbers[cardindex];
};
let cardsuits = () => {
  let suittype = ["\u2660", "\u2663", "\u2665", "\u2666"];

  let suitindex = Math.floor(Math.random() * suittype.length);

  return suittype[suitindex];
};
