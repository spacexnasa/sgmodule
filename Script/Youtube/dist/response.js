// Build: 2024/11/23 15:13:17
(() => {
	var Xt = Object.defineProperty;
	var Wt = (t, e, n) => e in t ? Xt(t, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : t[e] = n;
	var H = (t, e, n) => (Wt(t, typeof e != "symbol" ? e + "" : e, n), n);
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
			d = f.isView || function(y) {
				return y && "length" in y
			},
			l = s.call(f.prototype);
		f = n.prototype;
		var g = t.TextEncoder,
			p = new(a ? Uint16Array : c)(32);
		e.prototype.decode = function(y) {
			if (!d(y)) {
				var R = s.call(y);
				if (R !== l && R !== o && R !== i) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
				y = a ? new c(y) : y || []
			}
			for (var N = R = "", k = 0, T = y.length | 0, K = T - 32 | 0, x, w, F = 0, G = 0, B, C = 0, M = -1; k < T;) {
				for (x = k <= K ? 32 : T - k | 0; C < x; k = k + 1 | 0, C = C + 1 | 0) {
					switch (w = y[k] & 255, w >> 4) {
						case 15:
							if (B = y[k = k + 1 | 0] & 255, B >> 6 !== 2 || 247 < w) {
								k = k - 1 | 0;
								break
							}
							F = (w & 7) << 6 | B & 63, G = 5, w = 256;
						case 14:
							B = y[k = k + 1 | 0] & 255, F <<= 6, F |= (w & 15) << 6 | B & 63, G = B >> 6 === 2 ? G + 4 | 0 : 24, w = w + 256 & 768;
						case 13:
						case 12:
							B = y[k = k + 1 | 0] & 255, F <<= 6, F |= (w & 31) << 6 | B & 63, G = G + 7 | 0, k < T && B >> 6 === 2 && F >> G && 1114112 > F ? (w = F, F = F - 65536 | 0, 0 <= F && (M = (F >> 10) + 55296 | 0, w = (F & 1023) + 56320 | 0, 31 > C ? (p[C] = M, C = C + 1 | 0, M = -1) : (B = M, M = w, w = B))) : (w >>= 8, k = k - w - 1 | 0, w = 65533), F = G = 0, x = k <= K ? 32 : T - k | 0;
						default:
							p[C] = w;
							continue;
						case 11:
						case 10:
						case 9:
						case 8:
					}
					p[C] = 65533
				}
				if (N += r(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15], p[16], p[17], p[18], p[19], p[20], p[21], p[22], p[23], p[24], p[25], p[26], p[27], p[28], p[29], p[30], p[31]), 32 > C && (N = N.slice(0, C - 32 | 0)), k < T) {
					if (p[0] = M, C = ~M >>> 31, M = -1, N.length < R.length) continue
				} else M !== -1 && (N += r(M));
				R += N, N = ""
			}
			return R
		}, f.encode = function(y) {
			y = y === void 0 ? "" : "" + y;
			var R = y.length | 0,
				N = new c((R << 1) + 8 | 0),
				k, T = 0,
				K = !a;
			for (k = 0; k < R; k = k + 1 | 0, T = T + 1 | 0) {
				var x = y.charCodeAt(k) | 0;
				if (127 >= x) N[T] = x;
				else {
					if (2047 >= x) N[T] = 192 | x >> 6;
					else {
						e: {
							if (55296 <= x)
								if (56319 >= x) {
									var w = y.charCodeAt(k = k + 1 | 0) | 0;
									if (56320 <= w && 57343 >= w) {
										if (x = (x << 10) + w - 56613888 | 0, 65535 < x) {
											N[T] = 240 | x >> 18, N[T = T + 1 | 0] = 128 | x >> 12 & 63, N[T = T + 1 | 0] = 128 | x >> 6 & 63, N[T = T + 1 | 0] = 128 | x & 63;
											continue
										}
										break e
									}
									x = 65533
								} else 57343 >= x && (x = 65533);!K && k << 1 < T && k << 1 < (T - 7 | 0) && (K = !0, w = new c(3 * R), w.set(N), N = w)
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
	var jt = 34028234663852886e22,
		Kt = -34028234663852886e22,
		Ht = 4294967295,
		zt = 2147483647,
		Qt = -2147483648;

	function _(t) {
		if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
		if (!Number.isInteger(t) || t > zt || t < Qt) throw new Error("invalid int 32: " + t)
	}

	function z(t) {
		if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
		if (!Number.isInteger(t) || t > Ht || t < 0) throw new Error("invalid uint 32: " + t)
	}

	function se(t) {
		if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
		if (Number.isFinite(t) && (t > jt || t < Kt)) throw new Error("invalid float 32: " + t)
	}
	var je = Symbol("@bufbuild/protobuf/enum-type");

	function Ke(t) {
		let e = t[je];
		return I(e, "missing enum type on enum object"), e
	}

	function Re(t, e, n, r) {
		t[je] = Ce(e, n.map(s => ({
			no: s.no,
			name: s.name,
			localName: t[s.no]
		})), r)
	}

	function Ce(t, e, n) {
		let r = Object.create(null),
			s = Object.create(null),
			o = [];
		for (let i of e) {
			let a = ze(i);
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

	function He(t, e, n) {
		let r = {};
		for (let s of e) {
			let o = ze(s);
			r[o.localName] = o.no, r[o.no] = o.localName
		}
		return Re(r, t, e, n), r
	}

	function ze(t) {
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

	function Qe(t, e, n, r) {
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
	var O;
	(function(t) {
		t[t.BIGINT = 0] = "BIGINT", t[t.STRING = 1] = "STRING"
	})(O || (O = {}));

	function et() {
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

	function ie(t, e, n) {
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
	var oe = 4294967296;

	function Be(t) {
		let e = t[0] === "-";
		e && (t = t.slice(1));
		let n = 1e6,
			r = 0,
			s = 0;

		function o(i, a) {
			let c = Number(t.slice(i, a));
			s *= n, r = r * n + c, r >= oe && (s = s + (r / oe | 0), r = r % oe)
		}
		return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? nt(r, s) : Oe(r, s)
	}

	function tt(t, e) {
		let n = Oe(t, e),
			r = n.hi & 2147483648;
		r && (n = nt(n.lo, n.hi));
		let s = Me(n.lo, n.hi);
		return r ? "-" + s : s
	}

	function Me(t, e) {
		if ({
				lo: t,
				hi: e
			} = Zt(t, e), e <= 2097151) return String(oe * e + t);
		let n = t & 16777215,
			r = (t >>> 24 | e << 8) & 16777215,
			s = e >> 16 & 65535,
			o = n + r * 6777216 + s * 6710656,
			i = r + s * 8147497,
			a = s * 2,
			c = 1e7;
		return o >= c && (i += Math.floor(o / c), o %= c), i >= c && (a += Math.floor(i / c), i %= c), a.toString() + Ze(i) + Ze(o)
	}

	function Zt(t, e) {
		return {
			lo: t >>> 0,
			hi: e >>> 0
		}
	}

	function Oe(t, e) {
		return {
			lo: t | 0,
			hi: e | 0
		}
	}

	function nt(t, e) {
		return e = ~e, t ? t = ~t + 1 : e += 1, Oe(t, e)
	}
	var Ze = t => {
		let e = String(t);
		return "0000000".slice(e.length) + e
	};

	function Ue(t, e) {
		if (t >= 0) {
			for (; t > 127;) e.push(t & 127 | 128), t = t >>> 7;
			e.push(t)
		} else {
			for (let n = 0; n < 9; n++) e.push(t & 127 | 128), t = t >> 7;
			e.push(1)
		}
	}

	function rt() {
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

	function en() {
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
				return typeof s != "string" && (s = s.toString()), n(s), Be(s)
			},
			uEnc(s) {
				return typeof s != "string" && (s = s.toString()), r(s), Be(s)
			},
			dec(s, o) {
				return tt(s, o)
			},
			uDec(s, o) {
				return Me(s, o)
			}
		}
	}
	var S = en();
	var b;
	(function(t) {
		t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32"
	})(b || (b = {}));
	var ae = class {
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
				return _(e), Ue(e, this.buf), this
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
				se(e);
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
				return _(e), e = (e << 1 ^ e >> 31) >>> 0, Ue(e, this.buf), this
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
				return ie(n.lo, n.hi, this.buf), this
			}
			sint64(e) {
				let n = S.enc(e),
					r = n.hi >> 31,
					s = n.lo << 1 ^ r,
					o = (n.hi << 1 | n.lo >>> 31) ^ r;
				return ie(s, o, this.buf), this
			}
			uint64(e) {
				let n = S.uEnc(e);
				return ie(n.lo, n.hi, this.buf), this
			}
		},
		ce = class {
			constructor(e, n) {
				this.varint64 = et, this.uint32 = rt, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = n ?? new TextDecoder
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
					case b.Varint:
						for (; this.buf[this.pos++] & 128;);
						break;
					case b.Bit64:
						this.pos += 4;
					case b.Bit32:
						this.pos += 4;
						break;
					case b.LengthDelimited:
						let r = this.uint32();
						this.pos += r;
						break;
					case b.StartGroup:
						let s;
						for (;
							(s = this.tag()[1]) !== b.EndGroup;) this.skip(s);
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

	function A(t, e, n) {
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

	function J(t, e) {
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

	function Ae(t, e) {
		let n = e === void 0,
			r = b.Varint,
			s = e === 0;
		switch (t) {
			case u.STRING:
				s = n || !e.length, r = b.LengthDelimited;
				break;
			case u.BOOL:
				s = e === !1;
				break;
			case u.DOUBLE:
				r = b.Bit64;
				break;
			case u.FLOAT:
				r = b.Bit32;
				break;
			case u.INT64:
				s = n || e == 0;
				break;
			case u.UINT64:
				s = n || e == 0;
				break;
			case u.FIXED64:
				s = n || e == 0, r = b.Bit64;
				break;
			case u.BYTES:
				s = n || !e.byteLength, r = b.LengthDelimited;
				break;
			case u.FIXED32:
				r = b.Bit32;
				break;
			case u.SFIXED32:
				r = b.Bit32;
				break;
			case u.SFIXED64:
				s = n || e == 0, r = b.Bit64;
				break;
			case u.SINT64:
				s = n || e == 0;
				break
		}
		let o = u[t].toLowerCase();
		return [r, o, n || s]
	}

	function st(t, e, n, r) {
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

	function ue(t) {
		let e = t.field.localName,
			n = Object.create(null);
		return n[e] = tn(t), [n, () => n[e]]
	}

	function tn(t) {
		let e = t.field;
		if (e.repeated) return [];
		if (e.default !== void 0) return e.default;
		switch (e.kind) {
			case "enum":
				return e.T.values[0].no;
			case "scalar":
				return J(e.T, e.L);
			case "message":
				let n = e.T,
					r = new n;
				return n.fieldWrapper ? n.fieldWrapper.unwrapField(r) : r;
			case "map":
				throw "map fields are not allowed to be extensions"
		}
	}

	function ot(t, e) {
		if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
			for (let n = t.length - 1; n >= 0; --n)
				if (t[n].no == e.no) return [t[n]];
			return []
		}
		return t.filter(n => n.no === e.no)
	}

	function it(t, e, n, r) {
		return {
			syntax: t,
			json: e,
			bin: n,
			util: r,
			makeMessageType(s, o, i) {
				return Qe(this, s, o, i)
			},
			makeEnum: He,
			makeEnumType: Ce,
			getEnumType: Ke,
			makeExtension(s, o, i) {
				return st(this, s, o, i)
			}
		}
	}

	function fe(t, e) {
		return e instanceof E || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e)
	}
	var cs = {
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
	var q = Symbol("@bufbuild/protobuf/unknown-fields"),
		at = {
			readUnknownFields: !0,
			readerFactory: t => new ce(t)
		},
		ct = {
			writeUnknownFields: !0,
			writerFactory: () => new ae
		};

	function nn(t) {
		return t ? Object.assign(Object.assign({}, at), t) : at
	}

	function rn(t) {
		return t ? Object.assign(Object.assign({}, ct), t) : ct
	}

	function ft() {
		return {
			makeReadOptions: nn,
			makeWriteOptions: rn,
			listUnknownFields(t) {
				var e;
				return (e = t[q]) !== null && e !== void 0 ? e : []
			},
			discardUnknownFields(t) {
				delete t[q]
			},
			writeUnknownFields(t, e) {
				let r = t[q];
				if (r)
					for (let s of r) e.tag(s.no, s.wireType).raw(s.data)
			},
			onUnknownField(t, e, n, r) {
				let s = t;
				Array.isArray(s[q]) || (s[q] = []), s[q].push({
					no: e,
					wireType: n,
					data: r
				})
			},
			readMessage(t, e, n, r, s) {
				let o = t.getType(),
					i = s ? e.len : e.pos + n,
					a, c;
				for (; e.pos < i && ([a, c] = e.tag(), c != b.EndGroup);) {
					let f = o.fields.find(a);
					if (!f) {
						let d = e.skip(c);
						r.readUnknownFields && this.onUnknownField(t, a, c, d);
						continue
					}
					ut(t, e, f, c, r)
				}
				if (s && (c != b.EndGroup || a !== n)) throw new Error("invalid end group tag")
			},
			readField: ut
		}
	}

	function ut(t, e, n, r, s) {
		let {
			repeated: o,
			localName: i
		} = n;
		switch (n.oneof && (t = t[n.oneof.localName], t.case != i && delete t.value, t.case = i, i = "value"), n.kind) {
			case "scalar":
			case "enum":
				let a = n.kind == "enum" ? u.INT32 : n.T,
					c = de;
				if (n.kind == "scalar" && n.L > 0 && (c = on), o) {
					let g = t[i];
					if (r == b.LengthDelimited && a != u.STRING && a != u.BYTES) {
						let y = e.uint32() + e.pos;
						for (; e.pos < y;) g.push(c(e, a))
					} else g.push(c(e, a))
				} else t[i] = c(e, a);
				break;
			case "message":
				let f = n.T;
				o ? t[i].push(me(e, new f, s, n)) : t[i] instanceof E ? me(e, t[i], s, n) : (t[i] = me(e, new f, s, n), f.fieldWrapper && !n.oneof && !n.repeated && (t[i] = f.fieldWrapper.unwrapField(t[i])));
				break;
			case "map":
				let [d, l] = sn(n, e, s);
				t[i][d] = l;
				break
		}
	}

	function me(t, e, n, r) {
		let s = e.getType().runtime.bin,
			o = r?.delimited;
		return s.readMessage(e, t, o ? r?.no : t.uint32(), n, o), e
	}

	function sn(t, e, n) {
		let r = e.uint32(),
			s = e.pos + r,
			o, i;
		for (; e.pos < s;) {
			let [a] = e.tag();
			switch (a) {
				case 1:
					o = de(e, t.K);
					break;
				case 2:
					switch (t.V.kind) {
						case "scalar":
							i = de(e, t.V.T);
							break;
						case "enum":
							i = e.int32();
							break;
						case "message":
							i = me(e, new t.V.T, n, void 0);
							break
					}
					break
			}
		}
		if (o === void 0) {
			let a = J(t.K, O.BIGINT);
			o = t.K == u.BOOL ? a.toString() : a
		}
		if (typeof o != "string" && typeof o != "number" && (o = o.toString()), i === void 0) switch (t.V.kind) {
			case "scalar":
				i = J(t.V.T, O.BIGINT);
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

	function on(t, e) {
		let n = de(t, e);
		return typeof n == "bigint" ? n.toString() : n
	}

	function de(t, e) {
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

	function mt(t, e, n, r, s) {
		t.tag(n.no, b.LengthDelimited), t.fork();
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
		switch (Y(t, n.K, 1, o, !0), n.V.kind) {
			case "scalar":
				Y(t, n.V.T, 2, s, !0);
				break;
			case "enum":
				Y(t, u.INT32, 2, s, !0);
				break;
			case "message":
				t.tag(2, b.LengthDelimited).bytes(s.toBinary(e));
				break
		}
		t.join()
	}

	function Pe(t, e, n, r) {
		let s = fe(n.T, r);
		n?.delimited ? t.tag(n.no, b.StartGroup).raw(s.toBinary(e)).tag(n.no, b.EndGroup) : t.tag(n.no, b.LengthDelimited).bytes(s.toBinary(e))
	}

	function Y(t, e, n, r, s) {
		let [o, i, a] = Ae(e, r);
		(!a || s) && t.tag(n, o)[i](r)
	}

	function dt(t, e, n, r) {
		if (!r.length) return;
		t.tag(n, b.LengthDelimited).fork();
		let [, s] = Ae(e);
		for (let o = 0; o < r.length; o++) t[s](r[o]);
		t.join()
	}

	function pt() {
		return Object.assign(Object.assign({}, ft()), {
			writeField: lt,
			writeMessage(t, e, n) {
				let r = t.getType();
				for (let s of r.fields.byNumber()) {
					let o, i = s.localName;
					if (s.oneof) {
						let a = t[s.oneof.localName];
						if (a.case !== i) continue;
						o = a.value
					} else o = t[i];
					lt(s, o, e, n)
				}
				return n.writeUnknownFields && this.writeUnknownFields(t, e), e
			}
		})
	}

	function lt(t, e, n, r) {
		let s = t.repeated;
		switch (t.kind) {
			case "scalar":
			case "enum":
				let o = t.kind == "enum" ? u.INT32 : t.T;
				if (s)
					if (t.packed) dt(n, o, t.no, e);
					else
						for (let i of e) Y(n, o, t.no, i, !0);
				else e !== void 0 && Y(n, o, t.no, e, !!t.oneof || t.opt);
				break;
			case "message":
				if (s)
					for (let i of e) Pe(n, r, t, i);
				else e !== void 0 && Pe(n, r, t, e);
				break;
			case "map":
				for (let [i, a] of Object.entries(e)) mt(n, r, t, i, a);
				break
		}
	}
	var P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
		le = [];
	for (let t = 0; t < P.length; t++) le[P[t].charCodeAt(0)] = t;
	le["-".charCodeAt(0)] = P.indexOf("+");
	le["_".charCodeAt(0)] = P.indexOf("/");
	var X = {
		dec(t) {
			let e = t.length * 3 / 4;
			t[t.length - 2] == "=" ? e -= 2 : t[t.length - 1] == "=" && (e -= 1);
			let n = new Uint8Array(e),
				r = 0,
				s = 0,
				o, i = 0;
			for (let a = 0; a < t.length; a++) {
				if (o = le[t.charCodeAt(a)], o === void 0) switch (t[a]) {
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
					e += P[r >> 2], s = (r & 3) << 4, n = 1;
					break;
				case 1:
					e += P[s | r >> 4], s = (r & 15) << 2, n = 2;
					break;
				case 2:
					e += P[s | r >> 6], e += P[r & 63], n = 0;
					break
			}
			return n && (e += P[s], e += "=", n == 1 && (e += "=")), e
		}
	};

	function gt(t, e, n) {
		yt(e, t);
		let r = e.runtime.bin.makeReadOptions(n),
			s = ot(t.getType().runtime.bin.listUnknownFields(t), e.field),
			[o, i] = ue(e);
		for (let a of s) e.runtime.bin.readField(o, r.readerFactory(a.data), e.field, a.wireType, r);
		return i()
	}

	function ht(t, e, n, r) {
		yt(e, t);
		let s = e.runtime.bin.makeReadOptions(r),
			o = e.runtime.bin.makeWriteOptions(r);
		if (ve(t, e)) {
			let f = t.getType().runtime.bin.listUnknownFields(t).filter(d => d.no != e.field.no);
			t.getType().runtime.bin.discardUnknownFields(t);
			for (let d of f) t.getType().runtime.bin.onUnknownField(t, d.no, d.wireType, d.data)
		}
		let i = o.writerFactory(),
			a = e.field;
		!a.opt && !a.repeated && (a.kind == "enum" || a.kind == "scalar") && (a = Object.assign(Object.assign({}, e.field), {
			opt: !0
		})), e.runtime.bin.writeField(a, n, i, o);
		let c = s.readerFactory(i.finish());
		for (; c.pos < c.len;) {
			let [f, d] = c.tag(), l = c.skip(d);
			t.getType().runtime.bin.onUnknownField(t, f, d, l)
		}
	}

	function ve(t, e) {
		let n = t.getType();
		return e.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(t).find(r => r.no == e.field.no)
	}

	function yt(t, e) {
		I(t.extendee.typeName == e.getType().typeName, `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`)
	}
	var kt = {
			ignoreUnknownFields: !1
		},
		bt = {
			emitDefaultValues: !1,
			enumAsInteger: !1,
			useProtoFieldName: !1,
			prettySpaces: 0
		};

	function an(t) {
		return t ? Object.assign(Object.assign({}, kt), t) : kt
	}

	function cn(t) {
		return t ? Object.assign(Object.assign({}, bt), t) : bt
	}

	function xt(t, e) {
		let n = e(un, wt);
		return {
			makeReadOptions: an,
			makeWriteOptions: cn,
			readMessage(r, s, o, i) {
				if (s == null || Array.isArray(s) || typeof s != "object") throw new Error(`cannot decode message ${r.typeName} from JSON: ${U(s)}`);
				i = i ?? new r;
				let a = new Map,
					c = o.typeRegistry;
				for (let [f, d] of Object.entries(s)) {
					let l = r.fields.findJsonName(f);
					if (l) {
						if (l.oneof) {
							if (d === null && l.kind == "scalar") continue;
							let g = a.get(l.oneof);
							if (g !== void 0) throw new Error(`cannot decode message ${r.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${g}", "${f}"`);
							a.set(l.oneof, f)
						}
						Tt(i, d, l, o, r, t)
					} else {
						let g = !1;
						if (c?.findExtension && f.startsWith("[") && f.endsWith("]")) {
							let p = c.findExtension(f.substring(1, f.length - 1));
							if (p && p.extendee.typeName == r.typeName) {
								g = !0;
								let [y, R] = ue(p);
								Tt(y, d, p.field, o, p, !0), ht(i, p, R(), o)
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
						let d;
						if (f.kind == "oneof") {
							let l = r[f.localName];
							if (l.value === void 0) continue;
							if (a = f.findField(l.case), !a) throw "oneof case not found: " + l.case;
							d = n(a, l.value, s)
						} else a = f, d = n(a, r[a.localName], s);
						d !== void 0 && (i[s.useProtoFieldName ? a.name : a.jsonName] = d)
					}
					let c = s.typeRegistry;
					if (c?.findExtensionFor)
						for (let f of o.runtime.bin.listUnknownFields(r)) {
							let d = c.findExtensionFor(o.typeName, f.no);
							if (d && ve(r, d)) {
								let l = gt(r, d, s),
									g = n(d.field, l, s);
								g !== void 0 && (i[d.field.jsonName] = g)
							}
						}
				} catch (c) {
					let f = a ? `cannot encode field ${o.typeName}.${a.name} to JSON` : `cannot encode message ${o.typeName} to JSON`,
						d = c instanceof Error ? c.message : String(c);
					throw new Error(f + (d.length > 0 ? `: ${d}` : ""))
				}
				return i
			},
			readScalar: (r, s, o) => Q(r, s, o, t),
			writeScalar: wt,
			debug: U
		}
	}

	function U(t) {
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

	function Tt(t, e, n, r, s, o) {
		let i = n.localName;
		if (n.oneof) {
			if (e === null && n.kind == "scalar") return;
			t = t[n.oneof.localName] = {
				case: i
			}, i = "value"
		}
		if (n.repeated) {
			if (e === null) return;
			if (!Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${U(e)}`);
			let a = t[i];
			for (let c of e) {
				if (c === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${U(c)}`);
				let f;
				switch (n.kind) {
					case "message":
						f = n.T.fromJson(c, r);
						break;
					case "enum":
						if (f = De(n.T, c, r.ignoreUnknownFields, !0), f === void 0) continue;
						break;
					case "scalar":
						try {
							f = Q(n.T, c, n.L, !0)
						} catch (d) {
							let l = `cannot decode field ${s.typeName}.${n.name} from JSON: ${U(c)}`;
							throw d instanceof Error && d.message.length > 0 && (l += `: ${d.message}`), new Error(l)
						}
						break
				}
				a.push(f)
			}
		} else if (n.kind == "map") {
			if (e === null) return;
			if (typeof e != "object" || Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${U(e)}`);
			let a = t[i];
			for (let [c, f] of Object.entries(e)) {
				if (f === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: map value null`);
				let d;
				switch (n.V.kind) {
					case "message":
						d = n.V.T.fromJson(f, r);
						break;
					case "enum":
						if (d = De(n.V.T, f, r.ignoreUnknownFields, !0), d === void 0) continue;
						break;
					case "scalar":
						try {
							d = Q(n.V.T, f, O.BIGINT, !0)
						} catch (l) {
							let g = `cannot decode map value for field ${s.typeName}.${n.name} from JSON: ${U(e)}`;
							throw l instanceof Error && l.message.length > 0 && (g += `: ${l.message}`), new Error(g)
						}
						break
				}
				try {
					a[Q(n.K, n.K == u.BOOL ? c == "true" ? !0 : c == "false" ? !1 : c : c, O.BIGINT, !0).toString()] = d
				} catch (l) {
					let g = `cannot decode map key for field ${s.typeName}.${n.name} from JSON: ${U(e)}`;
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
				let c = De(n.T, e, r.ignoreUnknownFields, o);
				c !== void 0 && (t[i] = c);
				break;
			case "scalar":
				try {
					t[i] = Q(n.T, e, n.L, o)
				} catch (f) {
					let d = `cannot decode field ${s.typeName}.${n.name} from JSON: ${U(e)}`;
					throw f instanceof Error && f.message.length > 0 && (d += `: ${f.message}`), new Error(d)
				}
				break
		}
	}

	function Q(t, e, n, r) {
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
				return t == u.FLOAT && se(s), s;
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
				return X.dec(e)
		}
		throw new Error
	}

	function De(t, e, n, r) {
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
		throw new Error(`cannot decode enum ${t.typeName} from JSON: ${U(e)}`)
	}

	function un(t, e, n, r) {
		var s;
		if (e === void 0) return e;
		if (!n && t.values[0].no === e) return;
		if (r) return e;
		if (t.typeName == "google.protobuf.NullValue") return null;
		let o = t.findNumber(e);
		return (s = o?.name) !== null && s !== void 0 ? s : e
	}

	function wt(t, e, n) {
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
				return I(e instanceof Uint8Array), n || e.byteLength > 0 ? X.enc(e) : void 0
		}
	}

	function It() {
		return xt(!0, (t, e) => function(r, s, o) {
			if (r.kind == "map") {
				let i = {};
				switch (r.V.kind) {
					case "scalar":
						for (let [c, f] of Object.entries(s)) {
							let d = e(r.V.T, f, !0);
							I(d !== void 0), i[c.toString()] = d
						}
						break;
					case "message":
						for (let [c, f] of Object.entries(s)) i[c.toString()] = f.toJson(o);
						break;
					case "enum":
						let a = r.V.T;
						for (let [c, f] of Object.entries(s)) {
							I(f === void 0 || typeof f == "number");
							let d = t(a, f, !0, o.enumAsInteger);
							I(d !== void 0), i[c.toString()] = d
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
						return fe(r.T, s).toJson(o)
				}
			}
		})
	}

	function Nt() {
		return {
			setEnumType: Re,
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
							c && c.kind == "message" && !(f instanceof c.T) ? f = new c.T(f) : c && c.kind === "scalar" && c.T === u.BYTES && (f = Z(f)), o[s] = {
								case: a,
								value: f
							};
							break;
						case "scalar":
						case "enum":
							let d = i[s];
							r.T === u.BYTES && (d = r.repeated ? d.map(Z) : Z(d)), o[s] = d;
							break;
						case "map":
							switch (r.V.kind) {
								case "scalar":
								case "enum":
									if (r.V.T === u.BYTES)
										for (let [p, y] of Object.entries(i[s])) o[s][p] = Z(y);
									else Object.assign(o[s], i[s]);
									break;
								case "message":
									let g = r.V.T;
									for (let p of Object.keys(i[s])) {
										let y = i[s][p];
										g.fieldWrapper || (y = new g(y)), o[s][p] = y
									}
									break
							}
							break;
						case "message":
							let l = r.T;
							if (r.repeated) o[s] = i[s].map(g => g instanceof l ? g : new l(g));
							else if (i[s] !== void 0) {
								let g = i[s];
								l.fieldWrapper ? l.typeName === "google.protobuf.BytesValue" ? o[s] = Z(g) : o[s] = g : o[s] = g instanceof l ? g : new l(g)
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
								return s.every((i, a) => A(r.T, i, o[a]));
							case "enum":
								return s.every((i, a) => A(u.INT32, i, o[a]))
						}
						throw new Error(`repeated cannot contain ${r.kind}`)
					}
					switch (r.kind) {
						case "message":
							return r.T.equals(s, o);
						case "enum":
							return A(u.INT32, s, o);
						case "scalar":
							return A(r.T, s, o);
						case "oneof":
							if (s.case !== o.case) return !1;
							let i = r.findField(s.case);
							if (i === void 0) return !0;
							switch (i.kind) {
								case "message":
									return i.T.equals(s.value, o.value);
								case "enum":
									return A(u.INT32, s.value, o.value);
								case "scalar":
									return A(i.T, s.value, o.value)
							}
							throw new Error(`oneof cannot contain ${i.kind}`);
						case "map":
							let a = Object.keys(s).concat(Object.keys(o));
							switch (r.V.kind) {
								case "message":
									let c = r.V.T;
									return a.every(d => c.equals(s[d], o[d]));
								case "enum":
									return a.every(d => A(u.INT32, s[d], o[d]));
								case "scalar":
									let f = r.V.T;
									return a.every(d => A(f, s[d], o[d]))
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
					if (s.repeated) i = o.map(pe);
					else if (s.kind == "map") {
						i = r[s.localName];
						for (let [a, c] of Object.entries(o)) i[a] = pe(c)
					} else s.kind == "oneof" ? i = s.findField(o.case) ? {
						case: o.case,
						value: pe(o.value)
					} : {
						case: void 0
					} : i = pe(o);
					r[s.localName] = i
				}
				return n
			}
		}
	}

	function pe(t) {
		if (t === void 0) return t;
		if (t instanceof E) return t.clone();
		if (t instanceof Uint8Array) {
			let e = new Uint8Array(t.byteLength);
			return e.set(t), e
		}
		return t
	}

	function Z(t) {
		return t instanceof Uint8Array ? t : new Uint8Array(t)
	}
	var ge = class {
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

	function Le(t, e) {
		let n = Ft(t);
		return e ? n : ln(dn(n))
	}

	function St(t) {
		return Le(t, !1)
	}
	var Et = Ft;

	function Ft(t) {
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
	var fn = new Set(["constructor", "toString", "toJSON", "valueOf"]),
		mn = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]),
		Rt = t => `${t}$`,
		dn = t => mn.has(t) ? Rt(t) : t,
		ln = t => fn.has(t) ? Rt(t) : t;
	var he = class {
		constructor(e) {
			this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = St(e)
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
	var m = it("proto3", It(), pt(), Object.assign(Object.assign({}, Nt()), {
		newFieldList(t) {
			return new ge(t, pn)
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
						r[n] = J(e.T, e.L);
						break;
					case "message":
						break
				}
			}
		}
	}));

	function pn(t) {
		var e, n, r, s;
		let o = [],
			i;
		for (let a of typeof t == "function" ? t() : t) {
			let c = a;
			if (c.localName = Le(a.name, a.oneof !== void 0), c.jsonName = (e = a.jsonName) !== null && e !== void 0 ? e : Et(a.name), c.repeated = (n = a.repeated) !== null && n !== void 0 ? n : !1, a.kind == "scalar" && (c.L = (r = a.L) !== null && r !== void 0 ? r : O.BIGINT), a.oneof !== void 0) {
				let f = typeof a.oneof == "string" ? a.oneof : a.oneof.name;
				(!i || i.name != f) && (i = new he(f)), c.oneof = i, i.addField(c)
			}
			a.kind == "message" && (c.delimited = !1), c.packed = (s = a.packed) !== null && s !== void 0 ? s : a.kind == "enum" || a.kind == "scalar" && a.T != u.BYTES && a.T != u.STRING, o.push(c)
		}
		return o
	}
	var ye = m.makeMessageType("youtube.response.frameworkUpdate.FrameworkUpdateTransport", () => [{
			no: 1,
			name: "entityBatchUpdate",
			kind: "message",
			T: gn
		}]),
		gn = m.makeMessageType("youtube.response.frameworkUpdate.EntityBatchUpdate", () => [{
			no: 1,
			name: "mutations",
			kind: "message",
			T: hn,
			repeated: !0
		}]),
		hn = m.makeMessageType("youtube.response.frameworkUpdate.Mutation", () => [{
			no: 1,
			name: "entityKey",
			kind: "scalar",
			T: 9
		}, {
			no: 2,
			name: "type",
			kind: "scalar",
			T: 5
		}, {
			no: 3,
			name: "payload",
			kind: "message",
			T: yn
		}]),
		yn = m.makeMessageType("youtube.response.frameworkUpdate.Payload", []),
		Ct = m.makeMessageType("youtube.response.frameworkUpdate.Entity", () => [{
			no: 2,
			name: "name",
			kind: "scalar",
			T: 9
		}, {
			no: 4,
			name: "targetNo",
			kind: "scalar",
			T: 5
		}, {
			no: 5,
			name: "type",
			kind: "scalar",
			T: 5
		}]);
	var vo = m.makeMessageType("youtube.response.config.Config", () => [{
			no: 1,
			name: "response_context",
			kind: "message",
			T: kn
		}]),
		kn = m.makeMessageType("youtube.response.config.ResponseContext", () => [{
			no: 16,
			name: "globalConfigGroup",
			kind: "message",
			T: ee
		}]),
		ee = m.makeMessageType("youtube.response.config.GlobalConfigGroup", () => [{
			no: 6,
			name: "coldConfigGroup",
			kind: "message",
			T: bn
		}, {
			no: 7,
			name: "hotConfigGroup",
			kind: "message",
			T: Tn
		}, {
			no: 4,
			name: "hot_hash_data",
			kind: "scalar",
			T: 9,
			opt: !0
		}, {
			no: 5,
			name: "cold_hash_data",
			kind: "scalar",
			T: 9,
			opt: !0
		}]),
		bn = m.makeMessageType("youtube.response.config.ColdConfigGroup", []),
		Tn = m.makeMessageType("youtube.response.config.HotConfigGroup", () => [{
			no: 138536474,
			name: "mediaHotConfig",
			kind: "message",
			T: wn
		}]),
		wn = m.makeMessageType("youtube.response.config.MediaHotConfig", () => [{
			no: 146311580,
			name: "onesieHotConfig",
			kind: "message",
			T: xn
		}]),
		xn = m.makeMessageType("youtube.response.config.OnesieHotConfig", () => [{
			no: 1,
			name: "clientKey",
			kind: "scalar",
			T: 12
		}, {
			no: 2,
			name: "encryptKey",
			kind: "scalar",
			T: 12
		}, {
			no: 3,
			name: "keyExpiresInSeconds",
			kind: "scalar",
			T: 3
		}, {
			no: 30,
			name: "useHotConfigToCreateOnesieRequest",
			kind: "scalar",
			T: 8
		}]);
	var Mt = m.makeMessageType("youtube.response.browse.Browse", () => [{
			no: 1,
			name: "responseContext",
			kind: "message",
			T: In
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
		}, {
			no: 777,
			name: "frameworkUpdateTransport",
			kind: "message",
			T: ye
		}]),
		In = m.makeMessageType("youtube.response.browse.ResponseContext", () => [{
			no: 6,
			name: "serviceTrackingParams",
			kind: "message",
			T: Nn,
			repeated: !0
		}, {
			no: 16,
			name: "globalConfigGroup",
			kind: "message",
			T: ee
		}]),
		Nn = m.makeMessageType("youtube.response.browse.ServiceTrackingParams", () => [{
			no: 1,
			name: "service",
			kind: "scalar",
			T: 5
		}, {
			no: 2,
			name: "params",
			kind: "message",
			T: Sn,
			repeated: !0
		}]),
		Sn = m.makeMessageType("youtube.response.browse.Params", () => [{
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
		$ = m.makeMessageType("youtube.response.browse.Contents", () => [{
			no: 58173949,
			name: "browseResultsRenderer",
			kind: "message",
			T: En
		}, {
			no: 153515154,
			name: "videoWithContextRenderer",
			kind: "message",
			T: Ut
		}, {
			no: 49399797,
			name: "richGridRenderer",
			kind: "message",
			T: $e
		}]),
		En = m.makeMessageType("youtube.response.browse.BrowseResultsRenderer", () => [{
			no: 1,
			name: "tabs",
			kind: "message",
			T: Fn,
			repeated: !0
		}]),
		Fn = m.makeMessageType("youtube.response.browse.Tab", () => [{
			no: 58174010,
			name: "tabRenderer",
			kind: "message",
			T: Rn
		}]),
		Rn = m.makeMessageType("youtube.response.browse.TabRenderer", () => [{
			no: 4,
			name: "contents",
			kind: "message",
			T: $
		}]),
		$e = m.makeMessageType("youtube.response.browse.RichGridRenderer", () => [{
			no: 1,
			name: "richGridContents",
			kind: "message",
			T: Cn,
			repeated: !0
		}]),
		Cn = m.makeMessageType("youtube.response.browse.RichGridContent", () => [{
			no: 50195462,
			name: "richItemRenderer",
			kind: "message",
			T: Ve
		}, {
			no: 51845067,
			name: "richSectionRenderer",
			kind: "message",
			T: Ln
		}, {
			no: 221496734,
			name: "musicDescriptionShelfRenderer",
			kind: "message",
			T: Gn
		}]),
		Ve = m.makeMessageType("youtube.response.browse.RichItemRenderer", () => [{
			no: 1,
			name: "richItemContent",
			kind: "message",
			T: Ot,
			repeated: !0
		}]),
		Ot = m.makeMessageType("youtube.response.browse.RichItemContent", () => [{
			no: 153515154,
			name: "videoWithContextRenderer",
			kind: "message",
			T: Ut
		}]),
		Ut = m.makeMessageType("youtube.response.browse.VideoWithContextRenderer", () => [{
			no: 172660663,
			name: "videoRendererContent",
			kind: "message",
			T: Bn
		}]),
		Bn = m.makeMessageType("youtube.response.browse.VideoRendererContent", () => [{
			no: 1,
			name: "videoInfo",
			kind: "message",
			T: Mn
		}, {
			no: 2,
			name: "renderInfo",
			kind: "message",
			T: vn
		}]),
		Mn = m.makeMessageType("youtube.response.browse.VideoInfo", () => [{
			no: 168777401,
			name: "videoContext",
			kind: "message",
			T: On
		}]),
		On = m.makeMessageType("youtube.response.browse.VideoContext", () => [{
			no: 5,
			name: "videoContent",
			kind: "message",
			T: Un
		}]),
		Un = m.makeMessageType("youtube.response.browse.VideoContent", () => [{
			no: 465160965,
			name: "timedLyricsRender",
			kind: "message",
			T: An
		}]),
		An = m.makeMessageType("youtube.response.browse.TimedLyricsRender", () => [{
			no: 4,
			name: "timedLyricsContent",
			kind: "message",
			T: Pn
		}]),
		Pn = m.makeMessageType("youtube.response.browse.TimedLyricsContent", () => [{
			no: 1,
			name: "runs",
			kind: "message",
			T: At,
			repeated: !0
		}, {
			no: 2,
			name: "footerLabel",
			kind: "scalar",
			T: 9
		}]),
		vn = m.makeMessageType("youtube.response.browse.RenderInfo", () => [{
			no: 183314536,
			name: "layoutRender",
			kind: "message",
			T: Dn
		}]),
		Dn = m.makeMessageType("youtube.response.browse.LayoutRender", () => [{
			no: 1,
			name: "eml",
			kind: "scalar",
			T: 9
		}]),
		Ln = m.makeMessageType("youtube.response.browse.RichSectionRenderer", () => [{
			no: 5,
			name: "richSectionContent",
			kind: "message",
			T: $n
		}]),
		$n = m.makeMessageType("youtube.response.browse.RichSectionContent", () => [{
			no: 51431404,
			name: "reelShelfRenderer",
			kind: "message",
			T: Vn
		}]),
		Vn = m.makeMessageType("youtube.response.browse.ReelShelfRenderer", () => [{
			no: 1,
			name: "richItemContent",
			kind: "message",
			T: Ot,
			repeated: !0
		}]),
		Gn = m.makeMessageType("youtube.response.browse.MusicDescriptionShelfRenderer", () => [{
			no: 3,
			name: "description",
			kind: "message",
			T: Bt
		}, {
			no: 10,
			name: "footer",
			kind: "message",
			T: Bt
		}]),
		Bt = m.makeMessageType("youtube.response.browse.Label", () => [{
			no: 1,
			name: "runs",
			kind: "message",
			T: At,
			repeated: !0
		}]),
		At = m.makeMessageType("youtube.response.browse.Run", () => [{
			no: 1,
			name: "text",
			kind: "scalar",
			T: 9
		}]);
	var ke = m.makeMessageType("youtube.response.next.Next", () => [{
			no: 7,
			name: "Contents",
			kind: "message",
			T: Jn
		}, {
			no: 8,
			name: "onResponseReceivedActions",
			kind: "message",
			T: $
		}, {
			no: 777,
			name: "frameworkUpdateTransport",
			kind: "message",
			T: ye
		}]),
		Jn = m.makeMessageType("youtube.response.next.Contents", () => [{
			no: 51779735,
			name: "NextResults",
			kind: "message",
			T: _n
		}]),
		_n = m.makeMessageType("youtube.response.next.NextResults", () => [{
			no: 1,
			name: "Contents",
			kind: "message",
			T: $
		}]);
	var Pt = m.makeMessageType("youtube.response.search.Search", () => [{
			no: 4,
			name: "contents",
			kind: "message",
			T: $
		}, {
			no: 7,
			name: "onResponseReceivedCommands",
			kind: "message",
			T: qn
		}]),
		qn = m.makeMessageType("youtube.response.search.OnResponseReceivedCommands", () => [{
			no: 50195462,
			name: "richItemRenderer",
			kind: "message",
			T: Ve
		}, {
			no: 49399797,
			name: "appendContinuationItemsAction",
			kind: "message",
			T: $e
		}]);
	var vt = m.makeMessageType("youtube.response.shorts.Shorts", () => [{
			no: 2,
			name: "entries",
			kind: "message",
			T: Yn,
			repeated: !0
		}]),
		Yn = m.makeMessageType("youtube.response.shorts.Entry", () => [{
			no: 1,
			name: "command",
			kind: "message",
			T: Xn
		}]),
		Xn = m.makeMessageType("youtube.response.shorts.Command", () => [{
			no: 139608561,
			name: "reelWatchEndpoint",
			kind: "message",
			T: Wn
		}]),
		Wn = m.makeMessageType("youtube.response.shorts.ReelWatchEndpoint", () => [{
			no: 8,
			name: "overlay",
			kind: "message",
			T: jn
		}]),
		jn = m.makeMessageType("youtube.response.shorts.Overlay", () => [{
			no: 139970731,
			name: "reelPlayerOverlayRenderer",
			kind: "message",
			T: Kn
		}]),
		Kn = m.makeMessageType("youtube.response.shorts.ReelPlayerOverlayRenderer", () => [{
			no: 12,
			name: "style",
			kind: "scalar",
			T: 5
		}]);
	var $t = m.makeMessageType("youtube.response.browse.Guide", () => [{
			no: 4,
			name: "items4",
			kind: "message",
			T: Dt,
			repeated: !0
		}, {
			no: 6,
			name: "items6",
			kind: "message",
			T: Dt,
			repeated: !0
		}]),
		Dt = m.makeMessageType("youtube.response.browse.Item", () => [{
			no: 117866661,
			name: "guideSectionRenderer",
			kind: "message",
			T: Hn
		}]),
		Hn = m.makeMessageType("youtube.response.browse.GuideSectionRenderer", () => [{
			no: 1,
			name: "rendererItems",
			kind: "message",
			T: zn,
			repeated: !0
		}]),
		zn = m.makeMessageType("youtube.response.browse.RendererItem", () => [{
			no: 318370163,
			name: "iconRender",
			kind: "message",
			T: Lt
		}, {
			no: 117501096,
			name: "labelRender",
			kind: "message",
			T: Lt
		}]),
		Lt = m.makeMessageType("youtube.response.browse.guideEntryRenderer", () => [{
			no: 1,
			name: "browseId",
			kind: "scalar",
			T: 9
		}]);
	var be = m.makeMessageType("youtube.response.player.Player", () => [{
			no: 7,
			name: "adPlacements",
			kind: "message",
			T: Qn,
			repeated: !0
		}, {
			no: 2,
			name: "playabilityStatus",
			kind: "message",
			T: er
		}, {
			no: 9,
			name: "playbackTracking",
			kind: "message",
			T: sr
		}, {
			no: 10,
			name: "captions",
			kind: "message",
			T: or
		}, {
			no: 68,
			name: "adSlots",
			kind: "message",
			T: ur,
			repeated: !0
		}]),
		Qn = m.makeMessageType("youtube.response.player.AdPlacement", () => [{
			no: 84813246,
			name: "adPlacementRenderer",
			kind: "message",
			T: Zn
		}]),
		Zn = m.makeMessageType("youtube.response.player.AdPlacementRenderer", () => [{
			no: 4,
			name: "params",
			kind: "scalar",
			T: 9
		}]),
		er = m.makeMessageType("youtube.response.player.PlayabilityStatus", () => [{
			no: 21,
			name: "miniPlayer",
			kind: "message",
			T: tr
		}, {
			no: 11,
			name: "backgroundPlayer",
			kind: "message",
			T: Ge
		}]),
		tr = m.makeMessageType("youtube.response.player.MiniPlayer", () => [{
			no: 151635310,
			name: "miniPlayerRender",
			kind: "message",
			T: nr
		}]),
		Ge = m.makeMessageType("youtube.response.player.BackgroundPlayer", () => [{
			no: 64657230,
			name: "backgroundPlayerRender",
			kind: "message",
			T: rr
		}]),
		nr = m.makeMessageType("youtube.response.player.MiniPlayerRender", () => [{
			no: 1,
			name: "active",
			kind: "scalar",
			T: 8
		}]),
		rr = m.makeMessageType("youtube.response.player.BackgroundPlayerRender", () => [{
			no: 1,
			name: "active",
			kind: "scalar",
			T: 8
		}]),
		sr = m.makeMessageType("youtube.response.player.PlaybackTracking", () => [{
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
		V = m.makeMessageType("youtube.response.player.Tracking", () => [{
			no: 1,
			name: "baseUrl",
			kind: "scalar",
			T: 9
		}]),
		or = m.makeMessageType("youtube.response.player.Captions", () => [{
			no: 51621377,
			name: "playerCaptionsTrackListRenderer",
			jsonName: "playerCaptionsTracklistRenderer",
			kind: "message",
			T: ir
		}]),
		ir = m.makeMessageType("youtube.response.player.PlayerCaptionsTrackListRenderer", () => [{
			no: 1,
			name: "captionTracks",
			kind: "message",
			T: Je,
			repeated: !0
		}, {
			no: 2,
			name: "audioTracks",
			kind: "message",
			T: ar,
			repeated: !0
		}, {
			no: 3,
			name: "translationLanguages",
			kind: "message",
			T: _e,
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
		Je = m.makeMessageType("youtube.response.player.CaptionTrack", () => [{
			no: 1,
			name: "baseUrl",
			kind: "scalar",
			T: 9
		}, {
			no: 2,
			name: "name",
			kind: "message",
			T: Vt
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
		ar = m.makeMessageType("youtube.response.player.AudioTrack", () => [{
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
		_e = m.makeMessageType("youtube.response.player.TranslationLanguage", () => [{
			no: 1,
			name: "languageCode",
			kind: "scalar",
			T: 9
		}, {
			no: 2,
			name: "languageName",
			kind: "message",
			T: Vt
		}]),
		Vt = m.makeMessageType("youtube.response.player.Name", () => [{
			no: 1,
			name: "runs",
			kind: "message",
			T: cr,
			repeated: !0
		}]),
		cr = m.makeMessageType("youtube.response.player.Name.Run", () => [{
			no: 1,
			name: "text",
			kind: "scalar",
			T: 9
		}], {
			localName: "Name_Run"
		}),
		ur = m.makeMessageType("youtube.response.player.AdSlot", () => [{
			no: 424701016,
			name: "render",
			kind: "message",
			T: fr
		}]),
		fr = m.makeMessageType("youtube.response.player.AdSlot.Render", [], {
			localName: "AdSlot_Render"
		});
	var Jt = m.makeMessageType("youtube.response.setting.Setting", () => [{
			no: 6,
			name: "settingItems",
			kind: "message",
			T: qe,
			repeated: !0
		}, {
			no: 10,
			name: "trackingParams",
			kind: "message",
			T: Te
		}]),
		qe = m.makeMessageType("youtube.response.setting.SettingItem", () => [{
			no: 88478200,
			name: "settingCategoryEntryRenderer",
			kind: "message",
			T: dr
		}, {
			no: 66930374,
			name: "settingCategoryCollectionRenderer",
			kind: "message",
			T: lr
		}]),
		Te = m.makeMessageType("youtube.response.setting.TrackingParams", () => [{
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
			T: mr
		}]),
		mr = m.makeMessageType("youtube.response.setting.TimeInfo", () => [{
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
		dr = m.makeMessageType("youtube.response.setting.SettingCategoryEntryRenderer", () => [{
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
			T: Te
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
		lr = m.makeMessageType("youtube.response.setting.SettingCategoryCollectionRenderer", () => [{
			no: 3,
			name: "subSettings",
			kind: "message",
			T: Ye,
			repeated: !0
		}, {
			no: 4,
			name: "categoryId",
			kind: "scalar",
			T: 5
		}]),
		Ye = m.makeMessageType("youtube.response.setting.SubSetting", () => [{
			no: 61331416,
			name: "settingBooleanRenderer",
			kind: "message",
			T: pr
		}]),
		pr = m.makeMessageType("youtube.response.setting.SettingBooleanRenderer", () => [{
			no: 5,
			name: "enableServiceEndpoint",
			kind: "message",
			T: Gt
		}, {
			no: 6,
			name: "disableServiceEndpoint",
			kind: "message",
			T: Gt
		}, {
			no: 13,
			name: "clickTrackingParams",
			kind: "message",
			T: Te
		}, {
			no: 15,
			name: "itemId",
			kind: "scalar",
			T: 5
		}]),
		Gt = m.makeMessageType("youtube.response.setting.ServiceEndpoint", () => [{
			no: 2,
			name: "trackingParams",
			kind: "message",
			T: Te
		}, {
			no: 81212182,
			name: "setClientSettingEndpoint",
			kind: "message",
			T: gr
		}]),
		gr = m.makeMessageType("youtube.response.setting.SetClientSettingEndpoint", () => [{
			no: 1,
			name: "settingDatas",
			kind: "message",
			T: hr
		}]),
		hr = m.makeMessageType("youtube.response.setting.SettingDatas", () => [{
			no: 1,
			name: "clientSettingEnum",
			kind: "message",
			T: yr
		}, {
			no: 3,
			name: "boolValue",
			kind: "scalar",
			T: 8
		}]),
		yr = m.makeMessageType("youtube.response.setting.ClientSettingEnum", () => [{
			no: 1,
			name: "item",
			kind: "scalar",
			T: 5
		}]);
	var _t = m.makeMessageType("youtube.response.watch.Watch", () => [{
			no: 1,
			name: "contents",
			kind: "message",
			T: kr,
			repeated: !0
		}]),
		kr = m.makeMessageType("youtube.response.watch.Content", () => [{
			no: 2,
			name: "player",
			kind: "message",
			T: be
		}, {
			no: 3,
			name: "next",
			kind: "message",
			T: ke
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
				let r = "Shadowrocket";
				return typeof $loon < "u" ? r = "Loon" : typeof $task < "u" && (r = "QuanX"), W.instances[r] || (W.instances[r] = W.classNames[r](e, r, n)), W.instances[r]
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
			decodeParams(e) {
				return e
			}
		},
		D = W;
	H(D, "instances", {}), H(D, "classNames", {
		QuanX: (e, n, r) => new we(e, n, r),
		Shadowrocket: (e, n, r) => new te(e, n, r),
		Loon: (e, n, r) => new Xe(e, n, r)
	});
	var xe = class extends D {
			getFn(e, n, r) {
				let s = xe.clientAdapter[n] || n;
				return super.getFn(e, s, r)
			}
			setFn(e, n, r, s) {
				let o = xe.clientAdapter[n] || n;
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
					}, (d, l, g) => {
						d && r(d);
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
			decodeParams(e) {
				return typeof $argument == "string" && !$argument.includes("{{{") && Object.assign(e, JSON.parse($argument)), e
			}
		},
		te = xe;
	H(te, "clientAdapter", {
		bodyBytes: "body"
	});
	var v = class extends D {
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
		we = v;
	H(we, "clientAdapter", {
		id: "sessionIndex",
		status: "statusCode"
	});
	var Xe = class extends te {
		decodeParams(e) {
			if (typeof $argument < "u")
				for (let n of Object.keys(e)) {
					let r = $argument?.[n];
					r !== void 0 && (e[n] = r)
				}
			return e
		}
	};
	var h = D.getInstance("YouTube");
	var L = class {
		name;
		needProcess;
		needSave;
		message;
		version = "1.0";
		whiteNo = [];
		blackNo = [];
		whiteEml = [];
		blackEml = ["inline_injection_entrypoint_layout.eml"];
		msgType;
		argument;
		decoder = new TextDecoder("utf-8", {
			fatal: !1,
			ignoreBOM: !0
		});
		constructor(e, n) {
			this.name = n, this.msgType = e, this.argument = this.decodeArgument(), h.isDebug = Boolean(this.argument.debug), h.debug(this.name);
			let r = h.getJSON("YouTubeAdvertiseInfo");
			h.debug(`currentVersion:  ${this.version}`), h.debug(`storedVersion:  ${r.version}`), r?.version === this.version && Object.assign(this, r)
		}
		decodeArgument() {
			let e = {
				lyricLang: "zh-Hans",
				captionLang: "zh-Hans",
				blockUpload: !0,
				blockImmersive: !0,
				debug: !1
			};
			return h.decodeParams(e)
		}
		fromBinary(e) {
			return e instanceof Uint8Array ? (this.message = this.msgType.fromBinary(e), h.debug(`raw: ${Math.floor(e.length/1024)} kb`), this) : (h.log("YouTube can not get binaryBody"), h.exit(), this)
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
				h.debug("Update Config");
				let e = {
					version: this.version,
					whiteNo: this.whiteNo,
					blackNo: this.blackNo,
					whiteEml: this.whiteEml,
					blackEml: this.blackEml
				};
				h.debug(e), h.setJSON(e, "YouTubeAdvertiseInfo")
			}
		}
		done() {
			if (this.save(), this.needProcess) {
				h.timeStart("toBinary");
				let e = this.toBinary();
				h.timeEnd("toBinary"), h.debug(`modify: ${Math.floor(e.length/1024)} kb`), h.done({
					bodyBytes: e
				})
			}
			h.debug("use $done({})"), h.exit()
		}
		iterate(e = {}, n, r) {
			let s = typeof e == "object" ? [e] : [];
			for (; s.length;) {
				let o = s.pop(),
					i = Object.keys(o);
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
			let r = this.checkBufferIsAd(e);
			return r ? this.blackNo.push(n) : this.whiteNo.push(n), this.needSave = !0, r
		}
		handleFieldEml(e) {
			let n = !1,
				r = "";
			return this.iterate(e, "renderInfo", (s, o) => {
				if (r = s.renderInfo.layoutRender.eml.split("|")[0], this.whiteEml.includes(r)) n = !1;
				else if (this.blackEml.includes(r) || /shorts(?!_pivot_item)/.test(r)) n = !0;
				else {
					let i = s?.videoInfo?.videoContext?.videoContent;
					i && (n = this.checkUnknownFiled(i), n ? this.blackEml.push(r) : this.whiteEml.push(r), this.needSave = !0)
				}
				o.length = 0
			}), n
		}
		checkBufferIsAd(e) {
			return !e || e.data.length < 1e3 ? !1 : this.decoder.decode(e.data).includes("pagead")
		}
		checkUnknownFiled(e) {
			return e ? this.listUnknownFields(e)?.some(r => this.checkBufferIsAd(r)) ?? !1 : !1
		}
		isShorts(e) {
			let n = !1;
			return this.iterate(e, "eml", (r, s) => {
				n = /shorts(?!_pivot_item)/.test(r.eml), s.length = 0
			}), n
		}
	};

	function br(t) {
		let r = ".",
			s = "+-a^+6",
			o = "+-3^+b+-f",
			i, a, c;
		for (i = [], a = 0, c = 0; c < t.length; c++) {
			let f = t.charCodeAt(c);
			128 > f ? i[a++] = f : (2048 > f ? i[a++] = f >> 6 | 192 : ((f & 64512) == 55296 && c + 1 < t.length && (t.charCodeAt(c + 1) & 64512) == 56320 ? (f = 65536 + ((f & 1023) << 10) + (t.charCodeAt(++c) & 1023), i[a++] = f >> 18 | 240, i[a++] = f >> 12 & 63 | 128) : i[a++] = f >> 12 | 224, i[a++] = f >> 6 & 63 | 128), i[a++] = f & 63 | 128)
		}
		for (t = 406644, a = 0; a < i.length; a++) t += i[a], t = qt(t, s);
		return t = qt(t, o), t ^= 3293161072, 0 > t && (t = (t & 2147483647) + 2147483648), t %= 1e6, t.toString() + r + (t ^ 406644)
	}

	function qt(t, e) {
		let n = "a",
			r = "+",
			s;
		for (let o = 0; o < e.length - 2; o += 3) s = e.charAt(o + 2), s = s >= n ? s.charCodeAt(0) - 87 : Number(s), s = e.charAt(o + 1) == r ? t >>> s : t << s, t = e.charAt(o) == r ? t + s & 4294967295 : t ^ s;
		return t
	}

	function Yt(t, e) {
		return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${e}&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${br(t)}&q=${encodeURIComponent(t)}`
	}
	var j = class extends L {
			constructor(e = Mt, n = "Browse") {
				super(e, n)
			}
			async pure() {
				return this.iterate(this.message, "richGridContents", e => {
					for (let n = e.richGridContents.length - 1; n >= 0; n--) this.removeCommonAD(e, n), this.removeShorts(e, n)
				}), await this.translate(), this
			}
			addClientKey() {
				this.message.responseContext && (this.message.responseContext.globalConfigGroup = new ee({
					hotConfigGroup: {
						mediaHotConfig: {
							onesieHotConfig: {
								clientKey: new Uint8Array([254, 182, 69, 182, 237, 221, 161, 115, 72, 7, 88, 165, 188, 249, 44, 160, 17, 94, 65, 219, 151, 209, 82, 6, 152, 187, 188, 81, 52, 82, 181, 148]),
								encryptKey: new Uint8Array([0, 170, 76, 193, 204, 43, 169, 7, 152, 73, 130, 130, 80, 182, 25, 54, 93, 41, 16, 60, 137, 32, 187, 146, 187, 223, 219, 5, 32, 147, 28, 251, 20, 204, 93, 210, 255, 151, 129, 195, 224, 84, 167, 162, 189, 76, 184, 133, 153, 16, 164, 151, 71]),
								keyExpiresInSeconds: 259200n,
								useHotConfigToCreateOnesieRequest: !0
							}
						}
					}
				}), this.needProcess = !0)
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
						r = c.timedLyricsContent, n = c.timedLyricsContent.runs.map(d => d.text).join(`
`), s = !0, f.length = 0
					}), s || this.iterate(this.message, "description", (c, f) => {
						r = c.description.runs[0], n = c.description.runs[0].text, f.length = 0, s = !0
					}), !s) return;
				let o = e.split("-")[0],
					i = Yt(n, e),
					a = await h.fetch({
						method: "GET",
						url: i
					});
				if (a.status === 200 && a.body) {
					let c = JSON.parse(a.body),
						f = " & Translated by Google",
						d = c[2].includes(o);
					r.text ? (r.text = c[0].map(l => d ? l[0] : l[1] + l[0] || "").join(`\r
`), this.iterate(this.message, "footer", (l, g) => {
						l.footer.runs[0].text += f, g.length = 0
					})) : r.runs.length <= c[0].length && (r.runs.forEach((l, g) => {
						l.text = d ? c[0][g][0] : l.text + `
${c[0][g][0]}`
					}), r.footerLabel += f), this.needProcess = !0
				}
			}
			removeFrameworkUpdateAd() {
				let e = this.message?.frameworkUpdateTransport?.entityBatchUpdate?.mutations;
				if (e)
					for (let n = e.length - 1; n >= 0; n--) {
						let r = e[n],
							s = Ct.fromBinary(X.dec(decodeURIComponent(r.entityKey))),
							o = this.blackEml.includes(s.name);
						!o && this.checkUnknownFiled(r?.payload) && (o = !0, this.blackEml.push(s.name), this.needSave = !0), o && (e.splice(n, 1), this.needProcess = !0)
					}
			}
		},
		ne = class extends j {
			constructor(e = ke, n = "Next") {
				super(e, n)
			}
		},
		re = class extends L {
			constructor(e = be, n = "Player") {
				super(e, n)
			}
			pure() {
				return this.message.adPlacements?.length && (this.message.adPlacements.length = 0), this.message.adSlots?.length && (this.message.adSlots.length = 0), delete this.message?.playbackTracking?.pageadViewthroughconversion, this.addPlayAbility(), this.addTranslateCaption(), this.needProcess = !0, this
			}
			addPlayAbility() {
				let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
				typeof e == "object" && (e.active = !0), typeof this.message.playabilityStatus == "object" && (this.message.playabilityStatus.backgroundPlayer = new Ge({
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
						for (let d = 0; d < s.length; d++) {
							let l = s[d],
								g = a[l.languageCode];
							g && g > c && (c = g, f = d), l.isTranslatable = !0
						}
						if (c !== 2) {
							let d = new Je({
								baseUrl: s[f].baseUrl + `&tlang=${e}`,
								name: {
									runs: [{
										text: `@Enhance (${e})`
									}]
								},
								vssId: `.${e}`,
								languageCode: e
							});
							s.push(d)
						}
						if (Array.isArray(o)) {
							let d = c === 2 ? f : s.length - 1;
							for (let l of o) l.captionTrackIndices?.includes(d) || l.captionTrackIndices.push(d), l.defaultCaptionTrackIndex = d, l.captionsInitialState = 3
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
					n.translationLanguages = Object.entries(i).map(([a, c]) => new _e({
						languageCode: a,
						languageName: {
							runs: [{
								text: c
							}]
						}
					})), r.length = 0
				})
			}
		},
		Ie = class extends j {
			constructor(e = Pt, n = "Search") {
				super(e, n)
			}
		},
		Ne = class extends L {
			constructor(e = vt, n = "Shorts") {
				super(e, n)
			}
			pure() {
				let e = this.message.entries?.length;
				if (e)
					for (let n = e - 1; n >= 0; n--) this.message.entries[n].command?.reelWatchEndpoint?.overlay || (this.message.entries.splice(n, 1), this.needProcess = !0);
				return this
			}
		},
		Se = class extends L {
			constructor(e = $t, n = "Guide") {
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
		Ee = class extends L {
			constructor(e = Jt, n = "Setting") {
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
							s = new Ye({
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
				let e = new qe({
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
		Fe = class extends L {
			player;
			next;
			constructor(e = _t, n = "Watch") {
				super(e, n), this.player = new re, this.next = new ne
			}
			async pure() {
				for (let e of this.message.contents) e.player && (this.player.message = e.player, await this.player.pure()), e.next && (this.next.message = e.next, await this.next.pure()), this.needProcess = !0;
				return this
			}
		};
	var Tr = new Map([
		["browse", j],
		["next", ne],
		["player", re],
		["search", Ie],
		["reel_watch_sequence", Ne],
		["guide", Se],
		["get_setting", Ee],
		["get_watch", Fe]
	]);

	function We(t) {
		for (let [e, n] of Tr.entries())
			if (t.includes(e)) return new n;
		return null
	}
	async function wr() {
		let t = We(h.request.url);
		if (t) {
			let e = h.response.bodyBytes;
			h.timeStart("fromBinary"), t.fromBinary(e), h.timeEnd("fromBinary"), h.timeStart("modify"), await t.modify(), h.timeEnd("modify"), t.done()
		} else h.msg("YouTube Enhance", "\u811A\u672C\u9700\u8981\u66F4\u65B0", "\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0"), h.exit()
	}
	wr().catch(t => {
		h.log(t.toString())
	}).finally(() => {
		h.exit()
	});
})();
