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

function showBarF() {
    const barraF = document.querySelector('.barraF');
    barraF.classList.add('activeF');
}
function hideBarF() {
    const barraF = document.querySelector('.barraF');
    barraF.classList.remove('activeF');
}

function showBarM() {
    const barraM = document.querySelector('.barraM');
    barraM.classList.add('activeM');
}
function hideBarM() {
    const barraM = document.querySelector('.barraM');
    barraM.classList.remove('activeM');
}

function showBarK() {
    const barraK = document.querySelector('.barraK');
    barraK.classList.add('activeK');
}
function hideBarK() {
    const barraK = document.querySelector('.barraK');
    barraK.classList.remove('activeK');
}
  
  