//console.log('page loaded');
//There is one bug in the script, can you identify what this is?
//-> Kirjaimet ilmestyy näytölle aina yhden kirjaimen jäljessä koska käytetään onkeypress, sen sijaan kannattaa käyttää onkeyup

/*Teht2
document.getElementById('save').onclick = save;
document.querySelector('#userForm button[id="save"]').onclick = save;
*/

/*Teht3
document.querySelector('#userForm button[id="save"]').onclick = save;

function save(){
	var name = document.querySelector('#userForm input[type="text"]').value;
	var email = document.querySelector('#userForm input[type="email"]').value;
	var password = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary h1').innerHTML = name + " " + email + " " + password;

	var paragraphs = document.querySelectorAll('#summary p');
	paragraphs[1].innerHTML = 'Hello World!';
}*/

//Teht4
document.querySelector('#userForm input[type="text"]').onkeyup = function() {
	console.log('updating user input to the screen');
	var name = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = name;
};

document.querySelector('#userForm input[type="email"]').onkeyup = function() {
	console.log('updating user input to the screen');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary #email').innerHTML = email;
};

document.querySelector('#userForm input[type="password"]').onkeyup = function() {
	console.log('updating user input to the screen');
	var password = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary #password').innerHTML = password;
};

document.onkeyup = function() {
	document.querySelector('#summary #hello').innerHTML = 'Hello World!';
}


