var todayDate = new Date();
var month = todayDate.getMonth();
var year = todayDate.getFullYear();
var day = todayDate.getDay();



console.log(todayDate);
console.log(month);

document.write(day + "/" + month + "/" + year);

//var myAlert = alert ("This is an alert! What does it equal?");
console.log(myAlert);

//var myConfirm = confirm ("Do you want a taco?");
console.log(myConfirm);

//var myPrompt = prompt ("Enter your favorite color");
console.log(myPrompt);

function addWord(){
  var word = document.getElementById('fullName').value;
  var word2 = document.getElementById('fullName2').value;
  console.log(word);
  console.log(word+word2);
}
