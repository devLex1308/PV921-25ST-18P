
$(document).ready(function() {
  console.log("DOM is load!");
  const $blockForAnimateElement = $("#blockForAnimate");

  let i = 0;

  $blockForAnimateElement.mouseover(function() {
    $blockForAnimateElement.css("background","green");
  }).mouseout(function() {
    $blockForAnimateElement.css("background","#888");
  }).click(function(){
    i++;
    $blockForAnimateElement.html(i);
  }).dblclick(function() {
    i=-3;
    $blockForAnimateElement.html(i);
  });

  const $userNameElement = $("#userName");

  $userNameElement.focus(function(){
    console.log("focus");
    $(this).attr("value","")
  });
  $userNameElement.blur(function(){
    console.log("blur");
    const value = $(this).attr("value");
    console.log({
      value,
      width: $(this).css("width")
    });
    $(this).attr("value","Введите ФИО");

    $("#userSuname").focus();


  });
  $userNameElement.change(function(){
    console.log("change");
    // alert("Содержимое данного элемента было изменено.")
  });

});
