let t1 = gsap.timeline({ repeat: 0 });
t1.fromTo(
  ".image1",
  { opacity: 0, scale: 0.2 },
  { opacity: 1, scale: 1.05, duration: 1.2, ease: "power2.out" }
)
  .to(".image1", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image2",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1.1, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image2", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image3",
    { opacity: 0, scale: 0.7 },
    { opacity: 1, scale: 1.15, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image3", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image4",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1.19, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image4", { opacity: 0, duration: 0.7, ease: "power2.in" });

let t2 = gsap.timeline({ repeat: 0, paused: true });
t2.fromTo(
  ".image5",
  { opacity: 0, scale: 0.2 },
  { opacity: 1, scale: 1.05, duration: 1.2, ease: "power2.out" }
)
  .to(".image5", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image6",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1.1, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image6", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image7",
    { opacity: 0, scale: 0.7 },
    { opacity: 1, scale: 1.15, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image7", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image8",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1.19, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image8", { opacity: 0, duration: 0.7, ease: "power2.in" });

let t3 = gsap.timeline({ repeat: 0, paused: true });
t3.fromTo(
  ".image9",
  { opacity: 0, scale: 0.2 },
  { opacity: 1, scale: 1.05, duration: 1.2, ease: "power2.out" }
)
  .to(".image9", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image10",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1.1, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image10", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image11",
    { opacity: 0, scale: 0.7 },
    { opacity: 1, scale: 1.15, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image11", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image12",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1.19, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image12", { opacity: 0, duration: 0.7, ease: "power2.in" });

let t4 = gsap.timeline({ repeat: 0, paused: true });
t4.fromTo(
  ".image13",
  { opacity: 0, scale: 0.2 },
  { opacity: 1, scale: 1.05, duration: 1.2, ease: "power2.out" }
)
  .to(".image13", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image14",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1.1, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image14", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image15",
    { opacity: 0, scale: 0.7 },
    { opacity: 1, scale: 1.15, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image15", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
  .fromTo(
    ".image16",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1.19, duration: 1.2, ease: "power2.out" },
    "-=0.6"
  )
  .to(".image16", { opacity: 0, duration: 0.7, ease: "power2.in" });

// New logo timeline (t5)
let t5 = gsap.timeline({ paused: true });
t5.fromTo(
  ".logo",
  { opacity: 1, y: 0 },
  {
    opacity: 1,
    y: -250,
    x: -120,
    duration: 1.5,
    height: "300px",
    width: "300px",
    ease: "power3.out",
  }
);

t1.eventCallback("onComplete", () => t2.play());
t2.eventCallback("onComplete", () => t3.play());
t3.eventCallback("onComplete", () => t4.play());
t4.eventCallback("onComplete", () => t5.play());
