function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;

	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }
	  return Object(val);
	}
	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    }

	    // Detect buggy property enumeration order in older V8 versions.

	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
	    test1[5] = 'de';
	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test2 = {};
	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }
	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });
	    if (order2.join('') !== '0123456789') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });
	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }
	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}
	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;
	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	    if (getOwnPropertySymbols) {
	      symbols = getOwnPropertySymbols(from);
	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }
	  return to;
	};
	return objectAssign;
}

/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;

	var l = requireObjectAssign(),
	  n = 60103,
	  p = 60106;
	react_production_min.Fragment = 60107;
	react_production_min.StrictMode = 60108;
	react_production_min.Profiler = 60114;
	var q = 60109,
	  r = 60110,
	  t = 60112;
	react_production_min.Suspense = 60113;
	var u = 60115,
	  v = 60116;
	if ("function" === typeof Symbol && Symbol.for) {
	  var w = Symbol.for;
	  n = w("react.element");
	  p = w("react.portal");
	  react_production_min.Fragment = w("react.fragment");
	  react_production_min.StrictMode = w("react.strict_mode");
	  react_production_min.Profiler = w("react.profiler");
	  q = w("react.provider");
	  r = w("react.context");
	  t = w("react.forward_ref");
	  react_production_min.Suspense = w("react.suspense");
	  u = w("react.memo");
	  v = w("react.lazy");
	}
	var x = "function" === typeof Symbol && Symbol.iterator;
	function y(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = x && a[x] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	function z(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var A = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  B = {};
	function C(a, b, c) {
	  this.props = a;
	  this.context = b;
	  this.refs = B;
	  this.updater = c || A;
	}
	C.prototype.isReactComponent = {};
	C.prototype.setState = function (a, b) {
	  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
	  this.updater.enqueueSetState(this, a, b, "setState");
	};
	C.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function D() {}
	D.prototype = C.prototype;
	function E(a, b, c) {
	  this.props = a;
	  this.context = b;
	  this.refs = B;
	  this.updater = c || A;
	}
	var F = E.prototype = new D();
	F.constructor = E;
	l(F, C.prototype);
	F.isPureReactComponent = !0;
	var G = {
	    current: null
	  },
	  H = Object.prototype.hasOwnProperty,
	  I = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };
	function J(a, b, c) {
	  var e,
	    d = {},
	    k = null,
	    h = null;
	  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
	  var g = arguments.length - 2;
	  if (1 === g) d.children = c;else if (1 < g) {
	    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
	    d.children = f;
	  }
	  if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
	  return {
	    $$typeof: n,
	    type: a,
	    key: k,
	    ref: h,
	    props: d,
	    _owner: G.current
	  };
	}
	function K(a, b) {
	  return {
	    $$typeof: n,
	    type: a.type,
	    key: b,
	    ref: a.ref,
	    props: a.props,
	    _owner: a._owner
	  };
	}
	function L(a) {
	  return "object" === typeof a && null !== a && a.$$typeof === n;
	}
	function escape(a) {
	  var b = {
	    "=": "=0",
	    ":": "=2"
	  };
	  return "$" + a.replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}
	var M = /\/+/g;
	function N(a, b) {
	  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function O(a, b, c, e, d) {
	  var k = typeof a;
	  if ("undefined" === k || "boolean" === k) a = null;
	  var h = !1;
	  if (null === a) h = !0;else switch (k) {
	    case "string":
	    case "number":
	      h = !0;
	      break;
	    case "object":
	      switch (a.$$typeof) {
	        case n:
	        case p:
	          h = !0;
	      }
	  }
	  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
	    return a;
	  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
	  h = 0;
	  e = "" === e ? "." : e + ":";
	  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
	    k = a[g];
	    var f = e + N(k, g);
	    h += O(k, b, c, f, d);
	  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
	  return h;
	}
	function P(a, b, c) {
	  if (null == a) return a;
	  var e = [],
	    d = 0;
	  O(a, e, "", "", function (a) {
	    return b.call(c, a, d++);
	  });
	  return e;
	}
	function Q(a) {
	  if (-1 === a._status) {
	    var b = a._result;
	    b = b();
	    a._status = 0;
	    a._result = b;
	    b.then(function (b) {
	      0 === a._status && (b = b.default, a._status = 1, a._result = b);
	    }, function (b) {
	      0 === a._status && (a._status = 2, a._result = b);
	    });
	  }
	  if (1 === a._status) return a._result;
	  throw a._result;
	}
	var R = {
	  current: null
	};
	function S() {
	  var a = R.current;
	  if (null === a) throw Error(z(321));
	  return a;
	}
	var T = {
	  ReactCurrentDispatcher: R,
	  ReactCurrentBatchConfig: {
	    transition: 0
	  },
	  ReactCurrentOwner: G,
	  IsSomeRendererActing: {
	    current: !1
	  },
	  assign: l
	};
	react_production_min.Children = {
	  map: P,
	  forEach: function (a, b, c) {
	    P(a, function () {
	      b.apply(this, arguments);
	    }, c);
	  },
	  count: function (a) {
	    var b = 0;
	    P(a, function () {
	      b++;
	    });
	    return b;
	  },
	  toArray: function (a) {
	    return P(a, function (a) {
	      return a;
	    }) || [];
	  },
	  only: function (a) {
	    if (!L(a)) throw Error(z(143));
	    return a;
	  }
	};
	react_production_min.Component = C;
	react_production_min.PureComponent = E;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
	react_production_min.cloneElement = function (a, b, c) {
	  if (null === a || void 0 === a) throw Error(z(267, a));
	  var e = l({}, a.props),
	    d = a.key,
	    k = a.ref,
	    h = a._owner;
	  if (null != b) {
	    void 0 !== b.ref && (k = b.ref, h = G.current);
	    void 0 !== b.key && (d = "" + b.key);
	    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	    for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	  }
	  var f = arguments.length - 2;
	  if (1 === f) e.children = c;else if (1 < f) {
	    g = Array(f);
	    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
	    e.children = g;
	  }
	  return {
	    $$typeof: n,
	    type: a.type,
	    key: d,
	    ref: k,
	    props: e,
	    _owner: h
	  };
	};
	react_production_min.createContext = function (a, b) {
	  void 0 === b && (b = null);
	  a = {
	    $$typeof: r,
	    _calculateChangedBits: b,
	    _currentValue: a,
	    _currentValue2: a,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  a.Provider = {
	    $$typeof: q,
	    _context: a
	  };
	  return a.Consumer = a;
	};
	react_production_min.createElement = J;
	react_production_min.createFactory = function (a) {
	  var b = J.bind(null, a);
	  b.type = a;
	  return b;
	};
	react_production_min.createRef = function () {
	  return {
	    current: null
	  };
	};
	react_production_min.forwardRef = function (a) {
	  return {
	    $$typeof: t,
	    render: a
	  };
	};
	react_production_min.isValidElement = L;
	react_production_min.lazy = function (a) {
	  return {
	    $$typeof: v,
	    _payload: {
	      _status: -1,
	      _result: a
	    },
	    _init: Q
	  };
	};
	react_production_min.memo = function (a, b) {
	  return {
	    $$typeof: u,
	    type: a,
	    compare: void 0 === b ? null : b
	  };
	};
	react_production_min.useCallback = function (a, b) {
	  return S().useCallback(a, b);
	};
	react_production_min.useContext = function (a, b) {
	  return S().useContext(a, b);
	};
	react_production_min.useDebugValue = function () {};
	react_production_min.useEffect = function (a, b) {
	  return S().useEffect(a, b);
	};
	react_production_min.useImperativeHandle = function (a, b, c) {
	  return S().useImperativeHandle(a, b, c);
	};
	react_production_min.useLayoutEffect = function (a, b) {
	  return S().useLayoutEffect(a, b);
	};
	react_production_min.useMemo = function (a, b) {
	  return S().useMemo(a, b);
	};
	react_production_min.useReducer = function (a, b, c) {
	  return S().useReducer(a, b, c);
	};
	react_production_min.useRef = function (a) {
	  return S().useRef(a);
	};
	react_production_min.useState = function (a) {
	  return S().useState(a);
	};
	react_production_min.version = "17.0.2";
	return react_production_min;
}

{
  react.exports = requireReact_production_min();
}

var reactExports = react.exports;
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var React$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: React
}, [reactExports]);

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredScheduler_production_min;

function requireScheduler_production_min () {
	if (hasRequiredScheduler_production_min) return scheduler_production_min;
	hasRequiredScheduler_production_min = 1;
	(function (exports) {

		var f, g, h, k;
		if ("object" === typeof performance && "function" === typeof performance.now) {
		  var l = performance;
		  exports.unstable_now = function () {
		    return l.now();
		  };
		} else {
		  var p = Date,
		    q = p.now();
		  exports.unstable_now = function () {
		    return p.now() - q;
		  };
		}
		if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
		  var t = null,
		    u = null,
		    w = function () {
		      if (null !== t) try {
		        var a = exports.unstable_now();
		        t(!0, a);
		        t = null;
		      } catch (b) {
		        throw setTimeout(w, 0), b;
		      }
		    };
		  f = function (a) {
		    null !== t ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
		  };
		  g = function (a, b) {
		    u = setTimeout(a, b);
		  };
		  h = function () {
		    clearTimeout(u);
		  };
		  exports.unstable_shouldYield = function () {
		    return !1;
		  };
		  k = exports.unstable_forceFrameRate = function () {};
		} else {
		  var x = window.setTimeout,
		    y = window.clearTimeout;
		  if ("undefined" !== typeof console) {
		    var z = window.cancelAnimationFrame;
		    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
		    "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
		  }
		  var A = !1,
		    B = null,
		    C = -1,
		    D = 5,
		    E = 0;
		  exports.unstable_shouldYield = function () {
		    return exports.unstable_now() >= E;
		  };
		  k = function () {};
		  exports.unstable_forceFrameRate = function (a) {
		    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
		  };
		  var F = new MessageChannel(),
		    G = F.port2;
		  F.port1.onmessage = function () {
		    if (null !== B) {
		      var a = exports.unstable_now();
		      E = a + D;
		      try {
		        B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
		      } catch (b) {
		        throw G.postMessage(null), b;
		      }
		    } else A = !1;
		  };
		  f = function (a) {
		    B = a;
		    A || (A = !0, G.postMessage(null));
		  };
		  g = function (a, b) {
		    C = x(function () {
		      a(exports.unstable_now());
		    }, b);
		  };
		  h = function () {
		    y(C);
		    C = -1;
		  };
		}
		function H(a, b) {
		  var c = a.length;
		  a.push(b);
		  a: for (;;) {
		    var d = c - 1 >>> 1,
		      e = a[d];
		    if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;else break a;
		  }
		}
		function J(a) {
		  a = a[0];
		  return void 0 === a ? null : a;
		}
		function K(a) {
		  var b = a[0];
		  if (void 0 !== b) {
		    var c = a.pop();
		    if (c !== b) {
		      a[0] = c;
		      a: for (var d = 0, e = a.length; d < e;) {
		        var m = 2 * (d + 1) - 1,
		          n = a[m],
		          v = m + 1,
		          r = a[v];
		        if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;else break a;
		      }
		    }
		    return b;
		  }
		  return null;
		}
		function I(a, b) {
		  var c = a.sortIndex - b.sortIndex;
		  return 0 !== c ? c : a.id - b.id;
		}
		var L = [],
		  M = [],
		  N = 1,
		  O = null,
		  P = 3,
		  Q = !1,
		  R = !1,
		  S = !1;
		function T(a) {
		  for (var b = J(M); null !== b;) {
		    if (null === b.callback) K(M);else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);else break;
		    b = J(M);
		  }
		}
		function U(a) {
		  S = !1;
		  T(a);
		  if (!R) if (null !== J(L)) R = !0, f(V);else {
		    var b = J(M);
		    null !== b && g(U, b.startTime - a);
		  }
		}
		function V(a, b) {
		  R = !1;
		  S && (S = !1, h());
		  Q = !0;
		  var c = P;
		  try {
		    T(b);
		    for (O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());) {
		      var d = O.callback;
		      if ("function" === typeof d) {
		        O.callback = null;
		        P = O.priorityLevel;
		        var e = d(O.expirationTime <= b);
		        b = exports.unstable_now();
		        "function" === typeof e ? O.callback = e : O === J(L) && K(L);
		        T(b);
		      } else K(L);
		      O = J(L);
		    }
		    if (null !== O) var m = !0;else {
		      var n = J(M);
		      null !== n && g(U, n.startTime - b);
		      m = !1;
		    }
		    return m;
		  } finally {
		    O = null, P = c, Q = !1;
		  }
		}
		var W = k;
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function (a) {
		  a.callback = null;
		};
		exports.unstable_continueExecution = function () {
		  R || Q || (R = !0, f(V));
		};
		exports.unstable_getCurrentPriorityLevel = function () {
		  return P;
		};
		exports.unstable_getFirstCallbackNode = function () {
		  return J(L);
		};
		exports.unstable_next = function (a) {
		  switch (P) {
		    case 1:
		    case 2:
		    case 3:
		      var b = 3;
		      break;
		    default:
		      b = P;
		  }
		  var c = P;
		  P = b;
		  try {
		    return a();
		  } finally {
		    P = c;
		  }
		};
		exports.unstable_pauseExecution = function () {};
		exports.unstable_requestPaint = W;
		exports.unstable_runWithPriority = function (a, b) {
		  switch (a) {
		    case 1:
		    case 2:
		    case 3:
		    case 4:
		    case 5:
		      break;
		    default:
		      a = 3;
		  }
		  var c = P;
		  P = a;
		  try {
		    return b();
		  } finally {
		    P = c;
		  }
		};
		exports.unstable_scheduleCallback = function (a, b, c) {
		  var d = exports.unstable_now();
		  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
		  switch (a) {
		    case 1:
		      var e = -1;
		      break;
		    case 2:
		      e = 250;
		      break;
		    case 5:
		      e = 1073741823;
		      break;
		    case 4:
		      e = 1E4;
		      break;
		    default:
		      e = 5E3;
		  }
		  e = c + e;
		  a = {
		    id: N++,
		    callback: b,
		    priorityLevel: a,
		    startTime: c,
		    expirationTime: e,
		    sortIndex: -1
		  };
		  c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, f(V)));
		  return a;
		};
		exports.unstable_wrapCallback = function (a) {
		  var b = P;
		  return function () {
		    var c = P;
		    P = b;
		    try {
		      return a.apply(this, arguments);
		    } finally {
		      P = c;
		    }
		  };
		}; 
	} (scheduler_production_min));
	return scheduler_production_min;
}

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler.exports;
	hasRequiredScheduler = 1;

	{
	  scheduler.exports = requireScheduler_production_min();
	}
	return scheduler.exports;
}

/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production_min;

function requireReactDom_production_min () {
	if (hasRequiredReactDom_production_min) return reactDom_production_min;
	hasRequiredReactDom_production_min = 1;

	var aa = reactExports,
	  m = requireObjectAssign(),
	  r = requireScheduler();
	function y(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	if (!aa) throw Error(y(227));
	var ba = new Set(),
	  ca = {};
	function da(a, b) {
	  ea(a, b);
	  ea(a + "Capture", b);
	}
	function ea(a, b) {
	  ca[a] = b;
	  for (a = 0; a < b.length; a++) ba.add(b[a]);
	}
	var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
	  ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	  ia = Object.prototype.hasOwnProperty,
	  ja = {},
	  ka = {};
	function la(a) {
	  if (ia.call(ka, a)) return !0;
	  if (ia.call(ja, a)) return !1;
	  if (ha.test(a)) return ka[a] = !0;
	  ja[a] = !0;
	  return !1;
	}
	function ma(a, b, c, d) {
	  if (null !== c && 0 === c.type) return !1;
	  switch (typeof b) {
	    case "function":
	    case "symbol":
	      return !0;
	    case "boolean":
	      if (d) return !1;
	      if (null !== c) return !c.acceptsBooleans;
	      a = a.toLowerCase().slice(0, 5);
	      return "data-" !== a && "aria-" !== a;
	    default:
	      return !1;
	  }
	}
	function na(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || ma(a, b, c, d)) return !0;
	  if (d) return !1;
	  if (null !== c) switch (c.type) {
	    case 3:
	      return !b;
	    case 4:
	      return !1 === b;
	    case 5:
	      return isNaN(b);
	    case 6:
	      return isNaN(b) || 1 > b;
	  }
	  return !1;
	}
	function B(a, b, c, d, e, f, g) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	  this.attributeName = d;
	  this.attributeNamespace = e;
	  this.mustUseProperty = c;
	  this.propertyName = a;
	  this.type = b;
	  this.sanitizeURL = f;
	  this.removeEmptyString = g;
	}
	var D = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  D[a] = new B(a, 0, !1, a, null, !1, !1);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];
	  D[b] = new B(b, 1, !1, a[1], null, !1, !1);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  D[a] = new B(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	  D[a] = new B(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  D[a] = new B(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  D[a] = new B(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function (a) {
	  D[a] = new B(a, 4, !1, a, null, !1, !1);
	});
	["cols", "rows", "size", "span"].forEach(function (a) {
	  D[a] = new B(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function (a) {
	  D[a] = new B(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var oa = /[\-:]([a-z])/g;
	function pa(a) {
	  return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D[b] = new B(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D[b] = new B(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D[b] = new B(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function (a) {
	  D[a] = new B(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	D.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	["src", "href", "action", "formAction"].forEach(function (a) {
	  D[a] = new B(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function qa(a, b, c, d) {
	  var e = D.hasOwnProperty(b) ? D[b] : null;
	  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
	  f || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
	}
	var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	  sa = 60103,
	  ta = 60106,
	  ua = 60107,
	  wa = 60108,
	  xa = 60114,
	  ya = 60109,
	  za = 60110,
	  Aa = 60112,
	  Ba = 60113,
	  Ca = 60120,
	  Da = 60115,
	  Ea = 60116,
	  Fa = 60121,
	  Ga = 60128,
	  Ha = 60129,
	  Ia = 60130,
	  Ja = 60131;
	if ("function" === typeof Symbol && Symbol.for) {
	  var E = Symbol.for;
	  sa = E("react.element");
	  ta = E("react.portal");
	  ua = E("react.fragment");
	  wa = E("react.strict_mode");
	  xa = E("react.profiler");
	  ya = E("react.provider");
	  za = E("react.context");
	  Aa = E("react.forward_ref");
	  Ba = E("react.suspense");
	  Ca = E("react.suspense_list");
	  Da = E("react.memo");
	  Ea = E("react.lazy");
	  Fa = E("react.block");
	  E("react.scope");
	  Ga = E("react.opaque.id");
	  Ha = E("react.debug_trace_mode");
	  Ia = E("react.offscreen");
	  Ja = E("react.legacy_hidden");
	}
	var Ka = "function" === typeof Symbol && Symbol.iterator;
	function La(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = Ka && a[Ka] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	var Ma;
	function Na(a) {
	  if (void 0 === Ma) try {
	    throw Error();
	  } catch (c) {
	    var b = c.stack.trim().match(/\n( *(at )?)/);
	    Ma = b && b[1] || "";
	  }
	  return "\n" + Ma + a;
	}
	var Oa = !1;
	function Pa(a, b) {
	  if (!a || Oa) return "";
	  Oa = !0;
	  var c = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    if (b) {
	      if (b = function () {
	        throw Error();
	      }, Object.defineProperty(b.prototype, "props", {
	        set: function () {
	          throw Error();
	        }
	      }), "object" === typeof Reflect && Reflect.construct) {
	        try {
	          Reflect.construct(b, []);
	        } catch (k) {
	          var d = k;
	        }
	        Reflect.construct(a, [], b);
	      } else {
	        try {
	          b.call();
	        } catch (k) {
	          d = k;
	        }
	        a.call(b.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (k) {
	        d = k;
	      }
	      a();
	    }
	  } catch (k) {
	    if (k && d && "string" === typeof k.stack) {
	      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
	      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
	        if (1 !== g || 1 !== h) {
	          do if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at "); while (1 <= g && 0 <= h);
	        }
	        break;
	      }
	    }
	  } finally {
	    Oa = !1, Error.prepareStackTrace = c;
	  }
	  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
	}
	function Qa(a) {
	  switch (a.tag) {
	    case 5:
	      return Na(a.type);
	    case 16:
	      return Na("Lazy");
	    case 13:
	      return Na("Suspense");
	    case 19:
	      return Na("SuspenseList");
	    case 0:
	    case 2:
	    case 15:
	      return a = Pa(a.type, !1), a;
	    case 11:
	      return a = Pa(a.type.render, !1), a;
	    case 22:
	      return a = Pa(a.type._render, !1), a;
	    case 1:
	      return a = Pa(a.type, !0), a;
	    default:
	      return "";
	  }
	}
	function Ra(a) {
	  if (null == a) return null;
	  if ("function" === typeof a) return a.displayName || a.name || null;
	  if ("string" === typeof a) return a;
	  switch (a) {
	    case ua:
	      return "Fragment";
	    case ta:
	      return "Portal";
	    case xa:
	      return "Profiler";
	    case wa:
	      return "StrictMode";
	    case Ba:
	      return "Suspense";
	    case Ca:
	      return "SuspenseList";
	  }
	  if ("object" === typeof a) switch (a.$$typeof) {
	    case za:
	      return (a.displayName || "Context") + ".Consumer";
	    case ya:
	      return (a._context.displayName || "Context") + ".Provider";
	    case Aa:
	      var b = a.render;
	      b = b.displayName || b.name || "";
	      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
	    case Da:
	      return Ra(a.type);
	    case Fa:
	      return Ra(a._render);
	    case Ea:
	      b = a._payload;
	      a = a._init;
	      try {
	        return Ra(a(b));
	      } catch (c) {}
	  }
	  return null;
	}
	function Sa(a) {
	  switch (typeof a) {
	    case "boolean":
	    case "number":
	    case "object":
	    case "string":
	    case "undefined":
	      return a;
	    default:
	      return "";
	  }
	}
	function Ta(a) {
	  var b = a.type;
	  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
	  var b = Ta(a) ? "checked" : "value",
	    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
	    d = "" + a[b];
	  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	    var e = c.get,
	      f = c.set;
	    Object.defineProperty(a, b, {
	      configurable: !0,
	      get: function () {
	        return e.call(this);
	      },
	      set: function (a) {
	        d = "" + a;
	        f.call(this, a);
	      }
	    });
	    Object.defineProperty(a, b, {
	      enumerable: c.enumerable
	    });
	    return {
	      getValue: function () {
	        return d;
	      },
	      setValue: function (a) {
	        d = "" + a;
	      },
	      stopTracking: function () {
	        a._valueTracker = null;
	        delete a[b];
	      }
	    };
	  }
	}
	function Va(a) {
	  a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
	  if (!a) return !1;
	  var b = a._valueTracker;
	  if (!b) return !0;
	  var c = b.getValue();
	  var d = "";
	  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
	  a = d;
	  return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
	  a = a || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof a) return null;
	  try {
	    return a.activeElement || a.body;
	  } catch (b) {
	    return a.body;
	  }
	}
	function Ya(a, b) {
	  var c = b.checked;
	  return m({}, b, {
	    defaultChecked: void 0,
	    defaultValue: void 0,
	    value: void 0,
	    checked: null != c ? c : a._wrapperState.initialChecked
	  });
	}
	function Za(a, b) {
	  var c = null == b.defaultValue ? "" : b.defaultValue,
	    d = null != b.checked ? b.checked : b.defaultChecked;
	  c = Sa(null != b.value ? b.value : c);
	  a._wrapperState = {
	    initialChecked: d,
	    initialValue: c,
	    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	  };
	}
	function $a(a, b) {
	  b = b.checked;
	  null != b && qa(a, "checked", b, !1);
	}
	function ab(a, b) {
	  $a(a, b);
	  var c = Sa(b.value),
	    d = b.type;
	  if (null != c) {
	    if ("number" === d) {
	      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	    } else a.value !== "" + c && (a.value = "" + c);
	  } else if ("submit" === d || "reset" === d) {
	    a.removeAttribute("value");
	    return;
	  }
	  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
	  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function cb(a, b, c) {
	  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
	    var d = b.type;
	    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
	    b = "" + a._wrapperState.initialValue;
	    c || b === a.value || (a.value = b);
	    a.defaultValue = b;
	  }
	  c = a.name;
	  "" !== c && (a.name = "");
	  a.defaultChecked = !!a._wrapperState.initialChecked;
	  "" !== c && (a.name = c);
	}
	function bb(a, b, c) {
	  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	function db(a) {
	  var b = "";
	  aa.Children.forEach(a, function (a) {
	    null != a && (b += a);
	  });
	  return b;
	}
	function eb(a, b) {
	  a = m({
	    children: void 0
	  }, b);
	  if (b = db(b.children)) a.children = b;
	  return a;
	}
	function fb(a, b, c, d) {
	  a = a.options;
	  if (b) {
	    b = {};
	    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
	    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
	  } else {
	    c = "" + Sa(c);
	    b = null;
	    for (e = 0; e < a.length; e++) {
	      if (a[e].value === c) {
	        a[e].selected = !0;
	        d && (a[e].defaultSelected = !0);
	        return;
	      }
	      null !== b || a[e].disabled || (b = a[e]);
	    }
	    null !== b && (b.selected = !0);
	  }
	}
	function gb(a, b) {
	  if (null != b.dangerouslySetInnerHTML) throw Error(y(91));
	  return m({}, b, {
	    value: void 0,
	    defaultValue: void 0,
	    children: "" + a._wrapperState.initialValue
	  });
	}
	function hb(a, b) {
	  var c = b.value;
	  if (null == c) {
	    c = b.children;
	    b = b.defaultValue;
	    if (null != c) {
	      if (null != b) throw Error(y(92));
	      if (Array.isArray(c)) {
	        if (!(1 >= c.length)) throw Error(y(93));
	        c = c[0];
	      }
	      b = c;
	    }
	    null == b && (b = "");
	    c = b;
	  }
	  a._wrapperState = {
	    initialValue: Sa(c)
	  };
	}
	function ib(a, b) {
	  var c = Sa(b.value),
	    d = Sa(b.defaultValue);
	  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
	  null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
	  var b = a.textContent;
	  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	var kb = {
	  html: "http://www.w3.org/1999/xhtml",
	  mathml: "http://www.w3.org/1998/Math/MathML",
	  svg: "http://www.w3.org/2000/svg"
	};
	function lb(a) {
	  switch (a) {
	    case "svg":
	      return "http://www.w3.org/2000/svg";
	    case "math":
	      return "http://www.w3.org/1998/Math/MathML";
	    default:
	      return "http://www.w3.org/1999/xhtml";
	  }
	}
	function mb(a, b) {
	  return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var nb,
	  ob = function (a) {
	    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	      MSApp.execUnsafeLocalFunction(function () {
	        return a(b, c, d, e);
	      });
	    } : a;
	  }(function (a, b) {
	    if (a.namespaceURI !== kb.svg || "innerHTML" in a) a.innerHTML = b;else {
	      nb = nb || document.createElement("div");
	      nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
	      for (b = nb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
	      for (; b.firstChild;) a.appendChild(b.firstChild);
	    }
	  });
	function pb(a, b) {
	  if (b) {
	    var c = a.firstChild;
	    if (c && c === a.lastChild && 3 === c.nodeType) {
	      c.nodeValue = b;
	      return;
	    }
	  }
	  a.textContent = b;
	}
	var qb = {
	    animationIterationCount: !0,
	    borderImageOutset: !0,
	    borderImageSlice: !0,
	    borderImageWidth: !0,
	    boxFlex: !0,
	    boxFlexGroup: !0,
	    boxOrdinalGroup: !0,
	    columnCount: !0,
	    columns: !0,
	    flex: !0,
	    flexGrow: !0,
	    flexPositive: !0,
	    flexShrink: !0,
	    flexNegative: !0,
	    flexOrder: !0,
	    gridArea: !0,
	    gridRow: !0,
	    gridRowEnd: !0,
	    gridRowSpan: !0,
	    gridRowStart: !0,
	    gridColumn: !0,
	    gridColumnEnd: !0,
	    gridColumnSpan: !0,
	    gridColumnStart: !0,
	    fontWeight: !0,
	    lineClamp: !0,
	    lineHeight: !0,
	    opacity: !0,
	    order: !0,
	    orphans: !0,
	    tabSize: !0,
	    widows: !0,
	    zIndex: !0,
	    zoom: !0,
	    fillOpacity: !0,
	    floodOpacity: !0,
	    stopOpacity: !0,
	    strokeDasharray: !0,
	    strokeDashoffset: !0,
	    strokeMiterlimit: !0,
	    strokeOpacity: !0,
	    strokeWidth: !0
	  },
	  rb = ["Webkit", "ms", "Moz", "O"];
	Object.keys(qb).forEach(function (a) {
	  rb.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);
	    qb[b] = qb[a];
	  });
	});
	function sb(a, b, c) {
	  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
	}
	function tb(a, b) {
	  a = a.style;
	  for (var c in b) if (b.hasOwnProperty(c)) {
	    var d = 0 === c.indexOf("--"),
	      e = sb(c, b[c], d);
	    "float" === c && (c = "cssFloat");
	    d ? a.setProperty(c, e) : a[c] = e;
	  }
	}
	var ub = m({
	  menuitem: !0
	}, {
	  area: !0,
	  base: !0,
	  br: !0,
	  col: !0,
	  embed: !0,
	  hr: !0,
	  img: !0,
	  input: !0,
	  keygen: !0,
	  link: !0,
	  meta: !0,
	  param: !0,
	  source: !0,
	  track: !0,
	  wbr: !0
	});
	function vb(a, b) {
	  if (b) {
	    if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(y(137, a));
	    if (null != b.dangerouslySetInnerHTML) {
	      if (null != b.children) throw Error(y(60));
	      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(y(61));
	    }
	    if (null != b.style && "object" !== typeof b.style) throw Error(y(62));
	  }
	}
	function wb(a, b) {
	  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
	  switch (a) {
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
	function xb(a) {
	  a = a.target || a.srcElement || window;
	  a.correspondingUseElement && (a = a.correspondingUseElement);
	  return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null,
	  zb = null,
	  Ab = null;
	function Bb(a) {
	  if (a = Cb(a)) {
	    if ("function" !== typeof yb) throw Error(y(280));
	    var b = a.stateNode;
	    b && (b = Db(b), yb(a.stateNode, a.type, b));
	  }
	}
	function Eb(a) {
	  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
	  if (zb) {
	    var a = zb,
	      b = Ab;
	    Ab = zb = null;
	    Bb(a);
	    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
	  }
	}
	function Gb(a, b) {
	  return a(b);
	}
	function Hb(a, b, c, d, e) {
	  return a(b, c, d, e);
	}
	function Ib() {}
	var Jb = Gb,
	  Kb = !1,
	  Lb = !1;
	function Mb() {
	  if (null !== zb || null !== Ab) Ib(), Fb();
	}
	function Nb(a, b, c) {
	  if (Lb) return a(b, c);
	  Lb = !0;
	  try {
	    return Jb(a, b, c);
	  } finally {
	    Lb = !1, Mb();
	  }
	}
	function Ob(a, b) {
	  var c = a.stateNode;
	  if (null === c) return null;
	  var d = Db(c);
	  if (null === d) return null;
	  c = d[b];
	  a: switch (b) {
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
	      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	      a = !d;
	      break a;
	    default:
	      a = !1;
	  }
	  if (a) return null;
	  if (c && "function" !== typeof c) throw Error(y(231, b, typeof c));
	  return c;
	}
	var Pb = !1;
	if (fa) try {
	  var Qb = {};
	  Object.defineProperty(Qb, "passive", {
	    get: function () {
	      Pb = !0;
	    }
	  });
	  window.addEventListener("test", Qb, Qb);
	  window.removeEventListener("test", Qb, Qb);
	} catch (a) {
	  Pb = !1;
	}
	function Rb(a, b, c, d, e, f, g, h, k) {
	  var l = Array.prototype.slice.call(arguments, 3);
	  try {
	    b.apply(c, l);
	  } catch (n) {
	    this.onError(n);
	  }
	}
	var Sb = !1,
	  Tb = null,
	  Ub = !1,
	  Vb = null,
	  Wb = {
	    onError: function (a) {
	      Sb = !0;
	      Tb = a;
	    }
	  };
	function Xb(a, b, c, d, e, f, g, h, k) {
	  Sb = !1;
	  Tb = null;
	  Rb.apply(Wb, arguments);
	}
	function Yb(a, b, c, d, e, f, g, h, k) {
	  Xb.apply(this, arguments);
	  if (Sb) {
	    if (Sb) {
	      var l = Tb;
	      Sb = !1;
	      Tb = null;
	    } else throw Error(y(198));
	    Ub || (Ub = !0, Vb = l);
	  }
	}
	function Zb(a) {
	  var b = a,
	    c = a;
	  if (a.alternate) for (; b.return;) b = b.return;else {
	    a = b;
	    do b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return; while (a);
	  }
	  return 3 === b.tag ? c : null;
	}
	function $b(a) {
	  if (13 === a.tag) {
	    var b = a.memoizedState;
	    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	    if (null !== b) return b.dehydrated;
	  }
	  return null;
	}
	function ac(a) {
	  if (Zb(a) !== a) throw Error(y(188));
	}
	function bc(a) {
	  var b = a.alternate;
	  if (!b) {
	    b = Zb(a);
	    if (null === b) throw Error(y(188));
	    return b !== a ? null : a;
	  }
	  for (var c = a, d = b;;) {
	    var e = c.return;
	    if (null === e) break;
	    var f = e.alternate;
	    if (null === f) {
	      d = e.return;
	      if (null !== d) {
	        c = d;
	        continue;
	      }
	      break;
	    }
	    if (e.child === f.child) {
	      for (f = e.child; f;) {
	        if (f === c) return ac(e), a;
	        if (f === d) return ac(e), b;
	        f = f.sibling;
	      }
	      throw Error(y(188));
	    }
	    if (c.return !== d.return) c = e, d = f;else {
	      for (var g = !1, h = e.child; h;) {
	        if (h === c) {
	          g = !0;
	          c = e;
	          d = f;
	          break;
	        }
	        if (h === d) {
	          g = !0;
	          d = e;
	          c = f;
	          break;
	        }
	        h = h.sibling;
	      }
	      if (!g) {
	        for (h = f.child; h;) {
	          if (h === c) {
	            g = !0;
	            c = f;
	            d = e;
	            break;
	          }
	          if (h === d) {
	            g = !0;
	            d = f;
	            c = e;
	            break;
	          }
	          h = h.sibling;
	        }
	        if (!g) throw Error(y(189));
	      }
	    }
	    if (c.alternate !== d) throw Error(y(190));
	  }
	  if (3 !== c.tag) throw Error(y(188));
	  return c.stateNode.current === c ? a : b;
	}
	function cc(a) {
	  a = bc(a);
	  if (!a) return null;
	  for (var b = a;;) {
	    if (5 === b.tag || 6 === b.tag) return b;
	    if (b.child) b.child.return = b, b = b.child;else {
	      if (b === a) break;
	      for (; !b.sibling;) {
	        if (!b.return || b.return === a) return null;
	        b = b.return;
	      }
	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }
	  return null;
	}
	function dc(a, b) {
	  for (var c = a.alternate; null !== b;) {
	    if (b === a || b === c) return !0;
	    b = b.return;
	  }
	  return !1;
	}
	var ec,
	  fc,
	  gc,
	  hc,
	  ic = !1,
	  jc = [],
	  kc = null,
	  lc = null,
	  mc = null,
	  nc = new Map(),
	  oc = new Map(),
	  pc = [],
	  qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function rc(a, b, c, d, e) {
	  return {
	    blockedOn: a,
	    domEventName: b,
	    eventSystemFlags: c | 16,
	    nativeEvent: e,
	    targetContainers: [d]
	  };
	}
	function sc(a, b) {
	  switch (a) {
	    case "focusin":
	    case "focusout":
	      kc = null;
	      break;
	    case "dragenter":
	    case "dragleave":
	      lc = null;
	      break;
	    case "mouseover":
	    case "mouseout":
	      mc = null;
	      break;
	    case "pointerover":
	    case "pointerout":
	      nc.delete(b.pointerId);
	      break;
	    case "gotpointercapture":
	    case "lostpointercapture":
	      oc.delete(b.pointerId);
	  }
	}
	function tc(a, b, c, d, e, f) {
	  if (null === a || a.nativeEvent !== f) return a = rc(b, c, d, e, f), null !== b && (b = Cb(b), null !== b && fc(b)), a;
	  a.eventSystemFlags |= d;
	  b = a.targetContainers;
	  null !== e && -1 === b.indexOf(e) && b.push(e);
	  return a;
	}
	function uc(a, b, c, d, e) {
	  switch (b) {
	    case "focusin":
	      return kc = tc(kc, a, b, c, d, e), !0;
	    case "dragenter":
	      return lc = tc(lc, a, b, c, d, e), !0;
	    case "mouseover":
	      return mc = tc(mc, a, b, c, d, e), !0;
	    case "pointerover":
	      var f = e.pointerId;
	      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
	      return !0;
	    case "gotpointercapture":
	      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), !0;
	  }
	  return !1;
	}
	function vc(a) {
	  var b = wc(a.target);
	  if (null !== b) {
	    var c = Zb(b);
	    if (null !== c) if (b = c.tag, 13 === b) {
	      if (b = $b(c), null !== b) {
	        a.blockedOn = b;
	        hc(a.lanePriority, function () {
	          r.unstable_runWithPriority(a.priority, function () {
	            gc(c);
	          });
	        });
	        return;
	      }
	    } else if (3 === b && c.stateNode.hydrate) {
	      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	      return;
	    }
	  }
	  a.blockedOn = null;
	}
	function xc(a) {
	  if (null !== a.blockedOn) return !1;
	  for (var b = a.targetContainers; 0 < b.length;) {
	    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	    if (null !== c) return b = Cb(c), null !== b && fc(b), a.blockedOn = c, !1;
	    b.shift();
	  }
	  return !0;
	}
	function zc(a, b, c) {
	  xc(a) && c.delete(b);
	}
	function Ac() {
	  for (ic = !1; 0 < jc.length;) {
	    var a = jc[0];
	    if (null !== a.blockedOn) {
	      a = Cb(a.blockedOn);
	      null !== a && ec(a);
	      break;
	    }
	    for (var b = a.targetContainers; 0 < b.length;) {
	      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	      if (null !== c) {
	        a.blockedOn = c;
	        break;
	      }
	      b.shift();
	    }
	    null === a.blockedOn && jc.shift();
	  }
	  null !== kc && xc(kc) && (kc = null);
	  null !== lc && xc(lc) && (lc = null);
	  null !== mc && xc(mc) && (mc = null);
	  nc.forEach(zc);
	  oc.forEach(zc);
	}
	function Bc(a, b) {
	  a.blockedOn === b && (a.blockedOn = null, ic || (ic = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
	}
	function Cc(a) {
	  function b(b) {
	    return Bc(b, a);
	  }
	  if (0 < jc.length) {
	    Bc(jc[0], a);
	    for (var c = 1; c < jc.length; c++) {
	      var d = jc[c];
	      d.blockedOn === a && (d.blockedOn = null);
	    }
	  }
	  null !== kc && Bc(kc, a);
	  null !== lc && Bc(lc, a);
	  null !== mc && Bc(mc, a);
	  nc.forEach(b);
	  oc.forEach(b);
	  for (c = 0; c < pc.length; c++) d = pc[c], d.blockedOn === a && (d.blockedOn = null);
	  for (; 0 < pc.length && (c = pc[0], null === c.blockedOn);) vc(c), null === c.blockedOn && pc.shift();
	}
	function Dc(a, b) {
	  var c = {};
	  c[a.toLowerCase()] = b.toLowerCase();
	  c["Webkit" + a] = "webkit" + b;
	  c["Moz" + a] = "moz" + b;
	  return c;
	}
	var Ec = {
	    animationend: Dc("Animation", "AnimationEnd"),
	    animationiteration: Dc("Animation", "AnimationIteration"),
	    animationstart: Dc("Animation", "AnimationStart"),
	    transitionend: Dc("Transition", "TransitionEnd")
	  },
	  Fc = {},
	  Gc = {};
	fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
	function Hc(a) {
	  if (Fc[a]) return Fc[a];
	  if (!Ec[a]) return a;
	  var b = Ec[a],
	    c;
	  for (c in b) if (b.hasOwnProperty(c) && c in Gc) return Fc[a] = b[c];
	  return a;
	}
	var Ic = Hc("animationend"),
	  Jc = Hc("animationiteration"),
	  Kc = Hc("animationstart"),
	  Lc = Hc("transitionend"),
	  Mc = new Map(),
	  Nc = new Map(),
	  Oc = ["abort", "abort", Ic, "animationEnd", Jc, "animationIteration", Kc, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Lc, "transitionEnd", "waiting", "waiting"];
	function Pc(a, b) {
	  for (var c = 0; c < a.length; c += 2) {
	    var d = a[c],
	      e = a[c + 1];
	    e = "on" + (e[0].toUpperCase() + e.slice(1));
	    Nc.set(d, b);
	    Mc.set(d, e);
	    da(e, [d]);
	  }
	}
	var Qc = r.unstable_now;
	Qc();
	var F = 8;
	function Rc(a) {
	  if (0 !== (1 & a)) return F = 15, 1;
	  if (0 !== (2 & a)) return F = 14, 2;
	  if (0 !== (4 & a)) return F = 13, 4;
	  var b = 24 & a;
	  if (0 !== b) return F = 12, b;
	  if (0 !== (a & 32)) return F = 11, 32;
	  b = 192 & a;
	  if (0 !== b) return F = 10, b;
	  if (0 !== (a & 256)) return F = 9, 256;
	  b = 3584 & a;
	  if (0 !== b) return F = 8, b;
	  if (0 !== (a & 4096)) return F = 7, 4096;
	  b = 4186112 & a;
	  if (0 !== b) return F = 6, b;
	  b = 62914560 & a;
	  if (0 !== b) return F = 5, b;
	  if (a & 67108864) return F = 4, 67108864;
	  if (0 !== (a & 134217728)) return F = 3, 134217728;
	  b = 805306368 & a;
	  if (0 !== b) return F = 2, b;
	  if (0 !== (1073741824 & a)) return F = 1, 1073741824;
	  F = 8;
	  return a;
	}
	function Sc(a) {
	  switch (a) {
	    case 99:
	      return 15;
	    case 98:
	      return 10;
	    case 97:
	    case 96:
	      return 8;
	    case 95:
	      return 2;
	    default:
	      return 0;
	  }
	}
	function Tc(a) {
	  switch (a) {
	    case 15:
	    case 14:
	      return 99;
	    case 13:
	    case 12:
	    case 11:
	    case 10:
	      return 98;
	    case 9:
	    case 8:
	    case 7:
	    case 6:
	    case 4:
	    case 5:
	      return 97;
	    case 3:
	    case 2:
	    case 1:
	      return 95;
	    case 0:
	      return 90;
	    default:
	      throw Error(y(358, a));
	  }
	}
	function Uc(a, b) {
	  var c = a.pendingLanes;
	  if (0 === c) return F = 0;
	  var d = 0,
	    e = 0,
	    f = a.expiredLanes,
	    g = a.suspendedLanes,
	    h = a.pingedLanes;
	  if (0 !== f) d = f, e = F = 15;else if (f = c & 134217727, 0 !== f) {
	    var k = f & ~g;
	    0 !== k ? (d = Rc(k), e = F) : (h &= f, 0 !== h && (d = Rc(h), e = F));
	  } else f = c & ~g, 0 !== f ? (d = Rc(f), e = F) : 0 !== h && (d = Rc(h), e = F);
	  if (0 === d) return 0;
	  d = 31 - Vc(d);
	  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
	  if (0 !== b && b !== d && 0 === (b & g)) {
	    Rc(b);
	    if (e <= F) return b;
	    F = e;
	  }
	  b = a.entangledLanes;
	  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
	  return d;
	}
	function Wc(a) {
	  a = a.pendingLanes & -1073741825;
	  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function Xc(a, b) {
	  switch (a) {
	    case 15:
	      return 1;
	    case 14:
	      return 2;
	    case 12:
	      return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;
	    case 10:
	      return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;
	    case 8:
	      return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;
	    case 2:
	      return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
	  }
	  throw Error(y(358, a));
	}
	function Yc(a) {
	  return a & -a;
	}
	function Zc(a) {
	  for (var b = [], c = 0; 31 > c; c++) b.push(a);
	  return b;
	}
	function $c(a, b, c) {
	  a.pendingLanes |= b;
	  var d = b - 1;
	  a.suspendedLanes &= d;
	  a.pingedLanes &= d;
	  a = a.eventTimes;
	  b = 31 - Vc(b);
	  a[b] = c;
	}
	var Vc = Math.clz32 ? Math.clz32 : ad,
	  bd = Math.log,
	  cd = Math.LN2;
	function ad(a) {
	  return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
	}
	var dd = r.unstable_UserBlockingPriority,
	  ed = r.unstable_runWithPriority,
	  fd = !0;
	function gd(a, b, c, d) {
	  Kb || Ib();
	  var e = hd,
	    f = Kb;
	  Kb = !0;
	  try {
	    Hb(e, a, b, c, d);
	  } finally {
	    (Kb = f) || Mb();
	  }
	}
	function id(a, b, c, d) {
	  ed(dd, hd.bind(null, a, b, c, d));
	}
	function hd(a, b, c, d) {
	  if (fd) {
	    var e;
	    if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a)) a = rc(null, a, b, c, d), jc.push(a);else {
	      var f = yc(a, b, c, d);
	      if (null === f) e && sc(a, d);else {
	        if (e) {
	          if (-1 < qc.indexOf(a)) {
	            a = rc(f, a, b, c, d);
	            jc.push(a);
	            return;
	          }
	          if (uc(f, a, b, c, d)) return;
	          sc(a, d);
	        }
	        jd(a, b, d, null, c);
	      }
	    }
	  }
	}
	function yc(a, b, c, d) {
	  var e = xb(d);
	  e = wc(e);
	  if (null !== e) {
	    var f = Zb(e);
	    if (null === f) e = null;else {
	      var g = f.tag;
	      if (13 === g) {
	        e = $b(f);
	        if (null !== e) return e;
	        e = null;
	      } else if (3 === g) {
	        if (f.stateNode.hydrate) return 3 === f.tag ? f.stateNode.containerInfo : null;
	        e = null;
	      } else f !== e && (e = null);
	    }
	  }
	  jd(a, b, d, e, c);
	  return null;
	}
	var kd = null,
	  ld = null,
	  md = null;
	function nd() {
	  if (md) return md;
	  var a,
	    b = ld,
	    c = b.length,
	    d,
	    e = "value" in kd ? kd.value : kd.textContent,
	    f = e.length;
	  for (a = 0; a < c && b[a] === e[a]; a++);
	  var g = c - a;
	  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
	  return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
	  var b = a.keyCode;
	  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	  10 === a && (a = 13);
	  return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
	  return !0;
	}
	function qd() {
	  return !1;
	}
	function rd(a) {
	  function b(b, d, e, f, g) {
	    this._reactName = b;
	    this._targetInst = e;
	    this.type = d;
	    this.nativeEvent = f;
	    this.target = g;
	    this.currentTarget = null;
	    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
	    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
	    this.isPropagationStopped = qd;
	    return this;
	  }
	  m(b.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = !0;
	      var a = this.nativeEvent;
	      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
	    },
	    stopPropagation: function () {
	      var a = this.nativeEvent;
	      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
	    },
	    persist: function () {},
	    isPersistent: pd
	  });
	  return b;
	}
	var sd = {
	    eventPhase: 0,
	    bubbles: 0,
	    cancelable: 0,
	    timeStamp: function (a) {
	      return a.timeStamp || Date.now();
	    },
	    defaultPrevented: 0,
	    isTrusted: 0
	  },
	  td = rd(sd),
	  ud = m({}, sd, {
	    view: 0,
	    detail: 0
	  }),
	  vd = rd(ud),
	  wd,
	  xd,
	  yd,
	  Ad = m({}, ud, {
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
	    getModifierState: zd,
	    button: 0,
	    buttons: 0,
	    relatedTarget: function (a) {
	      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
	    },
	    movementX: function (a) {
	      if ("movementX" in a) return a.movementX;
	      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
	      return wd;
	    },
	    movementY: function (a) {
	      return "movementY" in a ? a.movementY : xd;
	    }
	  }),
	  Bd = rd(Ad),
	  Cd = m({}, Ad, {
	    dataTransfer: 0
	  }),
	  Dd = rd(Cd),
	  Ed = m({}, ud, {
	    relatedTarget: 0
	  }),
	  Fd = rd(Ed),
	  Gd = m({}, sd, {
	    animationName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  Hd = rd(Gd),
	  Id = m({}, sd, {
	    clipboardData: function (a) {
	      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	    }
	  }),
	  Jd = rd(Id),
	  Kd = m({}, sd, {
	    data: 0
	  }),
	  Ld = rd(Kd),
	  Md = {
	    Esc: "Escape",
	    Spacebar: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Right: "ArrowRight",
	    Down: "ArrowDown",
	    Del: "Delete",
	    Win: "OS",
	    Menu: "ContextMenu",
	    Apps: "ContextMenu",
	    Scroll: "ScrollLock",
	    MozPrintableKey: "Unidentified"
	  },
	  Nd = {
	    8: "Backspace",
	    9: "Tab",
	    12: "Clear",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Escape",
	    32: " ",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "ArrowLeft",
	    38: "ArrowUp",
	    39: "ArrowRight",
	    40: "ArrowDown",
	    45: "Insert",
	    46: "Delete",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    144: "NumLock",
	    145: "ScrollLock",
	    224: "Meta"
	  },
	  Od = {
	    Alt: "altKey",
	    Control: "ctrlKey",
	    Meta: "metaKey",
	    Shift: "shiftKey"
	  };
	function Pd(a) {
	  var b = this.nativeEvent;
	  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
	  return Pd;
	}
	var Qd = m({}, ud, {
	    key: function (a) {
	      if (a.key) {
	        var b = Md[a.key] || a.key;
	        if ("Unidentified" !== b) return b;
	      }
	      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
	    },
	    code: 0,
	    location: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    repeat: 0,
	    locale: 0,
	    getModifierState: zd,
	    charCode: function (a) {
	      return "keypress" === a.type ? od(a) : 0;
	    },
	    keyCode: function (a) {
	      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    },
	    which: function (a) {
	      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    }
	  }),
	  Rd = rd(Qd),
	  Sd = m({}, Ad, {
	    pointerId: 0,
	    width: 0,
	    height: 0,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: 0,
	    isPrimary: 0
	  }),
	  Td = rd(Sd),
	  Ud = m({}, ud, {
	    touches: 0,
	    targetTouches: 0,
	    changedTouches: 0,
	    altKey: 0,
	    metaKey: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    getModifierState: zd
	  }),
	  Vd = rd(Ud),
	  Wd = m({}, sd, {
	    propertyName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  Xd = rd(Wd),
	  Yd = m({}, Ad, {
	    deltaX: function (a) {
	      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	    },
	    deltaY: function (a) {
	      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	    },
	    deltaZ: 0,
	    deltaMode: 0
	  }),
	  Zd = rd(Yd),
	  $d = [9, 13, 27, 32],
	  ae = fa && "CompositionEvent" in window,
	  be = null;
	fa && "documentMode" in document && (be = document.documentMode);
	var ce = fa && "TextEvent" in window && !be,
	  de = fa && (!ae || be && 8 < be && 11 >= be),
	  ee = String.fromCharCode(32),
	  fe = !1;
	function ge(a, b) {
	  switch (a) {
	    case "keyup":
	      return -1 !== $d.indexOf(b.keyCode);
	    case "keydown":
	      return 229 !== b.keyCode;
	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return !0;
	    default:
	      return !1;
	  }
	}
	function he(a) {
	  a = a.detail;
	  return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b) {
	  switch (a) {
	    case "compositionend":
	      return he(b);
	    case "keypress":
	      if (32 !== b.which) return null;
	      fe = !0;
	      return ee;
	    case "textInput":
	      return a = b.data, a === ee && fe ? null : a;
	    default:
	      return null;
	  }
	}
	function ke(a, b) {
	  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
	  switch (a) {
	    case "paste":
	      return null;
	    case "keypress":
	      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	        if (b.char && 1 < b.char.length) return b.char;
	        if (b.which) return String.fromCharCode(b.which);
	      }
	      return null;
	    case "compositionend":
	      return de && "ko" !== b.locale ? null : b.data;
	    default:
	      return null;
	  }
	}
	var le = {
	  color: !0,
	  date: !0,
	  datetime: !0,
	  "datetime-local": !0,
	  email: !0,
	  month: !0,
	  number: !0,
	  password: !0,
	  range: !0,
	  search: !0,
	  tel: !0,
	  text: !0,
	  time: !0,
	  url: !0,
	  week: !0
	};
	function me(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne(a, b, c, d) {
	  Eb(d);
	  b = oe(b, "onChange");
	  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
	    event: c,
	    listeners: b
	  }));
	}
	var pe = null,
	  qe = null;
	function re(a) {
	  se(a, 0);
	}
	function te(a) {
	  var b = ue(a);
	  if (Wa(b)) return a;
	}
	function ve(a, b) {
	  if ("change" === a) return b;
	}
	var we = !1;
	if (fa) {
	  var xe;
	  if (fa) {
	    var ye = ("oninput" in document);
	    if (!ye) {
	      var ze = document.createElement("div");
	      ze.setAttribute("oninput", "return;");
	      ye = "function" === typeof ze.oninput;
	    }
	    xe = ye;
	  } else xe = !1;
	  we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
	  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
	  if ("value" === a.propertyName && te(qe)) {
	    var b = [];
	    ne(b, qe, a, xb(a));
	    a = re;
	    if (Kb) a(b);else {
	      Kb = !0;
	      try {
	        Gb(a, b);
	      } finally {
	        Kb = !1, Mb();
	      }
	    }
	  }
	}
	function Ce(a, b, c) {
	  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
	  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b) {
	  if ("click" === a) return te(b);
	}
	function Fe(a, b) {
	  if ("input" === a || "change" === a) return te(b);
	}
	function Ge(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge,
	  Ie = Object.prototype.hasOwnProperty;
	function Je(a, b) {
	  if (He(a, b)) return !0;
	  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	  var c = Object.keys(a),
	    d = Object.keys(b);
	  if (c.length !== d.length) return !1;
	  for (d = 0; d < c.length; d++) if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]])) return !1;
	  return !0;
	}
	function Ke(a) {
	  for (; a && a.firstChild;) a = a.firstChild;
	  return a;
	}
	function Le(a, b) {
	  var c = Ke(a);
	  a = 0;
	  for (var d; c;) {
	    if (3 === c.nodeType) {
	      d = a + c.textContent.length;
	      if (a <= b && d >= b) return {
	        node: c,
	        offset: b - a
	      };
	      a = d;
	    }
	    a: {
	      for (; c;) {
	        if (c.nextSibling) {
	          c = c.nextSibling;
	          break a;
	        }
	        c = c.parentNode;
	      }
	      c = void 0;
	    }
	    c = Ke(c);
	  }
	}
	function Me(a, b) {
	  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Ne() {
	  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
	    try {
	      var c = "string" === typeof b.contentWindow.location.href;
	    } catch (d) {
	      c = !1;
	    }
	    if (c) a = b.contentWindow;else break;
	    b = Xa(a.document);
	  }
	  return b;
	}
	function Oe(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	var Pe = fa && "documentMode" in document && 11 >= document.documentMode,
	  Qe = null,
	  Re = null,
	  Se = null,
	  Te = !1;
	function Ue(a, b, c) {
	  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {
	    start: d.selectionStart,
	    end: d.selectionEnd
	  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	    anchorNode: d.anchorNode,
	    anchorOffset: d.anchorOffset,
	    focusNode: d.focusNode,
	    focusOffset: d.focusOffset
	  }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	    event: b,
	    listeners: d
	  }), b.target = Qe)));
	}
	Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
	Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
	Pc(Oc, 2);
	for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++) Nc.set(Ve[We], 0);
	ea("onMouseEnter", ["mouseout", "mouseover"]);
	ea("onMouseLeave", ["mouseout", "mouseover"]);
	ea("onPointerEnter", ["pointerout", "pointerover"]);
	ea("onPointerLeave", ["pointerout", "pointerover"]);
	da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	  Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
	function Ze(a, b, c) {
	  var d = a.type || "unknown-event";
	  a.currentTarget = c;
	  Yb(d, b, void 0, a);
	  a.currentTarget = null;
	}
	function se(a, b) {
	  b = 0 !== (b & 4);
	  for (var c = 0; c < a.length; c++) {
	    var d = a[c],
	      e = d.event;
	    d = d.listeners;
	    a: {
	      var f = void 0;
	      if (b) for (var g = d.length - 1; 0 <= g; g--) {
	        var h = d[g],
	          k = h.instance,
	          l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        Ze(e, h, l);
	        f = k;
	      } else for (g = 0; g < d.length; g++) {
	        h = d[g];
	        k = h.instance;
	        l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        Ze(e, h, l);
	        f = k;
	      }
	    }
	  }
	  if (Ub) throw a = Vb, Ub = !1, Vb = null, a;
	}
	function G(a, b) {
	  var c = $e(b),
	    d = a + "__bubble";
	  c.has(d) || (af(b, a, 2, !1), c.add(d));
	}
	var bf = "_reactListening" + Math.random().toString(36).slice(2);
	function cf(a) {
	  a[bf] || (a[bf] = !0, ba.forEach(function (b) {
	    Ye.has(b) || df(b, !1, a, null);
	    df(b, !0, a, null);
	  }));
	}
	function df(a, b, c, d) {
	  var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
	    f = c;
	  "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);
	  if (null !== d && !b && Ye.has(a)) {
	    if ("scroll" !== a) return;
	    e |= 2;
	    f = d;
	  }
	  var g = $e(f),
	    h = a + "__" + (b ? "capture" : "bubble");
	  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
	}
	function af(a, b, c, d) {
	  var e = Nc.get(b);
	  switch (void 0 === e ? 2 : e) {
	    case 0:
	      e = gd;
	      break;
	    case 1:
	      e = id;
	      break;
	    default:
	      e = hd;
	  }
	  c = e.bind(null, b, c, a);
	  e = void 0;
	  !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
	  d ? void 0 !== e ? a.addEventListener(b, c, {
	    capture: !0,
	    passive: e
	  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
	    passive: e
	  }) : a.addEventListener(b, c, !1);
	}
	function jd(a, b, c, d, e) {
	  var f = d;
	  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
	    if (null === d) return;
	    var g = d.tag;
	    if (3 === g || 4 === g) {
	      var h = d.stateNode.containerInfo;
	      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
	      if (4 === g) for (g = d.return; null !== g;) {
	        var k = g.tag;
	        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
	        g = g.return;
	      }
	      for (; null !== h;) {
	        g = wc(h);
	        if (null === g) return;
	        k = g.tag;
	        if (5 === k || 6 === k) {
	          d = f = g;
	          continue a;
	        }
	        h = h.parentNode;
	      }
	    }
	    d = d.return;
	  }
	  Nb(function () {
	    var d = f,
	      e = xb(c),
	      g = [];
	    a: {
	      var h = Mc.get(a);
	      if (void 0 !== h) {
	        var k = td,
	          x = a;
	        switch (a) {
	          case "keypress":
	            if (0 === od(c)) break a;
	          case "keydown":
	          case "keyup":
	            k = Rd;
	            break;
	          case "focusin":
	            x = "focus";
	            k = Fd;
	            break;
	          case "focusout":
	            x = "blur";
	            k = Fd;
	            break;
	          case "beforeblur":
	          case "afterblur":
	            k = Fd;
	            break;
	          case "click":
	            if (2 === c.button) break a;
	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            k = Bd;
	            break;
	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            k = Dd;
	            break;
	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            k = Vd;
	            break;
	          case Ic:
	          case Jc:
	          case Kc:
	            k = Hd;
	            break;
	          case Lc:
	            k = Xd;
	            break;
	          case "scroll":
	            k = vd;
	            break;
	          case "wheel":
	            k = Zd;
	            break;
	          case "copy":
	          case "cut":
	          case "paste":
	            k = Jd;
	            break;
	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            k = Td;
	        }
	        var w = 0 !== (b & 4),
	          z = !w && "scroll" === a,
	          u = w ? null !== h ? h + "Capture" : null : h;
	        w = [];
	        for (var t = d, q; null !== t;) {
	          q = t;
	          var v = q.stateNode;
	          5 === q.tag && null !== v && (q = v, null !== u && (v = Ob(t, u), null != v && w.push(ef(t, v, q))));
	          if (z) break;
	          t = t.return;
	        }
	        0 < w.length && (h = new k(h, x, null, c, e), g.push({
	          event: h,
	          listeners: w
	        }));
	      }
	    }
	    if (0 === (b & 7)) {
	      a: {
	        h = "mouseover" === a || "pointerover" === a;
	        k = "mouseout" === a || "pointerout" === a;
	        if (h && 0 === (b & 16) && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff])) break a;
	        if (k || h) {
	          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
	          if (k) {
	            if (x = c.relatedTarget || c.toElement, k = d, x = x ? wc(x) : null, null !== x && (z = Zb(x), x !== z || 5 !== x.tag && 6 !== x.tag)) x = null;
	          } else k = null, x = d;
	          if (k !== x) {
	            w = Bd;
	            v = "onMouseLeave";
	            u = "onMouseEnter";
	            t = "mouse";
	            if ("pointerout" === a || "pointerover" === a) w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
	            z = null == k ? h : ue(k);
	            q = null == x ? h : ue(x);
	            h = new w(v, t + "leave", k, c, e);
	            h.target = z;
	            h.relatedTarget = q;
	            v = null;
	            wc(e) === d && (w = new w(u, t + "enter", x, c, e), w.target = q, w.relatedTarget = z, v = w);
	            z = v;
	            if (k && x) b: {
	              w = k;
	              u = x;
	              t = 0;
	              for (q = w; q; q = gf(q)) t++;
	              q = 0;
	              for (v = u; v; v = gf(v)) q++;
	              for (; 0 < t - q;) w = gf(w), t--;
	              for (; 0 < q - t;) u = gf(u), q--;
	              for (; t--;) {
	                if (w === u || null !== u && w === u.alternate) break b;
	                w = gf(w);
	                u = gf(u);
	              }
	              w = null;
	            } else w = null;
	            null !== k && hf(g, h, k, w, !1);
	            null !== x && null !== z && hf(g, z, x, w, !0);
	          }
	        }
	      }
	      a: {
	        h = d ? ue(d) : window;
	        k = h.nodeName && h.nodeName.toLowerCase();
	        if ("select" === k || "input" === k && "file" === h.type) var J = ve;else if (me(h)) {
	          if (we) J = Fe;else {
	            J = De;
	            var K = Ce;
	          }
	        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (J = Ee);
	        if (J && (J = J(a, d))) {
	          ne(g, J, c, e);
	          break a;
	        }
	        K && K(a, h, d);
	        "focusout" === a && (K = h._wrapperState) && K.controlled && "number" === h.type && bb(h, "number", h.value);
	      }
	      K = d ? ue(d) : window;
	      switch (a) {
	        case "focusin":
	          if (me(K) || "true" === K.contentEditable) Qe = K, Re = d, Se = null;
	          break;
	        case "focusout":
	          Se = Re = Qe = null;
	          break;
	        case "mousedown":
	          Te = !0;
	          break;
	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          Te = !1;
	          Ue(g, c, e);
	          break;
	        case "selectionchange":
	          if (Pe) break;
	        case "keydown":
	        case "keyup":
	          Ue(g, c, e);
	      }
	      var Q;
	      if (ae) b: {
	        switch (a) {
	          case "compositionstart":
	            var L = "onCompositionStart";
	            break b;
	          case "compositionend":
	            L = "onCompositionEnd";
	            break b;
	          case "compositionupdate":
	            L = "onCompositionUpdate";
	            break b;
	        }
	        L = void 0;
	      } else ie ? ge(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
	      L && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== L ? "onCompositionEnd" === L && ie && (Q = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), K = oe(d, L), 0 < K.length && (L = new Ld(L, a, null, c, e), g.push({
	        event: L,
	        listeners: K
	      }), Q ? L.data = Q : (Q = he(c), null !== Q && (L.data = Q))));
	      if (Q = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	        event: e,
	        listeners: d
	      }), e.data = Q);
	    }
	    se(g, b);
	  });
	}
	function ef(a, b, c) {
	  return {
	    instance: a,
	    listener: b,
	    currentTarget: c
	  };
	}
	function oe(a, b) {
	  for (var c = b + "Capture", d = []; null !== a;) {
	    var e = a,
	      f = e.stateNode;
	    5 === e.tag && null !== f && (e = f, f = Ob(a, c), null != f && d.unshift(ef(a, f, e)), f = Ob(a, b), null != f && d.push(ef(a, f, e)));
	    a = a.return;
	  }
	  return d;
	}
	function gf(a) {
	  if (null === a) return null;
	  do a = a.return; while (a && 5 !== a.tag);
	  return a ? a : null;
	}
	function hf(a, b, c, d, e) {
	  for (var f = b._reactName, g = []; null !== c && c !== d;) {
	    var h = c,
	      k = h.alternate,
	      l = h.stateNode;
	    if (null !== k && k === d) break;
	    5 === h.tag && null !== l && (h = l, e ? (k = Ob(c, f), null != k && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), null != k && g.push(ef(c, k, h))));
	    c = c.return;
	  }
	  0 !== g.length && a.push({
	    event: b,
	    listeners: g
	  });
	}
	function jf() {}
	var kf = null,
	  lf = null;
	function mf(a, b) {
	  switch (a) {
	    case "button":
	    case "input":
	    case "select":
	    case "textarea":
	      return !!b.autoFocus;
	  }
	  return !1;
	}
	function nf(a, b) {
	  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var of = "function" === typeof setTimeout ? setTimeout : void 0,
	  pf = "function" === typeof clearTimeout ? clearTimeout : void 0;
	function qf(a) {
	  1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
	}
	function rf(a) {
	  for (; null != a; a = a.nextSibling) {
	    var b = a.nodeType;
	    if (1 === b || 3 === b) break;
	  }
	  return a;
	}
	function sf(a) {
	  a = a.previousSibling;
	  for (var b = 0; a;) {
	    if (8 === a.nodeType) {
	      var c = a.data;
	      if ("$" === c || "$!" === c || "$?" === c) {
	        if (0 === b) return a;
	        b--;
	      } else "/$" === c && b++;
	    }
	    a = a.previousSibling;
	  }
	  return null;
	}
	var tf = 0;
	function uf(a) {
	  return {
	    $$typeof: Ga,
	    toString: a,
	    valueOf: a
	  };
	}
	var vf = Math.random().toString(36).slice(2),
	  wf = "__reactFiber$" + vf,
	  xf = "__reactProps$" + vf,
	  ff = "__reactContainer$" + vf,
	  yf = "__reactEvents$" + vf;
	function wc(a) {
	  var b = a[wf];
	  if (b) return b;
	  for (var c = a.parentNode; c;) {
	    if (b = c[ff] || c[wf]) {
	      c = b.alternate;
	      if (null !== b.child || null !== c && null !== c.child) for (a = sf(a); null !== a;) {
	        if (c = a[wf]) return c;
	        a = sf(a);
	      }
	      return b;
	    }
	    a = c;
	    c = a.parentNode;
	  }
	  return null;
	}
	function Cb(a) {
	  a = a[wf] || a[ff];
	  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
	  if (5 === a.tag || 6 === a.tag) return a.stateNode;
	  throw Error(y(33));
	}
	function Db(a) {
	  return a[xf] || null;
	}
	function $e(a) {
	  var b = a[yf];
	  void 0 === b && (b = a[yf] = new Set());
	  return b;
	}
	var zf = [],
	  Af = -1;
	function Bf(a) {
	  return {
	    current: a
	  };
	}
	function H(a) {
	  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
	}
	function I(a, b) {
	  Af++;
	  zf[Af] = a.current;
	  a.current = b;
	}
	var Cf = {},
	  M = Bf(Cf),
	  N = Bf(!1),
	  Df = Cf;
	function Ef(a, b) {
	  var c = a.type.contextTypes;
	  if (!c) return Cf;
	  var d = a.stateNode;
	  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	  var e = {},
	    f;
	  for (f in c) e[f] = b[f];
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	  return e;
	}
	function Ff(a) {
	  a = a.childContextTypes;
	  return null !== a && void 0 !== a;
	}
	function Gf() {
	  H(N);
	  H(M);
	}
	function Hf(a, b, c) {
	  if (M.current !== Cf) throw Error(y(168));
	  I(M, b);
	  I(N, c);
	}
	function If(a, b, c) {
	  var d = a.stateNode;
	  a = b.childContextTypes;
	  if ("function" !== typeof d.getChildContext) return c;
	  d = d.getChildContext();
	  for (var e in d) if (!(e in a)) throw Error(y(108, Ra(b) || "Unknown", e));
	  return m({}, c, d);
	}
	function Jf(a) {
	  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
	  Df = M.current;
	  I(M, a);
	  I(N, N.current);
	  return !0;
	}
	function Kf(a, b, c) {
	  var d = a.stateNode;
	  if (!d) throw Error(y(169));
	  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
	  I(N, c);
	}
	var Lf = null,
	  Mf = null,
	  Nf = r.unstable_runWithPriority,
	  Of = r.unstable_scheduleCallback,
	  Pf = r.unstable_cancelCallback,
	  Qf = r.unstable_shouldYield,
	  Rf = r.unstable_requestPaint,
	  Sf = r.unstable_now,
	  Tf = r.unstable_getCurrentPriorityLevel,
	  Uf = r.unstable_ImmediatePriority,
	  Vf = r.unstable_UserBlockingPriority,
	  Wf = r.unstable_NormalPriority,
	  Xf = r.unstable_LowPriority,
	  Yf = r.unstable_IdlePriority,
	  Zf = {},
	  $f = void 0 !== Rf ? Rf : function () {},
	  ag = null,
	  bg = null,
	  cg = !1,
	  dg = Sf(),
	  O = 1E4 > dg ? Sf : function () {
	    return Sf() - dg;
	  };
	function eg() {
	  switch (Tf()) {
	    case Uf:
	      return 99;
	    case Vf:
	      return 98;
	    case Wf:
	      return 97;
	    case Xf:
	      return 96;
	    case Yf:
	      return 95;
	    default:
	      throw Error(y(332));
	  }
	}
	function fg(a) {
	  switch (a) {
	    case 99:
	      return Uf;
	    case 98:
	      return Vf;
	    case 97:
	      return Wf;
	    case 96:
	      return Xf;
	    case 95:
	      return Yf;
	    default:
	      throw Error(y(332));
	  }
	}
	function gg(a, b) {
	  a = fg(a);
	  return Nf(a, b);
	}
	function hg(a, b, c) {
	  a = fg(a);
	  return Of(a, b, c);
	}
	function ig() {
	  if (null !== bg) {
	    var a = bg;
	    bg = null;
	    Pf(a);
	  }
	  jg();
	}
	function jg() {
	  if (!cg && null !== ag) {
	    cg = !0;
	    var a = 0;
	    try {
	      var b = ag;
	      gg(99, function () {
	        for (; a < b.length; a++) {
	          var c = b[a];
	          do c = c(!0); while (null !== c);
	        }
	      });
	      ag = null;
	    } catch (c) {
	      throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
	    } finally {
	      cg = !1;
	    }
	  }
	}
	var kg = ra.ReactCurrentBatchConfig;
	function lg(a, b) {
	  if (a && a.defaultProps) {
	    b = m({}, b);
	    a = a.defaultProps;
	    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
	    return b;
	  }
	  return b;
	}
	var mg = Bf(null),
	  ng = null,
	  og = null,
	  pg = null;
	function qg() {
	  pg = og = ng = null;
	}
	function rg(a) {
	  var b = mg.current;
	  H(mg);
	  a.type._context._currentValue = b;
	}
	function sg(a, b) {
	  for (; null !== a;) {
	    var c = a.alternate;
	    if ((a.childLanes & b) === b) {
	      if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
	    } else a.childLanes |= b, null !== c && (c.childLanes |= b);
	    a = a.return;
	  }
	}
	function tg(a, b) {
	  ng = a;
	  pg = og = null;
	  a = a.dependencies;
	  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = !0), a.firstContext = null);
	}
	function vg(a, b) {
	  if (pg !== a && !1 !== b && 0 !== b) {
	    if ("number" !== typeof b || 1073741823 === b) pg = a, b = 1073741823;
	    b = {
	      context: a,
	      observedBits: b,
	      next: null
	    };
	    if (null === og) {
	      if (null === ng) throw Error(y(308));
	      og = b;
	      ng.dependencies = {
	        lanes: 0,
	        firstContext: b,
	        responders: null
	      };
	    } else og = og.next = b;
	  }
	  return a._currentValue;
	}
	var wg = !1;
	function xg(a) {
	  a.updateQueue = {
	    baseState: a.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: {
	      pending: null
	    },
	    effects: null
	  };
	}
	function yg(a, b) {
	  a = a.updateQueue;
	  b.updateQueue === a && (b.updateQueue = {
	    baseState: a.baseState,
	    firstBaseUpdate: a.firstBaseUpdate,
	    lastBaseUpdate: a.lastBaseUpdate,
	    shared: a.shared,
	    effects: a.effects
	  });
	}
	function zg(a, b) {
	  return {
	    eventTime: a,
	    lane: b,
	    tag: 0,
	    payload: null,
	    callback: null,
	    next: null
	  };
	}
	function Ag(a, b) {
	  a = a.updateQueue;
	  if (null !== a) {
	    a = a.shared;
	    var c = a.pending;
	    null === c ? b.next = b : (b.next = c.next, c.next = b);
	    a.pending = b;
	  }
	}
	function Bg(a, b) {
	  var c = a.updateQueue,
	    d = a.alternate;
	  if (null !== d && (d = d.updateQueue, c === d)) {
	    var e = null,
	      f = null;
	    c = c.firstBaseUpdate;
	    if (null !== c) {
	      do {
	        var g = {
	          eventTime: c.eventTime,
	          lane: c.lane,
	          tag: c.tag,
	          payload: c.payload,
	          callback: c.callback,
	          next: null
	        };
	        null === f ? e = f = g : f = f.next = g;
	        c = c.next;
	      } while (null !== c);
	      null === f ? e = f = b : f = f.next = b;
	    } else e = f = b;
	    c = {
	      baseState: d.baseState,
	      firstBaseUpdate: e,
	      lastBaseUpdate: f,
	      shared: d.shared,
	      effects: d.effects
	    };
	    a.updateQueue = c;
	    return;
	  }
	  a = c.lastBaseUpdate;
	  null === a ? c.firstBaseUpdate = b : a.next = b;
	  c.lastBaseUpdate = b;
	}
	function Cg(a, b, c, d) {
	  var e = a.updateQueue;
	  wg = !1;
	  var f = e.firstBaseUpdate,
	    g = e.lastBaseUpdate,
	    h = e.shared.pending;
	  if (null !== h) {
	    e.shared.pending = null;
	    var k = h,
	      l = k.next;
	    k.next = null;
	    null === g ? f = l : g.next = l;
	    g = k;
	    var n = a.alternate;
	    if (null !== n) {
	      n = n.updateQueue;
	      var A = n.lastBaseUpdate;
	      A !== g && (null === A ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
	    }
	  }
	  if (null !== f) {
	    A = e.baseState;
	    g = 0;
	    n = l = k = null;
	    do {
	      h = f.lane;
	      var p = f.eventTime;
	      if ((d & h) === h) {
	        null !== n && (n = n.next = {
	          eventTime: p,
	          lane: 0,
	          tag: f.tag,
	          payload: f.payload,
	          callback: f.callback,
	          next: null
	        });
	        a: {
	          var C = a,
	            x = f;
	          h = b;
	          p = c;
	          switch (x.tag) {
	            case 1:
	              C = x.payload;
	              if ("function" === typeof C) {
	                A = C.call(p, A, h);
	                break a;
	              }
	              A = C;
	              break a;
	            case 3:
	              C.flags = C.flags & -4097 | 64;
	            case 0:
	              C = x.payload;
	              h = "function" === typeof C ? C.call(p, A, h) : C;
	              if (null === h || void 0 === h) break a;
	              A = m({}, A, h);
	              break a;
	            case 2:
	              wg = !0;
	          }
	        }
	        null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
	      } else p = {
	        eventTime: p,
	        lane: h,
	        tag: f.tag,
	        payload: f.payload,
	        callback: f.callback,
	        next: null
	      }, null === n ? (l = n = p, k = A) : n = n.next = p, g |= h;
	      f = f.next;
	      if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
	    } while (1);
	    null === n && (k = A);
	    e.baseState = k;
	    e.firstBaseUpdate = l;
	    e.lastBaseUpdate = n;
	    Dg |= g;
	    a.lanes = g;
	    a.memoizedState = A;
	  }
	}
	function Eg(a, b, c) {
	  a = b.effects;
	  b.effects = null;
	  if (null !== a) for (b = 0; b < a.length; b++) {
	    var d = a[b],
	      e = d.callback;
	    if (null !== e) {
	      d.callback = null;
	      d = c;
	      if ("function" !== typeof e) throw Error(y(191, e));
	      e.call(d);
	    }
	  }
	}
	var Fg = new aa.Component().refs;
	function Gg(a, b, c, d) {
	  b = a.memoizedState;
	  c = c(d, b);
	  c = null === c || void 0 === c ? b : m({}, b, c);
	  a.memoizedState = c;
	  0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var Kg = {
	  isMounted: function (a) {
	    return (a = a._reactInternals) ? Zb(a) === a : !1;
	  },
	  enqueueSetState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	      e = Ig(a),
	      f = zg(d, e);
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueReplaceState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	      e = Ig(a),
	      f = zg(d, e);
	    f.tag = 1;
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueForceUpdate: function (a, b) {
	    a = a._reactInternals;
	    var c = Hg(),
	      d = Ig(a),
	      e = zg(c, d);
	    e.tag = 2;
	    void 0 !== b && null !== b && (e.callback = b);
	    Ag(a, e);
	    Jg(a, d, c);
	  }
	};
	function Lg(a, b, c, d, e, f, g) {
	  a = a.stateNode;
	  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : !0;
	}
	function Mg(a, b, c) {
	  var d = !1,
	    e = Cf;
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
	  b = new b(c, f);
	  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	  b.updater = Kg;
	  a.stateNode = b;
	  b._reactInternals = a;
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	  return b;
	}
	function Ng(a, b, c, d) {
	  a = b.state;
	  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
	}
	function Og(a, b, c, d) {
	  var e = a.stateNode;
	  e.props = c;
	  e.state = a.memoizedState;
	  e.refs = Fg;
	  xg(a);
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
	  Cg(a, c, e, d);
	  e.state = a.memoizedState;
	  f = b.getDerivedStateFromProps;
	  "function" === typeof f && (Gg(a, b, f, c), e.state = a.memoizedState);
	  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
	  "function" === typeof e.componentDidMount && (a.flags |= 4);
	}
	var Pg = Array.isArray;
	function Qg(a, b, c) {
	  a = c.ref;
	  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	    if (c._owner) {
	      c = c._owner;
	      if (c) {
	        if (1 !== c.tag) throw Error(y(309));
	        var d = c.stateNode;
	      }
	      if (!d) throw Error(y(147, a));
	      var e = "" + a;
	      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
	      b = function (a) {
	        var b = d.refs;
	        b === Fg && (b = d.refs = {});
	        null === a ? delete b[e] : b[e] = a;
	      };
	      b._stringRef = e;
	      return b;
	    }
	    if ("string" !== typeof a) throw Error(y(284));
	    if (!c._owner) throw Error(y(290, a));
	  }
	  return a;
	}
	function Rg(a, b) {
	  if ("textarea" !== a.type) throw Error(y(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
	}
	function Sg(a) {
	  function b(b, c) {
	    if (a) {
	      var d = b.lastEffect;
	      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
	      c.nextEffect = null;
	      c.flags = 8;
	    }
	  }
	  function c(c, d) {
	    if (!a) return null;
	    for (; null !== d;) b(c, d), d = d.sibling;
	    return null;
	  }
	  function d(a, b) {
	    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
	    return a;
	  }
	  function e(a, b) {
	    a = Tg(a, b);
	    a.index = 0;
	    a.sibling = null;
	    return a;
	  }
	  function f(b, c, d) {
	    b.index = d;
	    if (!a) return c;
	    d = b.alternate;
	    if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
	    b.flags = 2;
	    return c;
	  }
	  function g(b) {
	    a && null === b.alternate && (b.flags = 2);
	    return b;
	  }
	  function h(a, b, c, d) {
	    if (null === b || 6 !== b.tag) return b = Ug(c, a.mode, d), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }
	  function k(a, b, c, d) {
	    if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Qg(a, b, c), d.return = a, d;
	    d = Vg(c.type, c.key, c.props, null, a.mode, d);
	    d.ref = Qg(a, b, c);
	    d.return = a;
	    return d;
	  }
	  function l(a, b, c, d) {
	    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Wg(c, a.mode, d), b.return = a, b;
	    b = e(b, c.children || []);
	    b.return = a;
	    return b;
	  }
	  function n(a, b, c, d, f) {
	    if (null === b || 7 !== b.tag) return b = Xg(c, a.mode, d, f), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }
	  function A(a, b, c) {
	    if ("string" === typeof b || "number" === typeof b) return b = Ug("" + b, a.mode, c), b.return = a, b;
	    if ("object" === typeof b && null !== b) {
	      switch (b.$$typeof) {
	        case sa:
	          return c = Vg(b.type, b.key, b.props, null, a.mode, c), c.ref = Qg(a, null, b), c.return = a, c;
	        case ta:
	          return b = Wg(b, a.mode, c), b.return = a, b;
	      }
	      if (Pg(b) || La(b)) return b = Xg(b, a.mode, c, null), b.return = a, b;
	      Rg(a, b);
	    }
	    return null;
	  }
	  function p(a, b, c, d) {
	    var e = null !== b ? b.key : null;
	    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
	    if ("object" === typeof c && null !== c) {
	      switch (c.$$typeof) {
	        case sa:
	          return c.key === e ? c.type === ua ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;
	        case ta:
	          return c.key === e ? l(a, b, c, d) : null;
	      }
	      if (Pg(c) || La(c)) return null !== e ? null : n(a, b, c, d, null);
	      Rg(a, c);
	    }
	    return null;
	  }
	  function C(a, b, c, d, e) {
	    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
	    if ("object" === typeof d && null !== d) {
	      switch (d.$$typeof) {
	        case sa:
	          return a = a.get(null === d.key ? c : d.key) || null, d.type === ua ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);
	        case ta:
	          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	      }
	      if (Pg(d) || La(d)) return a = a.get(c) || null, n(b, a, d, e, null);
	      Rg(b, d);
	    }
	    return null;
	  }
	  function x(e, g, h, k) {
	    for (var l = null, t = null, u = g, z = g = 0, q = null; null !== u && z < h.length; z++) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var n = p(e, u, h[z], k);
	      if (null === n) {
	        null === u && (u = q);
	        break;
	      }
	      a && u && null === n.alternate && b(e, u);
	      g = f(n, g, z);
	      null === t ? l = n : t.sibling = n;
	      t = n;
	      u = q;
	    }
	    if (z === h.length) return c(e, u), l;
	    if (null === u) {
	      for (; z < h.length; z++) u = A(e, h[z], k), null !== u && (g = f(u, g, z), null === t ? l = u : t.sibling = u, t = u);
	      return l;
	    }
	    for (u = d(e, u); z < h.length; z++) q = C(u, e, z, h[z], k), null !== q && (a && null !== q.alternate && u.delete(null === q.key ? z : q.key), g = f(q, g, z), null === t ? l = q : t.sibling = q, t = q);
	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }
	  function w(e, g, h, k) {
	    var l = La(h);
	    if ("function" !== typeof l) throw Error(y(150));
	    h = l.call(h);
	    if (null == h) throw Error(y(151));
	    for (var t = l = null, u = g, z = g = 0, q = null, n = h.next(); null !== u && !n.done; z++, n = h.next()) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var w = p(e, u, n.value, k);
	      if (null === w) {
	        null === u && (u = q);
	        break;
	      }
	      a && u && null === w.alternate && b(e, u);
	      g = f(w, g, z);
	      null === t ? l = w : t.sibling = w;
	      t = w;
	      u = q;
	    }
	    if (n.done) return c(e, u), l;
	    if (null === u) {
	      for (; !n.done; z++, n = h.next()) n = A(e, n.value, k), null !== n && (g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);
	      return l;
	    }
	    for (u = d(e, u); !n.done; z++, n = h.next()) n = C(u, e, z, n.value, k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? z : n.key), g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);
	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }
	  return function (a, d, f, h) {
	    var k = "object" === typeof f && null !== f && f.type === ua && null === f.key;
	    k && (f = f.props.children);
	    var l = "object" === typeof f && null !== f;
	    if (l) switch (f.$$typeof) {
	      case sa:
	        a: {
	          l = f.key;
	          for (k = d; null !== k;) {
	            if (k.key === l) {
	              switch (k.tag) {
	                case 7:
	                  if (f.type === ua) {
	                    c(a, k.sibling);
	                    d = e(k, f.props.children);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }
	                  break;
	                default:
	                  if (k.elementType === f.type) {
	                    c(a, k.sibling);
	                    d = e(k, f.props);
	                    d.ref = Qg(a, k, f);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }
	              }
	              c(a, k);
	              break;
	            } else b(a, k);
	            k = k.sibling;
	          }
	          f.type === ua ? (d = Xg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Vg(f.type, f.key, f.props, null, a.mode, h), h.ref = Qg(a, d, f), h.return = a, a = h);
	        }
	        return g(a);
	      case ta:
	        a: {
	          for (k = f.key; null !== d;) {
	            if (d.key === k) {
	              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                c(a, d.sibling);
	                d = e(d, f.children || []);
	                d.return = a;
	                a = d;
	                break a;
	              } else {
	                c(a, d);
	                break;
	              }
	            } else b(a, d);
	            d = d.sibling;
	          }
	          d = Wg(f, a.mode, h);
	          d.return = a;
	          a = d;
	        }
	        return g(a);
	    }
	    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Ug(f, a.mode, h), d.return = a, a = d), g(a);
	    if (Pg(f)) return x(a, d, f, h);
	    if (La(f)) return w(a, d, f, h);
	    l && Rg(a, f);
	    if ("undefined" === typeof f && !k) switch (a.tag) {
	      case 1:
	      case 22:
	      case 0:
	      case 11:
	      case 15:
	        throw Error(y(152, Ra(a.type) || "Component"));
	    }
	    return c(a, d);
	  };
	}
	var Yg = Sg(!0),
	  Zg = Sg(!1),
	  $g = {},
	  ah = Bf($g),
	  bh = Bf($g),
	  ch = Bf($g);
	function dh(a) {
	  if (a === $g) throw Error(y(174));
	  return a;
	}
	function eh(a, b) {
	  I(ch, b);
	  I(bh, a);
	  I(ah, $g);
	  a = b.nodeType;
	  switch (a) {
	    case 9:
	    case 11:
	      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
	      break;
	    default:
	      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
	  }
	  H(ah);
	  I(ah, b);
	}
	function fh() {
	  H(ah);
	  H(bh);
	  H(ch);
	}
	function gh(a) {
	  dh(ch.current);
	  var b = dh(ah.current);
	  var c = mb(b, a.type);
	  b !== c && (I(bh, a), I(ah, c));
	}
	function hh(a) {
	  bh.current === a && (H(ah), H(bh));
	}
	var P = Bf(0);
	function ih(a) {
	  for (var b = a; null !== b;) {
	    if (13 === b.tag) {
	      var c = b.memoizedState;
	      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	      if (0 !== (b.flags & 64)) return b;
	    } else if (null !== b.child) {
	      b.child.return = b;
	      b = b.child;
	      continue;
	    }
	    if (b === a) break;
	    for (; null === b.sibling;) {
	      if (null === b.return || b.return === a) return null;
	      b = b.return;
	    }
	    b.sibling.return = b.return;
	    b = b.sibling;
	  }
	  return null;
	}
	var jh = null,
	  kh = null,
	  lh = !1;
	function mh(a, b) {
	  var c = nh(5, null, null, 0);
	  c.elementType = "DELETED";
	  c.type = "DELETED";
	  c.stateNode = b;
	  c.return = a;
	  c.flags = 8;
	  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
	}
	function oh(a, b) {
	  switch (a.tag) {
	    case 5:
	      var c = a.type;
	      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	      return null !== b ? (a.stateNode = b, !0) : !1;
	    case 6:
	      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;
	    case 13:
	      return !1;
	    default:
	      return !1;
	  }
	}
	function ph(a) {
	  if (lh) {
	    var b = kh;
	    if (b) {
	      var c = b;
	      if (!oh(a, b)) {
	        b = rf(c.nextSibling);
	        if (!b || !oh(a, b)) {
	          a.flags = a.flags & -1025 | 2;
	          lh = !1;
	          jh = a;
	          return;
	        }
	        mh(jh, c);
	      }
	      jh = a;
	      kh = rf(b.firstChild);
	    } else a.flags = a.flags & -1025 | 2, lh = !1, jh = a;
	  }
	}
	function qh(a) {
	  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
	  jh = a;
	}
	function rh(a) {
	  if (a !== jh) return !1;
	  if (!lh) return qh(a), lh = !0, !1;
	  var b = a.type;
	  if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps)) for (b = kh; b;) mh(a, b), b = rf(b.nextSibling);
	  qh(a);
	  if (13 === a.tag) {
	    a = a.memoizedState;
	    a = null !== a ? a.dehydrated : null;
	    if (!a) throw Error(y(317));
	    a: {
	      a = a.nextSibling;
	      for (b = 0; a;) {
	        if (8 === a.nodeType) {
	          var c = a.data;
	          if ("/$" === c) {
	            if (0 === b) {
	              kh = rf(a.nextSibling);
	              break a;
	            }
	            b--;
	          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	        }
	        a = a.nextSibling;
	      }
	      kh = null;
	    }
	  } else kh = jh ? rf(a.stateNode.nextSibling) : null;
	  return !0;
	}
	function sh() {
	  kh = jh = null;
	  lh = !1;
	}
	var th = [];
	function uh() {
	  for (var a = 0; a < th.length; a++) th[a]._workInProgressVersionPrimary = null;
	  th.length = 0;
	}
	var vh = ra.ReactCurrentDispatcher,
	  wh = ra.ReactCurrentBatchConfig,
	  xh = 0,
	  R = null,
	  S = null,
	  T = null,
	  yh = !1,
	  zh = !1;
	function Ah() {
	  throw Error(y(321));
	}
	function Bh(a, b) {
	  if (null === b) return !1;
	  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
	  return !0;
	}
	function Ch(a, b, c, d, e, f) {
	  xh = f;
	  R = b;
	  b.memoizedState = null;
	  b.updateQueue = null;
	  b.lanes = 0;
	  vh.current = null === a || null === a.memoizedState ? Dh : Eh;
	  a = c(d, e);
	  if (zh) {
	    f = 0;
	    do {
	      zh = !1;
	      if (!(25 > f)) throw Error(y(301));
	      f += 1;
	      T = S = null;
	      b.updateQueue = null;
	      vh.current = Fh;
	      a = c(d, e);
	    } while (zh);
	  }
	  vh.current = Gh;
	  b = null !== S && null !== S.next;
	  xh = 0;
	  T = S = R = null;
	  yh = !1;
	  if (b) throw Error(y(300));
	  return a;
	}
	function Hh() {
	  var a = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === T ? R.memoizedState = T = a : T = T.next = a;
	  return T;
	}
	function Ih() {
	  if (null === S) {
	    var a = R.alternate;
	    a = null !== a ? a.memoizedState : null;
	  } else a = S.next;
	  var b = null === T ? R.memoizedState : T.next;
	  if (null !== b) T = b, S = a;else {
	    if (null === a) throw Error(y(310));
	    S = a;
	    a = {
	      memoizedState: S.memoizedState,
	      baseState: S.baseState,
	      baseQueue: S.baseQueue,
	      queue: S.queue,
	      next: null
	    };
	    null === T ? R.memoizedState = T = a : T = T.next = a;
	  }
	  return T;
	}
	function Jh(a, b) {
	  return "function" === typeof b ? b(a) : b;
	}
	function Kh(a) {
	  var b = Ih(),
	    c = b.queue;
	  if (null === c) throw Error(y(311));
	  c.lastRenderedReducer = a;
	  var d = S,
	    e = d.baseQueue,
	    f = c.pending;
	  if (null !== f) {
	    if (null !== e) {
	      var g = e.next;
	      e.next = f.next;
	      f.next = g;
	    }
	    d.baseQueue = e = f;
	    c.pending = null;
	  }
	  if (null !== e) {
	    e = e.next;
	    d = d.baseState;
	    var h = g = f = null,
	      k = e;
	    do {
	      var l = k.lane;
	      if ((xh & l) === l) null !== h && (h = h.next = {
	        lane: 0,
	        action: k.action,
	        eagerReducer: k.eagerReducer,
	        eagerState: k.eagerState,
	        next: null
	      }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
	        var n = {
	          lane: l,
	          action: k.action,
	          eagerReducer: k.eagerReducer,
	          eagerState: k.eagerState,
	          next: null
	        };
	        null === h ? (g = h = n, f = d) : h = h.next = n;
	        R.lanes |= l;
	        Dg |= l;
	      }
	      k = k.next;
	    } while (null !== k && k !== e);
	    null === h ? f = d : h.next = g;
	    He(d, b.memoizedState) || (ug = !0);
	    b.memoizedState = d;
	    b.baseState = f;
	    b.baseQueue = h;
	    c.lastRenderedState = d;
	  }
	  return [b.memoizedState, c.dispatch];
	}
	function Lh(a) {
	  var b = Ih(),
	    c = b.queue;
	  if (null === c) throw Error(y(311));
	  c.lastRenderedReducer = a;
	  var d = c.dispatch,
	    e = c.pending,
	    f = b.memoizedState;
	  if (null !== e) {
	    c.pending = null;
	    var g = e = e.next;
	    do f = a(f, g.action), g = g.next; while (g !== e);
	    He(f, b.memoizedState) || (ug = !0);
	    b.memoizedState = f;
	    null === b.baseQueue && (b.baseState = f);
	    c.lastRenderedState = f;
	  }
	  return [f, d];
	}
	function Mh(a, b, c) {
	  var d = b._getVersion;
	  d = d(b._source);
	  var e = b._workInProgressVersionPrimary;
	  if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (xh & a) === a) b._workInProgressVersionPrimary = d, th.push(b);
	  if (a) return c(b._source);
	  th.push(b);
	  throw Error(y(350));
	}
	function Nh(a, b, c, d) {
	  var e = U;
	  if (null === e) throw Error(y(349));
	  var f = b._getVersion,
	    g = f(b._source),
	    h = vh.current,
	    k = h.useState(function () {
	      return Mh(e, b, c);
	    }),
	    l = k[1],
	    n = k[0];
	  k = T;
	  var A = a.memoizedState,
	    p = A.refs,
	    C = p.getSnapshot,
	    x = A.source;
	  A = A.subscribe;
	  var w = R;
	  a.memoizedState = {
	    refs: p,
	    source: b,
	    subscribe: d
	  };
	  h.useEffect(function () {
	    p.getSnapshot = c;
	    p.setSnapshot = l;
	    var a = f(b._source);
	    if (!He(g, a)) {
	      a = c(b._source);
	      He(n, a) || (l(a), a = Ig(w), e.mutableReadLanes |= a & e.pendingLanes);
	      a = e.mutableReadLanes;
	      e.entangledLanes |= a;
	      for (var d = e.entanglements, h = a; 0 < h;) {
	        var k = 31 - Vc(h),
	          v = 1 << k;
	        d[k] |= a;
	        h &= ~v;
	      }
	    }
	  }, [c, b, d]);
	  h.useEffect(function () {
	    return d(b._source, function () {
	      var a = p.getSnapshot,
	        c = p.setSnapshot;
	      try {
	        c(a(b._source));
	        var d = Ig(w);
	        e.mutableReadLanes |= d & e.pendingLanes;
	      } catch (q) {
	        c(function () {
	          throw q;
	        });
	      }
	    });
	  }, [b, d]);
	  He(C, c) && He(x, b) && He(A, d) || (a = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: n
	  }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
	  return n;
	}
	function Ph(a, b, c) {
	  var d = Ih();
	  return Nh(d, a, b, c);
	}
	function Qh(a) {
	  var b = Hh();
	  "function" === typeof a && (a = a());
	  b.memoizedState = b.baseState = a;
	  a = b.queue = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: a
	  };
	  a = a.dispatch = Oh.bind(null, R, a);
	  return [b.memoizedState, a];
	}
	function Rh(a, b, c, d) {
	  a = {
	    tag: a,
	    create: b,
	    destroy: c,
	    deps: d,
	    next: null
	  };
	  b = R.updateQueue;
	  null === b ? (b = {
	    lastEffect: null
	  }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	  return a;
	}
	function Sh(a) {
	  var b = Hh();
	  a = {
	    current: a
	  };
	  return b.memoizedState = a;
	}
	function Th() {
	  return Ih().memoizedState;
	}
	function Uh(a, b, c, d) {
	  var e = Hh();
	  R.flags |= a;
	  e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function Vh(a, b, c, d) {
	  var e = Ih();
	  d = void 0 === d ? null : d;
	  var f = void 0;
	  if (null !== S) {
	    var g = S.memoizedState;
	    f = g.destroy;
	    if (null !== d && Bh(d, g.deps)) {
	      Rh(b, c, f, d);
	      return;
	    }
	  }
	  R.flags |= a;
	  e.memoizedState = Rh(1 | b, c, f, d);
	}
	function Wh(a, b) {
	  return Uh(516, 4, a, b);
	}
	function Xh(a, b) {
	  return Vh(516, 4, a, b);
	}
	function Yh(a, b) {
	  return Vh(4, 2, a, b);
	}
	function Zh(a, b) {
	  if ("function" === typeof b) return a = a(), b(a), function () {
	    b(null);
	  };
	  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	    b.current = null;
	  };
	}
	function $h(a, b, c) {
	  c = null !== c && void 0 !== c ? c.concat([a]) : null;
	  return Vh(4, 2, Zh.bind(null, b, a), c);
	}
	function ai() {}
	function bi(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  c.memoizedState = [a, b];
	  return a;
	}
	function ci(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  a = a();
	  c.memoizedState = [a, b];
	  return a;
	}
	function di(a, b) {
	  var c = eg();
	  gg(98 > c ? 98 : c, function () {
	    a(!0);
	  });
	  gg(97 < c ? 97 : c, function () {
	    var c = wh.transition;
	    wh.transition = 1;
	    try {
	      a(!1), b();
	    } finally {
	      wh.transition = c;
	    }
	  });
	}
	function Oh(a, b, c) {
	  var d = Hg(),
	    e = Ig(a),
	    f = {
	      lane: e,
	      action: c,
	      eagerReducer: null,
	      eagerState: null,
	      next: null
	    },
	    g = b.pending;
	  null === g ? f.next = f : (f.next = g.next, g.next = f);
	  b.pending = f;
	  g = a.alternate;
	  if (a === R || null !== g && g === R) zh = yh = !0;else {
	    if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
	      var h = b.lastRenderedState,
	        k = g(h, c);
	      f.eagerReducer = g;
	      f.eagerState = k;
	      if (He(k, h)) return;
	    } catch (l) {} finally {}
	    Jg(a, e, d);
	  }
	}
	var Gh = {
	    readContext: vg,
	    useCallback: Ah,
	    useContext: Ah,
	    useEffect: Ah,
	    useImperativeHandle: Ah,
	    useLayoutEffect: Ah,
	    useMemo: Ah,
	    useReducer: Ah,
	    useRef: Ah,
	    useState: Ah,
	    useDebugValue: Ah,
	    useDeferredValue: Ah,
	    useTransition: Ah,
	    useMutableSource: Ah,
	    useOpaqueIdentifier: Ah,
	    unstable_isNewReconciler: !1
	  },
	  Dh = {
	    readContext: vg,
	    useCallback: function (a, b) {
	      Hh().memoizedState = [a, void 0 === b ? null : b];
	      return a;
	    },
	    useContext: vg,
	    useEffect: Wh,
	    useImperativeHandle: function (a, b, c) {
	      c = null !== c && void 0 !== c ? c.concat([a]) : null;
	      return Uh(4, 2, Zh.bind(null, b, a), c);
	    },
	    useLayoutEffect: function (a, b) {
	      return Uh(4, 2, a, b);
	    },
	    useMemo: function (a, b) {
	      var c = Hh();
	      b = void 0 === b ? null : b;
	      a = a();
	      c.memoizedState = [a, b];
	      return a;
	    },
	    useReducer: function (a, b, c) {
	      var d = Hh();
	      b = void 0 !== c ? c(b) : b;
	      d.memoizedState = d.baseState = b;
	      a = d.queue = {
	        pending: null,
	        dispatch: null,
	        lastRenderedReducer: a,
	        lastRenderedState: b
	      };
	      a = a.dispatch = Oh.bind(null, R, a);
	      return [d.memoizedState, a];
	    },
	    useRef: Sh,
	    useState: Qh,
	    useDebugValue: ai,
	    useDeferredValue: function (a) {
	      var b = Qh(a),
	        c = b[0],
	        d = b[1];
	      Wh(function () {
	        var b = wh.transition;
	        wh.transition = 1;
	        try {
	          d(a);
	        } finally {
	          wh.transition = b;
	        }
	      }, [a]);
	      return c;
	    },
	    useTransition: function () {
	      var a = Qh(!1),
	        b = a[0];
	      a = di.bind(null, a[1]);
	      Sh(a);
	      return [a, b];
	    },
	    useMutableSource: function (a, b, c) {
	      var d = Hh();
	      d.memoizedState = {
	        refs: {
	          getSnapshot: b,
	          setSnapshot: null
	        },
	        source: a,
	        subscribe: c
	      };
	      return Nh(d, a, b, c);
	    },
	    useOpaqueIdentifier: function () {
	      if (lh) {
	        var a = !1,
	          b = uf(function () {
	            a || (a = !0, c("r:" + (tf++).toString(36)));
	            throw Error(y(355));
	          }),
	          c = Qh(b)[1];
	        0 === (R.mode & 2) && (R.flags |= 516, Rh(5, function () {
	          c("r:" + (tf++).toString(36));
	        }, void 0, null));
	        return b;
	      }
	      b = "r:" + (tf++).toString(36);
	      Qh(b);
	      return b;
	    },
	    unstable_isNewReconciler: !1
	  },
	  Eh = {
	    readContext: vg,
	    useCallback: bi,
	    useContext: vg,
	    useEffect: Xh,
	    useImperativeHandle: $h,
	    useLayoutEffect: Yh,
	    useMemo: ci,
	    useReducer: Kh,
	    useRef: Th,
	    useState: function () {
	      return Kh(Jh);
	    },
	    useDebugValue: ai,
	    useDeferredValue: function (a) {
	      var b = Kh(Jh),
	        c = b[0],
	        d = b[1];
	      Xh(function () {
	        var b = wh.transition;
	        wh.transition = 1;
	        try {
	          d(a);
	        } finally {
	          wh.transition = b;
	        }
	      }, [a]);
	      return c;
	    },
	    useTransition: function () {
	      var a = Kh(Jh)[0];
	      return [Th().current, a];
	    },
	    useMutableSource: Ph,
	    useOpaqueIdentifier: function () {
	      return Kh(Jh)[0];
	    },
	    unstable_isNewReconciler: !1
	  },
	  Fh = {
	    readContext: vg,
	    useCallback: bi,
	    useContext: vg,
	    useEffect: Xh,
	    useImperativeHandle: $h,
	    useLayoutEffect: Yh,
	    useMemo: ci,
	    useReducer: Lh,
	    useRef: Th,
	    useState: function () {
	      return Lh(Jh);
	    },
	    useDebugValue: ai,
	    useDeferredValue: function (a) {
	      var b = Lh(Jh),
	        c = b[0],
	        d = b[1];
	      Xh(function () {
	        var b = wh.transition;
	        wh.transition = 1;
	        try {
	          d(a);
	        } finally {
	          wh.transition = b;
	        }
	      }, [a]);
	      return c;
	    },
	    useTransition: function () {
	      var a = Lh(Jh)[0];
	      return [Th().current, a];
	    },
	    useMutableSource: Ph,
	    useOpaqueIdentifier: function () {
	      return Lh(Jh)[0];
	    },
	    unstable_isNewReconciler: !1
	  },
	  ei = ra.ReactCurrentOwner,
	  ug = !1;
	function fi(a, b, c, d) {
	  b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
	}
	function gi(a, b, c, d, e) {
	  c = c.render;
	  var f = b.ref;
	  tg(b, e);
	  d = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, d, e);
	  return b.child;
	}
	function ii(a, b, c, d, e, f) {
	  if (null === a) {
	    var g = c.type;
	    if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
	    a = Vg(c.type, null, d, b, b.mode, f);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }
	  g = a.child;
	  if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je, c(e, d) && a.ref === b.ref)) return hi(a, b, f);
	  b.flags |= 1;
	  a = Tg(g, d);
	  a.ref = b.ref;
	  a.return = b;
	  return b.child = a;
	}
	function ki(a, b, c, d, e, f) {
	  if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref) if (ug = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (ug = !0);else return b.lanes = a.lanes, hi(a, b, f);
	  return li(a, b, c, d, f);
	}
	function mi(a, b, c) {
	  var d = b.pendingProps,
	    e = d.children,
	    f = null !== a ? a.memoizedState : null;
	  if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
	    if (0 === (b.mode & 4)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	      baseLanes: a
	    }, ni(b, a), null;
	  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
	  fi(a, b, e, c);
	  return b.child;
	}
	function oi(a, b) {
	  var c = b.ref;
	  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
	}
	function li(a, b, c, d, e) {
	  var f = Ff(c) ? Df : M.current;
	  f = Ef(b, f);
	  tg(b, e);
	  c = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, c, e);
	  return b.child;
	}
	function pi(a, b, c, d, e) {
	  if (Ff(c)) {
	    var f = !0;
	    Jf(b);
	  } else f = !1;
	  tg(b, e);
	  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = !0;else if (null === a) {
	    var g = b.stateNode,
	      h = b.memoizedProps;
	    g.props = h;
	    var k = g.context,
	      l = c.contextType;
	    "object" === typeof l && null !== l ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
	    var n = c.getDerivedStateFromProps,
	      A = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
	    A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Ng(b, g, d, l);
	    wg = !1;
	    var p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    k = b.memoizedState;
	    h !== d || p !== k || N.current || wg ? ("function" === typeof n && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
	  } else {
	    g = b.stateNode;
	    yg(a, b);
	    h = b.memoizedProps;
	    l = b.type === b.elementType ? h : lg(b.type, h);
	    g.props = l;
	    A = b.pendingProps;
	    p = g.context;
	    k = c.contextType;
	    "object" === typeof k && null !== k ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
	    var C = c.getDerivedStateFromProps;
	    (n = "function" === typeof C || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A || p !== k) && Ng(b, g, d, k);
	    wg = !1;
	    p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    var x = b.memoizedState;
	    h !== A || p !== x || N.current || wg ? ("function" === typeof C && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
	  }
	  return qi(a, b, c, d, f, e);
	}
	function qi(a, b, c, d, e, f) {
	  oi(a, b);
	  var g = 0 !== (b.flags & 64);
	  if (!d && !g) return e && Kf(b, c, !1), hi(a, b, f);
	  d = b.stateNode;
	  ei.current = b;
	  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	  b.flags |= 1;
	  null !== a && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
	  b.memoizedState = d.state;
	  e && Kf(b, c, !0);
	  return b.child;
	}
	function ri(a) {
	  var b = a.stateNode;
	  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, !1);
	  eh(a, b.containerInfo);
	}
	var si = {
	  dehydrated: null,
	  retryLane: 0
	};
	function ti(a, b, c) {
	  var d = b.pendingProps,
	    e = P.current,
	    f = !1,
	    g;
	  (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
	  g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
	  I(P, e & 1);
	  if (null === a) {
	    void 0 !== d.fallback && ph(b);
	    a = d.children;
	    e = d.fallback;
	    if (f) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, a;
	    if ("number" === typeof d.unstable_expectedLoadTime) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, b.lanes = 33554432, a;
	    c = vi({
	      mode: "visible",
	      children: a
	    }, b.mode, c, null);
	    c.return = b;
	    return b.child = c;
	  }
	  if (null !== a.memoizedState) {
	    if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	      baseLanes: c
	    } : {
	      baseLanes: e.baseLanes | c
	    }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	    c = xi(a, b, d.children, c);
	    b.memoizedState = null;
	    return c;
	  }
	  if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	    baseLanes: c
	  } : {
	    baseLanes: e.baseLanes | c
	  }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	  c = xi(a, b, d.children, c);
	  b.memoizedState = null;
	  return c;
	}
	function ui(a, b, c, d) {
	  var e = a.mode,
	    f = a.child;
	  b = {
	    mode: "hidden",
	    children: b
	  };
	  0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
	  c = Xg(c, e, d, null);
	  f.return = a;
	  c.return = a;
	  f.sibling = c;
	  a.child = f;
	  return c;
	}
	function xi(a, b, c, d) {
	  var e = a.child;
	  a = e.sibling;
	  c = Tg(e, {
	    mode: "visible",
	    children: c
	  });
	  0 === (b.mode & 2) && (c.lanes = d);
	  c.return = b;
	  c.sibling = null;
	  null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
	  return b.child = c;
	}
	function wi(a, b, c, d, e) {
	  var f = b.mode,
	    g = a.child;
	  a = g.sibling;
	  var h = {
	    mode: "hidden",
	    children: c
	  };
	  0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
	  null !== a ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
	  d.return = b;
	  c.return = b;
	  c.sibling = d;
	  b.child = c;
	  return d;
	}
	function yi(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  sg(a.return, b);
	}
	function zi(a, b, c, d, e, f) {
	  var g = a.memoizedState;
	  null === g ? a.memoizedState = {
	    isBackwards: b,
	    rendering: null,
	    renderingStartTime: 0,
	    last: d,
	    tail: c,
	    tailMode: e,
	    lastEffect: f
	  } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
	}
	function Ai(a, b, c) {
	  var d = b.pendingProps,
	    e = d.revealOrder,
	    f = d.tail;
	  fi(a, b, d.children, c);
	  d = P.current;
	  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
	    if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
	      if (13 === a.tag) null !== a.memoizedState && yi(a, c);else if (19 === a.tag) yi(a, c);else if (null !== a.child) {
	        a.child.return = a;
	        a = a.child;
	        continue;
	      }
	      if (a === b) break a;
	      for (; null === a.sibling;) {
	        if (null === a.return || a.return === b) break a;
	        a = a.return;
	      }
	      a.sibling.return = a.return;
	      a = a.sibling;
	    }
	    d &= 1;
	  }
	  I(P, d);
	  if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
	    case "forwards":
	      c = b.child;
	      for (e = null; null !== c;) a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;
	      c = e;
	      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	      zi(b, !1, e, c, f, b.lastEffect);
	      break;
	    case "backwards":
	      c = null;
	      e = b.child;
	      for (b.child = null; null !== e;) {
	        a = e.alternate;
	        if (null !== a && null === ih(a)) {
	          b.child = e;
	          break;
	        }
	        a = e.sibling;
	        e.sibling = c;
	        c = e;
	        e = a;
	      }
	      zi(b, !0, c, null, f, b.lastEffect);
	      break;
	    case "together":
	      zi(b, !1, null, null, void 0, b.lastEffect);
	      break;
	    default:
	      b.memoizedState = null;
	  }
	  return b.child;
	}
	function hi(a, b, c) {
	  null !== a && (b.dependencies = a.dependencies);
	  Dg |= b.lanes;
	  if (0 !== (c & b.childLanes)) {
	    if (null !== a && b.child !== a.child) throw Error(y(153));
	    if (null !== b.child) {
	      a = b.child;
	      c = Tg(a, a.pendingProps);
	      b.child = c;
	      for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
	      c.sibling = null;
	    }
	    return b.child;
	  }
	  return null;
	}
	var Bi, Ci, Di, Ei;
	Bi = function (a, b) {
	  for (var c = b.child; null !== c;) {
	    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }
	    if (c === b) break;
	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	    }
	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	};
	Ci = function () {};
	Di = function (a, b, c, d) {
	  var e = a.memoizedProps;
	  if (e !== d) {
	    a = b.stateNode;
	    dh(ah.current);
	    var f = null;
	    switch (c) {
	      case "input":
	        e = Ya(a, e);
	        d = Ya(a, d);
	        f = [];
	        break;
	      case "option":
	        e = eb(a, e);
	        d = eb(a, d);
	        f = [];
	        break;
	      case "select":
	        e = m({}, e, {
	          value: void 0
	        });
	        d = m({}, d, {
	          value: void 0
	        });
	        f = [];
	        break;
	      case "textarea":
	        e = gb(a, e);
	        d = gb(a, d);
	        f = [];
	        break;
	      default:
	        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
	    }
	    vb(c, d);
	    var g;
	    c = null;
	    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	      var h = e[l];
	      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
	    for (l in d) {
	      var k = d[l];
	      h = null != e ? e[l] : void 0;
	      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
	        if (h) {
	          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
	          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	        } else c || (f || (f = []), f.push(l, c)), c = k;
	      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ca.hasOwnProperty(l) ? (null != k && "onScroll" === l && G("scroll", a), f || h === k || (f = [])) : "object" === typeof k && null !== k && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
	    }
	    c && (f = f || []).push("style", c);
	    var l = f;
	    if (b.updateQueue = l) b.flags |= 4;
	  }
	};
	Ei = function (a, b, c, d) {
	  c !== d && (b.flags |= 4);
	};
	function Fi(a, b) {
	  if (!lh) switch (a.tailMode) {
	    case "hidden":
	      b = a.tail;
	      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
	      null === c ? a.tail = null : c.sibling = null;
	      break;
	    case "collapsed":
	      c = a.tail;
	      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
	      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	  }
	}
	function Gi(a, b, c) {
	  var d = b.pendingProps;
	  switch (b.tag) {
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
	      return null;
	    case 1:
	      return Ff(b.type) && Gf(), null;
	    case 3:
	      fh();
	      H(N);
	      H(M);
	      uh();
	      d = b.stateNode;
	      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	      if (null === a || null === a.child) rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
	      Ci(b);
	      return null;
	    case 5:
	      hh(b);
	      var e = dh(ch.current);
	      c = b.type;
	      if (null !== a && null != b.stateNode) Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
	        if (!d) {
	          if (null === b.stateNode) throw Error(y(166));
	          return null;
	        }
	        a = dh(ah.current);
	        if (rh(b)) {
	          d = b.stateNode;
	          c = b.type;
	          var f = b.memoizedProps;
	          d[wf] = b;
	          d[xf] = f;
	          switch (c) {
	            case "dialog":
	              G("cancel", d);
	              G("close", d);
	              break;
	            case "iframe":
	            case "object":
	            case "embed":
	              G("load", d);
	              break;
	            case "video":
	            case "audio":
	              for (a = 0; a < Xe.length; a++) G(Xe[a], d);
	              break;
	            case "source":
	              G("error", d);
	              break;
	            case "img":
	            case "image":
	            case "link":
	              G("error", d);
	              G("load", d);
	              break;
	            case "details":
	              G("toggle", d);
	              break;
	            case "input":
	              Za(d, f);
	              G("invalid", d);
	              break;
	            case "select":
	              d._wrapperState = {
	                wasMultiple: !!f.multiple
	              };
	              G("invalid", d);
	              break;
	            case "textarea":
	              hb(d, f), G("invalid", d);
	          }
	          vb(c, f);
	          a = null;
	          for (var g in f) f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = ["children", e]) : "number" === typeof e && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G("scroll", d));
	          switch (c) {
	            case "input":
	              Va(d);
	              cb(d, f, !0);
	              break;
	            case "textarea":
	              Va(d);
	              jb(d);
	              break;
	            case "select":
	            case "option":
	              break;
	            default:
	              "function" === typeof f.onClick && (d.onclick = jf);
	          }
	          d = a;
	          b.updateQueue = d;
	          null !== d && (b.flags |= 4);
	        } else {
	          g = 9 === e.nodeType ? e : e.ownerDocument;
	          a === kb.html && (a = lb(c));
	          a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	            is: d.is
	          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	          a[wf] = b;
	          a[xf] = d;
	          Bi(a, b, !1, !1);
	          b.stateNode = a;
	          g = wb(c, d);
	          switch (c) {
	            case "dialog":
	              G("cancel", a);
	              G("close", a);
	              e = d;
	              break;
	            case "iframe":
	            case "object":
	            case "embed":
	              G("load", a);
	              e = d;
	              break;
	            case "video":
	            case "audio":
	              for (e = 0; e < Xe.length; e++) G(Xe[e], a);
	              e = d;
	              break;
	            case "source":
	              G("error", a);
	              e = d;
	              break;
	            case "img":
	            case "image":
	            case "link":
	              G("error", a);
	              G("load", a);
	              e = d;
	              break;
	            case "details":
	              G("toggle", a);
	              e = d;
	              break;
	            case "input":
	              Za(a, d);
	              e = Ya(a, d);
	              G("invalid", a);
	              break;
	            case "option":
	              e = eb(a, d);
	              break;
	            case "select":
	              a._wrapperState = {
	                wasMultiple: !!d.multiple
	              };
	              e = m({}, d, {
	                value: void 0
	              });
	              G("invalid", a);
	              break;
	            case "textarea":
	              hb(a, d);
	              e = gb(a, d);
	              G("invalid", a);
	              break;
	            default:
	              e = d;
	          }
	          vb(c, e);
	          var h = e;
	          for (f in h) if (h.hasOwnProperty(f)) {
	            var k = h[f];
	            "style" === f ? tb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && ob(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && pb(a, k) : "number" === typeof k && pb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ca.hasOwnProperty(f) ? null != k && "onScroll" === f && G("scroll", a) : null != k && qa(a, f, k, g));
	          }
	          switch (c) {
	            case "input":
	              Va(a);
	              cb(a, d, !1);
	              break;
	            case "textarea":
	              Va(a);
	              jb(a);
	              break;
	            case "option":
	              null != d.value && a.setAttribute("value", "" + Sa(d.value));
	              break;
	            case "select":
	              a.multiple = !!d.multiple;
	              f = d.value;
	              null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
	              break;
	            default:
	              "function" === typeof e.onClick && (a.onclick = jf);
	          }
	          mf(c, d) && (b.flags |= 4);
	        }
	        null !== b.ref && (b.flags |= 128);
	      }
	      return null;
	    case 6:
	      if (a && null != b.stateNode) Ei(a, b, a.memoizedProps, d);else {
	        if ("string" !== typeof d && null === b.stateNode) throw Error(y(166));
	        c = dh(ch.current);
	        dh(ah.current);
	        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
	      }
	      return null;
	    case 13:
	      H(P);
	      d = b.memoizedState;
	      if (0 !== (b.flags & 64)) return b.lanes = c, b;
	      d = null !== d;
	      c = !1;
	      null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
	      if (d && !c && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P.current & 1)) 0 === V && (V = 3);else {
	        if (0 === V || 3 === V) V = 4;
	        null === U || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U, W);
	      }
	      if (d || c) b.flags |= 4;
	      return null;
	    case 4:
	      return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;
	    case 10:
	      return rg(b), null;
	    case 17:
	      return Ff(b.type) && Gf(), null;
	    case 19:
	      H(P);
	      d = b.memoizedState;
	      if (null === d) return null;
	      f = 0 !== (b.flags & 64);
	      g = d.rendering;
	      if (null === g) {
	        if (f) Fi(d, !1);else {
	          if (0 !== V || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
	            g = ih(a);
	            if (null !== g) {
	              b.flags |= 64;
	              Fi(d, !1);
	              f = g.updateQueue;
	              null !== f && (b.updateQueue = f, b.flags |= 4);
	              null === d.lastEffect && (b.firstEffect = null);
	              b.lastEffect = d.lastEffect;
	              d = c;
	              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                lanes: a.lanes,
	                firstContext: a.firstContext
	              }), c = c.sibling;
	              I(P, P.current & 1 | 2);
	              return b.child;
	            }
	            a = a.sibling;
	          }
	          null !== d.tail && O() > Ji && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        }
	      } else {
	        if (!f) if (a = ih(g), null !== a) {
	          if (b.flags |= 64, f = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, !0), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
	        } else 2 * O() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
	      }
	      return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
	    case 23:
	    case 24:
	      return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
	  }
	  throw Error(y(156, b.tag));
	}
	function Li(a) {
	  switch (a.tag) {
	    case 1:
	      Ff(a.type) && Gf();
	      var b = a.flags;
	      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
	    case 3:
	      fh();
	      H(N);
	      H(M);
	      uh();
	      b = a.flags;
	      if (0 !== (b & 64)) throw Error(y(285));
	      a.flags = b & -4097 | 64;
	      return a;
	    case 5:
	      return hh(a), null;
	    case 13:
	      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
	    case 19:
	      return H(P), null;
	    case 4:
	      return fh(), null;
	    case 10:
	      return rg(a), null;
	    case 23:
	    case 24:
	      return Ki(), null;
	    default:
	      return null;
	  }
	}
	function Mi(a, b) {
	  try {
	    var c = "",
	      d = b;
	    do c += Qa(d), d = d.return; while (d);
	    var e = c;
	  } catch (f) {
	    e = "\nError generating stack: " + f.message + "\n" + f.stack;
	  }
	  return {
	    value: a,
	    source: b,
	    stack: e
	  };
	}
	function Ni(a, b) {
	  try {
	    console.error(b.value);
	  } catch (c) {
	    setTimeout(function () {
	      throw c;
	    });
	  }
	}
	var Oi = "function" === typeof WeakMap ? WeakMap : Map;
	function Pi(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  c.payload = {
	    element: null
	  };
	  var d = b.value;
	  c.callback = function () {
	    Qi || (Qi = !0, Ri = d);
	    Ni(a, b);
	  };
	  return c;
	}
	function Si(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  var d = a.type.getDerivedStateFromError;
	  if ("function" === typeof d) {
	    var e = b.value;
	    c.payload = function () {
	      Ni(a, b);
	      return d(e);
	    };
	  }
	  var f = a.stateNode;
	  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	    "function" !== typeof d && (null === Ti ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
	    var c = b.stack;
	    this.componentDidCatch(b.value, {
	      componentStack: null !== c ? c : ""
	    });
	  });
	  return c;
	}
	var Ui = "function" === typeof WeakSet ? WeakSet : Set;
	function Vi(a) {
	  var b = a.ref;
	  if (null !== b) if ("function" === typeof b) try {
	    b(null);
	  } catch (c) {
	    Wi(a, c);
	  } else b.current = null;
	}
	function Xi(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      return;
	    case 1:
	      if (b.flags & 256 && null !== a) {
	        var c = a.memoizedProps,
	          d = a.memoizedState;
	        a = b.stateNode;
	        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
	        a.__reactInternalSnapshotBeforeUpdate = b;
	      }
	      return;
	    case 3:
	      b.flags & 256 && qf(b.stateNode.containerInfo);
	      return;
	    case 5:
	    case 6:
	    case 4:
	    case 17:
	      return;
	  }
	  throw Error(y(163));
	}
	function Yi(a, b, c) {
	  switch (c.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;
	      if (null !== b) {
	        a = b = b.next;
	        do {
	          if (3 === (a.tag & 3)) {
	            var d = a.create;
	            a.destroy = d();
	          }
	          a = a.next;
	        } while (a !== b);
	      }
	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;
	      if (null !== b) {
	        a = b = b.next;
	        do {
	          var e = a;
	          d = e.next;
	          e = e.tag;
	          0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
	          a = d;
	        } while (a !== b);
	      }
	      return;
	    case 1:
	      a = c.stateNode;
	      c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
	      b = c.updateQueue;
	      null !== b && Eg(c, b, a);
	      return;
	    case 3:
	      b = c.updateQueue;
	      if (null !== b) {
	        a = null;
	        if (null !== c.child) switch (c.child.tag) {
	          case 5:
	            a = c.child.stateNode;
	            break;
	          case 1:
	            a = c.child.stateNode;
	        }
	        Eg(c, b, a);
	      }
	      return;
	    case 5:
	      a = c.stateNode;
	      null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
	      return;
	    case 6:
	      return;
	    case 4:
	      return;
	    case 12:
	      return;
	    case 13:
	      null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
	      return;
	    case 19:
	    case 17:
	    case 20:
	    case 21:
	    case 23:
	    case 24:
	      return;
	  }
	  throw Error(y(163));
	}
	function aj(a, b) {
	  for (var c = a;;) {
	    if (5 === c.tag) {
	      var d = c.stateNode;
	      if (b) d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";else {
	        d = c.stateNode;
	        var e = c.memoizedProps.style;
	        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
	        d.style.display = sb("display", e);
	      }
	    } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }
	    if (c === a) break;
	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === a) return;
	      c = c.return;
	    }
	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}
	function bj(a, b) {
	  if (Mf && "function" === typeof Mf.onCommitFiberUnmount) try {
	    Mf.onCommitFiberUnmount(Lf, b);
	  } catch (f) {}
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      a = b.updateQueue;
	      if (null !== a && (a = a.lastEffect, null !== a)) {
	        var c = a = a.next;
	        do {
	          var d = c,
	            e = d.destroy;
	          d = d.tag;
	          if (void 0 !== e) if (0 !== (d & 4)) Zi(b, c);else {
	            d = b;
	            try {
	              e();
	            } catch (f) {
	              Wi(d, f);
	            }
	          }
	          c = c.next;
	        } while (c !== a);
	      }
	      break;
	    case 1:
	      Vi(b);
	      a = b.stateNode;
	      if ("function" === typeof a.componentWillUnmount) try {
	        a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
	      } catch (f) {
	        Wi(b, f);
	      }
	      break;
	    case 5:
	      Vi(b);
	      break;
	    case 4:
	      cj(a, b);
	  }
	}
	function dj(a) {
	  a.alternate = null;
	  a.child = null;
	  a.dependencies = null;
	  a.firstEffect = null;
	  a.lastEffect = null;
	  a.memoizedProps = null;
	  a.memoizedState = null;
	  a.pendingProps = null;
	  a.return = null;
	  a.updateQueue = null;
	}
	function ej(a) {
	  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function fj(a) {
	  a: {
	    for (var b = a.return; null !== b;) {
	      if (ej(b)) break a;
	      b = b.return;
	    }
	    throw Error(y(160));
	  }
	  var c = b;
	  b = c.stateNode;
	  switch (c.tag) {
	    case 5:
	      var d = !1;
	      break;
	    case 3:
	      b = b.containerInfo;
	      d = !0;
	      break;
	    case 4:
	      b = b.containerInfo;
	      d = !0;
	      break;
	    default:
	      throw Error(y(161));
	  }
	  c.flags & 16 && (pb(b, ""), c.flags &= -17);
	  a: b: for (c = a;;) {
	    for (; null === c.sibling;) {
	      if (null === c.return || ej(c.return)) {
	        c = null;
	        break a;
	      }
	      c = c.return;
	    }
	    c.sibling.return = c.return;
	    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
	      if (c.flags & 2) continue b;
	      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
	    }
	    if (!(c.flags & 2)) {
	      c = c.stateNode;
	      break a;
	    }
	  }
	  d ? gj(a, c, b) : hj(a, c, b);
	}
	function gj(a, b, c) {
	  var d = a.tag,
	    e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));else if (4 !== d && (a = a.child, null !== a)) for (gj(a, b, c), a = a.sibling; null !== a;) gj(a, b, c), a = a.sibling;
	}
	function hj(a, b, c) {
	  var d = a.tag,
	    e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (hj(a, b, c), a = a.sibling; null !== a;) hj(a, b, c), a = a.sibling;
	}
	function cj(a, b) {
	  for (var c = b, d = !1, e, f;;) {
	    if (!d) {
	      d = c.return;
	      a: for (;;) {
	        if (null === d) throw Error(y(160));
	        e = d.stateNode;
	        switch (d.tag) {
	          case 5:
	            f = !1;
	            break a;
	          case 3:
	            e = e.containerInfo;
	            f = !0;
	            break a;
	          case 4:
	            e = e.containerInfo;
	            f = !0;
	            break a;
	        }
	        d = d.return;
	      }
	      d = !0;
	    }
	    if (5 === c.tag || 6 === c.tag) {
	      a: for (var g = a, h = c, k = h;;) if (bj(g, k), null !== k.child && 4 !== k.tag) k.child.return = k, k = k.child;else {
	        if (k === h) break a;
	        for (; null === k.sibling;) {
	          if (null === k.return || k.return === h) break a;
	          k = k.return;
	        }
	        k.sibling.return = k.return;
	        k = k.sibling;
	      }
	      f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
	    } else if (4 === c.tag) {
	      if (null !== c.child) {
	        e = c.stateNode.containerInfo;
	        f = !0;
	        c.child.return = c;
	        c = c.child;
	        continue;
	      }
	    } else if (bj(a, c), null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }
	    if (c === b) break;
	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	      4 === c.tag && (d = !1);
	    }
	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}
	function ij(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      var c = b.updateQueue;
	      c = null !== c ? c.lastEffect : null;
	      if (null !== c) {
	        var d = c = c.next;
	        do 3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next; while (d !== c);
	      }
	      return;
	    case 1:
	      return;
	    case 5:
	      c = b.stateNode;
	      if (null != c) {
	        d = b.memoizedProps;
	        var e = null !== a ? a.memoizedProps : d;
	        a = b.type;
	        var f = b.updateQueue;
	        b.updateQueue = null;
	        if (null !== f) {
	          c[xf] = d;
	          "input" === a && "radio" === d.type && null != d.name && $a(c, d);
	          wb(a, e);
	          b = wb(a, d);
	          for (e = 0; e < f.length; e += 2) {
	            var g = f[e],
	              h = f[e + 1];
	            "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
	          }
	          switch (a) {
	            case "input":
	              ab(c, d);
	              break;
	            case "textarea":
	              ib(c, d);
	              break;
	            case "select":
	              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? fb(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, !0) : fb(c, !!d.multiple, d.multiple ? [] : "", !1));
	          }
	        }
	      }
	      return;
	    case 6:
	      if (null === b.stateNode) throw Error(y(162));
	      b.stateNode.nodeValue = b.memoizedProps;
	      return;
	    case 3:
	      c = b.stateNode;
	      c.hydrate && (c.hydrate = !1, Cc(c.containerInfo));
	      return;
	    case 12:
	      return;
	    case 13:
	      null !== b.memoizedState && (jj = O(), aj(b.child, !0));
	      kj(b);
	      return;
	    case 19:
	      kj(b);
	      return;
	    case 17:
	      return;
	    case 23:
	    case 24:
	      aj(b, null !== b.memoizedState);
	      return;
	  }
	  throw Error(y(163));
	}
	function kj(a) {
	  var b = a.updateQueue;
	  if (null !== b) {
	    a.updateQueue = null;
	    var c = a.stateNode;
	    null === c && (c = a.stateNode = new Ui());
	    b.forEach(function (b) {
	      var d = lj.bind(null, a, b);
	      c.has(b) || (c.add(b), b.then(d, d));
	    });
	  }
	}
	function mj(a, b) {
	  return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
	}
	var nj = Math.ceil,
	  oj = ra.ReactCurrentDispatcher,
	  pj = ra.ReactCurrentOwner,
	  X = 0,
	  U = null,
	  Y = null,
	  W = 0,
	  qj = 0,
	  rj = Bf(0),
	  V = 0,
	  sj = null,
	  tj = 0,
	  Dg = 0,
	  Hi = 0,
	  uj = 0,
	  vj = null,
	  jj = 0,
	  Ji = Infinity;
	function wj() {
	  Ji = O() + 500;
	}
	var Z = null,
	  Qi = !1,
	  Ri = null,
	  Ti = null,
	  xj = !1,
	  yj = null,
	  zj = 90,
	  Aj = [],
	  Bj = [],
	  Cj = null,
	  Dj = 0,
	  Ej = null,
	  Fj = -1,
	  Gj = 0,
	  Hj = 0,
	  Ij = null,
	  Jj = !1;
	function Hg() {
	  return 0 !== (X & 48) ? O() : -1 !== Fj ? Fj : Fj = O();
	}
	function Ig(a) {
	  a = a.mode;
	  if (0 === (a & 2)) return 1;
	  if (0 === (a & 4)) return 99 === eg() ? 1 : 2;
	  0 === Gj && (Gj = tj);
	  if (0 !== kg.transition) {
	    0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
	    a = Gj;
	    var b = 4186112 & ~Hj;
	    b &= -b;
	    0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
	    return b;
	  }
	  a = eg();
	  0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
	  return a;
	}
	function Jg(a, b, c) {
	  if (50 < Dj) throw Dj = 0, Ej = null, Error(y(185));
	  a = Kj(a, b);
	  if (null === a) return null;
	  $c(a, b, c);
	  a === U && (Hi |= b, 4 === V && Ii(a, W));
	  var d = eg();
	  1 === b ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
	  vj = a;
	}
	function Kj(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  c = a;
	  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
	  return 3 === c.tag ? c.stateNode : null;
	}
	function Mj(a, b) {
	  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
	    var h = 31 - Vc(g),
	      k = 1 << h,
	      l = f[h];
	    if (-1 === l) {
	      if (0 === (k & d) || 0 !== (k & e)) {
	        l = b;
	        Rc(k);
	        var n = F;
	        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
	      }
	    } else l <= b && (a.expiredLanes |= k);
	    g &= ~k;
	  }
	  d = Uc(a, a === U ? W : 0);
	  b = F;
	  if (0 === d) null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);else {
	    if (null !== c) {
	      if (a.callbackPriority === b) return;
	      c !== Zf && Pf(c);
	    }
	    15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
	    a.callbackPriority = b;
	    a.callbackNode = c;
	  }
	}
	function Nj(a) {
	  Fj = -1;
	  Hj = Gj = 0;
	  if (0 !== (X & 48)) throw Error(y(327));
	  var b = a.callbackNode;
	  if (Oj() && a.callbackNode !== b) return null;
	  var c = Uc(a, a === U ? W : 0);
	  if (0 === c) return null;
	  var d = c;
	  var e = X;
	  X |= 16;
	  var f = Pj();
	  if (U !== a || W !== d) wj(), Qj(a, d);
	  do try {
	    Rj();
	    break;
	  } catch (h) {
	    Sj(a, h);
	  } while (1);
	  qg();
	  oj.current = f;
	  X = e;
	  null !== Y ? d = 0 : (U = null, W = 0, d = V);
	  if (0 !== (tj & Hi)) Qj(a, 0);else if (0 !== d) {
	    2 === d && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
	    if (1 === d) throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
	    a.finishedWork = a.current.alternate;
	    a.finishedLanes = c;
	    switch (d) {
	      case 0:
	      case 1:
	        throw Error(y(345));
	      case 2:
	        Uj(a);
	        break;
	      case 3:
	        Ii(a, c);
	        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
	          if (0 !== Uc(a, 0)) break;
	          e = a.suspendedLanes;
	          if ((e & c) !== c) {
	            Hg();
	            a.pingedLanes |= a.suspendedLanes & e;
	            break;
	          }
	          a.timeoutHandle = of(Uj.bind(null, a), d);
	          break;
	        }
	        Uj(a);
	        break;
	      case 4:
	        Ii(a, c);
	        if ((c & 4186112) === c) break;
	        d = a.eventTimes;
	        for (e = -1; 0 < c;) {
	          var g = 31 - Vc(c);
	          f = 1 << g;
	          g = d[g];
	          g > e && (e = g);
	          c &= ~f;
	        }
	        c = e;
	        c = O() - c;
	        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
	        if (10 < c) {
	          a.timeoutHandle = of(Uj.bind(null, a), c);
	          break;
	        }
	        Uj(a);
	        break;
	      case 5:
	        Uj(a);
	        break;
	      default:
	        throw Error(y(329));
	    }
	  }
	  Mj(a, O());
	  return a.callbackNode === b ? Nj.bind(null, a) : null;
	}
	function Ii(a, b) {
	  b &= ~uj;
	  b &= ~Hi;
	  a.suspendedLanes |= b;
	  a.pingedLanes &= ~b;
	  for (a = a.expirationTimes; 0 < b;) {
	    var c = 31 - Vc(b),
	      d = 1 << c;
	    a[c] = -1;
	    b &= ~d;
	  }
	}
	function Lj(a) {
	  if (0 !== (X & 48)) throw Error(y(327));
	  Oj();
	  if (a === U && 0 !== (a.expiredLanes & W)) {
	    var b = W;
	    var c = Tj(a, b);
	    0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
	  } else b = Uc(a, 0), c = Tj(a, b);
	  0 !== a.tag && 2 === c && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
	  if (1 === c) throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
	  a.finishedWork = a.current.alternate;
	  a.finishedLanes = b;
	  Uj(a);
	  Mj(a, O());
	  return null;
	}
	function Vj() {
	  if (null !== Cj) {
	    var a = Cj;
	    Cj = null;
	    a.forEach(function (a) {
	      a.expiredLanes |= 24 & a.pendingLanes;
	      Mj(a, O());
	    });
	  }
	  ig();
	}
	function Wj(a, b) {
	  var c = X;
	  X |= 1;
	  try {
	    return a(b);
	  } finally {
	    X = c, 0 === X && (wj(), ig());
	  }
	}
	function Xj(a, b) {
	  var c = X;
	  X &= -2;
	  X |= 8;
	  try {
	    return a(b);
	  } finally {
	    X = c, 0 === X && (wj(), ig());
	  }
	}
	function ni(a, b) {
	  I(rj, qj);
	  qj |= b;
	  tj |= b;
	}
	function Ki() {
	  qj = rj.current;
	  H(rj);
	}
	function Qj(a, b) {
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  var c = a.timeoutHandle;
	  -1 !== c && (a.timeoutHandle = -1, pf(c));
	  if (null !== Y) for (c = Y.return; null !== c;) {
	    var d = c;
	    switch (d.tag) {
	      case 1:
	        d = d.type.childContextTypes;
	        null !== d && void 0 !== d && Gf();
	        break;
	      case 3:
	        fh();
	        H(N);
	        H(M);
	        uh();
	        break;
	      case 5:
	        hh(d);
	        break;
	      case 4:
	        fh();
	        break;
	      case 13:
	        H(P);
	        break;
	      case 19:
	        H(P);
	        break;
	      case 10:
	        rg(d);
	        break;
	      case 23:
	      case 24:
	        Ki();
	    }
	    c = c.return;
	  }
	  U = a;
	  Y = Tg(a.current, null);
	  W = qj = tj = b;
	  V = 0;
	  sj = null;
	  uj = Hi = Dg = 0;
	}
	function Sj(a, b) {
	  do {
	    var c = Y;
	    try {
	      qg();
	      vh.current = Gh;
	      if (yh) {
	        for (var d = R.memoizedState; null !== d;) {
	          var e = d.queue;
	          null !== e && (e.pending = null);
	          d = d.next;
	        }
	        yh = !1;
	      }
	      xh = 0;
	      T = S = R = null;
	      zh = !1;
	      pj.current = null;
	      if (null === c || null === c.return) {
	        V = 1;
	        sj = b;
	        Y = null;
	        break;
	      }
	      a: {
	        var f = a,
	          g = c.return,
	          h = c,
	          k = b;
	        b = W;
	        h.flags |= 2048;
	        h.firstEffect = h.lastEffect = null;
	        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	          var l = k;
	          if (0 === (h.mode & 2)) {
	            var n = h.alternate;
	            n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
	          }
	          var A = 0 !== (P.current & 1),
	            p = g;
	          do {
	            var C;
	            if (C = 13 === p.tag) {
	              var x = p.memoizedState;
	              if (null !== x) C = null !== x.dehydrated ? !0 : !1;else {
	                var w = p.memoizedProps;
	                C = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : A ? !1 : !0;
	              }
	            }
	            if (C) {
	              var z = p.updateQueue;
	              if (null === z) {
	                var u = new Set();
	                u.add(l);
	                p.updateQueue = u;
	              } else z.add(l);
	              if (0 === (p.mode & 2)) {
	                p.flags |= 64;
	                h.flags |= 16384;
	                h.flags &= -2981;
	                if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
	                  var t = zg(-1, 1);
	                  t.tag = 2;
	                  Ag(h, t);
	                }
	                h.lanes |= 1;
	                break a;
	              }
	              k = void 0;
	              h = b;
	              var q = f.pingCache;
	              null === q ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), void 0 === k && (k = new Set(), q.set(l, k)));
	              if (!k.has(h)) {
	                k.add(h);
	                var v = Yj.bind(null, f, l, h);
	                l.then(v, v);
	              }
	              p.flags |= 4096;
	              p.lanes = b;
	              break a;
	            }
	            p = p.return;
	          } while (null !== p);
	          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
	        }
	        5 !== V && (V = 2);
	        k = Mi(k, h);
	        p = g;
	        do {
	          switch (p.tag) {
	            case 3:
	              f = k;
	              p.flags |= 4096;
	              b &= -b;
	              p.lanes |= b;
	              var J = Pi(p, f, b);
	              Bg(p, J);
	              break a;
	            case 1:
	              f = k;
	              var K = p.type,
	                Q = p.stateNode;
	              if (0 === (p.flags & 64) && ("function" === typeof K.getDerivedStateFromError || null !== Q && "function" === typeof Q.componentDidCatch && (null === Ti || !Ti.has(Q)))) {
	                p.flags |= 4096;
	                b &= -b;
	                p.lanes |= b;
	                var L = Si(p, f, b);
	                Bg(p, L);
	                break a;
	              }
	          }
	          p = p.return;
	        } while (null !== p);
	      }
	      Zj(c);
	    } catch (va) {
	      b = va;
	      Y === c && null !== c && (Y = c = c.return);
	      continue;
	    }
	    break;
	  } while (1);
	}
	function Pj() {
	  var a = oj.current;
	  oj.current = Gh;
	  return null === a ? Gh : a;
	}
	function Tj(a, b) {
	  var c = X;
	  X |= 16;
	  var d = Pj();
	  U === a && W === b || Qj(a, b);
	  do try {
	    ak();
	    break;
	  } catch (e) {
	    Sj(a, e);
	  } while (1);
	  qg();
	  X = c;
	  oj.current = d;
	  if (null !== Y) throw Error(y(261));
	  U = null;
	  W = 0;
	  return V;
	}
	function ak() {
	  for (; null !== Y;) bk(Y);
	}
	function Rj() {
	  for (; null !== Y && !Qf();) bk(Y);
	}
	function bk(a) {
	  var b = ck(a.alternate, a, qj);
	  a.memoizedProps = a.pendingProps;
	  null === b ? Zj(a) : Y = b;
	  pj.current = null;
	}
	function Zj(a) {
	  var b = a;
	  do {
	    var c = b.alternate;
	    a = b.return;
	    if (0 === (b.flags & 2048)) {
	      c = Gi(c, b, qj);
	      if (null !== c) {
	        Y = c;
	        return;
	      }
	      c = b;
	      if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
	        for (var d = 0, e = c.child; null !== e;) d |= e.lanes | e.childLanes, e = e.sibling;
	        c.childLanes = d;
	      }
	      null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
	    } else {
	      c = Li(b);
	      if (null !== c) {
	        c.flags &= 2047;
	        Y = c;
	        return;
	      }
	      null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
	    }
	    b = b.sibling;
	    if (null !== b) {
	      Y = b;
	      return;
	    }
	    Y = b = a;
	  } while (null !== b);
	  0 === V && (V = 5);
	}
	function Uj(a) {
	  var b = eg();
	  gg(99, dk.bind(null, a, b));
	  return null;
	}
	function dk(a, b) {
	  do Oj(); while (null !== yj);
	  if (0 !== (X & 48)) throw Error(y(327));
	  var c = a.finishedWork;
	  if (null === c) return null;
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  if (c === a.current) throw Error(y(177));
	  a.callbackNode = null;
	  var d = c.lanes | c.childLanes,
	    e = d,
	    f = a.pendingLanes & ~e;
	  a.pendingLanes = e;
	  a.suspendedLanes = 0;
	  a.pingedLanes = 0;
	  a.expiredLanes &= e;
	  a.mutableReadLanes &= e;
	  a.entangledLanes &= e;
	  e = a.entanglements;
	  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
	    var k = 31 - Vc(f),
	      l = 1 << k;
	    e[k] = 0;
	    g[k] = -1;
	    h[k] = -1;
	    f &= ~l;
	  }
	  null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
	  a === U && (Y = U = null, W = 0);
	  1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
	  if (null !== d) {
	    e = X;
	    X |= 32;
	    pj.current = null;
	    kf = fd;
	    g = Ne();
	    if (Oe(g)) {
	      if ("selectionStart" in g) h = {
	        start: g.selectionStart,
	        end: g.selectionEnd
	      };else a: if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount) {
	        h = l.anchorNode;
	        f = l.anchorOffset;
	        k = l.focusNode;
	        l = l.focusOffset;
	        try {
	          h.nodeType, k.nodeType;
	        } catch (va) {
	          h = null;
	          break a;
	        }
	        var n = 0,
	          A = -1,
	          p = -1,
	          C = 0,
	          x = 0,
	          w = g,
	          z = null;
	        b: for (;;) {
	          for (var u;;) {
	            w !== h || 0 !== f && 3 !== w.nodeType || (A = n + f);
	            w !== k || 0 !== l && 3 !== w.nodeType || (p = n + l);
	            3 === w.nodeType && (n += w.nodeValue.length);
	            if (null === (u = w.firstChild)) break;
	            z = w;
	            w = u;
	          }
	          for (;;) {
	            if (w === g) break b;
	            z === h && ++C === f && (A = n);
	            z === k && ++x === l && (p = n);
	            if (null !== (u = w.nextSibling)) break;
	            w = z;
	            z = w.parentNode;
	          }
	          w = u;
	        }
	        h = -1 === A || -1 === p ? null : {
	          start: A,
	          end: p
	        };
	      } else h = null;
	      h = h || {
	        start: 0,
	        end: 0
	      };
	    } else h = null;
	    lf = {
	      focusedElem: g,
	      selectionRange: h
	    };
	    fd = !1;
	    Ij = null;
	    Jj = !1;
	    Z = d;
	    do try {
	      ek();
	    } catch (va) {
	      if (null === Z) throw Error(y(330));
	      Wi(Z, va);
	      Z = Z.nextEffect;
	    } while (null !== Z);
	    Ij = null;
	    Z = d;
	    do try {
	      for (g = a; null !== Z;) {
	        var t = Z.flags;
	        t & 16 && pb(Z.stateNode, "");
	        if (t & 128) {
	          var q = Z.alternate;
	          if (null !== q) {
	            var v = q.ref;
	            null !== v && ("function" === typeof v ? v(null) : v.current = null);
	          }
	        }
	        switch (t & 1038) {
	          case 2:
	            fj(Z);
	            Z.flags &= -3;
	            break;
	          case 6:
	            fj(Z);
	            Z.flags &= -3;
	            ij(Z.alternate, Z);
	            break;
	          case 1024:
	            Z.flags &= -1025;
	            break;
	          case 1028:
	            Z.flags &= -1025;
	            ij(Z.alternate, Z);
	            break;
	          case 4:
	            ij(Z.alternate, Z);
	            break;
	          case 8:
	            h = Z;
	            cj(g, h);
	            var J = h.alternate;
	            dj(h);
	            null !== J && dj(J);
	        }
	        Z = Z.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z) throw Error(y(330));
	      Wi(Z, va);
	      Z = Z.nextEffect;
	    } while (null !== Z);
	    v = lf;
	    q = Ne();
	    t = v.focusedElem;
	    g = v.selectionRange;
	    if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
	      null !== g && Oe(t) && (q = g.start, v = g.end, void 0 === v && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = void 0 === g.end ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (1 !== v.rangeCount || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
	      q = [];
	      for (v = t; v = v.parentNode;) 1 === v.nodeType && q.push({
	        element: v,
	        left: v.scrollLeft,
	        top: v.scrollTop
	      });
	      "function" === typeof t.focus && t.focus();
	      for (t = 0; t < q.length; t++) v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
	    }
	    fd = !!kf;
	    lf = kf = null;
	    a.current = c;
	    Z = d;
	    do try {
	      for (t = a; null !== Z;) {
	        var K = Z.flags;
	        K & 36 && Yi(t, Z.alternate, Z);
	        if (K & 128) {
	          q = void 0;
	          var Q = Z.ref;
	          if (null !== Q) {
	            var L = Z.stateNode;
	            switch (Z.tag) {
	              case 5:
	                q = L;
	                break;
	              default:
	                q = L;
	            }
	            "function" === typeof Q ? Q(q) : Q.current = q;
	          }
	        }
	        Z = Z.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z) throw Error(y(330));
	      Wi(Z, va);
	      Z = Z.nextEffect;
	    } while (null !== Z);
	    Z = null;
	    $f();
	    X = e;
	  } else a.current = c;
	  if (xj) xj = !1, yj = a, zj = b;else for (Z = d; null !== Z;) b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
	  d = a.pendingLanes;
	  0 === d && (Ti = null);
	  1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
	  c = c.stateNode;
	  if (Mf && "function" === typeof Mf.onCommitFiberRoot) try {
	    Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
	  } catch (va) {}
	  Mj(a, O());
	  if (Qi) throw Qi = !1, a = Ri, Ri = null, a;
	  if (0 !== (X & 8)) return null;
	  ig();
	  return null;
	}
	function ek() {
	  for (; null !== Z;) {
	    var a = Z.alternate;
	    Jj || null === Ij || (0 !== (Z.flags & 8) ? dc(Z, Ij) && (Jj = !0) : 13 === Z.tag && mj(a, Z) && dc(Z, Ij) && (Jj = !0));
	    var b = Z.flags;
	    0 !== (b & 256) && Xi(a, Z);
	    0 === (b & 512) || xj || (xj = !0, hg(97, function () {
	      Oj();
	      return null;
	    }));
	    Z = Z.nextEffect;
	  }
	}
	function Oj() {
	  if (90 !== zj) {
	    var a = 97 < zj ? 97 : zj;
	    zj = 90;
	    return gg(a, fk);
	  }
	  return !1;
	}
	function $i(a, b) {
	  Aj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}
	function Zi(a, b) {
	  Bj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}
	function fk() {
	  if (null === yj) return !1;
	  var a = yj;
	  yj = null;
	  if (0 !== (X & 48)) throw Error(y(331));
	  var b = X;
	  X |= 32;
	  var c = Bj;
	  Bj = [];
	  for (var d = 0; d < c.length; d += 2) {
	    var e = c[d],
	      f = c[d + 1],
	      g = e.destroy;
	    e.destroy = void 0;
	    if ("function" === typeof g) try {
	      g();
	    } catch (k) {
	      if (null === f) throw Error(y(330));
	      Wi(f, k);
	    }
	  }
	  c = Aj;
	  Aj = [];
	  for (d = 0; d < c.length; d += 2) {
	    e = c[d];
	    f = c[d + 1];
	    try {
	      var h = e.create;
	      e.destroy = h();
	    } catch (k) {
	      if (null === f) throw Error(y(330));
	      Wi(f, k);
	    }
	  }
	  for (h = a.current.firstEffect; null !== h;) a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
	  X = b;
	  ig();
	  return !0;
	}
	function gk(a, b, c) {
	  b = Mi(c, b);
	  b = Pi(a, b, 1);
	  Ag(a, b);
	  b = Hg();
	  a = Kj(a, 1);
	  null !== a && ($c(a, 1, b), Mj(a, b));
	}
	function Wi(a, b) {
	  if (3 === a.tag) gk(a, a, b);else for (var c = a.return; null !== c;) {
	    if (3 === c.tag) {
	      gk(c, a, b);
	      break;
	    } else if (1 === c.tag) {
	      var d = c.stateNode;
	      if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
	        a = Mi(b, a);
	        var e = Si(c, a, 1);
	        Ag(c, e);
	        e = Hg();
	        c = Kj(c, 1);
	        if (null !== c) $c(c, 1, e), Mj(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) try {
	          d.componentDidCatch(b, a);
	        } catch (f) {}
	        break;
	      }
	    }
	    c = c.return;
	  }
	}
	function Yj(a, b, c) {
	  var d = a.pingCache;
	  null !== d && d.delete(b);
	  b = Hg();
	  a.pingedLanes |= a.suspendedLanes & c;
	  U === a && (W & c) === c && (4 === V || 3 === V && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
	  Mj(a, b);
	}
	function lj(a, b) {
	  var c = a.stateNode;
	  null !== c && c.delete(b);
	  b = 0;
	  0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
	  c = Hg();
	  a = Kj(a, b);
	  null !== a && ($c(a, b, c), Mj(a, c));
	}
	var ck;
	ck = function (a, b, c) {
	  var d = b.lanes;
	  if (null !== a) {
	    if (a.memoizedProps !== b.pendingProps || N.current) ug = !0;else if (0 !== (c & d)) ug = 0 !== (a.flags & 16384) ? !0 : !1;else {
	      ug = !1;
	      switch (b.tag) {
	        case 3:
	          ri(b);
	          sh();
	          break;
	        case 5:
	          gh(b);
	          break;
	        case 1:
	          Ff(b.type) && Jf(b);
	          break;
	        case 4:
	          eh(b, b.stateNode.containerInfo);
	          break;
	        case 10:
	          d = b.memoizedProps.value;
	          var e = b.type._context;
	          I(mg, e._currentValue);
	          e._currentValue = d;
	          break;
	        case 13:
	          if (null !== b.memoizedState) {
	            if (0 !== (c & b.child.childLanes)) return ti(a, b, c);
	            I(P, P.current & 1);
	            b = hi(a, b, c);
	            return null !== b ? b.sibling : null;
	          }
	          I(P, P.current & 1);
	          break;
	        case 19:
	          d = 0 !== (c & b.childLanes);
	          if (0 !== (a.flags & 64)) {
	            if (d) return Ai(a, b, c);
	            b.flags |= 64;
	          }
	          e = b.memoizedState;
	          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	          I(P, P.current);
	          if (d) break;else return null;
	        case 23:
	        case 24:
	          return b.lanes = 0, mi(a, b, c);
	      }
	      return hi(a, b, c);
	    }
	  } else ug = !1;
	  b.lanes = 0;
	  switch (b.tag) {
	    case 2:
	      d = b.type;
	      null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	      a = b.pendingProps;
	      e = Ef(b, M.current);
	      tg(b, c);
	      e = Ch(null, b, d, a, e, c);
	      b.flags |= 1;
	      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
	        b.tag = 1;
	        b.memoizedState = null;
	        b.updateQueue = null;
	        if (Ff(d)) {
	          var f = !0;
	          Jf(b);
	        } else f = !1;
	        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
	        xg(b);
	        var g = d.getDerivedStateFromProps;
	        "function" === typeof g && Gg(b, d, g, a);
	        e.updater = Kg;
	        b.stateNode = e;
	        e._reactInternals = b;
	        Og(b, d, a, c);
	        b = qi(null, b, d, !0, f, c);
	      } else b.tag = 0, fi(null, b, e, c), b = b.child;
	      return b;
	    case 16:
	      e = b.elementType;
	      a: {
	        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	        a = b.pendingProps;
	        f = e._init;
	        e = f(e._payload);
	        b.type = e;
	        f = b.tag = hk(e);
	        a = lg(e, a);
	        switch (f) {
	          case 0:
	            b = li(null, b, e, a, c);
	            break a;
	          case 1:
	            b = pi(null, b, e, a, c);
	            break a;
	          case 11:
	            b = gi(null, b, e, a, c);
	            break a;
	          case 14:
	            b = ii(null, b, e, lg(e.type, a), d, c);
	            break a;
	        }
	        throw Error(y(306, e, ""));
	      }
	      return b;
	    case 0:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
	    case 1:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
	    case 3:
	      ri(b);
	      d = b.updateQueue;
	      if (null === a || null === d) throw Error(y(282));
	      d = b.pendingProps;
	      e = b.memoizedState;
	      e = null !== e ? e.element : null;
	      yg(a, b);
	      Cg(b, d, null, c);
	      d = b.memoizedState.element;
	      if (d === e) sh(), b = hi(a, b, c);else {
	        e = b.stateNode;
	        if (f = e.hydrate) kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = !0;
	        if (f) {
	          a = e.mutableSourceEagerHydrationData;
	          if (null != a) for (e = 0; e < a.length; e += 2) f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
	          c = Zg(b, null, d, c);
	          for (b.child = c; c;) c.flags = c.flags & -3 | 1024, c = c.sibling;
	        } else fi(a, b, d, c), sh();
	        b = b.child;
	      }
	      return b;
	    case 5:
	      return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
	    case 6:
	      return null === a && ph(b), null;
	    case 13:
	      return ti(a, b, c);
	    case 4:
	      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
	    case 11:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
	    case 7:
	      return fi(a, b, b.pendingProps, c), b.child;
	    case 8:
	      return fi(a, b, b.pendingProps.children, c), b.child;
	    case 12:
	      return fi(a, b, b.pendingProps.children, c), b.child;
	    case 10:
	      a: {
	        d = b.type._context;
	        e = b.pendingProps;
	        g = b.memoizedProps;
	        f = e.value;
	        var h = b.type._context;
	        I(mg, h._currentValue);
	        h._currentValue = f;
	        if (null !== g) if (h = g.value, f = He(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
	          if (g.children === e.children && !N.current) {
	            b = hi(a, b, c);
	            break a;
	          }
	        } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
	          var k = h.dependencies;
	          if (null !== k) {
	            g = h.child;
	            for (var l = k.firstContext; null !== l;) {
	              if (l.context === d && 0 !== (l.observedBits & f)) {
	                1 === h.tag && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
	                h.lanes |= c;
	                l = h.alternate;
	                null !== l && (l.lanes |= c);
	                sg(h.return, c);
	                k.lanes |= c;
	                break;
	              }
	              l = l.next;
	            }
	          } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
	          if (null !== g) g.return = h;else for (g = h; null !== g;) {
	            if (g === b) {
	              g = null;
	              break;
	            }
	            h = g.sibling;
	            if (null !== h) {
	              h.return = g.return;
	              g = h;
	              break;
	            }
	            g = g.return;
	          }
	          h = g;
	        }
	        fi(a, b, e.children, c);
	        b = b.child;
	      }
	      return b;
	    case 9:
	      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
	    case 14:
	      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
	    case 15:
	      return ki(a, b, b.type, b.pendingProps, d, c);
	    case 17:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = !0, Jf(b)) : a = !1, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, !0, a, c);
	    case 19:
	      return Ai(a, b, c);
	    case 23:
	      return mi(a, b, c);
	    case 24:
	      return mi(a, b, c);
	  }
	  throw Error(y(156, b.tag));
	};
	function ik(a, b, c, d) {
	  this.tag = a;
	  this.key = c;
	  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	  this.index = 0;
	  this.ref = null;
	  this.pendingProps = b;
	  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = d;
	  this.flags = 0;
	  this.lastEffect = this.firstEffect = this.nextEffect = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}
	function nh(a, b, c, d) {
	  return new ik(a, b, c, d);
	}
	function ji(a) {
	  a = a.prototype;
	  return !(!a || !a.isReactComponent);
	}
	function hk(a) {
	  if ("function" === typeof a) return ji(a) ? 1 : 0;
	  if (void 0 !== a && null !== a) {
	    a = a.$$typeof;
	    if (a === Aa) return 11;
	    if (a === Da) return 14;
	  }
	  return 2;
	}
	function Tg(a, b) {
	  var c = a.alternate;
	  null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
	  c.childLanes = a.childLanes;
	  c.lanes = a.lanes;
	  c.child = a.child;
	  c.memoizedProps = a.memoizedProps;
	  c.memoizedState = a.memoizedState;
	  c.updateQueue = a.updateQueue;
	  b = a.dependencies;
	  c.dependencies = null === b ? null : {
	    lanes: b.lanes,
	    firstContext: b.firstContext
	  };
	  c.sibling = a.sibling;
	  c.index = a.index;
	  c.ref = a.ref;
	  return c;
	}
	function Vg(a, b, c, d, e, f) {
	  var g = 2;
	  d = a;
	  if ("function" === typeof a) ji(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	    case ua:
	      return Xg(c.children, e, f, b);
	    case Ha:
	      g = 8;
	      e |= 16;
	      break;
	    case wa:
	      g = 8;
	      e |= 1;
	      break;
	    case xa:
	      return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
	    case Ba:
	      return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
	    case Ca:
	      return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
	    case Ia:
	      return vi(c, e, f, b);
	    case Ja:
	      return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
	    default:
	      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	        case ya:
	          g = 10;
	          break a;
	        case za:
	          g = 9;
	          break a;
	        case Aa:
	          g = 11;
	          break a;
	        case Da:
	          g = 14;
	          break a;
	        case Ea:
	          g = 16;
	          d = null;
	          break a;
	        case Fa:
	          g = 22;
	          break a;
	      }
	      throw Error(y(130, null == a ? a : typeof a, ""));
	  }
	  b = nh(g, c, b, e);
	  b.elementType = a;
	  b.type = d;
	  b.lanes = f;
	  return b;
	}
	function Xg(a, b, c, d) {
	  a = nh(7, a, d, b);
	  a.lanes = c;
	  return a;
	}
	function vi(a, b, c, d) {
	  a = nh(23, a, d, b);
	  a.elementType = Ia;
	  a.lanes = c;
	  return a;
	}
	function Ug(a, b, c) {
	  a = nh(6, a, null, b);
	  a.lanes = c;
	  return a;
	}
	function Wg(a, b, c) {
	  b = nh(4, null !== a.children ? a.children : [], a.key, b);
	  b.lanes = c;
	  b.stateNode = {
	    containerInfo: a.containerInfo,
	    pendingChildren: null,
	    implementation: a.implementation
	  };
	  return b;
	}
	function jk(a, b, c) {
	  this.tag = b;
	  this.containerInfo = a;
	  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.pendingContext = this.context = null;
	  this.hydrate = c;
	  this.callbackNode = null;
	  this.callbackPriority = 0;
	  this.eventTimes = Zc(0);
	  this.expirationTimes = Zc(-1);
	  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	  this.entanglements = Zc(0);
	  this.mutableSourceEagerHydrationData = null;
	}
	function kk(a, b, c) {
	  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: ta,
	    key: null == d ? null : "" + d,
	    children: a,
	    containerInfo: b,
	    implementation: c
	  };
	}
	function lk(a, b, c, d) {
	  var e = b.current,
	    f = Hg(),
	    g = Ig(e);
	  a: if (c) {
	    c = c._reactInternals;
	    b: {
	      if (Zb(c) !== c || 1 !== c.tag) throw Error(y(170));
	      var h = c;
	      do {
	        switch (h.tag) {
	          case 3:
	            h = h.stateNode.context;
	            break b;
	          case 1:
	            if (Ff(h.type)) {
	              h = h.stateNode.__reactInternalMemoizedMergedChildContext;
	              break b;
	            }
	        }
	        h = h.return;
	      } while (null !== h);
	      throw Error(y(171));
	    }
	    if (1 === c.tag) {
	      var k = c.type;
	      if (Ff(k)) {
	        c = If(c, k, h);
	        break a;
	      }
	    }
	    c = h;
	  } else c = Cf;
	  null === b.context ? b.context = c : b.pendingContext = c;
	  b = zg(f, g);
	  b.payload = {
	    element: a
	  };
	  d = void 0 === d ? null : d;
	  null !== d && (b.callback = d);
	  Ag(e, b);
	  Jg(e, g, f);
	  return g;
	}
	function mk(a) {
	  a = a.current;
	  if (!a.child) return null;
	  switch (a.child.tag) {
	    case 5:
	      return a.child.stateNode;
	    default:
	      return a.child.stateNode;
	  }
	}
	function nk(a, b) {
	  a = a.memoizedState;
	  if (null !== a && null !== a.dehydrated) {
	    var c = a.retryLane;
	    a.retryLane = 0 !== c && c < b ? c : b;
	  }
	}
	function ok(a, b) {
	  nk(a, b);
	  (a = a.alternate) && nk(a, b);
	}
	function pk() {
	  return null;
	}
	function qk(a, b, c) {
	  var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
	  c = new jk(a, b, null != c && !0 === c.hydrate);
	  b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
	  c.current = b;
	  b.stateNode = c;
	  xg(b);
	  a[ff] = c.current;
	  cf(8 === a.nodeType ? a.parentNode : a);
	  if (d) for (a = 0; a < d.length; a++) {
	    b = d[a];
	    var e = b._getVersion;
	    e = e(b._source);
	    null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
	  }
	  this._internalRoot = c;
	}
	qk.prototype.render = function (a) {
	  lk(a, this._internalRoot, null, null);
	};
	qk.prototype.unmount = function () {
	  var a = this._internalRoot,
	    b = a.containerInfo;
	  lk(null, a, null, function () {
	    b[ff] = null;
	  });
	};
	function rk(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function sk(a, b) {
	  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
	  if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
	  return new qk(a, 0, b ? {
	    hydrate: !0
	  } : void 0);
	}
	function tk(a, b, c, d, e) {
	  var f = c._reactRootContainer;
	  if (f) {
	    var g = f._internalRoot;
	    if ("function" === typeof e) {
	      var h = e;
	      e = function () {
	        var a = mk(g);
	        h.call(a);
	      };
	    }
	    lk(b, g, a, e);
	  } else {
	    f = c._reactRootContainer = sk(c, d);
	    g = f._internalRoot;
	    if ("function" === typeof e) {
	      var k = e;
	      e = function () {
	        var a = mk(g);
	        k.call(a);
	      };
	    }
	    Xj(function () {
	      lk(b, g, a, e);
	    });
	  }
	  return mk(g);
	}
	ec = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 4, b);
	    ok(a, 4);
	  }
	};
	fc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 67108864, b);
	    ok(a, 67108864);
	  }
	};
	gc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg(),
	      c = Ig(a);
	    Jg(a, c, b);
	    ok(a, c);
	  }
	};
	hc = function (a, b) {
	  return b();
	};
	yb = function (a, b, c) {
	  switch (b) {
	    case "input":
	      ab(a, c);
	      b = c.name;
	      if ("radio" === c.type && null != b) {
	        for (c = a; c.parentNode;) c = c.parentNode;
	        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
	        for (b = 0; b < c.length; b++) {
	          var d = c[b];
	          if (d !== a && d.form === a.form) {
	            var e = Db(d);
	            if (!e) throw Error(y(90));
	            Wa(d);
	            ab(d, e);
	          }
	        }
	      }
	      break;
	    case "textarea":
	      ib(a, c);
	      break;
	    case "select":
	      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
	  }
	};
	Gb = Wj;
	Hb = function (a, b, c, d, e) {
	  var f = X;
	  X |= 4;
	  try {
	    return gg(98, a.bind(null, b, c, d, e));
	  } finally {
	    X = f, 0 === X && (wj(), ig());
	  }
	};
	Ib = function () {
	  0 === (X & 49) && (Vj(), Oj());
	};
	Jb = function (a, b) {
	  var c = X;
	  X |= 2;
	  try {
	    return a(b);
	  } finally {
	    X = c, 0 === X && (wj(), ig());
	  }
	};
	function uk(a, b) {
	  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (!rk(b)) throw Error(y(200));
	  return kk(a, b, null, c);
	}
	var vk = {
	    Events: [Cb, ue, Db, Eb, Fb, Oj, {
	      current: !1
	    }]
	  },
	  wk = {
	    findFiberByHostInstance: wc,
	    bundleType: 0,
	    version: "17.0.2",
	    rendererPackageName: "react-dom"
	  };
	var xk = {
	  bundleType: wk.bundleType,
	  version: wk.version,
	  rendererPackageName: wk.rendererPackageName,
	  rendererConfig: wk.rendererConfig,
	  overrideHookState: null,
	  overrideHookStateDeletePath: null,
	  overrideHookStateRenamePath: null,
	  overrideProps: null,
	  overridePropsDeletePath: null,
	  overridePropsRenamePath: null,
	  setSuspenseHandler: null,
	  scheduleUpdate: null,
	  currentDispatcherRef: ra.ReactCurrentDispatcher,
	  findHostInstanceByFiber: function (a) {
	    a = cc(a);
	    return null === a ? null : a.stateNode;
	  },
	  findFiberByHostInstance: wk.findFiberByHostInstance || pk,
	  findHostInstancesForRefresh: null,
	  scheduleRefresh: null,
	  scheduleRoot: null,
	  setRefreshHandler: null,
	  getCurrentFiber: null
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!yk.isDisabled && yk.supportsFiber) try {
	    Lf = yk.inject(xk), Mf = yk;
	  } catch (a) {}
	}
	reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
	reactDom_production_min.createPortal = uk;
	reactDom_production_min.findDOMNode = function (a) {
	  if (null == a) return null;
	  if (1 === a.nodeType) return a;
	  var b = a._reactInternals;
	  if (void 0 === b) {
	    if ("function" === typeof a.render) throw Error(y(188));
	    throw Error(y(268, Object.keys(a)));
	  }
	  a = cc(b);
	  a = null === a ? null : a.stateNode;
	  return a;
	};
	reactDom_production_min.flushSync = function (a, b) {
	  var c = X;
	  if (0 !== (c & 48)) return a(b);
	  X |= 1;
	  try {
	    if (a) return gg(99, a.bind(null, b));
	  } finally {
	    X = c, ig();
	  }
	};
	reactDom_production_min.hydrate = function (a, b, c) {
	  if (!rk(b)) throw Error(y(200));
	  return tk(null, a, b, !0, c);
	};
	reactDom_production_min.render = function (a, b, c) {
	  if (!rk(b)) throw Error(y(200));
	  return tk(null, a, b, !1, c);
	};
	reactDom_production_min.unmountComponentAtNode = function (a) {
	  if (!rk(a)) throw Error(y(40));
	  return a._reactRootContainer ? (Xj(function () {
	    tk(null, null, a, !1, function () {
	      a._reactRootContainer = null;
	      a[ff] = null;
	    });
	  }), !0) : !1;
	};
	reactDom_production_min.unstable_batchedUpdates = Wj;
	reactDom_production_min.unstable_createPortal = function (a, b) {
	  return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
	};
	reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
	  if (!rk(c)) throw Error(y(200));
	  if (null == a || void 0 === a._reactInternals) throw Error(y(38));
	  return tk(a, b, c, !1, d);
	};
	reactDom_production_min.version = "17.0.2";
	return reactDom_production_min;
}

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}
{
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  reactDom.exports = requireReactDom_production_min();
}

var reactDomExports = reactDom.exports;
var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

var propTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;
	factoryWithThrowingShims = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

var reactIs$2 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min$1;

function requireReactIs_production_min$1 () {
	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	hasRequiredReactIs_production_min$1 = 1;

	var b = 60103,
	  c = 60106,
	  d = 60107,
	  e = 60108,
	  f = 60114,
	  g = 60109,
	  h = 60110,
	  k = 60112,
	  l = 60113,
	  m = 60120,
	  n = 60115,
	  p = 60116,
	  q = 60121,
	  r = 60122,
	  u = 60117,
	  v = 60129,
	  w = 60131;
	if ("function" === typeof Symbol && Symbol.for) {
	  var x = Symbol.for;
	  b = x("react.element");
	  c = x("react.portal");
	  d = x("react.fragment");
	  e = x("react.strict_mode");
	  f = x("react.profiler");
	  g = x("react.provider");
	  h = x("react.context");
	  k = x("react.forward_ref");
	  l = x("react.suspense");
	  m = x("react.suspense_list");
	  n = x("react.memo");
	  p = x("react.lazy");
	  q = x("react.block");
	  r = x("react.server.block");
	  u = x("react.fundamental");
	  v = x("react.debug_trace_mode");
	  w = x("react.legacy_hidden");
	}
	function y(a) {
	  if ("object" === typeof a && null !== a) {
	    var t = a.$$typeof;
	    switch (t) {
	      case b:
	        switch (a = a.type, a) {
	          case d:
	          case f:
	          case e:
	          case l:
	          case m:
	            return a;
	          default:
	            switch (a = a && a.$$typeof, a) {
	              case h:
	              case k:
	              case p:
	              case n:
	              case g:
	                return a;
	              default:
	                return t;
	            }
	        }
	      case c:
	        return t;
	    }
	  }
	}
	var z = g,
	  A = b,
	  B = k,
	  C = d,
	  D = p,
	  E = n,
	  F = c,
	  G = f,
	  H = e,
	  I = l;
	reactIs_production_min$1.ContextConsumer = h;
	reactIs_production_min$1.ContextProvider = z;
	reactIs_production_min$1.Element = A;
	reactIs_production_min$1.ForwardRef = B;
	reactIs_production_min$1.Fragment = C;
	reactIs_production_min$1.Lazy = D;
	reactIs_production_min$1.Memo = E;
	reactIs_production_min$1.Portal = F;
	reactIs_production_min$1.Profiler = G;
	reactIs_production_min$1.StrictMode = H;
	reactIs_production_min$1.Suspense = I;
	reactIs_production_min$1.isAsyncMode = function () {
	  return !1;
	};
	reactIs_production_min$1.isConcurrentMode = function () {
	  return !1;
	};
	reactIs_production_min$1.isContextConsumer = function (a) {
	  return y(a) === h;
	};
	reactIs_production_min$1.isContextProvider = function (a) {
	  return y(a) === g;
	};
	reactIs_production_min$1.isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === b;
	};
	reactIs_production_min$1.isForwardRef = function (a) {
	  return y(a) === k;
	};
	reactIs_production_min$1.isFragment = function (a) {
	  return y(a) === d;
	};
	reactIs_production_min$1.isLazy = function (a) {
	  return y(a) === p;
	};
	reactIs_production_min$1.isMemo = function (a) {
	  return y(a) === n;
	};
	reactIs_production_min$1.isPortal = function (a) {
	  return y(a) === c;
	};
	reactIs_production_min$1.isProfiler = function (a) {
	  return y(a) === f;
	};
	reactIs_production_min$1.isStrictMode = function (a) {
	  return y(a) === e;
	};
	reactIs_production_min$1.isSuspense = function (a) {
	  return y(a) === l;
	};
	reactIs_production_min$1.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? !0 : !1;
	};
	reactIs_production_min$1.typeOf = y;
	return reactIs_production_min$1;
}

{
  reactIs$2.exports = requireReactIs_production_min$1();
}

var reactIsExports$1 = reactIs$2.exports;

function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e.charAt(l);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;
            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }
                        l = u;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}
              }
              if (0 === k) break;
              l++;
            }
            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);
                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;
                  default:
                    r = O;
                }
                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);
                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;
                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;
                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;
              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }
            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;
          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;
              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }
              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }
      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;
        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }
        default:
          z++;
          y = e.charAt(l);
          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;
                default:
                  32 !== g && (y = ' ');
              }
              break;
            case 0:
              y = '\\0';
              break;
            case 12:
              y = '\\f';
              break;
            case 11:
              y = '\\v';
              break;
            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;
            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                case 8:
                  111 === K && (E = K);
              }
              break;
            case 58:
              0 === n + b + m && (u = l);
              break;
            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;
            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;
            case 91:
              0 === n + b + v && m++;
              break;
            case 93:
              0 === n + b + v && m--;
              break;
            case 41:
              0 === n + b + m && v--;
              break;
            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;
                  default:
                    q = 1;
                }
                v++;
              }
              break;
            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;
                    case 220:
                      t = l, b = 42;
                  }
                  break;
                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }
          0 === b && (f += y);
      }
      K = x;
      x = g;
      l++;
    }
    t = p.length;
    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';
      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);
        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;
          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }
        E = 0;
      }
    }
    return G + p + F;
  }
  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
      m = d.length;
    switch (m) {
      case 0:
      case 1:
        var b = 0;
        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }
        break;
      default:
        var v = b = 0;
        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }
    }
    return c;
  }
  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());
      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());
      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }
    return d + c;
  }
  function P(d, c, e, h) {
    var a = d + ';',
      m = 2 * c + 3 * e + 4 * h;
    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }
    if (0 === w || 2 === w && !L(a, 1)) return a;
    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
      case 1009:
        if (100 !== a.charCodeAt(4)) break;
      case 969:
      case 942:
        return '-webkit-' + a + a;
      case 978:
        return '-webkit-' + a + '-moz-' + a + a;
      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;
      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;
      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;
      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;
        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;
          case 232:
            b = a.replace(G, 'tb-rl');
            break;
          case 220:
            b = a.replace(G, 'lr');
            break;
          default:
            return a;
        }
        return '-webkit-' + a + '-ms-' + b + a;
      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;
      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;
          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;
          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }
        return a + ';';
      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;
      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;
      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }
    return a;
  }
  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
      h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }
  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }
  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          x = w;
      }
    }
    if (x !== c) return x;
  }
  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;
      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }
    return T;
  }
  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }
  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];
    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }
    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }
  var ca = /^\0+/g,
    N = /[\0\r\f]/g,
    aa = /: */g,
    ka = /zoo|gra/,
    ma = /([,: ])(transform)/g,
    ia = /,\r+?/g,
    F = /([\t\r\n ])*\f?&/g,
    fa = /@(k\w+)\s*(\S*)\s*/,
    Q = /::(place)/g,
    ha = /:(read-only)/g,
    G = /[svh]\w+-[tblr]{2}/,
    da = /\(\s*(.*)\s*\)/g,
    oa = /([\s\S]*?);/g,
    ba = /-self|flex-/g,
    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    la = /stretch|:\s*\w+\-(?:conte|avail)/,
    ja = /([^-])(image-set\()/,
    z = 1,
    D = 1,
    E = 0,
    w = 1,
    O = [],
    S = [],
    A = 0,
    R = null,
    Y = 0,
    V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize$2(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize$2(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */ && prop.charCodeAt(1) === 110
  /* n */ && prop.charCodeAt(2) < 91;
}
/* Z+1 */);

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;

	var b = "function" === typeof Symbol && Symbol.for,
	  c = b ? Symbol.for("react.element") : 60103,
	  d = b ? Symbol.for("react.portal") : 60106,
	  e = b ? Symbol.for("react.fragment") : 60107,
	  f = b ? Symbol.for("react.strict_mode") : 60108,
	  g = b ? Symbol.for("react.profiler") : 60114,
	  h = b ? Symbol.for("react.provider") : 60109,
	  k = b ? Symbol.for("react.context") : 60110,
	  l = b ? Symbol.for("react.async_mode") : 60111,
	  m = b ? Symbol.for("react.concurrent_mode") : 60111,
	  n = b ? Symbol.for("react.forward_ref") : 60112,
	  p = b ? Symbol.for("react.suspense") : 60113,
	  q = b ? Symbol.for("react.suspense_list") : 60120,
	  r = b ? Symbol.for("react.memo") : 60115,
	  t = b ? Symbol.for("react.lazy") : 60116,
	  v = b ? Symbol.for("react.block") : 60121,
	  w = b ? Symbol.for("react.fundamental") : 60117,
	  x = b ? Symbol.for("react.responder") : 60118,
	  y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
	  if ("object" === typeof a && null !== a) {
	    var u = a.$$typeof;
	    switch (u) {
	      case c:
	        switch (a = a.type, a) {
	          case l:
	          case m:
	          case e:
	          case g:
	          case f:
	          case p:
	            return a;
	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k:
	              case n:
	              case t:
	              case r:
	              case h:
	                return a;
	              default:
	                return u;
	            }
	        }
	      case d:
	        return u;
	    }
	  }
	}
	function A(a) {
	  return z(a) === m;
	}
	reactIs_production_min.AsyncMode = l;
	reactIs_production_min.ConcurrentMode = m;
	reactIs_production_min.ContextConsumer = k;
	reactIs_production_min.ContextProvider = h;
	reactIs_production_min.Element = c;
	reactIs_production_min.ForwardRef = n;
	reactIs_production_min.Fragment = e;
	reactIs_production_min.Lazy = t;
	reactIs_production_min.Memo = r;
	reactIs_production_min.Portal = d;
	reactIs_production_min.Profiler = g;
	reactIs_production_min.StrictMode = f;
	reactIs_production_min.Suspense = p;
	reactIs_production_min.isAsyncMode = function (a) {
	  return A(a) || z(a) === l;
	};
	reactIs_production_min.isConcurrentMode = A;
	reactIs_production_min.isContextConsumer = function (a) {
	  return z(a) === k;
	};
	reactIs_production_min.isContextProvider = function (a) {
	  return z(a) === h;
	};
	reactIs_production_min.isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	reactIs_production_min.isForwardRef = function (a) {
	  return z(a) === n;
	};
	reactIs_production_min.isFragment = function (a) {
	  return z(a) === e;
	};
	reactIs_production_min.isLazy = function (a) {
	  return z(a) === t;
	};
	reactIs_production_min.isMemo = function (a) {
	  return z(a) === r;
	};
	reactIs_production_min.isPortal = function (a) {
	  return z(a) === d;
	};
	reactIs_production_min.isProfiler = function (a) {
	  return z(a) === g;
	};
	reactIs_production_min.isStrictMode = function (a) {
	  return z(a) === f;
	};
	reactIs_production_min.isSuspense = function (a) {
	  return z(a) === p;
	};
	reactIs_production_min.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	reactIs_production_min.typeOf = z;
	return reactIs_production_min;
}

{
  reactIs$1.exports = requireReactIs_production_min();
}

var reactIsExports = reactIs$1.exports;

var reactIs = reactIsExports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty$3 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          // Avoid failures from read-only properties
          defineProperty$3(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;

var f = /*@__PURE__*/getDefaultExportFromCjs(hoistNonReactStatics_cjs);

function m() {
  return (m = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var y = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
    return n;
  },
  v = function (t) {
    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !reactIsExports$1.typeOf(t);
  },
  g = Object.freeze([]),
  S = Object.freeze({});
function w(e) {
  return "function" == typeof e;
}
function E(e) {
  return e.displayName || e.name || "Component";
}
function b(e) {
  return e && "string" == typeof e.styledComponentId;
}
var _ = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
  A = "undefined" != typeof window && "HTMLElement" in window,
  C = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== "production"));
function R(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) ;
}
var D = function () {
    function e(e) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    var t = e.prototype;
    return t.indexOfGroup = function (e) {
      for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
      return t;
    }, t.insertRules = function (e, t) {
      if (e >= this.groupSizes.length) {
        for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && R(16, "" + e);
        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
        for (var s = r; s < o; s++) this.groupSizes[s] = 0;
      }
      for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
    }, t.clearGroup = function (e) {
      if (e < this.length) {
        var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          r = n + t;
        this.groupSizes[e] = 0;
        for (var o = n; o < r; o++) this.tag.deleteRule(n);
      }
    }, t.getGroup = function (e) {
      var t = "";
      if (e >= this.length || 0 === this.groupSizes[e]) return t;
      for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";
      return t;
    }, e;
  }(),
  j = new Map(),
  T = new Map(),
  x = 1,
  k = function (e) {
    if (j.has(e)) return j.get(e);
    for (; T.has(x);) x++;
    var t = x++;
    return j.set(e, t), T.set(t, e), t;
  },
  V = function (e) {
    return T.get(e);
  },
  z = function (e, t) {
    t >= x && (x = t + 1), j.set(e, t), T.set(t, e);
  },
  B = "style[" + _ + '][data-styled-version="5.3.11"]',
  M = new RegExp("^" + _ + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  G = function (e, t, n) {
    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
  },
  L = function (e, t) {
    for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
      var i = n[o].trim();
      if (i) {
        var a = i.match(M);
        if (a) {
          var c = 0 | parseInt(a[1], 10),
            u = a[2];
          0 !== c && (z(u, c), G(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
        } else r.push(i);
      }
    }
  },
  F = function () {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  },
  Y = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = function (e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
          var r = t[n];
          if (r && 1 === r.nodeType && r.hasAttribute(_)) return r;
        }
      }(n),
      s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(_, "active"), r.setAttribute("data-styled-version", "5.3.11");
    var i = F();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
  },
  q = function () {
    function e(e) {
      var t = this.element = Y(e);
      t.appendChild(document.createTextNode("")), this.sheet = function (e) {
        if (e.sheet) return e.sheet;
        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          if (o.ownerNode === e) return o;
        }
        R(17);
      }(t), this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      try {
        return this.sheet.insertRule(t, e), this.length++, !0;
      } catch (e) {
        return !1;
      }
    }, t.deleteRule = function (e) {
      this.sheet.deleteRule(e), this.length--;
    }, t.getRule = function (e) {
      var t = this.sheet.cssRules[e];
      return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
    }, e;
  }(),
  H = function () {
    function e(e) {
      var t = this.element = Y(e);
      this.nodes = t.childNodes, this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      if (e <= this.length && e >= 0) {
        var n = document.createTextNode(t),
          r = this.nodes[e];
        return this.element.insertBefore(n, r || null), this.length++, !0;
      }
      return !1;
    }, t.deleteRule = function (e) {
      this.element.removeChild(this.nodes[e]), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.nodes[e].textContent : "";
    }, e;
  }(),
  $ = function () {
    function e(e) {
      this.rules = [], this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, t.deleteRule = function (e) {
      this.rules.splice(e, 1), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.rules[e] : "";
    }, e;
  }(),
  W = A,
  U = {
    isServer: !A,
    useCSSOMInjection: !C
  },
  J = function () {
    function e(e, t, n) {
      void 0 === e && (e = S), void 0 === t && (t = {}), this.options = m({}, U, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && A && W && (W = !1, function (e) {
        for (var t = document.querySelectorAll(B), n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          o && "active" !== o.getAttribute(_) && (L(e, o), o.parentNode && o.parentNode.removeChild(o));
        }
      }(this));
    }
    e.registerId = function (e) {
      return k(e);
    };
    var t = e.prototype;
    return t.reconstructWithOptions = function (t, n) {
      return void 0 === n && (n = !0), new e(m({}, this.options, {}, t), this.gs, n && this.names || void 0);
    }, t.allocateGSInstance = function (e) {
      return this.gs[e] = (this.gs[e] || 0) + 1;
    }, t.getTag = function () {
      return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new $(o) : r ? new q(o) : new H(o), new D(e)));
      var e, t, n, r, o;
    }, t.hasNameForId = function (e, t) {
      return this.names.has(e) && this.names.get(e).has(t);
    }, t.registerName = function (e, t) {
      if (k(e), this.names.has(e)) this.names.get(e).add(t);else {
        var n = new Set();
        n.add(t), this.names.set(e, n);
      }
    }, t.insertRules = function (e, t, n) {
      this.registerName(e, t), this.getTag().insertRules(k(e), n);
    }, t.clearNames = function (e) {
      this.names.has(e) && this.names.get(e).clear();
    }, t.clearRules = function (e) {
      this.getTag().clearGroup(k(e)), this.clearNames(e);
    }, t.clearTag = function () {
      this.tag = void 0;
    }, t.toString = function () {
      return function (e) {
        for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
          var s = V(o);
          if (void 0 !== s) {
            var i = e.names.get(s),
              a = t.getGroup(o);
            if (i && a && i.size) {
              var c = _ + ".g" + o + '[id="' + s + '"]',
                u = "";
              void 0 !== i && i.forEach(function (e) {
                e.length > 0 && (u += e + ",");
              }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
            }
          }
        }
        return r;
      }(this);
    }, e;
  }(),
  X = /(a)(d)/gi,
  Z = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function K(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Z(t % 52) + n;
  return (Z(t % 52) + n).replace(X, "$1-$2");
}
var Q = function (e, t) {
    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
    return e;
  },
  ee = function (e) {
    return Q(5381, e);
  };
function te(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (w(n) && !b(n)) return !1;
  }
  return !0;
}
var ne = ee("5.3.11"),
  re = function () {
    function e(e, t, n) {
      this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && te(e), this.componentId = t, this.baseHash = Q(ne, t), this.baseStyle = n, J.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function (e, t, n) {
      var r = this.componentId,
        o = [];
      if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
        if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
          var s = be(this.rules, e, t, n).join(""),
            i = K(Q(this.baseHash, s) >>> 0);
          if (!t.hasNameForId(r, i)) {
            var a = n(s, "." + i, void 0, r);
            t.insertRules(r, i, a);
          }
          o.push(i), this.staticRulesId = i;
        }
      } else {
        for (var c = this.rules.length, u = Q(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
          var h = this.rules[d];
          if ("string" == typeof h) l += h;else if (h) {
            var p = be(h, e, t, n),
              f = Array.isArray(p) ? p.join("") : p;
            u = Q(u, f + d), l += f;
          }
        }
        if (l) {
          var m = K(u >>> 0);
          if (!t.hasNameForId(r, m)) {
            var y = n(l, "." + m, void 0, r);
            t.insertRules(r, m, y);
          }
          o.push(m);
        }
      }
      return o.join(" ");
    }, e;
  }(),
  oe = /^\s*\/\/.*$/gm,
  se = [":", "[", ".", "#"];
function ie(e) {
  var t,
    n,
    r,
    o,
    s = void 0 === e ? S : e,
    i = s.options,
    a = void 0 === i ? S : i,
    c = s.plugins,
    u = void 0 === c ? g : c,
    l = new stylis_min(a),
    h = [],
    p = function (e) {
      function t(t) {
        if (t) try {
          e(t + "}");
        } catch (e) {}
      }
      return function (n, r, o, s, i, a, c, u, l, d) {
        switch (n) {
          case 1:
            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
            break;
          case 2:
            if (0 === u) return r + "/*|*/";
            break;
          case 3:
            switch (u) {
              case 102:
              case 112:
                return e(o[0] + r), "";
              default:
                return r + (0 === d ? "/*|*/" : "");
            }
          case -2:
            r.split("/*|*/}").forEach(t);
        }
      };
    }(function (e) {
      h.push(e);
    }),
    f = function (e, r, s) {
      return 0 === r && -1 !== se.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
    };
  function m(e, s, i, a) {
    void 0 === a && (a = "&");
    var c = e.replace(oe, ""),
      u = s && i ? i + " " + s + " { " + c + " }" : c;
    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
  }
  return l.use([].concat(u, [function (e, t, o) {
    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
  }, p, function (e) {
    if (-2 === e) {
      var t = h;
      return h = [], t;
    }
  }])), m.hash = u.length ? u.reduce(function (e, t) {
    return t.name || R(15), Q(e, t.name);
  }, 5381).toString() : "", m;
}
var ae = /*#__PURE__*/React.createContext();
  ae.Consumer;
  var ue = /*#__PURE__*/React.createContext(),
  le = (ue.Consumer, new J()),
  de = ie();
function he() {
  return reactExports.useContext(ae) || le;
}
function pe() {
  return reactExports.useContext(ue) || de;
}
var me = function () {
    function e(e, t) {
      var n = this;
      this.inject = function (e, t) {
        void 0 === t && (t = de);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
      }, this.toString = function () {
        return R(12, String(n.name));
      }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
    }
    return e.prototype.getName = function (e) {
      return void 0 === e && (e = de), this.name + e.hash;
    }, e;
  }(),
  ye = /([A-Z])/,
  ve = /([A-Z])/g,
  ge = /^ms-/,
  Se = function (e) {
    return "-" + e.toLowerCase();
  };
function we(e) {
  return ye.test(e) ? e.replace(ve, Se).replace(ge, "-ms-") : e;
}
var Ee = function (e) {
  return null == e || !1 === e || "" === e;
};
function be(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = be(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    return i;
  }
  if (Ee(e)) return "";
  if (b(e)) return "." + e.styledComponentId;
  if (w(e)) {
    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
    var u = e(n);
    return be(u, n, r, o);
  }
  var l;
  return e instanceof me ? r ? (e.inject(r, o), e.getName(o)) : e : v(e) ? function e(t, n) {
    var r,
      o,
      s = [];
    for (var i in t) t.hasOwnProperty(i) && !Ee(t[i]) && (Array.isArray(t[i]) && t[i].isCss || w(t[i]) ? s.push(we(i) + ":", t[i], ";") : v(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(we(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitlessKeys || r.startsWith("--") ? String(o).trim() : o + "px") + ";"));
    return n ? [n + " {"].concat(s, ["}"]) : s;
  }(e) : e.toString();
}
var _e = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ne(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return w(e) || v(e) ? _e(be(y(g, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : _e(be(y(e, n)));
}
var Pe = function (e, t, n) {
    return void 0 === n && (n = S), e.theme !== n.theme && e.theme || t || n.theme;
  },
  Oe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Re = /(^-|-$)/g;
function De(e) {
  return e.replace(Oe, "-").replace(Re, "");
}
var je = function (e) {
  return K(ee(e) >>> 0);
};
function Te(e) {
  return "string" == typeof e && ("production" === "production" );
}
var xe = function (e) {
    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
  },
  ke = function (e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function Ve(e, t, n) {
  var r = e[n];
  xe(t) && xe(r) ? ze(r, t) : e[n] = t;
}
function ze(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, s = n; o < s.length; o++) {
    var i = s[o];
    if (xe(i)) for (var a in i) ke(a) && Ve(e, i[a], a);
  }
  return e;
}
var Be = /*#__PURE__*/React.createContext();
  Be.Consumer;
function Ge(e) {
  var t = reactExports.useContext(Be),
    n = reactExports.useMemo(function () {
      return function (e, t) {
        if (!e) return R(14);
        if (w(e)) {
          var n = e(t);
          return n ;
        }
        return Array.isArray(e) || "object" != typeof e ? R(8) : t ? m({}, t, {}, e) : e;
      }(e.theme, t);
    }, [e.theme, t]);
  return e.children ? /*#__PURE__*/React.createElement(Be.Provider, {
    value: n
  }, e.children) : null;
}
var Le = {};
function Fe(e, t, n) {
  var o = b(e),
    i = !Te(e),
    a = t.attrs,
    c = void 0 === a ? g : a,
    l = t.componentId,
    d = void 0 === l ? function (e, t) {
      var n = "string" != typeof e ? "sc" : De(e);
      Le[n] = (Le[n] || 0) + 1;
      var r = n + "-" + je("5.3.11" + n + Le[n]);
      return t ? t + "-" + r : r;
    }(t.displayName, t.parentComponentId) : l,
    h = t.displayName,
    y = void 0 === h ? function (e) {
      return Te(e) ? "styled." + e : "Styled(" + E(e) + ")";
    }(e) : h,
    v = t.displayName && t.componentId ? De(t.displayName) + "-" + t.componentId : t.componentId || d,
    _ = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
    N = t.shouldForwardProp;
  o && e.shouldForwardProp && (N = t.shouldForwardProp ? function (n, r, o) {
    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
  } : e.shouldForwardProp);
  var A,
    C = new re(n, v, o ? e.componentStyle : void 0),
    I = C.isStatic && 0 === c.length,
    P = function (e, t) {
      return function (e, t, n, r) {
        var o = e.attrs,
          i = e.componentStyle,
          a = e.defaultProps,
          c = e.foldedComponentIds,
          l = e.shouldForwardProp,
          d = e.styledComponentId,
          h = e.target,
          f = function (e, t, n) {
            void 0 === e && (e = S);
            var r = m({}, t, {
                theme: e
              }),
              o = {};
            return n.forEach(function (e) {
              var t,
                n,
                s,
                i = e;
              for (t in w(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
            }), [r, o];
          }(Pe(t, reactExports.useContext(Be), a) || S, t, o),
          y = f[0],
          v = f[1],
          g = function (e, t, n, r) {
            var o = he(),
              s = pe(),
              i = t ? e.generateAndInjectStyles(S, o, s) : e.generateAndInjectStyles(n, o, s);
            return i;
          }(i, r, y),
          E = n,
          b = v.$as || t.$as || v.as || t.as || h,
          _ = Te(b),
          N = v !== t ? m({}, t, {}, v) : t,
          A = {};
        for (var C in N) "$" !== C[0] && "as" !== C && ("forwardedAs" === C ? A.as = N[C] : (l ? l(C, isPropValid, b) : !_ || isPropValid(C)) && (A[C] = N[C]));
        return t.style && v.style !== t.style && (A.style = m({}, t.style, {}, v.style)), A.className = Array.prototype.concat(c, d, g !== d ? g : null, t.className, v.className).filter(Boolean).join(" "), A.ref = E, /*#__PURE__*/reactExports.createElement(b, A);
      }(A, e, t, I);
    };
  return P.displayName = y, (A = /*#__PURE__*/React.forwardRef(P)).attrs = _, A.componentStyle = C, A.displayName = y, A.shouldForwardProp = N, A.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : g, A.styledComponentId = v, A.target = o ? e.target : e, A.withComponent = function (e) {
    var r = t.componentId,
      o = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }(t, ["componentId"]),
      s = r && r + "-" + (Te(e) ? e : De(E(e)));
    return Fe(e, m({}, o, {
      attrs: _,
      componentId: s
    }), n);
  }, Object.defineProperty(A, "defaultProps", {
    get: function () {
      return this._foldedDefaultProps;
    },
    set: function (t) {
      this._foldedDefaultProps = o ? ze({}, e.defaultProps, t) : t;
    }
  }), Object.defineProperty(A, "toString", {
    value: function () {
      return "." + A.styledComponentId;
    }
  }), i && f(A, e, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), A;
}
var Ye = function (e) {
  return function e(t, r, o) {
    if (void 0 === o && (o = S), !reactIsExports$1.isValidElementType(r)) return R(1, String(r));
    var s = function () {
      return t(r, o, Ne.apply(void 0, arguments));
    };
    return s.withConfig = function (n) {
      return e(t, r, m({}, o, {}, n));
    }, s.attrs = function (n) {
      return e(t, r, m({}, o, {
        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
      }));
    }, s;
  }(Fe, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
  Ye[e] = Ye(e);
});
function $e(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = Ne.apply(void 0, [e].concat(n)).join(""),
    s = je(o);
  return new me(s, o);
}
var styled = Ye;

/**
  * @reach/utils v0.18.0
  *
  * Copyright (c) 2018-2022, React Training LLC
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */


// src/can-use-dom.ts
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var useIsomorphicLayoutEffect$1 = canUseDOM() ? reactExports.useLayoutEffect : reactExports.useEffect;

var serverHandoffComplete = false;
var id = 0;
function genId() {
  return ++id;
}
var maybeReactUseId = React$1["useId".toString()];
function useId(providedId) {
  if (maybeReactUseId !== void 0) {
    let generatedId = maybeReactUseId();
    return providedId ?? generatedId;
  }
  let initialId = providedId ?? (serverHandoffComplete ? genId() : null);
  let [id2, setId] = reactExports.useState(initialId);
  useIsomorphicLayoutEffect$1(() => {
    if (id2 === null) {
      setId(genId());
    }
  }, []);
  reactExports.useEffect(() => {
    if (serverHandoffComplete === false) {
      serverHandoffComplete = true;
    }
  }, []);
  return providedId ?? id2 ?? void 0;
}

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
function composeEventHandlers$1() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(fn => {
      fn && fn(event, ...args);
      return event && event.defaultPrevented;
    });
  };
}
function getControlledValue() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  for (const value of values) {
    if (value !== undefined) {
      return value;
    }
  }
  return undefined;
}
const KEY_CODES = {
  ALT: 18,
  ASTERISK: 170,
  BACKSPACE: 8,
  COMMA: 188,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  HOME: 36,
  LEFT: 37,
  NUMPAD_ADD: 107,
  NUMPAD_DECIMAL: 110,
  NUMPAD_DIVIDE: 111,
  NUMPAD_ENTER: 108,
  NUMPAD_MULTIPLY: 106,
  NUMPAD_SUBTRACT: 109,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PERIOD: 190,
  RIGHT: 39,
  SHIFT: 16,
  SPACE: 32,
  TAB: 9,
  UP: 38
};
const KEYS$1 = {
  ALT: 'Alt',
  ASTERISK: '*',
  BACKSPACE: 'Backspace',
  COMMA: ',',
  DELETE: 'Delete',
  DOWN: 'ArrowDown',
  END: 'End',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  HOME: 'Home',
  LEFT: 'ArrowLeft',
  NUMPAD_ADD: 'Add',
  NUMPAD_DECIMAL: 'Decimal',
  NUMPAD_DIVIDE: 'Divide',
  NUMPAD_ENTER: 'Enter',
  NUMPAD_MULTIPLY: 'Multiply',
  NUMPAD_SUBTRACT: 'Subtract',
  PAGE_DOWN: 'PageDown',
  PAGE_UP: 'PageUp',
  PERIOD: '.',
  RIGHT: 'ArrowRight',
  SHIFT: 'Shift',
  SPACE: ' ',
  TAB: 'Tab',
  UNIDENTIFIED: 'Unidentified',
  UP: 'ArrowUp'
};
var DocumentPosition$1;
(function (DocumentPosition) {
  DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
  DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
  DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
  DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
  DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
  DocumentPosition[DocumentPosition["IMPLEMENTATION_SPECIFIC"] = 32] = "IMPLEMENTATION_SPECIFIC";
})(DocumentPosition$1 || (DocumentPosition$1 = {}));

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
const useField$1 = _ref => {
  let {
    idPrefix,
    hasHint,
    hasMessage
  } = _ref;
  const prefix = useId(idPrefix);
  const inputId = `${prefix}--input`;
  const labelId = `${prefix}--label`;
  const hintId = `${prefix}--hint`;
  const messageId = `${prefix}--message`;
  const getLabelProps = reactExports.useCallback(function (_temp) {
    let {
      id = labelId,
      htmlFor = inputId,
      ...other
    } = _temp === void 0 ? {} : _temp;
    return {
      'data-garden-container-id': 'containers.field.label',
      'data-garden-container-version': '3.0.5',
      id,
      htmlFor,
      ...other
    };
  }, [labelId, inputId]);
  const getHintProps = reactExports.useCallback(function (_temp2) {
    let {
      id = hintId,
      ...other
    } = _temp2 === void 0 ? {} : _temp2;
    return {
      'data-garden-container-id': 'containers.field.hint',
      'data-garden-container-version': '3.0.5',
      id,
      ...other
    };
  }, [hintId]);
  const getInputProps = reactExports.useCallback(function (_temp3) {
    let {
      id = inputId,
      ...other
    } = _temp3 === void 0 ? {} : _temp3;
    const describedBy = [];
    if (hasHint) {
      describedBy.push(hintId);
    }
    if (hasMessage) {
      describedBy.push(messageId);
    }
    return {
      'data-garden-container-id': 'containers.field.input',
      'data-garden-container-version': '3.0.5',
      id,
      'aria-labelledby': labelId,
      'aria-describedby': describedBy.length > 0 ? describedBy.join(' ') : undefined,
      ...other
    };
  }, [inputId, labelId, hintId, messageId, hasHint, hasMessage]);
  const getMessageProps = reactExports.useCallback(function (_temp4) {
    let {
      id = messageId,
      role = 'alert',
      ...other
    } = _temp4 === void 0 ? {} : _temp4;
    return {
      'data-garden-container-id': 'containers.field.message',
      'data-garden-container-version': '3.0.5',
      role: role === null ? undefined : role,
      id,
      ...other
    };
  }, [messageId]);
  return reactExports.useMemo(() => ({
    getLabelProps,
    getHintProps,
    getInputProps,
    getMessageProps
  }), [getLabelProps, getHintProps, getInputProps, getMessageProps]);
};
({
  children: PropTypes.func,
  render: PropTypes.func,
  idPrefix: PropTypes.string,
  hasHint: PropTypes.bool,
  hasMessage: PropTypes.bool
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _extends$w() {
  _extends$w = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$w.apply(this, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

let e = e => "object" == typeof e && null != e && 1 === e.nodeType,
  t = (e, t) => (!t || "hidden" !== e) && "visible" !== e && "clip" !== e,
  n = (e, n) => {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      let l = getComputedStyle(e, null);
      return t(l.overflowY, n) || t(l.overflowX, n) || (e => {
        let t = (e => {
          if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
          try {
            return e.ownerDocument.defaultView.frameElement;
          } catch (e) {
            return null;
          }
        })(e);
        return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth);
      })(e);
    }
    return !1;
  },
  l = (e, t, n, l, i, o, r, d) => o < e && r > t || o > e && r < t ? 0 : o <= e && d <= n || r >= t && d >= n ? o - e - l : r > t && d < n || o < e && d > n ? r - t + i : 0,
  i = e => {
    let t = e.parentElement;
    return null == t ? e.getRootNode().host || null : t;
  };
var o = (t, o) => {
  var r, d, h, f, u, s;
  if ("undefined" == typeof document) return [];
  let {
      scrollMode: a,
      block: c,
      inline: g,
      boundary: m,
      skipOverflowHiddenElements: p
    } = o,
    w = "function" == typeof m ? m : e => e !== m;
  if (!e(t)) throw new TypeError("Invalid target");
  let W = document.scrollingElement || document.documentElement,
    H = [],
    b = t;
  for (; e(b) && w(b);) {
    if (b = i(b), b === W) {
      H.push(b);
      break;
    }
    null != b && b === document.body && n(b) && !n(document.documentElement) || null != b && n(b, p) && H.push(b);
  }
  let v = null != (d = null == (r = window.visualViewport) ? void 0 : r.width) ? d : innerWidth,
    y = null != (f = null == (h = window.visualViewport) ? void 0 : h.height) ? f : innerHeight,
    E = null != (u = window.scrollX) ? u : pageXOffset,
    M = null != (s = window.scrollY) ? s : pageYOffset,
    {
      height: x,
      width: I,
      top: C,
      right: R,
      bottom: T,
      left: V
    } = t.getBoundingClientRect(),
    k = "start" === c || "nearest" === c ? C : "end" === c ? T : C + x / 2,
    B = "center" === g ? V + I / 2 : "end" === g ? R : V,
    D = [];
  for (let e = 0; e < H.length; e++) {
    let t = H[e],
      {
        height: n,
        width: i,
        top: o,
        right: r,
        bottom: d,
        left: h
      } = t.getBoundingClientRect();
    if ("if-needed" === a && C >= 0 && V >= 0 && T <= y && R <= v && C >= o && T <= d && V >= h && R <= r) return D;
    let f = getComputedStyle(t),
      u = parseInt(f.borderLeftWidth, 10),
      s = parseInt(f.borderTopWidth, 10),
      m = parseInt(f.borderRightWidth, 10),
      p = parseInt(f.borderBottomWidth, 10),
      w = 0,
      b = 0,
      O = "offsetWidth" in t ? t.offsetWidth - t.clientWidth - u - m : 0,
      X = "offsetHeight" in t ? t.offsetHeight - t.clientHeight - s - p : 0,
      Y = "offsetWidth" in t ? 0 === t.offsetWidth ? 0 : i / t.offsetWidth : 0,
      L = "offsetHeight" in t ? 0 === t.offsetHeight ? 0 : n / t.offsetHeight : 0;
    if (W === t) w = "start" === c ? k : "end" === c ? k - y : "nearest" === c ? l(M, M + y, y, s, p, M + k, M + k + x, x) : k - y / 2, b = "start" === g ? B : "center" === g ? B - v / 2 : "end" === g ? B - v : l(E, E + v, v, u, m, E + B, E + B + I, I), w = Math.max(0, w + M), b = Math.max(0, b + E);else {
      w = "start" === c ? k - o - s : "end" === c ? k - d + p + X : "nearest" === c ? l(o, d, n, s, p + X, k, k + x, x) : k - (o + n / 2) + X / 2, b = "start" === g ? B - h - u : "center" === g ? B - (h + i / 2) + O / 2 : "end" === g ? B - r + m + O : l(h, r, i, u, m + O, B, B + I, I);
      let {
        scrollLeft: e,
        scrollTop: f
      } = t;
      w = Math.max(0, Math.min(f + w / L, t.scrollHeight - n / L + X)), b = Math.max(0, Math.min(e + b / Y, t.scrollWidth - i / Y + O)), k += f - w, B += e - b;
    }
    D.push({
      el: t,
      top: w,
      left: b
    });
  }
  return D;
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var idCounter = 0;
function noop() {}

/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node the element that should scroll into view
 * @param {HTMLElement} menuNode the menu element of the component
 */
function scrollIntoView(node, menuNode) {
  if (!node) {
    return;
  }
  var actions = o(node, {
    boundary: menuNode,
    block: 'nearest',
    scrollMode: 'if-needed'
  });
  actions.forEach(function (_ref) {
    var el = _ref.el,
      top = _ref.top,
      left = _ref.left;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}

/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @param {Window} environment The window context where downshift renders.
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */
function isOrContainsNode(parent, child, environment) {
  var result = parent === child || child instanceof environment.Node && parent.contains && parent.contains(child);
  return result;
}

/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */
function debounce$3(fn, time) {
  var timeoutId;
  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel();
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(void 0, args);
    }, time);
  }
  wrapper.cancel = cancel;
  return wrapper;
}

/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {...Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */
function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return fns.some(function (fn) {
      if (fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return event.preventDownshiftDefault || event.hasOwnProperty('nativeEvent') && event.nativeEvent.preventDownshiftDefault;
    });
  };
}
function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }
  return function (node) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}

/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */
function generateId() {
  return String(idCounter++);
}

/**
 * Default implementation for status message. Only added when menu is open.
 * Will specify if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */
function getA11yStatusMessage$1(_ref2) {
  var isOpen = _ref2.isOpen,
    resultCount = _ref2.resultCount,
    previousResultCount = _ref2.previousResultCount;
  if (!isOpen) {
    return '';
  }
  if (!resultCount) {
    return 'No results are available.';
  }
  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter key to select.";
  }
  return '';
}

/**
 * This will perform a shallow merge of the given state object
 * with the state coming from props
 * (for the controlled component scenario)
 * This is used in state updater functions so they're referencing
 * the right state regardless of where it comes from.
 *
 * @param {Object} state The state of the component/hook.
 * @param {Object} props The props that may contain controlled values.
 * @returns {Object} The merged controlled state.
 */
function getState(state, props) {
  return Object.keys(state).reduce(function (prevState, key) {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}

/**
 * This determines whether a prop is a "controlled prop" meaning it is
 * state which is controlled by the outside of this component rather
 * than within this component.
 *
 * @param {Object} props The props that may contain controlled values.
 * @param {String} key the key to check
 * @return {Boolean} whether it is a controlled controlled prop
 */
function isControlledProp(props, key) {
  return props[key] !== undefined;
}

/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a keyboardEvent object
 * @return {String} keyboard key
 */
function normalizeArrowKey(event) {
  var key = event.key,
    keyCode = event.keyCode;
  /* istanbul ignore next (ie) */
  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return "Arrow" + key;
  }
  return key;
}

/**
 * Returns the new index in the list, in a circular way. If next value is out of bonds from the total,
 * it will wrap to either 0 or itemCount - 1.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index after the move.
 */
function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  if (circular === void 0) {
    circular = true;
  }
  if (itemCount === 0) {
    return -1;
  }
  var itemsLastIndex = itemCount - 1;
  if (typeof baseIndex !== 'number' || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }
  var newIndex = baseIndex + moveAmount;
  if (newIndex < 0) {
    newIndex = circular ? itemsLastIndex : 0;
  } else if (newIndex > itemsLastIndex) {
    newIndex = circular ? 0 : itemsLastIndex;
  }
  var nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);
  if (nonDisabledNewIndex === -1) {
    return baseIndex >= itemCount ? -1 : baseIndex;
  }
  return nonDisabledNewIndex;
}

/**
 * Returns the next index in the list of an item that is not disabled.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index. Returns baseIndex if item is not disabled. Returns next non-disabled item otherwise. If no non-disabled found it will return -1.
 */
function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  var currentElementNode = getItemNodeFromIndex(baseIndex);
  if (!currentElementNode || !currentElementNode.hasAttribute('disabled')) {
    return baseIndex;
  }
  if (moveAmount > 0) {
    for (var index = baseIndex + 1; index < itemCount; index++) {
      if (!getItemNodeFromIndex(index).hasAttribute('disabled')) {
        return index;
      }
    }
  } else {
    for (var _index = baseIndex - 1; _index >= 0; _index--) {
      if (!getItemNodeFromIndex(_index).hasAttribute('disabled')) {
        return _index;
      }
    }
  }
  if (circular) {
    return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
  }
  return -1;
}

/**
 * Checks if event target is within the downshift elements.
 *
 * @param {EventTarget} target Target to check.
 * @param {HTMLElement[]} downshiftElements The elements that form downshift (list, toggle button etc).
 * @param {Window} environment The window context where downshift renders.
 * @param {boolean} checkActiveElement Whether to also check activeElement.
 *
 * @returns {boolean} Whether or not the target is within downshift elements.
 */
function targetWithinDownshift(target, downshiftElements, environment, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }
  return downshiftElements.some(function (contextNode) {
    return contextNode && (isOrContainsNode(contextNode, target, environment) || checkActiveElement && isOrContainsNode(contextNode, environment.document.activeElement, environment));
  });
}
var cleanupStatus = debounce$3(function (documentProp) {
  getStatusDiv(documentProp).textContent = '';
}, 500);

/**
 * @param {String} status the status message
 * @param {Object} documentProp document passed by the user.
 */
function setStatus(status, documentProp) {
  var div = getStatusDiv(documentProp);
  if (!status) {
    return;
  }
  div.textContent = status;
  cleanupStatus(documentProp);
}

/**
 * Get the status node or create it if it does not already exist.
 * @param {Object} documentProp document passed by the user.
 * @return {HTMLElement} the status node.
 */
function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }
  var statusDiv = documentProp.getElementById('a11y-status-message');
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = documentProp.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'polite');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}
var _excluded$3 = ["isInitialMount", "highlightedIndex", "items", "environment"];
var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ''
};
function callOnChangeProps(action, state, newState) {
  var props = action.props,
    type = action.type;
  var changes = {};
  Object.keys(state).forEach(function (key) {
    invokeOnChangeHandler(key, action, state, newState);
    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });
  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange(_extends$w({
      type: type
    }, changes));
  }
}
function invokeOnChangeHandler(key, action, state, newState) {
  var props = action.props,
    type = action.type;
  var handler = "on" + capitalizeString(key) + "Change";
  if (props[handler] && newState[key] !== undefined && newState[key] !== state[key]) {
    props[handler](_extends$w({
      type: type
    }, newState));
  }
}

/**
 * Default state reducer that returns the changes.
 *
 * @param {Object} s state.
 * @param {Object} a action with changes.
 * @returns {Object} changes.
 */
function stateReducer(s, a) {
  return a.changes;
}

/**
 * Returns a message to be added to aria-live region when item is selected.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */
function getA11ySelectionMessage(selectionParameters) {
  var selectedItem = selectionParameters.selectedItem,
    itemToStringLocal = selectionParameters.itemToString;
  return selectedItem ? itemToStringLocal(selectedItem) + " has been selected." : '';
}

/**
 * Debounced call for updating the a11y message.
 */
var updateA11yStatus = debounce$3(function (getA11yMessage, document) {
  setStatus(getA11yMessage(), document);
}, 200);

// istanbul ignore next
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? reactExports.useLayoutEffect : reactExports.useEffect;
function useElementIds(_ref) {
  var _ref$id = _ref.id,
    id = _ref$id === void 0 ? "downshift-" + generateId() : _ref$id,
    labelId = _ref.labelId,
    menuId = _ref.menuId,
    getItemId = _ref.getItemId,
    toggleButtonId = _ref.toggleButtonId,
    inputId = _ref.inputId;
  var elementIdsRef = reactExports.useRef({
    labelId: labelId || id + "-label",
    menuId: menuId || id + "-menu",
    getItemId: getItemId || function (index) {
      return id + "-item-" + index;
    },
    toggleButtonId: toggleButtonId || id + "-toggle-button",
    inputId: inputId || id + "-input"
  });
  return elementIdsRef.current;
}
function getItemAndIndex(itemProp, indexProp, items, errorMessage) {
  var item, index;
  if (itemProp === undefined) {
    if (indexProp === undefined) {
      throw new Error(errorMessage);
    }
    item = items[indexProp];
    index = indexProp;
  } else {
    index = indexProp === undefined ? items.indexOf(itemProp) : indexProp;
    item = itemProp;
  }
  return [item, index];
}
function itemToString(item) {
  return item ? String(item) : '';
}
function capitalizeString(string) {
  return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}
function useLatestRef$1(val) {
  var ref = reactExports.useRef(val);
  // technically this is not "concurrent mode safe" because we're manipulating
  // the value during render (so it's not idempotent). However, the places this
  // hook is used is to support memoizing callbacks which will be called
  // *during* render, so we need the latest values *during* render.
  // If not for this, then we'd probably want to use useLayoutEffect instead.
  ref.current = val;
  return ref;
}

/**
 * Computes the controlled state using a the previous state, props,
 * two reducers, one from downshift and an optional one from the user.
 * Also calls the onChange handlers for state values that have changed.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */
function useEnhancedReducer(reducer, initialState, props) {
  var prevStateRef = reactExports.useRef();
  var actionRef = reactExports.useRef();
  var enhancedReducer = reactExports.useCallback(function (state, action) {
    actionRef.current = action;
    state = getState(state, action.props);
    var changes = reducer(state, action);
    var newState = action.props.stateReducer(state, _extends$w({}, action, {
      changes: changes
    }));
    return newState;
  }, [reducer]);
  var _useReducer = reactExports.useReducer(enhancedReducer, initialState),
    state = _useReducer[0],
    dispatch = _useReducer[1];
  var propsRef = useLatestRef$1(props);
  var dispatchWithProps = reactExports.useCallback(function (action) {
    return dispatch(_extends$w({
      props: propsRef.current
    }, action));
  }, [propsRef]);
  var action = actionRef.current;
  reactExports.useEffect(function () {
    if (action && prevStateRef.current && prevStateRef.current !== state) {
      callOnChangeProps(action, getState(prevStateRef.current, action.props), state);
    }
    prevStateRef.current = state;
  }, [state, props, action]);
  return [state, dispatchWithProps];
}
var defaultProps$3 = {
  itemToString: itemToString,
  stateReducer: stateReducer,
  getA11ySelectionMessage: getA11ySelectionMessage,
  scrollIntoView: scrollIntoView,
  environment: /* istanbul ignore next (ssr) */
  typeof window === 'undefined' ? {} : window
};
function getDefaultValue$1(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }
  var defaultValue = props["default" + capitalizeString(propKey)];
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  return defaultStateValues[propKey];
}
function getInitialValue$1(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }
  var value = props[propKey];
  if (value !== undefined) {
    return value;
  }
  var initialValue = props["initial" + capitalizeString(propKey)];
  if (initialValue !== undefined) {
    return initialValue;
  }
  return getDefaultValue$1(props, propKey, defaultStateValues);
}
function getInitialState$2(props) {
  var selectedItem = getInitialValue$1(props, 'selectedItem');
  var isOpen = getInitialValue$1(props, 'isOpen');
  var highlightedIndex = getInitialValue$1(props, 'highlightedIndex');
  var inputValue = getInitialValue$1(props, 'inputValue');
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}
function getHighlightedIndexOnOpen(props, state, offset) {
  var items = props.items,
    initialHighlightedIndex = props.initialHighlightedIndex,
    defaultHighlightedIndex = props.defaultHighlightedIndex;
  var selectedItem = state.selectedItem,
    highlightedIndex = state.highlightedIndex;
  if (items.length === 0) {
    return -1;
  }

  // initialHighlightedIndex will give value to highlightedIndex on initial state only.
  if (initialHighlightedIndex !== undefined && highlightedIndex === initialHighlightedIndex) {
    return initialHighlightedIndex;
  }
  if (defaultHighlightedIndex !== undefined) {
    return defaultHighlightedIndex;
  }
  if (selectedItem) {
    return items.indexOf(selectedItem);
  }
  if (offset === 0) {
    return -1;
  }
  return offset < 0 ? items.length - 1 : 0;
}

/**
 * Reuse the movement tracking of mouse and touch events.
 *
 * @param {boolean} isOpen Whether the dropdown is open or not.
 * @param {Array<Object>} downshiftElementRefs Downshift element refs to track movement (toggleButton, menu etc.)
 * @param {Object} environment Environment where component/hook exists.
 * @param {Function} handleBlur Handler on blur from mouse or touch.
 * @returns {Object} Ref containing whether mouseDown or touchMove event is happening
 */
function useMouseAndTouchTracker(isOpen, downshiftElementRefs, environment, handleBlur) {
  var mouseAndTouchTrackersRef = reactExports.useRef({
    isMouseDown: false,
    isTouchMove: false
  });
  reactExports.useEffect(function () {
    if ((environment == null ? void 0 : environment.addEventListener) == null) {
      return;
    }

    // The same strategy for checking if a click occurred inside or outside downshift
    // as in downshift.js.
    var onMouseDown = function onMouseDown() {
      mouseAndTouchTrackersRef.current.isMouseDown = true;
    };
    var onMouseUp = function onMouseUp(event) {
      mouseAndTouchTrackersRef.current.isMouseDown = false;
      if (isOpen && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
        return ref.current;
      }), environment)) {
        handleBlur();
      }
    };
    var onTouchStart = function onTouchStart() {
      mouseAndTouchTrackersRef.current.isTouchMove = false;
    };
    var onTouchMove = function onTouchMove() {
      mouseAndTouchTrackersRef.current.isTouchMove = true;
    };
    var onTouchEnd = function onTouchEnd(event) {
      if (isOpen && !mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
        return ref.current;
      }), environment, false)) {
        handleBlur();
      }
    };
    environment.addEventListener('mousedown', onMouseDown);
    environment.addEventListener('mouseup', onMouseUp);
    environment.addEventListener('touchstart', onTouchStart);
    environment.addEventListener('touchmove', onTouchMove);
    environment.addEventListener('touchend', onTouchEnd);

    // eslint-disable-next-line consistent-return
    return function cleanup() {
      environment.removeEventListener('mousedown', onMouseDown);
      environment.removeEventListener('mouseup', onMouseUp);
      environment.removeEventListener('touchstart', onTouchStart);
      environment.removeEventListener('touchmove', onTouchMove);
      environment.removeEventListener('touchend', onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, environment]);
  return mouseAndTouchTrackersRef;
}

/* istanbul ignore next */
// eslint-disable-next-line import/no-mutable-exports
var useGetterPropsCalledChecker = function useGetterPropsCalledChecker() {
  return noop;
};
function useA11yMessageSetter(getA11yMessage, dependencyArray, _ref2) {
  var isInitialMount = _ref2.isInitialMount,
    highlightedIndex = _ref2.highlightedIndex,
    items = _ref2.items,
    environment = _ref2.environment,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded$3);
  // Sets a11y status message on changes in state.
  reactExports.useEffect(function () {
    if (isInitialMount || false) {
      return;
    }
    updateA11yStatus(function () {
      return getA11yMessage(_extends$w({
        highlightedIndex: highlightedIndex,
        highlightedItem: items[highlightedIndex],
        resultCount: items.length
      }, rest));
    }, environment.document);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyArray);
}
function useScrollIntoView(_ref3) {
  var highlightedIndex = _ref3.highlightedIndex,
    isOpen = _ref3.isOpen,
    itemRefs = _ref3.itemRefs,
    getItemNodeFromIndex = _ref3.getItemNodeFromIndex,
    menuElement = _ref3.menuElement,
    scrollIntoViewProp = _ref3.scrollIntoView;
  // used not to scroll on highlight by mouse.
  var shouldScrollRef = reactExports.useRef(true);
  // Scroll on highlighted item if change comes from keyboard.
  useIsomorphicLayoutEffect(function () {
    if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
      return;
    }
    if (shouldScrollRef.current === false) {
      shouldScrollRef.current = true;
    } else {
      scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightedIndex]);
  return shouldScrollRef;
}

// eslint-disable-next-line import/no-mutable-exports
var useControlPropsValidator = noop;

/**
 * Handles selection on Enter / Alt + ArrowUp. Closes the menu and resets the highlighted index, unless there is a highlighted.
 * In that case, selects the item and resets to defaults for open state and highlighted idex.
 * @param {Object} props The useCombobox props.
 * @param {number} highlightedIndex The index from the state.
 * @param {boolean} inputValue Also return the input value for state.
 * @returns The changes for the state.
 */
function getChangesOnSelection(props, highlightedIndex, inputValue) {
  var _props$items;
  if (inputValue === void 0) {
    inputValue = true;
  }
  var shouldSelect = ((_props$items = props.items) == null ? void 0 : _props$items.length) && highlightedIndex >= 0;
  return _extends$w({
    isOpen: false,
    highlightedIndex: -1
  }, shouldSelect && _extends$w({
    selectedItem: props.items[highlightedIndex],
    isOpen: getDefaultValue$1(props, 'isOpen'),
    highlightedIndex: getDefaultValue$1(props, 'highlightedIndex')
  }, inputValue && {
    inputValue: props.itemToString(props.items[highlightedIndex])
  }));
}
function downshiftCommonReducer(state, action, stateChangeTypes) {
  var type = action.type,
    props = action.props;
  var changes;
  switch (type) {
    case stateChangeTypes.ItemMouseMove:
      changes = {
        highlightedIndex: action.disabled ? -1 : action.index
      };
      break;
    case stateChangeTypes.MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;
    case stateChangeTypes.ToggleButtonClick:
    case stateChangeTypes.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes.FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes.FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;
    case stateChangeTypes.FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;
    case stateChangeTypes.FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;
    case stateChangeTypes.FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        isOpen: getDefaultValue$1(props, 'isOpen'),
        selectedItem: getDefaultValue$1(props, 'selectedItem'),
        inputValue: getDefaultValue$1(props, 'inputValue')
      };
      break;
    default:
      throw new Error('Reducer called without proper action type.');
  }
  return _extends$w({}, state, changes);
}
({
  items: PropTypes.array.isRequired,
  itemToString: PropTypes.func,
  getA11yStatusMessage: PropTypes.func,
  getA11ySelectionMessage: PropTypes.func,
  highlightedIndex: PropTypes.number,
  defaultHighlightedIndex: PropTypes.number,
  initialHighlightedIndex: PropTypes.number,
  isOpen: PropTypes.bool,
  defaultIsOpen: PropTypes.bool,
  initialIsOpen: PropTypes.bool,
  selectedItem: PropTypes.any,
  initialSelectedItem: PropTypes.any,
  defaultSelectedItem: PropTypes.any,
  id: PropTypes.string,
  labelId: PropTypes.string,
  menuId: PropTypes.string,
  getItemId: PropTypes.func,
  toggleButtonId: PropTypes.string,
  stateReducer: PropTypes.func,
  onSelectedItemChange: PropTypes.func,
  onHighlightedIndexChange: PropTypes.func,
  onStateChange: PropTypes.func,
  onIsOpenChange: PropTypes.func,
  environment: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    document: PropTypes.shape({
      getElementById: PropTypes.func,
      activeElement: PropTypes.any,
      body: PropTypes.any
    })
  })
});
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */
function getA11yStatusMessage(_a) {
  var isOpen = _a.isOpen,
    resultCount = _a.resultCount,
    previousResultCount = _a.previousResultCount;
  if (!isOpen) {
    return '';
  }
  if (!resultCount) {
    return 'No results are available.';
  }
  if (resultCount !== previousResultCount) {
    return "".concat(resultCount, " result").concat(resultCount === 1 ? ' is' : 's are', " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.");
  }
  return '';
}
__assign(__assign({}, defaultProps$3), {
  getA11yStatusMessage: getA11yStatusMessage
});
var InputKeyDownArrowDown = 0;
var InputKeyDownArrowUp = 1;
var InputKeyDownEscape = 2;
var InputKeyDownHome = 3;
var InputKeyDownEnd = 4;
var InputKeyDownPageUp = 5;
var InputKeyDownPageDown = 6;
var InputKeyDownEnter = 7;
var InputChange = 8;
var InputBlur = 9;
var InputFocus = 10;
var MenuMouseLeave = 11;
var ItemMouseMove = 12;
var ItemClick = 13;
var ToggleButtonClick = 14;
var FunctionToggleMenu = 15;
var FunctionOpenMenu = 16;
var FunctionCloseMenu = 17;
var FunctionSetHighlightedIndex = 18;
var FunctionSelectItem = 19;
var FunctionSetInputValue = 20;
var FunctionReset$1 = 21;
var ControlledPropUpdatedSelectedItem = 22;
var stateChangeTypes$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: InputKeyDownArrowDown,
  InputKeyDownArrowUp: InputKeyDownArrowUp,
  InputKeyDownEscape: InputKeyDownEscape,
  InputKeyDownHome: InputKeyDownHome,
  InputKeyDownEnd: InputKeyDownEnd,
  InputKeyDownPageUp: InputKeyDownPageUp,
  InputKeyDownPageDown: InputKeyDownPageDown,
  InputKeyDownEnter: InputKeyDownEnter,
  InputChange: InputChange,
  InputBlur: InputBlur,
  InputFocus: InputFocus,
  MenuMouseLeave: MenuMouseLeave,
  ItemMouseMove: ItemMouseMove,
  ItemClick: ItemClick,
  ToggleButtonClick: ToggleButtonClick,
  FunctionToggleMenu: FunctionToggleMenu,
  FunctionOpenMenu: FunctionOpenMenu,
  FunctionCloseMenu: FunctionCloseMenu,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex,
  FunctionSelectItem: FunctionSelectItem,
  FunctionSetInputValue: FunctionSetInputValue,
  FunctionReset: FunctionReset$1,
  ControlledPropUpdatedSelectedItem: ControlledPropUpdatedSelectedItem
});
function getInitialState$1(props) {
  var initialState = getInitialState$2(props);
  var selectedItem = initialState.selectedItem;
  var inputValue = initialState.inputValue;
  if (inputValue === '' && selectedItem && props.defaultInputValue === undefined && props.initialInputValue === undefined && props.inputValue === undefined) {
    inputValue = props.itemToString(selectedItem);
  }
  return _extends$w({}, initialState, {
    inputValue: inputValue
  });
}
({
  items: PropTypes.array.isRequired,
  itemToString: PropTypes.func,
  selectedItemChanged: PropTypes.func,
  getA11yStatusMessage: PropTypes.func,
  getA11ySelectionMessage: PropTypes.func,
  highlightedIndex: PropTypes.number,
  defaultHighlightedIndex: PropTypes.number,
  initialHighlightedIndex: PropTypes.number,
  isOpen: PropTypes.bool,
  defaultIsOpen: PropTypes.bool,
  initialIsOpen: PropTypes.bool,
  selectedItem: PropTypes.any,
  initialSelectedItem: PropTypes.any,
  defaultSelectedItem: PropTypes.any,
  inputValue: PropTypes.string,
  defaultInputValue: PropTypes.string,
  initialInputValue: PropTypes.string,
  id: PropTypes.string,
  labelId: PropTypes.string,
  menuId: PropTypes.string,
  getItemId: PropTypes.func,
  inputId: PropTypes.string,
  toggleButtonId: PropTypes.string,
  stateReducer: PropTypes.func,
  onSelectedItemChange: PropTypes.func,
  onHighlightedIndexChange: PropTypes.func,
  onStateChange: PropTypes.func,
  onIsOpenChange: PropTypes.func,
  onInputValueChange: PropTypes.func,
  environment: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    document: PropTypes.shape({
      getElementById: PropTypes.func,
      activeElement: PropTypes.any,
      body: PropTypes.any
    })
  })
});

/**
 * The useCombobox version of useControlledReducer, which also
 * checks if the controlled prop selectedItem changed between
 * renders. If so, it will also update inputValue with its
 * string equivalent. It uses the common useEnhancedReducer to
 * compute the rest of the state.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */
function useControlledReducer(reducer, initialState, props) {
  var previousSelectedItemRef = reactExports.useRef();
  var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props),
    state = _useEnhancedReducer[0],
    dispatch = _useEnhancedReducer[1];

  // ToDo: if needed, make same approach as selectedItemChanged from Downshift.
  reactExports.useEffect(function () {
    if (!isControlledProp(props, 'selectedItem')) {
      return;
    }
    if (props.selectedItemChanged(previousSelectedItemRef.current, props.selectedItem)) {
      dispatch({
        type: ControlledPropUpdatedSelectedItem,
        inputValue: props.itemToString(props.selectedItem)
      });
    }
    previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.selectedItem, props.selectedItem]);
  return [getState(state, props), dispatch];
}

// eslint-disable-next-line import/no-mutable-exports
var validatePropTypes$1 = noop;
var defaultProps$1 = _extends$w({}, defaultProps$3, {
  selectedItemChanged: function selectedItemChanged(prevItem, item) {
    return prevItem !== item;
  },
  getA11yStatusMessage: getA11yStatusMessage$1
});

/* eslint-disable complexity */
function downshiftUseComboboxReducer(state, action) {
  var _props$items;
  var type = action.type,
    props = action.props,
    altKey = action.altKey;
  var changes;
  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;
    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, true)
        };
      } else {
        changes = {
          highlightedIndex: altKey && state.selectedItem == null ? -1 : getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownArrowUp:
      if (state.isOpen) {
        if (altKey) {
          changes = getChangesOnSelection(props, state.highlightedIndex);
        } else {
          changes = {
            highlightedIndex: getNextWrappingIndex(-1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, true)
          };
        }
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownEnter:
      changes = getChangesOnSelection(props, state.highlightedIndex);
      break;
    case InputKeyDownEscape:
      changes = _extends$w({
        isOpen: false,
        highlightedIndex: -1
      }, !state.isOpen && {
        selectedItem: null,
        inputValue: ''
      });
      break;
    case InputKeyDownPageUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(-10, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputKeyDownPageDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(10, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputBlur:
      changes = _extends$w({
        isOpen: false,
        highlightedIndex: -1
      }, state.highlightedIndex >= 0 && ((_props$items = props.items) == null ? void 0 : _props$items.length) && action.selectItem && {
        selectedItem: props.items[state.highlightedIndex],
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;
    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        inputValue: action.inputValue
      };
      break;
    case InputFocus:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem)
      };
      break;
    case ControlledPropUpdatedSelectedItem:
      changes = {
        inputValue: action.inputValue
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }
  return _extends$w({}, state, changes);
}
/* eslint-enable complexity */

var _excluded$1 = ["onMouseLeave", "refKey", "ref"],
  _excluded2$1 = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"],
  _excluded3 = ["onClick", "onPress", "refKey", "ref"],
  _excluded4 = ["onKeyDown", "onChange", "onInput", "onFocus", "onBlur", "onChangeText", "refKey", "ref"];
useCombobox$1.stateChangeTypes = stateChangeTypes$1;
function useCombobox$1(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$1();
  // Props defaults and destructuring.
  var props = _extends$w({}, defaultProps$1, userProps);
  var initialIsOpen = props.initialIsOpen,
    defaultIsOpen = props.defaultIsOpen,
    items = props.items,
    scrollIntoView = props.scrollIntoView,
    environment = props.environment,
    getA11yStatusMessage = props.getA11yStatusMessage,
    getA11ySelectionMessage = props.getA11ySelectionMessage,
    itemToString = props.itemToString;
  // Initial state depending on controlled props.
  var initialState = getInitialState$1(props);
  var _useControlledReducer = useControlledReducer(downshiftUseComboboxReducer, initialState, props),
    state = _useControlledReducer[0],
    dispatch = _useControlledReducer[1];
  var isOpen = state.isOpen,
    highlightedIndex = state.highlightedIndex,
    selectedItem = state.selectedItem,
    inputValue = state.inputValue;

  // Element refs.
  var menuRef = reactExports.useRef(null);
  var itemRefs = reactExports.useRef({});
  var inputRef = reactExports.useRef(null);
  var toggleButtonRef = reactExports.useRef(null);
  var isInitialMountRef = reactExports.useRef(true);
  // prevent id re-generation between renders.
  var elementIds = useElementIds(props);
  // used to keep track of how many items we had on previous cycle.
  var previousResultCountRef = reactExports.useRef();
  // utility callback to get item element.
  var latest = useLatestRef$1({
    state: state,
    props: props
  });
  var getItemNodeFromIndex = reactExports.useCallback(function (index) {
    return itemRefs.current[elementIds.getItemId(index)];
  }, [elementIds]);

  // Effects.
  // Sets a11y status message on changes in state.
  useA11yMessageSetter(getA11yStatusMessage, [isOpen, highlightedIndex, inputValue, items], _extends$w({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state));
  // Sets a11y status message on changes in selectedItem.
  useA11yMessageSetter(getA11ySelectionMessage, [selectedItem], _extends$w({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state));
  // Scroll on highlighted item if change comes from keyboard.
  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    itemRefs: itemRefs,
    scrollIntoView: scrollIntoView,
    getItemNodeFromIndex: getItemNodeFromIndex
  });
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props: props,
    state: state
  });
  // Focus the input on first render if required.
  reactExports.useEffect(function () {
    var focusOnOpen = initialIsOpen || defaultIsOpen || isOpen;
    if (focusOnOpen && inputRef.current) {
      inputRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  reactExports.useEffect(function () {
    if (isInitialMountRef.current) {
      return;
    }
    previousResultCountRef.current = items.length;
  });
  // Add mouse/touch events to document.
  var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [inputRef, menuRef, toggleButtonRef], environment, function () {
    dispatch({
      type: InputBlur,
      selectItem: false
    });
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker();
  // Make initial ref false.
  reactExports.useEffect(function () {
    isInitialMountRef.current = false;
    return function () {
      isInitialMountRef.current = true;
    };
  }, []);
  // Reset itemRefs on close.
  reactExports.useEffect(function () {
    var _environment$document;
    if (!isOpen) {
      itemRefs.current = {};
    } else if (((_environment$document = environment.document) == null ? void 0 : _environment$document.activeElement) !== inputRef.current) {
      var _inputRef$current;
      inputRef == null ? void 0 : (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.focus();
    }
  }, [isOpen, environment]);

  /* Event handler functions */
  var inputKeyDownHandlers = reactExports.useMemo(function () {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowDown,
          altKey: event.altKey,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowUp,
          altKey: event.altKey,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Home: function Home(event) {
        if (!latest.current.state.isOpen) {
          return;
        }
        event.preventDefault();
        dispatch({
          type: InputKeyDownHome,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      End: function End(event) {
        if (!latest.current.state.isOpen) {
          return;
        }
        event.preventDefault();
        dispatch({
          type: InputKeyDownEnd,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Escape: function Escape(event) {
        var latestState = latest.current.state;
        if (latestState.isOpen || latestState.inputValue || latestState.selectedItem || latestState.highlightedIndex > -1) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownEscape
          });
        }
      },
      Enter: function Enter(event) {
        var latestState = latest.current.state;
        // if closed or no highlighted index, do nothing.
        if (!latestState.isOpen || event.which === 229 // if IME composing, wait for next Enter keydown event.
        ) {
          return;
        }
        event.preventDefault();
        dispatch({
          type: InputKeyDownEnter,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      PageUp: function PageUp(event) {
        if (latest.current.state.isOpen) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownPageUp,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        }
      },
      PageDown: function PageDown(event) {
        if (latest.current.state.isOpen) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownPageDown,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        }
      }
    };
  }, [dispatch, latest, getItemNodeFromIndex]);

  // Getter props.
  var getLabelProps = reactExports.useCallback(function (labelProps) {
    return _extends$w({
      id: elementIds.labelId,
      htmlFor: elementIds.inputId
    }, labelProps);
  }, [elementIds]);
  var getMenuProps = reactExports.useCallback(function (_temp, _temp2) {
    var _extends2;
    var _ref = _temp === void 0 ? {} : _temp,
      onMouseLeave = _ref.onMouseLeave,
      _ref$refKey = _ref.refKey,
      refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
      ref = _ref.ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
    var _ref2 = _temp2 === void 0 ? {} : _temp2;
      _ref2.suppressRefError;
    return _extends$w((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
      menuRef.current = menuNode;
    }), _extends2.id = elementIds.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = rest && rest['aria-label'] ? undefined : "" + elementIds.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, function () {
      dispatch({
        type: MenuMouseLeave
      });
    }), _extends2), rest);
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  var getItemProps = reactExports.useCallback(function (_temp3) {
    var _extends3, _ref4;
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      itemProp = _ref3.item,
      indexProp = _ref3.index,
      _ref3$refKey = _ref3.refKey,
      refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
      ref = _ref3.ref,
      onMouseMove = _ref3.onMouseMove,
      onMouseDown = _ref3.onMouseDown,
      onClick = _ref3.onClick;
    _ref3.onPress;
    var disabled = _ref3.disabled,
      rest = _objectWithoutPropertiesLoose(_ref3, _excluded2$1);
    var _latest$current = latest.current,
      latestProps = _latest$current.props,
      latestState = _latest$current.state;
    var _getItemAndIndex = getItemAndIndex(itemProp, indexProp, latestProps.items, 'Pass either item or index to getItemProps!'),
      index = _getItemAndIndex[1];
    var onSelectKey = 'onClick';
    var customClickHandler = onClick;
    var itemHandleMouseMove = function itemHandleMouseMove() {
      if (index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove,
        index: index,
        disabled: disabled
      });
    };
    var itemHandleClick = function itemHandleClick() {
      dispatch({
        type: ItemClick,
        index: index
      });
    };
    var itemHandleMouseDown = function itemHandleMouseDown(e) {
      return e.preventDefault();
    };
    return _extends$w((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (itemNode) {
      if (itemNode) {
        itemRefs.current[elementIds.getItemId(index)] = itemNode;
      }
    }), _extends3.disabled = disabled, _extends3.role = 'option', _extends3['aria-selected'] = "" + (index === latestState.highlightedIndex), _extends3.id = elementIds.getItemId(index), _extends3), !disabled && (_ref4 = {}, _ref4[onSelectKey] = callAllEventHandlers(customClickHandler, itemHandleClick), _ref4), {
      onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove),
      onMouseDown: callAllEventHandlers(onMouseDown, itemHandleMouseDown)
    }, rest);
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  var getToggleButtonProps = reactExports.useCallback(function (_temp4) {
    var _extends4;
    var _ref5 = _temp4 === void 0 ? {} : _temp4,
      onClick = _ref5.onClick;
    _ref5.onPress;
    var _ref5$refKey = _ref5.refKey,
      refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
      ref = _ref5.ref,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded3);
    var latestState = latest.current.state;
    var toggleButtonHandleClick = function toggleButtonHandleClick() {
      dispatch({
        type: ToggleButtonClick
      });
    };
    return _extends$w((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function (toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends4['aria-controls'] = elementIds.menuId, _extends4['aria-expanded'] = latestState.isOpen, _extends4.id = elementIds.toggleButtonId, _extends4.tabIndex = -1, _extends4), !rest.disabled && _extends$w({}, {
      onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
    }), rest);
  }, [dispatch, latest, elementIds]);
  var getInputProps = reactExports.useCallback(function (_temp5, _temp6) {
    var _extends5;
    var _ref6 = _temp5 === void 0 ? {} : _temp5,
      onKeyDown = _ref6.onKeyDown,
      onChange = _ref6.onChange,
      onInput = _ref6.onInput,
      onFocus = _ref6.onFocus,
      onBlur = _ref6.onBlur;
    _ref6.onChangeText;
    var _ref6$refKey = _ref6.refKey,
      refKey = _ref6$refKey === void 0 ? 'ref' : _ref6$refKey,
      ref = _ref6.ref,
      rest = _objectWithoutPropertiesLoose(_ref6, _excluded4);
    var _ref7 = _temp6 === void 0 ? {} : _temp6;
      _ref7.suppressRefError;
    var latestState = latest.current.state;
    var inputHandleKeyDown = function inputHandleKeyDown(event) {
      var key = normalizeArrowKey(event);
      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event);
      }
    };
    var inputHandleChange = function inputHandleChange(event) {
      dispatch({
        type: InputChange,
        inputValue: event.target.value
      });
    };
    var inputHandleBlur = function inputHandleBlur(event) {
      /* istanbul ignore else */
      if (latestState.isOpen && !mouseAndTouchTrackersRef.current.isMouseDown) {
        dispatch({
          type: InputBlur,
          selectItem: event.relatedTarget !== null
        });
      }
    };
    var inputHandleFocus = function inputHandleFocus() {
      if (!latestState.isOpen) {
        dispatch({
          type: InputFocus
        });
      }
    };

    /* istanbul ignore next (preact) */
    var onChangeKey = 'onChange';
    var eventHandlers = {};
    if (!rest.disabled) {
      var _eventHandlers;
      eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, inputHandleBlur), _eventHandlers.onFocus = callAllEventHandlers(onFocus, inputHandleFocus), _eventHandlers);
    }
    return _extends$w((_extends5 = {}, _extends5[refKey] = handleRefs(ref, function (inputNode) {
      inputRef.current = inputNode;
    }), _extends5['aria-activedescendant'] = latestState.isOpen && latestState.highlightedIndex > -1 ? elementIds.getItemId(latestState.highlightedIndex) : '', _extends5['aria-autocomplete'] = 'list', _extends5['aria-controls'] = elementIds.menuId, _extends5['aria-expanded'] = latestState.isOpen, _extends5['aria-labelledby'] = rest && rest['aria-label'] ? undefined : "" + elementIds.labelId, _extends5.autoComplete = 'off', _extends5.id = elementIds.inputId, _extends5.role = 'combobox', _extends5.value = latestState.inputValue, _extends5), eventHandlers, rest);
  }, [dispatch, inputKeyDownHandlers, latest, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds]);

  // returns
  var toggleMenu = reactExports.useCallback(function () {
    dispatch({
      type: FunctionToggleMenu
    });
  }, [dispatch]);
  var closeMenu = reactExports.useCallback(function () {
    dispatch({
      type: FunctionCloseMenu
    });
  }, [dispatch]);
  var openMenu = reactExports.useCallback(function () {
    dispatch({
      type: FunctionOpenMenu
    });
  }, [dispatch]);
  var setHighlightedIndex = reactExports.useCallback(function (newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = reactExports.useCallback(function (newSelectedItem) {
    dispatch({
      type: FunctionSelectItem,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var setInputValue = reactExports.useCallback(function (newInputValue) {
    dispatch({
      type: FunctionSetInputValue,
      inputValue: newInputValue
    });
  }, [dispatch]);
  var reset = reactExports.useCallback(function () {
    dispatch({
      type: FunctionReset$1
    });
  }, [dispatch]);
  return {
    // prop getters.
    getItemProps: getItemProps,
    getLabelProps: getLabelProps,
    getMenuProps: getMenuProps,
    getInputProps: getInputProps,
    getToggleButtonProps: getToggleButtonProps,
    // actions.
    toggleMenu: toggleMenu,
    openMenu: openMenu,
    closeMenu: closeMenu,
    setHighlightedIndex: setHighlightedIndex,
    setInputValue: setInputValue,
    selectItem: selectItem,
    reset: reset,
    // state.
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

/**
 * Returns a message to be added to aria-live region when item is removed.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */
function getA11yRemovalMessage(selectionParameters) {
  var removedSelectedItem = selectionParameters.removedSelectedItem,
    itemToStringLocal = selectionParameters.itemToString;
  return itemToStringLocal(removedSelectedItem) + " has been removed.";
}
({
  selectedItems: PropTypes.array,
  initialSelectedItems: PropTypes.array,
  defaultSelectedItems: PropTypes.array,
  itemToString: PropTypes.func,
  getA11yRemovalMessage: PropTypes.func,
  stateReducer: PropTypes.func,
  activeIndex: PropTypes.number,
  initialActiveIndex: PropTypes.number,
  defaultActiveIndex: PropTypes.number,
  onActiveIndexChange: PropTypes.func,
  onSelectedItemsChange: PropTypes.func,
  keyNavigationNext: PropTypes.string,
  keyNavigationPrevious: PropTypes.string,
  environment: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    document: PropTypes.shape({
      getElementById: PropTypes.func,
      activeElement: PropTypes.any,
      body: PropTypes.any
    })
  })
});
({
  itemToString: defaultProps$3.itemToString,
  stateReducer: defaultProps$3.stateReducer,
  environment: defaultProps$3.environment,
  getA11yRemovalMessage: getA11yRemovalMessage,
  keyNavigationNext: 'ArrowRight',
  keyNavigationPrevious: 'ArrowLeft'
});

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
const typeMap = {
  [useCombobox$1.stateChangeTypes.FunctionCloseMenu]: 'fn:setExpansion',
  [useCombobox$1.stateChangeTypes.FunctionOpenMenu]: 'fn:setExpansion',
  [useCombobox$1.stateChangeTypes.FunctionToggleMenu]: 'fn:setExpansion',
  [useCombobox$1.stateChangeTypes.FunctionReset]: 'fn:reset',
  [useCombobox$1.stateChangeTypes.FunctionSelectItem]: 'fn:setSelectionValue',
  [useCombobox$1.stateChangeTypes.FunctionSetHighlightedIndex]: 'fn:setActiveIndex',
  [useCombobox$1.stateChangeTypes.FunctionSetInputValue]: 'fn:setInputValue',
  [useCombobox$1.stateChangeTypes.InputBlur]: 'input:blur',
  [useCombobox$1.stateChangeTypes.InputChange]: 'input:change',
  [useCombobox$1.stateChangeTypes.InputFocus]: 'input:focus',
  [useCombobox$1.stateChangeTypes.InputKeyDownArrowDown]: `input:keyDown:${KEYS$1.DOWN}`,
  [useCombobox$1.stateChangeTypes.InputKeyDownArrowUp]: `input:keyDown:${KEYS$1.UP}`,
  [useCombobox$1.stateChangeTypes.InputKeyDownEnd]: `input:keyDown:${KEYS$1.END}`,
  [useCombobox$1.stateChangeTypes.InputKeyDownEnter]: `input:keyDown:${KEYS$1.ENTER}`,
  [useCombobox$1.stateChangeTypes.InputKeyDownEscape]: `input:keyDown:${KEYS$1.ESCAPE}`,
  [useCombobox$1.stateChangeTypes.InputKeyDownHome]: `input:keyDown:${KEYS$1.HOME}`,
  [useCombobox$1.stateChangeTypes.InputKeyDownPageDown]: `input:keyDown:${KEYS$1.PAGE_DOWN}`,
  [useCombobox$1.stateChangeTypes.InputKeyDownPageUp]: `input:keyDown:${KEYS$1.PAGE_UP}`,
  [useCombobox$1.stateChangeTypes.ItemClick]: 'option:click',
  [useCombobox$1.stateChangeTypes.ItemMouseMove]: 'option:mouseMove',
  [useCombobox$1.stateChangeTypes.MenuMouseLeave]: 'listbox:mouseLeave',
  [useCombobox$1.stateChangeTypes.ToggleButtonClick]: 'toggle:click'
};
const toType = downshiftType => {
  return typeMap[downshiftType] || downshiftType;
};
const toLabel = (labels, value) => {
  if (value === undefined) {
    return '';
  }
  const key = typeof value === 'string' ? value : JSON.stringify(value);
  return labels[key];
};
const useCombobox = _ref => {
  let {
    idPrefix,
    triggerRef,
    inputRef,
    listboxRef,
    isAutocomplete,
    isMultiselectable,
    isEditable = true,
    disabled,
    hasHint,
    hasMessage,
    options = [],
    inputValue,
    selectionValue,
    isExpanded,
    defaultExpanded,
    initialExpanded,
    activeIndex,
    defaultActiveIndex,
    initialActiveIndex,
    onChange = () => undefined,
    environment
  } = _ref;
  const win = environment || window;
  const prefix = `${useId(idPrefix)}-`;
  const [triggerContainsInput, setTriggerContainsInput] = reactExports.useState();
  const [matchValue, setMatchValue] = reactExports.useState('');
  const matchTimeoutRef = reactExports.useRef();
  const previousStateRef = reactExports.useRef();
  const labels = reactExports.useMemo(() => ({}), []);
  const selectedValues = reactExports.useMemo(() => [], []);
  const disabledValues = reactExports.useMemo(() => [], []);
  const values = reactExports.useMemo(() => {
    const retVal = [];
    const setValues = option => {
      if (option.disabled) {
        if (!disabledValues.includes(option.value)) {
          disabledValues.push(option.value);
        }
      } else {
        retVal.push(option.value);
        const index = disabledValues.indexOf(option.value);
        if (index !== -1) {
          disabledValues.splice(index, 1);
        }
      }
      if (option.selected && !selectedValues.includes(option.value)) {
        selectedValues.push(option.value);
      }
      const key = typeof option.value === 'string' ? option.value : JSON.stringify(option.value);
      labels[key] = option.label || key;
    };
    options.forEach(option => {
      if ('options' in option) {
        option.options.forEach(setValues);
      } else {
        setValues(option);
      }
    });
    return retVal;
  }, [options, disabledValues, selectedValues, labels]);
  const initialSelectionValue = isMultiselectable ? selectedValues : selectedValues[0];
  const initialInputValue = isMultiselectable ? '' : toLabel(labels, initialSelectionValue);
  const _defaultActiveIndex = reactExports.useMemo(() => {
    if (defaultActiveIndex === undefined) {
      return isAutocomplete && isEditable ? 0 : undefined;
    }
    return defaultActiveIndex;
  }, [defaultActiveIndex, isAutocomplete, isEditable]);
  if (selectionValue === undefined || selectionValue === null) {
    if (!isMultiselectable && selectedValues.length > 1) {
      throw new Error('Error: expected useCombobox `options` to have no more than one selected.');
    }
  }
  if (selectionValue !== undefined && selectionValue !== null) {
    if (isMultiselectable && !Array.isArray(selectionValue)) {
      throw new Error('Error: expected multiselectable useCombobox `selectionValue` to be an array.');
    } else if (!isMultiselectable && Array.isArray(selectionValue)) {
      throw new Error('Error: expected useCombobox `selectionValue` not to be an array.');
    }
  }
  const handleDownshiftStateChange = _ref2 => {
    let {
      type,
      isOpen,
      selectedItem,
      inputValue: _inputValue,
      highlightedIndex
    } = _ref2;
    return onChange({
      type: toType(type),
      ...(isOpen !== undefined && {
        isExpanded: isOpen
      }),
      ...(selectedItem !== undefined && {
        selectionValue: selectedItem
      }),
      ...(_inputValue !== undefined && {
        inputValue: _inputValue
      }),
      ...(highlightedIndex !== undefined && {
        activeIndex: highlightedIndex
      })
    });
  };
  const stateReducer = (state, _ref3) => {
    let {
      type,
      changes,
      altKey
    } = _ref3;
    switch (type) {
      case useCombobox$1.stateChangeTypes.ControlledPropUpdatedSelectedItem:
        return state;
      case useCombobox$1.stateChangeTypes.FunctionSetHighlightedIndex:
        if (previousStateRef.current?.altKey) {
          changes.highlightedIndex = -1;
        }
        break;
      case useCombobox$1.stateChangeTypes.FunctionCloseMenu:
      case useCombobox$1.stateChangeTypes.InputBlur:
        return {
          ...state,
          isOpen: type === useCombobox$1.stateChangeTypes.InputBlur && triggerContainsInput && isMultiselectable && state.isOpen || false
        };
      case useCombobox$1.stateChangeTypes.InputFocus:
        return {
          ...state,
          isOpen: false
        };
      case useCombobox$1.stateChangeTypes.InputKeyDownArrowDown:
      case useCombobox$1.stateChangeTypes.FunctionOpenMenu:
        if (state.isOpen !== changes.isOpen && !altKey) {
          changes.highlightedIndex = 0;
        }
        break;
      case useCombobox$1.stateChangeTypes.InputKeyDownArrowUp:
        if (state.isOpen !== changes.isOpen) {
          changes.highlightedIndex = values.length - 1;
        }
        break;
      case useCombobox$1.stateChangeTypes.InputKeyDownEnter:
      case useCombobox$1.stateChangeTypes.FunctionSelectItem:
      case useCombobox$1.stateChangeTypes.ItemClick:
        changes.highlightedIndex = state.highlightedIndex;
        if (isMultiselectable) {
          changes.isOpen = state.isOpen;
          changes.inputValue = '';
        }
        break;
      case useCombobox$1.stateChangeTypes.InputKeyDownEscape:
        return {
          ...state,
          isOpen: false
        };
      case useCombobox$1.stateChangeTypes.InputKeyDownPageDown:
      case useCombobox$1.stateChangeTypes.InputKeyDownPageUp:
        return state;
    }
    if (isMultiselectable && state.selectedItem !== changes.selectedItem) {
      if (state.selectedItem !== undefined && state.selectedItem !== null && changes.selectedItem !== undefined && changes.selectedItem !== null) {
        if (state.selectedItem.includes(changes.selectedItem)) {
          changes.selectedItem = state.selectedItem.filter(value => value !== changes.selectedItem);
        } else {
          changes.selectedItem = [...state.selectedItem, changes.selectedItem];
        }
      } else if (changes.selectedItem !== undefined && changes.selectedItem !== null) {
        changes.selectedItem = [changes.selectedItem];
      } else {
        changes.selectedItem = [];
      }
    }
    previousStateRef.current = {
      type,
      altKey,
      ...state
    };
    return changes;
  };
  const transformValue = value => value ? toLabel(labels, value) : '';
  const getOptionId = reactExports.useCallback((index, isDisabled) => `${prefix}-option${isDisabled ? '-disabled' : ''}-${index}`, [prefix]);
  const {
    selectedItem: _selectionValue,
    isOpen: _isExpanded,
    highlightedIndex: _activeIndex,
    inputValue: _inputValue,
    getToggleButtonProps: getDownshiftTriggerProps,
    getInputProps: getDownshiftInputProps,
    getMenuProps: getDownshiftListboxProps,
    getItemProps: getDownshiftOptionProps,
    closeMenu,
    openMenu,
    setHighlightedIndex,
    selectItem
  } = useCombobox$1({
    id: prefix,
    toggleButtonId: `${prefix}-trigger`,
    menuId: `${prefix}-listbox`,
    getItemId: getOptionId,
    items: values,
    inputValue,
    initialInputValue,
    itemToString: transformValue,
    selectedItem: selectionValue,
    initialSelectedItem: initialSelectionValue,
    isOpen: isExpanded,
    defaultIsOpen: defaultExpanded,
    initialIsOpen: initialExpanded,
    highlightedIndex: activeIndex,
    defaultHighlightedIndex: _defaultActiveIndex,
    initialHighlightedIndex: initialActiveIndex,
    onStateChange: handleDownshiftStateChange,
    stateReducer,
    environment: win
  });
  const closeListbox = reactExports.useCallback(() => {
    closeMenu();
    onChange({
      type: toType(useCombobox$1.stateChangeTypes.FunctionCloseMenu),
      isExpanded: false
    });
  }, [closeMenu, onChange]);
  const openListbox = reactExports.useCallback(() => {
    openMenu();
    onChange({
      type: toType(useCombobox$1.stateChangeTypes.FunctionOpenMenu),
      isExpanded: true
    });
  }, [openMenu, onChange]);
  const setActiveIndex = reactExports.useCallback(index => {
    setHighlightedIndex(index);
    onChange({
      type: toType(useCombobox$1.stateChangeTypes.FunctionSetHighlightedIndex),
      activeIndex: index
    });
  }, [onChange, setHighlightedIndex]);
  const setDownshiftSelection = reactExports.useCallback(value => {
    selectItem(value);
    onChange({
      type: toType(useCombobox$1.stateChangeTypes.FunctionSelectItem),
      selectionValue: value
    });
  }, [onChange, selectItem]);
  const {
    getLabelProps: getFieldLabelProps,
    getHintProps,
    getInputProps: getFieldInputProps,
    getMessageProps
  } = useField$1({
    idPrefix,
    hasHint,
    hasMessage
  });
  reactExports.useLayoutEffect(() => {
    if (isAutocomplete && _isExpanded && !previousStateRef.current?.isOpen && _selectionValue && !matchValue) {
      const value = Array.isArray(_selectionValue) ? _selectionValue[_selectionValue.length - 1] : _selectionValue;
      const index = values.findIndex(current => current === value);
      if (index !== -1) {
        setActiveIndex(index);
      } else if (_defaultActiveIndex !== undefined) {
        setActiveIndex(_defaultActiveIndex);
      }
    }
  }, [isAutocomplete, _isExpanded, _selectionValue, _inputValue, values, _defaultActiveIndex, setActiveIndex]);
  reactExports.useEffect(() => setTriggerContainsInput(triggerRef.current?.contains(inputRef.current)), [triggerRef, inputRef]);
  reactExports.useEffect(() => {
    clearTimeout(matchTimeoutRef.current);
    matchTimeoutRef.current = window.setTimeout(() => setMatchValue(''), 500);
    return () => clearTimeout(matchTimeoutRef.current);
  }, [matchValue]);
  reactExports.useEffect(() => {
    if (previousStateRef.current?.type === useCombobox$1.stateChangeTypes.FunctionSelectItem) {
      if (isEditable) {
        inputRef.current?.focus();
      } else {
        triggerRef.current?.focus();
      }
    }
  });
  reactExports.useEffect(() => {
    if (isEditable && inputRef.current === win.document.activeElement) {
      inputRef.current?.scrollIntoView && inputRef.current?.scrollIntoView();
    }
  }, [inputRef, isEditable, win.document.activeElement]);
  const getTriggerProps = reactExports.useCallback(function (_temp) {
    let {
      onBlur,
      onClick,
      onKeyDown,
      ...other
    } = _temp === void 0 ? {} : _temp;
    const triggerProps = getDownshiftTriggerProps({
      'data-garden-container-id': 'containers.combobox',
      'data-garden-container-version': '1.0.0',
      onBlur,
      onClick,
      onKeyDown,
      ref: triggerRef,
      disabled,
      ...other
    });
    const handleBlur = event => {
      if (event.relatedTarget === null || !event.currentTarget?.contains(event.relatedTarget)) {
        closeListbox();
      }
    };
    if (isEditable && triggerContainsInput) {
      const handleClick = event => {
        if (disabled) {
          event.preventDefault();
        } else if (isAutocomplete) {
          triggerProps.onClick(event);
        } else {
          inputRef.current?.focus();
        }
      };
      return {
        ...triggerProps,
        onBlur: composeEventHandlers$1(onBlur, handleBlur),
        onClick: composeEventHandlers$1(onClick, handleClick),
        'aria-controls': isAutocomplete ? triggerProps['aria-controls'] : undefined,
        'aria-expanded': undefined,
        'aria-disabled': disabled || undefined,
        disabled: undefined
      };
    } else if (!isEditable) {
      const {
        'aria-activedescendant': ariaActiveDescendant,
        onKeyDown: onDownshiftKeyDown
      } = getDownshiftInputProps({}, {
        suppressRefError: true
      });
      const {
        'aria-labelledby': ariaLabeledBy
      } = getFieldInputProps();
      const handleKeyDown = event => {
        event.stopPropagation();
        if (!_isExpanded && (event.key === KEYS$1.SPACE || event.key === KEYS$1.ENTER)) {
          openListbox();
        } else if (/^(?:\S| ){1}$/u.test(event.key)) {
          const _matchValue = `${matchValue}${event.key}`;
          setMatchValue(_matchValue);
          let offset = 0;
          if (_isExpanded) {
            if (_activeIndex !== -1) {
              offset = _matchValue.length === 1 ? _activeIndex + 1 : _activeIndex;
            }
          } else {
            openListbox();
            const offsetValue = Array.isArray(_selectionValue) ? _selectionValue[_selectionValue.length - 1] : _selectionValue;
            if (offsetValue !== null) {
              offset = values.findIndex(current => current === offsetValue);
            }
          }
          for (let index = 0; index < values.length; index++) {
            const valueIndex = (index + offset) % values.length;
            const value = values[valueIndex];
            if (toLabel(labels, value).toLowerCase().startsWith(_matchValue.toLowerCase())) {
              setActiveIndex(valueIndex);
              break;
            }
          }
        }
      };
      return {
        ...triggerProps,
        'aria-activedescendant': ariaActiveDescendant,
        'aria-haspopup': 'listbox',
        'aria-labelledby': ariaLabeledBy,
        'aria-disabled': disabled || undefined,
        disabled: undefined,
        role: 'combobox',
        onBlur: composeEventHandlers$1(onBlur, handleBlur),
        onKeyDown: composeEventHandlers$1(onKeyDown, onDownshiftKeyDown, handleKeyDown),
        tabIndex: disabled ? -1 : 0
      };
    }
    return triggerProps;
  }, [getDownshiftTriggerProps, getDownshiftInputProps, getFieldInputProps, triggerRef, disabled, _selectionValue, _isExpanded, _activeIndex, closeListbox, openListbox, setActiveIndex, matchValue, values, labels, triggerContainsInput, isAutocomplete, isEditable, inputRef]);
  const getLabelProps = reactExports.useCallback(function (_temp2) {
    let {
      onClick,
      ...other
    } = _temp2 === void 0 ? {} : _temp2;
    const {
      htmlFor,
      ...labelProps
    } = getFieldLabelProps(other);
    const handleClick = () => !isEditable && triggerRef.current?.focus();
    return {
      ...labelProps,
      onClick: composeEventHandlers$1(onClick, handleClick),
      htmlFor: isEditable ? htmlFor : undefined
    };
  }, [getFieldLabelProps, isEditable, triggerRef]);
  const getInputProps = reactExports.useCallback(function (_temp3) {
    let {
      role = isEditable ? 'combobox' : null,
      'aria-labelledby': ariaLabeledBy = null,
      onClick,
      onFocus,
      ...other
    } = _temp3 === void 0 ? {} : _temp3;
    const inputProps = {
      'data-garden-container-id': 'containers.combobox.input',
      'data-garden-container-version': '1.0.0',
      ref: inputRef,
      role: role === null ? undefined : role,
      onClick,
      onFocus
    };
    if (isEditable) {
      const handleClick = event => event.target instanceof Element && triggerRef.current?.contains(event.target) && event.stopPropagation();
      return getDownshiftInputProps({
        ...inputProps,
        disabled,
        role,
        'aria-labelledby': ariaLabeledBy,
        'aria-autocomplete': isAutocomplete ? 'list' : undefined,
        onClick: composeEventHandlers$1(onClick, handleClick),
        ...getFieldInputProps(),
        ...other
      });
    }
    const downshiftInputProps = getDownshiftInputProps({
      ...inputProps,
      disabled: true,
      'aria-autocomplete': undefined,
      'aria-activedescendant': undefined,
      'aria-controls': undefined,
      'aria-expanded': undefined,
      'aria-hidden': true,
      'aria-labelledby': undefined
    });
    const handleFocus = () => {
      if (!isEditable) {
        triggerRef.current?.focus();
      }
    };
    return {
      ...downshiftInputProps,
      disabled,
      readOnly: true,
      tabIndex: -1,
      onFocus: composeEventHandlers$1(onFocus, handleFocus),
      ...other
    };
  }, [getDownshiftInputProps, getFieldInputProps, inputRef, triggerRef, disabled, isAutocomplete, isEditable]);
  const getTagProps = reactExports.useCallback(_ref4 => {
    let {
      option,
      onClick,
      onFocus,
      onKeyDown,
      ...other
    } = _ref4;
    const handleClick = event => event.target instanceof Element && triggerRef.current?.contains(event.target) && event.stopPropagation();
    const handleFocus = () => {
      if (_isExpanded) {
        setActiveIndex(values.findIndex(value => value === option.value));
      }
    };
    const handleKeyDown = event => {
      if (event.key === KEYS$1.BACKSPACE || event.key === KEYS$1.DELETE) {
        setDownshiftSelection(option.value);
      } else {
        const triggerContainsTag = event.target instanceof Element && triggerRef.current?.contains(event.target);
        if (triggerContainsTag && (event.key === KEYS$1.DOWN || event.key === KEYS$1.UP || event.key === KEYS$1.ESCAPE)) {
          const inputProps = getDownshiftInputProps();
          if (isEditable) {
            inputRef.current?.focus();
          } else {
            triggerRef.current?.focus();
          }
          inputProps.onKeyDown(event);
        } else if (triggerContainsTag && !isEditable) {
          event.stopPropagation();
        }
      }
    };
    return {
      'data-garden-container-id': 'containers.combobox.tag',
      'data-garden-container-version': '1.0.0',
      onClick: composeEventHandlers$1(onClick, handleClick),
      onFocus: composeEventHandlers$1(onFocus, handleFocus),
      onKeyDown: composeEventHandlers$1(onKeyDown, handleKeyDown),
      ...other
    };
  }, [triggerRef, setDownshiftSelection, getDownshiftInputProps, isEditable, _isExpanded, values, setActiveIndex, inputRef]);
  const getListboxProps = reactExports.useCallback(_ref5 => {
    let {
      role = 'listbox',
      'aria-labelledby': ariaLabeledBy = null,
      ...other
    } = _ref5;
    return getDownshiftListboxProps({
      'data-garden-container-id': 'containers.combobox.listbox',
      'data-garden-container-version': '1.0.0',
      ref: listboxRef,
      role,
      'aria-labelledby': ariaLabeledBy,
      'aria-multiselectable': isMultiselectable ? true : undefined,
      ...other
    });
  }, [getDownshiftListboxProps, listboxRef, isMultiselectable]);
  const getOptGroupProps = reactExports.useCallback(_ref6 => {
    let {
      role = 'group',
      ...other
    } = _ref6;
    return {
      'data-garden-container-id': 'containers.combobox.optgroup',
      'data-garden-container-version': '1.0.0',
      role: role === null ? undefined : role,
      ...other
    };
  }, []);
  const getOptionProps = reactExports.useCallback(function (_temp4) {
    let {
      role = 'option',
      option,
      onMouseDown,
      ...other
    } = _temp4 === void 0 ? {} : _temp4;
    const optionProps = {
      'data-garden-container-id': 'containers.combobox.option',
      'data-garden-container-version': '1.0.0',
      role,
      onMouseDown,
      ...other
    };
    let ariaSelected = false;
    if (option?.value !== undefined) {
      ariaSelected = Array.isArray(_selectionValue) ? _selectionValue?.includes(option?.value) : _selectionValue === option?.value;
    }
    if (option === undefined || option.disabled) {
      const handleMouseDown = event => event.preventDefault();
      return {
        'aria-disabled': true,
        'aria-selected': ariaSelected,
        id: option ? getOptionId(disabledValues.indexOf(option.value), option.disabled) : undefined,
        ...optionProps,
        onMouseDown: composeEventHandlers$1(onMouseDown, handleMouseDown)
      };
    }
    return getDownshiftOptionProps({
      item: option.value,
      index: values.indexOf(option.value),
      'aria-selected': ariaSelected,
      ...optionProps
    });
  }, [getDownshiftOptionProps, disabledValues, values, _selectionValue, getOptionId]);
  const removeSelection = reactExports.useCallback(value => {
    if (value === undefined) {
      setDownshiftSelection(null);
    } else {
      const removeValue = typeof value === 'object' && 'value' in value ? value.value : value;
      if (Array.isArray(_selectionValue) && _selectionValue.includes(removeValue)) {
        setDownshiftSelection(removeValue);
      } else if (_selectionValue === removeValue) {
        setDownshiftSelection(null);
      } else ;
    }
  }, [_selectionValue, setDownshiftSelection]);
  const selection = reactExports.useMemo(() => {
    if (Array.isArray(_selectionValue)) {
      return _selectionValue.map(value => ({
        value,
        label: labels[value],
        disabled: disabledValues.includes(value)
      }));
    } else if (_selectionValue) {
      return {
        value: _selectionValue,
        label: toLabel(labels, _selectionValue),
        disabled: disabledValues.includes(_selectionValue)
      };
    }
    return null;
  }, [_selectionValue, disabledValues, labels]);
  return reactExports.useMemo(() => ({
    getLabelProps,
    getHintProps,
    getTriggerProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptGroupProps,
    getOptionProps,
    getMessageProps,
    selection,
    isExpanded: _isExpanded,
    activeValue: values[_activeIndex],
    inputValue: _inputValue,
    removeSelection
  }), [values, selection, _isExpanded, _activeIndex, _inputValue, getLabelProps, getHintProps, getTriggerProps, getInputProps, getTagProps, getListboxProps, getOptGroupProps, getOptionProps, getMessageProps, removeSelection]);
};
({
  children: PropTypes.func,
  render: PropTypes.func,
  idPrefix: PropTypes.string,
  triggerRef: PropTypes.any.isRequired,
  inputRef: PropTypes.any.isRequired,
  listboxRef: PropTypes.any.isRequired,
  isAutocomplete: PropTypes.bool,
  isMultiselectable: PropTypes.bool,
  isEditable: PropTypes.bool,
  disabled: PropTypes.bool,
  hasHint: PropTypes.bool,
  hasMessage: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  inputValue: PropTypes.string,
  selectionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  isExpanded: PropTypes.bool,
  defaultExpanded: PropTypes.bool,
  initialExpanded: PropTypes.bool,
  activeIndex: PropTypes.number,
  defaultActiveIndex: PropTypes.number,
  initialActiveIndex: PropTypes.number,
  onChange: PropTypes.func,
  environment: PropTypes.any
});

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
const INPUT_TYPES_WHITE_LIST = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
function useFocusVisible(_temp) {
  let {
    scope,
    relativeDocument,
    className = 'garden-focus-visible',
    dataAttribute = 'data-garden-focus-visible'
  } = _temp === void 0 ? {} : _temp;
  if (!scope) {
    throw new Error('Error: the useFocusVisible() hook requires a "scope" property');
  }
  const hadKeyboardEvent = reactExports.useRef(false);
  const hadFocusVisibleRecently = reactExports.useRef(false);
  const hadFocusVisibleRecentlyTimeout = reactExports.useRef();
  reactExports.useEffect(() => {
    let environment = relativeDocument;
    if (!environment) {
      environment = document;
    }
    const isValidFocusTarget = el => {
      if (el && el !== scope.current && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
        return true;
      }
      return false;
    };
    const focusTriggersKeyboardModality = el => {
      const type = el.type;
      const tagName = el.tagName;
      if (tagName === 'INPUT' && INPUT_TYPES_WHITE_LIST[type] && !el.readOnly) {
        return true;
      }
      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }
      if (el.isContentEditable) {
        return true;
      }
      return false;
    };
    const isFocused = el => {
      if (el && (el.classList.contains(className) || el.hasAttribute(dataAttribute))) {
        return true;
      }
      return false;
    };
    const addFocusVisibleClass = el => {
      if (isFocused(el)) {
        return;
      }
      el && el.classList.add(className);
      el && el.setAttribute(dataAttribute, 'true');
    };
    const removeFocusVisibleClass = el => {
      el.classList.remove(className);
      el.removeAttribute(dataAttribute);
    };
    const onKeyDown = e => {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }
      if (isValidFocusTarget(environment.activeElement)) {
        addFocusVisibleClass(environment.activeElement);
      }
      hadKeyboardEvent.current = true;
    };
    const onPointerDown = () => {
      hadKeyboardEvent.current = false;
    };
    const onFocus = e => {
      if (!isValidFocusTarget(e.target)) {
        return;
      }
      if (hadKeyboardEvent.current || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    };
    const onBlur = e => {
      if (!isValidFocusTarget(e.target)) {
        return;
      }
      if (isFocused(e.target)) {
        hadFocusVisibleRecently.current = true;
        clearTimeout(hadFocusVisibleRecentlyTimeout.current);
        const timeoutId = setTimeout(() => {
          hadFocusVisibleRecently.current = false;
          clearTimeout(hadFocusVisibleRecentlyTimeout.current);
        }, 100);
        hadFocusVisibleRecentlyTimeout.current = Number(timeoutId);
        removeFocusVisibleClass(e.target);
      }
    };
    const onInitialPointerMove = e => {
      const nodeName = e.target.nodeName;
      if (nodeName && nodeName.toLowerCase() === 'html') {
        return;
      }
      hadKeyboardEvent.current = false;
      removeInitialPointerMoveListeners();
    };
    const addInitialPointerMoveListeners = () => {
      environment.addEventListener('mousemove', onInitialPointerMove);
      environment.addEventListener('mousedown', onInitialPointerMove);
      environment.addEventListener('mouseup', onInitialPointerMove);
      environment.addEventListener('pointermove', onInitialPointerMove);
      environment.addEventListener('pointerdown', onInitialPointerMove);
      environment.addEventListener('pointerup', onInitialPointerMove);
      environment.addEventListener('touchmove', onInitialPointerMove);
      environment.addEventListener('touchstart', onInitialPointerMove);
      environment.addEventListener('touchend', onInitialPointerMove);
    };
    const removeInitialPointerMoveListeners = () => {
      environment.removeEventListener('mousemove', onInitialPointerMove);
      environment.removeEventListener('mousedown', onInitialPointerMove);
      environment.removeEventListener('mouseup', onInitialPointerMove);
      environment.removeEventListener('pointermove', onInitialPointerMove);
      environment.removeEventListener('pointerdown', onInitialPointerMove);
      environment.removeEventListener('pointerup', onInitialPointerMove);
      environment.removeEventListener('touchmove', onInitialPointerMove);
      environment.removeEventListener('touchstart', onInitialPointerMove);
      environment.removeEventListener('touchend', onInitialPointerMove);
    };
    const onVisibilityChange = () => {
      if (environment.visibilityState === 'hidden') {
        if (hadFocusVisibleRecently.current) {
          hadKeyboardEvent.current = true;
        }
      }
    };
    const currentScope = scope.current;
    if (!environment || !currentScope) {
      return;
    }
    environment.addEventListener('keydown', onKeyDown, true);
    environment.addEventListener('mousedown', onPointerDown, true);
    environment.addEventListener('pointerdown', onPointerDown, true);
    environment.addEventListener('touchstart', onPointerDown, true);
    environment.addEventListener('visibilitychange', onVisibilityChange, true);
    addInitialPointerMoveListeners();
    currentScope && currentScope.addEventListener('focus', onFocus, true);
    currentScope && currentScope.addEventListener('blur', onBlur, true);
    return () => {
      environment.removeEventListener('keydown', onKeyDown);
      environment.removeEventListener('mousedown', onPointerDown);
      environment.removeEventListener('pointerdown', onPointerDown);
      environment.removeEventListener('touchstart', onPointerDown);
      environment.removeEventListener('visibilityChange', onVisibilityChange);
      removeInitialPointerMoveListeners();
      currentScope && currentScope.removeEventListener('focus', onFocus);
      currentScope && currentScope.removeEventListener('blur', onBlur);
      clearTimeout(hadFocusVisibleRecentlyTimeout.current);
    };
  }, [relativeDocument, scope, className, dataAttribute]);
}
({
  children: PropTypes.func,
  render: PropTypes.func,
  relativeDocument: PropTypes.object,
  className: PropTypes.string,
  dataAttribute: PropTypes.string
});

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

function last() {
  var _ref;
  return _ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref];
}
function negation(a) {
  return -a;
}
function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function max$2() {
  return Math.max.apply(Math, arguments);
}
function min$2() {
  return Math.min.apply(Math, arguments);
}
function comma() {
  return Array.of.apply(Array, arguments);
}
var defaultSymbols = {
  symbols: {
    '*': {
      infix: {
        symbol: '*',
        f: multiplication,
        notation: 'infix',
        precedence: 4,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: '*',
      regSymbol: '\\*'
    },
    '/': {
      infix: {
        symbol: '/',
        f: division,
        notation: 'infix',
        precedence: 4,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: '/',
      regSymbol: '/'
    },
    '+': {
      infix: {
        symbol: '+',
        f: addition,
        notation: 'infix',
        precedence: 2,
        rightToLeft: 0,
        argCount: 2
      },
      prefix: {
        symbol: '+',
        f: last,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '+',
      regSymbol: '\\+'
    },
    '-': {
      infix: {
        symbol: '-',
        f: subtraction,
        notation: 'infix',
        precedence: 2,
        rightToLeft: 0,
        argCount: 2
      },
      prefix: {
        symbol: '-',
        f: negation,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '-',
      regSymbol: '-'
    },
    ',': {
      infix: {
        symbol: ',',
        f: comma,
        notation: 'infix',
        precedence: 1,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: ',',
      regSymbol: ','
    },
    '(': {
      prefix: {
        symbol: '(',
        f: last,
        notation: 'prefix',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '(',
      regSymbol: '\\('
    },
    ')': {
      postfix: {
        symbol: ')',
        f: undefined,
        notation: 'postfix',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: ')',
      regSymbol: '\\)'
    },
    min: {
      func: {
        symbol: 'min',
        f: min$2,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: 'min',
      regSymbol: 'min\\b'
    },
    max: {
      func: {
        symbol: 'max',
        f: max$2,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: 'max',
      regSymbol: 'max\\b'
    }
  }
};
var defaultSymbolMap = defaultSymbols;
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */

var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(PolishedError, _Error);
  function PolishedError(code) {
    var _this;
    {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var unitRegExp = /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g; // Merges additional math functionality into the defaults.

function mergeSymbolMaps(additionalSymbols) {
  var symbolMap = {};
  symbolMap.symbols = additionalSymbols ? _extends$w({}, defaultSymbolMap.symbols, additionalSymbols.symbols) : _extends$w({}, defaultSymbolMap.symbols);
  return symbolMap;
}
function exec(operators, values) {
  var _ref;
  var op = operators.pop();
  values.push(op.f.apply(op, (_ref = []).concat.apply(_ref, values.splice(-op.argCount))));
  return op.precedence;
}
function calculate(expression, additionalSymbols) {
  var symbolMap = mergeSymbolMaps(additionalSymbols);
  var match;
  var operators = [symbolMap.symbols['('].prefix];
  var values = [];
  var pattern = new RegExp(
  // Pattern for numbers
  "\\d+(?:\\.\\d+)?|" +
  // ...and patterns for individual operators/function names
  Object.keys(symbolMap.symbols).map(function (key) {
    return symbolMap.symbols[key];
  }) // longer symbols should be listed first
  // $FlowFixMe
  .sort(function (a, b) {
    return b.symbol.length - a.symbol.length;
  }) // $FlowFixMe
  .map(function (val) {
    return val.regSymbol;
  }).join('|') + "|(\\S)", 'g');
  pattern.lastIndex = 0; // Reset regular expression object

  var afterValue = false;
  do {
    match = pattern.exec(expression);
    var _ref2 = match || [')', undefined],
      token = _ref2[0],
      bad = _ref2[1];
    var notNumber = symbolMap.symbols[token];
    var notNewValue = notNumber && !notNumber.prefix && !notNumber.func;
    var notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix; // Check for syntax errors:

    if (bad || (afterValue ? notAfterValue : notNewValue)) {
      throw new PolishedError(37, match ? match.index : expression.length, expression);
    }
    if (afterValue) {
      // We either have an infix or postfix operator (they should be mutually exclusive)
      var curr = notNumber.postfix || notNumber.infix;
      do {
        var prev = operators[operators.length - 1];
        if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0) break; // Apply previous operator, since it has precedence over current one
      } while (exec(operators, values)); // Exit loop after executing an opening parenthesis or function

      afterValue = curr.notation === 'postfix';
      if (curr.symbol !== ')') {
        operators.push(curr); // Postfix always has precedence over any operator that follows after it

        if (afterValue) exec(operators, values);
      }
    } else if (notNumber) {
      // prefix operator or function
      operators.push(notNumber.prefix || notNumber.func);
      if (notNumber.func) {
        // Require an opening parenthesis
        match = pattern.exec(expression);
        if (!match || match[0] !== '(') {
          throw new PolishedError(38, match ? match.index : expression.length, expression);
        }
      }
    } else {
      // number
      values.push(+token);
      afterValue = true;
    }
  } while (match && operators.length);
  if (operators.length) {
    throw new PolishedError(39, match ? match.index : expression.length, expression);
  } else if (match) {
    throw new PolishedError(40, match ? match.index : expression.length, expression);
  } else {
    return values.pop();
  }
}
function reverseString(str) {
  return str.split('').reverse().join('');
}
/**
 * Helper for doing math with CSS Units. Accepts a formula as a string. All values in the formula must have the same unit (or be unitless). Supports complex formulas utliziing addition, subtraction, multiplication, division, square root, powers, factorial, min, max, as well as parentheses for order of operation.
 *
 *In cases where you need to do calculations with mixed units where one unit is a [relative length unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Relative_length_units), you will want to use [CSS Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
 *
 * *warning* While we've done everything possible to ensure math safely evalutes formulas expressed as strings, you should always use extreme caution when passing `math` user provided values.
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: math('12rem + 8rem'),
 *   fontSize: math('(12px + 2px) * 3'),
 *   fontSize: math('3px^2 + sqrt(4)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${math('12rem + 8rem')};
 *   fontSize: ${math('(12px + 2px) * 3')};
 *   fontSize: ${math('3px^2 + sqrt(4)')};
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   fontSize: '20rem',
 *   fontSize: '42px',
 *   fontSize: '11px',
 * }
 */

function math(formula, additionalSymbols) {
  var reversedFormula = reverseString(formula);
  var formulaMatch = reversedFormula.match(unitRegExp); // Check that all units are the same

  if (formulaMatch && !formulaMatch.every(function (unit) {
    return unit === formulaMatch[0];
  })) {
    throw new PolishedError(41);
  }
  var cleanFormula = reverseString(reversedFormula.replace(unitRegExp, ''));
  return "" + calculate(cleanFormula, additionalSymbols) + (formulaMatch ? reverseString(formulaMatch[0]) : '');
}

/**
 * Check if a string ends with something
 * @private
 */
function endsWith(string, suffix) {
  return string.substr(-suffix.length) === suffix;
}
var cssRegex$1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value minus its unit of measure.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

function stripUnit(value) {
  if (typeof value !== 'string') return value;
  var matchedValue = value.match(cssRegex$1);
  return matchedValue ? parseFloat(value) : value;
}

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */

var pxtoFactory = function pxtoFactory(to) {
  return function (pxval, base) {
    if (base === void 0) {
      base = '16px';
    }
    var newPxval = pxval;
    var newBase = base;
    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new PolishedError(69, to, pxval);
      }
      newPxval = stripUnit(pxval);
    }
    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new PolishedError(70, to, base);
      }
      newBase = stripUnit(base);
    }
    if (typeof newPxval === 'string') {
      throw new PolishedError(71, pxval, to);
    }
    if (typeof newBase === 'string') {
      throw new PolishedError(72, base, to);
    }
    return "" + newPxval / newBase + to;
  };
};
var pixelsto = pxtoFactory;

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em = /*#__PURE__*/pixelsto('em');
var em$1 = em;
var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value and its unit as elements of an array.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': getValueAndUnit('100px')[0],
 *   '--unit': getValueAndUnit('100px')[1],
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${getValueAndUnit('100px')[0]};
 *   --unit: ${getValueAndUnit('100px')[1]};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100,
 *   '--unit': 'px',
 * }
 */

function getValueAndUnit(value) {
  if (typeof value !== 'string') return [value, ''];
  var matchedValue = value.match(cssRegex);
  if (matchedValue) return [parseFloat(value), matchedValue[2]];
  return [value, undefined];
}

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */
function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }
  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV

  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;
  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }
  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }
  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }
  throw new PolishedError(1);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }
  throw new PolishedError(2);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }
  throw new PolishedError(6);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};
var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};
var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};
var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */

function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare

function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */

function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$w({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore

var curriedDarken = /*#__PURE__*/curry
/* ::<number | string, string, string> */(darken);
var curriedDarken$1 = curriedDarken;

/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */

function getLuminance(color) {
  if (color === 'transparent') return 0;
  var rgbColor = parseToRgb(color);
  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
      var channel = rgbColor[key] / 255;
      return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
    }),
    r = _Object$keys$map[0],
    g = _Object$keys$map[1],
    b = _Object$keys$map[2];
  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

/**
 * Returns the contrast ratio between two colors based on
 * [W3's recommended equation for calculating contrast](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).
 *
 * @example
 * const contrastRatio = getContrast('#444', '#fff');
 */

function getContrast(color1, color2) {
  var luminance1 = getLuminance(color1);
  var luminance2 = getLuminance(color2);
  return parseFloat((luminance1 > luminance2 ? (luminance1 + 0.05) / (luminance2 + 0.05) : (luminance2 + 0.05) / (luminance1 + 0.05)).toFixed(2));
}

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$w({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore

var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */(lighten);
var curriedLighten$1 = curriedLighten;
var defaultReturnIfLightColor = '#000';
var defaultReturnIfDarkColor = '#fff';
/**
 * Returns black or white (or optional passed colors) for best
 * contrast depending on the luminosity of the given color.
 * When passing custom return colors, strict mode ensures that the
 * return color always meets or exceeds WCAG level AA or greater. If this test
 * fails, the default return color (black or white) is returned in place of the
 * custom return color. You can optionally turn off strict mode.
 *
 * Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('black', '#001', '#ff8'),
 *   color: readableColor('white', '#001', '#ff8'),
 *   color: readableColor('red', '#333', '#ddd', true)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('black', '#001', '#ff8')};
 *   color: ${readableColor('white', '#001', '#ff8')};
 *   color: ${readableColor('red', '#333', '#ddd', true)};
 * `
 *
 * // CSS in JS Output
 * element {
 *   color: "#fff";
 *   color: "#ff8";
 *   color: "#001";
 *   color: "#000";
 * }
 */

function readableColor(color, returnIfLightColor, returnIfDarkColor, strict) {
  if (returnIfLightColor === void 0) {
    returnIfLightColor = defaultReturnIfLightColor;
  }
  if (returnIfDarkColor === void 0) {
    returnIfDarkColor = defaultReturnIfDarkColor;
  }
  if (strict === void 0) {
    strict = true;
  }
  var isColorLight = getLuminance(color) > 0.179;
  var preferredReturnColor = isColorLight ? returnIfLightColor : returnIfDarkColor;
  if (!strict || getContrast(color, preferredReturnColor) >= 4.5) {
    return preferredReturnColor;
  }
  return isColorLight ? defaultReturnIfLightColor : defaultReturnIfDarkColor;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
  funcProto = Function.prototype,
  objectProto$1 = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root$1['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root$1, 'Map'),
  nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map$1 || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$2(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$1(value) ? objectToString$1.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
var lodash_memoize = memoize;

var memoize$1 = /*@__PURE__*/getDefaultExportFromCjs(lodash_memoize);

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
function _extends$v() {
  _extends$v = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$v.apply(this, arguments);
}
const PALETTE = {
  black: '#000',
  white: '#fff',
  product: {
    support: '#00a656',
    message: '#37b8af',
    explore: '#30aabc',
    gather: '#f6c8be',
    guide: '#ff6224',
    connect: '#ff6224',
    chat: '#f79a3e',
    talk: '#efc93d',
    sell: '#c38f00'
  },
  grey: {
    100: '#f8f9f9',
    200: '#e9ebed',
    300: '#d8dcde',
    400: '#c2c8cc',
    500: '#87929d',
    600: '#68737d',
    700: '#49545c',
    800: '#2f3941'
  },
  blue: {
    100: '#edf7ff',
    200: '#cee2f2',
    300: '#adcce4',
    400: '#5293c7',
    500: '#337fbd',
    600: '#1f73b7',
    700: '#144a75',
    800: '#0f3554'
  },
  red: {
    100: '#fff0f1',
    200: '#f5d5d8',
    300: '#f5b5ba',
    400: '#e35b66',
    500: '#d93f4c',
    600: '#cc3340',
    700: '#8c232c',
    800: '#681219'
  },
  yellow: {
    100: '#fff7ed',
    200: '#ffeedb',
    300: '#fed6a8',
    400: '#ffb057',
    500: '#f79a3e',
    600: '#ed8f1c',
    700: '#ad5918',
    800: '#703815'
  },
  green: {
    100: '#edf8f4',
    200: '#d1e8df',
    300: '#aecfc2',
    400: '#5eae91',
    500: '#228f67',
    600: '#038153',
    700: '#186146',
    800: '#0b3b29'
  },
  kale: {
    100: '#f5fcfc',
    200: '#daeded',
    300: '#bdd9d7',
    400: '#90bbbb',
    500: '#467b7c',
    600: '#17494d',
    700: '#03363d',
    800: '#012b30'
  },
  fuschia: {
    400: '#d653c2',
    600: '#a81897',
    M400: '#cf62a8',
    M600: '#a8458c'
  },
  pink: {
    400: '#ec4d63',
    600: '#d42054',
    M400: '#d57287',
    M600: '#b23a5d'
  },
  crimson: {
    400: '#e34f32',
    600: '#c72a1c',
    M400: '#cc6c5b',
    M600: '#b24a3c'
  },
  orange: {
    400: '#de701d',
    600: '#bf5000',
    M400: '#d4772c',
    M600: '#b35827'
  },
  lemon: {
    400: '#ffd424',
    600: '#ffbb10',
    M400: '#e7a500',
    M600: '#c38f00'
  },
  lime: {
    400: '#43b324',
    600: '#2e8200',
    M400: '#519e2d',
    M600: '#47782c'
  },
  mint: {
    400: '#00a656',
    600: '#058541',
    M400: '#299c66',
    M600: '#2e8057'
  },
  teal: {
    400: '#02a191',
    600: '#028079',
    M400: '#2d9e8f',
    M600: '#3c7873'
  },
  azure: {
    400: '#3091ec',
    600: '#1371d6',
    M400: '#5f8dcf',
    M600: '#3a70b2'
  },
  royal: {
    400: '#5d7df5',
    600: '#3353e2',
    M400: '#7986d8',
    M600: '#4b61c3'
  },
  purple: {
    400: '#b552e2',
    600: '#6a27b8',
    M400: '#b072cc',
    M600: '#9358b0'
  }
};
const BASE = 4;
const borderRadii = {
  sm: `${BASE / 2}px`,
  md: `${BASE}px`
};
const borderStyles = {
  solid: 'solid'
};
const borderWidths = {
  sm: '1px',
  md: '3px'
};
const borders = {
  sm: `${borderWidths.sm} ${borderStyles.solid}`,
  md: `${borderWidths.md} ${borderStyles.solid}`
};
const breakpoints = {
  xs: '0px',
  sm: `${BASE * 144}px`,
  md: `${BASE * 192}px`,
  lg: `${BASE * 248}px`,
  xl: `${BASE * 300}px`
};
const colors = {
  background: PALETTE.white,
  foreground: PALETTE.grey[800],
  primaryHue: 'blue',
  dangerHue: 'red',
  warningHue: 'yellow',
  successHue: 'green',
  neutralHue: 'grey',
  chromeHue: 'kale'
};
const fonts = {
  mono: ['SFMono-Regular', 'Consolas', '"Liberation Mono"', 'Menlo', 'Courier', 'monospace'].join(','),
  system: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(',')
};
const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  xxl: '26px',
  xxxl: '36px'
};
const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};
const iconSizes = {
  sm: '12px',
  md: '16px',
  lg: '26px'
};
const lineHeights = {
  sm: `${BASE * 4}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 6}px`,
  xl: `${BASE * 7}px`,
  xxl: `${BASE * 8}px`,
  xxxl: `${BASE * 11}px`
};
const palette = {
  ...PALETTE
};
delete palette.product;
const shadowWidths = {
  xs: '1px',
  sm: '2px',
  md: '3px'
};
const shadows = {
  xs: color => `0 0 0 ${shadowWidths.xs} ${color}`,
  sm: color => `0 0 0 ${shadowWidths.sm} ${color}`,
  md: color => `0 0 0 ${shadowWidths.md} ${color}`,
  lg: (offsetY, blurRadius, color) => `0 ${offsetY} ${blurRadius} 0 ${color}`
};
const space = {
  base: BASE,
  xxs: `${BASE}px`,
  xs: `${BASE * 2}px`,
  sm: `${BASE * 3}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 8}px`,
  xl: `${BASE * 10}px`,
  xxl: `${BASE * 12}px`
};
const DEFAULT_THEME = {
  borders,
  borderRadii,
  borderStyles,
  borderWidths,
  breakpoints,
  colors: {
    base: 'light',
    ...colors
  },
  components: {},
  fonts,
  fontSizes,
  fontWeights,
  iconSizes,
  lineHeights,
  palette,
  rtl: false,
  shadowWidths,
  shadows,
  space
};
const useDocument = theme => {
  const [controlledDocument, setControlledDocument] = reactExports.useState();
  reactExports.useEffect(() => {
    if (theme && theme.document) {
      setControlledDocument(theme.document);
    } else {
      setControlledDocument(document);
    }
  }, [theme]);
  return controlledDocument;
};
const ThemeProvider = _ref => {
  let {
    theme,
    focusVisibleRef,
    children,
    ...other
  } = _ref;
  const scopeRef = reactExports.useRef(null);
  const relativeDocument = useDocument(theme);
  const controlledScopeRef = focusVisibleRef === null ? /*#__PURE__*/React.createRef() : getControlledValue(focusVisibleRef, scopeRef);
  useFocusVisible({
    scope: controlledScopeRef,
    relativeDocument
  });
  return /*#__PURE__*/React.createElement(Ge, _extends$v({
    theme: theme
  }, other), focusVisibleRef === undefined ? /*#__PURE__*/React.createElement("div", {
    ref: scopeRef
  }, children) : children);
};
ThemeProvider.defaultProps = {
  theme: DEFAULT_THEME
};
function retrieveComponentStyles(componentId, props) {
  const components = props.theme && props.theme.components;
  if (!components) {
    return undefined;
  }
  const componentStyles = components[componentId];
  if (typeof componentStyles === 'function') {
    return componentStyles(props);
  }
  return componentStyles;
}
const DEFAULT_SHADE = 600;
const adjust = (color, expected, actual) => {
  if (expected !== actual) {
    const amount = Math.abs(expected - actual) / 100 * 0.05;
    return expected > actual ? curriedDarken$1(amount, color) : curriedLighten$1(amount, color);
  }
  return color;
};
const getColor = memoize$1(function (hue) {
  let shade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_SHADE;
  let theme = arguments.length > 2 ? arguments[2] : undefined;
  let transparency = arguments.length > 3 ? arguments[3] : undefined;
  let retVal;
  if (isNaN(shade)) {
    return undefined;
  }
  const palette = theme && theme.palette ? theme.palette : DEFAULT_THEME.palette;
  const colors = theme && theme.colors ? theme.colors : DEFAULT_THEME.colors;
  let _hue;
  if (typeof hue === 'string') {
    _hue = colors[hue] || hue;
  } else {
    _hue = hue;
  }
  if (Object.prototype.hasOwnProperty.call(palette, _hue)) {
    _hue = palette[_hue];
  }
  if (typeof _hue === 'object') {
    retVal = _hue[shade];
    if (!retVal) {
      const _shade = Object.keys(_hue).map(hueKey => parseInt(hueKey, 10)).reduce((previous, current) => {
        return Math.abs(current - shade) < Math.abs(previous - shade) ? current : previous;
      });
      retVal = adjust(_hue[_shade], shade, _shade);
    }
  } else {
    retVal = adjust(_hue, shade, DEFAULT_SHADE);
  }
  if (transparency) {
    retVal = rgba(retVal, transparency);
  }
  return retVal;
}, (hue, shade, theme, transparency) => JSON.stringify({
  hue,
  shade,
  palette: theme?.palette,
  colors: theme?.colors,
  transparency
}));
const getFocusBoxShadow = _ref => {
  let {
    boxShadow,
    inset = false,
    hue = 'primaryHue',
    shade = DEFAULT_SHADE,
    shadowWidth = 'md',
    spacerHue = 'background',
    spacerShade = DEFAULT_SHADE,
    spacerWidth = 'xs',
    theme = DEFAULT_THEME
  } = _ref;
  const color = getColor(hue, shade, theme);
  const shadow = theme.shadows[shadowWidth](color);
  if (spacerWidth === null) {
    return `${inset ? 'inset' : ''} ${shadow}`;
  }
  const spacerColor = getColor(spacerHue, spacerShade, theme);
  const retVal = `
    ${inset ? 'inset' : ''} ${theme.shadows[spacerWidth](spacerColor)},
    ${inset ? 'inset' : ''} ${shadow}`;
  return boxShadow ? `${retVal}, ${boxShadow}` : retVal;
};
function getLineHeight(height, fontSize) {
  const [heightValue, heightUnit] = getValueAndUnit(height.toString());
  const [fontSizeValue, fontSizeUnit] = getValueAndUnit(fontSize.toString());
  const PIXELS = 'px';
  if (heightUnit && heightUnit !== PIXELS) {
    throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);
  }
  if (fontSizeUnit && fontSizeUnit !== PIXELS) {
    throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);
  }
  return heightValue / fontSizeValue;
}
const exponentialSymbols = {
  symbols: {
    sqrt: {
      func: {
        symbol: 'sqrt',
        f: a => Math.sqrt(a),
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: 'sqrt',
      regSymbol: 'sqrt\\b'
    }
  }
};
const animationStyles$1 = (position, modifier) => {
  const property = position.split('-')[0];
  const animationName = $e(["0%,66%{", ":2px;border:transparent;}"], property);
  return Ne(["&", "::before,&", "::after{animation:0.3s ease-in-out ", ";}"], modifier, modifier, animationName);
};
const positionStyles$1 = (position, size, inset) => {
  const margin = math(`${size} / -2`);
  const placement = math(`${margin} + ${inset}`);
  let clipPath;
  let positionCss;
  let propertyRadius;
  if (position.startsWith('top')) {
    propertyRadius = 'border-bottom-right-radius';
    clipPath = 'polygon(100% 0, 100% 1px, 1px 100%, 0 100%, 0 0)';
    positionCss = Ne(["top:", ";right:", ";left:", ";margin-left:", ";"], placement, position === 'top-right' && size, position === 'top' ? '50%' : position === 'top-left' && size, position === 'top' && margin);
  } else if (position.startsWith('right')) {
    propertyRadius = 'border-bottom-left-radius';
    clipPath = 'polygon(100% 0, 100% 100%, calc(100% - 1px) 100%, 0 1px, 0 0)';
    positionCss = Ne(["top:", ";right:", ";bottom:", ";margin-top:", ";"], position === 'right' ? '50%' : position === 'right-top' && size, placement, position === 'right-bottom' && size, position === 'right' && margin);
  } else if (position.startsWith('bottom')) {
    propertyRadius = 'border-top-left-radius';
    clipPath = 'polygon(100% 0, calc(100% - 1px) 0, 0 calc(100% - 1px), 0 100%, 100% 100%)';
    positionCss = Ne(["right:", ";bottom:", ";left:", ";margin-left:", ";"], position === 'bottom-right' && size, placement, position === 'bottom' ? '50%' : position === 'bottom-left' && size, position === 'bottom' && margin);
  } else if (position.startsWith('left')) {
    propertyRadius = 'border-top-right-radius';
    clipPath = 'polygon(0 100%, 100% 100%, 100% calc(100% - 1px), 1px 0, 0 0)';
    positionCss = Ne(["top:", ";bottom:", ";left:", ";margin-top:", ";"], position === 'left' ? '50%' : position === 'left-top' && size, size, placement, position === 'left' && margin);
  }
  return Ne(["&::before{", ":100%;clip-path:", ";}&::before,&::after{", "}"], propertyRadius, clipPath, positionCss);
};
function arrowStyles(position) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const size = options.size || '6px';
  const inset = options.inset || '0';
  const squareSize = math(`${size} * 2 / sqrt(2)`, exponentialSymbols);
  return Ne(["position:relative;&::before{border-width:inherit;border-style:inherit;border-color:transparent;background-clip:content-box;}&::after{z-index:-1;border:inherit;box-shadow:inherit;}&::before,&::after{position:absolute;transform:rotate(45deg);background-color:inherit;box-sizing:inherit;width:", ";height:", ";content:'';}", ";", ";"], squareSize, squareSize, positionStyles$1(position, squareSize, inset), options.animationModifier && animationStyles$1(position, options.animationModifier));
}
const useWindow = theme => {
  const [controlledWindow, setControlledWindow] = reactExports.useState();
  reactExports.useEffect(() => {
    if (theme && theme.window) {
      setControlledWindow(theme.window);
    } else {
      setControlledWindow(window);
    }
  }, [theme]);
  return controlledWindow;
};
const useText = function (component, props, name, text) {
  let condition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  const value = condition ? props[name] : undefined;
  return reactExports.useMemo(() => {
    if (condition) {
      if (name === 'children') {
        throw new Error('Error: `children` is not a valid `useText` prop.');
      } else if (value === null || value === '') {
        throw new Error(component.displayName ? `Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.` : `Error: you must provide a valid \`${name}\` text value.`);
      } else if (value === undefined) {
        return text;
      }
    }
    return value;
  }, [component.displayName, value, name, text, condition]);
};
const animationStyles = (position, options) => {
  const theme = options.theme || DEFAULT_THEME;
  let translateValue = `${theme.space.base * 5}px`;
  let transformFunction;
  if (position === 'top') {
    transformFunction = 'translateY';
  } else if (position === 'right') {
    transformFunction = 'translateX';
    translateValue = `-${translateValue}`;
  } else if (position === 'bottom') {
    transformFunction = 'translateY';
    translateValue = `-${translateValue}`;
  } else {
    transformFunction = 'translateX';
  }
  const animationName = $e(["0%{transform:", "(", ");}"], transformFunction, translateValue);
  return Ne(["&", " ", "{animation:0.2s cubic-bezier(0.15,0.85,0.35,1.2) ", ";}"], options.animationModifier, options.childSelector || '> *', animationName);
};
const hiddenStyles$1 = options => {
  const transition = 'opacity 0.2s ease-in-out, 0.2s visibility 0s linear';
  return Ne(["transition:", ";visibility:hidden;opacity:0;"], options.animationModifier && transition);
};
function menuStyles(position) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const theme = options.theme || DEFAULT_THEME;
  let marginProperty;
  if (position === 'top') {
    marginProperty = 'margin-bottom';
  } else if (position === 'right') {
    marginProperty = 'margin-left';
  } else if (position === 'bottom') {
    marginProperty = 'margin-top';
  } else {
    marginProperty = 'margin-right';
  }
  return Ne(["position:absolute;z-index:", ";", ":", ";line-height:0;font-size:0.01px;& ", "{display:inline-block;position:relative;margin:0;box-sizing:border-box;border:", " ", ";border-radius:", ";box-shadow:", ";background-color:", ";cursor:default;padding:0;text-align:", ";white-space:normal;font-size:", ";font-weight:", ";direction:", ";:focus{outline:none;}}", ";", ";"], options.zIndex || 0, marginProperty, options.margin, options.childSelector || '> *', theme.borders.sm, getColor('neutralHue', 300, theme), theme.borderRadii.md, theme.shadows.lg(`${theme.space.base * 5}px`, `${theme.space.base * 7.5}px`, getColor('chromeHue', 600, theme, 0.15)), theme.colors.background, theme.rtl ? 'right' : 'left', theme.fontSizes.md, theme.fontWeights.regular, theme.rtl && 'rtl', options.animationModifier && animationStyles(position, options), options.hidden && hiddenStyles$1(options));
}
const SELECTOR_FOCUS_VISIBLE = '&:focus-visible, &[data-garden-focus-visible="true"]';
const focusStyles = _ref => {
  let {
    condition = true,
    selector = SELECTOR_FOCUS_VISIBLE,
    shadowWidth = 'md',
    spacerWidth = 'xs',
    styles: {
      boxShadow,
      ...styles
    } = {},
    theme,
    ...options
  } = _ref;
  const _boxShadow = condition ? getFocusBoxShadow({
    boxShadow,
    shadowWidth,
    spacerWidth,
    theme,
    ...options
  }) : boxShadow;
  let outline;
  let outlineOffset;
  if (spacerWidth === null) {
    outline = theme.shadowWidths[shadowWidth];
  } else {
    outline = `${math(`${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`)} solid transparent`;
    outlineOffset = theme.shadowWidths[spacerWidth];
  }
  return Ne(["&:focus{outline:none;}", "{outline:", ";outline-offset:", ";box-shadow:", ";", "}"], selector, outline, outlineOffset, _boxShadow, styles);
};

/**
 * generates a UID factory
 * @internal
 * @example
 * const uid = generateUID();
 * uid(object) = 1;
 * uid(object) = 1;
 * uid(anotherObject) = 2;
 */
var generateUID$1 = function () {
  var counter = 1;
  var map = new WeakMap();
  /**
   * @borrows {uid}
   */
  var uid = function (item, index) {
    if (typeof item === 'number' || typeof item === 'string') {
      return index ? "idx-".concat(index) : "val-".concat(item);
    }
    if (!map.has(item)) {
      map.set(item, counter++);
      return uid(item);
    }
    return 'uid' + map.get(item);
  };
  return uid;
};

var createSource = function (prefix) {
  if (prefix === void 0) {
    prefix = '';
  }
  return {
    value: 1,
    prefix: prefix,
    uid: generateUID$1()
  };
};
var counter = createSource();
var source = /*#__PURE__*/reactExports.createContext(createSource());
var getId = function (source) {
  return source.value++;
};
var getPrefix = function (source) {
  return source ? source.prefix : '';
};

var generateUID = function (context) {
  var quartz = context || counter;
  var prefix = getPrefix(quartz);
  var id = getId(quartz);
  var uid = prefix + id;
  var gen = function (item) {
    return uid + quartz.uid(item);
  };
  return {
    uid: uid,
    gen: gen
  };
};
var useUIDState = function () {
  var context = reactExports.useContext(source);
  var uid = reactExports.useState(function () {
    return generateUID(context);
  })[0];
  return uid;
};
/**
 * returns an uid generator
 * @see {@link UIDConsumer}
 * @see https://github.com/thearnica/react-uid#hooks-168
 * @example
 * const uid = useUIDSeed();
 * return (
 *  <>
 *    <label for={seed('email')}>Email: </label>
 *    <input id={seed('email')} name="email" />
 *    {data.map(item => <div key={seed(item)}>...</div>
 *  </>
 * )
 */
var useUIDSeed = function () {
  var gen = useUIDState().gen;
  return gen;
};

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
function useField(idPrefix) {
  const seed = useUIDSeed();
  const prefix = reactExports.useMemo(() => idPrefix || seed(`field_${'2.1.2'}`), [idPrefix, seed]);
  const inputId = `${prefix}--input`;
  const labelId = `${prefix}--label`;
  const hintId = `${prefix}--hint`;
  const messageId = `${prefix}--message`;
  const getLabelProps = function (_temp) {
    let {
      id = labelId,
      htmlFor = inputId,
      ...other
    } = _temp === void 0 ? {} : _temp;
    return {
      id,
      htmlFor,
      'data-garden-container-id': 'containers.field',
      'data-garden-container-version': '2.1.2',
      ...other
    };
  };
  const getInputProps = function (_temp2, _temp3) {
    let {
      id = inputId,
      ...other
    } = _temp2 === void 0 ? {} : _temp2;
    let {
      isDescribed = false,
      hasMessage = false
    } = _temp3 === void 0 ? {} : _temp3;
    return {
      id,
      'aria-labelledby': labelId,
      'aria-describedby': isDescribed || hasMessage ? [].concat(isDescribed ? hintId : [], hasMessage ? messageId : []).join(' ') : null,
      ...other
    };
  };
  const getHintProps = function (_temp4) {
    let {
      id = hintId,
      ...other
    } = _temp4 === void 0 ? {} : _temp4;
    return {
      id,
      ...other
    };
  };
  const getMessageProps = function (_temp5) {
    let {
      id = messageId,
      ...other
    } = _temp5 === void 0 ? {} : _temp5;
    return {
      id,
      ...other
    };
  };
  return {
    getLabelProps,
    getInputProps,
    getHintProps,
    getMessageProps
  };
}
({
  children: PropTypes.func,
  render: PropTypes.func,
  id: PropTypes.string
});

function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var lodash_debounce = debounce$1;

var debounce$2 = /*@__PURE__*/getDefaultExportFromCjs(lodash_debounce);

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(fn => {
      fn && fn(event, ...args);
      return event && event.defaultPrevented;
    });
  };
}
const KEYS = {
  ALT: 'Alt',
  ASTERISK: '*',
  BACKSPACE: 'Backspace',
  COMMA: ',',
  DELETE: 'Delete',
  DOWN: 'ArrowDown',
  END: 'End',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  HOME: 'Home',
  LEFT: 'ArrowLeft',
  NUMPAD_ADD: 'Add',
  NUMPAD_DECIMAL: 'Decimal',
  NUMPAD_DIVIDE: 'Divide',
  NUMPAD_ENTER: 'Enter',
  NUMPAD_MULTIPLY: 'Multiply',
  NUMPAD_SUBTRACT: 'Subtract',
  PAGE_DOWN: 'PageDown',
  PAGE_UP: 'PageUp',
  PERIOD: '.',
  RIGHT: 'ArrowRight',
  SHIFT: 'Shift',
  SPACE: ' ',
  TAB: 'Tab',
  UNIDENTIFIED: 'Unidentified',
  UP: 'ArrowUp'
};
var DocumentPosition;
(function (DocumentPosition) {
  DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
  DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
  DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
  DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
  DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
  DocumentPosition[DocumentPosition["IMPLEMENTATION_SPECIFIC"] = 32] = "IMPLEMENTATION_SPECIFIC";
})(DocumentPosition || (DocumentPosition = {}));
const SLIDER_MIN = 0;
const SLIDER_MAX = 100;
const SLIDER_STEP = 1;
function useSlider(_ref) {
  let {
    trackRef,
    minThumbRef,
    maxThumbRef,
    min = SLIDER_MIN,
    max = SLIDER_MAX,
    defaultMinValue,
    defaultMaxValue,
    minValue,
    maxValue,
    onChange = () => undefined,
    step = SLIDER_STEP,
    jump = step,
    disabled,
    rtl,
    environment
  } = _ref;
  const doc = environment || document;
  const [trackRect, setTrackRect] = reactExports.useState({
    width: 0
  });
  const init = function (initMinValue, initMaxValue) {
    if (initMinValue === void 0) {
      initMinValue = min;
    }
    if (initMaxValue === void 0) {
      initMaxValue = max;
    }
    const retVal = {
      minValue: initMinValue < min ? min : initMinValue,
      maxValue: initMaxValue > max ? max : initMaxValue
    };
    if (retVal.maxValue < min) {
      retVal.maxValue = min;
    }
    if (retVal.minValue > retVal.maxValue) {
      retVal.minValue = retVal.maxValue;
    }
    return retVal;
  };
  const [state, setState] = reactExports.useState(init(defaultMinValue, defaultMaxValue));
  const isControlled = minValue !== undefined && minValue !== null || maxValue !== undefined && maxValue !== null;
  const position = isControlled ? init(minValue, maxValue) : state;
  const setPosition = isControlled ? onChange : setState;
  reactExports.useEffect(() => {
    const handleResize = debounce$2(() => {
      if (trackRef.current) {
        setTrackRect(trackRef.current.getBoundingClientRect());
      }
    }, 100);
    handleResize();
    const win = doc.defaultView || window;
    win.addEventListener('resize', handleResize);
    return () => {
      win.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, [doc, trackRef]);
  const getTrackPosition = reactExports.useCallback(event => {
    let retVal = undefined;
    if (trackRect) {
      const offset = rtl ? trackRect.left + trackRect.width : trackRect.left;
      const mouseX = (event.pageX - offset) * (rtl ? -1 : 1);
      const x = (max - min) * mouseX / trackRect.width;
      const value = min + parseInt(x, 10);
      retVal = Math.floor(value / step) * step;
    }
    return retVal;
  }, [max, min, trackRect, rtl, step]);
  const setThumbPosition = reactExports.useCallback(thumb => value => {
    if (!disabled) {
      let newMinValue = position.minValue;
      let newMaxValue = position.maxValue;
      if (thumb === 'min') {
        if (value < min) {
          newMinValue = min;
        } else if (value > position.maxValue) {
          newMinValue = position.maxValue;
        } else {
          newMinValue = value;
        }
      } else if (thumb === 'max') {
        if (value > max) {
          newMaxValue = max;
        } else if (value < position.minValue) {
          newMaxValue = position.minValue;
        } else {
          newMaxValue = value;
        }
      }
      if (!isNaN(newMinValue) && !isNaN(newMaxValue)) {
        setPosition({
          minValue: newMinValue,
          maxValue: newMaxValue
        });
      }
    }
  }, [disabled, max, min, position.maxValue, position.minValue, setPosition]);
  const getTrackProps = reactExports.useCallback(function (_temp) {
    let {
      onMouseDown,
      ...other
    } = _temp === void 0 ? {} : _temp;
    const handleMouseDown = event => {
      if (!disabled && event.button === 0) {
        const value = getTrackPosition(event);
        if (value !== undefined) {
          const minOffset = Math.abs(position.minValue - value);
          const maxOffset = Math.abs(position.maxValue - value);
          if (minOffset <= maxOffset) {
            minThumbRef.current && minThumbRef.current.focus();
            setThumbPosition('min')(value);
          } else {
            maxThumbRef.current && maxThumbRef.current.focus();
            setThumbPosition('max')(value);
          }
        }
      }
    };
    return {
      'data-garden-container-id': 'containers.slider.track',
      'data-garden-container-version': '0.1.6',
      'aria-disabled': disabled,
      onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
      ...other
    };
  }, [disabled, getTrackPosition, maxThumbRef, minThumbRef, position.maxValue, position.minValue, setThumbPosition]);
  const getThumbProps = reactExports.useCallback(thumb => _ref2 => {
    let {
      onKeyDown,
      onMouseDown,
      onTouchStart,
      ...other
    } = _ref2;
    const handleKeyDown = event => {
      if (!disabled) {
        let value;
        switch (event.key) {
          case KEYS.RIGHT:
            value = (thumb === 'min' ? position.minValue : position.maxValue) + (rtl ? -step : step);
            break;
          case KEYS.UP:
            value = (thumb === 'min' ? position.minValue : position.maxValue) + step;
            break;
          case KEYS.LEFT:
            value = (thumb === 'min' ? position.minValue : position.maxValue) - (rtl ? -step : step);
            break;
          case KEYS.DOWN:
            value = (thumb === 'min' ? position.minValue : position.maxValue) - step;
            break;
          case KEYS.PAGE_UP:
            value = (thumb === 'min' ? position.minValue : position.maxValue) + jump;
            break;
          case KEYS.PAGE_DOWN:
            value = (thumb === 'min' ? position.minValue : position.maxValue) - jump;
            break;
          case KEYS.HOME:
            value = min;
            break;
          case KEYS.END:
            value = max;
            break;
        }
        if (value !== undefined) {
          event.preventDefault();
          event.stopPropagation();
          setThumbPosition(thumb)(value);
        }
      }
    };
    const handleMouseMove = event => {
      const value = getTrackPosition(event);
      if (value !== undefined) {
        setThumbPosition(thumb)(value);
      }
    };
    const handleTouchMove = event => {
      const value = getTrackPosition(event.targetTouches[0]);
      if (value !== undefined) {
        setThumbPosition(thumb)(value);
      }
    };
    const handleMouseUp = () => {
      doc.removeEventListener('mousemove', handleMouseMove);
      doc.removeEventListener('mouseup', handleMouseUp);
    };
    const handleTouchEnd = () => {
      doc.removeEventListener('touchend', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
    };
    const handleMouseDown = event => {
      if (!disabled && event.button === 0) {
        event.stopPropagation();
        doc.addEventListener('mousemove', handleMouseMove);
        doc.addEventListener('mouseup', handleMouseUp);
        event.target && event.target.focus();
      }
    };
    const handleTouchStart = event => {
      if (!disabled) {
        event.stopPropagation();
        doc.addEventListener('touchmove', handleTouchMove);
        doc.addEventListener('touchend', handleTouchEnd);
        event.target && event.target.focus();
      }
    };
    return {
      'data-garden-container-id': 'containers.slider.thumb',
      'data-garden-container-version': '0.1.6',
      role: 'slider',
      tabIndex: disabled ? -1 : 0,
      'aria-valuemin': thumb === 'min' ? min : position.minValue,
      'aria-valuemax': thumb === 'min' ? position.maxValue : max,
      'aria-valuenow': thumb === 'min' ? position.minValue : position.maxValue,
      onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
      onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
      onTouchStart: composeEventHandlers(onTouchStart, handleTouchStart),
      ...other
    };
  }, [doc, disabled, getTrackPosition, jump, max, min, position.maxValue, position.minValue, rtl, step, setThumbPosition]);
  return reactExports.useMemo(() => ({
    getTrackProps,
    getMinThumbProps: getThumbProps('min'),
    getMaxThumbProps: getThumbProps('max'),
    trackRect,
    minValue: position.minValue,
    maxValue: position.maxValue
  }), [getTrackProps, getThumbProps, position.minValue, position.maxValue, trackRect]);
}
({
  children: PropTypes.func,
  render: PropTypes.func,
  trackRef: PropTypes.any.isRequired,
  minThumbRef: PropTypes.any.isRequired,
  maxThumbRef: PropTypes.any.isRequired,
  environment: PropTypes.any,
  defaultMinValue: PropTypes.number,
  defaultMaxValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  jump: PropTypes.number,
  disabled: PropTypes.bool,
  rtl: PropTypes.bool
});

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
function _extends$t() {
  _extends$t = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$t.apply(this, arguments);
}
const FieldContext$1 = /*#__PURE__*/reactExports.createContext(undefined);
const useFieldContext$1 = () => {
  const fieldContext = reactExports.useContext(FieldContext$1);
  return fieldContext;
};
const COMPONENT_ID$K = 'forms.field';
const StyledField$1 = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$K,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledField",
  componentId: "sc-12gzfsu-0"
})(["position:relative;direction:", ";margin:0;border:0;padding:0;font-size:0;", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', props => retrieveComponentStyles(COMPONENT_ID$K, props));
StyledField$1.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$J = 'forms.fieldset';
const StyledFieldset = styled(StyledField$1).attrs({
  as: 'fieldset',
  'data-garden-id': COMPONENT_ID$J,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledFieldset",
  componentId: "sc-1vr4mxv-0"
})(["", "{margin-top:", "px;}", ";"], StyledField$1, props => props.theme.space.base * (props.isCompact ? 1 : 2), props => retrieveComponentStyles(COMPONENT_ID$J, props));
StyledFieldset.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$I = 'forms.input_label';
const StyledLabel$1 = styled.label.attrs({
  'data-garden-id': COMPONENT_ID$I,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-2utmsz-0"
})(["direction:", ";vertical-align:middle;line-height:", ";color:", ";font-size:", ";font-weight:", ";&[hidden]{display:", ";vertical-align:", ";text-indent:", ";font-size:", ";", ";}", ";"], props => props.theme.rtl && 'rtl', props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => props.theme.colors.foreground, props => props.theme.fontSizes.md, props => props.isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold, props => props.isRadio ? 'inline-block' : 'inline', props => props.isRadio && 'top', props => props.isRadio && '-100%', props => props.isRadio && '0', props => !props.isRadio && hideVisually(), props => retrieveComponentStyles(COMPONENT_ID$I, props));
StyledLabel$1.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$H = 'forms.fieldset_legend';
const StyledLegend = styled(StyledLabel$1).attrs({
  as: 'legend',
  'data-garden-id': COMPONENT_ID$H,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledLegend",
  componentId: "sc-6s0zwq-0"
})(["padding:0;", ";"], props => retrieveComponentStyles(COMPONENT_ID$H, props));
StyledLegend.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$G = 'forms.input_hint';
const StyledHint$1 = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$G,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledHint",
  componentId: "sc-17c2wu8-0"
})(["direction:", ";display:block;vertical-align:middle;line-height:", ";color:", ";font-size:", ";", ";"], props => props.theme.rtl && 'rtl', props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => getColor('neutralHue', 600, props.theme), props => props.theme.fontSizes.md, props => retrieveComponentStyles(COMPONENT_ID$G, props));
StyledHint$1.defaultProps = {
  theme: DEFAULT_THEME
};
var _g$2, _circle$5;
function _extends$s() {
  _extends$s = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$s.apply(this, arguments);
}
var SvgAlertErrorStroke = function SvgAlertErrorStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$s({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _g$2 || (_g$2 = /*#__PURE__*/reactExports.createElement("g", {
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/reactExports.createElement("circle", {
    cx: 7.5,
    cy: 8.5,
    r: 7
  }), /*#__PURE__*/reactExports.createElement("path", {
    strokeLinecap: "round",
    d: "M7.5 4.5V9"
  }))), _circle$5 || (_circle$5 = /*#__PURE__*/reactExports.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    fill: "currentColor"
  })));
};
var _path$n, _circle$4;
function _extends$r() {
  _extends$r = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$r.apply(this, arguments);
}
var SvgAlertWarningStroke = function SvgAlertWarningStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$r({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$n || (_path$n = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5"
  })), _circle$4 || (_circle$4 = /*#__PURE__*/reactExports.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    fill: "currentColor"
  })));
};
var _g$1;
function _extends$q() {
  _extends$q = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$q.apply(this, arguments);
}
var SvgCheckCircleStroke$1 = function SvgCheckCircleStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$q({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/reactExports.createElement("g", {
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 9l2.5 2.5 5-5"
  }), /*#__PURE__*/reactExports.createElement("circle", {
    cx: 7.5,
    cy: 8.5,
    r: 7
  }))));
};
const MessageIcon = _ref => {
  let {
    children,
    validation,
    ...props
  } = _ref;
  let retVal;
  if (validation === 'error') {
    retVal = /*#__PURE__*/React.createElement(SvgAlertErrorStroke, props);
  } else if (validation === 'success') {
    retVal = /*#__PURE__*/React.createElement(SvgCheckCircleStroke$1, props);
  } else if (validation === 'warning') {
    retVal = /*#__PURE__*/React.createElement(SvgAlertWarningStroke, props);
  } else {
    retVal = /*#__PURE__*/React.cloneElement(reactExports.Children.only(children));
  }
  return retVal;
};
const COMPONENT_ID$F = 'forms.input_message_icon';
const StyledMessageIcon = styled(MessageIcon).attrs({
  'data-garden-id': COMPONENT_ID$F,
  'data-garden-version': '8.69.1',
  'aria-hidden': null
}).withConfig({
  displayName: "StyledMessageIcon",
  componentId: "sc-1ph2gba-0"
})(["width:", ";height:", ";", ";"], props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, props => retrieveComponentStyles(COMPONENT_ID$F, props));
StyledMessageIcon.defaultProps = {
  theme: DEFAULT_THEME
};
const validationStyles = props => {
  const rtl = props.theme.rtl;
  const padding = math(`${props.theme.space.base} * 2px + ${props.theme.iconSizes.md}`);
  let color;
  if (props.validation === 'error') {
    color = getColor('dangerHue', 600, props.theme);
  } else if (props.validation === 'success') {
    color = getColor('successHue', 600, props.theme);
  } else if (props.validation === 'warning') {
    color = getColor('warningHue', 700, props.theme);
  } else {
    color = getColor('neutralHue', 700, props.theme);
  }
  return Ne(["padding-", ":", ";color:", ";"], rtl ? 'right' : 'left', props.validation && padding, color);
};
const COMPONENT_ID$E = 'forms.input_message';
const StyledMessage$1 = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$E,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledMessage",
  componentId: "sc-30hgg7-0"
})(["direction:", ";display:inline-block;position:relative;vertical-align:middle;line-height:", ";font-size:", ";", ";& ", "{position:absolute;top:-1px;", ":0;}", ":not([hidden]) + &{display:block;margin-top:", ";}", ";"], props => props.theme.rtl && 'rtl', props => getLineHeight(props.theme.iconSizes.md, props.theme.fontSizes.sm), props => props.theme.fontSizes.sm, props => validationStyles(props), StyledMessageIcon, props => props.theme.rtl ? 'right' : 'left', StyledLabel$1, props => math(`${props.theme.space.base} * 1px`), props => retrieveComponentStyles(COMPONENT_ID$E, props));
StyledMessage$1.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$D = 'forms.input';
const isInvalid = validation => {
  return validation === 'warning' || validation === 'error';
};
const colorStyles$c = props => {
  const HUE = 'primaryHue';
  const SHADE = 600;
  const placeholderColor = getColor('neutralHue', SHADE - 200, props.theme);
  let borderColor;
  let hoverBorderColor;
  let focusBorderColor;
  let focusRingHue = HUE;
  let focusRingShade = SHADE;
  if (props.validation) {
    let hue = HUE;
    if (props.validation === 'success') {
      hue = 'successHue';
    } else if (props.validation === 'warning') {
      hue = 'warningHue';
      focusRingShade = 700;
    } else if (props.validation === 'error') {
      hue = 'dangerHue';
    }
    borderColor = getColor(hue, SHADE, props.theme);
    hoverBorderColor = borderColor;
    focusBorderColor = borderColor;
    focusRingHue = hue;
  } else {
    borderColor = getColor('neutralHue', SHADE - 300, props.theme);
    hoverBorderColor = getColor('primaryHue', SHADE, props.theme);
    focusBorderColor = hoverBorderColor;
  }
  const readOnlyBackgroundColor = getColor('neutralHue', SHADE - 500, props.theme);
  const readOnlyBorderColor = getColor('neutralHue', SHADE - 300, props.theme);
  const disabledBackgroundColor = readOnlyBackgroundColor;
  const disabledBorderColor = getColor('neutralHue', SHADE - 400, props.theme);
  const disabledForegroundColor = getColor('neutralHue', SHADE - 200, props.theme);
  let controlledBorderColor = borderColor;
  if (props.isFocused) {
    controlledBorderColor = focusBorderColor;
  }
  if (props.isHovered) {
    controlledBorderColor = hoverBorderColor;
  }
  return Ne(["border-color:", ";background-color:", ";color:", ";&::placeholder{color:", ";}&[readonly],&[aria-readonly='true']{border-color:", ";background-color:", ";}&:hover{border-color:", ";}", " &:disabled,&[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], controlledBorderColor, props.isBare ? 'transparent' : props.theme.colors.background, props.theme.colors.foreground, placeholderColor, readOnlyBorderColor, !props.isBare && readOnlyBackgroundColor, hoverBorderColor, focusStyles({
    theme: props.theme,
    inset: props.focusInset,
    condition: !props.isBare,
    hue: focusRingHue,
    shade: focusRingShade,
    styles: {
      borderColor: focusBorderColor
    }
  }), disabledBorderColor, !props.isBare && disabledBackgroundColor, disabledForegroundColor);
};
const sizeStyles$f = props => {
  const fontSize = props.theme.fontSizes.md;
  const paddingHorizontal = `${props.theme.space.base * 3}px`;
  let height;
  let paddingVertical;
  let browseFontSize;
  let swatchHeight;
  if (props.isCompact) {
    height = `${props.theme.space.base * 8}px`;
    paddingVertical = `${props.theme.space.base * 1.5}px`;
    browseFontSize = math(`${props.theme.fontSizes.sm} - 1`);
    swatchHeight = `${props.theme.space.base * 6}px`;
  } else {
    height = `${props.theme.space.base * 10}px`;
    paddingVertical = `${props.theme.space.base * 2.5}px`;
    browseFontSize = props.theme.fontSizes.sm;
    swatchHeight = `${props.theme.space.base * 7}px`;
  }
  const lineHeight = math(`${height} - (${paddingVertical} * 2) - (${props.theme.borderWidths.sm} * 2)`);
  const padding = props.isBare ? '0' : `${em$1(paddingVertical, fontSize)} ${em$1(paddingHorizontal, fontSize)}`;
  const swatchMarginVertical = math(`(${lineHeight} - ${swatchHeight}) / 2`);
  const swatchMarginHorizontal = math(`${paddingVertical} + ${swatchMarginVertical} - ${paddingHorizontal}`);
  return Ne(["padding:", ";min-height:", ";line-height:", ";font-size:", ";&::-ms-browse{font-size:", ";}&[type='date'],&[type='datetime-local'],&[type='file'],&[type='month'],&[type='time'],&[type='week']{max-height:", ";}&[type='file']{line-height:1;}@supports (-ms-ime-align:auto){&[type='color']{padding:", ";}}&::-moz-color-swatch{margin-top:", ";margin-left:", ";width:calc(100% + ", ");height:", ";}&::-webkit-color-swatch{margin:", " ", ";}", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", "px;}"], padding, props.isBare ? '1em' : height, getLineHeight(lineHeight, fontSize), fontSize, browseFontSize, height, props.isCompact ? '0 2px' : '1px 3px', swatchMarginVertical, swatchMarginHorizontal, math(`${swatchMarginHorizontal} * -2`), swatchHeight, swatchMarginVertical, swatchMarginHorizontal, StyledLabel$1, StyledHint$1, StyledMessage$1, StyledHint$1, StyledMessage$1, props.theme.space.base * (props.isCompact ? 1 : 2));
};
const StyledTextInput = styled.input.attrs(props => ({
  'data-garden-id': COMPONENT_ID$D,
  'data-garden-version': '8.69.1',
  'aria-invalid': isInvalid(props.validation)
})).withConfig({
  displayName: "StyledTextInput",
  componentId: "sc-k12n8x-0"
})(["appearance:none;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;direction:", ";border:", ";border-radius:", ";width:100%;box-sizing:border-box;vertical-align:middle;font-family:inherit;&::-ms-browse{border-radius:", ";}&::-ms-clear,&::-ms-reveal{display:none;}&::-moz-color-swatch{border:none;border-radius:", ";}&::-webkit-color-swatch{border:none;border-radius:", ";}&::-webkit-color-swatch-wrapper{padding:0;}&::-webkit-clear-button,&::-webkit-inner-spin-button,&::-webkit-search-cancel-button,&::-webkit-search-results-button{display:none;}&::-webkit-datetime-edit{direction:", ";line-height:1;}&::placeholder{opacity:1;}&:invalid{box-shadow:none;}&[type='file']::-ms-value{display:none;}@media screen and (min--moz-device-pixel-ratio:0){&[type='number']{appearance:textfield;}}", ";", ";&:disabled{cursor:default;}", ";"], props => props.theme.rtl && 'rtl', props => props.isBare ? 'none' : props.theme.borders.sm, props => props.isBare ? '0' : props.theme.borderRadii.md, props => props.theme.borderRadii.sm, props => props.theme.borderRadii.sm, props => props.theme.borderRadii.sm, props => props.theme.rtl && 'rtl', props => sizeStyles$f(props), props => colorStyles$c(props), props => retrieveComponentStyles(COMPONENT_ID$D, props));
StyledTextInput.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$C = 'forms.textarea';
const hiddenStyles = `
  visibility: hidden;
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 0;
  left: 0;
  transform: translateZ(0);
`;
const StyledTextarea = styled(StyledTextInput).attrs({
  as: 'textarea',
  'data-garden-id': COMPONENT_ID$C,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTextarea",
  componentId: "sc-wxschl-0"
})(["resize:", ";overflow:auto;", ";", ";"], props => props.isResizable ? 'vertical' : 'none', props => props.isHidden && hiddenStyles, props => retrieveComponentStyles(COMPONENT_ID$C, props));
StyledTextarea.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$B = 'forms.media_figure';
const colorStyles$b = props => {
  let shade = 600;
  if (props.isDisabled) {
    shade = 400;
  } else if (props.isHovered || props.isFocused) {
    shade = 700;
  }
  return Ne(["color:", ";"], getColor('neutralHue', shade, props.theme));
};
const sizeStyles$e = props => {
  const size = props.theme.iconSizes.md;
  const marginFirst = `1px ${props.theme.space.base * 2}px auto 0`;
  const marginLast = `1px 0 auto ${props.theme.space.base * 2}px`;
  let margin;
  if (props.position === 'start') {
    margin = props.theme.rtl ? marginLast : marginFirst;
  } else {
    margin = props.theme.rtl ? marginFirst : marginLast;
  }
  return Ne(["margin:", ";width:", ";height:", ";"], margin, size, size);
};
const StyledTextMediaFigure = styled(_ref => {
  let {
    children,
    position,
    isHovered,
    isFocused,
    isDisabled,
    isRotated,
    theme,
    ...props
  } = _ref;
  return /*#__PURE__*/React.cloneElement(reactExports.Children.only(children), props);
}).attrs({
  'data-garden-id': COMPONENT_ID$B,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTextMediaFigure",
  componentId: "sc-1qepknj-0"
})(["transform:", ";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;", ";", " ", ";"], props => props.isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, props => colorStyles$b(props), props => sizeStyles$e(props), props => retrieveComponentStyles(COMPONENT_ID$B, props));
StyledTextMediaFigure.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$A = 'forms.faux_input';
const VALIDATION_HUES = {
  success: 'successHue',
  warning: 'warningHue',
  error: 'dangerHue'
};
function getValidationHue(validation) {
  let defaultHue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'primaryHue';
  if (validation) {
    return VALIDATION_HUES[validation];
  }
  return defaultHue;
}
const colorStyles$a$1 = props => {
  const {
    theme,
    validation,
    focusInset,
    isBare,
    isFocused
  } = props;
  return Ne(["", ""], focusStyles({
    theme,
    inset: focusInset,
    condition: !isBare,
    hue: getValidationHue(validation),
    shade: validation === 'warning' ? 700 : 600,
    selector: isFocused ? '&' : '&:focus-within',
    styles: {
      borderColor: getColor(getValidationHue(validation), 600, theme)
    }
  }));
};
const StyledTextFauxInput = styled(StyledTextInput).attrs(props => ({
  as: 'div',
  'aria-readonly': props.isReadOnly,
  'aria-disabled': props.isDisabled,
  'data-garden-id': COMPONENT_ID$A,
  'data-garden-version': '8.69.1'
})).withConfig({
  displayName: "StyledTextFauxInput",
  componentId: "sc-yqw7j9-0"
})(["display:", ";align-items:", ";cursor:", ";overflow:hidden;", " & > ", "{vertical-align:", ";", "{box-shadow:unset;}}& > ", "{flex-shrink:", ";}", ";"], props => props.mediaLayout ? 'inline-flex' : 'inline-block', props => props.mediaLayout && 'baseline', props => props.mediaLayout && !props.isDisabled ? 'text' : 'default', colorStyles$a$1, StyledTextInput, props => !props.mediaLayout && 'baseline', SELECTOR_FOCUS_VISIBLE, StyledTextMediaFigure, props => props.mediaLayout && '0', props => retrieveComponentStyles(COMPONENT_ID$A, props));
StyledTextFauxInput.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$z = 'forms.media_input';
const StyledTextMediaInput = styled(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID$z,
  'data-garden-version': '8.69.1',
  isBare: true
}).withConfig({
  displayName: "StyledTextMediaInput",
  componentId: "sc-12i9xfi-0"
})(["flex-grow:1;", ";"], props => retrieveComponentStyles(COMPONENT_ID$z, props));
StyledTextMediaInput.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$y = 'forms.input_group';
const positionStyles = props => {
  const topMargin = `${props.theme.space.base * (props.isCompact ? 1 : 2)}px`;
  return Ne(["", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", ";}& > ", "{position:relative;flex:1 1 auto;margin-top:0;margin-bottom:0;width:auto;min-width:0;}"], StyledLabel$1, StyledHint$1, StyledMessage$1, StyledHint$1, StyledMessage$1, topMargin, StyledTextInput);
};
const itemStyles = props => {
  const startDirection = props.theme.rtl ? 'right' : 'left';
  const endDirection = props.theme.rtl ? 'left' : 'right';
  return Ne(["& > *{z-index:-1;}& > ", "{z-index:0;}& > ", ":disabled{z-index:-2;}& > ", ":hover,& > button:hover,& > ", ":focus-visible,& > button:focus-visible,& > ", "[data-garden-focus-visible],& > button[data-garden-focus-visible],& > ", ":active,& > button:active{z-index:1;}& > button:disabled{border-top-width:0;border-bottom-width:0;}& > *:not(:first-child){margin-", ":-", ";}& > *:first-child:not(:last-child){border-top-", "-radius:0;border-bottom-", "-radius:0;}& > *:last-child:not(:first-child){border-top-", "-radius:0;border-bottom-", "-radius:0;}& > *:not(:first-child):not(:last-child){border-radius:0;}"], StyledTextInput, StyledTextInput, StyledTextInput, StyledTextInput, StyledTextInput, StyledTextInput, startDirection, props.theme.borderWidths.sm, endDirection, endDirection, startDirection, startDirection);
};
const StyledInputGroup$1 = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$y,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledInputGroup",
  componentId: "sc-kjh1f0-0"
})(["display:inline-flex;position:relative;flex-wrap:nowrap;align-items:stretch;z-index:0;width:100%;", ";", ";", ";"], props => positionStyles(props), props => itemStyles(props), props => retrieveComponentStyles(COMPONENT_ID$y, props));
StyledInputGroup$1.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$x = 'forms.radio_label';
const sizeStyles$d = props => {
  const size = props.theme.space.base * 4;
  const padding = size + props.theme.space.base * 2;
  const lineHeight = props.theme.space.base * 5;
  return Ne(["padding-", ":", "px;&[hidden]{padding-", ":", "px;line-height:", "px;}"], props.theme.rtl ? 'right' : 'left', padding, props.theme.rtl ? 'right' : 'left', size, lineHeight);
};
const StyledRadioLabel = styled(StyledLabel$1).attrs({
  'data-garden-id': COMPONENT_ID$x,
  'data-garden-version': '8.69.1',
  isRadio: true
}).withConfig({
  displayName: "StyledRadioLabel",
  componentId: "sc-1aq2e5t-0"
})(["display:inline-block;position:relative;cursor:pointer;", ";", ";"], props => sizeStyles$d(props), props => retrieveComponentStyles(COMPONENT_ID$x, props));
StyledRadioLabel.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$w = 'forms.checkbox_label';
const StyledCheckLabel = styled(StyledRadioLabel).attrs({
  'data-garden-id': COMPONENT_ID$w,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledCheckLabel",
  componentId: "sc-x7nr1-0"
})(["", ";"], props => retrieveComponentStyles(COMPONENT_ID$w, props));
StyledCheckLabel.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$v = 'forms.radio_hint';
const StyledRadioHint = styled(StyledHint$1).attrs({
  'data-garden-id': COMPONENT_ID$v,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledRadioHint",
  componentId: "sc-eo8twg-0"
})(["padding-", ":", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 6px`), props => retrieveComponentStyles(COMPONENT_ID$v, props));
StyledRadioHint.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$u = 'forms.checkbox_hint';
const StyledCheckHint = styled(StyledRadioHint).attrs({
  'data-garden-id': COMPONENT_ID$u,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledCheckHint",
  componentId: "sc-1kl8e8c-0"
})(["", ";"], props => retrieveComponentStyles(COMPONENT_ID$u, props));
StyledCheckHint.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$t = 'forms.radio';
const colorStyles$9$1 = props => {
  const SHADE = 600;
  const borderColor = getColor('neutralHue', SHADE - 300, props.theme);
  const backgroundColor = props.theme.colors.background;
  const iconColor = backgroundColor;
  const hoverBackgroundColor = getColor('primaryHue', SHADE, props.theme, 0.08);
  const hoverBorderColor = getColor('primaryHue', SHADE, props.theme);
  const focusBorderColor = hoverBorderColor;
  const activeBackgroundColor = getColor('primaryHue', SHADE, props.theme, 0.2);
  const activeBorderColor = focusBorderColor;
  const checkedBorderColor = focusBorderColor;
  const checkedBackgroundColor = checkedBorderColor;
  const checkedHoverBorderColor = getColor('primaryHue', SHADE + 100, props.theme);
  const checkedHoverBackgroundColor = checkedHoverBorderColor;
  const checkedActiveBorderColor = getColor('primaryHue', SHADE + 200, props.theme);
  const checkedActiveBackgroundColor = checkedActiveBorderColor;
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 400, props.theme);
  return Ne(["& ~ ", "::before{border-color:", ";background-color:", ";}& ~ ", " > svg{color:", ";}& ~ ", ":hover::before{border-color:", ";background-color:", ";}", " & ~ ", ":active::before{border-color:", ";background-color:", ";}&:checked ~ ", "::before{border-color:", ";background-color:", ";}&:enabled:checked ~ ", ":hover::before{border-color:", ";background-color:", ";}&:enabled:checked ~ ", ":active::before{border-color:", ";background-color:", ";}&:disabled ~ ", "::before{border-color:transparent;background-color:", ";}"], StyledRadioLabel, borderColor, backgroundColor, StyledRadioLabel, iconColor, StyledRadioLabel, hoverBorderColor, hoverBackgroundColor, focusStyles({
    theme: props.theme,
    styles: {
      borderColor: focusBorderColor
    },
    selector: `&:focus-visible ~ ${StyledRadioLabel}::before, &[data-garden-focus-visible='true'] ~ ${StyledRadioLabel}::before`
  }), StyledRadioLabel, activeBorderColor, activeBackgroundColor, StyledRadioLabel, checkedBorderColor, checkedBackgroundColor, StyledRadioLabel, checkedHoverBorderColor, checkedHoverBackgroundColor, StyledRadioLabel, checkedActiveBorderColor, checkedActiveBackgroundColor, StyledRadioLabel, disabledBackgroundColor);
};
const sizeStyles$c$1 = props => {
  const lineHeight = `${props.theme.space.base * 5}px`;
  const size = `${props.theme.space.base * 4}px`;
  const top = math(`(${lineHeight} - ${size}) / 2`);
  const iconSize = props.theme.iconSizes.sm;
  const iconPosition = math(`(${size} - ${iconSize}) / 2`);
  const iconTop = math(`${iconPosition} + ${top}`);
  const marginTop = `${props.theme.space.base * (props.isCompact ? 1 : 2)}px`;
  return Ne(["top:", ";width:", ";height:", ";& ~ ", "::before{top:", ";background-size:", ";width:", ";height:", ";box-sizing:border-box;}& ~ ", " > svg{top:", ";", ":", ";width:", ";height:", ";}&& ~ ", " ~ ", "{margin-top:", ";}"], top, size, size, StyledRadioLabel, top, props.theme.iconSizes.sm, size, size, StyledRadioLabel, iconTop, props.theme.rtl ? 'right' : 'left', iconPosition, iconSize, iconSize, StyledRadioLabel, StyledMessage$1, marginTop);
};
const StyledRadioInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID$t,
  'data-garden-version': '8.69.1',
  type: 'radio'
}).withConfig({
  displayName: "StyledRadioInput",
  componentId: "sc-qsavpv-0"
})(["position:absolute;opacity:0;margin:0;& ~ ", "::before{position:absolute;", ":0;transition:border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;border:", ";border-radius:50%;background-repeat:no-repeat;background-position:center;content:'';}& ~ ", " > svg{position:absolute;}", ";&:focus ~ ", "::before{outline:none;}& ~ ", ":active::before{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,color 0.1s ease-in-out;}", ";&:disabled ~ ", "{cursor:default;}", ";"], StyledRadioLabel, props => props.theme.rtl ? 'right' : 'left', props => props.theme.borders.sm, StyledRadioLabel, props => sizeStyles$c$1(props), StyledRadioLabel, StyledRadioLabel, props => colorStyles$9$1(props), StyledRadioLabel, props => retrieveComponentStyles(COMPONENT_ID$t, props));
StyledRadioInput.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$s = 'forms.checkbox';
const colorStyles$8$1 = props => {
  const SHADE = 600;
  const indeterminateBorderColor = getColor('primaryHue', SHADE, props.theme);
  const indeterminateBackgroundColor = indeterminateBorderColor;
  const indeterminateActiveBorderColor = getColor('primaryHue', SHADE + 100, props.theme);
  const indeterminateActiveBackgroundColor = indeterminateActiveBorderColor;
  const indeterminateDisabledBackgroundColor = getColor('neutralHue', SHADE - 400, props.theme);
  return Ne(["&:indeterminate ~ ", "::before{border-color:", ";background-color:", ";}&:enabled:indeterminate ~ ", ":active::before{border-color:", ";background-color:", ";}&:disabled:indeterminate ~ ", "::before{border-color:transparent;background-color:", ";}"], StyledCheckLabel, indeterminateBorderColor, indeterminateBackgroundColor, StyledCheckLabel, indeterminateActiveBorderColor, indeterminateActiveBackgroundColor, StyledCheckLabel, indeterminateDisabledBackgroundColor);
};
const StyledCheckInput = styled(StyledRadioInput).attrs({
  'data-garden-id': COMPONENT_ID$s,
  'data-garden-version': '8.69.1',
  type: 'checkbox'
}).withConfig({
  displayName: "StyledCheckInput",
  componentId: "sc-176jxxe-0"
})(["& ~ ", "::before{border-radius:", ";}", ";", ";"], StyledCheckLabel, props => props.theme.borderRadii.md, props => colorStyles$8$1(props), props => retrieveComponentStyles(COMPONENT_ID$s, props));
StyledCheckInput.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$r = 'forms.radio_message';
const StyledRadioMessage = styled(StyledMessage$1).attrs({
  'data-garden-id': COMPONENT_ID$r,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledRadioMessage",
  componentId: "sc-1pmi0q8-0"
})(["padding-", ":", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 6px`), props => retrieveComponentStyles(COMPONENT_ID$r, props));
StyledRadioMessage.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$q = 'forms.checkbox_message';
const StyledCheckMessage = styled(StyledRadioMessage).attrs({
  'data-garden-id': COMPONENT_ID$q,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledCheckMessage",
  componentId: "sc-s4p6kd-0"
})(["", ";"], props => retrieveComponentStyles(COMPONENT_ID$q, props));
StyledCheckMessage.defaultProps = {
  theme: DEFAULT_THEME
};
var _path$m;
function _extends$p() {
  _extends$p = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$p.apply(this, arguments);
}
var SvgCheckSmFill = function SvgCheckSmFill(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$p({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$m || (_path$m = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 6l2 2 4-4"
  })));
};
const COMPONENT_ID$p = 'forms.check_svg';
const StyledCheckSvg = styled(SvgCheckSmFill).attrs({
  'data-garden-id': COMPONENT_ID$p,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledCheckSvg",
  componentId: "sc-fvxetk-0"
})(["transition:opacity 0.25 ease-in-out;opacity:0;pointer-events:none;", ":checked ~ ", " > &{opacity:1;}", ":indeterminate ~ ", " > &{opacity:0;}", ";"], StyledCheckInput, StyledCheckLabel, StyledCheckInput, StyledCheckLabel, props => retrieveComponentStyles(COMPONENT_ID$p, props));
StyledCheckSvg.defaultProps = {
  theme: DEFAULT_THEME
};
var _path$l;
function _extends$o() {
  _extends$o = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$o.apply(this, arguments);
}
var SvgDashFill = function SvgDashFill(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$o({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$l || (_path$l = /*#__PURE__*/reactExports.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M3 6h6"
  })));
};
const COMPONENT_ID$o = 'forms.dash_svg';
const StyledDashSvg = styled(SvgDashFill).attrs({
  'data-garden-id': COMPONENT_ID$o,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledDashSvg",
  componentId: "sc-z3vq71-0"
})(["transition:opacity 0.25 ease-in-out;opacity:0;pointer-events:none;", ":indeterminate ~ ", " > &{opacity:1;}", ";"], StyledCheckInput, StyledCheckLabel, props => retrieveComponentStyles(COMPONENT_ID$o, props));
StyledDashSvg.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$n$1 = 'forms.file_upload';
const colorStyles$7$1 = props => {
  const baseColor = getColor('primaryHue', 600, props.theme);
  const hoverColor = getColor('primaryHue', 700, props.theme);
  const activeColor = getColor('primaryHue', 800, props.theme);
  const disabledBackgroundColor = getColor('neutralHue', 200, props.theme);
  const disabledForegroundColor = getColor('neutralHue', 400, props.theme);
  return Ne(["border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";color:", ";}", " &:active{border-color:", ";background-color:", ";color:", ";}&[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], props.isDragging ? activeColor : getColor('neutralHue', 600, props.theme), props.isDragging && rgba(baseColor, 0.2), props.isDragging ? activeColor : baseColor, hoverColor, rgba(baseColor, 0.08), hoverColor, focusStyles({
    theme: props.theme,
    hue: baseColor
  }), activeColor, rgba(baseColor, 0.2), activeColor, disabledForegroundColor, disabledBackgroundColor, disabledForegroundColor);
};
const sizeStyles$b$1 = props => {
  const marginTop = `${props.theme.space.base * (props.isCompact ? 1 : 2)}px`;
  const paddingHorizontal = `${props.isCompact ? 2 : 4}em`;
  const paddingVertical = math(`${props.theme.space.base * (props.isCompact ? 2.5 : 5)} - ${props.theme.borderWidths.sm}`);
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(props.theme.space.base * 5, fontSize);
  return Ne(["padding:", " ", ";min-width:4em;line-height:", ";font-size:", ";", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", ";}"], paddingVertical, paddingHorizontal, lineHeight, fontSize, StyledLabel$1, StyledHint$1, StyledMessage$1, StyledHint$1, StyledMessage$1, marginTop);
};
const StyledFileUpload = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$n$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledFileUpload",
  componentId: "sc-1rodjgn-0"
})(["display:flex;align-items:center;justify-content:center;box-sizing:border-box;direction:", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;border:dashed ", ";border-radius:", ";cursor:pointer;text-align:center;user-select:none;", ";&[aria-disabled='true']{cursor:default;}", ";", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', props => props.theme.borderWidths.sm, props => props.theme.borderRadii.md, sizeStyles$b$1, colorStyles$7$1, props => retrieveComponentStyles(COMPONENT_ID$n$1, props));
StyledFileUpload.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$m$1 = 'forms.file.close';
const StyledFileClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID$m$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledFileClose",
  componentId: "sc-1m31jbf-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:0.8;border:none;background:transparent;cursor:pointer;color:", ";appearance:none;&:hover{opacity:0.9;}&:focus{outline:none;}", ";"], props => props.theme.colors.foreground, props => retrieveComponentStyles(COMPONENT_ID$m$1, props));
StyledFileClose.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$l$1 = 'forms.file';
const colorStyles$6$1 = props => {
  let borderColor;
  let focusBorderColor;
  let foregroundColor;
  if (props.validation === 'success') {
    borderColor = getColor('successHue', 600, props.theme);
    focusBorderColor = borderColor;
    foregroundColor = borderColor;
  } else if (props.validation === 'error') {
    borderColor = getColor('dangerHue', 600, props.theme);
    focusBorderColor = borderColor;
    foregroundColor = borderColor;
  } else {
    borderColor = getColor('neutralHue', 300, props.theme);
    focusBorderColor = getColor('primaryHue', 600, props.theme);
    foregroundColor = props.theme.colors.foreground;
  }
  return Ne(["border-color:", ";color:", ";", ""], borderColor, foregroundColor, focusStyles({
    theme: props.theme,
    inset: props.focusInset,
    hue: focusBorderColor,
    styles: {
      borderColor: focusBorderColor
    }
  }));
};
const sizeStyles$a$1 = props => {
  const size = `${props.theme.space.base * (props.isCompact ? 7 : 10)}px`;
  const spacing = `${props.theme.space.base * (props.isCompact ? 2 : 3)}px`;
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(props.theme.space.base * 5, fontSize);
  return `
    box-sizing: border-box;
    border: ${props.theme.borders.sm};
    border-radius: ${props.theme.borderRadii.md};
    padding: 0 ${spacing};
    height: ${size};
    line-height: ${lineHeight};
    font-size: ${fontSize};

    & > span {
      width: 100%;
    }

    & > ${StyledFileClose} {
      width: ${size};
      height: ${size};
      margin-${props.theme.rtl ? 'left' : 'right'}: -${spacing};
    }
  `;
};
const StyledFile = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$l$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledFile",
  componentId: "sc-195lzp1-0"
})(["display:flex;position:relative;flex-wrap:nowrap;align-items:center;transition:box-shadow 0.1s ease-in-out;", ";", ";& > span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}& > [role='progressbar']{position:absolute;bottom:0;left:0;transition:opacity 0.2s ease-in-out;margin:0;border-top-left-radius:0;border-top-right-radius:0;width:100%;& > div{border-top-", "-radius:0;}}& > [role='progressbar'][aria-valuenow='0'],& > [role='progressbar'][aria-valuenow='100']{opacity:0;}", ";"], sizeStyles$a$1, colorStyles$6$1, props => props.theme.rtl ? 'right' : 'left', props => retrieveComponentStyles(COMPONENT_ID$l$1, props));
StyledFile.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$k$1 = 'forms.file.delete';
const StyledFileDelete = styled(StyledFileClose).attrs({
  'data-garden-id': COMPONENT_ID$k$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledFileDelete",
  componentId: "sc-a8nnhx-0"
})(["color:", ";", ";"], props => getColor('dangerHue', 600, props.theme), props => retrieveComponentStyles(COMPONENT_ID$k$1, props));
StyledFileDelete.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$j$1 = 'forms.file.icon';
const StyledFileIcon = styled(_ref => {
  let {
    children,
    isCompact,
    theme,
    ...props
  } = _ref;
  return /*#__PURE__*/React.cloneElement(reactExports.Children.only(children), props);
}).attrs({
  'data-garden-id': COMPONENT_ID$j$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledFileIcon",
  componentId: "sc-7b3q0c-0"
})(["flex-shrink:0;width:", ";margin-", ":", "px;", ";"], props => props.isCompact ? props.theme.iconSizes.sm : props.theme.iconSizes.md, props => props.theme.rtl ? 'left' : 'right', props => props.theme.space.base * 2, props => retrieveComponentStyles(COMPONENT_ID$j$1, props));
StyledFileIcon.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$i$1 = 'forms.file_list';
const StyledFileList = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID$i$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledFileList",
  componentId: "sc-gbahjg-0"
})(["margin:0;padding:0;list-style:none;", ";"], props => retrieveComponentStyles(COMPONENT_ID$i$1, props));
StyledFileList.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$h$1 = 'forms.file_list.item';
const StyledFileListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$h$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledFileListItem",
  componentId: "sc-1ova3lo-0"
})(["&:not(:first-child),", " ~ ", " > &:first-child{margin-top:", "px;}", ";"], StyledFileUpload, StyledFileList, props => props.theme.space.base * 2, props => retrieveComponentStyles(COMPONENT_ID$h$1, props));
StyledFileListItem.defaultProps = {
  theme: DEFAULT_THEME
};
var _circle$3;
function _extends$n() {
  _extends$n = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$n.apply(this, arguments);
}
var SvgCircleSmFill$1 = function SvgCircleSmFill(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$n({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _circle$3 || (_circle$3 = /*#__PURE__*/reactExports.createElement("circle", {
    cx: 6,
    cy: 6,
    r: 2,
    fill: "currentColor"
  })));
};
const COMPONENT_ID$g$1 = 'forms.radio_svg';
const StyledRadioSvg = styled(SvgCircleSmFill$1).attrs({
  'data-garden-id': COMPONENT_ID$g$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledRadioSvg",
  componentId: "sc-1r1qtr1-0"
})(["transition:opacity 0.25 ease-in-out;opacity:0;", ":checked ~ ", " > &{opacity:1;}", ";"], StyledRadioInput, StyledRadioLabel, props => retrieveComponentStyles(COMPONENT_ID$g$1, props));
StyledRadioSvg.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$f$1 = 'forms.toggle_label';
const sizeStyles$9$1 = props => {
  const size = props.theme.space.base * 10;
  const padding = size + props.theme.space.base * 2;
  return Ne(["padding-", ":", "px;&[hidden]{padding-", ":", "px;}"], props.theme.rtl ? 'right' : 'left', padding, props.theme.rtl ? 'right' : 'left', size);
};
const StyledToggleLabel = styled(StyledCheckLabel).attrs({
  'data-garden-id': COMPONENT_ID$f$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledToggleLabel",
  componentId: "sc-e0asdk-0"
})(["", ";", ";"], props => sizeStyles$9$1(props), props => retrieveComponentStyles(COMPONENT_ID$f$1, props));
StyledToggleLabel.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$e$1 = 'forms.toggle_hint';
const StyledToggleHint = styled(StyledHint$1).attrs({
  'data-garden-id': COMPONENT_ID$e$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledToggleHint",
  componentId: "sc-nziggu-0"
})(["padding-", ":", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 12px`), props => retrieveComponentStyles(COMPONENT_ID$e$1, props));
StyledToggleHint.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$d$1 = 'forms.toggle';
const colorStyles$5$1 = props => {
  const SHADE = 600;
  const backgroundColor = getColor('neutralHue', SHADE - 100, props.theme);
  const hoverBackgroundColor = getColor('neutralHue', SHADE, props.theme);
  const activeBackgroundColor = getColor('neutralHue', SHADE + 100, props.theme);
  return Ne(["& ~ ", "::before{background-color:", ";}&:enabled ~ ", ":hover::before{background-color:", ";}&:enabled ~ ", ":active::before{background-color:", ";}"], StyledToggleLabel, backgroundColor, StyledToggleLabel, hoverBackgroundColor, StyledToggleLabel, activeBackgroundColor);
};
const sizeStyles$8$1 = props => {
  const height = `${props.theme.space.base * 5}px`;
  const width = `${props.theme.space.base * 10}px`;
  const iconSize = props.theme.iconSizes.md;
  const iconPosition = math(`(${height} - ${iconSize}) / 2`);
  const checkedIconPosition = math(`${width} - ${iconSize} - ${iconPosition}`);
  return Ne(["top:0;width:", ";height:", ";& ~ ", "::before{width:", ";height:", ";}& ~ ", " > svg{top:", ";", ":", ";width:", ";height:", ";}&:checked ~ ", " > svg{", ":", ";}"], width, height, StyledToggleLabel, width, height, StyledToggleLabel, iconPosition, props.theme.rtl ? 'right' : 'left', iconPosition, iconSize, iconSize, StyledToggleLabel, props.theme.rtl ? 'right' : 'left', checkedIconPosition);
};
const StyledToggleInput = styled(StyledCheckInput).attrs({
  'data-garden-id': COMPONENT_ID$d$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledToggleInput",
  componentId: "sc-sgp47s-0"
})(["& ~ ", "::before{top:0;transition:box-shadow .1s ease-in-out,background-color .15s ease-in-out,color .25s ease-in-out;border:none;border-radius:100px;}", ";", ";", ";"], StyledToggleLabel, props => sizeStyles$8$1(props), props => colorStyles$5$1(props), props => retrieveComponentStyles(COMPONENT_ID$d$1, props));
StyledToggleInput.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$c$1 = 'forms.toggle_message';
const StyledToggleMessage = styled(StyledMessage$1).attrs({
  'data-garden-id': COMPONENT_ID$c$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledToggleMessage",
  componentId: "sc-13vuvl1-0"
})(["padding-", ":", ";& ", "{", ":", ";}", ";"], props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 12px`), StyledMessageIcon, props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 10px - ${props.theme.iconSizes.md}`), props => retrieveComponentStyles(COMPONENT_ID$c$1, props));
StyledToggleMessage.defaultProps = {
  theme: DEFAULT_THEME
};
var _circle$2;
function _extends$m() {
  _extends$m = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$m.apply(this, arguments);
}
var SvgCircleSmFill = function SvgCircleSmFill(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$m({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _circle$2 || (_circle$2 = /*#__PURE__*/reactExports.createElement("circle", {
    cx: 8,
    cy: 8,
    r: 6,
    fill: "currentColor"
  })));
};
const COMPONENT_ID$b$1 = 'forms.toggle_svg';
const StyledToggleSvg = styled(SvgCircleSmFill).attrs({
  'data-garden-id': COMPONENT_ID$b$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledToggleSvg",
  componentId: "sc-162xbyx-0"
})(["transition:all 0.15s ease-in-out;", ";"], props => retrieveComponentStyles(COMPONENT_ID$b$1, props));
StyledToggleSvg.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$a$1 = 'forms.select';
const colorStyles$4$1 = props => {
  const color = getColor('neutralHue', 700, props.theme);
  return Ne(["&:hover + ", ",&:focus + ", ",&:focus-visible + ", ",&[data-garden-focus-visible='true'] + ", "{color:", ";}"], StyledTextMediaFigure, StyledTextMediaFigure, StyledTextMediaFigure, StyledTextMediaFigure, color);
};
const sizeStyles$7$1 = props => {
  const padding = math(`${props.theme.iconSizes.md} + ${props.theme.space.base * 5}`);
  const iconVerticalPosition = `${props.theme.space.base * (props.isCompact ? 1.5 : 2.5) + 1}px`;
  const iconHorizontalPosition = `${props.theme.space.base * 3}px`;
  return Ne(["padding-", ":", ";& + ", "{top:", ";", ":", ";}"], props.theme.rtl ? 'left' : 'right', !props.isBare && padding, StyledTextMediaFigure, iconVerticalPosition, props.theme.rtl ? 'left' : 'right', iconHorizontalPosition);
};
const StyledSelect = styled(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID$a$1,
  'data-garden-version': '8.69.1',
  as: 'select'
}).withConfig({
  displayName: "StyledSelect",
  componentId: "sc-8xdxpt-0"
})(["cursor:pointer;text-overflow:ellipsis;", ";", ";&::-ms-expand{display:none;}&::-ms-value{background-color:transparent;color:inherit;}&:-moz-focusring{transition:none;text-shadow:0 0 0 ", ";color:transparent;}& + ", "{position:absolute;pointer-events:none;}"], props => sizeStyles$7$1(props), props => colorStyles$4$1(props), props => props.theme.colors.foreground, StyledTextMediaFigure);
StyledSelect.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$9$1 = 'forms.select_wrapper';
const StyledSelectWrapper = styled(StyledTextFauxInput).attrs({
  'data-garden-id': COMPONENT_ID$9$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledSelectWrapper",
  componentId: "sc-i7b6hw-0"
})(["position:relative;padding:0;overflow:visible;& > ", "{border-color:transparent;background-color:transparent;", "{box-shadow:unset;}}"], StyledSelect, SELECTOR_FOCUS_VISIBLE);
StyledSelectWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$8$1 = 'forms.range';
const thumbStyles = function (styles) {
  let modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return `
    &${modifier}::-moz-range-thumb {
      ${styles}
    }

    &${modifier}::-ms-thumb {
      ${styles}
    }

    &${modifier}::-webkit-slider-thumb {
      ${styles}
    }
  `;
};
const trackStyles = function (styles) {
  let modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return `
    &${modifier}::-moz-range-track {
      ${styles}
    }

    &${modifier}::-ms-track {
      ${styles}
    }

    &${modifier}::-webkit-slider-runnable-track {
      ${styles}
    }
  `;
};
const trackLowerStyles = function (styles) {
  let modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return `
    &${modifier}::-moz-range-progress {
      ${styles}
    }

    &${modifier}::-ms-fill-lower {
      ${styles}
    }
  `;
};
const colorStyles$3$1 = props => {
  const SHADE = 600;
  const thumbBackgroundColor = getColor('primaryHue', SHADE, props.theme);
  const thumbBorderColor = thumbBackgroundColor;
  const thumbBoxShadow = props.theme.shadows.lg(math(`${props.theme.space.base} * 1px`), math(`${props.theme.space.base} * 2px`), getColor('neutralHue', SHADE + 200, props.theme, 0.24));
  const thumbFocusBoxShadow = getFocusBoxShadow({
    theme: props.theme
  });
  const thumbActiveBackgroundColor = getColor('primaryHue', SHADE + 100, props.theme);
  const thumbActiveBorderColor = thumbBorderColor;
  const thumbDisabledBackgroundColor = getColor('neutralHue', SHADE - 300, props.theme);
  const thumbDisabledBorderColor = thumbDisabledBackgroundColor;
  const thumbHoverBackgroundColor = thumbActiveBackgroundColor;
  const thumbHoverBorderColor = thumbHoverBackgroundColor;
  const trackBackgroundColor = getColor('neutralHue', SHADE - 400, props.theme);
  const trackLowerBackgroundColor = props.hasLowerTrack ? thumbBackgroundColor : '';
  const trackBackgroundImage = props.hasLowerTrack ? `linear-gradient(${trackLowerBackgroundColor}, ${trackLowerBackgroundColor})` : '';
  const trackDisabledLowerBackgroundColor = props.hasLowerTrack ? thumbDisabledBackgroundColor : '';
  const trackDisabledBackgroundImage = props.hasLowerTrack ? `linear-gradient(${trackDisabledLowerBackgroundColor}, ${trackDisabledLowerBackgroundColor})` : '';
  return Ne(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], trackStyles(`
      background-color: ${trackBackgroundColor};
      background-image: ${trackBackgroundImage}; /* provide means for styling lower range on WebKit */
    `), thumbStyles(`
      border-color: ${thumbBorderColor};
      box-shadow: ${thumbBoxShadow};
      background-color: ${thumbBackgroundColor};
    `), trackLowerStyles(`
      background-color: ${trackLowerBackgroundColor};
    `), thumbStyles(`
        transition:
          border-color .25s ease-in-out,
          background-color .25s ease-in-out;
        border-color: ${thumbHoverBorderColor};
        background-color: ${thumbHoverBackgroundColor};
      `, ':hover'), thumbStyles(`
        box-shadow: ${thumbFocusBoxShadow};
      `, '[data-garden-focus-visible="true"]'), thumbStyles(`
        border-color: ${thumbActiveBorderColor};
        background-color: ${thumbActiveBackgroundColor};
      `, ':active'), trackStyles(`
        background-image: ${trackDisabledBackgroundImage};
      `, ':disabled'), thumbStyles(`
        border-color: ${thumbDisabledBorderColor};
        box-shadow: none;
        background-color: ${thumbDisabledBackgroundColor};
      `, ':disabled'), trackLowerStyles(`
        background-color: ${trackDisabledLowerBackgroundColor};
      `, ':disabled'));
};
const sizeStyles$6$1 = props => {
  const thumbSize = math(`${props.theme.space.base} * 5px`);
  const trackHeight = math(`${props.theme.space.base} * 1.5px`);
  const trackBorderRadius = trackHeight;
  const trackMargin = math(`(${thumbSize} - ${trackHeight}) / 2 + ${props.theme.shadowWidths.md}`);
  const thumbMargin = math(`(${trackHeight} - ${thumbSize}) / 2`);
  return Ne(["", ":not([hidden]) + &,", " + &,", " + &,& + ", ",& + ", "{margin-top:", ";}", ";", " ", ""], StyledLabel$1, StyledHint$1, StyledMessage$1, StyledHint$1, StyledMessage$1, math(`${props.theme.space.base} * 2px`), trackStyles(`
      margin: ${trackMargin} 0;
      border-radius: ${trackBorderRadius};
      height: ${trackHeight};
    `), thumbStyles(`
      margin: ${thumbMargin} 0; /* reset for IE */
      width: ${thumbSize};
      height: ${thumbSize};
    `), trackLowerStyles(`
      border-top-${props.theme.rtl ? 'right' : 'left'}-radius: ${trackBorderRadius};
      border-bottom-${props.theme.rtl ? 'right' : 'left'}-radius: ${trackBorderRadius};
      height: ${trackHeight};
    `));
};
const StyledRangeInput = styled.input.attrs(props => ({
  'data-garden-id': COMPONENT_ID$8$1,
  'data-garden-version': '8.69.1',
  type: 'range',
  style: {
    backgroundSize: props.hasLowerTrack && props.backgroundSize
  }
})).withConfig({
  displayName: "StyledRangeInput",
  componentId: "sc-1iv2yqp-0"
})(["appearance:none;direction:", ";margin:0;background-color:inherit;cursor:pointer;padding:0;width:100%;vertical-align:middle;", " &::-webkit-slider-container,&::-webkit-slider-runnable-track{background-size:inherit;}", ";", " ", ";&::-moz-focus-outer{border:0;}&::-ms-tooltip{display:none;}&:focus{outline:none;}&:disabled{cursor:default;}", ";"], props => props.theme.rtl && 'rtl', props => trackStyles(`
      appearance: none;
      border-color: transparent; /* reset for IE */
      background-repeat: repeat-y;
      background-size: 0;
      background-position: ${props.theme.rtl ? '100% 100%' : '0% 0%'};
      width: 99.8%; /* fix for IE which cuts off the upper track's border radius */
      color: transparent; /* reset for IE */
      box-sizing: border-box; /* reset for IE */
    `), props => sizeStyles$6$1(props), props => thumbStyles(`
      appearance: none;
      transition: box-shadow .1s ease-in-out;
      border: ${props.theme.borders.md};
      border-radius: 100%;
      box-sizing: border-box;
    `), props => colorStyles$3$1(props), props => retrieveComponentStyles(COMPONENT_ID$8$1, props));
StyledRangeInput.defaultProps = {
  backgroundSize: '0%',
  hasLowerTrack: true,
  theme: DEFAULT_THEME
};
const COMPONENT_ID$7$1 = 'forms.slider';
const StyledSlider = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$7$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledSlider",
  componentId: "sc-1di437a-0"
})(["display:block;position:relative;z-index:0;cursor:pointer;height:", ";&[aria-disabled='true']{cursor:default;}", ":not([hidden]) + &,", " + &,", " + &,& + ", ",& + ", "{margin-top:", ";}", ";"], props => math(`(${props.theme.space.base} * 5px) + (${props.theme.shadowWidths.md} * 2)`), StyledLabel$1, StyledHint$1, StyledMessage$1, StyledHint$1, StyledMessage$1, props => math(`${props.theme.space.base} * 2px`), props => retrieveComponentStyles(COMPONENT_ID$7$1, props));
StyledSlider.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$6$1 = 'forms.slider_thumb';
const colorStyles$2$1 = props => {
  const SHADE = 600;
  const backgroundColor = getColor('primaryHue', SHADE, props.theme);
  const borderColor = backgroundColor;
  const boxShadow = props.theme.shadows.lg(math(`${props.theme.space.base} * 1px`), math(`${props.theme.space.base} * 2px`), getColor('neutralHue', SHADE + 200, props.theme, 0.24));
  const activeBackgroundColor = getColor('primaryHue', SHADE + 100, props.theme);
  const activeBorderColor = borderColor;
  const hoverBackgroundColor = activeBackgroundColor;
  const hoverBorderColor = hoverBackgroundColor;
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 300, props.theme);
  const disabledBorderColor = disabledBackgroundColor;
  return Ne(["border-color:", ";box-shadow:", ";background-color:", ";&:hover,&[data-garden-hover='true']{border-color:", ";background-color:", ";}", " &:active,&[data-garden-active='true']{border-color:", ";background-color:", ";}&[aria-disabled='true']{border-color:", ";box-shadow:none;background-color:", ";}"], borderColor, boxShadow, backgroundColor, hoverBorderColor, hoverBackgroundColor, focusStyles({
    theme: props.theme
  }), activeBorderColor, activeBackgroundColor, disabledBorderColor, disabledBackgroundColor);
};
const sizeStyles$5$1 = props => {
  const size = math(`${props.theme.space.base} * 5px`);
  const marginTop = math(`${size} / -2`);
  return Ne(["margin-top:", ";width:", ";height:", ";"], marginTop, size, size);
};
const StyledSliderThumb = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$6$1,
  'data-garden-version': '8.69.1',
  'aria-disabled': props.isDisabled
})).withConfig({
  displayName: "StyledSliderThumb",
  componentId: "sc-yspbwa-0"
})(["appearance:none;position:absolute;top:50%;", ":", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out;z-index:1;border:", ";border-radius:100%;cursor:inherit;box-sizing:border-box;font-size:0;", ";", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => math(`${props.position} * 1px`), props => props.theme.borders.md, props => sizeStyles$5$1(props), props => colorStyles$2$1(props), props => retrieveComponentStyles(COMPONENT_ID$6$1, props));
StyledSliderThumb.defaultProps = {
  position: 0,
  theme: DEFAULT_THEME
};
const COMPONENT_ID$5$1 = 'forms.slider_track';
const colorStyles$1$1 = props => {
  const SHADE = 600;
  const backgroundColor = getColor('neutralHue', SHADE - 400, props.theme);
  const backgroundImageColor = getColor('primaryHue', SHADE, props.theme);
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 300, props.theme);
  return Ne(["background-color:", ";background-image:linear-gradient(", ",", ");&[aria-disabled='true']{background-image:linear-gradient(", ",", ");}"], backgroundColor, backgroundImageColor, backgroundImageColor, disabledBackgroundColor, disabledBackgroundColor);
};
const sizeStyles$4$1 = props => {
  const height = math(`${props.theme.space.base} * 1.5px`);
  const backgroundPosition = math(`${props.backgroundPosition} * 1px`);
  const backgroundSize = math(`${props.backgroundSize} * 1px`);
  const borderRadius = height;
  const marginTop = math(`${height} / -2`);
  const padding = math(`${props.theme.space.base} * 2.5px`);
  return Ne(["margin-top:", ";border-radius:", ";background-position:", ";background-size:", ";padding:0 ", ";"], marginTop, borderRadius, backgroundPosition, backgroundSize, padding);
};
const StyledSliderTrack = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$5$1,
  'data-garden-version': '8.69.1',
  'aria-disabled': props.isDisabled
})).withConfig({
  displayName: "StyledSliderTrack",
  componentId: "sc-aw5m6g-0"
})(["position:absolute;top:50%;box-sizing:border-box;background-origin:content-box;background-repeat:repeat-y;width:100%;", ";", ";", ";"], props => sizeStyles$4$1(props), props => colorStyles$1$1(props), props => retrieveComponentStyles(COMPONENT_ID$5$1, props));
StyledSliderTrack.defaultProps = {
  backgroundSize: 0,
  backgroundPosition: 0,
  theme: DEFAULT_THEME
};
const COMPONENT_ID$4$1 = 'forms.slider_track_rail';
const sizeStyles$3$1 = props => {
  const height = math(`${props.theme.space.base} * 1.5px`);
  const margin = math(`${props.theme.space.base} * 2.5px`);
  return Ne(["margin:0 ", " 0 ", ";height:", ";"], props.theme.rtl ? `-${margin}` : margin, props.theme.rtl ? margin : `-${margin}`, height);
};
const StyledSliderTrackRail = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$4$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledSliderTrackRail",
  componentId: "sc-1o5owbd-0"
})(["position:relative;", ";", ";"], props => sizeStyles$3$1(props), props => retrieveComponentStyles(COMPONENT_ID$4$1, props));
StyledSliderTrackRail.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$3$1 = 'forms.tile_icon';
const sizeStyles$2$1 = props => {
  const iconSize = math(`${props.theme.iconSizes.md} * 2`);
  let position;
  let top;
  let horizontalValue;
  if (!props.isCentered) {
    position = 'absolute';
    top = `${props.theme.space.base * 6}px`;
    horizontalValue = `left: ${props.theme.space.base * 5}px`;
    if (props.theme.rtl) {
      horizontalValue = `right: ${props.theme.space.base * 5}px`;
    }
  }
  return Ne(["position:", ";top:", ";", ";& > *{width:", ";height:", ";}"], position, top, horizontalValue, iconSize, iconSize);
};
const StyledTileIcon = styled.span.attrs({
  'data-garden-id': COMPONENT_ID$3$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTileIcon",
  componentId: "sc-1wazhg4-0"
})(["display:block;transition:color 0.25s ease-in-out;text-align:center;line-height:0;", ";", ";"], props => sizeStyles$2$1(props), props => retrieveComponentStyles(COMPONENT_ID$3$1, props));
StyledTileIcon.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$2$3 = 'forms.tile';
const colorStyles$d = props => {
  const SHADE = 600;
  const iconColor = getColor('neutralHue', SHADE, props.theme);
  const color = getColor('neutralHue', SHADE + 200, props.theme);
  const borderColor = getColor('neutralHue', SHADE - 300, props.theme);
  const hoverBackgroundColor = getColor('primaryHue', SHADE, props.theme, 0.08);
  const hoverBorderColor = getColor('primaryHue', SHADE, props.theme);
  const focusBorderColor = hoverBorderColor;
  const activeBackgroundColor = getColor('primaryHue', SHADE, props.theme, 0.2);
  const activeBorderColor = focusBorderColor;
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 500, props.theme);
  const disabledBorderColor = getColor('neutralHue', SHADE - 400, props.theme);
  const disabledColor = getColor('neutralHue', SHADE - 200, props.theme);
  const selectedBorderColor = focusBorderColor;
  const selectedBackgroundColor = selectedBorderColor;
  const selectedHoverBorderColor = getColor('primaryHue', SHADE + 100, props.theme);
  const selectedHoverBackgroundColor = selectedHoverBorderColor;
  const selectedActiveBorderColor = getColor('primaryHue', SHADE + 200, props.theme);
  const selectedActiveBackgroundColor = selectedActiveBorderColor;
  const selectedDisabledBackgroundColor = disabledBorderColor;
  return Ne(["border:", " ", ";border-color:", ";background-color:", ";color:", ";", "{color:", ";}&:hover:not([aria-disabled='true']){border-color:", ";background-color:", ";", "{color:", ";}}", " &:active:not([aria-disabled='true']){border-color:", ";background-color:", ";", "{color:", ";}}&[data-garden-selected='true']{border-color:", ";background-color:", ";color:", ";", "{color:", ";}}&[data-garden-selected='true']:not([aria-disabled='true']):hover{border-color:", ";background-color:", ";color:", ";", "{color:", ";}}&[data-garden-selected='true']:not([aria-disabled='true']):active{border-color:", ";background-color:", ";color:", ";", "{color:", ";}}&[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";", "{color:", ";}}&[data-garden-selected='true'][aria-disabled='true']{background-color:", ";color:", ";", "{color:", ";}}"], props.theme.borders.sm, getColor('neutralHue', SHADE - 300, props.theme), borderColor, props.theme.colors.background, color, StyledTileIcon, iconColor, hoverBorderColor, hoverBackgroundColor, StyledTileIcon, color, focusStyles({
    theme: props.theme,
    hue: focusBorderColor,
    styles: {
      borderColor: focusBorderColor
    },
    selector: `&:focus-within`
  }), activeBorderColor, activeBackgroundColor, StyledTileIcon, color, selectedBorderColor, selectedBackgroundColor, props.theme.colors.background, StyledTileIcon, props.theme.colors.background, selectedHoverBorderColor, selectedHoverBackgroundColor, props.theme.colors.background, StyledTileIcon, props.theme.colors.background, selectedActiveBorderColor, selectedActiveBackgroundColor, props.theme.colors.background, StyledTileIcon, props.theme.colors.background, disabledBorderColor, disabledBackgroundColor, disabledColor, StyledTileIcon, disabledColor, selectedDisabledBackgroundColor, disabledColor, StyledTileIcon, disabledColor);
};
const StyledTile = styled.label.attrs(props => ({
  'data-garden-id': COMPONENT_ID$2$3,
  'data-garden-version': '8.69.1',
  'data-garden-selected': props.isSelected
})).withConfig({
  displayName: "StyledTile",
  componentId: "sc-1jjvmxs-0"
})(["display:block;position:relative;transition:border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;border-radius:", ";cursor:", ";padding:", "px;direction:", ";min-width:132px;word-break:break-word;", ";", ";"], props => props.theme.borderRadii.md, props => !props.isDisabled && 'pointer', props => props.theme.space.base * 5, props => props.theme.rtl && 'rtl', props => colorStyles$d(props), props => retrieveComponentStyles(COMPONENT_ID$2$3, props));
StyledTile.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$1$3 = 'forms.tile_description';
const sizeStyles$1$1 = props => {
  let marginDirection = 'left';
  let marginValue;
  if (props.theme.rtl) {
    marginDirection = 'right';
  }
  if (!props.isCentered) {
    marginValue = math(`(${props.theme.iconSizes.md} * 2) + ${props.theme.space.base * 5}px`);
  }
  return Ne(["margin-top:", "px;margin-", ":", ";"], props.theme.space.base, marginDirection, marginValue);
};
const StyledTileDescription = styled.span.attrs({
  'data-garden-id': COMPONENT_ID$1$3,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTileDescription",
  componentId: "sc-xfuu7u-0"
})(["display:block;text-align:", ";line-height:", ";font-size:", ";", ";", ";"], props => props.isCentered && 'center', props => getLineHeight(props.theme.space.base * 4, props.theme.fontSizes.sm), props => props.theme.fontSizes.sm, props => sizeStyles$1$1(props), props => retrieveComponentStyles(COMPONENT_ID$1$3, props));
StyledTileDescription.defaultProps = {
  theme: DEFAULT_THEME
};
const StyledTileInput = styled.input.withConfig({
  displayName: "StyledTileInput",
  componentId: "sc-1nq2m6q-0"
})(["position:absolute;border:0;clip:rect(1px,1px,1px,1px);padding:0;width:1px;height:1px;overflow:hidden;white-space:nowrap;"]);
StyledTileInput.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$L = 'forms.tile_label';
const sizeStyles$g = props => {
  let marginDirection = 'left';
  let marginTop = `${props.theme.space.base * 2}px`;
  let marginValue;
  if (props.theme.rtl) {
    marginDirection = 'right';
  }
  if (!props.isCentered) {
    marginValue = math(`(${props.theme.iconSizes.md} * 2) + ${props.theme.space.base * 5}px`);
    marginTop = '0';
  }
  return Ne(["margin-top:", ";margin-", ":", ";"], marginTop, marginDirection, marginValue);
};
const StyledTileLabel = styled.span.attrs({
  'data-garden-id': COMPONENT_ID$L,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTileLabel",
  componentId: "sc-1mypv27-0"
})(["display:block;text-align:", ";line-height:", ";font-size:", ";font-weight:", ";", ";", ";"], props => props.isCentered && 'center', props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => props.theme.fontSizes.md, props => props.theme.fontWeights.semibold, props => sizeStyles$g(props), props => retrieveComponentStyles(COMPONENT_ID$L, props));
StyledTileLabel.defaultProps = {
  theme: DEFAULT_THEME
};
const Field$1 = /*#__PURE__*/React.forwardRef((props, ref) => {
  const [hasHint, setHasHint] = reactExports.useState(false);
  const [hasMessage, setHasMessage] = reactExports.useState(false);
  const [isLabelActive, setIsLabelActive] = reactExports.useState(false);
  const [isLabelHovered, setIsLabelHovered] = reactExports.useState(false);
  const multiThumbRangeRef = reactExports.useRef(null);
  const {
    getInputProps,
    getMessageProps,
    ...propGetters
  } = useField(props.id);
  const fieldProps = reactExports.useMemo(() => ({
    ...propGetters,
    getInputProps: function (options) {
      let describeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return getInputProps(options, {
        ...describeOptions,
        isDescribed: hasHint,
        hasMessage
      });
    },
    getMessageProps: options => getMessageProps({
      role: 'alert',
      ...options
    }),
    isLabelActive,
    setIsLabelActive,
    isLabelHovered,
    setIsLabelHovered,
    hasHint,
    setHasHint,
    hasMessage,
    setHasMessage,
    multiThumbRangeRef
  }), [propGetters, getInputProps, getMessageProps, isLabelActive, isLabelHovered, hasHint, hasMessage]);
  return /*#__PURE__*/React.createElement(FieldContext$1.Provider, {
    value: fieldProps
  }, /*#__PURE__*/React.createElement(StyledField$1, _extends$t({}, props, {
    ref: ref
  })));
});
Field$1.displayName = 'Field';
const FieldsetContext = /*#__PURE__*/reactExports.createContext(undefined);
const useFieldsetContext = () => {
  const fieldsetContext = reactExports.useContext(FieldsetContext);
  return fieldsetContext;
};
const LegendComponent = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
  const fieldsetContext = useFieldsetContext();
  return /*#__PURE__*/React.createElement(StyledLegend, _extends$t({}, props, fieldsetContext, {
    ref: ref
  }));
});
LegendComponent.displayName = 'Fieldset.Legend';
const Legend = LegendComponent;
const FieldsetComponent = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
  const fieldsetContext = reactExports.useMemo(() => ({
    isCompact: props.isCompact
  }), [props.isCompact]);
  return /*#__PURE__*/React.createElement(FieldsetContext.Provider, {
    value: fieldsetContext
  }, /*#__PURE__*/React.createElement(StyledFieldset, _extends$t({}, props, {
    ref: ref
  })));
});
FieldsetComponent.displayName = 'Fieldset';
FieldsetComponent.propTypes = {
  isCompact: PropTypes.bool
};
const Fieldset = FieldsetComponent;
Fieldset.Legend = Legend;
const InputContext = /*#__PURE__*/reactExports.createContext(undefined);
const useInputContext = () => {
  return reactExports.useContext(InputContext);
};
const Hint$1 = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    hasHint,
    setHasHint,
    getHintProps
  } = useFieldContext$1() || {};
  const type = useInputContext();
  reactExports.useEffect(() => {
    if (!hasHint && setHasHint) {
      setHasHint(true);
    }
    return () => {
      if (hasHint && setHasHint) {
        setHasHint(false);
      }
    };
  }, [hasHint, setHasHint]);
  let HintComponent;
  if (type === 'checkbox') {
    HintComponent = StyledCheckHint;
  } else if (type === 'radio') {
    HintComponent = StyledRadioHint;
  } else if (type === 'toggle') {
    HintComponent = StyledToggleHint;
  } else {
    HintComponent = StyledHint$1;
  }
  let combinedProps = props;
  if (getHintProps) {
    combinedProps = getHintProps(combinedProps);
  }
  return /*#__PURE__*/React.createElement(HintComponent, _extends$t({
    ref: ref
  }, combinedProps));
});
Hint$1.displayName = 'Hint';
const Label$1 = /*#__PURE__*/React.forwardRef((props, ref) => {
  const fieldContext = useFieldContext$1();
  const fieldsetContext = useFieldsetContext();
  const type = useInputContext();
  let combinedProps = props;
  if (fieldContext) {
    combinedProps = fieldContext.getLabelProps(combinedProps);
    if (type === undefined) {
      const {
        setIsLabelActive,
        setIsLabelHovered,
        multiThumbRangeRef
      } = fieldContext;
      combinedProps = {
        ...combinedProps,
        onMouseUp: composeEventHandlers$1(props.onMouseUp, () => {
          setIsLabelActive(false);
        }),
        onMouseDown: composeEventHandlers$1(props.onMouseDown, () => {
          setIsLabelActive(true);
        }),
        onMouseEnter: composeEventHandlers$1(props.onMouseEnter, () => {
          setIsLabelHovered(true);
        }),
        onMouseLeave: composeEventHandlers$1(props.onMouseLeave, () => {
          setIsLabelHovered(false);
        }),
        onClick: composeEventHandlers$1(props.onClick, () => {
          multiThumbRangeRef.current && multiThumbRangeRef.current.focus();
        })
      };
    }
  }
  if (fieldsetContext) {
    combinedProps = {
      ...combinedProps,
      isRegular: combinedProps.isRegular === undefined ? true : combinedProps.isRegular
    };
  }
  if (type === 'radio') {
    return /*#__PURE__*/React.createElement(StyledRadioLabel, _extends$t({
      ref: ref
    }, combinedProps), /*#__PURE__*/React.createElement(StyledRadioSvg, null), props.children);
  } else if (type === 'checkbox') {
    const onLabelSelect = e => {
      const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      if (fieldContext && isFirefox && e.target instanceof Element) {
        const inputId = e.target.getAttribute('for');
        if (!inputId) return;
        const input = document.getElementById(inputId);
        if (input && input.type === 'checkbox') {
          if (e.shiftKey) {
            input.click();
            input.checked = true;
          }
          input.focus();
        }
      }
    };
    combinedProps = {
      ...combinedProps,
      onClick: composeEventHandlers$1(combinedProps.onClick, onLabelSelect)
    };
    return /*#__PURE__*/React.createElement(StyledCheckLabel, _extends$t({
      ref: ref
    }, combinedProps), /*#__PURE__*/React.createElement(StyledCheckSvg, null), /*#__PURE__*/React.createElement(StyledDashSvg, null), props.children);
  } else if (type === 'toggle') {
    return /*#__PURE__*/React.createElement(StyledToggleLabel, _extends$t({
      ref: ref
    }, combinedProps), /*#__PURE__*/React.createElement(StyledToggleSvg, null), props.children);
  }
  return /*#__PURE__*/React.createElement(StyledLabel$1, _extends$t({
    ref: ref
  }, combinedProps));
});
Label$1.displayName = 'Label';
Label$1.propTypes = {
  isRegular: PropTypes.bool
};
const VALIDATION = ['success', 'warning', 'error'];
const FILE_VALIDATION = ['success', 'error'];
const FILE_TYPE = ['pdf', 'zip', 'image', 'document', 'spreadsheet', 'presentation', 'generic'];
const Message$1 = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    validation,
    validationLabel,
    children,
    ...props
  } = _ref;
  const {
    hasMessage,
    setHasMessage,
    getMessageProps
  } = useFieldContext$1() || {};
  const type = useInputContext();
  reactExports.useEffect(() => {
    if (!hasMessage && setHasMessage) {
      setHasMessage(true);
    }
    return () => {
      if (hasMessage && setHasMessage) {
        setHasMessage(false);
      }
    };
  }, [hasMessage, setHasMessage]);
  let MessageComponent;
  if (type === 'checkbox') {
    MessageComponent = StyledCheckMessage;
  } else if (type === 'radio') {
    MessageComponent = StyledRadioMessage;
  } else if (type === 'toggle') {
    MessageComponent = StyledToggleMessage;
  } else {
    MessageComponent = StyledMessage$1;
  }
  let combinedProps = {
    validation,
    validationLabel,
    ...props
  };
  if (getMessageProps) {
    combinedProps = getMessageProps(combinedProps);
  }
  const ariaLabel = useText(Message$1, combinedProps, 'validationLabel', validation, validation !== undefined);
  return /*#__PURE__*/React.createElement(MessageComponent, _extends$t({
    ref: ref
  }, combinedProps), validation && /*#__PURE__*/React.createElement(StyledMessageIcon, {
    validation: validation,
    "aria-label": ariaLabel
  }), children);
});
Message$1.displayName = 'Message';
Message$1.propTypes = {
  validation: PropTypes.oneOf(VALIDATION),
  validationLabel: PropTypes.string
};
const Checkbox = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    indeterminate,
    children,
    ...props
  } = _ref;
  const fieldsetContext = useFieldsetContext();
  const fieldContext = useFieldContext$1();
  const inputRef = inputElement => {
    inputElement && (inputElement.indeterminate = indeterminate);
  };
  const combinedRef = inputElement => {
    [inputRef, ref].forEach(targetRef => {
      if (targetRef) {
        if (typeof targetRef === 'function') {
          targetRef(inputElement);
        } else {
          targetRef.current = inputElement;
        }
      }
    });
  };
  let combinedProps = {
    ref: combinedRef,
    ...props,
    ...fieldsetContext
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return /*#__PURE__*/React.createElement(InputContext.Provider, {
    value: "checkbox"
  }, /*#__PURE__*/React.createElement(StyledCheckInput, combinedProps), children);
});
Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  isCompact: PropTypes.bool,
  indeterminate: PropTypes.bool
};
const InputGroupContext = /*#__PURE__*/reactExports.createContext(undefined);
const useInputGroupContext = () => {
  return reactExports.useContext(InputGroupContext);
};
const Input = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    onSelect,
    ...props
  } = _ref;
  const fieldContext = useFieldContext$1();
  const inputGroupContext = useInputGroupContext();
  const onSelectHandler = props.readOnly ? composeEventHandlers$1(onSelect, event => {
    event.currentTarget.select();
  }) : onSelect;
  let combinedProps = {
    ref,
    onSelect: onSelectHandler,
    ...props
  };
  if (inputGroupContext) {
    combinedProps = {
      ...combinedProps,
      isCompact: inputGroupContext.isCompact || combinedProps.isCompact,
      focusInset: props.focusInset === undefined ? true : props.focusInset
    };
  }
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return /*#__PURE__*/React.createElement(StyledTextInput, combinedProps);
});
Input.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};
Input.displayName = 'Input';
const Radio = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const fieldsetContext = useFieldsetContext();
  const fieldContext = useFieldContext$1();
  let combinedProps = {
    ref,
    ...props,
    ...fieldsetContext
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return /*#__PURE__*/React.createElement(InputContext.Provider, {
    value: "radio"
  }, /*#__PURE__*/React.createElement(StyledRadioInput, combinedProps), children);
});
Radio.displayName = 'Radio';
Radio.propTypes = {
  isCompact: PropTypes.bool
};
const Range = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    hasLowerTrack,
    min,
    max,
    step,
    ...props
  } = _ref;
  const [backgroundSize, setBackgroundSize] = reactExports.useState('0');
  const rangeRef = reactExports.useRef();
  const fieldContext = useFieldContext$1();
  const updateBackgroundWidthFromInput = reactExports.useCallback(rangeTarget => {
    let relativeMax = max;
    const {
      value
    } = rangeTarget;
    if (parseFloat(relativeMax) < parseFloat(min)) {
      relativeMax = 100;
    }
    const percentage = 100 * (value - min) / (relativeMax - min);
    setBackgroundSize(`${percentage}%`);
  }, [max, min, step]);
  reactExports.useEffect(() => {
    updateBackgroundWidthFromInput(rangeRef.current);
  }, [rangeRef, updateBackgroundWidthFromInput, props.value]);
  const onChange = hasLowerTrack ? composeEventHandlers$1(props.onChange, event => {
    updateBackgroundWidthFromInput(event.target);
  }) : props.onChange;
  let combinedProps = {
    ref: mergeRefs([rangeRef, ref]),
    hasLowerTrack,
    min,
    max,
    step,
    backgroundSize,
    ...props,
    onChange
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps, {
      isDescribed: true
    });
  }
  return /*#__PURE__*/React.createElement(StyledRangeInput, combinedProps);
});
Range.defaultProps = {
  hasLowerTrack: true,
  min: 0,
  max: 100,
  step: 1
};
Range.displayName = 'Range';
const parseStyleValue = value => {
  return parseInt(value, 10) || 0;
};
const Textarea = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    minRows,
    maxRows,
    style,
    onChange,
    onSelect,
    ...props
  } = _ref;
  const fieldContext = useFieldContext$1();
  const textAreaRef = reactExports.useRef();
  const shadowTextAreaRef = reactExports.useRef(null);
  const [state, setState] = reactExports.useState({
    overflow: false,
    height: 0
  });
  const isControlled = props.value !== null && props.value !== undefined;
  const isAutoResizable = (minRows !== undefined || maxRows !== undefined) && !props.isResizable;
  const calculateHeight = reactExports.useCallback(() => {
    if (!isAutoResizable) {
      return;
    }
    const textarea = textAreaRef.current;
    const computedStyle = window.getComputedStyle(textarea);
    const shadowTextArea = shadowTextAreaRef.current;
    shadowTextArea.style.width = computedStyle.width;
    shadowTextArea.value = textarea.value || textarea.placeholder || ' ';
    const boxSizing = computedStyle.boxSizing;
    const padding = parseStyleValue(computedStyle.paddingBottom) + parseStyleValue(computedStyle.paddingTop);
    const border = parseStyleValue(computedStyle.borderTopWidth) + parseStyleValue(computedStyle.borderBottomWidth);
    const innerHeight = shadowTextArea.scrollHeight - padding;
    shadowTextArea.value = 'x';
    const singleRowHeight = shadowTextArea.scrollHeight - padding;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const updatedHeight = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(prevState => {
      if (updatedHeight > 0 && Math.abs((prevState.height || 0) - updatedHeight) > 1 || prevState.overflow !== overflow) {
        return {
          overflow,
          height: updatedHeight
        };
      }
      return prevState;
    });
  }, [maxRows, minRows, textAreaRef, isAutoResizable]);
  const onChangeHandler = reactExports.useCallback(e => {
    if (!isControlled) {
      calculateHeight();
    }
    if (onChange) {
      onChange(e);
    }
  }, [calculateHeight, isControlled, onChange]);
  const theme = reactExports.useContext(Be);
  const environment = useDocument(theme);
  reactExports.useEffect(() => {
    if (!isAutoResizable) {
      return undefined;
    }
    if (environment) {
      const win = environment.defaultView || window;
      const resizeHandler = debounce$2(calculateHeight);
      win.addEventListener('resize', resizeHandler);
      return () => {
        resizeHandler.cancel();
        win.removeEventListener('resize', resizeHandler);
      };
    }
    return undefined;
  }, [calculateHeight, isAutoResizable, environment]);
  reactExports.useLayoutEffect(() => {
    calculateHeight();
  });
  const computedStyle = {};
  if (isAutoResizable) {
    computedStyle.height = state.height;
    computedStyle.overflow = state.overflow ? 'hidden' : undefined;
  }
  const onSelectHandler = props.readOnly ? composeEventHandlers$1(onSelect, event => {
    event.currentTarget.select();
  }) : onSelect;
  let combinedProps = {
    ref: mergeRefs([textAreaRef, ref]),
    rows: minRows,
    onChange: onChangeHandler,
    onSelect: onSelectHandler,
    style: {
      ...computedStyle,
      ...style
    },
    ...props
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps, {
      isDescribed: true
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledTextarea, combinedProps), isAutoResizable && /*#__PURE__*/React.createElement(StyledTextarea, {
    "aria-hidden": true,
    readOnly: true,
    isHidden: true,
    className: props.className,
    ref: shadowTextAreaRef,
    tabIndex: -1,
    isBare: props.isBare,
    isCompact: props.isCompact,
    style: style
  }));
});
Textarea.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  isResizable: PropTypes.bool,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  validation: PropTypes.oneOf(VALIDATION)
};
Textarea.displayName = 'Textarea';
const Toggle = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const fieldsetContext = useFieldsetContext();
  const fieldContext = useFieldContext$1();
  let combinedProps = {
    ref,
    ...props,
    ...fieldsetContext
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return /*#__PURE__*/React.createElement(InputContext.Provider, {
    value: "toggle"
  }, /*#__PURE__*/React.createElement(StyledToggleInput, combinedProps), children);
});
Toggle.displayName = 'Toggle';
Toggle.propTypes = {
  isCompact: PropTypes.bool
};
var _path$k;
function _extends$l() {
  _extends$l = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$l.apply(this, arguments);
}
var SvgChevronDownStroke$1 = function SvgChevronDownStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$l({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$k || (_path$k = /*#__PURE__*/reactExports.createElement("path", {
    fill: "currentColor",
    d: "M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
  })));
};
const StartIconComponent = props => /*#__PURE__*/React.createElement(StyledTextMediaFigure, _extends$t({
  position: "start"
}, props));
StartIconComponent.displayName = 'FauxInput.StartIcon';
const StartIcon = StartIconComponent;
const EndIconComponent = props => /*#__PURE__*/React.createElement(StyledTextMediaFigure, _extends$t({
  position: "end"
}, props));
EndIconComponent.displayName = 'FauxInput.EndIcon';
const EndIcon = EndIconComponent;
const FauxInputComponent = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    onFocus,
    onBlur,
    disabled,
    readOnly,
    isFocused: controlledIsFocused,
    ...props
  } = _ref;
  const [isFocused, setIsFocused] = reactExports.useState(false);
  const onFocusHandler = composeEventHandlers$1(onFocus, () => {
    setIsFocused(true);
  });
  const onBlurHandler = composeEventHandlers$1(onBlur, () => {
    setIsFocused(false);
  });
  return /*#__PURE__*/React.createElement(StyledTextFauxInput, _extends$t({
    onFocus: onFocusHandler,
    onBlur: onBlurHandler,
    isFocused: controlledIsFocused === undefined ? isFocused : controlledIsFocused,
    isReadOnly: readOnly,
    isDisabled: disabled,
    tabIndex: disabled ? undefined : 0
  }, props, {
    ref: ref
  }));
});
FauxInputComponent.displayName = 'FauxInput';
FauxInputComponent.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION),
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool
};
const FauxInput = FauxInputComponent;
FauxInput.EndIcon = EndIcon;
FauxInput.StartIcon = StartIcon;
const Select = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    disabled,
    isCompact,
    validation,
    focusInset,
    isBare,
    ...props
  } = _ref;
  const fieldContext = useFieldContext$1();
  let combinedProps = {
    disabled,
    isBare,
    isCompact,
    validation,
    focusInset,
    ref,
    ...props
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps, {
      isDescribed: true
    });
  }
  return /*#__PURE__*/React.createElement(StyledSelectWrapper, {
    isCompact: isCompact,
    isBare: isBare,
    validation: validation,
    focusInset: focusInset
  }, /*#__PURE__*/React.createElement(StyledSelect, combinedProps), !isBare && /*#__PURE__*/React.createElement(FauxInput.EndIcon, {
    isDisabled: disabled
  }, /*#__PURE__*/React.createElement(SvgChevronDownStroke$1, null)));
});
Select.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};
Select.displayName = 'Select';
const MIN = 0;
const MAX = 100;
const MultiThumbRange = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    min = MIN,
    max = MAX,
    minValue,
    maxValue,
    disabled,
    step,
    jump,
    onChange,
    onMouseDown,
    ...props
  } = _ref;
  const theme = reactExports.useContext(Be);
  const environment = useDocument(theme);
  const trackRailRef = reactExports.useRef(null);
  const minThumbRef = reactExports.useRef(null);
  const maxThumbRef = reactExports.useRef(null);
  const {
    getTrackProps,
    getMinThumbProps,
    getMaxThumbProps,
    trackRect,
    minValue: updatedMinValue,
    maxValue: updatedMaxValue
  } = useSlider({
    trackRef: trackRailRef,
    minThumbRef,
    maxThumbRef,
    min,
    max,
    minValue,
    maxValue,
    onChange,
    step,
    jump,
    disabled,
    rtl: theme.rtl,
    environment
  });
  const {
    onMouseDown: onSliderMouseDown,
    ...trackProps
  } = getTrackProps({
    onMouseDown
  });
  const fieldContext = useFieldContext$1();
  const {
    isLabelHovered,
    isLabelActive,
    multiThumbRangeRef
  } = fieldContext || {};
  reactExports.useEffect(() => {
    if (multiThumbRangeRef) {
      multiThumbRangeRef.current = minThumbRef.current;
    }
  }, [multiThumbRangeRef]);
  const minPosition = (updatedMinValue - min) / (max - min) * trackRect.width;
  const maxPosition = (updatedMaxValue - min) / (max - min) * trackRect.width;
  const sliderBackgroundSize = Math.abs(maxPosition) - Math.abs(minPosition);
  return /*#__PURE__*/React.createElement(StyledSlider, _extends$t({
    ref: ref,
    onMouseDown: onSliderMouseDown
  }, props), /*#__PURE__*/React.createElement(StyledSliderTrack, {
    backgroundSize: sliderBackgroundSize,
    backgroundPosition: theme.rtl ? trackRect.width - maxPosition : minPosition,
    isDisabled: disabled
  }, /*#__PURE__*/React.createElement(StyledSliderTrackRail, _extends$t({}, trackProps, {
    ref: trackRailRef
  }), /*#__PURE__*/React.createElement(StyledSliderThumb, _extends$t({}, getMinThumbProps({
    'aria-label': updatedMinValue
  }), {
    isDisabled: disabled,
    position: minPosition,
    ref: minThumbRef,
    "data-garden-active": isLabelActive,
    "data-garden-hover": isLabelHovered
  })), /*#__PURE__*/React.createElement(StyledSliderThumb, _extends$t({}, getMaxThumbProps({
    'aria-label': updatedMaxValue
  }), {
    isDisabled: disabled,
    position: maxPosition,
    ref: maxThumbRef
  })))));
});
MultiThumbRange.displayName = 'MultiThumbRange';
MultiThumbRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  jump: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
MultiThumbRange.defaultProps = {
  min: MIN,
  max: MAX,
  step: 1
};
const TilesContext = /*#__PURE__*/reactExports.createContext(undefined);
const useTilesContext = () => {
  return reactExports.useContext(TilesContext);
};
const TileComponent = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    value,
    disabled,
    ...props
  } = _ref;
  const tilesContext = useTilesContext();
  const inputRef = reactExports.useRef(null);
  let inputProps;
  if (tilesContext) {
    inputProps = {
      name: tilesContext.name,
      checked: tilesContext.value === value,
      onChange: tilesContext.onChange
    };
  }
  return /*#__PURE__*/React.createElement(StyledTile, _extends$t({
    ref: ref,
    "aria-disabled": disabled,
    isDisabled: disabled,
    isSelected: tilesContext && tilesContext.value === value
  }, props), children, /*#__PURE__*/React.createElement(StyledTileInput, _extends$t({}, inputProps, {
    disabled: disabled,
    value: value,
    type: "radio",
    ref: inputRef
  })));
});
TileComponent.displayName = 'Tiles.Tile';
TileComponent.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool
};
const Tile = TileComponent;
const DescriptionComponent = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
  const tilesContext = useTilesContext();
  return /*#__PURE__*/React.createElement(StyledTileDescription, _extends$t({
    ref: ref,
    isCentered: tilesContext && tilesContext.isCentered
  }, props));
});
DescriptionComponent.displayName = 'Tiles.Description';
const Description = DescriptionComponent;
const IconComponent = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
  const tileContext = useTilesContext();
  return /*#__PURE__*/React.createElement(StyledTileIcon, _extends$t({
    ref: ref,
    isCentered: tileContext && tileContext.isCentered
  }, props));
});
IconComponent.displayName = 'Tiles.Icon';
const Icon = IconComponent;
const LabelComponent = /*#__PURE__*/reactExports.forwardRef((props, forwardedRef) => {
  const [title, setTitle] = reactExports.useState('');
  const ref = reactExports.useRef();
  const tilesContext = useTilesContext();
  reactExports.useEffect(() => {
    if (ref.current) {
      setTitle(ref.current.textContent || undefined);
    }
  }, [ref]);
  return /*#__PURE__*/React.createElement(StyledTileLabel, _extends$t({
    ref: mergeRefs([ref, forwardedRef]),
    title: title,
    isCentered: tilesContext && tilesContext.isCentered
  }, props));
});
LabelComponent.displayName = 'Tiles.Label';
const Label$2 = LabelComponent;
const TilesComponent = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    onChange,
    value: controlledValue,
    name,
    isCentered,
    ...props
  } = _ref;
  const [value, setValue] = reactExports.useState(controlledValue);
  const handleOnChange = reactExports.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    setValue(args[0].target.value);
    if (onChange) {
      onChange(...args);
    }
  }, [onChange]);
  const selectedValue = getControlledValue(controlledValue, value);
  const tileContext = reactExports.useMemo(() => ({
    onChange: handleOnChange,
    value: selectedValue,
    name,
    isCentered
  }), [handleOnChange, selectedValue, name, isCentered]);
  return /*#__PURE__*/React.createElement(TilesContext.Provider, {
    value: tileContext
  }, /*#__PURE__*/React.createElement("div", _extends$t({
    ref: ref,
    role: "radiogroup"
  }, props)));
});
TilesComponent.displayName = 'Tiles';
TilesComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  isCentered: PropTypes.bool
};
TilesComponent.defaultProps = {
  isCentered: true
};
const Tiles = TilesComponent;
Tiles.Description = Description;
Tiles.Icon = Icon;
Tiles.Label = Label$2;
Tiles.Tile = Tile;
const InputGroup = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    isCompact,
    ...props
  } = _ref;
  const contextValue = reactExports.useMemo(() => ({
    isCompact
  }), [isCompact]);
  return /*#__PURE__*/React.createElement(InputGroupContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledInputGroup$1, _extends$t({
    ref: ref,
    isCompact: isCompact
  }, props)));
});
InputGroup.displayName = 'InputGroup';
InputGroup.propTypes = {
  isCompact: PropTypes.bool
};
const FileUpload = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    disabled,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledFileUpload, _extends$t({
    ref: ref,
    "aria-disabled": disabled
  }, props, {
    role: "button"
  }));
});
FileUpload.propTypes = {
  isDragging: PropTypes.bool,
  isCompact: PropTypes.bool,
  disabled: PropTypes.bool
};
FileUpload.displayName = 'FileUpload';
const ItemComponent = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledFileListItem, _extends$t({}, props, {
    ref: ref
  }));
});
ItemComponent.displayName = 'FileList.Item';
const Item = ItemComponent;
const FileListComponent = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledFileList, _extends$t({}, props, {
    ref: ref
  }));
});
FileListComponent.displayName = 'FileList';
const FileList = FileListComponent;
FileList.Item = Item;
var _path$j;
function _extends$k() {
  _extends$k = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$k.apply(this, arguments);
}
var SvgXStroke$1 = function SvgXStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$k({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$j || (_path$j = /*#__PURE__*/reactExports.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3 9l6-6m0 6L3 3"
  })));
};
var _path$i;
function _extends$j() {
  _extends$j = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$j.apply(this, arguments);
}
var SvgXStroke$2 = function SvgXStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$j({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$i || (_path$i = /*#__PURE__*/reactExports.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3 13L13 3m0 10L3 3"
  })));
};
const FileContext = /*#__PURE__*/reactExports.createContext(undefined);
const useFileContext = () => {
  return reactExports.useContext(FileContext);
};
const CloseComponent$1 = /*#__PURE__*/React.forwardRef((props, ref) => {
  const fileContext = useFileContext();
  const onMouseDown = composeEventHandlers$1(props.onMouseDown, event => event.preventDefault());
  const ariaLabel = useText(CloseComponent$1, props, 'aria-label', 'Close');
  return /*#__PURE__*/React.createElement(StyledFileClose, _extends$t({
    ref: ref,
    "aria-label": ariaLabel
  }, props, {
    type: "button",
    tabIndex: -1,
    onMouseDown: onMouseDown
  }), fileContext && fileContext.isCompact ? /*#__PURE__*/React.createElement(SvgXStroke$1, null) : /*#__PURE__*/React.createElement(SvgXStroke$2, null));
});
CloseComponent$1.displayName = 'File.Close';
const Close$1 = CloseComponent$1;
var _path$h;
function _extends$i() {
  _extends$i = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$i.apply(this, arguments);
}
var SvgTrashStroke$1 = function SvgTrashStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$i({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$h || (_path$h = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M4.5 2.5V1c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v1.5M2 2.5h8m-5.5 7V5m3 4.5V5m-5-.5V11c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5V4.5"
  })));
};
var _path$g;
function _extends$h() {
  _extends$h = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$h.apply(this, arguments);
}
var SvgTrashStroke = function SvgTrashStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$h({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$g || (_path$g = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M6.5 2.5V1c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v1.5M3 2.5h10m-6.5 11v-8m3 8v-8m-6-1V15c0 .3.2.5.5.5h8c.3 0 .5-.2.5-.5V4.5"
  })));
};
const DeleteComponent = /*#__PURE__*/React.forwardRef((props, ref) => {
  const fileContext = useFileContext();
  const onMouseDown = composeEventHandlers$1(props.onMouseDown, event => event.preventDefault());
  const ariaLabel = useText(DeleteComponent, props, 'aria-label', 'Delete');
  return /*#__PURE__*/React.createElement(StyledFileDelete, _extends$t({
    ref: ref,
    "aria-label": ariaLabel
  }, props, {
    type: "button",
    tabIndex: -1,
    onMouseDown: onMouseDown
  }), fileContext && fileContext.isCompact ? /*#__PURE__*/React.createElement(SvgTrashStroke$1, null) : /*#__PURE__*/React.createElement(SvgTrashStroke, null));
});
DeleteComponent.displayName = 'File.Delete';
const Delete = DeleteComponent;
var _path$f, _rect$1;
function _extends$g() {
  _extends$g = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$g.apply(this, arguments);
}
var SvgFilePdfStroke$1 = function SvgFilePdfStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$g({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$f || (_path$f = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M10.5 3.21V11a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V1A.5.5 0 012 .5h5.79a.5.5 0 01.35.15l2.21 2.21a.5.5 0 01.15.35zM7.5.5V3a.5.5 0 00.5.5h2.5m-7 6h5"
  })), _rect$1 || (_rect$1 = /*#__PURE__*/reactExports.createElement("rect", {
    width: 6,
    height: 3,
    x: 3,
    y: 5,
    fill: "currentColor",
    rx: 0.5,
    ry: 0.5
  })));
};
var _path$e;
function _extends$f() {
  _extends$f = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$f.apply(this, arguments);
}
var SvgFileZipStroke$1 = function SvgFileZipStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$f({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$e || (_path$e = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M4.5.5v8m0-6h1m-2 1h1m0 1h1m-2 1h1m0 1h1m-2 1h1m6-4.29V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5"
  })));
};
var _path$d, _circle$1;
function _extends$e() {
  _extends$e = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$e.apply(this, arguments);
}
var SvgFileImageStroke$1 = function SvgFileImageStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$e({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$d || (_path$d = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5m-7 6L5 8l1.5 1.5 1-1 1 1"
  })), _circle$1 || (_circle$1 = /*#__PURE__*/reactExports.createElement("circle", {
    cx: 8,
    cy: 6,
    r: 1,
    fill: "currentColor"
  })));
};
var _path$c;
function _extends$d() {
  _extends$d = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$d.apply(this, arguments);
}
var SvgFileDocumentStroke$1 = function SvgFileDocumentStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$d({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$c || (_path$c = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3.5 5.5h5m-5 2h5m-5 2h5m2-6.29V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5"
  })));
};
var _path$b;
function _extends$c() {
  _extends$c = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
var SvgFileSpreadsheetStroke$1 = function SvgFileSpreadsheetStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$c({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$b || (_path$b = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3.5 5.5h1m-1 2h1m-1 2h1m2-4h2m-2 2h2m-2 2h2m2-6.29V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5"
  })));
};
var _path$a;
function _extends$b() {
  _extends$b = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
var SvgFilePresentationStroke$1 = function SvgFilePresentationStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$b({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$a || (_path$a = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    d: "M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM6 9.5h2c.28 0 .5-.22.5-.5V8c0-.28-.22-.5-.5-.5H6c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zm-2-2h2c.28 0 .5-.22.5-.5V6c0-.28-.22-.5-.5-.5H4c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zm3.5-7V3c0 .28.22.5.5.5h2.5"
  })));
};
var _path$9;
function _extends$a() {
  _extends$a = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
var SvgFileGenericStroke$1 = function SvgFileGenericStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$a({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    d: "M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5"
  })));
};
var _g;
function _extends$9() {
  _extends$9 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
var SvgCheckCircleStroke = function SvgCheckCircleStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$9({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _g || (_g = /*#__PURE__*/reactExports.createElement("g", {
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.5 6l2 2L9 4.5"
  }), /*#__PURE__*/reactExports.createElement("circle", {
    cx: 6,
    cy: 6,
    r: 5.5
  }))));
};
var _path$8;
function _extends$8$1() {
  _extends$8$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8$1.apply(this, arguments);
}
var SvgFileErrorStroke$1 = function SvgFileErrorStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$8$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5M4 9.5l4-4m0 4l-4-4"
  })));
};
var _path$7, _rect;
function _extends$7$1() {
  _extends$7$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7$1.apply(this, arguments);
}
var SvgFilePdfStroke = function SvgFilePdfStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$7$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M14.5 4.2V15a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V1A.5.5 0 012 .5h8.85a.5.5 0 01.36.15l3.15 3.2a.5.5 0 01.14.35zm-10 8.3h7m-7-2h7m-1-10V4a.5.5 0 00.5.5h3.5"
  })), _rect || (_rect = /*#__PURE__*/reactExports.createElement("rect", {
    width: 8,
    height: 2,
    x: 4,
    y: 7,
    fill: "currentColor",
    rx: 0.5,
    ry: 0.5
  })));
};
var _path$6;
function _extends$6$1() {
  _extends$6$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6$1.apply(this, arguments);
}
var SvgFileZipStroke = function SvgFileZipStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$6$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M6.5.5v11M5 2.5h1.5m0 1H8m-3 1h1.5m0 1H8m-3 1h1.5m0 1H8m-3 1h1.5m0 1H8m-3 1h1.5m8-6.3V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5"
  })));
};
var _path$5$1, _circle;
function _extends$5$1() {
  _extends$5$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5$1.apply(this, arguments);
}
var SvgFileImageStroke = function SvgFileImageStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$5$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$5$1 || (_path$5$1 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M14.5 4.2V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5m-11 9l2.65-2.65c.2-.2.51-.2.71 0l1.79 1.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l1.65 1.65"
  })), _circle || (_circle = /*#__PURE__*/reactExports.createElement("circle", {
    cx: 10.5,
    cy: 8.5,
    r: 1.5,
    fill: "currentColor"
  })));
};
var _path$4$1;
function _extends$4$1() {
  _extends$4$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4$1.apply(this, arguments);
}
var SvgFileDocumentStroke = function SvgFileDocumentStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$4$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$4$1 || (_path$4$1 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M4.5 7.5h7m-7 1.97h7m-7 2h7m3-7.27V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5"
  })));
};
var _path$3$1;
function _extends$3$1() {
  _extends$3$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3$1.apply(this, arguments);
}
var SvgFileSpreadsheetStroke = function SvgFileSpreadsheetStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$3$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$3$1 || (_path$3$1 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M4.5 7.5h2m-2 2h2m-2 2h2m2-4h3m-3 2h3m-3 2h3m3-7.3V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5"
  })));
};
var _path$2$1;
function _extends$2$1() {
  _extends$2$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2$1.apply(this, arguments);
}
var SvgFilePresentationStroke = function SvgFilePresentationStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$2$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$2$1 || (_path$2$1 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    d: "M14.5 4.2V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5M7 9.5h4c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5H7c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5zm-.5 2H5c-.28 0-.5-.22-.5-.5V8c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1.5"
  })));
};
var _path$1$1;
function _extends$1$2() {
  _extends$1$2 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1$2.apply(this, arguments);
}
var SvgFileGenericStroke = function SvgFileGenericStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$1$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1$1 || (_path$1$1 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    d: "M14.5 4.2V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5"
  })));
};
var _path$o;
function _extends$u() {
  _extends$u = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$u.apply(this, arguments);
}
var SvgFileErrorStroke = function SvgFileErrorStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$u({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$o || (_path$o = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M14.5 4.205V15a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V1A.5.5 0 012 .5h8.853a.5.5 0 01.356.15l3.148 3.204a.5.5 0 01.143.35zM10.5.5V4a.5.5 0 00.5.5h3.5m-9 8l5-5m0 5l-5-5"
  })));
};
const fileIconsDefault = {
  pdf: /*#__PURE__*/React.createElement(SvgFilePdfStroke, null),
  zip: /*#__PURE__*/React.createElement(SvgFileZipStroke, null),
  image: /*#__PURE__*/React.createElement(SvgFileImageStroke, null),
  document: /*#__PURE__*/React.createElement(SvgFileDocumentStroke, null),
  spreadsheet: /*#__PURE__*/React.createElement(SvgFileSpreadsheetStroke, null),
  presentation: /*#__PURE__*/React.createElement(SvgFilePresentationStroke, null),
  generic: /*#__PURE__*/React.createElement(SvgFileGenericStroke, null),
  success: /*#__PURE__*/React.createElement(SvgCheckCircleStroke$1, null),
  error: /*#__PURE__*/React.createElement(SvgFileErrorStroke, null)
};
const fileIconsCompact = {
  pdf: /*#__PURE__*/React.createElement(SvgFilePdfStroke$1, null),
  zip: /*#__PURE__*/React.createElement(SvgFileZipStroke$1, null),
  image: /*#__PURE__*/React.createElement(SvgFileImageStroke$1, null),
  document: /*#__PURE__*/React.createElement(SvgFileDocumentStroke$1, null),
  spreadsheet: /*#__PURE__*/React.createElement(SvgFileSpreadsheetStroke$1, null),
  presentation: /*#__PURE__*/React.createElement(SvgFilePresentationStroke$1, null),
  generic: /*#__PURE__*/React.createElement(SvgFileGenericStroke$1, null),
  success: /*#__PURE__*/React.createElement(SvgCheckCircleStroke, null),
  error: /*#__PURE__*/React.createElement(SvgFileErrorStroke$1, null)
};
const FileComponent = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    children,
    type,
    isCompact,
    focusInset,
    validation,
    ...props
  } = _ref;
  const fileContextValue = reactExports.useMemo(() => ({
    isCompact
  }), [isCompact]);
  const validationType = validation || type;
  return /*#__PURE__*/React.createElement(FileContext.Provider, {
    value: fileContextValue
  }, /*#__PURE__*/React.createElement(StyledFile, _extends$t({}, props, {
    isCompact: isCompact,
    focusInset: focusInset,
    validation: validation,
    ref: ref
  }), validationType && /*#__PURE__*/React.createElement(StyledFileIcon, {
    isCompact: isCompact
  }, isCompact ? fileIconsCompact[validationType] : fileIconsDefault[validationType]), reactExports.Children.map(children, child => typeof child === 'string' ? /*#__PURE__*/React.createElement("span", null, child) : child)));
});
FileComponent.displayName = 'File';
FileComponent.propTypes = {
  focusInset: PropTypes.bool,
  isCompact: PropTypes.bool,
  type: PropTypes.oneOf(FILE_TYPE),
  validation: PropTypes.oneOf(FILE_VALIDATION)
};
const File = FileComponent;
File.Close = Close$1;
File.Delete = Delete;
const MediaInput = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    start,
    end,
    disabled,
    isCompact,
    isBare,
    focusInset,
    readOnly,
    validation,
    wrapperProps = {},
    wrapperRef,
    onSelect,
    ...props
  } = _ref;
  const fieldContext = useFieldContext$1();
  const inputRef = reactExports.useRef();
  const [isFocused, setIsFocused] = reactExports.useState(false);
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const {
    onClick,
    onFocus,
    onBlur,
    onMouseOver,
    onMouseOut,
    ...otherWrapperProps
  } = wrapperProps;
  const onFauxInputClickHandler = composeEventHandlers$1(onClick, () => {
    inputRef.current && inputRef.current.focus();
  });
  const onFauxInputFocusHandler = composeEventHandlers$1(onFocus, () => {
    setIsFocused(true);
  });
  const onFauxInputBlurHandler = composeEventHandlers$1(onBlur, () => {
    setIsFocused(false);
  });
  const onFauxInputMouseOverHandler = composeEventHandlers$1(onMouseOver, () => {
    setIsHovered(true);
  });
  const onFauxInputMouseOutHandler = composeEventHandlers$1(onMouseOut, () => {
    setIsHovered(false);
  });
  const onSelectHandler = readOnly ? composeEventHandlers$1(onSelect, event => {
    event.currentTarget.select();
  }) : onSelect;
  let combinedProps = {
    disabled,
    readOnly,
    ref: mergeRefs([inputRef, ref]),
    onSelect: onSelectHandler,
    ...props
  };
  let isLabelHovered;
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps, {
      isDescribed: true
    });
    isLabelHovered = fieldContext.isLabelHovered;
  }
  return /*#__PURE__*/React.createElement(FauxInput, _extends$t({
    tabIndex: null,
    onClick: onFauxInputClickHandler,
    onFocus: onFauxInputFocusHandler,
    onBlur: onFauxInputBlurHandler,
    onMouseOver: onFauxInputMouseOverHandler,
    onMouseOut: onFauxInputMouseOutHandler,
    disabled: disabled,
    isFocused: isFocused,
    isHovered: isHovered || isLabelHovered,
    isCompact: isCompact,
    isBare: isBare,
    focusInset: focusInset,
    readOnly: readOnly,
    validation: validation,
    mediaLayout: true
  }, otherWrapperProps, {
    ref: wrapperRef
  }), start && /*#__PURE__*/React.createElement(FauxInput.StartIcon, {
    isDisabled: disabled,
    isFocused: isFocused,
    isHovered: isHovered || isLabelHovered
  }, start), /*#__PURE__*/React.createElement(StyledTextMediaInput, combinedProps), end && /*#__PURE__*/React.createElement(FauxInput.EndIcon, {
    isDisabled: disabled,
    isFocused: isFocused,
    isHovered: isHovered || isLabelHovered
  }, end));
});
MediaInput.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION),
  start: PropTypes.node,
  end: PropTypes.node,
  wrapperProps: PropTypes.object,
  wrapperRef: PropTypes.any
};
MediaInput.displayName = 'MediaInput';

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
function _extends$1$1() {
  _extends$1$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1$1.apply(this, arguments);
}
const SIZE$1 = ['small', 'medium', 'large'];
const COMPONENT_ID$2$2 = 'tags.avatar';
const StyledAvatar = styled(_ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.cloneElement(reactExports.Children.only(children), props);
}).attrs({
  'data-garden-id': COMPONENT_ID$2$2,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledAvatar",
  componentId: "sc-3kdmgt-0"
})(["flex-shrink:0;font-size:0;", ";"], props => retrieveComponentStyles(COMPONENT_ID$2$2, props));
StyledAvatar.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$1$2 = 'tags.close';
const StyledClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID$1$2,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledClose",
  componentId: "sc-d6lrpn-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:0.8;border:0;background:transparent;cursor:pointer;padding:0;color:inherit;font-size:0;appearance:none;&:hover{opacity:0.9;}&:focus{outline:none;}", ";"], props => retrieveComponentStyles(COMPONENT_ID$1$2, props));
StyledClose.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$n = 'tags.tag_view';
const colorStyles$a = props => {
  let backgroundColor;
  let foregroundColor;
  let closeColor;
  if (props.hue) {
    const shade = props.hue === 'yellow' ? 400 : 600;
    backgroundColor = getColor(props.hue, shade, props.theme);
    if (props.hue === 'yellow' || props.hue === 'lemon') {
      foregroundColor = getColor('yellow', 800, props.theme);
    } else {
      foregroundColor = readableColor(backgroundColor, props.theme.palette.grey[800], props.theme.palette.white);
    }
  } else {
    backgroundColor = getColor('neutralHue', 200, props.theme);
    foregroundColor = getColor('neutralHue', 700, props.theme);
    closeColor = getColor('neutralHue', 600, props.theme);
  }
  return Ne(["background-color:", ";color:", ";&:hover{color:", ";}", " & ", "{color:", ";}"], backgroundColor, foregroundColor, foregroundColor, focusStyles({
    theme: props.theme,
    shadowWidth: 'sm',
    selector: '&:focus'
  }), StyledClose, closeColor);
};
const sizeStyles$c = props => {
  let borderRadius;
  let padding;
  let height;
  let fontSize;
  let minWidth;
  let avatarSize;
  if (props.size === 'small') {
    borderRadius = props.theme.borderRadii.sm;
    padding = props.theme.space.base;
    height = props.theme.space.base * 4;
    fontSize = props.theme.fontSizes.xs;
    avatarSize = 0;
  } else if (props.size === 'large') {
    borderRadius = props.theme.borderRadii.md;
    padding = props.theme.space.base * 3;
    height = props.theme.space.base * 8;
    fontSize = props.theme.fontSizes.sm;
    avatarSize = props.theme.space.base * 6;
  } else {
    borderRadius = props.theme.borderRadii.sm;
    padding = props.theme.space.base * 2;
    height = props.theme.space.base * 5;
    fontSize = props.theme.fontSizes.sm;
    avatarSize = props.theme.space.base * 4;
  }
  let avatarBorderRadius = props.size === 'large' ? math(`${borderRadius} - 1`) : borderRadius;
  const avatarMargin = (height - avatarSize) / 2;
  const avatarTextMargin = props.isRound ? avatarMargin : avatarMargin * 2;
  if (props.isRound) {
    borderRadius = '50%';
    padding = 0;
    minWidth = height;
    avatarBorderRadius = '50%';
  } else if (props.isPill) {
    borderRadius = '100px';
    avatarBorderRadius = '50%';
    if (props.size === 'small') {
      padding = props.theme.space.base * 1.5;
      minWidth = props.theme.space.base * 6;
    } else if (props.size === 'large') {
      minWidth = props.theme.space.base * 12;
    } else {
      minWidth = props.theme.space.base * 7.5;
    }
  }
  return Ne(["border-radius:", ";padding:0 ", "px;min-width:", ";height:", "px;line-height:", ";font-size:", ";& > *{width:100%;min-width:", ";}& ", "{margin-", ":-", "px;margin-", ":", "px;border-radius:", ";width:", "px;min-width:", "px;height:", "px;}& ", "{margin-", ":-", "px;border-radius:", ";width:", "px;height:", "px;}"], borderRadius, padding, minWidth ? `${minWidth}px` : `calc(${padding * 2}px + 1ch)`, height, getLineHeight(height, fontSize), fontSize, minWidth ? `${minWidth - padding * 2}px` : '1ch', StyledAvatar, props.theme.rtl ? 'right' : 'left', padding - avatarMargin, props.theme.rtl ? 'left' : 'right', avatarTextMargin, avatarBorderRadius, avatarSize, avatarSize, avatarSize, StyledClose, props.theme.rtl ? 'left' : 'right', padding, borderRadius, height, height);
};
const StyledTag$1 = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$n,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTag",
  componentId: "sc-1jvbe03-0"
})(["display:inline-flex;flex-wrap:nowrap;align-items:center;justify-content:", ";transition:box-shadow 0.1s ease-in-out;box-sizing:border-box;border:0;max-width:100%;overflow:hidden;vertical-align:middle;text-decoration:none;white-space:nowrap;font-weight:", ";direction:", ";", ";&:hover{cursor:default;text-decoration:none;}&:link:hover,&:visited:hover{cursor:pointer;}&:any-link:hover{cursor:pointer;}", "{text-decoration:none;}", ";& > *{overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;}& b{font-weight:", ";}& ", "{display:", ";}& ", "{display:", ";}", ";"], props => props.isRound && 'center', props => !props.isRegular && props.theme.fontWeights.semibold, props => props.theme.rtl ? 'rtl' : 'ltr', props => sizeStyles$c(props), SELECTOR_FOCUS_VISIBLE, props => colorStyles$a(props), props => props.theme.fontWeights.semibold, StyledAvatar, props => (props.isRound || props.size === 'small') && 'none', StyledClose, props => props.isRound && 'none', props => retrieveComponentStyles(COMPONENT_ID$n, props));
StyledTag$1.defaultProps = {
  size: 'medium',
  theme: DEFAULT_THEME
};
var _path$5;
function _extends$8() {
  _extends$8 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
var SvgXStroke = function SvgXStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$8({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/reactExports.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3 9l6-6m0 6L3 3"
  })));
};
const CloseComponent = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
  const ariaLabel = useText(CloseComponent, props, 'aria-label', 'Remove');
  return /*#__PURE__*/React.createElement(StyledClose, _extends$1$1({
    ref: ref,
    "aria-label": ariaLabel
  }, props, {
    type: "button",
    tabIndex: -1
  }), /*#__PURE__*/React.createElement(SvgXStroke, null));
});
CloseComponent.displayName = 'Tag.Close';
const Close = CloseComponent;
const AvatarComponent = props => /*#__PURE__*/React.createElement(StyledAvatar, props);
AvatarComponent.displayName = 'Tag.Avatar';
const Avatar = AvatarComponent;
const TagComponent$1 = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    size,
    hue,
    ...otherProps
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledTag$1, _extends$1$1({
    ref: ref,
    size: size,
    hue: hue
  }, otherProps));
});
TagComponent$1.displayName = 'Tag';
TagComponent$1.propTypes = {
  size: PropTypes.oneOf(SIZE$1),
  hue: PropTypes.string,
  isPill: PropTypes.bool,
  isRound: PropTypes.bool,
  isRegular: PropTypes.bool
};
TagComponent$1.defaultProps = {
  size: 'medium'
};
const Tag$1 = TagComponent$1;
Tag$1.Avatar = Avatar;
Tag$1.Close = Close;

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function getSide(placement) {
  return placement.split('-')[0];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const min$1 = Math.min;
const max$1 = Math.max;

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement$1(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement$1(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement$1(mainAlignmentSide)
  };
}

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement$1(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement$1(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const axis = getMainAxisFromPlacement(placement);
      const isXAxis = axis === 'x';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isXAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min$1(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min$1(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max$1(overflow.left, 0);
        const xMax = max$1(overflow.right, 0);
        const yMin = max$1(overflow.top, 0);
        const yMax = max$1(overflow.bottom, 0);
        if (isXAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max$1(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max$1(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function getWindow$1(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow$1(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow$1(value).Node;
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}

function isHTMLElement(value) {
  return value instanceof getWindow$1(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow$1(value).Element;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return node instanceof getWindow$1(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function isSafari() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createEmptyCoords = v => ({
  x: v,
  y: v
});

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createEmptyCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createEmptyCoords(0);
function getVisualOffsets(element, isFixed, floatingOffsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (isFixed === void 0) {
    isFixed = true;
  }
  if (!isSafari()) {
    return noOffsets;
  }
  const win = element ? getWindow$1(element) : window;
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
    return noOffsets;
  }
  return {
    x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
    y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
  };
}

function getBoundingClientRect$1(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createEmptyCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow$1(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow$1(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow$1(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createEmptyCoords(1);
  const offsets = createEmptyCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect$1(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect$1(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode$1(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode$1(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow$1(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow$1(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect$1(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createEmptyCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode$1(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode$1(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode$1(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode$1(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode$1(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent$1(element, polyfill) {
  const window = getWindow$1(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect$1(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createEmptyCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect$1(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent: getOffsetParent$1,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent$1;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect$1(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect$1(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

var index = typeof document !== 'undefined' ? reactExports.useLayoutEffect : reactExports.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual$2(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual$2(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual$2(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = reactExports.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/react
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = reactExports.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware);
  if (!deepEqual$2(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = reactExports.useState(null);
  const [_floating, _setFloating] = reactExports.useState(null);
  const setReference = reactExports.useCallback(node => {
    if (node != referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, [_setReference]);
  const setFloating = reactExports.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, [_setFloating]);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = reactExports.useRef(null);
  const floatingRef = reactExports.useRef(null);
  const dataRef = reactExports.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = reactExports.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual$2(dataRef.current, fullData)) {
        dataRef.current = fullData;
        reactDomExports.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = reactExports.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      } else {
        update();
      }
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
  const refs = reactExports.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = reactExports.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = reactExports.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return reactExports.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
const useTooltip = function (_temp) {
  let {
    delayMilliseconds = 500,
    id,
    isVisible
  } = _temp === void 0 ? {} : _temp;
  const [visibility, setVisibility] = reactExports.useState(isVisible);
  const seed = useUIDSeed();
  const _id = reactExports.useMemo(() => id || seed(`tooltip_${'1.0.6'}`), [id, seed]);
  const isMounted = reactExports.useRef(false);
  const openTooltipTimeoutId = reactExports.useRef();
  const closeTooltipTimeoutId = reactExports.useRef();
  const openTooltip = function (delayMs) {
    if (delayMs === void 0) {
      delayMs = delayMilliseconds;
    }
    clearTimeout(closeTooltipTimeoutId.current);
    const timerId = setTimeout(() => {
      if (isMounted.current) {
        setVisibility(true);
      }
    }, delayMs);
    openTooltipTimeoutId.current = Number(timerId);
  };
  const closeTooltip = function (delayMs) {
    if (delayMs === void 0) {
      delayMs = delayMilliseconds;
    }
    clearTimeout(openTooltipTimeoutId.current);
    const timerId = setTimeout(() => {
      if (isMounted.current) {
        setVisibility(false);
      }
    }, delayMs);
    closeTooltipTimeoutId.current = Number(timerId);
  };
  reactExports.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  reactExports.useEffect(() => {
    return () => {
      clearTimeout(openTooltipTimeoutId.current);
      clearTimeout(closeTooltipTimeoutId.current);
    };
  }, [closeTooltipTimeoutId, openTooltipTimeoutId]);
  const getTriggerProps = function (_temp2) {
    let {
      tabIndex = 0,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onKeyDown,
      ...other
    } = _temp2 === void 0 ? {} : _temp2;
    return {
      tabIndex,
      onMouseEnter: composeEventHandlers$1(onMouseEnter, () => openTooltip()),
      onMouseLeave: composeEventHandlers$1(onMouseLeave, () => closeTooltip()),
      onFocus: composeEventHandlers$1(onFocus, () => openTooltip()),
      onBlur: composeEventHandlers$1(onBlur, () => closeTooltip(0)),
      onKeyDown: composeEventHandlers$1(onKeyDown, event => {
        if (event.keyCode === KEY_CODES.ESCAPE && visibility) {
          closeTooltip(0);
        }
      }),
      'aria-describedby': _id,
      'data-garden-container-id': 'containers.tooltip',
      'data-garden-container-version': '1.0.6',
      ...other
    };
  };
  const getTooltipProps = function (_temp3) {
    let {
      role = 'tooltip',
      onMouseEnter,
      onMouseLeave,
      ...other
    } = _temp3 === void 0 ? {} : _temp3;
    return {
      role,
      onMouseEnter: composeEventHandlers$1(onMouseEnter, () => openTooltip()),
      onMouseLeave: composeEventHandlers$1(onMouseLeave, () => closeTooltip()),
      'aria-hidden': !visibility,
      id: _id,
      ...other
    };
  };
  return {
    isVisible: visibility,
    getTooltipProps,
    getTriggerProps,
    openTooltip,
    closeTooltip
  };
};
({
  children: PropTypes.func,
  render: PropTypes.func,
  delayMilliseconds: PropTypes.number,
  isVisible: PropTypes.bool
});

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var toStr$3 = Object.prototype.toString;
var isArguments$2 = function isArguments(value) {
  var str = toStr$3.call(value);
  var isArgs = str === '[object Arguments]';
  if (!isArgs) {
    isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr$3.call(value.callee) === '[object Function]';
  }
  return isArgs;
};

var implementation$9;
var hasRequiredImplementation;

function requireImplementation () {
	if (hasRequiredImplementation) return implementation$9;
	hasRequiredImplementation = 1;

	var keysShim;
	if (!Object.keys) {
	  // modified from https://github.com/es-shims/es5-shim
	  var has = Object.prototype.hasOwnProperty;
	  var toStr = Object.prototype.toString;
	  var isArgs = isArguments$2; // eslint-disable-line global-require
	  var isEnumerable = Object.prototype.propertyIsEnumerable;
	  var hasDontEnumBug = !isEnumerable.call({
	    toString: null
	  }, 'toString');
	  var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	  var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
	  var equalsConstructorPrototype = function (o) {
	    var ctor = o.constructor;
	    return ctor && ctor.prototype === o;
	  };
	  var excludedKeys = {
	    $applicationCache: true,
	    $console: true,
	    $external: true,
	    $frame: true,
	    $frameElement: true,
	    $frames: true,
	    $innerHeight: true,
	    $innerWidth: true,
	    $onmozfullscreenchange: true,
	    $onmozfullscreenerror: true,
	    $outerHeight: true,
	    $outerWidth: true,
	    $pageXOffset: true,
	    $pageYOffset: true,
	    $parent: true,
	    $scrollLeft: true,
	    $scrollTop: true,
	    $scrollX: true,
	    $scrollY: true,
	    $self: true,
	    $webkitIndexedDB: true,
	    $webkitStorageInfo: true,
	    $window: true
	  };
	  var hasAutomationEqualityBug = function () {
	    /* global window */
	    if (typeof window === 'undefined') {
	      return false;
	    }
	    for (var k in window) {
	      try {
	        if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
	          try {
	            equalsConstructorPrototype(window[k]);
	          } catch (e) {
	            return true;
	          }
	        }
	      } catch (e) {
	        return true;
	      }
	    }
	    return false;
	  }();
	  var equalsConstructorPrototypeIfNotBuggy = function (o) {
	    /* global window */
	    if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
	      return equalsConstructorPrototype(o);
	    }
	    try {
	      return equalsConstructorPrototype(o);
	    } catch (e) {
	      return false;
	    }
	  };
	  keysShim = function keys(object) {
	    var isObject = object !== null && typeof object === 'object';
	    var isFunction = toStr.call(object) === '[object Function]';
	    var isArguments = isArgs(object);
	    var isString = isObject && toStr.call(object) === '[object String]';
	    var theKeys = [];
	    if (!isObject && !isFunction && !isArguments) {
	      throw new TypeError('Object.keys called on a non-object');
	    }
	    var skipProto = hasProtoEnumBug && isFunction;
	    if (isString && object.length > 0 && !has.call(object, 0)) {
	      for (var i = 0; i < object.length; ++i) {
	        theKeys.push(String(i));
	      }
	    }
	    if (isArguments && object.length > 0) {
	      for (var j = 0; j < object.length; ++j) {
	        theKeys.push(String(j));
	      }
	    } else {
	      for (var name in object) {
	        if (!(skipProto && name === 'prototype') && has.call(object, name)) {
	          theKeys.push(String(name));
	        }
	      }
	    }
	    if (hasDontEnumBug) {
	      var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	      for (var k = 0; k < dontEnums.length; ++k) {
	        if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
	          theKeys.push(dontEnums[k]);
	        }
	      }
	    }
	    return theKeys;
	  };
	}
	implementation$9 = keysShim;
	return implementation$9;
}

var slice$1 = Array.prototype.slice;
var isArgs = isArguments$2;
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
  return origKeys(o);
} : requireImplementation();
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
  if (Object.keys) {
    var keysWorksWithArguments = function () {
      // Safari 5.0 bug
      var args = Object.keys(arguments);
      return args && args.length === arguments.length;
    }(1, 2);
    if (!keysWorksWithArguments) {
      Object.keys = function keys(object) {
        // eslint-disable-line func-name-matching
        if (isArgs(object)) {
          return originalKeys(slice$1.call(object));
        }
        return originalKeys(object);
      };
    }
  } else {
    Object.keys = keysShim;
  }
  return Object.keys || keysShim;
};
var objectKeys$1 = keysShim;

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams$1 = function hasSymbols() {
  if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
    return false;
  }
  if (typeof Symbol.iterator === 'symbol') {
    return true;
  }
  var obj = {};
  var sym = Symbol('test');
  var symObj = Object(sym);
  if (typeof sym === 'string') {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
    return false;
  }

  // temp disabled per https://github.com/ljharb/object.assign/issues/17
  // if (sym instanceof Symbol) { return false; }
  // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  // if (!(symObj instanceof Symbol)) { return false; }

  // if (typeof Symbol.prototype.toString !== 'function') { return false; }
  // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
  if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === 'function') {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};

var hasSymbols$3 = shams$1;
var shams = function hasToStringTagShams() {
  return hasSymbols$3() && !!Symbol.toStringTag;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = shams$1;
var hasSymbols$2 = function hasNativeSymbols() {
  if (typeof origSymbol !== 'function') {
    return false;
  }
  if (typeof Symbol !== 'function') {
    return false;
  }
  if (typeof origSymbol('foo') !== 'symbol') {
    return false;
  }
  if (typeof Symbol('bar') !== 'symbol') {
    return false;
  }
  return hasSymbolSham();
};

var test = {
  foo: {}
};
var $Object = Object;
var hasProto$1 = function hasProto() {
  return {
    __proto__: test
  }.foo === test.foo && !({
    __proto__: null
  } instanceof $Object);
};

/* eslint no-invalid-this: 1 */
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr$2 = Object.prototype.toString;
var funcType = '[object Function]';
var implementation$8 = function bind(that) {
  var target = this;
  if (typeof target !== 'function' || toStr$2.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slice.call(arguments, 1);
  var bound;
  var binder = function () {
    if (this instanceof bound) {
      var result = target.apply(this, args.concat(slice.call(arguments)));
      if (Object(result) === result) {
        return result;
      }
      return this;
    } else {
      return target.apply(that, args.concat(slice.call(arguments)));
    }
  };
  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs.push('$' + i);
  }
  bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
  if (target.prototype) {
    var Empty = function Empty() {};
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};

var implementation$7 = implementation$8;
var functionBind = Function.prototype.bind || implementation$7;

var bind$1 = functionBind;
var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);

var undefined$1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
  } catch (e) {}
};
var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
  try {
    $gOPD$1({}, '');
  } catch (e) {
    $gOPD$1 = null; // this is IE 8, which has a broken gOPD
  }
}

var throwTypeError = function () {
  throw new $TypeError();
};
var ThrowTypeError = $gOPD$1 ? function () {
  try {
    // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
    arguments.callee; // IE 8 does not throw here
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
      return $gOPD$1(arguments, 'callee').get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols$1 = hasSymbols$2();
var hasProto = hasProto$1();
var getProto$1 = Object.getPrototypeOf || (hasProto ? function (x) {
  return x.__proto__;
} // eslint-disable-line no-proto
: null);
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto$1 ? undefined$1 : getProto$1(Uint8Array);
var INTRINSICS = {
  '%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
  '%Array%': Array,
  '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
  '%ArrayIteratorPrototype%': hasSymbols$1 && getProto$1 ? getProto$1([][Symbol.iterator]()) : undefined$1,
  '%AsyncFromSyncIteratorPrototype%': undefined$1,
  '%AsyncFunction%': needsEval,
  '%AsyncGenerator%': needsEval,
  '%AsyncGeneratorFunction%': needsEval,
  '%AsyncIteratorPrototype%': needsEval,
  '%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
  '%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
  '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
  '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
  '%Boolean%': Boolean,
  '%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
  '%Date%': Date,
  '%decodeURI%': decodeURI,
  '%decodeURIComponent%': decodeURIComponent,
  '%encodeURI%': encodeURI,
  '%encodeURIComponent%': encodeURIComponent,
  '%Error%': Error,
  '%eval%': eval,
  // eslint-disable-line no-eval
  '%EvalError%': EvalError,
  '%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
  '%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
  '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
  '%Function%': $Function,
  '%GeneratorFunction%': needsEval,
  '%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
  '%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
  '%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
  '%isFinite%': isFinite,
  '%isNaN%': isNaN,
  '%IteratorPrototype%': hasSymbols$1 && getProto$1 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
  '%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
  '%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
  '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 || !getProto$1 ? undefined$1 : getProto$1(new Map()[Symbol.iterator]()),
  '%Math%': Math,
  '%Number%': Number,
  '%Object%': Object,
  '%parseFloat%': parseFloat,
  '%parseInt%': parseInt,
  '%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
  '%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
  '%RangeError%': RangeError,
  '%ReferenceError%': ReferenceError,
  '%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
  '%RegExp%': RegExp,
  '%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
  '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 || !getProto$1 ? undefined$1 : getProto$1(new Set()[Symbol.iterator]()),
  '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
  '%String%': String,
  '%StringIteratorPrototype%': hasSymbols$1 && getProto$1 ? getProto$1(''[Symbol.iterator]()) : undefined$1,
  '%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
  '%SyntaxError%': $SyntaxError,
  '%ThrowTypeError%': ThrowTypeError,
  '%TypedArray%': TypedArray,
  '%TypeError%': $TypeError,
  '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
  '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
  '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
  '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
  '%URIError%': URIError,
  '%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
  '%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
  '%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};
if (getProto$1) {
  try {
    null.error; // eslint-disable-line no-unused-expressions
  } catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto$1(getProto$1(e));
    INTRINSICS['%Error.prototype%'] = errorProto;
  }
}
var doEval = function doEval(name) {
  var value;
  if (name === '%AsyncFunction%') {
    value = getEvalledConstructor('async function () {}');
  } else if (name === '%GeneratorFunction%') {
    value = getEvalledConstructor('function* () {}');
  } else if (name === '%AsyncGeneratorFunction%') {
    value = getEvalledConstructor('async function* () {}');
  } else if (name === '%AsyncGenerator%') {
    var fn = doEval('%AsyncGeneratorFunction%');
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === '%AsyncIteratorPrototype%') {
    var gen = doEval('%AsyncGenerator%');
    if (gen && getProto$1) {
      value = getProto$1(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
  '%ArrayPrototype%': ['Array', 'prototype'],
  '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
  '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
  '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
  '%ArrayProto_values%': ['Array', 'prototype', 'values'],
  '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
  '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
  '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
  '%BooleanPrototype%': ['Boolean', 'prototype'],
  '%DataViewPrototype%': ['DataView', 'prototype'],
  '%DatePrototype%': ['Date', 'prototype'],
  '%ErrorPrototype%': ['Error', 'prototype'],
  '%EvalErrorPrototype%': ['EvalError', 'prototype'],
  '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
  '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
  '%FunctionPrototype%': ['Function', 'prototype'],
  '%Generator%': ['GeneratorFunction', 'prototype'],
  '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
  '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
  '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
  '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
  '%JSONParse%': ['JSON', 'parse'],
  '%JSONStringify%': ['JSON', 'stringify'],
  '%MapPrototype%': ['Map', 'prototype'],
  '%NumberPrototype%': ['Number', 'prototype'],
  '%ObjectPrototype%': ['Object', 'prototype'],
  '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
  '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
  '%PromisePrototype%': ['Promise', 'prototype'],
  '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
  '%Promise_all%': ['Promise', 'all'],
  '%Promise_reject%': ['Promise', 'reject'],
  '%Promise_resolve%': ['Promise', 'resolve'],
  '%RangeErrorPrototype%': ['RangeError', 'prototype'],
  '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
  '%RegExpPrototype%': ['RegExp', 'prototype'],
  '%SetPrototype%': ['Set', 'prototype'],
  '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
  '%StringPrototype%': ['String', 'prototype'],
  '%SymbolPrototype%': ['Symbol', 'prototype'],
  '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
  '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
  '%TypeErrorPrototype%': ['TypeError', 'prototype'],
  '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
  '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
  '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
  '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
  '%URIErrorPrototype%': ['URIError', 'prototype'],
  '%WeakMapPrototype%': ['WeakMap', 'prototype'],
  '%WeakSetPrototype%': ['WeakSet', 'prototype']
};
var bind = functionBind;
var hasOwn = src;
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec$1 = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === '%' && last !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
  } else if (last === '%' && first !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
  }
  var result = [];
  $replace(string, rePropName, function (match, number, quote, subString) {
    result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
  });
  return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = '%' + alias[0] + '%';
  }
  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === 'undefined' && !allowMissing) {
      throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
    }
    return {
      alias: alias,
      name: intrinsicName,
      value: value
    };
  }
  throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new $TypeError('intrinsic name must be a non-empty string');
  }
  if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
    throw new $TypeError('"allowMissing" argument must be a boolean');
  }
  if ($exec$1(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
  var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
      throw new $SyntaxError('property names with quotes must have matching quotes');
    }
    if (part === 'constructor' || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += '.' + part;
    intrinsicRealName = '%' + intrinsicBaseName + '%';
    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
        }
        return void undefined$1;
      }
      if ($gOPD$1 && i + 1 >= parts.length) {
        var desc = $gOPD$1(value, part);
        isOwn = !!desc;

        // By convention, when a data property is converted to an accessor
        // property to emulate a data property that does not suffer from
        // the override mistake, that accessor's getter is marked with
        // an `originalValue` property. Here, when we detect this, we
        // uphold the illusion by pretending to see that original data
        // property, i.e., returning the value rather than the getter
        // itself.
        if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};

var callBind$3 = {exports: {}};

callBind$3.exports;

(function (module) {

	var bind = functionBind;
	var GetIntrinsic = getIntrinsic;
	var $apply = GetIntrinsic('%Function.prototype.apply%');
	var $call = GetIntrinsic('%Function.prototype.call%');
	var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
	var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
	var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
	var $max = GetIntrinsic('%Math.max%');
	if ($defineProperty) {
	  try {
	    $defineProperty({}, 'a', {
	      value: 1
	    });
	  } catch (e) {
	    // IE 8 has a broken defineProperty
	    $defineProperty = null;
	  }
	}
	module.exports = function callBind(originalFunction) {
	  var func = $reflectApply(bind, $call, arguments);
	  if ($gOPD && $defineProperty) {
	    var desc = $gOPD(func, 'length');
	    if (desc.configurable) {
	      // original length, plus the receiver, minus any additional arguments (after the receiver)
	      $defineProperty(func, 'length', {
	        value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
	      });
	    }
	  }
	  return func;
	};
	var applyBind = function applyBind() {
	  return $reflectApply(bind, $apply, arguments);
	};
	if ($defineProperty) {
	  $defineProperty(module.exports, 'apply', {
	    value: applyBind
	  });
	} else {
	  module.exports.apply = applyBind;
	} 
} (callBind$3));

var callBindExports = callBind$3.exports;

var GetIntrinsic$1 = getIntrinsic;
var callBind$2 = callBindExports;
var $indexOf = callBind$2(GetIntrinsic$1('String.prototype.indexOf'));
var callBound$2 = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic$1(name, !!allowMissing);
  if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
    return callBind$2(intrinsic);
  }
  return intrinsic;
};

var hasToStringTag$2 = shams();
var callBound$1 = callBound$2;
var $toString$1 = callBound$1('Object.prototype.toString');
var isStandardArguments = function isArguments(value) {
  if (hasToStringTag$2 && value && typeof value === 'object' && Symbol.toStringTag in value) {
    return false;
  }
  return $toString$1(value) === '[object Arguments]';
};
var isLegacyArguments = function isArguments(value) {
  if (isStandardArguments(value)) {
    return true;
  }
  return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString$1(value) !== '[object Array]' && $toString$1(value.callee) === '[object Function]';
};
var supportsStandardArguments = function () {
  return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

var isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

var GetIntrinsic = getIntrinsic;
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasPropertyDescriptors$1 = function hasPropertyDescriptors() {
  if ($defineProperty) {
    try {
      $defineProperty({}, 'a', {
        value: 1
      });
      return true;
    } catch (e) {
      // IE 8 has a broken defineProperty
      return false;
    }
  }
  return false;
};
hasPropertyDescriptors$1.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  // node v0.6 has a bug where array lengths can be Set but not Defined
  if (!hasPropertyDescriptors$1()) {
    return null;
  }
  try {
    return $defineProperty([], 'length', {
      value: 1
    }).length !== 1;
  } catch (e) {
    // In Firefox 4-22, defining length on an array throws an exception.
    return true;
  }
};
var hasPropertyDescriptors_1 = hasPropertyDescriptors$1;

var keys = objectKeys$1;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr$1 = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction$1 = function (fn) {
  return typeof fn === 'function' && toStr$1.call(fn) === '[object Function]';
};
var hasPropertyDescriptors = hasPropertyDescriptors_1();
var supportsDescriptors$2 = origDefineProperty && hasPropertyDescriptors;
var defineProperty$2 = function (object, name, value, predicate) {
  if (name in object) {
    if (predicate === true) {
      if (object[name] === value) {
        return;
      }
    } else if (!isFunction$1(predicate) || !predicate()) {
      return;
    }
  }
  if (supportsDescriptors$2) {
    origDefineProperty(object, name, {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    });
  } else {
    object[name] = value; // eslint-disable-line no-param-reassign
  }
};

var defineProperties = function (object, map) {
  var predicates = arguments.length > 2 ? arguments[2] : {};
  var props = keys(map);
  if (hasSymbols) {
    props = concat.call(props, Object.getOwnPropertySymbols(map));
  }
  for (var i = 0; i < props.length; i += 1) {
    defineProperty$2(object, props[i], map[props[i]], predicates[props[i]]);
  }
};
defineProperties.supportsDescriptors = !!supportsDescriptors$2;
var defineProperties_1 = defineProperties;

var numberIsNaN = function (value) {
  return value !== value;
};
var implementation$6 = function is(a, b) {
  if (a === 0 && b === 0) {
    return 1 / a === 1 / b;
  }
  if (a === b) {
    return true;
  }
  if (numberIsNaN(a) && numberIsNaN(b)) {
    return true;
  }
  return false;
};

var implementation$5 = implementation$6;
var polyfill$2 = function getPolyfill() {
  return typeof Object.is === 'function' ? Object.is : implementation$5;
};

var getPolyfill$3 = polyfill$2;
var define$2 = defineProperties_1;
var shim$3 = function shimObjectIs() {
  var polyfill = getPolyfill$3();
  define$2(Object, {
    is: polyfill
  }, {
    is: function testObjectIs() {
      return Object.is !== polyfill;
    }
  });
  return polyfill;
};

var define$1 = defineProperties_1;
var callBind$1 = callBindExports;
var implementation$4 = implementation$6;
var getPolyfill$2 = polyfill$2;
var shim$2 = shim$3;
var polyfill$1 = callBind$1(getPolyfill$2(), Object);
define$1(polyfill$1, {
  getPolyfill: getPolyfill$2,
  implementation: implementation$4,
  shim: shim$2
});
var objectIs = polyfill$1;

var callBound = callBound$2;
var hasToStringTag$1 = shams();
var has;
var $exec;
var isRegexMarker;
var badStringifier;
if (hasToStringTag$1) {
  has = callBound('Object.prototype.hasOwnProperty');
  $exec = callBound('RegExp.prototype.exec');
  isRegexMarker = {};
  var throwRegexMarker = function () {
    throw isRegexMarker;
  };
  badStringifier = {
    toString: throwRegexMarker,
    valueOf: throwRegexMarker
  };
  if (typeof Symbol.toPrimitive === 'symbol') {
    badStringifier[Symbol.toPrimitive] = throwRegexMarker;
  }
}
var $toString = callBound('Object.prototype.toString');
var gOPD$2 = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';
var isRegex$1 = hasToStringTag$1
// eslint-disable-next-line consistent-return
? function isRegex(value) {
  if (!value || typeof value !== 'object') {
    return false;
  }
  var descriptor = gOPD$2(value, 'lastIndex');
  var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
  if (!hasLastIndexDataProperty) {
    return false;
  }
  try {
    $exec(value, badStringifier);
  } catch (e) {
    return e === isRegexMarker;
  }
} : function isRegex(value) {
  // In older browsers, typeof regex incorrectly returns 'function'
  if (!value || typeof value !== 'object' && typeof value !== 'function') {
    return false;
  }
  return $toString(value) === regexClass;
};

var implementation$3 = {exports: {}};

var functionsHaveNames = function functionsHaveNames() {
  return typeof function f() {}.name === 'string';
};
var gOPD$1 = Object.getOwnPropertyDescriptor;
if (gOPD$1) {
  try {
    gOPD$1([], 'length');
  } catch (e) {
    // IE 8 has a broken gOPD
    gOPD$1 = null;
  }
}
functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
  if (!functionsHaveNames() || !gOPD$1) {
    return false;
  }
  var desc = gOPD$1(function () {}, 'name');
  return !!desc && !!desc.configurable;
};
var $bind = Function.prototype.bind;
functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
  return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
};
var functionsHaveNames_1 = functionsHaveNames;

implementation$3.exports;

(function (module) {

	var functionsHaveConfigurableNames = functionsHaveNames_1.functionsHaveConfigurableNames();
	var $Object = Object;
	var $TypeError = TypeError;
	module.exports = function flags() {
	  if (this != null && this !== $Object(this)) {
	    throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	  }
	  var result = '';
	  if (this.hasIndices) {
	    result += 'd';
	  }
	  if (this.global) {
	    result += 'g';
	  }
	  if (this.ignoreCase) {
	    result += 'i';
	  }
	  if (this.multiline) {
	    result += 'm';
	  }
	  if (this.dotAll) {
	    result += 's';
	  }
	  if (this.unicode) {
	    result += 'u';
	  }
	  if (this.unicodeSets) {
	    result += 'v';
	  }
	  if (this.sticky) {
	    result += 'y';
	  }
	  return result;
	};
	if (functionsHaveConfigurableNames && Object.defineProperty) {
	  Object.defineProperty(module.exports, 'name', {
	    value: 'get flags'
	  });
	} 
} (implementation$3));

var implementationExports$1 = implementation$3.exports;

var implementation$2 = implementationExports$1;
var supportsDescriptors$1 = defineProperties_1.supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var polyfill = function getPolyfill() {
  if (supportsDescriptors$1 && /a/mig.flags === 'gim') {
    var descriptor = $gOPD(RegExp.prototype, 'flags');
    if (descriptor && typeof descriptor.get === 'function' && typeof RegExp.prototype.dotAll === 'boolean' && typeof RegExp.prototype.hasIndices === 'boolean') {
      /* eslint getter-return: 0 */
      var calls = '';
      var o = {};
      Object.defineProperty(o, 'hasIndices', {
        get: function () {
          calls += 'd';
        }
      });
      Object.defineProperty(o, 'sticky', {
        get: function () {
          calls += 'y';
        }
      });
      if (calls === 'dy') {
        return descriptor.get;
      }
    }
  }
  return implementation$2;
};

var supportsDescriptors = defineProperties_1.supportsDescriptors;
var getPolyfill$1 = polyfill;
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty$1 = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;
var shim$1 = function shimFlags() {
  if (!supportsDescriptors || !getProto) {
    throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
  }
  var polyfill = getPolyfill$1();
  var proto = getProto(regex);
  var descriptor = gOPD(proto, 'flags');
  if (!descriptor || descriptor.get !== polyfill) {
    defineProperty$1(proto, 'flags', {
      configurable: true,
      enumerable: false,
      get: polyfill
    });
  }
  return polyfill;
};

var define = defineProperties_1;
var callBind = callBindExports;
var implementation$1 = implementationExports$1;
var getPolyfill = polyfill;
var shim = shim$1;
var flagsBound = callBind(getPolyfill());
define(flagsBound, {
  getPolyfill: getPolyfill,
  implementation: implementation$1,
  shim: shim
});
var regexp_prototype_flags = flagsBound;

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
  try {
    getDay.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = shams();
var isDateObject = function isDateObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

var objectKeys = objectKeys$1;
var isArguments = isArguments$1;
var is = objectIs;
var isRegex = isRegex$1;
var flags = regexp_prototype_flags;
var isDate = isDateObject;
var getTime = Date.prototype.getTime;
function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || typeof actual !== 'object' && typeof expected !== 'object') {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}
function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}
function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}
function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) {
    return false;
  }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) {
    return false;
  }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) {
    return false;
  }
  if (isArguments(a) !== isArguments(b)) {
    return false;
  }
  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) {
    return false;
  }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }
  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }
  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) {
    return false;
  }
  if (aIsBuffer || bIsBuffer) {
    // && would work too, because both are true or both false here
    if (a.length !== b.length) {
      return false;
    }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) {
    // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) {
    return false;
  }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) {
      return false;
    }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) {
      return false;
    }
  }
  return true;
}
var deepEqual_1 = deepEqual;

var deepEqual$1 = /*@__PURE__*/getDefaultExportFromCjs(deepEqual_1);

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';
var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();
function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}
function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}
var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
    overflow = _getStyleComputedProp.overflow,
    overflowX = _getStyleComputedProp.overflowX,
    overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}
function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}
function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var _extends$7 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$7({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }
  return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
        height = _getWindowSizes.height,
        width = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}
function getArea(_ref) {
  var width = _ref.width,
    height = _ref.height;
  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  if (placement.indexOf('auto') === -1) {
    return placement;
  }
  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$7({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
      height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }
  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }
  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
      enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }
  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });
  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }
  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var round = Math.round,
    floor = Math.floor;
  var noRound = function noRound(v) {
    return v;
  };
  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
    y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
    top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$7({}, attributes, data.attributes);
  data.styles = _extends$7({}, styles, data.styles);
  data.arrowStyles = _extends$7({}, data.offsets.arrow, data.arrowStyles);
  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }
  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }
  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }
  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];
  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }
  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }
    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$7({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';
  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }
  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }
  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }
    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));
  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
    _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }
  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }
  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
    left = popperStyles.left,
    transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$7({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
      reference = _data$offsets.reference,
      popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends$7({}, popper, shiftOffsets[shiftvariation]);
  }
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }
  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }
    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }
    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },
  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',
  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,
  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,
  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},
  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper$1 = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);
    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$7({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$7({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$7({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$7({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }
    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs

  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]);

  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper$1.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper$1.placements = placements;
Popper$1.Defaults = Defaults;
var PopperJS = Popper$1;

var lib = {exports: {}};

var implementation = {exports: {}};

var key = '__global_unique_id__';
var gud = function () {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var warning = function () {};
var warning_1 = warning;

var warning$1 = /*@__PURE__*/getDefaultExportFromCjs(warning_1);

implementation.exports;

(function (module, exports) {

	exports.__esModule = true;
	var _react = reactExports;
	_interopRequireDefault(_react);
	var _propTypes = propTypesExports;
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _gud = gud;
	var _gud2 = _interopRequireDefault(_gud);
	var _warning = warning_1;
	_interopRequireDefault(_warning);
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var MAX_SIGNED_31_BIT_INT = 1073741823;

	// Inlined Object.is polyfill.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	function objectIs(x, y) {
	  if (x === y) {
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	function createEventEmitter(value) {
	  var handlers = [];
	  return {
	    on: function on(handler) {
	      handlers.push(handler);
	    },
	    off: function off(handler) {
	      handlers = handlers.filter(function (h) {
	        return h !== handler;
	      });
	    },
	    get: function get() {
	      return value;
	    },
	    set: function set(newValue, changedBits) {
	      value = newValue;
	      handlers.forEach(function (handler) {
	        return handler(value, changedBits);
	      });
	    }
	  };
	}
	function onlyChild(children) {
	  return Array.isArray(children) ? children[0] : children;
	}
	function createReactContext(defaultValue, calculateChangedBits) {
	  var _Provider$childContex, _Consumer$contextType;
	  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';
	  var Provider = function (_Component) {
	    _inherits(Provider, _Component);
	    function Provider() {
	      var _temp, _this, _ret;
	      _classCallCheck(this, Provider);
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
	    }
	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;
	      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
	    };
	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (this.props.value !== nextProps.value) {
	        var oldValue = this.props.value;
	        var newValue = nextProps.value;
	        var changedBits = void 0;
	        if (objectIs(oldValue, newValue)) {
	          changedBits = 0; // No change
	        } else {
	          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
	          changedBits |= 0;
	          if (changedBits !== 0) {
	            this.emitter.set(nextProps.value, changedBits);
	          }
	        }
	      }
	    };
	    Provider.prototype.render = function render() {
	      return this.props.children;
	    };
	    return Provider;
	  }(_react.Component);
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);
	  var Consumer = function (_Component2) {
	    _inherits(Consumer, _Component2);
	    function Consumer() {
	      var _temp2, _this2, _ret2;
	      _classCallCheck(this, Consumer);
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
	        value: _this2.getValue()
	      }, _this2.onUpdate = function (newValue, changedBits) {
	        var observedBits = _this2.observedBits | 0;
	        if ((observedBits & changedBits) !== 0) {
	          _this2.setState({
	            value: _this2.getValue()
	          });
	        }
	      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	    }
	    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var observedBits = nextProps.observedBits;
	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
	      : observedBits;
	    };
	    Consumer.prototype.componentDidMount = function componentDidMount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].on(this.onUpdate);
	      }
	      var observedBits = this.props.observedBits;
	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
	      : observedBits;
	    };
	    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].off(this.onUpdate);
	      }
	    };
	    Consumer.prototype.getValue = function getValue() {
	      if (this.context[contextProp]) {
	        return this.context[contextProp].get();
	      } else {
	        return defaultValue;
	      }
	    };
	    Consumer.prototype.render = function render() {
	      return onlyChild(this.props.children)(this.state.value);
	    };
	    return Consumer;
	  }(_react.Component);
	  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);
	  return {
	    Provider: Provider,
	    Consumer: Consumer
	  };
	}
	exports.default = createReactContext;
	module.exports = exports['default']; 
} (implementation, implementation.exports));

var implementationExports = implementation.exports;

lib.exports;

(function (module, exports) {

	exports.__esModule = true;
	var _react = reactExports;
	var _react2 = _interopRequireDefault(_react);
	var _implementation = implementationExports;
	var _implementation2 = _interopRequireDefault(_implementation);
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	exports.default = _react2.default.createContext || _implementation2.default;
	module.exports = exports['default']; 
} (lib, lib.exports));

var libExports = lib.exports;
var createContext = /*@__PURE__*/getDefaultExportFromCjs(libExports);

var ManagerReferenceNodeContext = createContext();
var ManagerReferenceNodeSetterContext = createContext();
var Manager = /*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Manager, _React$Component);
  function Manager() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "referenceNode", void 0);
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setReferenceNode", function (newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;
        _this.forceUpdate();
      }
    });
    return _this;
  }
  var _proto = Manager.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };
  _proto.render = function render() {
    return /*#__PURE__*/reactExports.createElement(ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, /*#__PURE__*/reactExports.createElement(ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };
  return Manager;
}(reactExports.Component);

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
    ref.current = node;
  }
};

var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper = /*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerPopper, _React$Component);
  function InnerPopper() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: undefined,
      placement: undefined
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popperInstance", void 0);
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popperNode", null);
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "arrowNode", null);
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      setRef(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;
      _this.updatePopperInstance();
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;
        _this.setState({
          data: data,
          placement: placement
        });
        return data;
      }
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends$w({}, _this.props.modifiers, {
          arrow: _extends$w({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends$w({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;
      _this.popperInstance.destroy();
      _this.popperInstance = null;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePopperInstance", function () {
      _this.destroyPopperInstance();
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
        popperNode = _assertThisInitialize.popperNode;
      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new PopperJS(referenceElement, popperNode, _this.getOptions());
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });
    return _this;
  }
  var _proto = InnerPopper.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deepEqual$1(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.

    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
    this.destroyPopperInstance();
  };
  _proto.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };
  return InnerPopper;
}(reactExports.Component);
_defineProperty(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});
PopperJS.placements;
function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
    props = _objectWithoutPropertiesLoose(_ref, ["referenceElement"]);
  return /*#__PURE__*/reactExports.createElement(ManagerReferenceNodeContext.Consumer, null, function (referenceNode) {
    return /*#__PURE__*/reactExports.createElement(InnerPopper, _extends$w({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

var InnerReference = /*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerReference, _React$Component);
  function InnerReference() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "refHandler", function (node) {
      setRef(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });
    return _this;
  }
  var _proto = InnerReference.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
  };
  _proto.render = function render() {
    warning$1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };
  return InnerReference;
}(reactExports.Component);
function Reference(props) {
  return /*#__PURE__*/reactExports.createElement(ManagerReferenceNodeSetterContext.Consumer, null, function (setReferenceNode) {
    return /*#__PURE__*/reactExports.createElement(InnerReference, _extends$w({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
function getPopperPlacement(gardenPlacement) {
  const gardenToPopperMapping = {
    auto: 'auto',
    top: 'top',
    'top-start': 'top-start',
    'top-end': 'top-end',
    bottom: 'bottom',
    'bottom-start': 'bottom-start',
    'bottom-end': 'bottom-end',
    end: 'right',
    'end-top': 'right-start',
    'end-bottom': 'right-end',
    start: 'left',
    'start-top': 'left-start',
    'start-bottom': 'left-end'
  };
  return gardenToPopperMapping[gardenPlacement];
}
function getRtlPopperPlacement(gardenPlacement) {
  const rtlPlacementMappings = {
    left: 'right',
    'left-start': 'right-start',
    'left-end': 'right-end',
    'top-start': 'top-end',
    'top-end': 'top-start',
    right: 'left',
    'right-start': 'left-start',
    'right-end': 'left-end',
    'bottom-start': 'bottom-end',
    'bottom-end': 'bottom-start'
  };
  const popperPlacement = getPopperPlacement(gardenPlacement);
  return rtlPlacementMappings[popperPlacement] || popperPlacement;
}
function getArrowPosition(popperPlacement) {
  const arrowPositionMappings = {
    top: 'bottom',
    'top-start': 'bottom-left',
    'top-end': 'bottom-right',
    right: 'left',
    'right-start': 'left-top',
    'right-end': 'left-bottom',
    bottom: 'top',
    'bottom-start': 'top-left',
    'bottom-end': 'top-right',
    left: 'right',
    'left-start': 'right-top',
    'left-end': 'right-bottom'
  };
  return arrowPositionMappings[popperPlacement] || 'top';
}
const COMPONENT_ID$2$1 = 'tooltip.paragraph';
const StyledParagraph = styled.p.attrs({
  'data-garden-id': COMPONENT_ID$2$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledParagraph",
  componentId: "sc-wuqkfc-0"
})(["margin:0;", ";"], props => retrieveComponentStyles(COMPONENT_ID$2$1, props));
StyledParagraph.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$1$1 = 'tooltip.title';
const StyledTitle = styled.strong.attrs({
  'data-garden-id': COMPONENT_ID$1$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTitle",
  componentId: "sc-vnjcvz-0"
})(["display:none;margin:0;font-weight:", ";", ";"], props => props.theme.fontWeights.semibold, props => retrieveComponentStyles(COMPONENT_ID$1$1, props));
StyledTitle.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$m = 'tooltip.tooltip';
const sizeStyles$b = _ref => {
  let {
    theme,
    size,
    type,
    placement,
    hasArrow
  } = _ref;
  let margin = `${theme.space.base * 1.5}px`;
  let borderRadius = theme.borderRadii.sm;
  let padding = '0 1em';
  let maxWidth;
  let overflowWrap;
  let whiteSpace = 'nowrap';
  let lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.sm);
  let fontSize = theme.fontSizes.sm;
  let titleDisplay;
  let paragraphMarginTop;
  let wordWrap;
  if (size !== 'small') {
    borderRadius = theme.borderRadii.md;
    overflowWrap = 'break-word';
    whiteSpace = 'normal';
    wordWrap = 'break-word';
  }
  if (size === 'extra-large') {
    padding = `${theme.space.base * 10}px`;
    maxWidth = `460px`;
    lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2.5}px`;
  } else if (size === 'large') {
    padding = `${theme.space.base * 5}px`;
    maxWidth = `270px`;
    lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2}px`;
  } else if (size === 'medium') {
    padding = '1em';
    maxWidth = `140px`;
    lineHeight = getLineHeight(theme.space.base * 4, theme.fontSizes.sm);
  }
  if (size === 'extra-large' || size === 'large') {
    fontSize = theme.fontSizes.md;
    titleDisplay = 'block';
  }
  let arrowSize;
  let arrowInset;
  if (hasArrow) {
    if (size === 'small' || size === 'medium') {
      arrowSize = margin;
      arrowInset = type === 'dark' ? '1px' : '0';
    } else {
      arrowInset = type === 'dark' ? '2px' : '1px';
      if (size === 'large') {
        margin = `${theme.space.base * 2}px`;
        arrowSize = margin;
      } else if (size === 'extra-large') {
        margin = `${theme.space.base * 3}px`;
        arrowSize = `${theme.space.base * 2.5}px`;
      }
    }
  }
  return Ne(["margin:", ";border-radius:", ";padding:", ";max-width:", ";line-height:", ";word-wrap:", ";white-space:", ";font-size:", ";overflow-wrap:", ";", ";", "{margin-top:", ";}", "{display:", ";}"], margin, borderRadius, padding, maxWidth, lineHeight, wordWrap, whiteSpace, fontSize, overflowWrap, hasArrow && arrowStyles(getArrowPosition(placement), {
    size: arrowSize,
    inset: arrowInset
  }), StyledParagraph, paragraphMarginTop, StyledTitle, titleDisplay);
};
const colorStyles$9 = _ref2 => {
  let {
    theme,
    type
  } = _ref2;
  let border;
  let boxShadow = theme.shadows.lg(`${theme.space.base}px`, `${theme.space.base * 2}px`, getColor('chromeHue', 600, theme, 0.15));
  let backgroundColor = getColor('chromeHue', 700, theme);
  let color = theme.colors.background;
  let titleColor;
  if (type === 'light') {
    boxShadow = theme.shadows.lg(`${theme.space.base * 3}px`, `${theme.space.base * 5}px`, getColor('chromeHue', 600, theme, 0.15));
    border = `${theme.borders.sm} ${getColor('neutralHue', 300, theme)}`;
    backgroundColor = theme.colors.background;
    color = getColor('neutralHue', 700, theme);
    titleColor = theme.colors.foreground;
  }
  return Ne(["border:", ";box-shadow:", ";background-color:", ";color:", ";", "{color:", ";}"], border, boxShadow, backgroundColor, color, StyledTitle, titleColor);
};
const StyledTooltip = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$m,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTooltip",
  componentId: "sc-gzzjq4-0"
})(["display:inline-block;box-sizing:border-box;direction:", ";text-align:", ";font-weight:", ";", ";&[aria-hidden='true']{display:none;}", ";", ";"], props => props.theme.rtl && 'rtl', props => props.theme.rtl ? 'right' : 'left', props => props.theme.fontWeights.regular, props => sizeStyles$b(props), colorStyles$9, props => retrieveComponentStyles(COMPONENT_ID$m, props));
StyledTooltip.defaultProps = {
  theme: DEFAULT_THEME
};
const StyledTooltipWrapper = styled.div.withConfig({
  displayName: "StyledTooltipWrapper",
  componentId: "sc-1b7q9q6-0"
})(["transition:opacity 10ms;opacity:1;z-index:", ";&[aria-hidden='true']{visibility:hidden;opacity:0;}"], props => props.zIndex);
StyledTooltipWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
const SHARED_PLACEMENT = ['auto', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];
const PLACEMENT = [...SHARED_PLACEMENT, 'end', 'end-top', 'end-bottom', 'start', 'start-top', 'start-bottom'];
const SIZE = ['small', 'medium', 'large', 'extra-large'];
const TYPE = ['light', 'dark'];
const Tooltip = _ref => {
  let {
    id,
    delayMS,
    isInitialVisible,
    content,
    refKey,
    placement,
    eventsEnabled,
    popperModifiers,
    children,
    hasArrow,
    size,
    type,
    appendToNode,
    zIndex,
    isVisible: externalIsVisible,
    ...otherProps
  } = _ref;
  const {
    rtl
  } = reactExports.useContext(Be);
  const scheduleUpdateRef = reactExports.useRef();
  const {
    isVisible,
    getTooltipProps,
    getTriggerProps,
    openTooltip,
    closeTooltip
  } = useTooltip({
    id,
    delayMilliseconds: delayMS,
    isVisible: isInitialVisible
  });
  const controlledIsVisible = getControlledValue(externalIsVisible, isVisible);
  reactExports.useEffect(() => {
    if (controlledIsVisible && scheduleUpdateRef.current) {
      scheduleUpdateRef.current();
    }
  }, [controlledIsVisible, content]);
  const popperPlacement = rtl ? getRtlPopperPlacement(placement) : getPopperPlacement(placement);
  const singleChild = React.Children.only(children);
  const modifiers = {
    preventOverflow: {
      boundariesElement: 'window'
    },
    ...popperModifiers
  };
  return /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement(Reference, null, _ref2 => {
    let {
      ref
    } = _ref2;
    return /*#__PURE__*/reactExports.cloneElement(singleChild, getTriggerProps({
      ...singleChild.props,
      [refKey]: mergeRefs([ref, singleChild.ref ? singleChild.ref : null])
    }));
  }), /*#__PURE__*/React.createElement(Popper, {
    placement: popperPlacement,
    eventsEnabled: controlledIsVisible && eventsEnabled,
    modifiers: modifiers
  }, _ref3 => {
    let {
      ref,
      style,
      scheduleUpdate,
      placement: currentPlacement
    } = _ref3;
    scheduleUpdateRef.current = scheduleUpdate;
    const {
      onFocus,
      onBlur,
      ...otherTooltipProps
    } = otherProps;
    let computedSize = size;
    if (computedSize === undefined) {
      if (type === 'dark') {
        computedSize = 'small';
      } else {
        computedSize = 'large';
      }
    }
    const tooltipProps = {
      hasArrow,
      placement: currentPlacement,
      size: computedSize,
      onFocus: composeEventHandlers$1(onFocus, () => {
        openTooltip();
      }),
      onBlur: composeEventHandlers$1(onBlur, () => {
        closeTooltip(0);
      }),
      'aria-hidden': !controlledIsVisible,
      type,
      ...otherTooltipProps
    };
    const tooltip = /*#__PURE__*/React.createElement(StyledTooltipWrapper, {
      ref: controlledIsVisible ? ref : null,
      style: style,
      zIndex: zIndex,
      "aria-hidden": !controlledIsVisible
    }, /*#__PURE__*/React.createElement(StyledTooltip, getTooltipProps(tooltipProps), content));
    if (appendToNode) {
      return /*#__PURE__*/reactDomExports.createPortal(tooltip, appendToNode);
    }
    return tooltip;
  }));
};
Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  appendToNode: PropTypes.any,
  hasArrow: PropTypes.bool,
  delayMS: PropTypes.number,
  eventsEnabled: PropTypes.bool,
  id: PropTypes.string,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(PLACEMENT),
  popperModifiers: PropTypes.any,
  size: PropTypes.oneOf(SIZE),
  type: PropTypes.oneOf(TYPE),
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isInitialVisible: PropTypes.bool,
  refKey: PropTypes.string
};
Tooltip.defaultProps = {
  hasArrow: true,
  eventsEnabled: true,
  type: 'dark',
  placement: 'top',
  delayMS: 500,
  refKey: 'ref'
};
function _extends$6() {
  _extends$6 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
const Paragraph = /*#__PURE__*/reactExports.forwardRef((props, ref) => /*#__PURE__*/React.createElement(StyledParagraph, _extends$6({
  ref: ref
}, props)));
Paragraph.displayName = 'Paragraph';
const Title = /*#__PURE__*/reactExports.forwardRef((props, ref) => /*#__PURE__*/React.createElement(StyledTitle, _extends$6({
  ref: ref
}, props)));
Title.displayName = 'Title';

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
function _extends$5() {
  _extends$5 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
var _path$4;
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var SvgChevronDownStroke = function SvgChevronDownStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "currentColor",
    d: "M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
  })));
};
const ComboboxContext = /*#__PURE__*/reactExports.createContext(undefined);
const useComboboxContext = () => {
  const context = reactExports.useContext(ComboboxContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within a <Combobox>.');
  }
  return context;
};
const FieldContext = /*#__PURE__*/reactExports.createContext(undefined);
const useFieldContext = () => {
  const context = reactExports.useContext(FieldContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within a <Field>.');
  }
  return context;
};
const COMPONENT_ID$l = 'dropdowns.combobox.label';
const StyledLabel = styled(Label$1).attrs({
  'data-garden-id': COMPONENT_ID$l,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-1889zee-0"
})(["vertical-align:revert;", ";"], props => retrieveComponentStyles(COMPONENT_ID$l, props));
StyledLabel.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$k = 'dropdowns.combobox.hint';
const StyledHint = styled(Hint$1).attrs({
  'data-garden-id': COMPONENT_ID$k,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledHint",
  componentId: "sc-9kt30-0"
})(["", ";"], props => retrieveComponentStyles(COMPONENT_ID$k, props));
StyledHint.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$j = 'dropdowns.combobox.message';
const StyledMessage = styled(Message$1).attrs({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledMessage",
  componentId: "sc-15eqzu4-0"
})(["", ";"], props => retrieveComponentStyles(COMPONENT_ID$j, props));
StyledMessage.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$i = 'dropdowns.combobox';
const sizeStyles$a = props => {
  const minWidth = `${props.isCompact ? 100 : 144}px`;
  const marginTop = `${props.theme.space.base * (props.isCompact ? 1 : 2)}px`;
  return Ne(["min-width:", ";", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", ";}"], minWidth, StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, marginTop);
};
const StyledCombobox = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledCombobox",
  componentId: "sc-1hs98ew-0"
})(["", ";", ";"], sizeStyles$a, props => retrieveComponentStyles(COMPONENT_ID$i, props));
StyledCombobox.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$h = 'dropdowns.combobox.container';
const StyledContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$h,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledContainer",
  componentId: "sc-18gcb1g-0"
})(["display:flex;", ";"], props => retrieveComponentStyles(COMPONENT_ID$h, props));
StyledContainer.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$g = 'dropdowns.combobox.field';
const StyledField = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledField",
  componentId: "sc-k7y10k-0"
})(["direction:", ";", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', props => retrieveComponentStyles(COMPONENT_ID$g, props));
StyledField.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$f = 'dropdowns.combobox.option';
const colorStyles$8 = props => {
  const activeBackgroundColor = getColor(props.$type === 'danger' ? 'dangerHue' : 'primaryHue', 600, props.theme, 0.08);
  const backgroundColor = props.isActive && props.$type !== 'group' && props.$type !== 'header' ? activeBackgroundColor : undefined;
  const disabledForegroundColor = getColor('neutralHue', 400, props.theme);
  let foregroundColor = props.theme.colors.foreground;
  if (props.$type === 'add') {
    foregroundColor = getColor('primaryHue', 600, props.theme);
  } else if (props.$type === 'danger') {
    foregroundColor = getColor('dangerHue', 600, props.theme);
  }
  return Ne(["background-color:", ";color:", ";&[aria-disabled='true']{background-color:", ";color:", ";}"], backgroundColor, foregroundColor, backgroundColor, disabledForegroundColor);
};
const getMinHeight = props => props.theme.space.base * (props.isCompact ? 7 : 9);
const sizeStyles$9 = props => {
  const lineHeight = props.theme.lineHeights.md;
  const minHeight = getMinHeight(props);
  const paddingHorizontal = props.$type === 'group' ? 0 : `${props.theme.space.base * 9}px`;
  const paddingVertical = props.$type === 'group' ? 0 : math(`(${minHeight} - ${lineHeight}) / 2`);
  return Ne(["box-sizing:border-box;padding:", " ", ";min-height:", "px;line-height:", ";"], paddingVertical, paddingHorizontal, minHeight, lineHeight);
};
const StyledOption = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledOption",
  componentId: "sc-1b5e09t-0"
})(["display:flex;position:relative;transition:color 0.25s ease-in-out;cursor:", ";word-wrap:break-word;font-weight:", ";user-select:none;&:focus{outline:none;}", ";", ";&[aria-disabled='true']{cursor:default;}", ";"], props => props.$type === 'group' || props.$type === 'header' ? 'default' : 'pointer', props => props.$type === 'header' || props.$type === 'previous' ? props.theme.fontWeights.semibold : props.theme.fontWeights.regular, sizeStyles$9, colorStyles$8, props => retrieveComponentStyles(COMPONENT_ID$f, props));
StyledOption.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$e = 'dropdowns.combobox.listbox';
const sizeStyles$8 = props => {
  const padding = props.theme.space.base;
  const minHeight = props.minHeight === undefined ? `${getMinHeight(props) + padding * 2}px` : props.minHeight;
  return Ne(["min-height:", ";max-height:", ";&&&{padding-top:", "px;padding-bottom:", "px;}"], minHeight, props.maxHeight, padding, padding);
};
const StyledListbox = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID$e,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledListbox",
  componentId: "sc-4uxeym-0"
})(["overflow-y:scroll;list-style-type:none;", ";&&&{display:block;}"], sizeStyles$8);
StyledListbox.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$d = 'dropdowns.combobox.floating';
const StyledFloating = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledFloating",
  componentId: "sc-17rn49r-0"
})(["top:0;left:0;", ";", ";"], props => menuStyles(props.position, {
  theme: props.theme,
  hidden: props.isHidden,
  childSelector: `> ${StyledListbox}`,
  animationModifier: '[data-garden-animate="true"]',
  zIndex: props.zIndex
}), props => retrieveComponentStyles(COMPONENT_ID$d, props));
StyledFloating.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$c = 'dropdowns.combobox.input';
const colorStyles$7 = props => {
  const placeholderColor = getColor('neutralHue', 400, props.theme);
  return Ne(["background-color:inherit;color:inherit;&::placeholder{opacity:1;color:", ";}"], placeholderColor);
};
const getHeight = props => {
  if (props.isBare && !props.isMultiselectable) {
    return props.theme.space.base * 5;
  }
  return props.theme.space.base * (props.isCompact ? 5 : 8);
};
const sizeStyles$7 = props => {
  const height = props.theme.space.base * 5;
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(height, fontSize);
  const margin = math(`${props.theme.shadowWidths.sm} + ${(getHeight(props) - height) / 2}`);
  const minWidth = `${props.theme.space.base * 8}px`;
  return Ne(["min-width:", ";height:", "px;line-height:", ";font-size:", ";&&{margin-top:", ";margin-bottom:", ";}"], minWidth, height, lineHeight, fontSize, margin, margin);
};
const StyledInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledInput",
  componentId: "sc-m2m56e-0"
})(["flex-basis:0;flex-grow:1;border:none;padding:0;font-family:inherit;:focus{outline:none;}", ";", ";&[hidden]{display:revert;", "}", ";"], sizeStyles$7, colorStyles$7, hideVisually(), props => retrieveComponentStyles(COMPONENT_ID$c, props));
StyledInput.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$b = 'dropdowns.combobox.input_group';
const sizeStyles$6 = props => {
  const margin = props.theme.shadowWidths.sm;
  return Ne(["margin:-", ";min-width:0;& > *{margin:", ";}"], margin, margin);
};
const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledInputGroup",
  componentId: "sc-2agt8f-0"
})(["display:flex;flex-grow:1;flex-wrap:wrap;", ";", ";"], sizeStyles$6, props => retrieveComponentStyles(COMPONENT_ID$b, props));
StyledInputGroup.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$a = 'dropdowns.combobox.trigger';
const colorStyles$6 = props => {
  const SHADE = 600;
  let hue = 'neutralHue';
  if (props.validation === 'success') {
    hue = 'successHue';
  } else if (props.validation === 'warning') {
    hue = 'warningHue';
  } else if (props.validation === 'error') {
    hue = 'dangerHue';
  }
  const backgroundColor = props.isBare ? 'transparent' : props.theme.colors.background;
  let borderColor;
  let hoverBorderColor;
  let focusBorderColor;
  let focusShade;
  if (props.validation) {
    borderColor = getColor(hue, SHADE, props.theme);
    hoverBorderColor = borderColor;
    if (props.validation === 'warning') {
      focusBorderColor = getColor(hue, SHADE + 100, props.theme);
      focusShade = SHADE + 100;
    } else {
      focusBorderColor = borderColor;
    }
  } else {
    borderColor = getColor('neutralHue', SHADE - 300, props.theme);
    hoverBorderColor = getColor('primaryHue', SHADE, props.theme);
    focusBorderColor = hoverBorderColor;
  }
  const disabledBackgroundColor = props.isBare ? undefined : getColor('neutralHue', SHADE - 500, props.theme);
  const disabledBorderColor = getColor('neutralHue', SHADE - 400, props.theme);
  const disabledForegroundColor = getColor('neutralHue', SHADE - 200, props.theme);
  const focusSelector = `
    &:focus-within:not([aria-disabled='true']),
    &:focus-visible
  `;
  return Ne(["border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";}", " &[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], props.isLabelHovered ? hoverBorderColor : borderColor, backgroundColor, props.theme.colors.foreground, hoverBorderColor, focusStyles({
    theme: props.theme,
    inset: props.focusInset,
    hue: focusBorderColor,
    shade: focusShade,
    selector: focusSelector,
    styles: {
      borderColor: focusBorderColor
    },
    condition: !props.isBare
  }), disabledBorderColor, disabledBackgroundColor, disabledForegroundColor);
};
const sizeStyles$5 = props => {
  const inputHeight = getHeight(props);
  let minHeight;
  let horizontalPadding;
  if (props.isBare) {
    if (props.isMultiselectable) {
      minHeight = math(`${props.theme.shadowWidths.sm} * 2 + ${inputHeight}`);
      horizontalPadding = props.theme.shadowWidths.sm;
    } else {
      minHeight = `${inputHeight}px`;
      horizontalPadding = '0';
    }
  } else {
    minHeight = `${props.theme.space.base * (props.isCompact ? 3 : 2) + inputHeight}px`;
    horizontalPadding = `${props.theme.space.base * 3}px`;
  }
  const maxHeight = props.maxHeight || minHeight;
  const verticalPadding = math(`(${minHeight} - ${inputHeight} - (${props.isBare ? 0 : props.theme.borderWidths.sm} * 2)) / 2`);
  return Ne(["padding:", " ", ";min-height:", ";max-height:", ";font-size:", ";"], verticalPadding, horizontalPadding, minHeight, maxHeight, props.theme.fontSizes.md);
};
const StyledTrigger = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTrigger",
  componentId: "sc-14t9k4c-0"
})(["overflow-y:auto;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;border:", ";border-radius:", ";cursor:", ";box-sizing:border-box;", ";&:focus{outline:none;}", ";&[aria-disabled='true']{cursor:default;}", ";"], props => props.isBare ? 'none' : props.theme.borders.sm, props => props.isBare ? '0' : props.theme.borderRadii.md, props => !props.isAutocomplete && props.isEditable ? 'text' : 'pointer', sizeStyles$5, colorStyles$6, props => retrieveComponentStyles(COMPONENT_ID$a, props));
StyledTrigger.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$9 = 'dropdowns.combobox.input_icon';
const colorStyles$5 = props => {
  const color = getColor('neutralHue', 600, props.theme);
  const focusColor = getColor('neutralHue', 700, props.theme);
  const disabledColor = getColor('neutralHue', 400, props.theme);
  return Ne(["color:", ";", ":hover &,", ":focus-within &,", ":focus &,", "[data-garden-focus-visible='true'] &{color:", ";}", "[aria-disabled='true'] &{color:", ";}"], props.isLabelHovered ? focusColor : color, StyledTrigger, StyledTrigger, StyledTrigger, StyledTrigger, focusColor, StyledTrigger, disabledColor);
};
const sizeStyles$4 = props => {
  const size = props.theme.iconSizes.md;
  const position = math(`(${getHeight(props)} - ${size}) / 2`);
  const margin = `${props.theme.space.base * 2}px`;
  let side;
  if (props.isEnd) {
    side = props.theme.rtl ? 'right' : 'left';
  } else {
    side = props.theme.rtl ? 'left' : 'right';
  }
  return Ne(["top:", ";margin-", ":", ";width:", ";height:", ";"], position, side, margin, size, size);
};
const StyledInputIcon = styled(_ref => {
  let {
    children,
    isCompact,
    isDisabled,
    isEnd,
    isLabelHovered,
    isRotated,
    theme,
    ...props
  } = _ref;
  return /*#__PURE__*/reactExports.cloneElement(reactExports.Children.only(children), props);
}).attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledInputIcon",
  componentId: "sc-15ewmjl-0"
})(["position:sticky;flex-shrink:0;transform:", ";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;", ";", ";", ";"], props => props.isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, sizeStyles$4, colorStyles$5, props => retrieveComponentStyles(COMPONENT_ID$9, props));
StyledInputIcon.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$8 = 'dropdowns.combobox.optgroup';
const StyledOptGroup = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledOptGroup",
  componentId: "sc-12dbq5s-0"
})(["margin:0;padding:0;list-style-type:none;", ";"], props => retrieveComponentStyles(COMPONENT_ID$8, props));
StyledOptGroup.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$7 = 'dropdowns.combobox.option.content';
const StyledOptionContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledOptionContent",
  componentId: "sc-536085-0"
})(["display:flex;flex-direction:column;flex-grow:1;", ";"], props => retrieveComponentStyles(COMPONENT_ID$7, props));
StyledOptionContent.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$6 = 'dropdowns.combobox.option.icon';
const sizeStyles$3 = props => {
  const size = props.theme.iconSizes.md;
  const marginTop = math(`(${props.theme.lineHeights.md} - ${size}) / 2`);
  const marginHorizontal = `${props.theme.space.base * 2}px`;
  return Ne(["margin-top:", ";margin-", ":", ";width:", ";height:", ";"], marginTop, props.theme.rtl ? 'left' : 'right', marginHorizontal, size, size);
};
const StyledOptionIcon = styled(_ref => {
  let {
    children,
    theme,
    ...props
  } = _ref;
  return /*#__PURE__*/reactExports.cloneElement(reactExports.Children.only(children), props);
}).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledOptionIcon",
  componentId: "sc-3vecfi-0"
})(["flex-shrink:0;", ";", ";"], sizeStyles$3, props => retrieveComponentStyles(COMPONENT_ID$6, props));
StyledOptionIcon.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$5 = 'dropdowns.combobox.option.meta';
const colorStyles$4 = props => {
  const color = getColor('neutralHue', props.isDisabled ? 400 : 600, props.theme);
  return Ne(["color:", ";"], color);
};
const sizeStyles$2 = props => {
  const lineHeight = props.theme.lineHeights.sm;
  const fontSize = props.theme.fontSizes.sm;
  return Ne(["line-height:", ";font-size:", ";"], lineHeight, fontSize);
};
const StyledOptionMeta = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledOptionMeta",
  componentId: "sc-1nizjb3-0"
})(["transition:color 0.25s ease-in-out;font-weight:", ";", ";", ";", ";"], props => props.theme.fontWeights.regular, sizeStyles$2, colorStyles$4, props => retrieveComponentStyles(COMPONENT_ID$5, props));
StyledOptionMeta.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$4 = 'dropdowns.combobox.option.type_icon';
const colorStyles$3 = props => {
  const opacity = props.type && props.type !== 'danger' ? 1 : 0;
  let color;
  if (props.type === 'add' || props.type === 'danger') {
    color = 'inherit';
  } else if (props.type === 'header' || props.type === 'next' || props.type === 'previous') {
    color = getColor('neutralHue', 600, props.theme);
  } else {
    color = getColor('primaryHue', 600, props.theme);
  }
  return Ne(["opacity:", ";color:", ";", "[aria-selected='true'] > &{opacity:1;}", "[aria-disabled='true'] > &{color:inherit;}"], opacity, color, StyledOption, StyledOption);
};
const sizeStyles$1 = props => {
  const size = props.theme.iconSizes.md;
  const position = `${props.theme.space.base * 3}px`;
  const top = math(`(${getMinHeight(props)} - ${size}) / 2`);
  let side;
  if (props.type === 'next') {
    side = props.theme.rtl ? 'left' : 'right';
  } else {
    side = props.theme.rtl ? 'right' : 'left';
  }
  return Ne(["top:", ";", ":", ";width:", ";height:", ";"], top, side, position, size, size);
};
const StyledOptionTypeIcon = styled(_ref => {
  let {
    children,
    isCompact,
    theme,
    type,
    ...props
  } = _ref;
  return /*#__PURE__*/reactExports.cloneElement(reactExports.Children.only(children), props);
}).attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledOptionTypeIcon",
  componentId: "sc-vlhimu-0"
})(["position:absolute;transform:", ";transition:opacity 0.1s ease-in-out;", ";", ";", ";"], props => props.theme.rtl && (props.type === 'next' || props.type === 'previous') && 'rotate(180deg)', sizeStyles$1, colorStyles$3, props => retrieveComponentStyles(COMPONENT_ID$4, props));
StyledOptionTypeIcon.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$3 = 'dropdowns.combobox.separator';
const colorStyles$2 = props => {
  const backgroundColor = getColor('neutralHue', 200, props.theme);
  return Ne(["background-color:", ";"], backgroundColor);
};
const sizeStyles = props => {
  const margin = `${props.theme.space.base}px`;
  const height = props.theme.borderWidths.sm;
  return Ne(["margin:", " 0;height:", ";"], margin, height);
};
const StyledSeparator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledSeparator",
  componentId: "sc-1uj1t6p-0"
})(["cursor:default;", ";", ";", ";"], sizeStyles, colorStyles$2, props => retrieveComponentStyles(COMPONENT_ID$3, props));
StyledSeparator.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$2 = 'dropdowns.combobox.tag';
const StyledTag = styled(Tag$1).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTag",
  componentId: "sc-1mrab0f-0"
})(["&[aria-disabled='true']{color:", ";}&[hidden]{display:revert;", "}", ";"], props => props.hue ? undefined : getColor('neutralHue', 400, props.theme), hideVisually(), props => retrieveComponentStyles(COMPONENT_ID$2, props));
StyledTag.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID$1 = 'dropdowns.combobox.value';
const colorStyles$1 = props => {
  const foregroundColor = props.isPlaceholder && getColor('neutralHue', 400, props.theme);
  return Ne(["color:", ";"], foregroundColor);
};
const StyledValue = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledValue",
  componentId: "sc-16gp0f-0"
})(["flex-basis:0;flex-grow:1;cursor:", ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;user-select:none;", ";", ";", ";"], props => {
  if (props.isDisabled) {
    return 'default';
  }
  return props.isEditable ? 'text' : 'pointer';
}, sizeStyles$7, colorStyles$1, props => retrieveComponentStyles(COMPONENT_ID$1, props));
StyledValue.defaultProps = {
  theme: DEFAULT_THEME
};
const COMPONENT_ID = 'dropdowns.combobox.tags_button';
const colorStyles = props => {
  const color = getColor('primaryHue', 600, props.theme);
  return Ne(["color:", ";&:disabled{color:inherit;}"], color);
};
const StyledTagsButton = styled(StyledValue).attrs({
  as: 'button',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '8.69.1'
}).withConfig({
  displayName: "StyledTagsButton",
  componentId: "sc-ewyffo-0"
})(["flex:0 1 auto;transition:color 0.25s ease-in-out 0;border:none;background-color:transparent;cursor:pointer;min-width:auto;font-family:inherit;&:hover{text-decoration:underline;}", ";&:disabled{cursor:default;text-decoration:none;}", ";"], colorStyles, props => retrieveComponentStyles(COMPONENT_ID, props));
StyledTagsButton.defaultProps = {
  theme: DEFAULT_THEME
};
const Listbox = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    appendToNode,
    children,
    isCompact,
    isExpanded,
    maxHeight,
    minHeight,
    triggerRef,
    zIndex,
    ...props
  } = _ref;
  const floatingRef = reactExports.useRef(null);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [height, setHeight] = reactExports.useState();
  const [width, setWidth] = reactExports.useState();
  const theme = reactExports.useContext(Be) || DEFAULT_THEME;
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = useFloating({
    elements: {
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: 'bottom-start',
    middleware: [offset$1(theme.space.base), flip$1(), size({
      apply: _ref2 => {
        let {
          rects,
          availableHeight
        } = _ref2;
        if (rects.reference.width > 0) {
          setWidth(rects.reference.width);
          if (!(minHeight === null || minHeight === 'fit-content') && rects.floating.height > availableHeight) {
            setHeight(availableHeight);
          }
        }
      }
    })]
  });
  reactExports.useEffect(() => {
    let cleanup;
    if (isExpanded && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [isExpanded, refs.reference, refs.floating, update]);
  reactExports.useEffect(() => {
    let timeout;
    if (isExpanded) {
      setIsVisible(true);
    } else {
      timeout = setTimeout(() => {
        setIsVisible(false);
        setHeight(undefined);
      }, 200);
    }
    return () => clearTimeout(timeout);
  }, [isExpanded]);
  reactExports.useEffect(() => {
    if (height) {
      setHeight(undefined);
      update();
    }
  }, [children, update]);
  const Node = /*#__PURE__*/React.createElement(StyledFloating, {
    "data-garden-animate": isVisible ? 'true' : 'false',
    isHidden: !isExpanded,
    position: placement === 'bottom-start' ? 'bottom' : 'top',
    style: {
      transform,
      width
    },
    zIndex: zIndex,
    ref: floatingRef
  }, /*#__PURE__*/React.createElement(StyledListbox, _extends$5({
    isCompact: isCompact,
    maxHeight: maxHeight,
    minHeight: minHeight,
    style: {
      height
    }
  }, props, {
    ref: ref
  }), isVisible && children));
  return appendToNode ? /*#__PURE__*/reactDomExports.createPortal(Node, appendToNode) : Node;
});
Listbox.displayName = 'Listbox';
Listbox.propTypes = {
  appendToNode: PropTypes.any,
  isCompact: PropTypes.bool,
  isExpanded: PropTypes.bool,
  maxHeight: PropTypes.string,
  triggerRef: PropTypes.any.isRequired,
  zIndex: PropTypes.number
};
const toString = option => typeof option.value === 'string' ? option.value : JSON.stringify(option.value);
const toOption = props => {
  return {
    value: props.value,
    label: props.label,
    disabled: props.isDisabled,
    selected: props.isSelected
  };
};
const toOptions = (children, optionTagProps) => reactExports.Children.toArray(children).reduce((options, option) => {
  const retVal = options;
  if ( /*#__PURE__*/reactExports.isValidElement(option)) {
    if ('value' in option.props) {
      retVal.push(toOption(option.props));
      optionTagProps[toString(option.props)] = option.props.tagProps;
    } else {
      const props = option.props;
      const groupOptions = toOptions(props.children, optionTagProps);
      retVal.push({
        label: props.label,
        options: groupOptions
      });
    }
  }
  return retVal;
}, []);
const TagAvatarComponent = Tag$1.Avatar;
TagAvatarComponent.displayName = 'Tag.Avatar';
const TagAvatar = TagAvatarComponent;
const TagComponent = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    children,
    option,
    removeLabel,
    tooltipZIndex,
    ...props
  } = _ref;
  const {
    getTagProps,
    isCompact,
    removeSelection
  } = useComboboxContext();
  const text = option.label || toString(option);
  const ariaLabel = useText(Tag, props, 'aria-label', `${text}, press delete or backspace to remove`, !option.disabled);
  const tagProps = getTagProps({
    option,
    'aria-label': ariaLabel
  });
  const theme = reactExports.useContext(Be) || DEFAULT_THEME;
  const doc = useDocument(theme);
  const handleClick = () => removeSelection(option.value);
  return /*#__PURE__*/React.createElement(StyledTag, _extends$5({
    "aria-disabled": option.disabled,
    tabIndex: option.disabled ? undefined : 0
  }, tagProps, props, {
    size: isCompact ? 'medium' : 'large',
    ref: ref
  }), children || /*#__PURE__*/React.createElement("span", null, text), !option.disabled && (removeLabel ? /*#__PURE__*/React.createElement(Tooltip, {
    appendToNode: doc?.body,
    content: removeLabel,
    zIndex: tooltipZIndex
  }, /*#__PURE__*/React.createElement(StyledTag.Close, {
    "aria-label": removeLabel,
    onClick: handleClick
  })) : /*#__PURE__*/React.createElement(StyledTag.Close, {
    onClick: handleClick
  })));
});
TagComponent.displayName = 'Tag';
TagComponent.propTypes = {
  hue: PropTypes.string,
  isPill: PropTypes.bool,
  isRegular: PropTypes.bool,
  removeLabel: PropTypes.string
};
const Tag = TagComponent;
Tag.Avatar = TagAvatar;
const MAX_TAGS = 4;
const Combobox = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    children,
    activeIndex,
    defaultActiveIndex,
    defaultExpanded,
    endIcon,
    focusInset,
    inputProps: _inputProps,
    inputValue: _inputValue,
    isAutocomplete,
    isBare,
    isCompact,
    isDisabled,
    isEditable,
    isExpanded: _isExpanded,
    isMultiselectable,
    listboxAppendToNode,
    listboxAriaLabel,
    listboxMaxHeight,
    listboxMinHeight,
    listboxZIndex,
    maxHeight,
    maxTags = MAX_TAGS,
    onChange,
    placeholder,
    renderExpandTags,
    renderValue,
    selectionValue,
    startIcon,
    validation,
    ...props
  } = _ref;
  const {
    hasHint,
    hasMessage,
    labelProps,
    setLabelProps
  } = useFieldContext();
  const [isLabelHovered, setIsLabelHovered] = reactExports.useState(false);
  const [optionTagProps, setOptionTagProps] = reactExports.useState({});
  const options = reactExports.useMemo(() => {
    const tagProps = {};
    const retVal = toOptions(children, tagProps);
    setOptionTagProps(value => ({
      ...value,
      ...tagProps
    }));
    return retVal;
  }, [children]);
  const hasFocus = reactExports.useRef(false);
  const triggerRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const listboxRef = reactExports.useRef(null);
  const tagsButtonRef = reactExports.useRef(null);
  const theme = reactExports.useContext(Be) || DEFAULT_THEME;
  const environment = useWindow(theme);
  const {
    activeValue,
    inputValue,
    isExpanded,
    getTriggerProps,
    getInputProps,
    getLabelProps,
    getListboxProps,
    getOptionProps,
    getOptGroupProps,
    getTagProps,
    removeSelection,
    selection
  } = useCombobox({
    idPrefix: props.id,
    triggerRef,
    inputRef,
    listboxRef,
    options,
    environment,
    hasHint,
    hasMessage,
    isAutocomplete,
    isEditable,
    isMultiselectable,
    disabled: isDisabled,
    inputValue: _inputValue,
    selectionValue,
    isExpanded: _isExpanded,
    defaultExpanded,
    activeIndex,
    defaultActiveIndex,
    onChange
  });
  const contextValue = reactExports.useMemo(() => ({
    activeValue,
    getOptionProps,
    getOptGroupProps,
    getTagProps,
    isCompact,
    removeSelection
  }), [activeValue, getOptionProps, getOptGroupProps, getTagProps, isCompact, removeSelection]);
  const hasChevron = reactExports.useMemo(() => !isBare && (isAutocomplete || !isEditable), [isAutocomplete, isBare, isEditable]);
  const expandTags = useText(Combobox, {
    renderExpandTags
  }, 'renderExpandTags', '+ {{value}} more', isMultiselectable || false);
  const _listboxAriaLabel = useText(Combobox, {
    listboxAriaLabel
  }, 'listboxAriaLabel', 'Options');
  const triggerProps = {
    isAutocomplete,
    isBare,
    isCompact,
    isEditable,
    isLabelHovered,
    isMultiselectable,
    maxHeight,
    focusInset,
    validation,
    ...getTriggerProps({
      onFocus: () => {
        hasFocus.current = true;
      },
      onBlur: event => {
        if (event.relatedTarget === null || !triggerRef.current?.contains(event.relatedTarget)) {
          hasFocus.current = false;
        }
      }
    })
  };
  const inputProps = {
    'aria-invalid': validation === 'error' || validation === 'warning',
    hidden: !(isEditable && hasFocus.current),
    isBare,
    isCompact,
    isMultiselectable,
    placeholder,
    ...getInputProps({
      ..._inputProps
    })
  };
  const listboxProps = getListboxProps({
    'aria-label': _listboxAriaLabel
  });
  reactExports.useEffect(() => {
    if (!labelProps) {
      const _labelProps = getLabelProps({
        onMouseEnter: () => setIsLabelHovered(true),
        onMouseLeave: () => setIsLabelHovered(false)
      });
      setLabelProps(_labelProps);
    }
    return () => labelProps && setLabelProps(undefined);
  }, [getLabelProps, labelProps, setLabelProps]);
  const Tags = _ref2 => {
    let {
      selectedOptions
    } = _ref2;
    const [isFocused, setIsFocused] = reactExports.useState(hasFocus.current);
    const value = selectedOptions.length - maxTags;
    return /*#__PURE__*/React.createElement(React.Fragment, null, selectedOptions.map((option, index) => {
      const key = toString(option);
      const disabled = isDisabled || option.disabled;
      const hidden = !isFocused && index >= maxTags;
      return /*#__PURE__*/React.createElement(Tag, _extends$5({
        key: key,
        hidden: hidden,
        onFocus: () => setIsFocused(true),
        option: {
          ...option,
          disabled
        },
        tooltipZIndex: listboxZIndex ? listboxZIndex + 1 : undefined
      }, optionTagProps[key]));
    }), !isFocused && selectedOptions.length > maxTags && /*#__PURE__*/React.createElement(StyledTagsButton, {
      disabled: isDisabled,
      isCompact: isCompact,
      onClick: () => isEditable && inputRef.current?.focus(),
      tabIndex: -1,
      type: "button",
      ref: tagsButtonRef
    }, renderExpandTags ? renderExpandTags(value) : expandTags?.replace('{{value}}', value.toString())));
  };
  return /*#__PURE__*/React.createElement(ComboboxContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledCombobox, _extends$5({
    isCompact: isCompact
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(StyledTrigger, triggerProps, /*#__PURE__*/React.createElement(StyledContainer, null, startIcon && /*#__PURE__*/React.createElement(StyledInputIcon, {
    isLabelHovered: isLabelHovered,
    isCompact: isCompact
  }, startIcon), /*#__PURE__*/React.createElement(StyledInputGroup, null, isMultiselectable && Array.isArray(selection) && /*#__PURE__*/React.createElement(Tags, {
    selectedOptions: selection
  }), !(isEditable && hasFocus.current) && /*#__PURE__*/React.createElement(StyledValue, {
    isBare: isBare,
    isCompact: isCompact,
    isDisabled: isDisabled,
    isEditable: isEditable,
    isMultiselectable: isMultiselectable,
    isPlaceholder: !(inputValue || renderValue),
    onClick: event => {
      if (isEditable) {
        event.stopPropagation();
        inputRef.current?.focus();
      }
    }
  }, renderValue ? renderValue({
    selection,
    inputValue
  }) : inputValue || placeholder), /*#__PURE__*/React.createElement(StyledInput, inputProps)), (hasChevron || endIcon) && /*#__PURE__*/React.createElement(StyledInputIcon, {
    isCompact: isCompact,
    isEnd: true,
    isLabelHovered: isLabelHovered,
    isRotated: hasChevron && isExpanded
  }, hasChevron ? /*#__PURE__*/React.createElement(SvgChevronDownStroke, null) : endIcon))), /*#__PURE__*/React.createElement(Listbox, _extends$5({
    appendToNode: listboxAppendToNode,
    isCompact: isCompact,
    isExpanded: isExpanded,
    maxHeight: listboxMaxHeight,
    minHeight: listboxMinHeight,
    triggerRef: triggerRef,
    zIndex: listboxZIndex
  }, listboxProps), children)));
});
Combobox.displayName = 'Combobox';
Combobox.propTypes = {
  activeIndex: PropTypes.number,
  defaultActiveIndex: PropTypes.number,
  defaultExpanded: PropTypes.bool,
  endIcon: PropTypes.any,
  focusInset: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputValue: PropTypes.string,
  isAutocomplete: PropTypes.bool,
  isBare: PropTypes.bool,
  isCompact: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEditable: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isMultiselectable: PropTypes.bool,
  listboxAppendToNode: PropTypes.any,
  listboxAriaLabel: PropTypes.string,
  listboxMaxHeight: PropTypes.string,
  listboxMinHeight: PropTypes.string,
  listboxZIndex: PropTypes.number,
  maxHeight: PropTypes.string,
  maxTags: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  renderExpandTags: PropTypes.func,
  renderValue: PropTypes.func,
  selectionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  startIcon: PropTypes.any,
  validation: PropTypes.oneOf(VALIDATION)
};
Combobox.defaultProps = {
  isEditable: true,
  listboxMaxHeight: '400px',
  listboxZIndex: 1000,
  maxTags: MAX_TAGS
};
const Field = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
  const [labelProps, setLabelProps] = reactExports.useState(undefined);
  const [hasHint, setHasHint] = reactExports.useState(false);
  const [hasMessage, setHasMessage] = reactExports.useState(false);
  const contextValue = reactExports.useMemo(() => ({
    labelProps,
    setLabelProps,
    hasHint,
    setHasHint,
    hasMessage,
    setHasMessage
  }), [labelProps, setLabelProps, hasHint, setHasHint, hasMessage, setHasMessage]);
  return /*#__PURE__*/React.createElement(FieldContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledField, _extends$5({}, props, {
    ref: ref
  })));
});
Field.displayName = 'Field';
const Hint = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
  const {
    setHasHint
  } = useFieldContext();
  reactExports.useEffect(() => {
    setHasHint(true);
    return () => setHasHint(false);
  }, [setHasHint]);
  return /*#__PURE__*/React.createElement(StyledHint, _extends$5({}, props, {
    ref: ref
  }));
});
Hint.displayName = 'Hint';
const Label = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...props
  } = _ref;
  const {
    labelProps
  } = useFieldContext();
  return /*#__PURE__*/React.createElement(StyledLabel, _extends$5({}, labelProps, {
    onClick: composeEventHandlers$1(onClick, labelProps?.onClick),
    onMouseEnter: composeEventHandlers$1(onMouseEnter, labelProps?.onMouseEnter),
    onMouseLeave: composeEventHandlers$1(onMouseLeave, labelProps?.onMouseLeave)
  }, props, {
    ref: ref
  }));
});
Label.displayName = 'Label';
Label.propTypes = {
  hidden: PropTypes.bool,
  isRegular: PropTypes.bool
};
const Message = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
  const {
    setHasMessage
  } = useFieldContext();
  reactExports.useEffect(() => {
    setHasMessage(true);
    return () => setHasMessage(false);
  }, [setHasMessage]);
  return /*#__PURE__*/React.createElement(StyledMessage, _extends$5({}, props, {
    ref: ref
  }));
});
Message.displayName = 'Message';
Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION),
  validationLabel: PropTypes.string
};
var _path$3;
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var SvgPlusStroke = function SvgPlusStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/reactExports.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M7.5 2.5v12m6-6h-12"
  })));
};
var _path$2;
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var SvgChevronRightStroke = function SvgChevronRightStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "currentColor",
    d: "M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z"
  })));
};
var _path$1;
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var SvgChevronLeftStroke = function SvgChevronLeftStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/reactExports.createElement("path", {
    fill: "currentColor",
    d: "M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z"
  })));
};
var _path;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var SvgCheckLgStroke = function SvgCheckLgStroke(props) {
  return /*#__PURE__*/reactExports.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/reactExports.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M1 9l4 4L15 3"
  })));
};
const OPTION_TYPE = ['add', 'danger', 'next', 'previous'];
const OptionContext = /*#__PURE__*/reactExports.createContext(undefined);
const useOptionContext = () => {
  const context = reactExports.useContext(OptionContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within an <Option>.');
  }
  return context;
};
const OptionMetaComponent = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
  const {
    isDisabled
  } = useOptionContext();
  return /*#__PURE__*/React.createElement(StyledOptionMeta, _extends$5({
    isDisabled: isDisabled
  }, props, {
    ref: ref
  }));
});
OptionMetaComponent.displayName = 'Option.Meta';
const OptionMeta = OptionMetaComponent;
const OptionComponent = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    children,
    icon,
    isDisabled,
    isSelected,
    label,
    type,
    value,
    ...props
  } = _ref;
  const contextValue = reactExports.useMemo(() => ({
    isDisabled
  }), [isDisabled]);
  const {
    activeValue,
    getOptionProps,
    isCompact
  } = useComboboxContext();
  const isActive = value === activeValue;
  const optionRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        if (optionRef.current && optionRef.current.scrollIntoView) {
          optionRef.current.scrollIntoView({
            block: 'nearest'
          });
        }
      });
    }
  }, [isActive]);
  const renderActionIcon = iconType => {
    switch (iconType) {
      case 'add':
        return /*#__PURE__*/React.createElement(SvgPlusStroke, null);
      case 'next':
        return /*#__PURE__*/React.createElement(SvgChevronRightStroke, null);
      case 'previous':
        return /*#__PURE__*/React.createElement(SvgChevronLeftStroke, null);
      default:
        return /*#__PURE__*/React.createElement(SvgCheckLgStroke, null);
    }
  };
  const option = toOption({
    value,
    label,
    isDisabled,
    isSelected
  });
  const optionProps = getOptionProps({
    option,
    ref: mergeRefs([optionRef, ref])
  });
  return /*#__PURE__*/React.createElement(OptionContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledOption, _extends$5({
    isActive: isActive,
    isCompact: isCompact,
    $type: type
  }, props, optionProps), /*#__PURE__*/React.createElement(StyledOptionTypeIcon, {
    isCompact: isCompact,
    type: type
  }, renderActionIcon(type)), icon && /*#__PURE__*/React.createElement(StyledOptionIcon, null, icon), /*#__PURE__*/React.createElement(StyledOptionContent, null, children || label || toString({
    value
  }))));
});
OptionComponent.displayName = 'Option';
OptionComponent.propTypes = {
  icon: PropTypes.any,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  tagProps: PropTypes.object,
  type: PropTypes.oneOf(OPTION_TYPE),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};
const Option = OptionComponent;
Option.Meta = OptionMeta;
const OptGroup = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
  let {
    children,
    content,
    icon,
    label,
    'aria-label': ariaLabel,
    onMouseDown,
    ...props
  } = _ref;
  const {
    getOptGroupProps,
    isCompact
  } = useComboboxContext();
  const handleMouseDown = event => event.preventDefault();
  const groupAriaLabel = useText(OptGroup, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Group', !label);
  const optGroupProps = getOptGroupProps({
    'aria-label': groupAriaLabel || label
  });
  return /*#__PURE__*/React.createElement(StyledOption, _extends$5({
    isCompact: isCompact,
    $type: "group",
    onMouseDown: composeEventHandlers$1(onMouseDown, handleMouseDown),
    role: "none"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(StyledOptionContent, null, (content || label) && /*#__PURE__*/React.createElement(StyledOption, {
    as: "div",
    isCompact: isCompact,
    $type: "header"
  }, icon && /*#__PURE__*/React.createElement(StyledOptionTypeIcon, {
    isCompact: isCompact,
    type: "header"
  }, icon), content || label), /*#__PURE__*/React.createElement(StyledOptGroup, _extends$5({
    isCompact: isCompact
  }, optGroupProps), /*#__PURE__*/React.createElement(StyledSeparator, {
    role: "none"
  }), children)));
});
OptGroup.displayName = 'OptGroup';
OptGroup.propTypes = {
  content: PropTypes.any,
  icon: PropTypes.any,
  label: PropTypes.string
};

export { Combobox as C, DEFAULT_THEME as D, Field as F, Label as L, Option as O, ReactDOM as R, ThemeProvider as T, React as a };
