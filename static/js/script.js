window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('start').addEventListener('click', function(){
        console.log("test");
        document.getElementById('intro').style.display='none';
        document.getElementById('start').style.display='none';

        const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min)
    });
});