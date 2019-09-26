$(document).ready(function(){
    var userResponse = "";

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "7181d116b7msh71f683ad4b0a945p12980djsn919ab6d9aae8"
        }
    }

    $("#speakBtn").click(function(){
        userResponce = $("#userResponcBox").text();
        settings.url = "https://wordsapiv1.p.rapidapi.com/words/" + userResponce + "/synonyms"
        $.ajax(settings).done(function (response) {
            console.log(response.synonyms);
        });
    });
    
});