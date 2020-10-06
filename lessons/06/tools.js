

const userNameElement = document.querySelector("#userName");
const userSemameElement = document.querySelector("#userSemame");
const userMiddlenameElement = document.querySelector("#userMiddlename");

const userPhoneElement = document.querySelector("#userPhone");
const userIgreeElement = document.querySelector("#userIgree");

const buttons = document.querySelectorAll(".goToStep");

document.querySelector("#step1").classList.add("show");

for(let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", clickButton)
}


function clickButton(event) {
  console.log(event);
  const button = event.target;
  console.log({button});
  const step = event.target.getAttribute("data-go-to-step");
  // console.log({step});

  console.log(userNameElement.value);
  console.log(userSemameElement.value);
  console.log(userMiddlenameElement.value);
  
  console.log(userPhoneElement.value);
  console.log(userIgreeElement.checked);

  // showStep(step);
}

function showStep(step) {
  document.querySelector(".show").classList.remove("show");
  document.querySelector(`#step${step}`).classList.add("show");
}

// console.log(button.getAttribute("data-go-to-step"));