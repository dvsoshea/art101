/*
another fine js file
by Davis
*/

//wait for HTML to load
window.addEventListener('load', function() {
    
    //append button to challenges, problems, etc. 
    $("h1").append("<br><button>test</button>");
    
    //register click event
    $("h1 button").click(function(){
        
        //create variable for parent of clicked button
        var parent =  $(this).parent();
        //source: https://stackoverflow.com/questions/7838238/how-to-get-id-of-clicked-element-with-jquery/7838305
        
        //add class to parent
        parent.addClass("special");
        
        //remove class from parent after 3 seconds source: lecture
        setTimeout(function() { parent.removeClass("special"); 
                              console.log(parent);
                              }, 3000);
        //log clicked button?
        console.log($(this))
    });
    
    //Create alternating color buttons
    //First append buttons to output div
    $("#output").append("<br><button>test</button> ");
    $("#output").append("<button>test</button>");
    
    //On click 
    $("#output button").click(function (){
        
        //change color of both buttons
        $("#output button").css("color","red");
        //source:https://stackoverflow.com/questions/1053418/jquery-temporarily-change-a-style-then-reset-to-original-class
        
        //remove style from most recently clicked button 
        $(this).removeAttr('style');
        console.log($(this));
    });    
});