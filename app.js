$(document).ready(function () {

  // set score
  var score = 0;
  $("#score").html(score + " " + "Points");

  // click event on increase by 5
  $("#increase-5").on("click", function()  {
    score = score + 5;
    $("#score").html(score + " " +"Points");
    console.log(score, "CURRENT SCORE");
  });

  // click event on decrease by 5
  $("#decrease-5").on("click", function()  {
    if ((score-5) >= 0) {
      score = score - 5;
      $("#score").html(score + " " + "Points");
      console.log(score, "CURRENT SCORE");
    }
  });

  // set custom score
  $("#custom-score-form").on("submit", function(event) {
    event.preventDefault();
    var customScore = parseInt($("#custom-score").val());
    // check if customScore is negative
    if (customScore >= 0) {
      score = customScore;
      $("#score").html(score + " " + "Points");
      console.log(score, "CUSTOM SCORE");
    };

  });

});
