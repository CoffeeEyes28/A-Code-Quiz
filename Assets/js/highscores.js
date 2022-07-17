// highscores js
// variables 
var highscoresEl = document.getElementById("highscores");
var goBackEl = document.getElementById("goback");
var clearEl = document.getElementById("clear");
var scoreEl = document.getElementById("scores")
var userscore = localStorage.getItem("name") + " - " + localStorage.getItem("score")
var leaderboard = [];

// textcontent
highscoresEl.textContent = "Highscores";
goBackEl.textContent = "Go Back";
clearEl.textContent = "Clear Highscores";


goBackEl.addEventListener("click", function(){
    window.location.href="index.html"
});

clearEl.addEventListener("click", function(){
    scoreEl.textContent = "";
    localStorage.clear();
})

function renderScores(){
  
    var boardEntry = document.createElement("li")
    boardEntry.textContent = userscore
    scoreEl.appendChild(boardEntry)
    
    
   
}

renderScores();


