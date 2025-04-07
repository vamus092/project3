function homepageAnimation(){
    gsap.set(".slid",{scale:5 } )

var tl=gsap.timeline({
    scrollTrigger: {
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        markers:true,
        scrub: 2
    }

})

tl
.to(".vdodiv", {
'--clip':"0%",
ease:  Power2,
} ,'a' )

.to(".slid",{
    scale:0.7, 
    ease: Power2
} ,'a' )

.to(".rgt",{
   xPercent:5,
   stagger: .03,
    ease: Power4
} ,'b' )
.to(".lft",{
    xPercent:-5,
   stagger: .03,
    ease: Power4
} ,'b' )
}

gsap.to(".slide",{

    scrollTrigger:{
        trigger:".real",
        start: "top top",
        end:" bottom bottom",
        markers:true,
        scrub:2
    },
    xPercent:-200,
    ease:Power4
})

homepageAnimation();