function getData(){
    let borough = event.target.id;
    let limit = document.getElementById("userInput").value
    if (limit ==""){
limit= 10
    }
let api = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?"
+ "agency=NYPD"
+ "&borough="
+ borough 
+"&$limit="
+limit

fetch(api) 
.then((data) =>{
    return data.json();

    }).then((formattedData) =>{

    displayData(formattedData)

});
}

document.getElementById('BROOKLYN').addEventListener('click', getData);
document.getElementById('MANHATTAN').addEventListener('click', getData);
document.getElementById('QUEENS').addEventListener('click', getData);
document.getElementById('STATEN ISLAND').addEventListener('click', getData);
document.getElementById('BRONX').addEventListener('click', getData);

function displayData(data) {
	document.getElementById('div1').innerHTML = '';

	for (let i = 0; i < data.length; i++) {
		document.getElementById('div1').innerHTML +=
			'<p>' + data[i].descriptor + '</p>';
		document.getElementById('div1').innerHTML +=
			'<details> <summary> POLICE RESPONSE </summary>' +
			data[i].resolution_description +
			'</details>';
	}
}