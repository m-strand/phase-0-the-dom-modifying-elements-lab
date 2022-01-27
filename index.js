// Write your code here!

//DOM to remove main id
document.getElementById("main").remove();

//create h1 with id #victory
const newHeader = document.createElement("h1")
document.body.append(newHeader);
//Make h1 say "Brooke is the champion"
newHeader.id = victory;
newHeader.innerHTML = 
"<h1>Brooke is the champion</h1>";