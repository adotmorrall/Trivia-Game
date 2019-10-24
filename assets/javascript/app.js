/* $(document).ready(function () {
    $("#game-timer").parent().hide();
    $(document).on('click', '#start-game', function () {
        $("#start-game").hide();
        $("#game-timer").parent().show();
        $("#game-questions").parent().show();
        var seconds = 10;
        var gameTimer = setInterval(() => {
            seconds--;
            if (seconds === 0) {
                clearInterval(gameTimer);
                alert("Sorry, time's up!");
            }
            $("#game-timer").text(seconds);
        }, 1000);
        $("#game-questions").html(gameQuestions[0].question); // Figure out how to get content to show all questions in the HTML
    }); */
    
    // Create an array of objects for game questions
    
    // Questions
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
/*     function showQuestions() {
        $("#game-questions").text(gameQuestions[i].question) */
        for (var q = 0; q < gameQuestions.length; q++) {
            $("#game-questions").append("<h4>" + gameQuestions[q].question + "</h4>")
            console.log(gameQuestions[q]);
        }
    
    setTimeout(() => {
        console.log($('input:checked'))
    }, 3000)
