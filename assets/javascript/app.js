var card = $("#game-questions");

// Question set
var questions = [
    {
        question: "What was the first full length CGI movie?",
        options: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
        answer: "Toy Story"
    },
    {
        question: "Which of these is NOT a name of one of the Spice Girls?",
        options: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
        answer: "Fred Spice"
    },
    {
        question: "Which NBA team won the most titles in the 90s?",
        options: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
        answer: "Chicago Bulls"
    },
    {
        question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
        options: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
        answer: "Nirvana"
    },
    {
        question: "Which popular Disney movie featured the song, 'Circle of Life'?",
        options: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
        answer: "The Lion King"
    }
];

// Variable that will hold the setInterval
var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);

        $(".trivia-section").prepend(
            "<h6>Time Remaining: <span id='counter-number'>120</span> Seconds</h6>"
        );

        $("#start-btn").hide();
        $('#game-info').hide();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h6>" + questions[i].question + "</h6>");
            for (var j = 0; j < questions[i].options.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].options[j] + "''>" + questions[i].options[j]);
            }
        }

        card.append('<button type="button" id="end-btn" class="btn btn-warning btn-lg">Done</button>');

    },

    done: function () {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },

    result: function () {
        clearInterval(timer);

        $(".trivia-section h6").hide();

        card.html("<h3>All Done!</h3>");
        card.append("<h5>Correct answers: " + this.correct + "</h5>");
        card.append("<h5>Incorrect answers: " + this.incorrect + "</h5>");
    }
};

// CLICK EVENTS

$(document).on("click", "#start-btn", function () {
    game.start();
});

$(document).on("click", "#end-btn", function () {
    game.done();
});