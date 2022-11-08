

const nappi = document.querySelector('button');

function popup(tapahtuma){
    tapahtuma.currentTarget;
    alert('Nappia klikattu.');
}

nappi.addEventListener('click', popup);