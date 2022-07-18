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
    scoreEl.style.display = "none";
    localStorage.clear();
})

function renderScores(){
 leaderboard = [];
  leaderboard.push(userscore)
    
   for(i=0; i < leaderboard.length; i++){
    
    entry = leaderboard[i]
    var boardEntry = document.createElement("li")
    boardEntry.textContent =  entry
    scoreEl.appendChild(boardEntry) 
    console.log(leaderboard)
   }
  

    // var boardEntry = document.createElement("li")
    // boardEntry.textContent =  userscore
    // scoreEl.appendChild(boardEntry) 
    
  
  

  // console.log(leaderboard)
}

renderScores();


