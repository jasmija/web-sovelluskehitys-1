
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('table');

var tr = document.createElement('tr');
var bookname = document.createElement('th');
bookname.innerHTML = "Book name";
var bookyear = document.createElement('th');
bookyear.innerHTML = "Year";
tr.appendChild(bookname);
tr.appendChild(bookyear);

list.appendChild(tr);

for (var i=0; i < books.length; i++) {

	console.log(books[i].title);
	console.log(books[i].year);

	var bookrow = document.createElement('tr');
	bookrow.id = "bookrow";
	var book = document.createElement('td');
	var year = document.createElement('td');
	bookrow.appendChild(book);
	bookrow.appendChild(year);

	book.innerHTML = books[i].title;
	year.innerHTML = books[i].year;
	list.appendChild(bookrow);

	book.onclick = function (){
		document.querySelector('h1').innerHTML = book.innerHTML;
	}
}

document.body.appendChild(list);
rowClick();

function rowClick(){
	var rows = list.getElementsByTagName('tr');
	for (i = 0; i < rows.length; i++) {
		var currentRow = list.rows[i];
		var createClickHandler = function(row) {
			return function() {
				var cell = row.getElementsByTagName("td")[0];
				var id = cell.innerHTML;
				document.querySelector('h1').innerHTML = id;
			};
		};
		currentRow.onclick = createClickHandler(currentRow);
	}
}

