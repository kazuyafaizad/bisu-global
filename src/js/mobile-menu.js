var menu = new TimelineMax({ paused: true, reversed: true });

menu
  .to("#burger1", 0.2, { rotation: 35, ease: Power2.easeInOut }, "cross")
  .to("#burger2", 0.2, { scale: 0 }, "cross")
  .to("#burger3", 0.2, { rotation: -35, ease: Power2.easeInOut }, "cross")
  .from(".mobile-menu", 0.6, { height: "0%", display: "none", ease: Power2.easeInOut });

function menuIn() {
  if (menu.reversed()) {
    menu.play();
    document.querySelector(".burgertxt").textContent = "Close";
    document.querySelector(".burgertxt").classList.remove("ml-1");
    document.querySelector(".burgertxt").classList.add("ml-0");
  } else {
    menu.reverse();
    document.querySelector(".burgertxt").textContent = "Menu";
    document.querySelector(".burgertxt").classList.remove("ml-0");
    document.querySelector(".burgertxt").classList.add("ml-1");
  }
}

document.querySelector("#nav").addEventListener("click", function () {
  menuIn();
});
