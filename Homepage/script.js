let slideButtons = document.querySelectorAll('.slide-button');
let slidesSecond = document.querySelectorAll('.slider .slides-second');




function removeActiveClass(){
    slideButtons.forEach((button)=> {
        button.classList.remove('active');
    });

    slides.forEach(slide => {
        slidesSecond.classList.remove('active');
    });
}


slideButtons.forEach((button) =>{
    button.addEventListener("click", () => {
        removeActiveClass();
        button.classList.add('active');

let slideNumber = button.getAttribute('data-slide');
slidesSecond[2].classList.add('active');
    });
});

 
