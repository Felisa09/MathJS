function mixed () {
	var num1 = captura("Please enter the first number");
	var num2 = captura("Please enter the second number");
	var signo = capturaSigno();
	var resultado = operacion(signo, num1, num2);
	alert("Your result is: " + resultado);
}

function captura (mensaje) {
	var numTexto = prompt(mensaje);
	while (isNaN(numTexto)) {
		numTexto = prompt("It was not a valid number\n" + mensaje);
	}

	return parseInt(numTexto);
}

function capturaSigno() {
	var opcion;
	var opcionEsInvalida = true;

	//Capturamos la opcion
	opcion = prompt("Please select your operation \n1) Sum \n2) Substraction \n3) Multiplication \n4) Division");

	do {
		

		//SI es un numero y (opcion es 1 o es 2 o es 3 o es 4)
		if (!isNaN(opcion) && (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4")) {
			opcionEsInvalida = false;
		} else {
			//Capturamos la opcion mostrando el error
			opcion = prompt("This was not a valid option, please try again! \nPlease select your operation \n1) Sum \n2) Substraction \n3) Multiplication \n4) Division");
		}

	} while (opcionEsInvalida);

	return parseInt(opcion); 
}

function operacion(opcion, num1, pepito) {
	switch (opcion) {
		case 1: 
			return num1 + pepito; 
			break;
		case 2:
			return num1 - pepito;
			break;
		case 3:
			return num1 * pepito;
			break;
		case 4:
			return num1 / pepito;
			break;
	} 

}

mixed();
