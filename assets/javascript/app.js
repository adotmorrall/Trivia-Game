// Page default
$('#start-btn').click(function () {
    console.log('I work');
    $('#start-btn').show();
    $('.trivia-section').hide();
    for (var q = 0; q < gameQuestions.length; q++) {
        $("#game-questions").append("<h6>" + gameQuestions[q].question + "</h6>")
        console.log(gameQuestions[q]);

        // Code to show answers. Create buttons
        for (var a = 0; a < gameQuestions[q].options.length; a++) {
            $("#game-questions").append(
                "<input type='radio' value='" + gameQuestions[q].options[a] + "' name='question-" + q + "'>"
                + gameQuestions[q].options[a]);
        }
    }
})


// Create an array of objects for game questions
var gameQuestions = [
    {
        question: 'Who framed Roger Rabbit?',
        options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
        answer: 'The Fuzz',
    },
    {
        question: 'Who framed Roger Bear?',
        options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
        answer: 'Bob'
    },
    {
        question: 'Who framed Roger Dog?',
        options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
        answer: 'Jeff',
    },
    {
        question: 'Who framed Roger Cat?',
        options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
        answer: 'The Fuzz',
    },
    {
        question: 'Who framed Roger Tiger?',
        options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
        answer: 'Peter',
    },
];

// var timer;

// // Start game
// $(document).on('click', '#start-btn', function () {
//     $('#game-info').hide();
//     $("#start-btn").hide();
//     $("#game-timer").show();
//     $("#game-questions").show();
//     // var seconds = 40;
//     // var gameTimer = setInterval(() => {
//     //     seconds--;
//     //     if (seconds === 0) {
//     //         clearInterval(gameTimer);
//     //         console.log("Sorry, time's up!"); // Change to alert
//     //     }
//     //     $("#game-timer").html('<h5> Time remaining: ' + seconds + ' seconds </h5>');
//     // }, 1000);
//     $("#end-btn").show();
// });


// $(document).on('click', '#end-btn', function () {
//     console.log('I work');
//     clearInterval(timer);
// })
//     // $('#end-btn').click(function () {
//     //     console.log('I work');
//     //     $('#game-questions input[type=radio]:checked').each(function (index) {
//     //         console.log(index, this.value);

//     // for (var i = 0; i < options.length; i++) {
//     //     if ($('#game-questions input[type=radio]:checked') === gameQuestions[i].answer) {
//     //         console.log('The answer is ' + gameQuestions[i].answer);
//     //     }
//     // }
//     //     })
//     // })
