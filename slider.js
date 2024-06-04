let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slider-images img');
    slideIndex += n;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    const newTransform = -slideIndex * 100;
    document.querySelector('.slider-images').style.transform = `translateX(${newTransform}%)`;
}
