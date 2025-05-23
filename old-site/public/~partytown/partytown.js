/* Partytown 0.5.4 - MIT builder.io */
!(function (t, e, n, i, r, o, a, d, s, c, p, l) {
  function u() {
    l ||
      ((l = 1),
      "/" == (a = (o.lib || "/~partytown/") + (o.debug ? "debug/" : ""))[0] &&
        ((s = e.querySelectorAll('script[type="text/partytown"]')),
        i != t
          ? i.dispatchEvent(new CustomEvent("pt1", { detail: t }))
          : ((d = setTimeout(w, 1e4)),
            e.addEventListener("pt0", f),
            r
              ? h(1)
              : n.serviceWorker
                ? n.serviceWorker
                    .register(a + (o.swPath || "partytown-sw.js"), { scope: a })
                    .then(function (t) {
                      t.active
                        ? h()
                        : t.installing &&
                          t.installing.addEventListener(
                            "statechange",
                            function (t) {
                              "activated" == t.target.state && h();
                            },
                          );
                    }, console.error)
                : w())));
  }
  function h(t) {
    (c = e.createElement(t ? "script" : "iframe")),
      t ||
        (c.setAttribute(
          "style",
          "display:block;width:0;height:0;border:0;visibility:hidden",
        ),
        c.setAttribute("aria-hidden", !0)),
      (c.src =
        a +
        "partytown-" +
        (t ? "atomics.js?v=0.5.4" : "sandbox-sw.html?" + Date.now())),
      e.body.appendChild(c);
  }
  function w(t, n) {
    for (f(), t = 0; t < s.length; t++)
      ((n = e.createElement("script")).innerHTML = s[t].innerHTML),
        e.head.appendChild(n);
    c && c.parentNode.removeChild(c);
  }
  function f() {
    clearTimeout(d);
  }
  (o = t.partytown || {}),
    i == t &&
      (o.forward || []).map(function (e) {
        (p = t),
          e.split(".").map(function (e, n, i) {
            p = p[i[n]] =
              n + 1 < i.length
                ? "push" == i[n + 1]
                  ? []
                  : p[i[n]] || {}
                : function () {
                    (t._ptf = t._ptf || []).push(i, arguments);
                  };
          });
      }),
    "complete" == e.readyState
      ? u()
      : (t.addEventListener("DOMContentLoaded", u),
        t.addEventListener("load", u));
})(window, document, navigator, top, window.crossOriginIsolated);
