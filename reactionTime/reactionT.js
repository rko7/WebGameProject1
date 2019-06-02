var screeen = document.querySelector('#screen');
var tStart;
var tEnd;
var record = [];
var timeOut;

screeen.addEventListener('click', function() {

    if (screeen.classList.contains('waiting')) {
        document.getElementById("ReactionTime").innerHTML = ' ';
        screeen.classList.remove('waiting');
        screeen.classList.add('ready')
        screeen.textContent = 'Click when it turns to GREEN!';
         timeOut = setTimeout(function() {
            tStart = new Date();
            screeen.click();
        }, Math.floor(Math.random() * 1000) + 2000);
    }
    else if (screeen.classList.contains('ready')) {
        if(!tStart){
            clearTimeout(timeOut);
            screeen.classList.remove('ready');
            screeen.classList.add('waiting')
            screeen.textContent = 'You clicked too early.';
 
        }
        else {
        screeen.classList.remove('ready');
        screeen.classList.add('now')
        screeen.textContent = 'ClICK NOW!!';
        }
    }
    else if (screeen.classList.contains('now')) {
        tEnd = new Date();
        document.getElementById("ReactionTime").innerHTML = "Your Reaction Time is: " + ((tEnd - tStart) / 1000) + "seconds";
        record.push(tEnd - tStart);
        tStart = null;
        tend = null;
        screeen.classList.remove('now');
        screeen.classList.add('waiting')
        screeen.textContent = 'Click to Start!';
    }
});