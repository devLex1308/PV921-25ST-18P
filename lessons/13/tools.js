
$(document).ready(function() {
  console.log("DOM is load!");
  const $blockForAnimateElement = $("#blockForAnimate");

  let i = 0;

  $blockForAnimateElement.mouseover(function() {
    $blockForAnimateElement.css("background","green");
    // $("#blockForAnimate2").slideDown(2000);

//     slideUp
// slideDown
// slideToggle

  }).mouseout(function() {
    // $("#blockForAnimate2").slideUp(2000);
    $blockForAnimateElement.css("background","#888");
  }).click(function(){
    i++;
    $blockForAnimateElement.html(i);
  }).dblclick(function() {
    i=-3;
    $blockForAnimateElement.html(i);
  });
  // .fadeTo(5000, 0.0);

  // const $userNameElement = $("#userName");

  // $userNameElement.focus(function(){
  //   console.log("focus");
  //   $(this).attr("value","")
  // });
  // $userNameElement.blur(function(){
  //   console.log("blur");
  //   const value = $(this).attr("value");
  //   console.log({
  //     value,
  //     width: $(this).css("width")
  //   });
  //   $(this).attr("value","Введите ФИО");

  //   $("#userSuname").focus();


  // });
  // $userNameElement.change(function(){
  //   console.log("change");
  //   // alert("Содержимое данного элемента было изменено.")
  // });

  $userNameElement = $("#userName");
  $userSunameElement = $("#userSuname");
  $middleNameElement = $("#middleName");

  $userNameElement.blur(function(){
    const val = $(this).val();
    if (val) {
      $userSunameElement.focus();
    }
  });


  $userSunameElement.blur(function(){
    const val = $(this).val();
    if (val) {
      $middleNameElement.focus();
    }
  });

  $("#submit").click(function() {
    $('#list').append(`<li> 5 </li>`);
  });

  $("#par1").prepend("<b>jQuery</b> - это  ");
  $("#par1").append(" значительно упрощающая написание кода.");



  // $par1 = $("#par1");


  //  $par1.toggle(function(){
  //    $par1.css("color","green");
  //    $par1.css("font-size","10px");
  //  });


});
