// Make two variables
// You must change to a string to use two 0's
let minutes = 25;
let seconds = "00";

// Bell and click sounds
const click = new Audio("click-sound.mp3")
const bell = new Audio("bell.mp3")

// Create function to connect id from index.html to variables
// Padstart is a string method that adds characters to the beginning of a string until it reaches a specified length
function updateDisplay() {
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");
}

// Your variable followed by current time allows to set the audio to whatever time
// By reseting the variable every time you click, it will play the sound again regardless of if it's done playing
function start() {
    click.currentTime = 0;
    click.play();

    minutes = 24;
    seconds = 59;

    updateDisplay();

    // Sets the minutes and seconds intervals to their values in miliseconds
    // The minutes and seconds timer functions are set off every time the value is done
    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    // These functions count down by one every time they hit the interval
    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML =  minutes;
    }

    function secondsTimer() {
        seconds--;
        document.getElementById("seconds").innerHTML = seconds;

        // Resets timer to 59 every time it gets to 0
        if(seconds <= 57) {
             if(minutes <= 24) {
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML = "Session Done, Take a Break Boiii"
                
                // Makes the class list dynamic so that you can display other messages the same way
                document.getElementById("done").classList.add("show_message");

                bell.play();
            }
            seconds = 60


        }
    }
}

// Arrow functions delay things until the page is done loading
window.onload = () => {
    updateDisplay();
    document.getElementById("start-button").addEventListener("click", start);
};

