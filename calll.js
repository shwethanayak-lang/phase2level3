//function for clear button
$("#clear").on("click", function () {
  $("#screen").val(" ");
});

// function for equal
$("#equal").on("click", function () {
  $("#screen").val(eval($("#screen").val()));
});
// function for delete button
var del = () => {
  value = $("#screen").val();
  $("#screen").val(value.substring(0, value.length - 1));
};

var insrt = (num) => {
  $("#screen").val($("#screen").val() + num);
};
