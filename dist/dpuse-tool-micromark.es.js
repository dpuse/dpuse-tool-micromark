import { a as e, c as t, d as n, f as r, i, l as a, n as o, o as s, p as c, r as l, s as u, t as d, u as f } from "./micromark-factory-space--cD_Xj01.js";
//#region \0rolldown/runtime.js
var p = Object.defineProperty, m = (e, t) => {
	let n = {};
	for (var r in e) p(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || p(n, Symbol.toStringTag, { value: "Module" }), n;
}, h = document.createElement("i");
function g(e) {
	let t = "&" + e + ";";
	h.innerHTML = t;
	let n = h.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function _(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function v(e, t) {
	return e.length > 0 ? (_(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var y = {}.hasOwnProperty;
function b(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) x(t, e[n]);
	return t;
}
function x(e, t) {
	let n;
	for (n in t) {
		let r = (y.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			y.call(r, a) || (r[a] = []);
			let e = i[a];
			S(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function S(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	_(e, 0, 0, r);
}
function C(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) w(t, e[n]);
	return t;
}
function w(e, t) {
	let n;
	for (n in t) {
		let r = (y.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) r[a] = i[a];
	}
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function T(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-encode/index.js
var E = {
	"\"": "quot",
	"&": "amp",
	"<": "lt",
	">": "gt"
};
function D(e) {
	return e.replace(/["&<>]/g, t);
	function t(e) {
		return "&" + E[e] + ";";
	}
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function O(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function k(e, t) {
	let n = D(A(e || ""));
	if (!t) return n;
	let r = n.indexOf(":"), i = n.indexOf("?"), a = n.indexOf("#"), o = n.indexOf("/");
	return r < 0 || o > -1 && r > o || i > -1 && r > i || a > -1 && r > a || t.test(n.slice(0, r)) ? n : "";
}
function A(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && l(e.charCodeAt(n + 1)) && l(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region node_modules/micromark/lib/compile.js
var j = {}.hasOwnProperty, M = /^(https?|ircs?|mailto|xmpp)$/i, N = /^https?$/i;
function P(e) {
	let t = e || {}, n = !0, r = {}, i = [[]], a = [], o = [], s = C([{
		enter: {
			blockQuote: B,
			codeFenced: ee,
			codeFencedFenceInfo: h,
			codeFencedFenceMeta: h,
			codeIndented: re,
			codeText: Me,
			content: _e,
			definition: fe,
			definitionDestinationString: me,
			definitionLabelString: h,
			definitionTitleString: h,
			emphasis: Ae,
			htmlFlow: De,
			htmlText: ke,
			image: W,
			label: h,
			link: ae,
			listItemMarker: I,
			listItemValue: F,
			listOrdered: A,
			listUnordered: P,
			paragraph: H,
			reference: h,
			resource: le,
			resourceDestinationString: G,
			resourceTitleString: h,
			setextHeading: ye,
			strong: je
		},
		exit: {
			atxHeading: xe,
			atxHeadingSequence: ve,
			autolinkEmail: ze,
			autolinkProtocol: Re,
			blockQuote: V,
			characterEscapeValue: J,
			characterReferenceMarkerHexadecimal: Ie,
			characterReferenceMarkerNumeric: Ie,
			characterReferenceValue: Le,
			codeFenced: ie,
			codeFencedFence: ne,
			codeFencedFenceInfo: te,
			codeFencedFenceMeta: E,
			codeFlowValue: Te,
			codeIndented: ie,
			codeText: Ne,
			codeTextData: J,
			data: J,
			definition: ge,
			definitionDestinationString: he,
			definitionLabelString: pe,
			definitionTitleString: q,
			emphasis: Y,
			hardBreakEscape: Ee,
			hardBreakTrailing: Ee,
			htmlFlow: Oe,
			htmlFlowData: J,
			htmlText: Oe,
			htmlTextData: J,
			image: de,
			label: se,
			labelText: oe,
			lineEnding: we,
			link: de,
			listOrdered: L,
			listUnordered: R,
			paragraph: U,
			reference: E,
			referenceString: ce,
			resource: E,
			resourceDestinationString: ue,
			resourceTitleString: K,
			setextHeading: Ce,
			setextHeadingLineSequence: Se,
			setextHeadingText: be,
			strong: Pe,
			thematicBreak: Fe
		}
	}, ...t.htmlExtensions || []]), c = {
		definitions: r,
		tightStack: o
	}, l = {
		buffer: h,
		encode: w,
		getData: m,
		lineEndingIfNeeded: S,
		options: t,
		raw: b,
		resume: _,
		setData: p,
		tag: y
	}, u = t.defaultLineEnding;
	return d;
	function d(e) {
		let t = -1, n = 0, r = [], a = [], o = [];
		for (; ++t < e.length;) !u && (e[t][1].type === "lineEnding" || e[t][1].type === "lineEndingBlank") && (u = e[t][2].sliceSerialize(e[t][1])), (e[t][1].type === "listOrdered" || e[t][1].type === "listUnordered") && (e[t][0] === "enter" ? r.push(t) : f(e.slice(r.pop(), t))), e[t][1].type === "definition" && (e[t][0] === "enter" ? (o = v(o, e.slice(n, t)), n = t) : (a = v(a, e.slice(n, t + 1)), n = t + 1));
		a = v(a, o), a = v(a, e.slice(n)), t = -1;
		let c = a;
		for (s.enter.null && s.enter.null.call(l); ++t < e.length;) {
			let e = s[c[t][0]], n = c[t][1].type, r = e[n];
			j.call(e, n) && r && r.call({
				sliceSerialize: c[t][2].sliceSerialize,
				...l
			}, c[t][1]);
		}
		return s.exit.null && s.exit.null.call(l), i[0].join("");
	}
	function f(e) {
		let t = e.length, n = 0, r = 0, i = !1, a;
		for (; ++n < t;) {
			let t = e[n];
			if (t[1]._container) a = void 0, t[0] === "enter" ? r++ : r--;
			else switch (t[1].type) {
				case "listItemPrefix":
					t[0] === "exit" && (a = !0);
					break;
				case "linePrefix": break;
				case "lineEndingBlank":
					t[0] === "enter" && !r && (a ? a = void 0 : i = !0);
					break;
				default: a = void 0;
			}
		}
		e[0][1]._loose = i;
	}
	function p(e, t) {
		c[e] = t;
	}
	function m(e) {
		return c[e];
	}
	function h() {
		i.push([]);
	}
	function _() {
		return i.pop().join("");
	}
	function y(e) {
		n && (p("lastWasTag", !0), i[i.length - 1].push(e));
	}
	function b(e) {
		p("lastWasTag"), i[i.length - 1].push(e);
	}
	function x() {
		b(u || "\n");
	}
	function S() {
		let e = i[i.length - 1], t = e[e.length - 1], n = t ? t.charCodeAt(t.length - 1) : null;
		n === 10 || n === 13 || n === null || x();
	}
	function w(e) {
		return m("ignoreEncode") ? e : D(e);
	}
	function E() {
		_();
	}
	function A(e) {
		o.push(!e._loose), S(), y("<ol"), p("expectFirstItem", !0);
	}
	function P(e) {
		o.push(!e._loose), S(), y("<ul"), p("expectFirstItem", !0);
	}
	function F(e) {
		if (m("expectFirstItem")) {
			let t = Number.parseInt(this.sliceSerialize(e), 10);
			t !== 1 && y(" start=\"" + w(String(t)) + "\"");
		}
	}
	function I() {
		m("expectFirstItem") ? y(">") : z(), S(), y("<li>"), p("expectFirstItem"), p("lastWasTag");
	}
	function L() {
		z(), o.pop(), x(), y("</ol>");
	}
	function R() {
		z(), o.pop(), x(), y("</ul>");
	}
	function z() {
		m("lastWasTag") && !m("slurpAllLineEndings") && S(), y("</li>"), p("slurpAllLineEndings");
	}
	function B() {
		o.push(!1), S(), y("<blockquote>");
	}
	function V() {
		o.pop(), S(), y("</blockquote>"), p("slurpAllLineEndings");
	}
	function H() {
		o[o.length - 1] || (S(), y("<p>")), p("slurpAllLineEndings");
	}
	function U() {
		o[o.length - 1] ? p("slurpAllLineEndings", !0) : y("</p>");
	}
	function ee() {
		S(), y("<pre><code"), p("fencesCount", 0);
	}
	function te() {
		y(" class=\"language-" + _() + "\"");
	}
	function ne() {
		let e = m("fencesCount") || 0;
		e || (y(">"), p("slurpOneLineEnding", !0)), p("fencesCount", e + 1);
	}
	function re() {
		S(), y("<pre><code>");
	}
	function ie() {
		let e = m("fencesCount");
		e !== void 0 && e < 2 && c.tightStack.length > 0 && !m("lastWasTag") && x(), m("flowCodeSeenData") && S(), y("</code></pre>"), e !== void 0 && e < 2 && S(), p("flowCodeSeenData"), p("fencesCount"), p("slurpOneLineEnding");
	}
	function W() {
		a.push({ image: !0 }), n = void 0;
	}
	function ae() {
		a.push({});
	}
	function oe(e) {
		a[a.length - 1].labelId = this.sliceSerialize(e);
	}
	function se() {
		a[a.length - 1].label = _();
	}
	function ce(e) {
		a[a.length - 1].referenceId = this.sliceSerialize(e);
	}
	function le() {
		h(), a[a.length - 1].destination = "";
	}
	function G() {
		h(), p("ignoreEncode", !0);
	}
	function ue() {
		a[a.length - 1].destination = _(), p("ignoreEncode");
	}
	function K() {
		a[a.length - 1].title = _();
	}
	function de() {
		let e = a.length - 1, i = a[e], o = i.referenceId || i.labelId, s = i.destination === void 0 ? r[O(o)] : i;
		for (n = !0; e--;) if (a[e].image) {
			n = void 0;
			break;
		}
		i.image ? (y("<img src=\"" + k(s.destination, t.allowDangerousProtocol ? void 0 : N) + "\" alt=\""), b(i.label), y("\"")) : y("<a href=\"" + k(s.destination, t.allowDangerousProtocol ? void 0 : M) + "\""), y(s.title ? " title=\"" + s.title + "\"" : ""), i.image ? y(" />") : (y(">"), b(i.label), y("</a>")), a.pop();
	}
	function fe() {
		h(), a.push({});
	}
	function pe(e) {
		_(), a[a.length - 1].labelId = this.sliceSerialize(e);
	}
	function me() {
		h(), p("ignoreEncode", !0);
	}
	function he() {
		a[a.length - 1].destination = _(), p("ignoreEncode");
	}
	function q() {
		a[a.length - 1].title = _();
	}
	function ge() {
		let e = a[a.length - 1], t = O(e.labelId);
		_(), j.call(r, t) || (r[t] = a[a.length - 1]), a.pop();
	}
	function _e() {
		p("slurpAllLineEndings", !0);
	}
	function ve(e) {
		m("headingRank") || (p("headingRank", this.sliceSerialize(e).length), S(), y("<h" + m("headingRank") + ">"));
	}
	function ye() {
		h(), p("slurpAllLineEndings");
	}
	function be() {
		p("slurpAllLineEndings", !0);
	}
	function xe() {
		y("</h" + m("headingRank") + ">"), p("headingRank");
	}
	function Se(e) {
		p("headingRank", this.sliceSerialize(e).charCodeAt(0) === 61 ? 1 : 2);
	}
	function Ce() {
		let e = _();
		S(), y("<h" + m("headingRank") + ">"), b(e), y("</h" + m("headingRank") + ">"), p("slurpAllLineEndings"), p("headingRank");
	}
	function J(e) {
		b(w(this.sliceSerialize(e)));
	}
	function we(e) {
		if (!m("slurpAllLineEndings")) {
			if (m("slurpOneLineEnding")) {
				p("slurpOneLineEnding");
				return;
			}
			if (m("inCodeText")) {
				b(" ");
				return;
			}
			b(w(this.sliceSerialize(e)));
		}
	}
	function Te(e) {
		b(w(this.sliceSerialize(e))), p("flowCodeSeenData", !0);
	}
	function Ee() {
		y("<br />");
	}
	function De() {
		S(), ke();
	}
	function Oe() {
		p("ignoreEncode");
	}
	function ke() {
		t.allowDangerousHtml && p("ignoreEncode", !0);
	}
	function Ae() {
		y("<em>");
	}
	function je() {
		y("<strong>");
	}
	function Me() {
		p("inCodeText", !0), y("<code>");
	}
	function Ne() {
		p("inCodeText"), y("</code>");
	}
	function Y() {
		y("</em>");
	}
	function Pe() {
		y("</strong>");
	}
	function Fe() {
		S(), y("<hr />");
	}
	function Ie(e) {
		p("characterReferenceType", e.type);
	}
	function Le(e) {
		let t = this.sliceSerialize(e);
		b(w(m("characterReferenceType") ? T(t, m("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : g(t))), p("characterReferenceType");
	}
	function Re(e) {
		let n = this.sliceSerialize(e);
		y("<a href=\"" + k(n, t.allowDangerousProtocol ? void 0 : M) + "\">"), b(w(n)), y("</a>");
	}
	function ze(e) {
		let t = this.sliceSerialize(e);
		y("<a href=\"" + k("mailto:" + t) + "\">"), b(w(t)), y("</a>");
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var F = { tokenize: I };
function I(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), d(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), o(t);
	}
	function o(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, s(t);
	}
	function s(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return a(t) ? (e.consume(t), e.exit("chunkText"), o) : (e.consume(t), s);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var L = { tokenize: z }, R = { tokenize: B };
function z(e) {
	let t = this, n = [], r = 0, i, o, s;
	return c;
	function c(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, l, u)(i);
		}
		return u(i);
	}
	function l(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && b();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			y(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return _(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, u(e);
		}
		return c(e);
	}
	function u(a) {
		if (r === n.length) {
			if (!i) return p(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return h(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(R, d, f)(a);
	}
	function d(e) {
		return i && b(), y(r), p(e);
	}
	function f(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, h(e);
	}
	function p(n) {
		return t.containerState = {}, e.attempt(R, m, h)(n);
	}
	function m(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), p(e);
	}
	function h(n) {
		if (n === null) {
			i && b(), y(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: o
		}), g(n);
	}
	function g(n) {
		if (n === null) {
			v(e.exit("chunkFlow"), !0), y(0), e.consume(n);
			return;
		}
		return a(n) ? (e.consume(n), v(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, c) : (e.consume(n), g);
	}
	function v(e, n) {
		let a = t.sliceStream(e);
		if (n && a.push(null), e.previous = o, o && (o.next = e), o = e, i.defineSkip(e.start), i.write(a), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < s && (!i.events[e][1].end || i.events[e][1].end.offset > s)) return;
			let n = t.events.length, a = n, o, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (o) {
					c = t.events[a][1].end;
					break;
				}
				o = !0;
			}
			for (y(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			_(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function y(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function b() {
		i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function B(e, t, n) {
	return d(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function V(e) {
	if (e === null || f(e) || c(e)) return 1;
	if (r(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function H(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var U = {
	name: "attention",
	resolveAll: ee,
	tokenize: te
};
function ee(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			ne(d, -c), ne(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = v(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = v(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = v(l, H(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = v(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = v(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, _(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function te(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = V(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = V(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function ne(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var re = {
	name: "autolink",
	tokenize: ie
};
function ie(t, n, r) {
	let a = 0;
	return s;
	function s(e) {
		return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(e), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), c;
	}
	function c(e) {
		return o(e) ? (t.consume(e), u) : e === 64 ? r(e) : p(e);
	}
	function u(e) {
		return e === 43 || e === 45 || e === 46 || l(e) ? (a = 1, d(e)) : p(e);
	}
	function d(e) {
		return e === 58 ? (t.consume(e), a = 0, f) : (e === 43 || e === 45 || e === 46 || l(e)) && a++ < 32 ? (t.consume(e), d) : (a = 0, p(e));
	}
	function f(i) {
		return i === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(i), t.exit("autolinkMarker"), t.exit("autolink"), n) : i === null || i === 32 || i === 60 || e(i) ? r(i) : (t.consume(i), f);
	}
	function p(e) {
		return e === 64 ? (t.consume(e), m) : i(e) ? (t.consume(e), p) : r(e);
	}
	function m(e) {
		return l(e) ? h(e) : r(e);
	}
	function h(e) {
		return e === 46 ? (t.consume(e), a = 0, m) : e === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(e), t.exit("autolinkMarker"), t.exit("autolink"), n) : g(e);
	}
	function g(e) {
		if ((e === 45 || l(e)) && a++ < 63) {
			let n = e === 45 ? g : h;
			return t.consume(e), n;
		}
		return r(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var W = {
	partial: !0,
	tokenize: ae
};
function ae(e, t, r) {
	return i;
	function i(t) {
		return n(t) ? d(e, o, "linePrefix")(t) : o(t);
	}
	function o(e) {
		return e === null || a(e) ? t(e) : r(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var oe = {
	continuation: { tokenize: ce },
	exit: le,
	name: "blockQuote",
	tokenize: se
};
function se(e, t, r) {
	let i = this;
	return a;
	function a(t) {
		if (t === 62) {
			let n = i.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), o;
		}
		return r(t);
	}
	function o(r) {
		return n(r) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(r), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(r));
	}
}
function ce(e, t, r) {
	let i = this;
	return a;
	function a(t) {
		return n(t) ? d(e, o, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : o(t);
	}
	function o(n) {
		return e.attempt(oe, t, r)(n);
	}
}
function le(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var G = {
	name: "characterEscape",
	tokenize: ue
};
function ue(e, n, r) {
	return i;
	function i(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), a;
	}
	function a(i) {
		return t(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : r(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var K = {
	name: "characterReference",
	tokenize: de
};
function de(e, t, n) {
	let r = this, i = 0, a, o;
	return c;
	function c(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), d;
	}
	function d(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), f) : (e.enter("characterReferenceValue"), a = 31, o = l, p(t));
	}
	function f(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = u, p) : (e.enter("characterReferenceValue"), a = 7, o = s, p(t));
	}
	function p(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === l && !g(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), p) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var fe = {
	partial: !0,
	tokenize: he
}, pe = {
	concrete: !0,
	name: "codeFenced",
	tokenize: me
};
function me(e, t, r) {
	let i = this, o = {
		partial: !0,
		tokenize: w
	}, s = 0, c = 0, l;
	return u;
	function u(e) {
		return f(e);
	}
	function f(t) {
		let n = i.events[i.events.length - 1];
		return s = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, l = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), p(t);
	}
	function p(t) {
		return t === l ? (c++, e.consume(t), p) : c < 3 ? r(t) : (e.exit("codeFencedFenceSequence"), n(t) ? d(e, m, "whitespace")(t) : m(t));
	}
	function m(n) {
		return n === null || a(n) ? (e.exit("codeFencedFence"), i.interrupt ? t(n) : e.check(fe, v, C)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), h(n));
	}
	function h(t) {
		return t === null || a(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), m(t)) : n(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(e, g, "whitespace")(t)) : t === 96 && t === l ? r(t) : (e.consume(t), h);
	}
	function g(t) {
		return t === null || a(t) ? m(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), _(t));
	}
	function _(t) {
		return t === null || a(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(t)) : t === 96 && t === l ? r(t) : (e.consume(t), _);
	}
	function v(t) {
		return e.attempt(o, C, y)(t);
	}
	function y(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), b;
	}
	function b(t) {
		return s > 0 && n(t) ? d(e, x, "linePrefix", s + 1)(t) : x(t);
	}
	function x(t) {
		return t === null || a(t) ? e.check(fe, v, C)(t) : (e.enter("codeFlowValue"), S(t));
	}
	function S(t) {
		return t === null || a(t) ? (e.exit("codeFlowValue"), x(t)) : (e.consume(t), S);
	}
	function C(n) {
		return e.exit("codeFenced"), t(n);
	}
	function w(e, t, r) {
		let o = 0;
		return s;
		function s(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u;
		}
		function u(t) {
			return e.enter("codeFencedFence"), n(t) ? d(e, f, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : f(t);
		}
		function f(t) {
			return t === l ? (e.enter("codeFencedFenceSequence"), p(t)) : r(t);
		}
		function p(t) {
			return t === l ? (o++, e.consume(t), p) : o >= c ? (e.exit("codeFencedFenceSequence"), n(t) ? d(e, m, "whitespace")(t) : m(t)) : r(t);
		}
		function m(n) {
			return n === null || a(n) ? (e.exit("codeFencedFence"), t(n)) : r(n);
		}
	}
}
function he(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-indented.js
var q = {
	name: "codeIndented",
	tokenize: _e
}, ge = {
	partial: !0,
	tokenize: ve
};
function _e(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), d(e, o, "linePrefix", 5)(t);
	}
	function o(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? s(e) : n(e);
	}
	function s(t) {
		return t === null ? l(t) : a(t) ? e.attempt(ge, s, l)(t) : (e.enter("codeFlowValue"), c(t));
	}
	function c(t) {
		return t === null || a(t) ? (e.exit("codeFlowValue"), s(t)) : (e.consume(t), c);
	}
	function l(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function ve(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : a(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : d(e, o, "linePrefix", 5)(t);
	}
	function o(e) {
		let o = r.events[r.events.length - 1];
		return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(e) : a(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var ye = {
	name: "codeText",
	previous: xe,
	resolve: be,
	tokenize: Se
};
function be(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function xe(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Se(e, t, n) {
	this;
	let r = 0, i, o;
	return s;
	function s(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), c(t);
	}
	function c(t) {
		return t === 96 ? (e.consume(t), r++, c) : (e.exit("codeTextSequence"), l(t));
	}
	function l(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), l) : t === 96 ? (o = e.enter("codeTextSequence"), i = 0, d(t)) : a(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), l) : (e.enter("codeTextData"), u(t));
	}
	function u(t) {
		return t === null || t === 32 || t === 96 || a(t) ? (e.exit("codeTextData"), l(t)) : (e.consume(t), u);
	}
	function d(n) {
		return n === 96 ? (e.consume(n), i++, d) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (o.type = "codeTextData", u(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Ce = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && J(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), J(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), J(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			J(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			J(this.left, t.reverse());
		}
	}
};
function J(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function we(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Ce(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Te(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return _(e, 0, Infinity, u.slice(0)), !l;
}
function Te(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/content.js
var Ee = {
	resolve: Oe,
	tokenize: ke
}, De = {
	partial: !0,
	tokenize: Ae
};
function Oe(e) {
	return we(e), e;
}
function ke(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? o(t) : a(t) ? e.check(De, s, o)(t) : (e.consume(t), i);
	}
	function o(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function s(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function Ae(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), d(e, o, "linePrefix");
	}
	function o(i) {
		if (i === null || a(i)) return n(i);
		let o = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function je(t, n, r, i, o, s, c, l, u) {
	let d = u || Infinity, p = 0;
	return m;
	function m(n) {
		return n === 60 ? (t.enter(i), t.enter(o), t.enter(s), t.consume(n), t.exit(s), h) : n === null || n === 32 || n === 41 || e(n) ? r(n) : (t.enter(i), t.enter(c), t.enter(l), t.enter("chunkString", { contentType: "string" }), v(n));
	}
	function h(e) {
		return e === 62 ? (t.enter(s), t.consume(e), t.exit(s), t.exit(o), t.exit(i), n) : (t.enter(l), t.enter("chunkString", { contentType: "string" }), g(e));
	}
	function g(e) {
		return e === 62 ? (t.exit("chunkString"), t.exit(l), h(e)) : e === null || e === 60 || a(e) ? r(e) : (t.consume(e), e === 92 ? _ : g);
	}
	function _(e) {
		return e === 60 || e === 62 || e === 92 ? (t.consume(e), g) : g(e);
	}
	function v(a) {
		return !p && (a === null || a === 41 || f(a)) ? (t.exit("chunkString"), t.exit(l), t.exit(c), t.exit(i), n(a)) : p < d && a === 40 ? (t.consume(a), p++, v) : a === 41 ? (t.consume(a), p--, v) : a === null || a === 32 || a === 40 || e(a) ? r(a) : (t.consume(a), a === 92 ? y : v);
	}
	function y(e) {
		return e === 40 || e === 41 || e === 92 ? (t.consume(e), v) : v(e);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function Me(e, t, r, i, o, s) {
	let c = this, l = 0, u;
	return d;
	function d(t) {
		return e.enter(i), e.enter(o), e.consume(t), e.exit(o), e.enter(s), f;
	}
	function f(n) {
		return l > 999 || n === null || n === 91 || n === 93 && !u || n === 94 && !l && "_hiddenFootnoteSupport" in c.parser.constructs ? r(n) : n === 93 ? (e.exit(s), e.enter(o), e.consume(n), e.exit(o), e.exit(i), t) : a(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), f) : (e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === null || t === 91 || t === 93 || a(t) || l++ > 999 ? (e.exit("chunkString"), f(t)) : (e.consume(t), u ||= !n(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), l++, p) : p(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function Ne(e, t, n, r, i, o) {
	let s;
	return c;
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), s = t === 40 ? 41 : t, l) : n(t);
	}
	function l(n) {
		return n === s ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(o), u(n));
	}
	function u(t) {
		return t === s ? (e.exit(o), l(s)) : t === null ? n(t) : a(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), d(e, u, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), f(t));
	}
	function f(t) {
		return t === s || t === null || a(t) ? (e.exit("chunkString"), u(t)) : (e.consume(t), t === 92 ? p : f);
	}
	function p(t) {
		return t === s || t === 92 ? (e.consume(t), f) : f(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function Y(e, t) {
	let r;
	return i;
	function i(o) {
		return a(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), r = !0, i) : n(o) ? d(e, i, r ? "linePrefix" : "lineSuffix")(o) : t(o);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var Pe = {
	name: "definition",
	tokenize: Ie
}, Fe = {
	partial: !0,
	tokenize: Le
};
function Ie(e, t, r) {
	let i = this, o;
	return s;
	function s(t) {
		return e.enter("definition"), c(t);
	}
	function c(t) {
		return Me.call(i, e, l, r, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function l(t) {
		return o = O(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), u) : r(t);
	}
	function u(t) {
		return f(t) ? Y(e, p)(t) : p(t);
	}
	function p(t) {
		return je(e, m, r, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function m(t) {
		return e.attempt(Fe, h, h)(t);
	}
	function h(t) {
		return n(t) ? d(e, g, "whitespace")(t) : g(t);
	}
	function g(n) {
		return n === null || a(n) ? (e.exit("definition"), i.parser.defined.push(o), t(n)) : r(n);
	}
}
function Le(e, t, r) {
	return i;
	function i(t) {
		return f(t) ? Y(e, o)(t) : r(t);
	}
	function o(t) {
		return Ne(e, s, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function s(t) {
		return n(t) ? d(e, c, "whitespace")(t) : c(t);
	}
	function c(e) {
		return e === null || a(e) ? t(e) : r(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var Re = {
	name: "hardBreakEscape",
	tokenize: ze
};
function ze(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return a(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var Be = {
	name: "headingAtx",
	resolve: Ve,
	tokenize: He
};
function Ve(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, _(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function He(e, t, r) {
	let i = 0;
	return o;
	function o(t) {
		return e.enter("atxHeading"), s(t);
	}
	function s(t) {
		return e.enter("atxHeadingSequence"), c(t);
	}
	function c(t) {
		return t === 35 && i++ < 6 ? (e.consume(t), c) : t === null || f(t) ? (e.exit("atxHeadingSequence"), l(t)) : r(t);
	}
	function l(r) {
		return r === 35 ? (e.enter("atxHeadingSequence"), u(r)) : r === null || a(r) ? (e.exit("atxHeading"), t(r)) : n(r) ? d(e, l, "whitespace")(r) : (e.enter("atxHeadingText"), p(r));
	}
	function u(t) {
		return t === 35 ? (e.consume(t), u) : (e.exit("atxHeadingSequence"), l(t));
	}
	function p(t) {
		return t === null || t === 35 || f(t) ? (e.exit("atxHeadingText"), l(t)) : (e.consume(t), p);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var Ue = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), We = [
	"pre",
	"script",
	"style",
	"textarea"
], Ge = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: Je,
	tokenize: Ye
}, Ke = {
	partial: !0,
	tokenize: Ze
}, qe = {
	partial: !0,
	tokenize: Xe
};
function Je(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Ye(e, t, r) {
	let i = this, s, c, u, d, p;
	return m;
	function m(e) {
		return h(e);
	}
	function h(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), g;
	}
	function g(n) {
		return n === 33 ? (e.consume(n), _) : n === 47 ? (e.consume(n), c = !0, b) : n === 63 ? (e.consume(n), s = 3, i.interrupt ? t : V) : o(n) ? (e.consume(n), u = String.fromCharCode(n), x) : r(n);
	}
	function _(n) {
		return n === 45 ? (e.consume(n), s = 2, v) : n === 91 ? (e.consume(n), s = 5, d = 0, y) : o(n) ? (e.consume(n), s = 4, i.interrupt ? t : V) : r(n);
	}
	function v(n) {
		return n === 45 ? (e.consume(n), i.interrupt ? t : V) : r(n);
	}
	function y(n) {
		return n === "CDATA[".charCodeAt(d++) ? (e.consume(n), d === 6 ? i.interrupt ? t : N : y) : r(n);
	}
	function b(t) {
		return o(t) ? (e.consume(t), u = String.fromCharCode(t), x) : r(t);
	}
	function x(n) {
		if (n === null || n === 47 || n === 62 || f(n)) {
			let a = n === 47, o = u.toLowerCase();
			return !a && !c && We.includes(o) ? (s = 1, i.interrupt ? t(n) : N(n)) : Ue.includes(u.toLowerCase()) ? (s = 6, a ? (e.consume(n), S) : i.interrupt ? t(n) : N(n)) : (s = 7, i.interrupt && !i.parser.lazy[i.now().line] ? r(n) : c ? C(n) : w(n));
		}
		return n === 45 || l(n) ? (e.consume(n), u += String.fromCharCode(n), x) : r(n);
	}
	function S(n) {
		return n === 62 ? (e.consume(n), i.interrupt ? t : N) : r(n);
	}
	function C(t) {
		return n(t) ? (e.consume(t), C) : j(t);
	}
	function w(t) {
		return t === 47 ? (e.consume(t), j) : t === 58 || t === 95 || o(t) ? (e.consume(t), T) : n(t) ? (e.consume(t), w) : j(t);
	}
	function T(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || l(t) ? (e.consume(t), T) : E(t);
	}
	function E(t) {
		return t === 61 ? (e.consume(t), D) : n(t) ? (e.consume(t), E) : w(t);
	}
	function D(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? r(t) : t === 34 || t === 39 ? (e.consume(t), p = t, O) : n(t) ? (e.consume(t), D) : k(t);
	}
	function O(t) {
		return t === p ? (e.consume(t), p = null, A) : t === null || a(t) ? r(t) : (e.consume(t), O);
	}
	function k(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || f(t) ? E(t) : (e.consume(t), k);
	}
	function A(e) {
		return e === 47 || e === 62 || n(e) ? w(e) : r(e);
	}
	function j(t) {
		return t === 62 ? (e.consume(t), M) : r(t);
	}
	function M(t) {
		return t === null || a(t) ? N(t) : n(t) ? (e.consume(t), M) : r(t);
	}
	function N(t) {
		return t === 45 && s === 2 ? (e.consume(t), L) : t === 60 && s === 1 ? (e.consume(t), R) : t === 62 && s === 4 ? (e.consume(t), H) : t === 63 && s === 3 ? (e.consume(t), V) : t === 93 && s === 5 ? (e.consume(t), B) : a(t) && (s === 6 || s === 7) ? (e.exit("htmlFlowData"), e.check(Ke, U, P)(t)) : t === null || a(t) ? (e.exit("htmlFlowData"), P(t)) : (e.consume(t), N);
	}
	function P(t) {
		return e.check(qe, F, U)(t);
	}
	function F(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), I;
	}
	function I(t) {
		return t === null || a(t) ? P(t) : (e.enter("htmlFlowData"), N(t));
	}
	function L(t) {
		return t === 45 ? (e.consume(t), V) : N(t);
	}
	function R(t) {
		return t === 47 ? (e.consume(t), u = "", z) : N(t);
	}
	function z(t) {
		if (t === 62) {
			let n = u.toLowerCase();
			return We.includes(n) ? (e.consume(t), H) : N(t);
		}
		return o(t) && u.length < 8 ? (e.consume(t), u += String.fromCharCode(t), z) : N(t);
	}
	function B(t) {
		return t === 93 ? (e.consume(t), V) : N(t);
	}
	function V(t) {
		return t === 62 ? (e.consume(t), H) : t === 45 && s === 2 ? (e.consume(t), V) : N(t);
	}
	function H(t) {
		return t === null || a(t) ? (e.exit("htmlFlowData"), U(t)) : (e.consume(t), H);
	}
	function U(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function Xe(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return a(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o) : n(t);
	}
	function o(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function Ze(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(W, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var Qe = {
	name: "htmlText",
	tokenize: $e
};
function $e(e, t, r) {
	let i = this, s, c, u;
	return p;
	function p(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), m;
	}
	function m(t) {
		return t === 33 ? (e.consume(t), h) : t === 47 ? (e.consume(t), D) : t === 63 ? (e.consume(t), T) : o(t) ? (e.consume(t), A) : r(t);
	}
	function h(t) {
		return t === 45 ? (e.consume(t), g) : t === 91 ? (e.consume(t), c = 0, b) : o(t) ? (e.consume(t), w) : r(t);
	}
	function g(t) {
		return t === 45 ? (e.consume(t), y) : r(t);
	}
	function _(t) {
		return t === null ? r(t) : t === 45 ? (e.consume(t), v) : a(t) ? (u = _, z(t)) : (e.consume(t), _);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), y) : _(t);
	}
	function y(e) {
		return e === 62 ? R(e) : e === 45 ? v(e) : _(e);
	}
	function b(t) {
		return t === "CDATA[".charCodeAt(c++) ? (e.consume(t), c === 6 ? x : b) : r(t);
	}
	function x(t) {
		return t === null ? r(t) : t === 93 ? (e.consume(t), S) : a(t) ? (u = x, z(t)) : (e.consume(t), x);
	}
	function S(t) {
		return t === 93 ? (e.consume(t), C) : x(t);
	}
	function C(t) {
		return t === 62 ? R(t) : t === 93 ? (e.consume(t), C) : x(t);
	}
	function w(t) {
		return t === null || t === 62 ? R(t) : a(t) ? (u = w, z(t)) : (e.consume(t), w);
	}
	function T(t) {
		return t === null ? r(t) : t === 63 ? (e.consume(t), E) : a(t) ? (u = T, z(t)) : (e.consume(t), T);
	}
	function E(e) {
		return e === 62 ? R(e) : T(e);
	}
	function D(t) {
		return o(t) ? (e.consume(t), O) : r(t);
	}
	function O(t) {
		return t === 45 || l(t) ? (e.consume(t), O) : k(t);
	}
	function k(t) {
		return a(t) ? (u = k, z(t)) : n(t) ? (e.consume(t), k) : R(t);
	}
	function A(t) {
		return t === 45 || l(t) ? (e.consume(t), A) : t === 47 || t === 62 || f(t) ? j(t) : r(t);
	}
	function j(t) {
		return t === 47 ? (e.consume(t), R) : t === 58 || t === 95 || o(t) ? (e.consume(t), M) : a(t) ? (u = j, z(t)) : n(t) ? (e.consume(t), j) : R(t);
	}
	function M(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || l(t) ? (e.consume(t), M) : N(t);
	}
	function N(t) {
		return t === 61 ? (e.consume(t), P) : a(t) ? (u = N, z(t)) : n(t) ? (e.consume(t), N) : j(t);
	}
	function P(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? r(t) : t === 34 || t === 39 ? (e.consume(t), s = t, F) : a(t) ? (u = P, z(t)) : n(t) ? (e.consume(t), P) : (e.consume(t), I);
	}
	function F(t) {
		return t === s ? (e.consume(t), s = void 0, L) : t === null ? r(t) : a(t) ? (u = F, z(t)) : (e.consume(t), F);
	}
	function I(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? r(t) : t === 47 || t === 62 || f(t) ? j(t) : (e.consume(t), I);
	}
	function L(e) {
		return e === 47 || e === 62 || f(e) ? j(e) : r(e);
	}
	function R(n) {
		return n === 62 ? (e.consume(n), e.exit("htmlTextData"), e.exit("htmlText"), t) : r(n);
	}
	function z(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), B;
	}
	function B(t) {
		return n(t) ? d(e, V, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : V(t);
	}
	function V(t) {
		return e.enter("htmlTextData"), u(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var et = {
	name: "labelEnd",
	resolveAll: it,
	resolveTo: at,
	tokenize: ot
}, tt = { tokenize: st }, nt = { tokenize: ct }, rt = { tokenize: lt };
function it(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && _(e, 0, e.length, n), e;
}
function at(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = v(s, e.slice(a + 1, a + r + 3)), s = v(s, [[
		"enter",
		u,
		t
	]]), s = v(s, H(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = v(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = v(s, e.slice(o + 1)), s = v(s, [[
		"exit",
		c,
		t
	]]), _(e, a, e.length, s), e;
}
function ot(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(O(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(tt, u, o ? u : d)(t) : t === 91 ? e.attempt(nt, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(rt, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function st(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return f(t) ? Y(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : je(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return f(t) ? Y(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? Ne(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return f(t) ? Y(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function ct(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Me.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(O(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function lt(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-image.js
var ut = {
	name: "labelStartImage",
	resolveAll: et.resolveAll,
	tokenize: dt
};
function dt(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-link.js
var ft = {
	name: "labelStartLink",
	resolveAll: et.resolveAll,
	tokenize: pt
};
function pt(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/line-ending.js
var mt = {
	name: "lineEnding",
	tokenize: ht
};
function ht(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), d(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var X = {
	name: "thematicBreak",
	tokenize: gt
};
function gt(e, t, r) {
	let i = 0, o;
	return s;
	function s(t) {
		return e.enter("thematicBreak"), c(t);
	}
	function c(e) {
		return o = e, l(e);
	}
	function l(n) {
		return n === o ? (e.enter("thematicBreakSequence"), u(n)) : i >= 3 && (n === null || a(n)) ? (e.exit("thematicBreak"), t(n)) : r(n);
	}
	function u(t) {
		return t === o ? (e.consume(t), i++, u) : (e.exit("thematicBreakSequence"), n(t) ? d(e, l, "whitespace")(t) : l(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var Z = {
	continuation: { tokenize: bt },
	exit: St,
	name: "list",
	tokenize: yt
}, _t = {
	partial: !0,
	tokenize: Ct
}, vt = {
	partial: !0,
	tokenize: xt
};
function yt(e, t, r) {
	let i = this, a = i.events[i.events.length - 1], o = a && a[1].type === "linePrefix" ? a[2].sliceSerialize(a[1], !0).length : 0, c = 0;
	return l;
	function l(t) {
		let n = i.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (n === "listUnordered" ? !i.containerState.marker || t === i.containerState.marker : s(t)) {
			if (i.containerState.type || (i.containerState.type = n, e.enter(n, { _container: !0 })), n === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(X, r, d)(t) : d(t);
			if (!i.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), u(t);
		}
		return r(t);
	}
	function u(t) {
		return s(t) && ++c < 10 ? (e.consume(t), u) : (!i.interrupt || c < 2) && (i.containerState.marker ? t === i.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), d(t)) : r(t);
	}
	function d(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), i.containerState.marker = i.containerState.marker || t, e.check(W, i.interrupt ? r : f, e.attempt(_t, m, p));
	}
	function f(e) {
		return i.containerState.initialBlankLine = !0, o++, m(e);
	}
	function p(t) {
		return n(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), m) : r(t);
	}
	function m(n) {
		return i.containerState.size = o + i.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function bt(e, t, r) {
	let i = this;
	return i.containerState._closeFlow = void 0, e.check(W, a, o);
	function a(n) {
		return i.containerState.furtherBlankLines = i.containerState.furtherBlankLines || i.containerState.initialBlankLine, d(e, t, "listItemIndent", i.containerState.size + 1)(n);
	}
	function o(r) {
		return i.containerState.furtherBlankLines || !n(r) ? (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, s(r)) : (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, e.attempt(vt, t, s)(r));
	}
	function s(n) {
		return i.containerState._closeFlow = !0, i.interrupt = void 0, d(e, e.attempt(Z, t, r), "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(n);
	}
}
function xt(e, t, n) {
	let r = this;
	return d(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function St(e) {
	e.exit(this.containerState.type);
}
function Ct(e, t, r) {
	let i = this;
	return d(e, a, "listItemPrefixWhitespace", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function a(e) {
		let a = i.events[i.events.length - 1];
		return !n(e) && a && a[1].type === "listItemPrefixWhitespace" ? t(e) : r(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var wt = {
	name: "setextUnderline",
	resolveTo: Tt,
	tokenize: Et
};
function Tt(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function Et(e, t, r) {
	let i = this, o;
	return s;
	function s(t) {
		let n = i.events.length, a;
		for (; n--;) if (i.events[n][1].type !== "lineEnding" && i.events[n][1].type !== "linePrefix" && i.events[n][1].type !== "content") {
			a = i.events[n][1].type === "paragraph";
			break;
		}
		return !i.parser.lazy[i.now().line] && (i.interrupt || a) ? (e.enter("setextHeadingLine"), o = t, c(t)) : r(t);
	}
	function c(t) {
		return e.enter("setextHeadingLineSequence"), l(t);
	}
	function l(t) {
		return t === o ? (e.consume(t), l) : (e.exit("setextHeadingLineSequence"), n(t) ? d(e, u, "lineSuffix")(t) : u(t));
	}
	function u(n) {
		return n === null || a(n) ? (e.exit("setextHeadingLine"), t(n)) : r(n);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var Dt = { tokenize: Ot };
function Ot(e) {
	let t = this, n = e.attempt(W, r, e.attempt(this.parser.constructs.flowInitial, i, d(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Ee, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/text.js
var kt = { resolveAll: Nt() }, At = Mt("string"), jt = Mt("text");
function Mt(e) {
	return {
		resolveAll: Nt(e === "text" ? Pt : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function Nt(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function Pt(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region node_modules/micromark/lib/constructs.js
var Ft = /* @__PURE__ */ m({
	attentionMarkers: () => Ut,
	contentInitial: () => Lt,
	disable: () => Wt,
	document: () => It,
	flow: () => zt,
	flowInitial: () => Rt,
	insideSpan: () => Ht,
	string: () => Bt,
	text: () => Vt
}), It = {
	42: Z,
	43: Z,
	45: Z,
	48: Z,
	49: Z,
	50: Z,
	51: Z,
	52: Z,
	53: Z,
	54: Z,
	55: Z,
	56: Z,
	57: Z,
	62: oe
}, Lt = { 91: Pe }, Rt = {
	[-2]: q,
	[-1]: q,
	32: q
}, zt = {
	35: Be,
	42: X,
	45: [wt, X],
	60: Ge,
	61: wt,
	95: X,
	96: pe,
	126: pe
}, Bt = {
	38: K,
	92: G
}, Vt = {
	[-5]: mt,
	[-4]: mt,
	[-3]: mt,
	33: ut,
	38: K,
	42: U,
	60: [re, Qe],
	91: ft,
	92: [Re, G],
	93: et,
	95: U,
	96: ye
}, Ht = { null: [U, kt] }, Ut = { null: [42, 95] }, Wt = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function Gt(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, o = [], s = [], c = [], l = {
		attempt: E(w),
		check: E(T),
		consume: x,
		enter: S,
		exit: C,
		interrupt: E(T, { interrupt: !0 })
	}, u = {
		code: null,
		containerState: {},
		defineSkip: g,
		events: [],
		now: h,
		parser: e,
		previous: null,
		sliceSerialize: p,
		sliceStream: m,
		write: f
	}, d = t.tokenize.call(u, l);
	return t.resolveAll && o.push(t), u;
	function f(e) {
		return s = v(s, e), y(), s[s.length - 1] === null ? (D(t, 0), u.events = H(o, u.events, u), u.events) : [];
	}
	function p(e, t) {
		return qt(m(e), t);
	}
	function m(e) {
		return Kt(s, e);
	}
	function h() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function g(e) {
		i[e.line] = e.column, k();
	}
	function y() {
		let e;
		for (; r._index < s.length;) {
			let t = s[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) b(t.charCodeAt(r._bufferIndex));
			else b(t);
		}
	}
	function b(e) {
		d = d(e);
	}
	function x(e) {
		a(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, k()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = e;
	}
	function S(e, t) {
		let n = t || {};
		return n.type = e, n.start = h(), u.events.push([
			"enter",
			n,
			u
		]), c.push(n), n;
	}
	function C(e) {
		let t = c.pop();
		return t.end = h(), u.events.push([
			"exit",
			t,
			u
		]), t;
	}
	function w(e, t) {
		D(e, t.from);
	}
	function T(e, t) {
		t.restore();
	}
	function E(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, c;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return c = O(), s = e, e.partial || (u.currentConstruct = e), e.name && u.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(u), t) : u, l, m, h)(n);
				}
			}
			function m(t) {
				return e(s, c), r;
			}
			function h(e) {
				return c.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function D(e, t) {
		e.resolveAll && !o.includes(e) && o.push(e), e.resolve && _(u.events, t, u.events.length - t, e.resolve(u.events.slice(t), u)), e.resolveTo && (u.events = e.resolveTo(u.events, u));
	}
	function O() {
		let e = h(), t = u.previous, n = u.currentConstruct, i = u.events.length, a = Array.from(c);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, u.previous = t, u.currentConstruct = n, u.events.length = i, c = a, k();
		}
	}
	function k() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function Kt(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function qt(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region node_modules/micromark/lib/parse.js
function Jt(e) {
	let t = {
		constructs: b([Ft, ...(e || {}).extensions || []]),
		content: n(F),
		defined: [],
		document: n(L),
		flow: n(Dt),
		lazy: {},
		string: n(At),
		text: n(jt)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Gt(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function Yt(e) {
	for (; !we(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var Xt = /[\0\t\n\r]/g;
function Zt() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (Xt.lastIndex = u, c = Xt.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region node_modules/micromark/index.js
function Qt(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), P(n)(Yt(Jt(n).document().write(Zt()(e, t, !0))));
}
//#endregion
//#region src/formula.ts
function $t(e) {
	return `<math display="block">${Q(tn(en(e)))}</math>`;
}
function en(e) {
	return e.match(/[A-Za-z][A-Za-z ]*|\d+(?:\.\d+)?|[=()+\-*/]/g)?.map((e) => e.trim()) ?? [];
}
function tn(e) {
	let t = 0;
	function n() {
		let n = e[t++];
		if (n === void 0) return null;
		if (/^\d/.test(n)) return {
			type: "number",
			value: n
		};
		if (/^[A-Za-z]/.test(n)) return {
			type: "identifier",
			value: n
		};
		if (n === "(") {
			let e = i();
			return t++, e ? {
				type: "group",
				value: e
			} : null;
		}
		return null;
	}
	function r() {
		let r = n();
		for (; r && (e[t] === "*" || e[t] === "/");) {
			let i = e[t++] ?? "?", a = n();
			if (!a) break;
			r = {
				type: "binary",
				op: i,
				left: r,
				right: a
			};
		}
		return r;
	}
	function i() {
		let n = r();
		for (; n && (e[t] === "+" || e[t] === "-");) {
			let i = e[t++] ?? "?", a = r();
			if (!a) break;
			n = {
				type: "binary",
				op: i,
				left: n,
				right: a
			};
		}
		return n;
	}
	function a() {
		let n = i();
		if (e[t] === "=") {
			t++;
			let e = a();
			e && (n = {
				type: "binary",
				op: "=",
				left: n,
				right: e
			});
		}
		return n;
	}
	return a();
}
function Q(e) {
	if (!e) return "";
	switch (e.type) {
		case "number": return `<mn>${e.value}</mn>`;
		case "identifier": return `<mi>${e.value}</mi>`;
		case "group": return `<mrow><mo>(</mo>${Q(e.value)}<mo>)</mo></mrow>`;
		case "binary": switch (e.op) {
			case "/": return `<mfrac>${Q(e.left)}${Q(e.right)}</mfrac>`;
			case "*": return `<mrow>${Q(e.left)}<mo>×</mo>${Q(e.right)}</mrow>`;
			default: return `<mrow>${Q(e.left)}<mo>${e.op}</mo>${Q(e.right)}</mrow>`;
		}
	}
}
//#endregion
//#region src/index.ts
var nn = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#039;"
}, rn = {
	allowDangerousHtml: !1,
	allowDangerousProtocol: !1,
	extensions: [],
	htmlExtensions: [un()]
}, an = !1, $, on, sn, cn = class {
	async highlight(e, t) {
		if (typeof document > "u") return;
		let { highlightElement: n } = await pn(t);
		for (let t of e.querySelectorAll("div[class^=\"shj-lang-\"]")) (/shj-lang-([^\s]+)/.exec(t.className) ?? [])[1] === "javascript" && (await n(t, "js", "multiline", { hideLineNumbers: !0 }), Object.assign(t.style, {
			fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, Liberation Mono, monospace",
			fontSize: "14px"
		}));
	}
	async render(e, t) {
		return (t?.tables ?? !1) && (!an && !$ && ($ = (async () => {
			let e = await import("./micromark-extension-gfm-table-DVWUn-g9.js");
			rn.extensions?.push(e.gfmTable()), rn.htmlExtensions?.push(e.gfmTableHtml()), an = !0, $ = void 0;
		})()), $ && await $), Qt(e, rn);
	}
	setColorMode(e) {
		ln(e);
	}
};
function ln(e) {
	if (typeof document > "u") return;
	let t = e === "dark" ? "theme-dark" : "theme-light";
	for (let e of document.querySelectorAll("style[data-dynamic]")) e.disabled = e.id !== t;
}
function un() {
	let e;
	return {
		enter: {
			codeFenced() {
				this.buffer(), e = {
					codeContent: [],
					lang: "",
					meta: ""
				};
			},
			codeFencedFence() {},
			codeFencedFenceSequence() {},
			codeFencedFenceInfo(t) {
				e !== void 0 && (e.lang = this.sliceSerialize(t));
			},
			codeFencedFenceMeta(t) {
				e !== void 0 && (e.meta = this.sliceSerialize(t));
			},
			codeFlowValue(t) {
				e !== void 0 && e.codeContent.push(this.sliceSerialize(t));
			}
		},
		exit: {
			codeFlowValue() {},
			codeFencedFenceMeta() {},
			codeFencedFenceInfo() {},
			codeFencedFenceSequence() {},
			codeFencedFence() {},
			codeFenced() {
				let t = e ?? {
					codeContent: [],
					lang: "",
					meta: ""
				};
				this.resume();
				let n = t.codeContent.join("\n"), r = t.lang || "plain", i = t.meta || "", a = "";
				if (r === "json") switch (i) {
					case "dpuse-visual":
						a = `<div class="${i}" data-options="${encodeURIComponent(n)}"></div>`;
						break;
					case "dpuse-formula":
						a = $t(JSON.parse(n).expression);
						break;
					case "dpuse-highcharts":
						a = `<div class="${i}" data-options="${encodeURIComponent(n)}"></div>`;
						break;
				}
				else a = `<div class="shj-lang-${r.replaceAll(/[^a-z0-9_-]/gi, "")}">${dn(n)}</div>`;
				this.raw(a), e = void 0;
			}
		}
	};
}
function dn(e) {
	return e.replaceAll(/[&<>"']/g, (e) => nn[e]);
}
function fn(e, t) {
	if (typeof document > "u") return;
	let n = document.querySelector(`#${t}`);
	n ?? (n = document.createElement("style"), n.id = t, n.dataset.dynamic = "true", document.head.append(n)), n.innerHTML = e, n.disabled = !0;
}
async function pn(e) {
	return on || (sn ??= (async () => {
		let [t, n, r] = await Promise.all([
			import("./dist-CJmpnJN5.js"),
			import("./github-dark-C85omcCp.js"),
			import("./github-light-BBuUW6Hm.js")
		]);
		return on = t, fn(n.default, "theme-dark"), fn(r.default, "theme-light"), ln(e), sn = void 0, on;
	})(), sn);
}
//#endregion
export { cn as MicromarkTool };
