

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

  if (check(step)){
    // showStep(step);
    console.log("Все гаразд");
  }

}

function check(step) {

  if (step == 2) {
    return checkStep1();
  }

  return false;
}

function checkStep1() {

  const name = userNameElement.value;
  const sename = userSemameElement.value;
  const middleName = userMiddlenameElement.value;
  
  const phone = userPhoneElement.value;
  const iGree = userIgreeElement.checked;

  if (!checkInputText(name)) {
    alert("Ім'я ввдено не вірно");
    return false;
  }

  if (!checkInputText(sename)) {
    alert("Прізвище ввдено не вірно");
    return false;
  }

  if (!checkInputText(middleName)) {
    alert("По батькові ввдено не вірно");
    return false;
  }

  if (!checkPhone(phone)) {
    alert("Телефон ввдено не вірно");
    return false;
  }

  if(!iGree) {
    alert("Ви повинні погодитись на обробку персональних даних!");
    return false;
  }

  return true;

}


function checkPhone(str) {
  const rx = /^\+?\d{9,12}$/;
  return rx.test(str);
}

console.log(checkPhone("+380661234567"));

function checkInputText(str) {
  const rx = /^[А-Яа-яёЁЇїІіЄєҐґ]{2,40}$/;
  return rx.test(str);
}

function showStep(step) {
  document.querySelector(".show").classList.remove("show");
  document.querySelector(`#step${step}`).classList.add("show");
}

// console.log(button.getAttribute("data-go-to-step"));