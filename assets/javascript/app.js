$("#start-button").on("click", function() {
  $("#start-button").remove();
  for (var i = 0; i < questions.length; i++) {
    $(".quest-table").append(`<h3> ${questions[i].question} </h3>`);
  }
});

var questions = [
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heaven’s Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  }
];
