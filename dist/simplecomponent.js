var J = Object.defineProperty;
var R = (e, t, n) => t in e ? J(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (R(e, typeof t != "symbol" ? t + "" : t, n), n);
function p() {
}
function T(e) {
  return e();
}
function P() {
  return /* @__PURE__ */ Object.create(null);
}
function w(e) {
  e.forEach(T);
}
function H(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function U(e) {
  return Object.keys(e).length === 0;
}
function B(e, t) {
  e.appendChild(t);
}
function g(e, t, n) {
  e.insertBefore(t, n || null);
}
function _(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function E(e) {
  return document.createElement(e);
}
function k(e) {
  return document.createTextNode(e);
}
function q() {
  return k(" ");
}
function z(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function D(e) {
  return Array.from(e.childNodes);
}
function F(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function G(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let C;
function m(e) {
  C = e;
}
const h = [], v = [];
let d = [];
const M = [], K = /* @__PURE__ */ Promise.resolve();
let O = !1;
function Q() {
  O || (O = !0, K.then(A));
}
function j(e) {
  d.push(e);
}
const x = /* @__PURE__ */ new Set();
let a = 0;
function A() {
  if (a !== 0)
    return;
  const e = C;
  do {
    try {
      for (; a < h.length; ) {
        const t = h[a];
        a++, m(t), W(t.$$);
      }
    } catch (t) {
      throw h.length = 0, a = 0, t;
    }
    for (m(null), h.length = 0, a = 0; v.length; )
      v.pop()();
    for (let t = 0; t < d.length; t += 1) {
      const n = d[t];
      x.has(n) || (x.add(n), n());
    }
    d.length = 0;
  } while (h.length);
  for (; M.length; )
    M.pop()();
  O = !1, x.clear(), m(e);
}
function W(e) {
  if (e.fragment !== null) {
    e.update(), w(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(j);
  }
}
function X(e) {
  const t = [], n = [];
  d.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), d = t;
}
const Y = /* @__PURE__ */ new Set();
function Z(e, t) {
  e && e.i && (Y.delete(e), e.i(t));
}
function tt(e, t, n) {
  const { fragment: s, after_update: c } = e.$$;
  s && s.m(t, n), j(() => {
    const r = e.$$.on_mount.map(T).filter(H);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : w(r), e.$$.on_mount = [];
  }), c.forEach(j);
}
function et(e, t) {
  const n = e.$$;
  n.fragment !== null && (X(n.after_update), w(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function nt(e, t) {
  e.$$.dirty[0] === -1 && (h.push(e), Q(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function st(e, t, n, s, c, r, i, o = [-1]) {
  const u = C;
  m(e);
  const $ = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: p,
    not_equal: c,
    bound: P(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: P(),
    dirty: o,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  i && i($.root);
  let b = !1;
  if ($.ctx = n ? n(e, t.props || {}, (l, N, ...S) => {
    const L = S.length ? S[0] : N;
    return $.ctx && c($.ctx[l], $.ctx[l] = L) && (!$.skip_bound && $.bound[l] && $.bound[l](L), b && nt(e, l)), N;
  }) : [], $.update(), b = !0, w($.before_update), $.fragment = s ? s($.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = D(t.target);
      $.fragment && $.fragment.l(l), l.forEach(_);
    } else
      $.fragment && $.fragment.c();
    t.intro && Z(e.$$.fragment), tt(e, t.target, t.anchor), A();
  }
  m(u);
}
let I;
typeof HTMLElement == "function" && (I = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    f(this, "$$ctor");
    /** Slots */
    f(this, "$$s");
    /** The Svelte component instance */
    f(this, "$$c");
    /** Whether or not the custom element is connected */
    f(this, "$$cn", !1);
    /** Component props data */
    f(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    f(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    f(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    f(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    f(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const c = this.$$c.$on(t, n);
      this.$$l_u.set(n, c);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const c = this.$$l_u.get(n);
      c && (c(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return () => {
          let i;
          return {
            c: function() {
              i = E("slot"), r !== "default" && z(i, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function($, b) {
              g($, i, b);
            },
            d: function($) {
              $ && _(i);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, s = G(this);
      for (const r of this.$$s)
        r in s && (n[r] = [t(r)]);
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = y(i, r.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const c = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const i = y(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(r) : this.setAttribute(this.$$p_d[r].attribute || r, i);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(c), c();
      for (const r in this.$$l)
        for (const i of this.$$l[r]) {
          const o = this.$$c.$on(r, i);
          this.$$l_u.set(i, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var c;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = y(t, s, this.$$p_d, "toProp"), (c = this.$$c) == null || c.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function y(e, t, n, s) {
  var r;
  const c = (r = n[e]) == null ? void 0 : r.type;
  if (t = c === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (c) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (c) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function rt(e, t, n, s, c, r) {
  let i = class extends I {
    constructor() {
      super(e, n, c), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((o) => {
    Object.defineProperty(i.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var $;
        u = y(o, u, t), this.$$d[o] = u, ($ = this.$$c) == null || $.$set({ [o]: u });
      }
    });
  }), s.forEach((o) => {
    Object.defineProperty(i.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), r && (i = r(i)), e.element = /** @type {any} */
  i, i;
}
class it {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    et(this, 1), this.$destroy = p;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!H(n))
      return p;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const c = s.indexOf(n);
      c !== -1 && s.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !U(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ct = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ct);
function ot(e) {
  let t, n, s, c, r;
  return {
    c() {
      t = E("h1"), t.textContent = "This is a web component rendered via import map", n = q(), s = E("p"), c = k("the passed string is "), r = k(
        /*message*/
        e[0]
      );
    },
    m(i, o) {
      g(i, t, o), g(i, n, o), g(i, s, o), B(s, c), B(s, r);
    },
    p(i, [o]) {
      o & /*message*/
      1 && F(
        r,
        /*message*/
        i[0]
      );
    },
    i: p,
    o: p,
    d(i) {
      i && (_(t), _(n), _(s));
    }
  };
}
function $t(e, t, n) {
  let { message: s = "" } = t;
  return e.$$set = (c) => {
    "message" in c && n(0, s = c.message);
  }, [s];
}
class ut extends it {
  constructor(t) {
    super(), st(this, t, $t, ot, V, { message: 0 });
  }
  get message() {
    return this.$$.ctx[0];
  }
  set message(t) {
    this.$$set({ message: t }), A();
  }
}
rt(ut, { message: {} }, [], [], !0);
export {
  ut as SimpleComponent
};
