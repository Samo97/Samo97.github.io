'use strict';





window.onload = function () {
    var scrolled;
    var timer;
    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    };
    function scrollToTop() {
        if (scrolled > 0){
            window.scrollTo(0,scrolled);
            scrolled = scrolled - 200; // 100 Скорость прокрутки
            timer = setTimeout(scrollToTop,70);
        }
        else{
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
};