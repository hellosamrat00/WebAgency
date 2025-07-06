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
    ease:Power4,
    duration:0.5
})

tl.to("#loader",{
    display:NamedNodeMap,
})