const pageSlide = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
})
const projectSwiper = new Swiper('.project_swiper',{
    navigation:{
        prevEl:'.project_swiper .swiper-button-prev',
        nextEl:'.project_swiper .swiper-button-next',
    },
    centeredSlides: true,
    scrollbar:{
        el:'.project_swiper .swiper-scrollbar'
    }
})
const designSwiper = new Swiper('.design_swiper',{
    navigation:{
        prevEl:'.design_swiper .swiper-button-prev',
        nextEl:'.design_swiper .swiper-button-next',
    },
    scrollbar:{
        el:'.design_swiper .swiper-scrollbar'
    }
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