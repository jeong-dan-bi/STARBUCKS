//돋보기 버튼 제어
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//포커스가 들어가게
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
})

//포거스가 들어가면 .focused 추가
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//포거스가 나가면 .focused 삭제
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// -------뱃지광고 영역 (스크롤 시 사라지기)-------
// lodash설치 후에는 _.throttle(함수,시간)
const badgesEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', 
    _.throttle(function(){
        if(window.scrollY > 500){
            // badgesEl.style.display = 'none';
            //gsap문법 => gsap.to(요소,지속시간초단위,옵션)
            gsap.to(badgesEl,0.6,{
                opacity : 0,
                display : 'none'
            });
            // 상단으로 스크롤 보이기!!
            gsap.to(toTopEl, 0.2, {
                x:0,
            });
        }else{
            // badgesEl.style.display = 'block';
            gsap.to(badgesEl,0.6,{
                opacity : 1,
                display : 'block'
            });
            // 상단으로 스크롤 숨기기!!
            gsap.to(toTopEl, 0.2, {
                x:100,
            });
        }
    },300)
);
toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

// -------SLIDE속 이미지 순서대로 나타나기-------
const fadeEl = document.querySelectorAll('.visual .fade-in');
fadeEl.forEach(function(fadeEl, index){
    gsap.to(fadeEl,1,{
        delay : (index + 1) * 0.7,
        opacity : 1,
    })
});


// -------공지사항 swiper-slide-------
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    loop: true,
    autoplay : true
});

//   -------프로모션 swiper-slide-------
   new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 5000
    },
    pagination : {
        el : ".promotion .swiper-pagination",
        clickable : true
    },
    navigation : {
        prevEl : ".promotion .swiper-prev",
        nextEl : ".promotion .swiper-next"
    },
    slidesPerView : 3,  //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백

    centeredSlides : true //1번 슬라이드가 가운데로 보이기
  });


//promotion toggle-btn--------
const promotionEl = document.querySelector('.promotion'); //슬라이드 영역 요소 검색
const promotionToggleBtn = document.querySelector('.toggle-promotion'); //슬라이드영역을 토글할 버튼 검색

//슬라이드 영역 숨김 여부에 관한 기본값 설정
let isHidePromotion = false;

//토글버튼을 클릭하면 
promotionToggleBtn.addEventListener('click',function(){
    //슬라이드 영역 숨기 여부를 반대값
    isHidePromotion = !isHidePromotion;

    if(isHidePromotion){
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});

//   -------floating 이미지-------
function random(min, max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject (selector, delay, size){
    gsap.to(selector, random(1.5, 2.5),{
        y : size,
        repeat : -1, //문한반복
        yoyo : true, //한번 재생된 애니메이션을 다시 뒤로 재생
        ease : Power1.easeOut,
        delay : random(0, delay),
    })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 15);


//-------AWARDS-------
new Swiper('.awards .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : true,
    slidesPerView : 5,
    spaceBetween : 30,
    navigation : {
        prevEl : ".awards .swiper-prev",
        nextEl : ".awards .swiper-next"
    },
});

//-------copyright 올해년도 구하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

//-------Scroll
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })    
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});