function animateLeft(elem) {
  var x = -100,
    y = 0;
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";

  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}
function animateRight(elem) {
  var x = 100,
    y = 0;
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";

  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.utils.toArray(".gs_reveal_fromLeft").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      toggleClass: "active",
      onEnter: function () {
        animateLeft(elem);
      },
      onEnterBack: function () {
        animateRight(elem);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });

  gsap.utils.toArray(".gs_reveal_fromRight").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      toggleClass: "active",
      onEnter: function () {
        animateRight(elem);
      },
      onEnterBack: function () {
        animateLeft(elem);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
  gsap.set(".gs_reveal", { y: 100 });
  ScrollTrigger.batch(".gs_reveal", {
    //interval: 0.1, // time window (in seconds) for batching to occur.
    //batchMax: 3,   // maximum batch size (targets)
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: { each: 0.15, grid: [1, 3] }, overwrite: true }),
    onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
    onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    // you can also define things like start, end, etc.
  });
});
