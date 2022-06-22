const main = document.querySelector('.main');
//const answserContainer = document.querySelector('.question_container-bottom');
const questionContainer = document.querySelectorAll('.question_container');


// main.addEventListener('click', e => {
//     if(e.target.closest('.btn')) {
//         const btn = e.target;
//         const answserContainer = btn.closest('.question_container');
//         const answer = answserContainer.closest('.question_container-top');
//         console.log(answer);
//         btn.classList.toggle('btn--clicked', !btn.classList.contains('btn--clicked'));
//         //answserContainer.classList.toggle('question_container-bottom--collapsed', !answserContainer.classList.contains('question_container-bottom--collapsed'))
//     };
// })


questionContainer.forEach(container =>{
    container.addEventListener('click', e => {
    if(e.target.closest('.btn')){
        const btn = e.target;
        btn.classList.toggle('btn--clicked', !btn.classList.contains('btn--clicked'));
        console.log(container.closest('.question_container-top'), container);
        //answserContainer.classList.toggle('question_container-bottom--collapsed', !answserContainer.classList.contains('question_container-bottom--collapsed'))
    }
    } )
}
)