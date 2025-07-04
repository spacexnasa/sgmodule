// Build: 2024/11/12 23:57:15
(() => {
	var ct = Object.defineProperty;
	var ft = (t, e, n) => e in t ? ct(t, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : t[e] = n;
	var G = (t, e, n) => (ft(t, typeof e != "symbol" ? e + "" : e, n), n);
	(function(t) {
		function e() {}

		function n() {}
		var r = String.fromCharCode,
			s = {}.toString,
			i = s.call(t.SharedArrayBuffer),
			o = s(),
			a = t.Uint8Array,
			c = a || Array,
			u = a ? ArrayBuffer : c,
			l = u.isView || function(p) {
				return p && "length" in p
			},
			m = s.call(u.prototype);
		u = n.prototype;
		var h = t.TextEncoder,
			d = new(a ? Uint16Array : c)(32);
		e.prototype.decode = function(p) {
			if (!l(p)) {
				var B = s.call(p);
				if (B !== m && B !== i && B !== o) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
				p = a ? new c(p) : p || []
			}
			for (var I = B = "", g = 0, b = p.length | 0, _ = b - 32 | 0, k, w, E = 0, M = 0, O, S = 0, U = -1; g < b;) {
				for (k = g <= _ ? 32 : b - g | 0; S < k; g = g + 1 | 0, S = S + 1 | 0) {
					switch (w = p[g] & 255, w >> 4) {
						case 15:
							if (O = p[g = g + 1 | 0] & 255, O >> 6 !== 2 || 247 < w) {
								g = g - 1 | 0;
								break
							}
							E = (w & 7) << 6 | O & 63, M = 5, w = 256;
						case 14:
							O = p[g = g + 1 | 0] & 255, E <<= 6, E |= (w & 15) << 6 | O & 63, M = O >> 6 === 2 ? M + 4 | 0 : 24, w = w + 256 & 768;
						case 13:
						case 12:
							O = p[g = g + 1 | 0] & 255, E <<= 6, E |= (w & 31) << 6 | O & 63, M = M + 7 | 0, g < b && O >> 6 === 2 && E >> M && 1114112 > E ? (w = E, E = E - 65536 | 0, 0 <= E && (U = (E >> 10) + 55296 | 0, w = (E & 1023) + 56320 | 0, 31 > S ? (d[S] = U, S = S + 1 | 0, U = -1) : (O = U, U = w, w = O))) : (w >>= 8, g = g - w - 1 | 0, w = 65533), E = M = 0, k = g <= _ ? 32 : b - g | 0;
						default:
							d[S] = w;
							continue;
						case 11:
						case 10:
						case 9:
						case 8:
					}
					d[S] = 65533
				}
				if (I += r(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15], d[16], d[17], d[18], d[19], d[20], d[21], d[22], d[23], d[24], d[25], d[26], d[27], d[28], d[29], d[30], d[31]), 32 > S && (I = I.slice(0, S - 32 | 0)), g < b) {
					if (d[0] = U, S = ~U >>> 31, U = -1, I.length < B.length) continue
				} else U !== -1 && (I += r(U));
				B += I, I = ""
			}
			return B
		}, u.encode = function(p) {
			p = p === void 0 ? "" : "" + p;
			var B = p.length | 0,
				I = new c((B << 1) + 8 | 0),
				g, b = 0,
				_ = !a;
			for (g = 0; g < B; g = g + 1 | 0, b = b + 1 | 0) {
				var k = p.charCodeAt(g) | 0;
				if (127 >= k) I[b] = k;
				else {
					if (2047 >= k) I[b] = 192 | k >> 6;
					else {
						e: {
							if (55296 <= k)
								if (56319 >= k) {
									var w = p.charCodeAt(g = g + 1 | 0) | 0;
									if (56320 <= w && 57343 >= w) {
										if (k = (k << 10) + w - 56613888 | 0, 65535 < k) {
											I[b] = 240 | k >> 18, I[b = b + 1 | 0] = 128 | k >> 12 & 63, I[b = b + 1 | 0] = 128 | k >> 6 & 63, I[b = b + 1 | 0] = 128 | k & 63;
											continue
										}
										break e
									}
									k = 65533
								} else 57343 >= k && (k = 65533);!_ && g << 1 < b && g << 1 < (b - 7 | 0) && (_ = !0, w = new c(3 * B), w.set(I), I = w)
						}
						I[b] = 224 | k >> 12,
						I[b = b + 1 | 0] = 128 | k >> 6 & 63
					}
					I[b = b + 1 | 0] = 128 | k & 63
				}
			}
			return a ? I.subarray(0, b) : I.slice(0, b)
		}, h || (t.TextDecoder = e, t.TextEncoder = n)
	})(globalThis);

	function N(t, e) {
		if (!t) throw new Error(e)
	}
	var ut = 34028234663852886e22,
		lt = -34028234663852886e22,
		dt = 4294967295,
		mt = 2147483647,
		ht = -2147483648;

	function J(t) {
		if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
		if (!Number.isInteger(t) || t > mt || t < ht) throw new Error("invalid int 32: " + t)
	}

	function Y(t) {
		if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
		if (!Number.isInteger(t) || t > dt || t < 0) throw new Error("invalid uint 32: " + t)
	}

	function Q(t) {
		if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
		if (Number.isFinite(t) && (t > ut || t < lt)) throw new Error("invalid float 32: " + t)
	}
	var Ee = Symbol("@bufbuild/protobuf/enum-type");

	function Be(t) {
		let e = t[Ee];
		return N(e, "missing enum type on enum object"), e
	}

	function me(t, e, n, r) {
		t[Ee] = he(e, n.map(s => ({
			no: s.no,
			name: s.name,
			localName: t[s.no]
		})), r)
	}

	function he(t, e, n) {
		let r = Object.create(null),
			s = Object.create(null),
			i = [];
		for (let o of e) {
			let a = Oe(o);
			i.push(a), r[o.name] = a, s[o.no] = a
		}
		return {
			typeName: t,
			values: i,
			findName(o) {
				return r[o]
			},
			findNumber(o) {
				return s[o]
			}
		}
	}

	function Se(t, e, n) {
		let r = {};
		for (let s of e) {
			let i = Oe(s);
			r[i.localName] = i.no, r[i.no] = i.localName
		}
		return me(r, t, e, n), r
	}

	function Oe(t) {
		return "localName" in t ? t : Object.assign(Object.assign({}, t), {
			localName: t.name
		})
	}
	var F = class {
		equals(e) {
			return this.getType().runtime.util.equals(this.getType(), this, e)
		}
		clone() {
			return this.getType().runtime.util.clone(this)
		}
		fromBinary(e, n) {
			let r = this.getType(),
				s = r.runtime.bin,
				i = s.makeReadOptions(n);
			return s.readMessage(this, i.readerFactory(e), e.byteLength, i), this
		}
		fromJson(e, n) {
			let r = this.getType(),
				s = r.runtime.json,
				i = s.makeReadOptions(n);
			return s.readMessage(r, e, i, this), this
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
				i = s.writerFactory();
			return r.writeMessage(this, i, s), i.finish()
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

	function Ue(t, e, n, r) {
		var s;
		let i = (s = r?.localName) !== null && s !== void 0 ? s : e.substring(e.lastIndexOf(".") + 1),
			o = {
				[i]: function(a) {
					t.util.initFields(this), t.util.initPartial(a, this)
				}
			} [i];
		return Object.setPrototypeOf(o.prototype, new F), Object.assign(o, {
			runtime: t,
			typeName: e,
			fields: t.util.newFieldList(n),
			fromBinary(a, c) {
				return new o().fromBinary(a, c)
			},
			fromJson(a, c) {
				return new o().fromJson(a, c)
			},
			fromJsonString(a, c) {
				return new o().fromJsonString(a, c)
			},
			equals(a, c) {
				return t.util.equals(o, a, c)
			}
		}), o
	}
	var f;
	(function(t) {
		t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64"
	})(f || (f = {}));
	var A;
	(function(t) {
		t[t.BIGINT = 0] = "BIGINT", t[t.STRING = 1] = "STRING"
	})(A || (A = {}));

	function De() {
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

	function Z(t, e, n) {
		for (let i = 0; i < 28; i = i + 7) {
			let o = t >>> i,
				a = !(!(o >>> 7) && e == 0),
				c = (a ? o | 128 : o) & 255;
			if (n.push(c), !a) return
		}
		let r = t >>> 28 & 15 | (e & 7) << 4,
			s = !!(e >> 3);
		if (n.push((s ? r | 128 : r) & 255), !!s) {
			for (let i = 3; i < 31; i = i + 7) {
				let o = e >>> i,
					a = !!(o >>> 7),
					c = (a ? o | 128 : o) & 255;
				if (n.push(c), !a) return
			}
			n.push(e >>> 31 & 1)
		}
	}
	var H = 4294967296;

	function pe(t) {
		let e = t[0] === "-";
		e && (t = t.slice(1));
		let n = 1e6,
			r = 0,
			s = 0;

		function i(o, a) {
			let c = Number(t.slice(o, a));
			s *= n, r = r * n + c, r >= H && (s = s + (r / H | 0), r = r % H)
		}
		return i(-24, -18), i(-18, -12), i(-12, -6), i(-6), e ? ve(r, s) : ye(r, s)
	}

	function $e(t, e) {
		let n = ye(t, e),
			r = n.hi & 2147483648;
		r && (n = ve(n.lo, n.hi));
		let s = ge(n.lo, n.hi);
		return r ? "-" + s : s
	}

	function ge(t, e) {
		if ({
				lo: t,
				hi: e
			} = pt(t, e), e <= 2097151) return String(H * e + t);
		let n = t & 16777215,
			r = (t >>> 24 | e << 8) & 16777215,
			s = e >> 16 & 65535,
			i = n + r * 6777216 + s * 6710656,
			o = r + s * 8147497,
			a = s * 2,
			c = 1e7;
		return i >= c && (o += Math.floor(i / c), i %= c), o >= c && (a += Math.floor(o / c), o %= c), a.toString() + Ae(o) + Ae(i)
	}

	function pt(t, e) {
		return {
			lo: t >>> 0,
			hi: e >>> 0
		}
	}

	function ye(t, e) {
		return {
			lo: t | 0,
			hi: e | 0
		}
	}

	function ve(t, e) {
		return e = ~e, t ? t = ~t + 1 : e += 1, ye(t, e)
	}
	var Ae = t => {
		let e = String(t);
		return "0000000".slice(e.length) + e
	};

	function be(t, e) {
		if (t >= 0) {
			for (; t > 127;) e.push(t & 127 | 128), t = t >>> 7;
			e.push(t)
		} else {
			for (let n = 0; n < 9; n++) e.push(t & 127 | 128), t = t >> 7;
			e.push(1)
		}
	}

	function Le() {
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

	function gt() {
		let t = new DataView(new ArrayBuffer(8));
		if (typeof BigInt == "function" && typeof t.getBigInt64 == "function" && typeof t.getBigUint64 == "function" && typeof t.setBigInt64 == "function" && typeof t.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
			let s = BigInt("-9223372036854775808"),
				i = BigInt("9223372036854775807"),
				o = BigInt("0"),
				a = BigInt("18446744073709551615");
			return {
				zero: BigInt(0),
				supported: !0,
				parse(c) {
					let u = typeof c == "bigint" ? c : BigInt(c);
					if (u > i || u < s) throw new Error(`int64 invalid: ${c}`);
					return u
				},
				uParse(c) {
					let u = typeof c == "bigint" ? c : BigInt(c);
					if (u > a || u < o) throw new Error(`uint64 invalid: ${c}`);
					return u
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
				dec(c, u) {
					return t.setInt32(0, c, !0), t.setInt32(4, u, !0), t.getBigInt64(0, !0)
				},
				uDec(c, u) {
					return t.setInt32(0, c, !0), t.setInt32(4, u, !0), t.getBigUint64(0, !0)
				}
			}
		}
		let n = s => N(/^-?[0-9]+$/.test(s), `int64 invalid: ${s}`),
			r = s => N(/^[0-9]+$/.test(s), `uint64 invalid: ${s}`);
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
				return typeof s != "string" && (s = s.toString()), n(s), pe(s)
			},
			uEnc(s) {
				return typeof s != "string" && (s = s.toString()), r(s), pe(s)
			},
			dec(s, i) {
				return $e(s, i)
			},
			uDec(s, i) {
				return ge(s, i)
			}
		}
	}
	var x = gt();
	var y;
	(function(t) {
		t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32"
	})(y || (y = {}));
	var ee = class {
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
				for (Y(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
				return this.buf.push(e), this
			}
			int32(e) {
				return J(e), be(e, this.buf), this
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
				Q(e);
				let n = new Uint8Array(4);
				return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n)
			}
			double(e) {
				let n = new Uint8Array(8);
				return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n)
			}
			fixed32(e) {
				Y(e);
				let n = new Uint8Array(4);
				return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n)
			}
			sfixed32(e) {
				J(e);
				let n = new Uint8Array(4);
				return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n)
			}
			sint32(e) {
				return J(e), e = (e << 1 ^ e >> 31) >>> 0, be(e, this.buf), this
			}
			sfixed64(e) {
				let n = new Uint8Array(8),
					r = new DataView(n.buffer),
					s = x.enc(e);
				return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(n)
			}
			fixed64(e) {
				let n = new Uint8Array(8),
					r = new DataView(n.buffer),
					s = x.uEnc(e);
				return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(n)
			}
			int64(e) {
				let n = x.enc(e);
				return Z(n.lo, n.hi, this.buf), this
			}
			sint64(e) {
				let n = x.enc(e),
					r = n.hi >> 31,
					s = n.lo << 1 ^ r,
					i = (n.hi << 1 | n.lo >>> 31) ^ r;
				return Z(s, i, this.buf), this
			}
			uint64(e) {
				let n = x.uEnc(e);
				return Z(n.lo, n.hi, this.buf), this
			}
		},
		te = class {
			constructor(e, n) {
				this.varint64 = De, this.uint32 = Le, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = n ?? new TextDecoder
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
					case y.Varint:
						for (; this.buf[this.pos++] & 128;);
						break;
					case y.Bit64:
						this.pos += 4;
					case y.Bit32:
						this.pos += 4;
						break;
					case y.LengthDelimited:
						let r = this.uint32();
						this.pos += r;
						break;
					case y.StartGroup:
						let s;
						for (;
							(s = this.tag()[1]) !== y.EndGroup;) this.skip(s);
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
				return x.dec(...this.varint64())
			}
			uint64() {
				return x.uDec(...this.varint64())
			}
			sint64() {
				let [e, n] = this.varint64(), r = -(e & 1);
				return e = (e >>> 1 | (n & 1) << 31) ^ r, n = n >>> 1 ^ r, x.dec(e, n)
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
				return x.uDec(this.sfixed32(), this.sfixed32())
			}
			sfixed64() {
				return x.dec(this.sfixed32(), this.sfixed32())
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

	function $(t, e, n) {
		if (e === n) return !0;
		if (t == f.BYTES) {
			if (!(e instanceof Uint8Array) || !(n instanceof Uint8Array) || e.length !== n.length) return !1;
			for (let r = 0; r < e.length; r++)
				if (e[r] !== n[r]) return !1;
			return !0
		}
		switch (t) {
			case f.UINT64:
			case f.FIXED64:
			case f.INT64:
			case f.SFIXED64:
			case f.SINT64:
				return e == n
		}
		return !1
	}

	function P(t, e) {
		switch (t) {
			case f.BOOL:
				return !1;
			case f.UINT64:
			case f.FIXED64:
			case f.INT64:
			case f.SFIXED64:
			case f.SINT64:
				return e == 0 ? x.zero : "0";
			case f.DOUBLE:
			case f.FLOAT:
				return 0;
			case f.BYTES:
				return new Uint8Array(0);
			case f.STRING:
				return "";
			default:
				return 0
		}
	}

	function we(t, e) {
		let n = e === void 0,
			r = y.Varint,
			s = e === 0;
		switch (t) {
			case f.STRING:
				s = n || !e.length, r = y.LengthDelimited;
				break;
			case f.BOOL:
				s = e === !1;
				break;
			case f.DOUBLE:
				r = y.Bit64;
				break;
			case f.FLOAT:
				r = y.Bit32;
				break;
			case f.INT64:
				s = n || e == 0;
				break;
			case f.UINT64:
				s = n || e == 0;
				break;
			case f.FIXED64:
				s = n || e == 0, r = y.Bit64;
				break;
			case f.BYTES:
				s = n || !e.byteLength, r = y.LengthDelimited;
				break;
			case f.FIXED32:
				r = y.Bit32;
				break;
			case f.SFIXED32:
				r = y.Bit32;
				break;
			case f.SFIXED64:
				s = n || e == 0, r = y.Bit64;
				break;
			case f.SINT64:
				s = n || e == 0;
				break
		}
		let i = f[t].toLowerCase();
		return [r, i, n || s]
	}

	function Re(t, e, n, r) {
		let s;
		return {
			typeName: e,
			extendee: n,
			get field() {
				if (!s) {
					let i = typeof r == "function" ? r() : r;
					i.name = e.split(".").pop(), i.jsonName = `[${e}]`, s = t.util.newFieldList([i]).list()[0]
				}
				return s
			},
			runtime: t
		}
	}

	function ne(t) {
		let e = t.field.localName,
			n = Object.create(null);
		return n[e] = yt(t), [n, () => n[e]]
	}

	function yt(t) {
		let e = t.field;
		if (e.repeated) return [];
		if (e.default !== void 0) return e.default;
		switch (e.kind) {
			case "enum":
				return e.T.values[0].no;
			case "scalar":
				return P(e.T, e.L);
			case "message":
				let n = e.T,
					r = new n;
				return n.fieldWrapper ? n.fieldWrapper.unwrapField(r) : r;
			case "map":
				throw "map fields are not allowed to be extensions"
		}
	}

	function Me(t, e) {
		if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
			for (let n = t.length - 1; n >= 0; --n)
				if (t[n].no == e.no) return [t[n]];
			return []
		}
		return t.filter(n => n.no === e.no)
	}

	function Pe(t, e, n, r) {
		return {
			syntax: t,
			json: e,
			bin: n,
			util: r,
			makeMessageType(s, i, o) {
				return Ue(this, s, i, o)
			},
			makeEnum: Se,
			makeEnumType: he,
			getEnumType: Be,
			makeExtension(s, i, o) {
				return Re(this, s, i, o)
			}
		}
	}

	function re(t, e) {
		return e instanceof F || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e)
	}
	var Tn = {
		"google.protobuf.DoubleValue": f.DOUBLE,
		"google.protobuf.FloatValue": f.FLOAT,
		"google.protobuf.Int64Value": f.INT64,
		"google.protobuf.UInt64Value": f.UINT64,
		"google.protobuf.Int32Value": f.INT32,
		"google.protobuf.UInt32Value": f.UINT32,
		"google.protobuf.BoolValue": f.BOOL,
		"google.protobuf.StringValue": f.STRING,
		"google.protobuf.BytesValue": f.BYTES
	};
	var V = Symbol("@bufbuild/protobuf/unknown-fields"),
		Je = {
			readUnknownFields: !0,
			readerFactory: t => new te(t)
		},
		Ve = {
			writeUnknownFields: !0,
			writerFactory: () => new ee
		};

	function bt(t) {
		return t ? Object.assign(Object.assign({}, Je), t) : Je
	}

	function wt(t) {
		return t ? Object.assign(Object.assign({}, Ve), t) : Ve
	}

	function qe() {
		return {
			makeReadOptions: bt,
			makeWriteOptions: wt,
			listUnknownFields(t) {
				var e;
				return (e = t[V]) !== null && e !== void 0 ? e : []
			},
			discardUnknownFields(t) {
				delete t[V]
			},
			writeUnknownFields(t, e) {
				let r = t[V];
				if (r)
					for (let s of r) e.tag(s.no, s.wireType).raw(s.data)
			},
			onUnknownField(t, e, n, r) {
				let s = t;
				Array.isArray(s[V]) || (s[V] = []), s[V].push({
					no: e,
					wireType: n,
					data: r
				})
			},
			readMessage(t, e, n, r, s) {
				let i = t.getType(),
					o = s ? e.len : e.pos + n,
					a, c;
				for (; e.pos < o && ([a, c] = e.tag(), c != y.EndGroup);) {
					let u = i.fields.find(a);
					if (!u) {
						let l = e.skip(c);
						r.readUnknownFields && this.onUnknownField(t, a, c, l);
						continue
					}
					Ce(t, e, u, c, r)
				}
				if (s && (c != y.EndGroup || a !== n)) throw new Error("invalid end group tag")
			},
			readField: Ce
		}
	}

	function Ce(t, e, n, r, s) {
		let {
			repeated: i,
			localName: o
		} = n;
		switch (n.oneof && (t = t[n.oneof.localName], t.case != o && delete t.value, t.case = o, o = "value"), n.kind) {
			case "scalar":
			case "enum":
				let a = n.kind == "enum" ? f.INT32 : n.T,
					c = ie;
				if (n.kind == "scalar" && n.L > 0 && (c = Tt), i) {
					let h = t[o];
					if (r == y.LengthDelimited && a != f.STRING && a != f.BYTES) {
						let p = e.uint32() + e.pos;
						for (; e.pos < p;) h.push(c(e, a))
					} else h.push(c(e, a))
				} else t[o] = c(e, a);
				break;
			case "message":
				let u = n.T;
				i ? t[o].push(se(e, new u, s, n)) : t[o] instanceof F ? se(e, t[o], s, n) : (t[o] = se(e, new u, s, n), u.fieldWrapper && !n.oneof && !n.repeated && (t[o] = u.fieldWrapper.unwrapField(t[o])));
				break;
			case "map":
				let [l, m] = kt(n, e, s);
				t[o][l] = m;
				break
		}
	}

	function se(t, e, n, r) {
		let s = e.getType().runtime.bin,
			i = r?.delimited;
		return s.readMessage(e, t, i ? r?.no : t.uint32(), n, i), e
	}

	function kt(t, e, n) {
		let r = e.uint32(),
			s = e.pos + r,
			i, o;
		for (; e.pos < s;) {
			let [a] = e.tag();
			switch (a) {
				case 1:
					i = ie(e, t.K);
					break;
				case 2:
					switch (t.V.kind) {
						case "scalar":
							o = ie(e, t.V.T);
							break;
						case "enum":
							o = e.int32();
							break;
						case "message":
							o = se(e, new t.V.T, n, void 0);
							break
					}
					break
			}
		}
		if (i === void 0) {
			let a = P(t.K, A.BIGINT);
			i = t.K == f.BOOL ? a.toString() : a
		}
		if (typeof i != "string" && typeof i != "number" && (i = i.toString()), o === void 0) switch (t.V.kind) {
			case "scalar":
				o = P(t.V.T, A.BIGINT);
				break;
			case "enum":
				o = 0;
				break;
			case "message":
				o = new t.V.T;
				break
		}
		return [i, o]
	}

	function Tt(t, e) {
		let n = ie(t, e);
		return typeof n == "bigint" ? n.toString() : n
	}

	function ie(t, e) {
		switch (e) {
			case f.STRING:
				return t.string();
			case f.BOOL:
				return t.bool();
			case f.DOUBLE:
				return t.double();
			case f.FLOAT:
				return t.float();
			case f.INT32:
				return t.int32();
			case f.INT64:
				return t.int64();
			case f.UINT64:
				return t.uint64();
			case f.FIXED64:
				return t.fixed64();
			case f.BYTES:
				return t.bytes();
			case f.FIXED32:
				return t.fixed32();
			case f.SFIXED32:
				return t.sfixed32();
			case f.SFIXED64:
				return t.sfixed64();
			case f.SINT64:
				return t.sint64();
			case f.UINT32:
				return t.uint32();
			case f.SINT32:
				return t.sint32()
		}
	}

	function Xe(t, e, n, r, s) {
		t.tag(n.no, y.LengthDelimited), t.fork();
		let i = r;
		switch (n.K) {
			case f.INT32:
			case f.FIXED32:
			case f.UINT32:
			case f.SFIXED32:
			case f.SINT32:
				i = Number.parseInt(r);
				break;
			case f.BOOL:
				N(r == "true" || r == "false"), i = r == "true";
				break
		}
		switch (C(t, n.K, 1, i, !0), n.V.kind) {
			case "scalar":
				C(t, n.V.T, 2, s, !0);
				break;
			case "enum":
				C(t, f.INT32, 2, s, !0);
				break;
			case "message":
				t.tag(2, y.LengthDelimited).bytes(s.toBinary(e));
				break
		}
		t.join()
	}

	function ke(t, e, n, r) {
		let s = re(n.T, r);
		n?.delimited ? t.tag(n.no, y.StartGroup).raw(s.toBinary(e)).tag(n.no, y.EndGroup) : t.tag(n.no, y.LengthDelimited).bytes(s.toBinary(e))
	}

	function C(t, e, n, r, s) {
		let [i, o, a] = we(e, r);
		(!a || s) && t.tag(n, i)[o](r)
	}

	function _e(t, e, n, r) {
		if (!r.length) return;
		t.tag(n, y.LengthDelimited).fork();
		let [, s] = we(e);
		for (let i = 0; i < r.length; i++) t[s](r[i]);
		t.join()
	}

	function Ye() {
		return Object.assign(Object.assign({}, qe()), {
			writeField: Ge,
			writeMessage(t, e, n) {
				let r = t.getType();
				for (let s of r.fields.byNumber()) {
					let i, o = s.localName;
					if (s.oneof) {
						let a = t[s.oneof.localName];
						if (a.case !== o) continue;
						i = a.value
					} else i = t[o];
					Ge(s, i, e, n)
				}
				return n.writeUnknownFields && this.writeUnknownFields(t, e), e
			}
		})
	}

	function Ge(t, e, n, r) {
		let s = t.repeated;
		switch (t.kind) {
			case "scalar":
			case "enum":
				let i = t.kind == "enum" ? f.INT32 : t.T;
				if (s)
					if (t.packed) _e(n, i, t.no, e);
					else
						for (let o of e) C(n, i, t.no, o, !0);
				else e !== void 0 && C(n, i, t.no, e, !!t.oneof || t.opt);
				break;
			case "message":
				if (s)
					for (let o of e) ke(n, r, t, o);
				else e !== void 0 && ke(n, r, t, e);
				break;
			case "map":
				for (let [o, a] of Object.entries(e)) Xe(n, r, t, o, a);
				break
		}
	}
	var v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
		oe = [];
	for (let t = 0; t < v.length; t++) oe[v[t].charCodeAt(0)] = t;
	oe["-".charCodeAt(0)] = v.indexOf("+");
	oe["_".charCodeAt(0)] = v.indexOf("/");
	var Te = {
		dec(t) {
			let e = t.length * 3 / 4;
			t[t.length - 2] == "=" ? e -= 2 : t[t.length - 1] == "=" && (e -= 1);
			let n = new Uint8Array(e),
				r = 0,
				s = 0,
				i, o = 0;
			for (let a = 0; a < t.length; a++) {
				if (i = oe[t.charCodeAt(a)], i === void 0) switch (t[a]) {
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
						o = i, s = 1;
						break;
					case 1:
						n[r++] = o << 2 | (i & 48) >> 4, o = i, s = 2;
						break;
					case 2:
						n[r++] = (o & 15) << 4 | (i & 60) >> 2, o = i, s = 3;
						break;
					case 3:
						n[r++] = (o & 3) << 6 | i, s = 0;
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
			for (let i = 0; i < t.length; i++) switch (r = t[i], n) {
				case 0:
					e += v[r >> 2], s = (r & 3) << 4, n = 1;
					break;
				case 1:
					e += v[s | r >> 4], s = (r & 15) << 2, n = 2;
					break;
				case 2:
					e += v[s | r >> 6], e += v[r & 63], n = 0;
					break
			}
			return n && (e += v[s], e += "=", n == 1 && (e += "=")), e
		}
	};

	function je(t, e, n) {
		Ke(e, t);
		let r = e.runtime.bin.makeReadOptions(n),
			s = Me(t.getType().runtime.bin.listUnknownFields(t), e.field),
			[i, o] = ne(e);
		for (let a of s) e.runtime.bin.readField(i, r.readerFactory(a.data), e.field, a.wireType, r);
		return o()
	}

	function We(t, e, n, r) {
		Ke(e, t);
		let s = e.runtime.bin.makeReadOptions(r),
			i = e.runtime.bin.makeWriteOptions(r);
		if (Ne(t, e)) {
			let u = t.getType().runtime.bin.listUnknownFields(t).filter(l => l.no != e.field.no);
			t.getType().runtime.bin.discardUnknownFields(t);
			for (let l of u) t.getType().runtime.bin.onUnknownField(t, l.no, l.wireType, l.data)
		}
		let o = i.writerFactory(),
			a = e.field;
		!a.opt && !a.repeated && (a.kind == "enum" || a.kind == "scalar") && (a = Object.assign(Object.assign({}, e.field), {
			opt: !0
		})), e.runtime.bin.writeField(a, n, o, i);
		let c = s.readerFactory(o.finish());
		for (; c.pos < c.len;) {
			let [u, l] = c.tag(), m = c.skip(l);
			t.getType().runtime.bin.onUnknownField(t, u, l, m)
		}
	}

	function Ne(t, e) {
		let n = t.getType();
		return e.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(t).find(r => r.no == e.field.no)
	}

	function Ke(t, e) {
		N(t.extendee.typeName == e.getType().typeName, `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`)
	}
	var ze = {
			ignoreUnknownFields: !1
		},
		Qe = {
			emitDefaultValues: !1,
			enumAsInteger: !1,
			useProtoFieldName: !1,
			prettySpaces: 0
		};

	function Nt(t) {
		return t ? Object.assign(Object.assign({}, ze), t) : ze
	}

	function It(t) {
		return t ? Object.assign(Object.assign({}, Qe), t) : Qe
	}

	function et(t, e) {
		let n = e(xt, Ze);
		return {
			makeReadOptions: Nt,
			makeWriteOptions: It,
			readMessage(r, s, i, o) {
				if (s == null || Array.isArray(s) || typeof s != "object") throw new Error(`cannot decode message ${r.typeName} from JSON: ${D(s)}`);
				o = o ?? new r;
				let a = new Map,
					c = i.typeRegistry;
				for (let [u, l] of Object.entries(s)) {
					let m = r.fields.findJsonName(u);
					if (m) {
						if (m.oneof) {
							if (l === null && m.kind == "scalar") continue;
							let h = a.get(m.oneof);
							if (h !== void 0) throw new Error(`cannot decode message ${r.typeName} from JSON: multiple keys for oneof "${m.oneof.name}" present: "${h}", "${u}"`);
							a.set(m.oneof, u)
						}
						He(o, l, m, i, r, t)
					} else {
						let h = !1;
						if (c?.findExtension && u.startsWith("[") && u.endsWith("]")) {
							let d = c.findExtension(u.substring(1, u.length - 1));
							if (d && d.extendee.typeName == r.typeName) {
								h = !0;
								let [p, B] = ne(d);
								He(p, l, d.field, i, d, !0), We(o, d, B(), i)
							}
						}
						if (!h && !i.ignoreUnknownFields) throw new Error(`cannot decode message ${r.typeName} from JSON: key "${u}" is unknown`)
					}
				}
				return o
			},
			writeMessage(r, s) {
				let i = r.getType(),
					o = {},
					a;
				try {
					for (let u of i.fields.byMember()) {
						let l;
						if (u.kind == "oneof") {
							let m = r[u.localName];
							if (m.value === void 0) continue;
							if (a = u.findField(m.case), !a) throw "oneof case not found: " + m.case;
							l = n(a, m.value, s)
						} else a = u, l = n(a, r[a.localName], s);
						l !== void 0 && (o[s.useProtoFieldName ? a.name : a.jsonName] = l)
					}
					let c = s.typeRegistry;
					if (c?.findExtensionFor)
						for (let u of i.runtime.bin.listUnknownFields(r)) {
							let l = c.findExtensionFor(i.typeName, u.no);
							if (l && Ne(r, l)) {
								let m = je(r, l, s),
									h = n(l.field, m, s);
								h !== void 0 && (o[l.field.jsonName] = h)
							}
						}
				} catch (c) {
					let u = a ? `cannot encode field ${i.typeName}.${a.name} to JSON` : `cannot encode message ${i.typeName} to JSON`,
						l = c instanceof Error ? c.message : String(c);
					throw new Error(u + (l.length > 0 ? `: ${l}` : ""))
				}
				return o
			},
			readScalar: (r, s, i) => j(r, s, i, t),
			writeScalar: Ze,
			debug: D
		}
	}

	function D(t) {
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

	function He(t, e, n, r, s, i) {
		let o = n.localName;
		if (n.oneof) {
			if (e === null && n.kind == "scalar") return;
			t = t[n.oneof.localName] = {
				case: o
			}, o = "value"
		}
		if (n.repeated) {
			if (e === null) return;
			if (!Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${D(e)}`);
			let a = t[o];
			for (let c of e) {
				if (c === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${D(c)}`);
				let u;
				switch (n.kind) {
					case "message":
						u = n.T.fromJson(c, r);
						break;
					case "enum":
						if (u = Ie(n.T, c, r.ignoreUnknownFields, !0), u === void 0) continue;
						break;
					case "scalar":
						try {
							u = j(n.T, c, n.L, !0)
						} catch (l) {
							let m = `cannot decode field ${s.typeName}.${n.name} from JSON: ${D(c)}`;
							throw l instanceof Error && l.message.length > 0 && (m += `: ${l.message}`), new Error(m)
						}
						break
				}
				a.push(u)
			}
		} else if (n.kind == "map") {
			if (e === null) return;
			if (typeof e != "object" || Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${D(e)}`);
			let a = t[o];
			for (let [c, u] of Object.entries(e)) {
				if (u === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: map value null`);
				let l;
				switch (n.V.kind) {
					case "message":
						l = n.V.T.fromJson(u, r);
						break;
					case "enum":
						if (l = Ie(n.V.T, u, r.ignoreUnknownFields, !0), l === void 0) continue;
						break;
					case "scalar":
						try {
							l = j(n.V.T, u, A.BIGINT, !0)
						} catch (m) {
							let h = `cannot decode map value for field ${s.typeName}.${n.name} from JSON: ${D(e)}`;
							throw m instanceof Error && m.message.length > 0 && (h += `: ${m.message}`), new Error(h)
						}
						break
				}
				try {
					a[j(n.K, n.K == f.BOOL ? c == "true" ? !0 : c == "false" ? !1 : c : c, A.BIGINT, !0).toString()] = l
				} catch (m) {
					let h = `cannot decode map key for field ${s.typeName}.${n.name} from JSON: ${D(e)}`;
					throw m instanceof Error && m.message.length > 0 && (h += `: ${m.message}`), new Error(h)
				}
			}
		} else switch (n.kind) {
			case "message":
				let a = n.T;
				if (e === null && a.typeName != "google.protobuf.Value") {
					if (n.oneof) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: null is invalid for oneof field`);
					return
				}
				t[o] instanceof F ? t[o].fromJson(e, r) : (t[o] = a.fromJson(e, r), a.fieldWrapper && !n.oneof && (t[o] = a.fieldWrapper.unwrapField(t[o])));
				break;
			case "enum":
				let c = Ie(n.T, e, r.ignoreUnknownFields, i);
				c !== void 0 && (t[o] = c);
				break;
			case "scalar":
				try {
					t[o] = j(n.T, e, n.L, i)
				} catch (u) {
					let l = `cannot decode field ${s.typeName}.${n.name} from JSON: ${D(e)}`;
					throw u instanceof Error && u.message.length > 0 && (l += `: ${u.message}`), new Error(l)
				}
				break
		}
	}

	function j(t, e, n, r) {
		switch (t) {
			case f.DOUBLE:
			case f.FLOAT:
				if (e === null) return r ? 0 : void 0;
				if (e === "NaN") return Number.NaN;
				if (e === "Infinity") return Number.POSITIVE_INFINITY;
				if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
				if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number") break;
				let s = Number(e);
				if (Number.isNaN(s) || !Number.isFinite(s)) break;
				return t == f.FLOAT && Q(s), s;
			case f.INT32:
			case f.FIXED32:
			case f.SFIXED32:
			case f.SINT32:
			case f.UINT32:
				if (e === null) return r ? 0 : void 0;
				let i;
				if (typeof e == "number" ? i = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (i = Number(e)), i === void 0) break;
				return t == f.UINT32 ? Y(i) : J(i), i;
			case f.INT64:
			case f.SFIXED64:
			case f.SINT64:
				if (e === null) return r ? x.zero : void 0;
				if (typeof e != "number" && typeof e != "string") break;
				let o = x.parse(e);
				return n ? o.toString() : o;
			case f.FIXED64:
			case f.UINT64:
				if (e === null) return r ? x.zero : void 0;
				if (typeof e != "number" && typeof e != "string") break;
				let a = x.uParse(e);
				return n ? a.toString() : a;
			case f.BOOL:
				if (e === null) return r ? !1 : void 0;
				if (typeof e != "boolean") break;
				return e;
			case f.STRING:
				if (e === null) return r ? "" : void 0;
				if (typeof e != "string") break;
				try {
					encodeURIComponent(e)
				} catch {
					throw new Error("invalid UTF8")
				}
				return e;
			case f.BYTES:
				if (e === null) return r ? new Uint8Array(0) : void 0;
				if (e === "") return new Uint8Array(0);
				if (typeof e != "string") break;
				return Te.dec(e)
		}
		throw new Error
	}

	function Ie(t, e, n, r) {
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
		throw new Error(`cannot decode enum ${t.typeName} from JSON: ${D(e)}`)
	}

	function xt(t, e, n, r) {
		var s;
		if (e === void 0) return e;
		if (!n && t.values[0].no === e) return;
		if (r) return e;
		if (t.typeName == "google.protobuf.NullValue") return null;
		let i = t.findNumber(e);
		return (s = i?.name) !== null && s !== void 0 ? s : e
	}

	function Ze(t, e, n) {
		if (e !== void 0) switch (t) {
			case f.INT32:
			case f.SFIXED32:
			case f.SINT32:
			case f.FIXED32:
			case f.UINT32:
				return N(typeof e == "number"), e != 0 || n ? e : void 0;
			case f.FLOAT:
			case f.DOUBLE:
				return N(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e !== 0 || n ? e : void 0;
			case f.STRING:
				return N(typeof e == "string"), e.length > 0 || n ? e : void 0;
			case f.BOOL:
				return N(typeof e == "boolean"), e || n ? e : void 0;
			case f.UINT64:
			case f.FIXED64:
			case f.INT64:
			case f.SFIXED64:
			case f.SINT64:
				return N(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), n || e != 0 ? e.toString(10) : void 0;
			case f.BYTES:
				return N(e instanceof Uint8Array), n || e.byteLength > 0 ? Te.enc(e) : void 0
		}
	}

	function tt() {
		return et(!0, (t, e) => function(r, s, i) {
			if (r.kind == "map") {
				let o = {};
				switch (r.V.kind) {
					case "scalar":
						for (let [c, u] of Object.entries(s)) {
							let l = e(r.V.T, u, !0);
							N(l !== void 0), o[c.toString()] = l
						}
						break;
					case "message":
						for (let [c, u] of Object.entries(s)) o[c.toString()] = u.toJson(i);
						break;
					case "enum":
						let a = r.V.T;
						for (let [c, u] of Object.entries(s)) {
							N(u === void 0 || typeof u == "number");
							let l = t(a, u, !0, i.enumAsInteger);
							N(l !== void 0), o[c.toString()] = l
						}
						break
				}
				return i.emitDefaultValues || Object.keys(o).length > 0 ? o : void 0
			} else if (r.repeated) {
				let o = [];
				switch (r.kind) {
					case "scalar":
						for (let a = 0; a < s.length; a++) o.push(e(r.T, s[a], !0));
						break;
					case "enum":
						for (let a = 0; a < s.length; a++) o.push(t(r.T, s[a], !0, i.enumAsInteger));
						break;
					case "message":
						for (let a = 0; a < s.length; a++) o.push(s[a].toJson(i));
						break
				}
				return i.emitDefaultValues || o.length > 0 ? o : void 0
			} else {
				if (s === void 0) return;
				switch (r.kind) {
					case "scalar":
						return e(r.T, s, !!r.oneof || r.opt || i.emitDefaultValues);
					case "enum":
						return t(r.T, s, !!r.oneof || r.opt || i.emitDefaultValues, i.enumAsInteger);
					case "message":
						return re(r.T, s).toJson(i)
				}
			}
		})
	}

	function nt() {
		return {
			setEnumType: me,
			initPartial(t, e) {
				if (t === void 0) return;
				let n = e.getType();
				for (let r of n.fields.byMember()) {
					let s = r.localName,
						i = e,
						o = t;
					if (o[s] !== void 0) switch (r.kind) {
						case "oneof":
							let a = o[s].case;
							if (a === void 0) continue;
							let c = r.findField(a),
								u = o[s].value;
							c && c.kind == "message" && !(u instanceof c.T) ? u = new c.T(u) : c && c.kind === "scalar" && c.T === f.BYTES && (u = W(u)), i[s] = {
								case: a,
								value: u
							};
							break;
						case "scalar":
						case "enum":
							let l = o[s];
							r.T === f.BYTES && (l = r.repeated ? l.map(W) : W(l)), i[s] = l;
							break;
						case "map":
							switch (r.V.kind) {
								case "scalar":
								case "enum":
									if (r.V.T === f.BYTES)
										for (let [d, p] of Object.entries(o[s])) i[s][d] = W(p);
									else Object.assign(i[s], o[s]);
									break;
								case "message":
									let h = r.V.T;
									for (let d of Object.keys(o[s])) {
										let p = o[s][d];
										h.fieldWrapper || (p = new h(p)), i[s][d] = p
									}
									break
							}
							break;
						case "message":
							let m = r.T;
							if (r.repeated) i[s] = o[s].map(h => h instanceof m ? h : new m(h));
							else if (o[s] !== void 0) {
								let h = o[s];
								m.fieldWrapper ? m.typeName === "google.protobuf.BytesValue" ? i[s] = W(h) : i[s] = h : i[s] = h instanceof m ? h : new m(h)
							}
							break
					}
				}
			},
			equals(t, e, n) {
				return e === n ? !0 : !e || !n ? !1 : t.fields.byMember().every(r => {
					let s = e[r.localName],
						i = n[r.localName];
					if (r.repeated) {
						if (s.length !== i.length) return !1;
						switch (r.kind) {
							case "message":
								return s.every((o, a) => r.T.equals(o, i[a]));
							case "scalar":
								return s.every((o, a) => $(r.T, o, i[a]));
							case "enum":
								return s.every((o, a) => $(f.INT32, o, i[a]))
						}
						throw new Error(`repeated cannot contain ${r.kind}`)
					}
					switch (r.kind) {
						case "message":
							return r.T.equals(s, i);
						case "enum":
							return $(f.INT32, s, i);
						case "scalar":
							return $(r.T, s, i);
						case "oneof":
							if (s.case !== i.case) return !1;
							let o = r.findField(s.case);
							if (o === void 0) return !0;
							switch (o.kind) {
								case "message":
									return o.T.equals(s.value, i.value);
								case "enum":
									return $(f.INT32, s.value, i.value);
								case "scalar":
									return $(o.T, s.value, i.value)
							}
							throw new Error(`oneof cannot contain ${o.kind}`);
						case "map":
							let a = Object.keys(s).concat(Object.keys(i));
							switch (r.V.kind) {
								case "message":
									let c = r.V.T;
									return a.every(l => c.equals(s[l], i[l]));
								case "enum":
									return a.every(l => $(f.INT32, s[l], i[l]));
								case "scalar":
									let u = r.V.T;
									return a.every(l => $(u, s[l], i[l]))
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
					let i = t[s.localName],
						o;
					if (s.repeated) o = i.map(ae);
					else if (s.kind == "map") {
						o = r[s.localName];
						for (let [a, c] of Object.entries(i)) o[a] = ae(c)
					} else s.kind == "oneof" ? o = s.findField(i.case) ? {
						case: i.case,
						value: ae(i.value)
					} : {
						case: void 0
					} : o = ae(i);
					r[s.localName] = o
				}
				return n
			}
		}
	}

	function ae(t) {
		if (t === void 0) return t;
		if (t instanceof F) return t.clone();
		if (t instanceof Uint8Array) {
			let e = new Uint8Array(t.byteLength);
			return e.set(t), e
		}
		return t
	}

	function W(t) {
		return t instanceof Uint8Array ? t : new Uint8Array(t)
	}
	var ce = class {
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

	function xe(t, e) {
		let n = it(t);
		return e ? n : St(Bt(n))
	}

	function rt(t) {
		return xe(t, !1)
	}
	var st = it;

	function it(t) {
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
	var Ft = new Set(["constructor", "toString", "toJSON", "valueOf"]),
		Et = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]),
		ot = t => `${t}$`,
		Bt = t => Et.has(t) ? ot(t) : t,
		St = t => Ft.has(t) ? ot(t) : t;
	var fe = class {
		constructor(e) {
			this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = rt(e)
		}
		addField(e) {
			N(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e)
		}
		findField(e) {
			if (!this._lookup) {
				this._lookup = Object.create(null);
				for (let n = 0; n < this.fields.length; n++) this._lookup[this.fields[n].localName] = this.fields[n]
			}
			return this._lookup[e]
		}
	};
	var q = Pe("proto3", tt(), Ye(), Object.assign(Object.assign({}, nt()), {
		newFieldList(t) {
			return new ce(t, Ot)
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
						r[n] = P(e.T, e.L);
						break;
					case "message":
						break
				}
			}
		}
	}));

	function Ot(t) {
		var e, n, r, s;
		let i = [],
			o;
		for (let a of typeof t == "function" ? t() : t) {
			let c = a;
			if (c.localName = xe(a.name, a.oneof !== void 0), c.jsonName = (e = a.jsonName) !== null && e !== void 0 ? e : st(a.name), c.repeated = (n = a.repeated) !== null && n !== void 0 ? n : !1, a.kind == "scalar" && (c.L = (r = a.L) !== null && r !== void 0 ? r : A.BIGINT), a.oneof !== void 0) {
				let u = typeof a.oneof == "string" ? a.oneof : a.oneof.name;
				(!o || o.name != u) && (o = new fe(u)), c.oneof = o, o.addField(c)
			}
			a.kind == "message" && (c.delimited = !1), c.packed = (s = a.packed) !== null && s !== void 0 ? s : a.kind == "enum" || a.kind == "scalar" && a.T != f.BYTES && a.T != f.STRING, i.push(c)
		}
		return i
	}
	var at = q.makeMessageType("youtube.request.common.Request", () => [{
			no: 1,
			name: "context",
			kind: "message",
			T: Ut
		}]),
		Ut = q.makeMessageType("youtube.request.common.Context", () => [{
			no: 9,
			name: "adSignalsInfo",
			kind: "message",
			T: At
		}]),
		At = q.makeMessageType("youtube.request.common.AdSignalsInfo", () => [{
			no: 1,
			name: "params",
			kind: "message",
			T: Dt,
			repeated: !0
		}]),
		Dt = q.makeMessageType("youtube.request.common.Params", () => [{
			no: 1,
			name: "key",
			kind: "scalar",
			T: 9
		}, {
			no: 2,
			name: "value",
			kind: "scalar",
			T: 9
		}]);
	var X = class {
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
				return typeof $loon < "u" ? r = "Loon" : typeof $task < "u" && (r = "QuanX"), X.instances[r] || (X.instances[r] = X.classNames[r](e, r, n)), X.instances[r]
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
		R = X;
	G(R, "instances", {}), G(R, "classNames", {
		QuanX: (e, n, r) => new ue(e, n, r),
		Shadowrocket: (e, n, r) => new K(e, n, r),
		Loon: (e, n, r) => new Fe(e, n, r)
	});
	var le = class extends R {
			getFn(e, n, r) {
				let s = le.clientAdapter[n] || n;
				return super.getFn(e, s, r)
			}
			setFn(e, n, r, s) {
				let i = le.clientAdapter[n] || n;
				return super.setFn(e, i, r, s)
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
						body: i,
						bodyBytes: o,
						...a
					} = e, c = o ?? i, u = c instanceof Uint8Array;
					$httpClient[s.toLowerCase()]({
						...a,
						body: c,
						"binary-mode": u
					}, (l, m, h) => {
						l && r(l);
						let d = u ? "bodyBytes" : "body";
						n({
							status: m.status || m.statusCode,
							headers: m.headers,
							[d]: h
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
		K = le;
	G(K, "clientAdapter", {
		bodyBytes: "body"
	});
	var L = class extends R {
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
				let s = L.clientAdapter[n] || n,
					i = super.getFn(e, s, r);
				return n === "bodyBytes" && (i = L.transferBodyBytes(i, "Uint8Array")), i
			}
			setFn(e, n, r, s) {
				let i = L.clientAdapter[n] || n,
					o = r;
				return n === "bodyBytes" && (o = L.transferBodyBytes(o, "Uint8Array")), super.setFn(e, i, o, s)
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
					for (let [s, i] of Object.entries(e)) s === "id" ? r.sessionIndex = i : s === "bodyBytes" ? r.bodyBytes = L.transferBodyBytes(i, "ArrayBuffer") : r[s] = i;
					e.bodyBytes && delete r.body, $task.fetch(r).then(s => {
						let i = {
							status: 200,
							headers: {}
						};
						for (let [o, a] of Object.entries(s)) o === "sessionIndex" ? i.id = a : o === "bodyBytes" ? i.bodyBytes = L.transferBodyBytes(a, "Uint8Array") : o === "statusCode" ? i.status = a : i[o] = a;
						n(i)
					})
				})
			}
			done(e) {
				let n = e.response ?? e,
					r = {};
				for (let [s, i] of Object.entries(n)) s === "status" ? r.status = `HTTP/1.1 ${i}` : s === "bodyBytes" ? r.bodyBytes = L.transferBodyBytes(i, "ArrayBuffer") : r[s] = i;
				$done(r)
			}
		},
		ue = L;
	G(ue, "clientAdapter", {
		id: "sessionIndex",
		status: "statusCode"
	});
	var Fe = class extends K {
		decodeParams(e) {
			if (typeof $argument < "u")
				for (let n of Object.keys(e)) {
					let r = $argument?.[n];
					r !== void 0 && (e[n] = r)
				}
			return e
		}
	};
	var T = R.getInstance("YouTube");
	var de = class {
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
			this.name = n, this.msgType = e, this.argument = this.decodeArgument(), T.isDebug = Boolean(this.argument.debug), T.debug(this.name);
			let r = T.getJSON("YouTubeAdvertiseInfo");
			T.debug(`currentVersion:  ${this.version}`), T.debug(`storedVersion:  ${r.version}`), r?.version === this.version && Object.assign(this, r)
		}
		decodeArgument() {
			let e = {
				lyricLang: "zh-Hans",
				captionLang: "zh-Hans",
				blockUpload: !0,
				blockImmersive: !0,
				debug: !1
			};
			return T.decodeParams(e)
		}
		fromBinary(e) {
			return e instanceof Uint8Array ? (this.message = this.msgType.fromBinary(e), T.debug(`raw: ${Math.floor(e.length/1024)} kb`), this) : (T.log("YouTube can not get binaryBody"), T.exit(), this)
		}
		async modify() {
			let e = this.pure();
			return e instanceof Promise ? await e : e
		}
		toBinary() {
			return this.message.toBinary()
		}
		listUnknownFields(e) {
			return e instanceof F ? e.getType().runtime.bin.listUnknownFields(e) : []
		}
		save() {
			if (this.needSave) {
				T.debug("Update Config");
				let e = {
					version: this.version,
					whiteNo: this.whiteNo,
					blackNo: this.blackNo,
					whiteEml: this.whiteEml,
					blackEml: this.blackEml
				};
				T.debug(e), T.setJSON(e, "YouTubeAdvertiseInfo")
			}
		}
		done() {
			if (this.save(), this.needProcess) {
				T.timeStart("toBinary");
				let e = this.toBinary();
				T.timeEnd("toBinary"), T.debug(`modify: ${Math.floor(e.length/1024)} kb`), T.done({
					bodyBytes: e
				})
			}
			T.debug("use $done({})"), T.exit()
		}
		iterate(e = {}, n, r) {
			let s = typeof e == "object" ? [e] : [];
			for (; s.length;) {
				let i = s.pop(),
					o = Object.keys(i);
				for (let a of o) a === n ? r(i, s) : typeof i[a] == "object" && s.push(i[a])
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
			return this.iterate(e, "renderInfo", (s, i) => {
				if (r = s.renderInfo.layoutRender.eml.split("|")[0], this.whiteEml.includes(r)) n = !1;
				else if (this.blackEml.includes(r) || /shorts(?!_pivot_item)/.test(r)) n = !0;
				else {
					let o = s?.videoInfo?.videoContext?.videoContent;
					o && (n = this.checkUnknownFiled(o), n ? this.blackEml.push(r) : this.whiteEml.push(r), this.needSave = !0)
				}
				i.length = 0
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
	var z = class extends de {
		constructor(e = at, n = "Request") {
			super(e, n)
		}
		pure() {
			return this.message.context.adSignalsInfo.params.length = 0, this.needProcess = !0, this
		}
	};
	async function $t() {
		let t = new z;
		await t.fromBinary(T.request.bodyBytes).pure(), t.done()
	}
	$t().catch(t => {
		T.log(t.toString())
	}).finally(() => {
		T.exit()
	});
})();
