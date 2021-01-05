const checkLoto = (firstname, lastname, email, lotoNumbers) => { /*... */ };


function validateFirstName() {
  var x = document.forms["myForm"]["firstname"].value;
  if (x == "") {
    alert("First name must be filled out");
    return false;
  }
};

function validateLastName() {
  var x = document.forms["myForm"]["lastname"].value;
  if (x == "") {
    alert("Last name must be filled out");
    return false;
  }
};

function validateEmail(email) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(String(email).toLowerCase()) == false || "") {
    	alert("Email adress cannot be null and must be correct")
    	return false
    }; 
};

function validateLotoNumbers() {
	for (i = 1; i < 7; i++) {
	  var x = document.forms["myForm"]["number" + i].value;
	  if (x == "" || x < 1 || x > 99) {
	    alert("Cannot leave it blank. Please chooses 6 number between 1 and 99.");
	   	return false;
	  }
	}
};

function generateNumber(){
	winnerNumbers = []
	for (i = 1; i < 7; i++) {
		winnerNumbers.push(Math.floor(Math.random() * 100));
	}
	return winnerNumbers
};

function won(array1,array2) {
    for(var i=0; i<7; i++) 
    if(array1[i]!= array2[i]){
      return false
    }
    else {
      return true
     } 
};

function lotoGame(){
	 let inputlotto = Array();
	 inputlotto = [
	 	document.forms["myForm"]["number1"].value,
	 	document.forms["myForm"]["number2"].value,
	 	document.forms["myForm"]["number3"].value,
	 	document.forms["myForm"]["number4"].value,
	 	document.forms["myForm"]["number5"].value,
	 	document.forms["myForm"]["number6"].value,
	 ]

	 let winningNumbers = Array();
	 winningNumbers = generateNumber();

	 if (won(inputlotto, winningNumbers)) {
	 	alert("You win")
	 }
	 else {
	 	alert(`You lost, the winner numbers were ${winningNumbers} `)
	 }
};

function validateForm(){
	validateFirstName()
	validateLastName()
	validateEmail(document.forms["myForm"]["email"].value)
	validateLotoNumbers()
	lotoGame()
};
