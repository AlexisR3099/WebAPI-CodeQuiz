var box = document.querySelector(".main");
var topDiv = document.querySelector(".top-div");
var bottomDiv = document.querySelector(".bottom-div");
var question = -1;
var thisQuestion = [];
var timer = 80;
var clockStart = true;
var timeLeft = document.querySelector(".quiz-timer");
var clock = 0;
var htmlBody = document.querySelector("body");
var option = "";


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

var makeQuestion = function(thisQuestion) {

    var paragraphs = document.createElement("p");
    paragraphs.className = "question-p"
    paragraphs.innerHTML = thisQuestion.paragraph;
    topDiv.appendChild(paragraphs);
    
    var nextButton = document.createElement("button");
    nextButton.className = "question-button";
    nextButton.innerHTML = thisQuestion.firstAnswer;
    bottomDiv.appendChild(nextButton);

    var nextButtonTwo = document.createElement("button");
    nextButtonTwo.className = "question-button";
    nextButtonTwo.innerHTML = thisQuestion.secondAnswer;
    bottomDiv.appendChild(nextButtonTwo);

    var nextButtonThree = document.createElement("button");
    nextButtonThree.className = "question-button";
    nextButtonThree.innerHTML = thisQuestion.thirdAnswer;
    bottomDiv.appendChild(nextButtonThree);

    var nextButtonFour = document.createElement("button");
    nextButtonFour.className = "question-button";
    nextButtonFour.innerHTML = thisQuestion.fourthAnswer;
    bottomDiv.appendChild(nextButtonFour);
}

var pickQuestion = function() {
    var firstQuestion = {
        paragraph: "Commonly used data types DO NOT include: ",
        firstAnswer: "1. Strings",
        secondAnswer: "2. Booleans",
        thirdAnswer: "3. Alerts",
        fourthAnswer: "4. Integers"
    };

    var secondQuestion = {
        paragraph: "Arrays in JavaScript can be used to store ____? : ",
        firstAnswer: "1. Numbers and strings",
        secondAnswer: "2. Other arrays",
        thirdAnswer: "3. Booleans",
        fourthAnswer: "4. All of the above"
    };

    var thirdQuestion = {
        paragraph: "How would you write 'Hello World' in an alert box?: ",
        firstAnswer: "1. msg('Hello World);",
        secondAnswer: "2. msgBox('Hello World');",
        thirdAnswer: "3. alertBox('Hello World')",
        fourthAnswer: "4. alert('Hello World')"
    };

    var fourthQuestion = {
        paragraph: "Inside which HTML element do we put the JavaScript?: ",
        firstAnswer: "1. js",
        secondAnswer: "2. script",
        thirdAnswer: "3. javascript",
        fourthAnswer: "4. scripting"
    };

    var fifthQuestion = {
        paragraph: "How do you write an 'if' statement in JavaScript?: ",
        firstAnswer: "1. if i==5 then",
        secondAnswer: "2. if i=5 then",
        thirdAnswer: "3. if(i == 5){}",
        fourthAnswer: "4. if i=5{}{}"
    };

    var sixthQuestion = {
        paragraph: "How can you add a single comment in JavaScript?: ",
        firstAnswer: "1. !-- This is a comment --!",
        secondAnswer: "2. 'this is a comment'",
        thirdAnswer: "3. //this is a comment",
        fourthAnswer: "4. /* this is a comment */"
    };

    thisQuestion = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion]

    thisQuestion = thisQuestion(question);

    if(thisQuestion) {
        return makeQuestion(thisQuestion);
    } else {
        clockStart = false;
        return countdown;
    }
}

htmlBody.addEventListener("click", function() {
    var element = element.target
    var startButton = document.querySelector(".start-button");

    if(element === startButton) {
        startQuiz();
        element = "";
    }
    else if(element.className === "submit") {
        var nameInitials = box.querySelector("input[name = 'initials']").value;
        return saveInitials(nameInitials);
    }
})

var isItRight = function() {

    var extraDiv = document.getElementById("extraDivId");
    if (extraDiv) {
        extraDiv.remove();
    }

    var div = document.createElement("div")
    div.className = "extraDiv";
    div.setAttribute('id', 'extraDivId');
    box.appendChild(div);

    var divTwo = document.createElement("div");
    divTwo.className = "extraDivTwo"
    div.appendChild(divTwo);

    var divP = document.createElement("p");
    divP.className = "quiz-p"
    divP.innerHTML = option;
    divTwo.appendChild(divP);
}

var answerKey = function(element) {

    switch(element.innerHTML) {
        case "3. Alerts" :
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;
        
        case "4. All of the above":
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;

        case "4. alert('Hello World')":
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;

        case "2. script":
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;

        case "3. if(i == 5){}":
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;

        case "3. //this is a comment":
            option = "Correct!";
            isItRight();
            blankQuiz();
            break;
            default:
                option = "Wrong!";
                isItRight();
                timer -= 10;
                blankQuiz();
                break;
    }
}
