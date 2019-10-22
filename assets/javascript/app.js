$(document).ready(function(){
    $("#game-timer").parent().hide();
     $(document).on('click', '#start-game',function(){
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
        $("#game-questions").html(gameQuestions[0].question);
     });

        // Questions
        
        var question1 = {
            question: 'Who framed Roger Rabbit?',
            options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
            answer: 'The Fuzz',     
        };
        var question2 = {
            question: 'Who framed Roger Bear?',
            options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
            answer: 'Bob',     
        };
        var question3 = {
            question: 'Who framed Roger Dog?',
            options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
            answer: 'Jeff',     
        };
        var question4= {
            question: 'Who framed Roger Cat?',
            options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
            answer: 'The Fuzz',     
        };
        var question5 = {
            question: 'Who framed Roger Tiger?',
            options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
            answer: 'Peter',     
        };
        
        // Array of questions

        var gameQuestions = [question1, question2, question3, question4, question5];
        
        console.log(gameQuestions[0].question);

        // Testing code for game questions
        for (var i = 0; i < gameQuestions.length; i++) {
            console.log(gameQuestions[i]);
          }

     /*    var i = 0
        // Function to show questions 

        var showQuestions = function () {
            $("#game-questions").text(gameQuestions[i])
        }
 */

     setTimeout(()=> {
        console.log($('input:checked'))
     }, 3000)
   
    });

        //Find each question wrapper
        
        //Do a for each and within each div search for input:checked if it exists great they answered if not they didnt
