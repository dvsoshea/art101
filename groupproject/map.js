  
var a = document.getElementById("logo");
var countyIdArray = ["_x30_01_Alameda","_x30_69_San_Benito", "_x30_81_San_Mateo","_x30_87_Santa_Cruz", "_x30_53_Monterey", "_x30_85_Santa_Clara", "_x30_13_Contra_Costa", "_x30_75_San_Francisco"];


            // It's important to add an load event listener to the object,
            // as it will load the svg doc asynchronously
        $(a).on("load", function(){
            
            console.log("yes");
            
            var svgDoc = a.contentDocument;
            
            svgDoc.getElementsByTagName("svg")[0].setAttribute("viewBox","100 225 500 500");
            svgDoc.getElementsByTagName("svg")[0].setAttribute("height","auto");
            
            /*for (var i = 0; i <= countyIdArray.length; i++){
                svgDoc.getElementById(countyIdArray[i])
            };*/
            
            //onclick return the id of the clicked county
            svgDoc.addEventListener("click", function(e){
                    for (var i = 0; i <= countyIdArray.length; i++){
                        if (e.target.id == countyIdArray[i]){
                            console.log("yes that is " + e.target.id);
                        }else{
                            //console.log("no");
                        }
                    };
            });
            
            console.log(svgDoc);
            });
