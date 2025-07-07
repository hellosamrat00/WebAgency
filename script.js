function loaderAnimation(){
    var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.2,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#line-part1, .line h2", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line-part1 h5");
    var grow = 0;
    var countInterval=setInterval(() => {
      if (grow < 100) {
        grow++;
        h5timer.textContent = grow;
      } else {
        grow = 100;
        clearInterval(countInterval);
        h5timer.textContent = grow;
      }
    }, 20);
  },
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 3,
});

tl.from("#page1",{
    y:1200,
    opacity:0,
    delay:0.2,
    duration:0.5
})
tl.from("#hero1 h1, #hero2 h1, #hero3 ,#hero4 h1", {
  y: 100,        
  opacity: 0,     
  stagger: 0.2,   
  duration: 0.8,  
  ease: "power4.out"  
});


tl.to("#loader",{
    display:'none',
})


}

function cusrsorAnimation(){
    document.addEventListener("mousemove", (dets) => {
    gsap.to("#crsr1", {
      left: dets.x,
      top: dets.y,
      ease: "power2.out"
    });
  });

  Shery.makeMagnet("#nav2 h1" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
}

// loaderAnimation()

cusrsorAnimation()