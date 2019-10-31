$(document).ready(function () {
    $("#game-timer").parent().hide();
    // $('#game-questions').hide();
    $(document).on('click', '#start-game', function () {
        $("#start-game").hide();
        $("#game-timer").parent().show();
        $("#game-questions").show();
        var seconds = 10;
        var gameTimer = setInterval(() => {
            seconds--;
            if (seconds === 0) {
                clearInterval(gameTimer);
                alert("Sorry, time's up!");
            }
            $("#game-timer").text(seconds);
        }, 1000);
        $("#game-questions").html(gameQuestions[q]); 
    });

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

    // Testing code for game questions

        // Code to show questions.
        for (var q = 0; q < gameQuestions.length; q++) {
        $("#game-questions").append("<p>" + gameQuestions[q].question + "</p>")
        console.log(gameQuestions[q]);
        
        // Code to show answers. Create buttons
        for (var a = 0; a < gameQuestions[q].options.length; a++) {
        //Testing layout of answers to show on HTML
            $("#game-questions").append("<p> <input type='radio'>" + gameQuestions[q].options[a] + "</p>");
        }
    }

    // Code by tutor
    setTimeout(() => {
        console.log($('input:checked'))
    }, 3000)
})
