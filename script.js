 window.onscroll = function() {
     let section = document.querySelector(".section-7");
     if (section.getBoundingClientRect().top < window.innerHeight) {
         section.classList.add("show");
     }
 }