let getTagPListaAmigos = document.getElementById('lista-amigos');
let getTagPListaSorteio = document.getElementById('lista-sorteio');
let getTagInputNomeAmigo = document.getElementById('nome-amigo');

let amigosAdicionados = [];

function adicionar() {
    let nomeAmigo = getTagInputNomeAmigo.value.trim();
    
    if (nomeAmigo == '') {
        alert('Digite um nome válido');
        return;
    }

    if (amigosAdicionados.includes(nomeAmigo)) {
        alert('Nome já incluido');
        return;
    }

    amigosAdicionados.push(nomeAmigo);

    if (amigosAdicionados.length >= 2) {
        getTagPListaAmigos.textContent += `, ${nomeAmigo}`;
    } else {
        getTagPListaAmigos.textContent = nomeAmigo;
    }
    getTagInputNomeAmigo.value = '';
}

function sortear() {
    if (amigosAdicionados.length <= 1) {
        alert('Adicione pelo menos 2 nomes')
        return;
    }

    let arrayAmigosAdiocionadosEmbaralhado = embaralhaAmigosAdicionados(amigosAdicionados.concat());

    getTagPListaSorteio.textContent = '';
    for (let i = 0; i < amigosAdicionados.length; i++) {

        getTagPListaSorteio.innerHTML += `${amigosAdicionados[i]} --> ${arrayAmigosAdiocionadosEmbaralhado[i]}<br>`;
    }
}

function reiniciar() {
    getTagPListaSorteio.textContent = '';
    getTagPListaAmigos.textContent = '';
    amigosAdicionados = [];
}

function embaralhaAmigosAdicionados(array) {
    let isArrayEmbaralhado = false;
    array = shuffleArray(array);
    
    while (!isArrayEmbaralhado) {
        for (let i = 0; i < amigosAdicionados.length; i++) {
            if (amigosAdicionados[i] == array[i]) {
                array = shuffleArray(array);
                isArrayEmbaralhado = false;
                break;
            } else {
                isArrayEmbaralhado = true;
            }
        }
    }
    return array;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}