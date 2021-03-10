/* 
Art 101: AJAX Test
Davis O'Shea 
March 3, 2021
*/
window.addEventListener('load', function() {
    $("#activate").click(function(){
    // Using the core $.ajax() method
        $.ajax({
            // The URL for the request (from the api docs)
            url: 'https://jsonplaceholder.typicode.com/todos/1',
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
                //convert recieved JSON to a string
                var datastring = JSON.stringify(data);
                //add converted JSON to html
                $("#output").html(datastring);
            },
            // What we do if the api call fails
            error: function (jqXHR, textStatus, errorThrown) { 
                // do stuff
                console.log("Error:", textStatus, errorThrown);
            }
        });
        
        $.ajax({
            // The URL for the request (from the api docs)
            url: 'https://api.weather.gov/points/'+ $("#latitude").val() +","+  $("#longitude").val(),
            // The data to send (will be converted to a query string)
            data: { 
                    // here is where any data required by the api 
                    //   goes (check the api docs)
                  },
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType : "json",
            // What do we do when the api call is successful
            //   all the action goes in here
            success: function(data) {
                // do stuff
                console.log("step1")
                $.ajax({
                    url: data.properties.forecastHourly, 
                    data: {},
                    type: "GET",
                    dataType : "json",
                    success: function(test) { 
                        var weather = test.properties.periods[0].shortForecast;
                        console.log(weather);
                        $("#output2").html(weather);                   
                    },
                    error: function(){
                        console.log("Error")
                    }
                });
            },
            // What we do if the api call fails
            error: function (jqXHR, textStatus, errorThrown) { 
                // do stuff
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });
});