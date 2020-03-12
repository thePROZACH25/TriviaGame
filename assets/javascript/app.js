// ========================================
// Var
var questions = [
  {
    question: "Which car manufacturer has won the 24hr of Le Mans the most?",
    answers: ["Ford", "Porsche", "Ferrari", "Toyota"],
    currectAnswers: "Porsche"
  },
  {
    question:
      "In the 1990 cult classic TV show Twin Peaks, who killed Laura Palmer?",
    answers: [
      "Josie Packard",
      "Agent Cooper",
      "Donna Hayward",
      "Leland Palmer"
    ],
    currectAnswers: "Leland Palmer"
  },
  {
    question:
      "Most people don't know but there are different types of Orca Whales. How many are there?",
    answers: ["4", "8", "2", "7"],
    currectAnswers: "4"
  },
  {
    question: "What is the most commonly landed on space in Monopoly?",
    answers: [
      "St. James Place",
      "North Carolina Avenue",
      "Park Place",
      "Illinois Avenue"
    ],
    currectAnswers: "Illinois Avenue"
  },
  {
    question: "What is the molecular formula of Heavy Water?",
    answers: ["H2O", "D2O", "THO", "T2O"],
    currectAnswers: "D2O"
  },
  {
    question:
      "Ranging from $6k-$40k, which one of these Nike sneakers has the lowest resale value?",
    answers: [
      "Air Mag Back to the Future",
      "Dunk Low Pro SB Pigeon",
      "Yeezy 2 Red October",
      "Air Jordan 11 'Jeter'"
    ],
    currectAnswers: "Dunk Low Pro SB Pigeon"
  },
  {
    question:
      "In 2014, setting a record of 240hr, which DJ holds the title for the longest DJ set?",
    answers: ["DJ Obi", "DJ Jazzy Jeff", "Grand Master Flash", "DJ Swisha"],
    currectAnswers: "DJ Obi"
  },
  {
    question:
      "In graffiti, some artist will tag locations like highway over passes, tall bridges and billboards. What are theses locations referred to as?",
    answers: ["Racking", "Landmark", "Heaven Spot", "Slam"],
    currectAnswers: "Heaven Spot"
  },
  {
    question:
      "In Fist of the Norht Star, Kenshiro is one of 4 adopted siblings but he has one real brother. Who is he?",
    answers: ["Toki", "Raoh", "Hyō", "Jagi"],
    currectAnswers: "Hyō"
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
  counter: 30,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      // console.log("Time's Up");
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
    $(".quest-table").append(`<br><button id="done">Done</button>`);
  },

  done: function() {
    console.log(this.done)
    $.each($("input['name=question-0']: checked"), function() {
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
      if ($(this).val() == questions[6].correctAnswer) {
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

$(document).on("click", "#done", function() {
  game.done();
});
