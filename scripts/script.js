$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked dogeOne");
    $("#outputMsg").text("You Lose, Better Luck Next Time");
    $("#outputDiv").toggle();
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo");
    $("#outputMsg").text("Congratulations! You has WOW! Thank You for playing! ");
    $("#outputDiv").toggle();
  });
});