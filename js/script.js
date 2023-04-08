"use strict";

const buttons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "(",
  ")",
  "+",
  "-",
  "*",
  "/",
];
let displayContent = document.querySelector(".content");

const changeMode = () => {
  document.querySelector(".night").classList.toggle("dn");
  document.querySelector(".day").classList.toggle("dn");
  document.querySelector(".body").classList.toggle("body-light");
  document.querySelector(".menuBar").classList.toggle("body-light");
  document.querySelector(".display").classList.toggle("display-light");
  Array.from(document.querySelectorAll(".btn")).forEach((btn) => {
    btn.classList.toggle("btn-light");
  });
  Array.from(document.querySelectorAll("li")).forEach((li) => {
    li.classList.toggle("li-light");
  });
};

const btnClick = (e) => {
  if (e.innerHTML === "C") {
    displayContent.innerHTML = "0";
  } else {
    if (displayContent.innerHTML === "0") {
      displayContent.innerHTML = e.innerHTML;
    } else {
      displayContent.innerHTML += e.innerHTML;
    }
  }
};

window.addEventListener("keyup", (e) => {
  if (e.key === "=" || e.key === "Enter") {
    calculate();
  } else if (e.code === "KeyC") {
    displayContent.innerHTML = "0";
  }
});

window.addEventListener("keypress", (e) => {
  if (buttons.includes(e.key)) {
    if (displayContent.innerHTML === "0") {
      displayContent.innerHTML = e.key;
    } else {
      displayContent.innerHTML += e.key;
      displayContent.scroll(0, 10000);
    }
  }
});

const calculate = () => {
  try {
    if (displayContent.innerHTML) {
      displayContent.innerHTML = eval(displayContent.innerHTML);
    }
  } catch (error) {
    displayContent.innerHTML = "Invalid Input";
    setTimeout(() => {
      displayContent.innerHTML = "0";
    }, 500);
  }
};

const toggleMenu = () => {
  document.querySelector(".menuBar").classList.toggle("open");
};
