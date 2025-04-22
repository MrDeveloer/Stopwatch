window.onload = function () {
    var minutes = 00;
    var seconds = 00;
	var milliseconds = 00;
	var appendmilliseconds = document.getElementById("milliseconds");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
	var buttonStart = document.getElementById('button-start');
	var buttonStop = document.getElementById('button-stop');
	var buttonReset = document.getElementById('button-reset');
	var Interval ;

	buttonStart.onclick = function(){

		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
	}

	buttonStop.onclick = function(){
		clearInterval(Interval);
	}

	buttonReset.onclick = function(){
		clearInterval(Interval);
		milliseconds = "00";
		seconds = "00";
		appendmilliseconds.innerHTML = milliseconds;
		appendSeconds.innerHTML = seconds;
	}

	function startTimer(){
		milliseconds++;

		if(milliseconds <= 9){
     	 	appendmilliseconds.innerHTML = "0" + milliseconds;
    	}
		if (milliseconds > 9){
      		appendmilliseconds.innerHTML = milliseconds;
      	}
		if (milliseconds > 99) {
			seconds++;
			appendSeconds.innerHTML = "0" + seconds;
			milliseconds = 0;
			appendmilliseconds.innerHTML = "0" + 0;
		}
		if (seconds > 9){
      		appendSeconds.innerHTML = seconds;
   		}
        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML= "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML= "00";
        }
        if (minutes> 9){
            appendMinutes.innerHTML="minutes";
        }
	if (minutes > 9){
		appendminutes.innerHTML="minutes";
	}   
}
