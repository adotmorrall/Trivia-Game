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
            alert("Time's up!");
        }
        $("#game-timer").text(seconds);
        }, 1000);
        $("#game-questions").text(gameQuestions);
     });

        /* Create an array for the questions
        & assign a variable per question where it calls the index of it in the gameQuestions array */

        var gameQuestions = {
            question1: 'Who framed Roger Rabbit?',
            options: ['Bob', 'Jeff', 'The Fuzz', 'Peter'],
            answer: 'The Fuzz',     
        }
        
        

 /*     var gameQuestions = [
         {
             question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem nemo, laborum eligendi quod cum ullam totam magni"
         },
         {
             question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem nemo, laborum eligendi quod cum ullam totam magni"
         },
         {
             question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem nemo, laborum eligendi quod cum ullam totam magni"
         },
     ] */

     setTimeout(()=> {
        console.log($('input:checked'))
        //Find each question wrapper
        //DO a for each and within each div search for input:checked if ti exists great they answered if not they didnt
     }, 3000)
   
    });
