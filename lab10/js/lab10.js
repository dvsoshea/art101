/*
bla bla bla 
by Davis
*/

//wait for HTML to load
window.addEventListener('load', function() {
    
    // get button element
    var button = document.getElementById("mybutton");
    var gbutton = document.getElementById("glitch");
    var gbutton2 = document.getElementById("glitch2");
    
    // get text input
    var username = document.getElementById('username')

    // when the button is clicked
    button.onclick = function(){
        console.log(username.value);
        
        //split the string
        var nameArray = username.value.split('');
        console.log("nameArray= ", nameArray);
        
        //sort the array
        var nameArraySort = nameArray.sort(function(a, b){return 0.5 - Math.random()});
        console.log("nameArraySort= ", nameArraySort);
        
        //join array back to a string 
        var nameSorted = nameArray.join('');
        console.log("nameSorted= ", nameSorted);
        
        //print new name
        document.getElementById("output").innerHTML = "Here is your new name: <b>" + nameSorted + "</b><br>";
       
    };
    //glitch1
    gbutton.onclick = function(){
        document.getElementById("output").style.backgroundImage = "radial-gradient(to right,red,orange,yellow,green,blue,indigo,violet)";
        
        document.getElementById("body").style.transform = "scale(" + Math.random() + "," + Math.random() + ")";
    };
    
    //glitch2
    gbutton2.onclick = function(){
        var sheet = window.document.styleSheets[0];
        sheet.addRule('@keyframes example', "from {background-color: red;}to {background-color: greenyellow;}");
    };
    
});