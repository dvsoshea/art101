/*
lab 12 js file
by Davis
*/

//wait for HTML to load
window.addEventListener('load', function() {
    var sortingHat = function(str){
        var nameArray = str.split('');
        mod = nameArray.length % 4;
        
        //Without conditionals
        var school = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
        console.log(school[mod])
    
        //With conditionals
        if (mod == 0) {
            return("Gryffindor")
        }
        else if (mod == 1){
            return("Ravenclaw")
        }
        else if (mod == 2){
            return("Slytherin")
        }
        else if (mod == 3){
            return("Hufflepuff")
        };
    };   
    
    $("#button").click(function(){
       //gets the value of #input and assigns it to a variable name
       var name = $("#input").val();
       //runs sortingHat(name) and stores the result in a variable house    
       var house = sortingHat(name);
       //appends a new styled paragraph to #output 
       $("#output").append("<p>The Sorting Hat has sorted you into " + house + "</p>")
    });
    /*sortingHat("Davis");
    sortingHat("off");
    sortingHat("haha");*/
});
 