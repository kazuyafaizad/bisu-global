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
    function n(a) {
      if (e[a]) return e[a].exports;
      var i = (e[a] = { i: a, l: !1, exports: {} });
      return t[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
          for (var i in t)
            n.d(
              a,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return a;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 1))
    );
  })([
    function (t) {
      t.exports = JSON.parse(
        "[[2,7],[7,[23,6]],[[22,8]],[11,[20,11]],[11,[16,2],[19,3],[23,8]],[10,[16,2],[19,12]],[[11,7],[19,12]],[[13,3],[18,10],30],[[12,4],[18,13]],[[8,2],[12,3],[18,13]],[8,[10,5],[18,16]],[[7,9],[20,16],[39,2]],[[6,4],[11,2],14,16,[20,24]],[2,[6,2],[11,5],[21,26]],[2,6,8,[10,8],[20,27]],[2,[6,4],[11,4],16,[20,27]],[[5,4],[10,8],[20,27]],[[6,9],17,[21,14],[37,2],[40,6]],[[6,8],[16,3],[21,12],[34,11]],[6,[8,6],[16,2],[20,2],[23,9],[33,8],42],[6,[8,6],[17,6],[26,14]],[[7,18],[27,7]],[[7,9],[17,11],[29,4],42],[[6,22],[29,3],[40,3]],[[6,8],[18,3],[22,5],[29,2],[38,3]],[[6,8],15,[18,4],[23,2],26],[[6,16],[23,3]],[[6,17],24],[[6,17]],[3,[6,17]],[[5,18]],[[5,19]],[[5,20]],[[5,22]],[[4,26]],[[4,24]],[[4,22]],[[4,21]],[[4,20]],[[4,20]],[[4,19],24],[[3,23],31],[[3,25],29,32],[3,[5,23],31,[33,2]],[[3,27],34],[[5,19],[27,2]],[[4,20],33],[[5,19],[32,2]],[[5,19],[31,3],[42,5]],[[4,13],[18,5],34,[41,6]],[[5,12],25,27,34,[41,6]],[[5,12],[27,2],[39,7]],[[5,12],18,[39,7]],[[5,11],34,[38,8]],[[5,11],19,33,[38,8]],[[4,6],[11,4],18,34,[38,9]],[[5,4],[17,2],[34,2],[40,8]],[[5,4],15,[34,3],[40,9]],[[5,4],35,[39,10],50],[[5,4],36,[41,7]],[[5,4],35,[42,5]],[[5,4],10,44],[[6,2],[10,2]],[[6,2],[9,2]],[[6,3]],[[6,3]],[[6,3],51],[[6,2],50],[6],[6,48],[40],[7],[0],[0],[0],[6,8],[6,8],[[5,5]],[[5,6]],[[5,5]],[[6,4]],[[5,4]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,3]],[[6,4]],[[6,6]],[[6,5]],[4,[6,6]],[[3,2],[6,7]],[4,[6,8]],[4,[6,12]],[[6,13]],[[6,13]],[[6,14]],[[5,15]],[5,[7,14]],[[3,17],21,23],[[5,18]],[3,[6,14],[21,3]],[4,[6,19]],[2,[6,20]],[[2,4],[7,19]],[[2,7],[10,12],[25,2]],[2,[6,2],[10,11],26],[[3,2],[6,2],[10,11],26],[[2,3],7,[10,11],[25,3]],[[4,4],[11,2],14,[16,5],[24,3]],[2,[4,4],[11,3],[15,6],27],[[2,4],[11,3],[15,6],[27,2]],[2,4,8,[13,9]],[2,[5,5],[11,9],29,[33,3]],[2,5,[7,12],24,[32,6]],[5,[7,10],[29,10]],[[5,3],[9,7],[29,11],[48,7]],[3,[6,2],[10,5],25,[29,11],[44,11]],[3,[6,2],[10,3],14,25,[29,24]],[[2,2],6,[9,6],[29,22]],[[2,2],[10,3],[29,21]],[[2,2],[11,2],[29,20]],[[2,2],12,[30,19]],[[2,2],13,[30,18]],[[2,3],13,[31,13],[45,2]],[[2,4],7,[31,16]],[[2,6],32,[34,11]],[[2,7],[33,12]],[[2,7],[34,9]],[[2,7],[34,8]],[[2,6],[34,8]],[[2,5],[34,7]],[[2,5],[35,3]],[[2,5],[35,2]],[[2,4]],[[2,4]],[[2,4]],[[2,3]],[[2,2]],[2],[7],[2,7]]"
      );
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(0);
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(t, a.key, a);
        }
      }
      n.d(e, "PointMap", function () {
        return o;
      });
      var o = (function () {
        function t(e, n) {
          var i;
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.globalRawData =
              ((i = []),
              a.forEach(function (t, e) {
                (i[e] = i[e] || []),
                  t.forEach(function (t) {
                    if ("number" == typeof t) i[e].push(t);
                    else for (var n = 0; n < t[1]; n++) i[e].push(t[0] + n);
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
              },
              n || {}
            )),
            this.initCanvas(),
            this.initEvents(),
            this.animation();
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: "animation",
              value: function () {
                var t = this;
                requestAnimationFrame(function () {
                  t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height),
                    ["drawBasicMap", "drawEventPointWave"].forEach(function (e) {
                      var n = t[e]();
                      n && t.ctx.drawImage(n, 0, 0, n.width / t.screenRatio, n.height / t.screenRatio);
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
                  ["canvas", "canvas-map", "canvas-wave"].forEach(function (n) {
                    var a = (t[n] = document.createElement("canvas"));
                    (a.style.width = "".concat(t.canvasWidth, "px")),
                      (a.style.height = "".concat(t.canvasWidth * e, "px")),
                      (a.width = "".concat(t.canvasWidth * t.screenRatio)),
                      (a.height = "".concat(t.canvasWidth * e * t.screenRatio)),
                      (t["ctx-".concat(n)] = a.getContext("2d")).scale(t.screenRatio, t.screenRatio);
                  }),
                  (this.canvas.style.margin = "0 auto"),
                  (this.ctx = this.canvas.getContext("2d")),
                  this.dom.appendChild(this.canvas);
              },
            },
            {
              key: "initEvents",
              value: function () {
                var t = this;
                this.canvas.addEventListener("mousemove", function (e) {
                  var n = Math.round(e.offsetX / t.scale),
                    a = Math.round(e.offsetY / t.scale);
                  t.activePoint = [n, a];
                  var i = t.events && t.events[n] && t.events[n][a];
                  (t.canvas.style.cursor = i ? "pointer" : "default"),
                    ((t.customerEvents && t.customerEvents.mousemove) || []).forEach(function (t) {
                      return t(e, i);
                    }),
                    (t.needRedraw = !0);
                }),
                  this.canvas.addEventListener("click", function (e) {
                    var n = Math.round(e.offsetX / t.scale),
                      a = Math.round(e.offsetY / t.scale);
                    t.events &&
                      t.events[n] &&
                      t.events[n][a] &&
                      ((t.customerEvents && t.customerEvents.click) || []).forEach(function (i) {
                        return i(e, t.events[n][a]);
                      }),
                      (t.needRedraw = !0);
                  });
              },
            },
            {
              key: "drawBasicMap",
              value: function () {
                var t = this,
                  e = this["canvas-map"];
                if (this.needRedraw) {
                  var n = this["ctx-canvas-map"];
                  n.clearRect(0, 0, e.width, e.height), n.save(), (n.fillStyle = this.config.mapBgColor);
                  var a = null,
                    i = 0.4 * this.scale;
                  this.globalRawData.forEach(function (e, o) {
                    e.forEach(function (e) {
                      t.activePoint && t.activePoint[0] === o && t.activePoint[1] === e
                        ? (a = [o, e])
                        : n.fillRect(o * t.scale - i / 2, e * t.scale - i / 2, i, i);
                    });
                  }),
                    (n.fillStyle = this.config.mapActiveBgColor),
                    (i = 0.8 * this.scale),
                    a && n.fillRect(a[0] * this.scale - i / 2, a[1] * this.scale - i / 2, i, i),
                    n.restore(),
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
                    n = this.events || {},
                    a = null,
                    i = this.scale / 2;
                  if (
                    (e.beginPath(),
                    Object.keys(n)
                      .map(function (t) {
                        return Number(t);
                      })
                      .forEach(function (o) {
                        Object.keys(n[o])
                          .map(function (t) {
                            return Number(t);
                          })
                          .forEach(function (n) {
                            if (t.activePoint && t.activePoint[0] === o && t.activePoint[1] === n) a = [o, n];
                            else {
                              var s = o * t.scale,
                                r = n * t.scale;
                              e.beginPath(),
                                (e.fillStyle = t.config.eventPointColor),
                                e.moveTo(s, r),
                                e.arc(s, r, i, 0, 2 * Math.PI),
                                e.fill();
                            }
                          });
                      }),
                    a)
                  ) {
                    var o = a[0] * this.scale,
                      s = a[1] * this.scale;
                    e.beginPath(),
                      (e.fillStyle = this.config.activePointColor),
                      e.moveTo(o, s),
                      e.arc(o, s, 1.382 * i, 0, 2 * Math.PI),
                      e.fill();
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
                  n = this["ctx-canvas-wave"];
                (n.globalCompositeOperation = "destination-out"),
                  (n.fillStyle = "rgba(0, 0, 0, .08)"),
                  n.fillRect(0, 0, n.canvas.width, n.canvas.height),
                  (n.globalCompositeOperation = "lighter"),
                  (n.lineWidth = 1);
                var a = this.events || {};
                return (
                  n.save(),
                  n.beginPath(),
                  (n.globalAlpha = 0.1),
                  Object.keys(a).forEach(function (e) {
                    Object.keys(a[e]).forEach(function (a) {
                      n.strokeStyle = t.config.eventPointColor;
                      var i = e * t.scale,
                        o = a * t.scale;
                      n.moveTo(i + t._waveRadius, o), n.arc(i, o, t._waveRadius, 0, 2 * Math.PI);
                    });
                  }),
                  (this._waveRadius += 0.1),
                  n.stroke(),
                  n.restore(),
                  this._waveRadius > 15 && (this._waveRadius = 0),
                  e
                );
              },
            },
            {
              key: "addEvent",
              value: function (t) {
                var e = Math.round((t.coordinate[0] + Math.abs(this.coordinate.bbox[0])) / this.coordinate.grid),
                  n = Math.round(Math.abs(t.coordinate[1] - this.coordinate.bbox[3]) / this.coordinate.grid);
                (this.events = this.events || {}),
                  (this.events[e] = this.events[e] || {}),
                  (this.events[e][n] = this.events[e][n] || []),
                  this.events[e][n].push(t),
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
                var n = this.customerEvents[t].indexOf(e);
                -1 !== n && this.customerEvents[t].splice(n, 1);
              },
            },
          ]) && i(e.prototype, n),
          o && i(e, o),
          t
        );
      })();
    },
  ]).PointMap;
});
