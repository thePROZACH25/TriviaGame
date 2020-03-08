// ========================================
// Var
var questions = [
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  }
];

// ========================================
// Start game function
$("#start-button").on("click", function() {
  $("#start-button").remove();
  for (var i = 0; i < questions.length; i++) {
    $(".quest-table").append(`<h3> ${questions[i].question} </h3>`);
    for (var j = 0; j < questions[i].answers.length; j++) {
      $(".quest-table").append(
        "<input type='radio' name='question-" +
          i +
          "' value='" +
          questions[i].answers[j] +
          "'>" +
          questions[i].answers[j]
      );
    }
  }
});
