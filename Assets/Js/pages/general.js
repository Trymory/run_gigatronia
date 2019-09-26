$(document).ready(function() {

    // startTheGame();
    var realms = ["Hexeram", "Glitnobin", "Sycryptum"];
    var i = 0;

    function startTheGame(){
        console.log("Start the game");
        // sets the area
        $('#mainContainer').html = "";
        $('#buttonContainer').html = "";
        $('#wordBlank').text("Character Selection");
        $('#mainContainer').css("background", "url('https://media.giphy.com/media/3o752cFQdDgzGtDv1K/giphy.gif')");
        $('#mainContainer').css("background-position", "right");
        $('#mainContainer').css("background-size", "cover");
        //shows character set
        $('#characterSet').show();
        $('#saveChar').show();
        $('#character-save').show();
        //hide elements
        $('#homeContiner').hide();
        $('#newGame').hide();
        $('#userSetupDiv').hide();
        $('#gameContinue').hide();
        $('#gameSettings').hide();
        $('#innerContainer').hide();
    }

    function statsSet(){
        if($("#realmName").text() == realms[0]){
            $("#strenght").text("15");   
            $("#intelect").text("5");
            $("#casting").text("10");
            $("#realmStory").text("Live here. Be Brave. Die a death meant for a warrior.");
        } 
        else if($("#realmName").text() == realms[1]){
            $("#strenght").text("5");   
            $("#intelect").text("10");
            $("#casting").text("15");
            $("#realmStory").text("All of our problems here can be solve with capital. Who needs skill when you have power in stacks.");
        }
        else{
            $("#strenght").text("10");
            $("#intelect").text("15");
            $("#casting").text("5");
            $("#realmStory").text("Dare to know what other refuse to? But if ignorence is you bliss? You are now dismissed. Choose someone else.");
        }
    }

    $("#newGame").click(function(){
        startTheGame();        
    });

    $("#character-back").click(function(){
        if(i > 0){
            i--;
            $("#realmName").text(realms[i]);
        } else {
            i = realms.length - 1;
            $("#realmName").text(realms[i]);
        }
        statsSet();
    });
    
    $("#character-forward").click(function(){
        if(i < realms.length - 1){
            i++;
            $("#realmName").text(realms[i]);
        } else {
            i = 0;
            $("#realmName").text(realms[i]);
        }
        statsSet();
    });

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus');
    });

    
});