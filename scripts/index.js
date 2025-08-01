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
    slidesPerView:2,
    spaceBetween:10,
    autoplay:{delay:3000},
    speed:700,
    loop:true,
})
const widthSwiper = new Swiper('.design_width_bnr_swiper',{
    slidesPerView:2,
    spaceBetween:20,
    autoplay:{delay:0},
    speed:4000,
    loop:true,
})
const detailsSwiper = new Swiper('.design_details_swiper',{
    direction:'vertical',
    autoplay:{delay:3000},
    loop:true,
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
//bg
const popupBg = document.querySelector('.popup_bg');
const popupImg = document.querySelector('.popup_bg img');
const bnrDesign = document.querySelectorAll('.design_bnr_swiper .swiper-slide');
const widthBnr = document.querySelectorAll('.design_width_bnr_swiper .swiper-slide');
const detailDesign = document.querySelectorAll('.design_details_swiper .swiper-slide');
for(let i = 0 ; i < 5 ; i++){
    const popupFunc = (ind)=>{
        bnrDesign[ind].addEventListener('click', ()=>{
            popupBg.style.display = 'block';
            popupImg.src = bnrDesign[ind].children[0].src;
            pageSlide.mousewheel.disable()
        })
    }
    popupFunc(i);
}
for(let i = 0 ; i < 4 ; i++){
    const popupFunc = (ind)=>{
        widthBnr[ind].addEventListener('click', ()=>{
            popupBg.style.display = 'block';
            popupImg.src = widthBnr[ind].children[0].src;
            pageSlide.mousewheel.disable()
        })
    }
    popupFunc(i);
}
for(let i = 0 ; i < 2 ; i++){
    const popupFunc = (ind)=>{
        detailDesign[ind].addEventListener('click', ()=>{
            popupBg.style.display = 'block';
            popupImg.src = detailDesign[ind].children[0].src;
            pageSlide.mousewheel.disable()
        })
    }
    popupFunc(i);
}
popupBg.addEventListener('click', ()=>{
    popupBg.style.display = 'none';
    pageSlide.mousewheel.enable()
})