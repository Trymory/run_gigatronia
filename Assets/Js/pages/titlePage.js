$(document).ready(function() {

    let images = [
        "Assets/Images/church.gif",
        "Assets/Images/country.gif",
        "Assets/Images/hidden.gif"
    ];

    let sliderText = [
        "Welcome new hero! Our nation of Gigatronia is in need of a hero! Here YOU can be a HERO!",
        "Do you like adventure? Do you like battles? Do you like Crafting?",
        "We have it all here just for YOU! JOIN NOW!"
    ];

    let stage = document.getElementById("homeContiner");

    function makingCheat(){
        return "Run Gigatronis";
    }
    
    let cheat = makingCheat();
    let hiddenLines = [];
    let tries = 0;
    let unlocked = false;
    let pageTitle = "Run Gigatronia";

    $('#characterSet').hide();
    $('#saveChar').hide();
    $('#character-save').hide();
    
    setTitle();

    document.onkeypress = function() {
        if(unlocked == false){
            tries++;
            document.getElementById("wordBlank").innerHTML = "Code: ";

            for(var i = 0; i < cheat.length; i++) {
                if(event.key == cheat[i]){
                    hiddenLines[i] = cheat[i];
                }
                document.getElementById("wordBlank").innerHTML += hiddenLines[i];
            }

            if(tries >= 12){
                document.getElementById("wordBlank").innerHTML = pageTitle;
                for(var i = 0; i < cheat.length; i++) {
                    hiddenLines[i] = " ";
                }
                tries = 0;
            }
        }
        if(document.getElementById("wordBlank").innerHTML.replace("Code: ", "") == cheat){
            unlocked = true;
            document.getElementById("wordBlank").innerHTML = "Run Gigatronis";
        }
    };

    function setTitle(){
        for(var i = 0; i < cheat.length; i++) {
            hiddenLines[i] = " ";
            if(cheat[i] == " "){
                hiddenLines[i] = " ";
            }
            document.getElementById("wordBlank").innerHTML += hiddenLines[i];
        }
    }

    let myVar = setInterval(myTimer, 7000);
    let i = 0;
    let s = 0;
    
    function myTimer() {
        if(s <= sliderText.length - 1){
            stage.innerHTML = "<h3> " + sliderText[s] + "</h3>";
            s++;
        } else {
            s = 0;
        }

        if(i <= images.length - 1){
            $('#mainContainer').css("background", "url('" + images[i] + "')");
            $('#mainContainer').css("background-position", "center");
            $('#mainContainer').css("background-size", "cover");
            i++; 
        } else {
            i = 0;
        }
    }
    
    $("#newGame").click(function(){
        pageTitle = "Character Selection";
        clearInterval(myVar);
    });
});
