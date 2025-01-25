function ab(){
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
}

ab();


let cur = document.querySelector(".cursor");

document.addEventListener("mousemove",function(dets){
    gsap.to(cur,{
        x:dets.x+ 20+"px",
        y:dets.y +20+  "px",
        ease : ""
    })
})

var logo = document.querySelector(".nav img");


gsap.from(logo, {         
  right: 80,        
  duration: 1.3, 
  opacity:0  
});
gsap.from(".menu h3 a", {
  top: 50,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});

var tl = gsap.timeline({
  scrollTrigger:{
      trigger:".page h1",
      scroller:".main",
      start:"top 20%",
      end:"top 0%",
      scrub:2,
      }
});
tl.from(".page h1",{
  x:-100,
  duration:2,

},"mama");
tl.from(".page h2",{
  x:120,
  duration:2,

},"mama");



var video = document.querySelector(".page video");

tl.to(video,{
    width:"90%",
    duration:3
},"mama")


var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger: video,
      scroller:".main",
      start:"top 85%",
      end:"top 60%",
      scrub:2,
      }
});

tl2.to( "*", {
  backgroundColor: "black", // Add quotes around 'black'
  duration: 1, // Add a duration for the animation
});
tl2.to(cur,{
  backgroundColor: "white",

})
// var taste = document.querySelector(".pageh1")
var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger: ".taste",
      scroller:".main",
      markers:true,
      start:"top 85%",
      end:"top 60%",
      
      }
});
tl3.from(".page1 .taste",{
  opacity:0,
  duration: 1,
  top:20
})