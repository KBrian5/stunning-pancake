$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked dogeOne 2");
    $("#outputMsg").text("You Lose! Better Luck Next Time!");
    $("#outputDiv").toggle().fadeToggle(5000);
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo 2");
    $("#outputMsg").text("Congratulations! You has the Wow! Thank you for playing!");
    $("#outputDiv").toggle().fadeToggle(5000);
  });
});