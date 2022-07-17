var answersEl = document.createElement("ul");

answersEl.style.fontSize = "20px";
answersEl.style.listStyle = "none";
mainTextEl.appendChild(answersEl);

var l1El = document.createElement ("li");
answersEl.appendChild(l1El);
var button1El = document.createElement("button")
button1El.textContent = "1. answer 1"
l1El.appendChild(button1El);


var l2El = document.createElement ("li");
answersEl.appendChild(l2El);
var button2El = document.createElement("button")
button2El.textContent = "2. answer 2"
l2El.appendChild(button2El);

var l3El = document.createElement ("li");
answersEl.appendChild(l3El);
var button3El = document.createElement("button")
button3El.textContent = "3. answer 3"
l3El.appendChild(button3El);

var l4El = document.createElement ("li");
answersEl.appendChild(l4El);
var button4El = document.createElement("button")
button4El.textContent = "4. answer 4"
l4El.appendChild(button4El);




if (button2El.addEventListener("click", function(){
correctAnswer();
return createQuestion();
})){

}

if(button1El.addEventListener("click", function(){
wrongAnswer();
})){

}
if(button3El.addEventListener("click", function(){
wrongAnswer();
})){

}
if(button4El.addEventListener("click", function(){
wrongAnswer();
})){

}


    


