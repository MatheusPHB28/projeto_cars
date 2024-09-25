var slideshow = document.querySelectorAll('[data-component=slideshow"]');

slideshow.forEach(initslidershow);

function initslidershow (slidershow) {
    var slides =document.querySelectorAll(´#${slideshow.id}[role="list"].slide´);

    var index = 0, time = 5000;
    slides{index}.classList.remove('active');

    setInterval(()=>{
        setInterval[index].classList.remove('active');

    index++;

    if (index === slides.length) index = 0;
    slides[index].classList.add('active');

    }, time);
}
