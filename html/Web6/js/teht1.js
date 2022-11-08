

document.getElementsByTagName('td')[0].innerHTML= ("Taavetti");
document.getElementsByTagName('td')[1].innerHTML= ("Taapero");
document.getElementsByTagName('td')[2].innerHTML= ("Tape");
document.getElementsByTagName('td')[3].innerHTML= ("Kuhmo 00560");

var tr = document.getElementsByTagName('tr')[1];
var td = document.createElement("td");
tr.appendChild(td);

document.getElementsByTagName('td')[4].innerHTML= ("050677844");

var nikki = document.getElementsByTagName('td')[2];
nikki.parentNode.removeChild(nikki);

var nikkiotsikko = document.getElementsByTagName('th')[2];
nikkiotsikko.parentNode.removeChild(nikkiotsikko);


