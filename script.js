const btnProxima = document.querySelector('#proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
        paragrafoPiada.innerText = piada.value;
    })
    
    btnProxima.addEventListener('click', puxarPiada);

}
puxarPiada();