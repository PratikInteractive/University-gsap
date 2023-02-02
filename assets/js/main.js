// var navLinks=document.getElementById("navLinks");

// function showMenu(){
//     navLinks.style.right = "0";
 
// }

// function hideMenu(){
//     navLinks.style.right = "-200px";
// }


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    effects: true
})


var mySplitText = new SplitText("#quote" , { type:"words,chars"})

TweenLite.set("#quote" , {perspective:400});
TweenMax.staggerFrom(mySplitText.chars, 0.5 , {opacity:0, scale:0, rotationX:-180, y:80, transformOrigin:"0% 50% -50%" , ease:Back.easeOut } , 0.01 , allDone);

function allDone(){
    mySplitText.revert();
}


// TweenMax



// // Scroll Magic
// TweenLite.defaultEase = Linear.easeNone;
// var controller = new ScrollMagic.Controller();
// var tl = new TimelineMax();
// // tl.staggerFrom(".course-col", 1, {
// //   scale: 0,
// //   cycle: {
// //     y: [-50, 50]
// //   }
// // });

// tl.from(".course-col1", { x : -60 });
//   tl.to(".course-col1", { x : 0 , ease: Back. easeOut.config( 1.7) });

//   tl.from(".course-col2", { x : -40 });
//   tl.to(".course-col2", { x : 0 , ease: Back. easeOut.config( 1.7) });

//   tl.from(".course-col3", { x : -20 });
//   tl.to(".course-col3", { x : 0 , ease: Back. easeOut.config( 1.7) });

// var scene = new ScrollMagic.Scene({
//   triggerElement: "#stage",
//   duration: "50%",
//   triggerHook: 0.25
// })
//   .addIndicators({
//     name: "Box Timeline",
//     colorTrigger: "white",
//     colorStart: "white",
//     colorEnd: "white"
//   })
//   .setTween(tl)
//   .addTo(controller);


// //   2nd Scene
// var tl2 = new TimelineMax();
//   tl2.from(".campus-col1", { y : -10 });
//   tl2.to(".campus-col1", { y : 0 , ease: Back. easeOut.config( 1.7) });

//   tl2.from(".campus-col2", { y : -20 });
//   tl2.to(".campus-col2", { y : 0 , ease: Back. easeOut.config( 1.7) });

//   tl2.from(".campus-col3", { y : -30 });
//   tl2.to(".campus-col3", { y : 0 , ease: Back. easeOut.config( 1.7) });

//   var scene = new ScrollMagic.Scene({
//     triggerElement: "#stage2",
//     duration: "50%",
//     triggerHook: 0.25
//   })  .addIndicators({
//     name: "Box Timeline",
//     colorTrigger: "black",
//     colorStart: "black",
//     colorEnd: "black"
//   })
//   .setTween(tl2)
//   .addTo(controller);

// Header
gsap.to("header", {
  backgroundPosition: `10% ${-innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".header",
    scrub: true
  }, 
});

// ScrollTrigger - working start
// gsap.from(".course-col1", {
//   scale: 0.2 , 
//   duration : 1 ,
//   opacity: 0.2 ,
//   x: -20,
// })
// gsap.from(".course-col2", {
//   scale: 0.2 , 
//   duration : 1, 
//   opacity: 0.2,
//   x: -20,
// })
// gsap.from(".course-col3", {
//   scale: 0.2 , 
//   duration : 1 ,
//   opacity: 0.2,
//   x: -20,
// })
// gsap.to(".course-col1", {
//   scrollTrigger: {
//     trigger: ".course-col1", // start the animation when ".box" enters the viewport (once)
//     toggleActions:"restart pause reverse pause"
//   },
//   ease: Back. easeOut.config( 1.7),
//   scale: 1,
//   x: 10,
//   duration: 1,
//   opacity: 1
// });

// gsap.to(".course-col2", {
//   scrollTrigger: {
//     trigger: ".course-col2", // start the animation when ".box" enters the viewport (once)
//     toggleActions:"restart pause reverse pause"
//   },
//   ease: Back. easeOut.config( 1.7),
//   scale: 1,
//   x: 20,
//   duration: 2,
//   opacity: 1
// });

// gsap.to(".course-col3", {
//   scrollTrigger: {
//     trigger: ".course-col3", // start the animation when ".box" enters the viewport (once)
//     toggleActions:"restart pause reverse pause"
//   },
//   ease: Back. easeOut.config( 1.7),
//   scale: 1,
//   x: 30,
//   duration: 3,
//   opacity: 1
// });



// ScrollTrigger - working end

// timeline start for campus
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".campus-col", // start the animation when ".box" enters the viewport (once)
      toggleActions:"restart none none reset"
    }})
.fromTo(".campus-col1", {x: -100} , {duration: .5 , x: 0})
.fromTo(".campus-col2", {y: -50} , {duration: .5 , y: 0})
.fromTo(".campus-col3", {x: 100} , {duration: .5 , x: 0})
.fromTo(".course-col-head", {y: -30 , opacity: 0 , scale: 0} , { scale: 1, duration: .5 , y: 0, opacity: 1 })
.fromTo(".course-col-para", {y: 30 , opacity: 0 , scale: 0} , { scale: 1, duration: .5 , y: 0 , opacity: 1})


gsap.timeline({
  scrollTrigger: {
    trigger: ".course-col", // start the animation when ".box" enters the viewport (once)
    toggleActions:"restart none none reset"
  }})
.fromTo(".course-col1", {x: -100} , {duration: 1 , x: 0}) //notice that there's no semicolon!
.fromTo(".course-col2", {y: -50} , {duration: 1 , y: 0})
.fromTo(".course-col3", {x: 100} , {duration: 1 , x: 0})



// Images transition

// gsap.timeline({
//   scrollTrigger: {
//     trigger: ".facilities-col", // start the animation when ".box" enters the viewport (once)
//     toggleActions:"restart none none reset"
//   }})
// .fromTo(".facilities-col-1 img", { x: -30 , width: 0} , {duration: 1 , x: 0 , width: "100%"}) //notice that there's no semicolon!
// .fromTo(".facilities-col-2 img", { css:{ left:"-250px" , top:"-40px"}} , {duration: 0.5  ,delay: 0.5 , css:{  left:"0px" , top: "0"} }) //notice that there's no semicolon!
// .fromTo(".facilities-col-3 img", { css:{ left:"-250px" , bottom: "30px"}} , {duration: 0.5  ,delay: 0.5 , css:{ left:"0px" , bottom: "0"} }) //notice that there's no semicolon!


// 

gsap.timeline({
  scrollTrigger: {
    trigger: ".facilities-col", // start the animation when ".box" enters the viewport (once)
    toggleActions:"restart none none reset"
  }})
.set(".facility-img-1", {transformOrigin:"100% 50%"})
.from(".facility-img-1", 1, {width:"0px",  ease:Power0.easeNone , delay: .5 })
.fromTo(".facility-heading-1", {y: -10, opacity: 0} , {y: 0 , opacity: 1})
.fromTo(".facility-para-1", {y: -10, opacity: 0} , {y: 0 , opacity: 1})
.set(".facility-img-2", {transformOrigin:"100% 50%"})
.from(".facility-img-2", 1, {width:"0px",  ease:Power0.easeNone , delay: .5  })
.fromTo(".facility-heading-2", {y: -10, opacity: 0} , {y: 0 , opacity: 1})
.fromTo(".facility-para-2", {y: -10, opacity: 0} , {y: 0 , opacity: 1})
.set(".facility-img-3", {transformOrigin:"100% 50%"})
.from(".facility-img-3", 1, {width:"0px",  ease:Power0.easeNone , delay: .5  })
.fromTo(".facility-heading-3", {y: -10, opacity: 0} , {y: 0 , opacity: 1})
.fromTo(".facility-para-3", {y: -10, opacity: 0} , {y: 0 , opacity: 1})


// Typewriter effect
var tl = new TimelineMax({
  paused:true
});
// letter animation
tl.fromTo(".anim-typewriter", 8, {
  width: "0",
}, {
  width: "30em", /* same as CSS .line-1 width */
  ease:  SteppedEase.config(37)
}, 0);
// text cursor animation
tl.fromTo(".anim-typewriter", 0.5, {
  "border-right-color": "rgba(255,255,255,0.75)"
}, {
  "border-right-color": "rgba(255,255,255,0)",
  repeat: -1,
  ease:  SteppedEase.config(37)
}, 0);
tl.play();

// star scale

gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial-col", // start the animation when ".box" enters the viewport (once)
    toggleActions:"restart none none reset"
  }})
.fromTo(".fa-star-one", {scale:30 , x:-100 , opacity: 0}, {opacity: 1, x:0 , scale: 1 , duration: 1})
.fromTo(".fa-star-two", {scale:20 , x:-50 , opacity: 0}, {opacity: 1, x:0 , scale: 1 , duration: 1})
.fromTo(".fa-star-three", {scale:10 , x:100 , opacity: 0}, {opacity: 1, x:0 , scale: 1 , duration: 1})
.fromTo(".fa-star-four", {scale:20 , x:60 , opacity: 0}, {opacity: 1, x:0 , scale: 1 , duration: 1})


//new


    // The image starts offset 50% of the vertical height. Remember, the background-attachment is 'fixed', so the offset is from the top of the viewport, not the top of the section.
    let a = document.querySelector(".cta");
    a.style.backgroundPosition = `50% ${innerHeight / 2}px`;  
    gsap.to( a , {
      backgroundPosition: `50% ${-innerHeight / 2}`,
      ease: "none",
      scrollTrigger: {
        trigger: a,
        scrub: true,

      }
    });
  