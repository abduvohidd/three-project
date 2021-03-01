document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
})

document.querySelector('.li').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('change')
})




var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.slider-arrow-next',
        prevEl: '.slider-arrow-prev',
    },
});