// highscores js
// variables 
var highscoresEl = document.getElementById("highscores");
var goBackEl = document.getElementById("goback");
var clearEl = document.getElementById("clear");
var scoreEl = document.getElementById("scores")
var userscore = localStorage.getItem("name") + " - " + localStorage.getItem("score")





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

 
  var tryingThis = localStorage.getItem("allScores")

  var myObj = JSON.parse(tryingThis);
 
  for(var i = 0; i < myObj.length; i++){
    var boardEntry = document.createElement("li")
    boardEntry.textContent = myObj[i]['username' + ' - ' + 'userscore']
    scoreEl.appendChild(boardEntry)
  }
  

  
   
  
}


renderScores();


