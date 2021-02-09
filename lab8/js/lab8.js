/*
    Created by Davis 
    For Art 101 LAB 8!!
    Thank you
*/

function firstThing(test){
    var first = document.createElement("first");
    first.innerHTML = test + "this is the first.<br>";
    document.getElementById("demo").appendChild(first);
};

function secondThing(test){
     var second = document.createElement("second");
     second.innerHTML = test + "this is the second.<br>";
     document.getElementById("demo").appendChild(second);
};

function thirdThing(test){
     var third = document.createElement("third");
     third.innerHTML = test + "this is the third.<br>";
     document.getElementById("demo").appendChild(third);
};

//first test
firstThing("TEST 1 ");
secondThing("TEST 1 ");
thirdThing("TEST 1 ");

//second test
setTimeout(function()
        {firstThing("TEST 2 ")    
},500);

setTimeout(function(){
    secondThing("TEST 2 ");
},1000);

setTimeout(function(){
    thirdThing("TEST 2 ");
},1500);

//third test
setTimeout(function(){
    firstThing("TEST 3 ");
},3000);

setTimeout(function(){
    secondThing("TEST 3 ");
},2000);

setTimeout(function(){
    thirdThing("TEST 3 ");
},2500);