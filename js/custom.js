$('.banner-area').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1

        },
        1000:{
            items:2
        }

        ,
        1500:{
            items:3
        }
    }
})