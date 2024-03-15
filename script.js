document.addEventListener('DOMContentLoaded',  function() {
    const body = document.body;
    const navText = document.querySelector('.navigation');

    window.addEventListener('scroll', function() {
        const scrollHeight = window.scrollY;
        if (scrollHeight > 100) {
            body.classList.add('fundo2');
            navText.style.backgroundColor = "#131313";
        } else {
            navText.style.backgroundColor = "transparent";
            body.classList.remove('fundo2');
        }
    })
})
