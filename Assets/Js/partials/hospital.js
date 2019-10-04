$(document).ready(function(){
    var startingPointY = 0;
    var startingPointX = 0;

    function testing() {
        // $('#startGamePlay').click(function(){
            $('body').html($("<div id='playArea' class='playarea'>"));
            // $('body').css("background-image", "url('Assets/Sprites/')");
        // });
        
        var y = new Array(63);
        var x = 21;
        var playAreaCol;
        var playAreaRow;
        
        for (var iy = 0; iy < y.length; iy++) {
            playAreaCol = $("<div id='colBlock"+ iy +"'>");
            y[iy] = new Array(x);
            for(var ix = 0; ix < x; ix++){            
                playAreaRow = $("<div id='rowBlock"+ ix +"' class='block'><img id='characterImage"+ ix +"' class='characterImage'/>");
                if(iy == 0 || ix == 0 || iy == y.length - 1 || ix == x - 1){
                    playAreaRow.css("background-image", "url('Assets/Sprites/LandScape/Flooring/floorTile(24).png')");
                }
                playAreaCol.append(playAreaRow);
            }
            $("#playArea").append(playAreaCol);
        }
        $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "Assets/Sprites/Characters/Character_3/Walking/walkRight(1).png");
    }
    testing();
    var interval = 1;
    var pacer = 0;
    document.onkeydown = function() {
        switch(event.key){
            case 'ArrowUp':
            case 'w':
                $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "").removeClass("characterImage");
                if(startingPointX > 0){startingPointX--;} 
                if(interval < 9){              
                    interval++;
                    $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "Assets/Sprites/Characters/Character_3/Walking/walkUp("+ interval +").png").addClass("characterImage");
                } else {
                    interval = 1;
                    $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "Assets/Sprites/Characters/Character_3/Walking/walkUp("+ interval +").png").addClass("characterImage");
                }
            break;

            case 'ArrowDown':
            case 's':
                $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "").removeClass("characterImage");
                if(startingPointX < 17){startingPointX++;}
                if(interval < 9){              
                    interval++;
                    $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "Assets/Sprites/Characters/Character_3/Walking/walkDown("+ interval +").png").addClass("characterImage");
                } else {
                    interval = 1;
                    $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "Assets/Sprites/Characters/Character_3/Walking/walkDown("+ interval +").png").addClass("characterImage");
                }
            break;

            case 'ArrowLeft':
            case 'a':
                $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "").removeClass("characterImage");
                if(startingPointY > 0){startingPointY--;}
                if(interval < 9){              
                    interval++;
                    $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "Assets/Sprites/Characters/Character_3/Walking/walkLeft("+ interval +").png").addClass("characterImage");
                } else {
                    interval = 1;
                    $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "Assets/Sprites/Characters/Character_3/Walking/walkLeft("+ interval +").png").addClass("characterImage");                    
                }
                break;
            
            case 'ArrowRight':
            case 'd':
                $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "").removeClass("characterImage");
                if(startingPointY < 60){startingPointY++;}
                if(interval < 9){              
                    interval++;
                    $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "Assets/Sprites/Characters/Character_3/Walking/walkRight("+ interval +").png").addClass("characterImage");
                } else {
                    interval = 1;
                    $("#colBlock" + startingPointY + " " + "#rowBlock" + startingPointX + " img").attr("src", "Assets/Sprites/Characters/Character_3/Walking/walkRight("+ interval +").png").addClass("characterImage");
                }    
            break;
        }
    }
});