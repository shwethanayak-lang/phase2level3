$("#clear").on("click", function () {
  $("#screen").val(" ");
});

$("#equal").on("click", function () {
  $("#screen").val(eval($("#screen").val()));
});

var del = () => {
  value = $("#screen").val();
  $("#screen").val(value.substring(0, value.length - 1));
};

var insrt = (num) => {
  $("#screen").val($("#screen").val() + num);
};
