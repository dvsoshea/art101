/*
    Created by Davis 
    For Art 101 LAB 8!!
    Thank you
*/

var outputEl = document.getElementById("output");

//create new elements
var new1El = document.createElement("p");

new1El.innerHTML = "SOMETHING NEW!";

var new2El = document.createElement("p");

new2El.innerHTML = "SOMETHING ELSE!";

//append new elements
outputEl.appendChild(new1El);

outputEl.insertBefore(new2El,new1El);
//source: https://stackoverflow.com/questions/734041/how-to-add-paragraph-on-top-of-div-content

new2El.style.color = "purple";
//source: https://stackoverflow.com/questions/15241915/how-to-change-css-property-using-javascript