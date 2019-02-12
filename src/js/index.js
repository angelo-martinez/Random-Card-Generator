//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  //suit number selected
  var x = document.querySelectorAll(".suit");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = cardsuits();
  }
  //middle number selction
  let middlenum = Math.floor(Math.random() * 14 + 1);
  document.querySelector("#midnum").innerHTML = middlenum;
};

let cardsuits = () => {
  let suittype = ["\u2660", "\u2663", "\u2665", "\u2666"];

  let suitindex = Math.floor(Math.random() * suittype.length);

  return suittype[suitindex];
};
