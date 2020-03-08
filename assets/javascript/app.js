// ========================================
// Var
var questions = [
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  },
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  },
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  },
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  },
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  },
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  },
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  },
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  },
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  },
  {
    question:
      "What geothermal Icelandic site has the same name as a 1980 movie?",
    answers: ["Xanadu", "The Shining", "Heavens Gate", "The Blue Lagoon"],
    currectAnswers: "The Blue Lagoon"
  }
];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 20,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time's Up");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $(".quest-table").prepend(
      `<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>`
    );
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
  },

  done: function() {
    $.each($("input[name='question-0']: checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']: checked"), function() {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']: checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']: checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']: checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']: checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']: checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']: checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']: checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']: checked"), function() {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },

  result: function() {
    clearInterval(timer);
    $(".quest-table h2").remove();
    $(".quest-table").html("<h2>Finished</h2>");
    $(".quest-table").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $(".quest-table").append(
      "<h3>Incorrect Answers: " + this.cncorrect + "</h3>"
    );
    $(".quest-table").append(
      "<h3>Unnswers: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};

// ========================================
// Start game function

$("#start-button").on("click", function() {
  game.start();
});
