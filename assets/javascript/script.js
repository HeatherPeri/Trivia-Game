function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * .5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


// function check(){
    

// }

// var clockRunning = false;
// var time = 0;

// setTimeout(thirtySeconds, 1000 * 30);
// window.onload = function thirtySeconds() {
 
//   }

//   function reset() {

//     time = 0;
//     lap = 1;
//     function start() {
//         if (!clockRunning) {
//           $("#start").on("click", function() {
      
//           }
//           )
//         }
//       }

// var score = 0;
// for(var i=0; i <questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//         score++;
//     }
// alert("you got " + score +"/" + questions.length);

// }
// var questions = [
// {
//     prompt: "What famous serial killer dressed as a clown?
//     \n(a) John Wayne Gacy \n(b) Ted Bundy \n(c) Zodiac Killer",
//     answer: "a"
// }

// {
//     prompt: "How many times did Ted Bundy escape?
//     \n(a) 1 \n(b) 2 \n(c) 3",
//     answer: "b"
// }
// {
//     prompt: "Which serial killer was identified this year (2019)?
//     \n(a) Zodiac \n(b) Dr. No \n(c) Golden State Killer",
// }];

