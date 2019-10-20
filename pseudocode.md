## Trivia Game Logic

*Remember the sandwich analogy, think about all functions needed for the game to work.*

- Click 'Start Game' and the questions + choices show on the HTML
    - Create an array of questions
    - Create an array of choices
    - *Bootstrap form radio buttons* https://getbootstrap.com/docs/4.3/components/forms/#default-stacked
- Create a function for the correct answer & incorrect answer (if/else)
- Create variable to start the timer
- Create a variable to end the timer
- Add questions + choices so that they show on the HTML | .append ???
- Create a button to click if the player finishes the game before the time is up
- 
<!-->
    <div class="question-wrapper">
            <input id="male" type="radio" name="gender" value="male"><label for="male"> Male</label><br>

            <input  id="female" type="radio" name="gender" value="female"> <label for="female">Female</label><br>
            <input  id="other" type="radio" name="gender" value="other"> <label for="other">Other</label>
    </div>
    <div class="question-wrapper">
            <input id="male" type="radio" name="gender2" value="male"><label for="male"> Male</label><br>

            <input  id="female" type="radio" name="gender2" value="female"> <label for="female">Female</label><br>
            <input  id="other" data-c="t" type="radio" name="gender2" value="other"> <label for="other">Other</label>
    </div>
<!-->
