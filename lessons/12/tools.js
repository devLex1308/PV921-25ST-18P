

function calk(initValue) {

  let _value = initValue;

  this.add = function(number) {
    _value += number; 
    return this;
  }

  this.multiple = function (number) {
    _value *= number;
    return this;
  }

  this.set = function (number) {
    _value = number;
    return this;
  }

  this.get = function () {
    console.log(_value);
    return _value;
  }

  this.pow = function(i) {
    const currentValue = _value;
    for (let j = 1; j < i; j++) {
      _value *= currentValue;
    }
    return this;
  }

  return this;
}

const currentCalk = new calk(2);
// currentCalk.add(2).add(8).multiple(0.5).pow(3);
currentCalk.add(0).pow(10);
// currentCalk.add(8);
// currentCalk.multiple(2);

const result = currentCalk.get();

console.log({
  result
});


$(document ).ready(function() {
  const $testElement = $("#test").html("Гарний текст").addClass("show").addClass("show2");

  // $("#blockForAnimate").hide(500).show(500).hide(1500).show(2500);
  // $("#blockForAnimate").hide();

  const $blockForAnimate = $("#blockForAnimate");
  const $showRectangle = $("#showRectangle");

  $showRectangle.click(function () {
    
    // if ($("#blockForAnimate").is(":visible") == true) {
    //   $blockForAnimate.hide(500);
    //   $showRectangle.html("Показати блок");
    // } else {
      // $blockForAnimate.show(500);
      console.log(5);
      $blockForAnimate.animate({
        width: 50,
        height: 50,
      }, 500, function() {
        // Animation complete.
      console.log(6);
      }).animate({
        width: 450,
        height: 150,
        opacity: 0.1,
      }, 500, function() {
      console.log(7);
        // Animation complete.
      });
      $showRectangle.html("Приховати блок");
    // }

  });


  console.log("Браузер повністю завантажив код");
});
