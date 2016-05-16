//Function designed to calculate degrees of unsaturation for an organic molecule
function calcUnsat() {
	//Grab all user values from the html form and assign them to local variables
	var carbon = document.getElementById('carbon').value;
	var hydrogen = document.getElementById('hydrogen').value;
	var nitrogen = document.getElementById('nitrogen').value;
	var halogen = document.getElementById('halogen').value;
	/* Controls for empty strings in case user decides not to provide a numerical value. 
	Oxygen is not included here as it is ignored in calculating degrees of unsaturation */
	if (carbon === '' || 0) {
		alert ('Organic compounds must contain carbon, please enter a value for carbon.');
		return;
	}
	if (hydrogen === '') {
		hydrogen = 0;
	}
	if (nitrogen === '') {
		nitrogen = 0;
	}
	if (halogen === '') {
		halogen = 0;
	}
	//Calculate the total relative hydrogen number present and assign to local variable
	var x = parseInt(hydrogen) - parseInt(nitrogen) + parseInt(halogen);
	//Calculates the degrees of unsaturation present in the molecule
	var unsaturation = (((2 * parseInt(carbon) + 2) - x) /2);


	if (isNaN(unsaturation) === true) {
		alert ("You have entered non-numeric values, please use only numbers and try again.");
	}
	else {
		alert ("Your molecule has " + unsaturation + " degree(s) of unsaturation.");
	}
}