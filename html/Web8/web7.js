
function searchShow(query){
    var api ='http://api.tvmaze.com/search/shows?q=';
    var show = document.getElementById('search').value;
    var url = api + show;
    fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            console.log(jsonData);
            nayta(jsonData);
        });
}

    const haku = document.getElementById("haku");
    haku.onclick = function (event){
        const search = document.getElementById("search");
        searchShow(search.value);
    };


function nayta(response) {
    for (var i = 0; i < response.length; i++) {

        const pname = document.createElement('p');
        pname.setAttribute('id', 'name' + i);
        document.getElementById('content').appendChild(pname);

        //<p id="image0">
        //<img src="..."/>
        //</p>
        const pimage = document.createElement('p');
        pimage.setAttribute('id', 'image' + i);
        document.getElementById('content').appendChild(pimage);
        const img = document.createElement('img');
        img.setAttribute('src', response[i].show.image.medium);
        pimage.appendChild(img);

        const purl = document.createElement('p');
        purl.setAttribute('id', 'url' + i);
        document.getElementById('content').appendChild(purl);

        const pgenre = document.createElement('p');
        pgenre.setAttribute('id', 'genre' + i);
        document.getElementById('content').appendChild(pgenre);

        const psummary = document.createElement('p');
        psummary.setAttribute('id', 'summary' + i);
        document.getElementById('content').appendChild(psummary);

        document.getElementById("name" + i).innerHTML = response[i].show.name;
        document.getElementById("url" + i).innerHTML = response[i].show.url;
        document.getElementById("summary" + i).innerHTML = response[i].show.summary;
        document.getElementById("genre" + i).innerHTML = response[i].show.genres;
    }
}
