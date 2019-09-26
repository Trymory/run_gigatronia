$(document).ready(function() {
    
    let newUsersName = window.localStorage.getItem('user');
    let newUsersRealm = window.localStorage.getItem('realm');
    let i = 0; 

    $("#character-save").click(function(){
        newUsersName = window.localStorage.getItem('user');
        newUsersRealm = window.localStorage.getItem('realm');
        if(window.localStorage.getItem('user') != null){
            console.log(true);
            newUsersName = window.localStorage.getItem('user');
        } else {
            console.log(false);
            newUsersName = "User";
            $("#storyBoxText").html(
                "Welcome to Gigatronia <span class='important'>"+ newUsersName + "</span>, my name is <span class='important'> Narrator </span> for a lack of better words. "+
                "I am the one in control of this word and all who enter in it. Your presence here shows that you have played "+
                "these kinds of games befor, so the rules are pretty straight forward."
            );
        }
    });
    
    let storyParts = [
        "You will be given selection responce buttons to respond. You will respond or I will respond for you. So just play the part your given. "+
        "Use <span class='important'> W A S D </span> keys to move, <span class='important'>Spacebar</span> to jump, and if there's any other keys I want to activate I'll let you know.",
        "You have selected the <span class='important'>" + newUsersRealm + "</span> realm. So that places you here.",
        "Alright your body should be in the processes of being born. So let us be done with this into."
    ];
    
    $("#storyProgress").click(function(){              
        $("#storyBoxText").html(storyParts[i]);
        i++;
    });
});