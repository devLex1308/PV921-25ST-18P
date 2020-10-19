$(document).ready(function() {
  console.log("Браузер повністю завантажив код 2");

  $table = $("#game");

  $("#game td").click(function (el) {
    
    if(!$(this).html()) {   
      if($table.hasClass("zero")) {
        $(this).html("X");
        $table.removeClass("zero");
      } else {
        $(this).html("0");
        $table.addClass("zero");
      }
    }



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
