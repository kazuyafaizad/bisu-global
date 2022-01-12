import PointMap from "../js/point-map.js";
document.addEventListener("DOMContentLoaded", function () {
  // Create an instance
  let map = new PointMap("map");

  map.config.eventPointColor = "#333";
  map.config.mapBgColor = "#B8A273";
  map.config.activePointColor = "#231232";
  map.config.mapActiveBgColor = "#B8A273";
  // Add event points

  setTimeout(function () {
    map.addEvents([
      {
        name: "Singapore",
        coordinate: [-70.8198, 1.3521],
        start: [-40.5902, 130.4017],
        pointer: "../assets/maps/sg.png",
        instagram: "https://www.instagram.com/bi_su_official_sg/",
        facebook: "https://www.facebook.com/bisu.official.sg",
      },
      {
        name: "Japan",
        coordinate: [-40.5902, 130.4017],
        start: [-40.5902, 130.4017],
        pointer: "../assets/maps/jpn.png",
        instagram: "https://www.instagram.com/bi_su_official/",
        facebook: "https://www.facebook.com/www.bisu.jp/",
        twitter: "https://twitter.com/bi_su_official",
      },
      {
        name: "USA",
        coordinate: [77.0369, 38.9072],
        start: [-40.5902, 130.4017],
        pointer: "../assets/maps/usa.png",
        instagram: "https://www.instagram.com/bi_su_official_us/",
        facebook: "https://www.facebook.com/en.bisu.jp",
      },
      {
        name: "China",
        coordinate: [-70.9042, 116.4074],
        start: [-40.5902, 130.4017],
        pointer: "../assets/maps/ch.png",
        xiaohongshu:
          "https://www.xiaohongshu.com/user/profile/6162aee4000000000201b1cb?xhsshare=CopyLink&appuid=6042323100000000010063b4&apptime=1640144826",
        weibo:
          "https://weibo.com/u/7727981722?refer_flag=0000015010_&from=feed&loc=nickname&is_all=1",
      },
    ]);
  }, 2000);

  // const tips = document.querySelector(".tips-wrap");
  // const marker = document.querySelector(".marker");
  const tips2 = document.querySelector(".tips2");
  const modalTitle = document.querySelector("#modal-title");

  // let infoBox = function (e, data) {
  //   if (data) {
  //     let container = document.querySelector("#map-wrapper");
  //     let rect = container.getBoundingClientRect();
  //     let x = e.clientX + container.scrollLeft - rect.left;
  //     let y = e.clientY + container.scrollTop - rect.top;
  //     tips.style.left = `${x}px`;
  //     tips.style.top = `${y}px`;
  //     tips.style.display = "flex";
  //     marker.src = data.map((d) => d.pointer);
  //     modalInfo(e, data);
  //   }
  // };

  let modalInfo = function (data) {
    if (data) {
      const fb = tips2.querySelector(".facebook");
      const ig = tips2.querySelector(".instagram");
      const weibo = tips2.querySelector(".weibo");
      const twitter = tips2.querySelector(".twitter");
      const xhs = tips2.querySelector(".xhs");

      data.map((d) => {
        ig.href = d.instagram;
        d.instagram
          ? ig.classList.remove("hidden")
          : ig.classList.add("hidden");
      });
      data.map((d) => {
        fb.href = d.facebook;
        d.facebook ? fb.classList.remove("hidden") : fb.classList.add("hidden");
      });
      data.map((d) => {
        weibo.href = d.weibo;
        d.weibo
          ? weibo.classList.remove("hidden")
          : weibo.classList.add("hidden");
      });
      data.map((d) => {
        twitter.href = d.twitter;
        d.twitter
          ? twitter.classList.remove("hidden")
          : twitter.classList.add("hidden");
      });
      data.map((d) => {
        xhs.href = d.xiaohongshu;
        d.xiaohongshu
          ? xhs.classList.remove("hidden")
          : xhs.classList.add("hidden");
      });

      modalTitle.innerText = data.map((d) => d.name).join("\n");
    }
  };

  document.querySelector(".marker").addEventListener("click", function () {
    gsap.to("#modal", { opacity: 1, y: 0 });
  });
  document.querySelector(".close").addEventListener("click", function () {
    gsap.to("#modal", { opacity: 0, y: "-100%" });
  });

  //document.querySelector("#test-jp").addEventListener('click', function(e, data) {
  //    gsap.to("#modal",{y:0})
  //});

  gsap.registerPlugin(ScrollToPlugin);

  gsap.set("#modal", { y: "-100%" });

  let tl = gsap.timeline();
  map.on("click", (e, data) => {
    gsap.to("#modal", { y: 0, opacity: 1 });
    modalInfo(e, data);
  });

  if (window.screen.width <= 769) {
    tl.to("#map-wrapper", { scrollTo: { x: 170, y: 1000 }, duration: 1 });
    tl.to("#map", { scale: 1.1, transformOrigin: "top center", duration: 1 });
    document.querySelector("#map-wrapper").style.overflow = "hidden";
  } else {
    gsap.set("#map", { scaleX: 1, scaleY: 1, x: -100 });
    tl.to("#map", { x: 0, duration: 1 });
    // map.on("mousemove", (e, data) => {
    //   infoBox(e, data);
    // });
  }
  tl.from(".title", { autoAlpha: 0, duration: 1 });
});
