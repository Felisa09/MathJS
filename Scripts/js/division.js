//Declarar variables
var num1;
var num2;
var total;
//capturar numeros enteros
num1 = parseInt(prompt("Please enter the first number"));
num2 = parseInt(prompt("Please enter the second number"));

//mostrar el resultado
total = num1 / num2;

if (num2 == 0) {
	alert("You can't divide any number by zero");
} else {
	alert("Your result is " + total);
}



