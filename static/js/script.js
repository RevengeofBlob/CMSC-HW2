window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('start').addEventListener('click', function(){
        console.log("test");
        document.getElementById('intro').style.display='none';
        document.getElementById('start').style.display='none';

        let timeAlloted = 30;
        document.getElementById('clock').innerHTML = timeAlloted;
        //let score = 0;
        const timer = setInterval(function(){
            timeAlloted--;
            document.getElementById('clock').innerHTML = timeAlloted;
            if (timeAlloted == 0){
                clearInterval();
            }
        }, 1000);
        //const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min)
    });
});