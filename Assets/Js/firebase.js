$(document).ready(function(){
    window.localStorage.clear();

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAuqmps-o4t9DSGrwMWsCoqs3xjqYckOuA",
        authDomain: "run-gigatronia.firebaseapp.com",
        databaseURL: "https://run-gigatronia.firebaseio.com",
        projectId: "run-gigatronia",
        storageBucket: "run-gigatronia.appspot.com",
        messagingSenderId: "625523633345",
        appId: "1:625523633345:web:bd7b1f09d8bbdf1a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    var cardsDb = db.collection("users").doc('dO1FrLCJdZTJkC5oyEKb');
    var mapDb   = db.collection("maps").doc('dO1FrLCJdZTJkC5oyEKb');

    let selectedRealm = $("#realmName").text();
    let stren = $("#strenght").text();
    let intel = $("#intelect").text();
    let cast  = $("#casting").text();

    let hiddenUserPassword = null;
    let hiddenVerUserPassword = null;
    let canUserVerPass = null;

    $("#logUserPass").on('input', function() {
        canUserVerPass = this.value;
    });

    $("#regUserPass").on('input', function() {
        hiddenUserPassword = this.value;
    });

    $("#regUserVerifyPass").on('input', function() {
        hiddenVerUserPassword = this.value;
    });

    $("#loginSubmit").click(function(){
        let loginUsername = $("#logUserName").val();
        let verified = false;
        $("#loginError").text("");

        db.collection("users").where("username", "==", loginUsername)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                verified = true;
                if(doc.data().password === canUserVerPass){
                    $( ".close" ).trigger( "click" );
                    userSetup(
                        doc.data().username,
                        doc.data().boardstate,
                        doc.data().location,
                        doc.data().inventory, 
                        doc.data().skills,
                        doc.data().health,
                        verified
                    );
                }
                else{
                    $("#loginError").text("Your password and verified password does not match.");
                }
            });
            console.log(verified);
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    });

    $("#registerSubmit").click(function(){
        event.preventDefault();

        let regUsername = $("#regUserName").val();
        let regEmail = $("#regUserEmail").val();

        $("#registerError").text("");

        if(hiddenUserPassword === hiddenVerUserPassword){
            db.collection("users").add({
                username: regUsername,
                password: hiddenUserPassword,
                useremail: regEmail
            });
            $( ".close" ).trigger( "click" );
            newUserSetup(regUsername);
        }
        else{
            $("#registerError").text("Your password and verified password does not match.");
        }
    });

    function userSetup(username, boardstate, location, inventory, skills, health, verified){
        if(verified == true){
            $("#userSetupDiv").html("<h5>Are you ready to play " + username + "?</h5>");
            $("#gameContinue").attr("disabled", false);
            window.localStorage.setItem('user', username);
        }
    }

    function newUserSetup(username, verified){
        $("#userSetupDiv").html("<h5>Welcome " + username + " to Gigatronia.</h5>");
        window.localStorage.setItem('user', username);
    }
});
