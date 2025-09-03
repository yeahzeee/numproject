// header
    const headerWrap = document.querySelector('.header_wrap');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;

        if (scrollValue > 80) {
            if (scrollValue > lastScroll) {
                headerWrap.classList.add('fix');
                headerWrap.style.top = '0';
            } else {
                headerWrap.style.top = '-80px';
            }
        } else {
            headerWrap.classList.remove('fix');
            headerWrap.style.top = '0';
        }

        lastScroll = scrollValue;
    });

// main
//slide
// 최상단 슬라이드

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider span");
    const pagination = document.querySelectorAll(".pagination li");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlide() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        pagination.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    } 

    //자동슬라이드(3초)
    let autoSlide = setInterval(nextSlide, 3000); 

    //페이지네이션 클릭 이동
    pagination.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            updateSlide();
            resetInterval();
        });
    }); 

    function resetInterval() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000);
    }

    updateSlide();
});

// footer