
$(document).ready(function() {
  console.log("DOM is load!");
  const $blockForAnimateElement = $("#blockForAnimate");

  $blockForAnimateElement.mouseover(function() {
    $blockForAnimateElement.css("background","green");
  });

  $blockForAnimateElement.mouseout(function() {
    $blockForAnimateElement.css("background","#888");
  });

});

// $("p").mouseover(function(){$("p").css("color","green")});
// $("p").mouseout(function(){$("p").css("color","black")});