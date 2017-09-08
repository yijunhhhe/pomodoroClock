$(document).ready(function(){
    
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            
            $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=true",function(json){
                var location = "";
                location = json.results[0].address_components[3].long_name;
                //console.log(json.results[0].address_components[3].long_name);
                $("#location").html(location);
            });
            
            $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude,function(json){
                var temperature = "";
                var location = "";
                console.log(json);
                temperature += json.main.temp;
                location = json.coord.lon + "," + json.coord.lat;
                $("#temperature").html("today's temperature is: " + temperature);
                   
            });             
        });
    };  
});