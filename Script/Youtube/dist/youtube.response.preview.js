// Build: 2024/07/16 11:05:00
(() => {
    var _t = Object.defineProperty;
    var Yt = (t, e, n) => e in t ? _t(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n;
    var K = (t, e, n) => (Yt(t, typeof e != "symbol" ? e + "" : e, n), n);
    (function(t) {
        function e() {}

        function n() {}
        var r = String.fromCharCode,
            s = {}.toString,
            o = s.call(t.SharedArrayBuffer),
            i = s(),
            a = t.Uint8Array,
            c = a || Array,
            f = a ? ArrayBuffer : c,
            m = f.isView || function(h) {
                return h && "length" in h
            },
            l = s.call(f.prototype);
        f = n.prototype;
        var g = t.TextEncoder,
            p = new(a ? Uint16Array : c)(32);
        e.prototype.decode = function(h) {
            if (!m(h)) {
                var R = s.call(h);
                if (R !== l && R !== o && R !== i) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
                h = a ? new c(h) : h || []
            }
            for (var N = R = "", y = 0, T = h.length | 0, j = T - 32 | 0, x, w, F = 0, J = 0, M, B = 0, O = -1; y < T;) {
                for (x = y <= j ? 32 : T - y | 0; B < x; y = y + 1 | 0, B = B + 1 | 0) {
                    switch (w = h[y] & 255, w >> 4) {
                        case 15:
                            if (M = h[y = y + 1 | 0] & 255, M >> 6 !== 2 || 247 < w) {
                                y = y - 1 | 0;
                                break
                            }
                            F = (w & 7) << 6 | M & 63, J = 5, w = 256;
                        case 14:
                            M = h[y = y + 1 | 0] & 255, F <<= 6, F |= (w & 15) << 6 | M & 63, J = M >> 6 === 2 ? J + 4 | 0 : 24, w = w + 256 & 768;
                        case 13:
                        case 12:
                            M = h[y = y + 1 | 0] & 255, F <<= 6, F |= (w & 31) << 6 | M & 63, J = J + 7 | 0, y < T && M >> 6 === 2 && F >> J && 1114112 > F ? (w = F, F = F - 65536 | 0, 0 <= F && (O = (F >> 10) + 55296 | 0, w = (F & 1023) + 56320 | 0, 31 > B ? (p[B] = O, B = B + 1 | 0, O = -1) : (M = O, O = w, w = M))) : (w >>= 8, y = y - w - 1 | 0, w = 65533), F = J = 0, x = y <= j ? 32 : T - y | 0;
                        default:
                            p[B] = w;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                    }
                    p[B] = 65533
                }
                if (N += r(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15], p[16], p[17], p[18], p[19], p[20], p[21], p[22], p[23], p[24], p[25], p[26], p[27], p[28], p[29], p[30], p[31]), 32 > B && (N = N.slice(0, B - 32 | 0)), y < T) {
                    if (p[0] = O, B = ~O >>> 31, O = -1, N.length < R.length) continue
                } else O !== -1 && (N += r(O));
                R += N, N = ""
            }
            return R
        }, f.encode = function(h) {
            h = h === void 0 ? "" : "" + h;
            var R = h.length | 0,
                N = new c((R << 1) + 8 | 0),
                y, T = 0,
                j = !a;
            for (y = 0; y < R; y = y + 1 | 0, T = T + 1 | 0) {
                var x = h.charCodeAt(y) | 0;
                if (127 >= x) N[T] = x;
                else {
                    if (2047 >= x) N[T] = 192 | x >> 6;
                    else {
                        e: {
                            if (55296 <= x)
                                if (56319 >= x) {
                                    var w = h.charCodeAt(y = y + 1 | 0) | 0;
                                    if (56320 <= w && 57343 >= w) {
                                        if (x = (x << 10) + w - 56613888 | 0, 65535 < x) {
                                            N[T] = 240 | x >> 18, N[T = T + 1 | 0] = 128 | x >> 12 & 63, N[T = T + 1 | 0] = 128 | x >> 6 & 63, N[T = T + 1 | 0] = 128 | x & 63;
                                            continue
                                        }
                                        break e
                                    }
                                    x = 65533
                                } else 57343 >= x && (x = 65533);!j && y << 1 < T && y << 1 < (T - 7 | 0) && (j = !0, w = new c(3 * R), w.set(N), N = w)
                        }
                        N[T] = 224 | x >> 12,
                        N[T = T + 1 | 0] = 128 | x >> 6 & 63
                    }
                    N[T = T + 1 | 0] = 128 | x & 63
                }
            }
            return a ? N.subarray(0, T) : N.slice(0, T)
        }, g || (t.TextDecoder = e, t.TextEncoder = n)
    })(globalThis);

    function I(t, e) {
        if (!t) throw new Error(e)
    }
    var qt = 34028234663852886e22,
        Wt = -34028234663852886e22,
        Xt = 4294967295,
        jt = 2147483647,
        Kt = -2147483648;

    function _(t) {
        if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
        if (!Number.isInteger(t) || t > jt || t < Kt) throw new Error("invalid int 32: " + t)
    }

    function z(t) {
        if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
        if (!Number.isInteger(t) || t > Xt || t < 0) throw new Error("invalid uint 32: " + t)
    }

    function ne(t) {
        if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
        if (Number.isFinite(t) && (t > qt || t < Wt)) throw new Error("invalid float 32: " + t)
    }
    var We = Symbol("@bufbuild/protobuf/enum-type");

    function Xe(t) {
        let e = t[We];
        return I(e, "missing enum type on enum object"), e
    }

    function Se(t, e, n, r) {
        t[We] = Ee(e, n.map(s => ({
            no: s.no,
            name: s.name,
            localName: t[s.no]
        })), r)
    }

    function Ee(t, e, n) {
        let r = Object.create(null),
            s = Object.create(null),
            o = [];
        for (let i of e) {
            let a = Ke(i);
            o.push(a), r[i.name] = a, s[i.no] = a
        }
        return {
            typeName: t,
            values: o,
            findName(i) {
                return r[i]
            },
            findNumber(i) {
                return s[i]
            }
        }
    }

    function je(t, e, n) {
        let r = {};
        for (let s of e) {
            let o = Ke(s);
            r[o.localName] = o.no, r[o.no] = o.localName
        }
        return Se(r, t, e, n), r
    }

    function Ke(t) {
        return "localName" in t ? t : Object.assign(Object.assign({}, t), {
            localName: t.name
        })
    }
    var E = class {
        equals(e) {
            return this.getType().runtime.util.equals(this.getType(), this, e)
        }
        clone() {
            return this.getType().runtime.util.clone(this)
        }
        fromBinary(e, n) {
            let r = this.getType(),
                s = r.runtime.bin,
                o = s.makeReadOptions(n);
            return s.readMessage(this, o.readerFactory(e), e.byteLength, o), this
        }
        fromJson(e, n) {
            let r = this.getType(),
                s = r.runtime.json,
                o = s.makeReadOptions(n);
            return s.readMessage(r, e, o, this), this
        }
        fromJsonString(e, n) {
            let r;
            try {
                r = JSON.parse(e)
            } catch (s) {
                throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${s instanceof Error?s.message:String(s)}`)
            }
            return this.fromJson(r, n)
        }
        toBinary(e) {
            let n = this.getType(),
                r = n.runtime.bin,
                s = r.makeWriteOptions(e),
                o = s.writerFactory();
            return r.writeMessage(this, o, s), o.finish()
        }
        toJson(e) {
            let n = this.getType(),
                r = n.runtime.json,
                s = r.makeWriteOptions(e);
            return r.writeMessage(this, s)
        }
        toJsonString(e) {
            var n;
            let r = this.toJson(e);
            return JSON.stringify(r, null, (n = e?.prettySpaces) !== null && n !== void 0 ? n : 0)
        }
        toJSON() {
            return this.toJson({
                emitDefaultValues: !0
            })
        }
        getType() {
            return Object.getPrototypeOf(this).constructor
        }
    };

    function ze(t, e, n, r) {
        var s;
        let o = (s = r?.localName) !== null && s !== void 0 ? s : e.substring(e.lastIndexOf(".") + 1),
            i = {
                [o]: function(a) {
                    t.util.initFields(this), t.util.initPartial(a, this)
                }
            } [o];
        return Object.setPrototypeOf(i.prototype, new E), Object.assign(i, {
            runtime: t,
            typeName: e,
            fields: t.util.newFieldList(n),
            fromBinary(a, c) {
                return new i().fromBinary(a, c)
            },
            fromJson(a, c) {
                return new i().fromJson(a, c)
            },
            fromJsonString(a, c) {
                return new i().fromJsonString(a, c)
            },
            equals(a, c) {
                return t.util.equals(i, a, c)
            }
        }), i
    }
    var u;
    (function(t) {
        t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64"
    })(u || (u = {}));
    var C;
    (function(t) {
        t[t.BIGINT = 0] = "BIGINT", t[t.STRING = 1] = "STRING"
    })(C || (C = {}));

    function Qe() {
        let t = 0,
            e = 0;
        for (let r = 0; r < 28; r += 7) {
            let s = this.buf[this.pos++];
            if (t |= (s & 127) << r, !(s & 128)) return this.assertBounds(), [t, e]
        }
        let n = this.buf[this.pos++];
        if (t |= (n & 15) << 28, e = (n & 112) >> 4, !(n & 128)) return this.assertBounds(), [t, e];
        for (let r = 3; r <= 31; r += 7) {
            let s = this.buf[this.pos++];
            if (e |= (s & 127) << r, !(s & 128)) return this.assertBounds(), [t, e]
        }
        throw new Error("invalid varint")
    }

    function se(t, e, n) {
        for (let o = 0; o < 28; o = o + 7) {
            let i = t >>> o,
                a = !(!(i >>> 7) && e == 0),
                c = (a ? i | 128 : i) & 255;
            if (n.push(c), !a) return
        }
        let r = t >>> 28 & 15 | (e & 7) << 4,
            s = !!(e >> 3);
        if (n.push((s ? r | 128 : r) & 255), !!s) {
            for (let o = 3; o < 31; o = o + 7) {
                let i = e >>> o,
                    a = !!(i >>> 7),
                    c = (a ? i | 128 : i) & 255;
                if (n.push(c), !a) return
            }
            n.push(e >>> 31 & 1)
        }
    }
    var re = 4294967296;

    function Fe(t) {
        let e = t[0] === "-";
        e && (t = t.slice(1));
        let n = 1e6,
            r = 0,
            s = 0;

        function o(i, a) {
            let c = Number(t.slice(i, a));
            s *= n, r = r * n + c, r >= re && (s = s + (r / re | 0), r = r % re)
        }
        return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? et(r, s) : Be(r, s)
    }

    function Ze(t, e) {
        let n = Be(t, e),
            r = n.hi & 2147483648;
        r && (n = et(n.lo, n.hi));
        let s = Re(n.lo, n.hi);
        return r ? "-" + s : s
    }

    function Re(t, e) {
        if ({
                lo: t,
                hi: e
            } = zt(t, e), e <= 2097151) return String(re * e + t);
        let n = t & 16777215,
            r = (t >>> 24 | e << 8) & 16777215,
            s = e >> 16 & 65535,
            o = n + r * 6777216 + s * 6710656,
            i = r + s * 8147497,
            a = s * 2,
            c = 1e7;
        return o >= c && (i += Math.floor(o / c), o %= c), i >= c && (a += Math.floor(i / c), i %= c), a.toString() + He(i) + He(o)
    }

    function zt(t, e) {
        return {
            lo: t >>> 0,
            hi: e >>> 0
        }
    }

    function Be(t, e) {
        return {
            lo: t | 0,
            hi: e | 0
        }
    }

    function et(t, e) {
        return e = ~e, t ? t = ~t + 1 : e += 1, Be(t, e)
    }
    var He = t => {
        let e = String(t);
        return "0000000".slice(e.length) + e
    };

    function Me(t, e) {
        if (t >= 0) {
            for (; t > 127;) e.push(t & 127 | 128), t = t >>> 7;
            e.push(t)
        } else {
            for (let n = 0; n < 9; n++) e.push(t & 127 | 128), t = t >> 7;
            e.push(1)
        }
    }

    function tt() {
        let t = this.buf[this.pos++],
            e = t & 127;
        if (!(t & 128)) return this.assertBounds(), e;
        if (t = this.buf[this.pos++], e |= (t & 127) << 7, !(t & 128)) return this.assertBounds(), e;
        if (t = this.buf[this.pos++], e |= (t & 127) << 14, !(t & 128)) return this.assertBounds(), e;
        if (t = this.buf[this.pos++], e |= (t & 127) << 21, !(t & 128)) return this.assertBounds(), e;
        t = this.buf[this.pos++], e |= (t & 15) << 28;
        for (let n = 5; t & 128 && n < 10; n++) t = this.buf[this.pos++];
        if (t & 128) throw new Error("invalid varint");
        return this.assertBounds(), e >>> 0
    }

    function Ht() {
        let t = new DataView(new ArrayBuffer(8));
        if (typeof BigInt == "function" && typeof t.getBigInt64 == "function" && typeof t.getBigUint64 == "function" && typeof t.setBigInt64 == "function" && typeof t.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
            let s = BigInt("-9223372036854775808"),
                o = BigInt("9223372036854775807"),
                i = BigInt("0"),
                a = BigInt("18446744073709551615");
            return {
                zero: BigInt(0),
                supported: !0,
                parse(c) {
                    let f = typeof c == "bigint" ? c : BigInt(c);
                    if (f > o || f < s) throw new Error(`int64 invalid: ${c}`);
                    return f
                },
                uParse(c) {
                    let f = typeof c == "bigint" ? c : BigInt(c);
                    if (f > a || f < i) throw new Error(`uint64 invalid: ${c}`);
                    return f
                },
                enc(c) {
                    return t.setBigInt64(0, this.parse(c), !0), {
                        lo: t.getInt32(0, !0),
                        hi: t.getInt32(4, !0)
                    }
                },
                uEnc(c) {
                    return t.setBigInt64(0, this.uParse(c), !0), {
                        lo: t.getInt32(0, !0),
                        hi: t.getInt32(4, !0)
                    }
                },
                dec(c, f) {
                    return t.setInt32(0, c, !0), t.setInt32(4, f, !0), t.getBigInt64(0, !0)
                },
                uDec(c, f) {
                    return t.setInt32(0, c, !0), t.setInt32(4, f, !0), t.getBigUint64(0, !0)
                }
            }
        }
        let n = s => I(/^-?[0-9]+$/.test(s), `int64 invalid: ${s}`),
            r = s => I(/^[0-9]+$/.test(s), `uint64 invalid: ${s}`);
        return {
            zero: "0",
            supported: !1,
            parse(s) {
                return typeof s != "string" && (s = s.toString()), n(s), s
            },
            uParse(s) {
                return typeof s != "string" && (s = s.toString()), r(s), s
            },
            enc(s) {
                return typeof s != "string" && (s = s.toString()), n(s), Fe(s)
            },
            uEnc(s) {
                return typeof s != "string" && (s = s.toString()), r(s), Fe(s)
            },
            dec(s, o) {
                return Ze(s, o)
            },
            uDec(s, o) {
                return Re(s, o)
            }
        }
    }
    var S = Ht();
    var k;
    (function(t) {
        t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32"
    })(k || (k = {}));
    var oe = class {
            constructor(e) {
                this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = []
            }
            finish() {
                this.chunks.push(new Uint8Array(this.buf));
                let e = 0;
                for (let s = 0; s < this.chunks.length; s++) e += this.chunks[s].length;
                let n = new Uint8Array(e),
                    r = 0;
                for (let s = 0; s < this.chunks.length; s++) n.set(this.chunks[s], r), r += this.chunks[s].length;
                return this.chunks = [], n
            }
            fork() {
                return this.stack.push({
                    chunks: this.chunks,
                    buf: this.buf
                }), this.chunks = [], this.buf = [], this
            }
            join() {
                let e = this.finish(),
                    n = this.stack.pop();
                if (!n) throw new Error("invalid state, fork stack empty");
                return this.chunks = n.chunks, this.buf = n.buf, this.uint32(e.byteLength), this.raw(e)
            }
            tag(e, n) {
                return this.uint32((e << 3 | n) >>> 0)
            }
            raw(e) {
                return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
            }
            uint32(e) {
                for (z(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
                return this.buf.push(e), this
            }
            int32(e) {
                return _(e), Me(e, this.buf), this
            }
            bool(e) {
                return this.buf.push(e ? 1 : 0), this
            }
            bytes(e) {
                return this.uint32(e.byteLength), this.raw(e)
            }
            string(e) {
                let n = this.textEncoder.encode(e);
                return this.uint32(n.byteLength), this.raw(n)
            }
            float(e) {
                ne(e);
                let n = new Uint8Array(4);
                return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n)
            }
            double(e) {
                let n = new Uint8Array(8);
                return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n)
            }
            fixed32(e) {
                z(e);
                let n = new Uint8Array(4);
                return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n)
            }
            sfixed32(e) {
                _(e);
                let n = new Uint8Array(4);
                return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n)
            }
            sint32(e) {
                return _(e), e = (e << 1 ^ e >> 31) >>> 0, Me(e, this.buf), this
            }
            sfixed64(e) {
                let n = new Uint8Array(8),
                    r = new DataView(n.buffer),
                    s = S.enc(e);
                return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(n)
            }
            fixed64(e) {
                let n = new Uint8Array(8),
                    r = new DataView(n.buffer),
                    s = S.uEnc(e);
                return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(n)
            }
            int64(e) {
                let n = S.enc(e);
                return se(n.lo, n.hi, this.buf), this
            }
            sint64(e) {
                let n = S.enc(e),
                    r = n.hi >> 31,
                    s = n.lo << 1 ^ r,
                    o = (n.hi << 1 | n.lo >>> 31) ^ r;
                return se(s, o, this.buf), this
            }
            uint64(e) {
                let n = S.uEnc(e);
                return se(n.lo, n.hi, this.buf), this
            }
        },
        ie = class {
            constructor(e, n) {
                this.varint64 = Qe, this.uint32 = tt, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = n ?? new TextDecoder
            }
            tag() {
                let e = this.uint32(),
                    n = e >>> 3,
                    r = e & 7;
                if (n <= 0 || r < 0 || r > 5) throw new Error("illegal tag: field no " + n + " wire type " + r);
                return [n, r]
            }
            skip(e) {
                let n = this.pos;
                switch (e) {
                    case k.Varint:
                        for (; this.buf[this.pos++] & 128;);
                        break;
                    case k.Bit64:
                        this.pos += 4;
                    case k.Bit32:
                        this.pos += 4;
                        break;
                    case k.LengthDelimited:
                        let r = this.uint32();
                        this.pos += r;
                        break;
                    case k.StartGroup:
                        let s;
                        for (;
                            (s = this.tag()[1]) !== k.EndGroup;) this.skip(s);
                        break;
                    default:
                        throw new Error("cant skip wire type " + e)
                }
                return this.assertBounds(), this.buf.subarray(n, this.pos)
            }
            assertBounds() {
                if (this.pos > this.len) throw new RangeError("premature EOF")
            }
            int32() {
                return this.uint32() | 0
            }
            sint32() {
                let e = this.uint32();
                return e >>> 1 ^ -(e & 1)
            }
            int64() {
                return S.dec(...this.varint64())
            }
            uint64() {
                return S.uDec(...this.varint64())
            }
            sint64() {
                let [e, n] = this.varint64(), r = -(e & 1);
                return e = (e >>> 1 | (n & 1) << 31) ^ r, n = n >>> 1 ^ r, S.dec(e, n)
            }
            bool() {
                let [e, n] = this.varint64();
                return e !== 0 || n !== 0
            }
            fixed32() {
                return this.view.getUint32((this.pos += 4) - 4, !0)
            }
            sfixed32() {
                return this.view.getInt32((this.pos += 4) - 4, !0)
            }
            fixed64() {
                return S.uDec(this.sfixed32(), this.sfixed32())
            }
            sfixed64() {
                return S.dec(this.sfixed32(), this.sfixed32())
            }
            float() {
                return this.view.getFloat32((this.pos += 4) - 4, !0)
            }
            double() {
                return this.view.getFloat64((this.pos += 8) - 8, !0)
            }
            bytes() {
                let e = this.uint32(),
                    n = this.pos;
                return this.pos += e, this.assertBounds(), this.buf.subarray(n, n + e)
            }
            string() {
                return this.textDecoder.decode(this.bytes())
            }
        };

    function U(t, e, n) {
        if (e === n) return !0;
        if (t == u.BYTES) {
            if (!(e instanceof Uint8Array) || !(n instanceof Uint8Array) || e.length !== n.length) return !1;
            for (let r = 0; r < e.length; r++)
                if (e[r] !== n[r]) return !1;
            return !0
        }
        switch (t) {
            case u.UINT64:
            case u.FIXED64:
            case u.INT64:
            case u.SFIXED64:
            case u.SINT64:
                return e == n
        }
        return !1
    }

    function G(t, e) {
        switch (t) {
            case u.BOOL:
                return !1;
            case u.UINT64:
            case u.FIXED64:
            case u.INT64:
            case u.SFIXED64:
            case u.SINT64:
                return e == 0 ? S.zero : "0";
            case u.DOUBLE:
            case u.FLOAT:
                return 0;
            case u.BYTES:
                return new Uint8Array(0);
            case u.STRING:
                return "";
            default:
                return 0
        }
    }

    function Oe(t, e) {
        let n = e === void 0,
            r = k.Varint,
            s = e === 0;
        switch (t) {
            case u.STRING:
                s = n || !e.length, r = k.LengthDelimited;
                break;
            case u.BOOL:
                s = e === !1;
                break;
            case u.DOUBLE:
                r = k.Bit64;
                break;
            case u.FLOAT:
                r = k.Bit32;
                break;
            case u.INT64:
                s = n || e == 0;
                break;
            case u.UINT64:
                s = n || e == 0;
                break;
            case u.FIXED64:
                s = n || e == 0, r = k.Bit64;
                break;
            case u.BYTES:
                s = n || !e.byteLength, r = k.LengthDelimited;
                break;
            case u.FIXED32:
                r = k.Bit32;
                break;
            case u.SFIXED32:
                r = k.Bit32;
                break;
            case u.SFIXED64:
                s = n || e == 0, r = k.Bit64;
                break;
            case u.SINT64:
                s = n || e == 0;
                break
        }
        let o = u[t].toLowerCase();
        return [r, o, n || s]
    }

    function nt(t, e, n, r) {
        let s;
        return {
            typeName: e,
            extendee: n,
            get field() {
                if (!s) {
                    let o = typeof r == "function" ? r() : r;
                    o.name = e.split(".").pop(), o.jsonName = `[${e}]`, s = t.util.newFieldList([o]).list()[0]
                }
                return s
            },
            runtime: t
        }
    }

    function ae(t) {
        let e = t.field.localName,
            n = Object.create(null);
        return n[e] = Qt(t), [n, () => n[e]]
    }

    function Qt(t) {
        let e = t.field;
        if (e.repeated) return [];
        if (e.default !== void 0) return e.default;
        switch (e.kind) {
            case "enum":
                return e.T.values[0].no;
            case "scalar":
                return G(e.T, e.L);
            case "message":
                let n = e.T,
                    r = new n;
                return n.fieldWrapper ? n.fieldWrapper.unwrapField(r) : r;
            case "map":
                throw "map fields are not allowed to be extensions"
        }
    }

    function rt(t, e) {
        if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
            for (let n = t.length - 1; n >= 0; --n)
                if (t[n].no == e.no) return [t[n]];
            return []
        }
        return t.filter(n => n.no === e.no)
    }

    function st(t, e, n, r) {
        return {
            syntax: t,
            json: e,
            bin: n,
            util: r,
            makeMessageType(s, o, i) {
                return ze(this, s, o, i)
            },
            makeEnum: je,
            makeEnumType: Ee,
            getEnumType: Xe,
            makeExtension(s, o, i) {
                return nt(this, s, o, i)
            }
        }
    }

    function ce(t, e) {
        return e instanceof E || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e)
    }
    var Kr = {
        "google.protobuf.DoubleValue": u.DOUBLE,
        "google.protobuf.FloatValue": u.FLOAT,
        "google.protobuf.Int64Value": u.INT64,
        "google.protobuf.UInt64Value": u.UINT64,
        "google.protobuf.Int32Value": u.INT32,
        "google.protobuf.UInt32Value": u.UINT32,
        "google.protobuf.BoolValue": u.BOOL,
        "google.protobuf.StringValue": u.STRING,
        "google.protobuf.BytesValue": u.BYTES
    };
    var Y = Symbol("@bufbuild/protobuf/unknown-fields"),
        ot = {
            readUnknownFields: !0,
            readerFactory: t => new ie(t)
        },
        it = {
            writeUnknownFields: !0,
            writerFactory: () => new oe
        };

    function Zt(t) {
        return t ? Object.assign(Object.assign({}, ot), t) : ot
    }

    function en(t) {
        return t ? Object.assign(Object.assign({}, it), t) : it
    }

    function ct() {
        return {
            makeReadOptions: Zt,
            makeWriteOptions: en,
            listUnknownFields(t) {
                var e;
                return (e = t[Y]) !== null && e !== void 0 ? e : []
            },
            discardUnknownFields(t) {
                delete t[Y]
            },
            writeUnknownFields(t, e) {
                let r = t[Y];
                if (r)
                    for (let s of r) e.tag(s.no, s.wireType).raw(s.data)
            },
            onUnknownField(t, e, n, r) {
                let s = t;
                Array.isArray(s[Y]) || (s[Y] = []), s[Y].push({
                    no: e,
                    wireType: n,
                    data: r
                })
            },
            readMessage(t, e, n, r, s) {
                let o = t.getType(),
                    i = s ? e.len : e.pos + n,
                    a, c;
                for (; e.pos < i && ([a, c] = e.tag(), c != k.EndGroup);) {
                    let f = o.fields.find(a);
                    if (!f) {
                        let m = e.skip(c);
                        r.readUnknownFields && this.onUnknownField(t, a, c, m);
                        continue
                    }
                    at(t, e, f, c, r)
                }
                if (s && (c != k.EndGroup || a !== n)) throw new Error("invalid end group tag")
            },
            readField: at
        }
    }

    function at(t, e, n, r, s) {
        let {
            repeated: o,
            localName: i
        } = n;
        switch (n.oneof && (t = t[n.oneof.localName], t.case != i && delete t.value, t.case = i, i = "value"), n.kind) {
            case "scalar":
            case "enum":
                let a = n.kind == "enum" ? u.INT32 : n.T,
                    c = fe;
                if (n.kind == "scalar" && n.L > 0 && (c = nn), o) {
                    let g = t[i];
                    if (r == k.LengthDelimited && a != u.STRING && a != u.BYTES) {
                        let h = e.uint32() + e.pos;
                        for (; e.pos < h;) g.push(c(e, a))
                    } else g.push(c(e, a))
                } else t[i] = c(e, a);
                break;
            case "message":
                let f = n.T;
                o ? t[i].push(ue(e, new f, s, n)) : t[i] instanceof E ? ue(e, t[i], s, n) : (t[i] = ue(e, new f, s, n), f.fieldWrapper && !n.oneof && !n.repeated && (t[i] = f.fieldWrapper.unwrapField(t[i])));
                break;
            case "map":
                let [m, l] = tn(n, e, s);
                t[i][m] = l;
                break
        }
    }

    function ue(t, e, n, r) {
        let s = e.getType().runtime.bin,
            o = r?.delimited;
        return s.readMessage(e, t, o ? r?.no : t.uint32(), n, o), e
    }

    function tn(t, e, n) {
        let r = e.uint32(),
            s = e.pos + r,
            o, i;
        for (; e.pos < s;) {
            let [a] = e.tag();
            switch (a) {
                case 1:
                    o = fe(e, t.K);
                    break;
                case 2:
                    switch (t.V.kind) {
                        case "scalar":
                            i = fe(e, t.V.T);
                            break;
                        case "enum":
                            i = e.int32();
                            break;
                        case "message":
                            i = ue(e, new t.V.T, n, void 0);
                            break
                    }
                    break
            }
        }
        if (o === void 0) {
            let a = G(t.K, C.BIGINT);
            o = t.K == u.BOOL ? a.toString() : a
        }
        if (typeof o != "string" && typeof o != "number" && (o = o.toString()), i === void 0) switch (t.V.kind) {
            case "scalar":
                i = G(t.V.T, C.BIGINT);
                break;
            case "enum":
                i = 0;
                break;
            case "message":
                i = new t.V.T;
                break
        }
        return [o, i]
    }

    function nn(t, e) {
        let n = fe(t, e);
        return typeof n == "bigint" ? n.toString() : n
    }

    function fe(t, e) {
        switch (e) {
            case u.STRING:
                return t.string();
            case u.BOOL:
                return t.bool();
            case u.DOUBLE:
                return t.double();
            case u.FLOAT:
                return t.float();
            case u.INT32:
                return t.int32();
            case u.INT64:
                return t.int64();
            case u.UINT64:
                return t.uint64();
            case u.FIXED64:
                return t.fixed64();
            case u.BYTES:
                return t.bytes();
            case u.FIXED32:
                return t.fixed32();
            case u.SFIXED32:
                return t.sfixed32();
            case u.SFIXED64:
                return t.sfixed64();
            case u.SINT64:
                return t.sint64();
            case u.UINT32:
                return t.uint32();
            case u.SINT32:
                return t.sint32()
        }
    }

    function ut(t, e, n, r, s) {
        t.tag(n.no, k.LengthDelimited), t.fork();
        let o = r;
        switch (n.K) {
            case u.INT32:
            case u.FIXED32:
            case u.UINT32:
            case u.SFIXED32:
            case u.SINT32:
                o = Number.parseInt(r);
                break;
            case u.BOOL:
                I(r == "true" || r == "false"), o = r == "true";
                break
        }
        switch (q(t, n.K, 1, o, !0), n.V.kind) {
            case "scalar":
                q(t, n.V.T, 2, s, !0);
                break;
            case "enum":
                q(t, u.INT32, 2, s, !0);
                break;
            case "message":
                t.tag(2, k.LengthDelimited).bytes(s.toBinary(e));
                break
        }
        t.join()
    }

    function Ce(t, e, n, r) {
        let s = ce(n.T, r);
        n?.delimited ? t.tag(n.no, k.StartGroup).raw(s.toBinary(e)).tag(n.no, k.EndGroup) : t.tag(n.no, k.LengthDelimited).bytes(s.toBinary(e))
    }

    function q(t, e, n, r, s) {
        let [o, i, a] = Oe(e, r);
        (!a || s) && t.tag(n, o)[i](r)
    }

    function ft(t, e, n, r) {
        if (!r.length) return;
        t.tag(n, k.LengthDelimited).fork();
        let [, s] = Oe(e);
        for (let o = 0; o < r.length; o++) t[s](r[o]);
        t.join()
    }

    function dt() {
        return Object.assign(Object.assign({}, ct()), {
            writeField: mt,
            writeMessage(t, e, n) {
                let r = t.getType();
                for (let s of r.fields.byNumber()) {
                    let o, i = s.localName;
                    if (s.oneof) {
                        let a = t[s.oneof.localName];
                        if (a.case !== i) continue;
                        o = a.value
                    } else o = t[i];
                    mt(s, o, e, n)
                }
                return n.writeUnknownFields && this.writeUnknownFields(t, e), e
            }
        })
    }

    function mt(t, e, n, r) {
        let s = t.repeated;
        switch (t.kind) {
            case "scalar":
            case "enum":
                let o = t.kind == "enum" ? u.INT32 : t.T;
                if (s)
                    if (t.packed) ft(n, o, t.no, e);
                    else
                        for (let i of e) q(n, o, t.no, i, !0);
                else e !== void 0 && q(n, o, t.no, e, !!t.oneof || t.opt);
                break;
            case "message":
                if (s)
                    for (let i of e) Ce(n, r, t, i);
                else e !== void 0 && Ce(n, r, t, e);
                break;
            case "map":
                for (let [i, a] of Object.entries(e)) ut(n, r, t, i, a);
                break
        }
    }
    var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
        me = [];
    for (let t = 0; t < A.length; t++) me[A[t].charCodeAt(0)] = t;
    me["-".charCodeAt(0)] = A.indexOf("+");
    me["_".charCodeAt(0)] = A.indexOf("/");
    var Pe = {
        dec(t) {
            let e = t.length * 3 / 4;
            t[t.length - 2] == "=" ? e -= 2 : t[t.length - 1] == "=" && (e -= 1);
            let n = new Uint8Array(e),
                r = 0,
                s = 0,
                o, i = 0;
            for (let a = 0; a < t.length; a++) {
                if (o = me[t.charCodeAt(a)], o === void 0) switch (t[a]) {
                    case "=":
                        s = 0;
                    case `
`:
                    case "\r":
                    case "	":
                    case " ":
                        continue;
                    default:
                        throw Error("invalid base64 string.")
                }
                switch (s) {
                    case 0:
                        i = o, s = 1;
                        break;
                    case 1:
                        n[r++] = i << 2 | (o & 48) >> 4, i = o, s = 2;
                        break;
                    case 2:
                        n[r++] = (i & 15) << 4 | (o & 60) >> 2, i = o, s = 3;
                        break;
                    case 3:
                        n[r++] = (i & 3) << 6 | o, s = 0;
                        break
                }
            }
            if (s == 1) throw Error("invalid base64 string.");
            return n.subarray(0, r)
        },
        enc(t) {
            let e = "",
                n = 0,
                r, s = 0;
            for (let o = 0; o < t.length; o++) switch (r = t[o], n) {
                case 0:
                    e += A[r >> 2], s = (r & 3) << 4, n = 1;
                    break;
                case 1:
                    e += A[s | r >> 4], s = (r & 15) << 2, n = 2;
                    break;
                case 2:
                    e += A[s | r >> 6], e += A[r & 63], n = 0;
                    break
            }
            return n && (e += A[s], e += "=", n == 1 && (e += "=")), e
        }
    };

    function lt(t, e, n) {
        gt(e, t);
        let r = e.runtime.bin.makeReadOptions(n),
            s = rt(t.getType().runtime.bin.listUnknownFields(t), e.field),
            [o, i] = ae(e);
        for (let a of s) e.runtime.bin.readField(o, r.readerFactory(a.data), e.field, a.wireType, r);
        return i()
    }

    function pt(t, e, n, r) {
        gt(e, t);
        let s = e.runtime.bin.makeReadOptions(r),
            o = e.runtime.bin.makeWriteOptions(r);
        if (Ue(t, e)) {
            let f = t.getType().runtime.bin.listUnknownFields(t).filter(m => m.no != e.field.no);
            t.getType().runtime.bin.discardUnknownFields(t);
            for (let m of f) t.getType().runtime.bin.onUnknownField(t, m.no, m.wireType, m.data)
        }
        let i = o.writerFactory(),
            a = e.field;
        !a.opt && !a.repeated && (a.kind == "enum" || a.kind == "scalar") && (a = Object.assign(Object.assign({}, e.field), {
            opt: !0
        })), e.runtime.bin.writeField(a, n, i, o);
        let c = s.readerFactory(i.finish());
        for (; c.pos < c.len;) {
            let [f, m] = c.tag(), l = c.skip(m);
            t.getType().runtime.bin.onUnknownField(t, f, m, l)
        }
    }

    function Ue(t, e) {
        let n = t.getType();
        return e.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(t).find(r => r.no == e.field.no)
    }

    function gt(t, e) {
        I(t.extendee.typeName == e.getType().typeName, `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`)
    }
    var ht = {
            ignoreUnknownFields: !1
        },
        yt = {
            emitDefaultValues: !1,
            enumAsInteger: !1,
            useProtoFieldName: !1,
            prettySpaces: 0
        };

    function rn(t) {
        return t ? Object.assign(Object.assign({}, ht), t) : ht
    }

    function sn(t) {
        return t ? Object.assign(Object.assign({}, yt), t) : yt
    }

    function Tt(t, e) {
        let n = e(on, kt);
        return {
            makeReadOptions: rn,
            makeWriteOptions: sn,
            readMessage(r, s, o, i) {
                if (s == null || Array.isArray(s) || typeof s != "object") throw new Error(`cannot decode message ${r.typeName} from JSON: ${P(s)}`);
                i = i ?? new r;
                let a = new Map,
                    c = o.typeRegistry;
                for (let [f, m] of Object.entries(s)) {
                    let l = r.fields.findJsonName(f);
                    if (l) {
                        if (l.oneof) {
                            if (m === null && l.kind == "scalar") continue;
                            let g = a.get(l.oneof);
                            if (g !== void 0) throw new Error(`cannot decode message ${r.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${g}", "${f}"`);
                            a.set(l.oneof, f)
                        }
                        bt(i, m, l, o, r, t)
                    } else {
                        let g = !1;
                        if (c?.findExtension && f.startsWith("[") && f.endsWith("]")) {
                            let p = c.findExtension(f.substring(1, f.length - 1));
                            if (p && p.extendee.typeName == r.typeName) {
                                g = !0;
                                let [h, R] = ae(p);
                                bt(h, m, p.field, o, p, !0), pt(i, p, R(), o)
                            }
                        }
                        if (!g && !o.ignoreUnknownFields) throw new Error(`cannot decode message ${r.typeName} from JSON: key "${f}" is unknown`)
                    }
                }
                return i
            },
            writeMessage(r, s) {
                let o = r.getType(),
                    i = {},
                    a;
                try {
                    for (let f of o.fields.byMember()) {
                        let m;
                        if (f.kind == "oneof") {
                            let l = r[f.localName];
                            if (l.value === void 0) continue;
                            if (a = f.findField(l.case), !a) throw "oneof case not found: " + l.case;
                            m = n(a, l.value, s)
                        } else a = f, m = n(a, r[a.localName], s);
                        m !== void 0 && (i[s.useProtoFieldName ? a.name : a.jsonName] = m)
                    }
                    let c = s.typeRegistry;
                    if (c?.findExtensionFor)
                        for (let f of o.runtime.bin.listUnknownFields(r)) {
                            let m = c.findExtensionFor(o.typeName, f.no);
                            if (m && Ue(r, m)) {
                                let l = lt(r, m, s),
                                    g = n(m.field, l, s);
                                g !== void 0 && (i[m.field.jsonName] = g)
                            }
                        }
                } catch (c) {
                    let f = a ? `cannot encode field ${o.typeName}.${a.name} to JSON` : `cannot encode message ${o.typeName} to JSON`,
                        m = c instanceof Error ? c.message : String(c);
                    throw new Error(f + (m.length > 0 ? `: ${m}` : ""))
                }
                return i
            },
            readScalar: (r, s, o) => H(r, s, o, t),
            writeScalar: kt,
            debug: P
        }
    }

    function P(t) {
        if (t === null) return "null";
        switch (typeof t) {
            case "object":
                return Array.isArray(t) ? "array" : "object";
            case "string":
                return t.length > 100 ? "string" : `"${t.split('"').join('\\"')}"`;
            default:
                return String(t)
        }
    }

    function bt(t, e, n, r, s, o) {
        let i = n.localName;
        if (n.oneof) {
            if (e === null && n.kind == "scalar") return;
            t = t[n.oneof.localName] = {
                case: i
            }, i = "value"
        }
        if (n.repeated) {
            if (e === null) return;
            if (!Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${P(e)}`);
            let a = t[i];
            for (let c of e) {
                if (c === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${P(c)}`);
                let f;
                switch (n.kind) {
                    case "message":
                        f = n.T.fromJson(c, r);
                        break;
                    case "enum":
                        if (f = Ae(n.T, c, r.ignoreUnknownFields, !0), f === void 0) continue;
                        break;
                    case "scalar":
                        try {
                            f = H(n.T, c, n.L, !0)
                        } catch (m) {
                            let l = `cannot decode field ${s.typeName}.${n.name} from JSON: ${P(c)}`;
                            throw m instanceof Error && m.message.length > 0 && (l += `: ${m.message}`), new Error(l)
                        }
                        break
                }
                a.push(f)
            }
        } else if (n.kind == "map") {
            if (e === null) return;
            if (typeof e != "object" || Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${P(e)}`);
            let a = t[i];
            for (let [c, f] of Object.entries(e)) {
                if (f === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: map value null`);
                let m;
                switch (n.V.kind) {
                    case "message":
                        m = n.V.T.fromJson(f, r);
                        break;
                    case "enum":
                        if (m = Ae(n.V.T, f, r.ignoreUnknownFields, !0), m === void 0) continue;
                        break;
                    case "scalar":
                        try {
                            m = H(n.V.T, f, C.BIGINT, !0)
                        } catch (l) {
                            let g = `cannot decode map value for field ${s.typeName}.${n.name} from JSON: ${P(e)}`;
                            throw l instanceof Error && l.message.length > 0 && (g += `: ${l.message}`), new Error(g)
                        }
                        break
                }
                try {
                    a[H(n.K, n.K == u.BOOL ? c == "true" ? !0 : c == "false" ? !1 : c : c, C.BIGINT, !0).toString()] = m
                } catch (l) {
                    let g = `cannot decode map key for field ${s.typeName}.${n.name} from JSON: ${P(e)}`;
                    throw l instanceof Error && l.message.length > 0 && (g += `: ${l.message}`), new Error(g)
                }
            }
        } else switch (n.kind) {
            case "message":
                let a = n.T;
                if (e === null && a.typeName != "google.protobuf.Value") {
                    if (n.oneof) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: null is invalid for oneof field`);
                    return
                }
                t[i] instanceof E ? t[i].fromJson(e, r) : (t[i] = a.fromJson(e, r), a.fieldWrapper && !n.oneof && (t[i] = a.fieldWrapper.unwrapField(t[i])));
                break;
            case "enum":
                let c = Ae(n.T, e, r.ignoreUnknownFields, o);
                c !== void 0 && (t[i] = c);
                break;
            case "scalar":
                try {
                    t[i] = H(n.T, e, n.L, o)
                } catch (f) {
                    let m = `cannot decode field ${s.typeName}.${n.name} from JSON: ${P(e)}`;
                    throw f instanceof Error && f.message.length > 0 && (m += `: ${f.message}`), new Error(m)
                }
                break
        }
    }

    function H(t, e, n, r) {
        switch (t) {
            case u.DOUBLE:
            case u.FLOAT:
                if (e === null) return r ? 0 : void 0;
                if (e === "NaN") return Number.NaN;
                if (e === "Infinity") return Number.POSITIVE_INFINITY;
                if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
                if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number") break;
                let s = Number(e);
                if (Number.isNaN(s) || !Number.isFinite(s)) break;
                return t == u.FLOAT && ne(s), s;
            case u.INT32:
            case u.FIXED32:
            case u.SFIXED32:
            case u.SINT32:
            case u.UINT32:
                if (e === null) return r ? 0 : void 0;
                let o;
                if (typeof e == "number" ? o = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (o = Number(e)), o === void 0) break;
                return t == u.UINT32 ? z(o) : _(o), o;
            case u.INT64:
            case u.SFIXED64:
            case u.SINT64:
                if (e === null) return r ? S.zero : void 0;
                if (typeof e != "number" && typeof e != "string") break;
                let i = S.parse(e);
                return n ? i.toString() : i;
            case u.FIXED64:
            case u.UINT64:
                if (e === null) return r ? S.zero : void 0;
                if (typeof e != "number" && typeof e != "string") break;
                let a = S.uParse(e);
                return n ? a.toString() : a;
            case u.BOOL:
                if (e === null) return r ? !1 : void 0;
                if (typeof e != "boolean") break;
                return e;
            case u.STRING:
                if (e === null) return r ? "" : void 0;
                if (typeof e != "string") break;
                try {
                    encodeURIComponent(e)
                } catch {
                    throw new Error("invalid UTF8")
                }
                return e;
            case u.BYTES:
                if (e === null) return r ? new Uint8Array(0) : void 0;
                if (e === "") return new Uint8Array(0);
                if (typeof e != "string") break;
                return Pe.dec(e)
        }
        throw new Error
    }

    function Ae(t, e, n, r) {
        if (e === null) return r ? t.values[0].no : void 0;
        switch (typeof e) {
            case "number":
                if (Number.isInteger(e)) return e;
                break;
            case "string":
                let s = t.findName(e);
                if (s || n) return s?.no;
                break
        }
        throw new Error(`cannot decode enum ${t.typeName} from JSON: ${P(e)}`)
    }

    function on(t, e, n, r) {
        var s;
        if (e === void 0) return e;
        if (!n && t.values[0].no === e) return;
        if (r) return e;
        if (t.typeName == "google.protobuf.NullValue") return null;
        let o = t.findNumber(e);
        return (s = o?.name) !== null && s !== void 0 ? s : e
    }

    function kt(t, e, n) {
        if (e !== void 0) switch (t) {
            case u.INT32:
            case u.SFIXED32:
            case u.SINT32:
            case u.FIXED32:
            case u.UINT32:
                return I(typeof e == "number"), e != 0 || n ? e : void 0;
            case u.FLOAT:
            case u.DOUBLE:
                return I(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e !== 0 || n ? e : void 0;
            case u.STRING:
                return I(typeof e == "string"), e.length > 0 || n ? e : void 0;
            case u.BOOL:
                return I(typeof e == "boolean"), e || n ? e : void 0;
            case u.UINT64:
            case u.FIXED64:
            case u.INT64:
            case u.SFIXED64:
            case u.SINT64:
                return I(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), n || e != 0 ? e.toString(10) : void 0;
            case u.BYTES:
                return I(e instanceof Uint8Array), n || e.byteLength > 0 ? Pe.enc(e) : void 0
        }
    }

    function wt() {
        return Tt(!0, (t, e) => function(r, s, o) {
            if (r.kind == "map") {
                let i = {};
                switch (r.V.kind) {
                    case "scalar":
                        for (let [c, f] of Object.entries(s)) {
                            let m = e(r.V.T, f, !0);
                            I(m !== void 0), i[c.toString()] = m
                        }
                        break;
                    case "message":
                        for (let [c, f] of Object.entries(s)) i[c.toString()] = f.toJson(o);
                        break;
                    case "enum":
                        let a = r.V.T;
                        for (let [c, f] of Object.entries(s)) {
                            I(f === void 0 || typeof f == "number");
                            let m = t(a, f, !0, o.enumAsInteger);
                            I(m !== void 0), i[c.toString()] = m
                        }
                        break
                }
                return o.emitDefaultValues || Object.keys(i).length > 0 ? i : void 0
            } else if (r.repeated) {
                let i = [];
                switch (r.kind) {
                    case "scalar":
                        for (let a = 0; a < s.length; a++) i.push(e(r.T, s[a], !0));
                        break;
                    case "enum":
                        for (let a = 0; a < s.length; a++) i.push(t(r.T, s[a], !0, o.enumAsInteger));
                        break;
                    case "message":
                        for (let a = 0; a < s.length; a++) i.push(s[a].toJson(o));
                        break
                }
                return o.emitDefaultValues || i.length > 0 ? i : void 0
            } else {
                if (s === void 0) return;
                switch (r.kind) {
                    case "scalar":
                        return e(r.T, s, !!r.oneof || r.opt || o.emitDefaultValues);
                    case "enum":
                        return t(r.T, s, !!r.oneof || r.opt || o.emitDefaultValues, o.enumAsInteger);
                    case "message":
                        return ce(r.T, s).toJson(o)
                }
            }
        })
    }

    function xt() {
        return {
            setEnumType: Se,
            initPartial(t, e) {
                if (t === void 0) return;
                let n = e.getType();
                for (let r of n.fields.byMember()) {
                    let s = r.localName,
                        o = e,
                        i = t;
                    if (i[s] !== void 0) switch (r.kind) {
                        case "oneof":
                            let a = i[s].case;
                            if (a === void 0) continue;
                            let c = r.findField(a),
                                f = i[s].value;
                            c && c.kind == "message" && !(f instanceof c.T) ? f = new c.T(f) : c && c.kind === "scalar" && c.T === u.BYTES && (f = Q(f)), o[s] = {
                                case: a,
                                value: f
                            };
                            break;
                        case "scalar":
                        case "enum":
                            let m = i[s];
                            r.T === u.BYTES && (m = r.repeated ? m.map(Q) : Q(m)), o[s] = m;
                            break;
                        case "map":
                            switch (r.V.kind) {
                                case "scalar":
                                case "enum":
                                    if (r.V.T === u.BYTES)
                                        for (let [p, h] of Object.entries(i[s])) o[s][p] = Q(h);
                                    else Object.assign(o[s], i[s]);
                                    break;
                                case "message":
                                    let g = r.V.T;
                                    for (let p of Object.keys(i[s])) {
                                        let h = i[s][p];
                                        g.fieldWrapper || (h = new g(h)), o[s][p] = h
                                    }
                                    break
                            }
                            break;
                        case "message":
                            let l = r.T;
                            if (r.repeated) o[s] = i[s].map(g => g instanceof l ? g : new l(g));
                            else if (i[s] !== void 0) {
                                let g = i[s];
                                l.fieldWrapper ? l.typeName === "google.protobuf.BytesValue" ? o[s] = Q(g) : o[s] = g : o[s] = g instanceof l ? g : new l(g)
                            }
                            break
                    }
                }
            },
            equals(t, e, n) {
                return e === n ? !0 : !e || !n ? !1 : t.fields.byMember().every(r => {
                    let s = e[r.localName],
                        o = n[r.localName];
                    if (r.repeated) {
                        if (s.length !== o.length) return !1;
                        switch (r.kind) {
                            case "message":
                                return s.every((i, a) => r.T.equals(i, o[a]));
                            case "scalar":
                                return s.every((i, a) => U(r.T, i, o[a]));
                            case "enum":
                                return s.every((i, a) => U(u.INT32, i, o[a]))
                        }
                        throw new Error(`repeated cannot contain ${r.kind}`)
                    }
                    switch (r.kind) {
                        case "message":
                            return r.T.equals(s, o);
                        case "enum":
                            return U(u.INT32, s, o);
                        case "scalar":
                            return U(r.T, s, o);
                        case "oneof":
                            if (s.case !== o.case) return !1;
                            let i = r.findField(s.case);
                            if (i === void 0) return !0;
                            switch (i.kind) {
                                case "message":
                                    return i.T.equals(s.value, o.value);
                                case "enum":
                                    return U(u.INT32, s.value, o.value);
                                case "scalar":
                                    return U(i.T, s.value, o.value)
                            }
                            throw new Error(`oneof cannot contain ${i.kind}`);
                        case "map":
                            let a = Object.keys(s).concat(Object.keys(o));
                            switch (r.V.kind) {
                                case "message":
                                    let c = r.V.T;
                                    return a.every(m => c.equals(s[m], o[m]));
                                case "enum":
                                    return a.every(m => U(u.INT32, s[m], o[m]));
                                case "scalar":
                                    let f = r.V.T;
                                    return a.every(m => U(f, s[m], o[m]))
                            }
                            break
                    }
                })
            },
            clone(t) {
                let e = t.getType(),
                    n = new e,
                    r = n;
                for (let s of e.fields.byMember()) {
                    let o = t[s.localName],
                        i;
                    if (s.repeated) i = o.map(de);
                    else if (s.kind == "map") {
                        i = r[s.localName];
                        for (let [a, c] of Object.entries(o)) i[a] = de(c)
                    } else s.kind == "oneof" ? i = s.findField(o.case) ? {
                        case: o.case,
                        value: de(o.value)
                    } : {
                        case: void 0
                    } : i = de(o);
                    r[s.localName] = i
                }
                return n
            }
        }
    }

    function de(t) {
        if (t === void 0) return t;
        if (t instanceof E) return t.clone();
        if (t instanceof Uint8Array) {
            let e = new Uint8Array(t.byteLength);
            return e.set(t), e
        }
        return t
    }

    function Q(t) {
        return t instanceof Uint8Array ? t : new Uint8Array(t)
    }
    var le = class {
        constructor(e, n) {
            this._fields = e, this._normalizer = n
        }
        findJsonName(e) {
            if (!this.jsonNames) {
                let n = {};
                for (let r of this.list()) n[r.jsonName] = n[r.name] = r;
                this.jsonNames = n
            }
            return this.jsonNames[e]
        }
        find(e) {
            if (!this.numbers) {
                let n = {};
                for (let r of this.list()) n[r.no] = r;
                this.numbers = n
            }
            return this.numbers[e]
        }
        list() {
            return this.all || (this.all = this._normalizer(this._fields)), this.all
        }
        byNumber() {
            return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, n) => e.no - n.no)), this.numbersAsc
        }
        byMember() {
            if (!this.members) {
                this.members = [];
                let e = this.members,
                    n;
                for (let r of this.list()) r.oneof ? r.oneof !== n && (n = r.oneof, e.push(n)) : e.push(r)
            }
            return this.members
        }
    };

    function ve(t, e) {
        let n = St(t);
        return e ? n : fn(un(n))
    }

    function It(t) {
        return ve(t, !1)
    }
    var Nt = St;

    function St(t) {
        let e = !1,
            n = [];
        for (let r = 0; r < t.length; r++) {
            let s = t.charAt(r);
            switch (s) {
                case "_":
                    e = !0;
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    n.push(s), e = !1;
                    break;
                default:
                    e && (e = !1, s = s.toUpperCase()), n.push(s);
                    break
            }
        }
        return n.join("")
    }
    var an = new Set(["constructor", "toString", "toJSON", "valueOf"]),
        cn = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]),
        Et = t => `${t}$`,
        un = t => cn.has(t) ? Et(t) : t,
        fn = t => an.has(t) ? Et(t) : t;
    var pe = class {
        constructor(e) {
            this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = It(e)
        }
        addField(e) {
            I(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e)
        }
        findField(e) {
            if (!this._lookup) {
                this._lookup = Object.create(null);
                for (let n = 0; n < this.fields.length; n++) this._lookup[this.fields[n].localName] = this.fields[n]
            }
            return this._lookup[e]
        }
    };
    var d = st("proto3", wt(), dt(), Object.assign(Object.assign({}, xt()), {
        newFieldList(t) {
            return new le(t, mn)
        },
        initFields(t) {
            for (let e of t.getType().fields.byMember()) {
                if (e.opt) continue;
                let n = e.localName,
                    r = t;
                if (e.repeated) {
                    r[n] = [];
                    continue
                }
                switch (e.kind) {
                    case "oneof":
                        r[n] = {
                            case: void 0
                        };
                        break;
                    case "enum":
                        r[n] = 0;
                        break;
                    case "map":
                        r[n] = {};
                        break;
                    case "scalar":
                        r[n] = G(e.T, e.L);
                        break;
                    case "message":
                        break
                }
            }
        }
    }));

    function mn(t) {
        var e, n, r, s;
        let o = [],
            i;
        for (let a of typeof t == "function" ? t() : t) {
            let c = a;
            if (c.localName = ve(a.name, a.oneof !== void 0), c.jsonName = (e = a.jsonName) !== null && e !== void 0 ? e : Nt(a.name), c.repeated = (n = a.repeated) !== null && n !== void 0 ? n : !1, a.kind == "scalar" && (c.L = (r = a.L) !== null && r !== void 0 ? r : C.BIGINT), a.oneof !== void 0) {
                let f = typeof a.oneof == "string" ? a.oneof : a.oneof.name;
                (!i || i.name != f) && (i = new pe(f)), c.oneof = i, i.addField(c)
            }
            a.kind == "message" && (c.delimited = !1), c.packed = (s = a.packed) !== null && s !== void 0 ? s : a.kind == "enum" || a.kind == "scalar" && a.T != u.BYTES && a.T != u.STRING, o.push(c)
        }
        return o
    }
    var Rt = d.makeMessageType("youtube.response.browse.Browse", () => [{
            no: 1,
            name: "responseContext",
            kind: "message",
            T: dn
        }, {
            no: 9,
            name: "contents",
            kind: "message",
            T: $
        }, {
            no: 10,
            name: "onResponseReceivedActions",
            kind: "message",
            T: $
        }]),
        dn = d.makeMessageType("youtube.response.browse.ResponseContext", () => [{
            no: 6,
            name: "serviceTrackingParams",
            kind: "message",
            T: ln,
            repeated: !0
        }]),
        ln = d.makeMessageType("youtube.response.browse.ServiceTrackingParams", () => [{
            no: 1,
            name: "service",
            kind: "scalar",
            T: 5
        }, {
            no: 2,
            name: "params",
            kind: "message",
            T: pn,
            repeated: !0
        }]),
        pn = d.makeMessageType("youtube.response.browse.Params", () => [{
            no: 1,
            name: "key",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }]),
        $ = d.makeMessageType("youtube.response.browse.Contents", () => [{
            no: 58173949,
            name: "browseResultsRenderer",
            kind: "message",
            T: gn
        }, {
            no: 153515154,
            name: "videoWithContextRenderer",
            kind: "message",
            T: Mt
        }, {
            no: 49399797,
            name: "richGridRenderer",
            kind: "message",
            T: Le
        }]),
        gn = d.makeMessageType("youtube.response.browse.BrowseResultsRenderer", () => [{
            no: 1,
            name: "tabs",
            kind: "message",
            T: hn,
            repeated: !0
        }]),
        hn = d.makeMessageType("youtube.response.browse.Tab", () => [{
            no: 58174010,
            name: "tabRenderer",
            kind: "message",
            T: yn
        }]),
        yn = d.makeMessageType("youtube.response.browse.TabRenderer", () => [{
            no: 4,
            name: "contents",
            kind: "message",
            T: $
        }]),
        Le = d.makeMessageType("youtube.response.browse.RichGridRenderer", () => [{
            no: 1,
            name: "richGridContents",
            kind: "message",
            T: bn,
            repeated: !0
        }]),
        bn = d.makeMessageType("youtube.response.browse.RichGridContent", () => [{
            no: 50195462,
            name: "richItemRenderer",
            kind: "message",
            T: De
        }, {
            no: 51845067,
            name: "richSectionRenderer",
            kind: "message",
            T: Fn
        }, {
            no: 221496734,
            name: "musicDescriptionShelfRenderer",
            kind: "message",
            T: Mn
        }]),
        De = d.makeMessageType("youtube.response.browse.RichItemRenderer", () => [{
            no: 1,
            name: "richItemContent",
            kind: "message",
            T: Bt,
            repeated: !0
        }]),
        Bt = d.makeMessageType("youtube.response.browse.RichItemContent", () => [{
            no: 153515154,
            name: "videoWithContextRenderer",
            kind: "message",
            T: Mt
        }]),
        Mt = d.makeMessageType("youtube.response.browse.VideoWithContextRenderer", () => [{
            no: 172660663,
            name: "videoRendererContent",
            kind: "message",
            T: kn
        }]),
        kn = d.makeMessageType("youtube.response.browse.VideoRendererContent", () => [{
            no: 1,
            name: "videoInfo",
            kind: "message",
            T: Tn
        }, {
            no: 2,
            name: "renderInfo",
            kind: "message",
            T: Sn
        }]),
        Tn = d.makeMessageType("youtube.response.browse.VideoInfo", () => [{
            no: 168777401,
            name: "videoContext",
            kind: "message",
            T: wn
        }]),
        wn = d.makeMessageType("youtube.response.browse.VideoContext", () => [{
            no: 5,
            name: "videoContent",
            kind: "message",
            T: xn
        }]),
        xn = d.makeMessageType("youtube.response.browse.VideoContent", () => [{
            no: 465160965,
            name: "timedLyricsRender",
            kind: "message",
            T: In
        }]),
        In = d.makeMessageType("youtube.response.browse.TimedLyricsRender", () => [{
            no: 4,
            name: "timedLyricsContent",
            kind: "message",
            T: Nn
        }]),
        Nn = d.makeMessageType("youtube.response.browse.TimedLyricsContent", () => [{
            no: 1,
            name: "runs",
            kind: "message",
            T: Ot,
            repeated: !0
        }, {
            no: 2,
            name: "footerLabel",
            kind: "scalar",
            T: 9
        }]),
        Sn = d.makeMessageType("youtube.response.browse.RenderInfo", () => [{
            no: 183314536,
            name: "layoutRender",
            kind: "message",
            T: En
        }]),
        En = d.makeMessageType("youtube.response.browse.LayoutRender", () => [{
            no: 1,
            name: "eml",
            kind: "scalar",
            T: 9
        }]),
        Fn = d.makeMessageType("youtube.response.browse.RichSectionRenderer", () => [{
            no: 5,
            name: "richSectionContent",
            kind: "message",
            T: Rn
        }]),
        Rn = d.makeMessageType("youtube.response.browse.RichSectionContent", () => [{
            no: 51431404,
            name: "reelShelfRenderer",
            kind: "message",
            T: Bn
        }]),
        Bn = d.makeMessageType("youtube.response.browse.ReelShelfRenderer", () => [{
            no: 1,
            name: "richItemContent",
            kind: "message",
            T: Bt,
            repeated: !0
        }]),
        Mn = d.makeMessageType("youtube.response.browse.MusicDescriptionShelfRenderer", () => [{
            no: 3,
            name: "description",
            kind: "message",
            T: Ft
        }, {
            no: 10,
            name: "footer",
            kind: "message",
            T: Ft
        }]),
        Ft = d.makeMessageType("youtube.response.browse.Label", () => [{
            no: 1,
            name: "runs",
            kind: "message",
            T: Ot,
            repeated: !0
        }]),
        Ot = d.makeMessageType("youtube.response.browse.Run", () => [{
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }]);
    var ge = d.makeMessageType("youtube.response.next.Next", () => [{
            no: 7,
            name: "Contents",
            kind: "message",
            T: On
        }, {
            no: 8,
            name: "onResponseReceivedActions",
            kind: "message",
            T: $
        }]),
        On = d.makeMessageType("youtube.response.next.Contents", () => [{
            no: 51779735,
            name: "NextResults",
            kind: "message",
            T: Cn
        }]),
        Cn = d.makeMessageType("youtube.response.next.NextResults", () => [{
            no: 1,
            name: "Contents",
            kind: "message",
            T: $
        }]);
    var Ct = d.makeMessageType("youtube.response.search.Search", () => [{
            no: 4,
            name: "contents",
            kind: "message",
            T: $
        }, {
            no: 7,
            name: "onResponseReceivedCommands",
            kind: "message",
            T: Pn
        }]),
        Pn = d.makeMessageType("youtube.response.search.OnResponseReceivedCommands", () => [{
            no: 50195462,
            name: "richItemRenderer",
            kind: "message",
            T: De
        }, {
            no: 49399797,
            name: "appendContinuationItemsAction",
            kind: "message",
            T: Le
        }]);
    var Pt = d.makeMessageType("youtube.response.shorts.Shorts", () => [{
            no: 2,
            name: "entries",
            kind: "message",
            T: Un,
            repeated: !0
        }]),
        Un = d.makeMessageType("youtube.response.shorts.Entry", () => [{
            no: 1,
            name: "command",
            kind: "message",
            T: An
        }]),
        An = d.makeMessageType("youtube.response.shorts.Command", () => [{
            no: 139608561,
            name: "reelWatchEndpoint",
            kind: "message",
            T: vn
        }]),
        vn = d.makeMessageType("youtube.response.shorts.ReelWatchEndpoint", () => [{
            no: 8,
            name: "overlay",
            kind: "message",
            T: Ln
        }]),
        Ln = d.makeMessageType("youtube.response.shorts.Overlay", () => [{
            no: 139970731,
            name: "reelPlayerOverlayRenderer",
            kind: "message",
            T: Dn
        }]),
        Dn = d.makeMessageType("youtube.response.shorts.ReelPlayerOverlayRenderer", () => [{
            no: 12,
            name: "style",
            kind: "scalar",
            T: 5
        }]);
    var vt = d.makeMessageType("youtube.response.browse.Guide", () => [{
            no: 4,
            name: "items4",
            kind: "message",
            T: Ut,
            repeated: !0
        }, {
            no: 6,
            name: "items6",
            kind: "message",
            T: Ut,
            repeated: !0
        }]),
        Ut = d.makeMessageType("youtube.response.browse.Item", () => [{
            no: 117866661,
            name: "guideSectionRenderer",
            kind: "message",
            T: $n
        }]),
        $n = d.makeMessageType("youtube.response.browse.GuideSectionRenderer", () => [{
            no: 1,
            name: "rendererItems",
            kind: "message",
            T: Vn,
            repeated: !0
        }]),
        Vn = d.makeMessageType("youtube.response.browse.RendererItem", () => [{
            no: 318370163,
            name: "iconRender",
            kind: "message",
            T: At
        }, {
            no: 117501096,
            name: "labelRender",
            kind: "message",
            T: At
        }]),
        At = d.makeMessageType("youtube.response.browse.guideEntryRenderer", () => [{
            no: 1,
            name: "browseId",
            kind: "scalar",
            T: 9
        }]);
    var he = d.makeMessageType("youtube.response.player.Player", () => [{
            no: 7,
            name: "adPlacements",
            kind: "message",
            T: Jn,
            repeated: !0
        }, {
            no: 2,
            name: "playabilityStatus",
            kind: "message",
            T: _n
        }, {
            no: 9,
            name: "playbackTracking",
            kind: "message",
            T: Xn
        }, {
            no: 10,
            name: "captions",
            kind: "message",
            T: jn
        }]),
        Jn = d.makeMessageType("youtube.response.player.AdPlacement", () => [{
            no: 84813246,
            name: "adPlacementRenderer",
            kind: "message",
            T: Gn
        }]),
        Gn = d.makeMessageType("youtube.response.player.AdPlacementRenderer", () => [{
            no: 4,
            name: "params",
            kind: "scalar",
            T: 9
        }]),
        _n = d.makeMessageType("youtube.response.player.PlayabilityStatus", () => [{
            no: 21,
            name: "miniPlayer",
            kind: "message",
            T: Yn
        }, {
            no: 11,
            name: "backgroundPlayer",
            kind: "message",
            T: $e
        }]),
        Yn = d.makeMessageType("youtube.response.player.MiniPlayer", () => [{
            no: 151635310,
            name: "miniPlayerRender",
            kind: "message",
            T: qn
        }]),
        $e = d.makeMessageType("youtube.response.player.BackgroundPlayer", () => [{
            no: 64657230,
            name: "backgroundPlayerRender",
            kind: "message",
            T: Wn
        }]),
        qn = d.makeMessageType("youtube.response.player.MiniPlayerRender", () => [{
            no: 1,
            name: "active",
            kind: "scalar",
            T: 8
        }]),
        Wn = d.makeMessageType("youtube.response.player.BackgroundPlayerRender", () => [{
            no: 1,
            name: "active",
            kind: "scalar",
            T: 8
        }]),
        Xn = d.makeMessageType("youtube.response.player.PlaybackTracking", () => [{
            no: 1,
            name: "videostatsPlaybackUrl",
            kind: "message",
            T: V
        }, {
            no: 2,
            name: "videostatsDelayplayUrl",
            kind: "message",
            T: V
        }, {
            no: 3,
            name: "videostatsWatchtimeUrl",
            kind: "message",
            T: V
        }, {
            no: 4,
            name: "ptrackingUrl",
            kind: "message",
            T: V
        }, {
            no: 5,
            name: "qoeUrl",
            kind: "message",
            T: V
        }, {
            no: 13,
            name: "atrUrl",
            kind: "message",
            T: V
        }, {
            no: 15,
            name: "videostatsEngageUrl",
            kind: "message",
            T: V
        }, {
            no: 18,
            name: "pageadViewthroughconversion",
            kind: "message",
            T: V
        }]),
        V = d.makeMessageType("youtube.response.player.Tracking", () => [{
            no: 1,
            name: "baseUrl",
            kind: "scalar",
            T: 9
        }]),
        jn = d.makeMessageType("youtube.response.player.Captions", () => [{
            no: 51621377,
            name: "playerCaptionsTrackListRenderer",
            jsonName: "playerCaptionsTracklistRenderer",
            kind: "message",
            T: Kn
        }]),
        Kn = d.makeMessageType("youtube.response.player.PlayerCaptionsTrackListRenderer", () => [{
            no: 1,
            name: "captionTracks",
            kind: "message",
            T: Ve,
            repeated: !0
        }, {
            no: 2,
            name: "audioTracks",
            kind: "message",
            T: zn,
            repeated: !0
        }, {
            no: 3,
            name: "translationLanguages",
            kind: "message",
            T: Je,
            repeated: !0
        }, {
            no: 4,
            name: "defaultAudioTrackIndex",
            kind: "scalar",
            T: 5,
            opt: !0
        }, {
            no: 6,
            name: "defaultCaptionTrackIndex",
            kind: "scalar",
            T: 5,
            opt: !0
        }]),
        Ve = d.makeMessageType("youtube.response.player.CaptionTrack", () => [{
            no: 1,
            name: "baseUrl",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "name",
            kind: "message",
            T: Lt
        }, {
            no: 3,
            name: "vssId",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "languageCode",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "kind",
            kind: "scalar",
            T: 9,
            opt: !0
        }, {
            no: 6,
            name: "rtl",
            kind: "scalar",
            T: 8,
            opt: !0
        }, {
            no: 7,
            name: "isTranslatable",
            kind: "scalar",
            T: 8
        }]),
        zn = d.makeMessageType("youtube.response.player.AudioTrack", () => [{
            no: 2,
            name: "captionTrackIndices",
            kind: "scalar",
            T: 5,
            repeated: !0,
            packed: !1
        }, {
            no: 3,
            name: "defaultCaptionTrackIndex",
            kind: "scalar",
            T: 5,
            opt: !0
        }, {
            no: 4,
            name: "forcedCaptionTrackIndex",
            kind: "scalar",
            T: 5,
            opt: !0
        }, {
            no: 5,
            name: "visibility",
            kind: "scalar",
            T: 5,
            opt: !0
        }, {
            no: 6,
            name: "hasDefaultTrack",
            kind: "scalar",
            T: 8,
            opt: !0
        }, {
            no: 7,
            name: "hasForcedTrack",
            kind: "scalar",
            T: 8,
            opt: !0
        }, {
            no: 8,
            name: "audioTrackId",
            kind: "scalar",
            T: 9,
            opt: !0
        }, {
            no: 11,
            name: "captionsInitialState",
            kind: "scalar",
            T: 5,
            opt: !0
        }]),
        Je = d.makeMessageType("youtube.response.player.TranslationLanguage", () => [{
            no: 1,
            name: "languageCode",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "languageName",
            kind: "message",
            T: Lt
        }]),
        Lt = d.makeMessageType("youtube.response.player.Name", () => [{
            no: 1,
            name: "runs",
            kind: "message",
            T: Hn,
            repeated: !0
        }]),
        Hn = d.makeMessageType("youtube.response.player.Name.Run", () => [{
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }], {
            localName: "Name_Run"
        });
    var $t = d.makeMessageType("youtube.response.setting.Setting", () => [{
            no: 6,
            name: "settingItems",
            kind: "message",
            T: Ge,
            repeated: !0
        }, {
            no: 10,
            name: "trackingParams",
            kind: "message",
            T: ye
        }]),
        Ge = d.makeMessageType("youtube.response.setting.SettingItem", () => [{
            no: 88478200,
            name: "settingCategoryEntryRenderer",
            kind: "message",
            T: Zn
        }, {
            no: 66930374,
            name: "settingCategoryCollectionRenderer",
            kind: "message",
            T: er
        }]),
        ye = d.makeMessageType("youtube.response.setting.TrackingParams", () => [{
            no: 1,
            name: "f1",
            kind: "scalar",
            T: 5
        }, {
            no: 2,
            name: "f2",
            kind: "scalar",
            T: 5
        }, {
            no: 3,
            name: "f3",
            kind: "scalar",
            T: 5
        }, {
            no: 4,
            name: "timeInfo",
            kind: "message",
            T: Qn
        }]),
        Qn = d.makeMessageType("youtube.response.setting.TimeInfo", () => [{
            no: 1,
            name: "timestamp",
            kind: "scalar",
            T: 4,
            L: 1
        }, {
            no: 2,
            name: "f2",
            kind: "scalar",
            T: 7
        }, {
            no: 3,
            name: "f3",
            kind: "scalar",
            T: 7
        }]),
        Zn = d.makeMessageType("youtube.response.setting.SettingCategoryEntryRenderer", () => [{
            no: 2,
            name: "f2",
            kind: "scalar",
            T: 5
        }, {
            no: 3,
            name: "f3",
            kind: "scalar",
            T: 5
        }, {
            no: 5,
            name: "trackingParams",
            kind: "message",
            T: ye
        }, {
            no: 6,
            name: "f6",
            kind: "scalar",
            T: 5
        }, {
            no: 7,
            name: "f7",
            kind: "scalar",
            T: 5
        }, {
            no: 8,
            name: "f8",
            kind: "scalar",
            T: 5
        }, {
            no: 9,
            name: "f9",
            kind: "scalar",
            T: 5
        }, {
            no: 10,
            name: "f10",
            kind: "scalar",
            T: 5
        }, {
            no: 12,
            name: "f12",
            kind: "scalar",
            T: 5
        }]),
        er = d.makeMessageType("youtube.response.setting.SettingCategoryCollectionRenderer", () => [{
            no: 3,
            name: "subSettings",
            kind: "message",
            T: _e,
            repeated: !0
        }, {
            no: 4,
            name: "categoryId",
            kind: "scalar",
            T: 5
        }]),
        _e = d.makeMessageType("youtube.response.setting.SubSetting", () => [{
            no: 61331416,
            name: "settingBooleanRenderer",
            kind: "message",
            T: tr
        }]),
        tr = d.makeMessageType("youtube.response.setting.SettingBooleanRenderer", () => [{
            no: 5,
            name: "enableServiceEndpoint",
            kind: "message",
            T: Dt
        }, {
            no: 6,
            name: "disableServiceEndpoint",
            kind: "message",
            T: Dt
        }, {
            no: 13,
            name: "clickTrackingParams",
            kind: "message",
            T: ye
        }, {
            no: 15,
            name: "itemId",
            kind: "scalar",
            T: 5
        }]),
        Dt = d.makeMessageType("youtube.response.setting.ServiceEndpoint", () => [{
            no: 2,
            name: "trackingParams",
            kind: "message",
            T: ye
        }, {
            no: 81212182,
            name: "setClientSettingEndpoint",
            kind: "message",
            T: nr
        }]),
        nr = d.makeMessageType("youtube.response.setting.SetClientSettingEndpoint", () => [{
            no: 1,
            name: "settingDatas",
            kind: "message",
            T: rr
        }]),
        rr = d.makeMessageType("youtube.response.setting.SettingDatas", () => [{
            no: 1,
            name: "clientSettingEnum",
            kind: "message",
            T: sr
        }, {
            no: 3,
            name: "boolValue",
            kind: "scalar",
            T: 8
        }]),
        sr = d.makeMessageType("youtube.response.setting.ClientSettingEnum", () => [{
            no: 1,
            name: "item",
            kind: "scalar",
            T: 5
        }]);
    var Vt = d.makeMessageType("youtube.response.watch.Watch", () => [{
            no: 1,
            name: "contents",
            kind: "message",
            T: or,
            repeated: !0
        }]),
        or = d.makeMessageType("youtube.response.watch.Content", () => [{
            no: 2,
            name: "player",
            kind: "message",
            T: he
        }, {
            no: 3,
            name: "next",
            kind: "message",
            T: ge
        }]);
    var W = class {
            _times = new Map;
            name;
            isDebug;
            className;
            request;
            response;
            constructor(e, n, r) {
                this.name = e ?? "", this.isDebug = r?.debug ?? !1, e && this.debug(`${e} Start`), this.className = n ?? "", this.init()
            }
            static getInstance(e, n) {
                let r = "Surge";
                return typeof $Shadowrocket < "u" ? r = "Shadowrocket" : typeof $task < "u" && (r = "QuanX"), W.instances[r] || (W.instances[r] = W.classNames[r](e, r, n)), W.instances[r]
            }
            createProxy(e) {
                return new Proxy(e, {
                    get: this.getFn,
                    set: this.setFn
                })
            }
            getFn(e, n, r) {
                return e[n]
            }
            setFn(e, n, r, s) {
                return e[n] = r, !0
            }
            getJSON(e, n = {}) {
                let r = this.getVal(e);
                return r ? JSON.parse(r) : n
            }
            setJSON(e, n) {
                this.setVal(JSON.stringify(e), n)
            }
            msg(e = this.name, n = "", r = "", s) {}
            debug(e) {
                this.isDebug && (typeof e == "object" && (e = JSON.stringify(e)), console.log(e))
            }
            log(e) {
                typeof e == "object" && (e = JSON.stringify(e)), console.log(e)
            }
            timeStart(e) {
                this._times.set(e, Date.now())
            }
            timeEnd(e) {
                if (this._times.has(e)) {
                    let n = this._times.get(e) ?? 0,
                        r = Date.now() - n;
                    this.debug(`${e}: ${r}ms`), this._times.delete(e)
                } else this.debug(`Timer with label ${e} does not exist.`)
            }
            exit() {
                $done({})
            }
            reject() {
                $done()
            }
            decodeParams(e, n) {
                return e
            }
        },
        L = W;
    K(L, "instances", {}), K(L, "classNames", {
        QuanX: (e, n, r) => new be(e, n, r),
        Surge: (e, n, r) => new Z(e, n, r),
        Shadowrocket: (e, n, r) => new Ye(e, n, r)
    });
    var ke = class extends L {
            getFn(e, n, r) {
                let s = ke.clientAdapter[n] || n;
                return super.getFn(e, s, r)
            }
            setFn(e, n, r, s) {
                let o = ke.clientAdapter[n] || n;
                return super.setFn(e, o, r, s)
            }
            init() {
                try {
                    this.request = this.createProxy($request), this.response = this.createProxy($response)
                } catch (e) {
                    this.debug(e.toString())
                }
            }
            getVal(e) {
                return $persistentStore.read(e)
            }
            setVal(e, n) {
                $persistentStore.write(e, n)
            }
            msg(e = this.name, n = "", r = "", s) {
                $notification.post(e, n, r, {
                    url: s ?? ""
                })
            }
            async fetch(e) {
                return await new Promise((n, r) => {
                    let {
                        method: s,
                        body: o,
                        bodyBytes: i,
                        ...a
                    } = e, c = i ?? o, f = c instanceof Uint8Array;
                    $httpClient[s.toLowerCase()]({
                        ...a,
                        body: c,
                        "binary-mode": f
                    }, (m, l, g) => {
                        m && r(m);
                        let p = f ? "bodyBytes" : "body";
                        n({
                            status: l.status || l.statusCode,
                            headers: l.headers,
                            [p]: g
                        })
                    })
                })
            }
            done(e) {
                let n = e.response ?? e,
                    r, s;
                n.bodyBytes ? (r = n.bodyBytes, delete n.bodyBytes, s = {
                    ...e
                }, s.response ? s.response.body = r : s.body = r) : s = e, $done(s)
            }
            decodeParams(e, n) {
                return typeof $argument == "string" && !$argument.includes("{{{") && Object.assign(e, JSON.parse($argument)), e
            }
        },
        Z = ke;
    K(Z, "clientAdapter", {
        bodyBytes: "body"
    });
    var v = class extends L {
            static transferBodyBytes(e, n) {
                return e instanceof ArrayBuffer ? n === "Uint8Array" ? new Uint8Array(e) : e : e instanceof Uint8Array && n === "ArrayBuffer" ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset) : e
            }
            init() {
                try {
                    this.request = this.createProxy($request), this.response = this.createProxy($response)
                } catch (e) {
                    this.debug(e.toString())
                }
            }
            getFn(e, n, r) {
                let s = v.clientAdapter[n] || n,
                    o = super.getFn(e, s, r);
                return n === "bodyBytes" && (o = v.transferBodyBytes(o, "Uint8Array")), o
            }
            setFn(e, n, r, s) {
                let o = v.clientAdapter[n] || n,
                    i = r;
                return n === "bodyBytes" && (i = v.transferBodyBytes(i, "Uint8Array")), super.setFn(e, o, i, s)
            }
            getVal(e) {
                return $prefs.valueForKey(e)?.replace(/\0/g, "")
            }
            setVal(e, n) {
                $prefs.setValueForKey(e, n)
            }
            msg(e = this.name, n = "", r = "", s) {
                $notify(e, n, r, {
                    "open-url": s ?? ""
                })
            }
            async fetch(e) {
                return await new Promise(n => {
                    let r = {
                        url: "",
                        method: "GET"
                    };
                    for (let [s, o] of Object.entries(e)) s === "id" ? r.sessionIndex = o : s === "bodyBytes" ? r.bodyBytes = v.transferBodyBytes(o, "ArrayBuffer") : r[s] = o;
                    e.bodyBytes && delete r.body, $task.fetch(r).then(s => {
                        let o = {
                            status: 200,
                            headers: {}
                        };
                        for (let [i, a] of Object.entries(s)) i === "sessionIndex" ? o.id = a : i === "bodyBytes" ? o.bodyBytes = v.transferBodyBytes(a, "Uint8Array") : i === "statusCode" ? o.status = a : o[i] = a;
                        n(o)
                    })
                })
            }
            done(e) {
                let n = e.response ?? e,
                    r = {};
                for (let [s, o] of Object.entries(n)) s === "status" ? r.status = `HTTP/1.1 ${o}` : s === "bodyBytes" ? r.bodyBytes = v.transferBodyBytes(o, "ArrayBuffer") : r[s] = o;
                $done(r)
            }
        },
        be = v;
    K(be, "clientAdapter", {
        id: "sessionIndex",
        status: "statusCode"
    });
    var Ye = class extends Z {
        decodeParams(e, n) {
            let r = {};
            for (let [s, o] of Object.entries(e)) {
                let i = n?.[s] ?? s,
                    a = this.getVal(i);
                a && (r[s] = this.transferType(o, a))
            }
            return Object.assign(e, r), e
        }
        transferType(e, n) {
            return typeof e == "boolean" ? n === "true" : typeof e == "number" ? Number(n) : n
        }
    };
    var b = L.getInstance("YouTube");
    var D = class {
        name;
        needProcess;
        needSave;
        message;
        whiteNo;
        blackNo;
        whiteEml;
        blackEml;
        msgType;
        argument;
        decoder = new TextDecoder("utf-8", {
            fatal: !1,
            ignoreBOM: !0
        });
        constructor(e, n) {
            this.name = n, this.msgType = e, this.argument = this.decodeArgument(), b.isDebug = Boolean(this.argument.debug), b.debug(this.name), Object.assign(this, b.getJSON("YouTubeAdvertiseInfo", {
                whiteNo: [],
                blackNo: [],
                whiteEml: [],
                blackEml: []
            }))
        }
        decodeArgument() {
            let e = {
                    lyricLang: "\u6B4C\u8BCD\u7FFB\u8BD1\u8BED\u8A00",
                    captionLang: "\u5B57\u5E55\u7FFB\u8BD1\u8BED\u8A00",
                    blockUpload: "\u5C4F\u853D\u4E0A\u4F20\u6309\u94AE",
                    blockImmersive: "\u5C4F\u853D\u9009\u6BB5\u6309\u94AE",
                    debug: "\u542F\u52A8\u8C03\u8BD5\u6A21\u5F0F"
                },
                n = {
                    lyricLang: "en",
                    captionLang: "en",
                    blockUpload: !0,
                    blockImmersive: !0,
                    debug: !1
                };
            return b.decodeParams(n, e)
        }
        fromBinary(e) {
            return e instanceof Uint8Array ? (this.message = this.msgType.fromBinary(e), b.debug(`raw: ${Math.floor(e.length/1024)} kb`), this) : (b.log("YouTube can not get binaryBody"), b.exit(), this)
        }
        async modify() {
            let e = this.pure();
            return e instanceof Promise ? await e : e
        }
        toBinary() {
            return this.message.toBinary()
        }
        listUnknownFields(e) {
            return e instanceof E ? e.getType().runtime.bin.listUnknownFields(e) : []
        }
        save() {
            if (this.needSave) {
                b.debug("Update Config");
                let e = {
                    whiteNo: this.whiteNo,
                    blackNo: this.blackNo,
                    whiteEml: this.whiteEml,
                    blackEml: this.blackEml
                };
                b.setJSON(e, "YouTubeAdvertiseInfo")
            }
        }
        done() {
            if (this.save(), this.needProcess) {
                b.timeStart("toBinary");
                let e = this.toBinary();
                b.timeEnd("toBinary"), b.debug(`modify: ${Math.floor(e.length/1024)} kb`), b.done({
                    bodyBytes: e
                })
            }
            b.debug("use $done({})"), b.exit()
        }
        iterate(e = {}, n, r) {
            let s = typeof e == "object" ? [e] : [];
            for (; s.length;) {
                let o = s.pop(),
                    i = Object.keys(o);
                if (typeof n == "symbol") {
                    for (let a of Object.getOwnPropertySymbols(o))
                        if (a.description === n.description) {
                            r(o, s);
                            break
                        }
                }
                for (let a of i) a === n ? r(o, s) : typeof o[a] == "object" && s.push(o[a])
            }
        }
        isAdvertise(e) {
            let n = this.listUnknownFields(e)[0];
            return n ? this.handleFieldNo(n) : this.handleFieldEml(e)
        }
        handleFieldNo(e) {
            let n = e.no;
            if (this.whiteNo.includes(n)) return !1;
            if (this.blackNo.includes(n)) return !0;
            let s = this.decoder.decode(e.data).includes("pagead");
            return s ? this.blackNo.push(n) : this.whiteNo.push(n), this.needSave = !0, s
        }
        handleFieldEml(e) {
            let n = !1,
                r = "";
            return this.iterate(e, "renderInfo", (s, o) => {
                if (r = s.renderInfo.layoutRender.eml.split("|")[0], this.whiteEml.includes(r)) n = !1;
                else if (this.blackEml.includes(r) || /shorts(?!_pivot_item)/.test(r)) n = !0;
                else {
                    let i = s?.videoInfo?.videoContext?.videoContent;
                    if (i) {
                        let a = this.listUnknownFields(i)[0];
                        n = this.decoder.decode(a.data).includes("pagead"), n ? this.blackEml.push(r) : this.whiteEml.push(r), this.needSave = !0
                    }
                }
                o.length = 0
            }), n
        }
        isShorts(e) {
            let n = !1;
            return this.iterate(e, "eml", (r, s) => {
                n = /shorts(?!_pivot_item)/.test(r.eml), s.length = 0
            }), n
        }
    };

    function ir(t) {
        let r = ".",
            s = "+-a^+6",
            o = "+-3^+b+-f",
            i, a, c;
        for (i = [], a = 0, c = 0; c < t.length; c++) {
            let f = t.charCodeAt(c);
            128 > f ? i[a++] = f : (2048 > f ? i[a++] = f >> 6 | 192 : ((f & 64512) == 55296 && c + 1 < t.length && (t.charCodeAt(c + 1) & 64512) == 56320 ? (f = 65536 + ((f & 1023) << 10) + (t.charCodeAt(++c) & 1023), i[a++] = f >> 18 | 240, i[a++] = f >> 12 & 63 | 128) : i[a++] = f >> 12 | 224, i[a++] = f >> 6 & 63 | 128), i[a++] = f & 63 | 128)
        }
        for (t = 406644, a = 0; a < i.length; a++) t += i[a], t = Jt(t, s);
        return t = Jt(t, o), t ^= 3293161072, 0 > t && (t = (t & 2147483647) + 2147483648), t %= 1e6, t.toString() + r + (t ^ 406644)
    }

    function Jt(t, e) {
        let n = "a",
            r = "+",
            s;
        for (let o = 0; o < e.length - 2; o += 3) s = e.charAt(o + 2), s = s >= n ? s.charCodeAt(0) - 87 : Number(s), s = e.charAt(o + 1) == r ? t >>> s : t << s, t = e.charAt(o) == r ? t + s & 4294967295 : t ^ s;
        return t
    }

    function Gt(t, e) {
        return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${e}&hl=en&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${ir(t)}&q=${encodeURIComponent(t)}`
    }
    var X = class extends D {
            constructor(e = Rt, n = "Browse") {
                super(e, n)
            }
            async pure() {
                return this.iterate(this.message, "richGridContents", e => {
                    for (let n = e.richGridContents.length - 1; n >= 0; n--) this.removeCommonAD(e, n), this.removeShorts(e, n)
                }), await this.translate(), this
            }
            removeCommonAD(e, n) {
                let s = e.richGridContents[n]?.richItemRenderer?.richItemContent;
                for (let o = s?.length - 1; o >= 0; o--) this.isAdvertise(s[o]) && (s.splice(o, 1), this.needProcess = !0)
            }
            removeShorts(e, n) {
                let r = e.richGridContents[n]?.richSectionRenderer;
                this.isShorts(r) && (e.richGridContents.splice(n, 1), this.needProcess = !0)
            }
            getBrowseId() {
                let e = "";
                return this.iterate(this.message?.responseContext, "key", (n, r) => {
                    n.key === "browse_id" && (e = n.value, r.length = 0)
                }), e
            }
            async translate() {
                let e = this.argument.lyricLang?.trim();
                if (!(this.name === "Browse" && this.getBrowseId().startsWith("MPLYt")) || e === "off") return;
                let n = "",
                    r, s = !1;
                if (this.iterate(this.message, "timedLyricsContent", (c, f) => {
                        r = c.timedLyricsContent, n = c.timedLyricsContent.runs.map(m => m.text).join(`
`), s = !0, f.length = 0
                    }), s || this.iterate(this.message, "description", (c, f) => {
                        r = c.description.runs[0], n = c.description.runs[0].text, f.length = 0, s = !0
                    }), !s) return;
                let o = e.split("-")[0],
                    i = Gt(n, e),
                    a = await b.fetch({
                        method: "GET",
                        url: i
                    });
                if (a.status === 200 && a.body) {
                    let c = JSON.parse(a.body),
                        f = " & Translated by Google",
                        m = c[2].includes(o);
                    r.text ? (r.text = c[0].map(l => m ? l[0] : l[1] + l[0] || "").join(`\r
`), this.iterate(this.message, "footer", (l, g) => {
                        l.footer.runs[0].text += f, g.length = 0
                    })) : r.runs.length <= c[0].length && (r.runs.forEach((l, g) => {
                        l.text = m ? c[0][g][0] : l.text + `
${c[0][g][0]}`
                    }), r.footerLabel += f), this.needProcess = !0
                }
            }
        },
        ee = class extends X {
            constructor(e = ge, n = "Next") {
                super(e, n)
            }
            addTranslateTab() {
                this.iterate(this.message?.a1F7?.musicPlayRender, "items", (e, n) => {
                    let r = e.items.find(s => s.tab.info?.browseInfo?.browseId.startsWith("MPLYt"));
                    r && (r.tab.name = r.tab.name + "\u21C4"), this.needProcess = !0, n.length = 0
                })
            }
        },
        te = class extends D {
            constructor(e = he, n = "Player") {
                super(e, n)
            }
            pure() {
                return this.message.adPlacements?.length && (this.message.adPlacements.length = 0), delete this.message?.playbackTracking?.pageadViewthroughconversion, this.addPlayAbility(), this.addTranslateCaption(), this.needProcess = !0, this
            }
            addPlayAbility() {
                let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
                typeof e == "object" && (e.active = !0), typeof this.message.playabilityStatus == "object" && (this.message.playabilityStatus.backgroundPlayer = new $e({
                    backgroundPlayerRender: {
                        active: !0
                    }
                }))
            }
            addTranslateCaption() {
                let e = this.argument.captionLang;
                e !== "off" && this.iterate(this.message, "captionTracks", (n, r) => {
                    let s = n.captionTracks,
                        o = n.audioTracks;
                    if (Array.isArray(s)) {
                        let a = {
                                [e]: 2,
                                en: 1
                            },
                            c = -1,
                            f = 0;
                        for (let m = 0; m < s.length; m++) {
                            let l = s[m],
                                g = a[l.languageCode];
                            g && g > c && (c = g, f = m), l.isTranslatable = !0
                        }
                        if (c !== 2) {
                            let m = new Ve({
                                baseUrl: s[f].baseUrl + `&tlang=${e}`,
                                name: {
                                    runs: [{
                                        text: `@Enhance (${e})`
                                    }]
                                },
                                vssId: `.${e}`,
                                languageCode: e
                            });
                            s.push(m)
                        }
                        if (Array.isArray(o)) {
                            let m = c === 2 ? f : s.length - 1;
                            for (let l of o) l.captionTrackIndices?.includes(m) || l.captionTrackIndices.push(m), l.defaultCaptionTrackIndex = m, l.captionsInitialState = 3
                        }
                    }
                    let i = {
                        de: "Deutsch",
                        ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
                        fr: "Fran\xE7ais",
                        fil: "Filipino",
                        ko: "\uD55C\uAD6D\uC5B4",
                        ja: "\u65E5\u672C\u8A9E",
                        en: "English",
                        vi: "Ti\u1EBFng Vi\u1EC7t",
                        "zh-Hant": "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09",
                        "zh-Hans": "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09",
                        und: "@VirgilClyne"
                    };
                    n.translationLanguages = Object.entries(i).map(([a, c]) => new Je({
                        languageCode: a,
                        languageName: {
                            runs: [{
                                text: `@Enhance (${e})`
                            }]
                        }
                    })), r.length = 0
                })
            }
        },
        Te = class extends X {
            constructor(e = Ct, n = "Search") {
                super(e, n)
            }
        },
        we = class extends D {
            constructor(e = Pt, n = "Shorts") {
                super(e, n)
            }
            pure() {
                let e = this.message.entries?.length;
                if (e)
                    for (let n = e - 1; n >= 0; n--) this.message.entries[n].command?.reelWatchEndpoint?.overlay || (this.message.entries.splice(n, 1), this.needProcess = !0);
                return this
            }
        },
        xe = class extends D {
            constructor(e = vt, n = "Guide") {
                super(e, n)
            }
            pure() {
                let e = ["SPunlimited"];
                return this.argument.blockUpload && e.push("FEuploads"), this.argument.blockImmersive && e.push("FEmusic_immersive"), this.iterate(this.message, "rendererItems", n => {
                    for (let r = n.rendererItems.length - 1; r >= 0; r--) {
                        let s = n.rendererItems[r]?.iconRender?.browseId || n.rendererItems[r]?.labelRender?.browseId;
                        e.includes(s) && (n.rendererItems.splice(r, 1), this.needProcess = !0)
                    }
                }), this
            }
        },
        Ie = class extends D {
            constructor(e = $t, n = "Setting") {
                super(e, n)
            }
            pure() {
                this.iterate(this.message, "categoryId", n => {
                    if (n.categoryId === 10005) {
                        let r = {
                                f1: 135,
                                f2: 20434,
                                f3: 2,
                                timeInfo: this.message.trackingParams.timeInfo
                            },
                            s = new _e({
                                settingBooleanRenderer: {
                                    itemId: 0,
                                    enableServiceEndpoint: {
                                        trackingParams: r,
                                        setClientSettingEndpoint: {
                                            settingDatas: {
                                                clientSettingEnum: {
                                                    item: 151
                                                },
                                                boolValue: !0
                                            }
                                        }
                                    },
                                    disableServiceEndpoint: {
                                        trackingParams: r,
                                        setClientSettingEndpoint: {
                                            settingDatas: {
                                                clientSettingEnum: {
                                                    item: 151
                                                },
                                                boolValue: !1
                                            }
                                        }
                                    },
                                    clickTrackingParams: r
                                }
                            });
                        n.subSettings.push(s)
                    }
                });
                let e = new Ge({
                    settingCategoryEntryRenderer: {
                        f2: 1,
                        f3: 1,
                        trackingParams: {
                            f1: 2,
                            f2: 20020,
                            f3: 8,
                            timeInfo: this.message.trackingParams.timeInfo
                        },
                        f6: 0,
                        f7: 1,
                        f8: 1,
                        f9: 1,
                        f10: 1,
                        f12: 1
                    }
                });
                return this.message.settingItems.push(e), this.needProcess = !0, this
            }
        },
        Ne = class extends D {
            player;
            next;
            constructor(e = Vt, n = "Watch") {
                super(e, n), this.player = new te, this.next = new ee
            }
            async pure() {
                for (let e of this.message.contents) e.player && (this.player.message = e.player, await this.player.pure()), e.next && (this.next.message = e.next, await this.next.pure()), this.needProcess = !0;
                return this
            }
        };
    var ar = new Map([
        ["browse", X],
        ["next", ee],
        ["player", te],
        ["search", Te],
        ["reel_watch_sequence", we],
        ["guide", xe],
        ["get_setting", Ie],
        ["get_watch", Ne]
    ]);

    function qe(t) {
        for (let [e, n] of ar.entries())
            if (t.includes(e)) return new n;
        return null
    }
    async function cr() {
        let t = qe(b.request.url);
        if (t) {
            let e = b.response.bodyBytes;
            b.timeStart("fromBinary"), t.fromBinary(e), b.timeEnd("fromBinary"), b.timeStart("modify"), await t.modify(), b.timeEnd("modify"), t.done()
        } else b.msg("YouTube Enhance", "\u811A\u672C\u9700\u8981\u66F4\u65B0", "\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0"), b.exit()
    }
    cr().catch(t => {
        b.log(t.toString())
    }).finally(() => {
        b.exit()
    });
})();
