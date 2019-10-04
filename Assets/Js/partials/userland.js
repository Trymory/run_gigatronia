$(document).ready(function(){
    function testing() {
        console.log('here');
        // $('#startGamePlay').click(function(){
            $('body').html('');
            // $('body').css("background-image", "url('Assets/Sprites/LandScape/Flooring/floorTile(11).png')");
        // });
    }
    //The idea is that you will take in 2 dimentions and create a layout bassed off of them
    //The tile sizes strink with screen size rather than reducing the number of blocks
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    var roomHeight = getRandomArbitrary(5, 10);
    var roomWidth = getRandomArbitrary(5, 10);

    var y = new Array(Math.ceil(roomHeight));
    var x = Math.ceil(roomWidth);

    for (var iy = 0; iy < y.length; iy++) {
        y[iy] = new Array(x);
        for(var ix = 0; ix < x; ix++){
            y[iy][ix] = "x";
        }
    }

    testing();
});