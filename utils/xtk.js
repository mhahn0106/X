function g(a) {
  throw a;
}
var i = void 0, l = !0, m = null, o = !1;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function q(a) {
  return function() {
    return this[a]
  }
}
var u, ba = this;
function ca() {
}
function ea(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function fa(a) {
  return a !== i
}
function v(a) {
  return a != m
}
function ga(a) {
  return"array" == ea(a)
}
function ha(a) {
  var b = ea(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function w(a) {
  return"string" == typeof a
}
function x(a) {
  return"number" == typeof a
}
function ia(a) {
  return"function" == ea(a)
}
function ja(a) {
  a = ea(a);
  return"object" == a || "array" == a || "function" == a
}
function ka(a) {
  return a[la] || (a[la] = ++ma)
}
var la = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ma = 0;
function na(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function oa(a, b, c) {
  a || g(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function pa(a, b, c) {
  pa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return pa.apply(m, arguments)
}
function qa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var ra = Date.now || function() {
  return+new Date
};
function y(a, b) {
  var c = a.split("."), d = ba;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && fa(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function z(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.B = b.prototype;
  a.prototype = new c
}
;/*


 xxxxxxx      xxxxxxx
 x:::::x    x:::::x 
 x:::::x  x:::::x  
 x:::::xx:::::x   
 x::::::::::x    
 x::::::::x     
 x::::::::x     
 x::::::::::x    
 x:::::xx:::::x   
 x:::::x  x:::::x  
 x:::::x    x:::::x 
 THE xxxxxxx      xxxxxxx TOOLKIT

 http://www.goXTK.com

 Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>

 The X Toolkit (XTK) is licensed under the MIT License:
 http://www.opensource.org/licenses/mit-license.php

 "Free software" is a matter of liberty, not price.
 "Free" as in "free speech", not as in "free beer".
 - Richard M. Stallman


*/
window["X.Counter"] = function() {
  var a = 0;
  return{ag:function() {
    a += 1
  }, Ch:function() {
    a += -1
  }, value:function() {
    return a
  }}
}();
if(!Function.prototype.bind) {
  Function.prototype.bind = function(a) {
    function b() {
      return e.apply(this instanceof c ? this : a || window, f.concat(d.call(arguments)))
    }
    function c() {
    }
    "function" !== typeof this && g(new TypeError("Function.prototype.bind - what is trying to be bound is not callable"));
    var d = Array.prototype.slice, f = d.call(arguments, 1), e = this;
    c.prototype = this.prototype;
    b.prototype = new c;
    return b
  }
}
y("Function.prototype.bind", Function.prototype.bind);
function sa(a) {
  if(!ta.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(xa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ya, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(za, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Aa, "&quot;"));
  return a
}
var xa = /&/g, ya = /</g, za = />/g, Aa = /\"/g, ta = /[&<>\"]/;
var Ba, Ca, Da, Ea, Fa, Ga, Ha;
function Ia() {
  return ba.navigator ? ba.navigator.userAgent : m
}
function Ja() {
  return ba.navigator
}
Fa = Ea = Da = Ca = Ba = o;
var Ka;
if(Ka = Ia()) {
  var La = Ja();
  Ba = 0 == Ka.indexOf("Opera");
  Ca = !Ba && -1 != Ka.indexOf("MSIE");
  Ea = (Da = !Ba && -1 != Ka.indexOf("WebKit")) && -1 != Ka.indexOf("Mobile");
  Fa = !Ba && !Da && "Gecko" == La.product
}
var Ma = Ba, A = Ca, Na = Fa, B = Da, Oa = Ea, Pa, Qa = Ja();
Pa = Qa && Qa.platform || "";
Ga = -1 != Pa.indexOf("Mac");
Ha = -1 != Pa.indexOf("Win");
var Ra = !!Ja() && -1 != (Ja().appVersion || "").indexOf("X11"), Sa;
a: {
  var Ta = "", Ua;
  if(Ma && ba.opera) {
    var Va = ba.opera.version, Ta = "function" == typeof Va ? Va() : Va
  }else {
    if(Na ? Ua = /rv\:([^\);]+)(\)|;)/ : A ? Ua = /MSIE\s+([^\);]+)(\)|;)/ : B && (Ua = /WebKit\/(\S+)/), Ua) {
      var Wa = Ua.exec(Ia()), Ta = Wa ? Wa[1] : ""
    }
  }
  if(A) {
    var Xa, Ya = ba.document;
    Xa = Ya ? Ya.documentMode : i;
    if(Xa > parseFloat(Ta)) {
      Sa = "" + Xa;
      break a
    }
  }
  Sa = Ta
}
var Za = {};
function C(a) {
  var b;
  if(!(b = Za[a])) {
    b = 0;
    for(var c = ("" + Sa).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), e = 0;0 == b && e < f;e++) {
      var h = c[e] || "", j = d[e] || "", k = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var t = k.exec(h) || ["", "", ""], r = p.exec(j) || ["", "", ""];
        if(0 == t[0].length && 0 == r[0].length) {
          break
        }
        b = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == r[2].length) ? -1 : (0 == t[2].length) > (0 == r[2].length) ? 1 : 0) || (t[2] < r[2] ? -1 : t[2] > r[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Za[a] = 0 <= b
  }
  return b
}
var $a = {};
function ab(a) {
  return $a[a] || ($a[a] = A && document.documentMode && document.documentMode >= a)
}
;function bb(a, b) {
  for(var c in a) {
    b.call(i, a[c], c, a)
  }
}
function cb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function db(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var eb = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function fb(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var e = 0;e < eb.length;e++) {
      c = eb[e], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var gb = Array.prototype, hb = gb.indexOf ? function(a, b, c) {
  return gb.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(w(a)) {
    return!w(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, ib = gb.forEach ? function(a, b, c) {
  gb.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, e = 0;e < d;e++) {
    e in f && b.call(c, f[e], e, a)
  }
}, jb = gb.map ? function(a, b, c) {
  return gb.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), e = w(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in e && (f[h] = b.call(c, e[h], h, a))
  }
  return f
}, kb = gb.every ? function(a, b, c) {
  return gb.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, e = 0;e < d;e++) {
    if(e in f && !b.call(c, f[e], e, a)) {
      return o
    }
  }
  return l
};
function lb(a, b) {
  var c = hb(a, b);
  0 <= c && gb.splice.call(a, c, 1)
}
function mb(a) {
  return gb.concat.apply(gb, arguments)
}
function nb(a) {
  if(ga(a)) {
    return mb(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function ob(a, b, c) {
  return 2 >= arguments.length ? gb.slice.call(a, b) : gb.slice.call(a, b, c)
}
;function pb(a) {
  if("function" == typeof a.fa) {
    a = a.fa()
  }else {
    if(ha(a) || w(a)) {
      a = a.length
    }else {
      var b = 0, c;
      for(c in a) {
        b++
      }
      a = b
    }
  }
  return a
}
function qb(a) {
  if("function" == typeof a.$) {
    return a.$()
  }
  if(w(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return cb(a)
}
function rb(a) {
  if("function" == typeof a.Hb) {
    return a.Hb()
  }
  if("function" != typeof a.$) {
    if(ha(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return db(a)
  }
}
function sb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || w(a)) {
      ib(a, b, c)
    }else {
      for(var d = rb(a), f = qb(a), e = f.length, h = 0;h < e;h++) {
        b.call(c, f[h], d && d[h], a)
      }
    }
  }
}
function tb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, i)
  }
  if(ha(a) || w(a)) {
    return kb(a, b, i)
  }
  for(var c = rb(a), d = qb(a), f = d.length, e = 0;e < f;e++) {
    if(!b.call(i, d[e], c && c[e], a)) {
      return o
    }
  }
  return l
}
;var ub = "StopIteration" in ba ? ba.StopIteration : Error("StopIteration");
function vb() {
}
vb.prototype.next = function() {
  g(ub)
};
vb.prototype.qb = function() {
  return this
};
function wb(a) {
  if(a instanceof vb) {
    return a
  }
  if("function" == typeof a.qb) {
    return a.qb(o)
  }
  if(ha(a)) {
    var b = 0, c = new vb;
    c.next = function() {
      for(;;) {
        b >= a.length && g(ub);
        if(b in a) {
          return a[b++]
        }
        b++
      }
    };
    return c
  }
  g(Error("Not implemented"))
}
function xb(a, b) {
  if(ha(a)) {
    try {
      ib(a, b, i)
    }catch(c) {
      c !== ub && g(c)
    }
  }else {
    a = wb(a);
    try {
      for(;;) {
        b.call(i, a.next(), i, a)
      }
    }catch(d) {
      d !== ub && g(d)
    }
  }
}
;function D(a, b) {
  this.o = {};
  this.k = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && g(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Zc(a)
  }
}
u = D.prototype;
u.g = 0;
u.Vb = 0;
u.fa = q("g");
u.$ = function() {
  yb(this);
  for(var a = [], b = 0;b < this.k.length;b++) {
    a.push(this.o[this.k[b]])
  }
  return a
};
u.Hb = function() {
  yb(this);
  return this.k.concat()
};
u.cd = function(a) {
  for(var b = 0;b < this.k.length;b++) {
    var c = this.k[b];
    if(zb(this.o, c) && this.o[c] == a) {
      return l
    }
  }
  return o
};
u.Cb = function(a, b) {
  if(this === a) {
    return l
  }
  if(this.g != a.fa()) {
    return o
  }
  var c = b || Ab;
  yb(this);
  for(var d, f = 0;d = this.k[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return o
    }
  }
  return l
};
function Ab(a, b) {
  return a === b
}
u.clear = function() {
  this.o = {};
  this.Vb = this.g = this.k.length = 0
};
u.remove = function(a) {
  return zb(this.o, a) ? (delete this.o[a], this.g--, this.Vb++, this.k.length > 2 * this.g && yb(this), l) : o
};
function yb(a) {
  if(a.g != a.k.length) {
    for(var b = 0, c = 0;b < a.k.length;) {
      var d = a.k[b];
      zb(a.o, d) && (a.k[c++] = d);
      b++
    }
    a.k.length = c
  }
  if(a.g != a.k.length) {
    for(var f = {}, c = b = 0;b < a.k.length;) {
      d = a.k[b], zb(f, d) || (a.k[c++] = d, f[d] = 1), b++
    }
    a.k.length = c
  }
}
u.get = function(a, b) {
  return zb(this.o, a) ? this.o[a] : b
};
u.set = function(a, b) {
  zb(this.o, a) || (this.g++, this.k.push(a), this.Vb++);
  this.o[a] = b
};
u.Zc = function(a) {
  var b;
  a instanceof D ? (b = a.Hb(), a = a.$()) : (b = db(a), a = cb(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
u.c = function() {
  return new D(this)
};
u.qb = function(a) {
  yb(this);
  var b = 0, c = this.k, d = this.o, f = this.Vb, e = this, h = new vb;
  h.next = function() {
    for(;;) {
      f != e.Vb && g(Error("The map has changed since the iterator was created"));
      b >= c.length && g(ub);
      var h = c[b++];
      return a ? h : d[h]
    }
  };
  return h
};
function zb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Bb(a) {
  this.o = new D;
  a && this.Zc(a)
}
function Cb(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
u = Bb.prototype;
u.fa = function() {
  return this.o.fa()
};
u.add = function(a) {
  this.o.set(Cb(a), a)
};
u.Zc = function(a) {
  for(var a = qb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
u.yc = function(a) {
  for(var a = qb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
u.remove = function(a) {
  return this.o.remove(Cb(a))
};
u.clear = function() {
  this.o.clear()
};
u.contains = function(a) {
  a = Cb(a);
  return zb(this.o.o, a)
};
u.xe = function(a) {
  for(var b = new Bb, a = qb(a), c = 0;c < a.length;c++) {
    var d = a[c];
    this.contains(d) && b.add(d)
  }
  return b
};
u.$ = function() {
  return this.o.$()
};
u.c = function() {
  return new Bb(this)
};
u.Cb = function(a) {
  return this.fa() == pb(a) && Db(this, a)
};
function Db(a, b) {
  var c = pb(b);
  if(a.fa() > c) {
    return o
  }
  !(b instanceof Bb) && 5 < c && (b = new Bb(b));
  return tb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.cd) {
        a = b.cd(a)
      }else {
        if(ha(b) || w(b)) {
          a = 0 <= hb(b, a)
        }else {
          a: {
            for(var c in b) {
              if(b[c] == a) {
                a = l;
                break a
              }
            }
            a = o
          }
        }
      }
    }
    return a
  })
}
u.qb = function() {
  return this.o.qb(o)
};
function Eb() {
}
Eb.prototype.je = o;
Eb.prototype.Y = function() {
  if(!this.je) {
    this.je = l, this.q()
  }
};
Eb.prototype.q = function() {
  this.Rf && Fb.apply(m, this.Rf)
};
function Gb(a) {
  a && "function" == typeof a.Y && a.Y()
}
function Fb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Fb.apply(m, d) : Gb(d)
  }
}
;function Hb(a, b) {
  this.Ce = b;
  this.Fb = [];
  a > this.Ce && g(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Fb.push(this.lc())
  }
}
z(Hb, Eb);
u = Hb.prototype;
u.fe = m;
u.ie = m;
function Ib(a, b) {
  a.Fb.length < a.Ce ? a.Fb.push(b) : a.gd(b)
}
u.lc = function() {
  return this.fe ? this.fe() : {}
};
u.gd = function(a) {
  if(this.ie) {
    this.ie(a)
  }else {
    if(ja(a)) {
      if(ia(a.Y)) {
        a.Y()
      }else {
        for(var b in a) {
          delete a[b]
        }
      }
    }
  }
};
u.q = function() {
  Hb.B.q.call(this);
  for(var a = this.Fb;a.length;) {
    this.gd(a.pop())
  }
  delete this.Fb
};
function Jb() {
  this.Db = [];
  this.yd = new D;
  this.kf = this.lf = this.mf = this.ef = 0;
  this.Ub = new D;
  this.ce = this.jf = 0;
  this.rd = 1;
  this.hd = new Hb(0, 4E3);
  this.hd.lc = function() {
    return new Kb
  };
  this.ff = new Hb(0, 50);
  this.ff.lc = function() {
    return new Lb
  };
  var a = this;
  this.ld = new Hb(0, 2E3);
  this.ld.lc = function() {
    return"" + a.rd++
  };
  this.ld.gd = function() {
  };
  this.Qf = 3
}
function Lb() {
  this.Hd = this.gf = this.X = 0
}
Lb.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.X, " (", Math.round(10 * this.gf) / 10, " ms)");
  this.Hd && a.push(" [VarAlloc = ", this.Hd, "]");
  return a.join("")
};
function Kb() {
}
function Mb(a, b, c, d) {
  var f = [];
  -1 == c ? f.push("    ") : f.push(Nb(a.me - c));
  f.push(" ", Ob(a.me - b));
  0 == a.jd ? f.push(" Start        ") : 1 == a.jd ? (f.push(" Done "), f.push(Nb(a.Ih - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(d, a);
  0 < a.Pg && f.push("[VarAlloc ", a.Pg, "] ");
  return f.join("")
}
Kb.prototype.toString = function() {
  return this.type == m ? this.Of : "[" + this.type + "] " + this.Of
};
Jb.prototype.reset = function(a) {
  this.Qf = a;
  for(a = 0;a < this.Db.length;a++) {
    var b = this.hd.id;
    b && Ib(this.ld, b);
    Ib(this.hd, this.Db[a])
  }
  this.Db.length = 0;
  this.yd.clear();
  this.ef = ra();
  this.ce = this.jf = this.kf = this.lf = this.mf = 0;
  b = this.Ub.Hb();
  for(a = 0;a < b.length;a++) {
    var c = this.Ub.get(b[a]);
    c.X = 0;
    c.gf = 0;
    c.Hd = 0;
    Ib(this.ff, c)
  }
  this.Ub.clear()
};
Jb.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.Db.length;d++) {
    var f = this.Db[d];
    1 == f.jd && c.pop();
    a.push(" ", Mb(f, this.ef, b, c.join("")));
    b = f.me;
    a.push("\n");
    0 == f.jd && c.push("|  ")
  }
  if(0 != this.yd.fa()) {
    var e = ra();
    a.push(" Unstopped timers:\n");
    xb(this.yd, function(b) {
      a.push("  ", b, " (", e - b.startTime, " ms, started at ", Ob(b.startTime), ")\n")
    })
  }
  b = this.Ub.Hb();
  for(d = 0;d < b.length;d++) {
    c = this.Ub.get(b[d]), 1 < c.X && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.jf, "\n", "Total comments created ", this.ce, "\n", "Overhead start: ", this.mf, " ms\n", "Overhead end: ", this.lf, " ms\n", "Overhead comment: ", this.kf, " ms\n");
  return a.join("")
};
function Nb(a) {
  var a = Math.round(a), b = "";
  1E3 > a && (b = " ");
  100 > a && (b = "  ");
  10 > a && (b = "   ");
  return b + a
}
function Ob(a) {
  a = Math.round(a);
  return("" + (100 + a / 1E3 % 60)).substring(1, 3) + "." + ("" + (1E3 + a % 1E3)).substring(1, 4)
}
new Jb;
function Pb() {
}
var Qb = 0;
u = Pb.prototype;
u.key = 0;
u.jb = o;
u.$c = o;
u.ga = function(a, b, c, d, f, e) {
  ia(a) ? this.ye = l : a && a.handleEvent && ia(a.handleEvent) ? this.ye = o : g(Error("Invalid listener argument"));
  this.Nb = a;
  this.Ye = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.kd = e;
  this.$c = o;
  this.key = ++Qb;
  this.jb = o
};
u.handleEvent = function(a) {
  return this.ye ? this.Nb.call(this.kd || this.src, a) : this.Nb.handleEvent.call(this.Nb, a)
};
!A || ab(9);
var Rb = !A || ab(9), Sb = A && !C("8");
!B || C("528");
Na && C("1.9b") || A && C("8") || Ma && C("9.5") || B && C("528");
!Na || C("8");
function Tb(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
z(Tb, Eb);
u = Tb.prototype;
u.q = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
u.Ta = o;
u.Qb = l;
u.stopPropagation = function() {
  this.Ta = l
};
u.preventDefault = function() {
  this.Qb = o
};
function Ub(a) {
  Ub[" "](a);
  return a
}
Ub[" "] = ca;
function Vb(a, b) {
  a && this.ga(a, b)
}
z(Vb, Tb);
u = Vb.prototype;
u.target = m;
u.relatedTarget = m;
u.offsetX = 0;
u.offsetY = 0;
u.clientX = 0;
u.clientY = 0;
u.screenX = 0;
u.screenY = 0;
u.button = 0;
u.keyCode = 0;
u.charCode = 0;
u.ctrlKey = o;
u.altKey = o;
u.shiftKey = o;
u.metaKey = o;
u.rg = o;
u.ea = m;
u.ga = function(a, b) {
  var c = this.type = a.type;
  Tb.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Na) {
      var f;
      a: {
        try {
          Ub(d.nodeName);
          f = l;
          break a
        }catch(e) {
        }
        f = o
      }
      f || (d = m)
    }
  }else {
    if("mouseover" == c) {
      d = a.fromElement
    }else {
      if("mouseout" == c) {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = B || a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = B || a.offsetY !== i ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== i ? a.clientX : a.pageX;
  this.clientY = a.clientY !== i ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.rg = Ga ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ea = a;
  delete this.Qb;
  delete this.Ta
};
u.stopPropagation = function() {
  Vb.B.stopPropagation.call(this);
  this.ea.stopPropagation ? this.ea.stopPropagation() : this.ea.cancelBubble = l
};
u.preventDefault = function() {
  Vb.B.preventDefault.call(this);
  var a = this.ea;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = o, Sb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
u.Vf = q("ea");
u.q = function() {
  Vb.B.q.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ea = m
};
var Wb = {}, Xb = {}, Yb = {}, Zb = {};
function E(a, b, c, d, f) {
  if(b) {
    if(ga(b)) {
      for(var e = 0;e < b.length;e++) {
        E(a, b[e], c, d, f)
      }
      return m
    }
    var d = !!d, h = Xb;
    b in h || (h[b] = {g:0, T:0});
    h = h[b];
    d in h || (h[d] = {g:0, T:0}, h.g++);
    var h = h[d], j = ka(a), k;
    h.T++;
    if(h[j]) {
      k = h[j];
      for(e = 0;e < k.length;e++) {
        if(h = k[e], h.Nb == c && h.kd == f) {
          if(h.jb) {
            break
          }
          return k[e].key
        }
      }
    }else {
      k = h[j] = [], h.g++
    }
    e = $b();
    e.src = a;
    h = new Pb;
    h.ga(c, e, a, b, d, f);
    c = h.key;
    e.key = c;
    k.push(h);
    Wb[c] = h;
    Yb[j] || (Yb[j] = []);
    Yb[j].push(h);
    a.addEventListener ? (a == ba || !a.ge) && a.addEventListener(b, e, d) : a.attachEvent(b in Zb ? Zb[b] : Zb[b] = "on" + b, e);
    return c
  }
  g(Error("Invalid event type"))
}
function $b() {
  var a = ac, b = Rb ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function bc(a, b, c, d, f) {
  if(ga(b)) {
    for(var e = 0;e < b.length;e++) {
      bc(a, b[e], c, d, f)
    }
  }else {
    a = E(a, b, c, d, f), Wb[a].$c = l
  }
}
function cc(a, b, c, d, f) {
  if(ga(b)) {
    for(var e = 0;e < b.length;e++) {
      cc(a, b[e], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      e = Xb;
      if(b in e && (e = e[b], d in e && (e = e[d], a = ka(a), e[a]))) {
        a = e[a];
        break a
      }
      a = m
    }
    if(a) {
      for(e = 0;e < a.length;e++) {
        if(a[e].Nb == c && a[e].capture == d && a[e].kd == f) {
          dc(a[e].key);
          break
        }
      }
    }
  }
}
function dc(a) {
  if(!Wb[a]) {
    return o
  }
  var b = Wb[a];
  if(b.jb) {
    return o
  }
  var c = b.src, d = b.type, f = b.Ye, e = b.capture;
  c.removeEventListener ? (c == ba || !c.ge) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(d in Zb ? Zb[d] : Zb[d] = "on" + d, f);
  c = ka(c);
  f = Xb[d][e][c];
  if(Yb[c]) {
    var h = Yb[c];
    lb(h, b);
    0 == h.length && delete Yb[c]
  }
  b.jb = l;
  f.Ge = l;
  ec(d, e, c, f);
  delete Wb[a];
  return l
}
function ec(a, b, c, d) {
  if(!d.tc && d.Ge) {
    for(var f = 0, e = 0;f < d.length;f++) {
      d[f].jb ? d[f].Ye.src = m : (f != e && (d[e] = d[f]), e++)
    }
    d.length = e;
    d.Ge = o;
    0 == e && (delete Xb[a][b][c], Xb[a][b].g--, 0 == Xb[a][b].g && (delete Xb[a][b], Xb[a].g--), 0 == Xb[a].g && delete Xb[a])
  }
}
function fc(a) {
  var b, c = 0, d = b == m;
  b = !!b;
  if(a == m) {
    bb(Yb, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var e = a[f];
        if(d || b == e.capture) {
          dc(e.key), c++
        }
      }
    })
  }else {
    if(a = ka(a), Yb[a]) {
      for(var a = Yb[a], f = a.length - 1;0 <= f;f--) {
        var e = a[f];
        if(d || b == e.capture) {
          dc(e.key), c++
        }
      }
    }
  }
}
function gc(a, b, c, d, f) {
  var e = 1, b = ka(b);
  if(a[b]) {
    a.T--;
    a = a[b];
    a.tc ? a.tc++ : a.tc = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var k = a[j];
        k && !k.jb && (e &= hc(k, f) !== o)
      }
    }finally {
      a.tc--, ec(c, d, b, a)
    }
  }
  return Boolean(e)
}
function hc(a, b) {
  var c = a.handleEvent(b);
  a.$c && dc(a.key);
  return c
}
function ac(a, b) {
  if(!Wb[a]) {
    return l
  }
  var c = Wb[a], d = c.type, f = Xb;
  if(!(d in f)) {
    return l
  }
  var f = f[d], e, h;
  if(!Rb) {
    var j;
    if(!(j = b)) {
      a: {
        j = "window.event".split(".");
        for(var k = ba;e = j.shift();) {
          if(v(k[e])) {
            k = k[e]
          }else {
            j = m;
            break a
          }
        }
        j = k
      }
    }
    e = j;
    j = l in f;
    k = o in f;
    if(j) {
      if(0 > e.keyCode || e.returnValue != i) {
        return l
      }
      a: {
        var p = o;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(t) {
            p = l
          }
        }
        if(p || e.returnValue == i) {
          e.returnValue = l
        }
      }
    }
    p = new Vb;
    p.ga(e, this);
    e = l;
    try {
      if(j) {
        for(var r = [], n = p.currentTarget;n;n = n.parentNode) {
          r.push(n)
        }
        h = f[l];
        h.T = h.g;
        for(var s = r.length - 1;!p.Ta && 0 <= s && h.T;s--) {
          p.currentTarget = r[s], e &= gc(h, r[s], d, l, p)
        }
        if(k) {
          h = f[o];
          h.T = h.g;
          for(s = 0;!p.Ta && s < r.length && h.T;s++) {
            p.currentTarget = r[s], e &= gc(h, r[s], d, o, p)
          }
        }
      }else {
        e = hc(c, p)
      }
    }finally {
      if(r) {
        r.length = 0
      }
      p.Y()
    }
    return e
  }
  d = new Vb(b, this);
  try {
    e = hc(c, d)
  }finally {
    d.Y()
  }
  return e
}
var ic = 0;
function jc(a) {
  return a + "_" + ic++
}
;function H(a) {
  Tb.call(this, a);
  this.i = "event"
}
z(H, Tb);
var kc = jc("pan"), lc = jc("rotate"), mc = jc("zoom"), nc = jc("render"), oc = jc("resetview"), pc = jc("modified"), qc = jc("progress"), rc = jc("hover"), sc = jc("hover_end"), tc = {gh:kc, mh:lc, yh:mc, kh:nc, lh:oc, ah:pc, jh:qc, Zg:rc, $g:sc};
function uc() {
  H.call(this, kc);
  this.Ya = new vc(0, 0)
}
z(uc, H);
function wc() {
  H.call(this, lc);
  this.Ya = new vc(0, 0);
  this.yf = 0
}
z(wc, H);
function xc() {
  H.call(this, mc);
  this.va = this.Ja = o
}
z(xc, H);
function yc() {
  H.call(this, nc);
  this.Bh = Date.now()
}
z(yc, H);
function zc() {
  H.call(this, rc);
  this.kc = this.jc = 0
}
z(zc, H);
function Ac() {
  H.call(this, sc)
}
z(Ac, H);
function Bc() {
  H.call(this, oc)
}
z(Bc, H);
function Cc() {
  H.call(this, pc);
  this.La = new J
}
z(Cc, H);
function Dc() {
  H.call(this, qc);
  this.Zd = 0
}
z(Dc, H);
y("X.event", H);
y("X.event.events", tc);
y("X.event.uniqueId", function(a) {
  return jc(a)
});
y("X.event.PanEvent", uc);
y("X.event.RotateEvent", wc);
y("X.event.ZoomEvent", xc);
y("X.event.RenderEvent", yc);
y("X.event.ResetViewEvent", Bc);
y("X.event.ModifiedEvent", Cc);
y("X.event.HoverEvent", zc);
y("X.event.ProgressEvent", Dc);
function Ec(a, b, c) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0;
  this.b = fa(c) ? c : 0
}
Ec.prototype.c = function() {
  return new Ec(this.x, this.y, this.b)
};
Ec.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ", " + this.b + ")"
};
Ec.prototype.hf = function() {
  return[this.x, this.y, this.b]
};
function K(a, b, c) {
  this.x = a;
  this.y = b;
  this.b = c
}
z(K, Ec);
u = K.prototype;
u.c = function() {
  return new K(this.x, this.y, this.b)
};
u.uc = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y + this.b * this.b)
};
u.scale = function(a) {
  this.x *= a;
  this.y *= a;
  this.b *= a;
  return this
};
u.I = function() {
  this.x = -this.x;
  this.y = -this.y;
  this.b = -this.b;
  return this
};
u.normalize = function() {
  return this.scale(1 / this.uc())
};
u.add = function(a) {
  this.x += a.x;
  this.y += a.y;
  this.b += a.b;
  return this
};
u.ja = function(a) {
  this.x -= a.x;
  this.y -= a.y;
  this.b -= a.b;
  return this
};
u.Cb = function(a) {
  return this == a || !!a && this.x == a.x && this.y == a.y && this.b == a.b
};
function Fc(a, b) {
  return new K(a.y * b.b - a.b * b.y, a.b * b.x - a.x * b.b, a.x * b.y - a.y * b.x)
}
;function Gc() {
}
z(Gc, Eb);
u = Gc.prototype;
u.ge = l;
u.wc = m;
u.Cd = aa("wc");
u.addEventListener = function(a, b, c, d) {
  E(this, a, b, c, d)
};
u.removeEventListener = function(a, b, c, d) {
  cc(this, a, b, c, d)
};
u.dispatchEvent = function(a) {
  var b = a.type || a, c = Xb;
  if(b in c) {
    if(w(a)) {
      a = new Tb(a, this)
    }else {
      if(a instanceof Tb) {
        a.target = a.target || this
      }else {
        var d = a, a = new Tb(b, this);
        fb(a, d)
      }
    }
    var d = 1, f, c = c[b], b = l in c, e;
    if(b) {
      f = [];
      for(e = this;e;e = e.wc) {
        f.push(e)
      }
      e = c[l];
      e.T = e.g;
      for(var h = f.length - 1;!a.Ta && 0 <= h && e.T;h--) {
        a.currentTarget = f[h], d &= gc(e, f[h], a.type, l, a) && a.Qb != o
      }
    }
    if(o in c) {
      if(e = c[o], e.T = e.g, b) {
        for(h = 0;!a.Ta && h < f.length && e.T;h++) {
          a.currentTarget = f[h], d &= gc(e, f[h], a.type, o, a) && a.Qb != o
        }
      }else {
        for(f = this;!a.Ta && f && e.T;f = f.wc) {
          a.currentTarget = f, d &= gc(e, f, a.type, o, a) && a.Qb != o
        }
      }
    }
    a = Boolean(d)
  }else {
    a = l
  }
  return a
};
u.q = function() {
  Gc.B.q.call(this);
  fc(this);
  this.wc = m
};
function M() {
  this.i = "base";
  this.f = o
}
z(M, Gc);
u = M.prototype;
u.className = q("i");
u.id = q("Ld");
u.print = function() {
  var a = Object.keys(this), b = "", c = "<unknown>", d = 0;
  for(d in a) {
    var f = "this." + a[d], e = eval(f);
    "this._className" == f ? c = e : b += f + ": " + e + "\n"
  }
  return"== X." + c + " ==\n" + b
};
u.Sf = q("f");
u.Ad = function() {
  this.f = o
};
y("X.base", M);
y("X.base.prototype.className", M.prototype.className);
y("X.base.prototype.print", M.prototype.print);
y("X.base.prototype.dirty", M.prototype.Sf);
y("X.base.prototype.setClean", M.prototype.Ad);
function N(a) {
  M.call(this);
  this.i = "triplets";
  this.Aa = this.Da = this.za = this.Ca = this.ya = this.Ba = m;
  this.Wb = [0, 0, 0];
  this.R = [];
  if(v(a) && a instanceof N) {
    this.R = a.all().slice(), this.Ba = a.Ba, this.ya = a.ya, this.Ca = a.Ca, this.za = a.za, this.Da = a.Da, this.Aa = a.Aa, this.Wb = a.Wb.slice()
  }
}
z(N, M);
u = N.prototype;
u.add = function(a, b, c) {
  (!x(a) || !x(b) || !x(c)) && g(Error("Invalid triplet."));
  if(!this.Ba || a < this.Ba) {
    this.Ba = a
  }
  if(!this.ya || a > this.ya) {
    this.ya = a
  }
  if(!this.Ca || b < this.Ca) {
    this.Ca = b
  }
  if(!this.za || b > this.za) {
    this.za = b
  }
  if(!this.Da || c < this.Da) {
    this.Da = c
  }
  if(!this.Aa || c > this.Aa) {
    this.Aa = c
  }
  this.Wb = [(this.Ba + this.ya) / 2, (this.Ca + this.za) / 2, (this.Da + this.Aa) / 2];
  this.f = l;
  return this.R.push(a, b, c) / 3
};
u.get = function(a) {
  (!x(a) || 3 * a > this.R.length) && g(Error("Invalid id."));
  a *= 3;
  return[this.R[a], this.R[a + 1], this.R[a + 2]]
};
u.remove = function(a) {
  (!x(a) || 3 * a > this.R.length) && g(Error("Invalid id."));
  this.R.splice(a, 3);
  this.f = l
};
u.all = q("R");
u.clear = function() {
  this.R = [];
  this.f = l
};
u.X = function() {
  return this.R.length / 3
};
u.length = function() {
  return this.R.length
};
y("X.triplets", N);
y("X.triplets.prototype.add", N.prototype.add);
y("X.triplets.prototype.get", N.prototype.get);
y("X.triplets.prototype.remove", N.prototype.remove);
y("X.triplets.prototype.all", N.prototype.all);
y("X.triplets.prototype.clear", N.prototype.clear);
y("X.triplets.prototype.count", N.prototype.X);
y("X.triplets.prototype.length", N.prototype.length);
function Hc() {
  M.call(this);
  this.i = "parser"
}
z(Hc, M);
Hc.prototype.parse = function() {
  g(Error("The function parse() should be overloaded."))
};
function Ic(a, b) {
  var c = O(a, b + 2), d = O(a, b + 3), f = (d << 1 & 255 | c >> 7) - 127, c = (c & 127) << 16 | O(a, b + 1) << 8 | O(a, b);
  return 0 == c && -127 == f ? 0 : (1 - 2 * (d >> 7)) * (1 + c * Math.pow(2, -23)) * Math.pow(2, f)
}
function Jc(a, b) {
  var c = O(a, b), d = O(a, b + 1), f = (c << 1 & 255 | d >> 7) - 127, d = (d & 127) << 16 | O(a, b + 2) << 8 | O(a, b + 3);
  return 0 == d && -127 == f ? 0 : (1 - 2 * (c >> 7)) * (1 + d * Math.pow(2, -23)) * Math.pow(2, f)
}
function Kc(a, b, c) {
  var d = [], f;
  for(f = 0;f < c;f++) {
    d[f] = Ic(a, b + 4 * f)
  }
  return d
}
function Lc(a, b) {
  return(O(a, b + 3) << 24) + (O(a, b + 2) << 16) + (O(a, b + 1) << 8) + O(a, b)
}
function Mc(a, b) {
  return(O(a, b) << 24) + (O(a, b + 1) << 16) + (O(a, b + 2) << 8) + O(a, b + 3)
}
function O(a, b) {
  return a.charCodeAt(b) & 255
}
y("X.parser", Hc);
y("X.parser.prototype.parse", Hc.prototype.parse);
function Nc() {
  Hc.call(this);
  this.i = "parserTRK"
}
z(Nc, Hc);
Nc.prototype.parse = function(a, b) {
  var c = a.l, d = a.s, f = a.v, e = 0, h;
  for(h = 0;3 > h;h++) {
  }
  var j = Kc(b, e + 12, 3);
  Kc(b, e + 24, 3);
  var k = (O(b, e + 36 + 1) << 8) + O(b, e + 36), p = (O(b, e + 238 + 1) << 8) + O(b, e + 238);
  Kc(b, e + 440, 16);
  Kc(b, e + 956, 6);
  h = Lc(b, e + 988);
  var e = Lc(b, e + 996), t = [], r = m, n = m, s = m, F = m, G = m, P = m, I;
  for(I = 0;I < h;I++) {
    for(var da = Lc(b, e), W = new N, e = e + 4, L = 0;L < da;L++) {
      var ua = Ic(b, e), e = e + 4, va = Ic(b, e), e = e + 4, wa = Ic(b, e), e = e + 4;
      0 < k && (Kc(b, e, k), e += 4 * k);
      ua /= j[0];
      va /= j[1];
      wa /= j[2];
      W.add(ua, va, wa)
    }
    0 < p && (e += 4 * p);
    var L = W.Ba, da = W.ya, ua = W.Ca, va = W.za, wa = W.Da, ee = W.Aa;
    if(!r || L < r) {
      r = L
    }
    if(!n || da > n) {
      n = da
    }
    if(!s || ua < s) {
      s = ua
    }
    if(!F || va > F) {
      F = va
    }
    if(!G || wa < G) {
      G = wa
    }
    if(!P || ee > P) {
      P = ee
    }
    t.push(W)
  }
  e = (r + n) / 2;
  s = (s + F) / 2;
  G = (G + P) / 2;
  for(I = 0;I < h;I++) {
    P = t[I];
    F = P.X();
    for(L = 0;L < F - 1;L++) {
      k = P.get(L), j = P.get(L + 1), c.add(k[0], k[1], k[2]), c.add(j[0], j[1], j[2]), p = k[0] - e, r = k[1] - s, n = k[2] - G, W = Math.sqrt(p * p + r * r + n * n), da = j[0] - e, ua = j[1] - s, va = j[2] - G, wa = Math.sqrt(da * da + ua * ua + va * va), d.add(p / W, r / W, n / W), d.add(da / wa, ua / wa, va / wa), j = [Math.abs(j[0] - k[0]), Math.abs(j[1] - k[1]), Math.abs(j[2] - k[2])], k = Math.sqrt(j[0] * j[0] + j[1] * j[1] + j[2] * j[2]), j[0] /= k, j[1] /= k, j[2] /= k, f.add(j[0], j[1], 
      j[2]), f.add(j[0], j[1], j[2])
    }
  }
  a.mb(Oc);
  c = new Cc;
  c.La = a;
  this.dispatchEvent(c)
};
y("X.parserTRK", Nc);
y("X.parserTRK.prototype.parse", Nc.prototype.parse);
function Pc() {
  Hc.call(this);
  this.i = "parserSTL"
}
z(Pc, Hc);
Pc.prototype.parse = function(a, b) {
  for(var c = b.split("\n"), d = c.length, f = a.l, e = a.s, h = 0, j = d % 8;j--;) {
    this.p(f, e, c[h]), h++
  }
  for(j = 0.125 * d ^ 0;j--;) {
    this.p(f, e, c[h]), h++, this.p(f, e, c[h]), h++, this.p(f, e, c[h]), h++, this.p(f, e, c[h]), h++, this.p(f, e, c[h]), h++, this.p(f, e, c[h]), h++, this.p(f, e, c[h]), h++, this.p(f, e, c[h]), h++
  }
  c = new Cc;
  c.La = a;
  this.dispatchEvent(c)
};
Pc.prototype.p = function(a, b, c) {
  var c = c.replace(/^\s+|\s+$/g, ""), d = c.split(" ");
  if("vertex" == d[0]) {
    var c = parseFloat(d[1]), f = parseFloat(d[2]), d = parseFloat(d[3]);
    a.add(c, f, d)
  }else {
    "facet" == d[0] && (c = parseFloat(d[2]), f = parseFloat(d[3]), d = parseFloat(d[4]), b.add(c, f, d), b.add(c, f, d), b.add(c, f, d))
  }
};
y("X.parserSTL", Pc);
y("X.parserSTL.prototype.parse", Pc.prototype.parse);
y("X.parserSTL.prototype.parseLine", Pc.prototype.p);
function Q(a, b, c) {
  this.Q = this.P = this.O = 0;
  3 == arguments.length ? (this.O = Number(a), this.P = Number(b), this.Q = Number(c)) : "x" in a && "y" in a && "z" in a ? (this.O = Number(a.x()), this.P = Number(a.y()), this.Q = Number(a.b())) : (this.O = Number(a[0]), this.P = Number(a[1]), this.Q = Number(a[2]))
}
Q.prototype = {c:function() {
  return new Q(this.O, this.P, this.Q)
}, vc:function() {
  return new Q(-this.O, -this.P, -this.Q)
}, Sa:function(a) {
  return new Q(this.O + a.x(), this.P + a.y(), this.Q + a.b())
}, gb:function(a) {
  return new Q(this.O - a.x(), this.P - a.y(), this.Q - a.b())
}, sa:function(a) {
  return new Q(this.O * a, this.P * a, this.Q * a)
}, ke:function(a) {
  return new Q(this.O / a, this.P / a, this.Q / a)
}, Pa:function(a) {
  return this.O * a.x() + this.P * a.y() + this.Q * a.b()
}, pd:function(a, b) {
  return this.Sa(a.gb(this).sa(b))
}, length:function() {
  return Math.sqrt(this.Pa(this))
}, ob:function() {
  return this.ke(this.length())
}, mc:function(a) {
  return new Q(this.P * a.b() - this.Q * a.y(), this.Q * a.x() - this.O * a.b(), this.O * a.y() - this.P * a.x())
}, x:q("O"), y:q("P"), b:q("Q")};
y("csgVector", Q);
y("csgVector.prototype.clone", Q.prototype.c);
y("csgVector.prototype.plus", Q.prototype.Sa);
y("csgVector.prototype.minus", Q.prototype.gb);
y("csgVector.prototype.dividedBy", Q.prototype.ke);
y("csgVector.prototype.times", Q.prototype.sa);
y("csgVector.prototype.dot", Q.prototype.Pa);
y("csgVector.prototype.lerp", Q.prototype.pd);
y("csgVector.prototype.length", Q.prototype.length);
y("csgVector.prototype.unit", Q.prototype.ob);
y("csgVector.prototype.cross", Q.prototype.mc);
y("csgVector.prototype.negated", Q.prototype.vc);
y("csgVector.prototype.x", Q.prototype.x);
y("csgVector.prototype.y", Q.prototype.y);
y("csgVector.prototype.z", Q.prototype.b);
function Qc() {
  this.zc = i
}
function Rc(a, b, c) {
  switch(typeof b) {
    case "string":
      Sc(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(b == m) {
        c.push("null");
        break
      }
      if(ga(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", e = 0;e < d;e++) {
          c.push(f), f = b[e], Rc(a, a.zc ? a.zc.call(b, "" + e, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(e in b) {
        Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], "function" != typeof f && (c.push(d), Sc(e, c), c.push(":"), Rc(a, a.zc ? a.zc.call(b, e, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      g(Error("Unknown type: " + typeof b))
  }
}
var Tc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Uc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Sc(a, b) {
  b.push('"', a.replace(Uc, function(a) {
    if(a in Tc) {
      return Tc[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return Tc[a] = f + b.toString(16)
  }), '"')
}
;function Vc() {
  M.call(this);
  this.i = "indexer";
  this.Xc = [];
  this.Ah = [];
  this.Nc = {}
}
z(Vc, M);
Vc.prototype.add = function(a) {
  v(a) || g(Error("Invalid object."));
  var b;
  b = [];
  Rc(new Qc, a, b);
  b = b.join("");
  if(!(b in this.Nc)) {
    this.Nc[b] = this.Xc.length, this.Xc.push(a)
  }
  return this.Nc[b]
};
Vc.prototype.unique = q("Xc");
y("X.indexer.prototype.add", Vc.prototype.add);
y("X.indexer.prototype.unique", Vc.prototype.unique);
function R(a, b) {
  this.J = new Q(a);
  this.u = new Q(b)
}
R.prototype = {c:function() {
  return new R(this.J.c(), this.u.c())
}, na:function() {
  this.u = this.u.vc()
}, we:function(a, b) {
  return new R(this.J.pd(a.J, b), this.u.pd(a.u, b))
}, vg:q("J"), sd:q("u")};
y("csgVertex", R);
y("csgVertex.prototype.clone", R.prototype.c);
y("csgVertex.prototype.flip", R.prototype.na);
y("csgVertex.prototype.interpolate", R.prototype.we);
y("csgVertex.prototype.pos", R.prototype.vg);
y("csgVertex.prototype.normal", R.prototype.sd);
function Wc(a, b) {
  this.u = a;
  this.pb = b
}
Wc.prototype = {c:function() {
  return new Wc(this.u.c(), this.pb)
}, na:function() {
  this.u = this.u.vc();
  this.pb = -this.pb
}, Wg:q("pb"), sd:q("u")};
y("csgPlane.prototype.w", Wc.prototype.Wg);
y("csgPlane.prototype.normal", Wc.prototype.sd);
function S(a, b) {
  this.ka = a;
  this.Sb = b;
  var c = a[0].J, d = a[2].J, d = a[1].J.gb(c).mc(d.gb(c)).ob();
  this.M = new Wc(d, d.Pa(c))
}
S.prototype = {c:function() {
  var a = this.ka.map(function(a) {
    return a.c()
  });
  return new S(a, this.Sb)
}, na:function() {
  this.ka.reverse().map(function(a) {
    a.na()
  });
  this.M.na()
}, Vg:q("ka"), Kg:q("Sb"), df:function(a, b, c, d, f) {
  for(var e = 0, h = [], j = 0;j < this.ka.length;j++) {
    var k = a.u.Pa(this.ka[j].J) - a.pb, k = -1.0E-5 > k ? 2 : 1.0E-5 < k ? 1 : 0, e = e | k;
    h.push(k)
  }
  switch(e) {
    case 0:
      (0 < a.u.Pa(this.M.u) ? b : c).push(this);
      break;
    case 1:
      d.push(this);
      break;
    case 2:
      f.push(this);
      break;
    case 3:
      b = [];
      c = [];
      for(j = 0;j < this.ka.length;j++) {
        var p = (j + 1) % this.ka.length, k = h[j], t = h[p], e = this.ka[j], p = this.ka[p];
        2 != k && b.push(e);
        1 != k && c.push(2 != k ? e.c() : e);
        3 == (k | t) && (k = (a.pb - a.u.Pa(e.J)) / a.u.Pa(p.J.gb(e.J)), k = e.we(p, k), b.push(k), c.push(k.c()))
      }
      3 <= b.length && d.push(new S(b, this.Sb));
      3 <= c.length && f.push(new S(c, this.Sb))
  }
}};
y("csgPolygon", S);
y("csgPolygon.prototype.clone", S.prototype.c);
y("csgPolygon.prototype.flip", S.prototype.na);
y("csgPolygon.prototype.vertices", S.prototype.Vg);
y("csgPolygon.prototype.shared", S.prototype.Kg);
function Xc(a) {
  this.w = this.A = this.M = m;
  this.h = [];
  a && this.cb(a)
}
Xc.prototype = {c:function() {
  var a = new Xc;
  a.Gg(this.M && this.M.c());
  a.Dg(this.A && this.A.c());
  a.Ag(this.w && this.w.c());
  a.Rb(this.h.map(function(a) {
    return a.c()
  }));
  return a
}, I:function() {
  for(var a = 0;a < this.h.length;a++) {
    this.h[a].na()
  }
  this.M.na();
  this.A && this.A.I();
  this.w && this.w.I();
  a = this.A;
  this.A = this.w;
  this.w = a
}, bd:function(a) {
  if(!this.M) {
    return a.slice()
  }
  for(var b = [], c = [], d = 0;d < a.length;d++) {
    a[d].df(this.M, b, c, b, c)
  }
  this.A && (b = this.A.bd(b));
  c = this.w ? this.w.bd(c) : [];
  return b.concat(c)
}, W:function(a) {
  this.h = a.bd(this.h);
  this.A && this.A.W(a);
  this.w && this.w.W(a)
}, Ha:function() {
  var a = this.h.slice();
  this.A && (a = a.concat(this.A.Ha()));
  this.w && (a = a.concat(this.w.Ha()));
  return a
}, cb:function(a) {
  if(a.length) {
    if(!this.M) {
      this.M = a[0].M.c()
    }
    for(var b = [], c = [], d = 0;d < a.length;d++) {
      a[d].df(this.M, this.h, this.h, b, c)
    }
    if(b.length) {
      if(!this.A) {
        this.A = new Xc
      }
      this.A.cb(b)
    }
    if(c.length) {
      if(!this.w) {
        this.w = new Xc
      }
      this.w.cb(c)
    }
  }
}, Gg:aa("M"), Dg:aa("A"), Ag:aa("w"), Xe:q("h"), Rb:aa("h")};
function T() {
  this.h = []
}
function Yc(a) {
  var b = new T;
  b.Rb(a);
  return b
}
T.prototype = {c:function() {
  var a = new T;
  a.Rb(this.h.map(function(a) {
    return a.c()
  }));
  return a
}, Og:q("h"), Dc:function(a) {
  var b = new Xc(this.c().h), a = new Xc(a.c().h);
  b.W(a);
  a.W(b);
  a.I();
  a.W(b);
  a.I();
  b.cb(a.Ha());
  return Yc(b.Ha())
}, ja:function(a) {
  var b = new Xc(this.c().h), a = new Xc(a.c().h);
  b.I();
  b.W(a);
  a.W(b);
  a.I();
  a.W(b);
  a.I();
  b.cb(a.Ha());
  b.I();
  return Yc(b.Ha())
}, sc:function(a) {
  var b = new Xc(this.c().h), a = new Xc(a.c().h);
  b.I();
  a.W(b);
  a.I();
  b.W(a);
  a.W(b);
  b.cb(a.Ha());
  b.I();
  return Yc(b.Ha())
}, inverse:function() {
  var a = this.c();
  a.h.map(function(a) {
    a.na()
  });
  return a
}, Xe:q("h"), Rb:aa("h")};
y("CSG", T);
y("CSG.fromPolygons", Yc);
y("CSG.prototype.toPolygons", T.prototype.Og);
y("CSG.prototype.union", T.prototype.Dc);
y("CSG.prototype.subtract", T.prototype.ja);
y("CSG.prototype.intersect", T.prototype.sc);
y("CSG.prototype.inverse", T.prototype.inverse);
y("CSG.prototype.polygons", T.prototype.Xe);
y("CSG.prototype.setPolygons", T.prototype.Rb);
function U(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
U.prototype.c = function() {
  return new U(this.x, this.y)
};
U.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Zc(a, b) {
  return new U(a.x - b.x, a.y - b.y)
}
;function vc(a, b) {
  this.x = a;
  this.y = b
}
z(vc, U);
u = vc.prototype;
u.c = function() {
  return new vc(this.x, this.y)
};
u.uc = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y)
};
u.scale = function(a) {
  this.x *= a;
  this.y *= a;
  return this
};
u.I = function() {
  this.x = -this.x;
  this.y = -this.y;
  return this
};
u.normalize = function() {
  return this.scale(1 / this.uc())
};
u.add = function(a) {
  this.x += a.x;
  this.y += a.y;
  return this
};
u.ja = function(a) {
  this.x -= a.x;
  this.y -= a.y;
  return this
};
u.rotate = function(a) {
  var b = Math.cos(a), a = Math.sin(a), c = this.y * b + this.x * a;
  this.x = this.x * b - this.y * a;
  this.y = c;
  return this
};
u.Cb = function(a) {
  return this == a || !!a && this.x == a.x && this.y == a.y
};
function $c(a, b) {
  this.width = a;
  this.height = b
}
function ad(a, b) {
  return a == b ? l : !a || !b ? o : a.width == b.width && a.height == b.height
}
u = $c.prototype;
u.c = function() {
  return new $c(this.width, this.height)
};
u.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
u.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
u.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
u.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
function bd(a, b) {
  if(a instanceof bd) {
    this.F = a.hf()
  }else {
    var c;
    if(c = ha(a)) {
      a: {
        for(var d = c = 0;d < a.length;d++) {
          if(!ha(a[d]) || 0 < c && a[d].length != c) {
            c = o;
            break a
          }
          for(var f = 0;f < a[d].length;f++) {
            if(!x(a[d][f])) {
              c = o;
              break a
            }
          }
          if(0 == c) {
            c = a[d].length
          }
        }
        c = 0 != c
      }
    }
    c ? this.F = nb(a) : a instanceof $c ? this.F = cd(a.height, a.width) : x(a) && x(b) && 0 < a && 0 < b ? this.F = cd(a, b) : g(Error("Invalid argument(s) for Matrix contructor"))
  }
  this.n = new $c(this.F[0].length, this.F.length)
}
function dd(a) {
  for(var b = [], c = 0;c < a;c++) {
    b[c] = [];
    for(var d = 0;d < a;d++) {
      b[c][d] = c == d ? 1 : 0
    }
  }
  return new bd(b)
}
function ed(a, b, c) {
  for(var d = 0;d < a.S().height;d++) {
    for(var f = 0;f < a.S().width;f++) {
      b.call(c, a.F[d][f], d, f, a)
    }
  }
}
function fd(a, b) {
  var c = new bd(a.S());
  ed(a, function(d, f, e) {
    c.F[f][e] = b.call(i, d, f, e, a)
  });
  return c
}
function cd(a, b) {
  for(var c = [], d = 0;d < a;d++) {
    c[d] = [];
    for(var f = 0;f < b;f++) {
      c[d][f] = 0
    }
  }
  return c
}
u = bd.prototype;
u.add = function(a) {
  ad(this.n, a.S()) || g(Error("Matrix summation is only supported on arrays of equal size"));
  return fd(this, function(b, c, d) {
    return b + a.F[c][d]
  })
};
u.Cb = function(a, b) {
  if(this.n.width != a.n.width || this.n.height != a.n.height) {
    return o
  }
  for(var c = b || 0, d = 0;d < this.n.height;d++) {
    for(var f = 0;f < this.n.width;f++) {
      if(!(Math.abs(this.F[d][f] - a.F[d][f]) <= (c || 1.0E-6))) {
        return o
      }
    }
  }
  return l
};
u.S = q("n");
function gd(a, b, c) {
  return!(0 <= b && b < a.n.height && 0 <= c && c < a.n.width) ? m : a.F[b][c]
}
function V(a, b, c, d) {
  0 <= b && b < a.n.height && 0 <= c && c < a.n.width || g(Error("Index out of bounds when setting matrix value, (" + b + "," + c + ") in size (" + a.n.height + "," + a.n.width + ")"));
  a.F[b][c] = d
}
u.multiply = function(a) {
  if(a instanceof bd) {
    return this.n.width != a.S().height && g(Error("Invalid matrices for multiplication. Second matrix should have the same number of rows as the first has columns.")), hd(this, a)
  }
  if(x(a)) {
    return id(this, a)
  }
  g(Error("A matrix can only be multiplied by a number or another matrix."))
};
u.ja = function(a) {
  ad(this.n, a.S()) || g(Error("Matrix subtraction is only supported on arrays of equal size."));
  return fd(this, function(b, c, d) {
    return b - a.F[c][d]
  })
};
u.hf = q("F");
u.toString = function() {
  var a = 0;
  ed(this, function(b) {
    b = ("" + b).length;
    b > a && (a = b)
  });
  var b = [];
  ib(this.F, function(c) {
    b.push("[ ");
    ib(c, function(c) {
      c = "" + c;
      b.push(Array(a - c.length + 1).join(" ") + c + " ")
    });
    b.push("]\n")
  });
  return b.join("")
};
function hd(a, b) {
  var c = new bd(a.n.height, b.S().width);
  ed(c, function(a, f, e) {
    for(var h = a = 0;h < this.n.width;h++) {
      a += gd(this, f, h) * gd(b, h, e)
    }
    V(c, f, e, a)
  }, a);
  return c
}
function id(a, b) {
  return fd(a, function(a) {
    return a * b
  })
}
;function Y(a, b) {
  bd.call(this, a, b);
  this.i = "matrix"
}
z(Y, bd);
function jd(a) {
  for(var b = [], c = 0;c < a;c++) {
    b[c] = [];
    for(var d = 0;d < a;d++) {
      b[c][d] = c == d ? 1 : 0
    }
  }
  return new Y(b)
}
Y.prototype.z = function() {
  var a = [], b = this.S();
  if(0 == b.height || 0 == b.width) {
    return[]
  }
  var c, d;
  for(d = 0;d < b.height;d++) {
    for(c = 0;c < b.width;c++) {
      a.push(gd(this, c, d))
    }
  }
  return a
};
Y.prototype.translate = function(a) {
  this.n.width != this.n.height && g(Error("Can not translate non-square matrix."));
  var b = this.S(), c = dd(b.height);
  a instanceof vc && 3 == b.height ? (V(c, 0, 2, a.x), V(c, 1, 2, a.y)) : a instanceof K && 4 == b.height ? (V(c, 0, 3, a.x), V(c, 1, 3, a.y), V(c, 2, 3, a.b)) : g(Error("Translation failed."));
  return new Y(this.multiply(c))
};
Y.prototype.rotate = function(a, b) {
  (4 != this.S().height || this.n.width != this.n.height) && g(Error("Only 4x4 matrices can be rotated."));
  (!v(b) || !(b instanceof K)) && g(Error("Invalid axis vector."));
  x(a) || g(Error("Invalid angle."));
  var c = b.normalize(), d = Math.cos(a), f = Math.sin(a), e = dd(4);
  V(e, 0, 0, d + c.x * c.x * (1 - d));
  V(e, 0, 1, c.x * c.y * (1 - d) - c.b * f);
  V(e, 0, 2, c.x * c.b * (1 - d) + c.y * f);
  V(e, 1, 0, c.y * c.x * (1 - d) + c.b * f);
  V(e, 1, 1, d + c.y * c.y * (1 - d));
  V(e, 1, 2, c.y * c.b * (1 - d) - c.x * f);
  V(e, 2, 0, c.b * c.x * (1 - d) - c.y * f);
  V(e, 2, 1, c.b * c.y * (1 - d) + c.x * f);
  V(e, 2, 2, d + c.b * c.b * (1 - d));
  return new Y(this.multiply(e))
};
Y.prototype.Pb = function(a) {
  var b = this.S(), c = Array(b.width), d;
  for(d = 0;d < c.length;d++) {
    c[d] = Array(1), c[d][0] = 1
  }
  a instanceof K && 3 <= b.width ? (c[0][0] = a.x, c[1][0] = a.y, c[2][0] = a.b) : g(Error("Multiplication by vector failed."));
  a = this.multiply(new bd(c));
  return new K(parseFloat(gd(a, 0, 0)), parseFloat(gd(a, 1, 0)), parseFloat(gd(a, 2, 0)))
};
y("X.matrix", Y);
y("X.matrix.createIdentityMatrix", jd);
y("X.matrix.prototype.flatten", Y.prototype.z);
y("X.matrix.prototype.translate", Y.prototype.translate);
y("X.matrix.prototype.rotate", Y.prototype.rotate);
y("X.matrix.prototype.multiplyByVector", Y.prototype.Pb);
function kd() {
  M.call(this);
  this.i = "transform";
  this.j = jd(4);
  this.xa = new Float32Array(this.j.z())
}
z(kd, M);
u = kd.prototype;
u.xg = function(a) {
  (!x(a) || -360 > a || 360 < a) && g(Error("Invalid angle."));
  this.j = this.j.rotate(a * Math.PI / 180, new K(0, 1, 0));
  this.xa = new Float32Array(this.j.z());
  this.f = l
};
u.yg = function(a) {
  (!x(a) || -360 > a || 360 < a) && g(Error("Invalid angle."));
  this.j = this.j.rotate(a * Math.PI / 180, new K(1, 0, 0));
  this.xa = new Float32Array(this.j.z());
  this.f = l
};
u.zg = function(a) {
  (!x(a) || -360 > a || 360 < a) && g(Error("Invalid angle."));
  this.j = this.j.rotate(a * Math.PI / 180, new K(0, 0, 1));
  this.xa = new Float32Array(this.j.z());
  this.f = l
};
u.Qg = function(a) {
  x(a) || g(Error("Invalid distance."));
  this.j = this.j.translate(new K(a, 0, 0));
  this.xa = new Float32Array(this.j.z());
  this.f = l
};
u.Rg = function(a) {
  x(a) || g(Error("Invalid distance."));
  this.j = this.j.translate(new K(0, a, 0));
  this.xa = new Float32Array(this.j.z());
  this.f = l
};
u.Sg = function(a) {
  x(a) || g(Error("Invalid distance."));
  this.j = this.j.translate(new K(0, 0, a));
  this.xa = new Float32Array(this.j.z());
  this.f = l
};
u.jg = q("j");
u.af = function(a) {
  var b = jd(4);
  v(a) && a instanceof Y && (b = a);
  this.j = b;
  this.xa = new Float32Array(this.j.z());
  this.f = l
};
function ld(a) {
  return a.xa
}
y("X.transform", kd);
y("X.transform.prototype.rotateX", kd.prototype.xg);
y("X.transform.prototype.rotateY", kd.prototype.yg);
y("X.transform.prototype.rotateZ", kd.prototype.zg);
y("X.transform.prototype.translateX", kd.prototype.Qg);
y("X.transform.prototype.translateY", kd.prototype.Rg);
y("X.transform.prototype.translateZ", kd.prototype.Sg);
y("X.transform.prototype.matrix", kd.prototype.jg);
y("X.transform.prototype.setMatrix", kd.prototype.af);
function md() {
  M.call(this);
  this.i = "file";
  this.Sd = m
}
z(md, M);
md.prototype.path = q("Sd");
md.prototype.Dd = function(a) {
  this.Sd = a;
  this.f = l
};
y("X.file", md);
y("X.file.prototype.path", md.prototype.path);
y("X.file.prototype.setPath", md.prototype.Dd);
function nd(a) {
  v(a) || g(Error("Missing image file for the texture."));
  M.call(this);
  this.i = "texture";
  this.la = a;
  this.zh = od;
  this.Md = m;
  this.f = l
}
z(nd, M);
var od = "SHARP", pd = {nh:od, oh:"SMOOTH"};
nd.prototype.file = q("la");
nd.prototype.md = q("Md");
y("X.texture", nd);
y("X.texture.filters", pd);
y("X.texture.prototype.file", nd.prototype.file);
function J(a) {
  M.call(this);
  this.i = "object";
  var b = window["X.Counter"];
  b.ag();
  this.Ld = b.value();
  this.Wc = qd;
  this.Yd = new kd;
  this.Wa = [1, 1, 1];
  this.l = new N;
  this.s = new N;
  this.v = new N;
  this.la = this.bb = this.t = m;
  this.Sc = 1;
  this.Va = m;
  this.ic = l;
  this.Kc = this.vb = 1;
  this.Gc = m;
  this.tb = o;
  if(v(a)) {
    this.Wc = a.type();
    this.Yd.af(new Y(a.transform().j));
    this.Wa = Array(a.color());
    this.l = new N(a.l);
    this.s = new N(a.s);
    this.v = new N(a.v);
    this.t = a.t;
    this.bb = a.bb;
    if(a.file()) {
      this.la = new md, this.la.Dd((new String(a.file().path())).toString())
    }
    this.Sc = a.opacity();
    this.Va = a.children();
    this.ic = a.ic;
    this.vb = a.vb;
    this.Kc = a.lineWidth();
    if(a.caption()) {
      this.Gc = (new String(a.caption())).toString()
    }
    this.tb = a.tb
  }
}
z(J, M);
var qd = "TRIANGLES", Oc = "LINES";
u = J.prototype;
u.id = q("Ld");
function rd(a) {
  for(var b = a.l.X(), c = [], d = 0, d = 0;d < b;d += 3) {
    var f = a.l.get(d), e = a.l.get(d + 1), h = a.l.get(d + 2), j = a.s.get(d), k = a.s.get(d + 1), p = a.s.get(d + 2), t = a.Wa;
    0 < a.v.length() && (t = a.v.get(d));
    var r = [];
    r.push(new R(f, j));
    r.push(new R(e, k));
    r.push(new R(h, p));
    c.push(new S(r, t))
  }
  return Yc(c)
}
function sd(a, b) {
  (!v(b) || !(b instanceof T)) && g(Error("Invalid CSG object."));
  a.l.clear();
  a.s.clear();
  a.v.clear();
  var c = new Vc, d = [];
  jb(b.h, function(a) {
    for(var b = [], h = a.Sb, b = jb(a.ka, function(a) {
      a.color = h;
      return c.add(a)
    }), a = a = 2;a < b.length;a++) {
      d.push([b[0], b[a - 1], b[a]])
    }
  }.bind(a));
  a.xf = jb(c.unique(), function(a) {
    return[a.J.x(), a.J.y(), a.J.b()]
  });
  a.wf = jb(c.unique(), function(a) {
    return[a.u.x(), a.u.y(), a.u.b()]
  });
  a.vf = jb(c.unique(), function(a) {
    return!a.color ? m : [a.color[0], a.color[1], a.color[2]]
  });
  jb(d, function(a) {
    var b = a[0], c = a[1], a = a[2], d = this.xf, k = this.wf, p = this.vf;
    this.l.add(d[b][0], d[b][1], d[b][2]);
    this.l.add(d[c][0], d[c][1], d[c][2]);
    this.l.add(d[a][0], d[a][1], d[a][2]);
    this.s.add(k[b][0], k[b][1], k[b][2]);
    this.s.add(k[c][0], k[c][1], k[c][2]);
    this.s.add(k[a][0], k[a][1], k[a][2]);
    p[b] && this.v.add(p[b][0], p[b][1], p[b][2]);
    p[c] && this.v.add(p[c][0], p[c][1], p[c][2]);
    p[a] && this.v.add(p[a][0], p[a][1], p[a][2])
  }.bind(a));
  a.mb(qd)
}
u.type = q("Wc");
u.mb = aa("Wc");
u.transform = q("Yd");
u.tg = q("l");
u.ng = q("s");
u.Nf = q("v");
u.color = q("Wa");
u.Ng = q("t");
u.Ig = function(a) {
  v(a) ? (w(a) && (a = new nd(a)), a instanceof nd || g(Error("Invalid texture.")), this.t = a) : this.t = m
};
u.$e = function(a, b, c) {
  (!x(a) && 0 > a && 1 < a || !x(b) && 0 > b && 1 < b || !x(c) && 0 > c && 1 < c) && g(Error("Invalid color."));
  if(this.Kb()) {
    for(var d = this.children(), f = d.length, e = 0, e = 0;e < f;e++) {
      d[e].$e(a, b, c)
    }
  }
  this.Wa[0] = a;
  this.Wa[1] = b;
  this.Wa[2] = c;
  this.f = l
};
u.Dc = function(a) {
  (!v(a) || !(a instanceof T) && !(a instanceof J)) && g(Error("Invalid object."));
  var b = a;
  a instanceof J && (b = rd(b));
  a = new J;
  sd(a, rd(this).Dc(b));
  return a
};
u.ja = function(a) {
  (!v(a) || !(a instanceof T) && !(a instanceof J)) && g(Error("Invalid object."));
  var b = a;
  a instanceof J && (b = rd(b));
  a = new J;
  sd(a, rd(this).ja(b));
  return a
};
u.sc = function(a) {
  (!v(a) || !(a instanceof T) && !(a instanceof J)) && g(Error("Invalid object."));
  var b = a;
  a instanceof J && (b = rd(b));
  a = new J;
  sd(a, rd(this).sc(b));
  return a
};
u.inverse = function(a) {
  (!v(a) || !(a instanceof T) && !(a instanceof J)) && g(Error("Invalid object."));
  var b = a;
  a instanceof J && (b = rd(b));
  a = new J;
  sd(a, rd(this).inverse(b));
  return a
};
u.opacity = q("Sc");
u.caption = q("Gc");
u.Bg = function(a) {
  this.Gc = a;
  this.f = l
};
u.ba = function(a) {
  if(this.Kb()) {
    for(var b = this.children(), c = b.length, d = 0, d = 0;d < c;d++) {
      b[d].ba(a)
    }
  }
  this.ic = a;
  this.f = l
};
u.bf = function(a) {
  (!x(a) || 1 < a || 0 > a) && g(Error("Invalid opacity."));
  if(this.Kb()) {
    for(var b = this.children(), c = b.length, d = 0, d = 0;d < c;d++) {
      b[d].bf(a)
    }
  }
  this.Sc = a;
  this.f = l
};
u.load = function(a) {
  if(v(a)) {
    if(!this.la) {
      this.la = new md
    }
    this.la.Dd(a)
  }else {
    this.la = m
  }
};
u.file = q("la");
function td(a) {
  var b = new Cc;
  b.La = a;
  a.dispatchEvent(b)
}
u.children = function() {
  if(!this.Va) {
    this.Va = []
  }
  return this.Va
};
u.Kb = function() {
  return!this.Va ? o : 0 < this.Va.length
};
u.Eg = function(a) {
  x(a) || g(Error("Invalid line width."));
  this.Kc = a;
  this.f = l
};
u.lineWidth = q("Kc");
u.Hg = function(a) {
  x(a) || g(Error("Invalid point size."));
  this.vb = a;
  this.f = l
};
u.sg = q("vb");
u.ig = q("tb");
u.Fg = function(a) {
  "boolean" != typeof a && g(Error("Invalid magicMode setting."));
  this.tb = a
};
function ud(a, b) {
  (!v(a) || !v(b) || !(a instanceof J) || !(b instanceof J)) && g(Error("Fatal: Two valid X.objects are required for comparison."));
  return 1 == a.opacity() ? -1 : 1 == b.opacity() ? 1 : v(a.nc) && v(b.nc) && a.nc > b.nc ? -1 : 1
}
y("X.object", J);
y("X.object.prototype.id", J.prototype.id);
y("X.object.prototype.type", J.prototype.type);
y("X.object.prototype.transform", J.prototype.transform);
y("X.object.prototype.points", J.prototype.tg);
y("X.object.prototype.normals", J.prototype.ng);
y("X.object.prototype.texture", J.prototype.Ng);
y("X.object.prototype.setTexture", J.prototype.Ig);
y("X.object.prototype.colors", J.prototype.Nf);
y("X.object.prototype.color", J.prototype.color);
y("X.object.prototype.setColor", J.prototype.$e);
y("X.object.prototype.opacity", J.prototype.opacity);
y("X.object.prototype.setOpacity", J.prototype.bf);
y("X.object.prototype.lineWidth", J.prototype.lineWidth);
y("X.object.prototype.setLineWidth", J.prototype.Eg);
y("X.object.prototype.pointSize", J.prototype.sg);
y("X.object.prototype.setPointSize", J.prototype.Hg);
y("X.object.prototype.load", J.prototype.load);
y("X.object.prototype.file", J.prototype.file);
y("X.object.prototype.setCaption", J.prototype.Bg);
y("X.object.prototype.setVisible", J.prototype.ba);
y("X.object.prototype.magicMode", J.prototype.ig);
y("X.object.prototype.setMagicMode", J.prototype.Fg);
y("X.object.prototype.intersect", J.prototype.sc);
y("X.object.prototype.inverse", J.prototype.inverse);
y("X.object.prototype.subtract", J.prototype.ja);
y("X.object.prototype.union", J.prototype.Dc);
y("X.object.OPACITY_COMPARATOR", ud);
y("X.object.prototype.children", J.prototype.children);
function vd() {
  Hc.call(this);
  this.i = "parserVTK"
}
z(vd, Hc);
vd.prototype.parse = function(a, b) {
  var c = a.l, d = a.s, f = b.split("\n"), e = f.length, h = new N, j = new N;
  this.C = [];
  this.V = qd;
  this.Rc = this.Fa = this.wa = this.Ga = o;
  for(var k = 0, p = e % 8;p--;) {
    this.p(h, j, f[k]), k++
  }
  for(p = 0.125 * e ^ 0;p--;) {
    this.p(h, j, f[k]), k++, this.p(h, j, f[k]), k++, this.p(h, j, f[k]), k++, this.p(h, j, f[k]), k++, this.p(h, j, f[k]), k++, this.p(h, j, f[k]), k++, this.p(h, j, f[k]), k++, this.p(h, j, f[k]), k++
  }
  if(this.V == qd) {
    f = j.length();
    k = e = this.C.length;
    do {
      var p = this.C[e - k], t = p.length, r;
      for(r = 0;r < t;r++) {
        var n = parseInt(p[r], 10), s = h.get(n);
        c.add(s[0], s[1], s[2]);
        n < f ? (n = j.get(n), d.add(n[0], n[1], n[2])) : (n = new K(s[0], s[1], s[2]), n.normalize(), d.add(n.x, n.y, n.b))
      }
      k--
    }while(0 < k)
  }else {
    if("TRIANGLE_STRIPS" == this.V) {
      f = j.length();
      k = e = this.C.length;
      do {
        p = this.C[e - k];
        t = p.length;
        for(r = 0;r < t;r++) {
          n = parseInt(p[r], 10), s = h.get(n), c.add(s[0], s[1], s[2]), (0 == r || r == t - 1) && c.add(s[0], s[1], s[2]), n < f ? (n = j.get(n), d.add(n[0], n[1], n[2]), (0 == r || r == t - 1) && d.add(n[0], n[1], n[2])) : (n = new K(s[0], s[1], s[2]), n.normalize(), d.add(n.x, n.y, n.b), (0 == r || r == t - 1) && d.add(n.x, n.y, n.b))
        }
        k--
      }while(0 < k)
    }else {
      if(this.V == Oc) {
        f = j.length();
        k = e = this.C.length;
        do {
          p = this.C[e - k];
          t = p.length;
          for(r = 0;r < t - 1;r++) {
            var F = parseInt(p[r], 10), n = parseInt(p[r + 1], 10), G = h.get(F), s = h.get(n);
            c.add(G[0], G[1], G[2]);
            c.add(s[0], s[1], s[2]);
            F < f - 1 ? (s = j.get(F), n = j.get(n), d.add(s[0], s[1], s[2]), d.add(n[0], n[1], n[2])) : (n = new K(G[0], G[1], G[2]), n.normalize(), d.add(n.x, n.y, n.b), n = new K(s[0], s[1], s[2]), n.normalize(), d.add(n.x, n.y, n.b))
          }
          k--
        }while(0 < k)
      }else {
        if("POINTS" == this.V) {
          f = j.length();
          k = e = this.C.length;
          do {
            p = this.C[e - k];
            t = p.length;
            for(r = 0;r < t;r++) {
              n = parseInt(p[r], 10), s = h.get(n), c.add(s[0], s[1], s[2]), n < f ? (n = j.get(n), d.add(n[0], n[1], n[2])) : (n = new K(s[0], s[1], s[2]), n.normalize(), d.add(n.x, n.y, n.b))
            }
            k--
          }while(0 < k)
        }else {
          if("POLYGONS" == this.V) {
            f = j.length();
            k = e = this.C.length;
            do {
              p = this.C[e - k];
              t = p.length;
              for(r = 0;r < t;r++) {
                n = parseInt(p[r], 10), s = h.get(n), c.add(s[0], s[1], s[2]), n < f ? (n = j.get(n), d.add(n[0], n[1], n[2])) : (n = new K(s[0], s[1], s[2]), n.normalize(), d.add(n.x, n.y, n.b))
              }
              k--
            }while(0 < k)
          }
        }
      }
    }
  }
  a.mb(this.V);
  c = new Cc;
  c.La = a;
  this.dispatchEvent(c)
};
vd.prototype.p = function(a, b, c) {
  var c = c.replace(/^\s+|\s+$/g, ""), c = c.split(" "), d = c.length, f = c[0];
  if("POINTS" == f) {
    this.Ga = l, this.Fa = this.wa = o
  }else {
    if("VERTICES" == f) {
      this.wa = l, this.Fa = this.Ga = o, "3" == c[1] ? this.V = qd : "1" == c[1] ? this.V = "POINTS" : g(Error("Unsupported VTK file.")), this.C = []
    }else {
      if("TRIANGLE_STRIPS" == f) {
        this.wa = l, this.Fa = this.Ga = o, this.V = "TRIANGLE_STRIPS", this.C = []
      }else {
        if("LINES" == f) {
          this.wa = l, this.Fa = this.Ga = o, this.V = Oc, this.C = []
        }else {
          if("POLYGONS" == f) {
            this.wa = l, this.Fa = this.Ga = o, this.V = "POLYGONS", this.C = []
          }else {
            if("POINT_DATA" == f) {
              this.Fa = l, this.wa = this.Ga = o
            }else {
              if(this.Ga) {
                if(1 == d || isNaN(parseFloat(f))) {
                  this.Ga = o
                }else {
                  if(3 <= d) {
                    var f = parseFloat(c[0]), e = parseFloat(c[1]), h = parseFloat(c[2]);
                    a.add(f, e, h)
                  }
                  6 <= d && (f = parseFloat(c[3]), e = parseFloat(c[4]), h = parseFloat(c[5]), a.add(f, e, h));
                  9 <= d && (d = parseFloat(c[6]), f = parseFloat(c[7]), c = parseFloat(c[8]), a.add(d, f, c))
                }
              }else {
                if(this.wa) {
                  1 == d || isNaN(parseFloat(f)) ? this.wa = o : this.C.push(c.slice(1))
                }else {
                  if(this.Fa) {
                    "NORMALS" == f ? this.Rc = l : 1 == d || isNaN(parseFloat(f)) ? this.Rc = this.Fa = o : this.Rc && (3 <= d && (f = parseFloat(c[0]), e = parseFloat(c[1]), h = parseFloat(c[2]), b.add(f, e, h)), 6 <= d && (f = parseFloat(c[3]), e = parseFloat(c[4]), h = parseFloat(c[5]), b.add(f, e, h)), 9 <= d && (d = parseFloat(c[6]), f = parseFloat(c[7]), c = parseFloat(c[8]), b.add(d, f, c)))
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
y("X.parserVTK", vd);
y("X.parserVTK.prototype.parse", vd.prototype.parse);
y("X.parserVTK.prototype.parseLine", vd.prototype.p);
function wd() {
  Hc.call(this);
  this.i = "parserFSM"
}
z(wd, Hc);
wd.prototype.parse = function(a, b) {
  var c = a.l, d = a.s, f = new N, e;
  e = 3;
  var h = 0, j;
  do {
    j = O(b, e++), h++
  }while(200 > h && 10 != j);
  e++;
  var k = Mc(b, e);
  e += 4;
  h = Mc(b, e);
  e += 4;
  j = [];
  for(var p = 0, p = 0;p < k;p++) {
    var t = Jc(b, e);
    e += 4;
    var r = Jc(b, e);
    e += 4;
    var n = Jc(b, e);
    e += 4;
    j[p] = 0;
    f.add(t, r, n)
  }
  k = [];
  p = [];
  for(t = 0;t < h;t++) {
    var s = Mc(b, e);
    e += 4;
    n = Mc(b, e);
    e += 4;
    r = Mc(b, e);
    e += 4;
    j[s] += 1;
    j[n] += 1;
    j[r] += 1;
    k.push([s, n, r]);
    p.push(new K(0, 0, 0))
  }
  for(t = 0;t < h;t++) {
    var s = k[t][0], n = k[t][1], r = k[t][2], F = f.get(s);
    e = f.get(n);
    var G = f.get(r), F = new K(F[0], F[1], F[2]), G = new K(G[0], G[1], G[2]);
    e = (new K(e[0], e[1], e[2])).c().ja(F);
    F = G.c().ja(F);
    e = Fc(e, F).normalize();
    p[s] = p[s].add(e);
    p[n] = p[n].add(e);
    p[r] = p[r].add(e)
  }
  for(t = 0;t < h;t++) {
    s = k[t][0], n = k[t][1], r = k[t][2], F = f.get(s), e = f.get(n), G = f.get(r), c.add(F[0], F[1], F[2]), c.add(e[0], e[1], e[2]), c.add(G[0], G[1], G[2]), s = p[s].scale(1 / j[s]).normalize(), n = p[n].scale(1 / j[n]).normalize(), r = p[r].scale(1 / j[r]).normalize(), d.add(s.x, s.y, s.b), d.add(n.x, n.y, n.b), d.add(r.x, r.y, r.b)
  }
  a.mb(qd);
  c = new Cc;
  c.La = a;
  this.dispatchEvent(c)
};
y("X.parserFSM", wd);
y("X.parserFSM.prototype.parse", wd.prototype.parse);
function xd() {
  M.call(this);
  this.i = "loader";
  this.sb = m;
  this.wb = 0
}
z(xd, M);
function yd(a) {
  if(!v(a.sb)) {
    a.sb = new D
  }
  return a.sb
}
function zd(a) {
  return!v(a.sb) ? l : !a.sb.cd(o)
}
xd.prototype.hg = function(a) {
  Ad(this, 1.7);
  setTimeout(function() {
    a.t.Ad();
    td(a);
    yd(this).set(a.id(), l)
  }.bind(this), 100)
};
function Ad(a, b) {
  a.wb += b / yd(a).fa() / 3;
  if(1 < a.wb) {
    a.wb = 1
  }
  var c = new Dc;
  c.Zd = a.wb;
  a.dispatchEvent(c)
}
xd.prototype.Be = function() {
  g(Error("Could not get the file."))
};
xd.prototype.gg = function(a, b) {
  Ad(this, 1);
  setTimeout(function() {
    var c = b.file().path().split(".").pop().toLowerCase();
    "stl" == c ? (c = new Pc, bc(c, pc, this.xc.bind(this)), c.parse(b, a.response)) : "vtk" == c ? (c = new vd, bc(c, pc, this.xc.bind(this)), c.parse(b, a.response)) : "trk" == c ? (c = new Nc, bc(c, pc, this.xc.bind(this)), c.parse(b, a.response)) : "fsm" == c && (c = new wd, bc(c, pc, this.xc.bind(this)), c.parse(b, a.response))
  }.bind(this), 100)
};
xd.prototype.xc = function(a) {
  Ad(this, 1);
  setTimeout(function() {
    var b = a.La;
    b.file().Ad();
    td(b);
    yd(this).set(b.id(), l)
  }.bind(this), 100)
};
y("X.loader", xd);
function Bd() {
  M.call(this);
  this.i = "shader";
  this.zb = "";
  this.zb = "precision mediump float;\n\nattribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nattribute vec3 vertexColor;\nattribute vec2 vertexTexturePos;\n\nuniform mat4 view;\nuniform mat4 perspective;\nuniform vec3 center;\nuniform mat4 objectTransform;\nuniform bool useObjectColor;\nuniform vec3 objectColor;\nuniform float pointSize;\n\nvarying vec4 fVertexPosition;\nvarying vec3 fragmentColor;\nvarying vec2 fragmentTexturePos;\nvarying vec3 fTransformedVertexNormal;\n\nvoid main(void) {\n  fTransformedVertexNormal = mat3(view[0].xyz,view[1].xyz,view[2].xyz) * mat3(objectTransform[0].xyz,objectTransform[1].xyz,objectTransform[2].xyz) * vertexNormal;\n  vec3 vertexPosition2 = vertexPosition - center;\n  fVertexPosition = view * objectTransform * vec4(vertexPosition2, 1.0);\n  fragmentTexturePos = vertexTexturePos;\n  if (useObjectColor) {\n    fragmentColor = objectColor;\n  } else {\n    fragmentColor = vertexColor;\n  }\n  gl_PointSize = pointSize;\n  gl_Position = perspective * fVertexPosition;\n}\n";
  this.rb = "";
  this.rb = "precision mediump float;\n\nuniform bool usePicking;\nuniform bool useTexture;\nuniform sampler2D textureSampler;\nuniform float objectOpacity;\n\nvarying vec4 fVertexPosition;\nvarying vec3 fragmentColor;\nvarying vec2 fragmentTexturePos;\nvarying vec3 fTransformedVertexNormal;\n\nvoid main(void) {\n if (usePicking) {\n   gl_FragColor = vec4(fragmentColor, 1.0);\n } else if (useTexture) {\n   gl_FragColor = texture2D(textureSampler,   vec2(fragmentTexturePos.s,fragmentTexturePos.t));\n } else {\n   vec3 nNormal = normalize(fTransformedVertexNormal);\n   vec3 light = vec3(0.0, 0.0, 1.0);\n   vec3 lightDirection = vec3(0,0,-10);\n   lightDirection = normalize(lightDirection);\n   vec3 eyeDirection = normalize(-fVertexPosition.xyz);\n   vec3 reflectionDirection = reflect(-lightDirection, nNormal);\n   float specular = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 10.0);\n   float diffuse = 0.8 * max(dot(nNormal, light), 0.0);\n   float ambient = 0.3;\n   gl_FragColor = vec4(fragmentColor * ambient +\n                       fragmentColor * diffuse +\n                       vec3(0.2, 0.2, 0.2) * specular,\n                       objectOpacity);\n }\n}\n"
}
z(Bd, M);
var Cd = {vh:"vertexPosition", uh:"vertexNormal", th:"vertexColor", wh:"vertexTexturePos"}, Dd = {xh:"view", hh:"perspective", Yg:"center", fh:"objectTransform", qh:"useObjectColor", dh:"objectColor", ih:"pointSize", eh:"objectOpacity", bh:"normal", rh:"usePicking", sh:"useTexture", ph:"textureSampler"};
Bd.prototype.Ug = q("zb");
Bd.prototype.Uf = q("rb");
Bd.prototype.nf = function() {
  var a = Object.keys(Dd);
  Object.keys(Cd).every(function(a) {
    a = eval("X.shaders.attributes." + a);
    return-1 != this.zb.search(a) || -1 != this.rb.search(a)
  }.bind(this)) || g(Error("Could not find all attributes in the shader sources."));
  a.every(function(a) {
    a = eval("X.shaders.uniforms." + a);
    return-1 != this.zb.search(a) || -1 != this.rb.search(a)
  }.bind(this)) || g(Error("Could not find all uniforms in the shader sources."));
  return l
};
y("X.shaders", Bd);
y("X.shaders.attributes", Cd);
y("X.shaders.uniforms", Dd);
y("X.shaders.prototype.vertex", Bd.prototype.Ug);
y("X.shaders.prototype.fragment", Bd.prototype.Uf);
y("X.shaders.prototype.validate", Bd.prototype.nf);
function Ed(a) {
  this.aa = a;
  this.k = []
}
z(Ed, Eb);
var Fd = [];
function Gd(a, b, c, d, f) {
  ga(c) || (Fd[0] = c, c = Fd);
  for(var e = 0;e < c.length;e++) {
    a.k.push(E(b, c[e], d || a, f || o, a.aa || a))
  }
}
Ed.prototype.yc = function() {
  ib(this.k, dc);
  this.k.length = 0
};
Ed.prototype.q = function() {
  Ed.B.q.call(this);
  this.yc()
};
Ed.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};
function Hd(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
Hd.prototype.c = function() {
  return new Hd(this.top, this.right, this.bottom, this.left)
};
Hd.prototype.toString = function() {
  return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
Hd.prototype.contains = function(a) {
  return!this || !a ? o : a instanceof Hd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
function Id(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
u = Id.prototype;
u.c = function() {
  return new Id(this.left, this.top, this.width, this.height)
};
u.toString = function() {
  return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
u.xe = function(a) {
  var b = Math.max(this.left, a.left), c = Math.min(this.left + this.width, a.left + a.width);
  if(b <= c) {
    var d = Math.max(this.top, a.top), a = Math.min(this.top + this.height, a.top + a.height);
    if(d <= a) {
      return this.left = b, this.top = d, this.width = c - b, this.height = a - d, l
    }
  }
  return o
};
u.contains = function(a) {
  return a instanceof Id ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
u.S = function() {
  return new $c(this.width, this.height)
};
var Jd;
function Kd(a, b) {
  var c;
  c = (c = a.className) && "function" == typeof c.split ? c.split(/\s+/) : [];
  var d = ob(arguments, 1), f;
  f = c;
  for(var e = 0, h = 0;h < d.length;h++) {
    0 <= hb(f, d[h]) || (f.push(d[h]), e++)
  }
  f = e == d.length;
  a.className = c.join(" ");
  return f
}
;var Ld = !A || ab(9);
!Na && !A || A && ab(9) || Na && C("1.9.1");
A && C("9");
function Md(a) {
  return a ? new Nd(Od(a)) : Jd || (Jd = new Nd)
}
function Pd(a) {
  return w(a) ? document.getElementById(a) : a
}
function Qd(a, b) {
  bb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Rd ? a.setAttribute(Rd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Rd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Sd(a, b, c) {
  return Td(document, arguments)
}
function Td(a, b) {
  var c = b[0], d = b[1];
  if(!Ld && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', sa(d.name), '"');
    if(d.type) {
      c.push(' type="', sa(d.type), '"');
      var f = {};
      fb(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    w(d) ? c.className = d : ga(d) ? Kd.apply(m, [c].concat(d)) : Qd(c, d)
  }
  2 < b.length && Ud(a, c, b);
  return c
}
function Ud(a, b, c) {
  function d(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(var f = 2;f < c.length;f++) {
    var e = c[f];
    ha(e) && !(ja(e) && 0 < e.nodeType) ? ib(Vd(e) ? nb(e) : e, d) : d(e)
  }
}
function Wd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Xd(a) {
  for(;a && 1 != a.nodeType;) {
    a = a.nextSibling
  }
  return a
}
function Yd(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function Od(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Vd(a) {
  if(a && "number" == typeof a.length) {
    if(ja(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ia(a)) {
      return"function" == typeof a.item
    }
  }
  return o
}
function Nd(a) {
  this.r = a || ba.document || document
}
u = Nd.prototype;
u.Gb = Md;
u.d = function(a) {
  return w(a) ? this.r.getElementById(a) : a
};
u.Oa = function(a, b, c) {
  return Td(this.r, arguments)
};
u.createElement = function(a) {
  return this.r.createElement(a)
};
u.createTextNode = function(a) {
  return this.r.createTextNode(a)
};
function Zd(a) {
  return"CSS1Compat" == a.r.compatMode
}
function $d(a) {
  var b = a.r, a = !B && "CSS1Compat" == b.compatMode ? b.documentElement : b.body, b = b.parentWindow || b.defaultView;
  return new U(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
u.appendChild = function(a, b) {
  a.appendChild(b)
};
u.contains = Yd;
A || Na && C("1.9.3");
function ae(a, b) {
  var c = Od(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, m)) ? c[b] || c.getPropertyValue(b) : ""
}
function be(a, b) {
  return a.currentStyle ? a.currentStyle[b] : m
}
function ce(a, b) {
  return ae(a, b) || be(a, b) || a.style && a.style[b]
}
function de(a) {
  a = a ? 9 == a.nodeType ? a : Od(a) : document;
  return A && !ab(9) && !Zd(Md(a)) ? a.body : a.documentElement
}
function fe(a) {
  var b = a.getBoundingClientRect();
  if(A) {
    a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop
  }
  return b
}
function ge(a) {
  if(A && !ab(8)) {
    return a.offsetParent
  }
  for(var b = Od(a), c = ce(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = ce(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return m
}
function he(a) {
  for(var b = new Hd(0, Infinity, Infinity, 0), c = Md(a), d = c.r.body, f = c.r.documentElement, e = !B && "CSS1Compat" == c.r.compatMode ? c.r.documentElement : c.r.body;a = ge(a);) {
    if((!A || 0 != a.clientWidth) && (!B || 0 != a.clientHeight || a != d) && a != d && a != f && "visible" != ce(a, "overflow")) {
      var h = ie(a), j;
      j = a;
      if(Na && !C("1.9")) {
        var k = parseFloat(ae(j, "borderLeftWidth"));
        if(je(j)) {
          var p = j.offsetWidth - j.clientWidth - k - parseFloat(ae(j, "borderRightWidth")), k = k + p
        }
        j = new U(k, parseFloat(ae(j, "borderTopWidth")))
      }else {
        j = new U(j.clientLeft, j.clientTop)
      }
      h.x += j.x;
      h.y += j.y;
      b.top = Math.max(b.top, h.y);
      b.right = Math.min(b.right, h.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
      b.left = Math.max(b.left, h.x)
    }
  }
  d = e.scrollLeft;
  e = e.scrollTop;
  b.left = Math.max(b.left, d);
  b.top = Math.max(b.top, e);
  c = c.r.parentWindow || c.r.defaultView || window;
  f = c.document;
  B && !C("500") && !Oa ? ("undefined" == typeof c.innerHeight && (c = window), f = c.innerHeight, a = c.document.documentElement.scrollHeight, c == c.top && a < f && (f -= 15), c = new $c(c.innerWidth, f)) : (c = "CSS1Compat" == f.compatMode ? f.documentElement : f.body, c = new $c(c.clientWidth, c.clientHeight));
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, e + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : m
}
function ie(a) {
  var b, c = Od(a), d = ce(a, "position"), f = Na && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), e = new U(0, 0), h = de(c);
  if(a == h) {
    return e
  }
  if(a.getBoundingClientRect) {
    b = fe(a), a = $d(Md(c)), e.x = b.left + a.x, e.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !f) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), e.x = b.screenX - a.screenX, e.y = b.screenY - a.screenY
    }else {
      b = a;
      do {
        e.x += b.offsetLeft;
        e.y += b.offsetTop;
        b != a && (e.x += b.clientLeft || 0, e.y += b.clientTop || 0);
        if(B && "fixed" == ce(b, "position")) {
          e.x += c.body.scrollLeft;
          e.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      }while(b && b != a);
      if(Ma || B && "absolute" == d) {
        e.y -= c.body.offsetTop
      }
      for(b = a;(b = ge(b)) && b != c.body && b != h;) {
        if(e.x -= b.scrollLeft, !Ma || "TR" != b.tagName) {
          e.y -= b.scrollTop
        }
      }
    }
  }
  return e
}
function ke(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function le(a) {
  if("none" != ce(a, "display")) {
    return me(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = me(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function me(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = B && !b && !c;
  return(!fa(b) || d) && a.getBoundingClientRect ? (a = fe(a), new $c(a.right - a.left, a.bottom - a.top)) : new $c(b, c)
}
function ne(a, b) {
  a.style.display = b ? "" : "none"
}
function je(a) {
  return"rtl" == ce(a, "direction")
}
function oe(a, b) {
  if(/^\d+px?$/.test(b)) {
    return parseInt(b, 10)
  }
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var f = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return f
}
var pe = {thin:2, medium:4, thick:6};
function qe(a, b) {
  if("none" == be(a, b + "Style")) {
    return 0
  }
  var c = be(a, b + "Width");
  return c in pe ? pe[c] : oe(a, c)
}
;function re() {
}
(function(a) {
  a.oe = function() {
    return a.bg || (a.bg = new a)
  }
})(re);
re.prototype.rd = 0;
re.oe();
function se(a) {
  this.Z = a || Md();
  this.wg = te
}
z(se, Gc);
se.prototype.$f = re.oe();
var te = m;
u = se.prototype;
u.ve = m;
u.Ra = o;
u.e = m;
u.wg = m;
u.lg = m;
u.hb = m;
u.eb = m;
u.Ab = m;
u.Xg = o;
u.d = q("e");
u.Cd = function(a) {
  this.hb && this.hb != a && g(Error("Method not supported"));
  se.B.Cd.call(this, a)
};
u.Gb = q("Z");
u.Oa = function() {
  this.e = this.Z.createElement("div")
};
u.kb = function(a) {
  this.lb(a)
};
u.lb = function(a, b) {
  this.Ra && g(Error("Component already rendered"));
  this.e || this.Oa();
  a ? a.insertBefore(this.e, b || m) : this.Z.r.body.appendChild(this.e);
  (!this.hb || this.hb.Ra) && this.oc()
};
u.oc = function() {
  this.Ra = l;
  ue(this, function(a) {
    !a.Ra && a.d() && a.oc()
  })
};
u.Eb = function() {
  ue(this, function(a) {
    a.Ra && a.Eb()
  });
  this.qc && this.qc.yc();
  this.Ra = o
};
u.q = function() {
  se.B.q.call(this);
  this.Ra && this.Eb();
  this.qc && (this.qc.Y(), delete this.qc);
  ue(this, function(a) {
    a.Y()
  });
  !this.Xg && this.e && Wd(this.e);
  this.hb = this.lg = this.e = this.Ab = this.eb = m
};
u.Kb = function() {
  return!!this.eb && 0 != this.eb.length
};
function ue(a, b) {
  a.eb && ib(a.eb, b, i)
}
u.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : a.ve || (a.ve = ":" + (a.$f.rd++).toString(36)), a = this.Ab && c ? (c in this.Ab ? this.Ab[c] : i) || m : m;
    if(c && a) {
      var d = this.Ab;
      c in d && delete d[c];
      lb(this.eb, a);
      b && (a.Eb(), a.e && Wd(a.e));
      c = a;
      c == m && g(Error("Unable to set parent component"));
      c.hb = m;
      se.B.Cd.call(c, m)
    }
  }
  a || g(Error("Child is not in parent component"));
  return a
};
var ve = ba.window;
function we(a, b, c) {
  ia(a) ? c && (a = pa(a, c)) : a && "function" == typeof a.handleEvent ? a = pa(a.handleEvent, a) : g(Error("Invalid listener argument"));
  return 2147483647 < b ? -1 : ve.setTimeout(a, b || 0)
}
;function xe(a, b) {
  this.aa = new Ed(this);
  this.Bd(a || m);
  b && this.mb(b)
}
z(xe, Gc);
u = xe.prototype;
u.e = m;
u.Jf = l;
u.ae = m;
u.L = o;
u.Lg = o;
u.od = -1;
u.ze = -1;
u.Zf = o;
u.Tf = l;
u.nb = "toggle_display";
u.mb = aa("nb");
u.d = q("e");
u.Bd = function(a) {
  this.L && g(Error("Can not change this state of the popup while showing."));
  this.e = a
};
u.ba = function(a) {
  this.Tb && this.Tb.stop();
  this.Lb && this.Lb.stop();
  if(a) {
    if(!this.L && this.ud()) {
      this.e || g(Error("Caller must call setElement before trying to show the popup"));
      this.ia();
      a = Od(this.e);
      this.Zf && Gd(this.aa, a, "keydown", this.og, l);
      if(this.Jf) {
        if(Gd(this.aa, a, "mousedown", this.Ie, l), A) {
          var b;
          try {
            b = a.activeElement
          }catch(c) {
          }
          for(;b && "IFRAME" == b.nodeName;) {
            try {
              var d = b.contentDocument || b.contentWindow.document
            }catch(f) {
              break
            }
            a = d;
            b = a.activeElement
          }
          Gd(this.aa, a, "mousedown", this.Ie, l);
          Gd(this.aa, a, "deactivate", this.He)
        }else {
          Gd(this.aa, a, "blur", this.He)
        }
      }
      "toggle_display" == this.nb ? (this.e.style.visibility = "visible", ne(this.e, l)) : "move_offscreen" == this.nb && this.ia();
      this.L = l;
      this.Tb ? (bc(this.Tb, "end", this.Se, o, this), this.Tb.play()) : this.Se()
    }
  }else {
    ye(this)
  }
};
u.ia = ca;
function ye(a, b) {
  if(!a.L || !a.dispatchEvent({type:"beforehide", target:b})) {
    return o
  }
  a.aa && a.aa.yc();
  a.Lb ? (bc(a.Lb, "end", qa(a.de, b), o, a), a.Lb.play()) : a.de(b);
  return l
}
u.de = function(a) {
  if("toggle_display" == this.nb) {
    this.Lg ? we(this.ue, 0, this) : this.ue()
  }else {
    if("move_offscreen" == this.nb) {
      this.e.style.left = "-200px", this.e.style.top = "-200px"
    }
  }
  this.L = o;
  this.vd(a)
};
u.ue = function() {
  this.e.style.visibility = "hidden";
  ne(this.e, o)
};
u.ud = function() {
  return this.dispatchEvent("beforeshow")
};
u.Se = function() {
  this.od = ra();
  this.ze = -1;
  this.dispatchEvent("show")
};
u.vd = function(a) {
  this.ze = ra();
  this.dispatchEvent({type:"hide", target:a})
};
u.Ie = function(a) {
  a = a.target;
  !Yd(this.e, a) && (!this.ae || Yd(this.ae, a)) && !(150 > ra() - this.od) && ye(this, a)
};
u.og = function(a) {
  27 == a.keyCode && ye(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
u.He = function(a) {
  if(this.Tf) {
    var b = Od(this.e);
    if(A || Ma) {
      if(a = b.activeElement, !a || Yd(this.e, a) || "BODY" == a.tagName) {
        return
      }
    }else {
      if(a.target != b) {
        return
      }
    }
    150 > ra() - this.od || ye(this)
  }
};
u.q = function() {
  xe.B.q.call(this);
  this.aa.Y();
  Gb(this.Tb);
  Gb(this.Lb);
  delete this.e;
  delete this.aa
};
function ze(a) {
  this.Z = a || Md();
  D.call(this)
}
z(ze, D);
u = ze.prototype;
u.Mf = "goog-buttonset";
u.he = m;
u.e = m;
u.Lf = m;
u.set = function(a, b, c, d) {
  D.prototype.set.call(this, a, b);
  if(c) {
    this.he = a
  }
  if(d) {
    this.Lf = a
  }
  return this
};
function Ae(a, b, c, d) {
  return a.set(b.key, b.caption, c, d)
}
u.kb = function() {
  if(this.e) {
    this.e.innerHTML = "";
    var a = Md(this.e);
    sb(this, function(b, c) {
      var d = a.Oa("button", {name:c}, b);
      if(c == this.he) {
        d.className = this.Mf + "-default"
      }
      this.e.appendChild(d)
    }, this)
  }
};
u.d = q("e");
u.Gb = q("Z");
var Be = {key:"ok", caption:"OK"}, Ce = {key:"cancel", caption:"Cancel"}, De = {key:"yes", caption:"Yes"}, Ee = {key:"no", caption:"No"}, Fe = {key:"save", caption:"Save"}, Ge = {key:"continue", caption:"Continue"};
"undefined" != typeof document && (Ae(new ze, Be, l, l), Ae(Ae(new ze, Be, l), Ce, o, l), Ae(Ae(new ze, De, l), Ee, o, l), Ae(Ae(Ae(new ze, De), Ee, l), Ce, o, l), Ae(Ae(Ae(new ze, Ge), Fe), Ce, l, l));
function He(a) {
  this.Na = a || Ie
}
function Ie(a, b) {
  return"" + a < "" + b ? -1 : "" + a > "" + b ? 1 : 0
}
u = He.prototype;
u.N = m;
u.Na = m;
u.qa = m;
u.pa = m;
u.g = 0;
u.add = function(a) {
  if(this.N == m) {
    return this.pa = this.qa = this.N = new Je(a), this.g = 1, l
  }
  var b = o;
  Ke(this, function(c) {
    var d = m;
    if(0 < this.Na(c.value, a)) {
      if(d = c.left, c.left == m) {
        var f = new Je(a, c);
        c.left = f;
        if(c == this.qa) {
          this.qa = f
        }
        b = l;
        Le(this, c)
      }
    }else {
      if(0 > this.Na(c.value, a) && (d = c.right, c.right == m)) {
        f = new Je(a, c);
        c.right = f;
        if(c == this.pa) {
          this.pa = f
        }
        b = l;
        Le(this, c)
      }
    }
    return d
  });
  b && (this.g += 1);
  return b
};
u.remove = function(a) {
  var b = m;
  Ke(this, function(c) {
    var d = m;
    if(0 < this.Na(c.value, a)) {
      d = c.left
    }else {
      if(0 > this.Na(c.value, a)) {
        d = c.right
      }else {
        if(b = c.value, c.left != m || c.right != m) {
          var f = m, e;
          if(c.left != m) {
            e = Me(this, c.left);
            if(e != c.left) {
              if(e.parent.right = e.left) {
                e.left.parent = e.parent
              }
              e.left = c.left;
              e.left.parent = e;
              f = e.parent
            }
            e.parent = c.parent;
            e.right = c.right;
            if(e.right) {
              e.right.parent = e
            }
            if(c == this.pa) {
              this.pa = e
            }
          }else {
            e = Ne(this, c.right);
            if(e != c.right) {
              if(e.parent.left = e.right) {
                e.right.parent = e.parent
              }
              e.right = c.right;
              e.right.parent = e;
              f = e.parent
            }
            e.parent = c.parent;
            e.left = c.left;
            if(e.left) {
              e.left.parent = e
            }
            if(c == this.qa) {
              this.qa = e
            }
          }
          Oe(c) ? c.parent.left = e : Pe(c) ? c.parent.right = e : this.N = e;
          Le(this, f ? f : e)
        }else {
          if(Oe(c)) {
            this.Hh = 1;
            c.parent.left = m;
            if(c == this.qa) {
              this.qa = c.parent
            }
            Le(this, c.parent)
          }else {
            if(Pe(c)) {
              c.parent.right = m;
              if(c == this.pa) {
                this.pa = c.parent
              }
              Le(this, c.parent)
            }else {
              this.clear()
            }
          }
        }
      }
    }
    return d
  });
  if(b) {
    this.g = this.N ? this.g - 1 : 0
  }
  return b
};
u.clear = function() {
  this.pa = this.qa = this.N = m;
  this.g = 0
};
u.contains = function(a) {
  var b = o;
  Ke(this, function(c) {
    var d = m;
    0 < this.Na(c.value, a) ? d = c.left : 0 > this.Na(c.value, a) ? d = c.right : b = l;
    return d
  });
  return b
};
u.fa = q("g");
u.Jb = function() {
  return Ne(this).value
};
u.Ib = function() {
  return Me(this).value
};
u.$ = function() {
  var a = [];
  Qe(this, function(b) {
    a.push(b)
  });
  return a
};
function Qe(a, b) {
  if(a.N) {
    var c, d = c = Ne(a);
    for(c = c.left ? c.left : c;d != m;) {
      if(d.left != m && d.left != c && d.right != c) {
        d = d.left
      }else {
        if(d.right != c && b(d.value)) {
          break
        }
        var f = d, d = d.right != m && d.right != c ? d.right : d.parent;
        c = f
      }
    }
  }
}
function Ke(a, b, c) {
  for(c = c ? c : a.N;c && c != m;) {
    c = b.call(a, c)
  }
}
function Le(a, b) {
  Ke(a, function(a) {
    var b = a.left ? a.left.height : 0, f = a.right ? a.right.height : 0;
    1 < b - f ? (a.left.right && (!a.left.left || a.left.left.height < a.left.right.height) && Re(this, a.left), Se(this, a)) : 1 < f - b && (a.right.left && (!a.right.right || a.right.right.height < a.right.left.height) && Se(this, a.right), Re(this, a));
    b = a.left ? a.left.height : 0;
    f = a.right ? a.right.height : 0;
    a.height = Math.max(b, f) + 1;
    return a.parent
  }, b)
}
function Re(a, b) {
  Oe(b) ? (b.parent.left = b.right, b.right.parent = b.parent) : Pe(b) ? (b.parent.right = b.right, b.right.parent = b.parent) : (a.N = b.right, a.N.parent = m);
  var c = b.right;
  b.right = b.right.left;
  if(b.right != m) {
    b.right.parent = b
  }
  c.left = b;
  b.parent = c
}
function Se(a, b) {
  Oe(b) ? (b.parent.left = b.left, b.left.parent = b.parent) : Pe(b) ? (b.parent.right = b.left, b.left.parent = b.parent) : (a.N = b.left, a.N.parent = m);
  var c = b.left;
  b.left = b.left.right;
  if(b.left != m) {
    b.left.parent = b
  }
  c.right = b;
  b.parent = c
}
function Ne(a, b) {
  if(!b) {
    return a.qa
  }
  var c = b;
  Ke(a, function(a) {
    var b = m;
    if(a.left) {
      b = c = a.left
    }
    return b
  }, b);
  return c
}
function Me(a, b) {
  if(!b) {
    return a.pa
  }
  var c = b;
  Ke(a, function(a) {
    var b = m;
    if(a.right) {
      b = c = a.right
    }
    return b
  }, b);
  return c
}
function Je(a, b) {
  this.value = a;
  this.parent = b ? b : m
}
Je.prototype.left = m;
Je.prototype.right = m;
Je.prototype.height = 1;
function Pe(a) {
  return!!a.parent && a.parent.right == a
}
function Oe(a) {
  return!!a.parent && a.parent.left == a
}
;function Te() {
}
z(Te, Gc);
u = Te.prototype;
u.Gd = 0;
u.Ob = 0;
u.qd = 100;
u.ne = 0;
u.Fd = 1;
u.dg = o;
u.mg = o;
u.Cc = function(a) {
  a = Ue(this, a);
  if(this.Gd != a) {
    this.Gd = a + this.ne > this.qd ? this.qd - this.ne : a < this.Ob ? this.Ob : a, !this.dg && !this.mg && this.dispatchEvent("change")
  }
};
u.pc = function() {
  return Ue(this, this.Gd)
};
u.Jb = function() {
  return Ue(this, this.Ob)
};
u.Ib = function() {
  return Ue(this, this.qd)
};
function Ue(a, b) {
  return a.Fd == m ? b : a.Ob + Math.round((b - a.Ob) / a.Fd) * a.Fd
}
;function Ve(a) {
  se.call(this, a);
  this.ib = new Te;
  E(this.ib, "change", this.Xf, o, this)
}
z(Ve, se);
var We = {vertical:"progress-bar-vertical", horizontal:"progress-bar-horizontal"};
u = Ve.prototype;
u.Oa = function() {
  this.ca = this.Gb().Oa("div", "progress-bar-thumb");
  var a = We[this.Ue];
  this.e = this.Gb().Oa("div", a, this.ca);
  Xe(this);
  this.d().setAttribute("aria-valuemin", this.Jb());
  this.d().setAttribute("aria-valuemax", this.Ib())
};
u.oc = function() {
  Ve.B.oc.call(this);
  A && 7 > Sa && E(this.d(), "resize", this.Ec, o, this);
  this.Ec();
  var a = this.d();
  a.setAttribute("role", "progressbar");
  a.Gh = "progressbar";
  this.d().setAttribute("aria-live", "polite")
};
u.Eb = function() {
  Ve.B.Eb.call(this);
  Ye(this)
};
function Ye(a) {
  A && 7 > Sa && cc(a.d(), "resize", a.Ec, o, a)
}
u.pc = function() {
  return this.ib.pc()
};
u.Cc = function(a) {
  this.ib.Cc(a);
  this.d() && Xe(this)
};
function Xe(a) {
  var b = a.pc();
  a.d().setAttribute("aria-valuenow", b)
}
u.Jb = function() {
  return this.ib.Jb()
};
u.Ib = function() {
  return this.ib.Ib()
};
u.Ue = "horizontal";
u.Xf = function() {
  this.Ec();
  this.dispatchEvent("change")
};
u.Ec = function() {
  if(this.ca) {
    var a = this.Jb(), b = this.Ib(), a = (this.pc() - a) / (b - a), b = Math.round(100 * a);
    "vertical" == this.Ue ? A && 7 > Sa ? (this.ca.style.top = 0, this.ca.style.height = "100%", b = this.ca.offsetHeight, a = Math.round(a * b), this.ca.style.top = b - a + "px", this.ca.style.height = a + "px") : (this.ca.style.top = 100 - b + "%", this.ca.style.height = b + "%") : this.ca.style.width = b + "%"
  }
};
u.q = function() {
  Ye(this);
  Ve.B.q.call(this);
  this.ca = m;
  this.ib.Y()
};
function Ze(a, b) {
  v(a) || g(Error("No valid parent element."));
  v(b) || g(Error("Invalid initial value."));
  Ve.call(this);
  this.i = "progressbar";
  this.Ea = a;
  this.Yb = this.ma = m;
  this.Ia = [];
  this.Ia = [".progress-bar-horizontal {\n  position: relative;\n  border: 1px solid #949dad;\n  background: white;\n  padding: 1px;\n  overflow: hidden;\n  margin: 2px;\n  width: 100px;\n  height: 5px;\n}", ".progress-bar-thumb {\n  position: relative;\n  background: #F62217;\n  overflow: hidden;\n  width: 0%;\n  height: 100%;\n}", ".progress-bar-thumb-done {\n  background: #57E964;\n}"];
  this.Cc(b);
  this.nd()
}
z(Ze, Ve);
Ze.prototype.nd = function() {
  this.Ea.style.position = "relative";
  var a = document.getElementsByTagName("head")[0], b = Sd("style");
  b.type = "text/css";
  b.media = "screen";
  var c = document.createTextNode(this.Ia[0]), d = document.createTextNode(this.Ia[1]), f = document.createTextNode(this.Ia[2]);
  a.appendChild(b);
  b.appendChild(c);
  b.appendChild(d);
  b.appendChild(f);
  this.ma = b;
  this.kb(this.Ea);
  a = this.d();
  a.style.position = "absolute";
  a.style.top = (this.Ea.clientHeight - 5) / 2;
  a.style.left = (this.Ea.clientWidth - 100) / 2
};
Ze.prototype.le = function() {
  var a = this.d().style.top, b = this.d().style.left;
  Wd(this.d());
  var c = new Ze(this.Ea, 100), d = c.d();
  d.style.position = "absolute";
  d.style.top = a;
  d.style.left = b;
  (d.firstElementChild != i ? d.firstElementChild : Xd(d.firstChild)).classList.add("progress-bar-thumb-done");
  this.Yb = c
};
Ze.prototype.Mb = function() {
  this.ma && Wd(this.ma);
  this.d() && Wd(this.d());
  this.Yb && Wd(this.Yb.d());
  this.Yb = this.ma = m
};
y("X.progressbar", Ze);
y("X.progressbar.prototype.done", Ze.prototype.le);
y("X.progressbar.prototype.kill", Ze.prototype.Mb);
function $e(a, b, c) {
  v(a) || g(Error("Invalid GL Buffer."));
  v(b) || g(Error("Invalid number of items."));
  v(c) || g(Error("Invalid item size."));
  M.call(this);
  this.i = "buffer";
  this.K = a;
  this.Ic = b;
  this.Ka = c
}
z($e, M);
$e.prototype.Wf = q("K");
$e.prototype.eg = q("Ic");
$e.prototype.fg = q("Ka");
y("X.buffer", $e);
y("X.buffer.prototype.glBuffer", $e.prototype.Wf);
y("X.buffer.prototype.itemCount", $e.prototype.eg);
y("X.buffer.prototype.itemSize", $e.prototype.fg);
function af(a, b, c, d, f, e, h, j) {
  var k, p = c.offsetParent;
  if(p) {
    var t = "HTML" == p.tagName || "BODY" == p.tagName;
    if(!t || "static" != ce(p, "position")) {
      k = ie(p), t || (k = Zc(k, new U(p.scrollLeft, p.scrollTop)))
    }
  }
  p = ie(a);
  t = le(a);
  p = new Id(p.x, p.y, t.width, t.height);
  (t = he(a)) && p.xe(new Id(t.left, t.top, t.right - t.left, t.bottom - t.top));
  var t = Md(a), r = Md(c);
  if(t.r != r.r) {
    var n = t.r.body, r = r.r.parentWindow || r.r.defaultView, s = new U(0, 0), F = Od(n) ? Od(n).parentWindow || Od(n).defaultView : window, G = n;
    do {
      var P;
      if(F == r) {
        P = ie(G)
      }else {
        var I = G;
        P = new U;
        if(1 == I.nodeType) {
          if(I.getBoundingClientRect) {
            I = fe(I), P.x = I.left, P.y = I.top
          }else {
            var da = $d(Md(I)), I = ie(I);
            P.x = I.x - da.x;
            P.y = I.y - da.y
          }
        }else {
          var da = ia(I.Vf), W = I;
          I.targetTouches ? W = I.targetTouches[0] : da && I.ea.targetTouches && (W = I.ea.targetTouches[0]);
          P.x = W.clientX;
          P.y = W.clientY
        }
      }
      s.x += P.x;
      s.y += P.y
    }while(F && F != r && (G = F.frameElement) && (F = F.parent));
    n = Zc(s, ie(n));
    A && !Zd(t) && (n = Zc(n, $d(t)));
    p.left += n.x;
    p.top += n.y
  }
  a = (b & 4 && je(a) ? b ^ 2 : b) & -5;
  b = new U(a & 2 ? p.left + p.width : p.left, a & 1 ? p.top + p.height : p.top);
  k && (b = Zc(b, k));
  f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
  var L;
  if(h && (L = he(c)) && k) {
    L.top -= k.y, L.right -= k.x, L.bottom -= k.y, L.left -= k.x
  }
  return bf(b, c, d, e, L, h, j)
}
function bf(a, b, c, d, f, e, h) {
  var a = a.c(), j = 0, k = (c & 4 && je(b) ? c ^ 2 : c) & -5, c = le(b), h = h ? h.c() : c.c();
  if(d || 0 != k) {
    k & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top)
  }
  if(e) {
    if(f) {
      j = a;
      d = 0;
      if(65 == (e & 65) && (j.x < f.left || j.x >= f.right)) {
        e &= -2
      }
      if(132 == (e & 132) && (j.y < f.top || j.y >= f.bottom)) {
        e &= -5
      }
      if(j.x < f.left && e & 1) {
        j.x = f.left, d |= 1
      }
      if(j.x < f.left && j.x + h.width > f.right && e & 16) {
        h.width = Math.max(h.width - (j.x + h.width - f.right), 0), d |= 4
      }
      if(j.x + h.width > f.right && e & 1) {
        j.x = Math.max(f.right - h.width, f.left), d |= 1
      }
      e & 2 && (d |= (j.x < f.left ? 16 : 0) | (j.x + h.width > f.right ? 32 : 0));
      if(j.y < f.top && e & 4) {
        j.y = f.top, d |= 2
      }
      if(j.y >= f.top && j.y + h.height > f.bottom && e & 32) {
        h.height = Math.max(h.height - (j.y + h.height - f.bottom), 0), d |= 8
      }
      if(j.y + h.height > f.bottom && e & 4) {
        j.y = Math.max(f.bottom - h.height, f.top), d |= 2
      }
      e & 8 && (d |= (j.y < f.top ? 64 : 0) | (j.y + h.height > f.bottom ? 128 : 0));
      j = d
    }else {
      j = 256
    }
    if(j & 496) {
      return j
    }
  }
  e = a;
  f = Na && (Ga || Ra) && C("1.9");
  e instanceof U ? (a = e.x, e = e.y) : (a = e, e = i);
  b.style.left = ke(a, f);
  b.style.top = ke(e, f);
  if(!ad(c, h)) {
    a = Zd(Md(Od(b))), A && (!a || !C("8")) ? (c = b.style, a ? (A ? (a = oe(b, be(b, "paddingLeft")), f = oe(b, be(b, "paddingRight")), e = oe(b, be(b, "paddingTop")), d = oe(b, be(b, "paddingBottom")), a = new Hd(e, f, d, a)) : (a = ae(b, "paddingLeft"), f = ae(b, "paddingRight"), e = ae(b, "paddingTop"), d = ae(b, "paddingBottom"), a = new Hd(parseFloat(e), parseFloat(f), parseFloat(d), parseFloat(a))), A ? (f = qe(b, "borderLeft"), e = qe(b, "borderRight"), d = qe(b, "borderTop"), b = qe(b, "borderBottom"), 
    b = new Hd(d, e, b, f)) : (f = ae(b, "borderLeftWidth"), e = ae(b, "borderRightWidth"), d = ae(b, "borderTopWidth"), b = ae(b, "borderBottomWidth"), b = new Hd(parseFloat(d), parseFloat(e), parseFloat(b), parseFloat(f))), c.pixelWidth = h.width - b.left - a.left - a.right - b.right, c.pixelHeight = h.height - b.top - a.top - a.bottom - b.bottom) : (c.pixelWidth = h.width, c.pixelHeight = h.height)) : (b = b.style, Na ? b.MozBoxSizing = "border-box" : B ? b.WebkitBoxSizing = "border-box" : b.boxSizing = 
    "border-box", b.width = Math.max(h.width, 0) + "px", b.height = Math.max(h.height, 0) + "px")
  }
  return j
}
;function cf() {
}
cf.prototype.ia = function() {
};
function df(a, b) {
  this.element = a;
  this.ee = b
}
z(df, cf);
df.prototype.ia = function(a, b, c) {
  af(this.element, this.ee, a, b, i, c)
};
function ef(a, b) {
  this.dd = a instanceof U ? a : new U(a, b)
}
z(ef, cf);
ef.prototype.ia = function(a, b, c, d) {
  af(de(a), 0, a, b, this.dd, c, m, d)
};
function ff(a, b) {
  this.ug = 4;
  this.zd = b || i;
  xe.call(this, a)
}
z(ff, xe);
ff.prototype.Bc = function(a) {
  this.zd = a || i;
  this.L && this.ia()
};
ff.prototype.ia = function() {
  if(this.zd) {
    var a = !this.L && "move_offscreen" != this.nb, b = this.d();
    if(a) {
      b.style.visibility = "hidden", ne(b, l)
    }
    this.zd.ia(b, this.ug, this.Eh);
    a && ne(b, o)
  }
};
function gf(a, b, c) {
  this.Z = c || (a ? Md(Pd(a)) : Md());
  ff.call(this, this.Z.Oa("div", {style:"position:absolute;display:none;"}));
  this.ed = new U(1, 1);
  this.Qa = new Bb;
  a && hf(this, a);
  if(b != m) {
    if(a = this.d(), "textContent" in a) {
      a.textContent = b
    }else {
      if(a.firstChild && 3 == a.firstChild.nodeType) {
        for(;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild)
        }
        a.firstChild.data = b
      }else {
        for(;c = a.firstChild;) {
          a.removeChild(c)
        }
        a.appendChild(Od(a).createTextNode(b))
      }
    }
  }
}
z(gf, ff);
var jf = [];
u = gf.prototype;
u.H = m;
u.className = "goog-tooltip";
u.cf = 500;
u.Yf = 0;
u.Gb = q("Z");
function hf(a, b) {
  b = Pd(b);
  a.Qa.add(b);
  E(b, "mouseover", a.re, o, a);
  E(b, "mouseout", a.rc, o, a);
  E(b, "mousemove", a.qe, o, a);
  E(b, "focus", a.pe, o, a);
  E(b, "blur", a.rc, o, a)
}
u.detach = function(a) {
  if(a) {
    a = Pd(a), kf(this, a), this.Qa.remove(a)
  }else {
    for(var b = this.Qa.$(), c = 0;a = b[c];c++) {
      kf(this, a)
    }
    this.Qa.clear()
  }
};
function kf(a, b) {
  cc(b, "mouseover", a.re, o, a);
  cc(b, "mouseout", a.rc, o, a);
  cc(b, "mousemove", a.qe, o, a);
  cc(b, "focus", a.pe, o, a);
  cc(b, "blur", a.rc, o, a)
}
u.Bd = function(a) {
  var b = this.d();
  b && Wd(b);
  gf.B.Bd.call(this, a);
  if(a) {
    b = this.Z.r.body, b.insertBefore(a, b.lastChild)
  }
};
u.ud = function() {
  if(!xe.prototype.ud.call(this)) {
    return o
  }
  if(this.anchor) {
    for(var a, b = 0;a = jf[b];b++) {
      Yd(a.d(), this.anchor) || a.ba(o)
    }
  }
  0 <= hb(jf, this) || jf.push(this);
  a = this.d();
  a.className = this.className;
  lf(this);
  E(a, "mouseover", this.te, o, this);
  E(a, "mouseout", this.se, o, this);
  mf(this);
  return l
};
u.vd = function() {
  lb(jf, this);
  for(var a = this.d(), b, c = 0;b = jf[c];c++) {
    b.anchor && Yd(a, b.anchor) && b.ba(o)
  }
  this.We && nf(this.We);
  cc(a, "mouseover", this.te, o, this);
  cc(a, "mouseout", this.se, o, this);
  this.anchor = i;
  if(0 == (this.ra ? this.L ? 4 : 1 : this.fb ? 3 : this.L ? 2 : 0)) {
    this.Ac = o
  }
  xe.prototype.vd.call(this)
};
u.Fe = function(a, b) {
  if(this.anchor == a && this.Qa.contains(this.anchor)) {
    if(this.Ac || !this.Fh) {
      if(this.ba(o), !this.L) {
        this.anchor = a, this.Bc(b || of(this, 0)), this.ba(l)
      }
    }else {
      this.anchor = i
    }
  }
  this.ra = i
};
u.kg = function(a) {
  this.fb = i;
  a == this.anchor && (this.H == m || this.H != this.d() && !this.Qa.contains(this.H)) && (!this.be || !this.be.H) && this.ba(o)
};
function pf(a, b) {
  var c = $d(a.Z);
  a.ed.x = b.clientX + c.x;
  a.ed.y = b.clientY + c.y
}
u.re = function(a) {
  var b = qf(this, a.target);
  this.H = b;
  lf(this);
  if(b != this.anchor) {
    this.anchor = b;
    if(!this.ra) {
      this.ra = we(pa(this.Fe, this, b, i), this.cf)
    }
    rf(this);
    pf(this, a)
  }
};
function qf(a, b) {
  try {
    for(;b && !a.Qa.contains(b);) {
      b = b.parentNode
    }
    return b
  }catch(c) {
    return m
  }
}
u.qe = function(a) {
  pf(this, a);
  this.Ac = l
};
u.pe = function(a) {
  this.H = a = qf(this, a.target);
  this.Ac = l;
  if(this.anchor != a) {
    this.anchor = a;
    var b = of(this, 1);
    lf(this);
    if(!this.ra) {
      this.ra = we(pa(this.Fe, this, a, b), this.cf)
    }
    rf(this)
  }
};
function of(a, b) {
  if(0 == b) {
    var c = a.ed.c();
    return new sf(c)
  }
  return new tf(a.H)
}
function rf(a) {
  if(a.anchor) {
    for(var b, c = 0;b = jf[c];c++) {
      if(Yd(b.d(), a.anchor)) {
        b.be = a, a.We = b
      }
    }
  }
}
u.rc = function(a) {
  var b = qf(this, a.target), c = qf(this, a.relatedTarget);
  if(b != c) {
    if(b == this.H) {
      this.H = m
    }
    mf(this);
    this.Ac = o;
    this.L && (!a.relatedTarget || !Yd(this.d(), a.relatedTarget)) ? nf(this) : this.anchor = i
  }
};
u.te = function() {
  var a = this.d();
  if(this.H != a) {
    lf(this), this.H = a
  }
};
u.se = function(a) {
  var b = this.d();
  if(this.H == b && (!a.relatedTarget || !Yd(b, a.relatedTarget))) {
    this.H = m, nf(this)
  }
};
function mf(a) {
  if(a.ra) {
    ve.clearTimeout(a.ra), a.ra = i
  }
}
function nf(a) {
  if(2 == (a.ra ? a.L ? 4 : 1 : a.fb ? 3 : a.L ? 2 : 0)) {
    a.fb = we(pa(a.kg, a, a.anchor), a.Yf)
  }
}
function lf(a) {
  if(a.fb) {
    ve.clearTimeout(a.fb), a.fb = i
  }
}
u.q = function() {
  this.ba(o);
  mf(this);
  this.detach();
  this.d() && Wd(this.d());
  this.H = m;
  delete this.Z;
  gf.B.q.call(this)
};
function sf(a, b) {
  ef.call(this, a, b)
}
z(sf, ef);
sf.prototype.ia = function(a, b, c) {
  b = de(a);
  b = he(b);
  c = c ? new Hd(c.top + 10, c.right, c.bottom, c.left + 10) : new Hd(10, 0, 0, 10);
  bf(this.dd, a, 4, c, b, 9) & 496 && bf(this.dd, a, 4, c, b, 5)
};
function tf(a) {
  df.call(this, a, 3)
}
z(tf, df);
tf.prototype.ia = function(a, b, c) {
  var d = new U(10, 0);
  af(this.element, this.ee, a, b, d, c, 9) & 496 && af(this.element, 2, a, 1, d, c, 5)
};
function uf(a) {
  this.e = a;
  this.Ae = E(this.e, Na ? "DOMMouseScroll" : "mousewheel", this)
}
z(uf, Gc);
uf.prototype.handleEvent = function(a) {
  var b = 0, c = 0, d = 0, a = a.ea;
  if("mousewheel" == a.type) {
    c = 1;
    if(A || B && (Ha || C("532.0"))) {
      c = 40
    }
    d = B && Ga && 0 != -a.wheelDelta % c ? -a.wheelDelta : -a.wheelDelta / c;
    fa(a.wheelDeltaX) ? (b = B && Ga && 0 != -a.wheelDeltaX % c ? -a.wheelDeltaX : -a.wheelDeltaX / c, c = B && Ga && 0 != -a.wheelDeltaY % c ? -a.wheelDeltaY : -a.wheelDeltaY / c) : c = d
  }else {
    d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), fa(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d
  }
  x(this.De) && (b = Math.min(Math.max(b, -this.De), this.De));
  x(this.Ee) && (c = Math.min(Math.max(c, -this.Ee), this.Ee));
  b = new vf(d, a, b, c);
  try {
    this.dispatchEvent(b)
  }finally {
    b.Y()
  }
};
uf.prototype.q = function() {
  uf.B.q.call(this);
  dc(this.Ae);
  delete this.Ae
};
function vf(a, b, c, d) {
  b && this.ga(b, i);
  this.type = "mousewheel";
  this.detail = a;
  this.Dh = c;
  this.fd = d
}
z(vf, Vb);
A || B && C("525");
function wf(a) {
  (!v(a) || !(a instanceof Element)) && g(Error("Could not add interactor to the given element."));
  M.call(this);
  this.i = "interactor";
  this.Za = a;
  this.Pc = this.Pd = this.Od = this.Qd = this.Nd = this.Rd = m;
  this.Oc = l;
  this.xb = this.ub = this.ab = o;
  this.Jc = new vc(0, 0)
}
z(wf, M);
u = wf.prototype;
u.G = {tf:l, sf:l, Fc:l, rf:l, qf:o};
u.ga = function() {
  this.G.tf ? (this.Pc = new uf(this.Za), this.Rd = E(this.Pc, "mousewheel", this.Oe.bind(this))) : (dc(this.Rd), this.Pc = m);
  this.G.sf ? (this.Nd = E(this.Za, "mousedown", this.Ke.bind(this)), this.Qd = E(this.Za, "mouseup", this.Ne.bind(this))) : (dc(this.Nd), dc(this.Qd));
  this.Za.oncontextmenu = this.G.qf ? m : function() {
    return o
  };
  window.onkeydown = this.G.Fc ? this.wd.bind(this) : m;
  dc(this.Od);
  dc(this.Pd);
  this.Od = E(this.Za, "mousemove", this.Le.bind(this));
  this.Pd = E(this.Za, "mouseout", this.Me.bind(this))
};
u.Ke = function(a) {
  if(0 == a.button) {
    this.ab = l
  }else {
    if(1 == a.button) {
      this.ub = l
    }else {
      if(2 == a.button) {
        this.xb = l
      }
    }
  }
  xf(this);
  a.preventDefault()
};
u.Ne = function(a) {
  if(0 == a.button) {
    this.ab = o
  }else {
    if(1 == a.button) {
      this.ub = o
    }else {
      if(2 == a.button) {
        this.xb = o
      }
    }
  }
  xf(this);
  a.preventDefault()
};
u.Me = function(a) {
  this.Oc = o;
  if(this.G.Fc) {
    window.onkeydown = m
  }
  this.xb = this.ub = this.ab = o;
  xf(this);
  this.Jc = new vc(0, 0);
  a.preventDefault()
};
u.Le = function(a) {
  this.dispatchEvent("mouseup");
  this.Oc = l;
  if(this.G.Fc && window.onkeydown == m) {
    window.onkeydown = this.wd.bind(this)
  }
  a.preventDefault();
  var b = a.shiftKey, c = new vc(a.offsetX, a.offsetY), a = this.Jc.ja(c);
  this.Jc = c.c();
  if(this.G.rf) {
    (0 < Math.abs(a.x) || 0 < Math.abs(a.y) || this.ub || this.ab || this.xb) && xf(this), this.Hc = setTimeout(function() {
      xf(this);
      var a = new zc;
      a.jc = c.x;
      a.kc = c.y;
      this.dispatchEvent(a);
      this.Hc = m
    }.bind(this), 700)
  }
  if(2 > Math.abs(a.x)) {
    a.x = 0
  }
  if(2 > Math.abs(a.y)) {
    a.y = 0
  }
  if(0 != a.uc()) {
    if(this.ab && !b) {
      b = new wc, b.Ya = a, b.yf = 0, this.dispatchEvent(b)
    }else {
      if(this.ub || this.ab && b) {
        b = new uc;
        if(5 < a.x) {
          a.x = 5
        }else {
          if(-5 > a.x) {
            a.x = -5
          }
        }
        if(5 < a.y) {
          a.y = 5
        }else {
          if(-5 > a.y) {
            a.y = -5
          }
        }
        b.Ya = a;
        this.dispatchEvent(b)
      }else {
        if(this.xb) {
          b = new xc, b.Ja = 0 < a.y, b.va = o, this.dispatchEvent(b)
        }
      }
    }
  }
};
function xf(a) {
  a.Hc && clearTimeout(a.Hc);
  a.dispatchEvent(new Ac)
}
u.Oe = function(a) {
  xf(this);
  a.preventDefault();
  var b = new xc;
  if(!v(a.fd)) {
    a.fd = 0
  }
  b.Ja = 0 > a.fd;
  b.va = l;
  this.dispatchEvent(b)
};
u.wd = function(a) {
  if(this.Oc) {
    xf(this);
    var b = a.altKey, c = a.ctrlKey, d = a.metaKey, f = a.shiftKey, e = a.keyCode;
    if(82 == e && !b && !c && !d && !f) {
      a.preventDefault(), a = new Bc, this.dispatchEvent(a)
    }else {
      if(37 <= e && 40 >= e && (a.preventDefault(), a = f ? new uc : b ? new xc : new wc)) {
        c = new vc(0, 0);
        if(37 == e) {
          if(c.x = 5, b) {
            a.Ja = l, a.va = o
          }
        }else {
          if(39 == e) {
            if(c.x = -5, b) {
              a.Ja = o, a.va = o
            }
          }else {
            if(38 == e) {
              if(c.y = 5, b) {
                a.Ja = l, a.va = l
              }
            }else {
              if(40 == e && (c.y = -5, b)) {
                a.Ja = o, a.va = l
              }
            }
          }
        }
        a.Ya = c;
        this.dispatchEvent(a)
      }
    }
  }
};
y("X.interactor", wf);
y("X.interactor.prototype.config", wf.prototype.G);
y("X.interactor.prototype.init", wf.prototype.ga);
y("X.interactor.prototype.onMouseDown", wf.prototype.Ke);
y("X.interactor.prototype.onMouseUp", wf.prototype.Ne);
y("X.interactor.prototype.onMouseMovementOutside", wf.prototype.Me);
y("X.interactor.prototype.onMouseMovementInside", wf.prototype.Le);
y("X.interactor.prototype.onMouseWheel", wf.prototype.Oe);
y("X.interactor.prototype.onKey", wf.prototype.wd);
function yf(a, b, c, d) {
  v(a) || g(Error("No valid parent element."));
  (!x(b) || !x(c)) && g(Error("Invalid coordinates."));
  (!v(d) || !(d instanceof wf)) && g(Error("Invalid interactor."));
  gf.call(this);
  this.i = "caption";
  this.Ea = a;
  this.jc = b;
  this.kc = c;
  this.$b = d;
  this.ma = m;
  this.Ia = [];
  this.Ia = [".x-tooltip {\n  background: #C0C0FF;\n  color: #000000;\n  border: 1px solid infotext;\n  padding: 1px;\n  font-family: sans-serif;\n}"];
  bc(d, sc, this.Mb.bind(this));
  this.nd()
}
z(yf, gf);
yf.prototype.nd = function() {
  this.Ea.style.position = "relative";
  var a = document.getElementsByTagName("head")[0], b = Sd("style");
  b.type = "text/css";
  b.media = "screen";
  var c = document.createTextNode(this.Ia[0]);
  a.appendChild(b);
  b.appendChild(c);
  this.ma = b;
  this.Bc(new ef(this.jc, this.kc));
  this.ba(l);
  hf(this, this.Ea);
  this.d().classList.add("x-tooltip")
};
yf.prototype.Mb = function() {
  this.ba(o);
  this.ma && Wd(this.ma);
  this.d() && Wd(this.d());
  this.ma = m
};
y("X.caption", yf);
y("X.caption.prototype.kill", yf.prototype.Mb);
function Z(a, b) {
  (!x(a) || !x(b)) && g(Error("A camera needs valid width and height values."));
  M.call(this);
  this.i = "camera";
  this.Af = 45;
  this.gc = new K(0, 0, 100);
  this.Zb = new K(0, 0, 0);
  this.Yc = new K(0, 1, 0);
  var c = Float32Array, d;
  d = a / b;
  var f = 1 * Math.tan(this.Af * Math.PI / 360), e = -f;
  d = new Y([[2 / (f * d - e * d), 0, (f * d + e * d) / (f * d - e * d), 0], [0, 2 / (f - e), (f + e) / (f - e), 0], [0, 0, -10001 / 9999, -2.000200020002], [0, 0, -1, 0]]);
  this.Td = new c(d.z());
  this.m = zf(this, this.gc, this.Zb);
  this.$a = new Float32Array(this.m.z())
}
z(Z, M);
u = Z.prototype;
u.td = function(a) {
  (!v(a) || !(a instanceof wf)) && g(Error("Could not observe the interactor."));
  E(a, kc, this.Pe.bind(this));
  E(a, lc, this.Re.bind(this));
  E(a, mc, this.Te.bind(this))
};
u.Te = function(a) {
  a instanceof xc || g(Error("Received no valid zoom event."));
  a.Ja ? this.of(a.va) : this.pf(a.va)
};
u.Pe = function(a) {
  a instanceof uc || g(Error("Received no valid pan event."));
  this.Ve(a.Ya)
};
u.Re = function(a) {
  a instanceof wc || g(Error("Received no valid rotate event."));
  this.rotate(a.Ya)
};
u.qg = q("Td");
u.view = q("m");
u.position = q("gc");
u.Bc = function(a, b, c) {
  (!x(a) || !x(b) || !x(c)) && g(Error("The position was invalid."));
  this.gc = new K(a, b, c);
  this.reset()
};
u.reset = function() {
  this.m = zf(this, this.gc, this.Zb);
  this.$a = new Float32Array(this.m.z())
};
u.focus = q("Zb");
u.Cg = function(a, b, c) {
  (!x(a) || !x(b) || !x(c)) && g(Error("The focus was invalid."));
  this.Zb = new K(a, b, c);
  this.reset()
};
u.Tg = q("Yc");
u.Jg = function(a, b, c) {
  (!x(a) || !x(b) || !x(c)) && g(Error("The up-vector was invalid."));
  this.Yc = new K(a, b, c);
  this.reset()
};
u.Ve = function(a) {
  a instanceof vc || g(Error("Invalid distance vector for pan operation."));
  a = new K(-a.x, a.y, 0);
  a = jd(4).translate(a);
  this.m = new Y(a.multiply(this.m));
  this.$a = new Float32Array(this.m.z());
  this.dispatchEvent(new yc)
};
u.rotate = function(a) {
  a instanceof vc || g(Error("Invalid distance vector for rotate operation."));
  var b = -a.x / 5 * Math.PI / 180, a = -a.y / 5 * Math.PI / 180, c = jd(4), d = new K(parseFloat(gd(this.m, 0, 0)), parseFloat(gd(this.m, 0, 1)), parseFloat(gd(this.m, 0, 2))), b = c.rotate(b, new K(parseFloat(gd(this.m, 1, 0)), parseFloat(gd(this.m, 1, 1)), parseFloat(gd(this.m, 1, 2)))), a = c.rotate(a, d);
  this.m = new Y(this.m.multiply(a.multiply(b)));
  this.$a = new Float32Array(this.m.z());
  this.dispatchEvent(new yc)
};
u.of = function(a) {
  var b = 20;
  v(a) && !a && (b = 1);
  a = new K(0, 0, b);
  a = jd(4).translate(a);
  this.m = new Y(a.multiply(this.m));
  this.$a = new Float32Array(this.m.z());
  this.dispatchEvent(new yc)
};
u.pf = function(a) {
  var b = 30;
  v(a) && !a && (b = 1);
  a = new K(0, 0, -b);
  a = jd(4).translate(a);
  this.m = new Y(a.multiply(this.m));
  this.$a = new Float32Array(this.m.z());
  this.dispatchEvent(new yc)
};
function zf(a, b, c) {
  (!(b instanceof K) || !(c instanceof K)) && g(Error("3D vectors required for calculating the view."));
  var d = jd(4), c = new K(b.x - c.x, b.y - c.y, b.b - c.b), c = c.normalize(), a = a.Yc.c();
  a.Cb(c) && (a.b += 1.0E-6);
  var f = Fc(a, c), a = Fc(c, f), f = f.normalize(), a = a.normalize();
  V(d, 0, 0, f.x);
  V(d, 0, 1, f.y);
  V(d, 0, 2, f.b);
  V(d, 0, 3, 0);
  V(d, 1, 0, a.x);
  V(d, 1, 1, a.y);
  V(d, 1, 2, a.b);
  V(d, 1, 3, 0);
  V(d, 2, 0, c.x);
  V(d, 2, 1, c.y);
  V(d, 2, 2, c.b);
  V(d, 2, 3, 0);
  V(d, 3, 0, 0);
  V(d, 3, 1, 0);
  V(d, 3, 2, 0);
  V(d, 3, 3, 1);
  b = b.c();
  return d.translate(b.I())
}
y("X.camera", Z);
y("X.camera.prototype.observe", Z.prototype.td);
y("X.camera.prototype.onZoom", Z.prototype.Te);
y("X.camera.prototype.onPan", Z.prototype.Pe);
y("X.camera.prototype.onRotate", Z.prototype.Re);
y("X.camera.prototype.perspective", Z.prototype.qg);
y("X.camera.prototype.view", Z.prototype.view);
y("X.camera.prototype.position", Z.prototype.position);
y("X.camera.prototype.setPosition", Z.prototype.Bc);
y("X.camera.prototype.focus", Z.prototype.focus);
y("X.camera.prototype.setFocus", Z.prototype.Cg);
y("X.camera.prototype.up", Z.prototype.Tg);
y("X.camera.prototype.setUp", Z.prototype.Jg);
y("X.camera.prototype.pan", Z.prototype.Ve);
y("X.camera.prototype.rotate", Z.prototype.rotate);
y("X.camera.prototype.zoomIn", Z.prototype.of);
y("X.camera.prototype.zoomOut", Z.prototype.pf);
y("X.camera.prototype.observe", Z.prototype.td);
function $(a) {
  v(a) || g(Error("An ID to a valid container (<div>..) is required."));
  a = Pd(a);
  (!(ja(a) && 1 == a.nodeType) || 0 == a.clientWidth || 0 == a.clientHeight) && g(Error("Could not find the given container or it has an undefined size."));
  M.call(this);
  this.i = "renderer";
  this.Xa = a;
  this.If = this.Xa.clientWidth;
  this.Kd = this.Xa.clientHeight;
  this.$b = this.U = this.Uc = this.Ef = this.a = this.ua = m;
  this.Ma = new He(ud);
  this.Hf = [];
  this.cc = this.fc = this.bc = this.ec = this.ac = this.dc = m;
  this.Ua = [0, 0, 0];
  this.Ud = m;
  this.ta = new D;
  this.D = new D;
  this.yb = new D;
  this.Qc = new D;
  this.Xb = new D;
  this.hc = new D;
  this.Xd = new D;
  this.da = this.Lc = m;
  this.Mc = o;
  window.console.log("XTK Release 1 -- 1/12/12 -- http://www.goXTK.com")
}
z($, M);
u = $.prototype;
u.G = {Jd:l, Id:l, uf:l};
u.width = q("If");
u.height = q("Kd");
u.canvas = function() {
  if(!v(this.ua)) {
    this.ua = Sd("canvas")
  }
  return this.ua
};
u.Pf = q("Xa");
u.Kf = q("U");
u.cg = q("$b");
u.oa = function() {
  if(!v(this.Lc)) {
    this.Lc = new xd, E(this.oa(), qc, this.Qe.bind(this))
  }
  return this.Lc
};
u.Qe = function(a) {
  this.da && this.da.Cc(100 * a.Zd)
};
u.Je = function(a) {
  v(a) && a instanceof Cc && Af(this, a.La)
};
u.pg = function(a) {
  if(v(a) && a instanceof zc) {
    var b = a.jc, c = a.kc;
    if((a = this.get(Bf(this, b, c))) && a.caption()) {
      b = new yf(this.Xa, b + 10, c + 10, this.$b), a = a.caption(), b.d().innerHTML = a
    }
  }
};
function Cf(a) {
  if(a.G.Jd && a.da && !a.Wd) {
    a.da.le(), a.Wd = we(function() {
      this.Wd = m;
      if(this.da) {
        this.da.Mb(), this.da = m
      }
      this.kb()
    }.bind(a), 700)
  }
}
u.Ze = function() {
  this.U.reset();
  this.lb(o)
};
u.ga = function() {
  var a = this.canvas();
  a.width = this.width();
  a.height = this.height();
  this.Xa.appendChild(a);
  try {
    var b = a.getContext("experimental-webgl");
    b || g(Error())
  }catch(c) {
    alert("WebGL not supported! See http://wiki.goXTK.com/index.php/X:Browsers for instructions.."), g(Error("WebGL not supported! See http://wiki.goXTK.com/index.php/X:Browsers for instructions.."))
  }
  try {
    if(b.clearColor(0, 0, 0, 0), b.enable(b.BLEND), b.blendEquation(b.FUNC_ADD), b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA), b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL), b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT), this.G.Id) {
      var d = b.createFramebuffer(), f = b.createRenderbuffer(), e = b.createTexture();
      b.bindTexture(b.TEXTURE_2D, e);
      b.texImage2D(b.TEXTURE_2D, 0, b.RGB, this.width(), this.height(), 0, b.RGB, b.UNSIGNED_BYTE, m);
      b.bindFramebuffer(b.FRAMEBUFFER, d);
      b.bindRenderbuffer(b.RENDERBUFFER, f);
      b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, this.width(), this.height());
      b.bindRenderbuffer(b.RENDERBUFFER, m);
      b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, e, 0);
      b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, f);
      b.bindFramebuffer(b.FRAMEBUFFER, m);
      this.Ud = d
    }
  }catch(h) {
    g(Error("Exception while accessing GL Context!\n" + h))
  }
  d = new wf(a);
  d.ga();
  E(d, oc, this.Ze.bind(this));
  E(d, rc, this.pg.bind(this));
  f = new Z(this.width(), this.height());
  f.td(d);
  E(f, nc, this.lb.bind(this, o));
  this.ua = a;
  this.a = b;
  this.U = f;
  this.$b = d;
  this.$d(new Bd)
};
u.$d = function(a) {
  (!v(this.ua) || !v(this.a) || !v(this.U)) && g(Error("Renderer was not initialized properly."));
  (!v(a) || !(a instanceof Bd)) && g(Error("Could not add shaders."));
  a.nf();
  var b = this.a.createShader(this.a.FRAGMENT_SHADER), c = this.a.createShader(this.a.VERTEX_SHADER);
  this.a.shaderSource(b, a.rb);
  this.a.shaderSource(c, a.zb);
  this.a.compileShader(b);
  this.a.compileShader(c);
  this.a.getShaderParameter(b, this.a.COMPILE_STATUS) || g(Error("Fragement Shader compilation failed!\n" + this.a.getShaderInfoLog(b)));
  this.a.getShaderParameter(c, this.a.COMPILE_STATUS) || g(Error("Vertex Shader compilation failed!\n" + this.a.getShaderInfoLog(c)));
  var d = this.a.createProgram();
  this.a.attachShader(d, c);
  this.a.attachShader(d, b);
  this.a.linkProgram(d);
  this.a.getProgramParameter(d, this.a.LINK_STATUS) || g(Error("Could not create shader program!\n" + this.a.getShaderInfoLog(b) + "\n" + this.a.getShaderInfoLog(c) + "\n" + this.a.getProgramInfoLog(d)));
  this.a.useProgram(d);
  this.Uc = d;
  Object.keys(Cd).forEach(function(a) {
    a = eval("X.shaders.attributes." + a);
    this.ta.set(a, this.a.getAttribLocation(this.Uc, a));
    this.a.enableVertexAttribArray(this.ta.get(a))
  }.bind(this));
  Object.keys(Dd).forEach(function(a) {
    a = eval("X.shaders.uniforms." + a);
    this.D.set(a, this.a.getUniformLocation(this.Uc, a))
  }.bind(this));
  this.Ef = a
};
u.add = function(a) {
  this.Hf.push(a);
  (!v(this.ua) || !v(this.a) || !v(this.U)) && g(Error("Renderer was not initialized properly."));
  (!v(a) || !(a instanceof J)) && g(Error("Illegal object."));
  if(a.Kb()) {
    for(var b = a.children(), c = b.length, d = 0, d = 0;d < c;d++) {
      this.add(b[d])
    }
  }
  E(a, pc, this.Je.bind(this));
  Af(this, a)
};
function Af(a, b) {
  (!v(a.ua) || !v(a.a) || !v(a.U)) && g(Error("Renderer was not initialized properly."));
  (!v(b) || !(b instanceof J)) && g(Error("Illegal object."));
  var c = o;
  a.Ma.contains(b) && (c = l);
  if(v(b.t) && b.t.f) {
    c = a.oa();
    v(b.t) || g(Error("Internal error during texture loading."));
    var d = new Image, f = b.t.file();
    d.src = f;
    b.t.Md = d;
    bc(d, "load", c.hg.bind(c, b));
    yd(c).set(b.id(), o);
    Ad(c, 0.3)
  }else {
    if(v(b.file()) && b.file().f) {
      c = a.oa(), v(b.file()) || g(Error("Internal error during file loading.")), b.l.clear(), b.s.clear(), d = b.file().path(), f = d.split(".").pop(), f = f.toUpperCase(), "TRK" == f || "STL" == f || "FSM" == f || "VTK" == f || g(Error("The " + f + " file format is not supported.")), f = new XMLHttpRequest, E(f, "abort", c.Be.bind(c, f, b)), E(f, "error", c.Be.bind(c, f, b)), E(f, "load", c.gg.bind(c, f, b)), f.open("GET", d, l), f.overrideMimeType("text/plain; charset=x-user-defined"), f.setRequestHeader("Content-Type", 
      "text/plain"), f.send(m), yd(c).set(b.id(), o)
    }else {
      if(0 != b.l.X()) {
        for(d = 0;a.Mc;) {
          d++
        }
        a.Mc = l;
        c && b.l.f && (d = a.yb.get(b.id()), v(d) && a.a.isBuffer(d.K) && a.a.deleteBuffer(d.K));
        d = m;
        if(!c || b.l.f) {
          d = a.a.createBuffer();
          f = b.l;
          a.a.bindBuffer(a.a.ARRAY_BUFFER, d);
          a.a.bufferData(a.a.ARRAY_BUFFER, new Float32Array(f.all()), a.a.STATIC_DRAW);
          var d = new $e(d, f.X(), 3), e = b.transform().j, h = e.Pb(new K(f.Ba, f.Ca, f.Da)), f = e.Pb(new K(f.ya, f.za, f.Aa));
          if(a.dc === m || h.x < a.dc) {
            a.dc = h.x
          }
          if(a.ac === m || f.x > a.ac) {
            a.ac = f.x
          }
          if(a.ec === m || h.y < a.ec) {
            a.ec = h.y
          }
          if(a.bc === m || f.y > a.bc) {
            a.bc = f.y
          }
          if(a.fc === m || h.b < a.fc) {
            a.fc = h.b
          }
          if(a.cc === m || f.b > a.cc) {
            a.cc = f.b
          }
          a.Ua = [(a.dc + a.ac) / 2, (a.ec + a.bc) / 2, (a.fc + a.cc) / 2]
        }else {
          d = a.yb.get(b.id())
        }
        Ad(a.oa(), 0.3);
        c && b.s.f && (f = a.yb.get(b.id()), v(f) && a.a.isBuffer(f.K) && a.a.deleteBuffer(f.K));
        f = m;
        !c || b.s.f ? (f = a.a.createBuffer(), a.a.bindBuffer(a.a.ARRAY_BUFFER, f), a.a.bufferData(a.a.ARRAY_BUFFER, new Float32Array(b.s.all()), a.a.STATIC_DRAW), f = new $e(f, b.s.X(), 3)) : f = a.Qc.get(b.id());
        Ad(a.oa(), 0.3);
        c && b.v.f && (h = a.Xb.get(b.id()), v(h) && a.a.isBuffer(h.K) && a.a.deleteBuffer(h.K));
        h = m;
        0 < b.v.length() && (!c || b.v.f ? (b.v.length() != b.l.length() && g(Error("Mismatch between points and point colors.")), h = a.a.createBuffer(), a.a.bindBuffer(a.a.ARRAY_BUFFER, h), a.a.bufferData(a.a.ARRAY_BUFFER, new Float32Array(b.v.all()), a.a.STATIC_DRAW), h = new $e(h, b.v.X(), 3)) : h = a.Xb.get(b.id()));
        Ad(a.oa(), 0.3);
        c && v(b.t) && b.t.f && (e = a.hc.get(b.id()), v(e) && a.a.isBuffer(e.K) && a.a.deleteBuffer(e.K));
        e = m;
        if(v(b.t)) {
          !c || b.t.f ? (v(b.bb) || g(Error("Can not add an object and texture without valid coordinate mapping! Set the textureCoordinateMap!")), e = a.a.createTexture(), e.md = b.t.md(), a.Xd.set(b.t.file(), e), a.a.pixelStorei(a.a.UNPACK_FLIP_Y_WEBGL, o), a.a.bindTexture(a.a.TEXTURE_2D, e), a.a.texImage2D(a.a.TEXTURE_2D, 0, a.a.RGBA, a.a.RGBA, a.a.UNSIGNED_BYTE, e.md), a.a.texParameteri(a.a.TEXTURE_2D, a.a.TEXTURE_MAG_FILTER, a.a.LINEAR), a.a.texParameteri(a.a.TEXTURE_2D, a.a.TEXTURE_MIN_FILTER, 
          a.a.LINEAR), a.a.bindTexture(a.a.TEXTURE_2D, m), e = a.a.createBuffer(), a.a.bindBuffer(a.a.ARRAY_BUFFER, e), a.a.bufferData(a.a.ARRAY_BUFFER, new Float32Array(b.bb), a.a.STATIC_DRAW), e = new $e(e, b.bb.length, 2)) : e = a.hc.get(b.id())
        }
        Ad(a.oa(), 0.1);
        !c && !a.Ma.add(b) && g(Error("Could not add object to this renderer."));
        a.yb.set(b.id(), d);
        a.Qc.set(b.id(), f);
        a.Xb.set(b.id(), h);
        a.hc.set(b.id(), e);
        a.Mc = o
      }
    }
  }
}
u.kb = function() {
  (!this.ua || !this.a || !this.U) && g(Error("The renderer was not initialized properly."));
  if(!v(this.Vd)) {
    if(zd(this.oa())) {
      this.da ? (Cf(this), this.onShowtime()) : (this.onShowtime(), this.lb(o))
    }else {
      if(this.G.Jd && !this.da) {
        this.da = new Ze(this.Xa, 0)
      }
      this.Vd = we(function() {
        this.Vd = m;
        this.kb()
      }.bind(this), 100)
    }
  }
};
u.onShowtime = function() {
  window.console.log("onShowtime not overloaded!")
};
u.get = function(a) {
  v(a) || g(Error("Invalid object id."));
  for(var b = this.Ma.$(), c = 0, d = b.length, c = 0;c < d;c++) {
    if(b[c].id() == a) {
      return b[c]
    }
  }
  return m
};
function Bf(a, b, c) {
  if(a.G.Id) {
    a.lb(l);
    var d = new Uint8Array(4);
    a.a.readPixels(b, a.Kd - c, 1, 1, a.a.RGBA, a.a.UNSIGNED_BYTE, d);
    a = Math.round(10 * (d[0] / 255));
    b = Math.round(10 * (d[1] / 255));
    d = Math.round(10 * (d[2] / 255));
    return 100 * a + 10 * b + d
  }
  return-1
}
u.lb = function(a) {
  a ? this.a.bindFramebuffer(this.a.FRAMEBUFFER, this.Ud) : this.a.bindFramebuffer(this.a.FRAMEBUFFER, m);
  this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
  var b = this.U.Td, c = this.U.$a;
  this.a.uniformMatrix4fv(this.D.get("perspective"), o, b);
  this.a.uniformMatrix4fv(this.D.get("view"), o, c);
  b = this.Ua;
  this.a.uniform3f(this.D.get("center"), parseFloat(b[0]), parseFloat(b[1]), parseFloat(b[2]));
  if(this.G.uf) {
    var d = o, b = this.Ma.$(), c = b.length, f;
    for(f = 0;f < c;++f) {
      var e = b[f];
      if(1 != e.opacity()) {
        var d = e.l.Wb, d = new K(d[0], d[1], d[2]), e = e.transform().j.Pb(d), h = this.U.view().Pb(e), j = this.U.focus(), e = j.x - h.x, d = j.y - h.y, h = j.b - h.b;
        b[f].nc = Math.sqrt(e * e + d * d + h * h);
        d = l
      }
    }
    if(d) {
      this.Ma.clear();
      for(f = 0;f < c;++f) {
        this.Ma.add(b[f])
      }
    }
  }
  b = this.Ma.$();
  c = b.length;
  for(f = 0;f < c;++f) {
    if(e = b[f]) {
      if(e.ic) {
        var h = e.id(), k = e.tb, d = this.yb.get(h), p = this.Qc.get(h), t = this.Xb.get(h), j = this.hc.get(h);
        this.a.bindBuffer(this.a.ARRAY_BUFFER, d.K);
        this.a.vertexAttribPointer(this.ta.get("vertexPosition"), d.Ka, this.a.FLOAT, o, 0, 0);
        this.a.bindBuffer(this.a.ARRAY_BUFFER, p.K);
        this.a.vertexAttribPointer(this.ta.get("vertexNormal"), p.Ka, this.a.FLOAT, o, 0, 0);
        a ? this.a.uniform1i(this.D.get("usePicking"), l) : this.a.uniform1i(this.D.get("usePicking"), o);
        v(t) && !a && !k ? (this.a.uniform1i(this.D.get("useObjectColor"), o), this.a.bindBuffer(this.a.ARRAY_BUFFER, t.K), this.a.vertexAttribPointer(this.ta.get("vertexColor"), t.Ka, this.a.FLOAT, o, 0, 0)) : (p = l, k && !a && (p = o), this.a.uniform1i(this.D.get("useObjectColor"), p), k = e.color(), a && (999 < h && g(Error("Id out of bounds.")), k = Math.floor(0.01 * h), p = Math.floor(0.1 * h) - 10 * k, k = [k / 10, p / 10, (h - 100 * k - 10 * p) / 10]), this.a.uniform3f(this.D.get("objectColor"), 
        parseFloat(k[0]), parseFloat(k[1]), parseFloat(k[2])), this.a.vertexAttribPointer(this.ta.get("vertexColor"), d.Ka, this.a.FLOAT, o, 0, 0));
        this.a.uniform1f(this.D.get("objectOpacity"), parseFloat(e.opacity()));
        v(e.t) && v(j) && !a ? (this.a.uniform1i(this.D.get("useTexture"), l), this.a.activeTexture(this.a.TEXTURE0), this.a.bindTexture(this.a.TEXTURE_2D, this.Xd.get(e.t.file())), this.a.uniform1i(this.D.get("textureSampler"), 0), this.a.bindBuffer(this.a.ARRAY_BUFFER, j.K), this.a.vertexAttribPointer(this.ta.get("vertexTexturePos"), j.Ka, this.a.FLOAT, o, 0, 0)) : (this.a.uniform1i(this.D.get("useTexture"), o), this.a.vertexAttribPointer(this.ta.get("vertexTexturePos"), d.Ka, this.a.FLOAT, o, 
        0, 0));
        this.a.uniformMatrix4fv(this.D.get("objectTransform"), o, ld(e.transform()));
        h = 1;
        "POINTS" == e.type() && (h = e.vb);
        this.a.uniform1f(this.D.get("pointSize"), h);
        h = -1;
        e.type() == qd ? h = this.a.TRIANGLES : e.type() == Oc ? (this.a.lineWidth(e.lineWidth()), h = this.a.LINES) : "POINTS" == e.type() ? h = this.a.POINTS : "TRIANGLE_STRIPS" == e.type() ? h = this.a.TRIANGLE_STRIP : "POLYGONS" == e.type() && (h = 0 == d.Ic % 3 ? this.a.TRIANGLES : this.a.TRIANGLE_FAN);
        this.a.drawArrays(h, 0, d.Ic)
      }
    }else {
      g(Error("Could not retrieve object for (re-)drawing!"))
    }
  }
};
y("X.renderer", $);
y("X.renderer.prototype.config", $.prototype.G);
y("X.renderer.prototype.width", $.prototype.width);
y("X.renderer.prototype.height", $.prototype.height);
y("X.renderer.prototype.canvas", $.prototype.canvas);
y("X.renderer.prototype.container", $.prototype.Pf);
y("X.renderer.prototype.camera", $.prototype.Kf);
y("X.renderer.prototype.interactor", $.prototype.cg);
y("X.renderer.prototype.loader", $.prototype.oa);
y("X.renderer.prototype.onProgress", $.prototype.Qe);
y("X.renderer.prototype.onModified", $.prototype.Je);
y("X.renderer.prototype.resetViewAndRender", $.prototype.Ze);
y("X.renderer.prototype.init", $.prototype.ga);
y("X.renderer.prototype.addShaders", $.prototype.$d);
y("X.renderer.prototype.add", $.prototype.add);
y("X.renderer.prototype.onShowtime", $.prototype.onShowtime);
y("X.renderer.prototype.render", $.prototype.kb);
function Df(a) {
  function b(a, b) {
    var a = a * 2 * Math.PI, b = b * Math.PI, e = new Q(Math.cos(a) * Math.sin(b), Math.cos(b), Math.sin(a) * Math.sin(b));
    h.push(new R(c.Sa(e.sa(d)), e))
  }
  this.h = [];
  for(var a = a || {}, c = new Q(a.ad || [0, 0, 0]), d = a.ha || 1, f = a.Ed || 16, a = a.Mg || 8, e = [], h, j = 0;j < f;j++) {
    for(var k = 0;k < a;k++) {
      h = [], b(j / f, k / a), 0 < k && b((j + 1) / f, k / a), k < a - 1 && b((j + 1) / f, (k + 1) / a), b(j / f, (k + 1) / a), e.push(new S(h))
    }
  }
  return Yc(e)
}
z(Df, T);
y("CSG.sphere", Df);
function Ef(a, b) {
  (!v(a) || !(a instanceof Array) || 3 != a.length) && g(Error("Invalid center."));
  x(b) || g(Error("Invalid radius."));
  J.call(this);
  this.i = "Sphere";
  this.Ua = a;
  this.Tc = b;
  this.Vc = 32;
  this.Ff = 16;
  this.Bb()
}
z(Ef, J);
Ef.prototype.Bb = function() {
  sd(this, new Df({ad:this.Ua, ha:this.Tc, Ed:this.Vc, Mg:this.Ff}))
};
y("X.sphere", Ef);
function Ff(a) {
  function b(a, b, d) {
    b = 2 * b * Math.PI;
    b = k.sa(Math.cos(b)).Sa(p.sa(Math.sin(b)));
    a = c.Sa(f.sa(a)).Sa(b.sa(e));
    d = b.sa(1 - Math.abs(d)).Sa(h.sa(d));
    return new R(a, d)
  }
  this.h = [];
  for(var a = a || {}, c = new Q(a.start || [0, -1, 0]), d = new Q(a.end || [0, 1, 0]), f = d.gb(c), e = a.ha || 1, a = a.Ed || 16, h = f.ob(), j = 0.5 < Math.abs(h.y()), k = (new Q(j, !j, 0)).mc(h).ob(), p = k.mc(h).ob(), j = new R(c, h.vc()), d = new R(d, h.ob()), t = [], r = 0;r < a;r++) {
    var n = r / a, s = (r + 1) / a;
    t.push(new S([j, b(0, n, -1), b(0, s, -1)]));
    t.push(new S([b(0, s, 0), b(0, n, 0), b(1, n, 0), b(1, s, 0)]));
    t.push(new S([d, b(1, s, 1), b(1, n, 1)]))
  }
  return Yc(t)
}
z(Ff, T);
y("CSG.cylinder", Ff);
function Gf(a, b, c) {
  (!v(a) || !(a instanceof Array) || 3 != a.length) && g(Error("Invalid start position."));
  (!v(b) || !(b instanceof Array) || 3 != b.length) && g(Error("Invalid end position."));
  x(c) || g(Error("Invalid radius."));
  J.call(this);
  this.i = "cylinder";
  this.Gf = a;
  this.zf = b;
  this.Tc = c;
  this.Vc = 32;
  this.Bb()
}
z(Gf, J);
Gf.prototype.Bb = function() {
  sd(this, new Ff({start:this.Gf, end:this.zf, ha:this.Tc, Ed:this.Vc}))
};
y("X.cylinder", Gf);
function Hf(a) {
  this.h = [];
  var a = a || {}, b = new Q(a.ad || [0, 0, 0]), c = !a.ha ? [1, 1, 1] : a.ha.length ? a.ha : [a.ha, a.ha, a.ha];
  return Yc([[[0, 4, 6, 2], [-1, 0, 0]], [[1, 3, 7, 5], [1, 0, 0]], [[0, 1, 5, 4], [0, -1, 0]], [[2, 6, 7, 3], [0, 1, 0]], [[0, 2, 3, 1], [0, 0, -1]], [[4, 5, 7, 6], [0, 0, 1]]].map(function(a) {
    return new S(a[0].map(function(f) {
      f = new Q(b.x() + c[0] * (2 * !!(f & 1) - 1), b.y() + c[1] * (2 * !!(f & 2) - 1), b.b() + c[2] * (2 * !!(f & 4) - 1));
      return new R(f, new Q(a[1]))
    }))
  }))
}
z(Hf, T);
y("CSG.cube", Hf);
function If(a, b, c, d) {
  (!v(a) || !(a instanceof Array) || 3 != a.length) && g(Error("Invalid center."));
  (!x(b) || !x(c) || !x(d)) && g(Error("Invalid radii."));
  J.call(this);
  this.i = "cube";
  this.Ua = a;
  this.Bf = b;
  this.Cf = c;
  this.Df = d;
  this.bb = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
  this.Bb()
}
z(If, J);
If.prototype.Bb = function() {
  sd(this, new Hf({ad:this.Ua, ha:[this.Bf, this.Cf, this.Df]}))
};
y("X.cube", If);

