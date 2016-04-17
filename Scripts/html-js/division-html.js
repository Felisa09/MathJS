function division() {
	var num1 = document.getElementById("first-number").value;
	var num2 = document.getElementById("second-number").value;
	var resultado = parseInt(num1)/parseInt(num2);
	document.getElementById("result").value=resultado;
}