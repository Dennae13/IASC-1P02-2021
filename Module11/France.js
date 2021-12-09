function clock(){
document.getElementById('demo').innerHTML = Date();
}
function textMagic(){
document.getElementById('_Magic').style.color= 'purple';
document.getElementById('Magic2').style.color= 'magenta';
document.getElementById('Magic3').style.color= 'purple';
document.getElementById('Magic4').style.color= 'magenta';
document.getElementById('_Magic2').style.color= 'purple';
document.getElementById('Magic5').style.color= 'magenta';
document.getElementById('Magic6').style.color= 'purple';
document.getElementById('Magic7').style.color= 'magenta';
document.getElementById('Magic8').style.color= 'purple';
document.getElementById('Magic9').style.color= 'magenta';
document.getElementById('Magic10').style.color= 'purple';
document.getElementById('Magic11').style.color= 'magenta';
}
function textMagic2(){
document.getElementById('_Magic2').style.color= 'purple';
document.getElementById('Magic5').style.color= 'magenta';
document.getElementById('Magic6').style.color= 'purple';
document.getElementById('Magic7').style.color= 'magenta';
document.getElementById('Magic8').style.color= 'purple';
document.getElementById('Magic9').style.color= 'magenta';
document.getElementById('Magic10').style.color= 'purple';
document.getElementById('Magic11').style.color= 'magenta';
}
function textMagic3(){
document.getElementById('_Magic3').style.color= 'purple';
document.getElementById('Magic12').style.color= 'magenta';
document.getElementById('Magic13').style.color= 'purple';
}
var start = new Date();
console.log(start);
var currentTime = start.getTime();

function stopTime(){
  var stop = new Date();
    console.log(stop);
  var finalTime = (stop - currentTime)/1000;
    console.log(finalTime);            
    alert("You have been on this page for: " + finalTime);
}
function addWord(){
  var word = document.getElementById('foodName').value;
  console.log(word);
}
