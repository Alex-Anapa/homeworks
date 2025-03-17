// const btn = document.querySelector('.btn__open')
// const modal = document.querySelector('.modal')
// const openModal = () => {
//     modal.classList.add('modal__open')
// }
// const closeModal = () => {
//     modal.classList.remove('modal__open')
// }



// btn.addEventListener('click', openModal)

// modal.addEventListener('click', event => {
//     const target = event.target
//     if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
//         closeModal()
//     }
// })


// document.addEventListener('keydown', event => {
//     if(event.code === 'Escape' && modal.classList.contains('modal__open')) {
//         modal.classList.toggle('modal__open')
//     }
// })



const openBtn = document.querySelector('.btn__open');
const closeBtn = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');


openBtn.addEventListener('click', () => {
    modal.classList.add('open');
});


closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
});


modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.classList.remove('open');
    }
});


document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        modal.classList.remove('open');
    }
});



