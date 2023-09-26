gsap.to("#navigation", {
  backgroundColor: "#f9173f",
  duration: 0.5,
  height: "65px",
  scrollTrigger: {
    trigger: "#navigation",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
