const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for (i=0; i<kuvat.length; i++) {

  const ul = document.getElementsByTagName('ul')[0];

  const li = document.createElement('li');

  const img = document.createElement('img');
  img.src = kuvat[i];

  ul.appendChild(li);
  li.appendChild(img);

}
