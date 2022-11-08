const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];


for (i=0; i<kuvat.length; i++) {

  var ul = document.getElementsByTagName('ul')[0];
  var li = document.createElement("li");
  ul.appendChild(li);

  document.getElementsByTagName('li')[i].innerHTML = "<img src = '" + kuvat[i]+"'>";
}

