
let sliderIndex = 1

imageSlider(sliderIndex)

const plusSlide  = (n) => {
    imageSlider(sliderIndex += n)
    console.log(sliderIndex)
}

const currentSlide = (n) => {
    imageSlider(sliderIndex = n)
    console.log(sliderIndex)
}

setInterval(() => {
    let index =  sliderIndex += 1

    imageSlider(index)
}, 6000);




function imageSlider(n){

    let i;
    let slides = document.querySelectorAll('.mySlides')

    let dot = document.querySelectorAll('.dot')
    // console.log(dot)

    if(n > slides.length){
        sliderIndex = 1
    }

    if(n < 1) {
        sliderIndex = slides.length
    }

    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.display = 'none'
    }


    for (i = 0; i < dot.length; i++) {
       dot[i].className =  dot[i].className.replace(' active' , '')
    }


    slides[sliderIndex - 1].style.display = 'block';
    dot[sliderIndex - 1].className += ' active'

}