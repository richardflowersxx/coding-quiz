
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];






var questionEl = document.querySelector(".questions")
var btnEl = document.querySelector(".btn")
var secondsLeft = 4



btnEl.addEventListener("click",setTime, src='quiz.html')

var timeEl = document.querySelector(".timer")

function setTime(){
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "time:" + secondsLeft;

    if (secondsLeft <= 0){
        clearInterval(timerInterval);
        timeEl = '';
    }
}, 1000);
}

const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    }

  ];

//function randomQuestion


//var myQuestions = questionEl