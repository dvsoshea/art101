/*
    Created by Davis 
    For Art 101 
    Thank you
*/

var myTransport = [" bike", " car", " walking", " BART", " skating"];

var myMainRide = {
    Make: "Mercedes",
    Model: "Class-C",
    Color: "black",
    Year: 1999,
    Age: 22   
};

document.writeln("Getting Around:" + myTransport + "<br><br>");

document.writeln("My Fake Ride: <pre>", 
                JSON.stringify(myMainRide, null, '\t'), 
                 "</pre>");