!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.PointMap = e())
    : (t.PointMap = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function a(n) {
      if (e[n]) return e[n].exports;
      var i = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
    }
    return (
      (a.m = t),
      (a.c = e),
      (a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (a.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (a.t = function (t, e) {
        if ((1 & e && (t = a(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if ((a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
          for (var i in t)
            a.d(
              n,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return n;
      }),
      (a.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return a.d(e, "a", e), e;
      }),
      (a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (a.p = ""),
      a((a.s = 1))
    );
  })([
    function (t) {
      t.exports = JSON.parse(
        "[[2,7],[7,[23,6]],[[22,8]],[11,[20,11]],[11,[16,2],[19,3],[23,8]],[10,[16,2],[19,12]],[[11,7],[19,12]],[[13,3],[18,10],30],[[12,4],[18,13]],[[8,2],[12,3],[18,13]],[8,[10,5],[18,16]],[[7,9],[20,16],[39,2]],[[6,4],[11,2],14,16,[20,24]],[2,[6,2],[11,5],[21,26]],[2,6,8,[10,8],[20,27]],[2,[6,4],[11,4],16,[20,27]],[[5,4],[10,8],[20,27]],[[6,9],17,[21,14],[37,2],[40,6]],[[6,8],[16,3],[21,12],[34,11]],[6,[8,6],[16,2],[20,2],[23,9],[33,8],42],[6,[8,6],[17,6],[26,14]],[[7,18],[27,7]],[[7,9],[17,11],[29,4],42],[[6,22],[29,3],[40,3]],[[6,8],[18,3],[22,5],[29,2],[38,3]],[[6,8],15,[18,4],[23,2],26],[[6,16],[23,3]],[[6,17],24],[[6,17]],[3,[6,17]],[[5,18]],[[5,19]],[[5,20]],[[5,22]],[[4,26]],[[4,24]],[[4,22]],[[4,21]],[[4,20]],[[4,20]],[[4,19],24],[[3,23],31],[[3,25],29,32],[3,[5,23],31,[33,2]],[[3,27],34],[[5,19],[27,2]],[[4,20],33],[[5,19],[32,2]],[[5,19],[31,3],[42,5]],[[4,13],[18,5],34,[41,6]],[[5,12],25,27,34,[41,6]],[[5,12],[27,2],[39,7]],[[5,12],18,[39,7]],[[5,11],34,[38,8]],[[5,11],19,33,[38,8]],[[4,6],[11,4],18,34,[38,9]],[[5,4],[17,2],[34,2],[40,8]],[[5,4],15,[34,3],[40,9]],[[5,4],35,[39,10],50],[[5,4],36,[41,7]],[[5,4],35,[42,5]],[[5,4],10,44],[[6,2],[10,2]],[[6,2],[9,2]],[[6,3]],[[6,3]],[[6,3],51],[[6,2],50],[6],[6,48],[40],[7],[0],[0],[0],[6,8],[6,8],[[5,5]],[[5,6]],[[5,5]],[[6,4]],[[5,4]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,4]],[[6,6]],[[6,5]],[4,[6,6]],[[3,2],[6,7]],[4,[6,8]],[4,[6,12]],[[6,13]],[[6,13]],[[6,14]],[[5,15]],[5,[7,14]],[[3,17],21,23],[[5,18]],[3,[6,14],[21,3]],[4,[6,19]],[2,[6,20]],[[2,4],[7,19]],[[2,7],[10,12],[25,2]],[2,[6,2],[10,11],26],[[3,2],[6,2],[10,11],26],[[2,3],7,[10,11],[25,3]],[[4,4],[11,2],14,[16,5],[24,3]],[2,[4,4],[11,3],[15,6],27],[[2,4],[11,3],[15,6],[27,2]],[2,4,8,[13,9]],[2,[5,5],[11,9],29,[33,3]],[2,5,[7,12],24,[32,6]],[5,[7,10],[29,10]],[[5,3],[9,7],[29,11],[48,7]],[3,[6,2],[10,5],25,[29,11],[44,11]],[3,[6,2],[10,3],14,25,[29,24]],[[2,2],6,[9,6],[29,22]],[[2,2],[10,3],[29,21]],[[2,2],[11,2],[29,20]],[[2,2],12,[30,19]],[[2,2],13,[30,18]],[[2,3],13,[31,13],[45,2]],[[2,4],7,[31,16]],[[2,6],32,[34,11]],[[2,7],[33,12]],[[2,7],[34,9]],[[2,7],[34,8]],[[2,6],[34,8]],[[2,5],[34,7]],[[2,5],[35,3]],[[2,5],[35,2]],[[2,4]],[[2,4]],[[2,4]],[[2,3]],[[2,2]],[2],[7],[2,7]]"
      );
    },
    function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(0);
      a.d(e, "PointMap", function () {
        return i;
      });
      var i = (function () {
        function t(e, a) {
          var i;
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.globalRawData =
              ((i = []),
              n.forEach(function (t, e) {
                (i[e] = i[e] || []),
                  t.forEach(function (t) {
                    if ("number" == typeof t) i[e].push(t);
                    else for (var a = 0; a < t[1]; a++) i[e].push(t[0] + a);
                  });
              }),
              i)),
            (this.coordinate = { bbox: [-180, -85, 180, 85], grid: 2.5 }),
            (this.dom = document.getElementById(e)),
            (this.config = Object.assign(
              {
                mapBgColor: "#87bce1",
                mapActiveBgColor: "#87BCE1",
                eventPointColor: "#fefefe",
                activePointColor: "#3bc705",
                enlarge: 1,
                start: [
                  Math.round((-40.5902 + Math.abs(this.coordinate.bbox[0])) / this.coordinate.grid),
                  Math.round((130.4017 - Math.abs(this.coordinate.bbox[3])) / this.coordinate.grid),
                ],
              },
              a || {}
            )),
            this.initCanvas(),
            this.initEvents(),
            this.animation();
        }
        var e;
        return (
          (e = [
            {
              key: "animation",
              value: function () {
                var t = this;
                requestAnimationFrame(function () {
                  t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height),
                    ["drawBasicMap", "initIcon", "drawEventPointWave"].forEach(function (e) {
                      var a = t[e]();
                      a && t.ctx.drawImage(a, 0, 0, a.width / t.screenRatio, a.height / t.screenRatio);
                    }),
                    (t.needRedraw = !1),
                    t.animation();
                });
              },
            },
            {
              key: "initCanvas",
              value: function () {
                var t = this,
                  e =
                    (Math.abs(this.coordinate.bbox[1]) + Math.abs(this.coordinate.bbox[3])) /
                    (Math.abs(this.coordinate.bbox[0]) + Math.abs(this.coordinate.bbox[2]));
                (this.canvasWidth = Math.min(parseInt(getComputedStyle(this.dom).width), 1200)),
                  (this.scale =
                    this.canvasWidth /
                    ((Math.abs(this.coordinate.bbox[0]) + Math.abs(this.coordinate.bbox[2])) / this.coordinate.grid)),
                  (this.dom.style.textAlign = "center"),
                  (this.screenRatio = window.devicePixelRatio),
                  (this.needRedraw = !0),
                  ["canvas", "canvas-map", "canvas-wave", "canvas-icon"].forEach(function (a) {
                    var n = (t[a] = document.createElement("canvas"));
                    (n.style.width = "".concat(t.canvasWidth, "px")),
                      (n.style.height = "".concat(t.canvasWidth * e, "px")),
                      (n.width = "".concat(t.canvasWidth * t.screenRatio)),
                      (n.height = "".concat(t.canvasWidth * e * t.screenRatio)),
                      (t["ctx-".concat(a)] = n.getContext("2d")).scale(t.screenRatio, t.screenRatio);
                  }),
                  (this.canvas.style.margin = "0 auto"),
                  (this.ctx = this.canvas.getContext("2d")),
                  this.dom.appendChild(this.canvas);
              },
            },
            {
              key: "initEvents",
              value: function () {
                var t,
                  e = this;
                this.canvas.addEventListener("mousemove", function (t) {
                  var a = Math.round(t.offsetX / e.scale),
                    n = Math.round(t.offsetY / e.scale);
                  e.activePoint = [a, n];
                  var i = e.events && e.events[a] && e.events[a][n];
                  (e.canvas.style.cursor = i ? "pointer" : "default"),
                    ((e.customerEvents && e.customerEvents.mousemove) || []).forEach(function (e) {
                      return e(t, i);
                    }),
                    (e.needRedraw = !0);
                }),
                  this.canvas.addEventListener("click", function (a) {
                    var n = Math.round(a.offsetX / e.scale),
                      i = Math.round(a.offsetY / e.scale);
                    ((e.customerEvents && e.customerEvents.click) || []).forEach(function (o) {
                      var s = [];
                      Object.keys(e.events).forEach(function (t) {
                        Object.keys(e.events[t]).forEach((a) => s.push({ x: t, y: a, data: e.events[t][a] }));
                      }),
                        (t = { x: n, y: i }),
                        s.forEach((e) => {
                          if (
                            (function (t, e) {
                              return Math.sqrt((t.x - Number(e.x)) ** 2 + (t.y - Number(e.y)) ** 2) < 5;
                            })(t, e)
                          )
                            return o(a, e.data);
                        });
                    }),
                      (e.needRedraw = !0);
                  });
              },
            },
            {
              key: "drawBasicMap",
              value: function () {
                var t = this,
                  e = this["canvas-map"];
                if (this.needRedraw) {
                  var a = this["ctx-canvas-map"];
                  a.clearRect(0, 0, e.width, e.height), a.save(), (a.fillStyle = this.config.mapBgColor);
                  var n = null,
                    i = 0.4 * this.scale;
                  this.globalRawData.forEach(function (e, o) {
                    e.forEach(function (e) {
                      t.activePoint && t.activePoint[0] === o && t.activePoint[1] === e
                        ? (n = [o, e])
                        : a.fillRect(o * t.scale - i / 2, e * t.scale - i / 2, i, i);
                    });
                  }),
                    (a.fillStyle = this.config.mapActiveBgColor),
                    (i = 0.8 * this.scale),
                    n && a.fillRect(n[0] * this.scale - i / 2, n[1] * this.scale - i / 2, i, i),
                    a.restore(),
                    this.drawEventPoint();
                }
                return e;
              },
            },
            {
              key: "drawEventPoint",
              value: function () {
                var t = this;
                if (this.needRedraw) {
                  var e = this["ctx-canvas-map"],
                    a = this.events || {},
                    n = null;
                  if (
                    (e.beginPath(),
                    Object.keys(a)
                      .map(function (t) {
                        return Number(t);
                      })
                      .forEach(function (e) {
                        Object.keys(a[e])
                          .map(function (t) {
                            return Number(t);
                          })
                          .forEach(function (a) {
                            t.activePoint && t.activePoint[0] === e && t.activePoint[1] === a && (n = [e, a]);
                          });
                      }),
                    n)
                  ) {
                    var i = n[0] * this.scale,
                      o = n[1] * this.scale;
                    e.beginPath(), (e.fillStyle = this.config.activePointColor), e.moveTo(i, o), e.fill();
                  }
                }
              },
            },
            {
              key: "drawEventPointWave",
              value: function () {
                var t = this;
                this._waveRadius = this._waveRadius || 0;
                var e = this["canvas-wave"],
                  a = this["ctx-canvas-wave"];
                (a.globalCompositeOperation = "destination-out"),
                  (a.fillStyle = "rgba(0, 0, 0, .08)"),
                  a.fillRect(0, 0, a.canvas.width, a.canvas.height),
                  (a.globalCompositeOperation = "lighter"),
                  (a.lineWidth = 1);
                var n = this.events || {};
                return (
                  a.save(),
                  a.beginPath(),
                  (a.globalAlpha = 0.1),
                  Object.keys(n).forEach(function (e) {
                    Object.keys(n[e]).forEach(function (n) {
                      a.strokeStyle = t.config.mapBgColor;
                      var i = e * t.scale,
                        o = n * t.scale;
                      a.moveTo(i + t._waveRadius, o), a.arc(i, o, t._waveRadius, 0, 2 * Math.PI);
                    });
                  }),
                  (this._waveRadius += 0.1),
                  a.stroke(),
                  a.restore(),
                  this._waveRadius > 45 && (this._waveRadius = 0),
                  e
                );
              },
            },
            {
              key: "addEvent",
              value: function (t) {
                var e = Math.round((t.coordinate[0] + Math.abs(this.coordinate.bbox[0])) / this.coordinate.grid),
                  a = Math.round(Math.abs(t.coordinate[1] - this.coordinate.bbox[3]) / this.coordinate.grid);
                (this.events = this.events || {}),
                  (this.events[e] = this.events[e] || {}),
                  (this.events[e][a] = this.events[e][a] || []),
                  this.events[e][a].push(t),
                  (this.needRedraw = !0);
              },
            },
            {
              key: "addEvents",
              value: function (t) {
                var e = this;
                t.forEach(function (t) {
                  e.addEvent(t);
                });
              },
            },
            {
              key: "on",
              value: function (t, e) {
                (this.customerEvents = this.customerEvents || {}),
                  (this.customerEvents[t] = this.customerEvents[t] || []),
                  this.customerEvents[t].push(e);
              },
            },
            {
              key: "remove",
              value: function (t, e) {
                (this.customerEvents = this.customerEvents || {}),
                  (this.customerEvents[t] = this.customerEvents[t] || []);
                var a = this.customerEvents[t].indexOf(e);
                -1 !== a && this.customerEvents[t].splice(a, 1);
              },
            },
            {
              key: "initIcon",
              value: function () {
                var t = this["ctx-canvas-icon"],
                  e = this["canvas-icon"],
                  a = this.events || {},
                  n = 8 * this.scale,
                  i = this;
                return (
                  this.needRedraw &&
                    (t.save(),
                    (t.globalAlpha = 0.1),
                    Object.keys(a).forEach(function (o) {
                      Object.keys(a[o]).forEach(function (a) {
                        var s = o * i.scale,
                          r = a * i.scale,
                          c = new Image(n, n);
                        (c.src = "../assets/bi-su_icon.svg"),
                          (c.onload = function () {
                            (t.imageSmoothingQuality = "medium"),
                              (e.imageRendering = "optimizeQuality"),
                              t.drawImage(this, s - n / 2, r - n / 2, n, n);
                          });
                      });
                    })),
                  t.restore(),
                  e.classList.add("antialias"),
                  e
                );
              },
            },
          ]) &&
            (function (t, e) {
              for (var a = 0; a < e.length; a++) {
                var n = e[a];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            })(t.prototype, e),
          t
        );
      })();
    },
  ]).PointMap;
});
