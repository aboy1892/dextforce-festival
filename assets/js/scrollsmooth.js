/*!
 * ScrollSmoother 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
      for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
  }
  function s() {
      return "undefined" != typeof window;
  }
  function t() {
      return I || (s() && (I = window.gsap) && I.registerPlugin && I);
  }
  function w() {
      return String.fromCharCode.apply(null, arguments);
  }
  var I,
      z,
      N,
      W,
      B,
      F,
      U,
      Q,
      V,
      K,
      j,
      q,
      D,
      Y,
      X,
      // i = "ScrollSmoother",
      // a = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
      r =
          ((function (e) {
              var t = "undefined" != typeof window
                  // r = 0 === (t ? window.location.href : "").indexOf(w(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(w(108, 111, 99, 97, 108, 104, 111, 115, 116)) || -1 !== e.indexOf(w(49, 50, 55, 46, 48, 32, 48, 46, 49)),
                  // n = [
                  //     a,
                  //     w(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
                  //     w(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103),
                  //     w(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
                  //     w(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
                  //     w(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101),
                  //     w(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
                  //     w(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
                  //     w(99, 100, 112, 110, 46, 105, 111),
                  //     w(112, 101, 110, 115, 46, 105, 111),
                  //     w(103, 97, 110, 110, 111, 110, 46, 116, 118),
                  //     w(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
                  //     w(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116),
                  //     w(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
                  //     w(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
                  //     w(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
                  //     w(112, 108, 110, 107, 114, 46, 99, 111),
                  //     w(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
                  //     w(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
                  //     w(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
                  //     w(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
                  //     w(99, 115, 98, 46, 97, 112, 112),
                  //     w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
                  //     w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
                  //     w(99, 111, 100, 105, 101, 114, 46, 105, 111),
                  //     w(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
                  //     w(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109),
                  //     w(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109),
                  //     w(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
                  // ],
                  // n=true,
                  // o = n.length;
              // for (
              //     setTimeout(function checkWarn() {
              //         t &&
              //             ("loading" === document.readyState || "interactive" === document.readyState
              //                 ? document.addEventListener("readystatechange", checkWarn)
              //                 : (document.removeEventListener("readystatechange", checkWarn),
              //                   t &&
              //                       window.console &&
              //                       !window._gsapWarned &&
              //                       "object" == typeof window.gsap &&
              //                       !1 !== window.gsap.config().trialWarn &&
              //                       (console.log(w(37, 99, 87, 97, 114, 110, 105, 110, 103), w(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)),
              //                       console.log(
              //                           w(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) +
              //                               i +
              //                               w(
              //                                   32,
              //                                   105,
              //                                   115,
              //                                   32,
              //                                   108,
              //                                   111,
              //                                   97,
              //                                   100,
              //                                   101,
              //                                   100,
              //                                   32,
              //                                   116,
              //                                   104,
              //                                   97,
              //                                   116,
              //                                   32,
              //                                   111,
              //                                   110,
              //                                   108,
              //                                   121,
              //                                   32,
              //                                   119,
              //                                   111,
              //                                   114,
              //                                   107,
              //                                   115,
              //                                   32,
              //                                   108,
              //                                   111,
              //                                   99,
              //                                   97,
              //                                   108,
              //                                   108,
              //                                   121,
              //                                   32,
              //                                   97,
              //                                   110,
              //                                   100,
              //                                   32,
              //                                   111,
              //                                   110,
              //                                   32,
              //                                   100,
              //                                   111,
              //                                   109,
              //                                   97,
              //                                   105,
              //                                   110,
              //                                   115,
              //                                   32,
              //                                   108,
              //                                   105,
              //                                   107,
              //                                   101,
              //                                   32,
              //                                   99,
              //                                   111,
              //                                   100,
              //                                   101,
              //                                   112,
              //                                   101,
              //                                   110,
              //                                   46,
              //                                   105,
              //                                   111,
              //                                   32,
              //                                   97,
              //                                   110,
              //                                   100,
              //                                   32,
              //                                   99,
              //                                   111,
              //                                   100,
              //                                   101,
              //                                   115,
              //                                   97,
              //                                   110,
              //                                   100,
              //                                   98,
              //                                   111,
              //                                   120,
              //                                   46,
              //                                   105,
              //                                   111,
              //                                   46,
              //                                   32,
              //                                   42,
              //                                   42,
              //                                   42,
              //                                   32,
              //                                   68,
              //                                   79,
              //                                   32,
              //                                   78,
              //                                   79,
              //                                   84,
              //                                   32,
              //                                   68,
              //                                   69,
              //                                   80,
              //                                   76,
              //                                   79,
              //                                   89,
              //                                   32,
              //                                   84,
              //                                   72,
              //                                   73,
              //                                   83,
              //                                   32,
              //                                   70,
              //                                   73,
              //                                   76,
              //                                   69,
              //                                   32,
              //                                   42,
              //                                   42,
              //                                   42,
              //                                   32,
              //                                   76,
              //                                   111,
              //                                   97,
              //                                   100,
              //                                   105,
              //                                   110,
              //                                   103,
              //                                   32,
              //                                   105,
              //                                   116,
              //                                   32,
              //                                   111,
              //                                   110,
              //                                   32,
              //                                   97,
              //                                   110,
              //                                   32,
              //                                   117,
              //                                   110,
              //                                   97,
              //                                   117,
              //                                   116,
              //                                   104,
              //                                   111,
              //                                   114,
              //                                   105,
              //                                   122,
              //                                   101,
              //                                   100,
              //                                   32,
              //                                   115,
              //                                   105,
              //                                   116,
              //                                   101,
              //                                   32,
              //                                   118,
              //                                   105,
              //                                   111,
              //                                   108,
              //                                   97,
              //                                   116,
              //                                   101,
              //                                   115,
              //                                   32,
              //                                   116,
              //                                   104,
              //                                   101,
              //                                   32,
              //                                   108,
              //                                   105,
              //                                   99,
              //                                   101,
              //                                   110,
              //                                   115,
              //                                   101,
              //                                   32,
              //                                   97,
              //                                   110,
              //                                   100,
              //                                   32,
              //                                   119,
              //                                   105,
              //                                   108,
              //                                   108,
              //                                   32,
              //                                   99,
              //                                   97,
              //                                   117,
              //                                   115,
              //                                   101,
              //                                   32,
              //                                   97,
              //                                   32,
              //                                   114,
              //                                   101,
              //                                   100,
              //                                   105,
              //                                   114,
              //                                   101,
              //                                   99,
              //                                   116,
              //                                   46,
              //                                   32,
              //                                   80,
              //                                   108,
              //                                   101,
              //                                   97,
              //                                   115,
              //                                   101,
              //                                   32,
              //                                   106,
              //                                   111,
              //                                   105,
              //                                   110,
              //                                   32,
              //                                   67,
              //                                   108,
              //                                   117,
              //                                   98,
              //                                   32,
              //                                   71,
              //                                   114,
              //                                   101,
              //                                   101,
              //                                   110,
              //                                   83,
              //                                   111,
              //                                   99,
              //                                   107,
              //                                   32,
              //                                   116,
              //                                   111,
              //                                   32,
              //                                   103,
              //                                   101,
              //                                   116,
              //                                   32,
              //                                   102,
              //                                   117,
              //                                   108,
              //                                   108,
              //                                   32,
              //                                   97,
              //                                   99,
              //                                   99,
              //                                   101,
              //                                   115,
              //                                   115,
              //                                   32,
              //                                   116,
              //                                   111,
              //                                   32,
              //                                   116,
              //                                   104,
              //                                   101,
              //                                   32,
              //                                   98,
              //                                   111,
              //                                   110,
              //                                   117,
              //                                   115,
              //                                   32,
              //                                   112,
              //                                   108,
              //                                   117,
              //                                   103,
              //                                   105,
              //                                   110,
              //                                   115,
              //                                   32,
              //                                   116,
              //                                   104,
              //                                   97,
              //                                   116,
              //                                   32,
              //                                   98,
              //                                   111,
              //                                   111,
              //                                   115,
              //                                   116,
              //                                   32,
              //                                   121,
              //                                   111,
              //                                   117,
              //                                   114,
              //                                   32,
              //                                   97,
              //                                   110,
              //                                   105,
              //                                   109,
              //                                   97,
              //                                   116,
              //                                   105,
              //                                   111,
              //                                   110,
              //                                   32,
              //                                   115,
              //                                   117,
              //                                   112,
              //                                   101,
              //                                   114,
              //                                   112,
              //                                   111,
              //                                   119,
              //                                   101,
              //                                   114,
              //                                   115,
              //                                   46,
              //                                   32,
              //                                   68,
              //                                   105,
              //                                   115,
              //                                   97,
              //                                   98,
              //                                   108,
              //                                   101,
              //                                   32,
              //                                   116,
              //                                   104,
              //                                   105,
              //                                   115,
              //                                   32,
              //                                   119,
              //                                   97,
              //                                   114,
              //                                   110,
              //                                   105,
              //                                   110,
              //                                   103,
              //                                   32,
              //                                   119,
              //                                   105,
              //                                   116,
              //                                   104,
              //                                   32,
              //                                   103,
              //                                   115,
              //                                   97,
              //                                   112,
              //                                   46,
              //                                   99,
              //                                   111,
              //                                   110,
              //                                   102,
              //                                   105,
              //                                   103,
              //                                   40,
              //                                   123,
              //                                   116,
              //                                   114,
              //                                   105,
              //                                   97,
              //                                   108,
              //                                   87,
              //                                   97,
              //                                   114,
              //                                   110,
              //                                   58,
              //                                   32,
              //                                   102,
              //                                   97,
              //                                   108,
              //                                   115,
              //                                   101,
              //                                   125,
              //                                   41,
              //                                   59
              //                               )
              //                       ),
              //                       console.log(
              //                           w(
              //                               37,
              //                               99,
              //                               71,
              //                               101,
              //                               116,
              //                               32,
              //                               117,
              //                               110,
              //                               114,
              //                               101,
              //                               115,
              //                               116,
              //                               114,
              //                               105,
              //                               99,
              //                               116,
              //                               101,
              //                               100,
              //                               32,
              //                               102,
              //                               105,
              //                               108,
              //                               101,
              //                               115,
              //                               32,
              //                               97,
              //                               116,
              //                               32,
              //                               104,
              //                               116,
              //                               116,
              //                               112,
              //                               115,
              //                               58,
              //                               47,
              //                               47,
              //                               103,
              //                               114,
              //                               101,
              //                               101,
              //                               110,
              //                               115,
              //                               111,
              //                               99,
              //                               107,
              //                               46,
              //                               99,
              //                               111,
              //                               109,
              //                               47,
              //                               99,
              //                               108,
              //                               117,
              //                               98
              //                           ),
              //                           w(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)
              //                       ),
              //                       (window._gsapWarned = 1))));
              //     }, 50);
              //     -1 < --o;

              // )
                  // if (-1 !== e.indexOf(n[o])) return;
              // r ||
              //     setTimeout(function () {
              //         // t && (window.location.href = w(104, 116, 116, 112, 115, 58, 47, 47) + a + w(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + i + "&source=trial");
              //     }, 3e3);
          })
          // ("undefined" != typeof window ? window.location.host : ""),
          (ScrollSmoother.register = function register(e) {
              return (
                  z ||
                      ((I = e || t()),
                      s() && window.document && ((N = window), (W = document), (B = W.documentElement), (F = W.body)),
                      I &&
                          ((U = I.utils.toArray),
                          (Q = I.utils.clamp),
                          (j = I.parseEase("expo")),
                          (Y = I.core.context || function () {}),
                          (X = I.delayedCall(0.2, function () {
                              return V.isRefreshing || (K && K.refresh());
                          }).pause()),
                          (V = I.core.globals().ScrollTrigger),
                          I.core.globals("ScrollSmoother", ScrollSmoother),
                          F && V && ((q = V.core._getVelocityProp), (D = V.core._inputObserver), (ScrollSmoother.refresh = V.refresh), (z = 1)))),
                  z
              );
          }),
          (function _createClass(e, t, r) {
              return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
          })
          (ScrollSmoother, [
              {
                  key: "progress",
                  get: function get() {
                      return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
                  },
              },
          ]),
          ScrollSmoother);
  function ScrollSmoother(e) {
      var o = this;
      z || ScrollSmoother.register(I) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), (e = this.vars = e || {}), K && K.kill(), Y((K = this));
      function Ia() {
          return A.update(-P);
      }
      function Ka() {
          return (n.style.overflow = "visible");
      }
      function Ma(e) {
          e.update();
          var t = e.getTween();
          t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)), (d = !1), e.animation.progress(e.progress, !0);
      }
      function Na(e, t) {
          ((e !== P && !u) || t) && (C && ((n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"), (n._gsap.y = e + "px")), (M = e - P), (P = e), V.isUpdating || V.update());
      }
      function Oa(e) {
          return arguments.length ? (e < 0 && (e = 0), (H.y = -e), (d = !0), u ? (P = -e) : Na(-e), V.isRefreshing ? i.update() : _(e), this) : -P;
      }
      function Qa(e) {
          (m.scrollTop = 0), (e.target.contains && e.target.contains(m)) || (T && !1 === T(o, e)) || (V.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, "center center"), (g = e.target));
      }
      function Ra(e) {
          var r, n, o, i;
          v.forEach(function (t) {
              (r = t.pins),
                  (i = t.markers),
                  e.forEach(function (e) {
                      t.trigger &&
                          e.trigger &&
                          t !== e &&
                          (e.trigger === t.trigger || e.pinnedContainer === t.trigger || t.trigger.contains(e.trigger)) &&
                          ((n = e.start),
                          (o = (n - t.start - t.offset) / t.ratio - (n - t.start)),
                          r.forEach(function (e) {
                              return (o -= e.distance / t.ratio - e.distance);
                          }),
                          e.setPositions(n + o, e.end + o),
                          e.markerStart && i.push(I.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
                          e.pin && 0 < e.end && ((o = e.end - e.start), r.push({ start: e.start, end: e.end, distance: o, trig: e }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)));
                  });
          });
      }
      function Sa() {
          Ka(),
              requestAnimationFrame(Ka),
              v &&
                  (v.forEach(function (e) {
                      var t = e.start,
                          r = e.auto ? Math.min(V.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
                          n = (r - e.end) / 2;
                      (t -= n), (r -= n), (e.offset = n || 1e-4), (e.pins.length = 0), e.setPositions(Math.min(t, r), Math.max(t, r)), e.vars.onRefresh(e);
                  }),
                  Ra(V.sort())),
              A.reset();
      }
      function Ta() {
          return V.addEventListener("refresh", Sa);
      }
      function Ua() {
          return (
              v &&
              v.forEach(function (e) {
                  return e.vars.onRefresh(e);
              })
          );
      }
      function Va() {
          return (
              v &&
                  v.forEach(function (e) {
                      return e.vars.onRefreshInit(e);
                  }),
              Ua
          );
      }
      function Wa(t, r, n, o) {
          return function () {
              var e = "function" == typeof r ? r(n, o) : r;
              return e || 0 === e || (e = o.getAttribute("data-" + k + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + k + t, e), "auto" === e ? e : parseFloat(e);
          };
      }
      function Xa(r, e, t, n) {
          function Lb() {
              (e = s()), (t = f()), (o = parseFloat(e) || 1), (c = (a = "auto" === e) ? 0 : 0.5), l && l.kill(), (l = t && I.to(r, { ease: j, overwrite: !1, y: "+=0", duration: t })), i && ((i.ratio = o), (i.autoSpeed = a));
          }
          function Mb() {
              (d.y = h + "px"), d.renderTransform(1), Lb();
          }
          function Qb(e) {
              if (a) {
                  Mb();
                  var t = (function _autoDistance(e, t) {
                      var r,
                          n,
                          o = e.parentNode || B,
                          i = e.getBoundingClientRect(),
                          s = o.getBoundingClientRect(),
                          a = s.top - i.top,
                          l = s.bottom - i.bottom,
                          c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t),
                          u = -c * t;
                      return 0 < c && ((n = 0.5 == (r = s.height / (N.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, (-c * r) / (2 * r - 1)) * (t || 1)), (u += t ? -n * t : -n / 2), (c += n)), { change: c, offset: u };
                  })(r, Q(0, 1, -e.start / (e.end - e.start)));
                  (w = t.change), (u = t.offset);
              } else (w = (e.end - e.start) * (1 - o)), (u = 0);
              g.forEach(function (e) {
                  return (w -= e.distance * (1 - o));
              }),
                  e.vars.onUpdate(e),
                  l && l.progress(1);
          }
          var o,
              i,
              a,
              l,
              c,
              u,
              s = Wa("speed", e, n, r),
              f = Wa("lag", t, n, r),
              h = I.getProperty(r, "y"),
              d = r._gsap,
              g = [],
              p = [],
              w = 0;
          return (
              Lb(),
              (1 !== o || a || l) &&
                  (Qb(
                      (i = V.create({
                          trigger: a ? r.parentNode : r,
                          scroller: m,
                          scrub: !0,
                          refreshPriority: -999,
                          onRefreshInit: Mb,
                          onRefresh: Qb,
                          onKill: function onKill(e) {
                              var t = v.indexOf(e);
                              0 <= t && v.splice(t, 1), Mb();
                          },
                          onUpdate: function onUpdate(e) {
                              var t,
                                  r,
                                  n,
                                  o = h + w * (e.progress - c),
                                  i = g.length,
                                  s = 0;
                              if (e.offset) {
                                  if (i) {
                                      for (r = -P, n = e.end; i--; ) {
                                          if ((t = g[i]).trig.isActive || (r >= t.start && r <= t.end))
                                              return void (l && ((t.trig.progress += t.trig.direction < 0 ? 0.001 : -0.001), t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(d.y), -M, !0), O && l.progress(1)));
                                          r > t.end && (s += t.distance), (n -= t.distance);
                                      }
                                      o = h + s + w * ((I.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c);
                                  }
                                  (o = (function _round(e) {
                                      return Math.round(1e5 * e) / 1e5 || 0;
                                  })(o + u)),
                                      p.length &&
                                          !a &&
                                          p.forEach(function (e) {
                                              return e(o - s);
                                          }),
                                      l ? (l.resetTo("y", o, -M, !0), O && l.progress(1)) : ((d.y = o + "px"), d.renderTransform(1));
                              }
                          },
                      }))
                  ),
                  (I.core.getCache(i.trigger).stRevert = Va),
                  (i.startY = h),
                  (i.pins = g),
                  (i.markers = p),
                  (i.ratio = o),
                  (i.autoSpeed = a),
                  (r.style.willChange = "transform")),
              i
          );
      }
      var n,
          m,
          t,
          i,
          v,
          s,
          a,
          l,
          c,
          u,
          r,
          f,
          h,
          d,
          g,
          p = e.smoothTouch,
          w = e.onUpdate,
          S = e.onStop,
          b = e.smooth,
          T = e.onFocusIn,
          x = e.normalizeScroll,
          E = this,
          R =
              "undefined" != typeof ResizeObserver &&
              !1 !== e.autoResize &&
              new ResizeObserver(function () {
                  return V.isRefreshing || X.restart(!0);
              }),
          k = e.effectsPrefix || "",
          _ = V.getScrollFunc(N),
          C = 1 === V.isTouch ? (!0 === p ? 0.8 : parseFloat(p) || 0) : 0 === b || !1 === b ? 0 : parseFloat(b) || 0.8,
          P = 0,
          M = 0,
          O = 1,
          A = q(0),
          H = { y: 0 };
      function refreshHeight() {
          return (t = n.clientHeight), (n.style.overflow = "visible"), (F.style.height = t + "px"), t - N.innerHeight;
      }
      Ta(),
          V.addEventListener("killAll", Ta),
          I.delayedCall(0.5, function () {
              return (O = 0);
          }),
          (this.scrollTop = Oa),
          (this.scrollTo = function (e, t, r) {
              var n = I.utils.clamp(0, V.maxScroll(N), isNaN(e) ? o.offset(e, r) : +e);
              t ? (u ? I.to(o, { duration: C, scrollTop: n, overwrite: "auto", ease: j }) : _(n)) : Oa(n);
          }),
          (this.offset = function (e, t) {
              var r,
                  n = (e = U(e)[0]).style.cssText,
                  o = V.create({ trigger: e, start: t || "top top" });
              return v && Ra([o]), (r = o.start), o.kill(!1), (e.style.cssText = n), (I.core.getCache(e).uncache = 1), r;
          }),
          (this.content = function (e) {
              if (arguments.length) {
                  var t = U(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || F.children[0];
                  return t !== n && ((c = (n = t).getAttribute("style") || ""), R && R.observe(n), I.set(n, { overflow: "visible", width: "100%", boxSizing: "border-box", y: "+=0" }), C || I.set(n, { clearProps: "transform" })), this;
              }
              return n;
          }),
          (this.wrapper = function (e) {
              return arguments.length
                  ? ((m =
                        U(e || "#smooth-wrapper")[0] ||
                        (function _wrap(e) {
                            var t = W.querySelector(".ScrollSmoother-wrapper");
                            return t || ((t = W.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t;
                        })(n)),
                    (l = m.getAttribute("style") || ""),
                    refreshHeight(),
                    I.set(
                        m,
                        C
                            ? { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 }
                            : { overflow: "visible", position: "relative", width: "100%", height: "auto", top: "auto", bottom: "auto", left: "auto", right: "auto" }
                    ),
                    this)
                  : m;
          }),
          (this.effects = function (e, t) {
              if (((v = v || []), !e)) return v.slice(0);
              (e = U(e)).forEach(function (e) {
                  for (var t = v.length; t--; ) v[t].trigger === e && v[t].kill();
              });
              t = t || {};
              var r,
                  n,
                  o = t.speed,
                  i = t.lag,
                  s = [];
              for (r = 0; r < e.length; r++) (n = Xa(e[r], o, i, r)) && s.push(n);
              return v.push.apply(v, s), s;
          }),
          (this.sections = function (e, t) {
              if (((s = s || []), !e)) return s.slice(0);
              var r = U(e).map(function (t) {
                  return V.create({
                      trigger: t,
                      start: "top 120%",
                      end: "bottom -20%",
                      onToggle: function onToggle(e) {
                          (t.style.opacity = e.isActive ? "1" : "0"), (t.style.pointerEvents = e.isActive ? "all" : "none");
                      },
                  });
              });
              return t && t.add ? s.push.apply(s, r) : (s = r.slice(0)), r;
          }),
          this.content(e.content),
          this.wrapper(e.wrapper),
          (this.render = function (e) {
              return Na(e || 0 === e ? e : P);
          }),
          (this.getVelocity = function () {
              return A.getVelocity(-P);
          }),
          V.scrollerProxy(m, {
              scrollTop: Oa,
              scrollHeight: function scrollHeight() {
                  return refreshHeight() && F.scrollHeight;
              },
              fixedMarkers: !1 !== e.fixedMarkers && !!C,
              content: n,
              getBoundingClientRect: function getBoundingClientRect() {
                  return { top: 0, left: 0, width: N.innerWidth, height: N.innerHeight };
              },
          }),
          V.defaults({ scroller: m });
      var L = V.getAll().filter(function (e) {
          return e.scroller === N || e.scroller === m;
      });
      L.forEach(function (e) {
          return e.revert(!0);
      }),
          (i = V.create({
              animation: I.fromTo(
                  H,
                  { y: 0 },
                  {
                      y: function y() {
                          return -refreshHeight();
                      },
                      immediateRender: !1,
                      ease: "none",
                      data: "ScrollSmoother",
                      duration: 100,
                      onUpdate: function onUpdate() {
                          if (this._dur) {
                              var e = d;
                              e && (Ma(i), (H.y = P)), Na(H.y, e), Ia(), w && !u && w(E);
                          }
                      },
                  }
              ),
              onRefreshInit: function onRefreshInit(e) {
                  if (v) {
                      var t = V.getAll().filter(function (e) {
                          return !!e.pin;
                      });
                      v.forEach(function (r) {
                          r.vars.pinnedContainer ||
                              t.forEach(function (e) {
                                  if (e.pin.contains(r.trigger)) {
                                      var t = r.vars;
                                      (t.pinnedContainer = e.pin), (r.vars = null), r.init(t, r.animation);
                                  }
                              });
                      });
                  }
                  var r = e.getTween();
                  (h = r && r._end > r._dp._time),
                      (f = P),
                      (H.y = 0),
                      C &&
                          ((m.style.pointerEvents = "none"),
                          (m.scrollTop = 0),
                          setTimeout(function () {
                              return m.style.removeProperty("pointer-events");
                          }, 50));
              },
              onRefresh: function onRefresh(e) {
                  e.animation.invalidate(), e.setPositions(e.start, refreshHeight()), h || Ma(e), (H.y = -_()), Na(H.y), O || e.animation.progress(I.utils.clamp(0, 1, f / -e.end)), h && ((e.progress -= 0.001), e.update());
              },
              id: "ScrollSmoother",
              scroller: N,
              invalidateOnRefresh: !0,
              start: 0,
              refreshPriority: -9999,
              end: refreshHeight,
              onScrubComplete: function onScrubComplete() {
                  A.reset(), S && S(o);
              },
              scrub: C || !0,
          })),
          (this.smooth = function (e) {
              return arguments.length && (C = e || 0), arguments.length ? i.scrubDuration(e) : i.getTween() ? i.getTween().duration() : 0;
          }),
          i.getTween() && (i.getTween().vars.ease = e.ease || j),
          (this.scrollTrigger = i),
          e.effects && this.effects(!0 === e.effects ? "[data-" + k + "speed], [data-" + k + "lag]" : e.effects, {}),
          e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections),
          L.forEach(function (e) {
              (e.vars.scroller = m), e.init(e.vars, e.animation);
          }),
          (this.paused = function (e, t) {
              return arguments.length
                  ? (!!u !== e &&
                        (e
                            ? (i.getTween() && i.getTween().pause(),
                              _(-P),
                              A.reset(),
                              (r = V.normalizeScroll()) && r.disable(),
                              ((u = V.observe({
                                  preventDefault: !0,
                                  type: "wheel,touch,scroll",
                                  debounce: !1,
                                  allowClicks: !0,
                                  onChangeY: function onChangeY() {
                                      return Oa(-P);
                                  },
                              })).nested = D(B, "wheel,touch,scroll", !0, !1 !== t)))
                            : (u.nested.kill(), u.kill(), (u = 0), r && r.enable(), (i.progress = (-P - i.start) / (i.end - i.start)), Ma(i))),
                    this)
                  : !!u;
          }),
          (this.kill = this.revert = function () {
              o.paused(!1), Ma(i), i.kill();
              for (var e = (v || []).concat(s || []), t = e.length; t--; ) e[t].kill();
              V.scrollerProxy(m), V.removeEventListener("killAll", Ta), V.removeEventListener("refresh", Sa), (m.style.cssText = l), (n.style.cssText = c);
              var r = V.defaults({});
              r && r.scroller === m && V.defaults({ scroller: N }), o.normalizer && V.normalizeScroll(!1), clearInterval(a), (K = null), R && R.disconnect(), F.style.removeProperty("height"), N.removeEventListener("focusin", Qa);
          }),
          (this.refresh = function (e, t) {
              return i.refresh(e, t);
          }),
          x && (this.normalizer = V.normalizeScroll(!0 === x ? { debounce: !0, content: !C && n } : x)),
          V.config(e),
          "overscrollBehavior" in N.getComputedStyle(F) && I.set([F, B], { overscrollBehavior: "none" }),
          "scrollBehavior" in N.getComputedStyle(F) && I.set([F, B], { scrollBehavior: "auto" }),
          N.addEventListener("focusin", Qa),
          (a = setInterval(Ia, 250)),
          "loading" === W.readyState ||
              requestAnimationFrame(function () {
                  return V.refresh();
              });
  }
  (r.version = "3.11.3"),
      (r.create = function (e) {
          return K && e && K.content() === U(e.content)[0] ? K : new r(e);
      }),
      (r.get = function () {
          return K;
      }),
      t() && I.registerPlugin(r),
      (e.ScrollSmoother = r),
      (e.default = r);
  if (typeof window === "undefined" || window !== e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
      delete e.default;
  }
});
