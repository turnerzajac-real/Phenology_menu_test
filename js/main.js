gsap.registerPlugin(Flip);


var button = document.querySelector('.hamburger');
var logo = document.querySelector('.logo');
var openingNav = gsap.timeline();
var imageLoadIn = gsap.timeline();

button.addEventListener("click", function(){

    logo.classList.toggle("fixed");

        if (logo.classList.contains("fixed")) { 

            openingNav
            .to('.hamburger', .02, {backgroundColor:"#ffffff"})
            .to('.inner-cont', 1,  {css:{ "width": "100%"}, ease: "power4.out" })
            .to('.logo', 1, { left: "25%", ease: "power4.out"}, "-=1")
            .fromTo('.img', .8, {opacity: 0, scaleX: 1.2, scaleY: 1.2}, {opacity: 1, scaleX: 1, scaleY: 1}, "-=0.6")
            
        } else {
            openingNav
            .to('.hamburger', .02, {backgroundColor:"#000"})
            .to('.inner-cont', 1.5,  {css:{ "width": "0%"}, ease: "power4.out" }) 

        }
    
})