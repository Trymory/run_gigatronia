$(document).ready(function() {
    
    let newUsersName = window.localStorage.getItem('user');
    let newUsersRealm = window.localStorage.getItem('realm');
    let i = 0; 
    let picturePanel = ['Assets/Images/real1.jpg' , 'Assets/Images/real2.jpg' , 'Assets/Images/real3.jpg'];

    $("#character-save").click(function(){
        newUsersName = window.localStorage.getItem('user');
        newUsersRealm = window.localStorage.getItem('realm');
        if(window.localStorage.getItem('user') != null){
            newUsersName = window.localStorage.getItem('user');
        } else {
            newUsersName = "User";
            $("#storyBoxText").html(
                "Welcome to Gigatronia <span class='important'>"+ newUsersName + "</span>, my name is <span class='important'> Narrator </span> for a lack of better words. "+
                "I am the one in control of this world and all who enter in it. Your presence here shows that you have played "+
                "these kinds of games before, so the rules are pretty straight forward."
            );
            $("#storyBox").show();
            $("#storyImage").hide();
            $('#startGamePlay').hide();
        }
    });
    
    $("#storyProgress").click(function(){ 
        let storyParts = [
            "You will be given selection responce buttons to respond. You will respond or I will respond for you. So just play the part you are given. "+
            "Use <span class='important'> W A S D </span> keys to move, <span class='important'>Spacebar</span> to jump, and if there are any other keys I want to activate I'll let you know.",
            "You have selected the <span class='important'>" + newUsersRealm + "</span> nation. So, that places you here.",
            "Alright your body should be in the process of being born. So, let's be done with this intro."
        ];
        switch(newUsersRealm){
            case 'Hexeram':
                $("#storyImage").attr('src', picturePanel[0]);
                break;
            case 'Glitnobin':
                $("#storyImage").attr('src', picturePanel[1]);
                break;
            case 'Sycryptum':
                $("#storyImage").attr('src', picturePanel[2]);
                break;
        }

        $("#storyBoxText").html(storyParts[i]);
        i++;
        if(i == 2){
            $("#storyImage").show();
        }
        if(i == storyParts.length){
            $("#storyProgress").hide();
            $('#startGamePlay').show();
        }
    });
});