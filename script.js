
var score = 0;
var questionIndex = 0;

var timeEl = document.querySelector(".timer");
var questionsDiv = document.querySelector(".questionsDiv");
var btnEl = document.querySelector(".btn");
var secondsLeft = 90;
var holdInterval = 0;
var ulCreate = document.querySelector(".choicesUl");

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: 2
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: 2
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: 2
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: 3
    },

];

btnEl.addEventListener("click",function (){
    
    if (holdInterval === 0) {
        holdInterval = setInterval(function (){
    secondsLeft--;
    timeEl.textContent = "time:" + secondsLeft;

    if (secondsLeft <= 0){
        clearInterval(holdInterval);
        allDone();
        timeEl.textContent = "time's up!";
    }
}, 1000);
}
render(questionIndex);
});

function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    
    }
    console.log(userChoices)
    console.log(questionIndex)
    userChoices.forEach(function compare (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);

        ulCreate.appendChild(listItem);
        listItem.addEventListener("click",function compare(score){
            
        });
    })
    
}

