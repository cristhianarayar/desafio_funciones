const a = "pink";
const d = "lightblue";
const s = "orange";
const q = "purple";
const w = "grey";
const e = "brown";
const mykey = document.getElementById("key");
const mykey2 = document.getElementById("key2");
const myflex = document.getElementsByClassName("flex");

function addElement(color) {
    mykey2.classList.add("div-key");
    mykey2.style.backgroundColor = color;
  }
  
  document.addEventListener("keydown", function (event) {
    if (event.key == "a") {
      mykey.style.backgroundColor = a;
    } else if (event.key == "s") {
      mykey.style.backgroundColor = s;
    } else if (event.key == "d") {
      mykey.style.backgroundColor = d;
    }
  });
  
  document.addEventListener("keydown", function (event) {
    if (event.key == "q") {
      addElement(q);
    } else if (event.key == "w") {
      addElement(w);
    } else if (event.key == "e") {
      addElement(e);
    }
  });
  