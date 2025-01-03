;(function () {
  const d = document.createElement('link').relList
  if (d && d.supports && d.supports('modulepreload')) return
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) u(h)
  new MutationObserver((h) => {
    for (const v of h) if (v.type === 'childList') for (const C of v.addedNodes) C.tagName === 'LINK' && C.rel === 'modulepreload' && u(C)
  }).observe(document, { childList: !0, subtree: !0 })
  function a(h) {
    const v = {}
    return h.integrity && (v.integrity = h.integrity), h.referrerPolicy && (v.referrerPolicy = h.referrerPolicy), h.crossOrigin === 'use-credentials' ? (v.credentials = 'include') : h.crossOrigin === 'anonymous' ? (v.credentials = 'omit') : (v.credentials = 'same-origin'), v
  }
  function u(h) {
    if (h.ep) return
    h.ep = !0
    const v = a(h)
    fetch(h.href, v)
  }
})()
var _s = { exports: {} },
  pi = {},
  Cs = { exports: {} },
  ge = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc
function Nf() {
  if (dc) return ge
  dc = 1
  var l = Symbol.for('react.element'),
    d = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    v = Symbol.for('react.provider'),
    C = Symbol.for('react.context'),
    T = Symbol.for('react.forward_ref'),
    w = Symbol.for('react.suspense'),
    R = Symbol.for('react.memo'),
    U = Symbol.for('react.lazy'),
    b = Symbol.iterator
  function O(P) {
    return P === null || typeof P != 'object' ? null : ((P = (b && P[b]) || P['@@iterator']), typeof P == 'function' ? P : null)
  }
  var V = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    G = Object.assign,
    J = {}
  function B(P, M, de) {
    ;(this.props = P), (this.context = M), (this.refs = J), (this.updater = de || V)
  }
  ;(B.prototype.isReactComponent = {}),
    (B.prototype.setState = function (P, M) {
      if (typeof P != 'object' && typeof P != 'function' && P != null) throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.')
      this.updater.enqueueSetState(this, P, M, 'setState')
    }),
    (B.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, 'forceUpdate')
    })
  function K() {}
  K.prototype = B.prototype
  function q(P, M, de) {
    ;(this.props = P), (this.context = M), (this.refs = J), (this.updater = de || V)
  }
  var ce = (q.prototype = new K())
  ;(ce.constructor = q), G(ce, B.prototype), (ce.isPureReactComponent = !0)
  var me = Array.isArray,
    we = Object.prototype.hasOwnProperty,
    Le = { current: null },
    Re = { key: !0, ref: !0, __self: !0, __source: !0 }
  function Me(P, M, de) {
    var fe,
      ve = {},
      ye = null,
      Ee = null
    if (M != null) for (fe in (M.ref !== void 0 && (Ee = M.ref), M.key !== void 0 && (ye = '' + M.key), M)) we.call(M, fe) && !Re.hasOwnProperty(fe) && (ve[fe] = M[fe])
    var Ce = arguments.length - 2
    if (Ce === 1) ve.children = de
    else if (1 < Ce) {
      for (var Pe = Array(Ce), Ze = 0; Ze < Ce; Ze++) Pe[Ze] = arguments[Ze + 2]
      ve.children = Pe
    }
    if (P && P.defaultProps) for (fe in ((Ce = P.defaultProps), Ce)) ve[fe] === void 0 && (ve[fe] = Ce[fe])
    return { $$typeof: l, type: P, key: ye, ref: Ee, props: ve, _owner: Le.current }
  }
  function Ae(P, M) {
    return { $$typeof: l, type: P.type, key: M, ref: P.ref, props: P.props, _owner: P._owner }
  }
  function He(P) {
    return typeof P == 'object' && P !== null && P.$$typeof === l
  }
  function mt(P) {
    var M = { '=': '=0', ':': '=2' }
    return (
      '$' +
      P.replace(/[=:]/g, function (de) {
        return M[de]
      })
    )
  }
  var gt = /\/+/g
  function it(P, M) {
    return typeof P == 'object' && P !== null && P.key != null ? mt('' + P.key) : M.toString(36)
  }
  function st(P, M, de, fe, ve) {
    var ye = typeof P
    ;(ye === 'undefined' || ye === 'boolean') && (P = null)
    var Ee = !1
    if (P === null) Ee = !0
    else
      switch (ye) {
        case 'string':
        case 'number':
          Ee = !0
          break
        case 'object':
          switch (P.$$typeof) {
            case l:
            case d:
              Ee = !0
          }
      }
    if (Ee)
      return (
        (Ee = P),
        (ve = ve(Ee)),
        (P = fe === '' ? '.' + it(Ee, 0) : fe),
        me(ve)
          ? ((de = ''),
            P != null && (de = P.replace(gt, '$&/') + '/'),
            st(ve, M, de, '', function (Ze) {
              return Ze
            }))
          : ve != null && (He(ve) && (ve = Ae(ve, de + (!ve.key || (Ee && Ee.key === ve.key) ? '' : ('' + ve.key).replace(gt, '$&/') + '/') + P)), M.push(ve)),
        1
      )
    if (((Ee = 0), (fe = fe === '' ? '.' : fe + ':'), me(P)))
      for (var Ce = 0; Ce < P.length; Ce++) {
        ye = P[Ce]
        var Pe = fe + it(ye, Ce)
        Ee += st(ye, M, de, Pe, ve)
      }
    else if (((Pe = O(P)), typeof Pe == 'function')) for (P = Pe.call(P), Ce = 0; !(ye = P.next()).done; ) (ye = ye.value), (Pe = fe + it(ye, Ce++)), (Ee += st(ye, M, de, Pe, ve))
    else if (ye === 'object') throw ((M = String(P)), Error('Objects are not valid as a React child (found: ' + (M === '[object Object]' ? 'object with keys {' + Object.keys(P).join(', ') + '}' : M) + '). If you meant to render a collection of children, use an array instead.'))
    return Ee
  }
  function lt(P, M, de) {
    if (P == null) return P
    var fe = [],
      ve = 0
    return (
      st(P, fe, '', '', function (ye) {
        return M.call(de, ye, ve++)
      }),
      fe
    )
  }
  function Ye(P) {
    if (P._status === -1) {
      var M = P._result
      ;(M = M()),
        M.then(
          function (de) {
            ;(P._status === 0 || P._status === -1) && ((P._status = 1), (P._result = de))
          },
          function (de) {
            ;(P._status === 0 || P._status === -1) && ((P._status = 2), (P._result = de))
          },
        ),
        P._status === -1 && ((P._status = 0), (P._result = M))
    }
    if (P._status === 1) return P._result.default
    throw P._result
  }
  var Ie = { current: null },
    Q = { transition: null },
    ae = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: Q, ReactCurrentOwner: Le }
  function Z() {
    throw Error('act(...) is not supported in production builds of React.')
  }
  return (
    (ge.Children = {
      map: lt,
      forEach: function (P, M, de) {
        lt(
          P,
          function () {
            M.apply(this, arguments)
          },
          de,
        )
      },
      count: function (P) {
        var M = 0
        return (
          lt(P, function () {
            M++
          }),
          M
        )
      },
      toArray: function (P) {
        return (
          lt(P, function (M) {
            return M
          }) || []
        )
      },
      only: function (P) {
        if (!He(P)) throw Error('React.Children.only expected to receive a single React element child.')
        return P
      },
    }),
    (ge.Component = B),
    (ge.Fragment = a),
    (ge.Profiler = h),
    (ge.PureComponent = q),
    (ge.StrictMode = u),
    (ge.Suspense = w),
    (ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae),
    (ge.act = Z),
    (ge.cloneElement = function (P, M, de) {
      if (P == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + P + '.')
      var fe = G({}, P.props),
        ve = P.key,
        ye = P.ref,
        Ee = P._owner
      if (M != null) {
        if ((M.ref !== void 0 && ((ye = M.ref), (Ee = Le.current)), M.key !== void 0 && (ve = '' + M.key), P.type && P.type.defaultProps)) var Ce = P.type.defaultProps
        for (Pe in M) we.call(M, Pe) && !Re.hasOwnProperty(Pe) && (fe[Pe] = M[Pe] === void 0 && Ce !== void 0 ? Ce[Pe] : M[Pe])
      }
      var Pe = arguments.length - 2
      if (Pe === 1) fe.children = de
      else if (1 < Pe) {
        Ce = Array(Pe)
        for (var Ze = 0; Ze < Pe; Ze++) Ce[Ze] = arguments[Ze + 2]
        fe.children = Ce
      }
      return { $$typeof: l, type: P.type, key: ve, ref: ye, props: fe, _owner: Ee }
    }),
    (ge.createContext = function (P) {
      return (P = { $$typeof: C, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (P.Provider = { $$typeof: v, _context: P }), (P.Consumer = P)
    }),
    (ge.createElement = Me),
    (ge.createFactory = function (P) {
      var M = Me.bind(null, P)
      return (M.type = P), M
    }),
    (ge.createRef = function () {
      return { current: null }
    }),
    (ge.forwardRef = function (P) {
      return { $$typeof: T, render: P }
    }),
    (ge.isValidElement = He),
    (ge.lazy = function (P) {
      return { $$typeof: U, _payload: { _status: -1, _result: P }, _init: Ye }
    }),
    (ge.memo = function (P, M) {
      return { $$typeof: R, type: P, compare: M === void 0 ? null : M }
    }),
    (ge.startTransition = function (P) {
      var M = Q.transition
      Q.transition = {}
      try {
        P()
      } finally {
        Q.transition = M
      }
    }),
    (ge.unstable_act = Z),
    (ge.useCallback = function (P, M) {
      return Ie.current.useCallback(P, M)
    }),
    (ge.useContext = function (P) {
      return Ie.current.useContext(P)
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (P) {
      return Ie.current.useDeferredValue(P)
    }),
    (ge.useEffect = function (P, M) {
      return Ie.current.useEffect(P, M)
    }),
    (ge.useId = function () {
      return Ie.current.useId()
    }),
    (ge.useImperativeHandle = function (P, M, de) {
      return Ie.current.useImperativeHandle(P, M, de)
    }),
    (ge.useInsertionEffect = function (P, M) {
      return Ie.current.useInsertionEffect(P, M)
    }),
    (ge.useLayoutEffect = function (P, M) {
      return Ie.current.useLayoutEffect(P, M)
    }),
    (ge.useMemo = function (P, M) {
      return Ie.current.useMemo(P, M)
    }),
    (ge.useReducer = function (P, M, de) {
      return Ie.current.useReducer(P, M, de)
    }),
    (ge.useRef = function (P) {
      return Ie.current.useRef(P)
    }),
    (ge.useState = function (P) {
      return Ie.current.useState(P)
    }),
    (ge.useSyncExternalStore = function (P, M, de) {
      return Ie.current.useSyncExternalStore(P, M, de)
    }),
    (ge.useTransition = function () {
      return Ie.current.useTransition()
    }),
    (ge.version = '18.3.1'),
    ge
  )
}
var fc
function Ls() {
  return fc || ((fc = 1), (Cs.exports = Nf())), Cs.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc
function Df() {
  if (pc) return pi
  pc = 1
  var l = Ls(),
    d = Symbol.for('react.element'),
    a = Symbol.for('react.fragment'),
    u = Object.prototype.hasOwnProperty,
    h = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    v = { key: !0, ref: !0, __self: !0, __source: !0 }
  function C(T, w, R) {
    var U,
      b = {},
      O = null,
      V = null
    R !== void 0 && (O = '' + R), w.key !== void 0 && (O = '' + w.key), w.ref !== void 0 && (V = w.ref)
    for (U in w) u.call(w, U) && !v.hasOwnProperty(U) && (b[U] = w[U])
    if (T && T.defaultProps) for (U in ((w = T.defaultProps), w)) b[U] === void 0 && (b[U] = w[U])
    return { $$typeof: d, type: T, key: O, ref: V, props: b, _owner: h.current }
  }
  return (pi.Fragment = a), (pi.jsx = C), (pi.jsxs = C), pi
}
var hc
function Mf() {
  return hc || ((hc = 1), (_s.exports = Df())), _s.exports
}
var he = Mf(),
  Ao = {},
  Ss = { exports: {} },
  ht = {},
  ks = { exports: {} },
  ws = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mc
function zf() {
  return (
    mc ||
      ((mc = 1),
      (function (l) {
        function d(Q, ae) {
          var Z = Q.length
          Q.push(ae)
          e: for (; 0 < Z; ) {
            var P = (Z - 1) >>> 1,
              M = Q[P]
            if (0 < h(M, ae)) (Q[P] = ae), (Q[Z] = M), (Z = P)
            else break e
          }
        }
        function a(Q) {
          return Q.length === 0 ? null : Q[0]
        }
        function u(Q) {
          if (Q.length === 0) return null
          var ae = Q[0],
            Z = Q.pop()
          if (Z !== ae) {
            Q[0] = Z
            e: for (var P = 0, M = Q.length, de = M >>> 1; P < de; ) {
              var fe = 2 * (P + 1) - 1,
                ve = Q[fe],
                ye = fe + 1,
                Ee = Q[ye]
              if (0 > h(ve, Z)) ye < M && 0 > h(Ee, ve) ? ((Q[P] = Ee), (Q[ye] = Z), (P = ye)) : ((Q[P] = ve), (Q[fe] = Z), (P = fe))
              else if (ye < M && 0 > h(Ee, Z)) (Q[P] = Ee), (Q[ye] = Z), (P = ye)
              else break e
            }
          }
          return ae
        }
        function h(Q, ae) {
          var Z = Q.sortIndex - ae.sortIndex
          return Z !== 0 ? Z : Q.id - ae.id
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var v = performance
          l.unstable_now = function () {
            return v.now()
          }
        } else {
          var C = Date,
            T = C.now()
          l.unstable_now = function () {
            return C.now() - T
          }
        }
        var w = [],
          R = [],
          U = 1,
          b = null,
          O = 3,
          V = !1,
          G = !1,
          J = !1,
          B = typeof setTimeout == 'function' ? setTimeout : null,
          K = typeof clearTimeout == 'function' ? clearTimeout : null,
          q = typeof setImmediate < 'u' ? setImmediate : null
        typeof navigator < 'u' && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling)
        function ce(Q) {
          for (var ae = a(R); ae !== null; ) {
            if (ae.callback === null) u(R)
            else if (ae.startTime <= Q) u(R), (ae.sortIndex = ae.expirationTime), d(w, ae)
            else break
            ae = a(R)
          }
        }
        function me(Q) {
          if (((J = !1), ce(Q), !G))
            if (a(w) !== null) (G = !0), Ye(we)
            else {
              var ae = a(R)
              ae !== null && Ie(me, ae.startTime - Q)
            }
        }
        function we(Q, ae) {
          ;(G = !1), J && ((J = !1), K(Me), (Me = -1)), (V = !0)
          var Z = O
          try {
            for (ce(ae), b = a(w); b !== null && (!(b.expirationTime > ae) || (Q && !mt())); ) {
              var P = b.callback
              if (typeof P == 'function') {
                ;(b.callback = null), (O = b.priorityLevel)
                var M = P(b.expirationTime <= ae)
                ;(ae = l.unstable_now()), typeof M == 'function' ? (b.callback = M) : b === a(w) && u(w), ce(ae)
              } else u(w)
              b = a(w)
            }
            if (b !== null) var de = !0
            else {
              var fe = a(R)
              fe !== null && Ie(me, fe.startTime - ae), (de = !1)
            }
            return de
          } finally {
            ;(b = null), (O = Z), (V = !1)
          }
        }
        var Le = !1,
          Re = null,
          Me = -1,
          Ae = 5,
          He = -1
        function mt() {
          return !(l.unstable_now() - He < Ae)
        }
        function gt() {
          if (Re !== null) {
            var Q = l.unstable_now()
            He = Q
            var ae = !0
            try {
              ae = Re(!0, Q)
            } finally {
              ae ? it() : ((Le = !1), (Re = null))
            }
          } else Le = !1
        }
        var it
        if (typeof q == 'function')
          it = function () {
            q(gt)
          }
        else if (typeof MessageChannel < 'u') {
          var st = new MessageChannel(),
            lt = st.port2
          ;(st.port1.onmessage = gt),
            (it = function () {
              lt.postMessage(null)
            })
        } else
          it = function () {
            B(gt, 0)
          }
        function Ye(Q) {
          ;(Re = Q), Le || ((Le = !0), it())
        }
        function Ie(Q, ae) {
          Me = B(function () {
            Q(l.unstable_now())
          }, ae)
        }
        ;(l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (Q) {
            Q.callback = null
          }),
          (l.unstable_continueExecution = function () {
            G || V || ((G = !0), Ye(we))
          }),
          (l.unstable_forceFrameRate = function (Q) {
            0 > Q || 125 < Q ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (Ae = 0 < Q ? Math.floor(1e3 / Q) : 5)
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return O
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return a(w)
          }),
          (l.unstable_next = function (Q) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var ae = 3
                break
              default:
                ae = O
            }
            var Z = O
            O = ae
            try {
              return Q()
            } finally {
              O = Z
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (Q, ae) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                Q = 3
            }
            var Z = O
            O = Q
            try {
              return ae()
            } finally {
              O = Z
            }
          }),
          (l.unstable_scheduleCallback = function (Q, ae, Z) {
            var P = l.unstable_now()
            switch ((typeof Z == 'object' && Z !== null ? ((Z = Z.delay), (Z = typeof Z == 'number' && 0 < Z ? P + Z : P)) : (Z = P), Q)) {
              case 1:
                var M = -1
                break
              case 2:
                M = 250
                break
              case 5:
                M = 1073741823
                break
              case 4:
                M = 1e4
                break
              default:
                M = 5e3
            }
            return (M = Z + M), (Q = { id: U++, callback: ae, priorityLevel: Q, startTime: Z, expirationTime: M, sortIndex: -1 }), Z > P ? ((Q.sortIndex = Z), d(R, Q), a(w) === null && Q === a(R) && (J ? (K(Me), (Me = -1)) : (J = !0), Ie(me, Z - P))) : ((Q.sortIndex = M), d(w, Q), G || V || ((G = !0), Ye(we))), Q
          }),
          (l.unstable_shouldYield = mt),
          (l.unstable_wrapCallback = function (Q) {
            var ae = O
            return function () {
              var Z = O
              O = ae
              try {
                return Q.apply(this, arguments)
              } finally {
                O = Z
              }
            }
          })
      })(ws)),
    ws
  )
}
var gc
function jf() {
  return gc || ((gc = 1), (ks.exports = zf())), ks.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vc
function Ff() {
  if (vc) return ht
  vc = 1
  var l = Ls(),
    d = jf()
  function a(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n])
    return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  }
  var u = new Set(),
    h = {}
  function v(e, t) {
    C(e, t), C(e + 'Capture', t)
  }
  function C(e, t) {
    for (h[e] = t, e = 0; e < t.length; e++) u.add(t[e])
  }
  var T = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    w = Object.prototype.hasOwnProperty,
    R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    U = {},
    b = {}
  function O(e) {
    return w.call(b, e) ? !0 : w.call(U, e) ? !1 : R.test(e) ? (b[e] = !0) : ((U[e] = !0), !1)
  }
  function V(e, t, n, r) {
    if (n !== null && n.type === 0) return !1
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0
      case 'boolean':
        return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
      default:
        return !1
    }
  }
  function G(e, t, n, r) {
    if (t === null || typeof t > 'u' || V(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t
        case 4:
          return t === !1
        case 5:
          return isNaN(t)
        case 6:
          return isNaN(t) || 1 > t
      }
    return !1
  }
  function J(e, t, n, r, i, o, c) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = i), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = o), (this.removeEmptyString = c)
  }
  var B = {}
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach(function (e) {
    B[e] = new J(e, 0, !1, e, null, !1, !1)
  }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0]
      B[t] = new J(t, 1, !1, e[1], null, !1, !1)
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      B[e] = new J(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
      B[e] = new J(e, 2, !1, e, null, !1, !1)
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'.split(' ').forEach(function (e) {
      B[e] = new J(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      B[e] = new J(e, 3, !0, e, null, !1, !1)
    }),
    ['capture', 'download'].forEach(function (e) {
      B[e] = new J(e, 4, !1, e, null, !1, !1)
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      B[e] = new J(e, 6, !1, e, null, !1, !1)
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      B[e] = new J(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })
  var K = /[\-:]([a-z])/g
  function q(e) {
    return e[1].toUpperCase()
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(K, q)
      B[t] = new J(t, 1, !1, e, null, !1, !1)
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
      var t = e.replace(K, q)
      B[t] = new J(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(K, q)
      B[t] = new J(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      B[e] = new J(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }),
    (B.xlinkHref = new J('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      B[e] = new J(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })
  function ce(e, t, n, r) {
    var i = B.hasOwnProperty(t) ? B[t] : null
    ;(i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) && (G(t, n, i, r) && (n = null), r || i === null ? O(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n)) : i.mustUseProperty ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n) : ((t = i.attributeName), (r = i.attributeNamespace), n === null ? e.removeAttribute(t) : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
  }
  var me = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    we = Symbol.for('react.element'),
    Le = Symbol.for('react.portal'),
    Re = Symbol.for('react.fragment'),
    Me = Symbol.for('react.strict_mode'),
    Ae = Symbol.for('react.profiler'),
    He = Symbol.for('react.provider'),
    mt = Symbol.for('react.context'),
    gt = Symbol.for('react.forward_ref'),
    it = Symbol.for('react.suspense'),
    st = Symbol.for('react.suspense_list'),
    lt = Symbol.for('react.memo'),
    Ye = Symbol.for('react.lazy'),
    Ie = Symbol.for('react.offscreen'),
    Q = Symbol.iterator
  function ae(e) {
    return e === null || typeof e != 'object' ? null : ((e = (Q && e[Q]) || e['@@iterator']), typeof e == 'function' ? e : null)
  }
  var Z = Object.assign,
    P
  function M(e) {
    if (P === void 0)
      try {
        throw Error()
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/)
        P = (t && t[1]) || ''
      }
    return (
      `
` +
      P +
      e
    )
  }
  var de = !1
  function fe(e, t) {
    if (!e || de) return ''
    de = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (t)
        if (
          ((t = function () {
            throw Error()
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, [])
          } catch (A) {
            var r = A
          }
          Reflect.construct(e, [], t)
        } else {
          try {
            t.call()
          } catch (A) {
            r = A
          }
          e.call(t.prototype)
        }
      else {
        try {
          throw Error()
        } catch (A) {
          r = A
        }
        e()
      }
    } catch (A) {
      if (A && r && typeof A.stack == 'string') {
        for (
          var i = A.stack.split(`
`),
            o = r.stack.split(`
`),
            c = i.length - 1,
            g = o.length - 1;
          1 <= c && 0 <= g && i[c] !== o[g];

        )
          g--
        for (; 1 <= c && 0 <= g; c--, g--)
          if (i[c] !== o[g]) {
            if (c !== 1 || g !== 1)
              do
                if ((c--, g--, 0 > g || i[c] !== o[g])) {
                  var y =
                    `
` + i[c].replace(' at new ', ' at ')
                  return e.displayName && y.includes('<anonymous>') && (y = y.replace('<anonymous>', e.displayName)), y
                }
              while (1 <= c && 0 <= g)
            break
          }
      }
    } finally {
      ;(de = !1), (Error.prepareStackTrace = n)
    }
    return (e = e ? e.displayName || e.name : '') ? M(e) : ''
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return M(e.type)
      case 16:
        return M('Lazy')
      case 13:
        return M('Suspense')
      case 19:
        return M('SuspenseList')
      case 0:
      case 2:
      case 15:
        return (e = fe(e.type, !1)), e
      case 11:
        return (e = fe(e.type.render, !1)), e
      case 1:
        return (e = fe(e.type, !0)), e
      default:
        return ''
    }
  }
  function ye(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case Re:
        return 'Fragment'
      case Le:
        return 'Portal'
      case Ae:
        return 'Profiler'
      case Me:
        return 'StrictMode'
      case it:
        return 'Suspense'
      case st:
        return 'SuspenseList'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case mt:
          return (e.displayName || 'Context') + '.Consumer'
        case He:
          return (e._context.displayName || 'Context') + '.Provider'
        case gt:
          var t = e.render
          return (e = e.displayName), e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')), e
        case lt:
          return (t = e.displayName || null), t !== null ? t : ye(e.type) || 'Memo'
        case Ye:
          ;(t = e._payload), (e = e._init)
          try {
            return ye(e(t))
          } catch {}
      }
    return null
  }
  function Ee(e) {
    var t = e.type
    switch (e.tag) {
      case 24:
        return 'Cache'
      case 9:
        return (t.displayName || 'Context') + '.Consumer'
      case 10:
        return (t._context.displayName || 'Context') + '.Provider'
      case 18:
        return 'DehydratedFragment'
      case 11:
        return (e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      case 7:
        return 'Fragment'
      case 5:
        return t
      case 4:
        return 'Portal'
      case 3:
        return 'Root'
      case 6:
        return 'Text'
      case 16:
        return ye(t)
      case 8:
        return t === Me ? 'StrictMode' : 'Mode'
      case 22:
        return 'Offscreen'
      case 12:
        return 'Profiler'
      case 21:
        return 'Scope'
      case 13:
        return 'Suspense'
      case 19:
        return 'SuspenseList'
      case 25:
        return 'TracingMarker'
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null
        if (typeof t == 'string') return t
    }
    return null
  }
  function Ce(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function Pe(e) {
    var t = e.type
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  }
  function Ze(e) {
    var t = Pe(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t]
    if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
      var i = n.get,
        o = n.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this)
          },
          set: function (c) {
            ;(r = '' + c), o.call(this, c)
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r
          },
          setValue: function (c) {
            r = '' + c
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[t]
          },
        }
      )
    }
  }
  function An(e) {
    e._valueTracker || (e._valueTracker = Ze(e))
  }
  function Tr(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
      r = ''
    return e && (r = Pe(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1
  }
  function In(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  function Wt(e, t) {
    var n = t.checked
    return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked })
  }
  function On(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked
    ;(n = Ce(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null })
  }
  function Qn(e, t) {
    ;(t = t.checked), t != null && ce(e, 'checked', t, !1)
  }
  function rn(e, t) {
    Qn(e, t)
    var n = Ce(t.value),
      r = t.type
    if (n != null) r === 'number' ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n) : e.value !== '' + n && (e.value = '' + n)
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value')
      return
    }
    t.hasOwnProperty('value') ? Dn(e, t.type, n) : t.hasOwnProperty('defaultValue') && Dn(e, t.type, Ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
  }
  function Nn(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type
      if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
      ;(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t)
    }
    ;(n = e.name), n !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== '' && (e.name = n)
  }
  function Dn(e, t, n) {
    ;(t !== 'number' || In(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
  }
  var Bt = Array.isArray
  function Lt(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {}
      for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
      for (n = 0; n < e.length; n++) (i = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
      for (n = '' + Ce(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
          return
        }
        t !== null || e[i].disabled || (t = e[i])
      }
      t !== null && (t.selected = !0)
    }
  }
  function on(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91))
    return Z({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
  }
  function Ci(e, t) {
    var n = t.value
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92))
        if (Bt(n)) {
          if (1 < n.length) throw Error(a(93))
          n = n[0]
        }
        t = n
      }
      t == null && (t = ''), (n = t)
    }
    e._wrapperState = { initialValue: Ce(n) }
  }
  function ke(e, t) {
    var n = Ce(t.value),
      r = Ce(t.defaultValue)
    n != null && ((n = '' + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = '' + r)
  }
  function Pr(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
  }
  function Rr(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg'
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML'
      default:
        return 'http://www.w3.org/1999/xhtml'
    }
  }
  function Yn(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml' ? Rr(t) : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : e
  }
  var Xn,
    Si = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i)
            })
          }
        : e
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
      else {
        for (Xn = Xn || document.createElement('div'), Xn.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = Xn.firstChild; e.firstChild; ) e.removeChild(e.firstChild)
        for (; t.firstChild; ) e.appendChild(t.firstChild)
      }
    })
  function an(e, t) {
    if (t) {
      var n = e.firstChild
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var Mn = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    jo = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(Mn).forEach(function (e) {
    jo.forEach(function (t) {
      ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e])
    })
  })
  function ki(e, t, n) {
    return t == null || typeof t == 'boolean' || t === '' ? '' : n || typeof t != 'number' || t === 0 || (Mn.hasOwnProperty(e) && Mn[e]) ? ('' + t).trim() : t + 'px'
  }
  function sn(e, t) {
    e = e.style
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          i = ki(n, t[n], r)
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
      }
  }
  var Fo = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 })
  function xr(e, t) {
    if (t) {
      if (Fo[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e))
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60))
        if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(a(61))
      }
      if (t.style != null && typeof t.style != 'object') throw Error(a(62))
    }
  }
  function Lr(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string'
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var Ar = null
  function St(e) {
    return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
  }
  var qn = null,
    ln = null,
    un = null
  function oe(e) {
    if ((e = qr(e))) {
      if (typeof qn != 'function') throw Error(a(280))
      var t = e.stateNode
      t && ((t = Wi(t)), qn(e.stateNode, e.type, t))
    }
  }
  function Ir(e) {
    ln ? (un ? un.push(e) : (un = [e])) : (ln = e)
  }
  function Or() {
    if (ln) {
      var e = ln,
        t = un
      if (((un = ln = null), oe(e), t)) for (e = 0; e < t.length; e++) oe(t[e])
    }
  }
  function Zn(e, t) {
    return e(t)
  }
  function Nr() {}
  var er = !1
  function s(e, t, n) {
    if (er) return e(t, n)
    er = !0
    try {
      return Zn(e, t, n)
    } finally {
      ;(er = !1), (ln !== null || un !== null) && (Nr(), Or())
    }
  }
  function f(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = Wi(n)
    if (r === null) return null
    n = r[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(r = !r.disabled) || ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !r)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (n && typeof n != 'function') throw Error(a(231, t, typeof n))
    return n
  }
  var p = !1
  if (T)
    try {
      var m = {}
      Object.defineProperty(m, 'passive', {
        get: function () {
          p = !0
        },
      }),
        window.addEventListener('test', m, m),
        window.removeEventListener('test', m, m)
    } catch {
      p = !1
    }
  function k(e, t, n, r, i, o, c, g, y) {
    var A = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(n, A)
    } catch (F) {
      this.onError(F)
    }
  }
  var E = !1,
    _ = null,
    D = !1,
    I = null,
    j = {
      onError: function (e) {
        ;(E = !0), (_ = e)
      },
    }
  function Y(e, t, n, r, i, o, c, g, y) {
    ;(E = !1), (_ = null), k.apply(j, arguments)
  }
  function ne(e, t, n, r, i, o, c, g, y) {
    if ((Y.apply(this, arguments), E)) {
      if (E) {
        var A = _
        ;(E = !1), (_ = null)
      } else throw Error(a(198))
      D || ((D = !0), (I = A))
    }
  }
  function pe(e) {
    var t = e,
      n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
      while (e)
    }
    return t.tag === 3 ? n : null
  }
  function kt(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
    }
    return null
  }
  function wi(e) {
    if (pe(e) !== e) throw Error(a(188))
  }
  function $c(e) {
    var t = e.alternate
    if (!t) {
      if (((t = pe(e)), t === null)) throw Error(a(188))
      return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
      var i = n.return
      if (i === null) break
      var o = i.alternate
      if (o === null) {
        if (((r = i.return), r !== null)) {
          n = r
          continue
        }
        break
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n) return wi(i), e
          if (o === r) return wi(i), t
          o = o.sibling
        }
        throw Error(a(188))
      }
      if (n.return !== r.return) (n = i), (r = o)
      else {
        for (var c = !1, g = i.child; g; ) {
          if (g === n) {
            ;(c = !0), (n = i), (r = o)
            break
          }
          if (g === r) {
            ;(c = !0), (r = i), (n = o)
            break
          }
          g = g.sibling
        }
        if (!c) {
          for (g = o.child; g; ) {
            if (g === n) {
              ;(c = !0), (n = o), (r = i)
              break
            }
            if (g === r) {
              ;(c = !0), (r = o), (n = i)
              break
            }
            g = g.sibling
          }
          if (!c) throw Error(a(189))
        }
      }
      if (n.alternate !== r) throw Error(a(190))
    }
    if (n.tag !== 3) throw Error(a(188))
    return n.stateNode.current === n ? e : t
  }
  function zs(e) {
    return (e = $c(e)), e !== null ? js(e) : null
  }
  function js(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
      var t = js(e)
      if (t !== null) return t
      e = e.sibling
    }
    return null
  }
  var Fs = d.unstable_scheduleCallback,
    Hs = d.unstable_cancelCallback,
    Wc = d.unstable_shouldYield,
    Bc = d.unstable_requestPaint,
    Ge = d.unstable_now,
    Vc = d.unstable_getCurrentPriorityLevel,
    Ho = d.unstable_ImmediatePriority,
    Us = d.unstable_UserBlockingPriority,
    Ei = d.unstable_NormalPriority,
    Kc = d.unstable_LowPriority,
    Gs = d.unstable_IdlePriority,
    Ti = null,
    jt = null
  function Jc(e) {
    if (jt && typeof jt.onCommitFiberRoot == 'function')
      try {
        jt.onCommitFiberRoot(Ti, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
  }
  var At = Math.clz32 ? Math.clz32 : Xc,
    Qc = Math.log,
    Yc = Math.LN2
  function Xc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Qc(e) / Yc) | 0)) | 0
  }
  var Pi = 64,
    Ri = 4194304
  function Dr(e) {
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
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
        return e & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return e
    }
  }
  function xi(e, t) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var r = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      c = n & 268435455
    if (c !== 0) {
      var g = c & ~i
      g !== 0 ? (r = Dr(g)) : ((o &= c), o !== 0 && (r = Dr(o)))
    } else (c = n & ~i), c !== 0 ? (r = Dr(c)) : o !== 0 && (r = Dr(o))
    if (r === 0) return 0
    if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))) return t
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - At(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
    return r
  }
  function qc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250
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
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function Zc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var c = 31 - At(o),
        g = 1 << c,
        y = i[c]
      y === -1 ? (!(g & n) || g & r) && (i[c] = qc(g, t)) : y <= t && (e.expiredLanes |= g), (o &= ~g)
    }
  }
  function Uo(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  }
  function bs() {
    var e = Pi
    return (Pi <<= 1), !(Pi & 4194240) && (Pi = 64), e
  }
  function Go(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
  }
  function Mr(e, t, n) {
    ;(e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - At(t)), (e[t] = n)
  }
  function ed(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements)
    var r = e.eventTimes
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - At(n),
        o = 1 << i
      ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
    }
  }
  function bo(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
      var r = 31 - At(n),
        i = 1 << r
      ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
    }
  }
  var Te = 0
  function $s(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  }
  var Ws,
    $o,
    Bs,
    Vs,
    Ks,
    Wo = !1,
    Li = [],
    cn = null,
    dn = null,
    fn = null,
    zr = new Map(),
    jr = new Map(),
    pn = [],
    td = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(' ')
  function Js(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        cn = null
        break
      case 'dragenter':
      case 'dragleave':
        dn = null
        break
      case 'mouseover':
      case 'mouseout':
        fn = null
        break
      case 'pointerover':
      case 'pointerout':
        zr.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        jr.delete(t.pointerId)
    }
  }
  function Fr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }), t !== null && ((t = qr(t)), t !== null && $o(t)), e) : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e)
  }
  function nd(e, t, n, r, i) {
    switch (t) {
      case 'focusin':
        return (cn = Fr(cn, e, t, n, r, i)), !0
      case 'dragenter':
        return (dn = Fr(dn, e, t, n, r, i)), !0
      case 'mouseover':
        return (fn = Fr(fn, e, t, n, r, i)), !0
      case 'pointerover':
        var o = i.pointerId
        return zr.set(o, Fr(zr.get(o) || null, e, t, n, r, i)), !0
      case 'gotpointercapture':
        return (o = i.pointerId), jr.set(o, Fr(jr.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
  }
  function Qs(e) {
    var t = zn(e.target)
    if (t !== null) {
      var n = pe(t)
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = kt(n)), t !== null)) {
            ;(e.blockedOn = t),
              Ks(e.priority, function () {
                Bs(n)
              })
            return
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Ai(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (n === null) {
        n = e.nativeEvent
        var r = new n.constructor(n.type, n)
        ;(Ar = r), n.target.dispatchEvent(r), (Ar = null)
      } else return (t = qr(n)), t !== null && $o(t), (e.blockedOn = n), !1
      t.shift()
    }
    return !0
  }
  function Ys(e, t, n) {
    Ai(e) && n.delete(t)
  }
  function rd() {
    ;(Wo = !1), cn !== null && Ai(cn) && (cn = null), dn !== null && Ai(dn) && (dn = null), fn !== null && Ai(fn) && (fn = null), zr.forEach(Ys), jr.forEach(Ys)
  }
  function Hr(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), Wo || ((Wo = !0), d.unstable_scheduleCallback(d.unstable_NormalPriority, rd)))
  }
  function Ur(e) {
    function t(i) {
      return Hr(i, e)
    }
    if (0 < Li.length) {
      Hr(Li[0], e)
      for (var n = 1; n < Li.length; n++) {
        var r = Li[n]
        r.blockedOn === e && (r.blockedOn = null)
      }
    }
    for (cn !== null && Hr(cn, e), dn !== null && Hr(dn, e), fn !== null && Hr(fn, e), zr.forEach(t), jr.forEach(t), n = 0; n < pn.length; n++) (r = pn[n]), r.blockedOn === e && (r.blockedOn = null)
    for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); ) Qs(n), n.blockedOn === null && pn.shift()
  }
  var tr = me.ReactCurrentBatchConfig,
    Ii = !0
  function id(e, t, n, r) {
    var i = Te,
      o = tr.transition
    tr.transition = null
    try {
      ;(Te = 1), Bo(e, t, n, r)
    } finally {
      ;(Te = i), (tr.transition = o)
    }
  }
  function od(e, t, n, r) {
    var i = Te,
      o = tr.transition
    tr.transition = null
    try {
      ;(Te = 4), Bo(e, t, n, r)
    } finally {
      ;(Te = i), (tr.transition = o)
    }
  }
  function Bo(e, t, n, r) {
    if (Ii) {
      var i = Vo(e, t, n, r)
      if (i === null) ua(e, t, r, Oi, n), Js(e, r)
      else if (nd(i, e, t, n, r)) r.stopPropagation()
      else if ((Js(e, r), t & 4 && -1 < td.indexOf(e))) {
        for (; i !== null; ) {
          var o = qr(i)
          if ((o !== null && Ws(o), (o = Vo(e, t, n, r)), o === null && ua(e, t, r, Oi, n), o === i)) break
          i = o
        }
        i !== null && r.stopPropagation()
      } else ua(e, t, r, null, n)
    }
  }
  var Oi = null
  function Vo(e, t, n, r) {
    if (((Oi = null), (e = St(r)), (e = zn(e)), e !== null))
      if (((t = pe(e)), t === null)) e = null
      else if (((n = t.tag), n === 13)) {
        if (((e = kt(t)), e !== null)) return e
        e = null
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null
        e = null
      } else t !== e && (e = null)
    return (Oi = e), null
  }
  function Xs(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4
      case 'message':
        switch (Vc()) {
          case Ho:
            return 1
          case Us:
            return 4
          case Ei:
          case Kc:
            return 16
          case Gs:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var hn = null,
    Ko = null,
    Ni = null
  function qs() {
    if (Ni) return Ni
    var e,
      t = Ko,
      n = t.length,
      r,
      i = 'value' in hn ? hn.value : hn.textContent,
      o = i.length
    for (e = 0; e < n && t[e] === i[e]; e++);
    var c = n - e
    for (r = 1; r <= c && t[n - r] === i[o - r]; r++);
    return (Ni = i.slice(e, 1 < r ? 1 - r : void 0))
  }
  function Di(e) {
    var t = e.keyCode
    return 'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
  }
  function Mi() {
    return !0
  }
  function Zs() {
    return !1
  }
  function vt(e) {
    function t(n, r, i, o, c) {
      ;(this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = o), (this.target = c), (this.currentTarget = null)
      for (var g in e) e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(o) : o[g]))
      return (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Mi : Zs), (this.isPropagationStopped = Zs), this
    }
    return (
      Z(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var n = this.nativeEvent
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1), (this.isDefaultPrevented = Mi))
        },
        stopPropagation: function () {
          var n = this.nativeEvent
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0), (this.isPropagationStopped = Mi))
        },
        persist: function () {},
        isPersistent: Mi,
      }),
      t
    )
  }
  var nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Jo = vt(nr),
    Gr = Z({}, nr, { view: 0, detail: 0 }),
    ad = vt(Gr),
    Qo,
    Yo,
    br,
    zi = Z({}, Gr, {
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
      getModifierState: qo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e ? e.movementX : (e !== br && (br && e.type === 'mousemove' ? ((Qo = e.screenX - br.screenX), (Yo = e.screenY - br.screenY)) : (Yo = Qo = 0), (br = e)), Qo)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Yo
      },
    }),
    el = vt(zi),
    sd = Z({}, zi, { dataTransfer: 0 }),
    ld = vt(sd),
    ud = Z({}, Gr, { relatedTarget: 0 }),
    Xo = vt(ud),
    cd = Z({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dd = vt(cd),
    fd = Z({}, nr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    pd = vt(fd),
    hd = Z({}, nr, { data: 0 }),
    tl = vt(hd),
    md = { Esc: 'Escape', Spacebar: ' ', Left: 'ArrowLeft', Up: 'ArrowUp', Right: 'ArrowRight', Down: 'ArrowDown', Del: 'Delete', Win: 'OS', Menu: 'ContextMenu', Apps: 'ContextMenu', Scroll: 'ScrollLock', MozPrintableKey: 'Unidentified' },
    gd = { 8: 'Backspace', 9: 'Tab', 12: 'Clear', 13: 'Enter', 16: 'Shift', 17: 'Control', 18: 'Alt', 19: 'Pause', 20: 'CapsLock', 27: 'Escape', 32: ' ', 33: 'PageUp', 34: 'PageDown', 35: 'End', 36: 'Home', 37: 'ArrowLeft', 38: 'ArrowUp', 39: 'ArrowRight', 40: 'ArrowDown', 45: 'Insert', 46: 'Delete', 112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12', 144: 'NumLock', 145: 'ScrollLock', 224: 'Meta' },
    vd = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
  function yd(e) {
    var t = this.nativeEvent
    return t.getModifierState ? t.getModifierState(e) : (e = vd[e]) ? !!t[e] : !1
  }
  function qo() {
    return yd
  }
  var _d = Z({}, Gr, {
      key: function (e) {
        if (e.key) {
          var t = md[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress' ? ((e = Di(e)), e === 13 ? 'Enter' : String.fromCharCode(e)) : e.type === 'keydown' || e.type === 'keyup' ? gd[e.keyCode] || 'Unidentified' : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qo,
      charCode: function (e) {
        return e.type === 'keypress' ? Di(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress' ? Di(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
    }),
    Cd = vt(_d),
    Sd = Z({}, zi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    nl = vt(Sd),
    kd = Z({}, Gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qo }),
    wd = vt(kd),
    Ed = Z({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Td = vt(Ed),
    Pd = Z({}, zi, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Rd = vt(Pd),
    xd = [9, 13, 27, 32],
    Zo = T && 'CompositionEvent' in window,
    $r = null
  T && 'documentMode' in document && ($r = document.documentMode)
  var Ld = T && 'TextEvent' in window && !$r,
    rl = T && (!Zo || ($r && 8 < $r && 11 >= $r)),
    il = ' ',
    ol = !1
  function al(e, t) {
    switch (e) {
      case 'keyup':
        return xd.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function sl(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
  }
  var rr = !1
  function Ad(e, t) {
    switch (e) {
      case 'compositionend':
        return sl(t)
      case 'keypress':
        return t.which !== 32 ? null : ((ol = !0), il)
      case 'textInput':
        return (e = t.data), e === il && ol ? null : e
      default:
        return null
    }
  }
  function Id(e, t) {
    if (rr) return e === 'compositionend' || (!Zo && al(e, t)) ? ((e = qs()), (Ni = Ko = hn = null), (rr = !1), e) : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return rl && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var Od = { color: !0, date: !0, datetime: !0, 'datetime-local': !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }
  function ll(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!Od[e.type] : t === 'textarea'
  }
  function ul(e, t, n, r) {
    Ir(r), (t = Gi(t, 'onChange')), 0 < t.length && ((n = new Jo('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
  }
  var Wr = null,
    Br = null
  function Nd(e) {
    Rl(e, 0)
  }
  function ji(e) {
    var t = lr(e)
    if (Tr(t)) return e
  }
  function Dd(e, t) {
    if (e === 'change') return t
  }
  var cl = !1
  if (T) {
    var ea
    if (T) {
      var ta = 'oninput' in document
      if (!ta) {
        var dl = document.createElement('div')
        dl.setAttribute('oninput', 'return;'), (ta = typeof dl.oninput == 'function')
      }
      ea = ta
    } else ea = !1
    cl = ea && (!document.documentMode || 9 < document.documentMode)
  }
  function fl() {
    Wr && (Wr.detachEvent('onpropertychange', pl), (Br = Wr = null))
  }
  function pl(e) {
    if (e.propertyName === 'value' && ji(Br)) {
      var t = []
      ul(t, Br, e, St(e)), s(Nd, t)
    }
  }
  function Md(e, t, n) {
    e === 'focusin' ? (fl(), (Wr = t), (Br = n), Wr.attachEvent('onpropertychange', pl)) : e === 'focusout' && fl()
  }
  function zd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ji(Br)
  }
  function jd(e, t) {
    if (e === 'click') return ji(t)
  }
  function Fd(e, t) {
    if (e === 'input' || e === 'change') return ji(t)
  }
  function Hd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var It = typeof Object.is == 'function' ? Object.is : Hd
  function Vr(e, t) {
    if (It(e, t)) return !0
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
    var n = Object.keys(e),
      r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++) {
      var i = n[r]
      if (!w.call(t, i) || !It(e[i], t[i])) return !1
    }
    return !0
  }
  function hl(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function ml(e, t) {
    var n = hl(e)
    e = 0
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
        e = r
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling
            break e
          }
          n = n.parentNode
        }
        n = void 0
      }
      n = hl(n)
    }
  }
  function gl(e, t) {
    return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gl(e, t.parentNode) : 'contains' in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1
  }
  function vl() {
    for (var e = window, t = In(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string'
      } catch {
        n = !1
      }
      if (n) e = t.contentWindow
      else break
      t = In(e.document)
    }
    return t
  }
  function na(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t && ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) || t === 'textarea' || e.contentEditable === 'true')
  }
  function Ud(e) {
    var t = vl(),
      n = e.focusedElem,
      r = e.selectionRange
    if (t !== n && n && n.ownerDocument && gl(n.ownerDocument.documentElement, n)) {
      if (r !== null && na(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
        else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
          e = e.getSelection()
          var i = n.textContent.length,
            o = Math.min(r.start, i)
          ;(r = r.end === void 0 ? o : Math.min(r.end, i)), !e.extend && o > r && ((i = r), (r = o), (o = i)), (i = ml(n, o))
          var c = ml(n, r)
          i && c && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && ((t = t.createRange()), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)))
        }
      }
      for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
    }
  }
  var Gd = T && 'documentMode' in document && 11 >= document.documentMode,
    ir = null,
    ra = null,
    Kr = null,
    ia = !1
  function yl(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    ia || ir == null || ir !== In(r) || ((r = ir), 'selectionStart' in r && na(r) ? (r = { start: r.selectionStart, end: r.selectionEnd }) : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })), (Kr && Vr(Kr, r)) || ((Kr = r), (r = Gi(ra, 'onSelect')), 0 < r.length && ((t = new Jo('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = ir))))
  }
  function Fi(e, t) {
    var n = {}
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n
  }
  var or = { animationend: Fi('Animation', 'AnimationEnd'), animationiteration: Fi('Animation', 'AnimationIteration'), animationstart: Fi('Animation', 'AnimationStart'), transitionend: Fi('Transition', 'TransitionEnd') },
    oa = {},
    _l = {}
  T && ((_l = document.createElement('div').style), 'AnimationEvent' in window || (delete or.animationend.animation, delete or.animationiteration.animation, delete or.animationstart.animation), 'TransitionEvent' in window || delete or.transitionend.transition)
  function Hi(e) {
    if (oa[e]) return oa[e]
    if (!or[e]) return e
    var t = or[e],
      n
    for (n in t) if (t.hasOwnProperty(n) && n in _l) return (oa[e] = t[n])
    return e
  }
  var Cl = Hi('animationend'),
    Sl = Hi('animationiteration'),
    kl = Hi('animationstart'),
    wl = Hi('transitionend'),
    El = new Map(),
    Tl = 'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(' ')
  function mn(e, t) {
    El.set(e, t), v(t, [e])
  }
  for (var aa = 0; aa < Tl.length; aa++) {
    var sa = Tl[aa],
      bd = sa.toLowerCase(),
      $d = sa[0].toUpperCase() + sa.slice(1)
    mn(bd, 'on' + $d)
  }
  mn(Cl, 'onAnimationEnd'), mn(Sl, 'onAnimationIteration'), mn(kl, 'onAnimationStart'), mn('dblclick', 'onDoubleClick'), mn('focusin', 'onFocus'), mn('focusout', 'onBlur'), mn(wl, 'onTransitionEnd'), C('onMouseEnter', ['mouseout', 'mouseover']), C('onMouseLeave', ['mouseout', 'mouseover']), C('onPointerEnter', ['pointerout', 'pointerover']), C('onPointerLeave', ['pointerout', 'pointerover']), v('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')), v('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')), v('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']), v('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')), v('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')), v('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
  var Jr = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(' '),
    Wd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Jr))
  function Pl(e, t, n) {
    var r = e.type || 'unknown-event'
    ;(e.currentTarget = n), ne(r, t, void 0, e), (e.currentTarget = null)
  }
  function Rl(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event
      r = r.listeners
      e: {
        var o = void 0
        if (t)
          for (var c = r.length - 1; 0 <= c; c--) {
            var g = r[c],
              y = g.instance,
              A = g.currentTarget
            if (((g = g.listener), y !== o && i.isPropagationStopped())) break e
            Pl(i, g, A), (o = y)
          }
        else
          for (c = 0; c < r.length; c++) {
            if (((g = r[c]), (y = g.instance), (A = g.currentTarget), (g = g.listener), y !== o && i.isPropagationStopped())) break e
            Pl(i, g, A), (o = y)
          }
      }
    }
    if (D) throw ((e = I), (D = !1), (I = null), e)
  }
  function Oe(e, t) {
    var n = t[ma]
    n === void 0 && (n = t[ma] = new Set())
    var r = e + '__bubble'
    n.has(r) || (xl(t, e, 2, !1), n.add(r))
  }
  function la(e, t, n) {
    var r = 0
    t && (r |= 4), xl(n, e, r, t)
  }
  var Ui = '_reactListening' + Math.random().toString(36).slice(2)
  function Qr(e) {
    if (!e[Ui]) {
      ;(e[Ui] = !0),
        u.forEach(function (n) {
          n !== 'selectionchange' && (Wd.has(n) || la(n, !1, e), la(n, !0, e))
        })
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[Ui] || ((t[Ui] = !0), la('selectionchange', !1, t))
    }
  }
  function xl(e, t, n, r) {
    switch (Xs(t)) {
      case 1:
        var i = id
        break
      case 4:
        i = od
        break
      default:
        i = Bo
    }
    ;(n = i.bind(null, t, n, e)), (i = void 0), !p || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0), r ? (i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0)) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1)
  }
  function ua(e, t, n, r, i) {
    var o = r
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return
        var c = r.tag
        if (c === 3 || c === 4) {
          var g = r.stateNode.containerInfo
          if (g === i || (g.nodeType === 8 && g.parentNode === i)) break
          if (c === 4)
            for (c = r.return; c !== null; ) {
              var y = c.tag
              if ((y === 3 || y === 4) && ((y = c.stateNode.containerInfo), y === i || (y.nodeType === 8 && y.parentNode === i))) return
              c = c.return
            }
          for (; g !== null; ) {
            if (((c = zn(g)), c === null)) return
            if (((y = c.tag), y === 5 || y === 6)) {
              r = o = c
              continue e
            }
            g = g.parentNode
          }
        }
        r = r.return
      }
    s(function () {
      var A = o,
        F = St(n),
        H = []
      e: {
        var z = El.get(e)
        if (z !== void 0) {
          var X = Jo,
            te = e
          switch (e) {
            case 'keypress':
              if (Di(n) === 0) break e
            case 'keydown':
            case 'keyup':
              X = Cd
              break
            case 'focusin':
              ;(te = 'focus'), (X = Xo)
              break
            case 'focusout':
              ;(te = 'blur'), (X = Xo)
              break
            case 'beforeblur':
            case 'afterblur':
              X = Xo
              break
            case 'click':
              if (n.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              X = el
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              X = ld
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              X = wd
              break
            case Cl:
            case Sl:
            case kl:
              X = dd
              break
            case wl:
              X = Td
              break
            case 'scroll':
              X = ad
              break
            case 'wheel':
              X = Rd
              break
            case 'copy':
            case 'cut':
            case 'paste':
              X = pd
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              X = nl
          }
          var re = (t & 4) !== 0,
            be = !re && e === 'scroll',
            x = re ? (z !== null ? z + 'Capture' : null) : z
          re = []
          for (var S = A, L; S !== null; ) {
            L = S
            var W = L.stateNode
            if ((L.tag === 5 && W !== null && ((L = W), x !== null && ((W = f(S, x)), W != null && re.push(Yr(S, W, L)))), be)) break
            S = S.return
          }
          0 < re.length && ((z = new X(z, te, null, n, F)), H.push({ event: z, listeners: re }))
        }
      }
      if (!(t & 7)) {
        e: {
          if (((z = e === 'mouseover' || e === 'pointerover'), (X = e === 'mouseout' || e === 'pointerout'), z && n !== Ar && (te = n.relatedTarget || n.fromElement) && (zn(te) || te[Vt]))) break e
          if ((X || z) && ((z = F.window === F ? F : (z = F.ownerDocument) ? z.defaultView || z.parentWindow : window), X ? ((te = n.relatedTarget || n.toElement), (X = A), (te = te ? zn(te) : null), te !== null && ((be = pe(te)), te !== be || (te.tag !== 5 && te.tag !== 6)) && (te = null)) : ((X = null), (te = A)), X !== te)) {
            if (((re = el), (W = 'onMouseLeave'), (x = 'onMouseEnter'), (S = 'mouse'), (e === 'pointerout' || e === 'pointerover') && ((re = nl), (W = 'onPointerLeave'), (x = 'onPointerEnter'), (S = 'pointer')), (be = X == null ? z : lr(X)), (L = te == null ? z : lr(te)), (z = new re(W, S + 'leave', X, n, F)), (z.target = be), (z.relatedTarget = L), (W = null), zn(F) === A && ((re = new re(x, S + 'enter', te, n, F)), (re.target = L), (re.relatedTarget = be), (W = re)), (be = W), X && te))
              t: {
                for (re = X, x = te, S = 0, L = re; L; L = ar(L)) S++
                for (L = 0, W = x; W; W = ar(W)) L++
                for (; 0 < S - L; ) (re = ar(re)), S--
                for (; 0 < L - S; ) (x = ar(x)), L--
                for (; S--; ) {
                  if (re === x || (x !== null && re === x.alternate)) break t
                  ;(re = ar(re)), (x = ar(x))
                }
                re = null
              }
            else re = null
            X !== null && Ll(H, z, X, re, !1), te !== null && be !== null && Ll(H, be, te, re, !0)
          }
        }
        e: {
          if (((z = A ? lr(A) : window), (X = z.nodeName && z.nodeName.toLowerCase()), X === 'select' || (X === 'input' && z.type === 'file'))) var ie = Dd
          else if (ll(z))
            if (cl) ie = Fd
            else {
              ie = zd
              var se = Md
            }
          else (X = z.nodeName) && X.toLowerCase() === 'input' && (z.type === 'checkbox' || z.type === 'radio') && (ie = jd)
          if (ie && (ie = ie(e, A))) {
            ul(H, ie, n, F)
            break e
          }
          se && se(e, z, A), e === 'focusout' && (se = z._wrapperState) && se.controlled && z.type === 'number' && Dn(z, 'number', z.value)
        }
        switch (((se = A ? lr(A) : window), e)) {
          case 'focusin':
            ;(ll(se) || se.contentEditable === 'true') && ((ir = se), (ra = A), (Kr = null))
            break
          case 'focusout':
            Kr = ra = ir = null
            break
          case 'mousedown':
            ia = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(ia = !1), yl(H, n, F)
            break
          case 'selectionchange':
            if (Gd) break
          case 'keydown':
          case 'keyup':
            yl(H, n, F)
        }
        var le
        if (Zo)
          e: {
            switch (e) {
              case 'compositionstart':
                var ue = 'onCompositionStart'
                break e
              case 'compositionend':
                ue = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                ue = 'onCompositionUpdate'
                break e
            }
            ue = void 0
          }
        else rr ? al(e, n) && (ue = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (ue = 'onCompositionStart')
        ue && (rl && n.locale !== 'ko' && (rr || ue !== 'onCompositionStart' ? ue === 'onCompositionEnd' && rr && (le = qs()) : ((hn = F), (Ko = 'value' in hn ? hn.value : hn.textContent), (rr = !0))), (se = Gi(A, ue)), 0 < se.length && ((ue = new tl(ue, e, null, n, F)), H.push({ event: ue, listeners: se }), le ? (ue.data = le) : ((le = sl(n)), le !== null && (ue.data = le)))), (le = Ld ? Ad(e, n) : Id(e, n)) && ((A = Gi(A, 'onBeforeInput')), 0 < A.length && ((F = new tl('onBeforeInput', 'beforeinput', null, n, F)), H.push({ event: F, listeners: A }), (F.data = le)))
      }
      Rl(H, t)
    })
  }
  function Yr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
  }
  function Gi(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var i = e,
        o = i.stateNode
      i.tag === 5 && o !== null && ((i = o), (o = f(e, n)), o != null && r.unshift(Yr(e, o, i)), (o = f(e, t)), o != null && r.push(Yr(e, o, i))), (e = e.return)
    }
    return r
  }
  function ar(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
  }
  function Ll(e, t, n, r, i) {
    for (var o = t._reactName, c = []; n !== null && n !== r; ) {
      var g = n,
        y = g.alternate,
        A = g.stateNode
      if (y !== null && y === r) break
      g.tag === 5 && A !== null && ((g = A), i ? ((y = f(n, o)), y != null && c.unshift(Yr(n, y, g))) : i || ((y = f(n, o)), y != null && c.push(Yr(n, y, g)))), (n = n.return)
    }
    c.length !== 0 && e.push({ event: t, listeners: c })
  }
  var Bd = /\r\n?/g,
    Vd = /\u0000|\uFFFD/g
  function Al(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Bd,
        `
`,
      )
      .replace(Vd, '')
  }
  function bi(e, t, n) {
    if (((t = Al(t)), Al(e) !== t && n)) throw Error(a(425))
  }
  function $i() {}
  var ca = null,
    da = null
  function fa(e, t) {
    return e === 'textarea' || e === 'noscript' || typeof t.children == 'string' || typeof t.children == 'number' || (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  }
  var pa = typeof setTimeout == 'function' ? setTimeout : void 0,
    Kd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Il = typeof Promise == 'function' ? Promise : void 0,
    Jd =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Il < 'u'
          ? function (e) {
              return Il.resolve(null).then(e).catch(Qd)
            }
          : pa
  function Qd(e) {
    setTimeout(function () {
      throw e
    })
  }
  function ha(e, t) {
    var n = t,
      r = 0
    do {
      var i = n.nextSibling
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(i), Ur(t)
            return
          }
          r--
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++
      n = i
    } while (n)
    Ur(t)
  }
  function gn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
        if (t === '/$') return null
      }
    }
    return e
  }
  function Ol(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e
          t--
        } else n === '/$' && t++
      }
      e = e.previousSibling
    }
    return null
  }
  var sr = Math.random().toString(36).slice(2),
    Ft = '__reactFiber$' + sr,
    Xr = '__reactProps$' + sr,
    Vt = '__reactContainer$' + sr,
    ma = '__reactEvents$' + sr,
    Yd = '__reactListeners$' + sr,
    Xd = '__reactHandles$' + sr
  function zn(e) {
    var t = e[Ft]
    if (t) return t
    for (var n = e.parentNode; n; ) {
      if ((t = n[Vt] || n[Ft])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ol(e); e !== null; ) {
            if ((n = e[Ft])) return n
            e = Ol(e)
          }
        return t
      }
      ;(e = n), (n = e.parentNode)
    }
    return null
  }
  function qr(e) {
    return (e = e[Ft] || e[Vt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  }
  function lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(a(33))
  }
  function Wi(e) {
    return e[Xr] || null
  }
  var ga = [],
    ur = -1
  function vn(e) {
    return { current: e }
  }
  function Ne(e) {
    0 > ur || ((e.current = ga[ur]), (ga[ur] = null), ur--)
  }
  function xe(e, t) {
    ur++, (ga[ur] = e.current), (e.current = t)
  }
  var yn = {},
    et = vn(yn),
    ut = vn(!1),
    jn = yn
  function cr(e, t) {
    var n = e.type.contextTypes
    if (!n) return yn
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext
    var i = {},
      o
    for (o in n) i[o] = t[o]
    return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i
  }
  function ct(e) {
    return (e = e.childContextTypes), e != null
  }
  function Bi() {
    Ne(ut), Ne(et)
  }
  function Nl(e, t, n) {
    if (et.current !== yn) throw Error(a(168))
    xe(et, t), xe(ut, n)
  }
  function Dl(e, t, n) {
    var r = e.stateNode
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
    r = r.getChildContext()
    for (var i in r) if (!(i in t)) throw Error(a(108, Ee(e) || 'Unknown', i))
    return Z({}, n, r)
  }
  function Vi(e) {
    return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn), (jn = et.current), xe(et, e), xe(ut, ut.current), !0
  }
  function Ml(e, t, n) {
    var r = e.stateNode
    if (!r) throw Error(a(169))
    n ? ((e = Dl(e, t, jn)), (r.__reactInternalMemoizedMergedChildContext = e), Ne(ut), Ne(et), xe(et, e)) : Ne(ut), xe(ut, n)
  }
  var Kt = null,
    Ki = !1,
    va = !1
  function zl(e) {
    Kt === null ? (Kt = [e]) : Kt.push(e)
  }
  function qd(e) {
    ;(Ki = !0), zl(e)
  }
  function _n() {
    if (!va && Kt !== null) {
      va = !0
      var e = 0,
        t = Te
      try {
        var n = Kt
        for (Te = 1; e < n.length; e++) {
          var r = n[e]
          do r = r(!0)
          while (r !== null)
        }
        ;(Kt = null), (Ki = !1)
      } catch (i) {
        throw (Kt !== null && (Kt = Kt.slice(e + 1)), Fs(Ho, _n), i)
      } finally {
        ;(Te = t), (va = !1)
      }
    }
    return null
  }
  var dr = [],
    fr = 0,
    Ji = null,
    Qi = 0,
    wt = [],
    Et = 0,
    Fn = null,
    Jt = 1,
    Qt = ''
  function Hn(e, t) {
    ;(dr[fr++] = Qi), (dr[fr++] = Ji), (Ji = e), (Qi = t)
  }
  function jl(e, t, n) {
    ;(wt[Et++] = Jt), (wt[Et++] = Qt), (wt[Et++] = Fn), (Fn = e)
    var r = Jt
    e = Qt
    var i = 32 - At(r) - 1
    ;(r &= ~(1 << i)), (n += 1)
    var o = 32 - At(t) + i
    if (30 < o) {
      var c = i - (i % 5)
      ;(o = (r & ((1 << c) - 1)).toString(32)), (r >>= c), (i -= c), (Jt = (1 << (32 - At(t) + i)) | (n << i) | r), (Qt = o + e)
    } else (Jt = (1 << o) | (n << i) | r), (Qt = e)
  }
  function ya(e) {
    e.return !== null && (Hn(e, 1), jl(e, 1, 0))
  }
  function _a(e) {
    for (; e === Ji; ) (Ji = dr[--fr]), (dr[fr] = null), (Qi = dr[--fr]), (dr[fr] = null)
    for (; e === Fn; ) (Fn = wt[--Et]), (wt[Et] = null), (Qt = wt[--Et]), (wt[Et] = null), (Jt = wt[--Et]), (wt[Et] = null)
  }
  var yt = null,
    _t = null,
    De = !1,
    Ot = null
  function Fl(e, t) {
    var n = xt(5, null, null, 0)
    ;(n.elementType = 'DELETED'), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
  }
  function Hl(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type
        return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (yt = e), (_t = gn(t.firstChild)), !0) : !1
      case 6:
        return (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (yt = e), (_t = null), !0) : !1
      case 13:
        return (t = t.nodeType !== 8 ? null : t), t !== null ? ((n = Fn !== null ? { id: Jt, overflow: Qt } : null), (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }), (n = xt(18, null, null, 0)), (n.stateNode = t), (n.return = e), (e.child = n), (yt = e), (_t = null), !0) : !1
      default:
        return !1
    }
  }
  function Ca(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }
  function Sa(e) {
    if (De) {
      var t = _t
      if (t) {
        var n = t
        if (!Hl(e, t)) {
          if (Ca(e)) throw Error(a(418))
          t = gn(n.nextSibling)
          var r = yt
          t && Hl(e, t) ? Fl(r, n) : ((e.flags = (e.flags & -4097) | 2), (De = !1), (yt = e))
        }
      } else {
        if (Ca(e)) throw Error(a(418))
        ;(e.flags = (e.flags & -4097) | 2), (De = !1), (yt = e)
      }
    }
  }
  function Ul(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
    yt = e
  }
  function Yi(e) {
    if (e !== yt) return !1
    if (!De) return Ul(e), (De = !0), !1
    var t
    if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== 'head' && t !== 'body' && !fa(e.type, e.memoizedProps))), t && (t = _t))) {
      if (Ca(e)) throw (Gl(), Error(a(418)))
      for (; t; ) Fl(e, t), (t = gn(t.nextSibling))
    }
    if ((Ul(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(a(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data
            if (n === '/$') {
              if (t === 0) {
                _t = gn(e.nextSibling)
                break e
              }
              t--
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++
          }
          e = e.nextSibling
        }
        _t = null
      }
    } else _t = yt ? gn(e.stateNode.nextSibling) : null
    return !0
  }
  function Gl() {
    for (var e = _t; e; ) e = gn(e.nextSibling)
  }
  function pr() {
    ;(_t = yt = null), (De = !1)
  }
  function ka(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e)
  }
  var Zd = me.ReactCurrentBatchConfig
  function Zr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309))
          var r = n.stateNode
        }
        if (!r) throw Error(a(147, e))
        var i = r,
          o = '' + e
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
          ? t.ref
          : ((t = function (c) {
              var g = i.refs
              c === null ? delete g[o] : (g[o] = c)
            }),
            (t._stringRef = o),
            t)
      }
      if (typeof e != 'string') throw Error(a(284))
      if (!n._owner) throw Error(a(290, e))
    }
    return e
  }
  function Xi(e, t) {
    throw ((e = Object.prototype.toString.call(t)), Error(a(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  }
  function bl(e) {
    var t = e._init
    return t(e._payload)
  }
  function $l(e) {
    function t(x, S) {
      if (e) {
        var L = x.deletions
        L === null ? ((x.deletions = [S]), (x.flags |= 16)) : L.push(S)
      }
    }
    function n(x, S) {
      if (!e) return null
      for (; S !== null; ) t(x, S), (S = S.sibling)
      return null
    }
    function r(x, S) {
      for (x = new Map(); S !== null; ) S.key !== null ? x.set(S.key, S) : x.set(S.index, S), (S = S.sibling)
      return x
    }
    function i(x, S) {
      return (x = Rn(x, S)), (x.index = 0), (x.sibling = null), x
    }
    function o(x, S, L) {
      return (x.index = L), e ? ((L = x.alternate), L !== null ? ((L = L.index), L < S ? ((x.flags |= 2), S) : L) : ((x.flags |= 2), S)) : ((x.flags |= 1048576), S)
    }
    function c(x) {
      return e && x.alternate === null && (x.flags |= 2), x
    }
    function g(x, S, L, W) {
      return S === null || S.tag !== 6 ? ((S = ps(L, x.mode, W)), (S.return = x), S) : ((S = i(S, L)), (S.return = x), S)
    }
    function y(x, S, L, W) {
      var ie = L.type
      return ie === Re ? F(x, S, L.props.children, W, L.key) : S !== null && (S.elementType === ie || (typeof ie == 'object' && ie !== null && ie.$$typeof === Ye && bl(ie) === S.type)) ? ((W = i(S, L.props)), (W.ref = Zr(x, S, L)), (W.return = x), W) : ((W = ko(L.type, L.key, L.props, null, x.mode, W)), (W.ref = Zr(x, S, L)), (W.return = x), W)
    }
    function A(x, S, L, W) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== L.containerInfo || S.stateNode.implementation !== L.implementation ? ((S = hs(L, x.mode, W)), (S.return = x), S) : ((S = i(S, L.children || [])), (S.return = x), S)
    }
    function F(x, S, L, W, ie) {
      return S === null || S.tag !== 7 ? ((S = Kn(L, x.mode, W, ie)), (S.return = x), S) : ((S = i(S, L)), (S.return = x), S)
    }
    function H(x, S, L) {
      if ((typeof S == 'string' && S !== '') || typeof S == 'number') return (S = ps('' + S, x.mode, L)), (S.return = x), S
      if (typeof S == 'object' && S !== null) {
        switch (S.$$typeof) {
          case we:
            return (L = ko(S.type, S.key, S.props, null, x.mode, L)), (L.ref = Zr(x, null, S)), (L.return = x), L
          case Le:
            return (S = hs(S, x.mode, L)), (S.return = x), S
          case Ye:
            var W = S._init
            return H(x, W(S._payload), L)
        }
        if (Bt(S) || ae(S)) return (S = Kn(S, x.mode, L, null)), (S.return = x), S
        Xi(x, S)
      }
      return null
    }
    function z(x, S, L, W) {
      var ie = S !== null ? S.key : null
      if ((typeof L == 'string' && L !== '') || typeof L == 'number') return ie !== null ? null : g(x, S, '' + L, W)
      if (typeof L == 'object' && L !== null) {
        switch (L.$$typeof) {
          case we:
            return L.key === ie ? y(x, S, L, W) : null
          case Le:
            return L.key === ie ? A(x, S, L, W) : null
          case Ye:
            return (ie = L._init), z(x, S, ie(L._payload), W)
        }
        if (Bt(L) || ae(L)) return ie !== null ? null : F(x, S, L, W, null)
        Xi(x, L)
      }
      return null
    }
    function X(x, S, L, W, ie) {
      if ((typeof W == 'string' && W !== '') || typeof W == 'number') return (x = x.get(L) || null), g(S, x, '' + W, ie)
      if (typeof W == 'object' && W !== null) {
        switch (W.$$typeof) {
          case we:
            return (x = x.get(W.key === null ? L : W.key) || null), y(S, x, W, ie)
          case Le:
            return (x = x.get(W.key === null ? L : W.key) || null), A(S, x, W, ie)
          case Ye:
            var se = W._init
            return X(x, S, L, se(W._payload), ie)
        }
        if (Bt(W) || ae(W)) return (x = x.get(L) || null), F(S, x, W, ie, null)
        Xi(S, W)
      }
      return null
    }
    function te(x, S, L, W) {
      for (var ie = null, se = null, le = S, ue = (S = 0), Qe = null; le !== null && ue < L.length; ue++) {
        le.index > ue ? ((Qe = le), (le = null)) : (Qe = le.sibling)
        var Se = z(x, le, L[ue], W)
        if (Se === null) {
          le === null && (le = Qe)
          break
        }
        e && le && Se.alternate === null && t(x, le), (S = o(Se, S, ue)), se === null ? (ie = Se) : (se.sibling = Se), (se = Se), (le = Qe)
      }
      if (ue === L.length) return n(x, le), De && Hn(x, ue), ie
      if (le === null) {
        for (; ue < L.length; ue++) (le = H(x, L[ue], W)), le !== null && ((S = o(le, S, ue)), se === null ? (ie = le) : (se.sibling = le), (se = le))
        return De && Hn(x, ue), ie
      }
      for (le = r(x, le); ue < L.length; ue++) (Qe = X(le, x, ue, L[ue], W)), Qe !== null && (e && Qe.alternate !== null && le.delete(Qe.key === null ? ue : Qe.key), (S = o(Qe, S, ue)), se === null ? (ie = Qe) : (se.sibling = Qe), (se = Qe))
      return (
        e &&
          le.forEach(function (xn) {
            return t(x, xn)
          }),
        De && Hn(x, ue),
        ie
      )
    }
    function re(x, S, L, W) {
      var ie = ae(L)
      if (typeof ie != 'function') throw Error(a(150))
      if (((L = ie.call(L)), L == null)) throw Error(a(151))
      for (var se = (ie = null), le = S, ue = (S = 0), Qe = null, Se = L.next(); le !== null && !Se.done; ue++, Se = L.next()) {
        le.index > ue ? ((Qe = le), (le = null)) : (Qe = le.sibling)
        var xn = z(x, le, Se.value, W)
        if (xn === null) {
          le === null && (le = Qe)
          break
        }
        e && le && xn.alternate === null && t(x, le), (S = o(xn, S, ue)), se === null ? (ie = xn) : (se.sibling = xn), (se = xn), (le = Qe)
      }
      if (Se.done) return n(x, le), De && Hn(x, ue), ie
      if (le === null) {
        for (; !Se.done; ue++, Se = L.next()) (Se = H(x, Se.value, W)), Se !== null && ((S = o(Se, S, ue)), se === null ? (ie = Se) : (se.sibling = Se), (se = Se))
        return De && Hn(x, ue), ie
      }
      for (le = r(x, le); !Se.done; ue++, Se = L.next()) (Se = X(le, x, ue, Se.value, W)), Se !== null && (e && Se.alternate !== null && le.delete(Se.key === null ? ue : Se.key), (S = o(Se, S, ue)), se === null ? (ie = Se) : (se.sibling = Se), (se = Se))
      return (
        e &&
          le.forEach(function (Of) {
            return t(x, Of)
          }),
        De && Hn(x, ue),
        ie
      )
    }
    function be(x, S, L, W) {
      if ((typeof L == 'object' && L !== null && L.type === Re && L.key === null && (L = L.props.children), typeof L == 'object' && L !== null)) {
        switch (L.$$typeof) {
          case we:
            e: {
              for (var ie = L.key, se = S; se !== null; ) {
                if (se.key === ie) {
                  if (((ie = L.type), ie === Re)) {
                    if (se.tag === 7) {
                      n(x, se.sibling), (S = i(se, L.props.children)), (S.return = x), (x = S)
                      break e
                    }
                  } else if (se.elementType === ie || (typeof ie == 'object' && ie !== null && ie.$$typeof === Ye && bl(ie) === se.type)) {
                    n(x, se.sibling), (S = i(se, L.props)), (S.ref = Zr(x, se, L)), (S.return = x), (x = S)
                    break e
                  }
                  n(x, se)
                  break
                } else t(x, se)
                se = se.sibling
              }
              L.type === Re ? ((S = Kn(L.props.children, x.mode, W, L.key)), (S.return = x), (x = S)) : ((W = ko(L.type, L.key, L.props, null, x.mode, W)), (W.ref = Zr(x, S, L)), (W.return = x), (x = W))
            }
            return c(x)
          case Le:
            e: {
              for (se = L.key; S !== null; ) {
                if (S.key === se)
                  if (S.tag === 4 && S.stateNode.containerInfo === L.containerInfo && S.stateNode.implementation === L.implementation) {
                    n(x, S.sibling), (S = i(S, L.children || [])), (S.return = x), (x = S)
                    break e
                  } else {
                    n(x, S)
                    break
                  }
                else t(x, S)
                S = S.sibling
              }
              ;(S = hs(L, x.mode, W)), (S.return = x), (x = S)
            }
            return c(x)
          case Ye:
            return (se = L._init), be(x, S, se(L._payload), W)
        }
        if (Bt(L)) return te(x, S, L, W)
        if (ae(L)) return re(x, S, L, W)
        Xi(x, L)
      }
      return (typeof L == 'string' && L !== '') || typeof L == 'number' ? ((L = '' + L), S !== null && S.tag === 6 ? (n(x, S.sibling), (S = i(S, L)), (S.return = x), (x = S)) : (n(x, S), (S = ps(L, x.mode, W)), (S.return = x), (x = S)), c(x)) : n(x, S)
    }
    return be
  }
  var hr = $l(!0),
    Wl = $l(!1),
    qi = vn(null),
    Zi = null,
    mr = null,
    wa = null
  function Ea() {
    wa = mr = Zi = null
  }
  function Ta(e) {
    var t = qi.current
    Ne(qi), (e._currentValue = t)
  }
  function Pa(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate
      if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break
      e = e.return
    }
  }
  function gr(e, t) {
    ;(Zi = e), (wa = mr = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (dt = !0), (e.firstContext = null))
  }
  function Tt(e) {
    var t = e._currentValue
    if (wa !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), mr === null)) {
        if (Zi === null) throw Error(a(308))
        ;(mr = e), (Zi.dependencies = { lanes: 0, firstContext: e })
      } else mr = mr.next = e
    return t
  }
  var Un = null
  function Ra(e) {
    Un === null ? (Un = [e]) : Un.push(e)
  }
  function Bl(e, t, n, r) {
    var i = t.interleaved
    return i === null ? ((n.next = n), Ra(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Yt(e, r)
  }
  function Yt(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return)
    return n.tag === 3 ? n.stateNode : null
  }
  var Cn = !1
  function xa(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }
  }
  function Vl(e, t) {
    ;(e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects })
  }
  function Xt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
  }
  function Sn(e, t, n) {
    var r = e.updateQueue
    if (r === null) return null
    if (((r = r.shared), _e & 2)) {
      var i = r.pending
      return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Yt(e, n)
    }
    return (i = r.interleaved), i === null ? ((t.next = t), Ra(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), Yt(e, n)
  }
  function eo(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes
      ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), bo(e, n)
    }
  }
  function Kl(e, t) {
    var n = e.updateQueue,
      r = e.alternate
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        o = null
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var c = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null }
          o === null ? (i = o = c) : (o = o.next = c), (n = n.next)
        } while (n !== null)
        o === null ? (i = o = t) : (o = o.next = t)
      } else i = o = t
      ;(n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }), (e.updateQueue = n)
      return
    }
    ;(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t)
  }
  function to(e, t, n, r) {
    var i = e.updateQueue
    Cn = !1
    var o = i.firstBaseUpdate,
      c = i.lastBaseUpdate,
      g = i.shared.pending
    if (g !== null) {
      i.shared.pending = null
      var y = g,
        A = y.next
      ;(y.next = null), c === null ? (o = A) : (c.next = A), (c = y)
      var F = e.alternate
      F !== null && ((F = F.updateQueue), (g = F.lastBaseUpdate), g !== c && (g === null ? (F.firstBaseUpdate = A) : (g.next = A), (F.lastBaseUpdate = y)))
    }
    if (o !== null) {
      var H = i.baseState
      ;(c = 0), (F = A = y = null), (g = o)
      do {
        var z = g.lane,
          X = g.eventTime
        if ((r & z) === z) {
          F !== null && (F = F.next = { eventTime: X, lane: 0, tag: g.tag, payload: g.payload, callback: g.callback, next: null })
          e: {
            var te = e,
              re = g
            switch (((z = t), (X = n), re.tag)) {
              case 1:
                if (((te = re.payload), typeof te == 'function')) {
                  H = te.call(X, H, z)
                  break e
                }
                H = te
                break e
              case 3:
                te.flags = (te.flags & -65537) | 128
              case 0:
                if (((te = re.payload), (z = typeof te == 'function' ? te.call(X, H, z) : te), z == null)) break e
                H = Z({}, H, z)
                break e
              case 2:
                Cn = !0
            }
          }
          g.callback !== null && g.lane !== 0 && ((e.flags |= 64), (z = i.effects), z === null ? (i.effects = [g]) : z.push(g))
        } else (X = { eventTime: X, lane: z, tag: g.tag, payload: g.payload, callback: g.callback, next: null }), F === null ? ((A = F = X), (y = H)) : (F = F.next = X), (c |= z)
        if (((g = g.next), g === null)) {
          if (((g = i.shared.pending), g === null)) break
          ;(z = g), (g = z.next), (z.next = null), (i.lastBaseUpdate = z), (i.shared.pending = null)
        }
      } while (!0)
      if ((F === null && (y = H), (i.baseState = y), (i.firstBaseUpdate = A), (i.lastBaseUpdate = F), (t = i.shared.interleaved), t !== null)) {
        i = t
        do (c |= i.lane), (i = i.next)
        while (i !== t)
      } else o === null && (i.shared.lanes = 0)
      ;($n |= c), (e.lanes = c), (e.memoizedState = H)
    }
  }
  function Jl(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(a(191, i))
          i.call(r)
        }
      }
  }
  var ei = {},
    Ht = vn(ei),
    ti = vn(ei),
    ni = vn(ei)
  function Gn(e) {
    if (e === ei) throw Error(a(174))
    return e
  }
  function La(e, t) {
    switch ((xe(ni, t), xe(ti, e), xe(Ht, ei), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Yn(null, '')
        break
      default:
        ;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Yn(t, e))
    }
    Ne(Ht), xe(Ht, t)
  }
  function vr() {
    Ne(Ht), Ne(ti), Ne(ni)
  }
  function Ql(e) {
    Gn(ni.current)
    var t = Gn(Ht.current),
      n = Yn(t, e.type)
    t !== n && (xe(ti, e), xe(Ht, n))
  }
  function Aa(e) {
    ti.current === e && (Ne(Ht), Ne(ti))
  }
  var ze = vn(0)
  function no(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  var Ia = []
  function Oa() {
    for (var e = 0; e < Ia.length; e++) Ia[e]._workInProgressVersionPrimary = null
    Ia.length = 0
  }
  var ro = me.ReactCurrentDispatcher,
    Na = me.ReactCurrentBatchConfig,
    bn = 0,
    je = null,
    We = null,
    Ke = null,
    io = !1,
    ri = !1,
    ii = 0,
    ef = 0
  function tt() {
    throw Error(a(321))
  }
  function Da(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++) if (!It(e[n], t[n])) return !1
    return !0
  }
  function Ma(e, t, n, r, i, o) {
    if (((bn = o), (je = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (ro.current = e === null || e.memoizedState === null ? of : af), (e = n(r, i)), ri)) {
      o = 0
      do {
        if (((ri = !1), (ii = 0), 25 <= o)) throw Error(a(301))
        ;(o += 1), (Ke = We = null), (t.updateQueue = null), (ro.current = sf), (e = n(r, i))
      } while (ri)
    }
    if (((ro.current = so), (t = We !== null && We.next !== null), (bn = 0), (Ke = We = je = null), (io = !1), t)) throw Error(a(300))
    return e
  }
  function za() {
    var e = ii !== 0
    return (ii = 0), e
  }
  function Ut() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return Ke === null ? (je.memoizedState = Ke = e) : (Ke = Ke.next = e), Ke
  }
  function Pt() {
    if (We === null) {
      var e = je.alternate
      e = e !== null ? e.memoizedState : null
    } else e = We.next
    var t = Ke === null ? je.memoizedState : Ke.next
    if (t !== null) (Ke = t), (We = e)
    else {
      if (e === null) throw Error(a(310))
      ;(We = e), (e = { memoizedState: We.memoizedState, baseState: We.baseState, baseQueue: We.baseQueue, queue: We.queue, next: null }), Ke === null ? (je.memoizedState = Ke = e) : (Ke = Ke.next = e)
    }
    return Ke
  }
  function oi(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function ja(e) {
    var t = Pt(),
      n = t.queue
    if (n === null) throw Error(a(311))
    n.lastRenderedReducer = e
    var r = We,
      i = r.baseQueue,
      o = n.pending
    if (o !== null) {
      if (i !== null) {
        var c = i.next
        ;(i.next = o.next), (o.next = c)
      }
      ;(r.baseQueue = i = o), (n.pending = null)
    }
    if (i !== null) {
      ;(o = i.next), (r = r.baseState)
      var g = (c = null),
        y = null,
        A = o
      do {
        var F = A.lane
        if ((bn & F) === F) y !== null && (y = y.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), (r = A.hasEagerState ? A.eagerState : e(r, A.action))
        else {
          var H = { lane: F, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }
          y === null ? ((g = y = H), (c = r)) : (y = y.next = H), (je.lanes |= F), ($n |= F)
        }
        A = A.next
      } while (A !== null && A !== o)
      y === null ? (c = r) : (y.next = g), It(r, t.memoizedState) || (dt = !0), (t.memoizedState = r), (t.baseState = c), (t.baseQueue = y), (n.lastRenderedState = r)
    }
    if (((e = n.interleaved), e !== null)) {
      i = e
      do (o = i.lane), (je.lanes |= o), ($n |= o), (i = i.next)
      while (i !== e)
    } else i === null && (n.lanes = 0)
    return [t.memoizedState, n.dispatch]
  }
  function Fa(e) {
    var t = Pt(),
      n = t.queue
    if (n === null) throw Error(a(311))
    n.lastRenderedReducer = e
    var r = n.dispatch,
      i = n.pending,
      o = t.memoizedState
    if (i !== null) {
      n.pending = null
      var c = (i = i.next)
      do (o = e(o, c.action)), (c = c.next)
      while (c !== i)
      It(o, t.memoizedState) || (dt = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (n.lastRenderedState = o)
    }
    return [o, r]
  }
  function Yl() {}
  function Xl(e, t) {
    var n = je,
      r = Pt(),
      i = t(),
      o = !It(r.memoizedState, i)
    if ((o && ((r.memoizedState = i), (dt = !0)), (r = r.queue), Ha(eu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || (Ke !== null && Ke.memoizedState.tag & 1))) {
      if (((n.flags |= 2048), ai(9, Zl.bind(null, n, r, i, t), void 0, null), Je === null)) throw Error(a(349))
      bn & 30 || ql(n, t, i)
    }
    return i
  }
  function ql(e, t, n) {
    ;(e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = je.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (je.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
  }
  function Zl(e, t, n, r) {
    ;(t.value = n), (t.getSnapshot = r), tu(t) && nu(e)
  }
  function eu(e, t, n) {
    return n(function () {
      tu(t) && nu(e)
    })
  }
  function tu(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var n = t()
      return !It(e, n)
    } catch {
      return !0
    }
  }
  function nu(e) {
    var t = Yt(e, 1)
    t !== null && zt(t, e, 1, -1)
  }
  function ru(e) {
    var t = Ut()
    return typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: oi, lastRenderedState: e }), (t.queue = e), (e = e.dispatch = rf.bind(null, je, e)), [t.memoizedState, e]
  }
  function ai(e, t, n, r) {
    return (e = { tag: e, create: t, destroy: n, deps: r, next: null }), (t = je.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (je.updateQueue = t), (t.lastEffect = e.next = e)) : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))), e
  }
  function iu() {
    return Pt().memoizedState
  }
  function oo(e, t, n, r) {
    var i = Ut()
    ;(je.flags |= e), (i.memoizedState = ai(1 | t, n, void 0, r === void 0 ? null : r))
  }
  function ao(e, t, n, r) {
    var i = Pt()
    r = r === void 0 ? null : r
    var o = void 0
    if (We !== null) {
      var c = We.memoizedState
      if (((o = c.destroy), r !== null && Da(r, c.deps))) {
        i.memoizedState = ai(t, n, o, r)
        return
      }
    }
    ;(je.flags |= e), (i.memoizedState = ai(1 | t, n, o, r))
  }
  function ou(e, t) {
    return oo(8390656, 8, e, t)
  }
  function Ha(e, t) {
    return ao(2048, 8, e, t)
  }
  function au(e, t) {
    return ao(4, 2, e, t)
  }
  function su(e, t) {
    return ao(4, 4, e, t)
  }
  function lu(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null)
        }
      )
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function uu(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), ao(4, 4, lu.bind(null, t, e), n)
  }
  function Ua() {}
  function cu(e, t) {
    var n = Pt()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && Da(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
  }
  function du(e, t) {
    var n = Pt()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && Da(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
  }
  function fu(e, t, n) {
    return bn & 21 ? (It(n, t) || ((n = bs()), (je.lanes |= n), ($n |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (dt = !0)), (e.memoizedState = n))
  }
  function tf(e, t) {
    var n = Te
    ;(Te = n !== 0 && 4 > n ? n : 4), e(!0)
    var r = Na.transition
    Na.transition = {}
    try {
      e(!1), t()
    } finally {
      ;(Te = n), (Na.transition = r)
    }
  }
  function pu() {
    return Pt().memoizedState
  }
  function nf(e, t, n) {
    var r = Tn(e)
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), hu(e))) mu(t, n)
    else if (((n = Bl(e, t, n, r)), n !== null)) {
      var i = at()
      zt(n, e, r, i), gu(n, t, r)
    }
  }
  function rf(e, t, n) {
    var r = Tn(e),
      i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
    if (hu(e)) mu(t, i)
    else {
      var o = e.alternate
      if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
        try {
          var c = t.lastRenderedState,
            g = o(c, n)
          if (((i.hasEagerState = !0), (i.eagerState = g), It(g, c))) {
            var y = t.interleaved
            y === null ? ((i.next = i), Ra(t)) : ((i.next = y.next), (y.next = i)), (t.interleaved = i)
            return
          }
        } catch {
        } finally {
        }
      ;(n = Bl(e, t, i, r)), n !== null && ((i = at()), zt(n, e, r, i), gu(n, t, r))
    }
  }
  function hu(e) {
    var t = e.alternate
    return e === je || (t !== null && t === je)
  }
  function mu(e, t) {
    ri = io = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
  }
  function gu(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes
      ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), bo(e, n)
    }
  }
  var so = { readContext: Tt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 },
    of = {
      readContext: Tt,
      useCallback: function (e, t) {
        return (Ut().memoizedState = [e, t === void 0 ? null : t]), e
      },
      useContext: Tt,
      useEffect: ou,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), oo(4194308, 4, lu.bind(null, t, e), n)
      },
      useLayoutEffect: function (e, t) {
        return oo(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        return oo(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var n = Ut()
        return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      },
      useReducer: function (e, t, n) {
        var r = Ut()
        return (t = n !== void 0 ? n(t) : t), (r.memoizedState = r.baseState = t), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }), (r.queue = e), (e = e.dispatch = nf.bind(null, je, e)), [r.memoizedState, e]
      },
      useRef: function (e) {
        var t = Ut()
        return (e = { current: e }), (t.memoizedState = e)
      },
      useState: ru,
      useDebugValue: Ua,
      useDeferredValue: function (e) {
        return (Ut().memoizedState = e)
      },
      useTransition: function () {
        var e = ru(!1),
          t = e[0]
        return (e = tf.bind(null, e[1])), (Ut().memoizedState = e), [t, e]
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = je,
          i = Ut()
        if (De) {
          if (n === void 0) throw Error(a(407))
          n = n()
        } else {
          if (((n = t()), Je === null)) throw Error(a(349))
          bn & 30 || ql(r, t, n)
        }
        i.memoizedState = n
        var o = { value: n, getSnapshot: t }
        return (i.queue = o), ou(eu.bind(null, r, o, e), [e]), (r.flags |= 2048), ai(9, Zl.bind(null, r, o, n, t), void 0, null), n
      },
      useId: function () {
        var e = Ut(),
          t = Je.identifierPrefix
        if (De) {
          var n = Qt,
            r = Jt
          ;(n = (r & ~(1 << (32 - At(r) - 1))).toString(32) + n), (t = ':' + t + 'R' + n), (n = ii++), 0 < n && (t += 'H' + n.toString(32)), (t += ':')
        } else (n = ef++), (t = ':' + t + 'r' + n.toString(32) + ':')
        return (e.memoizedState = t)
      },
      unstable_isNewReconciler: !1,
    },
    af = {
      readContext: Tt,
      useCallback: cu,
      useContext: Tt,
      useEffect: Ha,
      useImperativeHandle: uu,
      useInsertionEffect: au,
      useLayoutEffect: su,
      useMemo: du,
      useReducer: ja,
      useRef: iu,
      useState: function () {
        return ja(oi)
      },
      useDebugValue: Ua,
      useDeferredValue: function (e) {
        var t = Pt()
        return fu(t, We.memoizedState, e)
      },
      useTransition: function () {
        var e = ja(oi)[0],
          t = Pt().memoizedState
        return [e, t]
      },
      useMutableSource: Yl,
      useSyncExternalStore: Xl,
      useId: pu,
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: Tt,
      useCallback: cu,
      useContext: Tt,
      useEffect: Ha,
      useImperativeHandle: uu,
      useInsertionEffect: au,
      useLayoutEffect: su,
      useMemo: du,
      useReducer: Fa,
      useRef: iu,
      useState: function () {
        return Fa(oi)
      },
      useDebugValue: Ua,
      useDeferredValue: function (e) {
        var t = Pt()
        return We === null ? (t.memoizedState = e) : fu(t, We.memoizedState, e)
      },
      useTransition: function () {
        var e = Fa(oi)[0],
          t = Pt().memoizedState
        return [e, t]
      },
      useMutableSource: Yl,
      useSyncExternalStore: Xl,
      useId: pu,
      unstable_isNewReconciler: !1,
    }
  function Nt(e, t) {
    if (e && e.defaultProps) {
      ;(t = Z({}, t)), (e = e.defaultProps)
      for (var n in e) t[n] === void 0 && (t[n] = e[n])
      return t
    }
    return t
  }
  function Ga(e, t, n, r) {
    ;(t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : Z({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n)
  }
  var lo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? pe(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals
      var r = at(),
        i = Tn(e),
        o = Xt(r, i)
      ;(o.payload = t), n != null && (o.callback = n), (t = Sn(e, o, i)), t !== null && (zt(t, e, i, r), eo(t, e, i))
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals
      var r = at(),
        i = Tn(e),
        o = Xt(r, i)
      ;(o.tag = 1), (o.payload = t), n != null && (o.callback = n), (t = Sn(e, o, i)), t !== null && (zt(t, e, i, r), eo(t, e, i))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var n = at(),
        r = Tn(e),
        i = Xt(n, r)
      ;(i.tag = 2), t != null && (i.callback = t), (t = Sn(e, i, r)), t !== null && (zt(t, e, r, n), eo(t, e, r))
    },
  }
  function vu(e, t, n, r, i, o, c) {
    return (e = e.stateNode), typeof e.shouldComponentUpdate == 'function' ? e.shouldComponentUpdate(r, o, c) : t.prototype && t.prototype.isPureReactComponent ? !Vr(n, r) || !Vr(i, o) : !0
  }
  function yu(e, t, n) {
    var r = !1,
      i = yn,
      o = t.contextType
    return typeof o == 'object' && o !== null ? (o = Tt(o)) : ((i = ct(t) ? jn : et.current), (r = t.contextTypes), (o = (r = r != null) ? cr(e, i) : yn)), (t = new t(n, o)), (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null), (t.updater = lo), (e.stateNode = t), (t._reactInternals = e), r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = o)), t
  }
  function _u(e, t, n, r) {
    ;(e = t.state), typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && lo.enqueueReplaceState(t, t.state, null)
  }
  function ba(e, t, n, r) {
    var i = e.stateNode
    ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), xa(e)
    var o = t.contextType
    typeof o == 'object' && o !== null ? (i.context = Tt(o)) : ((o = ct(t) ? jn : et.current), (i.context = cr(e, o))), (i.state = e.memoizedState), (o = t.getDerivedStateFromProps), typeof o == 'function' && (Ga(e, t, o, n), (i.state = e.memoizedState)), typeof t.getDerivedStateFromProps == 'function' || typeof i.getSnapshotBeforeUpdate == 'function' || (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') || ((t = i.state), typeof i.componentWillMount == 'function' && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(), t !== i.state && lo.enqueueReplaceState(i, i.state, null), to(e, n, i, r), (i.state = e.memoizedState)), typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
  }
  function yr(e, t) {
    try {
      var n = '',
        r = t
      do (n += ve(r)), (r = r.return)
      while (r)
      var i = n
    } catch (o) {
      i =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
    }
    return { value: e, source: t, stack: i, digest: null }
  }
  function $a(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null }
  }
  function Wa(e, t) {
    try {
      console.error(t.value)
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  var lf = typeof WeakMap == 'function' ? WeakMap : Map
  function Cu(e, t, n) {
    ;(n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null })
    var r = t.value
    return (
      (n.callback = function () {
        go || ((go = !0), (os = r)), Wa(e, t)
      }),
      n
    )
  }
  function Su(e, t, n) {
    ;(n = Xt(-1, n)), (n.tag = 3)
    var r = e.type.getDerivedStateFromError
    if (typeof r == 'function') {
      var i = t.value
      ;(n.payload = function () {
        return r(i)
      }),
        (n.callback = function () {
          Wa(e, t)
        })
    }
    var o = e.stateNode
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          Wa(e, t), typeof r != 'function' && (wn === null ? (wn = new Set([this])) : wn.add(this))
          var c = t.stack
          this.componentDidCatch(t.value, { componentStack: c !== null ? c : '' })
        }),
      n
    )
  }
  function ku(e, t, n) {
    var r = e.pingCache
    if (r === null) {
      r = e.pingCache = new lf()
      var i = new Set()
      r.set(t, i)
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
    i.has(n) || (i.add(n), (e = kf.bind(null, e, t, n)), t.then(e, e))
  }
  function wu(e) {
    do {
      var t
      if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e
      e = e.return
    } while (e !== null)
    return null
  }
  function Eu(e, t, n, r, i) {
    return e.mode & 1 ? ((e.flags |= 65536), (e.lanes = i), e) : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Xt(-1, 1)), (t.tag = 2), Sn(n, t, 1))), (n.lanes |= 1)), e)
  }
  var uf = me.ReactCurrentOwner,
    dt = !1
  function ot(e, t, n, r) {
    t.child = e === null ? Wl(t, null, n, r) : hr(t, e.child, n, r)
  }
  function Tu(e, t, n, r, i) {
    n = n.render
    var o = t.ref
    return gr(t, i), (r = Ma(e, t, n, r, o, i)), (n = za()), e !== null && !dt ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), qt(e, t, i)) : (De && n && ya(t), (t.flags |= 1), ot(e, t, r, i), t.child)
  }
  function Pu(e, t, n, r, i) {
    if (e === null) {
      var o = n.type
      return typeof o == 'function' && !fs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? ((t.tag = 15), (t.type = o), Ru(e, t, o, r, i)) : ((e = ko(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e))
    }
    if (((o = e.child), !(e.lanes & i))) {
      var c = o.memoizedProps
      if (((n = n.compare), (n = n !== null ? n : Vr), n(c, r) && e.ref === t.ref)) return qt(e, t, i)
    }
    return (t.flags |= 1), (e = Rn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
  }
  function Ru(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps
      if (Vr(o, r) && e.ref === t.ref)
        if (((dt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (dt = !0)
        else return (t.lanes = e.lanes), qt(e, t, i)
    }
    return Ba(e, t, n, r, i)
  }
  function xu(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      o = e !== null ? e.memoizedState : null
    if (r.mode === 'hidden')
      if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), xe(Cr, Ct), (Ct |= n)
      else {
        if (!(n & 1073741824)) return (e = o !== null ? o.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), xe(Cr, Ct), (Ct |= e), null
        ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = o !== null ? o.baseLanes : n), xe(Cr, Ct), (Ct |= r)
      }
    else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), xe(Cr, Ct), (Ct |= r)
    return ot(e, t, i, n), t.child
  }
  function Lu(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152))
  }
  function Ba(e, t, n, r, i) {
    var o = ct(n) ? jn : et.current
    return (o = cr(t, o)), gr(t, i), (n = Ma(e, t, n, r, o, i)), (r = za()), e !== null && !dt ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), qt(e, t, i)) : (De && r && ya(t), (t.flags |= 1), ot(e, t, n, i), t.child)
  }
  function Au(e, t, n, r, i) {
    if (ct(n)) {
      var o = !0
      Vi(t)
    } else o = !1
    if ((gr(t, i), t.stateNode === null)) co(e, t), yu(t, n, r), ba(t, n, r, i), (r = !0)
    else if (e === null) {
      var c = t.stateNode,
        g = t.memoizedProps
      c.props = g
      var y = c.context,
        A = n.contextType
      typeof A == 'object' && A !== null ? (A = Tt(A)) : ((A = ct(n) ? jn : et.current), (A = cr(t, A)))
      var F = n.getDerivedStateFromProps,
        H = typeof F == 'function' || typeof c.getSnapshotBeforeUpdate == 'function'
      H || (typeof c.UNSAFE_componentWillReceiveProps != 'function' && typeof c.componentWillReceiveProps != 'function') || ((g !== r || y !== A) && _u(t, c, r, A)), (Cn = !1)
      var z = t.memoizedState
      ;(c.state = z), to(t, r, c, i), (y = t.memoizedState), g !== r || z !== y || ut.current || Cn ? (typeof F == 'function' && (Ga(t, n, F, r), (y = t.memoizedState)), (g = Cn || vu(t, n, g, r, z, y, A)) ? (H || (typeof c.UNSAFE_componentWillMount != 'function' && typeof c.componentWillMount != 'function') || (typeof c.componentWillMount == 'function' && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == 'function' && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == 'function' && (t.flags |= 4194308)) : (typeof c.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = y)), (c.props = r), (c.state = y), (c.context = A), (r = g)) : (typeof c.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
    } else {
      ;(c = t.stateNode), Vl(e, t), (g = t.memoizedProps), (A = t.type === t.elementType ? g : Nt(t.type, g)), (c.props = A), (H = t.pendingProps), (z = c.context), (y = n.contextType), typeof y == 'object' && y !== null ? (y = Tt(y)) : ((y = ct(n) ? jn : et.current), (y = cr(t, y)))
      var X = n.getDerivedStateFromProps
      ;(F = typeof X == 'function' || typeof c.getSnapshotBeforeUpdate == 'function') || (typeof c.UNSAFE_componentWillReceiveProps != 'function' && typeof c.componentWillReceiveProps != 'function') || ((g !== H || z !== y) && _u(t, c, r, y)), (Cn = !1), (z = t.memoizedState), (c.state = z), to(t, r, c, i)
      var te = t.memoizedState
      g !== H || z !== te || ut.current || Cn
        ? (typeof X == 'function' && (Ga(t, n, X, r), (te = t.memoizedState)), (A = Cn || vu(t, n, A, r, z, te, y) || !1) ? (F || (typeof c.UNSAFE_componentWillUpdate != 'function' && typeof c.componentWillUpdate != 'function') || (typeof c.componentWillUpdate == 'function' && c.componentWillUpdate(r, te, y), typeof c.UNSAFE_componentWillUpdate == 'function' && c.UNSAFE_componentWillUpdate(r, te, y)), typeof c.componentDidUpdate == 'function' && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024)) : (typeof c.componentDidUpdate != 'function' || (g === e.memoizedProps && z === e.memoizedState) || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != 'function' || (g === e.memoizedProps && z === e.memoizedState) || (t.flags |= 1024), (t.memoizedProps = r), (t.memoizedState = te)), (c.props = r), (c.state = te), (c.context = y), (r = A))
        : (typeof c.componentDidUpdate != 'function' || (g === e.memoizedProps && z === e.memoizedState) || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != 'function' || (g === e.memoizedProps && z === e.memoizedState) || (t.flags |= 1024), (r = !1))
    }
    return Va(e, t, n, r, o, i)
  }
  function Va(e, t, n, r, i, o) {
    Lu(e, t)
    var c = (t.flags & 128) !== 0
    if (!r && !c) return i && Ml(t, n, !1), qt(e, t, o)
    ;(r = t.stateNode), (uf.current = t)
    var g = c && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
    return (t.flags |= 1), e !== null && c ? ((t.child = hr(t, e.child, null, o)), (t.child = hr(t, null, g, o))) : ot(e, t, g, o), (t.memoizedState = r.state), i && Ml(t, n, !0), t.child
  }
  function Iu(e) {
    var t = e.stateNode
    t.pendingContext ? Nl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nl(e, t.context, !1), La(e, t.containerInfo)
  }
  function Ou(e, t, n, r, i) {
    return pr(), ka(i), (t.flags |= 256), ot(e, t, n, r), t.child
  }
  var Ka = { dehydrated: null, treeContext: null, retryLane: 0 }
  function Ja(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
  }
  function Nu(e, t, n) {
    var r = t.pendingProps,
      i = ze.current,
      o = !1,
      c = (t.flags & 128) !== 0,
      g
    if (((g = c) || (g = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), g ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1), xe(ze, i & 1), e === null)) return Sa(t), (e = t.memoizedState), e !== null && ((e = e.dehydrated), e !== null) ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null) : ((c = r.children), (e = r.fallback), o ? ((r = t.mode), (o = t.child), (c = { mode: 'hidden', children: c }), !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = c)) : (o = wo(c, r, 0, null)), (e = Kn(e, r, n, null)), (o.return = t), (e.return = t), (o.sibling = e), (t.child = o), (t.child.memoizedState = Ja(n)), (t.memoizedState = Ka), e) : Qa(t, c))
    if (((i = e.memoizedState), i !== null && ((g = i.dehydrated), g !== null))) return cf(e, t, c, r, g, i, n)
    if (o) {
      ;(o = r.fallback), (c = t.mode), (i = e.child), (g = i.sibling)
      var y = { mode: 'hidden', children: r.children }
      return !(c & 1) && t.child !== i ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = y), (t.deletions = null)) : ((r = Rn(i, y)), (r.subtreeFlags = i.subtreeFlags & 14680064)), g !== null ? (o = Rn(g, o)) : ((o = Kn(o, c, n, null)), (o.flags |= 2)), (o.return = t), (r.return = t), (r.sibling = o), (t.child = r), (r = o), (o = t.child), (c = e.child.memoizedState), (c = c === null ? Ja(n) : { baseLanes: c.baseLanes | n, cachePool: null, transitions: c.transitions }), (o.memoizedState = c), (o.childLanes = e.childLanes & ~n), (t.memoizedState = Ka), r
    }
    return (o = e.child), (e = o.sibling), (r = Rn(o, { mode: 'visible', children: r.children })), !(t.mode & 1) && (r.lanes = n), (r.return = t), (r.sibling = null), e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)), (t.child = r), (t.memoizedState = null), r
  }
  function Qa(e, t) {
    return (t = wo({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
  }
  function uo(e, t, n, r) {
    return r !== null && ka(r), hr(t, e.child, null, n), (e = Qa(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e
  }
  function cf(e, t, n, r, i, o, c) {
    if (n) return t.flags & 256 ? ((t.flags &= -257), (r = $a(Error(a(422)))), uo(e, t, c, r)) : t.memoizedState !== null ? ((t.child = e.child), (t.flags |= 128), null) : ((o = r.fallback), (i = t.mode), (r = wo({ mode: 'visible', children: r.children }, i, 0, null)), (o = Kn(o, i, c, null)), (o.flags |= 2), (r.return = t), (o.return = t), (r.sibling = o), (t.child = r), t.mode & 1 && hr(t, e.child, null, c), (t.child.memoizedState = Ja(c)), (t.memoizedState = Ka), o)
    if (!(t.mode & 1)) return uo(e, t, c, null)
    if (i.data === '$!') {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var g = r.dgst
      return (r = g), (o = Error(a(419))), (r = $a(o, r, void 0)), uo(e, t, c, r)
    }
    if (((g = (c & e.childLanes) !== 0), dt || g)) {
      if (((r = Je), r !== null)) {
        switch (c & -c) {
          case 4:
            i = 2
            break
          case 16:
            i = 8
            break
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
            i = 32
            break
          case 536870912:
            i = 268435456
            break
          default:
            i = 0
        }
        ;(i = i & (r.suspendedLanes | c) ? 0 : i), i !== 0 && i !== o.retryLane && ((o.retryLane = i), Yt(e, i), zt(r, e, i, -1))
      }
      return ds(), (r = $a(Error(a(421)))), uo(e, t, c, r)
    }
    return i.data === '$?' ? ((t.flags |= 128), (t.child = e.child), (t = wf.bind(null, e)), (i._reactRetry = t), null) : ((e = o.treeContext), (_t = gn(i.nextSibling)), (yt = t), (De = !0), (Ot = null), e !== null && ((wt[Et++] = Jt), (wt[Et++] = Qt), (wt[Et++] = Fn), (Jt = e.id), (Qt = e.overflow), (Fn = t)), (t = Qa(t, r.children)), (t.flags |= 4096), t)
  }
  function Du(e, t, n) {
    e.lanes |= t
    var r = e.alternate
    r !== null && (r.lanes |= t), Pa(e.return, t, n)
  }
  function Ya(e, t, n, r, i) {
    var o = e.memoizedState
    o === null ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i }) : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = i))
  }
  function Mu(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail
    if ((ot(e, t, r.children, n), (r = ze.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Du(e, n, t)
          else if (e.tag === 19) Du(e, n, t)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      r &= 1
    }
    if ((xe(ze, r), !(t.mode & 1))) t.memoizedState = null
    else
      switch (i) {
        case 'forwards':
          for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && no(e) === null && (i = n), (n = n.sibling)
          ;(n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), Ya(t, !1, i, n, o)
          break
        case 'backwards':
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && no(e) === null)) {
              t.child = i
              break
            }
            ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
          }
          Ya(t, !0, n, null, o)
          break
        case 'together':
          Ya(t, !1, null, null, void 0)
          break
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function co(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
  }
  function qt(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), ($n |= t.lanes), !(n & t.childLanes))) return null
    if (e !== null && t.child !== e.child) throw Error(a(153))
    if (t.child !== null) {
      for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = Rn(e, e.pendingProps)), (n.return = t)
      n.sibling = null
    }
    return t.child
  }
  function df(e, t, n) {
    switch (t.tag) {
      case 3:
        Iu(t), pr()
        break
      case 5:
        Ql(t)
        break
      case 1:
        ct(t.type) && Vi(t)
        break
      case 4:
        La(t, t.stateNode.containerInfo)
        break
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value
        xe(qi, r._currentValue), (r._currentValue = i)
        break
      case 13:
        if (((r = t.memoizedState), r !== null)) return r.dehydrated !== null ? (xe(ze, ze.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? Nu(e, t, n) : (xe(ze, ze.current & 1), (e = qt(e, t, n)), e !== null ? e.sibling : null)
        xe(ze, ze.current & 1)
        break
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Mu(e, t, n)
          t.flags |= 128
        }
        if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), xe(ze, ze.current), r)) break
        return null
      case 22:
      case 23:
        return (t.lanes = 0), xu(e, t, n)
    }
    return qt(e, t, n)
  }
  var zu, Xa, ju, Fu
  ;(zu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
      else if (n.tag !== 4 && n.child !== null) {
        ;(n.child.return = n), (n = n.child)
        continue
      }
      if (n === t) break
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return
        n = n.return
      }
      ;(n.sibling.return = n.return), (n = n.sibling)
    }
  }),
    (Xa = function () {}),
    (ju = function (e, t, n, r) {
      var i = e.memoizedProps
      if (i !== r) {
        ;(e = t.stateNode), Gn(Ht.current)
        var o = null
        switch (n) {
          case 'input':
            ;(i = Wt(e, i)), (r = Wt(e, r)), (o = [])
            break
          case 'select':
            ;(i = Z({}, i, { value: void 0 })), (r = Z({}, r, { value: void 0 })), (o = [])
            break
          case 'textarea':
            ;(i = on(e, i)), (r = on(e, r)), (o = [])
            break
          default:
            typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = $i)
        }
        xr(n, r)
        var c
        n = null
        for (A in i)
          if (!r.hasOwnProperty(A) && i.hasOwnProperty(A) && i[A] != null)
            if (A === 'style') {
              var g = i[A]
              for (c in g) g.hasOwnProperty(c) && (n || (n = {}), (n[c] = ''))
            } else A !== 'dangerouslySetInnerHTML' && A !== 'children' && A !== 'suppressContentEditableWarning' && A !== 'suppressHydrationWarning' && A !== 'autoFocus' && (h.hasOwnProperty(A) ? o || (o = []) : (o = o || []).push(A, null))
        for (A in r) {
          var y = r[A]
          if (((g = i != null ? i[A] : void 0), r.hasOwnProperty(A) && y !== g && (y != null || g != null)))
            if (A === 'style')
              if (g) {
                for (c in g) !g.hasOwnProperty(c) || (y && y.hasOwnProperty(c)) || (n || (n = {}), (n[c] = ''))
                for (c in y) y.hasOwnProperty(c) && g[c] !== y[c] && (n || (n = {}), (n[c] = y[c]))
              } else n || (o || (o = []), o.push(A, n)), (n = y)
            else A === 'dangerouslySetInnerHTML' ? ((y = y ? y.__html : void 0), (g = g ? g.__html : void 0), y != null && g !== y && (o = o || []).push(A, y)) : A === 'children' ? (typeof y != 'string' && typeof y != 'number') || (o = o || []).push(A, '' + y) : A !== 'suppressContentEditableWarning' && A !== 'suppressHydrationWarning' && (h.hasOwnProperty(A) ? (y != null && A === 'onScroll' && Oe('scroll', e), o || g === y || (o = [])) : (o = o || []).push(A, y))
        }
        n && (o = o || []).push('style', n)
        var A = o
        ;(t.updateQueue = A) && (t.flags |= 4)
      }
    }),
    (Fu = function (e, t, n, r) {
      n !== r && (t.flags |= 4)
    })
  function si(e, t) {
    if (!De)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
          n === null ? (e.tail = null) : (n.sibling = null)
          break
        case 'collapsed':
          n = e.tail
          for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
          r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null)
      }
  }
  function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0
    if (t) for (var i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling)
    else for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling)
    return (e.subtreeFlags |= r), (e.childLanes = n), t
  }
  function ff(e, t, n) {
    var r = t.pendingProps
    switch ((_a(t), t.tag)) {
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
        return nt(t), null
      case 1:
        return ct(t.type) && Bi(), nt(t), null
      case 3:
        return (r = t.stateNode), vr(), Ne(ut), Ne(et), Oa(), r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (e === null || e.child === null) && (Yi(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), Ot !== null && (ls(Ot), (Ot = null)))), Xa(e, t), nt(t), null
      case 5:
        Aa(t)
        var i = Gn(ni.current)
        if (((n = t.type), e !== null && t.stateNode != null)) ju(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166))
            return nt(t), null
          }
          if (((e = Gn(Ht.current)), Yi(t))) {
            ;(r = t.stateNode), (n = t.type)
            var o = t.memoizedProps
            switch (((r[Ft] = t), (r[Xr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                Oe('cancel', r), Oe('close', r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Oe('load', r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < Jr.length; i++) Oe(Jr[i], r)
                break
              case 'source':
                Oe('error', r)
                break
              case 'img':
              case 'image':
              case 'link':
                Oe('error', r), Oe('load', r)
                break
              case 'details':
                Oe('toggle', r)
                break
              case 'input':
                On(r, o), Oe('invalid', r)
                break
              case 'select':
                ;(r._wrapperState = { wasMultiple: !!o.multiple }), Oe('invalid', r)
                break
              case 'textarea':
                Ci(r, o), Oe('invalid', r)
            }
            xr(n, o), (i = null)
            for (var c in o)
              if (o.hasOwnProperty(c)) {
                var g = o[c]
                c === 'children' ? (typeof g == 'string' ? r.textContent !== g && (o.suppressHydrationWarning !== !0 && bi(r.textContent, g, e), (i = ['children', g])) : typeof g == 'number' && r.textContent !== '' + g && (o.suppressHydrationWarning !== !0 && bi(r.textContent, g, e), (i = ['children', '' + g]))) : h.hasOwnProperty(c) && g != null && c === 'onScroll' && Oe('scroll', r)
              }
            switch (n) {
              case 'input':
                An(r), Nn(r, o, !0)
                break
              case 'textarea':
                An(r), Pr(r)
                break
              case 'select':
              case 'option':
                break
              default:
                typeof o.onClick == 'function' && (r.onclick = $i)
            }
            ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
          } else {
            ;(c = i.nodeType === 9 ? i : i.ownerDocument), e === 'http://www.w3.org/1999/xhtml' && (e = Rr(n)), e === 'http://www.w3.org/1999/xhtml' ? (n === 'script' ? ((e = c.createElement('div')), (e.innerHTML = '<script><\/script>'), (e = e.removeChild(e.firstChild))) : typeof r.is == 'string' ? (e = c.createElement(n, { is: r.is })) : ((e = c.createElement(n)), n === 'select' && ((c = e), r.multiple ? (c.multiple = !0) : r.size && (c.size = r.size)))) : (e = c.createElementNS(e, n)), (e[Ft] = t), (e[Xr] = r), zu(e, t, !1, !1), (t.stateNode = e)
            e: {
              switch (((c = Lr(n, r)), n)) {
                case 'dialog':
                  Oe('cancel', e), Oe('close', e), (i = r)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  Oe('load', e), (i = r)
                  break
                case 'video':
                case 'audio':
                  for (i = 0; i < Jr.length; i++) Oe(Jr[i], e)
                  i = r
                  break
                case 'source':
                  Oe('error', e), (i = r)
                  break
                case 'img':
                case 'image':
                case 'link':
                  Oe('error', e), Oe('load', e), (i = r)
                  break
                case 'details':
                  Oe('toggle', e), (i = r)
                  break
                case 'input':
                  On(e, r), (i = Wt(e, r)), Oe('invalid', e)
                  break
                case 'option':
                  i = r
                  break
                case 'select':
                  ;(e._wrapperState = { wasMultiple: !!r.multiple }), (i = Z({}, r, { value: void 0 })), Oe('invalid', e)
                  break
                case 'textarea':
                  Ci(e, r), (i = on(e, r)), Oe('invalid', e)
                  break
                default:
                  i = r
              }
              xr(n, i), (g = i)
              for (o in g)
                if (g.hasOwnProperty(o)) {
                  var y = g[o]
                  o === 'style' ? sn(e, y) : o === 'dangerouslySetInnerHTML' ? ((y = y ? y.__html : void 0), y != null && Si(e, y)) : o === 'children' ? (typeof y == 'string' ? (n !== 'textarea' || y !== '') && an(e, y) : typeof y == 'number' && an(e, '' + y)) : o !== 'suppressContentEditableWarning' && o !== 'suppressHydrationWarning' && o !== 'autoFocus' && (h.hasOwnProperty(o) ? y != null && o === 'onScroll' && Oe('scroll', e) : y != null && ce(e, o, y, c))
                }
              switch (n) {
                case 'input':
                  An(e), Nn(e, r, !1)
                  break
                case 'textarea':
                  An(e), Pr(e)
                  break
                case 'option':
                  r.value != null && e.setAttribute('value', '' + Ce(r.value))
                  break
                case 'select':
                  ;(e.multiple = !!r.multiple), (o = r.value), o != null ? Lt(e, !!r.multiple, o, !1) : r.defaultValue != null && Lt(e, !!r.multiple, r.defaultValue, !0)
                  break
                default:
                  typeof i.onClick == 'function' && (e.onclick = $i)
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus
                  break e
                case 'img':
                  r = !0
                  break e
                default:
                  r = !1
              }
            }
            r && (t.flags |= 4)
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
        }
        return nt(t), null
      case 6:
        if (e && t.stateNode != null) Fu(e, t, e.memoizedProps, r)
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(a(166))
          if (((n = Gn(ni.current)), Gn(Ht.current), Yi(t))) {
            if (((r = t.stateNode), (n = t.memoizedProps), (r[Ft] = t), (o = r.nodeValue !== n) && ((e = yt), e !== null)))
              switch (e.tag) {
                case 3:
                  bi(r.nodeValue, n, (e.mode & 1) !== 0)
                  break
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && bi(r.nodeValue, n, (e.mode & 1) !== 0)
              }
            o && (t.flags |= 4)
          } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ft] = t), (t.stateNode = r)
        }
        return nt(t), null
      case 13:
        if ((Ne(ze), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (De && _t !== null && t.mode & 1 && !(t.flags & 128)) Gl(), pr(), (t.flags |= 98560), (o = !1)
          else if (((o = Yi(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318))
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(a(317))
              o[Ft] = t
            } else pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
            nt(t), (o = !1)
          } else Ot !== null && (ls(Ot), (Ot = null)), (o = !0)
          if (!o) return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? ((t.lanes = n), t) : ((r = r !== null), r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || ze.current & 1 ? Be === 0 && (Be = 3) : ds())), t.updateQueue !== null && (t.flags |= 4), nt(t), null)
      case 4:
        return vr(), Xa(e, t), e === null && Qr(t.stateNode.containerInfo), nt(t), null
      case 10:
        return Ta(t.type._context), nt(t), null
      case 17:
        return ct(t.type) && Bi(), nt(t), null
      case 19:
        if ((Ne(ze), (o = t.memoizedState), o === null)) return nt(t), null
        if (((r = (t.flags & 128) !== 0), (c = o.rendering), c === null))
          if (r) si(o, !1)
          else {
            if (Be !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((c = no(e)), c !== null)) {
                  for (t.flags |= 128, si(o, !1), r = c.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) (o = n), (e = r), (o.flags &= 14680066), (c = o.alternate), c === null ? ((o.childLanes = 0), (o.lanes = e), (o.child = null), (o.subtreeFlags = 0), (o.memoizedProps = null), (o.memoizedState = null), (o.updateQueue = null), (o.dependencies = null), (o.stateNode = null)) : ((o.childLanes = c.childLanes), (o.lanes = c.lanes), (o.child = c.child), (o.subtreeFlags = 0), (o.deletions = null), (o.memoizedProps = c.memoizedProps), (o.memoizedState = c.memoizedState), (o.updateQueue = c.updateQueue), (o.type = c.type), (e = c.dependencies), (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })), (n = n.sibling)
                  return xe(ze, (ze.current & 1) | 2), t.child
                }
                e = e.sibling
              }
            o.tail !== null && Ge() > Sr && ((t.flags |= 128), (r = !0), si(o, !1), (t.lanes = 4194304))
          }
        else {
          if (!r)
            if (((e = no(c)), e !== null)) {
              if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), si(o, !0), o.tail === null && o.tailMode === 'hidden' && !c.alternate && !De)) return nt(t), null
            } else 2 * Ge() - o.renderingStartTime > Sr && n !== 1073741824 && ((t.flags |= 128), (r = !0), si(o, !1), (t.lanes = 4194304))
          o.isBackwards ? ((c.sibling = t.child), (t.child = c)) : ((n = o.last), n !== null ? (n.sibling = c) : (t.child = c), (o.last = c))
        }
        return o.tail !== null ? ((t = o.tail), (o.rendering = t), (o.tail = t.sibling), (o.renderingStartTime = Ge()), (t.sibling = null), (n = ze.current), xe(ze, r ? (n & 1) | 2 : n & 1), t) : (nt(t), null)
      case 22:
      case 23:
        return cs(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? Ct & 1073741824 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(a(156, t.tag))
  }
  function pf(e, t) {
    switch ((_a(t), t.tag)) {
      case 1:
        return ct(t.type) && Bi(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      case 3:
        return vr(), Ne(ut), Ne(et), Oa(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      case 5:
        return Aa(t), null
      case 13:
        if ((Ne(ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(a(340))
          pr()
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      case 19:
        return Ne(ze), null
      case 4:
        return vr(), null
      case 10:
        return Ta(t.type._context), null
      case 22:
      case 23:
        return cs(), null
      case 24:
        return null
      default:
        return null
    }
  }
  var fo = !1,
    rt = !1,
    hf = typeof WeakSet == 'function' ? WeakSet : Set,
    ee = null
  function _r(e, t) {
    var n = e.ref
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null)
        } catch (r) {
          Ue(e, t, r)
        }
      else n.current = null
  }
  function qa(e, t, n) {
    try {
      n()
    } catch (r) {
      Ue(e, t, r)
    }
  }
  var Hu = !1
  function mf(e, t) {
    if (((ca = Ii), (e = vl()), na(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window
          var r = n.getSelection && n.getSelection()
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode
            var i = r.anchorOffset,
              o = r.focusNode
            r = r.focusOffset
            try {
              n.nodeType, o.nodeType
            } catch {
              n = null
              break e
            }
            var c = 0,
              g = -1,
              y = -1,
              A = 0,
              F = 0,
              H = e,
              z = null
            t: for (;;) {
              for (var X; H !== n || (i !== 0 && H.nodeType !== 3) || (g = c + i), H !== o || (r !== 0 && H.nodeType !== 3) || (y = c + r), H.nodeType === 3 && (c += H.nodeValue.length), (X = H.firstChild) !== null; ) (z = H), (H = X)
              for (;;) {
                if (H === e) break t
                if ((z === n && ++A === i && (g = c), z === o && ++F === r && (y = c), (X = H.nextSibling) !== null)) break
                ;(H = z), (z = H.parentNode)
              }
              H = X
            }
            n = g === -1 || y === -1 ? null : { start: g, end: y }
          } else n = null
        }
      n = n || { start: 0, end: 0 }
    } else n = null
    for (da = { focusedElem: e, selectionRange: n }, Ii = !1, ee = t; ee !== null; )
      if (((t = ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (ee = e)
      else
        for (; ee !== null; ) {
          t = ee
          try {
            var te = t.alternate
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (te !== null) {
                    var re = te.memoizedProps,
                      be = te.memoizedState,
                      x = t.stateNode,
                      S = x.getSnapshotBeforeUpdate(t.elementType === t.type ? re : Nt(t.type, re), be)
                    x.__reactInternalSnapshotBeforeUpdate = S
                  }
                  break
                case 3:
                  var L = t.stateNode.containerInfo
                  L.nodeType === 1 ? (L.textContent = '') : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(a(163))
              }
          } catch (W) {
            Ue(t, t.return, W)
          }
          if (((e = t.sibling), e !== null)) {
            ;(e.return = t.return), (ee = e)
            break
          }
          ee = t.return
        }
    return (te = Hu), (Hu = !1), te
  }
  function li(e, t, n) {
    var r = t.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next)
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy
          ;(i.destroy = void 0), o !== void 0 && qa(t, n, o)
        }
        i = i.next
      } while (i !== r)
    }
  }
  function po(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next)
      do {
        if ((n.tag & e) === e) {
          var r = n.create
          n.destroy = r()
        }
        n = n.next
      } while (n !== t)
    }
  }
  function Za(e) {
    var t = e.ref
    if (t !== null) {
      var n = e.stateNode
      switch (e.tag) {
        case 5:
          e = n
          break
        default:
          e = n
      }
      typeof t == 'function' ? t(e) : (t.current = e)
    }
  }
  function Uu(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), Uu(t)), (e.child = null), (e.deletions = null), (e.sibling = null), e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Ft], delete t[Xr], delete t[ma], delete t[Yd], delete t[Xd])), (e.stateNode = null), (e.return = null), (e.dependencies = null), (e.memoizedProps = null), (e.memoizedState = null), (e.pendingProps = null), (e.stateNode = null), (e.updateQueue = null)
  }
  function Gu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
  }
  function bu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gu(e.return)) return null
        e = e.return
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function es(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6) (e = e.stateNode), t ? (n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t)) : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = $i))
    else if (r !== 4 && ((e = e.child), e !== null)) for (es(e, t, n), e = e.sibling; e !== null; ) es(e, t, n), (e = e.sibling)
  }
  function ts(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (r !== 4 && ((e = e.child), e !== null)) for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), (e = e.sibling)
  }
  var Xe = null,
    Dt = !1
  function kn(e, t, n) {
    for (n = n.child; n !== null; ) $u(e, t, n), (n = n.sibling)
  }
  function $u(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == 'function')
      try {
        jt.onCommitFiberUnmount(Ti, n)
      } catch {}
    switch (n.tag) {
      case 5:
        rt || _r(n, t)
      case 6:
        var r = Xe,
          i = Dt
        ;(Xe = null), kn(e, t, n), (Xe = r), (Dt = i), Xe !== null && (Dt ? ((e = Xe), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Xe.removeChild(n.stateNode))
        break
      case 18:
        Xe !== null && (Dt ? ((e = Xe), (n = n.stateNode), e.nodeType === 8 ? ha(e.parentNode, n) : e.nodeType === 1 && ha(e, n), Ur(e)) : ha(Xe, n.stateNode))
        break
      case 4:
        ;(r = Xe), (i = Dt), (Xe = n.stateNode.containerInfo), (Dt = !0), kn(e, t, n), (Xe = r), (Dt = i)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (!rt && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          i = r = r.next
          do {
            var o = i,
              c = o.destroy
            ;(o = o.tag), c !== void 0 && (o & 2 || o & 4) && qa(n, t, c), (i = i.next)
          } while (i !== r)
        }
        kn(e, t, n)
        break
      case 1:
        if (!rt && (_r(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
          } catch (g) {
            Ue(n, t, g)
          }
        kn(e, t, n)
        break
      case 21:
        kn(e, t, n)
        break
      case 22:
        n.mode & 1 ? ((rt = (r = rt) || n.memoizedState !== null), kn(e, t, n), (rt = r)) : kn(e, t, n)
        break
      default:
        kn(e, t, n)
    }
  }
  function Wu(e) {
    var t = e.updateQueue
    if (t !== null) {
      e.updateQueue = null
      var n = e.stateNode
      n === null && (n = e.stateNode = new hf()),
        t.forEach(function (r) {
          var i = Ef.bind(null, e, r)
          n.has(r) || (n.add(r), r.then(i, i))
        })
    }
  }
  function Mt(e, t) {
    var n = t.deletions
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r]
        try {
          var o = e,
            c = t,
            g = c
          e: for (; g !== null; ) {
            switch (g.tag) {
              case 5:
                ;(Xe = g.stateNode), (Dt = !1)
                break e
              case 3:
                ;(Xe = g.stateNode.containerInfo), (Dt = !0)
                break e
              case 4:
                ;(Xe = g.stateNode.containerInfo), (Dt = !0)
                break e
            }
            g = g.return
          }
          if (Xe === null) throw Error(a(160))
          $u(o, c, i), (Xe = null), (Dt = !1)
          var y = i.alternate
          y !== null && (y.return = null), (i.return = null)
        } catch (A) {
          Ue(i, t, A)
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Bu(t, e), (t = t.sibling)
  }
  function Bu(e, t) {
    var n = e.alternate,
      r = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mt(t, e), Gt(e), r & 4)) {
          try {
            li(3, e, e.return), po(3, e)
          } catch (re) {
            Ue(e, e.return, re)
          }
          try {
            li(5, e, e.return)
          } catch (re) {
            Ue(e, e.return, re)
          }
        }
        break
      case 1:
        Mt(t, e), Gt(e), r & 512 && n !== null && _r(n, n.return)
        break
      case 5:
        if ((Mt(t, e), Gt(e), r & 512 && n !== null && _r(n, n.return), e.flags & 32)) {
          var i = e.stateNode
          try {
            an(i, '')
          } catch (re) {
            Ue(e, e.return, re)
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var o = e.memoizedProps,
            c = n !== null ? n.memoizedProps : o,
            g = e.type,
            y = e.updateQueue
          if (((e.updateQueue = null), y !== null))
            try {
              g === 'input' && o.type === 'radio' && o.name != null && Qn(i, o), Lr(g, c)
              var A = Lr(g, o)
              for (c = 0; c < y.length; c += 2) {
                var F = y[c],
                  H = y[c + 1]
                F === 'style' ? sn(i, H) : F === 'dangerouslySetInnerHTML' ? Si(i, H) : F === 'children' ? an(i, H) : ce(i, F, H, A)
              }
              switch (g) {
                case 'input':
                  rn(i, o)
                  break
                case 'textarea':
                  ke(i, o)
                  break
                case 'select':
                  var z = i._wrapperState.wasMultiple
                  i._wrapperState.wasMultiple = !!o.multiple
                  var X = o.value
                  X != null ? Lt(i, !!o.multiple, X, !1) : z !== !!o.multiple && (o.defaultValue != null ? Lt(i, !!o.multiple, o.defaultValue, !0) : Lt(i, !!o.multiple, o.multiple ? [] : '', !1))
              }
              i[Xr] = o
            } catch (re) {
              Ue(e, e.return, re)
            }
        }
        break
      case 6:
        if ((Mt(t, e), Gt(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162))
          ;(i = e.stateNode), (o = e.memoizedProps)
          try {
            i.nodeValue = o
          } catch (re) {
            Ue(e, e.return, re)
          }
        }
        break
      case 3:
        if ((Mt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Ur(t.containerInfo)
          } catch (re) {
            Ue(e, e.return, re)
          }
        break
      case 4:
        Mt(t, e), Gt(e)
        break
      case 13:
        Mt(t, e), Gt(e), (i = e.child), i.flags & 8192 && ((o = i.memoizedState !== null), (i.stateNode.isHidden = o), !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (is = Ge())), r & 4 && Wu(e)
        break
      case 22:
        if (((F = n !== null && n.memoizedState !== null), e.mode & 1 ? ((rt = (A = rt) || F), Mt(t, e), (rt = A)) : Mt(t, e), Gt(e), r & 8192)) {
          if (((A = e.memoizedState !== null), (e.stateNode.isHidden = A) && !F && e.mode & 1))
            for (ee = e, F = e.child; F !== null; ) {
              for (H = ee = F; ee !== null; ) {
                switch (((z = ee), (X = z.child), z.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    li(4, z, z.return)
                    break
                  case 1:
                    _r(z, z.return)
                    var te = z.stateNode
                    if (typeof te.componentWillUnmount == 'function') {
                      ;(r = z), (n = z.return)
                      try {
                        ;(t = r), (te.props = t.memoizedProps), (te.state = t.memoizedState), te.componentWillUnmount()
                      } catch (re) {
                        Ue(r, n, re)
                      }
                    }
                    break
                  case 5:
                    _r(z, z.return)
                    break
                  case 22:
                    if (z.memoizedState !== null) {
                      Ju(H)
                      continue
                    }
                }
                X !== null ? ((X.return = z), (ee = X)) : Ju(H)
              }
              F = F.sibling
            }
          e: for (F = null, H = e; ; ) {
            if (H.tag === 5) {
              if (F === null) {
                F = H
                try {
                  ;(i = H.stateNode), A ? ((o = i.style), typeof o.setProperty == 'function' ? o.setProperty('display', 'none', 'important') : (o.display = 'none')) : ((g = H.stateNode), (y = H.memoizedProps.style), (c = y != null && y.hasOwnProperty('display') ? y.display : null), (g.style.display = ki('display', c)))
                } catch (re) {
                  Ue(e, e.return, re)
                }
              }
            } else if (H.tag === 6) {
              if (F === null)
                try {
                  H.stateNode.nodeValue = A ? '' : H.memoizedProps
                } catch (re) {
                  Ue(e, e.return, re)
                }
            } else if (((H.tag !== 22 && H.tag !== 23) || H.memoizedState === null || H === e) && H.child !== null) {
              ;(H.child.return = H), (H = H.child)
              continue
            }
            if (H === e) break e
            for (; H.sibling === null; ) {
              if (H.return === null || H.return === e) break e
              F === H && (F = null), (H = H.return)
            }
            F === H && (F = null), (H.sibling.return = H.return), (H = H.sibling)
          }
        }
        break
      case 19:
        Mt(t, e), Gt(e), r & 4 && Wu(e)
        break
      case 21:
        break
      default:
        Mt(t, e), Gt(e)
    }
  }
  function Gt(e) {
    var t = e.flags
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Gu(n)) {
              var r = n
              break e
            }
            n = n.return
          }
          throw Error(a(160))
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode
            r.flags & 32 && (an(i, ''), (r.flags &= -33))
            var o = bu(e)
            ts(e, o, i)
            break
          case 3:
          case 4:
            var c = r.stateNode.containerInfo,
              g = bu(e)
            es(e, g, c)
            break
          default:
            throw Error(a(161))
        }
      } catch (y) {
        Ue(e, e.return, y)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function gf(e, t, n) {
    ;(ee = e), Vu(e)
  }
  function Vu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ee !== null; ) {
      var i = ee,
        o = i.child
      if (i.tag === 22 && r) {
        var c = i.memoizedState !== null || fo
        if (!c) {
          var g = i.alternate,
            y = (g !== null && g.memoizedState !== null) || rt
          g = fo
          var A = rt
          if (((fo = c), (rt = y) && !A)) for (ee = i; ee !== null; ) (c = ee), (y = c.child), c.tag === 22 && c.memoizedState !== null ? Qu(i) : y !== null ? ((y.return = c), (ee = y)) : Qu(i)
          for (; o !== null; ) (ee = o), Vu(o), (o = o.sibling)
          ;(ee = i), (fo = g), (rt = A)
        }
        Ku(e)
      } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (ee = o)) : Ku(e)
    }
  }
  function Ku(e) {
    for (; ee !== null; ) {
      var t = ee
      if (t.flags & 8772) {
        var n = t.alternate
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                rt || po(5, t)
                break
              case 1:
                var r = t.stateNode
                if (t.flags & 4 && !rt)
                  if (n === null) r.componentDidMount()
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : Nt(t.type, n.memoizedProps)
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                  }
                var o = t.updateQueue
                o !== null && Jl(t, o, r)
                break
              case 3:
                var c = t.updateQueue
                if (c !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode
                        break
                      case 1:
                        n = t.child.stateNode
                    }
                  Jl(t, c, n)
                }
                break
              case 5:
                var g = t.stateNode
                if (n === null && t.flags & 4) {
                  n = g
                  var y = t.memoizedProps
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      y.autoFocus && n.focus()
                      break
                    case 'img':
                      y.src && (n.src = y.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (t.memoizedState === null) {
                  var A = t.alternate
                  if (A !== null) {
                    var F = A.memoizedState
                    if (F !== null) {
                      var H = F.dehydrated
                      H !== null && Ur(H)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(a(163))
            }
          rt || (t.flags & 512 && Za(t))
        } catch (z) {
          Ue(t, t.return, z)
        }
      }
      if (t === e) {
        ee = null
        break
      }
      if (((n = t.sibling), n !== null)) {
        ;(n.return = t.return), (ee = n)
        break
      }
      ee = t.return
    }
  }
  function Ju(e) {
    for (; ee !== null; ) {
      var t = ee
      if (t === e) {
        ee = null
        break
      }
      var n = t.sibling
      if (n !== null) {
        ;(n.return = t.return), (ee = n)
        break
      }
      ee = t.return
    }
  }
  function Qu(e) {
    for (; ee !== null; ) {
      var t = ee
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return
            try {
              po(4, t)
            } catch (y) {
              Ue(t, n, y)
            }
            break
          case 1:
            var r = t.stateNode
            if (typeof r.componentDidMount == 'function') {
              var i = t.return
              try {
                r.componentDidMount()
              } catch (y) {
                Ue(t, i, y)
              }
            }
            var o = t.return
            try {
              Za(t)
            } catch (y) {
              Ue(t, o, y)
            }
            break
          case 5:
            var c = t.return
            try {
              Za(t)
            } catch (y) {
              Ue(t, c, y)
            }
        }
      } catch (y) {
        Ue(t, t.return, y)
      }
      if (t === e) {
        ee = null
        break
      }
      var g = t.sibling
      if (g !== null) {
        ;(g.return = t.return), (ee = g)
        break
      }
      ee = t.return
    }
  }
  var vf = Math.ceil,
    ho = me.ReactCurrentDispatcher,
    ns = me.ReactCurrentOwner,
    Rt = me.ReactCurrentBatchConfig,
    _e = 0,
    Je = null,
    $e = null,
    qe = 0,
    Ct = 0,
    Cr = vn(0),
    Be = 0,
    ui = null,
    $n = 0,
    mo = 0,
    rs = 0,
    ci = null,
    ft = null,
    is = 0,
    Sr = 1 / 0,
    Zt = null,
    go = !1,
    os = null,
    wn = null,
    vo = !1,
    En = null,
    yo = 0,
    di = 0,
    as = null,
    _o = -1,
    Co = 0
  function at() {
    return _e & 6 ? Ge() : _o !== -1 ? _o : (_o = Ge())
  }
  function Tn(e) {
    return e.mode & 1 ? (_e & 2 && qe !== 0 ? qe & -qe : Zd.transition !== null ? (Co === 0 && (Co = bs()), Co) : ((e = Te), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xs(e.type))), e)) : 1
  }
  function zt(e, t, n, r) {
    if (50 < di) throw ((di = 0), (as = null), Error(a(185)))
    Mr(e, n, r), (!(_e & 2) || e !== Je) && (e === Je && (!(_e & 2) && (mo |= n), Be === 4 && Pn(e, qe)), pt(e, r), n === 1 && _e === 0 && !(t.mode & 1) && ((Sr = Ge() + 500), Ki && _n()))
  }
  function pt(e, t) {
    var n = e.callbackNode
    Zc(e, t)
    var r = xi(e, e === Je ? qe : 0)
    if (r === 0) n !== null && Hs(n), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Hs(n), t === 1))
        e.tag === 0 ? qd(Xu.bind(null, e)) : zl(Xu.bind(null, e)),
          Jd(function () {
            !(_e & 6) && _n()
          }),
          (n = null)
      else {
        switch ($s(r)) {
          case 1:
            n = Ho
            break
          case 4:
            n = Us
            break
          case 16:
            n = Ei
            break
          case 536870912:
            n = Gs
            break
          default:
            n = Ei
        }
        n = oc(n, Yu.bind(null, e))
      }
      ;(e.callbackPriority = t), (e.callbackNode = n)
    }
  }
  function Yu(e, t) {
    if (((_o = -1), (Co = 0), _e & 6)) throw Error(a(327))
    var n = e.callbackNode
    if (kr() && e.callbackNode !== n) return null
    var r = xi(e, e === Je ? qe : 0)
    if (r === 0) return null
    if (r & 30 || r & e.expiredLanes || t) t = So(e, r)
    else {
      t = r
      var i = _e
      _e |= 2
      var o = Zu()
      ;(Je !== e || qe !== t) && ((Zt = null), (Sr = Ge() + 500), Bn(e, t))
      do
        try {
          Cf()
          break
        } catch (g) {
          qu(e, g)
        }
      while (!0)
      Ea(), (ho.current = o), (_e = i), $e !== null ? (t = 0) : ((Je = null), (qe = 0), (t = Be))
    }
    if (t !== 0) {
      if ((t === 2 && ((i = Uo(e)), i !== 0 && ((r = i), (t = ss(e, i)))), t === 1)) throw ((n = ui), Bn(e, 0), Pn(e, r), pt(e, Ge()), n)
      if (t === 6) Pn(e, r)
      else {
        if (((i = e.current.alternate), !(r & 30) && !yf(i) && ((t = So(e, r)), t === 2 && ((o = Uo(e)), o !== 0 && ((r = o), (t = ss(e, o)))), t === 1))) throw ((n = ui), Bn(e, 0), Pn(e, r), pt(e, Ge()), n)
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345))
          case 2:
            Vn(e, ft, Zt)
            break
          case 3:
            if ((Pn(e, r), (r & 130023424) === r && ((t = is + 500 - Ge()), 10 < t))) {
              if (xi(e, 0) !== 0) break
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                at(), (e.pingedLanes |= e.suspendedLanes & i)
                break
              }
              e.timeoutHandle = pa(Vn.bind(null, e, ft, Zt), t)
              break
            }
            Vn(e, ft, Zt)
            break
          case 4:
            if ((Pn(e, r), (r & 4194240) === r)) break
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var c = 31 - At(r)
              ;(o = 1 << c), (c = t[c]), c > i && (i = c), (r &= ~o)
            }
            if (((r = i), (r = Ge() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vf(r / 1960)) - r), 10 < r)) {
              e.timeoutHandle = pa(Vn.bind(null, e, ft, Zt), r)
              break
            }
            Vn(e, ft, Zt)
            break
          case 5:
            Vn(e, ft, Zt)
            break
          default:
            throw Error(a(329))
        }
      }
    }
    return pt(e, Ge()), e.callbackNode === n ? Yu.bind(null, e) : null
  }
  function ss(e, t) {
    var n = ci
    return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), (e = So(e, t)), e !== 2 && ((t = ft), (ft = n), t !== null && ls(t)), e
  }
  function ls(e) {
    ft === null ? (ft = e) : ft.push.apply(ft, e)
  }
  function yf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              o = i.getSnapshot
            i = i.value
            try {
              if (!It(o(), i)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return !0
  }
  function Pn(e, t) {
    for (t &= ~rs, t &= ~mo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - At(t),
        r = 1 << n
      ;(e[n] = -1), (t &= ~r)
    }
  }
  function Xu(e) {
    if (_e & 6) throw Error(a(327))
    kr()
    var t = xi(e, 0)
    if (!(t & 1)) return pt(e, Ge()), null
    var n = So(e, t)
    if (e.tag !== 0 && n === 2) {
      var r = Uo(e)
      r !== 0 && ((t = r), (n = ss(e, r)))
    }
    if (n === 1) throw ((n = ui), Bn(e, 0), Pn(e, t), pt(e, Ge()), n)
    if (n === 6) throw Error(a(345))
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Vn(e, ft, Zt), pt(e, Ge()), null
  }
  function us(e, t) {
    var n = _e
    _e |= 1
    try {
      return e(t)
    } finally {
      ;(_e = n), _e === 0 && ((Sr = Ge() + 500), Ki && _n())
    }
  }
  function Wn(e) {
    En !== null && En.tag === 0 && !(_e & 6) && kr()
    var t = _e
    _e |= 1
    var n = Rt.transition,
      r = Te
    try {
      if (((Rt.transition = null), (Te = 1), e)) return e()
    } finally {
      ;(Te = r), (Rt.transition = n), (_e = t), !(_e & 6) && _n()
    }
  }
  function cs() {
    ;(Ct = Cr.current), Ne(Cr)
  }
  function Bn(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var n = e.timeoutHandle
    if ((n !== -1 && ((e.timeoutHandle = -1), Kd(n)), $e !== null))
      for (n = $e.return; n !== null; ) {
        var r = n
        switch ((_a(r), r.tag)) {
          case 1:
            ;(r = r.type.childContextTypes), r != null && Bi()
            break
          case 3:
            vr(), Ne(ut), Ne(et), Oa()
            break
          case 5:
            Aa(r)
            break
          case 4:
            vr()
            break
          case 13:
            Ne(ze)
            break
          case 19:
            Ne(ze)
            break
          case 10:
            Ta(r.type._context)
            break
          case 22:
          case 23:
            cs()
        }
        n = n.return
      }
    if (((Je = e), ($e = e = Rn(e.current, null)), (qe = Ct = t), (Be = 0), (ui = null), (rs = mo = $n = 0), (ft = ci = null), Un !== null)) {
      for (t = 0; t < Un.length; t++)
        if (((n = Un[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null
          var i = r.next,
            o = n.pending
          if (o !== null) {
            var c = o.next
            ;(o.next = i), (r.next = c)
          }
          n.pending = r
        }
      Un = null
    }
    return e
  }
  function qu(e, t) {
    do {
      var n = $e
      try {
        if ((Ea(), (ro.current = so), io)) {
          for (var r = je.memoizedState; r !== null; ) {
            var i = r.queue
            i !== null && (i.pending = null), (r = r.next)
          }
          io = !1
        }
        if (((bn = 0), (Ke = We = je = null), (ri = !1), (ii = 0), (ns.current = null), n === null || n.return === null)) {
          ;(Be = 1), (ui = t), ($e = null)
          break
        }
        e: {
          var o = e,
            c = n.return,
            g = n,
            y = t
          if (((t = qe), (g.flags |= 32768), y !== null && typeof y == 'object' && typeof y.then == 'function')) {
            var A = y,
              F = g,
              H = F.tag
            if (!(F.mode & 1) && (H === 0 || H === 11 || H === 15)) {
              var z = F.alternate
              z ? ((F.updateQueue = z.updateQueue), (F.memoizedState = z.memoizedState), (F.lanes = z.lanes)) : ((F.updateQueue = null), (F.memoizedState = null))
            }
            var X = wu(c)
            if (X !== null) {
              ;(X.flags &= -257), Eu(X, c, g, o, t), X.mode & 1 && ku(o, A, t), (t = X), (y = A)
              var te = t.updateQueue
              if (te === null) {
                var re = new Set()
                re.add(y), (t.updateQueue = re)
              } else te.add(y)
              break e
            } else {
              if (!(t & 1)) {
                ku(o, A, t), ds()
                break e
              }
              y = Error(a(426))
            }
          } else if (De && g.mode & 1) {
            var be = wu(c)
            if (be !== null) {
              !(be.flags & 65536) && (be.flags |= 256), Eu(be, c, g, o, t), ka(yr(y, g))
              break e
            }
          }
          ;(o = y = yr(y, g)), Be !== 4 && (Be = 2), ci === null ? (ci = [o]) : ci.push(o), (o = c)
          do {
            switch (o.tag) {
              case 3:
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var x = Cu(o, y, t)
                Kl(o, x)
                break e
              case 1:
                g = y
                var S = o.type,
                  L = o.stateNode
                if (!(o.flags & 128) && (typeof S.getDerivedStateFromError == 'function' || (L !== null && typeof L.componentDidCatch == 'function' && (wn === null || !wn.has(L))))) {
                  ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                  var W = Su(o, g, t)
                  Kl(o, W)
                  break e
                }
            }
            o = o.return
          } while (o !== null)
        }
        tc(n)
      } catch (ie) {
        ;(t = ie), $e === n && n !== null && ($e = n = n.return)
        continue
      }
      break
    } while (!0)
  }
  function Zu() {
    var e = ho.current
    return (ho.current = so), e === null ? so : e
  }
  function ds() {
    ;(Be === 0 || Be === 3 || Be === 2) && (Be = 4), Je === null || (!($n & 268435455) && !(mo & 268435455)) || Pn(Je, qe)
  }
  function So(e, t) {
    var n = _e
    _e |= 2
    var r = Zu()
    ;(Je !== e || qe !== t) && ((Zt = null), Bn(e, t))
    do
      try {
        _f()
        break
      } catch (i) {
        qu(e, i)
      }
    while (!0)
    if ((Ea(), (_e = n), (ho.current = r), $e !== null)) throw Error(a(261))
    return (Je = null), (qe = 0), Be
  }
  function _f() {
    for (; $e !== null; ) ec($e)
  }
  function Cf() {
    for (; $e !== null && !Wc(); ) ec($e)
  }
  function ec(e) {
    var t = ic(e.alternate, e, Ct)
    ;(e.memoizedProps = e.pendingProps), t === null ? tc(e) : ($e = t), (ns.current = null)
  }
  function tc(e) {
    var t = e
    do {
      var n = t.alternate
      if (((e = t.return), t.flags & 32768)) {
        if (((n = pf(n, t)), n !== null)) {
          ;(n.flags &= 32767), ($e = n)
          return
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
        else {
          ;(Be = 6), ($e = null)
          return
        }
      } else if (((n = ff(n, t, Ct)), n !== null)) {
        $e = n
        return
      }
      if (((t = t.sibling), t !== null)) {
        $e = t
        return
      }
      $e = t = e
    } while (t !== null)
    Be === 0 && (Be = 5)
  }
  function Vn(e, t, n) {
    var r = Te,
      i = Rt.transition
    try {
      ;(Rt.transition = null), (Te = 1), Sf(e, t, n, r)
    } finally {
      ;(Rt.transition = i), (Te = r)
    }
    return null
  }
  function Sf(e, t, n, r) {
    do kr()
    while (En !== null)
    if (_e & 6) throw Error(a(327))
    n = e.finishedWork
    var i = e.finishedLanes
    if (n === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(a(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var o = n.lanes | n.childLanes
    if (
      (ed(e, o),
      e === Je && (($e = Je = null), (qe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        vo ||
        ((vo = !0),
        oc(Ei, function () {
          return kr(), null
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      ;(o = Rt.transition), (Rt.transition = null)
      var c = Te
      Te = 1
      var g = _e
      ;(_e |= 4), (ns.current = null), mf(e, n), Bu(n, e), Ud(da), (Ii = !!ca), (da = ca = null), (e.current = n), gf(n), Bc(), (_e = g), (Te = c), (Rt.transition = o)
    } else e.current = n
    if ((vo && ((vo = !1), (En = e), (yo = i)), (o = e.pendingLanes), o === 0 && (wn = null), Jc(n.stateNode), pt(e, Ge()), t !== null)) for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
    if (go) throw ((go = !1), (e = os), (os = null), e)
    return yo & 1 && e.tag !== 0 && kr(), (o = e.pendingLanes), o & 1 ? (e === as ? di++ : ((di = 0), (as = e))) : (di = 0), _n(), null
  }
  function kr() {
    if (En !== null) {
      var e = $s(yo),
        t = Rt.transition,
        n = Te
      try {
        if (((Rt.transition = null), (Te = 16 > e ? 16 : e), En === null)) var r = !1
        else {
          if (((e = En), (En = null), (yo = 0), _e & 6)) throw Error(a(331))
          var i = _e
          for (_e |= 4, ee = e.current; ee !== null; ) {
            var o = ee,
              c = o.child
            if (ee.flags & 16) {
              var g = o.deletions
              if (g !== null) {
                for (var y = 0; y < g.length; y++) {
                  var A = g[y]
                  for (ee = A; ee !== null; ) {
                    var F = ee
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        li(8, F, o)
                    }
                    var H = F.child
                    if (H !== null) (H.return = F), (ee = H)
                    else
                      for (; ee !== null; ) {
                        F = ee
                        var z = F.sibling,
                          X = F.return
                        if ((Uu(F), F === A)) {
                          ee = null
                          break
                        }
                        if (z !== null) {
                          ;(z.return = X), (ee = z)
                          break
                        }
                        ee = X
                      }
                  }
                }
                var te = o.alternate
                if (te !== null) {
                  var re = te.child
                  if (re !== null) {
                    te.child = null
                    do {
                      var be = re.sibling
                      ;(re.sibling = null), (re = be)
                    } while (re !== null)
                  }
                }
                ee = o
              }
            }
            if (o.subtreeFlags & 2064 && c !== null) (c.return = o), (ee = c)
            else
              e: for (; ee !== null; ) {
                if (((o = ee), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      li(9, o, o.return)
                  }
                var x = o.sibling
                if (x !== null) {
                  ;(x.return = o.return), (ee = x)
                  break e
                }
                ee = o.return
              }
          }
          var S = e.current
          for (ee = S; ee !== null; ) {
            c = ee
            var L = c.child
            if (c.subtreeFlags & 2064 && L !== null) (L.return = c), (ee = L)
            else
              e: for (c = S; ee !== null; ) {
                if (((g = ee), g.flags & 2048))
                  try {
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        po(9, g)
                    }
                  } catch (ie) {
                    Ue(g, g.return, ie)
                  }
                if (g === c) {
                  ee = null
                  break e
                }
                var W = g.sibling
                if (W !== null) {
                  ;(W.return = g.return), (ee = W)
                  break e
                }
                ee = g.return
              }
          }
          if (((_e = i), _n(), jt && typeof jt.onPostCommitFiberRoot == 'function'))
            try {
              jt.onPostCommitFiberRoot(Ti, e)
            } catch {}
          r = !0
        }
        return r
      } finally {
        ;(Te = n), (Rt.transition = t)
      }
    }
    return !1
  }
  function nc(e, t, n) {
    ;(t = yr(n, t)), (t = Cu(e, t, 1)), (e = Sn(e, t, 1)), (t = at()), e !== null && (Mr(e, 1, t), pt(e, t))
  }
  function Ue(e, t, n) {
    if (e.tag === 3) nc(e, e, n)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          nc(t, e, n)
          break
        } else if (t.tag === 1) {
          var r = t.stateNode
          if (typeof t.type.getDerivedStateFromError == 'function' || (typeof r.componentDidCatch == 'function' && (wn === null || !wn.has(r)))) {
            ;(e = yr(n, e)), (e = Su(t, e, 1)), (t = Sn(t, e, 1)), (e = at()), t !== null && (Mr(t, 1, e), pt(t, e))
            break
          }
        }
        t = t.return
      }
  }
  function kf(e, t, n) {
    var r = e.pingCache
    r !== null && r.delete(t), (t = at()), (e.pingedLanes |= e.suspendedLanes & n), Je === e && (qe & n) === n && (Be === 4 || (Be === 3 && (qe & 130023424) === qe && 500 > Ge() - is) ? Bn(e, 0) : (rs |= n)), pt(e, t)
  }
  function rc(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Ri), (Ri <<= 1), !(Ri & 130023424) && (Ri = 4194304)) : (t = 1))
    var n = at()
    ;(e = Yt(e, t)), e !== null && (Mr(e, t, n), pt(e, n))
  }
  function wf(e) {
    var t = e.memoizedState,
      n = 0
    t !== null && (n = t.retryLane), rc(e, n)
  }
  function Ef(e, t) {
    var n = 0
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState
        i !== null && (n = i.retryLane)
        break
      case 19:
        r = e.stateNode
        break
      default:
        throw Error(a(314))
    }
    r !== null && r.delete(t), rc(e, n)
  }
  var ic
  ic = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ut.current) dt = !0
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (dt = !1), df(e, t, n)
        dt = !!(e.flags & 131072)
      }
    else (dt = !1), De && t.flags & 1048576 && jl(t, Qi, t.index)
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type
        co(e, t), (e = t.pendingProps)
        var i = cr(t, et.current)
        gr(t, n), (i = Ma(null, t, r, e, i, n))
        var o = za()
        return (t.flags |= 1), typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0 ? ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ct(r) ? ((o = !0), Vi(t)) : (o = !1), (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null), xa(t), (i.updater = lo), (t.stateNode = i), (i._reactInternals = t), ba(t, r, e, n), (t = Va(null, t, r, !0, o, n))) : ((t.tag = 0), De && o && ya(t), ot(null, t, i, n), (t = t.child)), t
      case 16:
        r = t.elementType
        e: {
          switch ((co(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = Pf(r)), (e = Nt(r, e)), i)) {
            case 0:
              t = Ba(null, t, r, e, n)
              break e
            case 1:
              t = Au(null, t, r, e, n)
              break e
            case 11:
              t = Tu(null, t, r, e, n)
              break e
            case 14:
              t = Pu(null, t, r, Nt(r.type, e), n)
              break e
          }
          throw Error(a(306, r, ''))
        }
        return t
      case 0:
        return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), Ba(e, t, r, i, n)
      case 1:
        return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), Au(e, t, r, i, n)
      case 3:
        e: {
          if ((Iu(t), e === null)) throw Error(a(387))
          ;(r = t.pendingProps), (o = t.memoizedState), (i = o.element), Vl(e, t), to(t, r, null, n)
          var c = t.memoizedState
          if (((r = c.element), o.isDehydrated))
            if (((o = { element: r, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }), (t.updateQueue.baseState = o), (t.memoizedState = o), t.flags & 256)) {
              ;(i = yr(Error(a(423)), t)), (t = Ou(e, t, r, n, i))
              break e
            } else if (r !== i) {
              ;(i = yr(Error(a(424)), t)), (t = Ou(e, t, r, n, i))
              break e
            } else for (_t = gn(t.stateNode.containerInfo.firstChild), yt = t, De = !0, Ot = null, n = Wl(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
          else {
            if ((pr(), r === i)) {
              t = qt(e, t, n)
              break e
            }
            ot(e, t, r, n)
          }
          t = t.child
        }
        return t
      case 5:
        return Ql(t), e === null && Sa(t), (r = t.type), (i = t.pendingProps), (o = e !== null ? e.memoizedProps : null), (c = i.children), fa(r, i) ? (c = null) : o !== null && fa(r, o) && (t.flags |= 32), Lu(e, t), ot(e, t, c, n), t.child
      case 6:
        return e === null && Sa(t), null
      case 13:
        return Nu(e, t, n)
      case 4:
        return La(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = hr(t, null, r, n)) : ot(e, t, r, n), t.child
      case 11:
        return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), Tu(e, t, r, i, n)
      case 7:
        return ot(e, t, t.pendingProps, n), t.child
      case 8:
        return ot(e, t, t.pendingProps.children, n), t.child
      case 12:
        return ot(e, t, t.pendingProps.children, n), t.child
      case 10:
        e: {
          if (((r = t.type._context), (i = t.pendingProps), (o = t.memoizedProps), (c = i.value), xe(qi, r._currentValue), (r._currentValue = c), o !== null))
            if (It(o.value, c)) {
              if (o.children === i.children && !ut.current) {
                t = qt(e, t, n)
                break e
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var g = o.dependencies
                if (g !== null) {
                  c = o.child
                  for (var y = g.firstContext; y !== null; ) {
                    if (y.context === r) {
                      if (o.tag === 1) {
                        ;(y = Xt(-1, n & -n)), (y.tag = 2)
                        var A = o.updateQueue
                        if (A !== null) {
                          A = A.shared
                          var F = A.pending
                          F === null ? (y.next = y) : ((y.next = F.next), (F.next = y)), (A.pending = y)
                        }
                      }
                      ;(o.lanes |= n), (y = o.alternate), y !== null && (y.lanes |= n), Pa(o.return, n, t), (g.lanes |= n)
                      break
                    }
                    y = y.next
                  }
                } else if (o.tag === 10) c = o.type === t.type ? null : o.child
                else if (o.tag === 18) {
                  if (((c = o.return), c === null)) throw Error(a(341))
                  ;(c.lanes |= n), (g = c.alternate), g !== null && (g.lanes |= n), Pa(c, n, t), (c = o.sibling)
                } else c = o.child
                if (c !== null) c.return = o
                else
                  for (c = o; c !== null; ) {
                    if (c === t) {
                      c = null
                      break
                    }
                    if (((o = c.sibling), o !== null)) {
                      ;(o.return = c.return), (c = o)
                      break
                    }
                    c = c.return
                  }
                o = c
              }
          ot(e, t, i.children, n), (t = t.child)
        }
        return t
      case 9:
        return (i = t.type), (r = t.pendingProps.children), gr(t, n), (i = Tt(i)), (r = r(i)), (t.flags |= 1), ot(e, t, r, n), t.child
      case 14:
        return (r = t.type), (i = Nt(r, t.pendingProps)), (i = Nt(r.type, i)), Pu(e, t, r, i, n)
      case 15:
        return Ru(e, t, t.type, t.pendingProps, n)
      case 17:
        return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), co(e, t), (t.tag = 1), ct(r) ? ((e = !0), Vi(t)) : (e = !1), gr(t, n), yu(t, r, i), ba(t, r, i, n), Va(null, t, r, !0, e, n)
      case 19:
        return Mu(e, t, n)
      case 22:
        return xu(e, t, n)
    }
    throw Error(a(156, t.tag))
  }
  function oc(e, t) {
    return Fs(e, t)
  }
  function Tf(e, t, n, r) {
    ;(this.tag = e), (this.key = n), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = r), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null)
  }
  function xt(e, t, n, r) {
    return new Tf(e, t, n, r)
  }
  function fs(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function Pf(e) {
    if (typeof e == 'function') return fs(e) ? 1 : 0
    if (e != null) {
      if (((e = e.$$typeof), e === gt)) return 11
      if (e === lt) return 14
    }
    return 2
  }
  function Rn(e, t) {
    var n = e.alternate
    return n === null ? ((n = xt(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n)) : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)), (n.flags = e.flags & 14680064), (n.childLanes = e.childLanes), (n.lanes = e.lanes), (n.child = e.child), (n.memoizedProps = e.memoizedProps), (n.memoizedState = e.memoizedState), (n.updateQueue = e.updateQueue), (t = e.dependencies), (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), (n.sibling = e.sibling), (n.index = e.index), (n.ref = e.ref), n
  }
  function ko(e, t, n, r, i, o) {
    var c = 2
    if (((r = e), typeof e == 'function')) fs(e) && (c = 1)
    else if (typeof e == 'string') c = 5
    else
      e: switch (e) {
        case Re:
          return Kn(n.children, i, o, t)
        case Me:
          ;(c = 8), (i |= 8)
          break
        case Ae:
          return (e = xt(12, n, t, i | 2)), (e.elementType = Ae), (e.lanes = o), e
        case it:
          return (e = xt(13, n, t, i)), (e.elementType = it), (e.lanes = o), e
        case st:
          return (e = xt(19, n, t, i)), (e.elementType = st), (e.lanes = o), e
        case Ie:
          return wo(n, i, o, t)
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case He:
                c = 10
                break e
              case mt:
                c = 9
                break e
              case gt:
                c = 11
                break e
              case lt:
                c = 14
                break e
              case Ye:
                ;(c = 16), (r = null)
                break e
            }
          throw Error(a(130, e == null ? e : typeof e, ''))
      }
    return (t = xt(c, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  }
  function Kn(e, t, n, r) {
    return (e = xt(7, e, r, t)), (e.lanes = n), e
  }
  function wo(e, t, n, r) {
    return (e = xt(22, e, r, t)), (e.elementType = Ie), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  }
  function ps(e, t, n) {
    return (e = xt(6, e, null, t)), (e.lanes = n), e
  }
  function hs(e, t, n) {
    return (t = xt(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t
  }
  function Rf(e, t, n, r, i) {
    ;(this.tag = t), (this.containerInfo = e), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.pendingContext = this.context = null), (this.callbackPriority = 0), (this.eventTimes = Go(0)), (this.expirationTimes = Go(-1)), (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = Go(0)), (this.identifierPrefix = r), (this.onRecoverableError = i), (this.mutableSourceEagerHydrationData = null)
  }
  function ms(e, t, n, r, i, o, c, g, y) {
    return (e = new Rf(e, t, n, g, y)), t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0), (o = xt(3, null, null, t)), (e.current = o), (o.stateNode = e), (o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }), xa(o), e
  }
  function xf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return { $$typeof: Le, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n }
  }
  function ac(e) {
    if (!e) return yn
    e = e._reactInternals
    e: {
      if (pe(e) !== e || e.tag !== 1) throw Error(a(170))
      var t = e
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context
            break e
          case 1:
            if (ct(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext
              break e
            }
        }
        t = t.return
      } while (t !== null)
      throw Error(a(171))
    }
    if (e.tag === 1) {
      var n = e.type
      if (ct(n)) return Dl(e, n, t)
    }
    return t
  }
  function sc(e, t, n, r, i, o, c, g, y) {
    return (e = ms(n, r, !0, e, i, o, c, g, y)), (e.context = ac(null)), (n = e.current), (r = at()), (i = Tn(n)), (o = Xt(r, i)), (o.callback = t ?? null), Sn(n, o, i), (e.current.lanes = i), Mr(e, i, r), pt(e, r), e
  }
  function Eo(e, t, n, r) {
    var i = t.current,
      o = at(),
      c = Tn(i)
    return (n = ac(n)), t.context === null ? (t.context = n) : (t.pendingContext = n), (t = Xt(o, c)), (t.payload = { element: e }), (r = r === void 0 ? null : r), r !== null && (t.callback = r), (e = Sn(i, t, c)), e !== null && (zt(e, i, c, o), eo(e, i, c)), c
  }
  function To(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode
      default:
        return e.child.stateNode
    }
  }
  function lc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane
      e.retryLane = n !== 0 && n < t ? n : t
    }
  }
  function gs(e, t) {
    lc(e, t), (e = e.alternate) && lc(e, t)
  }
  var uc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e)
        }
  function vs(e) {
    this._internalRoot = e
  }
  ;(Po.prototype.render = vs.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(a(409))
      Eo(e, t, null, null)
    }),
    (Po.prototype.unmount = vs.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          Wn(function () {
            Eo(null, e, null, null)
          }),
            (t[Vt] = null)
        }
      })
  function Po(e) {
    this._internalRoot = e
  }
  Po.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vs()
      e = { blockedOn: null, target: e, priority: t }
      for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
      pn.splice(n, 0, e), n === 0 && Qs(e)
    }
  }
  function ys(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function Ro(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable ')))
  }
  function cc() {}
  function Lf(e, t, n, r, i) {
    if (i) {
      if (typeof r == 'function') {
        var o = r
        r = function () {
          var A = To(c)
          o.call(A)
        }
      }
      var c = sc(t, r, e, 0, null, !1, !1, '', cc)
      return (e._reactRootContainer = c), (e[Vt] = c.current), Qr(e.nodeType === 8 ? e.parentNode : e), Wn(), c
    }
    for (; (i = e.lastChild); ) e.removeChild(i)
    if (typeof r == 'function') {
      var g = r
      r = function () {
        var A = To(y)
        g.call(A)
      }
    }
    var y = ms(e, 0, !1, null, null, !1, !1, '', cc)
    return (
      (e._reactRootContainer = y),
      (e[Vt] = y.current),
      Qr(e.nodeType === 8 ? e.parentNode : e),
      Wn(function () {
        Eo(t, y, n, r)
      }),
      y
    )
  }
  function xo(e, t, n, r, i) {
    var o = n._reactRootContainer
    if (o) {
      var c = o
      if (typeof i == 'function') {
        var g = i
        i = function () {
          var y = To(c)
          g.call(y)
        }
      }
      Eo(t, c, e, i)
    } else c = Lf(n, t, e, i, r)
    return To(c)
  }
  ;(Ws = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode
        if (t.current.memoizedState.isDehydrated) {
          var n = Dr(t.pendingLanes)
          n !== 0 && (bo(t, n | 1), pt(t, Ge()), !(_e & 6) && ((Sr = Ge() + 500), _n()))
        }
        break
      case 13:
        Wn(function () {
          var r = Yt(e, 1)
          if (r !== null) {
            var i = at()
            zt(r, e, 1, i)
          }
        }),
          gs(e, 1)
    }
  }),
    ($o = function (e) {
      if (e.tag === 13) {
        var t = Yt(e, 134217728)
        if (t !== null) {
          var n = at()
          zt(t, e, 134217728, n)
        }
        gs(e, 134217728)
      }
    }),
    (Bs = function (e) {
      if (e.tag === 13) {
        var t = Tn(e),
          n = Yt(e, t)
        if (n !== null) {
          var r = at()
          zt(n, e, t, r)
        }
        gs(e, t)
      }
    }),
    (Vs = function () {
      return Te
    }),
    (Ks = function (e, t) {
      var n = Te
      try {
        return (Te = e), t()
      } finally {
        Te = n
      }
    }),
    (qn = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((rn(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode
            for (n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
              var r = n[t]
              if (r !== e && r.form === e.form) {
                var i = Wi(r)
                if (!i) throw Error(a(90))
                Tr(r), rn(r, i)
              }
            }
          }
          break
        case 'textarea':
          ke(e, n)
          break
        case 'select':
          ;(t = n.value), t != null && Lt(e, !!n.multiple, t, !1)
      }
    }),
    (Zn = us),
    (Nr = Wn)
  var Af = { usingClientEntryPoint: !1, Events: [qr, lr, Wi, Ir, Or, us] },
    fi = { findFiberByHostInstance: zn, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    If = {
      bundleType: fi.bundleType,
      version: fi.version,
      rendererPackageName: fi.rendererPackageName,
      rendererConfig: fi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: me.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = zs(e)), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: fi.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Lo.isDisabled && Lo.supportsFiber)
      try {
        ;(Ti = Lo.inject(If)), (jt = Lo)
      } catch {}
  }
  return (
    (ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af),
    (ht.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!ys(t)) throw Error(a(200))
      return xf(e, t, null, n)
    }),
    (ht.createRoot = function (e, t) {
      if (!ys(e)) throw Error(a(299))
      var n = !1,
        r = '',
        i = uc
      return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), (t = ms(e, 1, !1, null, null, n, !1, r, i)), (e[Vt] = t.current), Qr(e.nodeType === 8 ? e.parentNode : e), new vs(t)
    }),
    (ht.findDOMNode = function (e) {
      if (e == null) return null
      if (e.nodeType === 1) return e
      var t = e._reactInternals
      if (t === void 0) throw typeof e.render == 'function' ? Error(a(188)) : ((e = Object.keys(e).join(',')), Error(a(268, e)))
      return (e = zs(t)), (e = e === null ? null : e.stateNode), e
    }),
    (ht.flushSync = function (e) {
      return Wn(e)
    }),
    (ht.hydrate = function (e, t, n) {
      if (!Ro(t)) throw Error(a(200))
      return xo(null, e, t, !0, n)
    }),
    (ht.hydrateRoot = function (e, t, n) {
      if (!ys(e)) throw Error(a(405))
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = '',
        c = uc
      if ((n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), (t = sc(t, null, e, 1, n ?? null, i, !1, o, c)), (e[Vt] = t.current), Qr(e), r)) for (e = 0; e < r.length; e++) (n = r[e]), (i = n._getVersion), (i = i(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, i]) : t.mutableSourceEagerHydrationData.push(n, i)
      return new Po(t)
    }),
    (ht.render = function (e, t, n) {
      if (!Ro(t)) throw Error(a(200))
      return xo(null, e, t, !1, n)
    }),
    (ht.unmountComponentAtNode = function (e) {
      if (!Ro(e)) throw Error(a(40))
      return e._reactRootContainer
        ? (Wn(function () {
            xo(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[Vt] = null)
            })
          }),
          !0)
        : !1
    }),
    (ht.unstable_batchedUpdates = us),
    (ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ro(n)) throw Error(a(200))
      if (e == null || e._reactInternals === void 0) throw Error(a(38))
      return xo(e, t, n, !1, r)
    }),
    (ht.version = '18.3.1-next-f1338f8080-20240426'),
    ht
  )
}
var yc
function Hf() {
  if (yc) return Ss.exports
  yc = 1
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
      } catch (d) {
        console.error(d)
      }
  }
  return l(), (Ss.exports = Ff()), Ss.exports
}
var _c
function Uf() {
  if (_c) return Ao
  _c = 1
  var l = Hf()
  return (Ao.createRoot = l.createRoot), (Ao.hydrateRoot = l.hydrateRoot), Ao
}
var Gf = Uf(),
  N = Ls(),
  hi = {},
  Cc
function bf() {
  if (Cc) return hi
  ;(Cc = 1), Object.defineProperty(hi, '__esModule', { value: !0 }), (hi.parse = C), (hi.serialize = R)
  const l = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    d = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    u = /^[\u0020-\u003A\u003D-\u007E]*$/,
    h = Object.prototype.toString,
    v = (() => {
      const O = function () {}
      return (O.prototype = Object.create(null)), O
    })()
  function C(O, V) {
    const G = new v(),
      J = O.length
    if (J < 2) return G
    const B = (V == null ? void 0 : V.decode) || U
    let K = 0
    do {
      const q = O.indexOf('=', K)
      if (q === -1) break
      const ce = O.indexOf(';', K),
        me = ce === -1 ? J : ce
      if (q > me) {
        K = O.lastIndexOf(';', q - 1) + 1
        continue
      }
      const we = T(O, K, q),
        Le = w(O, q, we),
        Re = O.slice(we, Le)
      if (G[Re] === void 0) {
        let Me = T(O, q + 1, me),
          Ae = w(O, me, Me)
        const He = B(O.slice(Me, Ae))
        G[Re] = He
      }
      K = me + 1
    } while (K < J)
    return G
  }
  function T(O, V, G) {
    do {
      const J = O.charCodeAt(V)
      if (J !== 32 && J !== 9) return V
    } while (++V < G)
    return G
  }
  function w(O, V, G) {
    for (; V > G; ) {
      const J = O.charCodeAt(--V)
      if (J !== 32 && J !== 9) return V + 1
    }
    return G
  }
  function R(O, V, G) {
    const J = (G == null ? void 0 : G.encode) || encodeURIComponent
    if (!l.test(O)) throw new TypeError(`argument name is invalid: ${O}`)
    const B = J(V)
    if (!d.test(B)) throw new TypeError(`argument val is invalid: ${V}`)
    let K = O + '=' + B
    if (!G) return K
    if (G.maxAge !== void 0) {
      if (!Number.isInteger(G.maxAge)) throw new TypeError(`option maxAge is invalid: ${G.maxAge}`)
      K += '; Max-Age=' + G.maxAge
    }
    if (G.domain) {
      if (!a.test(G.domain)) throw new TypeError(`option domain is invalid: ${G.domain}`)
      K += '; Domain=' + G.domain
    }
    if (G.path) {
      if (!u.test(G.path)) throw new TypeError(`option path is invalid: ${G.path}`)
      K += '; Path=' + G.path
    }
    if (G.expires) {
      if (!b(G.expires) || !Number.isFinite(G.expires.valueOf())) throw new TypeError(`option expires is invalid: ${G.expires}`)
      K += '; Expires=' + G.expires.toUTCString()
    }
    if ((G.httpOnly && (K += '; HttpOnly'), G.secure && (K += '; Secure'), G.partitioned && (K += '; Partitioned'), G.priority))
      switch (typeof G.priority == 'string' ? G.priority.toLowerCase() : void 0) {
        case 'low':
          K += '; Priority=Low'
          break
        case 'medium':
          K += '; Priority=Medium'
          break
        case 'high':
          K += '; Priority=High'
          break
        default:
          throw new TypeError(`option priority is invalid: ${G.priority}`)
      }
    if (G.sameSite)
      switch (typeof G.sameSite == 'string' ? G.sameSite.toLowerCase() : G.sameSite) {
        case !0:
        case 'strict':
          K += '; SameSite=Strict'
          break
        case 'lax':
          K += '; SameSite=Lax'
          break
        case 'none':
          K += '; SameSite=None'
          break
        default:
          throw new TypeError(`option sameSite is invalid: ${G.sameSite}`)
      }
    return K
  }
  function U(O) {
    if (O.indexOf('%') === -1) return O
    try {
      return decodeURIComponent(O)
    } catch {
      return O
    }
  }
  function b(O) {
    return h.call(O) === '[object Date]'
  }
  return hi
}
bf()
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Sc = 'popstate'
function $f(l = {}) {
  function d(u, h) {
    let { pathname: v, search: C, hash: T } = u.location
    return Ps('', { pathname: v, search: C, hash: T }, (h.state && h.state.usr) || null, (h.state && h.state.key) || 'default')
  }
  function a(u, h) {
    return typeof h == 'string' ? h : gi(h)
  }
  return Bf(d, a, null, l)
}
function Fe(l, d) {
  if (l === !1 || l === null || typeof l > 'u') throw new Error(d)
}
function bt(l, d) {
  if (!l) {
    typeof console < 'u' && console.warn(d)
    try {
      throw new Error(d)
    } catch {}
  }
}
function Wf() {
  return Math.random().toString(36).substring(2, 10)
}
function kc(l, d) {
  return { usr: l.state, key: l.key, idx: d }
}
function Ps(l, d, a = null, u) {
  return { pathname: typeof l == 'string' ? l : l.pathname, search: '', hash: '', ...(typeof d == 'string' ? wr(d) : d), state: a, key: (d && d.key) || u || Wf() }
}
function gi({ pathname: l = '/', search: d = '', hash: a = '' }) {
  return d && d !== '?' && (l += d.charAt(0) === '?' ? d : '?' + d), a && a !== '#' && (l += a.charAt(0) === '#' ? a : '#' + a), l
}
function wr(l) {
  let d = {}
  if (l) {
    let a = l.indexOf('#')
    a >= 0 && ((d.hash = l.substring(a)), (l = l.substring(0, a)))
    let u = l.indexOf('?')
    u >= 0 && ((d.search = l.substring(u)), (l = l.substring(0, u))), l && (d.pathname = l)
  }
  return d
}
function Bf(l, d, a, u = {}) {
  let { window: h = document.defaultView, v5Compat: v = !1 } = u,
    C = h.history,
    T = 'POP',
    w = null,
    R = U()
  R == null && ((R = 0), C.replaceState({ ...C.state, idx: R }, ''))
  function U() {
    return (C.state || { idx: null }).idx
  }
  function b() {
    T = 'POP'
    let B = U(),
      K = B == null ? null : B - R
    ;(R = B), w && w({ action: T, location: J.location, delta: K })
  }
  function O(B, K) {
    T = 'PUSH'
    let q = Ps(J.location, B, K)
    R = U() + 1
    let ce = kc(q, R),
      me = J.createHref(q)
    try {
      C.pushState(ce, '', me)
    } catch (we) {
      if (we instanceof DOMException && we.name === 'DataCloneError') throw we
      h.location.assign(me)
    }
    v && w && w({ action: T, location: J.location, delta: 1 })
  }
  function V(B, K) {
    T = 'REPLACE'
    let q = Ps(J.location, B, K)
    R = U()
    let ce = kc(q, R),
      me = J.createHref(q)
    C.replaceState(ce, '', me), v && w && w({ action: T, location: J.location, delta: 0 })
  }
  function G(B) {
    let K = h.location.origin !== 'null' ? h.location.origin : h.location.href,
      q = typeof B == 'string' ? B : gi(B)
    return (q = q.replace(/ $/, '%20')), Fe(K, `No window.location.(origin|href) available to create URL for href: ${q}`), new URL(q, K)
  }
  let J = {
    get action() {
      return T
    },
    get location() {
      return l(h, C)
    },
    listen(B) {
      if (w) throw new Error('A history only accepts one active listener')
      return (
        h.addEventListener(Sc, b),
        (w = B),
        () => {
          h.removeEventListener(Sc, b), (w = null)
        }
      )
    },
    createHref(B) {
      return d(h, B)
    },
    createURL: G,
    encodeLocation(B) {
      let K = G(B)
      return { pathname: K.pathname, search: K.search, hash: K.hash }
    },
    push: O,
    replace: V,
    go(B) {
      return C.go(B)
    },
  }
  return J
}
function Rc(l, d, a = '/') {
  return Vf(l, d, a, !1)
}
function Vf(l, d, a, u) {
  let h = typeof d == 'string' ? wr(d) : d,
    v = Ln(h.pathname || '/', a)
  if (v == null) return null
  let C = xc(l)
  Kf(C)
  let T = null
  for (let w = 0; T == null && w < C.length; ++w) {
    let R = ip(v)
    T = np(C[w], R, u)
  }
  return T
}
function xc(l, d = [], a = [], u = '') {
  let h = (v, C, T) => {
    let w = { relativePath: T === void 0 ? v.path || '' : T, caseSensitive: v.caseSensitive === !0, childrenIndex: C, route: v }
    w.relativePath.startsWith('/') && (Fe(w.relativePath.startsWith(u), `Absolute route path "${w.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), (w.relativePath = w.relativePath.slice(u.length)))
    let R = tn([u, w.relativePath]),
      U = a.concat(w)
    v.children && v.children.length > 0 && (Fe(v.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${R}".`), xc(v.children, d, U, R)), !(v.path == null && !v.index) && d.push({ path: R, score: ep(R, v.index), routesMeta: U })
  }
  return (
    l.forEach((v, C) => {
      var T
      if (v.path === '' || !((T = v.path) != null && T.includes('?'))) h(v, C)
      else for (let w of Lc(v.path)) h(v, C, w)
    }),
    d
  )
}
function Lc(l) {
  let d = l.split('/')
  if (d.length === 0) return []
  let [a, ...u] = d,
    h = a.endsWith('?'),
    v = a.replace(/\?$/, '')
  if (u.length === 0) return h ? [v, ''] : [v]
  let C = Lc(u.join('/')),
    T = []
  return T.push(...C.map((w) => (w === '' ? v : [v, w].join('/')))), h && T.push(...C), T.map((w) => (l.startsWith('/') && w === '' ? '/' : w))
}
function Kf(l) {
  l.sort((d, a) =>
    d.score !== a.score
      ? a.score - d.score
      : tp(
          d.routesMeta.map((u) => u.childrenIndex),
          a.routesMeta.map((u) => u.childrenIndex),
        ),
  )
}
var Jf = /^:[\w-]+$/,
  Qf = 3,
  Yf = 2,
  Xf = 1,
  qf = 10,
  Zf = -2,
  wc = (l) => l === '*'
function ep(l, d) {
  let a = l.split('/'),
    u = a.length
  return a.some(wc) && (u += Zf), d && (u += Yf), a.filter((h) => !wc(h)).reduce((h, v) => h + (Jf.test(v) ? Qf : v === '' ? Xf : qf), u)
}
function tp(l, d) {
  return l.length === d.length && l.slice(0, -1).every((u, h) => u === d[h]) ? l[l.length - 1] - d[d.length - 1] : 0
}
function np(l, d, a = !1) {
  let { routesMeta: u } = l,
    h = {},
    v = '/',
    C = []
  for (let T = 0; T < u.length; ++T) {
    let w = u[T],
      R = T === u.length - 1,
      U = v === '/' ? d : d.slice(v.length) || '/',
      b = Do({ path: w.relativePath, caseSensitive: w.caseSensitive, end: R }, U),
      O = w.route
    if ((!b && R && a && !u[u.length - 1].route.index && (b = Do({ path: w.relativePath, caseSensitive: w.caseSensitive, end: !1 }, U)), !b)) return null
    Object.assign(h, b.params), C.push({ params: h, pathname: tn([v, b.pathname]), pathnameBase: lp(tn([v, b.pathnameBase])), route: O }), b.pathnameBase !== '/' && (v = tn([v, b.pathnameBase]))
  }
  return C
}
function Do(l, d) {
  typeof l == 'string' && (l = { path: l, caseSensitive: !1, end: !0 })
  let [a, u] = rp(l.path, l.caseSensitive, l.end),
    h = d.match(a)
  if (!h) return null
  let v = h[0],
    C = v.replace(/(.)\/+$/, '$1'),
    T = h.slice(1)
  return {
    params: u.reduce((R, { paramName: U, isOptional: b }, O) => {
      if (U === '*') {
        let G = T[O] || ''
        C = v.slice(0, v.length - G.length).replace(/(.)\/+$/, '$1')
      }
      const V = T[O]
      return b && !V ? (R[U] = void 0) : (R[U] = (V || '').replace(/%2F/g, '/')), R
    }, {}),
    pathname: v,
    pathnameBase: C,
    pattern: l,
  }
}
function rp(l, d = !1, a = !0) {
  bt(l === '*' || !l.endsWith('*') || l.endsWith('/*'), `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, '/*')}".`)
  let u = [],
    h =
      '^' +
      l
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (C, T, w) => (u.push({ paramName: T, isOptional: w != null }), w ? '/?([^\\/]+)?' : '/([^\\/]+)'))
  return l.endsWith('*') ? (u.push({ paramName: '*' }), (h += l === '*' || l === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$')) : a ? (h += '\\/*$') : l !== '' && l !== '/' && (h += '(?:(?=\\/|$))'), [new RegExp(h, d ? void 0 : 'i'), u]
}
function ip(l) {
  try {
    return l
      .split('/')
      .map((d) => decodeURIComponent(d).replace(/\//g, '%2F'))
      .join('/')
  } catch (d) {
    return bt(!1, `The URL path "${l}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`), l
  }
}
function Ln(l, d) {
  if (d === '/') return l
  if (!l.toLowerCase().startsWith(d.toLowerCase())) return null
  let a = d.endsWith('/') ? d.length - 1 : d.length,
    u = l.charAt(a)
  return u && u !== '/' ? null : l.slice(a) || '/'
}
function op(l, d = '/') {
  let { pathname: a, search: u = '', hash: h = '' } = typeof l == 'string' ? wr(l) : l
  return { pathname: a ? (a.startsWith('/') ? a : ap(a, d)) : d, search: up(u), hash: cp(h) }
}
function ap(l, d) {
  let a = d.replace(/\/+$/, '').split('/')
  return (
    l.split('/').forEach((h) => {
      h === '..' ? a.length > 1 && a.pop() : h !== '.' && a.push(h)
    }),
    a.length > 1 ? a.join('/') : '/'
  )
}
function Es(l, d, a, u) {
  return `Cannot include a '${l}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function sp(l) {
  return l.filter((d, a) => a === 0 || (d.route.path && d.route.path.length > 0))
}
function Ac(l) {
  let d = sp(l)
  return d.map((a, u) => (u === d.length - 1 ? a.pathname : a.pathnameBase))
}
function Ic(l, d, a, u = !1) {
  let h
  typeof l == 'string' ? (h = wr(l)) : ((h = { ...l }), Fe(!h.pathname || !h.pathname.includes('?'), Es('?', 'pathname', 'search', h)), Fe(!h.pathname || !h.pathname.includes('#'), Es('#', 'pathname', 'hash', h)), Fe(!h.search || !h.search.includes('#'), Es('#', 'search', 'hash', h)))
  let v = l === '' || h.pathname === '',
    C = v ? '/' : h.pathname,
    T
  if (C == null) T = a
  else {
    let b = d.length - 1
    if (!u && C.startsWith('..')) {
      let O = C.split('/')
      for (; O[0] === '..'; ) O.shift(), (b -= 1)
      h.pathname = O.join('/')
    }
    T = b >= 0 ? d[b] : '/'
  }
  let w = op(h, T),
    R = C && C !== '/' && C.endsWith('/'),
    U = (v || C === '.') && a.endsWith('/')
  return !w.pathname.endsWith('/') && (R || U) && (w.pathname += '/'), w
}
var tn = (l) => l.join('/').replace(/\/\/+/g, '/'),
  lp = (l) => l.replace(/\/+$/, '').replace(/^\/*/, '/'),
  up = (l) => (!l || l === '?' ? '' : l.startsWith('?') ? l : '?' + l),
  cp = (l) => (!l || l === '#' ? '' : l.startsWith('#') ? l : '#' + l)
function dp(l) {
  return l != null && typeof l.status == 'number' && typeof l.statusText == 'string' && typeof l.internal == 'boolean' && 'data' in l
}
var Oc = ['POST', 'PUT', 'PATCH', 'DELETE']
new Set(Oc)
var fp = ['GET', ...Oc]
new Set(fp)
var Er = N.createContext(null)
Er.displayName = 'DataRouter'
var Mo = N.createContext(null)
Mo.displayName = 'DataRouterState'
var Nc = N.createContext({ isTransitioning: !1 })
Nc.displayName = 'ViewTransition'
var pp = N.createContext(new Map())
pp.displayName = 'Fetchers'
var hp = N.createContext(null)
hp.displayName = 'Await'
var $t = N.createContext(null)
$t.displayName = 'Navigation'
var vi = N.createContext(null)
vi.displayName = 'Location'
var nn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 })
nn.displayName = 'Route'
var As = N.createContext(null)
As.displayName = 'RouteError'
function mp(l, { relative: d } = {}) {
  Fe(yi(), 'useHref() may be used only in the context of a <Router> component.')
  let { basename: a, navigator: u } = N.useContext($t),
    { hash: h, pathname: v, search: C } = _i(l, { relative: d }),
    T = v
  return a !== '/' && (T = v === '/' ? a : tn([a, v])), u.createHref({ pathname: T, search: C, hash: h })
}
function yi() {
  return N.useContext(vi) != null
}
function Jn() {
  return Fe(yi(), 'useLocation() may be used only in the context of a <Router> component.'), N.useContext(vi).location
}
var Dc = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function Mc(l) {
  N.useContext($t).static || N.useLayoutEffect(l)
}
function gp() {
  let { isDataRoute: l } = N.useContext(nn)
  return l ? Lp() : vp()
}
function vp() {
  Fe(yi(), 'useNavigate() may be used only in the context of a <Router> component.')
  let l = N.useContext(Er),
    { basename: d, navigator: a } = N.useContext($t),
    { matches: u } = N.useContext(nn),
    { pathname: h } = Jn(),
    v = JSON.stringify(Ac(u)),
    C = N.useRef(!1)
  return (
    Mc(() => {
      C.current = !0
    }),
    N.useCallback(
      (w, R = {}) => {
        if ((bt(C.current, Dc), !C.current)) return
        if (typeof w == 'number') {
          a.go(w)
          return
        }
        let U = Ic(w, JSON.parse(v), h, R.relative === 'path')
        l == null && d !== '/' && (U.pathname = U.pathname === '/' ? d : tn([d, U.pathname])), (R.replace ? a.replace : a.push)(U, R.state, R)
      },
      [d, a, v, h, l],
    )
  )
}
N.createContext(null)
function _i(l, { relative: d } = {}) {
  let { matches: a } = N.useContext(nn),
    { pathname: u } = Jn(),
    h = JSON.stringify(Ac(a))
  return N.useMemo(() => Ic(l, JSON.parse(h), u, d === 'path'), [l, h, u, d])
}
function yp(l, d) {
  return zc(l, d)
}
function zc(l, d, a, u) {
  var K
  Fe(yi(), 'useRoutes() may be used only in the context of a <Router> component.')
  let { navigator: h } = N.useContext($t),
    { matches: v } = N.useContext(nn),
    C = v[v.length - 1],
    T = C ? C.params : {},
    w = C ? C.pathname : '/',
    R = C ? C.pathnameBase : '/',
    U = C && C.route
  {
    let q = (U && U.path) || ''
    jc(
      w,
      !U || q.endsWith('*') || q.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q === '/' ? '*' : `${q}/*`}">.`,
    )
  }
  let b = Jn(),
    O
  if (d) {
    let q = typeof d == 'string' ? wr(d) : d
    Fe(R === '/' || ((K = q.pathname) == null ? void 0 : K.startsWith(R)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${q.pathname}" was given in the \`location\` prop.`), (O = q)
  } else O = b
  let V = O.pathname || '/',
    G = V
  if (R !== '/') {
    let q = R.replace(/^\//, '').split('/')
    G = '/' + V.replace(/^\//, '').split('/').slice(q.length).join('/')
  }
  let J = Rc(l, { pathname: G })
  bt(U || J != null, `No routes matched location "${O.pathname}${O.search}${O.hash}" `), bt(J == null || J[J.length - 1].route.element !== void 0 || J[J.length - 1].route.Component !== void 0 || J[J.length - 1].route.lazy !== void 0, `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`)
  let B = wp(J && J.map((q) => Object.assign({}, q, { params: Object.assign({}, T, q.params), pathname: tn([R, h.encodeLocation ? h.encodeLocation(q.pathname).pathname : q.pathname]), pathnameBase: q.pathnameBase === '/' ? R : tn([R, h.encodeLocation ? h.encodeLocation(q.pathnameBase).pathname : q.pathnameBase]) })), v, a, u)
  return d && B ? N.createElement(vi.Provider, { value: { location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...O }, navigationType: 'POP' } }, B) : B
}
function _p() {
  let l = xp(),
    d = dp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l),
    a = l instanceof Error ? l.stack : null,
    u = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: u },
    v = { padding: '2px 4px', backgroundColor: u },
    C = null
  return console.error('Error handled by React Router default ErrorBoundary:', l), (C = N.createElement(N.Fragment, null, N.createElement('p', null, '💿 Hey developer 👋'), N.createElement('p', null, 'You can provide a way better UX than this when your app throws errors by providing your own ', N.createElement('code', { style: v }, 'ErrorBoundary'), ' or', ' ', N.createElement('code', { style: v }, 'errorElement'), ' prop on your route.'))), N.createElement(N.Fragment, null, N.createElement('h2', null, 'Unexpected Application Error!'), N.createElement('h3', { style: { fontStyle: 'italic' } }, d), a ? N.createElement('pre', { style: h }, a) : null, C)
}
var Cp = N.createElement(_p, null),
  Sp = class extends N.Component {
    constructor(l) {
      super(l), (this.state = { location: l.location, revalidation: l.revalidation, error: l.error })
    }
    static getDerivedStateFromError(l) {
      return { error: l }
    }
    static getDerivedStateFromProps(l, d) {
      return d.location !== l.location || (d.revalidation !== 'idle' && l.revalidation === 'idle') ? { error: l.error, location: l.location, revalidation: l.revalidation } : { error: l.error !== void 0 ? l.error : d.error, location: d.location, revalidation: l.revalidation || d.revalidation }
    }
    componentDidCatch(l, d) {
      console.error('React Router caught the following error during render', l, d)
    }
    render() {
      return this.state.error !== void 0 ? N.createElement(nn.Provider, { value: this.props.routeContext }, N.createElement(As.Provider, { value: this.state.error, children: this.props.component })) : this.props.children
    }
  }
function kp({ routeContext: l, match: d, children: a }) {
  let u = N.useContext(Er)
  return u && u.static && u.staticContext && (d.route.errorElement || d.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = d.route.id), N.createElement(nn.Provider, { value: l }, a)
}
function wp(l, d = [], a = null, u = null) {
  if (l == null) {
    if (!a) return null
    if (a.errors) l = a.matches
    else if (d.length === 0 && !a.initialized && a.matches.length > 0) l = a.matches
    else return null
  }
  let h = l,
    v = a == null ? void 0 : a.errors
  if (v != null) {
    let w = h.findIndex((R) => R.route.id && (v == null ? void 0 : v[R.route.id]) !== void 0)
    Fe(w >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(v).join(',')}`), (h = h.slice(0, Math.min(h.length, w + 1)))
  }
  let C = !1,
    T = -1
  if (a)
    for (let w = 0; w < h.length; w++) {
      let R = h[w]
      if (((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (T = w), R.route.id)) {
        let { loaderData: U, errors: b } = a,
          O = R.route.loader && !U.hasOwnProperty(R.route.id) && (!b || b[R.route.id] === void 0)
        if (R.route.lazy || O) {
          ;(C = !0), T >= 0 ? (h = h.slice(0, T + 1)) : (h = [h[0]])
          break
        }
      }
    }
  return h.reduceRight((w, R, U) => {
    let b,
      O = !1,
      V = null,
      G = null
    a && ((b = v && R.route.id ? v[R.route.id] : void 0), (V = R.route.errorElement || Cp), C && (T < 0 && U === 0 ? (jc('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'), (O = !0), (G = null)) : T === U && ((O = !0), (G = R.route.hydrateFallbackElement || null))))
    let J = d.concat(h.slice(0, U + 1)),
      B = () => {
        let K
        return b ? (K = V) : O ? (K = G) : R.route.Component ? (K = N.createElement(R.route.Component, null)) : R.route.element ? (K = R.route.element) : (K = w), N.createElement(kp, { match: R, routeContext: { outlet: w, matches: J, isDataRoute: a != null }, children: K })
      }
    return a && (R.route.ErrorBoundary || R.route.errorElement || U === 0) ? N.createElement(Sp, { location: a.location, revalidation: a.revalidation, component: V, error: b, children: B(), routeContext: { outlet: null, matches: J, isDataRoute: !0 } }) : B()
  }, null)
}
function Is(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Ep(l) {
  let d = N.useContext(Er)
  return Fe(d, Is(l)), d
}
function Tp(l) {
  let d = N.useContext(Mo)
  return Fe(d, Is(l)), d
}
function Pp(l) {
  let d = N.useContext(nn)
  return Fe(d, Is(l)), d
}
function Os(l) {
  let d = Pp(l),
    a = d.matches[d.matches.length - 1]
  return Fe(a.route.id, `${l} can only be used on routes that contain a unique "id"`), a.route.id
}
function Rp() {
  return Os('useRouteId')
}
function xp() {
  var u
  let l = N.useContext(As),
    d = Tp('useRouteError'),
    a = Os('useRouteError')
  return l !== void 0 ? l : (u = d.errors) == null ? void 0 : u[a]
}
function Lp() {
  let { router: l } = Ep('useNavigate'),
    d = Os('useNavigate'),
    a = N.useRef(!1)
  return (
    Mc(() => {
      a.current = !0
    }),
    N.useCallback(
      async (h, v = {}) => {
        bt(a.current, Dc), a.current && (typeof h == 'number' ? l.navigate(h) : await l.navigate(h, { fromRouteId: d, ...v }))
      },
      [l, d],
    )
  )
}
var Ec = {}
function jc(l, d, a) {
  !d && !Ec[l] && ((Ec[l] = !0), bt(!1, a))
}
N.memo(Ap)
function Ap({ routes: l, future: d, state: a }) {
  return zc(l, void 0, a, d)
}
function Rs(l) {
  Fe(!1, 'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.')
}
function Ip({ basename: l = '/', children: d = null, location: a, navigationType: u = 'POP', navigator: h, static: v = !1 }) {
  Fe(!yi(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.')
  let C = l.replace(/^\/*/, '/'),
    T = N.useMemo(() => ({ basename: C, navigator: h, static: v, future: {} }), [C, h, v])
  typeof a == 'string' && (a = wr(a))
  let { pathname: w = '/', search: R = '', hash: U = '', state: b = null, key: O = 'default' } = a,
    V = N.useMemo(() => {
      let G = Ln(w, C)
      return G == null ? null : { location: { pathname: G, search: R, hash: U, state: b, key: O }, navigationType: u }
    }, [C, w, R, U, b, O, u])
  return bt(V != null, `<Router basename="${C}"> is not able to match the URL "${w}${R}${U}" because it does not start with the basename, so the <Router> won't render anything.`), V == null ? null : N.createElement($t.Provider, { value: T }, N.createElement(vi.Provider, { children: d, value: V }))
}
function Op({ children: l, location: d }) {
  return yp(xs(l), d)
}
function xs(l, d = []) {
  let a = []
  return (
    N.Children.forEach(l, (u, h) => {
      if (!N.isValidElement(u)) return
      let v = [...d, h]
      if (u.type === N.Fragment) {
        a.push.apply(a, xs(u.props.children, v))
        return
      }
      Fe(u.type === Rs, `[${typeof u.type == 'string' ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Fe(!u.props.index || !u.props.children, 'An index route cannot have child routes.')
      let C = { id: u.props.id || v.join('-'), caseSensitive: u.props.caseSensitive, element: u.props.element, Component: u.props.Component, index: u.props.index, path: u.props.path, loader: u.props.loader, action: u.props.action, hydrateFallbackElement: u.props.hydrateFallbackElement, HydrateFallback: u.props.HydrateFallback, errorElement: u.props.errorElement, ErrorBoundary: u.props.ErrorBoundary, hasErrorBoundary: u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null, shouldRevalidate: u.props.shouldRevalidate, handle: u.props.handle, lazy: u.props.lazy }
      u.props.children && (C.children = xs(u.props.children, v)), a.push(C)
    }),
    a
  )
}
var Oo = 'get',
  No = 'application/x-www-form-urlencoded'
function zo(l) {
  return l != null && typeof l.tagName == 'string'
}
function Np(l) {
  return zo(l) && l.tagName.toLowerCase() === 'button'
}
function Dp(l) {
  return zo(l) && l.tagName.toLowerCase() === 'form'
}
function Mp(l) {
  return zo(l) && l.tagName.toLowerCase() === 'input'
}
function zp(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey)
}
function jp(l, d) {
  return l.button === 0 && (!d || d === '_self') && !zp(l)
}
var Io = null
function Fp() {
  if (Io === null)
    try {
      new FormData(document.createElement('form'), 0), (Io = !1)
    } catch {
      Io = !0
    }
  return Io
}
var Hp = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'])
function Ts(l) {
  return l != null && !Hp.has(l) ? (bt(!1, `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${No}"`), null) : l
}
function Up(l, d) {
  let a, u, h, v, C
  if (Dp(l)) {
    let T = l.getAttribute('action')
    ;(u = T ? Ln(T, d) : null), (a = l.getAttribute('method') || Oo), (h = Ts(l.getAttribute('enctype')) || No), (v = new FormData(l))
  } else if (Np(l) || (Mp(l) && (l.type === 'submit' || l.type === 'image'))) {
    let T = l.form
    if (T == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
    let w = l.getAttribute('formaction') || T.getAttribute('action')
    if (((u = w ? Ln(w, d) : null), (a = l.getAttribute('formmethod') || T.getAttribute('method') || Oo), (h = Ts(l.getAttribute('formenctype')) || Ts(T.getAttribute('enctype')) || No), (v = new FormData(T, l)), !Fp())) {
      let { name: R, type: U, value: b } = l
      if (U === 'image') {
        let O = R ? `${R}.` : ''
        v.append(`${O}x`, '0'), v.append(`${O}y`, '0')
      } else R && v.append(R, b)
    }
  } else {
    if (zo(l)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
    ;(a = Oo), (u = null), (h = No), (C = l)
  }
  return v && h === 'text/plain' && ((C = v), (v = void 0)), { action: u, method: a.toLowerCase(), encType: h, formData: v, body: C }
}
function Ns(l, d) {
  if (l === !1 || l === null || typeof l > 'u') throw new Error(d)
}
async function Gp(l, d) {
  if (l.id in d) return d[l.id]
  try {
    let a = await import(l.module)
    return (d[l.id] = a), a
  } catch (a) {
    return console.error(`Error loading route module \`${l.module}\`, reloading page...`), console.error(a), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
  }
}
function bp(l) {
  return l == null ? !1 : l.href == null ? l.rel === 'preload' && typeof l.imageSrcSet == 'string' && typeof l.imageSizes == 'string' : typeof l.rel == 'string' && typeof l.href == 'string'
}
async function $p(l, d, a) {
  let u = await Promise.all(
    l.map(async (h) => {
      let v = d.routes[h.route.id]
      if (v) {
        let C = await Gp(v, a)
        return C.links ? C.links() : []
      }
      return []
    }),
  )
  return Kp(
    u
      .flat(1)
      .filter(bp)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) => (h.rel === 'stylesheet' ? { ...h, rel: 'prefetch', as: 'style' } : { ...h, rel: 'prefetch' })),
  )
}
function Tc(l, d, a, u, h, v) {
  let C = (w, R) => (a[R] ? w.route.id !== a[R].route.id : !0),
    T = (w, R) => {
      var U
      return a[R].pathname !== w.pathname || (((U = a[R].route.path) == null ? void 0 : U.endsWith('*')) && a[R].params['*'] !== w.params['*'])
    }
  return v === 'assets'
    ? d.filter((w, R) => C(w, R) || T(w, R))
    : v === 'data'
      ? d.filter((w, R) => {
          var b
          let U = u.routes[w.route.id]
          if (!U || !U.hasLoader) return !1
          if (C(w, R) || T(w, R)) return !0
          if (w.route.shouldRevalidate) {
            let O = w.route.shouldRevalidate({ currentUrl: new URL(h.pathname + h.search + h.hash, window.origin), currentParams: ((b = a[0]) == null ? void 0 : b.params) || {}, nextUrl: new URL(l, window.origin), nextParams: w.params, defaultShouldRevalidate: !0 })
            if (typeof O == 'boolean') return O
          }
          return !0
        })
      : []
}
function Wp(l, d) {
  return Bp(
    l
      .map((a) => {
        let u = d.routes[a.route.id]
        if (!u) return []
        let h = [u.module]
        return u.imports && (h = h.concat(u.imports)), h
      })
      .flat(1),
  )
}
function Bp(l) {
  return [...new Set(l)]
}
function Vp(l) {
  let d = {},
    a = Object.keys(l).sort()
  for (let u of a) d[u] = l[u]
  return d
}
function Kp(l, d) {
  let a = new Set()
  return (
    new Set(d),
    l.reduce((u, h) => {
      let v = JSON.stringify(Vp(h))
      return a.has(v) || (a.add(v), u.push({ key: v, link: h })), u
    }, [])
  )
}
function Jp(l) {
  let d = typeof l == 'string' ? new URL(l, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin) : l
  return d.pathname === '/' ? (d.pathname = '_root.data') : (d.pathname = `${d.pathname.replace(/\/$/, '')}.data`), d
}
function Qp() {
  let l = N.useContext(Er)
  return Ns(l, 'You must render this element inside a <DataRouterContext.Provider> element'), l
}
function Yp() {
  let l = N.useContext(Mo)
  return Ns(l, 'You must render this element inside a <DataRouterStateContext.Provider> element'), l
}
var Ds = N.createContext(void 0)
Ds.displayName = 'FrameworkContext'
function Fc() {
  let l = N.useContext(Ds)
  return Ns(l, 'You must render this element inside a <HydratedRouter> element'), l
}
function Xp(l, d) {
  let a = N.useContext(Ds),
    [u, h] = N.useState(!1),
    [v, C] = N.useState(!1),
    { onFocus: T, onBlur: w, onMouseEnter: R, onMouseLeave: U, onTouchStart: b } = d,
    O = N.useRef(null)
  N.useEffect(() => {
    if ((l === 'render' && C(!0), l === 'viewport')) {
      let J = (K) => {
          K.forEach((q) => {
            C(q.isIntersecting)
          })
        },
        B = new IntersectionObserver(J, { threshold: 0.5 })
      return (
        O.current && B.observe(O.current),
        () => {
          B.disconnect()
        }
      )
    }
  }, [l]),
    N.useEffect(() => {
      if (u) {
        let J = setTimeout(() => {
          C(!0)
        }, 100)
        return () => {
          clearTimeout(J)
        }
      }
    }, [u])
  let V = () => {
      h(!0)
    },
    G = () => {
      h(!1), C(!1)
    }
  return a ? (l !== 'intent' ? [v, O, {}] : [v, O, { onFocus: mi(T, V), onBlur: mi(w, G), onMouseEnter: mi(R, V), onMouseLeave: mi(U, G), onTouchStart: mi(b, V) }]) : [!1, O, {}]
}
function mi(l, d) {
  return (a) => {
    l && l(a), a.defaultPrevented || d(a)
  }
}
function qp({ page: l, ...d }) {
  let { router: a } = Qp(),
    u = N.useMemo(() => Rc(a.routes, l, a.basename), [a.routes, l, a.basename])
  return u ? N.createElement(eh, { page: l, matches: u, ...d }) : null
}
function Zp(l) {
  let { manifest: d, routeModules: a } = Fc(),
    [u, h] = N.useState([])
  return (
    N.useEffect(() => {
      let v = !1
      return (
        $p(l, d, a).then((C) => {
          v || h(C)
        }),
        () => {
          v = !0
        }
      )
    }, [l, d, a]),
    u
  )
}
function eh({ page: l, matches: d, ...a }) {
  let u = Jn(),
    { manifest: h, routeModules: v } = Fc(),
    { loaderData: C, matches: T } = Yp(),
    w = N.useMemo(() => Tc(l, d, T, h, u, 'data'), [l, d, T, h, u]),
    R = N.useMemo(() => Tc(l, d, T, h, u, 'assets'), [l, d, T, h, u]),
    U = N.useMemo(() => {
      if (l === u.pathname + u.search + u.hash) return []
      let V = new Set(),
        G = !1
      if (
        (d.forEach((B) => {
          var q
          let K = h.routes[B.route.id]
          !K || !K.hasLoader || ((!w.some((ce) => ce.route.id === B.route.id) && B.route.id in C && (q = v[B.route.id]) != null && q.shouldRevalidate) || K.hasClientLoader ? (G = !0) : V.add(B.route.id))
        }),
        V.size === 0)
      )
        return []
      let J = Jp(l)
      return (
        G &&
          V.size > 0 &&
          J.searchParams.set(
            '_routes',
            d
              .filter((B) => V.has(B.route.id))
              .map((B) => B.route.id)
              .join(','),
          ),
        [J.pathname + J.search]
      )
    }, [C, u, h, w, d, l, v]),
    b = N.useMemo(() => Wp(R, h), [R, h]),
    O = Zp(R)
  return N.createElement(
    N.Fragment,
    null,
    U.map((V) => N.createElement('link', { key: V, rel: 'prefetch', as: 'fetch', href: V, ...a })),
    b.map((V) => N.createElement('link', { key: V, rel: 'modulepreload', href: V, ...a })),
    O.map(({ key: V, link: G }) => N.createElement('link', { key: V, ...G })),
  )
}
function th(...l) {
  return (d) => {
    l.forEach((a) => {
      typeof a == 'function' ? a(d) : a != null && (a.current = d)
    })
  }
}
var Hc = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u'
try {
  Hc && (window.__reactRouterVersion = '7.1.1')
} catch {}
function nh({ basename: l, children: d, window: a }) {
  let u = N.useRef()
  u.current == null && (u.current = $f({ window: a, v5Compat: !0 }))
  let h = u.current,
    [v, C] = N.useState({ action: h.action, location: h.location }),
    T = N.useCallback(
      (w) => {
        N.startTransition(() => C(w))
      },
      [C],
    )
  return N.useLayoutEffect(() => h.listen(T), [h, T]), N.createElement(Ip, { basename: l, children: d, location: v.location, navigationType: v.action, navigator: h })
}
var Uc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Gc = N.forwardRef(function ({ onClick: d, discover: a = 'render', prefetch: u = 'none', relative: h, reloadDocument: v, replace: C, state: T, target: w, to: R, preventScrollReset: U, viewTransition: b, ...O }, V) {
    let { basename: G } = N.useContext($t),
      J = typeof R == 'string' && Uc.test(R),
      B,
      K = !1
    if (typeof R == 'string' && J && ((B = R), Hc))
      try {
        let Ae = new URL(window.location.href),
          He = R.startsWith('//') ? new URL(Ae.protocol + R) : new URL(R),
          mt = Ln(He.pathname, G)
        He.origin === Ae.origin && mt != null ? (R = mt + He.search + He.hash) : (K = !0)
      } catch {
        bt(!1, `<Link to="${R}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
      }
    let q = mp(R, { relative: h }),
      [ce, me, we] = Xp(u, O),
      Le = ah(R, { replace: C, state: T, target: w, preventScrollReset: U, relative: h, viewTransition: b })
    function Re(Ae) {
      d && d(Ae), Ae.defaultPrevented || Le(Ae)
    }
    let Me = N.createElement('a', { ...O, ...we, href: B || q, onClick: K || v ? d : Re, ref: th(V, me), target: w, 'data-discover': !J && a === 'render' ? 'true' : void 0 })
    return ce && !J ? N.createElement(N.Fragment, null, Me, N.createElement(qp, { page: q })) : Me
  })
Gc.displayName = 'Link'
var rh = N.forwardRef(function ({ 'aria-current': d = 'page', caseSensitive: a = !1, className: u = '', end: h = !1, style: v, to: C, viewTransition: T, children: w, ...R }, U) {
  let b = _i(C, { relative: R.relative }),
    O = Jn(),
    V = N.useContext(Mo),
    { navigator: G, basename: J } = N.useContext($t),
    B = V != null && dh(b) && T === !0,
    K = G.encodeLocation ? G.encodeLocation(b).pathname : b.pathname,
    q = O.pathname,
    ce = V && V.navigation && V.navigation.location ? V.navigation.location.pathname : null
  a || ((q = q.toLowerCase()), (ce = ce ? ce.toLowerCase() : null), (K = K.toLowerCase())), ce && J && (ce = Ln(ce, J) || ce)
  const me = K !== '/' && K.endsWith('/') ? K.length - 1 : K.length
  let we = q === K || (!h && q.startsWith(K) && q.charAt(me) === '/'),
    Le = ce != null && (ce === K || (!h && ce.startsWith(K) && ce.charAt(K.length) === '/')),
    Re = { isActive: we, isPending: Le, isTransitioning: B },
    Me = we ? d : void 0,
    Ae
  typeof u == 'function' ? (Ae = u(Re)) : (Ae = [u, we ? 'active' : null, Le ? 'pending' : null, B ? 'transitioning' : null].filter(Boolean).join(' '))
  let He = typeof v == 'function' ? v(Re) : v
  return N.createElement(Gc, { ...R, 'aria-current': Me, className: Ae, ref: U, style: He, to: C, viewTransition: T }, typeof w == 'function' ? w(Re) : w)
})
rh.displayName = 'NavLink'
var ih = N.forwardRef(({ discover: l = 'render', fetcherKey: d, navigate: a, reloadDocument: u, replace: h, state: v, method: C = Oo, action: T, onSubmit: w, relative: R, preventScrollReset: U, viewTransition: b, ...O }, V) => {
  let G = uh(),
    J = ch(T, { relative: R }),
    B = C.toLowerCase() === 'get' ? 'get' : 'post',
    K = typeof T == 'string' && Uc.test(T),
    q = (ce) => {
      if ((w && w(ce), ce.defaultPrevented)) return
      ce.preventDefault()
      let me = ce.nativeEvent.submitter,
        we = (me == null ? void 0 : me.getAttribute('formmethod')) || C
      G(me || ce.currentTarget, { fetcherKey: d, method: we, navigate: a, replace: h, state: v, relative: R, preventScrollReset: U, viewTransition: b })
    }
  return N.createElement('form', { ref: V, method: B, action: J, onSubmit: u ? w : q, ...O, 'data-discover': !K && l === 'render' ? 'true' : void 0 })
})
ih.displayName = 'Form'
function oh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function bc(l) {
  let d = N.useContext(Er)
  return Fe(d, oh(l)), d
}
function ah(l, { target: d, replace: a, state: u, preventScrollReset: h, relative: v, viewTransition: C } = {}) {
  let T = gp(),
    w = Jn(),
    R = _i(l, { relative: v })
  return N.useCallback(
    (U) => {
      if (jp(U, d)) {
        U.preventDefault()
        let b = a !== void 0 ? a : gi(w) === gi(R)
        T(l, { replace: b, state: u, preventScrollReset: h, relative: v, viewTransition: C })
      }
    },
    [w, T, R, a, u, d, l, h, v, C],
  )
}
var sh = 0,
  lh = () => `__${String(++sh)}__`
function uh() {
  let { router: l } = bc('useSubmit'),
    { basename: d } = N.useContext($t),
    a = Rp()
  return N.useCallback(
    async (u, h = {}) => {
      let { action: v, method: C, encType: T, formData: w, body: R } = Up(u, d)
      if (h.navigate === !1) {
        let U = h.fetcherKey || lh()
        await l.fetch(U, a, h.action || v, { preventScrollReset: h.preventScrollReset, formData: w, body: R, formMethod: h.method || C, formEncType: h.encType || T, flushSync: h.flushSync })
      } else await l.navigate(h.action || v, { preventScrollReset: h.preventScrollReset, formData: w, body: R, formMethod: h.method || C, formEncType: h.encType || T, replace: h.replace, state: h.state, fromRouteId: a, flushSync: h.flushSync, viewTransition: h.viewTransition })
    },
    [l, d, a],
  )
}
function ch(l, { relative: d } = {}) {
  let { basename: a } = N.useContext($t),
    u = N.useContext(nn)
  Fe(u, 'useFormAction must be used inside a RouteContext')
  let [h] = u.matches.slice(-1),
    v = { ..._i(l || '.', { relative: d }) },
    C = Jn()
  if (l == null) {
    v.search = C.search
    let T = new URLSearchParams(v.search),
      w = T.getAll('index')
    if (w.some((U) => U === '')) {
      T.delete('index'), w.filter((b) => b).forEach((b) => T.append('index', b))
      let U = T.toString()
      v.search = U ? `?${U}` : ''
    }
  }
  return (!l || l === '.') && h.route.index && (v.search = v.search ? v.search.replace(/^\?/, '?index&') : '?index'), a !== '/' && (v.pathname = v.pathname === '/' ? a : tn([a, v.pathname])), gi(v)
}
function dh(l, d = {}) {
  let a = N.useContext(Nc)
  Fe(a != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?")
  let { basename: u } = bc('useViewTransitionState'),
    h = _i(l, { relative: d.relative })
  if (!a.isTransitioning) return !1
  let v = Ln(a.currentLocation.pathname, u) || a.currentLocation.pathname,
    C = Ln(a.nextLocation.pathname, u) || a.nextLocation.pathname
  return Do(h.pathname, C) != null || Do(h.pathname, v) != null
}
new TextEncoder()
/*! gstwebrtc-api (https://gitlab.freedesktop.org/gstreamer/gst-plugins-rs/-/tree/main/net/webrtc/gstwebrtc-api), MPL-2.0 License, Copyright (C) 2022 Igalia S.L. <info@igalia.com>, Author: Loïc Le Page <llepage@igalia.com> */ /*! Contains embedded adapter from webrtc-adapter (https://github.com/webrtcHacks/adapter), BSD 3-Clause License, Copyright (c) 2014, The WebRTC project authors. All rights reserved. Copyright (c) 2018, The adapter.js project authors. All rights reserved. */ var fh = {
    347: (l) => {
      const d = {
        generateIdentifier: function () {
          return Math.random().toString(36).substring(2, 12)
        },
      }
      ;(d.localCName = d.generateIdentifier()),
        (d.splitLines = function (a) {
          return a
            .trim()
            .split(
              `
`,
            )
            .map((u) => u.trim())
        }),
        (d.splitSections = function (a) {
          return a
            .split(
              `
m=`,
            )
            .map(
              (u, h) =>
                (h > 0 ? 'm=' + u : u).trim() +
                `\r
`,
            )
        }),
        (d.getDescription = function (a) {
          const u = d.splitSections(a)
          return u && u[0]
        }),
        (d.getMediaSections = function (a) {
          const u = d.splitSections(a)
          return u.shift(), u
        }),
        (d.matchPrefix = function (a, u) {
          return d.splitLines(a).filter((h) => h.indexOf(u) === 0)
        }),
        (d.parseCandidate = function (a) {
          let u
          u = a.indexOf('a=candidate:') === 0 ? a.substring(12).split(' ') : a.substring(10).split(' ')
          const h = { foundation: u[0], component: { 1: 'rtp', 2: 'rtcp' }[u[1]] || u[1], protocol: u[2].toLowerCase(), priority: parseInt(u[3], 10), ip: u[4], address: u[4], port: parseInt(u[5], 10), type: u[7] }
          for (let v = 8; v < u.length; v += 2)
            switch (u[v]) {
              case 'raddr':
                h.relatedAddress = u[v + 1]
                break
              case 'rport':
                h.relatedPort = parseInt(u[v + 1], 10)
                break
              case 'tcptype':
                h.tcpType = u[v + 1]
                break
              case 'ufrag':
                ;(h.ufrag = u[v + 1]), (h.usernameFragment = u[v + 1])
                break
              default:
                h[u[v]] === void 0 && (h[u[v]] = u[v + 1])
            }
          return h
        }),
        (d.writeCandidate = function (a) {
          const u = []
          u.push(a.foundation)
          const h = a.component
          h === 'rtp' ? u.push(1) : h === 'rtcp' ? u.push(2) : u.push(h), u.push(a.protocol.toUpperCase()), u.push(a.priority), u.push(a.address || a.ip), u.push(a.port)
          const v = a.type
          return u.push('typ'), u.push(v), v !== 'host' && a.relatedAddress && a.relatedPort && (u.push('raddr'), u.push(a.relatedAddress), u.push('rport'), u.push(a.relatedPort)), a.tcpType && a.protocol.toLowerCase() === 'tcp' && (u.push('tcptype'), u.push(a.tcpType)), (a.usernameFragment || a.ufrag) && (u.push('ufrag'), u.push(a.usernameFragment || a.ufrag)), 'candidate:' + u.join(' ')
        }),
        (d.parseIceOptions = function (a) {
          return a.substring(14).split(' ')
        }),
        (d.parseRtpMap = function (a) {
          let u = a.substring(9).split(' ')
          const h = { payloadType: parseInt(u.shift(), 10) }
          return (u = u[0].split('/')), (h.name = u[0]), (h.clockRate = parseInt(u[1], 10)), (h.channels = u.length === 3 ? parseInt(u[2], 10) : 1), (h.numChannels = h.channels), h
        }),
        (d.writeRtpMap = function (a) {
          let u = a.payloadType
          a.preferredPayloadType !== void 0 && (u = a.preferredPayloadType)
          const h = a.channels || a.numChannels || 1
          return (
            'a=rtpmap:' +
            u +
            ' ' +
            a.name +
            '/' +
            a.clockRate +
            (h !== 1 ? '/' + h : '') +
            `\r
`
          )
        }),
        (d.parseExtmap = function (a) {
          const u = a.substring(9).split(' ')
          return { id: parseInt(u[0], 10), direction: u[0].indexOf('/') > 0 ? u[0].split('/')[1] : 'sendrecv', uri: u[1], attributes: u.slice(2).join(' ') }
        }),
        (d.writeExtmap = function (a) {
          return (
            'a=extmap:' +
            (a.id || a.preferredId) +
            (a.direction && a.direction !== 'sendrecv' ? '/' + a.direction : '') +
            ' ' +
            a.uri +
            (a.attributes ? ' ' + a.attributes : '') +
            `\r
`
          )
        }),
        (d.parseFmtp = function (a) {
          const u = {}
          let h
          const v = a.substring(a.indexOf(' ') + 1).split(';')
          for (let C = 0; C < v.length; C++) (h = v[C].trim().split('=')), (u[h[0].trim()] = h[1])
          return u
        }),
        (d.writeFmtp = function (a) {
          let u = '',
            h = a.payloadType
          if ((a.preferredPayloadType !== void 0 && (h = a.preferredPayloadType), a.parameters && Object.keys(a.parameters).length)) {
            const v = []
            Object.keys(a.parameters).forEach((C) => {
              a.parameters[C] !== void 0 ? v.push(C + '=' + a.parameters[C]) : v.push(C)
            }),
              (u +=
                'a=fmtp:' +
                h +
                ' ' +
                v.join(';') +
                `\r
`)
          }
          return u
        }),
        (d.parseRtcpFb = function (a) {
          const u = a.substring(a.indexOf(' ') + 1).split(' ')
          return { type: u.shift(), parameter: u.join(' ') }
        }),
        (d.writeRtcpFb = function (a) {
          let u = '',
            h = a.payloadType
          return (
            a.preferredPayloadType !== void 0 && (h = a.preferredPayloadType),
            a.rtcpFeedback &&
              a.rtcpFeedback.length &&
              a.rtcpFeedback.forEach((v) => {
                u +=
                  'a=rtcp-fb:' +
                  h +
                  ' ' +
                  v.type +
                  (v.parameter && v.parameter.length ? ' ' + v.parameter : '') +
                  `\r
`
              }),
            u
          )
        }),
        (d.parseSsrcMedia = function (a) {
          const u = a.indexOf(' '),
            h = { ssrc: parseInt(a.substring(7, u), 10) },
            v = a.indexOf(':', u)
          return v > -1 ? ((h.attribute = a.substring(u + 1, v)), (h.value = a.substring(v + 1))) : (h.attribute = a.substring(u + 1)), h
        }),
        (d.parseSsrcGroup = function (a) {
          const u = a.substring(13).split(' ')
          return { semantics: u.shift(), ssrcs: u.map((h) => parseInt(h, 10)) }
        }),
        (d.getMid = function (a) {
          const u = d.matchPrefix(a, 'a=mid:')[0]
          if (u) return u.substring(6)
        }),
        (d.parseFingerprint = function (a) {
          const u = a.substring(14).split(' ')
          return { algorithm: u[0].toLowerCase(), value: u[1].toUpperCase() }
        }),
        (d.getDtlsParameters = function (a, u) {
          return { role: 'auto', fingerprints: d.matchPrefix(a + u, 'a=fingerprint:').map(d.parseFingerprint) }
        }),
        (d.writeDtlsParameters = function (a, u) {
          let h =
            'a=setup:' +
            u +
            `\r
`
          return (
            a.fingerprints.forEach((v) => {
              h +=
                'a=fingerprint:' +
                v.algorithm +
                ' ' +
                v.value +
                `\r
`
            }),
            h
          )
        }),
        (d.parseCryptoLine = function (a) {
          const u = a.substring(9).split(' ')
          return { tag: parseInt(u[0], 10), cryptoSuite: u[1], keyParams: u[2], sessionParams: u.slice(3) }
        }),
        (d.writeCryptoLine = function (a) {
          return (
            'a=crypto:' +
            a.tag +
            ' ' +
            a.cryptoSuite +
            ' ' +
            (typeof a.keyParams == 'object' ? d.writeCryptoKeyParams(a.keyParams) : a.keyParams) +
            (a.sessionParams ? ' ' + a.sessionParams.join(' ') : '') +
            `\r
`
          )
        }),
        (d.parseCryptoKeyParams = function (a) {
          if (a.indexOf('inline:') !== 0) return null
          const u = a.substring(7).split('|')
          return { keyMethod: 'inline', keySalt: u[0], lifeTime: u[1], mkiValue: u[2] ? u[2].split(':')[0] : void 0, mkiLength: u[2] ? u[2].split(':')[1] : void 0 }
        }),
        (d.writeCryptoKeyParams = function (a) {
          return a.keyMethod + ':' + a.keySalt + (a.lifeTime ? '|' + a.lifeTime : '') + (a.mkiValue && a.mkiLength ? '|' + a.mkiValue + ':' + a.mkiLength : '')
        }),
        (d.getCryptoParameters = function (a, u) {
          return d.matchPrefix(a + u, 'a=crypto:').map(d.parseCryptoLine)
        }),
        (d.getIceParameters = function (a, u) {
          const h = d.matchPrefix(a + u, 'a=ice-ufrag:')[0],
            v = d.matchPrefix(a + u, 'a=ice-pwd:')[0]
          return h && v ? { usernameFragment: h.substring(12), password: v.substring(10) } : null
        }),
        (d.writeIceParameters = function (a) {
          let u =
            'a=ice-ufrag:' +
            a.usernameFragment +
            `\r
a=ice-pwd:` +
            a.password +
            `\r
`
          return (
            a.iceLite &&
              (u += `a=ice-lite\r
`),
            u
          )
        }),
        (d.parseRtpParameters = function (a) {
          const u = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] },
            h = d.splitLines(a)[0].split(' ')
          u.profile = h[2]
          for (let C = 3; C < h.length; C++) {
            const T = h[C],
              w = d.matchPrefix(a, 'a=rtpmap:' + T + ' ')[0]
            if (w) {
              const R = d.parseRtpMap(w),
                U = d.matchPrefix(a, 'a=fmtp:' + T + ' ')
              switch (((R.parameters = U.length ? d.parseFmtp(U[0]) : {}), (R.rtcpFeedback = d.matchPrefix(a, 'a=rtcp-fb:' + T + ' ').map(d.parseRtcpFb)), u.codecs.push(R), R.name.toUpperCase())) {
                case 'RED':
                case 'ULPFEC':
                  u.fecMechanisms.push(R.name.toUpperCase())
              }
            }
          }
          d.matchPrefix(a, 'a=extmap:').forEach((C) => {
            u.headerExtensions.push(d.parseExtmap(C))
          })
          const v = d.matchPrefix(a, 'a=rtcp-fb:* ').map(d.parseRtcpFb)
          return (
            u.codecs.forEach((C) => {
              v.forEach((T) => {
                C.rtcpFeedback.find((w) => w.type === T.type && w.parameter === T.parameter) || C.rtcpFeedback.push(T)
              })
            }),
            u
          )
        }),
        (d.writeRtpDescription = function (a, u) {
          let h = ''
          ;(h += 'm=' + a + ' '),
            (h += u.codecs.length > 0 ? '9' : '0'),
            (h += ' ' + (u.profile || 'UDP/TLS/RTP/SAVPF') + ' '),
            (h +=
              u.codecs.map((C) => (C.preferredPayloadType !== void 0 ? C.preferredPayloadType : C.payloadType)).join(' ') +
              `\r
`),
            (h += `c=IN IP4 0.0.0.0\r
`),
            (h += `a=rtcp:9 IN IP4 0.0.0.0\r
`),
            u.codecs.forEach((C) => {
              ;(h += d.writeRtpMap(C)), (h += d.writeFmtp(C)), (h += d.writeRtcpFb(C))
            })
          let v = 0
          return (
            u.codecs.forEach((C) => {
              C.maxptime > v && (v = C.maxptime)
            }),
            v > 0 &&
              (h +=
                'a=maxptime:' +
                v +
                `\r
`),
            u.headerExtensions &&
              u.headerExtensions.forEach((C) => {
                h += d.writeExtmap(C)
              }),
            h
          )
        }),
        (d.parseRtpEncodingParameters = function (a) {
          const u = [],
            h = d.parseRtpParameters(a),
            v = h.fecMechanisms.indexOf('RED') !== -1,
            C = h.fecMechanisms.indexOf('ULPFEC') !== -1,
            T = d
              .matchPrefix(a, 'a=ssrc:')
              .map((O) => d.parseSsrcMedia(O))
              .filter((O) => O.attribute === 'cname'),
            w = T.length > 0 && T[0].ssrc
          let R
          const U = d.matchPrefix(a, 'a=ssrc-group:FID').map((O) =>
            O.substring(17)
              .split(' ')
              .map((V) => parseInt(V, 10)),
          )
          U.length > 0 && U[0].length > 1 && U[0][0] === w && (R = U[0][1]),
            h.codecs.forEach((O) => {
              if (O.name.toUpperCase() === 'RTX' && O.parameters.apt) {
                let V = { ssrc: w, codecPayloadType: parseInt(O.parameters.apt, 10) }
                w && R && (V.rtx = { ssrc: R }), u.push(V), v && ((V = JSON.parse(JSON.stringify(V))), (V.fec = { ssrc: w, mechanism: C ? 'red+ulpfec' : 'red' }), u.push(V))
              }
            }),
            u.length === 0 && w && u.push({ ssrc: w })
          let b = d.matchPrefix(a, 'b=')
          return (
            b.length &&
              ((b = b[0].indexOf('b=TIAS:') === 0 ? parseInt(b[0].substring(7), 10) : b[0].indexOf('b=AS:') === 0 ? 1e3 * parseInt(b[0].substring(5), 10) * 0.95 - 16e3 : void 0),
              u.forEach((O) => {
                O.maxBitrate = b
              })),
            u
          )
        }),
        (d.parseRtcpParameters = function (a) {
          const u = {},
            h = d
              .matchPrefix(a, 'a=ssrc:')
              .map((T) => d.parseSsrcMedia(T))
              .filter((T) => T.attribute === 'cname')[0]
          h && ((u.cname = h.value), (u.ssrc = h.ssrc))
          const v = d.matchPrefix(a, 'a=rtcp-rsize')
          ;(u.reducedSize = v.length > 0), (u.compound = v.length === 0)
          const C = d.matchPrefix(a, 'a=rtcp-mux')
          return (u.mux = C.length > 0), u
        }),
        (d.writeRtcpParameters = function (a) {
          let u = ''
          return (
            a.reducedSize &&
              (u += `a=rtcp-rsize\r
`),
            a.mux &&
              (u += `a=rtcp-mux\r
`),
            a.ssrc !== void 0 &&
              a.cname &&
              (u +=
                'a=ssrc:' +
                a.ssrc +
                ' cname:' +
                a.cname +
                `\r
`),
            u
          )
        }),
        (d.parseMsid = function (a) {
          let u
          const h = d.matchPrefix(a, 'a=msid:')
          if (h.length === 1) return (u = h[0].substring(7).split(' ')), { stream: u[0], track: u[1] }
          const v = d
            .matchPrefix(a, 'a=ssrc:')
            .map((C) => d.parseSsrcMedia(C))
            .filter((C) => C.attribute === 'msid')
          return v.length > 0 ? ((u = v[0].value.split(' ')), { stream: u[0], track: u[1] }) : void 0
        }),
        (d.parseSctpDescription = function (a) {
          const u = d.parseMLine(a),
            h = d.matchPrefix(a, 'a=max-message-size:')
          let v
          h.length > 0 && (v = parseInt(h[0].substring(19), 10)), isNaN(v) && (v = 65536)
          const C = d.matchPrefix(a, 'a=sctp-port:')
          if (C.length > 0) return { port: parseInt(C[0].substring(12), 10), protocol: u.fmt, maxMessageSize: v }
          const T = d.matchPrefix(a, 'a=sctpmap:')
          if (T.length > 0) {
            const w = T[0].substring(10).split(' ')
            return { port: parseInt(w[0], 10), protocol: w[1], maxMessageSize: v }
          }
        }),
        (d.writeSctpDescription = function (a, u) {
          let h = []
          return (
            (h =
              a.protocol !== 'DTLS/SCTP'
                ? [
                    'm=' +
                      a.kind +
                      ' 9 ' +
                      a.protocol +
                      ' ' +
                      u.protocol +
                      `\r
`,
                    `c=IN IP4 0.0.0.0\r
`,
                    'a=sctp-port:' +
                      u.port +
                      `\r
`,
                  ]
                : [
                    'm=' +
                      a.kind +
                      ' 9 ' +
                      a.protocol +
                      ' ' +
                      u.port +
                      `\r
`,
                    `c=IN IP4 0.0.0.0\r
`,
                    'a=sctpmap:' +
                      u.port +
                      ' ' +
                      u.protocol +
                      ` 65535\r
`,
                  ]),
            u.maxMessageSize !== void 0 &&
              h.push(
                'a=max-message-size:' +
                  u.maxMessageSize +
                  `\r
`,
              ),
            h.join('')
          )
        }),
        (d.generateSessionId = function () {
          return Math.random().toString().substr(2, 22)
        }),
        (d.writeSessionBoilerplate = function (a, u, h) {
          let v
          const C = u !== void 0 ? u : 2
          return (
            (v = a || d.generateSessionId()),
            `v=0\r
o=` +
              (h || 'thisisadapterortc') +
              ' ' +
              v +
              ' ' +
              C +
              ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
          )
        }),
        (d.getDirection = function (a, u) {
          const h = d.splitLines(a)
          for (let v = 0; v < h.length; v++)
            switch (h[v]) {
              case 'a=sendrecv':
              case 'a=sendonly':
              case 'a=recvonly':
              case 'a=inactive':
                return h[v].substring(2)
            }
          return u ? d.getDirection(u) : 'sendrecv'
        }),
        (d.getKind = function (a) {
          return d.splitLines(a)[0].split(' ')[0].substring(2)
        }),
        (d.isRejected = function (a) {
          return a.split(' ', 2)[1] === '0'
        }),
        (d.parseMLine = function (a) {
          const u = d.splitLines(a)[0].substring(2).split(' ')
          return { kind: u[0], port: parseInt(u[1], 10), protocol: u[2], fmt: u.slice(3).join(' ') }
        }),
        (d.parseOLine = function (a) {
          const u = d.matchPrefix(a, 'o=')[0].substring(2).split(' ')
          return { username: u[0], sessionId: u[1], sessionVersion: parseInt(u[2], 10), netType: u[3], addressType: u[4], address: u[5] }
        }),
        (d.isValidSDP = function (a) {
          if (typeof a != 'string' || a.length === 0) return !1
          const u = d.splitLines(a)
          for (let h = 0; h < u.length; h++) if (u[h].length < 2 || u[h].charAt(1) !== '=') return !1
          return !0
        }),
        (l.exports = d)
    },
  },
  Pc = {}
function Ve(l) {
  var d = Pc[l]
  if (d !== void 0) return d.exports
  var a = (Pc[l] = { exports: {} })
  return fh[l](a, a.exports, Ve), a.exports
}
;(Ve.n = (l) => {
  var d = l && l.__esModule ? () => l.default : () => l
  return Ve.d(d, { a: d }), d
}),
  (Ve.d = (l, d) => {
    for (var a in d) Ve.o(d, a) && !Ve.o(l, a) && Object.defineProperty(l, a, { enumerable: !0, get: d[a] })
  }),
  (Ve.o = (l, d) => Object.prototype.hasOwnProperty.call(l, d)),
  (Ve.r = (l) => {
    typeof Symbol < 'u' && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(l, '__esModule', { value: !0 })
  })
var Ms = {}
;(() => {
  Ve.d(Ms, { u: () => Ir, B: () => er })
  var l = {}
  Ve.r(l), Ve.d(l, { fixNegotiationNeeded: () => mt, shimAddTrackRemoveTrack: () => Ae, shimAddTrackRemoveTrackWithNative: () => Me, shimGetDisplayMedia: () => q, shimGetSendersWithDtmf: () => we, shimGetStats: () => Le, shimGetUserMedia: () => K, shimMediaStream: () => ce, shimOnTrack: () => me, shimPeerConnection: () => He, shimSenderReceiverGetStats: () => Re })
  var d = {}
  Ve.r(d), Ve.d(d, { shimAddTransceiver: () => Z, shimCreateAnswer: () => de, shimCreateOffer: () => M, shimGetDisplayMedia: () => it, shimGetParameters: () => P, shimGetUserMedia: () => gt, shimOnTrack: () => st, shimPeerConnection: () => lt, shimRTCDataChannel: () => ae, shimReceiverGetStats: () => Ie, shimRemoveStream: () => Q, shimSenderGetStats: () => Ye })
  var a = {}
  Ve.r(a), Ve.d(a, { shimAudioContext: () => Tr, shimCallbacksAPI: () => ye, shimConstraints: () => Ce, shimCreateOfferLegacy: () => An, shimGetUserMedia: () => Ee, shimLocalStreamsAPI: () => fe, shimRTCIceServerUrls: () => Pe, shimRemoteStreamsAPI: () => ve, shimTrackEventTransceiver: () => Ze })
  var u = {}
  Ve.r(u), Ve.d(u, { removeExtmapAllowMixed: () => Bt, shimAddIceCandidateNullOrEmpty: () => Lt, shimConnectionState: () => Dn, shimMaxMessageSize: () => rn, shimParameterlessSetLocalDescription: () => on, shimRTCIceCandidate: () => On, shimRTCIceCandidateRelayProtocol: () => Qn, shimSendThrowTypeError: () => Nn })
  let h = !0,
    v = !0
  function C(s, f, p) {
    const m = s.match(f)
    return m && m.length >= p && parseInt(m[p], 10)
  }
  function T(s, f, p) {
    if (!s.RTCPeerConnection) return
    const m = s.RTCPeerConnection.prototype,
      k = m.addEventListener
    m.addEventListener = function (_, D) {
      if (_ !== f) return k.apply(this, arguments)
      const I = (j) => {
        const Y = p(j)
        Y && (D.handleEvent ? D.handleEvent(Y) : D(Y))
      }
      return (this._eventMap = this._eventMap || {}), this._eventMap[f] || (this._eventMap[f] = new Map()), this._eventMap[f].set(D, I), k.apply(this, [_, I])
    }
    const E = m.removeEventListener
    ;(m.removeEventListener = function (_, D) {
      if (_ !== f || !this._eventMap || !this._eventMap[f]) return E.apply(this, arguments)
      if (!this._eventMap[f].has(D)) return E.apply(this, arguments)
      const I = this._eventMap[f].get(D)
      return this._eventMap[f].delete(D), this._eventMap[f].size === 0 && delete this._eventMap[f], Object.keys(this._eventMap).length === 0 && delete this._eventMap, E.apply(this, [_, I])
    }),
      Object.defineProperty(m, 'on' + f, {
        get() {
          return this['_on' + f]
        },
        set(_) {
          this['_on' + f] && (this.removeEventListener(f, this['_on' + f]), delete this['_on' + f]), _ && this.addEventListener(f, (this['_on' + f] = _))
        },
        enumerable: !0,
        configurable: !0,
      })
  }
  function w(s) {
    return typeof s != 'boolean' ? new Error('Argument type: ' + typeof s + '. Please use a boolean.') : ((h = s), s ? 'adapter.js logging disabled' : 'adapter.js logging enabled')
  }
  function R(s) {
    return typeof s != 'boolean' ? new Error('Argument type: ' + typeof s + '. Please use a boolean.') : ((v = !s), 'adapter.js deprecation warnings ' + (s ? 'disabled' : 'enabled'))
  }
  function U() {
    if (typeof window == 'object') {
      if (h) return
      typeof console < 'u' && typeof console.log == 'function' && console.log.apply(console, arguments)
    }
  }
  function b(s, f) {
    v && console.warn(s + ' is deprecated, please use ' + f + ' instead.')
  }
  function O(s) {
    return Object.prototype.toString.call(s) === '[object Object]'
  }
  function V(s) {
    return O(s)
      ? Object.keys(s).reduce(function (f, p) {
          const m = O(s[p]),
            k = m ? V(s[p]) : s[p],
            E = m && !Object.keys(k).length
          return k === void 0 || E ? f : Object.assign(f, { [p]: k })
        }, {})
      : s
  }
  function G(s, f, p) {
    f &&
      !p.has(f.id) &&
      (p.set(f.id, f),
      Object.keys(f).forEach((m) => {
        m.endsWith('Id')
          ? G(s, s.get(f[m]), p)
          : m.endsWith('Ids') &&
            f[m].forEach((k) => {
              G(s, s.get(k), p)
            })
      }))
  }
  function J(s, f, p) {
    const m = p ? 'outbound-rtp' : 'inbound-rtp',
      k = new Map()
    if (f === null) return k
    const E = []
    return (
      s.forEach((_) => {
        _.type === 'track' && _.trackIdentifier === f.id && E.push(_)
      }),
      E.forEach((_) => {
        s.forEach((D) => {
          D.type === m && D.trackId === _.id && G(s, D, k)
        })
      }),
      k
    )
  }
  const B = U
  function K(s, f) {
    const p = s && s.navigator
    if (!p.mediaDevices) return
    const m = function (_) {
        if (typeof _ != 'object' || _.mandatory || _.optional) return _
        const D = {}
        return (
          Object.keys(_).forEach((I) => {
            if (I === 'require' || I === 'advanced' || I === 'mediaSource') return
            const j = typeof _[I] == 'object' ? _[I] : { ideal: _[I] }
            j.exact !== void 0 && typeof j.exact == 'number' && (j.min = j.max = j.exact)
            const Y = function (ne, pe) {
              return ne ? ne + pe.charAt(0).toUpperCase() + pe.slice(1) : pe === 'deviceId' ? 'sourceId' : pe
            }
            if (j.ideal !== void 0) {
              D.optional = D.optional || []
              let ne = {}
              typeof j.ideal == 'number' ? ((ne[Y('min', I)] = j.ideal), D.optional.push(ne), (ne = {}), (ne[Y('max', I)] = j.ideal), D.optional.push(ne)) : ((ne[Y('', I)] = j.ideal), D.optional.push(ne))
            }
            j.exact !== void 0 && typeof j.exact != 'number'
              ? ((D.mandatory = D.mandatory || {}), (D.mandatory[Y('', I)] = j.exact))
              : ['min', 'max'].forEach((ne) => {
                  j[ne] !== void 0 && ((D.mandatory = D.mandatory || {}), (D.mandatory[Y(ne, I)] = j[ne]))
                })
          }),
          _.advanced && (D.optional = (D.optional || []).concat(_.advanced)),
          D
        )
      },
      k = function (_, D) {
        if (f.version >= 61) return D(_)
        if ((_ = JSON.parse(JSON.stringify(_))) && typeof _.audio == 'object') {
          const I = function (j, Y, ne) {
            Y in j && !(ne in j) && ((j[ne] = j[Y]), delete j[Y])
          }
          I((_ = JSON.parse(JSON.stringify(_))).audio, 'autoGainControl', 'googAutoGainControl'), I(_.audio, 'noiseSuppression', 'googNoiseSuppression'), (_.audio = m(_.audio))
        }
        if (_ && typeof _.video == 'object') {
          let I = _.video.facingMode
          I = I && (typeof I == 'object' ? I : { ideal: I })
          const j = f.version < 66
          if (I && (I.exact === 'user' || I.exact === 'environment' || I.ideal === 'user' || I.ideal === 'environment') && (!p.mediaDevices.getSupportedConstraints || !p.mediaDevices.getSupportedConstraints().facingMode || j)) {
            let Y
            if ((delete _.video.facingMode, I.exact === 'environment' || I.ideal === 'environment' ? (Y = ['back', 'rear']) : (I.exact !== 'user' && I.ideal !== 'user') || (Y = ['front']), Y))
              return p.mediaDevices.enumerateDevices().then((ne) => {
                let pe = (ne = ne.filter((kt) => kt.kind === 'videoinput')).find((kt) => Y.some((wi) => kt.label.toLowerCase().includes(wi)))
                return !pe && ne.length && Y.includes('back') && (pe = ne[ne.length - 1]), pe && (_.video.deviceId = I.exact ? { exact: pe.deviceId } : { ideal: pe.deviceId }), (_.video = m(_.video)), B('chrome: ' + JSON.stringify(_)), D(_)
              })
          }
          _.video = m(_.video)
        }
        return B('chrome: ' + JSON.stringify(_)), D(_)
      },
      E = function (_) {
        return f.version >= 64
          ? _
          : {
              name: { PermissionDeniedError: 'NotAllowedError', PermissionDismissedError: 'NotAllowedError', InvalidStateError: 'NotAllowedError', DevicesNotFoundError: 'NotFoundError', ConstraintNotSatisfiedError: 'OverconstrainedError', TrackStartError: 'NotReadableError', MediaDeviceFailedDueToShutdown: 'NotAllowedError', MediaDeviceKillSwitchOn: 'NotAllowedError', TabCaptureError: 'AbortError', ScreenCaptureError: 'AbortError', DeviceCaptureError: 'AbortError' }[_.name] || _.name,
              message: _.message,
              constraint: _.constraint || _.constraintName,
              toString() {
                return this.name + (this.message && ': ') + this.message
              },
            }
      }
    if (
      ((p.getUserMedia = function (_, D, I) {
        k(_, (j) => {
          p.webkitGetUserMedia(j, D, (Y) => {
            I && I(E(Y))
          })
        })
      }.bind(p)),
      p.mediaDevices.getUserMedia)
    ) {
      const _ = p.mediaDevices.getUserMedia.bind(p.mediaDevices)
      p.mediaDevices.getUserMedia = function (D) {
        return k(D, (I) =>
          _(I).then(
            (j) => {
              if ((I.audio && !j.getAudioTracks().length) || (I.video && !j.getVideoTracks().length))
                throw (
                  (j.getTracks().forEach((Y) => {
                    Y.stop()
                  }),
                  new DOMException('', 'NotFoundError'))
                )
              return j
            },
            (j) => Promise.reject(E(j)),
          ),
        )
      }
    }
  }
  function q(s, f) {
    ;(s.navigator.mediaDevices && 'getDisplayMedia' in s.navigator.mediaDevices) ||
      (s.navigator.mediaDevices &&
        (typeof f == 'function'
          ? (s.navigator.mediaDevices.getDisplayMedia = function (p) {
              return f(p).then((m) => {
                const k = p.video && p.video.width,
                  E = p.video && p.video.height,
                  _ = p.video && p.video.frameRate
                return (p.video = { mandatory: { chromeMediaSource: 'desktop', chromeMediaSourceId: m, maxFrameRate: _ || 3 } }), k && (p.video.mandatory.maxWidth = k), E && (p.video.mandatory.maxHeight = E), s.navigator.mediaDevices.getUserMedia(p)
              })
            })
          : console.error('shimGetDisplayMedia: getSourceId argument is not a function')))
  }
  function ce(s) {
    s.MediaStream = s.MediaStream || s.webkitMediaStream
  }
  function me(s) {
    if (typeof s == 'object' && s.RTCPeerConnection && !('ontrack' in s.RTCPeerConnection.prototype)) {
      Object.defineProperty(s.RTCPeerConnection.prototype, 'ontrack', {
        get() {
          return this._ontrack
        },
        set(p) {
          this._ontrack && this.removeEventListener('track', this._ontrack), this.addEventListener('track', (this._ontrack = p))
        },
        enumerable: !0,
        configurable: !0,
      })
      const f = s.RTCPeerConnection.prototype.setRemoteDescription
      s.RTCPeerConnection.prototype.setRemoteDescription = function () {
        return (
          this._ontrackpoly ||
            ((this._ontrackpoly = (p) => {
              p.stream.addEventListener('addtrack', (m) => {
                let k
                k = s.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((_) => _.track && _.track.id === m.track.id) : { track: m.track }
                const E = new Event('track')
                ;(E.track = m.track), (E.receiver = k), (E.transceiver = { receiver: k }), (E.streams = [p.stream]), this.dispatchEvent(E)
              }),
                p.stream.getTracks().forEach((m) => {
                  let k
                  k = s.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((_) => _.track && _.track.id === m.id) : { track: m }
                  const E = new Event('track')
                  ;(E.track = m), (E.receiver = k), (E.transceiver = { receiver: k }), (E.streams = [p.stream]), this.dispatchEvent(E)
                })
            }),
            this.addEventListener('addstream', this._ontrackpoly)),
          f.apply(this, arguments)
        )
      }
    } else T(s, 'track', (f) => (f.transceiver || Object.defineProperty(f, 'transceiver', { value: { receiver: f.receiver } }), f))
  }
  function we(s) {
    if (typeof s == 'object' && s.RTCPeerConnection && !('getSenders' in s.RTCPeerConnection.prototype) && 'createDTMFSender' in s.RTCPeerConnection.prototype) {
      const f = function (k, E) {
        return {
          track: E,
          get dtmf() {
            return this._dtmf === void 0 && (E.kind === 'audio' ? (this._dtmf = k.createDTMFSender(E)) : (this._dtmf = null)), this._dtmf
          },
          _pc: k,
        }
      }
      if (!s.RTCPeerConnection.prototype.getSenders) {
        s.RTCPeerConnection.prototype.getSenders = function () {
          return (this._senders = this._senders || []), this._senders.slice()
        }
        const k = s.RTCPeerConnection.prototype.addTrack
        s.RTCPeerConnection.prototype.addTrack = function (_, D) {
          let I = k.apply(this, arguments)
          return I || ((I = f(this, _)), this._senders.push(I)), I
        }
        const E = s.RTCPeerConnection.prototype.removeTrack
        s.RTCPeerConnection.prototype.removeTrack = function (_) {
          E.apply(this, arguments)
          const D = this._senders.indexOf(_)
          D !== -1 && this._senders.splice(D, 1)
        }
      }
      const p = s.RTCPeerConnection.prototype.addStream
      s.RTCPeerConnection.prototype.addStream = function (k) {
        ;(this._senders = this._senders || []),
          p.apply(this, [k]),
          k.getTracks().forEach((E) => {
            this._senders.push(f(this, E))
          })
      }
      const m = s.RTCPeerConnection.prototype.removeStream
      s.RTCPeerConnection.prototype.removeStream = function (k) {
        ;(this._senders = this._senders || []),
          m.apply(this, [k]),
          k.getTracks().forEach((E) => {
            const _ = this._senders.find((D) => D.track === E)
            _ && this._senders.splice(this._senders.indexOf(_), 1)
          })
      }
    } else if (typeof s == 'object' && s.RTCPeerConnection && 'getSenders' in s.RTCPeerConnection.prototype && 'createDTMFSender' in s.RTCPeerConnection.prototype && s.RTCRtpSender && !('dtmf' in s.RTCRtpSender.prototype)) {
      const f = s.RTCPeerConnection.prototype.getSenders
      ;(s.RTCPeerConnection.prototype.getSenders = function () {
        const p = f.apply(this, [])
        return p.forEach((m) => (m._pc = this)), p
      }),
        Object.defineProperty(s.RTCRtpSender.prototype, 'dtmf', {
          get() {
            return this._dtmf === void 0 && (this.track.kind === 'audio' ? (this._dtmf = this._pc.createDTMFSender(this.track)) : (this._dtmf = null)), this._dtmf
          },
        })
    }
  }
  function Le(s) {
    if (!s.RTCPeerConnection) return
    const f = s.RTCPeerConnection.prototype.getStats
    s.RTCPeerConnection.prototype.getStats = function () {
      const [p, m, k] = arguments
      if (arguments.length > 0 && typeof p == 'function') return f.apply(this, arguments)
      if (f.length === 0 && (arguments.length === 0 || typeof p != 'function')) return f.apply(this, [])
      const E = function (D) {
          const I = {}
          return (
            D.result().forEach((j) => {
              const Y = { id: j.id, timestamp: j.timestamp, type: { localcandidate: 'local-candidate', remotecandidate: 'remote-candidate' }[j.type] || j.type }
              j.names().forEach((ne) => {
                Y[ne] = j.stat(ne)
              }),
                (I[Y.id] = Y)
            }),
            I
          )
        },
        _ = function (D) {
          return new Map(Object.keys(D).map((I) => [I, D[I]]))
        }
      if (arguments.length >= 2) {
        const D = function (I) {
          m(_(E(I)))
        }
        return f.apply(this, [D, p])
      }
      return new Promise((D, I) => {
        f.apply(this, [
          function (j) {
            D(_(E(j)))
          },
          I,
        ])
      }).then(m, k)
    }
  }
  function Re(s) {
    if (!(typeof s == 'object' && s.RTCPeerConnection && s.RTCRtpSender && s.RTCRtpReceiver)) return
    if (!('getStats' in s.RTCRtpSender.prototype)) {
      const p = s.RTCPeerConnection.prototype.getSenders
      p &&
        (s.RTCPeerConnection.prototype.getSenders = function () {
          const k = p.apply(this, [])
          return k.forEach((E) => (E._pc = this)), k
        })
      const m = s.RTCPeerConnection.prototype.addTrack
      m &&
        (s.RTCPeerConnection.prototype.addTrack = function () {
          const k = m.apply(this, arguments)
          return (k._pc = this), k
        }),
        (s.RTCRtpSender.prototype.getStats = function () {
          const k = this
          return this._pc.getStats().then((E) => J(E, k.track, !0))
        })
    }
    if (!('getStats' in s.RTCRtpReceiver.prototype)) {
      const p = s.RTCPeerConnection.prototype.getReceivers
      p &&
        (s.RTCPeerConnection.prototype.getReceivers = function () {
          const m = p.apply(this, [])
          return m.forEach((k) => (k._pc = this)), m
        }),
        T(s, 'track', (m) => ((m.receiver._pc = m.srcElement), m)),
        (s.RTCRtpReceiver.prototype.getStats = function () {
          const m = this
          return this._pc.getStats().then((k) => J(k, m.track, !1))
        })
    }
    if (!('getStats' in s.RTCRtpSender.prototype) || !('getStats' in s.RTCRtpReceiver.prototype)) return
    const f = s.RTCPeerConnection.prototype.getStats
    s.RTCPeerConnection.prototype.getStats = function () {
      if (arguments.length > 0 && arguments[0] instanceof s.MediaStreamTrack) {
        const p = arguments[0]
        let m, k, E
        return (
          this.getSenders().forEach((_) => {
            _.track === p && (m ? (E = !0) : (m = _))
          }),
          this.getReceivers().forEach((_) => (_.track === p && (k ? (E = !0) : (k = _)), _.track === p)),
          E || (m && k) ? Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError')) : m ? m.getStats() : k ? k.getStats() : Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'))
        )
      }
      return f.apply(this, arguments)
    }
  }
  function Me(s) {
    s.RTCPeerConnection.prototype.getLocalStreams = function () {
      return (this._shimmedLocalStreams = this._shimmedLocalStreams || {}), Object.keys(this._shimmedLocalStreams).map((E) => this._shimmedLocalStreams[E][0])
    }
    const f = s.RTCPeerConnection.prototype.addTrack
    s.RTCPeerConnection.prototype.addTrack = function (E, _) {
      if (!_) return f.apply(this, arguments)
      this._shimmedLocalStreams = this._shimmedLocalStreams || {}
      const D = f.apply(this, arguments)
      return this._shimmedLocalStreams[_.id] ? this._shimmedLocalStreams[_.id].indexOf(D) === -1 && this._shimmedLocalStreams[_.id].push(D) : (this._shimmedLocalStreams[_.id] = [_, D]), D
    }
    const p = s.RTCPeerConnection.prototype.addStream
    s.RTCPeerConnection.prototype.addStream = function (E) {
      ;(this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        E.getTracks().forEach((I) => {
          if (this.getSenders().find((j) => j.track === I)) throw new DOMException('Track already exists.', 'InvalidAccessError')
        })
      const _ = this.getSenders()
      p.apply(this, arguments)
      const D = this.getSenders().filter((I) => _.indexOf(I) === -1)
      this._shimmedLocalStreams[E.id] = [E].concat(D)
    }
    const m = s.RTCPeerConnection.prototype.removeStream
    s.RTCPeerConnection.prototype.removeStream = function (E) {
      return (this._shimmedLocalStreams = this._shimmedLocalStreams || {}), delete this._shimmedLocalStreams[E.id], m.apply(this, arguments)
    }
    const k = s.RTCPeerConnection.prototype.removeTrack
    s.RTCPeerConnection.prototype.removeTrack = function (E) {
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        E &&
          Object.keys(this._shimmedLocalStreams).forEach((_) => {
            const D = this._shimmedLocalStreams[_].indexOf(E)
            D !== -1 && this._shimmedLocalStreams[_].splice(D, 1), this._shimmedLocalStreams[_].length === 1 && delete this._shimmedLocalStreams[_]
          }),
        k.apply(this, arguments)
      )
    }
  }
  function Ae(s, f) {
    if (!s.RTCPeerConnection) return
    if (s.RTCPeerConnection.prototype.addTrack && f.version >= 65) return Me(s)
    const p = s.RTCPeerConnection.prototype.getLocalStreams
    s.RTCPeerConnection.prototype.getLocalStreams = function () {
      const I = p.apply(this)
      return (this._reverseStreams = this._reverseStreams || {}), I.map((j) => this._reverseStreams[j.id])
    }
    const m = s.RTCPeerConnection.prototype.addStream
    s.RTCPeerConnection.prototype.addStream = function (I) {
      if (
        ((this._streams = this._streams || {}),
        (this._reverseStreams = this._reverseStreams || {}),
        I.getTracks().forEach((j) => {
          if (this.getSenders().find((Y) => Y.track === j)) throw new DOMException('Track already exists.', 'InvalidAccessError')
        }),
        !this._reverseStreams[I.id])
      ) {
        const j = new s.MediaStream(I.getTracks())
        ;(this._streams[I.id] = j), (this._reverseStreams[j.id] = I), (I = j)
      }
      m.apply(this, [I])
    }
    const k = s.RTCPeerConnection.prototype.removeStream
    function E(I, j) {
      let Y = j.sdp
      return (
        Object.keys(I._reverseStreams || []).forEach((ne) => {
          const pe = I._reverseStreams[ne],
            kt = I._streams[pe.id]
          Y = Y.replace(new RegExp(kt.id, 'g'), pe.id)
        }),
        new RTCSessionDescription({ type: j.type, sdp: Y })
      )
    }
    ;(s.RTCPeerConnection.prototype.removeStream = function (I) {
      ;(this._streams = this._streams || {}), (this._reverseStreams = this._reverseStreams || {}), k.apply(this, [this._streams[I.id] || I]), delete this._reverseStreams[this._streams[I.id] ? this._streams[I.id].id : I.id], delete this._streams[I.id]
    }),
      (s.RTCPeerConnection.prototype.addTrack = function (I, j) {
        if (this.signalingState === 'closed') throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", 'InvalidStateError')
        const Y = [].slice.call(arguments, 1)
        if (Y.length !== 1 || !Y[0].getTracks().find((pe) => pe === I)) throw new DOMException('The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.', 'NotSupportedError')
        if (this.getSenders().find((pe) => pe.track === I)) throw new DOMException('Track already exists.', 'InvalidAccessError')
        ;(this._streams = this._streams || {}), (this._reverseStreams = this._reverseStreams || {})
        const ne = this._streams[j.id]
        if (ne)
          ne.addTrack(I),
            Promise.resolve().then(() => {
              this.dispatchEvent(new Event('negotiationneeded'))
            })
        else {
          const pe = new s.MediaStream([I])
          ;(this._streams[j.id] = pe), (this._reverseStreams[pe.id] = j), this.addStream(pe)
        }
        return this.getSenders().find((pe) => pe.track === I)
      }),
      ['createOffer', 'createAnswer'].forEach(function (I) {
        const j = s.RTCPeerConnection.prototype[I],
          Y = {
            [I]() {
              const ne = arguments
              return arguments.length && typeof arguments[0] == 'function'
                ? j.apply(this, [
                    (pe) => {
                      const kt = E(this, pe)
                      ne[0].apply(null, [kt])
                    },
                    (pe) => {
                      ne[1] && ne[1].apply(null, pe)
                    },
                    arguments[2],
                  ])
                : j.apply(this, arguments).then((pe) => E(this, pe))
            },
          }
        s.RTCPeerConnection.prototype[I] = Y[I]
      })
    const _ = s.RTCPeerConnection.prototype.setLocalDescription
    s.RTCPeerConnection.prototype.setLocalDescription = function () {
      return arguments.length && arguments[0].type
        ? ((arguments[0] = (function (I, j) {
            let Y = j.sdp
            return (
              Object.keys(I._reverseStreams || []).forEach((ne) => {
                const pe = I._reverseStreams[ne],
                  kt = I._streams[pe.id]
                Y = Y.replace(new RegExp(pe.id, 'g'), kt.id)
              }),
              new RTCSessionDescription({ type: j.type, sdp: Y })
            )
          })(this, arguments[0])),
          _.apply(this, arguments))
        : _.apply(this, arguments)
    }
    const D = Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype, 'localDescription')
    Object.defineProperty(s.RTCPeerConnection.prototype, 'localDescription', {
      get() {
        const I = D.get.apply(this)
        return I.type === '' ? I : E(this, I)
      },
    }),
      (s.RTCPeerConnection.prototype.removeTrack = function (I) {
        if (this.signalingState === 'closed') throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", 'InvalidStateError')
        if (!I._pc) throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.', 'TypeError')
        if (I._pc !== this) throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError')
        let j
        ;(this._streams = this._streams || {}),
          Object.keys(this._streams).forEach((Y) => {
            this._streams[Y].getTracks().find((ne) => I.track === ne) && (j = this._streams[Y])
          }),
          j && (j.getTracks().length === 1 ? this.removeStream(this._reverseStreams[j.id]) : j.removeTrack(I.track), this.dispatchEvent(new Event('negotiationneeded')))
      })
  }
  function He(s, f) {
    !s.RTCPeerConnection && s.webkitRTCPeerConnection && (s.RTCPeerConnection = s.webkitRTCPeerConnection),
      s.RTCPeerConnection &&
        f.version < 53 &&
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (p) {
          const m = s.RTCPeerConnection.prototype[p],
            k = {
              [p]() {
                return (arguments[0] = new (p === 'addIceCandidate' ? s.RTCIceCandidate : s.RTCSessionDescription)(arguments[0])), m.apply(this, arguments)
              },
            }
          s.RTCPeerConnection.prototype[p] = k[p]
        })
  }
  function mt(s, f) {
    T(s, 'negotiationneeded', (p) => {
      const m = p.target
      if (!(f.version < 72 || (m.getConfiguration && m.getConfiguration().sdpSemantics === 'plan-b')) || m.signalingState === 'stable') return p
    })
  }
  function gt(s, f) {
    const p = s && s.navigator,
      m = s && s.MediaStreamTrack
    if (
      ((p.getUserMedia = function (k, E, _) {
        b('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia'), p.mediaDevices.getUserMedia(k).then(E, _)
      }),
      !(f.version > 55 && 'autoGainControl' in p.mediaDevices.getSupportedConstraints()))
    ) {
      const k = function (_, D, I) {
          D in _ && !(I in _) && ((_[I] = _[D]), delete _[D])
        },
        E = p.mediaDevices.getUserMedia.bind(p.mediaDevices)
      if (
        ((p.mediaDevices.getUserMedia = function (_) {
          return typeof _ == 'object' && typeof _.audio == 'object' && ((_ = JSON.parse(JSON.stringify(_))), k(_.audio, 'autoGainControl', 'mozAutoGainControl'), k(_.audio, 'noiseSuppression', 'mozNoiseSuppression')), E(_)
        }),
        m && m.prototype.getSettings)
      ) {
        const _ = m.prototype.getSettings
        m.prototype.getSettings = function () {
          const D = _.apply(this, arguments)
          return k(D, 'mozAutoGainControl', 'autoGainControl'), k(D, 'mozNoiseSuppression', 'noiseSuppression'), D
        }
      }
      if (m && m.prototype.applyConstraints) {
        const _ = m.prototype.applyConstraints
        m.prototype.applyConstraints = function (D) {
          return this.kind === 'audio' && typeof D == 'object' && ((D = JSON.parse(JSON.stringify(D))), k(D, 'autoGainControl', 'mozAutoGainControl'), k(D, 'noiseSuppression', 'mozNoiseSuppression')), _.apply(this, [D])
        }
      }
    }
  }
  function it(s, f) {
    ;(s.navigator.mediaDevices && 'getDisplayMedia' in s.navigator.mediaDevices) ||
      (s.navigator.mediaDevices &&
        (s.navigator.mediaDevices.getDisplayMedia = function (p) {
          if (!p || !p.video) {
            const m = new DOMException('getDisplayMedia without video constraints is undefined')
            return (m.name = 'NotFoundError'), (m.code = 8), Promise.reject(m)
          }
          return p.video === !0 ? (p.video = { mediaSource: f }) : (p.video.mediaSource = f), s.navigator.mediaDevices.getUserMedia(p)
        }))
  }
  function st(s) {
    typeof s == 'object' &&
      s.RTCTrackEvent &&
      'receiver' in s.RTCTrackEvent.prototype &&
      !('transceiver' in s.RTCTrackEvent.prototype) &&
      Object.defineProperty(s.RTCTrackEvent.prototype, 'transceiver', {
        get() {
          return { receiver: this.receiver }
        },
      })
  }
  function lt(s, f) {
    if (typeof s != 'object' || (!s.RTCPeerConnection && !s.mozRTCPeerConnection)) return
    !s.RTCPeerConnection && s.mozRTCPeerConnection && (s.RTCPeerConnection = s.mozRTCPeerConnection),
      f.version < 53 &&
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (k) {
          const E = s.RTCPeerConnection.prototype[k],
            _ = {
              [k]() {
                return (arguments[0] = new (k === 'addIceCandidate' ? s.RTCIceCandidate : s.RTCSessionDescription)(arguments[0])), E.apply(this, arguments)
              },
            }
          s.RTCPeerConnection.prototype[k] = _[k]
        })
    const p = { inboundrtp: 'inbound-rtp', outboundrtp: 'outbound-rtp', candidatepair: 'candidate-pair', localcandidate: 'local-candidate', remotecandidate: 'remote-candidate' },
      m = s.RTCPeerConnection.prototype.getStats
    s.RTCPeerConnection.prototype.getStats = function () {
      const [k, E, _] = arguments
      return m
        .apply(this, [k || null])
        .then((D) => {
          if (f.version < 53 && !E)
            try {
              D.forEach((I) => {
                I.type = p[I.type] || I.type
              })
            } catch (I) {
              if (I.name !== 'TypeError') throw I
              D.forEach((j, Y) => {
                D.set(Y, Object.assign({}, j, { type: p[j.type] || j.type }))
              })
            }
          return D
        })
        .then(E, _)
    }
  }
  function Ye(s) {
    if (typeof s != 'object' || !s.RTCPeerConnection || !s.RTCRtpSender || (s.RTCRtpSender && 'getStats' in s.RTCRtpSender.prototype)) return
    const f = s.RTCPeerConnection.prototype.getSenders
    f &&
      (s.RTCPeerConnection.prototype.getSenders = function () {
        const m = f.apply(this, [])
        return m.forEach((k) => (k._pc = this)), m
      })
    const p = s.RTCPeerConnection.prototype.addTrack
    p &&
      (s.RTCPeerConnection.prototype.addTrack = function () {
        const m = p.apply(this, arguments)
        return (m._pc = this), m
      }),
      (s.RTCRtpSender.prototype.getStats = function () {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map())
      })
  }
  function Ie(s) {
    if (typeof s != 'object' || !s.RTCPeerConnection || !s.RTCRtpSender || (s.RTCRtpSender && 'getStats' in s.RTCRtpReceiver.prototype)) return
    const f = s.RTCPeerConnection.prototype.getReceivers
    f &&
      (s.RTCPeerConnection.prototype.getReceivers = function () {
        const p = f.apply(this, [])
        return p.forEach((m) => (m._pc = this)), p
      }),
      T(s, 'track', (p) => ((p.receiver._pc = p.srcElement), p)),
      (s.RTCRtpReceiver.prototype.getStats = function () {
        return this._pc.getStats(this.track)
      })
  }
  function Q(s) {
    s.RTCPeerConnection &&
      !('removeStream' in s.RTCPeerConnection.prototype) &&
      (s.RTCPeerConnection.prototype.removeStream = function (f) {
        b('removeStream', 'removeTrack'),
          this.getSenders().forEach((p) => {
            p.track && f.getTracks().includes(p.track) && this.removeTrack(p)
          })
      })
  }
  function ae(s) {
    s.DataChannel && !s.RTCDataChannel && (s.RTCDataChannel = s.DataChannel)
  }
  function Z(s) {
    if (typeof s != 'object' || !s.RTCPeerConnection) return
    const f = s.RTCPeerConnection.prototype.addTransceiver
    f &&
      (s.RTCPeerConnection.prototype.addTransceiver = function () {
        this.setParametersPromises = []
        let p = arguments[1] && arguments[1].sendEncodings
        p === void 0 && (p = []), (p = [...p])
        const m = p.length > 0
        m &&
          p.forEach((E) => {
            if ('rid' in E && !/^[a-z0-9]{0,16}$/i.test(E.rid)) throw new TypeError('Invalid RID value provided.')
            if ('scaleResolutionDownBy' in E && !(parseFloat(E.scaleResolutionDownBy) >= 1)) throw new RangeError('scale_resolution_down_by must be >= 1.0')
            if ('maxFramerate' in E && !(parseFloat(E.maxFramerate) >= 0)) throw new RangeError('max_framerate must be >= 0.0')
          })
        const k = f.apply(this, arguments)
        if (m) {
          const { sender: E } = k,
            _ = E.getParameters()
          ;(!('encodings' in _) || (_.encodings.length === 1 && Object.keys(_.encodings[0]).length === 0)) &&
            ((_.encodings = p),
            (E.sendEncodings = p),
            this.setParametersPromises.push(
              E.setParameters(_)
                .then(() => {
                  delete E.sendEncodings
                })
                .catch(() => {
                  delete E.sendEncodings
                }),
            ))
        }
        return k
      })
  }
  function P(s) {
    if (typeof s != 'object' || !s.RTCRtpSender) return
    const f = s.RTCRtpSender.prototype.getParameters
    f &&
      (s.RTCRtpSender.prototype.getParameters = function () {
        const p = f.apply(this, arguments)
        return 'encodings' in p || (p.encodings = [].concat(this.sendEncodings || [{}])), p
      })
  }
  function M(s) {
    if (typeof s != 'object' || !s.RTCPeerConnection) return
    const f = s.RTCPeerConnection.prototype.createOffer
    s.RTCPeerConnection.prototype.createOffer = function () {
      return this.setParametersPromises && this.setParametersPromises.length
        ? Promise.all(this.setParametersPromises)
            .then(() => f.apply(this, arguments))
            .finally(() => {
              this.setParametersPromises = []
            })
        : f.apply(this, arguments)
    }
  }
  function de(s) {
    if (typeof s != 'object' || !s.RTCPeerConnection) return
    const f = s.RTCPeerConnection.prototype.createAnswer
    s.RTCPeerConnection.prototype.createAnswer = function () {
      return this.setParametersPromises && this.setParametersPromises.length
        ? Promise.all(this.setParametersPromises)
            .then(() => f.apply(this, arguments))
            .finally(() => {
              this.setParametersPromises = []
            })
        : f.apply(this, arguments)
    }
  }
  function fe(s) {
    if (typeof s == 'object' && s.RTCPeerConnection) {
      if (
        ('getLocalStreams' in s.RTCPeerConnection.prototype ||
          (s.RTCPeerConnection.prototype.getLocalStreams = function () {
            return this._localStreams || (this._localStreams = []), this._localStreams
          }),
        !('addStream' in s.RTCPeerConnection.prototype))
      ) {
        const f = s.RTCPeerConnection.prototype.addTrack
        ;(s.RTCPeerConnection.prototype.addStream = function (p) {
          this._localStreams || (this._localStreams = []), this._localStreams.includes(p) || this._localStreams.push(p), p.getAudioTracks().forEach((m) => f.call(this, m, p)), p.getVideoTracks().forEach((m) => f.call(this, m, p))
        }),
          (s.RTCPeerConnection.prototype.addTrack = function (p, ...m) {
            return (
              m &&
                m.forEach((k) => {
                  this._localStreams ? this._localStreams.includes(k) || this._localStreams.push(k) : (this._localStreams = [k])
                }),
              f.apply(this, arguments)
            )
          })
      }
      'removeStream' in s.RTCPeerConnection.prototype ||
        (s.RTCPeerConnection.prototype.removeStream = function (f) {
          this._localStreams || (this._localStreams = [])
          const p = this._localStreams.indexOf(f)
          if (p === -1) return
          this._localStreams.splice(p, 1)
          const m = f.getTracks()
          this.getSenders().forEach((k) => {
            m.includes(k.track) && this.removeTrack(k)
          })
        })
    }
  }
  function ve(s) {
    if (
      typeof s == 'object' &&
      s.RTCPeerConnection &&
      ('getRemoteStreams' in s.RTCPeerConnection.prototype ||
        (s.RTCPeerConnection.prototype.getRemoteStreams = function () {
          return this._remoteStreams ? this._remoteStreams : []
        }),
      !('onaddstream' in s.RTCPeerConnection.prototype))
    ) {
      Object.defineProperty(s.RTCPeerConnection.prototype, 'onaddstream', {
        get() {
          return this._onaddstream
        },
        set(p) {
          this._onaddstream && (this.removeEventListener('addstream', this._onaddstream), this.removeEventListener('track', this._onaddstreampoly)),
            this.addEventListener('addstream', (this._onaddstream = p)),
            this.addEventListener(
              'track',
              (this._onaddstreampoly = (m) => {
                m.streams.forEach((k) => {
                  if ((this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(k))) return
                  this._remoteStreams.push(k)
                  const E = new Event('addstream')
                  ;(E.stream = k), this.dispatchEvent(E)
                })
              }),
            )
        },
      })
      const f = s.RTCPeerConnection.prototype.setRemoteDescription
      s.RTCPeerConnection.prototype.setRemoteDescription = function () {
        const p = this
        return (
          this._onaddstreampoly ||
            this.addEventListener(
              'track',
              (this._onaddstreampoly = function (m) {
                m.streams.forEach((k) => {
                  if ((p._remoteStreams || (p._remoteStreams = []), p._remoteStreams.indexOf(k) >= 0)) return
                  p._remoteStreams.push(k)
                  const E = new Event('addstream')
                  ;(E.stream = k), p.dispatchEvent(E)
                })
              }),
            ),
          f.apply(p, arguments)
        )
      }
    }
  }
  function ye(s) {
    if (typeof s != 'object' || !s.RTCPeerConnection) return
    const f = s.RTCPeerConnection.prototype,
      p = f.createOffer,
      m = f.createAnswer,
      k = f.setLocalDescription,
      E = f.setRemoteDescription,
      _ = f.addIceCandidate
    ;(f.createOffer = function (I, j) {
      const Y = arguments.length >= 2 ? arguments[2] : arguments[0],
        ne = p.apply(this, [Y])
      return j ? (ne.then(I, j), Promise.resolve()) : ne
    }),
      (f.createAnswer = function (I, j) {
        const Y = arguments.length >= 2 ? arguments[2] : arguments[0],
          ne = m.apply(this, [Y])
        return j ? (ne.then(I, j), Promise.resolve()) : ne
      })
    let D = function (I, j, Y) {
      const ne = k.apply(this, [I])
      return Y ? (ne.then(j, Y), Promise.resolve()) : ne
    }
    ;(f.setLocalDescription = D),
      (D = function (I, j, Y) {
        const ne = E.apply(this, [I])
        return Y ? (ne.then(j, Y), Promise.resolve()) : ne
      }),
      (f.setRemoteDescription = D),
      (D = function (I, j, Y) {
        const ne = _.apply(this, [I])
        return Y ? (ne.then(j, Y), Promise.resolve()) : ne
      }),
      (f.addIceCandidate = D)
  }
  function Ee(s) {
    const f = s && s.navigator
    if (f.mediaDevices && f.mediaDevices.getUserMedia) {
      const p = f.mediaDevices,
        m = p.getUserMedia.bind(p)
      f.mediaDevices.getUserMedia = (k) => m(Ce(k))
    }
    !f.getUserMedia &&
      f.mediaDevices &&
      f.mediaDevices.getUserMedia &&
      (f.getUserMedia = function (p, m, k) {
        f.mediaDevices.getUserMedia(p).then(m, k)
      }.bind(f))
  }
  function Ce(s) {
    return s && s.video !== void 0 ? Object.assign({}, s, { video: V(s.video) }) : s
  }
  function Pe(s) {
    if (!s.RTCPeerConnection) return
    const f = s.RTCPeerConnection
    ;(s.RTCPeerConnection = function (p, m) {
      if (p && p.iceServers) {
        const k = []
        for (let E = 0; E < p.iceServers.length; E++) {
          let _ = p.iceServers[E]
          _.urls === void 0 && _.url ? (b('RTCIceServer.url', 'RTCIceServer.urls'), (_ = JSON.parse(JSON.stringify(_))), (_.urls = _.url), delete _.url, k.push(_)) : k.push(p.iceServers[E])
        }
        p.iceServers = k
      }
      return new f(p, m)
    }),
      (s.RTCPeerConnection.prototype = f.prototype),
      'generateCertificate' in f && Object.defineProperty(s.RTCPeerConnection, 'generateCertificate', { get: () => f.generateCertificate })
  }
  function Ze(s) {
    typeof s == 'object' &&
      s.RTCTrackEvent &&
      'receiver' in s.RTCTrackEvent.prototype &&
      !('transceiver' in s.RTCTrackEvent.prototype) &&
      Object.defineProperty(s.RTCTrackEvent.prototype, 'transceiver', {
        get() {
          return { receiver: this.receiver }
        },
      })
  }
  function An(s) {
    const f = s.RTCPeerConnection.prototype.createOffer
    s.RTCPeerConnection.prototype.createOffer = function (p) {
      if (p) {
        p.offerToReceiveAudio !== void 0 && (p.offerToReceiveAudio = !!p.offerToReceiveAudio)
        const m = this.getTransceivers().find((E) => E.receiver.track.kind === 'audio')
        p.offerToReceiveAudio === !1 && m ? (m.direction === 'sendrecv' ? (m.setDirection ? m.setDirection('sendonly') : (m.direction = 'sendonly')) : m.direction === 'recvonly' && (m.setDirection ? m.setDirection('inactive') : (m.direction = 'inactive'))) : p.offerToReceiveAudio !== !0 || m || this.addTransceiver('audio', { direction: 'recvonly' }), p.offerToReceiveVideo !== void 0 && (p.offerToReceiveVideo = !!p.offerToReceiveVideo)
        const k = this.getTransceivers().find((E) => E.receiver.track.kind === 'video')
        p.offerToReceiveVideo === !1 && k ? (k.direction === 'sendrecv' ? (k.setDirection ? k.setDirection('sendonly') : (k.direction = 'sendonly')) : k.direction === 'recvonly' && (k.setDirection ? k.setDirection('inactive') : (k.direction = 'inactive'))) : p.offerToReceiveVideo !== !0 || k || this.addTransceiver('video', { direction: 'recvonly' })
      }
      return f.apply(this, arguments)
    }
  }
  function Tr(s) {
    typeof s != 'object' || s.AudioContext || (s.AudioContext = s.webkitAudioContext)
  }
  var In = Ve(347),
    Wt = Ve.n(In)
  function On(s) {
    if (!s.RTCIceCandidate || (s.RTCIceCandidate && 'foundation' in s.RTCIceCandidate.prototype)) return
    const f = s.RTCIceCandidate
    ;(s.RTCIceCandidate = function (p) {
      if ((typeof p == 'object' && p.candidate && p.candidate.indexOf('a=') === 0 && ((p = JSON.parse(JSON.stringify(p))).candidate = p.candidate.substring(2)), p.candidate && p.candidate.length)) {
        const m = new f(p),
          k = Wt().parseCandidate(p.candidate)
        for (const E in k) E in m || Object.defineProperty(m, E, { value: k[E] })
        return (
          (m.toJSON = function () {
            return { candidate: m.candidate, sdpMid: m.sdpMid, sdpMLineIndex: m.sdpMLineIndex, usernameFragment: m.usernameFragment }
          }),
          m
        )
      }
      return new f(p)
    }),
      (s.RTCIceCandidate.prototype = f.prototype),
      T(s, 'icecandidate', (p) => (p.candidate && Object.defineProperty(p, 'candidate', { value: new s.RTCIceCandidate(p.candidate), writable: 'false' }), p))
  }
  function Qn(s) {
    !s.RTCIceCandidate ||
      (s.RTCIceCandidate && 'relayProtocol' in s.RTCIceCandidate.prototype) ||
      T(s, 'icecandidate', (f) => {
        if (f.candidate) {
          const p = Wt().parseCandidate(f.candidate.candidate)
          p.type === 'relay' && (f.candidate.relayProtocol = { 0: 'tls', 1: 'tcp', 2: 'udp' }[p.priority >> 24])
        }
        return f
      })
  }
  function rn(s, f) {
    if (!s.RTCPeerConnection) return
    'sctp' in s.RTCPeerConnection.prototype ||
      Object.defineProperty(s.RTCPeerConnection.prototype, 'sctp', {
        get() {
          return this._sctp === void 0 ? null : this._sctp
        },
      })
    const p = s.RTCPeerConnection.prototype.setRemoteDescription
    s.RTCPeerConnection.prototype.setRemoteDescription = function () {
      if (((this._sctp = null), f.browser === 'chrome' && f.version >= 76)) {
        const { sdpSemantics: m } = this.getConfiguration()
        m === 'plan-b' &&
          Object.defineProperty(this, 'sctp', {
            get() {
              return this._sctp === void 0 ? null : this._sctp
            },
            enumerable: !0,
            configurable: !0,
          })
      }
      if (
        (function (m) {
          if (!m || !m.sdp) return !1
          const k = Wt().splitSections(m.sdp)
          return (
            k.shift(),
            k.some((E) => {
              const _ = Wt().parseMLine(E)
              return _ && _.kind === 'application' && _.protocol.indexOf('SCTP') !== -1
            })
          )
        })(arguments[0])
      ) {
        const m = (function (I) {
            const j = I.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/)
            if (j === null || j.length < 2) return -1
            const Y = parseInt(j[1], 10)
            return Y != Y ? -1 : Y
          })(arguments[0]),
          k = (function (I) {
            let j = 65536
            return f.browser === 'firefox' && (j = f.version < 57 ? (I === -1 ? 16384 : 2147483637) : f.version < 60 ? (f.version === 57 ? 65535 : 65536) : 2147483637), j
          })(m),
          E = (function (I, j) {
            let Y = 65536
            f.browser === 'firefox' && f.version === 57 && (Y = 65535)
            const ne = Wt().matchPrefix(I.sdp, 'a=max-message-size:')
            return ne.length > 0 ? (Y = parseInt(ne[0].substring(19), 10)) : f.browser === 'firefox' && j !== -1 && (Y = 2147483637), Y
          })(arguments[0], m)
        let _
        _ = k === 0 && E === 0 ? Number.POSITIVE_INFINITY : k === 0 || E === 0 ? Math.max(k, E) : Math.min(k, E)
        const D = {}
        Object.defineProperty(D, 'maxMessageSize', { get: () => _ }), (this._sctp = D)
      }
      return p.apply(this, arguments)
    }
  }
  function Nn(s) {
    if (!s.RTCPeerConnection || !('createDataChannel' in s.RTCPeerConnection.prototype)) return
    function f(m, k) {
      const E = m.send
      m.send = function () {
        const _ = arguments[0],
          D = _.length || _.size || _.byteLength
        if (m.readyState === 'open' && k.sctp && D > k.sctp.maxMessageSize) throw new TypeError('Message too large (can send a maximum of ' + k.sctp.maxMessageSize + ' bytes)')
        return E.apply(m, arguments)
      }
    }
    const p = s.RTCPeerConnection.prototype.createDataChannel
    ;(s.RTCPeerConnection.prototype.createDataChannel = function () {
      const m = p.apply(this, arguments)
      return f(m, this), m
    }),
      T(s, 'datachannel', (m) => (f(m.channel, m.target), m))
  }
  function Dn(s) {
    if (!s.RTCPeerConnection || 'connectionState' in s.RTCPeerConnection.prototype) return
    const f = s.RTCPeerConnection.prototype
    Object.defineProperty(f, 'connectionState', {
      get() {
        return { completed: 'connected', checking: 'connecting' }[this.iceConnectionState] || this.iceConnectionState
      },
      enumerable: !0,
      configurable: !0,
    }),
      Object.defineProperty(f, 'onconnectionstatechange', {
        get() {
          return this._onconnectionstatechange || null
        },
        set(p) {
          this._onconnectionstatechange && (this.removeEventListener('connectionstatechange', this._onconnectionstatechange), delete this._onconnectionstatechange), p && this.addEventListener('connectionstatechange', (this._onconnectionstatechange = p))
        },
        enumerable: !0,
        configurable: !0,
      }),
      ['setLocalDescription', 'setRemoteDescription'].forEach((p) => {
        const m = f[p]
        f[p] = function () {
          return (
            this._connectionstatechangepoly ||
              ((this._connectionstatechangepoly = (k) => {
                const E = k.target
                if (E._lastConnectionState !== E.connectionState) {
                  E._lastConnectionState = E.connectionState
                  const _ = new Event('connectionstatechange', k)
                  E.dispatchEvent(_)
                }
                return k
              }),
              this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly)),
            m.apply(this, arguments)
          )
        }
      })
  }
  function Bt(s, f) {
    if (!s.RTCPeerConnection || (f.browser === 'chrome' && f.version >= 71) || (f.browser === 'safari' && f.version >= 605)) return
    const p = s.RTCPeerConnection.prototype.setRemoteDescription
    s.RTCPeerConnection.prototype.setRemoteDescription = function (m) {
      if (
        m &&
        m.sdp &&
        m.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1
      ) {
        const k = m.sdp
          .split(
            `
`,
          )
          .filter((E) => E.trim() !== 'a=extmap-allow-mixed').join(`
`)
        s.RTCSessionDescription && m instanceof s.RTCSessionDescription ? (arguments[0] = new s.RTCSessionDescription({ type: m.type, sdp: k })) : (m.sdp = k)
      }
      return p.apply(this, arguments)
    }
  }
  function Lt(s, f) {
    if (!s.RTCPeerConnection || !s.RTCPeerConnection.prototype) return
    const p = s.RTCPeerConnection.prototype.addIceCandidate
    p &&
      p.length !== 0 &&
      (s.RTCPeerConnection.prototype.addIceCandidate = function () {
        return arguments[0] ? (((f.browser === 'chrome' && f.version < 78) || (f.browser === 'firefox' && f.version < 68) || f.browser === 'safari') && arguments[0] && arguments[0].candidate === '' ? Promise.resolve() : p.apply(this, arguments)) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
      })
  }
  function on(s, f) {
    if (!s.RTCPeerConnection || !s.RTCPeerConnection.prototype) return
    const p = s.RTCPeerConnection.prototype.setLocalDescription
    p &&
      p.length !== 0 &&
      (s.RTCPeerConnection.prototype.setLocalDescription = function () {
        let m = arguments[0] || {}
        if (typeof m != 'object' || (m.type && m.sdp)) return p.apply(this, arguments)
        if (((m = { type: m.type, sdp: m.sdp }), !m.type))
          switch (this.signalingState) {
            case 'stable':
            case 'have-local-offer':
            case 'have-remote-pranswer':
              m.type = 'offer'
              break
            default:
              m.type = 'answer'
          }
        return m.sdp || (m.type !== 'offer' && m.type !== 'answer') ? p.apply(this, [m]) : (m.type === 'offer' ? this.createOffer : this.createAnswer).apply(this).then((k) => p.apply(this, [k]))
      })
  }
  ;(function ({ window: s } = {}, f = { shimChrome: !0, shimFirefox: !0, shimSafari: !0 }) {
    const p = U,
      m = (function (E) {
        const _ = { browser: null, version: null }
        if (E === void 0 || !E.navigator || !E.navigator.userAgent) return (_.browser = 'Not a browser.'), _
        const { navigator: D } = E
        if (D.mozGetUserMedia) (_.browser = 'firefox'), (_.version = C(D.userAgent, /Firefox\/(\d+)\./, 1))
        else if (D.webkitGetUserMedia || (E.isSecureContext === !1 && E.webkitRTCPeerConnection)) (_.browser = 'chrome'), (_.version = C(D.userAgent, /Chrom(e|ium)\/(\d+)\./, 2))
        else {
          if (!E.RTCPeerConnection || !D.userAgent.match(/AppleWebKit\/(\d+)\./)) return (_.browser = 'Not a supported browser.'), _
          ;(_.browser = 'safari'), (_.version = C(D.userAgent, /AppleWebKit\/(\d+)\./, 1)), (_.supportsUnifiedPlan = E.RTCRtpTransceiver && 'currentDirection' in E.RTCRtpTransceiver.prototype)
        }
        return _
      })(s),
      k = { browserDetails: m, commonShim: u, extractVersion: C, disableLog: w, disableWarnings: R, sdp: In }
    switch (m.browser) {
      case 'chrome':
        if (!l || !He || !f.shimChrome) return p('Chrome shim is not included in this adapter release.'), k
        if (m.version === null) return p('Chrome shim can not determine version, not shimming.'), k
        p('adapter.js shimming chrome.'), (k.browserShim = l), Lt(s, m), on(s), K(s, m), ce(s), He(s, m), me(s), Ae(s, m), we(s), Le(s), Re(s), mt(s, m), On(s), Qn(s), Dn(s), rn(s, m), Nn(s), Bt(s, m)
        break
      case 'firefox':
        if (!d || !lt || !f.shimFirefox) return p('Firefox shim is not included in this adapter release.'), k
        p('adapter.js shimming firefox.'), (k.browserShim = d), Lt(s, m), on(s), gt(s, m), lt(s, m), st(s), Q(s), Ye(s), Ie(s), ae(s), Z(s), P(s), M(s), de(s), On(s), Dn(s), rn(s, m), Nn(s)
        break
      case 'safari':
        if (!a || !f.shimSafari) return p('Safari shim is not included in this adapter release.'), k
        p('adapter.js shimming safari.'), (k.browserShim = a), Lt(s, m), on(s), Pe(s), An(s), ye(s), fe(s), ve(s), Ze(s), Ee(s), Tr(s), On(s), Qn(s), rn(s, m), Nn(s), Bt(s, m)
        break
      default:
        p('Unsupported browser!')
    }
  })({ window: typeof window > 'u' ? void 0 : window })
  const Ci = Object.freeze({ meta: null, signalingServerUrl: 'ws://127.0.0.1:8443', reconnectionTimeout: 2500, webrtcConfig: { iceServers: [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }] } }),
    ke = Object.freeze({ idle: 0, connecting: 1, streaming: 2, closed: 3 })
  class Pr extends EventTarget {
    constructor(f, p) {
      super(), (this._peerId = f), (this._sessionId = ''), (this._comChannel = p), (this._state = ke.idle), (this._rtcPeerConnection = null)
    }
    get peerId() {
      return this._peerId
    }
    get sessionId() {
      return this._sessionId
    }
    get state() {
      return this._state
    }
    get rtcPeerConnection() {
      return this._rtcPeerConnection
    }
    close() {
      this._state !== ke.closed && (this._state !== ke.idle && this._comChannel && this._sessionId && this._comChannel.send({ type: 'endSession', sessionId: this._sessionId }), (this._state = ke.closed), this.dispatchEvent(new Event('stateChanged')), (this._comChannel = null), this._rtcPeerConnection && (this._rtcPeerConnection.close(), (this._rtcPeerConnection = null), this.dispatchEvent(new Event('rtcPeerConnectionChanged'))), this.dispatchEvent(new Event('closed')))
    }
  }
  const Rr = Object.freeze({
      32: 'space',
      33: 'exclam',
      34: 'quotedbl',
      35: 'numbersign',
      36: 'dollar',
      37: 'percent',
      38: 'ampersand',
      39: 'apostrophe',
      40: 'parenleft',
      41: 'parenright',
      42: 'asterisk',
      43: 'plus',
      44: 'comma',
      45: 'minus',
      46: 'period',
      47: 'slash',
      48: '0',
      49: '1',
      50: '2',
      51: '3',
      52: '4',
      53: '5',
      54: '6',
      55: '7',
      56: '8',
      57: '9',
      58: 'colon',
      59: 'semicolon',
      60: 'less',
      61: 'equal',
      62: 'greater',
      63: 'question',
      64: 'at',
      65: 'A',
      66: 'B',
      67: 'C',
      68: 'D',
      69: 'E',
      70: 'F',
      71: 'G',
      72: 'H',
      73: 'I',
      74: 'J',
      75: 'K',
      76: 'L',
      77: 'M',
      78: 'N',
      79: 'O',
      80: 'P',
      81: 'Q',
      82: 'R',
      83: 'S',
      84: 'T',
      85: 'U',
      86: 'V',
      87: 'W',
      88: 'X',
      89: 'Y',
      90: 'Z',
      91: 'bracketleft',
      92: 'backslash',
      93: 'bracketright',
      94: 'asciicircum',
      95: 'underscore',
      96: 'grave',
      97: 'a',
      98: 'b',
      99: 'c',
      100: 'd',
      101: 'e',
      102: 'f',
      103: 'g',
      104: 'h',
      105: 'i',
      106: 'j',
      107: 'k',
      108: 'l',
      109: 'm',
      110: 'n',
      111: 'o',
      112: 'p',
      113: 'q',
      114: 'r',
      115: 's',
      116: 't',
      117: 'u',
      118: 'v',
      119: 'w',
      120: 'x',
      121: 'y',
      122: 'z',
      123: 'braceleft',
      124: 'bar',
      125: 'braceright',
      126: 'asciitilde',
      160: 'nobreakspace',
      161: 'exclamdown',
      162: 'cent',
      163: 'sterling',
      164: 'currency',
      165: 'yen',
      166: 'brokenbar',
      167: 'section',
      168: 'diaeresis',
      169: 'copyright',
      170: 'ordfeminine',
      171: 'guillemotleft',
      172: 'notsign',
      173: 'hyphen',
      174: 'registered',
      175: 'macron',
      176: 'degree',
      177: 'plusminus',
      178: 'twosuperior',
      179: 'threesuperior',
      180: 'acute',
      181: 'mu',
      182: 'paragraph',
      183: 'periodcentered',
      184: 'cedilla',
      185: 'onesuperior',
      186: 'masculine',
      187: 'guillemotright',
      188: 'onequarter',
      189: 'onehalf',
      190: 'threequarters',
      191: 'questiondown',
      192: 'Agrave',
      193: 'Aacute',
      194: 'Acircumflex',
      195: 'Atilde',
      196: 'Adiaeresis',
      197: 'Aring',
      198: 'AE',
      199: 'Ccedilla',
      200: 'Egrave',
      201: 'Eacute',
      202: 'Ecircumflex',
      203: 'Ediaeresis',
      204: 'Igrave',
      205: 'Iacute',
      206: 'Icircumflex',
      207: 'Idiaeresis',
      208: 'ETH',
      209: 'Ntilde',
      210: 'Ograve',
      211: 'Oacute',
      212: 'Ocircumflex',
      213: 'Otilde',
      214: 'Odiaeresis',
      215: 'multiply',
      216: 'Ooblique',
      217: 'Ugrave',
      218: 'Uacute',
      219: 'Ucircumflex',
      220: 'Udiaeresis',
      221: 'Yacute',
      222: 'THORN',
      223: 'ssharp',
      224: 'agrave',
      225: 'aacute',
      226: 'acircumflex',
      227: 'atilde',
      228: 'adiaeresis',
      229: 'aring',
      230: 'ae',
      231: 'ccedilla',
      232: 'egrave',
      233: 'eacute',
      234: 'ecircumflex',
      235: 'ediaeresis',
      236: 'igrave',
      237: 'iacute',
      238: 'icircumflex',
      239: 'idiaeresis',
      240: 'eth',
      241: 'ntilde',
      242: 'ograve',
      243: 'oacute',
      244: 'ocircumflex',
      245: 'otilde',
      246: 'odiaeresis',
      247: 'division',
      248: 'oslash',
      249: 'ugrave',
      250: 'uacute',
      251: 'ucircumflex',
      252: 'udiaeresis',
      253: 'yacute',
      254: 'thorn',
      255: 'ydiaeresis',
      260: 'Aogonek',
      728: 'breve',
      321: 'Lstroke',
      317: 'Lcaron',
      346: 'Sacute',
      352: 'Scaron',
      350: 'Scedilla',
      356: 'Tcaron',
      377: 'Zacute',
      381: 'Zcaron',
      379: 'Zabovedot',
      261: 'aogonek',
      731: 'ogonek',
      322: 'lstroke',
      318: 'lcaron',
      347: 'sacute',
      711: 'caron',
      353: 'scaron',
      351: 'scedilla',
      357: 'tcaron',
      378: 'zacute',
      733: 'doubleacute',
      382: 'zcaron',
      380: 'zabovedot',
      340: 'Racute',
      258: 'Abreve',
      313: 'Lacute',
      262: 'Cacute',
      268: 'Ccaron',
      280: 'Eogonek',
      282: 'Ecaron',
      270: 'Dcaron',
      272: 'Dstroke',
      323: 'Nacute',
      327: 'Ncaron',
      336: 'Odoubleacute',
      344: 'Rcaron',
      366: 'Uring',
      368: 'Udoubleacute',
      354: 'Tcedilla',
      341: 'racute',
      259: 'abreve',
      314: 'lacute',
      263: 'cacute',
      269: 'ccaron',
      281: 'eogonek',
      283: 'ecaron',
      271: 'dcaron',
      273: 'dstroke',
      324: 'nacute',
      328: 'ncaron',
      337: 'odoubleacute',
      345: 'rcaron',
      367: 'uring',
      369: 'udoubleacute',
      355: 'tcedilla',
      729: 'abovedot',
      294: 'Hstroke',
      292: 'Hcircumflex',
      304: 'Iabovedot',
      286: 'Gbreve',
      308: 'Jcircumflex',
      295: 'hstroke',
      293: 'hcircumflex',
      305: 'idotless',
      287: 'gbreve',
      309: 'jcircumflex',
      266: 'Cabovedot',
      264: 'Ccircumflex',
      288: 'Gabovedot',
      284: 'Gcircumflex',
      364: 'Ubreve',
      348: 'Scircumflex',
      267: 'cabovedot',
      265: 'ccircumflex',
      289: 'gabovedot',
      285: 'gcircumflex',
      365: 'ubreve',
      349: 'scircumflex',
      312: 'kra',
      342: 'Rcedilla',
      296: 'Itilde',
      315: 'Lcedilla',
      274: 'Emacron',
      290: 'Gcedilla',
      358: 'Tslash',
      343: 'rcedilla',
      297: 'itilde',
      316: 'lcedilla',
      275: 'emacron',
      291: 'gcedilla',
      359: 'tslash',
      330: 'ENG',
      331: 'eng',
      256: 'Amacron',
      302: 'Iogonek',
      278: 'Eabovedot',
      298: 'Imacron',
      325: 'Ncedilla',
      332: 'Omacron',
      310: 'Kcedilla',
      370: 'Uogonek',
      360: 'Utilde',
      362: 'Umacron',
      257: 'amacron',
      303: 'iogonek',
      279: 'eabovedot',
      299: 'imacron',
      326: 'ncedilla',
      333: 'omacron',
      311: 'kcedilla',
      371: 'uogonek',
      361: 'utilde',
      363: 'umacron',
      8254: 'overline',
      12290: 'kana_fullstop',
      12300: 'kana_openingbracket',
      12301: 'kana_closingbracket',
      12289: 'kana_comma',
      12539: 'kana_conjunctive',
      12530: 'kana_WO',
      12449: 'kana_a',
      12451: 'kana_i',
      12453: 'kana_u',
      12455: 'kana_e',
      12457: 'kana_o',
      12515: 'kana_ya',
      12517: 'kana_yu',
      12519: 'kana_yo',
      12483: 'kana_tsu',
      12540: 'prolongedsound',
      12450: 'kana_A',
      12452: 'kana_I',
      12454: 'kana_U',
      12456: 'kana_E',
      12458: 'kana_O',
      12459: 'kana_KA',
      12461: 'kana_KI',
      12463: 'kana_KU',
      12465: 'kana_KE',
      12467: 'kana_KO',
      12469: 'kana_SA',
      12471: 'kana_SHI',
      12473: 'kana_SU',
      12475: 'kana_SE',
      12477: 'kana_SO',
      12479: 'kana_TA',
      12481: 'kana_CHI',
      12484: 'kana_TSU',
      12486: 'kana_TE',
      12488: 'kana_TO',
      12490: 'kana_NA',
      12491: 'kana_NI',
      12492: 'kana_NU',
      12493: 'kana_NE',
      12494: 'kana_NO',
      12495: 'kana_HA',
      12498: 'kana_HI',
      12501: 'kana_FU',
      12504: 'kana_HE',
      12507: 'kana_HO',
      12510: 'kana_MA',
      12511: 'kana_MI',
      12512: 'kana_MU',
      12513: 'kana_ME',
      12514: 'kana_MO',
      12516: 'kana_YA',
      12518: 'kana_YU',
      12520: 'kana_YO',
      12521: 'kana_RA',
      12522: 'kana_RI',
      12523: 'kana_RU',
      12524: 'kana_RE',
      12525: 'kana_RO',
      12527: 'kana_WA',
      12531: 'kana_N',
      12443: 'voicedsound',
      12444: 'semivoicedsound',
      1548: 'Arabic_comma',
      1563: 'Arabic_semicolon',
      1567: 'Arabic_question_mark',
      1569: 'Arabic_hamza',
      1570: 'Arabic_maddaonalef',
      1571: 'Arabic_hamzaonalef',
      1572: 'Arabic_hamzaonwaw',
      1573: 'Arabic_hamzaunderalef',
      1574: 'Arabic_hamzaonyeh',
      1575: 'Arabic_alef',
      1576: 'Arabic_beh',
      1577: 'Arabic_tehmarbuta',
      1578: 'Arabic_teh',
      1579: 'Arabic_theh',
      1580: 'Arabic_jeem',
      1581: 'Arabic_hah',
      1582: 'Arabic_khah',
      1583: 'Arabic_dal',
      1584: 'Arabic_thal',
      1585: 'Arabic_ra',
      1586: 'Arabic_zain',
      1587: 'Arabic_seen',
      1588: 'Arabic_sheen',
      1589: 'Arabic_sad',
      1590: 'Arabic_dad',
      1591: 'Arabic_tah',
      1592: 'Arabic_zah',
      1593: 'Arabic_ain',
      1594: 'Arabic_ghain',
      1600: 'Arabic_tatweel',
      1601: 'Arabic_feh',
      1602: 'Arabic_qaf',
      1603: 'Arabic_kaf',
      1604: 'Arabic_lam',
      1605: 'Arabic_meem',
      1606: 'Arabic_noon',
      1607: 'Arabic_ha',
      1608: 'Arabic_waw',
      1609: 'Arabic_alefmaksura',
      1610: 'Arabic_yeh',
      1611: 'Arabic_fathatan',
      1612: 'Arabic_dammatan',
      1613: 'Arabic_kasratan',
      1614: 'Arabic_fatha',
      1615: 'Arabic_damma',
      1616: 'Arabic_kasra',
      1617: 'Arabic_shadda',
      1618: 'Arabic_sukun',
      1106: 'Serbian_dje',
      1107: 'Macedonia_gje',
      1105: 'Cyrillic_io',
      1108: 'Ukrainian_ie',
      1109: 'Macedonia_dse',
      1110: 'Ukrainian_i',
      1111: 'Ukrainian_yi',
      1112: 'Cyrillic_je',
      1113: 'Cyrillic_lje',
      1114: 'Cyrillic_nje',
      1115: 'Serbian_tshe',
      1116: 'Macedonia_kje',
      1118: 'Byelorussian_shortu',
      1119: 'Cyrillic_dzhe',
      8470: 'numerosign',
      1026: 'Serbian_DJE',
      1027: 'Macedonia_GJE',
      1025: 'Cyrillic_IO',
      1028: 'Ukrainian_IE',
      1029: 'Macedonia_DSE',
      1030: 'Ukrainian_I',
      1031: 'Ukrainian_YI',
      1032: 'Cyrillic_JE',
      1033: 'Cyrillic_LJE',
      1034: 'Cyrillic_NJE',
      1035: 'Serbian_TSHE',
      1036: 'Macedonia_KJE',
      1038: 'Byelorussian_SHORTU',
      1039: 'Cyrillic_DZHE',
      1102: 'Cyrillic_yu',
      1072: 'Cyrillic_a',
      1073: 'Cyrillic_be',
      1094: 'Cyrillic_tse',
      1076: 'Cyrillic_de',
      1077: 'Cyrillic_ie',
      1092: 'Cyrillic_ef',
      1075: 'Cyrillic_ghe',
      1093: 'Cyrillic_ha',
      1080: 'Cyrillic_i',
      1081: 'Cyrillic_shorti',
      1082: 'Cyrillic_ka',
      1083: 'Cyrillic_el',
      1084: 'Cyrillic_em',
      1085: 'Cyrillic_en',
      1086: 'Cyrillic_o',
      1087: 'Cyrillic_pe',
      1103: 'Cyrillic_ya',
      1088: 'Cyrillic_er',
      1089: 'Cyrillic_es',
      1090: 'Cyrillic_te',
      1091: 'Cyrillic_u',
      1078: 'Cyrillic_zhe',
      1074: 'Cyrillic_ve',
      1100: 'Cyrillic_softsign',
      1099: 'Cyrillic_yeru',
      1079: 'Cyrillic_ze',
      1096: 'Cyrillic_sha',
      1101: 'Cyrillic_e',
      1097: 'Cyrillic_shcha',
      1095: 'Cyrillic_che',
      1098: 'Cyrillic_hardsign',
      1070: 'Cyrillic_YU',
      1040: 'Cyrillic_A',
      1041: 'Cyrillic_BE',
      1062: 'Cyrillic_TSE',
      1044: 'Cyrillic_DE',
      1045: 'Cyrillic_IE',
      1060: 'Cyrillic_EF',
      1043: 'Cyrillic_GHE',
      1061: 'Cyrillic_HA',
      1048: 'Cyrillic_I',
      1049: 'Cyrillic_SHORTI',
      1050: 'Cyrillic_KA',
      1051: 'Cyrillic_EL',
      1052: 'Cyrillic_EM',
      1053: 'Cyrillic_EN',
      1054: 'Cyrillic_O',
      1055: 'Cyrillic_PE',
      1071: 'Cyrillic_YA',
      1056: 'Cyrillic_ER',
      1057: 'Cyrillic_ES',
      1058: 'Cyrillic_TE',
      1059: 'Cyrillic_U',
      1046: 'Cyrillic_ZHE',
      1042: 'Cyrillic_VE',
      1068: 'Cyrillic_SOFTSIGN',
      1067: 'Cyrillic_YERU',
      1047: 'Cyrillic_ZE',
      1064: 'Cyrillic_SHA',
      1069: 'Cyrillic_E',
      1065: 'Cyrillic_SHCHA',
      1063: 'Cyrillic_CHE',
      1066: 'Cyrillic_HARDSIGN',
      902: 'Greek_ALPHAaccent',
      904: 'Greek_EPSILONaccent',
      905: 'Greek_ETAaccent',
      906: 'Greek_IOTAaccent',
      938: 'Greek_IOTAdiaeresis',
      908: 'Greek_OMICRONaccent',
      910: 'Greek_UPSILONaccent',
      939: 'Greek_UPSILONdieresis',
      911: 'Greek_OMEGAaccent',
      901: 'Greek_accentdieresis',
      8213: 'Greek_horizbar',
      940: 'Greek_alphaaccent',
      941: 'Greek_epsilonaccent',
      942: 'Greek_etaaccent',
      943: 'Greek_iotaaccent',
      970: 'Greek_iotadieresis',
      912: 'Greek_iotaaccentdieresis',
      972: 'Greek_omicronaccent',
      973: 'Greek_upsilonaccent',
      971: 'Greek_upsilondieresis',
      944: 'Greek_upsilonaccentdieresis',
      974: 'Greek_omegaaccent',
      913: 'Greek_ALPHA',
      914: 'Greek_BETA',
      915: 'Greek_GAMMA',
      916: 'Greek_DELTA',
      917: 'Greek_EPSILON',
      918: 'Greek_ZETA',
      919: 'Greek_ETA',
      920: 'Greek_THETA',
      921: 'Greek_IOTA',
      922: 'Greek_KAPPA',
      923: 'Greek_LAMBDA',
      924: 'Greek_MU',
      925: 'Greek_NU',
      926: 'Greek_XI',
      927: 'Greek_OMICRON',
      928: 'Greek_PI',
      929: 'Greek_RHO',
      931: 'Greek_SIGMA',
      932: 'Greek_TAU',
      933: 'Greek_UPSILON',
      934: 'Greek_PHI',
      935: 'Greek_CHI',
      936: 'Greek_PSI',
      937: 'Greek_OMEGA',
      945: 'Greek_alpha',
      946: 'Greek_beta',
      947: 'Greek_gamma',
      948: 'Greek_delta',
      949: 'Greek_epsilon',
      950: 'Greek_zeta',
      951: 'Greek_eta',
      952: 'Greek_theta',
      953: 'Greek_iota',
      954: 'Greek_kappa',
      955: 'Greek_lambda',
      956: 'Greek_mu',
      957: 'Greek_nu',
      958: 'Greek_xi',
      959: 'Greek_omicron',
      960: 'Greek_pi',
      961: 'Greek_rho',
      963: 'Greek_sigma',
      962: 'Greek_finalsmallsigma',
      964: 'Greek_tau',
      965: 'Greek_upsilon',
      966: 'Greek_phi',
      967: 'Greek_chi',
      968: 'Greek_psi',
      969: 'Greek_omega',
      9143: 'leftradical',
      8992: 'topintegral',
      8993: 'botintegral',
      9121: 'topleftsqbracket',
      9123: 'botleftsqbracket',
      9124: 'toprightsqbracket',
      9126: 'botrightsqbracket',
      9115: 'topleftparens',
      9117: 'botleftparens',
      9118: 'toprightparens',
      9120: 'botrightparens',
      9128: 'leftmiddlecurlybrace',
      9132: 'rightmiddlecurlybrace',
      8804: 'lessthanequal',
      8800: 'notequal',
      8805: 'greaterthanequal',
      8747: 'integral',
      8756: 'therefore',
      8733: 'variation',
      8734: 'infinity',
      8711: 'nabla',
      8764: 'approximate',
      8771: 'similarequal',
      8660: 'ifonlyif',
      8658: 'implies',
      8801: 'identical',
      8730: 'radical',
      8834: 'includedin',
      8835: 'includes',
      8745: 'intersection',
      8746: 'union',
      8743: 'logicaland',
      8744: 'logicalor',
      8706: 'partialderivative',
      402: 'function',
      8592: 'leftarrow',
      8593: 'uparrow',
      8594: 'rightarrow',
      8595: 'downarrow',
      9670: 'soliddiamond',
      9618: 'checkerboard',
      9225: 'ht',
      9228: 'ff',
      9229: 'cr',
      9226: 'lf',
      9252: 'nl',
      9227: 'vt',
      9496: 'lowrightcorner',
      9488: 'uprightcorner',
      9484: 'upleftcorner',
      9492: 'lowleftcorner',
      9532: 'crossinglines',
      9146: 'horizlinescan1',
      9147: 'horizlinescan3',
      9472: 'horizlinescan5',
      9148: 'horizlinescan7',
      9149: 'horizlinescan9',
      9500: 'leftt',
      9508: 'rightt',
      9524: 'bott',
      9516: 'topt',
      9474: 'vertbar',
      8195: 'emspace',
      8194: 'enspace',
      8196: 'em3space',
      8197: 'em4space',
      8199: 'digitspace',
      8200: 'punctspace',
      8201: 'thinspace',
      8202: 'hairspace',
      8212: 'emdash',
      8211: 'endash',
      9251: 'signifblank',
      8230: 'ellipsis',
      8229: 'doubbaselinedot',
      8531: 'onethird',
      8532: 'twothirds',
      8533: 'onefifth',
      8534: 'twofifths',
      8535: 'threefifths',
      8536: 'fourfifths',
      8537: 'onesixth',
      8538: 'fivesixths',
      8453: 'careof',
      8210: 'figdash',
      10216: 'leftanglebracket',
      10217: 'rightanglebracket',
      8539: 'oneeighth',
      8540: 'threeeighths',
      8541: 'fiveeighths',
      8542: 'seveneighths',
      8482: 'trademark',
      9747: 'signaturemark',
      9665: 'leftopentriangle',
      9655: 'rightopentriangle',
      9647: 'emopenrectangle',
      8216: 'leftsinglequotemark',
      8217: 'rightsinglequotemark',
      8220: 'leftdoublequotemark',
      8221: 'rightdoublequotemark',
      8478: 'prescription',
      8242: 'minutes',
      8243: 'seconds',
      10013: 'latincross',
      9644: 'filledrectbullet',
      9664: 'filledlefttribullet',
      9654: 'filledrighttribullet',
      9679: 'emfilledcircle',
      9646: 'emfilledrect',
      9702: 'enopencircbullet',
      9643: 'enopensquarebullet',
      9645: 'openrectbullet',
      9651: 'opentribulletup',
      9661: 'opentribulletdown',
      9734: 'openstar',
      8226: 'enfilledcircbullet',
      9642: 'enfilledsqbullet',
      9650: 'filledtribulletup',
      9660: 'filledtribulletdown',
      9756: 'leftpointer',
      9758: 'rightpointer',
      9827: 'club',
      9830: 'diamond',
      9829: 'heart',
      10016: 'maltesecross',
      8224: 'dagger',
      8225: 'doubledagger',
      10003: 'checkmark',
      10007: 'ballotcross',
      9839: 'musicalsharp',
      9837: 'musicalflat',
      9794: 'malesymbol',
      9792: 'femalesymbol',
      9742: 'telephone',
      8981: 'telephonerecorder',
      8471: 'phonographcopyright',
      8248: 'caret',
      8218: 'singlelowquotemark',
      8222: 'doublelowquotemark',
      8869: 'downtack',
      8970: 'downstile',
      8728: 'jot',
      9109: 'quad',
      8868: 'uptack',
      9675: 'circle',
      8968: 'upstile',
      8866: 'lefttack',
      8867: 'righttack',
      8215: 'hebrew_doublelowline',
      1488: 'hebrew_aleph',
      1489: 'hebrew_beth',
      1490: 'hebrew_gimmel',
      1491: 'hebrew_daleth',
      1492: 'hebrew_he',
      1493: 'hebrew_waw',
      1494: 'hebrew_zayin',
      1495: 'hebrew_het',
      1496: 'hebrew_teth',
      1497: 'hebrew_yod',
      1498: 'hebrew_finalkaph',
      1499: 'hebrew_kaph',
      1500: 'hebrew_lamed',
      1501: 'hebrew_finalmem',
      1502: 'hebrew_mem',
      1503: 'hebrew_finalnun',
      1504: 'hebrew_nun',
      1505: 'hebrew_samekh',
      1506: 'hebrew_ayin',
      1507: 'hebrew_finalpe',
      1508: 'hebrew_pe',
      1509: 'hebrew_finalzadi',
      1510: 'hebrew_zadi',
      1511: 'hebrew_qoph',
      1512: 'hebrew_resh',
      1513: 'hebrew_shin',
      1514: 'hebrew_taw',
      3585: 'Thai_kokai',
      3586: 'Thai_khokhai',
      3587: 'Thai_khokhuat',
      3588: 'Thai_khokhwai',
      3589: 'Thai_khokhon',
      3590: 'Thai_khorakhang',
      3591: 'Thai_ngongu',
      3592: 'Thai_chochan',
      3593: 'Thai_choching',
      3594: 'Thai_chochang',
      3595: 'Thai_soso',
      3596: 'Thai_chochoe',
      3597: 'Thai_yoying',
      3598: 'Thai_dochada',
      3599: 'Thai_topatak',
      3600: 'Thai_thothan',
      3601: 'Thai_thonangmontho',
      3602: 'Thai_thophuthao',
      3603: 'Thai_nonen',
      3604: 'Thai_dodek',
      3605: 'Thai_totao',
      3606: 'Thai_thothung',
      3607: 'Thai_thothahan',
      3608: 'Thai_thothong',
      3609: 'Thai_nonu',
      3610: 'Thai_bobaimai',
      3611: 'Thai_popla',
      3612: 'Thai_phophung',
      3613: 'Thai_fofa',
      3614: 'Thai_phophan',
      3615: 'Thai_fofan',
      3616: 'Thai_phosamphao',
      3617: 'Thai_moma',
      3618: 'Thai_yoyak',
      3619: 'Thai_rorua',
      3620: 'Thai_ru',
      3621: 'Thai_loling',
      3622: 'Thai_lu',
      3623: 'Thai_wowaen',
      3624: 'Thai_sosala',
      3625: 'Thai_sorusi',
      3626: 'Thai_sosua',
      3627: 'Thai_hohip',
      3628: 'Thai_lochula',
      3629: 'Thai_oang',
      3630: 'Thai_honokhuk',
      3631: 'Thai_paiyannoi',
      3632: 'Thai_saraa',
      3633: 'Thai_maihanakat',
      3634: 'Thai_saraaa',
      3635: 'Thai_saraam',
      3636: 'Thai_sarai',
      3637: 'Thai_saraii',
      3638: 'Thai_saraue',
      3639: 'Thai_sarauee',
      3640: 'Thai_sarau',
      3641: 'Thai_sarauu',
      3642: 'Thai_phinthu',
      3647: 'Thai_baht',
      3648: 'Thai_sarae',
      3649: 'Thai_saraae',
      3650: 'Thai_sarao',
      3651: 'Thai_saraaimaimuan',
      3652: 'Thai_saraaimaimalai',
      3653: 'Thai_lakkhangyao',
      3654: 'Thai_maiyamok',
      3655: 'Thai_maitaikhu',
      3656: 'Thai_maiek',
      3657: 'Thai_maitho',
      3658: 'Thai_maitri',
      3659: 'Thai_maichattawa',
      3660: 'Thai_thanthakhat',
      3661: 'Thai_nikhahit',
      3664: 'Thai_leksun',
      3665: 'Thai_leknung',
      3666: 'Thai_leksong',
      3667: 'Thai_leksam',
      3668: 'Thai_leksi',
      3669: 'Thai_lekha',
      3670: 'Thai_lekhok',
      3671: 'Thai_lekchet',
      3672: 'Thai_lekpaet',
      3673: 'Thai_lekkao',
      12593: 'Hangul_Kiyeog',
      12594: 'Hangul_SsangKiyeog',
      12595: 'Hangul_KiyeogSios',
      12596: 'Hangul_Nieun',
      12597: 'Hangul_NieunJieuj',
      12598: 'Hangul_NieunHieuh',
      12599: 'Hangul_Dikeud',
      12600: 'Hangul_SsangDikeud',
      12601: 'Hangul_Rieul',
      12602: 'Hangul_RieulKiyeog',
      12603: 'Hangul_RieulMieum',
      12604: 'Hangul_RieulPieub',
      12605: 'Hangul_RieulSios',
      12606: 'Hangul_RieulTieut',
      12607: 'Hangul_RieulPhieuf',
      12608: 'Hangul_RieulHieuh',
      12609: 'Hangul_Mieum',
      12610: 'Hangul_Pieub',
      12611: 'Hangul_SsangPieub',
      12612: 'Hangul_PieubSios',
      12613: 'Hangul_Sios',
      12614: 'Hangul_SsangSios',
      12615: 'Hangul_Ieung',
      12616: 'Hangul_Jieuj',
      12617: 'Hangul_SsangJieuj',
      12618: 'Hangul_Cieuc',
      12619: 'Hangul_Khieuq',
      12620: 'Hangul_Tieut',
      12621: 'Hangul_Phieuf',
      12622: 'Hangul_Hieuh',
      12623: 'Hangul_A',
      12624: 'Hangul_AE',
      12625: 'Hangul_YA',
      12626: 'Hangul_YAE',
      12627: 'Hangul_EO',
      12628: 'Hangul_E',
      12629: 'Hangul_YEO',
      12630: 'Hangul_YE',
      12631: 'Hangul_O',
      12632: 'Hangul_WA',
      12633: 'Hangul_WAE',
      12634: 'Hangul_OE',
      12635: 'Hangul_YO',
      12636: 'Hangul_U',
      12637: 'Hangul_WEO',
      12638: 'Hangul_WE',
      12639: 'Hangul_WI',
      12640: 'Hangul_YU',
      12641: 'Hangul_EU',
      12642: 'Hangul_YI',
      12643: 'Hangul_I',
      4520: 'Hangul_J_Kiyeog',
      4521: 'Hangul_J_SsangKiyeog',
      4522: 'Hangul_J_KiyeogSios',
      4523: 'Hangul_J_Nieun',
      4524: 'Hangul_J_NieunJieuj',
      4525: 'Hangul_J_NieunHieuh',
      4526: 'Hangul_J_Dikeud',
      4527: 'Hangul_J_Rieul',
      4528: 'Hangul_J_RieulKiyeog',
      4529: 'Hangul_J_RieulMieum',
      4530: 'Hangul_J_RieulPieub',
      4531: 'Hangul_J_RieulSios',
      4532: 'Hangul_J_RieulTieut',
      4533: 'Hangul_J_RieulPhieuf',
      4534: 'Hangul_J_RieulHieuh',
      4535: 'Hangul_J_Mieum',
      4536: 'Hangul_J_Pieub',
      4537: 'Hangul_J_PieubSios',
      4538: 'Hangul_J_Sios',
      4539: 'Hangul_J_SsangSios',
      4540: 'Hangul_J_Ieung',
      4541: 'Hangul_J_Jieuj',
      4542: 'Hangul_J_Cieuc',
      4543: 'Hangul_J_Khieuq',
      4544: 'Hangul_J_Tieut',
      4545: 'Hangul_J_Phieuf',
      4546: 'Hangul_J_Hieuh',
      12653: 'Hangul_RieulYeorinHieuh',
      12657: 'Hangul_SunkyeongeumMieum',
      12664: 'Hangul_SunkyeongeumPieub',
      12671: 'Hangul_PanSios',
      12673: 'Hangul_KkogjiDalrinIeung',
      12676: 'Hangul_SunkyeongeumPhieuf',
      12678: 'Hangul_YeorinHieuh',
      12685: 'Hangul_AraeA',
      12686: 'Hangul_AraeAE',
      4587: 'Hangul_J_PanSios',
      4592: 'Hangul_J_KkogjiDalrinIeung',
      4601: 'Hangul_J_YeorinHieuh',
      338: 'OE',
      339: 'oe',
      376: 'Ydiaeresis',
      8352: 'EcuSign',
      8353: 'ColonSign',
      8354: 'CruzeiroSign',
      8355: 'FFrancSign',
      8356: 'LiraSign',
      8357: 'MillSign',
      8358: 'NairaSign',
      8359: 'PesetaSign',
      8360: 'RupeeSign',
      8361: 'WonSign',
      8362: 'NewSheqelSign',
      8363: 'DongSign',
      8364: 'EuroSign',
      768: 'dead_grave',
      769: 'dead_acute',
      770: 'dead_circumflex',
      771: 'dead_tilde',
      772: 'dead_macron',
      774: 'dead_breve',
      775: 'dead_abovedot',
      776: 'dead_diaeresis',
      778: 'dead_abovering',
      779: 'dead_doubleacute',
      780: 'dead_caron',
      807: 'dead_cedilla',
      808: 'dead_ogonek',
      837: 'dead_iota',
      12441: 'dead_voiced_sound',
      12442: 'dead_semivoiced_sound',
      8: 'BackSpace',
      9: 'Tab',
      10: 'Linefeed',
      11: 'Clear',
      13: 'Return',
      19: 'Pause',
      20: 'Scroll_Lock',
      21: 'Sys_Req',
      27: 'Escape',
      1169: 'Ukrainian_ghe_with_upturn',
      1168: 'Ukrainian_GHE_WITH_UPTURN',
      1415: 'Armenian_ligature_ew',
      1417: 'Armenian_verjaket',
      1373: 'Armenian_but',
      1418: 'Armenian_yentamna',
      1372: 'Armenian_amanak',
      1371: 'Armenian_shesht',
      1374: 'Armenian_paruyk',
      1329: 'Armenian_AYB',
      1377: 'Armenian_ayb',
      1330: 'Armenian_BEN',
      1378: 'Armenian_ben',
      1331: 'Armenian_GIM',
      1379: 'Armenian_gim',
      1332: 'Armenian_DA',
      1380: 'Armenian_da',
      1333: 'Armenian_YECH',
      1381: 'Armenian_yech',
      1334: 'Armenian_ZA',
      1382: 'Armenian_za',
      1335: 'Armenian_E',
      1383: 'Armenian_e',
      1336: 'Armenian_AT',
      1384: 'Armenian_at',
      1337: 'Armenian_TO',
      1385: 'Armenian_to',
      1338: 'Armenian_ZHE',
      1386: 'Armenian_zhe',
      1339: 'Armenian_INI',
      1387: 'Armenian_ini',
      1340: 'Armenian_LYUN',
      1388: 'Armenian_lyun',
      1341: 'Armenian_KHE',
      1389: 'Armenian_khe',
      1342: 'Armenian_TSA',
      1390: 'Armenian_tsa',
      1343: 'Armenian_KEN',
      1391: 'Armenian_ken',
      1344: 'Armenian_HO',
      1392: 'Armenian_ho',
      1345: 'Armenian_DZA',
      1393: 'Armenian_dza',
      1346: 'Armenian_GHAT',
      1394: 'Armenian_ghat',
      1347: 'Armenian_TCHE',
      1395: 'Armenian_tche',
      1348: 'Armenian_MEN',
      1396: 'Armenian_men',
      1349: 'Armenian_HI',
      1397: 'Armenian_hi',
      1350: 'Armenian_NU',
      1398: 'Armenian_nu',
      1351: 'Armenian_SHA',
      1399: 'Armenian_sha',
      1352: 'Armenian_VO',
      1400: 'Armenian_vo',
      1353: 'Armenian_CHA',
      1401: 'Armenian_cha',
      1354: 'Armenian_PE',
      1402: 'Armenian_pe',
      1355: 'Armenian_JE',
      1403: 'Armenian_je',
      1356: 'Armenian_RA',
      1404: 'Armenian_ra',
      1357: 'Armenian_SE',
      1405: 'Armenian_se',
      1358: 'Armenian_VEV',
      1406: 'Armenian_vev',
      1359: 'Armenian_TYUN',
      1407: 'Armenian_tyun',
      1360: 'Armenian_RE',
      1408: 'Armenian_re',
      1361: 'Armenian_TSO',
      1409: 'Armenian_tso',
      1362: 'Armenian_VYUN',
      1410: 'Armenian_vyun',
      1363: 'Armenian_PYUR',
      1411: 'Armenian_pyur',
      1364: 'Armenian_KE',
      1412: 'Armenian_ke',
      1365: 'Armenian_O',
      1413: 'Armenian_o',
      1366: 'Armenian_FE',
      1414: 'Armenian_fe',
      1370: 'Armenian_apostrophe',
      4304: 'Georgian_an',
      4305: 'Georgian_ban',
      4306: 'Georgian_gan',
      4307: 'Georgian_don',
      4308: 'Georgian_en',
      4309: 'Georgian_vin',
      4310: 'Georgian_zen',
      4311: 'Georgian_tan',
      4312: 'Georgian_in',
      4313: 'Georgian_kan',
      4314: 'Georgian_las',
      4315: 'Georgian_man',
      4316: 'Georgian_nar',
      4317: 'Georgian_on',
      4318: 'Georgian_par',
      4319: 'Georgian_zhar',
      4320: 'Georgian_rae',
      4321: 'Georgian_san',
      4322: 'Georgian_tar',
      4323: 'Georgian_un',
      4324: 'Georgian_phar',
      4325: 'Georgian_khar',
      4326: 'Georgian_ghan',
      4327: 'Georgian_qar',
      4328: 'Georgian_shin',
      4329: 'Georgian_chin',
      4330: 'Georgian_can',
      4331: 'Georgian_jil',
      4332: 'Georgian_cil',
      4333: 'Georgian_char',
      4334: 'Georgian_xan',
      4335: 'Georgian_jhan',
      4336: 'Georgian_hae',
      4337: 'Georgian_he',
      4338: 'Georgian_hie',
      4339: 'Georgian_we',
      4340: 'Georgian_har',
      4341: 'Georgian_hoe',
      4342: 'Georgian_fi',
      7682: 'Babovedot',
      7683: 'babovedot',
      7690: 'Dabovedot',
      7808: 'Wgrave',
      7810: 'Wacute',
      7691: 'dabovedot',
      7922: 'Ygrave',
      7710: 'Fabovedot',
      7711: 'fabovedot',
      7744: 'Mabovedot',
      7745: 'mabovedot',
      7766: 'Pabovedot',
      7809: 'wgrave',
      7767: 'pabovedot',
      7811: 'wacute',
      7776: 'Sabovedot',
      7923: 'ygrave',
      7812: 'Wdiaeresis',
      7813: 'wdiaeresis',
      7777: 'sabovedot',
      372: 'Wcircumflex',
      7786: 'Tabovedot',
      374: 'Ycircumflex',
      373: 'wcircumflex',
      7787: 'tabovedot',
      375: 'ycircumflex',
      1776: 'Farsi_0',
      1777: 'Farsi_1',
      1778: 'Farsi_2',
      1779: 'Farsi_3',
      1780: 'Farsi_4',
      1781: 'Farsi_5',
      1782: 'Farsi_6',
      1783: 'Farsi_7',
      1784: 'Farsi_8',
      1785: 'Farsi_9',
      1642: 'Arabic_percent',
      1648: 'Arabic_superscript_alef',
      1657: 'Arabic_tteh',
      1662: 'Arabic_peh',
      1670: 'Arabic_tcheh',
      1672: 'Arabic_ddal',
      1681: 'Arabic_rreh',
      1748: 'Arabic_fullstop',
      1632: 'Arabic_0',
      1633: 'Arabic_1',
      1634: 'Arabic_2',
      1635: 'Arabic_3',
      1636: 'Arabic_4',
      1637: 'Arabic_5',
      1638: 'Arabic_6',
      1639: 'Arabic_7',
      1640: 'Arabic_8',
      1641: 'Arabic_9',
      1619: 'Arabic_madda_above',
      1620: 'Arabic_hamza_above',
      1621: 'Arabic_hamza_below',
      1688: 'Arabic_jeh',
      1700: 'Arabic_veh',
      1705: 'Arabic_keheh',
      1711: 'Arabic_gaf',
      1722: 'Arabic_noon_ghunna',
      1726: 'Arabic_heh_doachashmee',
      1740: 'Farsi_yeh',
      1746: 'Arabic_yeh_baree',
      1729: 'Arabic_heh_goal',
      1170: 'Cyrillic_GHE_bar',
      1174: 'Cyrillic_ZHE_descender',
      1178: 'Cyrillic_KA_descender',
      1180: 'Cyrillic_KA_vertstroke',
      1186: 'Cyrillic_EN_descender',
      1198: 'Cyrillic_U_straight',
      1200: 'Cyrillic_U_straight_bar',
      1202: 'Cyrillic_HA_descender',
      1206: 'Cyrillic_CHE_descender',
      1208: 'Cyrillic_CHE_vertstroke',
      1210: 'Cyrillic_SHHA',
      1240: 'Cyrillic_SCHWA',
      1250: 'Cyrillic_I_macron',
      1256: 'Cyrillic_O_bar',
      1262: 'Cyrillic_U_macron',
      1171: 'Cyrillic_ghe_bar',
      1175: 'Cyrillic_zhe_descender',
      1179: 'Cyrillic_ka_descender',
      1181: 'Cyrillic_ka_vertstroke',
      1187: 'Cyrillic_en_descender',
      1199: 'Cyrillic_u_straight',
      1201: 'Cyrillic_u_straight_bar',
      1203: 'Cyrillic_ha_descender',
      1207: 'Cyrillic_che_descender',
      1209: 'Cyrillic_che_vertstroke',
      1211: 'Cyrillic_shha',
      1241: 'Cyrillic_schwa',
      1251: 'Cyrillic_i_macron',
      1257: 'Cyrillic_o_bar',
      1263: 'Cyrillic_u_macron',
      7818: 'Xabovedot',
      300: 'Ibreve',
      437: 'Zstroke',
      486: 'Gcaron',
      415: 'Obarred',
      7819: 'xabovedot',
      301: 'ibreve',
      438: 'zstroke',
      487: 'gcaron',
      466: 'ocaron',
      629: 'obarred',
      399: 'SCHWA',
      601: 'schwa',
      7734: 'Lbelowdot',
      7735: 'lbelowdot',
      7840: 'Abelowdot',
      7841: 'abelowdot',
      7842: 'Ahook',
      7843: 'ahook',
      7844: 'Acircumflexacute',
      7845: 'acircumflexacute',
      7846: 'Acircumflexgrave',
      7847: 'acircumflexgrave',
      7848: 'Acircumflexhook',
      7849: 'acircumflexhook',
      7850: 'Acircumflextilde',
      7851: 'acircumflextilde',
      7852: 'Acircumflexbelowdot',
      7853: 'acircumflexbelowdot',
      7854: 'Abreveacute',
      7855: 'abreveacute',
      7856: 'Abrevegrave',
      7857: 'abrevegrave',
      7858: 'Abrevehook',
      7859: 'abrevehook',
      7860: 'Abrevetilde',
      7861: 'abrevetilde',
      7862: 'Abrevebelowdot',
      7863: 'abrevebelowdot',
      7864: 'Ebelowdot',
      7865: 'ebelowdot',
      7866: 'Ehook',
      7867: 'ehook',
      7868: 'Etilde',
      7869: 'etilde',
      7870: 'Ecircumflexacute',
      7871: 'ecircumflexacute',
      7872: 'Ecircumflexgrave',
      7873: 'ecircumflexgrave',
      7874: 'Ecircumflexhook',
      7875: 'ecircumflexhook',
      7876: 'Ecircumflextilde',
      7877: 'ecircumflextilde',
      7878: 'Ecircumflexbelowdot',
      7879: 'ecircumflexbelowdot',
      7880: 'Ihook',
      7881: 'ihook',
      7882: 'Ibelowdot',
      7883: 'ibelowdot',
      7884: 'Obelowdot',
      7885: 'obelowdot',
      7886: 'Ohook',
      7887: 'ohook',
      7888: 'Ocircumflexacute',
      7889: 'ocircumflexacute',
      7890: 'Ocircumflexgrave',
      7891: 'ocircumflexgrave',
      7892: 'Ocircumflexhook',
      7893: 'ocircumflexhook',
      7894: 'Ocircumflextilde',
      7895: 'ocircumflextilde',
      7896: 'Ocircumflexbelowdot',
      7897: 'ocircumflexbelowdot',
      7898: 'Ohornacute',
      7899: 'ohornacute',
      7900: 'Ohorngrave',
      7901: 'ohorngrave',
      7902: 'Ohornhook',
      7903: 'ohornhook',
      7904: 'Ohorntilde',
      7905: 'ohorntilde',
      7906: 'Ohornbelowdot',
      7907: 'ohornbelowdot',
      7908: 'Ubelowdot',
      7909: 'ubelowdot',
      7910: 'Uhook',
      7911: 'uhook',
      7912: 'Uhornacute',
      7913: 'uhornacute',
      7914: 'Uhorngrave',
      7915: 'uhorngrave',
      7916: 'Uhornhook',
      7917: 'uhornhook',
      7918: 'Uhorntilde',
      7919: 'uhorntilde',
      7920: 'Uhornbelowdot',
      7921: 'uhornbelowdot',
      7924: 'Ybelowdot',
      7925: 'ybelowdot',
      7926: 'Yhook',
      7927: 'yhook',
      7928: 'Ytilde',
      7929: 'ytilde',
      416: 'Ohorn',
      417: 'ohorn',
      431: 'Uhorn',
      432: 'uhorn',
      803: 'dead_belowdot',
      777: 'dead_hook',
      795: 'dead_horn',
    }),
    Yn = Object.freeze({ AltLeft: 'Alt_L', AltRight: 'Alt_R', ArrowDown: 'Down', ArrowLeft: 'Left', ArrowRight: 'Right', ArrowUp: 'Up', Backspace: 'BackSpace', CapsLock: 'Caps_Lock', ControlLeft: 'Control_L', ControlRight: 'Control_R', Enter: 'Return', HyperLeft: 'Hyper_L', HyperRight: 'Hyper_R', NumLock: 'Num_Lock', NumpadEnter: 'Return', MetaLeft: 'Meta_L', MetaRight: 'Meta_R', PageDown: 'Page_Down', PageUp: 'Page_Up', ScrollLock: 'Scroll_Lock', ShiftLeft: 'Shift_L', ShiftRight: 'Shift_R', SuperLeft: 'Super_L', SuperRight: 'Super_R' }),
    Xn = new Set(['Clear', 'Copy', 'Cut', 'Delete', 'End', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Home', 'Insert', 'Paste', 'Redo', 'Tab', 'Undo'])
  function Si(s, f) {
    var p = 'Unidentified'
    if (s.length === 1) {
      const m = s.charCodeAt(0)
      m in Rr && (p = Rr[m])
    } else f in Yn ? (p = Yn[f]) : Xn.has(f) && (p = f)
    return p
  }
  const an = Object.freeze(['wheel', 'contextmenu', 'mousemove', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'keyup', 'keydown']),
    Mn = Object.freeze({ mousemove: 'MouseMove', mousedown: 'MouseButtonPress', mouseup: 'MouseButtonRelease' }),
    jo = Object.freeze({ touchstart: 'TouchDown', touchend: 'TouchUp', touchmove: 'TouchMotion', touchcancel: 'TouchUp' }),
    ki = Object.freeze({ keydown: 'KeyPress', keyup: 'KeyRelease' })
  function sn(s) {
    const f = []
    return s.altKey && f.push('mod1-mask'), s.ctrlKey && f.push('control-mask'), s.metaKey && f.push('meta-mask'), s.shiftKey && f.push('shift-mask'), f.join('+')
  }
  class Fo extends EventTarget {
    constructor(f, p) {
      super(),
        (this._rtcDataChannel = f),
        (this._consumerSession = p),
        (this._videoElement = null),
        (this._videoElementComputedStyle = null),
        (this._videoElementKeyboard = null),
        (this._lastTouchEventTimestamp = 0),
        f.addEventListener('close', () => {
          this._rtcDataChannel === f && this.close()
        }),
        f.addEventListener('error', (m) => {
          if (this._rtcDataChannel === f) {
            const k = m.error
            this.dispatchEvent(new ErrorEvent('error', { message: (k && k.message) || 'Remote controller error', error: k || new Error('unknown error on the remote controller data channel') }))
          }
        })
    }
    get rtcDataChannel() {
      return this._rtcDataChannel
    }
    get consumerSession() {
      return this._consumerSession
    }
    get videoElement() {
      return this._videoElement
    }
    attachVideoElement(f) {
      if (f instanceof HTMLVideoElement && f !== this._videoElement) {
        this._videoElement && this.attachVideoElement(null), (this._videoElement = f), (this._videoElementComputedStyle = window.getComputedStyle(f))
        for (const p of an) f.addEventListener(p, this)
        f.setAttribute('tabindex', '0')
      } else if (f === null && this._videoElement) {
        const p = this._videoElement
        p.removeAttribute('tabindex'), (this._videoElement = null), (this._videoElementComputedStyle = null), (this._lastTouchEventTimestamp = 0)
        for (const m of an) p.removeEventListener(m, this)
      }
    }
    close() {
      this.attachVideoElement(null)
      const f = this._rtcDataChannel
      ;(this._rtcDataChannel = null), f && (f.close(), this.dispatchEvent(new Event('closed')))
    }
    _sendGstNavigationEvent(f) {
      try {
        if (!f || typeof f != 'object') throw new Error('invalid GstNavigation event')
        if (!this._rtcDataChannel) throw new Error('remote controller data channel is closed')
        this._rtcDataChannel.send(JSON.stringify(f))
      } catch (p) {
        this.dispatchEvent(new ErrorEvent('error', { message: `cannot send GstNavigation event over session ${this._consumerSession.sessionId} remote controller`, error: p }))
      }
    }
    _computeVideoMousePosition(f) {
      const p = { x: 0, y: 0 }
      if (!this._videoElement || this._videoElement.videoWidth <= 0 || this._videoElement.videoHeight <= 0) return p
      const m = parseFloat(this._videoElementComputedStyle.paddingLeft),
        k = parseFloat(this._videoElementComputedStyle.paddingRight),
        E = parseFloat(this._videoElementComputedStyle.paddingTop),
        _ = parseFloat(this._videoElementComputedStyle.paddingBottom)
      if ('offsetX' in f && 'offsetY' in f) (p.x = f.offsetX - m), (p.y = f.offsetY - E)
      else {
        const Y = this._videoElement.getBoundingClientRect(),
          ne = { left: parseFloat(this._videoElementComputedStyle.borderLeftWidth), top: parseFloat(this._videoElementComputedStyle.borderTopWidth) }
        ;(p.x = f.clientX - Y.left - ne.left - m), (p.y = f.clientY - Y.top - ne.top - E)
      }
      const D = { x: this._videoElement.clientWidth - (m + k), y: this._videoElement.clientHeight - (E + _) },
        I = Math.min(D.x / this._videoElement.videoWidth, D.y / this._videoElement.videoHeight)
      ;(D.x = Math.max(0.5 * (D.x - this._videoElement.videoWidth * I), 0)), (D.y = Math.max(0.5 * (D.y - this._videoElement.videoHeight * I), 0))
      const j = I !== 0 ? 1 / I : 0
      return (p.x = (p.x - D.x) * j), (p.y = (p.y - D.y) * j), (p.x = Math.min(Math.max(p.x, 0), this._videoElement.videoWidth)), (p.y = Math.min(Math.max(p.y, 0), this._videoElement.videoHeight)), p
    }
    handleEvent(f) {
      if (this._videoElement)
        switch (f.type) {
          case 'wheel':
            f.preventDefault()
            {
              const p = this._computeVideoMousePosition(f)
              this._sendGstNavigationEvent({ event: 'MouseScroll', x: p.x, y: p.y, delta_x: -f.deltaX, delta_y: -f.deltaY, modifier_state: sn(f) })
            }
            break
          case 'contextmenu':
            f.preventDefault()
            break
          case 'mousemove':
          case 'mousedown':
          case 'mouseup':
            f.preventDefault()
            {
              const p = this._computeVideoMousePosition(f),
                m = { event: Mn[f.type], x: p.x, y: p.y, modifier_state: sn(f) }
              f.type !== 'mousemove' && ((m.button = f.button + 1), f.type === 'mousedown' && f.button === 0 && this._videoElement.focus()), this._sendGstNavigationEvent(m)
            }
            break
          case 'touchstart':
          case 'touchend':
          case 'touchmove':
          case 'touchcancel':
            for (const p of f.changedTouches) {
              const m = this._computeVideoMousePosition(p),
                k = { event: jo[f.type], identifier: p.identifier, x: m.x, y: m.y, modifier_state: sn(f) }
              !('force' in p) || (f.type !== 'touchstart' && f.type !== 'touchmove') || (k.pressure = p.force), this._sendGstNavigationEvent(k)
            }
            f.timeStamp > this._lastTouchEventTimestamp && ((this._lastTouchEventTimestamp = f.timeStamp), this._sendGstNavigationEvent({ event: 'TouchFrame', modifier_state: sn(f) }))
            break
          case 'keyup':
          case 'keydown':
            f.preventDefault()
            {
              const p = { event: ki[f.type], key: Si(f.key, f.code), modifier_state: sn(f) }
              this._sendGstNavigationEvent(p)
            }
        }
    }
  }
  class xr extends Pr {
    constructor(f, p) {
      super(f, p),
        (this._streams = []),
        (this._remoteController = null),
        this.addEventListener('closed', () => {
          ;(this._streams = []), this._remoteController && this._remoteController.close()
        })
    }
    get streams() {
      return this._streams
    }
    get remoteController() {
      return this._remoteController
    }
    connect() {
      if (!this._comChannel || this._state === ke.closed) return !1
      if (this._state !== ke.idle) return !0
      const f = { type: 'startSession', peerId: this._peerId }
      return this._comChannel.send(f) ? ((this._state = ke.connecting), this.dispatchEvent(new Event('stateChanged')), !0) : (this.dispatchEvent(new ErrorEvent('error', { message: 'cannot connect consumer session', error: new Error('cannot send startSession message to signaling server') })), this.close(), !1)
    }
    onSessionStarted(f, p) {
      this._peerId !== f || this._state !== ke.connecting || this._sessionId || (this._sessionId = p)
    }
    onSessionPeerMessage(f) {
      if (this._state !== ke.closed && this._comChannel && this._sessionId) {
        if (!this._rtcPeerConnection) {
          const p = new RTCPeerConnection(this._comChannel.webrtcConfig)
          ;(this._rtcPeerConnection = p),
            (p.ontrack = (m) => {
              if (this._rtcPeerConnection === p && m.streams && m.streams.length > 0) {
                this._state === ke.connecting && ((this._state = ke.streaming), this.dispatchEvent(new Event('stateChanged')))
                let k = !1
                for (const E of m.streams) this._streams.includes(E) || (this._streams.push(E), (k = !0))
                k && this.dispatchEvent(new Event('streamsChanged'))
              }
            }),
            (p.ondatachannel = (m) => {
              const k = m.channel
              if (k && k.label === 'input') {
                if (this._remoteController) {
                  const _ = this._remoteController
                  ;(this._remoteController = null), _.close()
                }
                const E = new Fo(k, this)
                ;(this._remoteController = E),
                  this.dispatchEvent(new Event('remoteControllerChanged')),
                  E.addEventListener('closed', () => {
                    this._remoteController === E && ((this._remoteController = null), this.dispatchEvent(new Event('remoteControllerChanged')))
                  })
              }
            }),
            (p.onicecandidate = (m) => {
              this._rtcPeerConnection === p && m.candidate && this._comChannel && this._comChannel.send({ type: 'peer', sessionId: this._sessionId, ice: m.candidate.toJSON() })
            }),
            this.dispatchEvent(new Event('rtcPeerConnectionChanged'))
        }
        if (f.sdp)
          this._rtcPeerConnection
            .setRemoteDescription(f.sdp)
            .then(() => (this._rtcPeerConnection ? this._rtcPeerConnection.createAnswer() : null))
            .then((p) => (this._rtcPeerConnection && p ? this._rtcPeerConnection.setLocalDescription(p) : null))
            .then(() => {
              if (this._rtcPeerConnection && this._comChannel) {
                const p = { type: 'peer', sessionId: this._sessionId, sdp: this._rtcPeerConnection.localDescription.toJSON() }
                if (!this._comChannel.send(p)) throw new Error('cannot send local SDP configuration to WebRTC peer')
              }
            })
            .catch((p) => {
              this._state !== ke.closed && (this.dispatchEvent(new ErrorEvent('error', { message: 'an unrecoverable error occurred during SDP handshake', error: p })), this.close())
            })
        else {
          if (!f.ice) throw new Error(`invalid empty peer message received from consumer session ${this._sessionId}`)
          {
            const p = new RTCIceCandidate(f.ice)
            this._rtcPeerConnection.addIceCandidate(p).catch((m) => {
              this._state !== ke.closed && (this.dispatchEvent(new ErrorEvent('error', { message: 'an unrecoverable error occurred during ICE handshake', error: m })), this.close())
            })
          }
        }
      }
    }
  }
  class Lr extends Pr {
    constructor(f, p, m, k) {
      super(f, m), (this._sessionId = p), (this._state = ke.streaming)
      const E = new RTCPeerConnection(this._comChannel.webrtcConfig)
      this._rtcPeerConnection = E
      for (const _ of k.getTracks()) E.addTrack(_, k)
      ;(E.onicecandidate = (_) => {
        this._rtcPeerConnection === E && _.candidate && this._comChannel && this._comChannel.send({ type: 'peer', sessionId: this._sessionId, ice: _.candidate.toJSON() })
      }),
        this.dispatchEvent(new Event('rtcPeerConnectionChanged')),
        E.setLocalDescription()
          .then(() => {
            if (this._rtcPeerConnection === E && this._comChannel) {
              const _ = { type: 'peer', sessionId: this._sessionId, sdp: this._rtcPeerConnection.localDescription.toJSON() }
              if (!this._comChannel.send(_)) throw new Error('cannot send local SDP configuration to WebRTC peer')
            }
          })
          .catch((_) => {
            this._state !== ke.closed && (this.dispatchEvent(new ErrorEvent('error', { message: 'an unrecoverable error occurred during SDP handshake', error: _ })), this.close())
          })
    }
    onSessionPeerMessage(f) {
      if (this._state !== ke.closed && this._rtcPeerConnection)
        if (f.sdp)
          this._rtcPeerConnection.setRemoteDescription(f.sdp).catch((p) => {
            this._state !== ke.closed && (this.dispatchEvent(new ErrorEvent('error', { message: 'an unrecoverable error occurred during SDP handshake', error: p })), this.close())
          })
        else {
          if (!f.ice) throw new Error(`invalid empty peer message received from producer's client session ${this._peerId}`)
          {
            const p = new RTCIceCandidate(f.ice)
            this._rtcPeerConnection.addIceCandidate(p).catch((m) => {
              this._state !== ke.closed && (this.dispatchEvent(new ErrorEvent('error', { message: 'an unrecoverable error occurred during ICE handshake', error: m })), this.close())
            })
          }
        }
    }
  }
  class Ar extends EventTarget {
    constructor(f, p) {
      super(), (this._comChannel = f), (this._stream = p), (this._state = ke.idle), (this._clientSessions = {})
    }
    get stream() {
      return this._stream
    }
    get state() {
      return this._state
    }
    start() {
      if (!this._comChannel || this._state === ke.closed) return !1
      if (this._state !== ke.idle) return !0
      const f = { type: 'setPeerStatus', roles: ['listener', 'producer'], meta: this._comChannel.meta }
      return this._comChannel.send(f) ? ((this._state = ke.connecting), this.dispatchEvent(new Event('stateChanged')), !0) : (this.dispatchEvent(new ErrorEvent('error', { message: 'cannot start producer session', error: new Error('cannot register producer to signaling server') })), this.close(), !1)
    }
    close() {
      if (this._state !== ke.closed) {
        for (const f of this._stream.getTracks()) f.stop()
        this._state !== ke.idle && this._comChannel && this._comChannel.send({ type: 'setPeerStatus', roles: ['listener'], meta: this._comChannel.meta }), (this._state = ke.closed), this.dispatchEvent(new Event('stateChanged')), (this._comChannel = null), (this._stream = null)
        for (const f of Object.values(this._clientSessions)) f.close()
        ;(this._clientSessions = {}), this.dispatchEvent(new Event('closed'))
      }
    }
    onProducerRegistered() {
      this._state === ke.connecting && ((this._state = ke.streaming), this.dispatchEvent(new Event('stateChanged')))
    }
    onStartSessionMessage(f) {
      if (this._comChannel && this._stream && !(f.sessionId in this._clientSessions)) {
        const p = new Lr(f.peerId, f.sessionId, this._comChannel, this._stream)
        ;(this._clientSessions[f.sessionId] = p),
          p.addEventListener('closed', (m) => {
            const k = m.target.sessionId
            k in this._clientSessions && this._clientSessions[k] === p && (delete this._clientSessions[k], this.dispatchEvent(new CustomEvent('clientConsumerRemoved', { detail: p })))
          }),
          p.addEventListener('error', (m) => {
            this.dispatchEvent(new ErrorEvent('error', { message: `error from client consumer ${m.target.peerId}: ${m.message}`, error: m.error }))
          }),
          this.dispatchEvent(new CustomEvent('clientConsumerAdded', { detail: p }))
      }
    }
    onEndSessionMessage(f) {
      f.sessionId in this._clientSessions && this._clientSessions[f.sessionId].close()
    }
    onSessionPeerMessage(f) {
      f.sessionId in this._clientSessions && this._clientSessions[f.sessionId].onSessionPeerMessage(f)
    }
  }
  const St = Object.freeze({ welcome: 'welcome', peerStatusChanged: 'peerStatusChanged', list: 'list', sessionStarted: 'sessionStarted', peer: 'peer', startSession: 'startSession', endSession: 'endSession', error: 'error' })
  function qn(s, f) {
    if (!s || typeof s != 'object') return null
    const p = { id: '', meta: {} }
    if (s.id && typeof s.id == 'string') p.id = s.id
    else {
      if (!s.peerId || typeof s.peerId != 'string') return null
      p.id = s.peerId
    }
    return p.id === f ? null : (s.meta && typeof s.meta == 'object' && (p.meta = s.meta), Object.freeze(p.meta), Object.freeze(p))
  }
  const ln = WebSocket.prototype.send
  WebSocket.prototype.send = function (s) {
    console.log(`send >>> : ${s}`), ln.call(this, s)
  }
  class un extends EventTarget {
    constructor(f, p, m) {
      super(),
        (this._meta = p),
        (this._webrtcConfig = m),
        (this._ws = new WebSocket(f)),
        (this._ready = !1),
        (this._channelId = ''),
        (this._producerSession = null),
        (this._consumerSessions = {}),
        (this._ws.onerror = (k) => {
          this.dispatchEvent(new ErrorEvent('error', { message: k.message || 'WebSocket error', error: k.error || new Error(this._ready ? 'transportation error' : 'cannot connect to signaling server') })), this.close()
        }),
        (this._ws.onclose = () => {
          ;(this._ready = !1), (this._channelId = ''), (this._ws = null), this.closeAllConsumerSessions(), this._producerSession && (this._producerSession.close(), (this._producerSession = null)), this.dispatchEvent(new Event('closed'))
        }),
        (this._ws.onmessage = (k) => {
          console.log(`receive <<< : ${k.data}`)
          try {
            const E = JSON.parse(k.data)
            if (E && typeof E == 'object')
              switch (E.type) {
                case St.welcome:
                  this._channelId = E.peerId
                  try {
                    this._ws.send(JSON.stringify({ type: 'setPeerStatus', roles: ['listener'], meta: p }))
                  } catch (_) {
                    this.dispatchEvent(new ErrorEvent('error', { message: 'cannot initialize connection to signaling server', error: _ })), this.close()
                  }
                  break
                case St.peerStatusChanged:
                  if (E.peerId === this._channelId) !this._ready && E.roles.includes('listener') && ((this._ready = !0), this.dispatchEvent(new Event('ready')), this.send({ type: 'list' })), this._producerSession && E.roles.includes('producer') && this._producerSession.onProducerRegistered()
                  else {
                    const _ = qn(E, this._channelId)
                    _ && (E.roles.includes('producer') ? this.dispatchEvent(new CustomEvent('producerAdded', { detail: _ })) : this.dispatchEvent(new CustomEvent('producerRemoved', { detail: _ })))
                  }
                  break
                case St.list:
                  for (const _ of E.producers) {
                    const D = qn(_, this._channelId)
                    D && this.dispatchEvent(new CustomEvent('producerAdded', { detail: D }))
                  }
                  break
                case St.sessionStarted:
                  {
                    const _ = this.getConsumerSession(E.peerId)
                    _ && (delete this._consumerSessions[E.peerId], _.onSessionStarted(E.peerId, E.sessionId), _.sessionId && !(_.sessionId in this._consumerSessions) ? (this._consumerSessions[_.sessionId] = _) : _.close())
                  }
                  break
                case St.peer:
                  {
                    const _ = this.getConsumerSession(E.sessionId)
                    _ ? _.onSessionPeerMessage(E) : this._producerSession && this._producerSession.onSessionPeerMessage(E)
                  }
                  break
                case St.startSession:
                  this._producerSession && this._producerSession.onStartSessionMessage(E)
                  break
                case St.endSession:
                  {
                    const _ = this.getConsumerSession(E.sessionId)
                    _ ? _.close() : this._producerSession && this._producerSession.onEndSessionMessage(E)
                  }
                  break
                case St.error:
                  this.dispatchEvent(new ErrorEvent('error', { message: 'error received from signaling server', error: new Error(E.details) }))
                  break
                default:
                  throw new Error(`unknown message type: "${E.type}"`)
              }
          } catch (E) {
            this.dispatchEvent(new ErrorEvent('error', { message: 'cannot parse incoming message from signaling server', error: E }))
          }
        })
    }
    get meta() {
      return this._meta
    }
    get webrtcConfig() {
      return this._webrtcConfig
    }
    get ready() {
      return this._ready
    }
    get channelId() {
      return this._channelId
    }
    get producerSession() {
      return this._producerSession
    }
    createProducerSession(f) {
      if (!(this._ready && f instanceof MediaStream)) return null
      if (this._producerSession) return this._producerSession.stream === f ? this._producerSession : null
      const p = new Ar(this, f)
      return (
        (this._producerSession = p),
        p.addEventListener('closed', () => {
          this._producerSession === p && (this._producerSession = null)
        }),
        p
      )
    }
    createConsumerSession(f) {
      if (!this._ready || !f || typeof f != 'string') return null
      if (f in this._consumerSessions) return this._consumerSessions[f]
      for (const m of Object.values(this._consumerSessions)) if (m.peerId === f) return m
      const p = new xr(f, this)
      return (
        (this._consumerSessions[f] = p),
        p.addEventListener('closed', (m) => {
          let k = m.target.sessionId
          k || (k = m.target.peerId), k in this._consumerSessions && this._consumerSessions[k] === p && delete this._consumerSessions[k]
        }),
        p
      )
    }
    getConsumerSession(f) {
      return f in this._consumerSessions ? this._consumerSessions[f] : null
    }
    closeAllConsumerSessions() {
      for (const f of Object.values(this._consumerSessions)) f.close()
      this._consumerSessions = {}
    }
    send(f) {
      if (this._ready && f && typeof f == 'object')
        try {
          return this._ws.send(JSON.stringify(f)), !0
        } catch (p) {
          this.dispatchEvent(new ErrorEvent('error', { message: 'cannot send message to signaling server', error: p }))
        }
      return !1
    }
    close() {
      this._ws && ((this._ready = !1), (this._channelId = ''), this._ws.close(), this.closeAllConsumerSessions(), this._producerSession && (this._producerSession.close(), (this._producerSession = null)))
    }
  }
  const oe = { config: null, channel: null, producers: {}, connectionListeners: [], producersListeners: [] },
    Ir = Object.freeze({
      SessionState: ke,
      registerConnectionListener: function (s) {
        return !(!s || typeof s != 'object' || typeof s.connected != 'function' || typeof s.disconnected != 'function') && (oe.connectionListeners.includes(s) || oe.connectionListeners.push(s), !0)
      },
      unregisterConnectionListener: function (s) {
        const f = oe.connectionListeners.indexOf(s)
        return f >= 0 && (oe.connectionListeners.splice(f, 1), !0)
      },
      unregisterAllConnectionListeners: function () {
        oe.connectionListeners = []
      },
      createProducerSession: function (s) {
        return oe.channel ? oe.channel.createProducerSession(s) : null
      },
      getAvailableProducers: function () {
        return Object.values(oe.producers)
      },
      registerProducersListener: function (s) {
        return !(!s || typeof s != 'object' || typeof s.producerAdded != 'function' || typeof s.producerRemoved != 'function') && (oe.producersListeners.includes(s) || oe.producersListeners.push(s), !0)
      },
      unregisterProducersListener: function (s) {
        const f = oe.producersListeners.indexOf(s)
        return f >= 0 && (oe.producersListeners.splice(f, 1), !0)
      },
      unregisterAllProducersListeners: function () {
        oe.producersListeners = []
      },
      createConsumerSession: function (s) {
        return oe.channel ? oe.channel.createConsumerSession(s) : null
      },
    })
  function Or() {
    for (const s of oe.connectionListeners)
      try {
        s.disconnected()
      } catch (f) {
        console.error('a listener callback should not throw any exception', f)
      }
  }
  function Zn(s) {
    if (s in oe.producers) {
      const f = oe.producers[s]
      delete oe.producers[s]
      for (const p of oe.producersListeners)
        try {
          p.producerRemoved(f)
        } catch (m) {
          console.error('a listener callback should not throw any exception', m)
        }
    }
  }
  function Nr() {
    if (oe.channel) {
      const s = oe.channel
      ;(oe.channel = null), s.close()
      for (const f in oe.producers) Zn(f)
      ;(oe.producers = {}), Or()
    }
    ;(oe.channel = new un(oe.config.signalingServerUrl, oe.config.meta, oe.config.webrtcConfig)),
      oe.channel.addEventListener('error', (s) => {
        s.target === oe.channel && console.error(s.message, s.error)
      }),
      oe.channel.addEventListener('closed', (s) => {
        if (s.target === oe.channel) {
          oe.channel = null
          for (const f in oe.producers) Zn(f)
          ;(oe.producers = {}), Or(), oe.config.reconnectionTimeout > 0 && window.setTimeout(Nr, oe.config.reconnectionTimeout)
        }
      }),
      oe.channel.addEventListener('ready', (s) => {
        s.target === oe.channel &&
          (function (f) {
            for (const p of oe.connectionListeners)
              try {
                p.connected(f)
              } catch (m) {
                console.error('a listener callback should not throw any exception', m)
              }
          })(oe.channel.channelId)
      }),
      oe.channel.addEventListener('producerAdded', (s) => {
        s.target === oe.channel &&
          (function (f) {
            if (!(f.id in oe.producers)) {
              oe.producers[f.id] = f
              for (const p of oe.producersListeners)
                try {
                  p.producerAdded(f)
                } catch (m) {
                  console.error('a listener callback should not throw any exception', m)
                }
            }
          })(s.detail)
      }),
      oe.channel.addEventListener('producerRemoved', (s) => {
        s.target === oe.channel && Zn(s.detail.id)
      })
  }
  function er(s) {
    if (oe.config) throw new Error('GstWebRTC API is already started')
    const f = Object.assign({}, Ci)
    s && typeof s == 'object' && Object.assign(f, s), typeof f.meta != 'object' && (f.meta = null), (oe.config = f), Nr()
  }
  window.gstWebRTCAPI ||
    ((window.gstWebRTCAPI = Ir),
    window.addEventListener('DOMContentLoaded', () => {
      er(window.gstWebRTCConfig)
    }))
})()
var en = Ms.u,
  ph = Ms.B
const hh = ({ clientId: l }) => {
    const d = N.useRef(null),
      a = N.useRef(null),
      [u, h] = N.useState(null),
      v = async () => {
        if (u) u.close()
        else {
          const C = a.current
          C.classList.add('starting')
          try {
            const T = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } }),
              w = en.createProducerSession(T)
            if (w)
              h(w),
                w.addEventListener('error', (R) => {
                  console.error(R.message, R.error)
                }),
                w.addEventListener('closed', () => {
                  h(null), d.current.pause(), (d.current.srcObject = null), C.classList.remove('has-session', 'starting')
                }),
                w.addEventListener('stateChanged', (R) => {
                  R.target.state === en.SessionState.streaming && ((d.current.srcObject = T), d.current.play(), C.classList.remove('starting'))
                }),
                w.addEventListener('clientConsumerAdded', (R) => {
                  console.info(`client consumer added: ${R.detail.peerId}`)
                }),
                w.addEventListener('clientConsumerRemoved', (R) => {
                  console.info(`client consumer removed: ${R.detail.peerId}`)
                }),
                C.classList.add('has-session'),
                w.start()
            else {
              for (const R of T.getTracks()) R.stop()
              C.classList.remove('starting')
            }
          } catch (T) {
            console.error('Cannot access webcam and microphone:', T), C.classList.remove('starting')
          }
        }
      }
    return he.jsxs('section', { ref: a, id: 'capture', children: [he.jsx('span', { className: 'client-id', children: l }), he.jsx('button', { className: 'button', id: 'capture-button', onClick: v }), he.jsxs('div', { className: 'video', children: [he.jsxs('div', { className: 'spinner', children: [he.jsx('div', {}), he.jsx('div', {}), he.jsx('div', {}), he.jsx('div', {})] }), he.jsx('video', { ref: d })] })] })
  },
  mh = () => {
    const [l, d] = N.useState([]),
      a = N.useRef([]),
      u = N.useRef([]),
      h = N.useRef([])
    N.useEffect(() => {
      const C = {
        producerAdded: (T) => {
          l.some((w) => w.id === T.id) || d((w) => [...w, T])
        },
        producerRemoved: (T) => {
          u.current[T.id].close(), d((w) => w.filter((R) => R.id !== T.id))
        },
      }
      en.registerProducersListener(C)
      for (const T of en.getAvailableProducers()) C.producerAdded(T)
      return () => {
        en.unregisterProducersListener(C)
      }
    }, [])
    const v = (C, T) => {
      if ((C.preventDefault(), !!C.target.classList.contains('button')))
        if (
          (h.current[T].addEventListener('playing', () => {
            a.current[T].classList.contains('has-session') && a.current[T].classList.add('streaming')
          }),
          u.current[T])
        )
          u.current[T].close()
        else {
          const w = en.createConsumerSession(T)
          w &&
            ((u.current[T] = w),
            w.addEventListener('error', (R) => {
              console.error(R.message, R.error)
            }),
            w.addEventListener('closed', () => {
              h.current[T].pause(), (h.current[T].srcObject = null), a.current[T].classList.remove('has-session', 'streaming', 'has-remote-control')
            }),
            w.addEventListener('streamsChanged', () => {
              const R = w.streams
              R.length > 0 && ((h.current[T].srcObject = R[0]), h.current[T].play().catch(() => {}))
            }),
            w.addEventListener('remoteControllerChanged', () => {
              const R = w.remoteController
              R ? (a.current[T].classList.add('has-remote-control'), R.attachVideoElement(h.current[T])) : a.current[T].classList.remove('has-remote-control')
            }),
            a.current[T].classList.add('has-session'),
            w.connect())
        }
    }
    return he.jsxs('section', { children: [he.jsx('h1', { children: 'Remote Streams' }), he.jsx('ul', { id: 'remote-streams', children: l.map((C) => he.jsxs('li', { id: C.id, ref: (T) => (a.current[C.id] = T), children: [he.jsx('div', { className: 'button', onClick: (T) => v(T, C.id), children: C.meta.name || C.id }), he.jsxs('div', { className: 'video', children: [he.jsxs('div', { className: 'spinner', children: [he.jsx('div', {}), he.jsx('div', {}), he.jsx('div', {}), he.jsx('div', {})] }), he.jsx('span', { className: 'remote-control', children: '©' }), he.jsx('video', { ref: (T) => (h.current[C.id] = T) }), he.jsx('div', { className: 'fullscreen', children: he.jsx('span', { title: 'Toggle fullscreen', children: '▢' }) })] })] }, C.id)) })] })
  }
function gh() {
  const [l, d] = N.useState('none')
  return (
    N.useEffect(() => {
      window.gstWebRTCAPI || ((window.gstWebRTCAPI = en), ph({ signalingServerUrl: 'wss://gst-webrtc-signalling-server.hexaforce.io' }))
      const a = { connected: (u) => d(u), disconnected: () => d('none') }
      return (
        en.registerConnectionListener(a),
        () => {
          en.unregisterConnectionListener(a)
        }
      )
    }, []),
    he.jsxs(he.Fragment, { children: [he.jsx('header', { children: he.jsx('h1', { children: 'GstWebRTC API' }) }), he.jsxs('main', { children: [he.jsx(hh, { clientId: l }), he.jsx(mh, {})] })] })
  )
}
Gf.createRoot($('root')).render(he.jsx(nh, { children: he.jsxs(Op, { children: [he.jsx(Rs, { path: '/health-check', element: he.jsx(he.Fragment, { children: 'OK' }) }), he.jsx(Rs, { path: '/', element: he.jsx(gh, {}) })] }) }))
