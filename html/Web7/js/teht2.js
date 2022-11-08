
const img = document.querySelector('img');

function nakyy(){
    img.addEventListener('mouseenter',nakyy);
    document.getElementsByTagName('p')[0].className = 'show';
}
function einay(){
    img.addEventListener('mouseleave',einay);
    document.getElementsByTagName('p')[0].className = 'hide';
}

img.addEventListener('mouseenter', nakyy);
img.addEventListener('mouseleave', einay);