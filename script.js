
var score = 0;
var questionIndex = 0;

var timeEl = document.querySelector(".timer");
var questionsDiv = document.querySelector(".questionsDiv");
var summarySec = document.getElementById("summary");
var btnEl = document.querySelector(".btn");
var secondsLeft = 90;
var holdInterval = 0;
var ulCreate = document.querySelector(".choicesUl");
questionsDiv.style.display="none"
summarySec.style.display = "none"
var questionEle = document.getElementById("user-question");
var option1 = document.getElementById("options1");
var option2 = document.getElementById("options2")
var option3 = document.getElementById("options3")
var option4 = document.getElementById("options4")
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
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: 3
    },

];
option1.addEventListener("click",checkUserAnswer)
option2.addEventListener("click",checkUserAnswer)
option3.addEventListener("click",checkUserAnswer)
option4.addEventListener("click",checkUserAnswer)
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
questionsDiv.style.display="block";
btnEl.style.display = "none"
render(questionIndex);
});

function render(questionIndex) {
    // Clears existing data
    questionEle.innerText = questions[questionIndex].title;
    option1.innerText =  questions[questionIndex].choices[0]
    option2.innerText =  questions[questionIndex].choices[1]
    option3.innerText =  questions[questionIndex].choices[2]
    option4.innerText =  questions[questionIndex].choices[3]
    // questionsDiv.innerHTML = "";
    // ulCreate.innerHTML = "";
    // // For loops to loop through all info in array
    // for (var i = 0; i < questions.length; i++) {
    //     // Appends question title only
    //     var userQuestion = questions[questionIndex].title;
    //     var userChoices = questions[questionIndex].choices;
    //     questionsDiv.textContent = userQuestion;
    
    // }
    // console.log(userChoices)
    // console.log(questionIndex)
    // userChoices.forEach(function compare (newItem) {
    //     var listItem = document.createElement("li");
    //     listItem.textContent = newItem;
    //     questionsDiv.appendChild(ulCreate);

    //     ulCreate.appendChild(listItem);
    //     listItem.addEventListener("click",function compare(score){
            
    //     });
    // })
    
}

function checkUserAnswer(){
    var userEntry = this.getAttribute("data-value")
    console.log(userEntry)
    if (userEntry == questions[questionIndex].answer){
        
    }
}