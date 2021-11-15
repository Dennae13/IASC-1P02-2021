function finalProduct(){
  var firstNum = Number(document.getElementById('firstNum').value);
  console.log(firstNum);

  var secondNum = Number(document.getElementById('secondNum').value);
  console.log(secondNum);
  var output = firstNum + secondNum;
  console.log(output);
  document.getElementById('output').innerHTML = output;
}
