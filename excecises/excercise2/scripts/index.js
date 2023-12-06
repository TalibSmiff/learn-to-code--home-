"use strict";
//Get HTML Elements

let idInput = document.getElementById("idInput");
let displaybutton = document.getElementById("employeeButton");
let tableBody = document.getElementById("tableBody");

//Write a function

function getEmployee() {
  tableBody.innerHTML = "";
  fetch(`https://jsonplaceholder.typicode.com/users/${idInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      let row = tableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = data.name;
      cell2.innerHTML = data.username;
      cell3.innerHTML = data.email;
    });
}
//wire it up 

displaybutton.onclick = getEmployee;
