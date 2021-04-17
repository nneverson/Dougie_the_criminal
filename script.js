const baseUrl =
	'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX';

// When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on

 
const Bronx = document.querySelector('input[value=BRONX]');
const form = document.querySelector('form');
const display = document.getElementById('display')

form.addEventListener('submit', (event) => {
	event.preventDefault();
	fetch(baseUrl)
		// userInput.value
		.then((res) => res.json())
		.then((resJson) => {
			console.log(resJson);
			display.innerText = resJson[0].complaint_type;
		});
})
