$(document).ready(function () {

  // set score
  var score = 0;
  $("#score").html(score + " " + "Points");

  // increase by 5 on click event
  $("#increase-5").on("click", function()  {
    // score = score + 5;
    score +=5;
    $("#score").html(score + " Points");
    console.log(score, "CURRENT SCORE");
  });

  // decrease by 5 on click event
  $("#decrease-5").on("click", function()  {
    if ((score-5) >= 0) {
      score -= 5;
      $("#score").html(score + " Points");
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
      $("#score").html(score + " Points");
      console.log(score, "CUSTOM SCORE");
      $("#custom-score").val("");
    } else {
      score = 0;
      $("#score").html("0 Points");
      alert("You can't enter a negative score");
    };

  });

});
