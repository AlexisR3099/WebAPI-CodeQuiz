var box = document.querySelector(".top-div");
var topDiv = document.querySelector(".top-div");
var bottomDiv = document.querySelector(".bottom-div");
var question = -1;
var thisQuestion = [];
var timer = 80;
var clockStart = true;
var timeLeft = document.querySelector(".quiz-timer");
var clock = 0;


var blankQuiz = function() {
    question++;
    topDiv.innerHTML = "";
    bottomDiv.innerHTML = "";
}

var startQuiz = function() {
    question++;
    topDiv.innerHTML = "";
    bottomDiv.innerHTML = "";

    countdown();
}

var countdown = function() {
    var startClock = setInterval(function() {
        if(timer === 80 & clockStart) {
            timeLeft.innerHTML = "Time Remaining: " + timer;
            timer--;
            clock = timer;
            randomQuestion();
        }
        else if (timer > 0 & clockStart) {
            timeLeft.innerHTML = "Time Remaining: " + timer;
            timer--;
            clock = timer; 
        } else {
            timeLeft.innerHTML = "Time Remaining: " + timer;
            clearInterval(startClock);
            clock = timer;
            clockStart=false;
            bottomDiv.innerHTML="";
            
            return quizScore();
        }
    }, 1000);
}
