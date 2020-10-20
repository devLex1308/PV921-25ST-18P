
$(document).ready(function() {

  const availableTags = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];
  $( "#selectMouth" ).autocomplete({
    source: availableTags
  });

  $( "#datepicker" ).datepicker({
      inline: true,
      firstDay: 1,
      monthNames: availableTags,
      dayNamesMin: [ "Нд", "Пн", "Вт", "Ст", "Чт", "Пт", "Сб" ]
  });

  $( "#draggable" ).draggable();

});
