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

gsap.to("#allBookHomePage", {
  backgroundColor: "rgb(249, 23, 63)",
  scrollTrigger: {
    trigger: "#allBookHomePage",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 10%%",
    scrub: 1,
  },
});
