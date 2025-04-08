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
        // transform: "translateX(-240%)",
        scrollTrigger:{
            trigger:".real",
            start: "top 0",
            end:"bottom -100%",
            scrub:2,
            markers:true,
            pin:true
        },
        xPercent:-310,
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

function para(){
    
var clutter="";
document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e){
    if(e === " ") clutter+=  `<span> &nbsp;</span>`
clutter+= `<span> ${e}</span>`
})

document.querySelector(".textpara").innerHTML=clutter;

gsap.set(".textpara span", {opacity:.1})

    gsap.to(".textpara span",{
        scrollTrigger:{
            trigger:".parag",
            start:" top 50%",
            end:"bottom 90%",
            scrub:1,
        },
        opacity:1,
        stagger:.03,
        ease:Power4
    })

}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

    function capsule(){
        gsap.to(".capsule",{
            scrollTrigger:{
                trigger:".capsules",
                start:"top 70%",
                end: "bottom bottom",
                scrub:1
            },
            y:0,
            ease: Power4
        })
    
    }

function theme(){
    document.querySelectorAll(".section")
        .forEach(function(e){
            ScrollTrigger.create({
                trigger:e,
                start: "top 50%",
                end:"bottom 50%",
                onEnter: function(){
                    document.body.setAttribute("theme",e.dataset.color);
                },
                onEnterBack:function(){
                    document.body.setAttribute("theme",e.dataset.color);
                }
            })
        })
}


theme();
homepageAnimation();
realhscroll();
teamanimate();
para();
loco();
capsule();