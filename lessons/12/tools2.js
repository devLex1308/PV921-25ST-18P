$(document).ready(function() {
  console.log("Браузер повністю завантажив код 2");

  $("#game td").click(function (el) {
    $(this).html("X");
  }).on( "mouseenter", function() {
    $( this ).css({
      "background-color": "yellow",
      "font-weight": "bolder"
    });
  })
  .on( "mouseleave", function() {
    var styles = {
      backgroundColor : "",
      fontWeight: ""
    };
    $( this ).css(styles);
  });;

});
