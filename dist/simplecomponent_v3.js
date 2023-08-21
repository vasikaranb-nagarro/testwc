var J = Object.defineProperty;
var R = (e, t, n) => t in e ? J(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (R(e, typeof t != "symbol" ? t + "" : t, n), n);
function b() {
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
function m(e) {
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
function p(e) {
  C = e;
}
const d = [], v = [];
let _ = [];
const M = [], K = /* @__PURE__ */ Promise.resolve();
let O = !1;
function Q() {
  O || (O = !0, K.then(A));
}
function j(e) {
  _.push(e);
}
const x = /* @__PURE__ */ new Set();
let h = 0;
function A() {
  if (h !== 0)
    return;
  const e = C;
  do {
    try {
      for (; h < d.length; ) {
        const t = d[h];
        h++, p(t), W(t.$$);
      }
    } catch (t) {
      throw d.length = 0, h = 0, t;
    }
    for (p(null), d.length = 0, h = 0; v.length; )
      v.pop()();
    for (let t = 0; t < _.length; t += 1) {
      const n = _[t];
      x.has(n) || (x.add(n), n());
    }
    _.length = 0;
  } while (d.length);
  for (; M.length; )
    M.pop()();
  O = !1, x.clear(), p(e);
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
  _.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), _ = t;
}
const Y = /* @__PURE__ */ new Set();
function Z(e, t) {
  e && e.i && (Y.delete(e), e.i(t));
}
function tt(e, t, n) {
  const { fragment: s, after_update: c } = e.$$;
  s && s.m(t, n), j(() => {
    const $ = e.$$.on_mount.map(T).filter(H);
    e.$$.on_destroy ? e.$$.on_destroy.push(...$) : w($), e.$$.on_mount = [];
  }), c.forEach(j);
}
function et(e, t) {
  const n = e.$$;
  n.fragment !== null && (X(n.after_update), w(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function nt(e, t) {
  e.$$.dirty[0] === -1 && (d.push(e), Q(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function st(e, t, n, s, c, $, i, r = [-1]) {
  const u = C;
  p(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: $,
    update: b,
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
    dirty: r,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  i && i(o.root);
  let a = !1;
  if (o.ctx = n ? n(e, t.props || {}, (l, N, ...S) => {
    const L = S.length ? S[0] : N;
    return o.ctx && c(o.ctx[l], o.ctx[l] = L) && (!o.skip_bound && o.bound[l] && o.bound[l](L), a && nt(e, l)), N;
  }) : [], o.update(), a = !0, w(o.before_update), o.fragment = s ? s(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = D(t.target);
      o.fragment && o.fragment.l(l), l.forEach(m);
    } else
      o.fragment && o.fragment.c();
    t.intro && Z(e.$$.fragment), tt(e, t.target, t.anchor), A();
  }
  p(u);
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
      let n = function(i) {
        return () => {
          let r;
          return {
            c: function() {
              r = E("slot"), i !== "default" && z(r, "name", i);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(a, l) {
              g(a, r, l);
            },
            d: function(a) {
              a && m(r);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const s = {}, c = G(this);
      for (const i of this.$$s)
        i in c && (s[i] = [n(i)]);
      for (const i of this.attributes) {
        const r = this.$$g_p(i.name);
        r in this.$$d || (this.$$d[r] = y(r, i.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: s,
          $$scope: {
            ctx: []
          }
        }
      });
      const $ = () => {
        this.$$r = !0;
        for (const i in this.$$p_d)
          if (this.$$d[i] = this.$$c.$$.ctx[this.$$c.$$.props[i]], this.$$p_d[i].reflect) {
            const r = y(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            r == null ? this.removeAttribute(i) : this.setAttribute(this.$$p_d[i].attribute || i, r);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push($), $();
      for (const i in this.$$l)
        for (const r of this.$$l[i]) {
          const u = this.$$c.$on(i, r);
          this.$$l_u.set(r, u);
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
  var $;
  const c = ($ = n[e]) == null ? void 0 : $.type;
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
function it(e, t, n, s, c, $) {
  let i = class extends I {
    constructor() {
      super(e, n, c), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (r) => (t[r].attribute || r).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((r) => {
    Object.defineProperty(i.prototype, r, {
      get() {
        return this.$$c && r in this.$$c ? this.$$c[r] : this.$$d[r];
      },
      set(u) {
        var o;
        u = y(r, u, t), this.$$d[r] = u, (o = this.$$c) == null || o.$set({ [r]: u });
      }
    });
  }), s.forEach((r) => {
    Object.defineProperty(i.prototype, r, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[r];
      }
    });
  }), $ && (i = $(i)), e.element = /** @type {any} */
  i, i;
}
class rt {
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
    et(this, 1), this.$destroy = b;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!H(n))
      return b;
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
  let t, n, s, c, $;
  return {
    c() {
      t = E("h1"), t.textContent = "This is a web component rendered via import map", n = q(), s = E("p"), c = k("the passed string is "), $ = k(
        /*message*/
        e[0]
      );
    },
    m(i, r) {
      g(i, t, r), g(i, n, r), g(i, s, r), B(s, c), B(s, $);
    },
    p(i, [r]) {
      r & /*message*/
      1 && F(
        $,
        /*message*/
        i[0]
      );
    },
    i: b,
    o: b,
    d(i) {
      i && (m(t), m(n), m(s));
    }
  };
}
function $t(e, t, n) {
  let { message: s = "" } = t;
  return e.$$set = (c) => {
    "message" in c && n(0, s = c.message);
  }, [s];
}
class ut extends rt {
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
customElements.define("simple-component", it(ut, { message: {} }, [], [], !0));
