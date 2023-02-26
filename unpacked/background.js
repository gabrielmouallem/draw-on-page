chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        if (!document.getElementById("extension_root")) {
          const container = document.createElement("div");
          container.id = "extension_root";
          document.body.appendChild(container);

          function nf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i && Object.defineProperty(e, l, i.get ? i : { enumerable: !0, get: () => r[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? (i.credentials = "include") : l.crossOrigin === "anonymous" ? (i.credentials = "omit") : (i.credentials = "same-origin"), i;
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function rf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gi = {},
  lf = {
    get exports() {
      return gi;
    },
    set exports(e) {
      gi = e;
    },
  },
  El = {},
  ce = {},
  of = {
    get exports() {
      return ce;
    },
    set exports(e) {
      ce = e;
    },
  },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fr = Symbol.for("react.element"),
  uf = Symbol.for("react.portal"),
  sf = Symbol.for("react.fragment"),
  af = Symbol.for("react.strict_mode"),
  cf = Symbol.for("react.profiler"),
  ff = Symbol.for("react.provider"),
  df = Symbol.for("react.context"),
  pf = Symbol.for("react.forward_ref"),
  hf = Symbol.for("react.suspense"),
  mf = Symbol.for("react.memo"),
  vf = Symbol.for("react.lazy"),
  yu = Symbol.iterator;
function yf(e) {
  return e === null || typeof e != "object" ? null : ((e = (yu && e[yu]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Fs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ds = Object.assign,
  js = {};
function vn(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = js), (this.updater = n || Fs);
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function As() {}
As.prototype = vn.prototype;
function wo(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = js), (this.updater = n || Fs);
}
var ko = (wo.prototype = new As());
ko.constructor = wo;
Ds(ko, vn.prototype);
ko.isPureReactComponent = !0;
var gu = Array.isArray,
  $s = Object.prototype.hasOwnProperty,
  So = { current: null },
  Us = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null) for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t)) $s.call(t, r) && !Us.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: fr, type: e, key: i, ref: o, props: l, _owner: So.current };
}
function gf(e, t) {
  return { $$typeof: fr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function wf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wu = /\/+/g;
function Ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wf("" + e.key) : t.toString(36);
}
function jr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fr:
          case uf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Ql(o, 0) : r),
      gu(l)
        ? ((n = ""),
          e != null && (n = e.replace(wu, "$&/") + "/"),
          jr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null && (xo(l) && (l = gf(l, n + (!l.key || (o && o.key === l.key) ? "" : ("" + l.key).replace(wu, "$&/") + "/") + e)), t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), gu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Ql(i, u);
      o += jr(i, t, n, s, l);
    }
  else if (((s = yf(e)), typeof s == "function")) for (e = s.call(e), u = 0; !(i = e.next()).done; ) (i = i.value), (s = r + Ql(i, u++)), (o += jr(i, t, n, s, l));
  else if (i === "object") throw ((t = String(e)), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."));
  return o;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    jr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function kf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  Ar = { transition: null },
  Sf = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: Ar, ReactCurrentOwner: So };
O.Children = {
  map: wr,
  forEach: function (e, t, n) {
    wr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xo(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
O.Component = vn;
O.Fragment = sf;
O.Profiler = cf;
O.PureComponent = wo;
O.StrictMode = af;
O.Suspense = hf;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sf;
O.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ds({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((i = t.ref), (o = So.current)), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps;
    for (s in t) $s.call(t, s) && !Us.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: fr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
O.createContext = function (e) {
  return (e = { $$typeof: df, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: ff, _context: e }), (e.Consumer = e);
};
O.createElement = Vs;
O.createFactory = function (e) {
  var t = Vs.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: pf, render: e };
};
O.isValidElement = xo;
O.lazy = function (e) {
  return { $$typeof: vf, _payload: { _status: -1, _result: e }, _init: kf };
};
O.memo = function (e, t) {
  return { $$typeof: mf, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Ar.transition;
  Ar.transition = {};
  try {
    e();
  } finally {
    Ar.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
O.useContext = function (e) {
  return de.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
O.useId = function () {
  return de.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return de.current.useRef(e);
};
O.useState = function (e) {
  return de.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return de.current.useTransition();
};
O.version = "18.2.0";
(function (e) {
  e.exports = O;
})(of);
const Hs = rf(ce),
  ku = nf({ __proto__: null, default: Hs }, [ce]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xf = ce,
  Ef = Symbol.for("react.element"),
  Cf = Symbol.for("react.fragment"),
  _f = Object.prototype.hasOwnProperty,
  Pf = xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) _f.call(t, r) && !Nf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Ef, type: e, key: i, ref: o, props: l, _owner: Pf.current };
}
El.Fragment = Cf;
El.jsx = Bs;
El.jsxs = Bs;
(function (e) {
  e.exports = El;
})(lf);
const Wn = gi.jsx;
var wi = {},
  ki = {},
  Tf = {
    get exports() {
      return ki;
    },
    set exports(e) {
      ki = e;
    },
  },
  _e = {},
  Si = {},
  zf = {
    get exports() {
      return Si;
    },
    set exports(e) {
      Si = e;
    },
  },
  Ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, T) {
    var L = _.length;
    _.push(T);
    e: for (; 0 < L; ) {
      var Q = (L - 1) >>> 1,
        J = _[Q];
      if (0 < l(J, T)) (_[Q] = T), (_[L] = J), (L = Q);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      L = _.pop();
    if (L !== T) {
      _[0] = L;
      e: for (var Q = 0, J = _.length, yr = J >>> 1; Q < yr; ) {
        var _t = 2 * (Q + 1) - 1,
          Wl = _[_t],
          Pt = _t + 1,
          gr = _[Pt];
        if (0 > l(Wl, L)) Pt < J && 0 > l(gr, Wl) ? ((_[Q] = gr), (_[Pt] = L), (Q = Pt)) : ((_[Q] = Wl), (_[_t] = L), (Q = _t));
        else if (Pt < J && 0 > l(gr, L)) (_[Q] = gr), (_[Pt] = L), (Q = Pt);
        else break e;
      }
    }
    return T;
  }
  function l(_, T) {
    var L = _.sortIndex - T.sortIndex;
    return L !== 0 ? L : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    f = [],
    m = 1,
    p = null,
    h = 3,
    k = !1,
    g = !1,
    v = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var T = n(f); T !== null; ) {
      if (T.callback === null) r(f);
      else if (T.startTime <= _) r(f), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(f);
    }
  }
  function y(_) {
    if (((v = !1), d(_), !g))
      if (n(s) !== null) (g = !0), Hl(x);
      else {
        var T = n(f);
        T !== null && Bl(y, T.startTime - _);
      }
  }
  function x(_, T) {
    (g = !1), v && ((v = !1), c(P), (P = -1)), (k = !0);
    var L = h;
    try {
      for (d(T), p = n(s); p !== null && (!(p.expirationTime > T) || (_ && !Me())); ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var J = Q(p.expirationTime <= T);
          (T = e.unstable_now()), typeof J == "function" ? (p.callback = J) : p === n(s) && r(s), d(T);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var yr = !0;
      else {
        var _t = n(f);
        _t !== null && Bl(y, _t.startTime - T), (yr = !1);
      }
      return yr;
    } finally {
      (p = null), (h = L), (k = !1);
    }
  }
  var E = !1,
    S = null,
    P = -1,
    D = 5,
    z = -1;
  function Me() {
    return !(e.unstable_now() - z < D);
  }
  function kn() {
    if (S !== null) {
      var _ = e.unstable_now();
      z = _;
      var T = !0;
      try {
        T = S(!0, _);
      } finally {
        T ? Sn() : ((E = !1), (S = null));
      }
    } else E = !1;
  }
  var Sn;
  if (typeof a == "function")
    Sn = function () {
      a(kn);
    };
  else if (typeof MessageChannel < "u") {
    var vu = new MessageChannel(),
      tf = vu.port2;
    (vu.port1.onmessage = kn),
      (Sn = function () {
        tf.postMessage(null);
      });
  } else
    Sn = function () {
      N(kn, 0);
    };
  function Hl(_) {
    (S = _), E || ((E = !0), Sn());
  }
  function Bl(_, T) {
    P = N(function () {
      _(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || k || ((g = !0), Hl(x));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (D = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = h;
      }
      var L = h;
      h = T;
      try {
        return _();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var L = h;
      h = _;
      try {
        return T();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, L) {
      var Q = e.unstable_now();
      switch ((typeof L == "object" && L !== null ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Q + L : Q)) : (L = Q), _)) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (J = L + J), (_ = { id: m++, callback: T, priorityLevel: _, startTime: L, expirationTime: J, sortIndex: -1 }), L > Q ? ((_.sortIndex = L), t(f, _), n(s) === null && _ === n(f) && (v ? (c(P), (P = -1)) : (v = !0), Bl(y, L - Q))) : ((_.sortIndex = J), t(s, _), g || k || ((g = !0), Hl(x))), _;
    }),
    (e.unstable_shouldYield = Me),
    (e.unstable_wrapCallback = function (_) {
      var T = h;
      return function () {
        var L = h;
        h = T;
        try {
          return _.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(Ws);
(function (e) {
  e.exports = Ws;
})(zf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qs = ce,
  Ce = Si;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ks = new Set(),
  Qn = {};
function $t(e, t) {
  sn(e, t), sn(e + "Capture", t);
}
function sn(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) Ks.add(t[e]);
}
var et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  xi = Object.prototype.hasOwnProperty,
  Lf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Su = {},
  xu = {};
function Of(e) {
  return xi.call(xu, e) ? !0 : xi.call(Su, e) ? !1 : Lf.test(e) ? (xu[e] = !0) : ((Su[e] = !0), !1);
}
function Rf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mf(e, t, n, r) {
  if (t === null || typeof t > "u" || Rf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = l), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = o);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  re[e] = new pe(e, 0, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  re[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  re[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Eo = /[\-:]([a-z])/g;
function Co(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(Eo, Co);
  re[t] = new pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Eo, Co);
  re[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Eo, Co);
  re[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _o(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) && (Mf(t, n, l, r) && (n = null), r || l === null ? Of(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n) : ((t = l.attributeName), (r = l.attributeNamespace), n === null ? e.removeAttribute(t) : ((l = l.type), (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = Qs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kr = Symbol.for("react.element"),
  Ht = Symbol.for("react.portal"),
  Bt = Symbol.for("react.fragment"),
  Po = Symbol.for("react.strict_mode"),
  Ei = Symbol.for("react.profiler"),
  Ys = Symbol.for("react.provider"),
  Xs = Symbol.for("react.context"),
  No = Symbol.for("react.forward_ref"),
  Ci = Symbol.for("react.suspense"),
  _i = Symbol.for("react.suspense_list"),
  To = Symbol.for("react.memo"),
  ot = Symbol.for("react.lazy"),
  Gs = Symbol.for("react.offscreen"),
  Eu = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object" ? null : ((e = (Eu && e[Eu]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var B = Object.assign,
  Kl;
function On(e) {
  if (Kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Kl = (t && t[1]) || "";
    }
  return (
    `
` +
    Kl +
    e
  );
}
var Yl = !1;
function Xl(e, t) {
  if (!e || Yl) return "";
  Yl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Yl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function If(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xl(e.type, !1)), e;
    case 11:
      return (e = Xl(e.type.render, !1)), e;
    case 1:
      return (e = Xl(e.type, !0)), e;
    default:
      return "";
  }
}
function Pi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bt:
      return "Fragment";
    case Ht:
      return "Portal";
    case Ei:
      return "Profiler";
    case Po:
      return "StrictMode";
    case Ci:
      return "Suspense";
    case _i:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xs:
        return (e.displayName || "Context") + ".Consumer";
      case Ys:
        return (e._context.displayName || "Context") + ".Provider";
      case No:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case To:
        return (t = e.displayName || null), t !== null ? t : Pi(e.type) || "Memo";
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return Pi(e(t));
        } catch {}
    }
  return null;
}
function Ff(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pi(t);
    case 8:
      return t === Po ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Df(e) {
  var t = Zs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sr(e) {
  e._valueTracker || (e._valueTracker = Df(e));
}
function Js(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Zs(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ni(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kt(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function qs(e, t) {
  (t = t.checked), t != null && _o(e, "checked", t, !1);
}
function Ti(e, t) {
  qs(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? zi(e, t.type, n) : t.hasOwnProperty("defaultValue") && zi(e, t.type, kt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _u(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function zi(e, t, n) {
  (t !== "number" || qr(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function en(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) (l = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Pu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function bs(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Nu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ea(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Oi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ea(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xr,
  ta = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
  jf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  jf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function na(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e]) ? ("" + t).trim() : t + "px";
}
function ra(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = na(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Af = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ri(e, t) {
  if (t) {
    if (Af[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function Mi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ii = null;
function zo(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Fi = null,
  tn = null,
  nn = null;
function Tu(e) {
  if ((e = hr(e))) {
    if (typeof Fi != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Tl(t)), Fi(e.stateNode, e.type, t));
  }
}
function la(e) {
  tn ? (nn ? nn.push(e) : (nn = [e])) : (tn = e);
}
function ia() {
  if (tn) {
    var e = tn,
      t = nn;
    if (((nn = tn = null), Tu(e), t)) for (e = 0; e < t.length; e++) Tu(t[e]);
  }
}
function oa(e, t) {
  return e(t);
}
function ua() {}
var Gl = !1;
function sa(e, t, n) {
  if (Gl) return e(t, n);
  Gl = !0;
  try {
    return oa(e, t, n);
  } finally {
    (Gl = !1), (tn !== null || nn !== null) && (ua(), ia());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Tl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var Di = !1;
if (et)
  try {
    var En = {};
    Object.defineProperty(En, "passive", {
      get: function () {
        Di = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En);
  } catch {
    Di = !1;
  }
function $f(e, t, n, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (m) {
    this.onError(m);
  }
}
var Dn = !1,
  br = null,
  el = !1,
  ji = null,
  Uf = {
    onError: function (e) {
      (Dn = !0), (br = e);
    },
  };
function Vf(e, t, n, r, l, i, o, u, s) {
  (Dn = !1), (br = null), $f.apply(Uf, arguments);
}
function Hf(e, t, n, r, l, i, o, u, s) {
  if ((Vf.apply(this, arguments), Dn)) {
    if (Dn) {
      var f = br;
      (Dn = !1), (br = null);
    } else throw Error(w(198));
    el || ((el = !0), (ji = f));
  }
}
function Ut(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function aa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function zu(e) {
  if (Ut(e) !== e) throw Error(w(188));
}
function Bf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ut(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return zu(l), e;
        if (i === r) return zu(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function ca(e) {
  return (e = Bf(e)), e !== null ? fa(e) : null;
}
function fa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var da = Ce.unstable_scheduleCallback,
  Lu = Ce.unstable_cancelCallback,
  Wf = Ce.unstable_shouldYield,
  Qf = Ce.unstable_requestPaint,
  K = Ce.unstable_now,
  Kf = Ce.unstable_getCurrentPriorityLevel,
  Lo = Ce.unstable_ImmediatePriority,
  pa = Ce.unstable_UserBlockingPriority,
  tl = Ce.unstable_NormalPriority,
  Yf = Ce.unstable_LowPriority,
  ha = Ce.unstable_IdlePriority,
  Cl = null,
  Ke = null;
function Xf(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : Jf,
  Gf = Math.log,
  Zf = Math.LN2;
function Jf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gf(e) / Zf) | 0)) | 0;
}
var Er = 64,
  Cr = 4194304;
function Mn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function nl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Mn(u)) : ((i &= o), i !== 0 && (r = Mn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Mn(o)) : i !== 0 && (r = Mn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))) return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Ae(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function qf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Ae(i),
      u = 1 << o,
      s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = qf(u, t)) : s <= t && (e.expiredLanes |= u), (i &= ~u);
  }
}
function Ai(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ma() {
  var e = Er;
  return (Er <<= 1), !(Er & 4194240) && (Er = 64), e;
}
function Zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Ae(t)), (e[t] = n);
}
function ed(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ae(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Oo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ae(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function va(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ya,
  Ro,
  ga,
  wa,
  ka,
  $i = !1,
  _r = [],
  dt = null,
  pt = null,
  ht = null,
  Xn = new Map(),
  Gn = new Map(),
  st = [],
  td = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ou(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dt = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function Cn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }), t !== null && ((t = hr(t)), t !== null && Ro(t)), e) : ((e.eventSystemFlags |= r), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function nd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (dt = Cn(dt, e, t, n, r, l)), !0;
    case "dragenter":
      return (pt = Cn(pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ht = Cn(ht, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Xn.set(i, Cn(Xn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (i = l.pointerId), Gn.set(i, Cn(Gn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Sa(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = aa(n)), t !== null)) {
          (e.blockedOn = t),
            ka(e.priority, function () {
              ga(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ii = r), n.target.dispatchEvent(r), (Ii = null);
    } else return (t = hr(n)), t !== null && Ro(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ru(e, t, n) {
  $r(e) && n.delete(t);
}
function rd() {
  ($i = !1), dt !== null && $r(dt) && (dt = null), pt !== null && $r(pt) && (pt = null), ht !== null && $r(ht) && (ht = null), Xn.forEach(Ru), Gn.forEach(Ru);
}
function _n(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), $i || (($i = !0), Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, rd)));
}
function Zn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < _r.length) {
    _n(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (dt !== null && _n(dt, e), pt !== null && _n(pt, e), ht !== null && _n(ht, e), Xn.forEach(t), Gn.forEach(t), n = 0; n < st.length; n++) (r = st[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < st.length && ((n = st[0]), n.blockedOn === null); ) Sa(n), n.blockedOn === null && st.shift();
}
var rn = lt.ReactCurrentBatchConfig,
  rl = !0;
function ld(e, t, n, r) {
  var l = F,
    i = rn.transition;
  rn.transition = null;
  try {
    (F = 1), Mo(e, t, n, r);
  } finally {
    (F = l), (rn.transition = i);
  }
}
function id(e, t, n, r) {
  var l = F,
    i = rn.transition;
  rn.transition = null;
  try {
    (F = 4), Mo(e, t, n, r);
  } finally {
    (F = l), (rn.transition = i);
  }
}
function Mo(e, t, n, r) {
  if (rl) {
    var l = Ui(e, t, n, r);
    if (l === null) oi(e, t, r, ll, n), Ou(e, r);
    else if (nd(l, e, t, n, r)) r.stopPropagation();
    else if ((Ou(e, r), t & 4 && -1 < td.indexOf(e))) {
      for (; l !== null; ) {
        var i = hr(l);
        if ((i !== null && ya(i), (i = Ui(e, t, n, r)), i === null && oi(e, t, r, ll, n), i === l)) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else oi(e, t, r, null, n);
  }
}
var ll = null;
function Ui(e, t, n, r) {
  if (((ll = null), (e = zo(r)), (e = zt(e)), e !== null))
    if (((t = Ut(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = aa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ll = e), null;
}
function xa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kf()) {
        case Lo:
          return 1;
        case pa:
          return 4;
        case tl:
        case Yf:
          return 16;
        case ha:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  Io = null,
  Ur = null;
function Ea() {
  if (Ur) return Ur;
  var e,
    t = Io,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Ur = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Vr(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Pr() {
  return !0;
}
function Mu() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n), (this._targetInst = l), (this.type = r), (this.nativeEvent = i), (this.target = o), (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Pr : Mu), (this.isPropagationStopped = Mu), this;
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = Pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = Pr));
      },
      persist: function () {},
      isPersistent: Pr,
    }),
    t
  );
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fo = Pe(yn),
  pr = B({}, yn, { view: 0, detail: 0 }),
  od = Pe(pr),
  Jl,
  ql,
  Pn,
  _l = B({}, pr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Do,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? ((Jl = e.screenX - Pn.screenX), (ql = e.screenY - Pn.screenY)) : (ql = Jl = 0), (Pn = e)), Jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ql;
    },
  }),
  Iu = Pe(_l),
  ud = B({}, _l, { dataTransfer: 0 }),
  sd = Pe(ud),
  ad = B({}, pr, { relatedTarget: 0 }),
  bl = Pe(ad),
  cd = B({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fd = Pe(cd),
  dd = B({}, yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pd = Pe(dd),
  hd = B({}, yn, { data: 0 }),
  Fu = Pe(hd),
  md = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
  vd = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
  yd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function gd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yd[e]) ? !!t[e] : !1;
}
function Do() {
  return gd;
}
var wd = B({}, pr, {
    key: function (e) {
      if (e.key) {
        var t = md[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? ((e = Vr(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vd[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Do,
    charCode: function (e) {
      return e.type === "keypress" ? Vr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Vr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  kd = Pe(wd),
  Sd = B({}, _l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  Du = Pe(Sd),
  xd = B({}, pr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Do }),
  Ed = Pe(xd),
  Cd = B({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _d = Pe(Cd),
  Pd = B({}, _l, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Nd = Pe(Pd),
  Td = [9, 13, 27, 32],
  jo = et && "CompositionEvent" in window,
  jn = null;
et && "documentMode" in document && (jn = document.documentMode);
var zd = et && "TextEvent" in window && !jn,
  Ca = et && (!jo || (jn && 8 < jn && 11 >= jn)),
  ju = String.fromCharCode(32),
  Au = !1;
function _a(e, t) {
  switch (e) {
    case "keyup":
      return Td.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Pa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wt = !1;
function Ld(e, t) {
  switch (e) {
    case "compositionend":
      return Pa(t);
    case "keypress":
      return t.which !== 32 ? null : ((Au = !0), ju);
    case "textInput":
      return (e = t.data), e === ju && Au ? null : e;
    default:
      return null;
  }
}
function Od(e, t) {
  if (Wt) return e === "compositionend" || (!jo && _a(e, t)) ? ((e = Ea()), (Ur = Io = ct = null), (Wt = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ca && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function $u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rd[e.type] : t === "textarea";
}
function Na(e, t, n, r) {
  la(r), (t = il(t, "onChange")), 0 < t.length && ((n = new Fo("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var An = null,
  Jn = null;
function Md(e) {
  Aa(e, 0);
}
function Pl(e) {
  var t = Yt(e);
  if (Js(t)) return e;
}
function Id(e, t) {
  if (e === "change") return t;
}
var Ta = !1;
if (et) {
  var ei;
  if (et) {
    var ti = "oninput" in document;
    if (!ti) {
      var Uu = document.createElement("div");
      Uu.setAttribute("oninput", "return;"), (ti = typeof Uu.oninput == "function");
    }
    ei = ti;
  } else ei = !1;
  Ta = ei && (!document.documentMode || 9 < document.documentMode);
}
function Vu() {
  An && (An.detachEvent("onpropertychange", za), (Jn = An = null));
}
function za(e) {
  if (e.propertyName === "value" && Pl(Jn)) {
    var t = [];
    Na(t, Jn, e, zo(e)), sa(Md, t);
  }
}
function Fd(e, t, n) {
  e === "focusin" ? (Vu(), (An = t), (Jn = n), An.attachEvent("onpropertychange", za)) : e === "focusout" && Vu();
}
function Dd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Pl(Jn);
}
function jd(e, t) {
  if (e === "click") return Pl(t);
}
function Ad(e, t) {
  if (e === "input" || e === "change") return Pl(t);
}
function $d(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : $d;
function qn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!xi.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function Hu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bu(e, t) {
  var n = Hu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hu(n);
  }
}
function La(e, t) {
  return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? La(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function Oa() {
  for (var e = window, t = qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qr(e.document);
  }
  return t;
}
function Ao(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function Ud(e) {
  var t = Oa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && La(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ao(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)), !e.extend && i > r && ((l = r), (r = i), (i = l)), (l = Bu(n, i));
        var o = Bu(n, r);
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Vd = et && "documentMode" in document && 11 >= document.documentMode,
  Qt = null,
  Vi = null,
  $n = null,
  Hi = !1;
function Wu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hi || Qt == null || Qt !== qr(r) || ((r = Qt), "selectionStart" in r && Ao(r) ? (r = { start: r.selectionStart, end: r.selectionEnd }) : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })), ($n && qn($n, r)) || (($n = r), (r = il(Vi, "onSelect")), 0 < r.length && ((t = new Fo("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Qt))));
}
function Nr(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Kt = { animationend: Nr("Animation", "AnimationEnd"), animationiteration: Nr("Animation", "AnimationIteration"), animationstart: Nr("Animation", "AnimationStart"), transitionend: Nr("Transition", "TransitionEnd") },
  ni = {},
  Ra = {};
et && ((Ra = document.createElement("div").style), "AnimationEvent" in window || (delete Kt.animationend.animation, delete Kt.animationiteration.animation, delete Kt.animationstart.animation), "TransitionEvent" in window || delete Kt.transitionend.transition);
function Nl(e) {
  if (ni[e]) return ni[e];
  if (!Kt[e]) return e;
  var t = Kt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ra) return (ni[e] = t[n]);
  return e;
}
var Ma = Nl("animationend"),
  Ia = Nl("animationiteration"),
  Fa = Nl("animationstart"),
  Da = Nl("transitionend"),
  ja = new Map(),
  Qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xt(e, t) {
  ja.set(e, t), $t(t, [e]);
}
for (var ri = 0; ri < Qu.length; ri++) {
  var li = Qu[ri],
    Hd = li.toLowerCase(),
    Bd = li[0].toUpperCase() + li.slice(1);
  xt(Hd, "on" + Bd);
}
xt(Ma, "onAnimationEnd");
xt(Ia, "onAnimationIteration");
xt(Fa, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(Da, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
$t("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$t("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var In = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  Wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(In));
function Ku(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Hf(r, t, void 0, e), (e.currentTarget = null);
}
function Aa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Ku(l, u, f), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (((u = r[o]), (s = u.instance), (f = u.currentTarget), (u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Ku(l, u, f), (i = s);
        }
    }
  }
  if (el) throw ((e = ji), (el = !1), (ji = null), e);
}
function A(e, t) {
  var n = t[Yi];
  n === void 0 && (n = t[Yi] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($a(t, e, 2, !1), n.add(r));
}
function ii(e, t, n) {
  var r = 0;
  t && (r |= 4), $a(n, e, r, t);
}
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function bn(e) {
  if (!e[Tr]) {
    (e[Tr] = !0),
      Ks.forEach(function (n) {
        n !== "selectionchange" && (Wd.has(n) || ii(n, !1, e), ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || ((t[Tr] = !0), ii("selectionchange", !1, t));
  }
}
function $a(e, t, n, r) {
  switch (xa(t)) {
    case 1:
      var l = ld;
      break;
    case 4:
      l = id;
      break;
    default:
      l = Mo;
  }
  (n = l.bind(null, t, n, e)), (l = void 0), !Di || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0), r ? (l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0)) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function oi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if ((s === 3 || s === 4) && ((s = o.stateNode.containerInfo), s === l || (s.nodeType === 8 && s.parentNode === l))) return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = zt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  sa(function () {
    var f = i,
      m = zo(n),
      p = [];
    e: {
      var h = ja.get(e);
      if (h !== void 0) {
        var k = Fo,
          g = e;
        switch (e) {
          case "keypress":
            if (Vr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = kd;
            break;
          case "focusin":
            (g = "focus"), (k = bl);
            break;
          case "focusout":
            (g = "blur"), (k = bl);
            break;
          case "beforeblur":
          case "afterblur":
            k = bl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Iu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = sd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Ed;
            break;
          case Ma:
          case Ia:
          case Fa:
            k = fd;
            break;
          case Da:
            k = _d;
            break;
          case "scroll":
            k = od;
            break;
          case "wheel":
            k = Nd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = pd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Du;
        }
        var v = (t & 4) !== 0,
          N = !v && e === "scroll",
          c = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var a = f, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if ((d.tag === 5 && y !== null && ((d = y), c !== null && ((y = Yn(a, c)), y != null && v.push(er(a, y, d)))), N)) break;
          a = a.return;
        }
        0 < v.length && ((h = new k(h, g, null, n, m)), p.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (((h = e === "mouseover" || e === "pointerover"), (k = e === "mouseout" || e === "pointerout"), h && n !== Ii && (g = n.relatedTarget || n.fromElement) && (zt(g) || g[tt]))) break e;
        if ((k || h) && ((h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window), k ? ((g = n.relatedTarget || n.toElement), (k = f), (g = g ? zt(g) : null), g !== null && ((N = Ut(g)), g !== N || (g.tag !== 5 && g.tag !== 6)) && (g = null)) : ((k = null), (g = f)), k !== g)) {
          if (((v = Iu), (y = "onMouseLeave"), (c = "onMouseEnter"), (a = "mouse"), (e === "pointerout" || e === "pointerover") && ((v = Du), (y = "onPointerLeave"), (c = "onPointerEnter"), (a = "pointer")), (N = k == null ? h : Yt(k)), (d = g == null ? h : Yt(g)), (h = new v(y, a + "leave", k, n, m)), (h.target = N), (h.relatedTarget = d), (y = null), zt(m) === f && ((v = new v(c, a + "enter", g, n, m)), (v.target = d), (v.relatedTarget = N), (y = v)), (N = y), k && g))
            t: {
              for (v = k, c = g, a = 0, d = v; d; d = Vt(d)) a++;
              for (d = 0, y = c; y; y = Vt(y)) d++;
              for (; 0 < a - d; ) (v = Vt(v)), a--;
              for (; 0 < d - a; ) (c = Vt(c)), d--;
              for (; a--; ) {
                if (v === c || (c !== null && v === c.alternate)) break t;
                (v = Vt(v)), (c = Vt(c));
              }
              v = null;
            }
          else v = null;
          k !== null && Yu(p, h, k, v, !1), g !== null && N !== null && Yu(p, N, g, v, !0);
        }
      }
      e: {
        if (((h = f ? Yt(f) : window), (k = h.nodeName && h.nodeName.toLowerCase()), k === "select" || (k === "input" && h.type === "file"))) var x = Id;
        else if ($u(h))
          if (Ta) x = Ad;
          else {
            x = Dd;
            var E = Fd;
          }
        else (k = h.nodeName) && k.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (x = jd);
        if (x && (x = x(e, f))) {
          Na(p, x, n, m);
          break e;
        }
        E && E(e, h, f), e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && zi(h, "number", h.value);
      }
      switch (((E = f ? Yt(f) : window), e)) {
        case "focusin":
          ($u(E) || E.contentEditable === "true") && ((Qt = E), (Vi = f), ($n = null));
          break;
        case "focusout":
          $n = Vi = Qt = null;
          break;
        case "mousedown":
          Hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hi = !1), Wu(p, n, m);
          break;
        case "selectionchange":
          if (Vd) break;
        case "keydown":
        case "keyup":
          Wu(p, n, m);
      }
      var S;
      if (jo)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else Wt ? _a(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ca && n.locale !== "ko" && (Wt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Wt && (S = Ea()) : ((ct = m), (Io = "value" in ct ? ct.value : ct.textContent), (Wt = !0))), (E = il(f, P)), 0 < E.length && ((P = new Fu(P, e, null, n, m)), p.push({ event: P, listeners: E }), S ? (P.data = S) : ((S = Pa(n)), S !== null && (P.data = S)))), (S = zd ? Ld(e, n) : Od(e, n)) && ((f = il(f, "onBeforeInput")), 0 < f.length && ((m = new Fu("onBeforeInput", "beforeinput", null, n, m)), p.push({ event: m, listeners: f }), (m.data = S)));
    }
    Aa(p, t);
  });
}
function er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 && i !== null && ((l = i), (i = Yn(e, n)), i != null && r.unshift(er(e, i, l)), (i = Yn(e, t)), i != null && r.push(er(e, i, l))), (e = e.return);
  }
  return r;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && ((u = f), l ? ((s = Yn(n, i)), s != null && o.unshift(er(n, s, u))) : l || ((s = Yn(n, i)), s != null && o.push(er(n, s, u)))), (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Qd = /\r\n?/g,
  Kd = /\u0000|\uFFFD/g;
function Xu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qd,
      `
`
    )
    .replace(Kd, "");
}
function zr(e, t, n) {
  if (((t = Xu(t)), Xu(e) !== t && n)) throw Error(w(425));
}
function ol() {}
var Bi = null,
  Wi = null;
function Qi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null);
}
var Ki = typeof setTimeout == "function" ? setTimeout : void 0,
  Yd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gu = typeof Promise == "function" ? Promise : void 0,
  Xd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gu < "u"
      ? function (e) {
          return Gu.resolve(null).then(e).catch(Gd);
        }
      : Ki;
function Gd(e) {
  setTimeout(function () {
    throw e;
  });
}
function ui(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Zn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Zn(t);
}
function mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gn = Math.random().toString(36).slice(2),
  Qe = "__reactFiber$" + gn,
  tr = "__reactProps$" + gn,
  tt = "__reactContainer$" + gn,
  Yi = "__reactEvents$" + gn,
  Zd = "__reactListeners$" + gn,
  Jd = "__reactHandles$" + gn;
function zt(e) {
  var t = e[Qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[tt] || n[Qe])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Zu(e); e !== null; ) {
          if ((n = e[Qe])) return n;
          e = Zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hr(e) {
  return (e = e[Qe] || e[tt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Tl(e) {
  return e[tr] || null;
}
var Xi = [],
  Xt = -1;
function Et(e) {
  return { current: e };
}
function $(e) {
  0 > Xt || ((e.current = Xi[Xt]), (Xi[Xt] = null), Xt--);
}
function j(e, t) {
  Xt++, (Xi[Xt] = e.current), (e.current = t);
}
var St = {},
  se = Et(St),
  ve = Et(!1),
  It = St;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = l)), l;
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function ul() {
  $(ve), $(se);
}
function Ju(e, t, n) {
  if (se.current !== St) throw Error(w(168));
  j(se, t), j(ve, n);
}
function Ua(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Ff(e) || "Unknown", l));
  return B({}, n, r);
}
function sl(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St), (It = se.current), j(se, e), j(ve, ve.current), !0;
}
function qu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? ((e = Ua(e, t, It)), (r.__reactInternalMemoizedMergedChildContext = e), $(ve), $(se), j(se, e)) : $(ve), j(ve, n);
}
var Ze = null,
  zl = !1,
  si = !1;
function Va(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
function qd(e) {
  (zl = !0), Va(e);
}
function Ct() {
  if (!si && Ze !== null) {
    si = !0;
    var e = 0,
      t = F;
    try {
      var n = Ze;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ze = null), (zl = !1);
    } catch (l) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), da(Lo, Ct), l);
    } finally {
      (F = t), (si = !1);
    }
  }
  return null;
}
var Gt = [],
  Zt = 0,
  al = null,
  cl = 0,
  Ne = [],
  Te = 0,
  Ft = null,
  Je = 1,
  qe = "";
function Nt(e, t) {
  (Gt[Zt++] = cl), (Gt[Zt++] = al), (al = e), (cl = t);
}
function Ha(e, t, n) {
  (Ne[Te++] = Je), (Ne[Te++] = qe), (Ne[Te++] = Ft), (Ft = e);
  var r = Je;
  e = qe;
  var l = 32 - Ae(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ae(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)), (r >>= o), (l -= o), (Je = (1 << (32 - Ae(t) + l)) | (n << l) | r), (qe = i + e);
  } else (Je = (1 << i) | (n << l) | r), (qe = e);
}
function $o(e) {
  e.return !== null && (Nt(e, 1), Ha(e, 1, 0));
}
function Uo(e) {
  for (; e === al; ) (al = Gt[--Zt]), (Gt[Zt] = null), (cl = Gt[--Zt]), (Gt[Zt] = null);
  for (; e === Ft; ) (Ft = Ne[--Te]), (Ne[Te] = null), (qe = Ne[--Te]), (Ne[Te] = null), (Je = Ne[--Te]), (Ne[Te] = null);
}
var xe = null,
  Se = null,
  U = !1,
  je = null;
function Ba(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function bu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (xe = e), (Se = mt(t.firstChild)), !0) : !1;
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (xe = e), (Se = null), !0) : !1;
    case 13:
      return (t = t.nodeType !== 8 ? null : t), t !== null ? ((n = Ft !== null ? { id: Je, overflow: qe } : null), (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }), (n = ze(18, null, null, 0)), (n.stateNode = t), (n.return = e), (e.child = n), (xe = e), (Se = null), !0) : !1;
    default:
      return !1;
  }
}
function Gi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zi(e) {
  if (U) {
    var t = Se;
    if (t) {
      var n = t;
      if (!bu(e, t)) {
        if (Gi(e)) throw Error(w(418));
        t = mt(n.nextSibling);
        var r = xe;
        t && bu(e, t) ? Ba(r, n) : ((e.flags = (e.flags & -4097) | 2), (U = !1), (xe = e));
      }
    } else {
      if (Gi(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (xe = e);
    }
  }
}
function es(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xe = e;
}
function Lr(e) {
  if (e !== xe) return !1;
  if (!U) return es(e), (U = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !Qi(e.type, e.memoizedProps))), t && (t = Se))) {
    if (Gi(e)) throw (Wa(), Error(w(418)));
    for (; t; ) Ba(e, t), (t = mt(t.nextSibling));
  }
  if ((es(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = xe ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function Wa() {
  for (var e = Se; e; ) e = mt(e.nextSibling);
}
function cn() {
  (Se = xe = null), (U = !1);
}
function Vo(e) {
  je === null ? (je = [e]) : je.push(e);
}
var bd = lt.ReactCurrentBatchConfig;
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fl = Et(null),
  dl = null,
  Jt = null,
  Ho = null;
function Bo() {
  Ho = Jt = dl = null;
}
function Wo(e) {
  var t = fl.current;
  $(fl), (e._currentValue = t);
}
function Ji(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
    e = e.return;
  }
}
function ln(e, t) {
  (dl = e), (Ho = Jt = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), (e.firstContext = null));
}
function Oe(e) {
  var t = e._currentValue;
  if (Ho !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jt === null)) {
      if (dl === null) throw Error(w(308));
      (Jt = e), (dl.dependencies = { lanes: 0, firstContext: e });
    } else Jt = Jt.next = e;
  return t;
}
var Lt = null;
function Qo(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function Qa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? ((n.next = n), Qo(t)) : ((n.next = l.next), (l.next = n)), (t.interleaved = n), nt(e, r);
}
function nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function Ko(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ka(e, t) {
  (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function be(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), nt(e, n);
  }
  return (l = r.interleaved), l === null ? ((t.next = t), Qo(r)) : ((t.next = l.next), (l.next = t)), (r.interleaved = t), nt(e, n);
}
function Hr(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oo(e, n);
  }
}
function ts(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function pl(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), o === null ? (i = f) : (o.next = f), (o = s);
    var m = e.alternate;
    m !== null && ((m = m.updateQueue), (u = m.lastBaseUpdate), u !== o && (u === null ? (m.firstBaseUpdate = f) : (u.next = f), (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (m = f = s = null), (u = i);
    do {
      var h = u.lane,
        k = u.eventTime;
      if ((r & h) === h) {
        m !== null && (m = m.next = { eventTime: k, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var g = e,
            v = u;
          switch (((h = t), (k = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                p = g.call(k, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (((g = v.payload), (h = typeof g == "function" ? g.call(k, p, h) : g), h == null)) break e;
              p = B({}, p, h);
              break e;
            case 2:
              ut = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && ((e.flags |= 64), (h = l.effects), h === null ? (l.effects = [u]) : h.push(u));
      } else (k = { eventTime: k, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }), m === null ? ((f = m = k), (s = p)) : (m = m.next = k), (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u), (u = h.next), (h.next = null), (l.lastBaseUpdate = h), (l.shared.pending = null);
      }
    } while (1);
    if ((m === null && (s = p), (l.baseState = s), (l.firstBaseUpdate = f), (l.lastBaseUpdate = m), (t = l.shared.interleaved), t !== null)) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (jt |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function ns(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function")) throw Error(w(191, l));
        l.call(r);
      }
    }
}
var Ya = new Qs.Component().refs;
function qi(e, t, n, r) {
  (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : B({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ll = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ut(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = gt(e),
      i = be(r, l);
    (i.payload = t), n != null && (i.callback = n), (t = vt(e, i, l)), t !== null && ($e(t, e, l, r), Hr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = gt(e),
      i = be(r, l);
    (i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = vt(e, i, l)), t !== null && ($e(t, e, l, r), Hr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = gt(e),
      l = be(n, r);
    (l.tag = 2), t != null && (l.callback = t), (t = vt(e, l, r)), t !== null && ($e(t, e, r, n), Hr(t, e, r));
  },
};
function rs(e, t, n, r, l, i, o) {
  return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, i) : !0;
}
function Xa(e, t, n) {
  var r = !1,
    l = St,
    i = t.contextType;
  return typeof i == "object" && i !== null ? (i = Oe(i)) : ((l = ye(t) ? It : se.current), (r = t.contextTypes), (i = (r = r != null) ? an(e, l) : St)), (t = new t(n, i)), (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null), (t.updater = Ll), (e.stateNode = t), (t._reactInternals = e), r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = i)), t;
}
function ls(e, t, n, r) {
  (e = t.state), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ll.enqueueReplaceState(t, t.state, null);
}
function bi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ya), Ko(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (l.context = Oe(i)) : ((i = ye(t) ? It : se.current), (l.context = an(e, i))), (l.state = e.memoizedState), (i = t.getDerivedStateFromProps), typeof i == "function" && (qi(e, t, i, n), (l.state = e.memoizedState)), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") || ((t = l.state), typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ll.enqueueReplaceState(l, l.state, null), pl(e, n, l, r), (l.state = e.memoizedState)), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === Ya && (u = l.refs = {}), o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Or(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function is(e) {
  var t = e._init;
  return t(e._payload);
}
function Ga(e) {
  function t(c, a) {
    if (e) {
      var d = c.deletions;
      d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; ) a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = wt(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function i(c, a, d) {
    return (c.index = d), e ? ((d = c.alternate), d !== null ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d) : ((c.flags |= 2), a)) : ((c.flags |= 1048576), a);
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, a, d, y) {
    return a === null || a.tag !== 6 ? ((a = mi(d, c.mode, y)), (a.return = c), a) : ((a = l(a, d)), (a.return = c), a);
  }
  function s(c, a, d, y) {
    var x = d.type;
    return x === Bt ? m(c, a, d.props.children, y, d.key) : a !== null && (a.elementType === x || (typeof x == "object" && x !== null && x.$$typeof === ot && is(x) === a.type)) ? ((y = l(a, d.props)), (y.ref = Nn(c, a, d)), (y.return = c), y) : ((y = Xr(d.type, d.key, d.props, null, c.mode, y)), (y.ref = Nn(c, a, d)), (y.return = c), y);
  }
  function f(c, a, d, y) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? ((a = vi(d, c.mode, y)), (a.return = c), a) : ((a = l(a, d.children || [])), (a.return = c), a);
  }
  function m(c, a, d, y, x) {
    return a === null || a.tag !== 7 ? ((a = Mt(d, c.mode, y, x)), (a.return = c), a) : ((a = l(a, d)), (a.return = c), a);
  }
  function p(c, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number") return (a = mi("" + a, c.mode, d)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case kr:
          return (d = Xr(a.type, a.key, a.props, null, c.mode, d)), (d.ref = Nn(c, null, a)), (d.return = c), d;
        case Ht:
          return (a = vi(a, c.mode, d)), (a.return = c), a;
        case ot:
          var y = a._init;
          return p(c, y(a._payload), d);
      }
      if (Rn(a) || xn(a)) return (a = Mt(a, c.mode, d, null)), (a.return = c), a;
      Or(c, a);
    }
    return null;
  }
  function h(c, a, d, y) {
    var x = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number") return x !== null ? null : u(c, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case kr:
          return d.key === x ? s(c, a, d, y) : null;
        case Ht:
          return d.key === x ? f(c, a, d, y) : null;
        case ot:
          return (x = d._init), h(c, a, x(d._payload), y);
      }
      if (Rn(d) || xn(d)) return x !== null ? null : m(c, a, d, y, null);
      Or(c, d);
    }
    return null;
  }
  function k(c, a, d, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number") return (c = c.get(d) || null), u(a, c, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case kr:
          return (c = c.get(y.key === null ? d : y.key) || null), s(a, c, y, x);
        case Ht:
          return (c = c.get(y.key === null ? d : y.key) || null), f(a, c, y, x);
        case ot:
          var E = y._init;
          return k(c, a, d, E(y._payload), x);
      }
      if (Rn(y) || xn(y)) return (c = c.get(d) || null), m(a, c, y, x, null);
      Or(a, y);
    }
    return null;
  }
  function g(c, a, d, y) {
    for (var x = null, E = null, S = a, P = (a = 0), D = null; S !== null && P < d.length; P++) {
      S.index > P ? ((D = S), (S = null)) : (D = S.sibling);
      var z = h(c, S, d[P], y);
      if (z === null) {
        S === null && (S = D);
        break;
      }
      e && S && z.alternate === null && t(c, S), (a = i(z, a, P)), E === null ? (x = z) : (E.sibling = z), (E = z), (S = D);
    }
    if (P === d.length) return n(c, S), U && Nt(c, P), x;
    if (S === null) {
      for (; P < d.length; P++) (S = p(c, d[P], y)), S !== null && ((a = i(S, a, P)), E === null ? (x = S) : (E.sibling = S), (E = S));
      return U && Nt(c, P), x;
    }
    for (S = r(c, S); P < d.length; P++) (D = k(S, c, P, d[P], y)), D !== null && (e && D.alternate !== null && S.delete(D.key === null ? P : D.key), (a = i(D, a, P)), E === null ? (x = D) : (E.sibling = D), (E = D));
    return (
      e &&
        S.forEach(function (Me) {
          return t(c, Me);
        }),
      U && Nt(c, P),
      x
    );
  }
  function v(c, a, d, y) {
    var x = xn(d);
    if (typeof x != "function") throw Error(w(150));
    if (((d = x.call(d)), d == null)) throw Error(w(151));
    for (var E = (x = null), S = a, P = (a = 0), D = null, z = d.next(); S !== null && !z.done; P++, z = d.next()) {
      S.index > P ? ((D = S), (S = null)) : (D = S.sibling);
      var Me = h(c, S, z.value, y);
      if (Me === null) {
        S === null && (S = D);
        break;
      }
      e && S && Me.alternate === null && t(c, S), (a = i(Me, a, P)), E === null ? (x = Me) : (E.sibling = Me), (E = Me), (S = D);
    }
    if (z.done) return n(c, S), U && Nt(c, P), x;
    if (S === null) {
      for (; !z.done; P++, z = d.next()) (z = p(c, z.value, y)), z !== null && ((a = i(z, a, P)), E === null ? (x = z) : (E.sibling = z), (E = z));
      return U && Nt(c, P), x;
    }
    for (S = r(c, S); !z.done; P++, z = d.next()) (z = k(S, c, P, z.value, y)), z !== null && (e && z.alternate !== null && S.delete(z.key === null ? P : z.key), (a = i(z, a, P)), E === null ? (x = z) : (E.sibling = z), (E = z));
    return (
      e &&
        S.forEach(function (kn) {
          return t(c, kn);
        }),
      U && Nt(c, P),
      x
    );
  }
  function N(c, a, d, y) {
    if ((typeof d == "object" && d !== null && d.type === Bt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null)) {
      switch (d.$$typeof) {
        case kr:
          e: {
            for (var x = d.key, E = a; E !== null; ) {
              if (E.key === x) {
                if (((x = d.type), x === Bt)) {
                  if (E.tag === 7) {
                    n(c, E.sibling), (a = l(E, d.props.children)), (a.return = c), (c = a);
                    break e;
                  }
                } else if (E.elementType === x || (typeof x == "object" && x !== null && x.$$typeof === ot && is(x) === E.type)) {
                  n(c, E.sibling), (a = l(E, d.props)), (a.ref = Nn(c, E, d)), (a.return = c), (c = a);
                  break e;
                }
                n(c, E);
                break;
              } else t(c, E);
              E = E.sibling;
            }
            d.type === Bt ? ((a = Mt(d.props.children, c.mode, y, d.key)), (a.return = c), (c = a)) : ((y = Xr(d.type, d.key, d.props, null, c.mode, y)), (y.ref = Nn(c, a, d)), (y.return = c), (c = y));
          }
          return o(c);
        case Ht:
          e: {
            for (E = d.key; a !== null; ) {
              if (a.key === E)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(c, a.sibling), (a = l(a, d.children || [])), (a.return = c), (c = a);
                  break e;
                } else {
                  n(c, a);
                  break;
                }
              else t(c, a);
              a = a.sibling;
            }
            (a = vi(d, c.mode, y)), (a.return = c), (c = a);
          }
          return o(c);
        case ot:
          return (E = d._init), N(c, a, E(d._payload), y);
      }
      if (Rn(d)) return g(c, a, d, y);
      if (xn(d)) return v(c, a, d, y);
      Or(c, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number" ? ((d = "" + d), a !== null && a.tag === 6 ? (n(c, a.sibling), (a = l(a, d)), (a.return = c), (c = a)) : (n(c, a), (a = mi(d, c.mode, y)), (a.return = c), (c = a)), o(c)) : n(c, a);
  }
  return N;
}
var fn = Ga(!0),
  Za = Ga(!1),
  mr = {},
  Ye = Et(mr),
  nr = Et(mr),
  rr = Et(mr);
function Ot(e) {
  if (e === mr) throw Error(w(174));
  return e;
}
function Yo(e, t) {
  switch ((j(rr, t), j(nr, e), j(Ye, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Oi(t, e));
  }
  $(Ye), j(Ye, t);
}
function dn() {
  $(Ye), $(nr), $(rr);
}
function Ja(e) {
  Ot(rr.current);
  var t = Ot(Ye.current),
    n = Oi(t, e.type);
  t !== n && (j(nr, e), j(Ye, n));
}
function Xo(e) {
  nr.current === e && ($(Ye), $(nr));
}
var V = Et(0);
function hl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ai = [];
function Go() {
  for (var e = 0; e < ai.length; e++) ai[e]._workInProgressVersionPrimary = null;
  ai.length = 0;
}
var Br = lt.ReactCurrentDispatcher,
  ci = lt.ReactCurrentBatchConfig,
  Dt = 0,
  H = null,
  G = null,
  q = null,
  ml = !1,
  Un = !1,
  lr = 0,
  ep = 0;
function le() {
  throw Error(w(321));
}
function Zo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function Jo(e, t, n, r, l, i) {
  if (((Dt = i), (H = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (Br.current = e === null || e.memoizedState === null ? lp : ip), (e = n(r, l)), Un)) {
    i = 0;
    do {
      if (((Un = !1), (lr = 0), 25 <= i)) throw Error(w(301));
      (i += 1), (q = G = null), (t.updateQueue = null), (Br.current = op), (e = n(r, l));
    } while (Un);
  }
  if (((Br.current = vl), (t = G !== null && G.next !== null), (Dt = 0), (q = G = H = null), (ml = !1), t)) throw Error(w(300));
  return e;
}
function qo() {
  var e = lr !== 0;
  return (lr = 0), e;
}
function He() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? (H.memoizedState = q = e) : (q = q.next = e), q;
}
function Re() {
  if (G === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? H.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(w(310));
    (G = e), (e = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }), q === null ? (H.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fi(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      f = i;
    do {
      var m = f.lane;
      if ((Dt & m) === m) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var p = { lane: m, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null };
        s === null ? ((u = s = p), (o = r)) : (s = s.next = p), (H.lanes |= m), (jt |= m);
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? (o = r) : (s.next = u), Ue(r, t.memoizedState) || (me = !0), (t.memoizedState = r), (t.baseState = o), (t.baseQueue = s), (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (H.lanes |= i), (jt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function di(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ue(i, t.memoizedState) || (me = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
  }
  return [i, r];
}
function qa() {}
function ba(e, t) {
  var n = H,
    r = Re(),
    l = t(),
    i = !Ue(r.memoizedState, l);
  if ((i && ((r.memoizedState = l), (me = !0)), (r = r.queue), bo(nc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))) {
    if (((n.flags |= 2048), or(9, tc.bind(null, n, r, l, t), void 0, null), b === null)) throw Error(w(349));
    Dt & 30 || ec(n, t, l);
  }
  return l;
}
function ec(e, t, n) {
  (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = H.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function tc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rc(t) && lc(e);
}
function nc(e, t, n) {
  return n(function () {
    rc(t) && lc(e);
  });
}
function rc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function lc(e) {
  var t = nt(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function os(e) {
  var t = He();
  return typeof e == "function" && (e = e()), (t.memoizedState = t.baseState = e), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ir, lastRenderedState: e }), (t.queue = e), (e = e.dispatch = rp.bind(null, H, e)), [t.memoizedState, e];
}
function or(e, t, n, r) {
  return (e = { tag: e, create: t, destroy: n, deps: r, next: null }), (t = H.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.lastEffect = e.next = e)) : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))), e;
}
function ic() {
  return Re().memoizedState;
}
function Wr(e, t, n, r) {
  var l = He();
  (H.flags |= e), (l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ol(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((i = o.destroy), r !== null && Zo(r, o.deps))) {
      l.memoizedState = or(t, n, i, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = or(1 | t, n, i, r));
}
function us(e, t) {
  return Wr(8390656, 8, e, t);
}
function bo(e, t) {
  return Ol(2048, 8, e, t);
}
function oc(e, t) {
  return Ol(4, 2, e, t);
}
function uc(e, t) {
  return Ol(4, 4, e, t);
}
function sc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ac(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Ol(4, 4, sc.bind(null, t, e), n);
}
function eu() {}
function cc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function fc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function dc(e, t, n) {
  return Dt & 21 ? (Ue(n, t) || ((n = ma()), (H.lanes |= n), (jt |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function tp(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (ci.transition = r);
  }
}
function pc() {
  return Re().memoizedState;
}
function np(e, t, n) {
  var r = gt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), hc(e))) mc(t, n);
  else if (((n = Qa(e, t, n, r)), n !== null)) {
    var l = fe();
    $e(n, e, r, l), vc(n, t, r);
  }
}
function rp(e, t, n) {
  var r = gt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hc(e)) mc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ue(u, o))) {
          var s = t.interleaved;
          s === null ? ((l.next = l), Qo(t)) : ((l.next = s.next), (s.next = l)), (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qa(e, t, l, r)), n !== null && ((l = fe()), $e(n, e, r, l), vc(n, t, r));
  }
}
function hc(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function mc(e, t) {
  Un = ml = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function vc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oo(e, n);
  }
}
var vl = { readContext: Oe, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 },
  lp = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (He().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: us,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Wr(4194308, 4, sc.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Wr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = He();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = He();
      return (t = n !== void 0 ? n(t) : t), (r.memoizedState = r.baseState = t), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }), (r.queue = e), (e = e.dispatch = np.bind(null, H, e)), [r.memoizedState, e];
    },
    useRef: function (e) {
      var t = He();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: os,
    useDebugValue: eu,
    useDeferredValue: function (e) {
      return (He().memoizedState = e);
    },
    useTransition: function () {
      var e = os(!1),
        t = e[0];
      return (e = tp.bind(null, e[1])), (He().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = He();
      if (U) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(w(349));
        Dt & 30 || ec(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (l.queue = i), us(nc.bind(null, r, i, e), [e]), (r.flags |= 2048), or(9, tc.bind(null, r, i, n, t), void 0, null), n;
    },
    useId: function () {
      var e = He(),
        t = b.identifierPrefix;
      if (U) {
        var n = qe,
          r = Je;
        (n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = lr++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
      } else (n = ep++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: Oe,
    useCallback: cc,
    useContext: Oe,
    useEffect: bo,
    useImperativeHandle: ac,
    useInsertionEffect: oc,
    useLayoutEffect: uc,
    useMemo: fc,
    useReducer: fi,
    useRef: ic,
    useState: function () {
      return fi(ir);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = Re();
      return dc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(ir)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: qa,
    useSyncExternalStore: ba,
    useId: pc,
    unstable_isNewReconciler: !1,
  },
  op = {
    readContext: Oe,
    useCallback: cc,
    useContext: Oe,
    useEffect: bo,
    useImperativeHandle: ac,
    useInsertionEffect: oc,
    useLayoutEffect: uc,
    useMemo: fc,
    useReducer: di,
    useRef: ic,
    useState: function () {
      return di(ir);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = Re();
      return G === null ? (t.memoizedState = e) : dc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = di(ir)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: qa,
    useSyncExternalStore: ba,
    useId: pc,
    unstable_isNewReconciler: !1,
  };
function pn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += If(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function pi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function eo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var up = typeof WeakMap == "function" ? WeakMap : Map;
function yc(e, t, n) {
  (n = be(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gl || ((gl = !0), (co = r)), eo(e, t);
    }),
    n
  );
}
function gc(e, t, n) {
  (n = be(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        eo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        eo(e, t), typeof r != "function" && (yt === null ? (yt = new Set([this])) : yt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }),
    n
  );
}
function ss(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new up();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Sp.bind(null, e, t, n)), t.then(e, e));
}
function as(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cs(e, t, n, r, l) {
  return e.mode & 1 ? ((e.flags |= 65536), (e.lanes = l), e) : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = be(-1, 1)), (t.tag = 2), vt(n, t, 1))), (n.lanes |= 1)), e);
}
var sp = lt.ReactCurrentOwner,
  me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Za(t, null, n, r) : fn(t, e.child, n, r);
}
function fs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return ln(t, l), (r = Jo(e, t, n, r, i, l)), (n = qo()), e !== null && !me ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), rt(e, t, l)) : (U && n && $o(t), (t.flags |= 1), ae(e, t, r, l), t.child);
}
function ds(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !su(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? ((t.tag = 15), (t.type = i), wc(e, t, i, r, l)) : ((e = Xr(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : qn), n(o, r) && e.ref === t.ref)) return rt(e, t, l);
  }
  return (t.flags |= 1), (e = wt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function wc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (qn(i, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0)) e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), rt(e, t, l);
  }
  return to(e, t, n, r, l);
}
function kc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), j(bt, ke), (ke |= n);
    else {
      if (!(n & 1073741824)) return (e = i !== null ? i.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), j(bt, ke), (ke |= e), null;
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = i !== null ? i.baseLanes : n), j(bt, ke), (ke |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), j(bt, ke), (ke |= r);
  return ae(e, t, l, n), t.child;
}
function Sc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function to(e, t, n, r, l) {
  var i = ye(n) ? It : se.current;
  return (i = an(t, i)), ln(t, l), (n = Jo(e, t, n, r, i, l)), (r = qo()), e !== null && !me ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), rt(e, t, l)) : (U && r && $o(t), (t.flags |= 1), ae(e, t, n, l), t.child);
}
function ps(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    sl(t);
  } else i = !1;
  if ((ln(t, l), t.stateNode === null)) Qr(e, t), Xa(t, n, r), bi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      f = n.contextType;
    typeof f == "object" && f !== null ? (f = Oe(f)) : ((f = ye(n) ? It : se.current), (f = an(t, f)));
    var m = n.getDerivedStateFromProps,
      p = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    p || (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") || ((u !== r || s !== f) && ls(t, o, r, f)), (ut = !1);
    var h = t.memoizedState;
    (o.state = h), pl(t, r, o, l), (s = t.memoizedState), u !== r || h !== s || ve.current || ut ? (typeof m == "function" && (qi(t, n, m, r), (s = t.memoizedState)), (u = ut || rs(t, n, u, r, h, s, f)) ? (p || (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = s)), (o.props = r), (o.state = s), (o.context = f), (r = u)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode), Ka(e, t), (u = t.memoizedProps), (f = t.type === t.elementType ? u : Fe(t.type, u)), (o.props = f), (p = t.pendingProps), (h = o.context), (s = n.contextType), typeof s == "object" && s !== null ? (s = Oe(s)) : ((s = ye(n) ? It : se.current), (s = an(t, s)));
    var k = n.getDerivedStateFromProps;
    (m = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") || ((u !== p || h !== s) && ls(t, o, r, s)), (ut = !1), (h = t.memoizedState), (o.state = h), pl(t, r, o, l);
    var g = t.memoizedState;
    u !== p || h !== g || ve.current || ut ? (typeof k == "function" && (qi(t, n, k, r), (g = t.memoizedState)), (f = ut || rs(t, n, f, r, h, g, s) || !1) ? (m || (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || (u === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024), (t.memoizedProps = r), (t.memoizedState = g)), (o.props = r), (o.state = g), (o.context = s), (r = f)) : (typeof o.componentDidUpdate != "function" || (u === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024), (r = !1));
  }
  return no(e, t, n, r, i, l);
}
function no(e, t, n, r, l, i) {
  Sc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && qu(t, n, !1), rt(e, t, i);
  (r = t.stateNode), (sp.current = t);
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (t.flags |= 1), e !== null && o ? ((t.child = fn(t, e.child, null, i)), (t.child = fn(t, null, u, i))) : ae(e, t, u, i), (t.memoizedState = r.state), l && qu(t, n, !0), t.child;
}
function xc(e) {
  var t = e.stateNode;
  t.pendingContext ? Ju(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ju(e, t.context, !1), Yo(e, t.containerInfo);
}
function hs(e, t, n, r, l) {
  return cn(), Vo(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function lo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ec(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1), j(V, l & 1), e === null)) return Zi(t), (e = t.memoizedState), e !== null && ((e = e.dehydrated), e !== null) ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null) : ((o = r.children), (e = r.fallback), i ? ((r = t.mode), (i = t.child), (o = { mode: "hidden", children: o }), !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = o)) : (i = Il(o, r, 0, null)), (e = Mt(e, r, n, null)), (i.return = t), (e.return = t), (i.sibling = e), (t.child = i), (t.child.memoizedState = lo(n)), (t.memoizedState = ro), e) : tu(t, o));
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null))) return ap(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null)) : ((r = wt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)), u !== null ? (i = wt(u, i)) : ((i = Mt(i, o, n, null)), (i.flags |= 2)), (i.return = t), (r.return = t), (r.sibling = i), (t.child = r), (r = i), (i = t.child), (o = e.child.memoizedState), (o = o === null ? lo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }), (i.memoizedState = o), (i.childLanes = e.childLanes & ~n), (t.memoizedState = ro), r;
  }
  return (i = e.child), (e = i.sibling), (r = wt(i, { mode: "visible", children: r.children })), !(t.mode & 1) && (r.lanes = n), (r.return = t), (r.sibling = null), e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)), (t.child = r), (t.memoizedState = null), r;
}
function tu(e, t) {
  return (t = Il({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Rr(e, t, n, r) {
  return r !== null && Vo(r), fn(t, e.child, null, n), (e = tu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function ap(e, t, n, r, l, i, o) {
  if (n) return t.flags & 256 ? ((t.flags &= -257), (r = pi(Error(w(422)))), Rr(e, t, o, r)) : t.memoizedState !== null ? ((t.child = e.child), (t.flags |= 128), null) : ((i = r.fallback), (l = t.mode), (r = Il({ mode: "visible", children: r.children }, l, 0, null)), (i = Mt(i, l, o, null)), (i.flags |= 2), (r.return = t), (i.return = t), (r.sibling = i), (t.child = r), t.mode & 1 && fn(t, e.child, null, o), (t.child.memoizedState = lo(o)), (t.memoizedState = ro), i);
  if (!(t.mode & 1)) return Rr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(w(419))), (r = pi(i, r, void 0)), Rr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), me || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l), l !== 0 && l !== i.retryLane && ((i.retryLane = l), nt(e, l), $e(r, e, l, -1));
    }
    return uu(), (r = pi(Error(w(421)))), Rr(e, t, o, r);
  }
  return l.data === "$?" ? ((t.flags |= 128), (t.child = e.child), (t = xp.bind(null, e)), (l._reactRetry = t), null) : ((e = i.treeContext), (Se = mt(l.nextSibling)), (xe = t), (U = !0), (je = null), e !== null && ((Ne[Te++] = Je), (Ne[Te++] = qe), (Ne[Te++] = Ft), (Je = e.id), (qe = e.overflow), (Ft = t)), (t = tu(t, r.children)), (t.flags |= 4096), t);
}
function ms(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ji(e.return, t, n);
}
function hi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l }) : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = n), (i.tailMode = l));
}
function Cc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ae(e, t, r.children, n), (r = V.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ms(e, n, t);
        else if (e.tag === 19) ms(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((j(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) (e = n.alternate), e !== null && hl(e) === null && (l = n), (n = n.sibling);
        (n = l), n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)), hi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && hl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        hi(t, !0, n, null, i);
        break;
      case "together":
        hi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qr(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function rt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (jt |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cp(e, t, n) {
  switch (t.tag) {
    case 3:
      xc(t), cn();
      break;
    case 5:
      Ja(t);
      break;
    case 1:
      ye(t.type) && sl(t);
      break;
    case 4:
      Yo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      j(fl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null)) return r.dehydrated !== null ? (j(V, V.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? Ec(e, t, n) : (j(V, V.current & 1), (e = rt(e, t, n)), e !== null ? e.sibling : null);
      j(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Cc(e, t, n);
        t.flags |= 128;
      }
      if (((l = t.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), j(V, V.current), r)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kc(e, t, n);
  }
  return rt(e, t, n);
}
var _c, io, Pc, Nc;
_c = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
io = function () {};
Pc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ot(Ye.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Ni(e, l)), (r = Ni(e, r)), (i = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })), (r = B({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (l = Li(e, l)), (r = Li(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol);
    }
    Ri(n, r);
    var o;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Qn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (((u = l != null ? l[f] : void 0), r.hasOwnProperty(f) && s !== u && (s != null || u != null)))
        if (f === "style")
          if (u) {
            for (o in u) !u.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
            for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(f, n)), (n = s);
        else f === "dangerouslySetInnerHTML" ? ((s = s ? s.__html : void 0), (u = u ? u.__html : void 0), s != null && u !== s && (i = i || []).push(f, s)) : f === "children" ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Qn.hasOwnProperty(f) ? (s != null && f === "onScroll" && A("scroll", e), i || u === s || (i = [])) : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Nc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t) for (var l = e.child; l !== null; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags & 14680064), (r |= l.flags & 14680064), (l.return = e), (l = l.sibling);
  else for (l = e.child; l !== null; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fp(e, t, n) {
  var r = t.pendingProps;
  switch ((Uo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(t), null;
    case 1:
      return ye(t.type) && ul(), ie(t), null;
    case 3:
      return (r = t.stateNode), dn(), $(ve), $(se), Go(), r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (e === null || e.child === null) && (Lr(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), je !== null && (ho(je), (je = null)))), io(e, t), ie(t), null;
    case 5:
      Xo(t);
      var l = Ot(rr.current);
      if (((n = t.type), e !== null && t.stateNode != null)) Pc(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return ie(t), null;
        }
        if (((e = Ot(Ye.current)), Lr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Qe] = t), (r[tr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              A("cancel", r), A("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < In.length; l++) A(In[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              A("error", r), A("load", r);
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              Cu(r, i), A("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), A("invalid", r);
              break;
            case "textarea":
              Pu(r, i), A("invalid", r);
          }
          Ri(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children" ? (typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && zr(r.textContent, u, e), (l = ["children", u])) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && zr(r.textContent, u, e), (l = ["children", "" + u]))) : Qn.hasOwnProperty(o) && u != null && o === "onScroll" && A("scroll", r);
            }
          switch (n) {
            case "input":
              Sr(r), _u(r, i, !0);
              break;
            case "textarea":
              Sr(r), Nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ol);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument), e === "http://www.w3.org/1999/xhtml" && (e = ea(n)), e === "http://www.w3.org/1999/xhtml" ? (n === "script" ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild))) : typeof r.is == "string" ? (e = o.createElement(n, { is: r.is })) : ((e = o.createElement(n)), n === "select" && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))) : (e = o.createElementNS(e, n)), (e[Qe] = t), (e[tr] = r), _c(e, t, !1, !1), (t.stateNode = e);
          e: {
            switch (((o = Mi(n, r)), n)) {
              case "dialog":
                A("cancel", e), A("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < In.length; l++) A(In[l], e);
                l = r;
                break;
              case "source":
                A("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                A("error", e), A("load", e), (l = r);
                break;
              case "details":
                A("toggle", e), (l = r);
                break;
              case "input":
                Cu(e, r), (l = Ni(e, r)), A("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (l = B({}, r, { value: void 0 })), A("invalid", e);
                break;
              case "textarea":
                Pu(e, r), (l = Li(e, r)), A("invalid", e);
                break;
              default:
                l = r;
            }
            Ri(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style" ? ra(e, s) : i === "dangerouslySetInnerHTML" ? ((s = s ? s.__html : void 0), s != null && ta(e, s)) : i === "children" ? (typeof s == "string" ? (n !== "textarea" || s !== "") && Kn(e, s) : typeof s == "number" && Kn(e, "" + s)) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Qn.hasOwnProperty(i) ? s != null && i === "onScroll" && A("scroll", e) : s != null && _o(e, i, s, o));
              }
            switch (n) {
              case "input":
                Sr(e), _u(e, r, !1);
                break;
              case "textarea":
                Sr(e), Nu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple), (i = r.value), i != null ? en(e, !!r.multiple, i, !1) : r.defaultValue != null && en(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ol);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) Nc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Ot(rr.current)), Ot(Ye.current), Lr(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[Qe] = t), (i = r.nodeValue !== n) && ((e = xe), e !== null)))
            switch (e.tag) {
              case 3:
                zr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && zr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Qe] = t), (t.stateNode = r);
      }
      return ie(t), null;
    case 13:
      if (($(V), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (U && Se !== null && t.mode & 1 && !(t.flags & 128)) Wa(), cn(), (t.flags |= 98560), (i = !1);
        else if (((i = Lr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(w(317));
            i[Qe] = t;
          } else cn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ie(t), (i = !1);
        } else je !== null && (ho(je), (je = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? ((t.lanes = n), t) : ((r = r !== null), r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || V.current & 1 ? Z === 0 && (Z = 3) : uu())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return dn(), io(e, t), e === null && bn(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return Wo(t.type._context), ie(t), null;
    case 17:
      return ye(t.type) && ul(), ie(t), null;
    case 19:
      if (($(V), (i = t.memoizedState), i === null)) return ie(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Tn(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = hl(e)), o !== null)) {
                for (t.flags |= 128, Tn(i, !1), r = o.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) (i = n), (e = r), (i.flags &= 14680066), (o = i.alternate), o === null ? ((i.childLanes = 0), (i.lanes = e), (i.child = null), (i.subtreeFlags = 0), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null), (i.stateNode = null)) : ((i.childLanes = o.childLanes), (i.lanes = o.lanes), (i.child = o.child), (i.subtreeFlags = 0), (i.deletions = null), (i.memoizedProps = o.memoizedProps), (i.memoizedState = o.memoizedState), (i.updateQueue = o.updateQueue), (i.type = o.type), (e = o.dependencies), (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })), (n = n.sibling);
                return j(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && K() > hn && ((t.flags |= 128), (r = !0), Tn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = hl(o)), e !== null)) {
            if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), Tn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)) return ie(t), null;
          } else 2 * K() - i.renderingStartTime > hn && n !== 1073741824 && ((t.flags |= 128), (r = !0), Tn(i, !1), (t.lanes = 4194304));
        i.isBackwards ? ((o.sibling = t.child), (t.child = o)) : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
      }
      return i.tail !== null ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = K()), (t.sibling = null), (n = V.current), j(V, r ? (n & 1) | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return ou(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function dp(e, t) {
  switch ((Uo(t), t.tag)) {
    case 1:
      return ye(t.type) && ul(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return dn(), $(ve), $(se), Go(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return Xo(t), null;
    case 13:
      if (($(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        cn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return $(V), null;
    case 4:
      return dn(), null;
    case 10:
      return Wo(t.type._context), null;
    case 22:
    case 23:
      return ou(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mr = !1,
  ue = !1,
  pp = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function oo(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var vs = !1;
function hp(e, t) {
  if (((Bi = rl), (e = Oa()), Ao(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            f = 0,
            m = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (var k; p !== n || (l !== 0 && p.nodeType !== 3) || (u = o + l), p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r), p.nodeType === 3 && (o += p.nodeValue.length), (k = p.firstChild) !== null; ) (h = p), (p = k);
            for (;;) {
              if (p === e) break t;
              if ((h === n && ++f === l && (u = o), h === i && ++m === r && (s = o), (k = p.nextSibling) !== null)) break;
              (p = h), (h = p.parentNode);
            }
            p = k;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wi = { focusedElem: e, selectionRange: n }, rl = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    N = g.memoizedState,
                    c = t.stateNode,
                    a = c.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Fe(t.type, v), N);
                  c.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? (d.textContent = "") : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (y) {
          W(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (g = vs), (vs = !1), g;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && oo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Rl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Tc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Tc(t)), (e.child = null), (e.deletions = null), (e.sibling = null), e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Qe], delete t[tr], delete t[Yi], delete t[Zd], delete t[Jd])), (e.stateNode = null), (e.return = null), (e.dependencies = null), (e.memoizedProps = null), (e.memoizedState = null), (e.pendingProps = null), (e.stateNode = null), (e.updateQueue = null);
}
function zc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ys(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function so(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? (n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t)) : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && ((e = e.child), e !== null)) for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), (e = e.sibling);
}
function ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (ao(e, t, n), e = e.sibling; e !== null; ) ao(e, t, n), (e = e.sibling);
}
var ee = null,
  De = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) Lc(e, t, n), (n = n.sibling);
}
function Lc(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(Cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || qt(n, t);
    case 6:
      var r = ee,
        l = De;
      (ee = null), it(e, t, n), (ee = r), (De = l), ee !== null && (De ? ((e = ee), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null && (De ? ((e = ee), (n = n.stateNode), e.nodeType === 8 ? ui(e.parentNode, n) : e.nodeType === 1 && ui(e, n), Zn(e)) : ui(ee, n.stateNode));
      break;
    case 4:
      (r = ee), (l = De), (ee = n.stateNode.containerInfo), (De = !0), it(e, t, n), (ee = r), (De = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag), o !== void 0 && (i & 2 || i & 4) && oo(n, t, o), (l = l.next);
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (!ue && (qt(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((ue = (r = ue) || n.memoizedState !== null), it(e, t, n), (ue = r)) : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function gs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pp()),
      t.forEach(function (r) {
        var l = Ep.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (De = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (De = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(w(160));
        Lc(i, o, l), (ee = null), (De = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        W(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Oc(t, e), (t = t.sibling);
}
function Oc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ie(t, e), Ve(e), r & 4)) {
        try {
          Vn(3, e, e.return), Rl(3, e);
        } catch (v) {
          W(e, e.return, v);
        }
        try {
          Vn(5, e, e.return);
        } catch (v) {
          W(e, e.return, v);
        }
      }
      break;
    case 1:
      Ie(t, e), Ve(e), r & 512 && n !== null && qt(n, n.return);
      break;
    case 5:
      if ((Ie(t, e), Ve(e), r & 512 && n !== null && qt(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          Kn(l, "");
        } catch (v) {
          W(e, e.return, v);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && qs(l, i), Mi(u, o);
            var f = Mi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                p = s[o + 1];
              m === "style" ? ra(l, p) : m === "dangerouslySetInnerHTML" ? ta(l, p) : m === "children" ? Kn(l, p) : _o(l, m, p, f);
            }
            switch (u) {
              case "input":
                Ti(l, i);
                break;
              case "textarea":
                bs(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var k = i.value;
                k != null ? en(l, !!i.multiple, k, !1) : h !== !!i.multiple && (i.defaultValue != null ? en(l, !!i.multiple, i.defaultValue, !0) : en(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[tr] = i;
          } catch (v) {
            W(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ie(t, e), Ve(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (v) {
          W(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((Ie(t, e), Ve(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Zn(t.containerInfo);
        } catch (v) {
          W(e, e.return, v);
        }
      break;
    case 4:
      Ie(t, e), Ve(e);
      break;
    case 13:
      Ie(t, e), Ve(e), (l = e.child), l.flags & 8192 && ((i = l.memoizedState !== null), (l.stateNode.isHidden = i), !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (lu = K())), r & 4 && gs(e);
      break;
    case 22:
      if (((m = n !== null && n.memoizedState !== null), e.mode & 1 ? ((ue = (f = ue) || m), Ie(t, e), (ue = f)) : Ie(t, e), Ve(e), r & 8192)) {
        if (((f = e.memoizedState !== null), (e.stateNode.isHidden = f) && !m && e.mode & 1))
          for (C = e, m = e.child; m !== null; ) {
            for (p = C = m; C !== null; ) {
              switch (((h = C), (k = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, h, h.return);
                  break;
                case 1:
                  qt(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount();
                    } catch (v) {
                      W(r, n, v);
                    }
                  }
                  break;
                case 5:
                  qt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ks(p);
                    continue;
                  }
              }
              k !== null ? ((k.return = h), (C = k)) : ks(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (l = p.stateNode), f ? ((i = l.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none")) : ((u = p.stateNode), (s = p.memoizedProps.style), (o = s != null && s.hasOwnProperty("display") ? s.display : null), (u.style.display = na("display", o)));
              } catch (v) {
                W(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = f ? "" : p.memoizedProps;
              } catch (v) {
                W(e, e.return, v);
              }
          } else if (((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) && p.child !== null) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ie(t, e), Ve(e), r & 4 && gs(e);
      break;
    case 21:
      break;
    default:
      Ie(t, e), Ve(e);
  }
}
function Ve(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kn(l, ""), (r.flags &= -33));
          var i = ys(e);
          ao(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = ys(e);
          so(e, u, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mp(e, t, n) {
  (C = e), Rc(e);
}
function Rc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Mr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ue;
        u = Mr;
        var f = ue;
        if (((Mr = o), (ue = s) && !f)) for (C = l; C !== null; ) (o = C), (s = o.child), o.tag === 22 && o.memoizedState !== null ? Ss(l) : s !== null ? ((s.return = o), (C = s)) : Ss(l);
        for (; i !== null; ) (C = i), Rc(i), (i = i.sibling);
        (C = l), (Mr = u), (ue = f);
      }
      ws(e);
    } else l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : ws(e);
  }
}
function ws(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Rl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && ns(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ns(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var m = f.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && Zn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        ue || (t.flags & 512 && uo(t));
      } catch (h) {
        W(t, t.return, h);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function ks(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Ss(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Rl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var i = t.return;
          try {
            uo(t);
          } catch (s) {
            W(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            uo(t);
          } catch (s) {
            W(t, o, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var vp = Math.ceil,
  yl = lt.ReactCurrentDispatcher,
  nu = lt.ReactCurrentOwner,
  Le = lt.ReactCurrentBatchConfig,
  R = 0,
  b = null,
  X = null,
  ne = 0,
  ke = 0,
  bt = Et(0),
  Z = 0,
  ur = null,
  jt = 0,
  Ml = 0,
  ru = 0,
  Hn = null,
  he = null,
  lu = 0,
  hn = 1 / 0,
  Ge = null,
  gl = !1,
  co = null,
  yt = null,
  Ir = !1,
  ft = null,
  wl = 0,
  Bn = 0,
  fo = null,
  Kr = -1,
  Yr = 0;
function fe() {
  return R & 6 ? K() : Kr !== -1 ? Kr : (Kr = K());
}
function gt(e) {
  return e.mode & 1 ? (R & 2 && ne !== 0 ? ne & -ne : bd.transition !== null ? (Yr === 0 && (Yr = ma()), Yr) : ((e = F), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xa(e.type))), e)) : 1;
}
function $e(e, t, n, r) {
  if (50 < Bn) throw ((Bn = 0), (fo = null), Error(w(185)));
  dr(e, n, r), (!(R & 2) || e !== b) && (e === b && (!(R & 2) && (Ml |= n), Z === 4 && at(e, ne)), ge(e, r), n === 1 && R === 0 && !(t.mode & 1) && ((hn = K() + 500), zl && Ct()));
}
function ge(e, t) {
  var n = e.callbackNode;
  bf(e, t);
  var r = nl(e, e === b ? ne : 0);
  if (r === 0) n !== null && Lu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lu(n), t === 1))
      e.tag === 0 ? qd(xs.bind(null, e)) : Va(xs.bind(null, e)),
        Xd(function () {
          !(R & 6) && Ct();
        }),
        (n = null);
    else {
      switch (va(r)) {
        case 1:
          n = Lo;
          break;
        case 4:
          n = pa;
          break;
        case 16:
          n = tl;
          break;
        case 536870912:
          n = ha;
          break;
        default:
          n = tl;
      }
      n = Uc(n, Mc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Mc(e, t) {
  if (((Kr = -1), (Yr = 0), R & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (on() && e.callbackNode !== n) return null;
  var r = nl(e, e === b ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = Fc();
    (b !== e || ne !== t) && ((Ge = null), (hn = K() + 500), Rt(e, t));
    do
      try {
        wp();
        break;
      } catch (u) {
        Ic(e, u);
      }
    while (1);
    Bo(), (yl.current = i), (R = l), X !== null ? (t = 0) : ((b = null), (ne = 0), (t = Z));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = Ai(e)), l !== 0 && ((r = l), (t = po(e, l)))), t === 1)) throw ((n = ur), Rt(e, 0), at(e, r), ge(e, K()), n);
    if (t === 6) at(e, r);
    else {
      if (((l = e.current.alternate), !(r & 30) && !yp(l) && ((t = kl(e, r)), t === 2 && ((i = Ai(e)), i !== 0 && ((r = i), (t = po(e, i)))), t === 1))) throw ((n = ur), Rt(e, 0), at(e, r), ge(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Tt(e, he, Ge);
          break;
        case 3:
          if ((at(e, r), (r & 130023424) === r && ((t = lu + 500 - K()), 10 < t))) {
            if (nl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ki(Tt.bind(null, e, he, Ge), t);
            break;
          }
          Tt(e, he, Ge);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ae(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (((r = l), (r = K() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vp(r / 1960)) - r), 10 < r)) {
            e.timeoutHandle = Ki(Tt.bind(null, e, he, Ge), r);
            break;
          }
          Tt(e, he, Ge);
          break;
        case 5:
          Tt(e, he, Ge);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ge(e, K()), e.callbackNode === n ? Mc.bind(null, e) : null;
}
function po(e, t) {
  var n = Hn;
  return e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256), (e = kl(e, t)), e !== 2 && ((t = he), (he = n), t !== null && ho(t)), e;
}
function ho(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function yp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function at(e, t) {
  for (t &= ~ru, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ae(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xs(e) {
  if (R & 6) throw Error(w(327));
  on();
  var t = nl(e, 0);
  if (!(t & 1)) return ge(e, K()), null;
  var n = kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ai(e);
    r !== 0 && ((t = r), (n = po(e, r)));
  }
  if (n === 1) throw ((n = ur), Rt(e, 0), at(e, t), ge(e, K()), n);
  if (n === 6) throw Error(w(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Tt(e, he, Ge), ge(e, K()), null;
}
function iu(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((hn = K() + 500), zl && Ct());
  }
}
function At(e) {
  ft !== null && ft.tag === 0 && !(R & 6) && on();
  var t = R;
  R |= 1;
  var n = Le.transition,
    r = F;
  try {
    if (((Le.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Le.transition = n), (R = t), !(R & 6) && Ct();
  }
}
function ou() {
  (ke = bt.current), $(bt);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Yd(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Uo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ul();
          break;
        case 3:
          dn(), $(ve), $(se), Go();
          break;
        case 5:
          Xo(r);
          break;
        case 4:
          dn();
          break;
        case 13:
          $(V);
          break;
        case 19:
          $(V);
          break;
        case 10:
          Wo(r.type._context);
          break;
        case 22:
        case 23:
          ou();
      }
      n = n.return;
    }
  if (((b = e), (X = e = wt(e.current, null)), (ne = ke = t), (Z = 0), (ur = null), (ru = Ml = jt = 0), (he = Hn = null), Lt !== null)) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function Ic(e, t) {
  do {
    var n = X;
    try {
      if ((Bo(), (Br.current = vl), ml)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ml = !1;
      }
      if (((Dt = 0), (q = G = H = null), (Un = !1), (lr = 0), (nu.current = null), n === null || n.return === null)) {
        (Z = 1), (ur = t), (X = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (((t = ne), (u.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
          var f = s,
            m = u,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = m.alternate;
            h ? ((m.updateQueue = h.updateQueue), (m.memoizedState = h.memoizedState), (m.lanes = h.lanes)) : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var k = as(o);
          if (k !== null) {
            (k.flags &= -257), cs(k, o, u, i, t), k.mode & 1 && ss(i, f, t), (t = k), (s = f);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ss(i, f, t), uu();
              break e;
            }
            s = Error(w(426));
          }
        } else if (U && u.mode & 1) {
          var N = as(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), cs(N, o, u, i, t), Vo(pn(s, u));
            break e;
          }
        }
        (i = s = pn(s, u)), Z !== 4 && (Z = 2), Hn === null ? (Hn = [i]) : Hn.push(i), (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var c = yc(i, s, t);
              ts(i, c);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || (d !== null && typeof d.componentDidCatch == "function" && (yt === null || !yt.has(d))))) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = gc(i, u, t);
                ts(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      jc(n);
    } catch (x) {
      (t = x), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Fc() {
  var e = yl.current;
  return (yl.current = vl), e === null ? vl : e;
}
function uu() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), b === null || (!(jt & 268435455) && !(Ml & 268435455)) || at(b, ne);
}
function kl(e, t) {
  var n = R;
  R |= 2;
  var r = Fc();
  (b !== e || ne !== t) && ((Ge = null), Rt(e, t));
  do
    try {
      gp();
      break;
    } catch (l) {
      Ic(e, l);
    }
  while (1);
  if ((Bo(), (R = n), (yl.current = r), X !== null)) throw Error(w(261));
  return (b = null), (ne = 0), Z;
}
function gp() {
  for (; X !== null; ) Dc(X);
}
function wp() {
  for (; X !== null && !Wf(); ) Dc(X);
}
function Dc(e) {
  var t = $c(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps), t === null ? jc(e) : (X = t), (nu.current = null);
}
function jc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dp(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (X = null);
        return;
      }
    } else if (((n = fp(n, t, ke)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Tt(e, t, n) {
  var r = F,
    l = Le.transition;
  try {
    (Le.transition = null), (F = 1), kp(e, t, n, r);
  } finally {
    (Le.transition = l), (F = r);
  }
  return null;
}
function kp(e, t, n, r) {
  do on();
  while (ft !== null);
  if (R & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ed(e, i),
    e === b && ((X = b = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ir ||
      ((Ir = !0),
      Uc(tl, function () {
        return on(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Le.transition), (Le.transition = null);
    var o = F;
    F = 1;
    var u = R;
    (R |= 4), (nu.current = null), hp(e, n), Oc(n, e), Ud(Wi), (rl = !!Bi), (Wi = Bi = null), (e.current = n), mp(n), Qf(), (R = u), (F = o), (Le.transition = i);
  } else e.current = n;
  if ((Ir && ((Ir = !1), (ft = e), (wl = l)), (i = e.pendingLanes), i === 0 && (yt = null), Xf(n.stateNode), ge(e, K()), t !== null)) for (r = e.onRecoverableError, n = 0; n < t.length; n++) (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (gl) throw ((gl = !1), (e = co), (co = null), e);
  return wl & 1 && e.tag !== 0 && on(), (i = e.pendingLanes), i & 1 ? (e === fo ? Bn++ : ((Bn = 0), (fo = e))) : (Bn = 0), Ct(), null;
}
function on() {
  if (ft !== null) {
    var e = va(wl),
      t = Le.transition,
      n = F;
    try {
      if (((Le.transition = null), (F = 16 > e ? 16 : e), ft === null)) var r = !1;
      else {
        if (((e = ft), (ft = null), (wl = 0), R & 6)) throw Error(w(331));
        var l = R;
        for (R |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (C = f; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (C = p);
                  else
                    for (; C !== null; ) {
                      m = C;
                      var h = m.sibling,
                        k = m.return;
                      if ((Tc(m), m === f)) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = k), (C = h);
                        break;
                      }
                      C = k;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var N = v.sibling;
                    (v.sibling = null), (v = N);
                  } while (v !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), (C = c);
                break e;
              }
              C = i.return;
            }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (C = d);
          else
            e: for (o = a; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rl(9, u);
                  }
                } catch (x) {
                  W(u, u.return, x);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (C = y);
                break e;
              }
              C = u.return;
            }
        }
        if (((R = l), Ct(), Ke && typeof Ke.onPostCommitFiberRoot == "function"))
          try {
            Ke.onPostCommitFiberRoot(Cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Le.transition = t);
    }
  }
  return !1;
}
function Es(e, t, n) {
  (t = pn(n, t)), (t = yc(e, t, 1)), (e = vt(e, t, 1)), (t = fe()), e !== null && (dr(e, 1, t), ge(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Es(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Es(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (yt === null || !yt.has(r)))) {
          (e = pn(n, e)), (e = gc(t, e, 1)), (t = vt(t, e, 1)), (e = fe()), t !== null && (dr(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), (t = fe()), (e.pingedLanes |= e.suspendedLanes & n), b === e && (ne & n) === n && (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > K() - lu) ? Rt(e, 0) : (ru |= n)), ge(e, t);
}
function Ac(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Cr), (Cr <<= 1), !(Cr & 130023424) && (Cr = 4194304)) : (t = 1));
  var n = fe();
  (e = nt(e, t)), e !== null && (dr(e, t, n), ge(e, n));
}
function xp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ac(e, n);
}
function Ep(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Ac(e, n);
}
var $c;
$c = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), cp(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), U && t.flags & 1048576 && Ha(t, cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qr(e, t), (e = t.pendingProps);
      var l = an(t, se.current);
      ln(t, n), (l = Jo(null, t, r, e, l, n));
      var i = qo();
      return (t.flags |= 1), typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ye(r) ? ((i = !0), sl(t)) : (i = !1), (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null), Ko(t), (l.updater = Ll), (t.stateNode = l), (l._reactInternals = t), bi(t, r, e, n), (t = no(null, t, r, !0, i, n))) : ((t.tag = 0), U && i && $o(t), ae(null, t, l, n), (t = t.child)), t;
    case 16:
      r = t.elementType;
      e: {
        switch ((Qr(e, t), (e = t.pendingProps), (l = r._init), (r = l(r._payload)), (t.type = r), (l = t.tag = _p(r)), (e = Fe(r, e)), l)) {
          case 0:
            t = to(null, t, r, e, n);
            break e;
          case 1:
            t = ps(null, t, r, e, n);
            break e;
          case 11:
            t = fs(null, t, r, e, n);
            break e;
          case 14:
            t = ds(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Fe(r, l)), to(e, t, r, l, n);
    case 1:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Fe(r, l)), ps(e, t, r, l, n);
    case 3:
      e: {
        if ((xc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps), (i = t.memoizedState), (l = i.element), Ka(e, t), pl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (((i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }), (t.updateQueue.baseState = i), (t.memoizedState = i), t.flags & 256)) {
            (l = pn(Error(w(423)), t)), (t = hs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = pn(Error(w(424)), t)), (t = hs(e, t, r, n, l));
            break e;
          } else for (Se = mt(t.stateNode.containerInfo.firstChild), xe = t, U = !0, je = null, n = Za(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((cn(), r === l)) {
            t = rt(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ja(t), e === null && Zi(t), (r = t.type), (l = t.pendingProps), (i = e !== null ? e.memoizedProps : null), (o = l.children), Qi(r, l) ? (o = null) : i !== null && Qi(r, i) && (t.flags |= 32), Sc(e, t), ae(e, t, o, n), t.child;
    case 6:
      return e === null && Zi(t), null;
    case 13:
      return Ec(e, t, n);
    case 4:
      return Yo(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = fn(t, null, r, n)) : ae(e, t, r, n), t.child;
    case 11:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Fe(r, l)), fs(e, t, r, l, n);
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (((r = t.type._context), (l = t.pendingProps), (i = t.memoizedProps), (o = l.value), j(fl, r._currentValue), (r._currentValue = o), i !== null))
          if (Ue(i.value, o)) {
            if (i.children === l.children && !ve.current) {
              t = rt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = be(-1, n & -n)), (s.tag = 2);
                      var f = i.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var m = f.pending;
                        m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)), (f.pending = s);
                      }
                    }
                    (i.lanes |= n), (s = i.alternate), s !== null && (s.lanes |= n), Ji(i.return, n, t), (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(w(341));
                (o.lanes |= n), (u = o.alternate), u !== null && (u.lanes |= n), Ji(o, n, t), (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (l = t.type), (r = t.pendingProps.children), ln(t, n), (l = Oe(l)), (r = r(l)), (t.flags |= 1), ae(e, t, r, n), t.child;
    case 14:
      return (r = t.type), (l = Fe(r, t.pendingProps)), (l = Fe(r.type, l)), ds(e, t, r, l, n);
    case 15:
      return wc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Fe(r, l)), Qr(e, t), (t.tag = 1), ye(r) ? ((e = !0), sl(t)) : (e = !1), ln(t, n), Xa(t, r, l), bi(t, r, l, n), no(null, t, r, !0, e, n);
    case 19:
      return Cc(e, t, n);
    case 22:
      return kc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Uc(e, t) {
  return da(e, t);
}
function Cp(e, t, n, r) {
  (this.tag = e), (this.key = n), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = r), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null);
}
function ze(e, t, n, r) {
  return new Cp(e, t, n, r);
}
function su(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _p(e) {
  if (typeof e == "function") return su(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === No)) return 11;
    if (e === To) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return n === null ? ((n = ze(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n)) : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)), (n.flags = e.flags & 14680064), (n.childLanes = e.childLanes), (n.lanes = e.lanes), (n.child = e.child), (n.memoizedProps = e.memoizedProps), (n.memoizedState = e.memoizedState), (n.updateQueue = e.updateQueue), (t = e.dependencies), (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), (n.sibling = e.sibling), (n.index = e.index), (n.ref = e.ref), n;
}
function Xr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) su(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Bt:
        return Mt(n.children, l, i, t);
      case Po:
        (o = 8), (l |= 8);
        break;
      case Ei:
        return (e = ze(12, n, t, l | 2)), (e.elementType = Ei), (e.lanes = i), e;
      case Ci:
        return (e = ze(13, n, t, l)), (e.elementType = Ci), (e.lanes = i), e;
      case _i:
        return (e = ze(19, n, t, l)), (e.elementType = _i), (e.lanes = i), e;
      case Gs:
        return Il(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ys:
              o = 10;
              break e;
            case Xs:
              o = 9;
              break e;
            case No:
              o = 11;
              break e;
            case To:
              o = 14;
              break e;
            case ot:
              (o = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (t = ze(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Mt(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function Il(e, t, n, r) {
  return (e = ze(22, e, r, t)), (e.elementType = Gs), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function mi(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function vi(e, t, n) {
  return (t = ze(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function Pp(e, t, n, r, l) {
  (this.tag = t), (this.containerInfo = e), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.pendingContext = this.context = null), (this.callbackPriority = 0), (this.eventTimes = Zl(0)), (this.expirationTimes = Zl(-1)), (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = Zl(0)), (this.identifierPrefix = r), (this.onRecoverableError = l), (this.mutableSourceEagerHydrationData = null);
}
function au(e, t, n, r, l, i, o, u, s) {
  return (e = new Pp(e, t, n, u, s)), t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0), (i = ze(3, null, null, t)), (e.current = i), (i.stateNode = e), (i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }), Ko(i), e;
}
function Np(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Vc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Ut(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return Ua(e, n, t);
  }
  return t;
}
function Hc(e, t, n, r, l, i, o, u, s) {
  return (e = au(n, r, !0, e, l, i, o, u, s)), (e.context = Vc(null)), (n = e.current), (r = fe()), (l = gt(n)), (i = be(r, l)), (i.callback = t ?? null), vt(n, i, l), (e.current.lanes = l), dr(e, l, r), ge(e, r), e;
}
function Fl(e, t, n, r) {
  var l = t.current,
    i = fe(),
    o = gt(l);
  return (n = Vc(n)), t.context === null ? (t.context = n) : (t.pendingContext = n), (t = be(i, o)), (t.payload = { element: e }), (r = r === void 0 ? null : r), r !== null && (t.callback = r), (e = vt(l, t, o)), e !== null && ($e(e, l, o, i), Hr(e, l, o)), o;
}
function Sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cu(e, t) {
  Cs(e, t), (e = e.alternate) && Cs(e, t);
}
function Tp() {
  return null;
}
var Bc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fu(e) {
  this._internalRoot = e;
}
Dl.prototype.render = fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Fl(e, t, null, null);
};
Dl.prototype.unmount = fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    At(function () {
      Fl(null, e, null, null);
    }),
      (t[tt] = null);
  }
};
function Dl(e) {
  this._internalRoot = e;
}
Dl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++);
    st.splice(n, 0, e), n === 0 && Sa(e);
  }
};
function du(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function _s() {}
function zp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var f = Sl(o);
        i.call(f);
      };
    }
    var o = Hc(t, r, e, 0, null, !1, !1, "", _s);
    return (e._reactRootContainer = o), (e[tt] = o.current), bn(e.nodeType === 8 ? e.parentNode : e), At(), o;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = Sl(s);
      u.call(f);
    };
  }
  var s = au(e, 0, !1, null, null, !1, !1, "", _s);
  return (
    (e._reactRootContainer = s),
    (e[tt] = s.current),
    bn(e.nodeType === 8 ? e.parentNode : e),
    At(function () {
      Fl(t, s, n, r);
    }),
    s
  );
}
function Al(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Sl(o);
        u.call(s);
      };
    }
    Fl(t, o, e, l);
  } else o = zp(n, t, e, l, r);
  return Sl(o);
}
ya = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 && (Oo(t, n | 1), ge(t, K()), !(R & 6) && ((hn = K() + 500), Ct()));
      }
      break;
    case 13:
      At(function () {
        var r = nt(e, 1);
        if (r !== null) {
          var l = fe();
          $e(r, e, 1, l);
        }
      }),
        cu(e, 1);
  }
};
Ro = function (e) {
  if (e.tag === 13) {
    var t = nt(e, 134217728);
    if (t !== null) {
      var n = fe();
      $e(t, e, 134217728, n);
    }
    cu(e, 134217728);
  }
};
ga = function (e) {
  if (e.tag === 13) {
    var t = gt(e),
      n = nt(e, t);
    if (n !== null) {
      var r = fe();
      $e(n, e, t, r);
    }
    cu(e, t);
  }
};
wa = function () {
  return F;
};
ka = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
Fi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Tl(r);
            if (!l) throw Error(w(90));
            Js(r), Ti(r, l);
          }
        }
      }
      break;
    case "textarea":
      bs(e, n);
      break;
    case "select":
      (t = n.value), t != null && en(e, !!n.multiple, t, !1);
  }
};
oa = iu;
ua = At;
var Lp = { usingClientEntryPoint: !1, Events: [hr, Yt, Tl, la, ia, iu] },
  zn = { findFiberByHostInstance: zt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  Op = {
    bundleType: zn.bundleType,
    version: zn.version,
    rendererPackageName: zn.rendererPackageName,
    rendererConfig: zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ca(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zn.findFiberByHostInstance || Tp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber)
    try {
      (Cl = Fr.inject(Op)), (Ke = Fr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lp;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!du(t)) throw Error(w(200));
  return Np(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!du(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = Bc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), (t = au(e, 1, !1, null, null, n, !1, r, l)), (e[tt] = t.current), bn(e.nodeType === 8 ? e.parentNode : e), new fu(t);
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(w(188)) : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = ca(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return At(e);
};
_e.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(w(200));
  return Al(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!du(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Bc;
  if ((n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), (t = Hc(t, null, e, 1, n ?? null, l, !1, i, o)), (e[tt] = t.current), bn(e), r)) for (e = 0; e < r.length; e++) (n = r[e]), (l = n._getVersion), (l = l(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, l]) : t.mutableSourceEagerHydrationData.push(n, l);
  return new Dl(t);
};
_e.render = function (e, t, n) {
  if (!jl(t)) throw Error(w(200));
  return Al(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (At(function () {
        Al(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tt] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = iu;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Al(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = _e);
})(Tf);
var Ps = ki;
(wi.createRoot = Ps.createRoot), (wi.hydrateRoot = Ps.hydrateRoot);
function mo() {
  return (
    (mo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mo.apply(this, arguments)
  );
}
function Wc(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Rp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Mp = Wc(function (e) {
    return Rp.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91);
  });
function Ip(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Fp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Dp = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (l) {
        var i;
        r.tags.length === 0 ? (r.insertionPoint ? (i = r.insertionPoint.nextSibling) : r.prepend ? (i = r.container.firstChild) : (i = r.before)) : (i = r.tags[r.tags.length - 1].nextSibling), r.container.insertBefore(l, i), r.tags.push(l);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fp(this));
        var l = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Ip(l);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else l.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  oe = "-ms-",
  xl = "-moz-",
  M = "-webkit-",
  Qc = "comm",
  pu = "rule",
  hu = "decl",
  jp = "@import",
  Kc = "@keyframes",
  Ap = Math.abs,
  $l = String.fromCharCode,
  $p = Object.assign;
function Up(e, t) {
  return te(e, 0) ^ 45 ? (((((((t << 2) ^ te(e, 0)) << 2) ^ te(e, 1)) << 2) ^ te(e, 2)) << 2) ^ te(e, 3) : 0;
}
function Yc(e) {
  return e.trim();
}
function Vp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, n) {
  return e.replace(t, n);
}
function vo(e, t) {
  return e.indexOf(t);
}
function te(e, t) {
  return e.charCodeAt(t) | 0;
}
function sr(e, t, n) {
  return e.slice(t, n);
}
function Be(e) {
  return e.length;
}
function mu(e) {
  return e.length;
}
function Dr(e, t) {
  return t.push(e), e;
}
function Hp(e, t) {
  return e.map(t).join("");
}
var Ul = 1,
  mn = 1,
  Xc = 0,
  we = 0,
  Y = 0,
  wn = "";
function Vl(e, t, n, r, l, i, o) {
  return { value: e, root: t, parent: n, type: r, props: l, children: i, line: Ul, column: mn, length: o, return: "" };
}
function Ln(e, t) {
  return $p(Vl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Bp() {
  return Y;
}
function Wp() {
  return (Y = we > 0 ? te(wn, --we) : 0), mn--, Y === 10 && ((mn = 1), Ul--), Y;
}
function Ee() {
  return (Y = we < Xc ? te(wn, we++) : 0), mn++, Y === 10 && ((mn = 1), Ul++), Y;
}
function Xe() {
  return te(wn, we);
}
function Gr() {
  return we;
}
function vr(e, t) {
  return sr(wn, e, t);
}
function ar(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Gc(e) {
  return (Ul = mn = 1), (Xc = Be((wn = e))), (we = 0), [];
}
function Zc(e) {
  return (wn = ""), e;
}
function Zr(e) {
  return Yc(vr(we - 1, yo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qp(e) {
  for (; (Y = Xe()) && Y < 33; ) Ee();
  return ar(e) > 2 || ar(Y) > 3 ? "" : " ";
}
function Kp(e, t) {
  for (; --t && Ee() && !(Y < 48 || Y > 102 || (Y > 57 && Y < 65) || (Y > 70 && Y < 97)); );
  return vr(e, Gr() + (t < 6 && Xe() == 32 && Ee() == 32));
}
function yo(e) {
  for (; Ee(); )
    switch (Y) {
      case e:
        return we;
      case 34:
      case 39:
        e !== 34 && e !== 39 && yo(Y);
        break;
      case 40:
        e === 41 && yo(e);
        break;
      case 92:
        Ee();
        break;
    }
  return we;
}
function Yp(e, t) {
  for (; Ee() && e + Y !== 47 + 10; ) if (e + Y === 42 + 42 && Xe() === 47) break;
  return "/*" + vr(t, we - 1) + "*" + $l(e === 47 ? e : Ee());
}
function Xp(e) {
  for (; !ar(Xe()); ) Ee();
  return vr(e, we);
}
function Gp(e) {
  return Zc(Jr("", null, null, null, [""], (e = Gc(e)), 0, [0], e));
}
function Jr(e, t, n, r, l, i, o, u, s) {
  for (var f = 0, m = 0, p = o, h = 0, k = 0, g = 0, v = 1, N = 1, c = 1, a = 0, d = "", y = l, x = i, E = r, S = d; N; )
    switch (((g = a), (a = Ee()))) {
      case 40:
        if (g != 108 && te(S, p - 1) == 58) {
          vo((S += I(Zr(a), "&", "&\f")), "&\f") != -1 && (c = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Zr(a);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Qp(g);
        break;
      case 92:
        S += Kp(Gr() - 1, 7);
        continue;
      case 47:
        switch (Xe()) {
          case 42:
          case 47:
            Dr(Zp(Yp(Ee(), Gr()), t, n), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * v:
        u[f++] = Be(S) * c;
      case 125 * v:
      case 59:
      case 0:
        switch (a) {
          case 0:
          case 125:
            N = 0;
          case 59 + m:
            k > 0 && Be(S) - p && Dr(k > 32 ? Ts(S + ";", r, n, p - 1) : Ts(I(S, " ", "") + ";", r, n, p - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if ((Dr((E = Ns(S, t, n, f, m, l, u, d, (y = []), (x = []), p)), i), a === 123))
              if (m === 0) Jr(S, t, E, E, y, i, p, u, x);
              else
                switch (h === 99 && te(S, 3) === 110 ? 100 : h) {
                  case 100:
                  case 109:
                  case 115:
                    Jr(e, E, E, r && Dr(Ns(e, E, E, 0, 0, l, u, d, l, (y = []), p), x), l, x, p, u, r ? y : x);
                    break;
                  default:
                    Jr(S, E, E, E, [""], x, 0, u, x);
                }
        }
        (f = m = k = 0), (v = c = 1), (d = S = ""), (p = o);
        break;
      case 58:
        (p = 1 + Be(S)), (k = g);
      default:
        if (v < 1) {
          if (a == 123) --v;
          else if (a == 125 && v++ == 0 && Wp() == 125) continue;
        }
        switch (((S += $l(a)), a * v)) {
          case 38:
            c = m > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            (u[f++] = (Be(S) - 1) * c), (c = 1);
            break;
          case 64:
            Xe() === 45 && (S += Zr(Ee())), (h = Xe()), (m = p = Be((d = S += Xp(Gr())))), a++;
            break;
          case 45:
            g === 45 && Be(S) == 2 && (v = 0);
        }
    }
  return i;
}
function Ns(e, t, n, r, l, i, o, u, s, f, m) {
  for (var p = l - 1, h = l === 0 ? i : [""], k = mu(h), g = 0, v = 0, N = 0; g < r; ++g) for (var c = 0, a = sr(e, p + 1, (p = Ap((v = o[g])))), d = e; c < k; ++c) (d = Yc(v > 0 ? h[c] + " " + a : I(a, /&\f/g, h[c]))) && (s[N++] = d);
  return Vl(e, t, n, l === 0 ? pu : u, s, f, m);
}
function Zp(e, t, n) {
  return Vl(e, t, n, Qc, $l(Bp()), sr(e, 2, -2), 0);
}
function Ts(e, t, n, r) {
  return Vl(e, t, n, hu, sr(e, 0, r), sr(e, r + 1, -1), r);
}
function un(e, t) {
  for (var n = "", r = mu(e), l = 0; l < r; l++) n += t(e[l], l, e, t) || "";
  return n;
}
function Jp(e, t, n, r) {
  switch (e.type) {
    case jp:
    case hu:
      return (e.return = e.return || e.value);
    case Qc:
      return "";
    case Kc:
      return (e.return = e.value + "{" + un(e.children, r) + "}");
    case pu:
      e.value = e.props.join(",");
  }
  return Be((n = un(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
}
function qp(e) {
  var t = mu(e);
  return function (n, r, l, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](n, r, l, i) || "";
    return o;
  };
}
function bp(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var eh = function (t, n, r) {
    for (var l = 0, i = 0; (l = i), (i = Xe()), l === 38 && i === 12 && (n[r] = 1), !ar(i); ) Ee();
    return vr(t, we);
  },
  th = function (t, n) {
    var r = -1,
      l = 44;
    do
      switch (ar(l)) {
        case 0:
          l === 38 && Xe() === 12 && (n[r] = 1), (t[r] += eh(we - 1, n, r));
          break;
        case 2:
          t[r] += Zr(l);
          break;
        case 4:
          if (l === 44) {
            (t[++r] = Xe() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += $l(l);
      }
    while ((l = Ee()));
    return t;
  },
  nh = function (t, n) {
    return Zc(th(Gc(t), n));
  },
  zs = new WeakMap(),
  rh = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; ) if (((r = r.parent), !r)) return;
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !zs.get(r)) && !l) {
        zs.set(t, !0);
        for (var i = [], o = nh(n, i), u = r.props, s = 0, f = 0; s < o.length; s++) for (var m = 0; m < u.length; m++, f++) t.props[f] = i[s] ? o[s].replace(/&\f/g, u[m]) : u[m] + " " + o[s];
      }
    }
  },
  lh = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Jc(e, t) {
  switch (Up(e, t)) {
    case 5103:
      return M + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return M + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return M + e + xl + e + oe + e + e;
    case 6828:
    case 4268:
      return M + e + oe + e + e;
    case 6165:
      return M + e + oe + "flex-" + e + e;
    case 5187:
      return M + e + I(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + oe + "flex-$1$2") + e;
    case 5443:
      return M + e + oe + "flex-item-" + I(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + oe + "flex-line-pack" + I(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + oe + I(e, "shrink", "negative") + e;
    case 5292:
      return M + e + oe + I(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + I(e, "-grow", "") + M + e + oe + I(e, "grow", "positive") + e;
    case 4554:
      return M + I(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return I(I(I(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return I(I(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, M + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Be(e) - 1 - t > 6)
        switch (te(e, t + 1)) {
          case 109:
            if (te(e, t + 4) !== 45) break;
          case 102:
            return I(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + xl + (te(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~vo(e, "stretch") ? Jc(I(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (te(e, t + 1) !== 115) break;
    case 6444:
      switch (te(e, Be(e) - 3 - (~vo(e, "!important") && 10))) {
        case 107:
          return I(e, ":", ":" + M) + e;
        case 101:
          return I(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (te(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + oe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (te(e, t + 11)) {
        case 114:
          return M + e + oe + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + oe + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + oe + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + oe + e + e;
  }
  return e;
}
var ih = function (t, n, r, l) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case hu:
          t.return = Jc(t.value, t.length);
          break;
        case Kc:
          return un([Ln(t, { value: I(t.value, "@", "@" + M) })], l);
        case pu:
          if (t.length)
            return Hp(t.props, function (i) {
              switch (Vp(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return un([Ln(t, { props: [I(i, /:(read-\w+)/, ":" + xl + "$1")] })], l);
                case "::placeholder":
                  return un([Ln(t, { props: [I(i, /:(plac\w+)/, ":" + M + "input-$1")] }), Ln(t, { props: [I(i, /:(plac\w+)/, ":" + xl + "$1")] }), Ln(t, { props: [I(i, /:(plac\w+)/, oe + "input-$1")] })], l);
              }
              return "";
            });
      }
  },
  oh = [ih],
  uh = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var N = v.getAttribute("data-emotion");
        N.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var l = t.stylisPlugins || oh,
      i = {},
      o,
      u = [];
    (o = t.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function (v) {
        for (var N = v.getAttribute("data-emotion").split(" "), c = 1; c < N.length; c++) i[N[c]] = !0;
        u.push(v);
      });
    var s,
      f = [rh, lh];
    {
      var m,
        p = [
          Jp,
          bp(function (v) {
            m.insert(v);
          }),
        ],
        h = qp(f.concat(l, p)),
        k = function (N) {
          return un(Gp(N), h);
        };
      s = function (N, c, a, d) {
        (m = a), k(N ? N + "{" + c.styles + "}" : c.styles), d && (g.inserted[c.name] = !0);
      };
    }
    var g = { key: n, sheet: new Dp({ key: n, container: o, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: i, registered: {}, insert: s };
    return g.sheet.hydrate(u), g;
  },
  sh = !0;
function ah(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (l) {
      e[l] !== void 0 ? t.push(e[l] + ";") : (r += l + " ");
    }),
    r
  );
}
var qc = function (t, n, r) {
    var l = t.key + "-" + n.name;
    (r === !1 || sh === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
  },
  ch = function (t, n, r) {
    qc(t, n, r);
    var l = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + l : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function fh(e) {
  for (var t = 0, n, r = 0, l = e.length; l >= 4; ++r, l -= 4) (n = (e.charCodeAt(r) & 255) | ((e.charCodeAt(++r) & 255) << 8) | ((e.charCodeAt(++r) & 255) << 16) | ((e.charCodeAt(++r) & 255) << 24)), (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)), (n ^= n >>> 24), (t = ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^ ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (l) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (t ^= t >>> 13), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)), ((t ^ (t >>> 15)) >>> 0).toString(36);
}
var dh = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 },
  ph = /[A-Z]|^ms/g,
  hh = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  bc = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ls = function (t) {
    return t != null && typeof t != "boolean";
  },
  yi = Wc(function (e) {
    return bc(e) ? e : e.replace(ph, "-$&").toLowerCase();
  }),
  Os = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(hh, function (r, l, i) {
            return (We = { name: l, styles: i, next: We }), l;
          });
    }
    return dh[t] !== 1 && !bc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
  };
function cr(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1) return (We = { name: n.name, styles: n.styles, next: We }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0) for (; r !== void 0; ) (We = { name: r.name, styles: r.styles, next: We }), (r = r.next);
        var l = n.styles + ";";
        return l;
      }
      return mh(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = We,
          o = n(e);
        return (We = i), cr(e, t, o);
      }
      break;
    }
  }
  if (t == null) return n;
  var u = t[n];
  return u !== void 0 ? u : n;
}
function mh(e, t, n) {
  var r = "";
  if (Array.isArray(n)) for (var l = 0; l < n.length; l++) r += cr(e, t, n[l]) + ";";
  else
    for (var i in n) {
      var o = n[i];
      if (typeof o != "object") t != null && t[o] !== void 0 ? (r += i + "{" + t[o] + "}") : Ls(o) && (r += yi(i) + ":" + Os(i, o) + ";");
      else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var u = 0; u < o.length; u++) Ls(o[u]) && (r += yi(i) + ":" + Os(i, o[u]) + ";");
      else {
        var s = cr(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            r += yi(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var Rs = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  We,
  vh = function (t, n, r) {
    if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
    var l = !0,
      i = "";
    We = void 0;
    var o = t[0];
    o == null || o.raw === void 0 ? ((l = !1), (i += cr(r, n, o))) : (i += o[0]);
    for (var u = 1; u < t.length; u++) (i += cr(r, n, t[u])), l && (i += o[u]);
    Rs.lastIndex = 0;
    for (var s = "", f; (f = Rs.exec(i)) !== null; ) s += "-" + f[1];
    var m = fh(i) + s;
    return { name: m, styles: i, next: We };
  },
  yh = function (t) {
    return t();
  },
  gh = ku["useInsertionEffect"] ? ku["useInsertionEffect"] : !1,
  wh = gh || yh,
  ef = ce.createContext(typeof HTMLElement < "u" ? uh({ key: "css" }) : null);
ef.Provider;
var kh = function (t) {
    return ce.forwardRef(function (n, r) {
      var l = ce.useContext(ef);
      return t(n, l, r);
    });
  },
  Sh = ce.createContext({}),
  xh = Mp,
  Eh = function (t) {
    return t !== "theme";
  },
  Ms = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? xh : Eh;
  },
  Is = function (t, n, r) {
    var l;
    if (n) {
      var i = n.shouldForwardProp;
      l =
        t.__emotion_forwardProp && i
          ? function (o) {
              return t.__emotion_forwardProp(o) && i(o);
            }
          : i;
    }
    return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
  },
  Ch = function (t) {
    var n = t.cache,
      r = t.serialized,
      l = t.isStringTag;
    return (
      qc(n, r, l),
      wh(function () {
        return ch(n, r, l);
      }),
      null
    );
  },
  _h = function e(t, n) {
    var r = t.__emotion_real === t,
      l = (r && t.__emotion_base) || t,
      i,
      o;
    n !== void 0 && ((i = n.label), (o = n.target));
    var u = Is(t, n, r),
      s = u || Ms(l),
      f = !s("as");
    return function () {
      var m = arguments,
        p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if ((i !== void 0 && p.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)) p.push.apply(p, m);
      else {
        p.push(m[0][0]);
        for (var h = m.length, k = 1; k < h; k++) p.push(m[k], m[0][k]);
      }
      var g = kh(function (v, N, c) {
        var a = (f && v.as) || l,
          d = "",
          y = [],
          x = v;
        if (v.theme == null) {
          x = {};
          for (var E in v) x[E] = v[E];
          x.theme = ce.useContext(Sh);
        }
        typeof v.className == "string" ? (d = ah(N.registered, y, v.className)) : v.className != null && (d = v.className + " ");
        var S = vh(p.concat(y), N.registered, x);
        (d += N.key + "-" + S.name), o !== void 0 && (d += " " + o);
        var P = f && u === void 0 ? Ms(a) : s,
          D = {};
        for (var z in v) (f && z === "as") || (P(z) && (D[z] = v[z]));
        return (D.className = d), (D.ref = c), ce.createElement(ce.Fragment, null, ce.createElement(Ch, { cache: N, serialized: S, isStringTag: typeof a == "string" }), ce.createElement(a, D));
      });
      return (
        (g.displayName = i !== void 0 ? i : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")"),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = l),
        (g.__emotion_styles = p),
        (g.__emotion_forwardProp = u),
        Object.defineProperty(g, "toString", {
          value: function () {
            return "." + o;
          },
        }),
        (g.withComponent = function (v, N) {
          return e(v, mo({}, n, N, { shouldForwardProp: Is(g, N, !0) })).apply(void 0, p);
        }),
        g
      );
    };
  },
  Ph = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
  go = _h.bind();
Ph.forEach(function (e) {
  go[e] = go(e);
});
const Nh = go.div`
  position: fixed;
  z-index: 999999;

  color: white;

  left: calc(100% - 120px);
  top: 15px;
  
  width: 100px;
  height: 100px;

  border: 1px solid black;
  text-align: center;
  background-color: rgba(0,0,0,0.25);
`,
  Th = () => Wn(Nh, { children: "This is the floating panel" });
function zh() {
  return Wn("div", { children: Wn(Th, {}) });
}
wi.createRoot(document.getElementById("extension_root")).render(Wn(Hs.StrictMode, { children: Wn(zh, {}) }));

        }
      },
    });
  }
});