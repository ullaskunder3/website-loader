window.addEventListener('load', ()=>{
    const loader = document.querySelector('.loader');

    // loader.classList.add('hidden')

    setInterval(()=>{
        loader.className += ' hidden'; 
    }, 800)
})