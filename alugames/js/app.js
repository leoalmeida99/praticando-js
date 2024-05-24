function alterarStatus(id) {
    let tagLi = document.getElementById(`game-${id}`);
    let tagA = tagLi.querySelector('a');
    let tagDiv = tagLi.querySelector('div');

    if (tagA.classList.contains('dashboard__item__button--return')) {
        tagA.textContent = 'Alugar';
        tagA.classList.remove('dashboard__item__button--return');
        tagDiv.classList.remove('dashboard__item__img--rented');
    } else {
        tagA.textContent = 'Devolver';
        tagA.classList.add('dashboard__item__button--return');
        tagDiv.classList.add('dashboard__item__img--rented');
    }
}