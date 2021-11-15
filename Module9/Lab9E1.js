  var start = new Date();
  console.log(start);
var currentTime = start.getTime();

function stopTime(){
  var stop = new Date();
    console.log(stop);
  var finalTime = (stop - currentTime)/1000;
    console.log(finalTime);
    alert("You have been on this page for: " + finalTime)
}
