var myAge = prompt ("What is your age?");
console.log(myAge);
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

	document.getElementById("birthYear").innerHTML = currentYear - myAge;
