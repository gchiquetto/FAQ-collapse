const questionContainer = document.querySelectorAll('.question_container');

questionContainer.forEach(container =>{
    container.addEventListener('click', e => {
    if(e.target.closest('.btn')){
        const btn = e.target;
        const answserContainer = container.lastElementChild;
        btn.classList.toggle('btn--clicked', !btn.classList.contains('btn--clicked'));
        answserContainer.classList.toggle('question_container-bottom--collapsed', !answserContainer.classList.contains('question_container-bottom--collapsed'));
    }
    } )
}
)