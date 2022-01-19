window.addEventListener('load', ()=>{
    const loader = document.querySelector('.loader');

    // loader.classList.add('hidden')

    setTimeout(()=>{
        loader.className += ' hidden'; 
    }, 800)
})