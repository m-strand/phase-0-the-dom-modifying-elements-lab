// Write your code here!

//DOM to remove main id
document.getElementById("main").remove();

//create h1 with id #victory
const victor = document.createElement("h1")
document.body.append(victor);
//Make h1 say "Brooke is the champion"
victor.setAttribute("id", "victory");
victor.innerHTML = 
"<h1>Brooke is the champion</h1>";