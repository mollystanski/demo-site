const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
const slideWrappers = document.querySelectorAll(".slideWrapper");


document.addEventListener("DOMContentLoaded", initializeSlider);


function initializeSlider(){
    if(slides.length>0){
    slides[slideIndex].classList.add("displaySlide");
    }
    if (slideWrappers.length > 0) {
        slideWrappers[slideIndex].classList.add("displaySlide");
    }
}




function showSlide(index){

    // if we reach end of slides 
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0 ){
        slideIndex = slides.length - 1;

    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");


    slideWrappers.forEach(wrapper => {
        wrapper.classList.remove("displaySlide");
    });

    slideWrappers[slideIndex].classList.add("displaySlide");
    
}





function prevSlide(){

    slideIndex--;
    showSlide(slideIndex);
}


function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}