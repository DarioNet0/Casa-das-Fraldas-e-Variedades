const slider = document.querySelector('.slider');

function slideImages() {
    slider.style.transition = 'transform 1s ease-in-out';
    slider.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        slider.appendChild(slider.firstElementChild);
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
    }, 1000);
}

setInterval(slideImages, 3000);