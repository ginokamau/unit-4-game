//Crystal Collector
var wins = 0;
var losses = 0;
var previous = 0;
var randomNum = getRandom(19,120);
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);}

var reset = function(){
    $(".crystals").empty();

    //  pick randon number between 19-120
    //  display random number

    $("#result").html(randomNum);

    //  call the tallies
    $("#winTotal").text(wins);
    $("#lossTotal").text(losses);

    //  set random value between 1-12 to 4 crystals
    //  a new random should generate after each reset
    var gemImage = ["url('assets/images/gem0.png')","url('assets/images/gem1.png')","url('assets/images/gem2.png')","url('assets/images/gem3.png')"];
    for(var i = 0; i<4; i++){
        var random = getRandom(1,12);
        //    console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
                
            }).css({
                "background-image":gemImage[i],
                "background-repeat":"no-repeat",
                "background-position":"center center",
                "background-size":"150px 150px"    
            });

        $(".crystals").append(crystal);
        $("#previous").html("Total score = " + previous);
    }
}
reset();
//  randomNum = getRandom(19,120);
//  on click values display and add to previous result
$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));

    previous =+ num;
//  does sum equal random number
	//  if yes-you win
	//  add to wins
	//  display in wins column
	//  restart game
    if(previous === randomNum){
        alert("Congrats...You won!")    
        wins++;
        $('#totalWins').html(wins);

        reset();
    }
		//  is sum greater than random
			//  if yes-you lose
			//  add to losses
			//  display in losses column
			//  restart game
    else if(previous > randomNum){
        alert("Sorry Charlie...You loss");
        losses++; 
        $('#totalLosses').html(losses);

        reset();
    }
});




