window.onload=function(){

    // Select
    const openModal = document.querySelector(' .hero__cta');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal__close');
   
    
    // Validation
    if(openModal){
        const name = document.querySelector('.name').textContent;
        const modal__title = document.querySelector('.modal__title');
        modal__title.textContent = name;
        openModal.addEventListener('click', (e)=>{
            e.preventDefault();
            modal.classList.add('modal--show');
        });
    }
    
    if(closeModal){
        closeModal.addEventListener('click', (e)=>{
            e.preventDefault();
            modal.classList.remove('modal--show');
        });
    }

    
  }


