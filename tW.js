document.addEventListener('DOMContentLoaded', ()=>{

    // Вызов и закрытие модального окна "Связаться"
    const modalBtn = document.querySelectorAll('.contact'),
    modalWindow = document.querySelector('.modal');

    modalBtn.forEach(item => {
        item.addEventListener('click', ()=>{
            modalWindow.classList.add('modal_show');
        }); 
    });   

    modalWindow.addEventListener('click', (e)=>{
    if(e.target === modalWindow || e.target.getAttribute('data-close') == ""){
        modalWindow.classList.remove('modal_show');
    }
    });
    document.addEventListener('keydown', (e)=>{
    if (e.code === 'Escape'){
    modalWindow.classList.remove('modal_show');
    }
    });

});