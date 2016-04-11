//Constructor
function mixed () {
	//Capturar numeros y signo
	var num1 = captura("Please enter your first number:");
	var num2 = captura("Please enter your second number:");
	var signo = prompt("Please select an operation \n+, \n-, \n*, \n/ ");
	//Realizar Operación
	var resultado = operacion(signo, num1, num2);
	alert("Your result is: "+resultado);
}

//Capturar número
function captura (mensaje) {
	return parseInt(prompt(mensaje));
}

function operacion (signo, num1, num2) {
	var total;
	if (signo == "+") {
		total = num1 + num2; 
	} 
	else if (signo == "-") {
		total = num1 - num2;
	} 
	else if (signo == "*") {
		total = num1 * num2;
	} 
	else if (signo == "/") {
		total = num1 / num2;
	} else {
		alert("This is not a valid operation, Please try again");
	}

	return total;
}

//Llamada al constructor
mixed();
