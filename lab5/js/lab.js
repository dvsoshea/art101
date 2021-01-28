/*
    Author: Davis O'Shea <dgoshea@ucsc.edu>
    Created: Jan 28    
*/

//Define Variables
var make = "Mercedes";
var model = "Class-C";
var color = "black";
var year = 1999;
var date = new Date();
var currentYear = date.getFullYear();

var age = currentYear - year

document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "<br>");