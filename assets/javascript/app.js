$(document).ready(function(){
    $('#game-timer').parent().hide();
     $(document).on('click', '#start-game',function(){
         $('#start-game').hide();
         $('#game-timer').parent().show();
        var seconds = 60;
        var gameTimer = setInterval(() => {
        seconds--;
        if (seconds === 0) {
            clearInterval(gameTimer)
        }
        $("#game-timer").text(seconds);
        }, 1000);
     });




     setTimeout(()=> {
        console.log($('input:checked'))
        //Find each question wrapper
        //DO a for each and within each div search for input:checked if ti exists great they answered if not they didnt
     }, 3000)
   
    });
