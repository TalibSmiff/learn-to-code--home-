"use strict"

fetch("http://jsonplaceholder.typicode.com/users/3")
  .then((response) => response.json()) 
  .then((data) => {
    console.log(` Hello ${data.name}, Your Email is ${data.email}`);
  }); 