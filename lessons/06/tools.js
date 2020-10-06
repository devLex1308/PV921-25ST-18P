const userNameElement = document.querySelector("#userName");
const userSemameElement = document.querySelector("#userSemame");
const userMiddlenameElement = document.querySelector("#userMiddlename");
const userPhoneElement = document.querySelector("#userPhone");
const userAgreeElement = document.querySelector("#userAgree");

const userBusElement = document.querySelector("#userBus");
const userHotelElement = document.querySelector("#userHotel");


const buttons = document.querySelectorAll(".goToStep");

const finalButton = document.querySelector("button");

console.log(finalButton);

document.querySelector('#step3').classList.add("show");

for (let i = 0; i < buttons.length; i++) {
	const button = buttons[i];
	button.addEventListener("click", clickButton);
}

function clickButton(event) {
	console.log(event);
	const button = event.target;
	console.log({button});
	const step = event.target.getAttribute("data-go-step");

	const submit = event.target.getAttribute("data-submit");

	

	console.log(submit);

	if(submit){
		checkStep3();
	}

	//console.log({step});

	// console.log(userSemameElement.value);
	// console.log(userNameElement.value);
	// console.log(userMiddlenameElement.value);
	// console.log(userPhoneElement.value);
	// console.log(userAgreeElement.checked);



//////////////////////DZ////////////////////////

	if(step && checkData(step)){
		showStep(step);
	}

	//console.log(checkData(step));
/////////////////////////////////////////////
	
}

function showStep(step){
	document.querySelector(".show").classList.remove("show");
	document.querySelector(`#step${step}`).classList.add("show");
}


//////////////////////DZ////////////////////////


function checkData(step){
	switch(step){
		case("2"):
		return checkStep1();
		case("3"):
		return checkStep2();
		default:
		return true //false; 
	}
}

function checkStep1(){
	const rxName = /^[А-ЯЁЇІҐ]+[а-яёїієґ\-\']{1,39}$/;
	const rxPhone = /^\+?\d{9,12}$/;

	const res1 = checkInput(userNameElement, rxName);
	const res2 = checkInput(userSemameElement, rxName);
	const res3 = checkInput(userMiddlenameElement, rxName);
	const res4 = checkInput(userPhoneElement, rxPhone);
	const res5 = checkCheckBox(userAgreeElement);

	return res1 && res2 && res3 && res4 && res5;
}


function checkStep2(){
	
	const bus = userBusElement.value;
	const hotel = userHotelElement.value;

	// console.log(bus);
	// console.log(hotel);
}

function checkStep3(){
	
	const radioButtonElement = document.querySelector("#step3 input[type=radio]:checked");
	//console.log(radioButtonElement);

}


function getAllData(){
	const surname = userSemameElement.value;
	const name = userNameElement.value;
	const midleName = userMiddlenameElement.value;
	const phone = userPhoneElement.value;
	const agree = userAgreeElement.checked;
	const bus = userBusElement.value;
	const hotel = userHotelElement.value;
	const abonem = document.querySelector("#step3 input[type=radio]:checked")
	const qustion = document.querySelector('#userText');

	return {
		surname,
		name,
		midleName,
		phone,
		agree,
		bus,
		hotel,
		abonem,
		qustion,
	}
}

	function resetData(){
		// userSemameElement.value;
		// userNameElement.value
		// userMiddlenameElement.value
		// userPhoneElement.value
		// userAgreeElement.checked
		// userBusElement.value
		// userHotelElement.value
		// document.querySelector("#step3 input[type=radio]:checked")
		// document.querySelector('#userText');
	}

function checkInput(element, rx){
	if(rx.test(element.value)){
		if(element.classList.contains("red-border")){
			element.classList.remove("red-border")
		}
		return true;
	}
	else{
		if(!element.classList.contains("red-border")){
			element.classList.add("red-border")
		}
		return false;
	}
}


function checkCheckBox(element){
	if(element.checked){
		if(element.classList.contains("red-shadow")){
			element.classList.remove("red-shadow")
		}
		return true;
	}
	else{
		if(!element.classList.contains("red-shadow")){
			element.classList.add("red-shadow")
		}
		return false;
	}
}