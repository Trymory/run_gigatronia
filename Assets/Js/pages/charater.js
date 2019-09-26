$(document).ready(function() {
    document.getElementById("characterImage").addEventListener("error", myFunction);
    
    let characterNumber = 1;
    let characterAction = "Walking";
    let actionDirection = "walkDown";
    
    let actionInterval = 0;
    let myVar = null;
    let realms = ["Hexeram", "Glitnobin", "Sycryptum"];
    let imgCycleLength = 0;
    
    window.localStorage.setItem('realm', realms[0]);

    $("#newGame").click(function(){
        myVar = setInterval(myTimer, 150);
    });

    $("#character-save").click(function(){
        $("#wordBlank").css("display", "none");
        $("#mainContainer").css("display", "none");
        $("#character-save").css("display", "none");

        clearInterval(myVar);
    });

    $("#character-back").click(function(){
        statsSet();
    });
    
    $("#character-forward").click(function(){
        statsSet();
    });

    function statsSet(){
        if($("#realmName").text() == realms[0]){
            characterNumber = 1;
            window.localStorage.setItem('realm', realms[0]);
        } 
        else if($("#realmName").text() == realms[1]){
            characterNumber = 2;
            window.localStorage.setItem('realm', realms[1]);
        }
        else{
            characterNumber = 3;
            window.localStorage.setItem('realm', realms[2]);
        }
    }
    
    function myTimer() {
        actionInterval++;
        
        if(imgCycleLength != 0){
            if(actionInterval == imgCycleLength){
                actionInterval = 1;
            }
        }

        $("#characterImage").attr("src", "Assets/Sprites/Characters/Character_" +
            characterNumber +
            "/" +
            characterAction +
            "/" +
            actionDirection +
            "("+
            actionInterval +
            ").png"
        );
    }
    
    function myFunction() {
        imgCycleLength = actionInterval - 1;
        actionInterval = 1;
        $("#characterImage").attr("src", "Assets/Sprites/Characters/Character_" +
            characterNumber +
            "/" +
            characterAction +
            "/" +
            actionDirection +
            "("+
            actionInterval +
            ").png"
        );
    }
});