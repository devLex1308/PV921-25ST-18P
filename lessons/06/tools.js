

const userNameElement = document.querySelector("#userName");
const userSemameElement = document.querySelector("#userSemame");
const userMiddlenameElement = document.querySelector("#userMiddlename");

const userPhoneElement = document.querySelector("#userPhone");
const userIgreeElement = document.querySelector("#userIgree");

const userBusElement = document.querySelector("#userBus");
const userHotelElement = document.querySelector("#userHotel");
const userTextElement = document.querySelector("#userText");

const buttons = document.querySelectorAll(".goToStep");

document.querySelector("#step3").classList.add("show");

for(let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", clickButton)
}


function clickButton(event) {
  console.log(event);
  const button = event.target;
  console.log({button});
  const step = event.target.getAttribute("data-go-to-step");
   
  const submit = event.target.getAttribute("data-submit");

  if (submit) {
    checkStep3();
    console.log(getAllData());
    resetData();
  }
  // console.log({step});

  if (step && check(step)){
    // showStep(step);
    console.log("Все гаразд");
  }

}

function check(step) {

  if (step == 2) {
    return checkStep1();
  }

  if (step == 3) {
    return checkStep2();
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

function resetData() {
  userNameElement.value = "";
  userSemameElement.value = "";
  userMiddlenameElement.value = "";
  userPhoneElement.value = "";
  userIgreeElement.checked = false;
  userBusElement.value = "1";
  userHotelElement.value = "1";
  document.querySelector("#step3 input[type='radio']:checked").checked = false;
  userTextElement.value = "";
}

function checkStep2() {
  const bus = userBusElement.value;
  const hotel = userHotelElement.value;

  console.log({
    bus,
    hotel,
  })

  return true;
}

function getAllData() {
  const name = userNameElement.value;
  const sename = userSemameElement.value;
  const middleName = userMiddlenameElement.value;
  const phone = userPhoneElement.value;
  const iGree = userIgreeElement.checked;
  const bus = userBusElement.value;
  const hotel = userHotelElement.value;
  const skyType = document.querySelector("#step3 input[type='radio']:checked").value;
  const userText = userTextElement.value;

  return {
    name,
    sename,
    middleName,
    phone,
    iGree,
    bus,
    hotel,
    skyType,
    userText
  }
}


function checkStep3() {
  console.log("checkStep3");
  const radioElemen = document.querySelector("#step3 input[type='radio']:checked");
  if (radioElemen) {
    console.log(radioElemen.value);
  }
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