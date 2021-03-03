/* Hahah*/
window.addEventListener('load', function() {
    
    //global variables
    var oneLongString = "";
    var div3 = " Fizz";
    var div5 = " Buzz";
    var div7 = " Boom";
    var loop = 100;
    
    //return strings for numbers divisible by 3,5,7 and add that to the variable oneLongString 
    var FizzBuzz = function(){
        
        //remove previous calls of FizzBuzz
        oneLongString = "";
        
        for (var i = 1; i <= loop; i++){
            
            console.log(i);
            
            oneLongString += i 
            
            if (i%3 == 0){
                oneLongString += div3; 
            }
            if (i%5 == 0){
                oneLongString += div5;
            }
            if (i%7 == 0){
                oneLongString += div7;
            };
                
            oneLongString += " <br>"
        };
        $("#output").html(oneLongString);
    }; 
    
    //when submit button is clicked change the loop length variable, change the strings returned based off user input also call the FizzBuzz function
    $("#submit").click(function(){
        
        if ($("#div3").val() != ""){
            div3 = $("#div3").val();
            //console.log (true);
        };
        
        if ($("#div5").val() != ""){
            div5 = $("#div5").val();
            //console.log (true);
        };
        
        if ($("#div7").val() != ""){
            div7 = $("#div7").val();
            //console.log (true);
        };
        
        if ($("#loop").val() != ""){
            loop = $("#loop").val();
            //console.log (true);
        };
        
        console.log (true);
        FizzBuzz();
    });
});