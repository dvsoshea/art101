/*
    Created by Davis 
    For Art 101 LAB 7!!
    Thank you
*/

function goOutside(){
    var userName = window.prompt("Hi. Please tell me your name so I can reverse it.");
    console.log("userName= ", userName);
    //split string
    var nameArray = userName.split('');
    console.log("nameArray= ", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort(function(a, b){return 0.5 - Math.random()});
    console.log("nameArraySort= ", nameArraySort);
    //join array back to a string 
    var nameSorted = nameArray.join('');
    console.log("nameSorted= ", nameSorted);
    return nameSorted;


};

document.writeln("Here is your new name: ", 
                goOutside(), "</br>")