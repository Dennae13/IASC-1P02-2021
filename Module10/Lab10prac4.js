function testScript(){
  setTimeout(repeatScript, 1000);
}

function repeatScript(){
  document.write("One Div <br />");
    setTimeout(repeatScript2, 2000);
}

function repeatScript2(){
  document.write("Two Div <br />");
  //looping script below
 setTimeout(testScript, 1000);
}
