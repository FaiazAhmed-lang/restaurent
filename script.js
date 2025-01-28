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
    width:"115%",
    duration:3
},"mama")


var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger: ".page1",
      scroller:".main",
      start:"top 85%",
      end:"top 60%",
      scrub:2,
      }
});
tl2.to(".slide-bar h3",{
  color:"white"
})
tl2.to( ".main", {
  backgroundColor: "black", 
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
      start:"top 85%",
      end:"top 60%",
      
      }
});
tl3.from(".page1 .taste",{
  opacity:0,
  duration: 1,
  top:20
})
var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger: ".page2",
      scroller:".main",
      start:"top 85%",
      end:"top 60%",
  scrub:2,

      
      }
});
tl4.to(".main",{
  backgroundColor:"white",
  duration:1,
})
tl4.to(".text p",{
  color:"black",
  duration:1,
});
var call = document.querySelector(".order-call")
var order = document.querySelector("#one button");
var order1 = document.querySelector("#two button");
var order2 = document.querySelector("#three button");
var cross = document.querySelector("#fir i");


// Function to disable scrolling
var body = document.querySelector("body")
const disableScroll = () => {
  body.style.overflow = 'hidden';
};

// Function to enable scrolling
const enableScroll = () => {
  body.style.overflow = '';
};
order.addEventListener("click",function(){
    call.style.display="flex";
    disableScroll();
});
order1.addEventListener("click",function(){
  call.style.display="flex";
  disableScroll();
});
order2.addEventListener("click",function(){
  call.style.display="flex";
  disableScroll();
})
cross.addEventListener("click",function(){
  call.style.display="none"
   enableScroll();
})

var menu = document.querySelector(".main i");
var cancle =document.querySelector(".can i");
menu.addEventListener("click",function(){
  gsap.from(".con h3", {
    stagger:1, 
    opacity: 0, 
    x: 100,      
    duration: 0.3,
  })
  
  gsap.to(".slide-bar",{
      right:0,
      duration:1,
  })
})
cancle.addEventListener("click",function(){
  gsap.to(".slide-bar",{
    right:-300,
    duration:1,
})
  
})
