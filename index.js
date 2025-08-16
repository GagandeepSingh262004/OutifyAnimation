document.addEventListener("DOMContentLoaded", () => {
  let t1 = gsap.timeline({ repeat: 0 });
  t1.fromTo(
    ".image1",
    { opacity: 0, scale: 0 },
    {
      opacity: 0.5,
      filter: "blur(2px)",
      scale: 1.17,
      duration: 1.2,
      ease: "power2.out",
    }
  )
    // .to(".image1", { opacity: 0, duration: 1, ease: "power2.in" }, "-=0.6")
    .fromTo(
      ".image2",
      { opacity: 0, scale: 0 },
      {
        opacity: 0.7,
        filter: "blur(2px)",
        scale: 1.17,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.6"
    )
    // .to(".image2", { opacity: 0, duration: 0.8, ease: "power2.in" }, "-=0.6")
    .fromTo(
      ".image3",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1.05, duration: 1.2, ease: "power2.out" },
      "-=0.6"
    )
    .to(".image1", { opacity: 0, duration: 1, ease: "power2.in" }, "-=0.6")
    .to(".image2", { opacity: 0, duration: 0.8, ease: "power2.in" }, "-=0.6")

    .to(".image3", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6");
  // .fromTo(
  //   ".image4",
  //   { opacity: 0, scale: 0.9 },
  //   { opacity: 1, scale: 1.19, duration: 1.2, ease: "power2.out" },
  //   "-=0.6"
  // )
  // .to(".image4", { opacity: 0, duration: 0.7, ease: "power2.in" });

  let t2 = gsap.timeline({ repeat: 0, paused: true });
  t2.fromTo(
    ".image5",
    { opacity: 0, scale: 0 },
    {
      opacity: 0.5,
      filter: "blur(2px)",
      scale: 1.17,
      duration: 1.2,
      ease: "power2.out",
    }
  )
    .fromTo(
      ".image6",
      { opacity: 0, scale: 0 },
      {
        opacity: 0.7,
        filter: "blur(2px)",
        scale: 1.17,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .fromTo(
      ".image7",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1.05, duration: 1.2, ease: "power2.out" },
      "-=0.6"
    )
    .to(".image5", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
    .to(".image6", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
    .to(".image7", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6");
  // .fromTo(
  //   ".image8",
  //   { opacity: 0, scale: 0.9 },
  //   { opacity: 1, scale: 1.19, duration: 1.2, ease: "power2.out" },
  //   "-=0.6"
  // )
  // .to(".image8", { opacity: 0, duration: 0.7, ease: "power2.in" });

  let t3 = gsap.timeline({ repeat: 0, paused: true });
  t3.fromTo(
    ".image9",
    { opacity: 0, scale: 0 },
    {
      opacity: 0.5,
      filter: "blur(2px)",
      scale: 1.17,
      duration: 1.2,
      ease: "power2.out",
    }
  )

    .fromTo(
      ".image10",
      { opacity: 0, scale: 0 },
      {
        opacity: 0.7,
        filter: "blur(2px)",
        scale: 1.17,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.6"
    )

    .fromTo(
      ".image11",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1.05, duration: 1.2, ease: "power2.out" },
      "-=0.6"
    )
    .to(".image9", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
    .to(".image10", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
    .to(".image11", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6");
  // .fromTo(
  //   ".image12",
  //   { opacity: 0, scale: 0.9 },
  //   { opacity: 1, scale: 1.19, duration: 1.2, ease: "power2.out" },
  //   "-=0.6"
  // )
  // .to(".image12", { opacity: 0, duration: 0.7, ease: "power2.in" });

  let t4 = gsap.timeline({ repeat: 0, paused: true });
  t4.fromTo(
    ".image13",
    { opacity: 0, scale: 0 },
    {
      opacity: 0.5,
      filter: "blur(2px)",
      scale: 1.17,
      duration: 1.2,
      ease: "power2.out",
    }
  )

    .fromTo(
      ".image14",
      { opacity: 0, scale: 0 },
      {
        opacity: 0.7,
        filter: "blur(2px)",
        scale: 1.17,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .fromTo(
      ".image15",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1.05,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .to(".image13", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
    .to(".image14", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6")
    .to(".image15", { opacity: 0, duration: 0.7, ease: "power2.in" }, "-=0.6");
  // .fromTo(
  //   ".image16",
  //   { opacity: 0, scale: 0.9 },
  //   { opacity: 1, scale: 1.19, duration: 1.2, ease: "power2.out" },
  //   "-=0.6"
  // )
  // .to(".image16", { opacity: 0, duration: 0.7, ease: "power2.in" });

  let t5 = gsap.timeline({ paused: true });
  t5.fromTo(
    ".logo",
    { opacity: 1, y: 0 },
    {
      opacity: 1,
      scale: 1.5,
      y: -200,
      x: -120,
      duration: 1.8,
      ease: "elastic.out(1, 0.5)",
    }
  );

  t1.eventCallback("onComplete", () => t2.play());
  t2.eventCallback("onComplete", () => t3.play());
  t3.eventCallback("onComplete", () => t4.play());
  t4.eventCallback("onComplete", () => t5.play());
});
