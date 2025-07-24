const pageSlide = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
})
const projectSwiper = new Swiper('.project_swiper',{
    navigation:{
        prevEl:'.project .slide_btn_wrap .swiper-button-prev',
        nextEl:'.project .slide_btn_wrap .swiper-button-next',
    },
    centeredSlides: true,
    scrollbar:{
        el:'.project_swiper .swiper-scrollbar'
    },
    pagination:{
        el:'.project .slide_btn_wrap .swiper-pagination',
        type:'fraction',
    }
})
const designSwiper = new Swiper('.design_swiper',{
    slidesPerView:4,
    autoplay:{delay:0},
    speed:4000,
})
//네비게이션
const nav = document.querySelectorAll('nav a');
nav.forEach((obj,idx)=>{
    console.log(obj, idx)
    obj.addEventListener('click',(e)=>{
        e.preventDefault();
        pageSlide.slideTo(idx, 1000);
    })
})