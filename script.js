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

function realhscroll(){
    gsap.to(".slide",{

        scrollTrigger:{
            trigger:".real",
            start: "top 0",
            end:"top -100%",
            scrub:2,
            pin:true
        },
        xPercent:-200,
        ease:Power4
    })
}

function teamanimate(){
    document.querySelectorAll(".listelem")
    .forEach(function(el){
        el.addEventListener("mousemove",function(dets){
            
            gsap.to(this.querySelector(".pic"),{
                opacity:1, 
                x: gsap.utils.mapRange(0,window.innerWidth,-200, 200, dets.clientX),
                ease:Power4, 
                duration:.5
            })
        })
        el.addEventListener("mouseleave",function(dets){
            gsap.to(this.querySelector(".pic"),{
                opacity:0, 
                ease:Power4, 
                duration:.5

        })
    })
})
}



homepageAnimation();
realhscroll();
teamanimate();