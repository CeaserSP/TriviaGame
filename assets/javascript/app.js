// Start button page
function startScreen() {

    $("#startButton").click(function () {
        $(".question").show();
        $(".button").hide();
        $(".score").hide();
    });
}

// Timer
var number = 5;
var intID;
function run() {
    intId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $(".timer").html("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        scoreScreen();
    }
}
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intId);
    
}
run();
// Three sets of checkboxs

// Score page
function scoreScreen() {
        $(".score").show();
        $(".question").hide();
        
}

// Counter for correct answers page

