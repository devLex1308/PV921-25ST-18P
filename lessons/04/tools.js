let number = 0;

function plus(a, element){
	number += a;
	console.log({number, element});
}

function minus(a, element){
	number -= a;
	console.log({number, element});
}

function fre(element){
	number *= 2;
	console.log({number, element});
}

function div(element){
	number /= 2;
	console.log({number, element});
}

function log(element){
	console.log({number, element});
}


const secondElement = document.querySelector("#td-2");
console.log(secondElement);
secondElement.style.backgroundColor = 'green';

const colors = [
  "#008000",
  "#FF69B4",
  "#FFFFF0",
  "#FFF0F5",
  "#D3D3D3"
];


function chengeColor(element) {
  number++;
  const colorIndex = number%colors.length;
  element.style.backgroundColor = colors[colorIndex];
  element.innerHTML = '<b>x</b>';
}

function game(element) {
  if (number > 9) {
    alert("Гру завершено");
    return;
  }
  if (element.innerHTML) {
    return;
  }
  number++;
  element.innerHTML = number % 2 === 0 ? "x": "o";
}



