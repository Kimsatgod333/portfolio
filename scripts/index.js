const pageSlide = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
    keyboard: {
        enabled: true,
    },
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
    },
    loop:true,
    keyboard: {
        enabled: true,
    },
})
const bnrSwiper = new Swiper('.design_bnr_swiper',{
    slidesPerView:3,
    spaceBetween:40,
})
const widthSwiper = new Swiper('.design_width_bnr_swiper',{

})
const detailsSwiper = new Swiper('.design_details_swiper',{
    direction:'vertical'
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