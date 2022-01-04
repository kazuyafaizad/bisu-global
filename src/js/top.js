document.addEventListener("DOMContentLoaded", function () {
  gsap.utils.toArray(".link").forEach((link) => {
    let linkInner = link.querySelector(".linkInner");
    gsap.set(linkInner, { y: "25%" });

    let linkHover = gsap.to(link, { opacity: 1, duration: 0.3, paused: true, ease: "power1.inOut" });

    let innerHover = gsap.to(linkInner, { y: 0, duration: 0.3, paused: true, ease: "power1.inOut" });

    link.addEventListener("mouseenter", () => {
      linkHover.play();
      innerHover.play();
    });
    link.addEventListener("mouseleave", () => {
      linkHover.reverse(0);
      innerHover.reverse();
    });

    ScrollTrigger.create({
      trigger: link,
      start: "top bottom",
      end: "top top",
      onEnter: function () {
        linkHover.play();
      },
      onEnterBack: function () {
        linkHover.play();
      },
      onLeave: function () {
        linkHover.reverse(0);
      },
      onLeaveBack: function () {
        linkHover.reverse(0);
      },
    });
  });

  // this scrolling object just allows us to conveniently call scrolling.enable(), scrolling.disable(), and check if scrolling.enabled is true.
  // some browsers (like iOS Safari) handle scrolling on a separate thread and can cause things to get out of sync (jitter/jumpy), so when we're animating the scroll position, force an update of GSAP tweens when there's a scroll event in order to maintain synchronization)
  const scrolling = {
    enabled: true,
    events: "scroll,wheel,touchmove,pointermove".split(","),
    prevent: (e) => e.preventDefault(),
    disable() {
      if (scrolling.enabled) {
        scrolling.enabled = false;
        window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
        scrolling.events.forEach((e, i) =>
          (i ? document : window).addEventListener(e, scrolling.prevent, { passive: false })
        );
      }
    },
    enable() {
      if (!scrolling.enabled) {
        scrolling.enabled = true;
        window.removeEventListener("scroll", gsap.ticker.tick);
        scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
      }
    },
  };

  function goToSection(section, anim, i) {
    if (scrolling.enabled) {
      // skip if a scroll tween is in progress
      scrolling.disable();
      if (window.screen.width <= 769) {
        gsap.to(window, {
          scrollTo: { y: section, offsetY: 65, autoKill: false },
          onComplete: scrolling.enable,
          duration: 1,
        });
      } else {
        gsap.to(window, {
          scrollTo: { y: section, offsetY: 100, autoKill: false },
          onComplete: scrolling.enable,
          duration: 1,
        });
      }

      anim && anim.restart();
    }
  }

  const sections = document.querySelectorAll(".scroll-screen");
  sections.forEach((section, i) => {
    ScrollTrigger.create({
      marker: true,
      trigger: section,
      start: "top bottom-=1",
      end: "bottom top+=1",
      onEnter: () => goToSection(section),
      onEnterBack: () => goToSection(section),
    });
  });

  let sns = document.querySelector(".sns");
  const fb = sns.querySelector(".facebook");
  const ig = sns.querySelector(".instagram");
  const weibo = sns.querySelector(".weibo");

  gsap.set("#sns-modal", { y: "200%", autoAlpha: 0 });
  ig.addEventListener("click", function () {
    document.querySelector(".fb-contents").style.display = "none";
    document.querySelector(".wb-contents").style.display = "none";
    document.querySelector(".ig-contents").style.display = "flex";
    gsap.to("#sns-modal", { y: "0", autoAlpha: 1, display: "block" });
  });

  fb.addEventListener("click", function () {
    document.querySelector(".fb-contents").style.display = "flex";
    document.querySelector(".wb-contents").style.display = "none";
    document.querySelector(".ig-contents").style.display = "none";
    gsap.to("#sns-modal", { y: "0", autoAlpha: 1, display: "block" });
  });

  weibo.addEventListener("click", function () {
    document.querySelector(".fb-contents").style.display = "none";
    document.querySelector(".wb-contents").style.display = "flex";
    document.querySelector(".ig-contents").style.display = "none";
    gsap.to("#sns-modal", { y: "0", autoAlpha: 1, display: "block" });
  });

  document.querySelector(".close").addEventListener("click", function () {
    gsap.to("#sns-modal", { autoAlpha: 0, y: "200%", display: "none" });
  });
});
