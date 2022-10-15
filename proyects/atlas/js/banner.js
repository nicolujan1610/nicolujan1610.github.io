window.addEventListener('load', function(){
    new Glider(document.querySelector('.banner__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        dots: '.banner__indicadores',
        arrows: {
            prev: '.banner__anterior',
            next: '.banner__siguiente'
        }
    });
});