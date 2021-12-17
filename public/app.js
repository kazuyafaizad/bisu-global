function animateLeft(elem) {
  gsap.set(elem, { x: -100, y: 0, autoAlpha: 0 });

  gsap.to(elem, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto",
  });
}
function animateRight(elem) {
  gsap.set(elem, { x: 100, y: 0, autoAlpha: 0 });

  gsap.to(elem, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto",
  });
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  ScrollTrigger.defaults({ scroller: "body" });
  gsap.registerPlugin(ScrollTrigger);
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
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
    onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
  });

  //creating parralax effect
  let section = document.querySelector(".hero");

  if (section) {
    // section.bg = section.querySelector(".bg");
    // var verticalPosition = document.body.scrollTop + window.innerHeight / 2 - $(section.bg).height();
    // scrollTop = $(window).scrollTop();
    // section.bg.style.backgroundPosition = `50% 50%`;
    // gsap.to(section.bg, {
    //   backgroundPosition: `50% ${-scrollTop * 0.8}%`,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: section,
    //     start: "top top",
    //     end: "bottom top"
    //   },
    // });
  }
  let supportPageOffset = window.pageXOffset !== undefined;
  let isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

  let scrollLeft = supportPageOffset
    ? window.pageXOffset
    : isCSS1Compat
    ? document.documentElement.scrollLeft
    : document.body.scrollLeft;
  let scrollTop = supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop;

  let scrolldiv = document.createElement("div");
  scrolldiv.classList.add("scrolldown");
  scrolldiv.innerHTML = "SCROLL";
  document.querySelector("main").prepend(scrolldiv);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      gsap.to(".scrolldown", { autoAlpha: 0 });
    } else {
      gsap.to(".scrolldown", { autoAlpha: 1 });
    }
  });
});
