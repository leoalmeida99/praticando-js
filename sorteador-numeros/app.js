let getLabelTextoParagrafo = document.getElementById('resultado').querySelector('.texto__paragrafo');

function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateONumero = parseInt(document.getElementById('ate').value);
    let numeros = [];

    if (isEntradasInvalidas()) return;
    
    if (doNumero == ateONumero) {
        getLabelTextoParagrafo.textContent = `Números sorteados:  ${doNumero}`;
        return;
    }

    if (doNumero > ateONumero) {
        let temp = doNumero;
        doNumero = ateONumero;
        ateONumero = temp;
    }

    let diferencaAteONumeroEDoNumero = ateONumero - doNumero;
    if (Math.ceil(diferencaAteONumeroEDoNumero / 2) <= quantidadeDeNumeros) {
        funcao(doNumero, ateONumero, diferencaAteONumeroEDoNumero, quantidadeDeNumeros);
        return;
    }

    // if (diferencaAteONumeroEDoNumero < quantidadeDeNumeros || diferencaAteONumeroEDoNumero - 1 < quantidadeDeNumeros) {
    //     funcao(doNumero, ateONumero, diferencaAteONumeroEDoNumero, quantidadeDeNumeros);
    //     return;
    // }

    while(quantidadeDeNumeros--) {

    }
    
    getLabelTextoParagrafo.textContent = 'deve sortear';
}

function funcao(doNumero, ateONumero, diferencaAteONumeroEDoNumero, quantidadeDeNumeros) {
    let numeros = [];
    
    for (let i = doNumero; i <= ateONumero; i++) {
        numeros.push(i);
    }
    console.log(numeros);


    let array2 = [];

    debugger;
    while (quantidadeDeNumeros--) {
        valorAleatorio = doNumero + Math.trunc(Math.random()) * (ateONumero - doNumero);
        array2.push(numeros[valorAleatorio]);
    }


    
    console.log(numeros);
    console.log(array2);
}

function isEntradasInvalidas() {
    let elementos = document.getElementsByClassName('container__campo');
    let contadorEntradasInvalidas = 0;
    let camposInvalidos;
    let paresLabelInput = [];
    let labelsInvalidas = [];
    
    Array.from(elementos).forEach(element => {
        let label = element.querySelector('label').textContent;
        let input = element.querySelector('input').value;
        
        paresLabelInput.push({ label: label, input: input });
    });
    
    paresLabelInput.forEach(element => {
        if (element.input == '') {
            labelsInvalidas.push(element.label);
            contadorEntradasInvalidas++;
        }
    });

    if (contadorEntradasInvalidas == 0) return false;
        
    if (contadorEntradasInvalidas == paresLabelInput.length) {
        getLabelTextoParagrafo.textContent = 'Preencha todos os campos corretamente';
        return true;
    }

    if (contadorEntradasInvalidas == 2) {
        camposInvalidos = `${labelsInvalidas[0]} e ${labelsInvalidas[1]}`;
        getLabelTextoParagrafo.textContent = `Os campos: ${camposInvalidos.toLowerCase()}, estão inválidos` ;
        return true;
    }
    
    if (labelsInvalidas) {
        getLabelTextoParagrafo.textContent = `O campo: ${labelsInvalidas[0].toLowerCase()}, está inválido`;
        return true;
    }
}