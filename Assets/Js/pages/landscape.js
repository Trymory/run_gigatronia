$(document).ready(function(){    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://dark-sky.p.rapidapi.com/37.5799808,-77.5274496?lang=en&units=auto",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dark-sky.p.rapidapi.com",
            "x-rapidapi-key": "7181d116b7msh71f683ad4b0a945p12980djsn919ab6d9aae8"
        }
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        if(lat != null && long != null){
            settings.url = "https://dark-sky.p.rapidapi.com/" + lat + "," + long + "?lang=en&units=auto";
        }
        $.ajax(settings).done(function (response) {
            console.log(response.daily.icon);
            console.log(response);
        });   
    });
    
    $.ajax(settings).done(function (response) {
        console.log(response.daily.icon);
    });    
});