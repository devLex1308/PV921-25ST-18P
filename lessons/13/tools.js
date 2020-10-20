
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

  $("#el1").focus(function(){$(this).attr("value","")});
  $("#el1").blur(function(){$(this).attr("value","Введите ФИО")});
  $("#el2").change(function(){ alert("Содержимое данного элемента было изменено.") });

});
