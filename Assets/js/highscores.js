// highscores js
// variables 
var highscoresEl = document.getElementById("highscores");
var goBackEl = document.getElementById("goback");
var clearEl = document.getElementById("clear");
var scoreEl = document.getElementById("scores")
var userscore = localStorage.getItem("name") + " - " + localStorage.getItem("score")

var names = localStorage.getItem("name")

var scores = localStorage.getItem("score")

// var namesArray = [names] 
// var scoresArray = [scores]
// console.log(namesArray)

// entry = userscore

var userInfo = {
  name: names,
  score: scores
}

console.log(userInfo.name)


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
  var userPrint = "";
  for(var x in userInfo){
    userPrint = userInfo.name + "-" + userInfo.score;
    
   }
   var boardEntry = document.createElement("li")
   boardEntry.textContent = userPrint
   scoreEl.appendChild(boardEntry) 
   
  
}


renderScores();


