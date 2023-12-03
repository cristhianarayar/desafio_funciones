const mycolorblue = document.getElementById("blue");
const mycolorred = document.getElementById("red");
const mycolorgreen = document.getElementById("green");
const mycoloryellow = document.getElementById("yellow");
const color = "black";
let booleanval = false;


//4_colores

mycolorblue.addEventListener("click", () => {
  if (booleanval == false) {
    mycolorblue.style.backgroundColor = color;
    booleanval = true;
  } else if (booleanval === true) {
    mycolorblue.style.backgroundColor = "blue";
    booleanval = false;
  }
});
mycolorred.addEventListener("click", () => {
  if (booleanval == false) {
    mycolorred.style.backgroundColor = color;
    booleanval = true;
  } else if (booleanval === true) {
    mycolorred.style.backgroundColor = "red";
    booleanval = false;
  }
});
mycolorgreen.addEventListener("click", () => {
  if (booleanval == false) {
    mycolorgreen.style.backgroundColor = color;
    booleanval = true;
  } else if (booleanval === true) {
    mycolorgreen.style.backgroundColor = "green";
    booleanval = false;
  }
});
mycoloryellow.addEventListener("click", () => {
  if (booleanval == false) {
    mycoloryellow.style.backgroundColor = color;
    booleanval = true;
  } else if (booleanval === true) {
    mycoloryellow.style.backgroundColor = "yellow";
    booleanval = false;
  }
});



