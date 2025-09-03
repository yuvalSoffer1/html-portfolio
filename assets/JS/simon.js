var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var randomNumber =0;
var randomChosenColour="";
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
});
function nextSequence(){
    level++;
    $("#level-title").text("Level "+level);
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    for(var i=0;i<gamePattern.length;i++){
        setTimeout(function(i) {
            $("#"+gamePattern[i]).fadeIn(100).fadeOut(100).fadeIn(100);
            var audio = new Audio("../assets/sounds/"+gamePattern[i]+".mp3");
            audio.play();
        }, 600 * i, i); // Adjust delay as needed
        
    }
    
    
}
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    for(var i=0;i<userClickedPattern.length;i++){
        if(userClickedPattern[i]===gamePattern[i]){
            var audio = new Audio("../assets/sounds/"+userChosenColour+".mp3");
            audio.play();
            animatePress(userChosenColour);
            if(userClickedPattern.length===gamePattern.length){
                setTimeout(function(){
                    nextSequence();
                },1000);
                userClickedPattern = [];
            }
        }
        else{
            console.log("wrong");
            var audio = new Audio("../assets/sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
        }
        
    }

   
});
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    userClickedPattern = [];
}
