window.addEventListener("DOMContentLoaded", (event) => {
    //Starts the game
    document.getElementById('start').addEventListener('click', function(){
        //Removes the starting text and button
        document.getElementById('intro').style.display='none';
        document.getElementById('start').style.display='none';

        //Countdown timer
        let timeAlloted = 30;
        document.getElementById('clock').innerHTML = timeAlloted;
        const timer = setInterval(function(){
            timeAlloted--;
            document.getElementById('clock').innerHTML = timeAlloted;
            if (timeAlloted == 0){
                clearInterval(timer);
                document.getElementById('clock').remove();
                document.getElementById('circle').remove();
            }
        }, 1000);

        //Create circle after button
        const initCircle = document.createElement('div');
        initCircle.setAttribute("id", "circle")
        document.getElementById("gameSpace").append(initCircle)

        //Set Random generator
        const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const circle = document.querySelector('#circle');

        //Select a random starting position for the circle
        circle.style.left = getRandom(0, 150 - 20) + 'rem';
        circle.style.top = getRandom(0, 70 - 20) + 'rem';

        //Every time the user clicks on the circle, increase the score and randomly position the circle
        let score = 0;
        document.getElementById('circle').addEventListener('click', function(){
            score++;
            console.log(score);
            circle.style.left = getRandom(0, 150 - 20) + 'rem';
            circle.style.top = getRandom(0, 70 - 20) + 'rem';
        });
    });
    
});