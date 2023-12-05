"use strict"
let idTextbox = document.querySelector("#idTextbox");
let displayButton = document.querySelector("#displayButton");
let messageParagraph = document.querySelector("#messageParagraph"); 

function displayToDo() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${idTextbox.value}`)
    .then((response) => response.json()) 
    .then((toDo) => {
      messageParagraph.innerText = toDo.title
      console.log(toDo)
    });   
}







  displayButton.onclick = displayToDo