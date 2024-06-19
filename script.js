var swiper = new Swiper(" .mySwiper-1", {
    slidesParView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: "swiper-buton-prev",

    }

});

var swiper = new Swiper(" .mySwiper-2", {
    slidesParView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: "swiper-buton-prev",

    },

    breakpoints: {
        0:{
            slidesParView:1,

        },
        520:{
            slidesParView:2,

        },
        950:{
            slidesParView:3,

        }
    }

});

let tabInput = document.querySelectorAll(".tabInput");

tabInput.forEach(function(input) {
    input.addEventListener(' change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper ' +id) ;
        thisSwiper.swiper.update();
    })
});


