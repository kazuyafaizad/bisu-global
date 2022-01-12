document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  if (document.querySelector(".gs_reveal")) {
    gsap.set(".gs_reveal", { y: 100 });

    gsap.utils.toArray(".gs_reveal_fromLeft").forEach(function (elem) {
      gsap.set(elem, { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: elem,
        toggleClass: "active",
        start: "top bottom",
        onEnter: function () {
          animateLeft(elem);
        },
        onEnterBack: function () {
          animateRight(elem);
        },
        onLeave: (elem) => gsap.set(elem, { autoAlpha: 0 }),
      });
    });

    gsap.utils.toArray(".gs_reveal_fromRight").forEach(function (elem) {
      gsap.set(elem, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: elem,
        toggleClass: "active",
        start: "top bottom",
        onEnter: function () {
          animateRight(elem);
        },
        onEnterBack: function () {
          animateLeft(elem);
        },
        onLeave: (elem) => gsap.set(elem, { autoAlpha: 0 }),
      });
    });

    ScrollTrigger.batch(".gs_reveal", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
          duration: 1.25,
        }),
      onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
          duration: 1.25,
        }),
      // onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
  }

  //creating parralax effect
  let section = document.querySelector(".hero .bg");

  if (section) {
    gsap.to(section, {
      scrollTrigger: section, // start the animation when ".box" enters the viewport (once)
      scale: 1.2,
      duration: 15,
      yoyo: true,
      repeat: -1,
    });
  }
});

let animateLeft = function (elem) {
  gsap.set(elem, { x: -100, y: 0, autoAlpha: 0 });

  gsap.to(elem, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "Sine.ease-in",
    overwrite: "auto",
  });
};
let animateRight = function (elem) {
  gsap.set(elem, { x: 100, y: 0, autoAlpha: 0 });

  gsap.to(elem, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "Sine.ease-in",
    overwrite: "auto",
  });
};

let hide = function (elem) {
  gsap.set(elem, { autoAlpha: 0 });
};
