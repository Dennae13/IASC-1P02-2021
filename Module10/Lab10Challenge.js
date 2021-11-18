function finalProduct(){
  var firstNum = Number(document.getElementById('firstNum').value);
  console.log(firstNum);

  var secondNum = Number(document.getElementById('secondNum').value);
  console.log(secondNum);
  var output = firstNum + secondNum;
  console.log(output);
  document.getElementById('output').innerHTML = output;
}

function finalProduct2(){
  var firstNum = Number(document.getElementById('firstNum').value);
  console.log(firstNum);

  var secondNum = Number(document.getElementById('secondNum').value);
  console.log(secondNum);
  var output = firstNum - secondNum;
  console.log(output);
  document.getElementById('output').innerHTML = output;
}

function finalProduct3(){
  var firstNum = Number(document.getElementById('firstNum').value);
  console.log(firstNum);

  var secondNum = Number(document.getElementById('secondNum').value);
  console.log(secondNum);
  var output = firstNum * secondNum;
  console.log(output);
  document.getElementById('output').innerHTML = output;
}

function finalProduct4(){
  var firstNum = Number(document.getElementById('firstNum').value);
  console.log(firstNum);

  var secondNum = Number(document.getElementById('secondNum').value);
  console.log(secondNum);
  var output = firstNum / secondNum;
  console.log(output);
  document.getElementById('output').innerHTML = output;
}
