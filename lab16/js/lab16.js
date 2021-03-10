/* 
    Lab 16 
    Art 101
    JSON and APIs
*/


window.addEventListener('load', function() {
    //var for current img
    var currentimg = 0;
    //var for max or most recent img
    var maximg = 0;

    var getAndPutImg = function (number) {
            // Using the core $.ajax() method
            $.ajax({
                // The URL for the request (from the api docs)
                url: "https://xkcd.now.sh/?comic=" + number,
                // The data to send (will be converted to a query string)
                data: { 
                        // here is where any data required by the api 
                        //   goes (check the api docs)
                        id: 123,
                        api_key: "blahblahblah",
                      },
                // Whether this is a POST or GET request
                type: "GET",
                // The type of data we expect back
                dataType : "json",
                // What do we do when the api call is successful
                //   all the action goes in here
                success: function(data) {
                    // do stuff
                    console.log(data);
                    
                    //set data as var
                    var comicObj = data;
                    
                    //set currentimg as number of most recent called comic
                    currentimg = comicObj.num
                    
                    console.log(comicObj.num);
                    
                    //set inner html of output object
                    $("#output").html("<h1>" + comicObj.title + "</h1><br><img src =" + comicObj.img + " alt = " + comicObj.alt + " title=" + comicObj.title+">");
                    
                    //if max is less than current set to current
                    //shouldn't change after first call
                    if (maximg < comicObj.num){
                        maximg = maximg + comicObj.num;
                    };

                },
                // What we do if the api call fails
                error: function (jqXHR, textStatus, errorThrown) { 
                    // do stuff
                    console.log("Error:", textStatus, errorThrown);
                }
            })
    };

    
    console.log(currentimg);
    
    //if at default value
    if (currentimg == 0){
        //hide next button
        $("#next").hide();
        
        //get put the latest comic
        getAndPutImg("latest");
    };
    
    $("#prev").click(function(){
        //if more than minimum
        if (currentimg >= 1){
            
            //reduce track variable 
            currentimg = currentimg - 1;
            
            //show next button
            $("#next").show();
            
            //call get put with reduced variable
            getAndPutImg(currentimg);
        }
        
        //hide prev at last img 
        if (currentimg == 1){      
            $("#prev").hide();
        }
    });
    
    $("#next").click(function(){
        //if less than maximum
        if (currentimg < maximg){
            
            //increase track variable 
            currentimg = currentimg + 1;
            
            //show next button
            $("#next").show();
            
            //call get put with increased variable
            getAndPutImg(currentimg);
        }
        
        //hide next at last img 
        if (currentimg == maximg){      
            $("#next").hide();
        }
    });
    
    
});