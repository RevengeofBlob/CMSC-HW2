window.addEventListener("DOMContentLoaded", (event) => {
    //Starts the game
    document.getElementById('start').addEventListener('click', function(){
        //Removes the starting text and button
        document.getElementById('intro').style.display='none';
        document.getElementById('start').style.display='none';

        //Countdown timer
        let timeAlloted = 5;
        document.getElementById('clock').innerHTML = timeAlloted;
        const timer = setInterval(function(){
            timeAlloted--;
            document.getElementById('clock').innerHTML = timeAlloted;
            if (timeAlloted == 0){
                clearInterval(timer);
                document.getElementById('clock').innerHTML = 'Score: ' + score;
                document.getElementById('circle').remove();
                logScore(score);
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
            circle.style.left = getRandom(0, 150 - 20) + 'rem';
            circle.style.top = getRandom(0, 70 - 20) + 'rem';
        });
    });
    
    //Prompt user to input their name for their score
    function logScore(score){
        document.getElementById('gameSpace').remove();
        const centered = document.createElement('center');
        const sendInfo = document.createElement('form');
        sendInfo.setAttribute('method', 'POST');
        
        //Name input box
        const insertInfo = document.createElement('input');
        insertInfo.setAttribute('type', 'name');
        insertInfo.setAttribute('name', 'name');
        insertInfo.setAttribute('placeholder', 'Enter Name');
        //Button to submit
        const submission = document.createElement('input');
        submission.setAttribute('type', 'submit');
        submission.setAttribute('name', 'sumbit');
        //Store the score
        const points = document.createElement('input');
        points.setAttribute('type', 'hidden');
        points.setAttribute('name', 'jsvar');
        points.setAttribute('value', score);

        const br = document.createElement('br');
        sendInfo.append(insertInfo);
        sendInfo.append(br);
        sendInfo.append(submission);
        sendInfo.append(points);
        centered.append(sendInfo);
        document.body.append(centered);
    }
});