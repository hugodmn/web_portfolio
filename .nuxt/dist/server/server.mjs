var _a, _b;
import { effectScope, reactive, hasInjectionContext, getCurrentInstance, version, unref, inject, ref, watchEffect, watch, toRef, isRef, defineComponent, computed, h, resolveComponent, nextTick, shallowRef, shallowReactive, isReadonly, markRaw, toRaw, isReactive, getCurrentScope, onScopeDispose, toRefs, isShallow, onUnmounted, Fragment, createVNode, Text, readonly, onMounted, mergeProps, openBlock, createElementBlock, renderSlot, createTextVNode, toDisplayString as toDisplayString$1, createElementVNode, resolveDirective, withDirectives, normalizeClass, createBlock, createCommentVNode, useSSRContext, Suspense, Transition, provide, withCtx, defineAsyncComponent, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, createApp } from "vue";
import Rt from "node:http";
import Ka from "node:https";
import nt from "node:zlib";
import se, { PassThrough, pipeline } from "node:stream";
import { Buffer as Buffer$1 } from "node:buffer";
import { promisify, deprecate, types } from "node:util";
import { format as format$2 } from "node:url";
import { isIP } from "node:net";
import { statSync, promises, createReadStream } from "node:fs";
import { basename } from "node:path";
import { withBase, withQuery, hasProtocol, parseURL, isScriptProtocol, joinURL, parseQuery, withTrailingSlash, withoutTrailingSlash } from "ufo";
import { useRuntimeConfig as useRuntimeConfig$1 } from "#internal/nitro";
import "devalue";
import { createMemoryHistory, createRouter, START_LOCATION, useRoute as useRoute$1, RouterView } from "vue-router";
import { sanitizeStatusCode, createError as createError$1, getRequestHeader, setCookie, getCookie, deleteCookie } from "h3";
import { createHooks } from "hookable";
import VueCookies from "vue-cookies";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { getActiveHead } from "unhead";
import { getContext } from "unctx";
var Za = Object.defineProperty;
var n = (i, o2) => Za(i, "name", { value: o2, configurable: true });
var Ko = (i, o2, a2) => {
  if (!o2.has(i))
    throw TypeError("Cannot " + a2);
};
var k$1 = (i, o2, a2) => (Ko(i, o2, "read from private field"), a2 ? a2.call(i) : o2.get(i)), ae = (i, o2, a2) => {
  if (o2.has(i))
    throw TypeError("Cannot add the same private member more than once");
  o2 instanceof WeakSet ? o2.add(i) : o2.set(i, a2);
}, Y = (i, o2, a2, l2) => (Ko(i, o2, "write to private field"), l2 ? l2.call(i, a2) : o2.set(i, a2), a2);
var me, vt, ct, wr, xe, Et, At, Wt, G, Bt, Ue, Ne, kt;
function os(i) {
  if (!/^data:/i.test(i))
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  i = i.replace(/\r?\n/g, "");
  const o2 = i.indexOf(",");
  if (o2 === -1 || o2 <= 4)
    throw new TypeError("malformed data: URI");
  const a2 = i.substring(5, o2).split(";");
  let l2 = "", u = false;
  const d2 = a2[0] || "text/plain";
  let p = d2;
  for (let I2 = 1; I2 < a2.length; I2++)
    a2[I2] === "base64" ? u = true : a2[I2] && (p += `;${a2[I2]}`, a2[I2].indexOf("charset=") === 0 && (l2 = a2[I2].substring(8)));
  !a2[0] && !l2.length && (p += ";charset=US-ASCII", l2 = "US-ASCII");
  const m2 = u ? "base64" : "ascii", C2 = unescape(i.substring(o2 + 1)), S = Buffer.from(C2, m2);
  return S.type = d2, S.typeFull = p, S.charset = l2, S;
}
n(os, "dataUriToBuffer");
var _n = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
function is(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
n(is, "getDefaultExportFromCjs");
var cr = { exports: {} }, Xo;
function as() {
  return Xo || (Xo = 1, function(i, o2) {
    (function(a2, l2) {
      l2(o2);
    })(_n, function(a2) {
      const l2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol : (e) => `Symbol(${e})`;
      function u() {
      }
      n(u, "noop");
      function d2() {
        if (typeof self < "u")
          return self;
        if (typeof _n < "u")
          return _n;
      }
      n(d2, "getGlobals");
      const p = d2();
      function m2(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n(m2, "typeIsObject");
      const C2 = u, S = Promise, I2 = Promise.prototype.then, re = Promise.resolve.bind(S), L = Promise.reject.bind(S);
      function E2(e) {
        return new S(e);
      }
      n(E2, "newPromise");
      function b(e) {
        return re(e);
      }
      n(b, "promiseResolvedWith");
      function g2(e) {
        return L(e);
      }
      n(g2, "promiseRejectedWith");
      function A2(e, t2, r) {
        return I2.call(e, t2, r);
      }
      n(A2, "PerformPromiseThen");
      function q(e, t2, r) {
        A2(A2(e, t2, r), void 0, C2);
      }
      n(q, "uponPromise");
      function ne(e, t2) {
        q(e, t2);
      }
      n(ne, "uponFulfillment");
      function dt(e, t2) {
        q(e, void 0, t2);
      }
      n(dt, "uponRejection");
      function O(e, t2, r) {
        return A2(e, t2, r);
      }
      n(O, "transformPromiseWith");
      function $2(e) {
        A2(e, void 0, C2);
      }
      n($2, "setPromiseIsHandledToTrue");
      const F3 = (() => {
        const e = p && p.queueMicrotask;
        if (typeof e == "function")
          return e;
        const t2 = b(void 0);
        return (r) => A2(t2, r);
      })();
      function ve(e, t2, r) {
        if (typeof e != "function")
          throw new TypeError("Argument is not a function");
        return Function.prototype.apply.call(e, t2, r);
      }
      n(ve, "reflectCall");
      function ue(e, t2, r) {
        try {
          return b(ve(e, t2, r));
        } catch (s2) {
          return g2(s2);
        }
      }
      n(ue, "promiseCall");
      const jn = 16384, rn = class rn {
        constructor() {
          this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: void 0 }, this._back = this._front, this._cursor = 0, this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(t2) {
          const r = this._back;
          let s2 = r;
          r._elements.length === jn - 1 && (s2 = { _elements: [], _next: void 0 }), r._elements.push(t2), s2 !== r && (this._back = s2, r._next = s2), ++this._size;
        }
        shift() {
          const t2 = this._front;
          let r = t2;
          const s2 = this._cursor;
          let f2 = s2 + 1;
          const c = t2._elements, h2 = c[s2];
          return f2 === jn && (r = t2._next, f2 = 0), --this._size, this._cursor = f2, t2 !== r && (this._front = r), c[s2] = void 0, h2;
        }
        forEach(t2) {
          let r = this._cursor, s2 = this._front, f2 = s2._elements;
          for (; (r !== f2.length || s2._next !== void 0) && !(r === f2.length && (s2 = s2._next, f2 = s2._elements, r = 0, f2.length === 0)); )
            t2(f2[r]), ++r;
        }
        peek() {
          const t2 = this._front, r = this._cursor;
          return t2._elements[r];
        }
      };
      n(rn, "SimpleQueue");
      let x2 = rn;
      function Fn(e, t2) {
        e._ownerReadableStream = t2, t2._reader = e, t2._state === "readable" ? vr(e) : t2._state === "closed" ? Pi(e) : In(e, t2._storedError);
      }
      n(Fn, "ReadableStreamReaderGenericInitialize");
      function Pr(e, t2) {
        const r = e._ownerReadableStream;
        return J(r, t2);
      }
      n(Pr, "ReadableStreamReaderGenericCancel");
      function fe(e) {
        e._ownerReadableStream._state === "readable" ? Er(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : vi(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), e._ownerReadableStream._reader = void 0, e._ownerReadableStream = void 0;
      }
      n(fe, "ReadableStreamReaderGenericRelease");
      function He(e) {
        return new TypeError("Cannot " + e + " a stream using a released reader");
      }
      n(He, "readerLockException");
      function vr(e) {
        e._closedPromise = E2((t2, r) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r;
        });
      }
      n(vr, "defaultReaderClosedPromiseInitialize");
      function In(e, t2) {
        vr(e), Er(e, t2);
      }
      n(In, "defaultReaderClosedPromiseInitializeAsRejected");
      function Pi(e) {
        vr(e), Ln(e);
      }
      n(Pi, "defaultReaderClosedPromiseInitializeAsResolved");
      function Er(e, t2) {
        e._closedPromise_reject !== void 0 && ($2(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
      }
      n(Er, "defaultReaderClosedPromiseReject");
      function vi(e, t2) {
        In(e, t2);
      }
      n(vi, "defaultReaderClosedPromiseResetToRejected");
      function Ln(e) {
        e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
      }
      n(Ln, "defaultReaderClosedPromiseResolve");
      const $n = l2("[[AbortSteps]]"), Dn = l2("[[ErrorSteps]]"), Ar = l2("[[CancelSteps]]"), Wr = l2("[[PullSteps]]"), Mn = Number.isFinite || function(e) {
        return typeof e == "number" && isFinite(e);
      }, Ei = Math.trunc || function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      };
      function Ai(e) {
        return typeof e == "object" || typeof e == "function";
      }
      n(Ai, "isDictionary");
      function ce(e, t2) {
        if (e !== void 0 && !Ai(e))
          throw new TypeError(`${t2} is not an object.`);
      }
      n(ce, "assertDictionary");
      function Z2(e, t2) {
        if (typeof e != "function")
          throw new TypeError(`${t2} is not a function.`);
      }
      n(Z2, "assertFunction");
      function Wi(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n(Wi, "isObject");
      function Un(e, t2) {
        if (!Wi(e))
          throw new TypeError(`${t2} is not an object.`);
      }
      n(Un, "assertObject");
      function de(e, t2, r) {
        if (e === void 0)
          throw new TypeError(`Parameter ${t2} is required in '${r}'.`);
      }
      n(de, "assertRequiredArgument");
      function Br(e, t2, r) {
        if (e === void 0)
          throw new TypeError(`${t2} is required in '${r}'.`);
      }
      n(Br, "assertRequiredField");
      function kr(e) {
        return Number(e);
      }
      n(kr, "convertUnrestrictedDouble");
      function Nn(e) {
        return e === 0 ? 0 : e;
      }
      n(Nn, "censorNegativeZero");
      function Bi(e) {
        return Nn(Ei(e));
      }
      n(Bi, "integerPart");
      function xn(e, t2) {
        const s2 = Number.MAX_SAFE_INTEGER;
        let f2 = Number(e);
        if (f2 = Nn(f2), !Mn(f2))
          throw new TypeError(`${t2} is not a finite number`);
        if (f2 = Bi(f2), f2 < 0 || f2 > s2)
          throw new TypeError(`${t2} is outside the accepted range of 0 to ${s2}, inclusive`);
        return !Mn(f2) || f2 === 0 ? 0 : f2;
      }
      n(xn, "convertUnsignedLongLongWithEnforceRange");
      function Or(e, t2) {
        if (!Te(e))
          throw new TypeError(`${t2} is not a ReadableStream.`);
      }
      n(Or, "assertReadableStream");
      function Ve(e) {
        return new Ee(e);
      }
      n(Ve, "AcquireReadableStreamDefaultReader");
      function Hn(e, t2) {
        e._reader._readRequests.push(t2);
      }
      n(Hn, "ReadableStreamAddReadRequest");
      function qr(e, t2, r) {
        const f2 = e._reader._readRequests.shift();
        r ? f2._closeSteps() : f2._chunkSteps(t2);
      }
      n(qr, "ReadableStreamFulfillReadRequest");
      function Ot(e) {
        return e._reader._readRequests.length;
      }
      n(Ot, "ReadableStreamGetNumReadRequests");
      function Vn(e) {
        const t2 = e._reader;
        return !(t2 === void 0 || !ye(t2));
      }
      n(Vn, "ReadableStreamHasDefaultReader");
      const nn = class nn {
        constructor(t2) {
          if (de(t2, 1, "ReadableStreamDefaultReader"), Or(t2, "First parameter"), Ce(t2))
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          Fn(this, t2), this._readRequests = new x2();
        }
        get closed() {
          return ye(this) ? this._closedPromise : g2(qt("closed"));
        }
        cancel(t2 = void 0) {
          return ye(this) ? this._ownerReadableStream === void 0 ? g2(He("cancel")) : Pr(this, t2) : g2(qt("cancel"));
        }
        read() {
          if (!ye(this))
            return g2(qt("read"));
          if (this._ownerReadableStream === void 0)
            return g2(He("read from"));
          let t2, r;
          const s2 = E2((c, h2) => {
            t2 = c, r = h2;
          });
          return ht(this, { _chunkSteps: (c) => t2({ value: c, done: false }), _closeSteps: () => t2({ value: void 0, done: true }), _errorSteps: (c) => r(c) }), s2;
        }
        releaseLock() {
          if (!ye(this))
            throw qt("releaseLock");
          if (this._ownerReadableStream !== void 0) {
            if (this._readRequests.length > 0)
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            fe(this);
          }
        }
      };
      n(nn, "ReadableStreamDefaultReader");
      let Ee = nn;
      Object.defineProperties(Ee.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Ee.prototype, l2.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true });
      function ye(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests") ? false : e instanceof Ee;
      }
      n(ye, "IsReadableStreamDefaultReader");
      function ht(e, t2) {
        const r = e._ownerReadableStream;
        r._disturbed = true, r._state === "closed" ? t2._closeSteps() : r._state === "errored" ? t2._errorSteps(r._storedError) : r._readableStreamController[Wr](t2);
      }
      n(ht, "ReadableStreamDefaultReaderRead");
      function qt(e) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
      }
      n(qt, "defaultReaderBrandCheckException");
      const Qn = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype), on = class on {
        constructor(t2, r) {
          this._ongoingPromise = void 0, this._isFinished = false, this._reader = t2, this._preventCancel = r;
        }
        next() {
          const t2 = n(() => this._nextSteps(), "nextSteps");
          return this._ongoingPromise = this._ongoingPromise ? O(this._ongoingPromise, t2, t2) : t2(), this._ongoingPromise;
        }
        return(t2) {
          const r = n(() => this._returnSteps(t2), "returnSteps");
          return this._ongoingPromise ? O(this._ongoingPromise, r, r) : r();
        }
        _nextSteps() {
          if (this._isFinished)
            return Promise.resolve({ value: void 0, done: true });
          const t2 = this._reader;
          if (t2._ownerReadableStream === void 0)
            return g2(He("iterate"));
          let r, s2;
          const f2 = E2((h2, y) => {
            r = h2, s2 = y;
          });
          return ht(t2, { _chunkSteps: (h2) => {
            this._ongoingPromise = void 0, F3(() => r({ value: h2, done: false }));
          }, _closeSteps: () => {
            this._ongoingPromise = void 0, this._isFinished = true, fe(t2), r({ value: void 0, done: true });
          }, _errorSteps: (h2) => {
            this._ongoingPromise = void 0, this._isFinished = true, fe(t2), s2(h2);
          } }), f2;
        }
        _returnSteps(t2) {
          if (this._isFinished)
            return Promise.resolve({ value: t2, done: true });
          this._isFinished = true;
          const r = this._reader;
          if (r._ownerReadableStream === void 0)
            return g2(He("finish iterating"));
          if (!this._preventCancel) {
            const s2 = Pr(r, t2);
            return fe(r), O(s2, () => ({ value: t2, done: true }));
          }
          return fe(r), b({ value: t2, done: true });
        }
      };
      n(on, "ReadableStreamAsyncIteratorImpl");
      let zt = on;
      const Yn = { next() {
        return Gn(this) ? this._asyncIteratorImpl.next() : g2(Zn("next"));
      }, return(e) {
        return Gn(this) ? this._asyncIteratorImpl.return(e) : g2(Zn("return"));
      } };
      Qn !== void 0 && Object.setPrototypeOf(Yn, Qn);
      function ki(e, t2) {
        const r = Ve(e), s2 = new zt(r, t2), f2 = Object.create(Yn);
        return f2._asyncIteratorImpl = s2, f2;
      }
      n(ki, "AcquireReadableStreamAsyncIterator");
      function Gn(e) {
        if (!m2(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl"))
          return false;
        try {
          return e._asyncIteratorImpl instanceof zt;
        } catch {
          return false;
        }
      }
      n(Gn, "IsReadableStreamAsyncIterator");
      function Zn(e) {
        return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
      }
      n(Zn, "streamAsyncIteratorBrandCheckException");
      const Kn = Number.isNaN || function(e) {
        return e !== e;
      };
      function pt(e) {
        return e.slice();
      }
      n(pt, "CreateArrayFromList");
      function Jn(e, t2, r, s2, f2) {
        new Uint8Array(e).set(new Uint8Array(r, s2, f2), t2);
      }
      n(Jn, "CopyDataBlockBytes");
      function Ks(e) {
        return e;
      }
      n(Ks, "TransferArrayBuffer");
      function jt(e) {
        return false;
      }
      n(jt, "IsDetachedBuffer");
      function Xn(e, t2, r) {
        if (e.slice)
          return e.slice(t2, r);
        const s2 = r - t2, f2 = new ArrayBuffer(s2);
        return Jn(f2, 0, e, t2, s2), f2;
      }
      n(Xn, "ArrayBufferSlice");
      function Oi(e) {
        return !(typeof e != "number" || Kn(e) || e < 0);
      }
      n(Oi, "IsNonNegativeNumber");
      function eo(e) {
        const t2 = Xn(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
        return new Uint8Array(t2);
      }
      n(eo, "CloneAsUint8Array");
      function zr(e) {
        const t2 = e._queue.shift();
        return e._queueTotalSize -= t2.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t2.value;
      }
      n(zr, "DequeueValue");
      function jr(e, t2, r) {
        if (!Oi(r) || r === 1 / 0)
          throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        e._queue.push({ value: t2, size: r }), e._queueTotalSize += r;
      }
      n(jr, "EnqueueValueWithSize");
      function qi(e) {
        return e._queue.peek().value;
      }
      n(qi, "PeekQueueValue");
      function ge(e) {
        e._queue = new x2(), e._queueTotalSize = 0;
      }
      n(ge, "ResetQueue");
      const an = class an {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!Fr(this))
            throw Dr("view");
          return this._view;
        }
        respond(t2) {
          if (!Fr(this))
            throw Dr("respond");
          if (de(t2, 1, "respond"), t2 = xn(t2, "First parameter"), this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          jt(this._view.buffer), Dt(this._associatedReadableByteStreamController, t2);
        }
        respondWithNewView(t2) {
          if (!Fr(this))
            throw Dr("respondWithNewView");
          if (de(t2, 1, "respondWithNewView"), !ArrayBuffer.isView(t2))
            throw new TypeError("You can only respond with array buffer views");
          if (this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          jt(t2.buffer), Mt(this._associatedReadableByteStreamController, t2);
        }
      };
      n(an, "ReadableStreamBYOBRequest");
      let Ae = an;
      Object.defineProperties(Ae.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Ae.prototype, l2.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
      const sn = class sn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!We(this))
            throw mt("byobRequest");
          return $r(this);
        }
        get desiredSize() {
          if (!We(this))
            throw mt("desiredSize");
          return lo(this);
        }
        close() {
          if (!We(this))
            throw mt("close");
          if (this._closeRequested)
            throw new TypeError("The stream has already been closed; do not close it again!");
          const t2 = this._controlledReadableByteStream._state;
          if (t2 !== "readable")
            throw new TypeError(`The stream (in ${t2} state) is not in the readable state and cannot be closed`);
          bt(this);
        }
        enqueue(t2) {
          if (!We(this))
            throw mt("enqueue");
          if (de(t2, 1, "enqueue"), !ArrayBuffer.isView(t2))
            throw new TypeError("chunk must be an array buffer view");
          if (t2.byteLength === 0)
            throw new TypeError("chunk must have non-zero byteLength");
          if (t2.buffer.byteLength === 0)
            throw new TypeError("chunk's buffer must have non-zero byteLength");
          if (this._closeRequested)
            throw new TypeError("stream is closed or draining");
          const r = this._controlledReadableByteStream._state;
          if (r !== "readable")
            throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);
          $t(this, t2);
        }
        error(t2 = void 0) {
          if (!We(this))
            throw mt("error");
          K(this, t2);
        }
        [Ar](t2) {
          to(this), ge(this);
          const r = this._cancelAlgorithm(t2);
          return Lt(this), r;
        }
        [Wr](t2) {
          const r = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            const f2 = this._queue.shift();
            this._queueTotalSize -= f2.byteLength, io(this);
            const c = new Uint8Array(f2.buffer, f2.byteOffset, f2.byteLength);
            t2._chunkSteps(c);
            return;
          }
          const s2 = this._autoAllocateChunkSize;
          if (s2 !== void 0) {
            let f2;
            try {
              f2 = new ArrayBuffer(s2);
            } catch (h2) {
              t2._errorSteps(h2);
              return;
            }
            const c = { buffer: f2, bufferByteLength: s2, byteOffset: 0, byteLength: s2, bytesFilled: 0, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
            this._pendingPullIntos.push(c);
          }
          Hn(r, t2), Be(this);
        }
      };
      n(sn, "ReadableByteStreamController");
      let _e = sn;
      Object.defineProperties(_e.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(_e.prototype, l2.toStringTag, { value: "ReadableByteStreamController", configurable: true });
      function We(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") ? false : e instanceof _e;
      }
      n(We, "IsReadableByteStreamController");
      function Fr(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? false : e instanceof Ae;
      }
      n(Fr, "IsReadableStreamBYOBRequest");
      function Be(e) {
        if (!Ii(e))
          return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r = e._pullAlgorithm();
        q(r, () => {
          e._pulling = false, e._pullAgain && (e._pullAgain = false, Be(e));
        }, (s2) => {
          K(e, s2);
        });
      }
      n(Be, "ReadableByteStreamControllerCallPullIfNeeded");
      function to(e) {
        Lr(e), e._pendingPullIntos = new x2();
      }
      n(to, "ReadableByteStreamControllerClearPendingPullIntos");
      function Ir(e, t2) {
        let r = false;
        e._state === "closed" && (r = true);
        const s2 = ro(t2);
        t2.readerType === "default" ? qr(e, s2, r) : Di(e, s2, r);
      }
      n(Ir, "ReadableByteStreamControllerCommitPullIntoDescriptor");
      function ro(e) {
        const t2 = e.bytesFilled, r = e.elementSize;
        return new e.viewConstructor(e.buffer, e.byteOffset, t2 / r);
      }
      n(ro, "ReadableByteStreamControllerConvertPullIntoDescriptor");
      function Ft(e, t2, r, s2) {
        e._queue.push({ buffer: t2, byteOffset: r, byteLength: s2 }), e._queueTotalSize += s2;
      }
      n(Ft, "ReadableByteStreamControllerEnqueueChunkToQueue");
      function no(e, t2) {
        const r = t2.elementSize, s2 = t2.bytesFilled - t2.bytesFilled % r, f2 = Math.min(e._queueTotalSize, t2.byteLength - t2.bytesFilled), c = t2.bytesFilled + f2, h2 = c - c % r;
        let y = f2, w2 = false;
        h2 > s2 && (y = h2 - t2.bytesFilled, w2 = true);
        const T = e._queue;
        for (; y > 0; ) {
          const P2 = T.peek(), v2 = Math.min(y, P2.byteLength), z = t2.byteOffset + t2.bytesFilled;
          Jn(t2.buffer, z, P2.buffer, P2.byteOffset, v2), P2.byteLength === v2 ? T.shift() : (P2.byteOffset += v2, P2.byteLength -= v2), e._queueTotalSize -= v2, oo(e, v2, t2), y -= v2;
        }
        return w2;
      }
      n(no, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");
      function oo(e, t2, r) {
        r.bytesFilled += t2;
      }
      n(oo, "ReadableByteStreamControllerFillHeadPullIntoDescriptor");
      function io(e) {
        e._queueTotalSize === 0 && e._closeRequested ? (Lt(e), wt(e._controlledReadableByteStream)) : Be(e);
      }
      n(io, "ReadableByteStreamControllerHandleQueueDrain");
      function Lr(e) {
        e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = null, e._byobRequest = null);
      }
      n(Lr, "ReadableByteStreamControllerInvalidateBYOBRequest");
      function ao(e) {
        for (; e._pendingPullIntos.length > 0; ) {
          if (e._queueTotalSize === 0)
            return;
          const t2 = e._pendingPullIntos.peek();
          no(e, t2) && (It(e), Ir(e._controlledReadableByteStream, t2));
        }
      }
      n(ao, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");
      function zi(e, t2, r) {
        const s2 = e._controlledReadableByteStream;
        let f2 = 1;
        t2.constructor !== DataView && (f2 = t2.constructor.BYTES_PER_ELEMENT);
        const c = t2.constructor, h2 = t2.buffer, y = { buffer: h2, bufferByteLength: h2.byteLength, byteOffset: t2.byteOffset, byteLength: t2.byteLength, bytesFilled: 0, elementSize: f2, viewConstructor: c, readerType: "byob" };
        if (e._pendingPullIntos.length > 0) {
          e._pendingPullIntos.push(y), co(s2, r);
          return;
        }
        if (s2._state === "closed") {
          const w2 = new c(y.buffer, y.byteOffset, 0);
          r._closeSteps(w2);
          return;
        }
        if (e._queueTotalSize > 0) {
          if (no(e, y)) {
            const w2 = ro(y);
            io(e), r._chunkSteps(w2);
            return;
          }
          if (e._closeRequested) {
            const w2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            K(e, w2), r._errorSteps(w2);
            return;
          }
        }
        e._pendingPullIntos.push(y), co(s2, r), Be(e);
      }
      n(zi, "ReadableByteStreamControllerPullInto");
      function ji(e, t2) {
        const r = e._controlledReadableByteStream;
        if (Mr(r))
          for (; ho(r) > 0; ) {
            const s2 = It(e);
            Ir(r, s2);
          }
      }
      n(ji, "ReadableByteStreamControllerRespondInClosedState");
      function Fi(e, t2, r) {
        if (oo(e, t2, r), r.bytesFilled < r.elementSize)
          return;
        It(e);
        const s2 = r.bytesFilled % r.elementSize;
        if (s2 > 0) {
          const f2 = r.byteOffset + r.bytesFilled, c = Xn(r.buffer, f2 - s2, f2);
          Ft(e, c, 0, c.byteLength);
        }
        r.bytesFilled -= s2, Ir(e._controlledReadableByteStream, r), ao(e);
      }
      n(Fi, "ReadableByteStreamControllerRespondInReadableState");
      function so(e, t2) {
        const r = e._pendingPullIntos.peek();
        Lr(e), e._controlledReadableByteStream._state === "closed" ? ji(e) : Fi(e, t2, r), Be(e);
      }
      n(so, "ReadableByteStreamControllerRespondInternal");
      function It(e) {
        return e._pendingPullIntos.shift();
      }
      n(It, "ReadableByteStreamControllerShiftPendingPullInto");
      function Ii(e) {
        const t2 = e._controlledReadableByteStream;
        return t2._state !== "readable" || e._closeRequested || !e._started ? false : !!(Vn(t2) && Ot(t2) > 0 || Mr(t2) && ho(t2) > 0 || lo(e) > 0);
      }
      n(Ii, "ReadableByteStreamControllerShouldCallPull");
      function Lt(e) {
        e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0;
      }
      n(Lt, "ReadableByteStreamControllerClearAlgorithms");
      function bt(e) {
        const t2 = e._controlledReadableByteStream;
        if (!(e._closeRequested || t2._state !== "readable")) {
          if (e._queueTotalSize > 0) {
            e._closeRequested = true;
            return;
          }
          if (e._pendingPullIntos.length > 0 && e._pendingPullIntos.peek().bytesFilled > 0) {
            const s2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            throw K(e, s2), s2;
          }
          Lt(e), wt(t2);
        }
      }
      n(bt, "ReadableByteStreamControllerClose");
      function $t(e, t2) {
        const r = e._controlledReadableByteStream;
        if (e._closeRequested || r._state !== "readable")
          return;
        const s2 = t2.buffer, f2 = t2.byteOffset, c = t2.byteLength, h2 = s2;
        if (e._pendingPullIntos.length > 0) {
          const y = e._pendingPullIntos.peek();
          jt(y.buffer), y.buffer = y.buffer;
        }
        if (Lr(e), Vn(r))
          if (Ot(r) === 0)
            Ft(e, h2, f2, c);
          else {
            e._pendingPullIntos.length > 0 && It(e);
            const y = new Uint8Array(h2, f2, c);
            qr(r, y, false);
          }
        else
          Mr(r) ? (Ft(e, h2, f2, c), ao(e)) : Ft(e, h2, f2, c);
        Be(e);
      }
      n($t, "ReadableByteStreamControllerEnqueue");
      function K(e, t2) {
        const r = e._controlledReadableByteStream;
        r._state === "readable" && (to(e), ge(e), Lt(e), Io(r, t2));
      }
      n(K, "ReadableByteStreamControllerError");
      function $r(e) {
        if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
          const t2 = e._pendingPullIntos.peek(), r = new Uint8Array(t2.buffer, t2.byteOffset + t2.bytesFilled, t2.byteLength - t2.bytesFilled), s2 = Object.create(Ae.prototype);
          $i(s2, e, r), e._byobRequest = s2;
        }
        return e._byobRequest;
      }
      n($r, "ReadableByteStreamControllerGetBYOBRequest");
      function lo(e) {
        const t2 = e._controlledReadableByteStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n(lo, "ReadableByteStreamControllerGetDesiredSize");
      function Dt(e, t2) {
        const r = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2 !== 0)
            throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        } else {
          if (t2 === 0)
            throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          if (r.bytesFilled + t2 > r.byteLength)
            throw new RangeError("bytesWritten out of range");
        }
        r.buffer = r.buffer, so(e, t2);
      }
      n(Dt, "ReadableByteStreamControllerRespond");
      function Mt(e, t2) {
        const r = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2.byteLength !== 0)
            throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
        } else if (t2.byteLength === 0)
          throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        if (r.byteOffset + r.bytesFilled !== t2.byteOffset)
          throw new RangeError("The region specified by view does not match byobRequest");
        if (r.bufferByteLength !== t2.buffer.byteLength)
          throw new RangeError("The buffer of view has different capacity than byobRequest");
        if (r.bytesFilled + t2.byteLength > r.byteLength)
          throw new RangeError("The region specified by view is larger than byobRequest");
        const f2 = t2.byteLength;
        r.buffer = t2.buffer, so(e, f2);
      }
      n(Mt, "ReadableByteStreamControllerRespondWithNewView");
      function uo(e, t2, r, s2, f2, c, h2) {
        t2._controlledReadableByteStream = e, t2._pullAgain = false, t2._pulling = false, t2._byobRequest = null, t2._queue = t2._queueTotalSize = void 0, ge(t2), t2._closeRequested = false, t2._started = false, t2._strategyHWM = c, t2._pullAlgorithm = s2, t2._cancelAlgorithm = f2, t2._autoAllocateChunkSize = h2, t2._pendingPullIntos = new x2(), e._readableStreamController = t2;
        const y = r();
        q(b(y), () => {
          t2._started = true, Be(t2);
        }, (w2) => {
          K(t2, w2);
        });
      }
      n(uo, "SetUpReadableByteStreamController");
      function Li(e, t2, r) {
        const s2 = Object.create(_e.prototype);
        let f2 = n(() => {
        }, "startAlgorithm"), c = n(() => b(void 0), "pullAlgorithm"), h2 = n(() => b(void 0), "cancelAlgorithm");
        t2.start !== void 0 && (f2 = n(() => t2.start(s2), "startAlgorithm")), t2.pull !== void 0 && (c = n(() => t2.pull(s2), "pullAlgorithm")), t2.cancel !== void 0 && (h2 = n((w2) => t2.cancel(w2), "cancelAlgorithm"));
        const y = t2.autoAllocateChunkSize;
        if (y === 0)
          throw new TypeError("autoAllocateChunkSize must be greater than 0");
        uo(e, s2, f2, c, h2, r, y);
      }
      n(Li, "SetUpReadableByteStreamControllerFromUnderlyingSource");
      function $i(e, t2, r) {
        e._associatedReadableByteStreamController = t2, e._view = r;
      }
      n($i, "SetUpReadableStreamBYOBRequest");
      function Dr(e) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
      }
      n(Dr, "byobRequestBrandCheckException");
      function mt(e) {
        return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
      }
      n(mt, "byteStreamControllerBrandCheckException");
      function fo(e) {
        return new ke(e);
      }
      n(fo, "AcquireReadableStreamBYOBReader");
      function co(e, t2) {
        e._reader._readIntoRequests.push(t2);
      }
      n(co, "ReadableStreamAddReadIntoRequest");
      function Di(e, t2, r) {
        const f2 = e._reader._readIntoRequests.shift();
        r ? f2._closeSteps(t2) : f2._chunkSteps(t2);
      }
      n(Di, "ReadableStreamFulfillReadIntoRequest");
      function ho(e) {
        return e._reader._readIntoRequests.length;
      }
      n(ho, "ReadableStreamGetNumReadIntoRequests");
      function Mr(e) {
        const t2 = e._reader;
        return !(t2 === void 0 || !Oe(t2));
      }
      n(Mr, "ReadableStreamHasBYOBReader");
      const ln = class ln {
        constructor(t2) {
          if (de(t2, 1, "ReadableStreamBYOBReader"), Or(t2, "First parameter"), Ce(t2))
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          if (!We(t2._readableStreamController))
            throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          Fn(this, t2), this._readIntoRequests = new x2();
        }
        get closed() {
          return Oe(this) ? this._closedPromise : g2(Ut("closed"));
        }
        cancel(t2 = void 0) {
          return Oe(this) ? this._ownerReadableStream === void 0 ? g2(He("cancel")) : Pr(this, t2) : g2(Ut("cancel"));
        }
        read(t2) {
          if (!Oe(this))
            return g2(Ut("read"));
          if (!ArrayBuffer.isView(t2))
            return g2(new TypeError("view must be an array buffer view"));
          if (t2.byteLength === 0)
            return g2(new TypeError("view must have non-zero byteLength"));
          if (t2.buffer.byteLength === 0)
            return g2(new TypeError("view's buffer must have non-zero byteLength"));
          if (jt(t2.buffer), this._ownerReadableStream === void 0)
            return g2(He("read from"));
          let r, s2;
          const f2 = E2((h2, y) => {
            r = h2, s2 = y;
          });
          return po(this, t2, { _chunkSteps: (h2) => r({ value: h2, done: false }), _closeSteps: (h2) => r({ value: h2, done: true }), _errorSteps: (h2) => s2(h2) }), f2;
        }
        releaseLock() {
          if (!Oe(this))
            throw Ut("releaseLock");
          if (this._ownerReadableStream !== void 0) {
            if (this._readIntoRequests.length > 0)
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            fe(this);
          }
        }
      };
      n(ln, "ReadableStreamBYOBReader");
      let ke = ln;
      Object.defineProperties(ke.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(ke.prototype, l2.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true });
      function Oe(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? false : e instanceof ke;
      }
      n(Oe, "IsReadableStreamBYOBReader");
      function po(e, t2, r) {
        const s2 = e._ownerReadableStream;
        s2._disturbed = true, s2._state === "errored" ? r._errorSteps(s2._storedError) : zi(s2._readableStreamController, t2, r);
      }
      n(po, "ReadableStreamBYOBReaderRead");
      function Ut(e) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
      }
      n(Ut, "byobReaderBrandCheckException");
      function yt(e, t2) {
        const { highWaterMark: r } = e;
        if (r === void 0)
          return t2;
        if (Kn(r) || r < 0)
          throw new RangeError("Invalid highWaterMark");
        return r;
      }
      n(yt, "ExtractHighWaterMark");
      function Nt(e) {
        const { size: t2 } = e;
        return t2 || (() => 1);
      }
      n(Nt, "ExtractSizeAlgorithm");
      function xt(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.highWaterMark, s2 = e == null ? void 0 : e.size;
        return { highWaterMark: r === void 0 ? void 0 : kr(r), size: s2 === void 0 ? void 0 : Mi(s2, `${t2} has member 'size' that`) };
      }
      n(xt, "convertQueuingStrategy");
      function Mi(e, t2) {
        return Z2(e, t2), (r) => kr(e(r));
      }
      n(Mi, "convertQueuingStrategySize");
      function Ui(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.abort, s2 = e == null ? void 0 : e.close, f2 = e == null ? void 0 : e.start, c = e == null ? void 0 : e.type, h2 = e == null ? void 0 : e.write;
        return { abort: r === void 0 ? void 0 : Ni(r, e, `${t2} has member 'abort' that`), close: s2 === void 0 ? void 0 : xi(s2, e, `${t2} has member 'close' that`), start: f2 === void 0 ? void 0 : Hi(f2, e, `${t2} has member 'start' that`), write: h2 === void 0 ? void 0 : Vi(h2, e, `${t2} has member 'write' that`), type: c };
      }
      n(Ui, "convertUnderlyingSink");
      function Ni(e, t2, r) {
        return Z2(e, r), (s2) => ue(e, t2, [s2]);
      }
      n(Ni, "convertUnderlyingSinkAbortCallback");
      function xi(e, t2, r) {
        return Z2(e, r), () => ue(e, t2, []);
      }
      n(xi, "convertUnderlyingSinkCloseCallback");
      function Hi(e, t2, r) {
        return Z2(e, r), (s2) => ve(e, t2, [s2]);
      }
      n(Hi, "convertUnderlyingSinkStartCallback");
      function Vi(e, t2, r) {
        return Z2(e, r), (s2, f2) => ue(e, t2, [s2, f2]);
      }
      n(Vi, "convertUnderlyingSinkWriteCallback");
      function bo(e, t2) {
        if (!Qe(e))
          throw new TypeError(`${t2} is not a WritableStream.`);
      }
      n(bo, "assertWritableStream");
      function Qi(e) {
        if (typeof e != "object" || e === null)
          return false;
        try {
          return typeof e.aborted == "boolean";
        } catch {
          return false;
        }
      }
      n(Qi, "isAbortSignal");
      const Yi = typeof AbortController == "function";
      function Gi() {
        if (Yi)
          return new AbortController();
      }
      n(Gi, "createAbortController");
      const un = class un {
        constructor(t2 = {}, r = {}) {
          t2 === void 0 ? t2 = null : Un(t2, "First parameter");
          const s2 = xt(r, "Second parameter"), f2 = Ui(t2, "First parameter");
          if (yo(this), f2.type !== void 0)
            throw new RangeError("Invalid type is specified");
          const h2 = Nt(s2), y = yt(s2, 1);
          ua(this, f2, y, h2);
        }
        get locked() {
          if (!Qe(this))
            throw Gt("locked");
          return Ye(this);
        }
        abort(t2 = void 0) {
          return Qe(this) ? Ye(this) ? g2(new TypeError("Cannot abort a stream that already has a writer")) : Ht(this, t2) : g2(Gt("abort"));
        }
        close() {
          return Qe(this) ? Ye(this) ? g2(new TypeError("Cannot close a stream that already has a writer")) : oe(this) ? g2(new TypeError("Cannot close an already-closing stream")) : go(this) : g2(Gt("close"));
        }
        getWriter() {
          if (!Qe(this))
            throw Gt("getWriter");
          return mo(this);
        }
      };
      n(un, "WritableStream");
      let qe = un;
      Object.defineProperties(qe.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(qe.prototype, l2.toStringTag, { value: "WritableStream", configurable: true });
      function mo(e) {
        return new ze(e);
      }
      n(mo, "AcquireWritableStreamDefaultWriter");
      function Zi(e, t2, r, s2, f2 = 1, c = () => 1) {
        const h2 = Object.create(qe.prototype);
        yo(h2);
        const y = Object.create(Se.prototype);
        return Co(h2, y, e, t2, r, s2, f2, c), h2;
      }
      n(Zi, "CreateWritableStream");
      function yo(e) {
        e._state = "writable", e._storedError = void 0, e._writer = void 0, e._writableStreamController = void 0, e._writeRequests = new x2(), e._inFlightWriteRequest = void 0, e._closeRequest = void 0, e._inFlightCloseRequest = void 0, e._pendingAbortRequest = void 0, e._backpressure = false;
      }
      n(yo, "InitializeWritableStream");
      function Qe(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? false : e instanceof qe;
      }
      n(Qe, "IsWritableStream");
      function Ye(e) {
        return e._writer !== void 0;
      }
      n(Ye, "IsWritableStreamLocked");
      function Ht(e, t2) {
        var r;
        if (e._state === "closed" || e._state === "errored")
          return b(void 0);
        e._writableStreamController._abortReason = t2, (r = e._writableStreamController._abortController) === null || r === void 0 || r.abort();
        const s2 = e._state;
        if (s2 === "closed" || s2 === "errored")
          return b(void 0);
        if (e._pendingAbortRequest !== void 0)
          return e._pendingAbortRequest._promise;
        let f2 = false;
        s2 === "erroring" && (f2 = true, t2 = void 0);
        const c = E2((h2, y) => {
          e._pendingAbortRequest = { _promise: void 0, _resolve: h2, _reject: y, _reason: t2, _wasAlreadyErroring: f2 };
        });
        return e._pendingAbortRequest._promise = c, f2 || Nr(e, t2), c;
      }
      n(Ht, "WritableStreamAbort");
      function go(e) {
        const t2 = e._state;
        if (t2 === "closed" || t2 === "errored")
          return g2(new TypeError(`The stream (in ${t2} state) is not in the writable state and cannot be closed`));
        const r = E2((f2, c) => {
          const h2 = { _resolve: f2, _reject: c };
          e._closeRequest = h2;
        }), s2 = e._writer;
        return s2 !== void 0 && e._backpressure && t2 === "writable" && Jr(s2), fa(e._writableStreamController), r;
      }
      n(go, "WritableStreamClose");
      function Ki(e) {
        return E2((r, s2) => {
          const f2 = { _resolve: r, _reject: s2 };
          e._writeRequests.push(f2);
        });
      }
      n(Ki, "WritableStreamAddWriteRequest");
      function Ur(e, t2) {
        if (e._state === "writable") {
          Nr(e, t2);
          return;
        }
        xr(e);
      }
      n(Ur, "WritableStreamDealWithRejection");
      function Nr(e, t2) {
        const r = e._writableStreamController;
        e._state = "erroring", e._storedError = t2;
        const s2 = e._writer;
        s2 !== void 0 && So(s2, t2), !ra(e) && r._started && xr(e);
      }
      n(Nr, "WritableStreamStartErroring");
      function xr(e) {
        e._state = "errored", e._writableStreamController[Dn]();
        const t2 = e._storedError;
        if (e._writeRequests.forEach((f2) => {
          f2._reject(t2);
        }), e._writeRequests = new x2(), e._pendingAbortRequest === void 0) {
          Vt(e);
          return;
        }
        const r = e._pendingAbortRequest;
        if (e._pendingAbortRequest = void 0, r._wasAlreadyErroring) {
          r._reject(t2), Vt(e);
          return;
        }
        const s2 = e._writableStreamController[$n](r._reason);
        q(s2, () => {
          r._resolve(), Vt(e);
        }, (f2) => {
          r._reject(f2), Vt(e);
        });
      }
      n(xr, "WritableStreamFinishErroring");
      function Ji(e) {
        e._inFlightWriteRequest._resolve(void 0), e._inFlightWriteRequest = void 0;
      }
      n(Ji, "WritableStreamFinishInFlightWrite");
      function Xi(e, t2) {
        e._inFlightWriteRequest._reject(t2), e._inFlightWriteRequest = void 0, Ur(e, t2);
      }
      n(Xi, "WritableStreamFinishInFlightWriteWithError");
      function ea(e) {
        e._inFlightCloseRequest._resolve(void 0), e._inFlightCloseRequest = void 0, e._state === "erroring" && (e._storedError = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = void 0)), e._state = "closed";
        const r = e._writer;
        r !== void 0 && Ao(r);
      }
      n(ea, "WritableStreamFinishInFlightClose");
      function ta(e, t2) {
        e._inFlightCloseRequest._reject(t2), e._inFlightCloseRequest = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._reject(t2), e._pendingAbortRequest = void 0), Ur(e, t2);
      }
      n(ta, "WritableStreamFinishInFlightCloseWithError");
      function oe(e) {
        return !(e._closeRequest === void 0 && e._inFlightCloseRequest === void 0);
      }
      n(oe, "WritableStreamCloseQueuedOrInFlight");
      function ra(e) {
        return !(e._inFlightWriteRequest === void 0 && e._inFlightCloseRequest === void 0);
      }
      n(ra, "WritableStreamHasOperationMarkedInFlight");
      function na(e) {
        e._inFlightCloseRequest = e._closeRequest, e._closeRequest = void 0;
      }
      n(na, "WritableStreamMarkCloseRequestInFlight");
      function oa(e) {
        e._inFlightWriteRequest = e._writeRequests.shift();
      }
      n(oa, "WritableStreamMarkFirstWriteRequestInFlight");
      function Vt(e) {
        e._closeRequest !== void 0 && (e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
        const t2 = e._writer;
        t2 !== void 0 && Zr(t2, e._storedError);
      }
      n(Vt, "WritableStreamRejectCloseAndClosedPromiseIfNeeded");
      function Hr(e, t2) {
        const r = e._writer;
        r !== void 0 && t2 !== e._backpressure && (t2 ? ya(r) : Jr(r)), e._backpressure = t2;
      }
      n(Hr, "WritableStreamUpdateBackpressure");
      const fn = class fn {
        constructor(t2) {
          if (de(t2, 1, "WritableStreamDefaultWriter"), bo(t2, "First parameter"), Ye(t2))
            throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          this._ownerWritableStream = t2, t2._writer = this;
          const r = t2._state;
          if (r === "writable")
            !oe(t2) && t2._backpressure ? Kt(this) : Wo(this), Zt(this);
          else if (r === "erroring")
            Kr(this, t2._storedError), Zt(this);
          else if (r === "closed")
            Wo(this), ba(this);
          else {
            const s2 = t2._storedError;
            Kr(this, s2), Eo(this, s2);
          }
        }
        get closed() {
          return je(this) ? this._closedPromise : g2(Fe("closed"));
        }
        get desiredSize() {
          if (!je(this))
            throw Fe("desiredSize");
          if (this._ownerWritableStream === void 0)
            throw gt("desiredSize");
          return la(this);
        }
        get ready() {
          return je(this) ? this._readyPromise : g2(Fe("ready"));
        }
        abort(t2 = void 0) {
          return je(this) ? this._ownerWritableStream === void 0 ? g2(gt("abort")) : ia(this, t2) : g2(Fe("abort"));
        }
        close() {
          if (!je(this))
            return g2(Fe("close"));
          const t2 = this._ownerWritableStream;
          return t2 === void 0 ? g2(gt("close")) : oe(t2) ? g2(new TypeError("Cannot close an already-closing stream")) : _o(this);
        }
        releaseLock() {
          if (!je(this))
            throw Fe("releaseLock");
          this._ownerWritableStream !== void 0 && wo(this);
        }
        write(t2 = void 0) {
          return je(this) ? this._ownerWritableStream === void 0 ? g2(gt("write to")) : Ro(this, t2) : g2(Fe("write"));
        }
      };
      n(fn, "WritableStreamDefaultWriter");
      let ze = fn;
      Object.defineProperties(ze.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(ze.prototype, l2.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true });
      function je(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? false : e instanceof ze;
      }
      n(je, "IsWritableStreamDefaultWriter");
      function ia(e, t2) {
        const r = e._ownerWritableStream;
        return Ht(r, t2);
      }
      n(ia, "WritableStreamDefaultWriterAbort");
      function _o(e) {
        const t2 = e._ownerWritableStream;
        return go(t2);
      }
      n(_o, "WritableStreamDefaultWriterClose");
      function aa(e) {
        const t2 = e._ownerWritableStream, r = t2._state;
        return oe(t2) || r === "closed" ? b(void 0) : r === "errored" ? g2(t2._storedError) : _o(e);
      }
      n(aa, "WritableStreamDefaultWriterCloseWithErrorPropagation");
      function sa(e, t2) {
        e._closedPromiseState === "pending" ? Zr(e, t2) : ma(e, t2);
      }
      n(sa, "WritableStreamDefaultWriterEnsureClosedPromiseRejected");
      function So(e, t2) {
        e._readyPromiseState === "pending" ? Bo(e, t2) : ga(e, t2);
      }
      n(So, "WritableStreamDefaultWriterEnsureReadyPromiseRejected");
      function la(e) {
        const t2 = e._ownerWritableStream, r = t2._state;
        return r === "errored" || r === "erroring" ? null : r === "closed" ? 0 : Po(t2._writableStreamController);
      }
      n(la, "WritableStreamDefaultWriterGetDesiredSize");
      function wo(e) {
        const t2 = e._ownerWritableStream, r = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
        So(e, r), sa(e, r), t2._writer = void 0, e._ownerWritableStream = void 0;
      }
      n(wo, "WritableStreamDefaultWriterRelease");
      function Ro(e, t2) {
        const r = e._ownerWritableStream, s2 = r._writableStreamController, f2 = ca(s2, t2);
        if (r !== e._ownerWritableStream)
          return g2(gt("write to"));
        const c = r._state;
        if (c === "errored")
          return g2(r._storedError);
        if (oe(r) || c === "closed")
          return g2(new TypeError("The stream is closing or closed and cannot be written to"));
        if (c === "erroring")
          return g2(r._storedError);
        const h2 = Ki(r);
        return da(s2, t2, f2), h2;
      }
      n(Ro, "WritableStreamDefaultWriterWrite");
      const To = {}, cn = class cn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!Vr(this))
            throw Gr("abortReason");
          return this._abortReason;
        }
        get signal() {
          if (!Vr(this))
            throw Gr("signal");
          if (this._abortController === void 0)
            throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          return this._abortController.signal;
        }
        error(t2 = void 0) {
          if (!Vr(this))
            throw Gr("error");
          this._controlledWritableStream._state === "writable" && vo(this, t2);
        }
        [$n](t2) {
          const r = this._abortAlgorithm(t2);
          return Qt(this), r;
        }
        [Dn]() {
          ge(this);
        }
      };
      n(cn, "WritableStreamDefaultController");
      let Se = cn;
      Object.defineProperties(Se.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Se.prototype, l2.toStringTag, { value: "WritableStreamDefaultController", configurable: true });
      function Vr(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") ? false : e instanceof Se;
      }
      n(Vr, "IsWritableStreamDefaultController");
      function Co(e, t2, r, s2, f2, c, h2, y) {
        t2._controlledWritableStream = e, e._writableStreamController = t2, t2._queue = void 0, t2._queueTotalSize = void 0, ge(t2), t2._abortReason = void 0, t2._abortController = Gi(), t2._started = false, t2._strategySizeAlgorithm = y, t2._strategyHWM = h2, t2._writeAlgorithm = s2, t2._closeAlgorithm = f2, t2._abortAlgorithm = c;
        const w2 = Yr(t2);
        Hr(e, w2);
        const T = r(), P2 = b(T);
        q(P2, () => {
          t2._started = true, Yt(t2);
        }, (v2) => {
          t2._started = true, Ur(e, v2);
        });
      }
      n(Co, "SetUpWritableStreamDefaultController");
      function ua(e, t2, r, s2) {
        const f2 = Object.create(Se.prototype);
        let c = n(() => {
        }, "startAlgorithm"), h2 = n(() => b(void 0), "writeAlgorithm"), y = n(() => b(void 0), "closeAlgorithm"), w2 = n(() => b(void 0), "abortAlgorithm");
        t2.start !== void 0 && (c = n(() => t2.start(f2), "startAlgorithm")), t2.write !== void 0 && (h2 = n((T) => t2.write(T, f2), "writeAlgorithm")), t2.close !== void 0 && (y = n(() => t2.close(), "closeAlgorithm")), t2.abort !== void 0 && (w2 = n((T) => t2.abort(T), "abortAlgorithm")), Co(e, f2, c, h2, y, w2, r, s2);
      }
      n(ua, "SetUpWritableStreamDefaultControllerFromUnderlyingSink");
      function Qt(e) {
        e._writeAlgorithm = void 0, e._closeAlgorithm = void 0, e._abortAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
      }
      n(Qt, "WritableStreamDefaultControllerClearAlgorithms");
      function fa(e) {
        jr(e, To, 0), Yt(e);
      }
      n(fa, "WritableStreamDefaultControllerClose");
      function ca(e, t2) {
        try {
          return e._strategySizeAlgorithm(t2);
        } catch (r) {
          return Qr(e, r), 1;
        }
      }
      n(ca, "WritableStreamDefaultControllerGetChunkSize");
      function Po(e) {
        return e._strategyHWM - e._queueTotalSize;
      }
      n(Po, "WritableStreamDefaultControllerGetDesiredSize");
      function da(e, t2, r) {
        try {
          jr(e, t2, r);
        } catch (f2) {
          Qr(e, f2);
          return;
        }
        const s2 = e._controlledWritableStream;
        if (!oe(s2) && s2._state === "writable") {
          const f2 = Yr(e);
          Hr(s2, f2);
        }
        Yt(e);
      }
      n(da, "WritableStreamDefaultControllerWrite");
      function Yt(e) {
        const t2 = e._controlledWritableStream;
        if (!e._started || t2._inFlightWriteRequest !== void 0)
          return;
        if (t2._state === "erroring") {
          xr(t2);
          return;
        }
        if (e._queue.length === 0)
          return;
        const s2 = qi(e);
        s2 === To ? ha(e) : pa(e, s2);
      }
      n(Yt, "WritableStreamDefaultControllerAdvanceQueueIfNeeded");
      function Qr(e, t2) {
        e._controlledWritableStream._state === "writable" && vo(e, t2);
      }
      n(Qr, "WritableStreamDefaultControllerErrorIfNeeded");
      function ha(e) {
        const t2 = e._controlledWritableStream;
        na(t2), zr(e);
        const r = e._closeAlgorithm();
        Qt(e), q(r, () => {
          ea(t2);
        }, (s2) => {
          ta(t2, s2);
        });
      }
      n(ha, "WritableStreamDefaultControllerProcessClose");
      function pa(e, t2) {
        const r = e._controlledWritableStream;
        oa(r);
        const s2 = e._writeAlgorithm(t2);
        q(s2, () => {
          Ji(r);
          const f2 = r._state;
          if (zr(e), !oe(r) && f2 === "writable") {
            const c = Yr(e);
            Hr(r, c);
          }
          Yt(e);
        }, (f2) => {
          r._state === "writable" && Qt(e), Xi(r, f2);
        });
      }
      n(pa, "WritableStreamDefaultControllerProcessWrite");
      function Yr(e) {
        return Po(e) <= 0;
      }
      n(Yr, "WritableStreamDefaultControllerGetBackpressure");
      function vo(e, t2) {
        const r = e._controlledWritableStream;
        Qt(e), Nr(r, t2);
      }
      n(vo, "WritableStreamDefaultControllerError");
      function Gt(e) {
        return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
      }
      n(Gt, "streamBrandCheckException$2");
      function Gr(e) {
        return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
      }
      n(Gr, "defaultControllerBrandCheckException$2");
      function Fe(e) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
      }
      n(Fe, "defaultWriterBrandCheckException");
      function gt(e) {
        return new TypeError("Cannot " + e + " a stream using a released writer");
      }
      n(gt, "defaultWriterLockException");
      function Zt(e) {
        e._closedPromise = E2((t2, r) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r, e._closedPromiseState = "pending";
        });
      }
      n(Zt, "defaultWriterClosedPromiseInitialize");
      function Eo(e, t2) {
        Zt(e), Zr(e, t2);
      }
      n(Eo, "defaultWriterClosedPromiseInitializeAsRejected");
      function ba(e) {
        Zt(e), Ao(e);
      }
      n(ba, "defaultWriterClosedPromiseInitializeAsResolved");
      function Zr(e, t2) {
        e._closedPromise_reject !== void 0 && ($2(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected");
      }
      n(Zr, "defaultWriterClosedPromiseReject");
      function ma(e, t2) {
        Eo(e, t2);
      }
      n(ma, "defaultWriterClosedPromiseResetToRejected");
      function Ao(e) {
        e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved");
      }
      n(Ao, "defaultWriterClosedPromiseResolve");
      function Kt(e) {
        e._readyPromise = E2((t2, r) => {
          e._readyPromise_resolve = t2, e._readyPromise_reject = r;
        }), e._readyPromiseState = "pending";
      }
      n(Kt, "defaultWriterReadyPromiseInitialize");
      function Kr(e, t2) {
        Kt(e), Bo(e, t2);
      }
      n(Kr, "defaultWriterReadyPromiseInitializeAsRejected");
      function Wo(e) {
        Kt(e), Jr(e);
      }
      n(Wo, "defaultWriterReadyPromiseInitializeAsResolved");
      function Bo(e, t2) {
        e._readyPromise_reject !== void 0 && ($2(e._readyPromise), e._readyPromise_reject(t2), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected");
      }
      n(Bo, "defaultWriterReadyPromiseReject");
      function ya(e) {
        Kt(e);
      }
      n(ya, "defaultWriterReadyPromiseReset");
      function ga(e, t2) {
        Kr(e, t2);
      }
      n(ga, "defaultWriterReadyPromiseResetToRejected");
      function Jr(e) {
        e._readyPromise_resolve !== void 0 && (e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled");
      }
      n(Jr, "defaultWriterReadyPromiseResolve");
      const ko = typeof DOMException < "u" ? DOMException : void 0;
      function _a2(e) {
        if (!(typeof e == "function" || typeof e == "object"))
          return false;
        try {
          return new e(), true;
        } catch {
          return false;
        }
      }
      n(_a2, "isDOMExceptionConstructor");
      function Sa() {
        const e = n(function(r, s2) {
          this.message = r || "", this.name = s2 || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        }, "DOMException");
        return e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", { value: e, writable: true, configurable: true }), e;
      }
      n(Sa, "createDOMExceptionPolyfill");
      const wa = _a2(ko) ? ko : Sa();
      function Oo(e, t2, r, s2, f2, c) {
        const h2 = Ve(e), y = mo(t2);
        e._disturbed = true;
        let w2 = false, T = b(void 0);
        return E2((P2, v2) => {
          let z;
          if (c !== void 0) {
            if (z = n(() => {
              const _ = new wa("Aborted", "AbortError"), R2 = [];
              s2 || R2.push(() => t2._state === "writable" ? Ht(t2, _) : b(void 0)), f2 || R2.push(() => e._state === "readable" ? J(e, _) : b(void 0)), U(() => Promise.all(R2.map((W) => W())), true, _);
            }, "abortAlgorithm"), c.aborted) {
              z();
              return;
            }
            c.addEventListener("abort", z);
          }
          function X() {
            return E2((_, R2) => {
              function W(H) {
                H ? _() : A2(Xe(), W, R2);
              }
              n(W, "next"), W(false);
            });
          }
          n(X, "pipeLoop");
          function Xe() {
            return w2 ? b(true) : A2(y._readyPromise, () => E2((_, R2) => {
              ht(h2, { _chunkSteps: (W) => {
                T = A2(Ro(y, W), void 0, u), _(false);
              }, _closeSteps: () => _(true), _errorSteps: R2 });
            }));
          }
          if (n(Xe, "pipeStep"), he(e, h2._closedPromise, (_) => {
            s2 ? Q(true, _) : U(() => Ht(t2, _), true, _);
          }), he(t2, y._closedPromise, (_) => {
            f2 ? Q(true, _) : U(() => J(e, _), true, _);
          }), M2(e, h2._closedPromise, () => {
            r ? Q() : U(() => aa(y));
          }), oe(t2) || t2._state === "closed") {
            const _ = new TypeError("the destination writable stream closed before all data could be piped to it");
            f2 ? Q(true, _) : U(() => J(e, _), true, _);
          }
          $2(X());
          function Pe() {
            const _ = T;
            return A2(T, () => _ !== T ? Pe() : void 0);
          }
          n(Pe, "waitForWritesToFinish");
          function he(_, R2, W) {
            _._state === "errored" ? W(_._storedError) : dt(R2, W);
          }
          n(he, "isOrBecomesErrored");
          function M2(_, R2, W) {
            _._state === "closed" ? W() : ne(R2, W);
          }
          n(M2, "isOrBecomesClosed");
          function U(_, R2, W) {
            if (w2)
              return;
            w2 = true, t2._state === "writable" && !oe(t2) ? ne(Pe(), H) : H();
            function H() {
              q(_(), () => pe(R2, W), (et) => pe(true, et));
            }
            n(H, "doTheRest");
          }
          n(U, "shutdownWithAction");
          function Q(_, R2) {
            w2 || (w2 = true, t2._state === "writable" && !oe(t2) ? ne(Pe(), () => pe(_, R2)) : pe(_, R2));
          }
          n(Q, "shutdown");
          function pe(_, R2) {
            wo(y), fe(h2), c !== void 0 && c.removeEventListener("abort", z), _ ? v2(R2) : P2(void 0);
          }
          n(pe, "finalize");
        });
      }
      n(Oo, "ReadableStreamPipeTo");
      const dn = class dn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!Jt(this))
            throw tr("desiredSize");
          return Xr(this);
        }
        close() {
          if (!Jt(this))
            throw tr("close");
          if (!Ge(this))
            throw new TypeError("The stream is not in a state that permits close");
          St(this);
        }
        enqueue(t2 = void 0) {
          if (!Jt(this))
            throw tr("enqueue");
          if (!Ge(this))
            throw new TypeError("The stream is not in a state that permits enqueue");
          return er(this, t2);
        }
        error(t2 = void 0) {
          if (!Jt(this))
            throw tr("error");
          Re(this, t2);
        }
        [Ar](t2) {
          ge(this);
          const r = this._cancelAlgorithm(t2);
          return Xt(this), r;
        }
        [Wr](t2) {
          const r = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const s2 = zr(this);
            this._closeRequested && this._queue.length === 0 ? (Xt(this), wt(r)) : _t(this), t2._chunkSteps(s2);
          } else
            Hn(r, t2), _t(this);
        }
      };
      n(dn, "ReadableStreamDefaultController");
      let we = dn;
      Object.defineProperties(we.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(we.prototype, l2.toStringTag, { value: "ReadableStreamDefaultController", configurable: true });
      function Jt(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") ? false : e instanceof we;
      }
      n(Jt, "IsReadableStreamDefaultController");
      function _t(e) {
        if (!qo(e))
          return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r = e._pullAlgorithm();
        q(r, () => {
          e._pulling = false, e._pullAgain && (e._pullAgain = false, _t(e));
        }, (s2) => {
          Re(e, s2);
        });
      }
      n(_t, "ReadableStreamDefaultControllerCallPullIfNeeded");
      function qo(e) {
        const t2 = e._controlledReadableStream;
        return !Ge(e) || !e._started ? false : !!(Ce(t2) && Ot(t2) > 0 || Xr(e) > 0);
      }
      n(qo, "ReadableStreamDefaultControllerShouldCallPull");
      function Xt(e) {
        e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
      }
      n(Xt, "ReadableStreamDefaultControllerClearAlgorithms");
      function St(e) {
        if (!Ge(e))
          return;
        const t2 = e._controlledReadableStream;
        e._closeRequested = true, e._queue.length === 0 && (Xt(e), wt(t2));
      }
      n(St, "ReadableStreamDefaultControllerClose");
      function er(e, t2) {
        if (!Ge(e))
          return;
        const r = e._controlledReadableStream;
        if (Ce(r) && Ot(r) > 0)
          qr(r, t2, false);
        else {
          let s2;
          try {
            s2 = e._strategySizeAlgorithm(t2);
          } catch (f2) {
            throw Re(e, f2), f2;
          }
          try {
            jr(e, t2, s2);
          } catch (f2) {
            throw Re(e, f2), f2;
          }
        }
        _t(e);
      }
      n(er, "ReadableStreamDefaultControllerEnqueue");
      function Re(e, t2) {
        const r = e._controlledReadableStream;
        r._state === "readable" && (ge(e), Xt(e), Io(r, t2));
      }
      n(Re, "ReadableStreamDefaultControllerError");
      function Xr(e) {
        const t2 = e._controlledReadableStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n(Xr, "ReadableStreamDefaultControllerGetDesiredSize");
      function Ra(e) {
        return !qo(e);
      }
      n(Ra, "ReadableStreamDefaultControllerHasBackpressure");
      function Ge(e) {
        const t2 = e._controlledReadableStream._state;
        return !e._closeRequested && t2 === "readable";
      }
      n(Ge, "ReadableStreamDefaultControllerCanCloseOrEnqueue");
      function zo(e, t2, r, s2, f2, c, h2) {
        t2._controlledReadableStream = e, t2._queue = void 0, t2._queueTotalSize = void 0, ge(t2), t2._started = false, t2._closeRequested = false, t2._pullAgain = false, t2._pulling = false, t2._strategySizeAlgorithm = h2, t2._strategyHWM = c, t2._pullAlgorithm = s2, t2._cancelAlgorithm = f2, e._readableStreamController = t2;
        const y = r();
        q(b(y), () => {
          t2._started = true, _t(t2);
        }, (w2) => {
          Re(t2, w2);
        });
      }
      n(zo, "SetUpReadableStreamDefaultController");
      function Ta(e, t2, r, s2) {
        const f2 = Object.create(we.prototype);
        let c = n(() => {
        }, "startAlgorithm"), h2 = n(() => b(void 0), "pullAlgorithm"), y = n(() => b(void 0), "cancelAlgorithm");
        t2.start !== void 0 && (c = n(() => t2.start(f2), "startAlgorithm")), t2.pull !== void 0 && (h2 = n(() => t2.pull(f2), "pullAlgorithm")), t2.cancel !== void 0 && (y = n((w2) => t2.cancel(w2), "cancelAlgorithm")), zo(e, f2, c, h2, y, r, s2);
      }
      n(Ta, "SetUpReadableStreamDefaultControllerFromUnderlyingSource");
      function tr(e) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
      }
      n(tr, "defaultControllerBrandCheckException$1");
      function Ca(e, t2) {
        return We(e._readableStreamController) ? va(e) : Pa(e);
      }
      n(Ca, "ReadableStreamTee");
      function Pa(e, t2) {
        const r = Ve(e);
        let s2 = false, f2 = false, c = false, h2 = false, y, w2, T, P2, v2;
        const z = E2((M2) => {
          v2 = M2;
        });
        function X() {
          return s2 ? (f2 = true, b(void 0)) : (s2 = true, ht(r, { _chunkSteps: (U) => {
            F3(() => {
              f2 = false;
              const Q = U, pe = U;
              c || er(T._readableStreamController, Q), h2 || er(P2._readableStreamController, pe), s2 = false, f2 && X();
            });
          }, _closeSteps: () => {
            s2 = false, c || St(T._readableStreamController), h2 || St(P2._readableStreamController), (!c || !h2) && v2(void 0);
          }, _errorSteps: () => {
            s2 = false;
          } }), b(void 0));
        }
        n(X, "pullAlgorithm");
        function Xe(M2) {
          if (c = true, y = M2, h2) {
            const U = pt([y, w2]), Q = J(e, U);
            v2(Q);
          }
          return z;
        }
        n(Xe, "cancel1Algorithm");
        function Pe(M2) {
          if (h2 = true, w2 = M2, c) {
            const U = pt([y, w2]), Q = J(e, U);
            v2(Q);
          }
          return z;
        }
        n(Pe, "cancel2Algorithm");
        function he() {
        }
        return n(he, "startAlgorithm"), T = en(he, X, Xe), P2 = en(he, X, Pe), dt(r._closedPromise, (M2) => {
          Re(T._readableStreamController, M2), Re(P2._readableStreamController, M2), (!c || !h2) && v2(void 0);
        }), [T, P2];
      }
      n(Pa, "ReadableStreamDefaultTee");
      function va(e) {
        let t2 = Ve(e), r = false, s2 = false, f2 = false, c = false, h2 = false, y, w2, T, P2, v2;
        const z = E2((_) => {
          v2 = _;
        });
        function X(_) {
          dt(_._closedPromise, (R2) => {
            _ === t2 && (K(T._readableStreamController, R2), K(P2._readableStreamController, R2), (!c || !h2) && v2(void 0));
          });
        }
        n(X, "forwardReaderError");
        function Xe() {
          Oe(t2) && (fe(t2), t2 = Ve(e), X(t2)), ht(t2, { _chunkSteps: (R2) => {
            F3(() => {
              s2 = false, f2 = false;
              const W = R2;
              let H = R2;
              if (!c && !h2)
                try {
                  H = eo(R2);
                } catch (et) {
                  K(T._readableStreamController, et), K(P2._readableStreamController, et), v2(J(e, et));
                  return;
                }
              c || $t(T._readableStreamController, W), h2 || $t(P2._readableStreamController, H), r = false, s2 ? he() : f2 && M2();
            });
          }, _closeSteps: () => {
            r = false, c || bt(T._readableStreamController), h2 || bt(P2._readableStreamController), T._readableStreamController._pendingPullIntos.length > 0 && Dt(T._readableStreamController, 0), P2._readableStreamController._pendingPullIntos.length > 0 && Dt(P2._readableStreamController, 0), (!c || !h2) && v2(void 0);
          }, _errorSteps: () => {
            r = false;
          } });
        }
        n(Xe, "pullWithDefaultReader");
        function Pe(_, R2) {
          ye(t2) && (fe(t2), t2 = fo(e), X(t2));
          const W = R2 ? P2 : T, H = R2 ? T : P2;
          po(t2, _, { _chunkSteps: (tt) => {
            F3(() => {
              s2 = false, f2 = false;
              const rt = R2 ? h2 : c;
              if (R2 ? c : h2)
                rt || Mt(W._readableStreamController, tt);
              else {
                let Zo;
                try {
                  Zo = eo(tt);
                } catch (gn) {
                  K(W._readableStreamController, gn), K(H._readableStreamController, gn), v2(J(e, gn));
                  return;
                }
                rt || Mt(W._readableStreamController, tt), $t(H._readableStreamController, Zo);
              }
              r = false, s2 ? he() : f2 && M2();
            });
          }, _closeSteps: (tt) => {
            r = false;
            const rt = R2 ? h2 : c, sr = R2 ? c : h2;
            rt || bt(W._readableStreamController), sr || bt(H._readableStreamController), tt !== void 0 && (rt || Mt(W._readableStreamController, tt), !sr && H._readableStreamController._pendingPullIntos.length > 0 && Dt(H._readableStreamController, 0)), (!rt || !sr) && v2(void 0);
          }, _errorSteps: () => {
            r = false;
          } });
        }
        n(Pe, "pullWithBYOBReader");
        function he() {
          if (r)
            return s2 = true, b(void 0);
          r = true;
          const _ = $r(T._readableStreamController);
          return _ === null ? Xe() : Pe(_._view, false), b(void 0);
        }
        n(he, "pull1Algorithm");
        function M2() {
          if (r)
            return f2 = true, b(void 0);
          r = true;
          const _ = $r(P2._readableStreamController);
          return _ === null ? Xe() : Pe(_._view, true), b(void 0);
        }
        n(M2, "pull2Algorithm");
        function U(_) {
          if (c = true, y = _, h2) {
            const R2 = pt([y, w2]), W = J(e, R2);
            v2(W);
          }
          return z;
        }
        n(U, "cancel1Algorithm");
        function Q(_) {
          if (h2 = true, w2 = _, c) {
            const R2 = pt([y, w2]), W = J(e, R2);
            v2(W);
          }
          return z;
        }
        n(Q, "cancel2Algorithm");
        function pe() {
        }
        return n(pe, "startAlgorithm"), T = Fo(pe, he, U), P2 = Fo(pe, M2, Q), X(t2), [T, P2];
      }
      n(va, "ReadableByteStreamTee");
      function Ea(e, t2) {
        ce(e, t2);
        const r = e, s2 = r == null ? void 0 : r.autoAllocateChunkSize, f2 = r == null ? void 0 : r.cancel, c = r == null ? void 0 : r.pull, h2 = r == null ? void 0 : r.start, y = r == null ? void 0 : r.type;
        return { autoAllocateChunkSize: s2 === void 0 ? void 0 : xn(s2, `${t2} has member 'autoAllocateChunkSize' that`), cancel: f2 === void 0 ? void 0 : Aa(f2, r, `${t2} has member 'cancel' that`), pull: c === void 0 ? void 0 : Wa(c, r, `${t2} has member 'pull' that`), start: h2 === void 0 ? void 0 : Ba(h2, r, `${t2} has member 'start' that`), type: y === void 0 ? void 0 : ka(y, `${t2} has member 'type' that`) };
      }
      n(Ea, "convertUnderlyingDefaultOrByteSource");
      function Aa(e, t2, r) {
        return Z2(e, r), (s2) => ue(e, t2, [s2]);
      }
      n(Aa, "convertUnderlyingSourceCancelCallback");
      function Wa(e, t2, r) {
        return Z2(e, r), (s2) => ue(e, t2, [s2]);
      }
      n(Wa, "convertUnderlyingSourcePullCallback");
      function Ba(e, t2, r) {
        return Z2(e, r), (s2) => ve(e, t2, [s2]);
      }
      n(Ba, "convertUnderlyingSourceStartCallback");
      function ka(e, t2) {
        if (e = `${e}`, e !== "bytes")
          throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamType`);
        return e;
      }
      n(ka, "convertReadableStreamType");
      function Oa(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.mode;
        return { mode: r === void 0 ? void 0 : qa(r, `${t2} has member 'mode' that`) };
      }
      n(Oa, "convertReaderOptions");
      function qa(e, t2) {
        if (e = `${e}`, e !== "byob")
          throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
        return e;
      }
      n(qa, "convertReadableStreamReaderMode");
      function za(e, t2) {
        return ce(e, t2), { preventCancel: !!(e == null ? void 0 : e.preventCancel) };
      }
      n(za, "convertIteratorOptions");
      function jo(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.preventAbort, s2 = e == null ? void 0 : e.preventCancel, f2 = e == null ? void 0 : e.preventClose, c = e == null ? void 0 : e.signal;
        return c !== void 0 && ja(c, `${t2} has member 'signal' that`), { preventAbort: !!r, preventCancel: !!s2, preventClose: !!f2, signal: c };
      }
      n(jo, "convertPipeOptions");
      function ja(e, t2) {
        if (!Qi(e))
          throw new TypeError(`${t2} is not an AbortSignal.`);
      }
      n(ja, "assertAbortSignal");
      function Fa(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.readable;
        Br(r, "readable", "ReadableWritablePair"), Or(r, `${t2} has member 'readable' that`);
        const s2 = e == null ? void 0 : e.writable;
        return Br(s2, "writable", "ReadableWritablePair"), bo(s2, `${t2} has member 'writable' that`), { readable: r, writable: s2 };
      }
      n(Fa, "convertReadableWritablePair");
      const hn = class hn {
        constructor(t2 = {}, r = {}) {
          t2 === void 0 ? t2 = null : Un(t2, "First parameter");
          const s2 = xt(r, "Second parameter"), f2 = Ea(t2, "First parameter");
          if (tn(this), f2.type === "bytes") {
            if (s2.size !== void 0)
              throw new RangeError("The strategy for a byte stream cannot have a size function");
            const c = yt(s2, 0);
            Li(this, f2, c);
          } else {
            const c = Nt(s2), h2 = yt(s2, 1);
            Ta(this, f2, h2, c);
          }
        }
        get locked() {
          if (!Te(this))
            throw Ie("locked");
          return Ce(this);
        }
        cancel(t2 = void 0) {
          return Te(this) ? Ce(this) ? g2(new TypeError("Cannot cancel a stream that already has a reader")) : J(this, t2) : g2(Ie("cancel"));
        }
        getReader(t2 = void 0) {
          if (!Te(this))
            throw Ie("getReader");
          return Oa(t2, "First parameter").mode === void 0 ? Ve(this) : fo(this);
        }
        pipeThrough(t2, r = {}) {
          if (!Te(this))
            throw Ie("pipeThrough");
          de(t2, 1, "pipeThrough");
          const s2 = Fa(t2, "First parameter"), f2 = jo(r, "Second parameter");
          if (Ce(this))
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          if (Ye(s2.writable))
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          const c = Oo(this, s2.writable, f2.preventClose, f2.preventAbort, f2.preventCancel, f2.signal);
          return $2(c), s2.readable;
        }
        pipeTo(t2, r = {}) {
          if (!Te(this))
            return g2(Ie("pipeTo"));
          if (t2 === void 0)
            return g2("Parameter 1 is required in 'pipeTo'.");
          if (!Qe(t2))
            return g2(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
          let s2;
          try {
            s2 = jo(r, "Second parameter");
          } catch (f2) {
            return g2(f2);
          }
          return Ce(this) ? g2(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Ye(t2) ? g2(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : Oo(this, t2, s2.preventClose, s2.preventAbort, s2.preventCancel, s2.signal);
        }
        tee() {
          if (!Te(this))
            throw Ie("tee");
          const t2 = Ca(this);
          return pt(t2);
        }
        values(t2 = void 0) {
          if (!Te(this))
            throw Ie("values");
          const r = za(t2, "First parameter");
          return ki(this, r.preventCancel);
        }
      };
      n(hn, "ReadableStream");
      let ie = hn;
      Object.defineProperties(ie.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(ie.prototype, l2.toStringTag, { value: "ReadableStream", configurable: true }), typeof l2.asyncIterator == "symbol" && Object.defineProperty(ie.prototype, l2.asyncIterator, { value: ie.prototype.values, writable: true, configurable: true });
      function en(e, t2, r, s2 = 1, f2 = () => 1) {
        const c = Object.create(ie.prototype);
        tn(c);
        const h2 = Object.create(we.prototype);
        return zo(c, h2, e, t2, r, s2, f2), c;
      }
      n(en, "CreateReadableStream");
      function Fo(e, t2, r) {
        const s2 = Object.create(ie.prototype);
        tn(s2);
        const f2 = Object.create(_e.prototype);
        return uo(s2, f2, e, t2, r, 0, void 0), s2;
      }
      n(Fo, "CreateReadableByteStream");
      function tn(e) {
        e._state = "readable", e._reader = void 0, e._storedError = void 0, e._disturbed = false;
      }
      n(tn, "InitializeReadableStream");
      function Te(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? false : e instanceof ie;
      }
      n(Te, "IsReadableStream");
      function Ce(e) {
        return e._reader !== void 0;
      }
      n(Ce, "IsReadableStreamLocked");
      function J(e, t2) {
        if (e._disturbed = true, e._state === "closed")
          return b(void 0);
        if (e._state === "errored")
          return g2(e._storedError);
        wt(e);
        const r = e._reader;
        r !== void 0 && Oe(r) && (r._readIntoRequests.forEach((f2) => {
          f2._closeSteps(void 0);
        }), r._readIntoRequests = new x2());
        const s2 = e._readableStreamController[Ar](t2);
        return O(s2, u);
      }
      n(J, "ReadableStreamCancel");
      function wt(e) {
        e._state = "closed";
        const t2 = e._reader;
        t2 !== void 0 && (Ln(t2), ye(t2) && (t2._readRequests.forEach((r) => {
          r._closeSteps();
        }), t2._readRequests = new x2()));
      }
      n(wt, "ReadableStreamClose");
      function Io(e, t2) {
        e._state = "errored", e._storedError = t2;
        const r = e._reader;
        r !== void 0 && (Er(r, t2), ye(r) ? (r._readRequests.forEach((s2) => {
          s2._errorSteps(t2);
        }), r._readRequests = new x2()) : (r._readIntoRequests.forEach((s2) => {
          s2._errorSteps(t2);
        }), r._readIntoRequests = new x2()));
      }
      n(Io, "ReadableStreamError");
      function Ie(e) {
        return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
      }
      n(Ie, "streamBrandCheckException$1");
      function Lo(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.highWaterMark;
        return Br(r, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: kr(r) };
      }
      n(Lo, "convertQueuingStrategyInit");
      const $o = n((e) => e.byteLength, "byteLengthSizeFunction");
      try {
        Object.defineProperty($o, "name", { value: "size", configurable: true });
      } catch {
      }
      const pn = class pn {
        constructor(t2) {
          de(t2, 1, "ByteLengthQueuingStrategy"), t2 = Lo(t2, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!Mo(this))
            throw Do("highWaterMark");
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!Mo(this))
            throw Do("size");
          return $o;
        }
      };
      n(pn, "ByteLengthQueuingStrategy");
      let Ze = pn;
      Object.defineProperties(Ze.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Ze.prototype, l2.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true });
      function Do(e) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
      }
      n(Do, "byteLengthBrandCheckException");
      function Mo(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") ? false : e instanceof Ze;
      }
      n(Mo, "IsByteLengthQueuingStrategy");
      const Uo = n(() => 1, "countSizeFunction");
      try {
        Object.defineProperty(Uo, "name", { value: "size", configurable: true });
      } catch {
      }
      const bn = class bn {
        constructor(t2) {
          de(t2, 1, "CountQueuingStrategy"), t2 = Lo(t2, "First parameter"), this._countQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!xo(this))
            throw No("highWaterMark");
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!xo(this))
            throw No("size");
          return Uo;
        }
      };
      n(bn, "CountQueuingStrategy");
      let Ke = bn;
      Object.defineProperties(Ke.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Ke.prototype, l2.toStringTag, { value: "CountQueuingStrategy", configurable: true });
      function No(e) {
        return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
      }
      n(No, "countBrandCheckException");
      function xo(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") ? false : e instanceof Ke;
      }
      n(xo, "IsCountQueuingStrategy");
      function Ia(e, t2) {
        ce(e, t2);
        const r = e == null ? void 0 : e.flush, s2 = e == null ? void 0 : e.readableType, f2 = e == null ? void 0 : e.start, c = e == null ? void 0 : e.transform, h2 = e == null ? void 0 : e.writableType;
        return { flush: r === void 0 ? void 0 : La(r, e, `${t2} has member 'flush' that`), readableType: s2, start: f2 === void 0 ? void 0 : $a(f2, e, `${t2} has member 'start' that`), transform: c === void 0 ? void 0 : Da(c, e, `${t2} has member 'transform' that`), writableType: h2 };
      }
      n(Ia, "convertTransformer");
      function La(e, t2, r) {
        return Z2(e, r), (s2) => ue(e, t2, [s2]);
      }
      n(La, "convertTransformerFlushCallback");
      function $a(e, t2, r) {
        return Z2(e, r), (s2) => ve(e, t2, [s2]);
      }
      n($a, "convertTransformerStartCallback");
      function Da(e, t2, r) {
        return Z2(e, r), (s2, f2) => ue(e, t2, [s2, f2]);
      }
      n(Da, "convertTransformerTransformCallback");
      const mn = class mn {
        constructor(t2 = {}, r = {}, s2 = {}) {
          t2 === void 0 && (t2 = null);
          const f2 = xt(r, "Second parameter"), c = xt(s2, "Third parameter"), h2 = Ia(t2, "First parameter");
          if (h2.readableType !== void 0)
            throw new RangeError("Invalid readableType specified");
          if (h2.writableType !== void 0)
            throw new RangeError("Invalid writableType specified");
          const y = yt(c, 0), w2 = Nt(c), T = yt(f2, 1), P2 = Nt(f2);
          let v2;
          const z = E2((X) => {
            v2 = X;
          });
          Ma(this, z, T, P2, y, w2), Na(this, h2), h2.start !== void 0 ? v2(h2.start(this._transformStreamController)) : v2(void 0);
        }
        get readable() {
          if (!Ho(this))
            throw Go("readable");
          return this._readable;
        }
        get writable() {
          if (!Ho(this))
            throw Go("writable");
          return this._writable;
        }
      };
      n(mn, "TransformStream");
      let Je = mn;
      Object.defineProperties(Je.prototype, { readable: { enumerable: true }, writable: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Je.prototype, l2.toStringTag, { value: "TransformStream", configurable: true });
      function Ma(e, t2, r, s2, f2, c) {
        function h2() {
          return t2;
        }
        n(h2, "startAlgorithm");
        function y(z) {
          return Va(e, z);
        }
        n(y, "writeAlgorithm");
        function w2(z) {
          return Qa(e, z);
        }
        n(w2, "abortAlgorithm");
        function T() {
          return Ya(e);
        }
        n(T, "closeAlgorithm"), e._writable = Zi(h2, y, T, w2, r, s2);
        function P2() {
          return Ga(e);
        }
        n(P2, "pullAlgorithm");
        function v2(z) {
          return nr(e, z), b(void 0);
        }
        n(v2, "cancelAlgorithm"), e._readable = en(h2, P2, v2, f2, c), e._backpressure = void 0, e._backpressureChangePromise = void 0, e._backpressureChangePromise_resolve = void 0, or(e, true), e._transformStreamController = void 0;
      }
      n(Ma, "InitializeTransformStream");
      function Ho(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? false : e instanceof Je;
      }
      n(Ho, "IsTransformStream");
      function rr(e, t2) {
        Re(e._readable._readableStreamController, t2), nr(e, t2);
      }
      n(rr, "TransformStreamError");
      function nr(e, t2) {
        Vo(e._transformStreamController), Qr(e._writable._writableStreamController, t2), e._backpressure && or(e, false);
      }
      n(nr, "TransformStreamErrorWritableAndUnblockWrite");
      function or(e, t2) {
        e._backpressureChangePromise !== void 0 && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = E2((r) => {
          e._backpressureChangePromise_resolve = r;
        }), e._backpressure = t2;
      }
      n(or, "TransformStreamSetBackpressure");
      const yn = class yn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!ir(this))
            throw ar("desiredSize");
          const t2 = this._controlledTransformStream._readable._readableStreamController;
          return Xr(t2);
        }
        enqueue(t2 = void 0) {
          if (!ir(this))
            throw ar("enqueue");
          Qo(this, t2);
        }
        error(t2 = void 0) {
          if (!ir(this))
            throw ar("error");
          xa(this, t2);
        }
        terminate() {
          if (!ir(this))
            throw ar("terminate");
          Ha(this);
        }
      };
      n(yn, "TransformStreamDefaultController");
      let Le = yn;
      Object.defineProperties(Le.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } }), typeof l2.toStringTag == "symbol" && Object.defineProperty(Le.prototype, l2.toStringTag, { value: "TransformStreamDefaultController", configurable: true });
      function ir(e) {
        return !m2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? false : e instanceof Le;
      }
      n(ir, "IsTransformStreamDefaultController");
      function Ua(e, t2, r, s2) {
        t2._controlledTransformStream = e, e._transformStreamController = t2, t2._transformAlgorithm = r, t2._flushAlgorithm = s2;
      }
      n(Ua, "SetUpTransformStreamDefaultController");
      function Na(e, t2) {
        const r = Object.create(Le.prototype);
        let s2 = n((c) => {
          try {
            return Qo(r, c), b(void 0);
          } catch (h2) {
            return g2(h2);
          }
        }, "transformAlgorithm"), f2 = n(() => b(void 0), "flushAlgorithm");
        t2.transform !== void 0 && (s2 = n((c) => t2.transform(c, r), "transformAlgorithm")), t2.flush !== void 0 && (f2 = n(() => t2.flush(r), "flushAlgorithm")), Ua(e, r, s2, f2);
      }
      n(Na, "SetUpTransformStreamDefaultControllerFromTransformer");
      function Vo(e) {
        e._transformAlgorithm = void 0, e._flushAlgorithm = void 0;
      }
      n(Vo, "TransformStreamDefaultControllerClearAlgorithms");
      function Qo(e, t2) {
        const r = e._controlledTransformStream, s2 = r._readable._readableStreamController;
        if (!Ge(s2))
          throw new TypeError("Readable side is not in a state that permits enqueue");
        try {
          er(s2, t2);
        } catch (c) {
          throw nr(r, c), r._readable._storedError;
        }
        Ra(s2) !== r._backpressure && or(r, true);
      }
      n(Qo, "TransformStreamDefaultControllerEnqueue");
      function xa(e, t2) {
        rr(e._controlledTransformStream, t2);
      }
      n(xa, "TransformStreamDefaultControllerError");
      function Yo(e, t2) {
        const r = e._transformAlgorithm(t2);
        return O(r, void 0, (s2) => {
          throw rr(e._controlledTransformStream, s2), s2;
        });
      }
      n(Yo, "TransformStreamDefaultControllerPerformTransform");
      function Ha(e) {
        const t2 = e._controlledTransformStream, r = t2._readable._readableStreamController;
        St(r);
        const s2 = new TypeError("TransformStream terminated");
        nr(t2, s2);
      }
      n(Ha, "TransformStreamDefaultControllerTerminate");
      function Va(e, t2) {
        const r = e._transformStreamController;
        if (e._backpressure) {
          const s2 = e._backpressureChangePromise;
          return O(s2, () => {
            const f2 = e._writable;
            if (f2._state === "erroring")
              throw f2._storedError;
            return Yo(r, t2);
          });
        }
        return Yo(r, t2);
      }
      n(Va, "TransformStreamDefaultSinkWriteAlgorithm");
      function Qa(e, t2) {
        return rr(e, t2), b(void 0);
      }
      n(Qa, "TransformStreamDefaultSinkAbortAlgorithm");
      function Ya(e) {
        const t2 = e._readable, r = e._transformStreamController, s2 = r._flushAlgorithm();
        return Vo(r), O(s2, () => {
          if (t2._state === "errored")
            throw t2._storedError;
          St(t2._readableStreamController);
        }, (f2) => {
          throw rr(e, f2), t2._storedError;
        });
      }
      n(Ya, "TransformStreamDefaultSinkCloseAlgorithm");
      function Ga(e) {
        return or(e, false), e._backpressureChangePromise;
      }
      n(Ga, "TransformStreamDefaultSourcePullAlgorithm");
      function ar(e) {
        return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
      }
      n(ar, "defaultControllerBrandCheckException");
      function Go(e) {
        return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
      }
      n(Go, "streamBrandCheckException"), a2.ByteLengthQueuingStrategy = Ze, a2.CountQueuingStrategy = Ke, a2.ReadableByteStreamController = _e, a2.ReadableStream = ie, a2.ReadableStreamBYOBReader = ke, a2.ReadableStreamBYOBRequest = Ae, a2.ReadableStreamDefaultController = we, a2.ReadableStreamDefaultReader = Ee, a2.TransformStream = Je, a2.TransformStreamDefaultController = Le, a2.WritableStream = qe, a2.WritableStreamDefaultController = Se, a2.WritableStreamDefaultWriter = ze, Object.defineProperty(a2, "__esModule", { value: true });
    });
  }(cr, cr.exports)), cr.exports;
}
n(as, "requirePonyfill_es2018");
const ss = 65536;
if (!globalThis.ReadableStream)
  try {
    const i = require("node:process"), { emitWarning: o2 } = i;
    try {
      i.emitWarning = () => {
      }, Object.assign(globalThis, require("node:stream/web")), i.emitWarning = o2;
    } catch (a2) {
      throw i.emitWarning = o2, a2;
    }
  } catch {
    Object.assign(globalThis, as());
  }
try {
  const { Blob: i } = require("buffer");
  i && !i.prototype.stream && (i.prototype.stream = n(function(a2) {
    let l2 = 0;
    const u = this;
    return new ReadableStream({ type: "bytes", async pull(d2) {
      const m2 = await u.slice(l2, Math.min(u.size, l2 + ss)).arrayBuffer();
      l2 += m2.byteLength, d2.enqueue(new Uint8Array(m2)), l2 === u.size && d2.close();
    } });
  }, "name"));
} catch {
}
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
const ei = 65536;
async function* Sn(i, o2 = true) {
  for (const a2 of i)
    if ("stream" in a2)
      yield* a2.stream();
    else if (ArrayBuffer.isView(a2))
      if (o2) {
        let l2 = a2.byteOffset;
        const u = a2.byteOffset + a2.byteLength;
        for (; l2 !== u; ) {
          const d2 = Math.min(u - l2, ei), p = a2.buffer.slice(l2, l2 + d2);
          l2 += p.byteLength, yield new Uint8Array(p);
        }
      } else
        yield a2;
    else {
      let l2 = 0, u = a2;
      for (; l2 !== u.size; ) {
        const p = await u.slice(l2, Math.min(u.size, l2 + ei)).arrayBuffer();
        l2 += p.byteLength, yield new Uint8Array(p);
      }
    }
}
n(Sn, "toIterator");
const ti = (xe = class {
  constructor(o2 = [], a2 = {}) {
    ae(this, me, []);
    ae(this, vt, "");
    ae(this, ct, 0);
    ae(this, wr, "transparent");
    if (typeof o2 != "object" || o2 === null)
      throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
    if (typeof o2[Symbol.iterator] != "function")
      throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
    if (typeof a2 != "object" && typeof a2 != "function")
      throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
    a2 === null && (a2 = {});
    const l2 = new TextEncoder();
    for (const d2 of o2) {
      let p;
      ArrayBuffer.isView(d2) ? p = new Uint8Array(d2.buffer.slice(d2.byteOffset, d2.byteOffset + d2.byteLength)) : d2 instanceof ArrayBuffer ? p = new Uint8Array(d2.slice(0)) : d2 instanceof xe ? p = d2 : p = l2.encode(`${d2}`), Y(this, ct, k$1(this, ct) + (ArrayBuffer.isView(p) ? p.byteLength : p.size)), k$1(this, me).push(p);
    }
    Y(this, wr, `${a2.endings === void 0 ? "transparent" : a2.endings}`);
    const u = a2.type === void 0 ? "" : String(a2.type);
    Y(this, vt, /^[\x20-\x7E]*$/.test(u) ? u : "");
  }
  get size() {
    return k$1(this, ct);
  }
  get type() {
    return k$1(this, vt);
  }
  async text() {
    const o2 = new TextDecoder();
    let a2 = "";
    for await (const l2 of Sn(k$1(this, me), false))
      a2 += o2.decode(l2, { stream: true });
    return a2 += o2.decode(), a2;
  }
  async arrayBuffer() {
    const o2 = new Uint8Array(this.size);
    let a2 = 0;
    for await (const l2 of Sn(k$1(this, me), false))
      o2.set(l2, a2), a2 += l2.length;
    return o2.buffer;
  }
  stream() {
    const o2 = Sn(k$1(this, me), true);
    return new globalThis.ReadableStream({ type: "bytes", async pull(a2) {
      const l2 = await o2.next();
      l2.done ? a2.close() : a2.enqueue(l2.value);
    }, async cancel() {
      await o2.return();
    } });
  }
  slice(o2 = 0, a2 = this.size, l2 = "") {
    const { size: u } = this;
    let d2 = o2 < 0 ? Math.max(u + o2, 0) : Math.min(o2, u), p = a2 < 0 ? Math.max(u + a2, 0) : Math.min(a2, u);
    const m2 = Math.max(p - d2, 0), C2 = k$1(this, me), S = [];
    let I2 = 0;
    for (const L of C2) {
      if (I2 >= m2)
        break;
      const E2 = ArrayBuffer.isView(L) ? L.byteLength : L.size;
      if (d2 && E2 <= d2)
        d2 -= E2, p -= E2;
      else {
        let b;
        ArrayBuffer.isView(L) ? (b = L.subarray(d2, Math.min(E2, p)), I2 += b.byteLength) : (b = L.slice(d2, Math.min(E2, p)), I2 += b.size), p -= E2, S.push(b), d2 = 0;
      }
    }
    const re = new xe([], { type: String(l2).toLowerCase() });
    return Y(re, ct, m2), Y(re, me, S), re;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](o2) {
    return o2 && typeof o2 == "object" && typeof o2.constructor == "function" && (typeof o2.stream == "function" || typeof o2.arrayBuffer == "function") && /^(Blob|File)$/.test(o2[Symbol.toStringTag]);
  }
}, me = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), n(xe, "Blob"), xe);
Object.defineProperties(ti.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
const ls = ti, it = ls, us = (Wt = class extends it {
  constructor(a2, l2, u = {}) {
    if (arguments.length < 2)
      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    super(a2, u);
    ae(this, Et, 0);
    ae(this, At, "");
    u === null && (u = {});
    const d2 = u.lastModified === void 0 ? Date.now() : Number(u.lastModified);
    Number.isNaN(d2) || Y(this, Et, d2), Y(this, At, String(l2));
  }
  get name() {
    return k$1(this, At);
  }
  get lastModified() {
    return k$1(this, Et);
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  static [Symbol.hasInstance](a2) {
    return !!a2 && a2 instanceof it && /^(File)$/.test(a2[Symbol.toStringTag]);
  }
}, Et = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), n(Wt, "File"), Wt), fs = us, wn = fs;
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var { toStringTag: Tt, iterator: cs, hasInstance: ds } = Symbol, ri = Math.random, hs = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), ni = n((i, o2, a2) => (i += "", /^(Blob|File)$/.test(o2 && o2[Tt]) ? [(a2 = a2 !== void 0 ? a2 + "" : o2[Tt] == "File" ? o2.name : "blob", i), o2.name !== a2 || o2[Tt] == "blob" ? new wn([o2], a2, o2) : o2] : [i, o2 + ""]), "f"), Rn = n((i, o2) => (o2 ? i : i.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1"), $e = n((i, o2, a2) => {
  if (o2.length < a2)
    throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a2} arguments required, but only ${o2.length} present.`);
}, "x");
const dr = (Bt = class {
  constructor(...o2) {
    ae(this, G, []);
    if (o2.length)
      throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
  }
  get [Tt]() {
    return "FormData";
  }
  [cs]() {
    return this.entries();
  }
  static [ds](o2) {
    return o2 && typeof o2 == "object" && o2[Tt] === "FormData" && !hs.some((a2) => typeof o2[a2] != "function");
  }
  append(...o2) {
    $e("append", arguments, 2), k$1(this, G).push(ni(...o2));
  }
  delete(o2) {
    $e("delete", arguments, 1), o2 += "", Y(this, G, k$1(this, G).filter(([a2]) => a2 !== o2));
  }
  get(o2) {
    $e("get", arguments, 1), o2 += "";
    for (var a2 = k$1(this, G), l2 = a2.length, u = 0; u < l2; u++)
      if (a2[u][0] === o2)
        return a2[u][1];
    return null;
  }
  getAll(o2, a2) {
    return $e("getAll", arguments, 1), a2 = [], o2 += "", k$1(this, G).forEach((l2) => l2[0] === o2 && a2.push(l2[1])), a2;
  }
  has(o2) {
    return $e("has", arguments, 1), o2 += "", k$1(this, G).some((a2) => a2[0] === o2);
  }
  forEach(o2, a2) {
    $e("forEach", arguments, 1);
    for (var [l2, u] of this)
      o2.call(a2, u, l2, this);
  }
  set(...o2) {
    $e("set", arguments, 2);
    var a2 = [], l2 = true;
    o2 = ni(...o2), k$1(this, G).forEach((u) => {
      u[0] === o2[0] ? l2 && (l2 = !a2.push(o2)) : a2.push(u);
    }), l2 && a2.push(o2), Y(this, G, a2);
  }
  *entries() {
    yield* k$1(this, G);
  }
  *keys() {
    for (var [o2] of this)
      yield o2;
  }
  *values() {
    for (var [, o2] of this)
      yield o2;
  }
}, G = /* @__PURE__ */ new WeakMap(), n(Bt, "FormData"), Bt);
function ps(i, o2 = it) {
  var a2 = `${ri()}${ri()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), l2 = [], u = `--${a2}\r
Content-Disposition: form-data; name="`;
  return i.forEach((d2, p) => typeof d2 == "string" ? l2.push(u + Rn(p) + `"\r
\r
${d2.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), `\r
`)}\r
`) : l2.push(u + Rn(p) + `"; filename="${Rn(d2.name, 1)}"\r
Content-Type: ${d2.type || "application/octet-stream"}\r
\r
`, d2, `\r
`)), l2.push(`--${a2}--`), new o2(l2, { type: "multipart/form-data; boundary=" + a2 });
}
n(ps, "formDataToBlob");
const Bn = class Bn2 extends Error {
  constructor(o2, a2) {
    super(o2), Error.captureStackTrace(this, this.constructor), this.type = a2;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
n(Bn, "FetchBaseError");
let at = Bn;
const kn = class kn2 extends at {
  constructor(o2, a2, l2) {
    super(o2, a2), l2 && (this.code = this.errno = l2.code, this.erroredSysCall = l2.syscall);
  }
};
n(kn, "FetchError");
let V = kn;
const hr = Symbol.toStringTag, oi = n((i) => typeof i == "object" && typeof i.append == "function" && typeof i.delete == "function" && typeof i.get == "function" && typeof i.getAll == "function" && typeof i.has == "function" && typeof i.set == "function" && typeof i.sort == "function" && i[hr] === "URLSearchParams", "isURLSearchParameters"), pr = n((i) => i && typeof i == "object" && typeof i.arrayBuffer == "function" && typeof i.type == "string" && typeof i.stream == "function" && typeof i.constructor == "function" && /^(Blob|File)$/.test(i[hr]), "isBlob"), bs = n((i) => typeof i == "object" && (i[hr] === "AbortSignal" || i[hr] === "EventTarget"), "isAbortSignal"), ms = n((i, o2) => {
  const a2 = new URL(o2).hostname, l2 = new URL(i).hostname;
  return a2 === l2 || a2.endsWith(`.${l2}`);
}, "isDomainOrSubdomain"), ys = n((i, o2) => {
  const a2 = new URL(o2).protocol, l2 = new URL(i).protocol;
  return a2 === l2;
}, "isSameProtocol"), gs = promisify(se.pipeline), N$1 = Symbol("Body internals"), On = class On2 {
  constructor(o2, { size: a2 = 0 } = {}) {
    let l2 = null;
    o2 === null ? o2 = null : oi(o2) ? o2 = Buffer$1.from(o2.toString()) : pr(o2) || Buffer$1.isBuffer(o2) || (types.isAnyArrayBuffer(o2) ? o2 = Buffer$1.from(o2) : ArrayBuffer.isView(o2) ? o2 = Buffer$1.from(o2.buffer, o2.byteOffset, o2.byteLength) : o2 instanceof se || (o2 instanceof dr ? (o2 = ps(o2), l2 = o2.type.split("=")[1]) : o2 = Buffer$1.from(String(o2))));
    let u = o2;
    Buffer$1.isBuffer(o2) ? u = se.Readable.from(o2) : pr(o2) && (u = se.Readable.from(o2.stream())), this[N$1] = { body: o2, stream: u, boundary: l2, disturbed: false, error: null }, this.size = a2, o2 instanceof se && o2.on("error", (d2) => {
      const p = d2 instanceof at ? d2 : new V(`Invalid response body while trying to fetch ${this.url}: ${d2.message}`, "system", d2);
      this[N$1].error = p;
    });
  }
  get body() {
    return this[N$1].stream;
  }
  get bodyUsed() {
    return this[N$1].disturbed;
  }
  async arrayBuffer() {
    const { buffer: o2, byteOffset: a2, byteLength: l2 } = await Tn(this);
    return o2.slice(a2, a2 + l2);
  }
  async formData() {
    const o2 = this.headers.get("content-type");
    if (o2.startsWith("application/x-www-form-urlencoded")) {
      const l2 = new dr(), u = new URLSearchParams(await this.text());
      for (const [d2, p] of u)
        l2.append(d2, p);
      return l2;
    }
    const { toFormData: a2 } = await Promise.resolve().then(function() {
      return multipartParser;
    });
    return a2(this.body, o2);
  }
  async blob() {
    const o2 = this.headers && this.headers.get("content-type") || this[N$1].body && this[N$1].body.type || "", a2 = await this.arrayBuffer();
    return new it([a2], { type: o2 });
  }
  async json() {
    const o2 = await this.text();
    return JSON.parse(o2);
  }
  async text() {
    const o2 = await Tn(this);
    return new TextDecoder().decode(o2);
  }
  buffer() {
    return Tn(this);
  }
};
n(On, "Body");
let De = On;
De.prototype.buffer = deprecate(De.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(De.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true }, data: { get: deprecate(() => {
}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") } });
async function Tn(i) {
  if (i[N$1].disturbed)
    throw new TypeError(`body used already for: ${i.url}`);
  if (i[N$1].disturbed = true, i[N$1].error)
    throw i[N$1].error;
  const { body: o2 } = i;
  if (o2 === null)
    return Buffer$1.alloc(0);
  if (!(o2 instanceof se))
    return Buffer$1.alloc(0);
  const a2 = [];
  let l2 = 0;
  try {
    for await (const u of o2) {
      if (i.size > 0 && l2 + u.length > i.size) {
        const d2 = new V(`content size at ${i.url} over limit: ${i.size}`, "max-size");
        throw o2.destroy(d2), d2;
      }
      l2 += u.length, a2.push(u);
    }
  } catch (u) {
    throw u instanceof at ? u : new V(`Invalid response body while trying to fetch ${i.url}: ${u.message}`, "system", u);
  }
  if (o2.readableEnded === true || o2._readableState.ended === true)
    try {
      return a2.every((u) => typeof u == "string") ? Buffer$1.from(a2.join("")) : Buffer$1.concat(a2, l2);
    } catch (u) {
      throw new V(`Could not create Buffer from response body for ${i.url}: ${u.message}`, "system", u);
    }
  else
    throw new V(`Premature close of server response while trying to fetch ${i.url}`);
}
n(Tn, "consumeBody");
const Cn = n((i, o2) => {
  let a2, l2, { body: u } = i[N$1];
  if (i.bodyUsed)
    throw new Error("cannot clone body after it is used");
  return u instanceof se && typeof u.getBoundary != "function" && (a2 = new PassThrough({ highWaterMark: o2 }), l2 = new PassThrough({ highWaterMark: o2 }), u.pipe(a2), u.pipe(l2), i[N$1].stream = a2, u = l2), u;
}, "clone"), _s = deprecate((i) => i.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167"), ii = n((i, o2) => i === null ? null : typeof i == "string" ? "text/plain;charset=UTF-8" : oi(i) ? "application/x-www-form-urlencoded;charset=UTF-8" : pr(i) ? i.type || null : Buffer$1.isBuffer(i) || types.isAnyArrayBuffer(i) || ArrayBuffer.isView(i) ? null : i instanceof dr ? `multipart/form-data; boundary=${o2[N$1].boundary}` : i && typeof i.getBoundary == "function" ? `multipart/form-data;boundary=${_s(i)}` : i instanceof se ? null : "text/plain;charset=UTF-8", "extractContentType"), Ss = n((i) => {
  const { body: o2 } = i[N$1];
  return o2 === null ? 0 : pr(o2) ? o2.size : Buffer$1.isBuffer(o2) ? o2.length : o2 && typeof o2.getLengthSync == "function" && o2.hasKnownLength && o2.hasKnownLength() ? o2.getLengthSync() : null;
}, "getTotalBytes"), ws = n(async (i, { body: o2 }) => {
  o2 === null ? i.end() : await gs(o2, i);
}, "writeToStream"), br = typeof Rt.validateHeaderName == "function" ? Rt.validateHeaderName : (i) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)) {
    const o2 = new TypeError(`Header name must be a valid HTTP token [${i}]`);
    throw Object.defineProperty(o2, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), o2;
  }
}, Pn = typeof Rt.validateHeaderValue == "function" ? Rt.validateHeaderValue : (i, o2) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o2)) {
    const a2 = new TypeError(`Invalid character in header content ["${i}"]`);
    throw Object.defineProperty(a2, "code", { value: "ERR_INVALID_CHAR" }), a2;
  }
}, Rr = class Rr2 extends URLSearchParams {
  constructor(o2) {
    let a2 = [];
    if (o2 instanceof Rr2) {
      const l2 = o2.raw();
      for (const [u, d2] of Object.entries(l2))
        a2.push(...d2.map((p) => [u, p]));
    } else if (o2 != null)
      if (typeof o2 == "object" && !types.isBoxedPrimitive(o2)) {
        const l2 = o2[Symbol.iterator];
        if (l2 == null)
          a2.push(...Object.entries(o2));
        else {
          if (typeof l2 != "function")
            throw new TypeError("Header pairs must be iterable");
          a2 = [...o2].map((u) => {
            if (typeof u != "object" || types.isBoxedPrimitive(u))
              throw new TypeError("Each header pair must be an iterable object");
            return [...u];
          }).map((u) => {
            if (u.length !== 2)
              throw new TypeError("Each header pair must be a name/value tuple");
            return [...u];
          });
        }
      } else
        throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    return a2 = a2.length > 0 ? a2.map(([l2, u]) => (br(l2), Pn(l2, String(u)), [String(l2).toLowerCase(), String(u)])) : void 0, super(a2), new Proxy(this, { get(l2, u, d2) {
      switch (u) {
        case "append":
        case "set":
          return (p, m2) => (br(p), Pn(p, String(m2)), URLSearchParams.prototype[u].call(l2, String(p).toLowerCase(), String(m2)));
        case "delete":
        case "has":
        case "getAll":
          return (p) => (br(p), URLSearchParams.prototype[u].call(l2, String(p).toLowerCase()));
        case "keys":
          return () => (l2.sort(), new Set(URLSearchParams.prototype.keys.call(l2)).keys());
        default:
          return Reflect.get(l2, u, d2);
      }
    } });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(o2) {
    const a2 = this.getAll(o2);
    if (a2.length === 0)
      return null;
    let l2 = a2.join(", ");
    return /^content-encoding$/i.test(o2) && (l2 = l2.toLowerCase()), l2;
  }
  forEach(o2, a2 = void 0) {
    for (const l2 of this.keys())
      Reflect.apply(o2, a2, [this.get(l2), l2, this]);
  }
  *values() {
    for (const o2 of this.keys())
      yield this.get(o2);
  }
  *entries() {
    for (const o2 of this.keys())
      yield [o2, this.get(o2)];
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((o2, a2) => (o2[a2] = this.getAll(a2), o2), {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((o2, a2) => {
      const l2 = this.getAll(a2);
      return a2 === "host" ? o2[a2] = l2[0] : o2[a2] = l2.length > 1 ? l2 : l2[0], o2;
    }, {});
  }
};
n(Rr, "Headers");
let le = Rr;
Object.defineProperties(le.prototype, ["get", "entries", "forEach", "values"].reduce((i, o2) => (i[o2] = { enumerable: true }, i), {}));
function Rs(i = []) {
  return new le(i.reduce((o2, a2, l2, u) => (l2 % 2 === 0 && o2.push(u.slice(l2, l2 + 2)), o2), []).filter(([o2, a2]) => {
    try {
      return br(o2), Pn(o2, String(a2)), true;
    } catch {
      return false;
    }
  }));
}
n(Rs, "fromRawHeaders");
const Ts = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), vn = n((i) => Ts.has(i), "isRedirect"), ee = Symbol("Response internals"), Me = class Me2 extends De {
  constructor(o2 = null, a2 = {}) {
    super(o2, a2);
    const l2 = a2.status != null ? a2.status : 200, u = new le(a2.headers);
    if (o2 !== null && !u.has("Content-Type")) {
      const d2 = ii(o2, this);
      d2 && u.append("Content-Type", d2);
    }
    this[ee] = { type: "default", url: a2.url, status: l2, statusText: a2.statusText || "", headers: u, counter: a2.counter, highWaterMark: a2.highWaterMark };
  }
  get type() {
    return this[ee].type;
  }
  get url() {
    return this[ee].url || "";
  }
  get status() {
    return this[ee].status;
  }
  get ok() {
    return this[ee].status >= 200 && this[ee].status < 300;
  }
  get redirected() {
    return this[ee].counter > 0;
  }
  get statusText() {
    return this[ee].statusText;
  }
  get headers() {
    return this[ee].headers;
  }
  get highWaterMark() {
    return this[ee].highWaterMark;
  }
  clone() {
    return new Me2(Cn(this, this.highWaterMark), { type: this.type, url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected, size: this.size, highWaterMark: this.highWaterMark });
  }
  static redirect(o2, a2 = 302) {
    if (!vn(a2))
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    return new Me2(null, { headers: { location: new URL(o2).toString() }, status: a2 });
  }
  static error() {
    const o2 = new Me2(null, { status: 0, statusText: "" });
    return o2[ee].type = "error", o2;
  }
  static json(o2 = void 0, a2 = {}) {
    const l2 = JSON.stringify(o2);
    if (l2 === void 0)
      throw new TypeError("data is not JSON serializable");
    const u = new le(a2 && a2.headers);
    return u.has("content-type") || u.set("content-type", "application/json"), new Me2(l2, { ...a2, headers: u });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
n(Me, "Response");
let te = Me;
Object.defineProperties(te.prototype, { type: { enumerable: true }, url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
const Cs = n((i) => {
  if (i.search)
    return i.search;
  const o2 = i.href.length - 1, a2 = i.hash || (i.href[o2] === "#" ? "#" : "");
  return i.href[o2 - a2.length] === "?" ? "?" : "";
}, "getSearch");
function ai(i, o2 = false) {
  return i == null || (i = new URL(i), /^(about|blob|data):$/.test(i.protocol)) ? "no-referrer" : (i.username = "", i.password = "", i.hash = "", o2 && (i.pathname = "", i.search = ""), i);
}
n(ai, "stripURLForUseAsAReferrer");
const si = /* @__PURE__ */ new Set(["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"]), Ps = "strict-origin-when-cross-origin";
function vs(i) {
  if (!si.has(i))
    throw new TypeError(`Invalid referrerPolicy: ${i}`);
  return i;
}
n(vs, "validateReferrerPolicy");
function Es(i) {
  if (/^(http|ws)s:$/.test(i.protocol))
    return true;
  const o2 = i.host.replace(/(^\[)|(]$)/g, ""), a2 = isIP(o2);
  return a2 === 4 && /^127\./.test(o2) || a2 === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o2) ? true : i.host === "localhost" || i.host.endsWith(".localhost") ? false : i.protocol === "file:";
}
n(Es, "isOriginPotentiallyTrustworthy");
function st(i) {
  return /^about:(blank|srcdoc)$/.test(i) || i.protocol === "data:" || /^(blob|filesystem):$/.test(i.protocol) ? true : Es(i);
}
n(st, "isUrlPotentiallyTrustworthy");
function As(i, { referrerURLCallback: o2, referrerOriginCallback: a2 } = {}) {
  if (i.referrer === "no-referrer" || i.referrerPolicy === "")
    return null;
  const l2 = i.referrerPolicy;
  if (i.referrer === "about:client")
    return "no-referrer";
  const u = i.referrer;
  let d2 = ai(u), p = ai(u, true);
  d2.toString().length > 4096 && (d2 = p), o2 && (d2 = o2(d2)), a2 && (p = a2(p));
  const m2 = new URL(i.url);
  switch (l2) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return p;
    case "unsafe-url":
      return d2;
    case "strict-origin":
      return st(d2) && !st(m2) ? "no-referrer" : p.toString();
    case "strict-origin-when-cross-origin":
      return d2.origin === m2.origin ? d2 : st(d2) && !st(m2) ? "no-referrer" : p;
    case "same-origin":
      return d2.origin === m2.origin ? d2 : "no-referrer";
    case "origin-when-cross-origin":
      return d2.origin === m2.origin ? d2 : p;
    case "no-referrer-when-downgrade":
      return st(d2) && !st(m2) ? "no-referrer" : d2;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${l2}`);
  }
}
n(As, "determineRequestsReferrer");
function Ws(i) {
  const o2 = (i.get("referrer-policy") || "").split(/[,\s]+/);
  let a2 = "";
  for (const l2 of o2)
    l2 && si.has(l2) && (a2 = l2);
  return a2;
}
n(Ws, "parseReferrerPolicyFromHeader");
const j = Symbol("Request internals"), Ct = n((i) => typeof i == "object" && typeof i[j] == "object", "isRequest"), Bs = deprecate(() => {
}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)"), Tr = class Tr2 extends De {
  constructor(o2, a2 = {}) {
    let l2;
    if (Ct(o2) ? l2 = new URL(o2.url) : (l2 = new URL(o2), o2 = {}), l2.username !== "" || l2.password !== "")
      throw new TypeError(`${l2} is an url with embedded credentials.`);
    let u = a2.method || o2.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(u) && (u = u.toUpperCase()), !Ct(a2) && "data" in a2 && Bs(), (a2.body != null || Ct(o2) && o2.body !== null) && (u === "GET" || u === "HEAD"))
      throw new TypeError("Request with GET/HEAD method cannot have body");
    const d2 = a2.body ? a2.body : Ct(o2) && o2.body !== null ? Cn(o2) : null;
    super(d2, { size: a2.size || o2.size || 0 });
    const p = new le(a2.headers || o2.headers || {});
    if (d2 !== null && !p.has("Content-Type")) {
      const S = ii(d2, this);
      S && p.set("Content-Type", S);
    }
    let m2 = Ct(o2) ? o2.signal : null;
    if ("signal" in a2 && (m2 = a2.signal), m2 != null && !bs(m2))
      throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    let C2 = a2.referrer == null ? o2.referrer : a2.referrer;
    if (C2 === "")
      C2 = "no-referrer";
    else if (C2) {
      const S = new URL(C2);
      C2 = /^about:(\/\/)?client$/.test(S) ? "client" : S;
    } else
      C2 = void 0;
    this[j] = { method: u, redirect: a2.redirect || o2.redirect || "follow", headers: p, parsedURL: l2, signal: m2, referrer: C2 }, this.follow = a2.follow === void 0 ? o2.follow === void 0 ? 20 : o2.follow : a2.follow, this.compress = a2.compress === void 0 ? o2.compress === void 0 ? true : o2.compress : a2.compress, this.counter = a2.counter || o2.counter || 0, this.agent = a2.agent || o2.agent, this.highWaterMark = a2.highWaterMark || o2.highWaterMark || 16384, this.insecureHTTPParser = a2.insecureHTTPParser || o2.insecureHTTPParser || false, this.referrerPolicy = a2.referrerPolicy || o2.referrerPolicy || "";
  }
  get method() {
    return this[j].method;
  }
  get url() {
    return format$2(this[j].parsedURL);
  }
  get headers() {
    return this[j].headers;
  }
  get redirect() {
    return this[j].redirect;
  }
  get signal() {
    return this[j].signal;
  }
  get referrer() {
    if (this[j].referrer === "no-referrer")
      return "";
    if (this[j].referrer === "client")
      return "about:client";
    if (this[j].referrer)
      return this[j].referrer.toString();
  }
  get referrerPolicy() {
    return this[j].referrerPolicy;
  }
  set referrerPolicy(o2) {
    this[j].referrerPolicy = vs(o2);
  }
  clone() {
    return new Tr2(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
n(Tr, "Request");
let lt = Tr;
Object.defineProperties(lt.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true }, referrer: { enumerable: true }, referrerPolicy: { enumerable: true } });
const ks = n((i) => {
  const { parsedURL: o2 } = i[j], a2 = new le(i[j].headers);
  a2.has("Accept") || a2.set("Accept", "*/*");
  let l2 = null;
  if (i.body === null && /^(post|put)$/i.test(i.method) && (l2 = "0"), i.body !== null) {
    const m2 = Ss(i);
    typeof m2 == "number" && !Number.isNaN(m2) && (l2 = String(m2));
  }
  l2 && a2.set("Content-Length", l2), i.referrerPolicy === "" && (i.referrerPolicy = Ps), i.referrer && i.referrer !== "no-referrer" ? i[j].referrer = As(i) : i[j].referrer = "no-referrer", i[j].referrer instanceof URL && a2.set("Referer", i.referrer), a2.has("User-Agent") || a2.set("User-Agent", "node-fetch"), i.compress && !a2.has("Accept-Encoding") && a2.set("Accept-Encoding", "gzip, deflate, br");
  let { agent: u } = i;
  typeof u == "function" && (u = u(o2));
  const d2 = Cs(o2), p = { path: o2.pathname + d2, method: i.method, headers: a2[Symbol.for("nodejs.util.inspect.custom")](), insecureHTTPParser: i.insecureHTTPParser, agent: u };
  return { parsedURL: o2, options: p };
}, "getNodeRequestOptions"), qn = class qn2 extends at {
  constructor(o2, a2 = "aborted") {
    super(o2, a2);
  }
};
n(qn, "AbortError");
let mr = qn;
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
if (!globalThis.DOMException)
  try {
    const { MessageChannel: i } = require("worker_threads"), o2 = new i().port1, a2 = new ArrayBuffer();
    o2.postMessage(a2, [a2, a2]);
  } catch (i) {
    i.constructor.name === "DOMException" && (globalThis.DOMException = i.constructor);
  }
var Os = globalThis.DOMException;
const qs = is(Os), { stat: En } = promises;
n((i, o2) => li(statSync(i), i, o2), "blobFromSync");
n((i, o2) => En(i).then((a2) => li(a2, i, o2)), "blobFrom");
n((i, o2) => En(i).then((a2) => ui(a2, i, o2)), "fileFrom");
n((i, o2) => ui(statSync(i), i, o2), "fileFromSync");
const li = n((i, o2, a2 = "") => new it([new yr({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], { type: a2 }), "fromBlob"), ui = n((i, o2, a2 = "") => new wn([new yr({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], basename(o2), { type: a2, lastModified: i.mtimeMs }), "fromFile"), Cr = class Cr2 {
  constructor(o2) {
    ae(this, Ue, void 0);
    ae(this, Ne, void 0);
    Y(this, Ue, o2.path), Y(this, Ne, o2.start), this.size = o2.size, this.lastModified = o2.lastModified;
  }
  slice(o2, a2) {
    return new Cr2({ path: k$1(this, Ue), lastModified: this.lastModified, size: a2 - o2, start: k$1(this, Ne) + o2 });
  }
  async *stream() {
    const { mtimeMs: o2 } = await En(k$1(this, Ue));
    if (o2 > this.lastModified)
      throw new qs("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
    yield* createReadStream(k$1(this, Ue), { start: k$1(this, Ne), end: k$1(this, Ne) + this.size - 1 });
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
};
Ue = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), n(Cr, "BlobDataItem");
let yr = Cr;
const Ls = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function fi(i, o2) {
  return new Promise((a2, l2) => {
    const u = new lt(i, o2), { parsedURL: d2, options: p } = ks(u);
    if (!Ls.has(d2.protocol))
      throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${d2.protocol.replace(/:$/, "")}" is not supported.`);
    if (d2.protocol === "data:") {
      const b = os(u.url), g2 = new te(b, { headers: { "Content-Type": b.typeFull } });
      a2(g2);
      return;
    }
    const m2 = (d2.protocol === "https:" ? Ka : Rt).request, { signal: C2 } = u;
    let S = null;
    const I2 = n(() => {
      const b = new mr("The operation was aborted.");
      l2(b), u.body && u.body instanceof se.Readable && u.body.destroy(b), !(!S || !S.body) && S.body.emit("error", b);
    }, "abort");
    if (C2 && C2.aborted) {
      I2();
      return;
    }
    const re = n(() => {
      I2(), E2();
    }, "abortAndFinalize"), L = m2(d2.toString(), p);
    C2 && C2.addEventListener("abort", re);
    const E2 = n(() => {
      L.abort(), C2 && C2.removeEventListener("abort", re);
    }, "finalize");
    L.on("error", (b) => {
      l2(new V(`request to ${u.url} failed, reason: ${b.message}`, "system", b)), E2();
    }), $s(L, (b) => {
      S && S.body && S.body.destroy(b);
    }), process.version < "v14" && L.on("socket", (b) => {
      let g2;
      b.prependListener("end", () => {
        g2 = b._eventsCount;
      }), b.prependListener("close", (A2) => {
        if (S && g2 < b._eventsCount && !A2) {
          const q = new Error("Premature close");
          q.code = "ERR_STREAM_PREMATURE_CLOSE", S.body.emit("error", q);
        }
      });
    }), L.on("response", (b) => {
      L.setTimeout(0);
      const g2 = Rs(b.rawHeaders);
      if (vn(b.statusCode)) {
        const O = g2.get("Location");
        let $2 = null;
        try {
          $2 = O === null ? null : new URL(O, u.url);
        } catch {
          if (u.redirect !== "manual") {
            l2(new V(`uri requested responds with an invalid redirect URL: ${O}`, "invalid-redirect")), E2();
            return;
          }
        }
        switch (u.redirect) {
          case "error":
            l2(new V(`uri requested responds with a redirect, redirect mode is set to error: ${u.url}`, "no-redirect")), E2();
            return;
          case "manual":
            break;
          case "follow": {
            if ($2 === null)
              break;
            if (u.counter >= u.follow) {
              l2(new V(`maximum redirect reached at: ${u.url}`, "max-redirect")), E2();
              return;
            }
            const F3 = { headers: new le(u.headers), follow: u.follow, counter: u.counter + 1, agent: u.agent, compress: u.compress, method: u.method, body: Cn(u), signal: u.signal, size: u.size, referrer: u.referrer, referrerPolicy: u.referrerPolicy };
            if (!ms(u.url, $2) || !ys(u.url, $2))
              for (const ue of ["authorization", "www-authenticate", "cookie", "cookie2"])
                F3.headers.delete(ue);
            if (b.statusCode !== 303 && u.body && o2.body instanceof se.Readable) {
              l2(new V("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), E2();
              return;
            }
            (b.statusCode === 303 || (b.statusCode === 301 || b.statusCode === 302) && u.method === "POST") && (F3.method = "GET", F3.body = void 0, F3.headers.delete("content-length"));
            const ve = Ws(g2);
            ve && (F3.referrerPolicy = ve), a2(fi(new lt($2, F3))), E2();
            return;
          }
          default:
            return l2(new TypeError(`Redirect option '${u.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      C2 && b.once("end", () => {
        C2.removeEventListener("abort", re);
      });
      let A2 = pipeline(b, new PassThrough(), (O) => {
        O && l2(O);
      });
      process.version < "v12.10" && b.on("aborted", re);
      const q = { url: u.url, status: b.statusCode, statusText: b.statusMessage, headers: g2, size: u.size, counter: u.counter, highWaterMark: u.highWaterMark }, ne = g2.get("Content-Encoding");
      if (!u.compress || u.method === "HEAD" || ne === null || b.statusCode === 204 || b.statusCode === 304) {
        S = new te(A2, q), a2(S);
        return;
      }
      const dt = { flush: nt.Z_SYNC_FLUSH, finishFlush: nt.Z_SYNC_FLUSH };
      if (ne === "gzip" || ne === "x-gzip") {
        A2 = pipeline(A2, nt.createGunzip(dt), (O) => {
          O && l2(O);
        }), S = new te(A2, q), a2(S);
        return;
      }
      if (ne === "deflate" || ne === "x-deflate") {
        const O = pipeline(b, new PassThrough(), ($2) => {
          $2 && l2($2);
        });
        O.once("data", ($2) => {
          ($2[0] & 15) === 8 ? A2 = pipeline(A2, nt.createInflate(), (F3) => {
            F3 && l2(F3);
          }) : A2 = pipeline(A2, nt.createInflateRaw(), (F3) => {
            F3 && l2(F3);
          }), S = new te(A2, q), a2(S);
        }), O.once("end", () => {
          S || (S = new te(A2, q), a2(S));
        });
        return;
      }
      if (ne === "br") {
        A2 = pipeline(A2, nt.createBrotliDecompress(), (O) => {
          O && l2(O);
        }), S = new te(A2, q), a2(S);
        return;
      }
      S = new te(A2, q), a2(S);
    }), ws(L, u).catch(l2);
  });
}
n(fi, "fetch$1");
function $s(i, o2) {
  const a2 = Buffer$1.from(`0\r
\r
`);
  let l2 = false, u = false, d2;
  i.on("response", (p) => {
    const { headers: m2 } = p;
    l2 = m2["transfer-encoding"] === "chunked" && !m2["content-length"];
  }), i.on("socket", (p) => {
    const m2 = n(() => {
      if (l2 && !u) {
        const S = new Error("Premature close");
        S.code = "ERR_STREAM_PREMATURE_CLOSE", o2(S);
      }
    }, "onSocketClose"), C2 = n((S) => {
      u = Buffer$1.compare(S.slice(-5), a2) === 0, !u && d2 && (u = Buffer$1.compare(d2.slice(-3), a2.slice(0, 3)) === 0 && Buffer$1.compare(S.slice(-2), a2.slice(3)) === 0), d2 = S;
    }, "onData");
    p.prependListener("close", m2), p.on("data", C2), i.on("close", () => {
      p.removeListener("close", m2), p.removeListener("data", C2);
    });
  });
}
n($s, "fixResponseChunkedTransferBadEnding");
const ci = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap();
function B$1(i) {
  const o2 = ci.get(i);
  return console.assert(o2 != null, "'this' is expected an Event object, but got", i), o2;
}
n(B$1, "pd");
function di(i) {
  if (i.passiveListener != null) {
    typeof console < "u" && typeof console.error == "function" && console.error("Unable to preventDefault inside passive event listener invocation.", i.passiveListener);
    return;
  }
  i.event.cancelable && (i.canceled = true, typeof i.event.preventDefault == "function" && i.event.preventDefault());
}
n(di, "setCancelFlag");
function ut(i, o2) {
  ci.set(this, { eventTarget: i, event: o2, eventPhase: 2, currentTarget: i, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: o2.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
  const a2 = Object.keys(o2);
  for (let l2 = 0; l2 < a2.length; ++l2) {
    const u = a2[l2];
    u in this || Object.defineProperty(this, u, hi(u));
  }
}
n(ut, "Event"), ut.prototype = { get type() {
  return B$1(this).event.type;
}, get target() {
  return B$1(this).eventTarget;
}, get currentTarget() {
  return B$1(this).currentTarget;
}, composedPath() {
  const i = B$1(this).currentTarget;
  return i == null ? [] : [i];
}, get NONE() {
  return 0;
}, get CAPTURING_PHASE() {
  return 1;
}, get AT_TARGET() {
  return 2;
}, get BUBBLING_PHASE() {
  return 3;
}, get eventPhase() {
  return B$1(this).eventPhase;
}, stopPropagation() {
  const i = B$1(this);
  i.stopped = true, typeof i.event.stopPropagation == "function" && i.event.stopPropagation();
}, stopImmediatePropagation() {
  const i = B$1(this);
  i.stopped = true, i.immediateStopped = true, typeof i.event.stopImmediatePropagation == "function" && i.event.stopImmediatePropagation();
}, get bubbles() {
  return !!B$1(this).event.bubbles;
}, get cancelable() {
  return !!B$1(this).event.cancelable;
}, preventDefault() {
  di(B$1(this));
}, get defaultPrevented() {
  return B$1(this).canceled;
}, get composed() {
  return !!B$1(this).event.composed;
}, get timeStamp() {
  return B$1(this).timeStamp;
}, get srcElement() {
  return B$1(this).eventTarget;
}, get cancelBubble() {
  return B$1(this).stopped;
}, set cancelBubble(i) {
  if (!i)
    return;
  const o2 = B$1(this);
  o2.stopped = true, typeof o2.event.cancelBubble == "boolean" && (o2.event.cancelBubble = true);
}, get returnValue() {
  return !B$1(this).canceled;
}, set returnValue(i) {
  i || di(B$1(this));
}, initEvent() {
} }, Object.defineProperty(ut.prototype, "constructor", { value: ut, configurable: true, writable: true });
function hi(i) {
  return { get() {
    return B$1(this).event[i];
  }, set(o2) {
    B$1(this).event[i] = o2;
  }, configurable: true, enumerable: true };
}
n(hi, "defineRedirectDescriptor");
function Ds(i) {
  return { value() {
    const o2 = B$1(this).event;
    return o2[i].apply(o2, arguments);
  }, configurable: true, enumerable: true };
}
n(Ds, "defineCallDescriptor");
function Ms(i, o2) {
  const a2 = Object.keys(o2);
  if (a2.length === 0)
    return i;
  function l2(u, d2) {
    i.call(this, u, d2);
  }
  n(l2, "CustomEvent"), l2.prototype = Object.create(i.prototype, { constructor: { value: l2, configurable: true, writable: true } });
  for (let u = 0; u < a2.length; ++u) {
    const d2 = a2[u];
    if (!(d2 in i.prototype)) {
      const m2 = typeof Object.getOwnPropertyDescriptor(o2, d2).value == "function";
      Object.defineProperty(l2.prototype, d2, m2 ? Ds(d2) : hi(d2));
    }
  }
  return l2;
}
n(Ms, "defineWrapper");
function pi(i) {
  if (i == null || i === Object.prototype)
    return ut;
  let o2 = An.get(i);
  return o2 == null && (o2 = Ms(pi(Object.getPrototypeOf(i)), i), An.set(i, o2)), o2;
}
n(pi, "getWrapper");
function Us(i, o2) {
  const a2 = pi(Object.getPrototypeOf(o2));
  return new a2(i, o2);
}
n(Us, "wrapEvent");
function Ns(i) {
  return B$1(i).immediateStopped;
}
n(Ns, "isStopped");
function xs(i, o2) {
  B$1(i).eventPhase = o2;
}
n(xs, "setEventPhase");
function Hs(i, o2) {
  B$1(i).currentTarget = o2;
}
n(Hs, "setCurrentTarget");
function bi(i, o2) {
  B$1(i).passiveListener = o2;
}
n(bi, "setPassiveListener");
const mi = /* @__PURE__ */ new WeakMap(), yi = 1, gi = 2, gr = 3;
function _r(i) {
  return i !== null && typeof i == "object";
}
n(_r, "isObject");
function Pt(i) {
  const o2 = mi.get(i);
  if (o2 == null)
    throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  return o2;
}
n(Pt, "getListeners");
function Vs(i) {
  return { get() {
    let a2 = Pt(this).get(i);
    for (; a2 != null; ) {
      if (a2.listenerType === gr)
        return a2.listener;
      a2 = a2.next;
    }
    return null;
  }, set(o2) {
    typeof o2 != "function" && !_r(o2) && (o2 = null);
    const a2 = Pt(this);
    let l2 = null, u = a2.get(i);
    for (; u != null; )
      u.listenerType === gr ? l2 !== null ? l2.next = u.next : u.next !== null ? a2.set(i, u.next) : a2.delete(i) : l2 = u, u = u.next;
    if (o2 !== null) {
      const d2 = { listener: o2, listenerType: gr, passive: false, once: false, next: null };
      l2 === null ? a2.set(i, d2) : l2.next = d2;
    }
  }, configurable: true, enumerable: true };
}
n(Vs, "defineEventAttributeDescriptor");
function _i(i, o2) {
  Object.defineProperty(i, `on${o2}`, Vs(o2));
}
n(_i, "defineEventAttribute");
function Si(i) {
  function o2() {
    be.call(this);
  }
  n(o2, "CustomEventTarget"), o2.prototype = Object.create(be.prototype, { constructor: { value: o2, configurable: true, writable: true } });
  for (let a2 = 0; a2 < i.length; ++a2)
    _i(o2.prototype, i[a2]);
  return o2;
}
n(Si, "defineCustomEventTarget");
function be() {
  if (this instanceof be) {
    mi.set(this, /* @__PURE__ */ new Map());
    return;
  }
  if (arguments.length === 1 && Array.isArray(arguments[0]))
    return Si(arguments[0]);
  if (arguments.length > 0) {
    const i = new Array(arguments.length);
    for (let o2 = 0; o2 < arguments.length; ++o2)
      i[o2] = arguments[o2];
    return Si(i);
  }
  throw new TypeError("Cannot call a class as a function");
}
n(be, "EventTarget"), be.prototype = { addEventListener(i, o2, a2) {
  if (o2 == null)
    return;
  if (typeof o2 != "function" && !_r(o2))
    throw new TypeError("'listener' should be a function or an object.");
  const l2 = Pt(this), u = _r(a2), p = (u ? !!a2.capture : !!a2) ? yi : gi, m2 = { listener: o2, listenerType: p, passive: u && !!a2.passive, once: u && !!a2.once, next: null };
  let C2 = l2.get(i);
  if (C2 === void 0) {
    l2.set(i, m2);
    return;
  }
  let S = null;
  for (; C2 != null; ) {
    if (C2.listener === o2 && C2.listenerType === p)
      return;
    S = C2, C2 = C2.next;
  }
  S.next = m2;
}, removeEventListener(i, o2, a2) {
  if (o2 == null)
    return;
  const l2 = Pt(this), d2 = (_r(a2) ? !!a2.capture : !!a2) ? yi : gi;
  let p = null, m2 = l2.get(i);
  for (; m2 != null; ) {
    if (m2.listener === o2 && m2.listenerType === d2) {
      p !== null ? p.next = m2.next : m2.next !== null ? l2.set(i, m2.next) : l2.delete(i);
      return;
    }
    p = m2, m2 = m2.next;
  }
}, dispatchEvent(i) {
  if (i == null || typeof i.type != "string")
    throw new TypeError('"event.type" should be a string.');
  const o2 = Pt(this), a2 = i.type;
  let l2 = o2.get(a2);
  if (l2 == null)
    return true;
  const u = Us(this, i);
  let d2 = null;
  for (; l2 != null; ) {
    if (l2.once ? d2 !== null ? d2.next = l2.next : l2.next !== null ? o2.set(a2, l2.next) : o2.delete(a2) : d2 = l2, bi(u, l2.passive ? l2.listener : null), typeof l2.listener == "function")
      try {
        l2.listener.call(this, u);
      } catch (p) {
        typeof console < "u" && typeof console.error == "function" && console.error(p);
      }
    else
      l2.listenerType !== gr && typeof l2.listener.handleEvent == "function" && l2.listener.handleEvent(u);
    if (Ns(u))
      break;
    l2 = l2.next;
  }
  return bi(u, null), xs(u, 0), Hs(u, null), !u.defaultPrevented;
} }, Object.defineProperty(be.prototype, "constructor", { value: be, configurable: true, writable: true });
const zn = class zn2 extends be {
  constructor() {
    throw super(), new TypeError("AbortSignal cannot be constructed directly");
  }
  get aborted() {
    const o2 = Sr.get(this);
    if (typeof o2 != "boolean")
      throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
    return o2;
  }
};
n(zn, "AbortSignal");
let ft = zn;
_i(ft.prototype, "abort");
function Qs() {
  const i = Object.create(ft.prototype);
  return be.call(i), Sr.set(i, false), i;
}
n(Qs, "createAbortSignal");
function Ys(i) {
  Sr.get(i) === false && (Sr.set(i, true), i.dispatchEvent({ type: "abort" }));
}
n(Ys, "abortSignal");
const Sr = /* @__PURE__ */ new WeakMap();
Object.defineProperties(ft.prototype, { aborted: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ft.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
let Wn = (kt = class {
  constructor() {
    wi.set(this, Qs());
  }
  get signal() {
    return Ri(this);
  }
  abort() {
    Ys(Ri(this));
  }
}, n(kt, "AbortController"), kt);
const wi = /* @__PURE__ */ new WeakMap();
function Ri(i) {
  const o2 = wi.get(i);
  if (o2 == null)
    throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i === null ? "null" : typeof i}`);
  return o2;
}
n(Ri, "getSignal"), Object.defineProperties(Wn.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Wn.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
var Gs = Object.defineProperty, Zs = n((i, o2) => Gs(i, "name", { value: o2, configurable: true }), "e");
const Ti = fi;
Ci();
function Ci() {
  var _a2, _b2, _c;
  !((_b2 = (_a2 = globalThis.process) == null ? void 0 : _a2.versions) == null ? void 0 : _b2.node) && !((_c = globalThis.process) == null ? void 0 : _c.env.DISABLE_NODE_FETCH_NATIVE_WARN) && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
n(Ci, "s"), Zs(Ci, "checkNodeEnvironment");
var a = Object.defineProperty;
var t$1 = (e, r) => a(e, "name", { value: r, configurable: true });
var f = Object.defineProperty, g$1 = t$1((e, r) => f(e, "name", { value: r, configurable: true }), "e");
const o = !!((_b = (_a = globalThis.process) == null ? void 0 : _a.env) == null ? void 0 : _b.FORCE_NODE_FETCH);
function l() {
  return !o && globalThis.fetch ? globalThis.fetch : Ti;
}
t$1(l, "p"), g$1(l, "_getFetch");
const s = l(), d = !o && globalThis.Headers || le, A = !o && globalThis.AbortController || Wn;
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (value[0] === '"' && value[value.length - 1] === '"') {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if ((opts == null ? void 0 : opts.cause) && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  var _a2, _b2, _c, _d, _e;
  const errorMessage = ((_a2 = ctx.error) == null ? void 0 : _a2.message) || ((_b2 = ctx.error) == null ? void 0 : _b2.toString()) || "";
  const method = ((_c = ctx.request) == null ? void 0 : _c.method) || ((_d = ctx.options) == null ? void 0 : _d.method) || "GET";
  const url = ((_e = ctx.request) == null ? void 0 : _e.url) || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}
const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t2 = typeof value;
  if (t2 === "string" || t2 === "number" || t2 === "boolean" || t2 === null) {
    return true;
  }
  if (t2 !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults2, Headers2 = globalThis.Headers) {
  const merged = {
    ...defaults2,
    ...input
  };
  if ((defaults2 == null ? void 0 : defaults2.params) && (input == null ? void 0 : input.params)) {
    merged.params = {
      ...defaults2 == null ? void 0 : defaults2.params,
      ...input == null ? void 0 : input.params
    };
  }
  if ((defaults2 == null ? void 0 : defaults2.query) && (input == null ? void 0 : input.query)) {
    merged.query = {
      ...defaults2 == null ? void 0 : defaults2.query,
      ...input == null ? void 0 : input.query
    };
  }
  if ((defaults2 == null ? void 0 : defaults2.headers) && (input == null ? void 0 : input.headers)) {
    merged.headers = new Headers2((defaults2 == null ? void 0 : defaults2.headers) || {});
    for (const [key, value] of new Headers2((input == null ? void 0 : input.headers) || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch: fetch2 = globalThis.fetch,
    Headers: Headers2 = globalThis.Headers,
    AbortController: AbortController2 = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1,
          timeout: context.options.timeout
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    var _a2;
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers2),
      response: void 0,
      error: void 0
    };
    context.options.method = (_a2 = context.options.method) == null ? void 0 : _a2.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers2(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController2();
      setTimeout(() => controller.abort(), context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch2(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    }
    const hasBody = context.response.body && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch2 = async function $fetch22(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.native = (...args) => fetch2(...args);
  $fetch2.create = (defaultOptions2 = {}) => createFetch({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions2
    }
  });
  return $fetch2;
}
function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return s;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new Rt.Agent(agentOptions);
  const httpsAgent = new Ka.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return s(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers = globalThis.Headers || d;
const AbortController$1 = globalThis.AbortController || A;
const ofetch = createFetch({ fetch, Headers, AbortController: AbortController$1 });
const $fetch = ofetch;
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.8.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name2 = "$" + name;
    defineGetter(nuxtApp, $name2, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name2, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide4 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide4 && typeof provide4 === "object") {
      for (const key in provide4) {
        nuxtApp.provide(key, provide4[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a2, _b2;
  const parallels = [];
  const errors = [];
  for (const plugin2 of plugins2) {
    if (((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext) && ((_b2 = plugin2.env) == null ? void 0 : _b2.islands) === false) {
      continue;
    }
    const promise = applyPlugin(nuxtApp, plugin2);
    if (plugin2.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a2;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a2 = getCurrentInstance()) == null ? void 0 : _a2.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root3 = resolveUnref(ref2);
  if (!ref2 || !root3)
    return root3;
  if (Array.isArray(root3))
    return root3.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root3 === "object") {
    return Object.fromEntries(
      Object.entries(root3).map(([k2, v2]) => {
        if (k2 === "titleTemplate" || k2.startsWith("on"))
          return [k2, unref(v2)];
        return [k2, resolveUnrefHeadInput(v2, k2)];
      })
    );
  }
  return root3;
}
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler2) {
  _global[globalKey$1] = handler2;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && process.env.NODE_ENV !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a2;
  return (_a2 = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = /* @__PURE__ */ useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry2 of arr) {
          this.dispatch(entry2);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry2) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry2);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number2) {
      return write("number:" + number2);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set2) {
      write("set:");
      const arr = [...set2];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number2) {
      return write("bigint:" + number2.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f2) {
  if (typeof f2 !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f2).slice(-nativeFuncLength) === nativeFunc;
}
function isEqual(object1, object2, hashOptions = {}) {
  if (object1 === object2) {
    return true;
  }
  if (objectHash(object1, hashOptions) === objectHash(object2, hashOptions)) {
    return true;
  }
  return false;
}
function useRequestEvent(nuxtApp = /* @__PURE__ */ useNuxtApp()) {
  var _a2;
  return (_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.event;
}
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index3 = 0;
  while (index3 < str.length) {
    const eqIdx = str.indexOf("=", index3);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index3);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index3 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index3, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index3 = endIdx + 1;
  }
  return obj;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? ((_a2 = opts.default) == null ? void 0 : _a2.call(opts)));
  {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse$1(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
function isObject$1(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults2, namespace = ".", merger) {
  if (!isObject$1(defaults2)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults2);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject$1(value) && isObject$1(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* @__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a2, _b2;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b2 = slots.default) == null ? void 0 : _b2.call(slots));
      };
    }
  });
}
const __nuxt_component_0$2 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
const unhead_WFIwUEKfov = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const _routes = [
  {
    name: "404",
    path: "/404",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Promise.resolve().then(function() {
      return _404;
    }).then((m2) => m2.default || m2)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Promise.resolve().then(function() {
      return index$1;
    }).then((m2) => m2.default || m2)
  },
  {
    name: "projects",
    path: "/projects",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Promise.resolve().then(function() {
      return index2;
    }).then((m2) => m2.default || m2)
  },
  {
    name: "resume",
    path: "/resume",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Promise.resolve().then(function() {
      return resume;
    }).then((m2) => m2.default || m2)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a2;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a2 = useRouter().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  return to.path !== from.path || JSON.stringify(from.params) !== JSON.stringify(to.params);
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a2, _b2;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b2 = routerOptions.routes) == null ? void 0 : _b2.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a3;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a3 = routerOptions.scrollBehavior) == null ? void 0 : _a3.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a3, _b3, _c, _d;
      if (((_b3 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b3.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a3, _b3;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a3 = nuxtApp.ssrContext) == null ? void 0 : _a3.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? void 0 : _b3.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      var _a3;
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0 && !((_a3 = nuxtApp.ssrContext) == null ? void 0 : _a3.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
const isVue2 = false;
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a2;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof global !== "undefined" && ((_a2 = global.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin2, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin2;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin2.settings) {
      for (const id in plugin2.settings) {
        const item = plugin2.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin2.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject$1(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = false;
const USE_DEVTOOLS = (process.env.NODE_ENV !== "production" || false) && !(process.env.NODE_ENV === "test") && IS_CLIENT;
const saveAs = () => {
};
function toastMessage(message, type) {
  const piniaMessage = "🍍 " + message;
  if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
    __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
  } else if (type === "error") {
    console.error(piniaMessage);
  } else if (type === "warn") {
    console.warn(piniaMessage);
  } else {
    console.log(piniaMessage);
  }
}
function isPinia(o2) {
  return "_a" in o2 && "install" in o2;
}
function checkClipboardAccess() {
  if (!("clipboard" in navigator)) {
    toastMessage(`Your browser doesn't support the Clipboard API`, "error");
    return true;
  }
}
function checkNotFocusedError(error) {
  if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
    toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
    return true;
  }
  return false;
}
async function actionGlobalCopyState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
    toastMessage("Global state copied to clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalPasteState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
    toastMessage("Global state pasted from clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalSaveState(pinia) {
  try {
    saveAs(new Blob([JSON.stringify(pinia.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (error) {
    toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
let fileInput;
function getFileOpener() {
  if (!fileInput) {
    fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
  }
  function openFile() {
    return new Promise((resolve, reject) => {
      fileInput.onchange = async () => {
        const files = fileInput.files;
        if (!files)
          return resolve(null);
        const file = files.item(0);
        if (!file)
          return resolve(null);
        return resolve({ text: await file.text(), file });
      };
      fileInput.oncancel = () => resolve(null);
      fileInput.onerror = reject;
      fileInput.click();
    });
  }
  return openFile;
}
async function actionGlobalOpenStateFile(pinia) {
  try {
    const open = getFileOpener();
    const result = await open();
    if (!result)
      return;
    const { text, file } = result;
    loadStoresState(pinia, JSON.parse(text));
    toastMessage(`Global state imported from "${file.name}".`);
  } catch (error) {
    toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
function loadStoresState(pinia, state) {
  for (const key in state) {
    const storeState = pinia.state.value[key];
    if (storeState) {
      Object.assign(storeState, state[key]);
    } else {
      pinia.state.value[key] = state[key];
    }
  }
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
const PINIA_ROOT_ID = "_root";
function formatStoreForInspectorTree(store) {
  return isPinia(store) ? {
    id: PINIA_ROOT_ID,
    label: PINIA_ROOT_LABEL
  } : {
    id: store.$id,
    label: store.$id
  };
}
function formatStoreForInspectorState(store) {
  if (isPinia(store)) {
    const storeNames = Array.from(store._s.keys());
    const storeMap = store._s;
    const state2 = {
      state: storeNames.map((storeId) => ({
        editable: true,
        key: storeId,
        value: store.state.value[storeId]
      })),
      getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
        const store2 = storeMap.get(id);
        return {
          editable: false,
          key: id,
          value: store2._getters.reduce((getters, key) => {
            getters[key] = store2[key];
            return getters;
          }, {})
        };
      })
    };
    return state2;
  }
  const state = {
    state: Object.keys(store.$state).map((key) => ({
      editable: true,
      key,
      value: store.$state[key]
    }))
  };
  if (store._getters && store._getters.length) {
    state.getters = store._getters.map((getterName) => ({
      editable: false,
      key: getterName,
      value: store[getterName]
    }));
  }
  if (store._customProperties.size) {
    state.customProperties = Array.from(store._customProperties).map((key) => ({
      editable: true,
      key,
      value: store[key]
    }));
  }
  return state;
}
function formatEventData(events) {
  if (!events)
    return {};
  if (Array.isArray(events)) {
    return events.reduce((data, event) => {
      data.keys.push(event.key);
      data.operations.push(event.type);
      data.oldValue[event.key] = event.oldValue;
      data.newValue[event.key] = event.newValue;
      return data;
    }, {
      oldValue: {},
      keys: [],
      operations: [],
      newValue: {}
    });
  } else {
    return {
      operation: formatDisplay(events.type),
      key: formatDisplay(events.key),
      oldValue: events.oldValue,
      newValue: events.newValue
    };
  }
}
function formatMutationType(type) {
  switch (type) {
    case MutationType.direct:
      return "mutation";
    case MutationType.patchFunction:
      return "$patch";
    case MutationType.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let isTimelineActive = true;
const componentStateTypes = [];
const MUTATIONS_LAYER_ID = "pinia:mutations";
const INSPECTOR_ID = "pinia";
const { assign: assign$1 } = Object;
const getStoreType = (id) => "🍍 " + id;
function registerPiniaDevtools(app, pinia) {
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: `Pinia 🍍`,
      color: 15064968
    });
    api.addInspector({
      id: INSPECTOR_ID,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            actionGlobalCopyState(pinia);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await actionGlobalPasteState(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            actionGlobalSaveState(pinia);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await actionGlobalOpenStateFile(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (nodeId) => {
            const store = pinia._s.get(nodeId);
            if (!store) {
              toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
            } else if (typeof store.$reset !== "function") {
              toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
            } else {
              store.$reset();
              toastMessage(`Store "${nodeId}" reset.`);
            }
          }
        }
      ]
    });
    api.on.inspectComponent((payload, ctx) => {
      const proxy = payload.componentInstance && payload.componentInstance.proxy;
      if (proxy && proxy._pStores) {
        const piniaStores = payload.componentInstance.proxy._pStores;
        Object.values(piniaStores).forEach((store) => {
          payload.instanceData.state.push({
            type: getStoreType(store.$id),
            key: "state",
            editable: true,
            value: store._isOptionsAPI ? {
              _custom: {
                value: toRaw(store.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => store.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(store.$state).reduce((state, key) => {
                state[key] = store.$state[key];
                return state;
              }, {})
            )
          });
          if (store._getters && store._getters.length) {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "getters",
              editable: false,
              value: store._getters.reduce((getters, key) => {
                try {
                  getters[key] = store[key];
                } catch (error) {
                  getters[key] = error;
                }
                return getters;
              }, {})
            });
          }
        });
      }
    });
    api.on.getInspectorTree((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        let stores = [pinia];
        stores = stores.concat(Array.from(pinia._s.values()));
        payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return;
        }
        if (inspectedStore) {
          payload.state = formatStoreForInspectorState(inspectedStore);
        }
      }
    });
    api.on.editInspectorState((payload, ctx) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return toastMessage(`store "${payload.nodeId}" not found`, "error");
        }
        const { path } = payload;
        if (!isPinia(inspectedStore)) {
          if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
            path.unshift("$state");
          }
        } else {
          path.unshift("state");
        }
        isTimelineActive = false;
        payload.set(inspectedStore, path, payload.state.value);
        isTimelineActive = true;
      }
    });
    api.on.editComponentState((payload) => {
      if (payload.type.startsWith("🍍")) {
        const storeId = payload.type.replace(/^🍍\s*/, "");
        const store = pinia._s.get(storeId);
        if (!store) {
          return toastMessage(`store "${storeId}" not found`, "error");
        }
        const { path } = payload;
        if (path[0] !== "state") {
          return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
        }
        path[0] = "$state";
        isTimelineActive = false;
        payload.set(store, path, payload.state.value);
        isTimelineActive = true;
      }
    });
  });
}
function addStoreToDevtools(app, store) {
  if (!componentStateTypes.includes(getStoreType(store.$id))) {
    componentStateTypes.push(getStoreType(store.$id));
  }
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: true
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (api) => {
    const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
    store.$onAction(({ after, onError, name, args }) => {
      const groupId = runningActionId++;
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now2(),
          title: "🛫 " + name,
          subtitle: "start",
          data: {
            store: formatDisplay(store.$id),
            action: formatDisplay(name),
            args
          },
          groupId
        }
      });
      after((result) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛬 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              result
            },
            groupId
          }
        });
      });
      onError((error) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            logType: "error",
            title: "💥 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              error
            },
            groupId
          }
        });
      });
    }, true);
    store._customProperties.forEach((name) => {
      watch(() => unref(store[name]), (newValue, oldValue) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (isTimelineActive) {
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "Change",
              subtitle: name,
              data: {
                newValue,
                oldValue
              },
              groupId: activeAction
            }
          });
        }
      }, { deep: true });
    });
    store.$subscribe(({ events, type }, state) => {
      api.notifyComponentUpdate();
      api.sendInspectorState(INSPECTOR_ID);
      if (!isTimelineActive)
        return;
      const eventData = {
        time: now2(),
        title: formatMutationType(type),
        data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
        groupId: activeAction
      };
      if (type === MutationType.patchFunction) {
        eventData.subtitle = "⤵️";
      } else if (type === MutationType.patchObject) {
        eventData.subtitle = "🧩";
      } else if (events && !Array.isArray(events)) {
        eventData.subtitle = events.type;
      }
      if (events) {
        eventData.data["rawEvent(s)"] = {
          _custom: {
            display: "DebuggerEvent",
            type: "object",
            tooltip: "raw DebuggerEvent[]",
            value: events
          }
        };
      }
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: eventData
      });
    }, { detached: true, flush: "sync" });
    const hotUpdate = store._hotUpdate;
    store._hotUpdate = markRaw((newStore) => {
      hotUpdate(newStore);
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now2(),
          title: "🔥 " + store.$id,
          subtitle: "HMR update",
          data: {
            store: formatDisplay(store.$id),
            info: formatDisplay(`HMR update`)
          }
        }
      });
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
    });
    const { $dispose } = store;
    store.$dispose = () => {
      $dispose();
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
    };
    api.notifyComponentUpdate();
    api.sendInspectorTree(INSPECTOR_ID);
    api.sendInspectorState(INSPECTOR_ID);
    api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
  });
}
let runningActionId = 0;
let activeAction;
function patchActionForGrouping(store, actionNames, wrapWithProxy) {
  const actions = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions) {
    store[actionName] = function() {
      const _actionId = runningActionId;
      const trackedStore = wrapWithProxy ? new Proxy(store, {
        get(...args) {
          activeAction = _actionId;
          return Reflect.get(...args);
        },
        set(...args) {
          activeAction = _actionId;
          return Reflect.set(...args);
        }
      }) : store;
      activeAction = _actionId;
      const retValue = actions[actionName].apply(trackedStore, arguments);
      activeAction = void 0;
      return retValue;
    };
  }
}
function devtoolsPlugin({ app, store, options }) {
  if (store.$id.startsWith("__hot:")) {
    return;
  }
  store._isOptionsAPI = !!options.state;
  patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
  const originalHotUpdate = store._hotUpdate;
  toRaw(store)._hotUpdate = function(newStore) {
    originalHotUpdate.apply(this, arguments);
    patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
  };
  addStoreToDevtools(
    app,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    store
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        if (USE_DEVTOOLS) {
          registerPiniaDevtools(app, pinia);
        }
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState)) {
      continue;
    }
    const targetValue = newState[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$2 } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = process.env.NODE_ENV !== "production" && hot ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      toRefs(ref(state ? state() : {}).value)
    ) : toRefs(pinia.state.value[id]);
    return assign$2(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (process.env.NODE_ENV !== "production" && name in localState) {
        console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$2({ actions: {} }, options);
  if (process.env.NODE_ENV !== "production" && !pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  if (process.env.NODE_ENV !== "production" && !isVue2) {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (process.env.NODE_ENV !== "production") {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$2($state, newState);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    } : noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$2({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(process.env.NODE_ENV !== "production" || USE_DEVTOOLS ? assign$2(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    partialStore
    // must be added later
    // setupStore
  ) : partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (process.env.NODE_ENV !== "production" && hot) {
        set(hotState.value, key, toRef(setupStore, key));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.state.push(key);
      }
    } else if (typeof prop === "function") {
      const actionValue = process.env.NODE_ENV !== "production" && hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    } else if (process.env.NODE_ENV !== "production") {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore ? (
          // @ts-expect-error
          options.getters[key]
        ) : prop;
      }
    }
  }
  {
    assign$2(store, setupStore);
    assign$2(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => process.env.NODE_ENV !== "production" && hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (process.env.NODE_ENV !== "production" && hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign$2($state, state);
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject$1(newStateTarget) && isPlainObject$1(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? (
          // special handling of options api
          computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          })
        ) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  if (USE_DEVTOOLS) {
    const nonEnumerable = {
      writable: true,
      configurable: true,
      // avoid warning on devtools trying to display this property
      enumerable: false
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
      Object.defineProperty(store, p, assign$2({ value: store[p] }, nonEnumerable));
    });
  }
  pinia._p.forEach((extender) => {
    if (USE_DEVTOOLS) {
      const extensions = scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
      assign$2(store, extensions);
    } else {
      assign$2(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (process.env.NODE_ENV !== "production" && store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
    if (process.env.NODE_ENV !== "production" && typeof id !== "string") {
      throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
    }
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && activePinia && activePinia._testing ? null : pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    if (process.env.NODE_ENV !== "production" && !activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      if (process.env.NODE_ENV !== "production") {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (process.env.NODE_ENV !== "production" && hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign$2({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    if (process.env.NODE_ENV !== "production" && IS_CLIENT) {
      const currentInstance = getCurrentInstance();
      if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache2 = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache2[id] = store;
      }
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_QKWDBuGpcc = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = false;
let mark;
let measure;
if (process.env.NODE_ENV !== "production")
  ;
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
function format$1(message, ...args) {
  if (args.length === 1 && isObject(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : "";
  });
}
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => {
  if (!isObject(val))
    return false;
  const proto = Object.getPrototypeOf(val);
  return proto === null || proto.constructor === Object;
};
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
  return items.reduce((str, item, index3) => index3 === 0 ? str + item : str + separator + item, "");
}
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j2 = i - RANGE; j2 <= i + RANGE || end > count; j2++) {
        if (j2 < 0 || j2 >= lines.length)
          continue;
        const line = j2 + 1;
        res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j2]}`);
        const lineLength = lines[j2].length;
        if (j2 === i) {
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j2 > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function incrementer(code2) {
  let current = code2;
  return () => ++current;
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const hasWarned = {};
function warnOnce(msg) {
  if (!hasWarned[msg]) {
    hasWarned[msg] = true;
    warn(msg);
  }
}
function createEmitter() {
  const events = /* @__PURE__ */ new Map();
  const emitter = {
    events,
    on(event, handler2) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler2);
      if (!added) {
        events.set(event, [handler2]);
      }
    },
    off(event, handler2) {
      const handlers = events.get(event);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler2) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map((handler2) => handler2(payload));
      (events.get("*") || []).slice().map((handler2) => handler2(event, payload));
    }
  };
  return emitter;
}
var sourceMapGenerator = {};
var base64Vlq = {};
var base64$1 = {};
var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
base64$1.encode = function(number2) {
  if (0 <= number2 && number2 < intToCharMap.length) {
    return intToCharMap[number2];
  }
  throw new TypeError("Must be between 0 and 63: " + number2);
};
base64$1.decode = function(charCode) {
  var bigA = 65;
  var bigZ = 90;
  var littleA = 97;
  var littleZ = 122;
  var zero = 48;
  var nine = 57;
  var plus = 43;
  var slash = 47;
  var littleOffset = 26;
  var numberOffset = 52;
  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  }
  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  }
  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  }
  if (charCode == plus) {
    return 62;
  }
  if (charCode == slash) {
    return 63;
  }
  return -1;
};
var base64 = base64$1;
var VLQ_BASE_SHIFT = 5;
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
var VLQ_BASE_MASK = VLQ_BASE - 1;
var VLQ_CONTINUATION_BIT = VLQ_BASE;
function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
base64Vlq.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);
  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);
  return encoded;
};
base64Vlq.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;
  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }
    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }
    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);
  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};
var util$5 = {};
(function(exports) {
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports.getArg = getArg;
  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;
  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }
  exports.urlParse = urlParse;
  function urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ":";
    }
    url += "//";
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + "@";
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port;
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports.urlGenerate = urlGenerate;
  var MAX_CACHED_INPUTS = 32;
  function lruMemoize(f2) {
    var cache2 = [];
    return function(input) {
      for (var i = 0; i < cache2.length; i++) {
        if (cache2[i].input === input) {
          var temp = cache2[0];
          cache2[0] = cache2[i];
          cache2[i] = temp;
          return cache2[0].result;
        }
      }
      var result = f2(input);
      cache2.unshift({
        input,
        result
      });
      if (cache2.length > MAX_CACHED_INPUTS) {
        cache2.pop();
      }
      return result;
    };
  }
  var normalize = lruMemoize(function normalize2(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
      if (!url.path) {
        return aPath;
      }
      path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = [];
    var start = 0;
    var i = 0;
    while (true) {
      start = i;
      i = path.indexOf("/", start);
      if (i === -1) {
        parts.push(path.slice(start));
        break;
      } else {
        parts.push(path.slice(start, i));
        while (i < path.length && path[i] === "/") {
          i++;
        }
      }
    }
    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];
      if (part === ".") {
        parts.splice(i, 1);
      } else if (part === "..") {
        up++;
      } else if (up > 0) {
        if (part === "") {
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }
    path = parts.join("/");
    if (path === "") {
      path = isAbsolute ? "/" : ".";
    }
    if (url) {
      url.path = path;
      return urlGenerate(url);
    }
    return path;
  });
  exports.normalize = normalize;
  function join2(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    if (aPath === "") {
      aPath = ".";
    }
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
      aRoot = aRootUrl.path || "/";
    }
    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }
      return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    }
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }
    return joined;
  }
  exports.join = join2;
  exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
  };
  function relative(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    aRoot = aRoot.replace(/\/$/, "");
    var level = 0;
    while (aPath.indexOf(aRoot + "/") !== 0) {
      var index3 = aRoot.lastIndexOf("/");
      if (index3 < 0) {
        return aPath;
      }
      aRoot = aRoot.slice(0, index3);
      if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
        return aPath;
      }
      ++level;
    }
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
  }
  exports.relative = relative;
  var supportsNullProto = function() {
    var obj = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in obj);
  }();
  function identity(s2) {
    return s2;
  }
  function toSetString(aStr) {
    if (isProtoString(aStr)) {
      return "$" + aStr;
    }
    return aStr;
  }
  exports.toSetString = supportsNullProto ? identity : toSetString;
  function fromSetString(aStr) {
    if (isProtoString(aStr)) {
      return aStr.slice(1);
    }
    return aStr;
  }
  exports.fromSetString = supportsNullProto ? identity : fromSetString;
  function isProtoString(s2) {
    if (!s2) {
      return false;
    }
    var length = s2.length;
    if (length < 9) {
      return false;
    }
    if (s2.charCodeAt(length - 1) !== 95 || s2.charCodeAt(length - 2) !== 95 || s2.charCodeAt(length - 3) !== 111 || s2.charCodeAt(length - 4) !== 116 || s2.charCodeAt(length - 5) !== 111 || s2.charCodeAt(length - 6) !== 114 || s2.charCodeAt(length - 7) !== 112 || s2.charCodeAt(length - 8) !== 95 || s2.charCodeAt(length - 9) !== 95) {
      return false;
    }
    for (var i = length - 10; i >= 0; i--) {
      if (s2.charCodeAt(i) !== 36) {
        return false;
      }
    }
    return true;
  }
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByOriginalPositions = compareByOriginalPositions;
  function compareByOriginalPositionsNoSource(mappingA, mappingB, onlyCompareOriginal) {
    var cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByOriginalPositionsNoSource = compareByOriginalPositionsNoSource;
  function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
  function compareByGeneratedPositionsDeflatedNoLine(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsDeflatedNoLine = compareByGeneratedPositionsDeflatedNoLine;
  function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
      return 0;
    }
    if (aStr1 === null) {
      return 1;
    }
    if (aStr2 === null) {
      return -1;
    }
    if (aStr1 > aStr2) {
      return 1;
    }
    return -1;
  }
  function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
  function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
  }
  exports.parseSourceMapInput = parseSourceMapInput;
  function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || "";
    if (sourceRoot) {
      if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
        sourceRoot += "/";
      }
      sourceURL = sourceRoot + sourceURL;
    }
    if (sourceMapURL) {
      var parsed = urlParse(sourceMapURL);
      if (!parsed) {
        throw new Error("sourceMapURL could not be parsed");
      }
      if (parsed.path) {
        var index3 = parsed.path.lastIndexOf("/");
        if (index3 >= 0) {
          parsed.path = parsed.path.substring(0, index3 + 1);
        }
      }
      sourceURL = join2(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
  }
  exports.computeSourceURL = computeSourceURL;
})(util$5);
var arraySet = {};
var util$4 = util$5;
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
function ArraySet$2() {
  this._array = [];
  this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
ArraySet$2.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set2 = new ArraySet$2();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set2.add(aArray[i], aAllowDuplicates);
  }
  return set2;
};
ArraySet$2.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
ArraySet$2.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util$4.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};
ArraySet$2.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util$4.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};
ArraySet$2.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
      return idx;
    }
  } else {
    var sStr = util$4.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }
  throw new Error('"' + aStr + '" is not in the set.');
};
ArraySet$2.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error("No element indexed by " + aIdx);
};
ArraySet$2.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};
arraySet.ArraySet = ArraySet$2;
var mappingList = {};
var util$3 = util$5;
function generatedPositionAfter(mappingA, mappingB) {
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA || util$3.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
function MappingList$1() {
  this._array = [];
  this._sorted = true;
  this._last = { generatedLine: -1, generatedColumn: 0 };
}
MappingList$1.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
  this._array.forEach(aCallback, aThisArg);
};
MappingList$1.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};
MappingList$1.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util$3.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};
mappingList.MappingList = MappingList$1;
var base64VLQ$1 = base64Vlq;
var util$2 = util$5;
var ArraySet$1 = arraySet.ArraySet;
var MappingList = mappingList.MappingList;
function SourceMapGenerator$2(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util$2.getArg(aArgs, "file", null);
  this._sourceRoot = util$2.getArg(aArgs, "sourceRoot", null);
  this._skipValidation = util$2.getArg(aArgs, "skipValidation", false);
  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}
SourceMapGenerator$2.prototype._version = 3;
SourceMapGenerator$2.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
  var sourceRoot = aSourceMapConsumer.sourceRoot;
  var generator = new SourceMapGenerator$2({
    file: aSourceMapConsumer.file,
    sourceRoot
  });
  aSourceMapConsumer.eachMapping(function(mapping) {
    var newMapping = {
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn
      }
    };
    if (mapping.source != null) {
      newMapping.source = mapping.source;
      if (sourceRoot != null) {
        newMapping.source = util$2.relative(sourceRoot, newMapping.source);
      }
      newMapping.original = {
        line: mapping.originalLine,
        column: mapping.originalColumn
      };
      if (mapping.name != null) {
        newMapping.name = mapping.name;
      }
    }
    generator.addMapping(newMapping);
  });
  aSourceMapConsumer.sources.forEach(function(sourceFile) {
    var sourceRelative = sourceFile;
    if (sourceRoot !== null) {
      sourceRelative = util$2.relative(sourceRoot, sourceFile);
    }
    if (!generator._sources.has(sourceRelative)) {
      generator._sources.add(sourceRelative);
    }
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);
    if (content != null) {
      generator.setSourceContent(sourceFile, content);
    }
  });
  return generator;
};
SourceMapGenerator$2.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
  var generated = util$2.getArg(aArgs, "generated");
  var original = util$2.getArg(aArgs, "original", null);
  var source = util$2.getArg(aArgs, "source", null);
  var name = util$2.getArg(aArgs, "name", null);
  if (!this._skipValidation) {
    this._validateMapping(generated, original, source, name);
  }
  if (source != null) {
    source = String(source);
    if (!this._sources.has(source)) {
      this._sources.add(source);
    }
  }
  if (name != null) {
    name = String(name);
    if (!this._names.has(name)) {
      this._names.add(name);
    }
  }
  this._mappings.add({
    generatedLine: generated.line,
    generatedColumn: generated.column,
    originalLine: original != null && original.line,
    originalColumn: original != null && original.column,
    source,
    name
  });
};
SourceMapGenerator$2.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
  var source = aSourceFile;
  if (this._sourceRoot != null) {
    source = util$2.relative(this._sourceRoot, source);
  }
  if (aSourceContent != null) {
    if (!this._sourcesContents) {
      this._sourcesContents = /* @__PURE__ */ Object.create(null);
    }
    this._sourcesContents[util$2.toSetString(source)] = aSourceContent;
  } else if (this._sourcesContents) {
    delete this._sourcesContents[util$2.toSetString(source)];
    if (Object.keys(this._sourcesContents).length === 0) {
      this._sourcesContents = null;
    }
  }
};
SourceMapGenerator$2.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
  var sourceFile = aSourceFile;
  if (aSourceFile == null) {
    if (aSourceMapConsumer.file == null) {
      throw new Error(
        `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
      );
    }
    sourceFile = aSourceMapConsumer.file;
  }
  var sourceRoot = this._sourceRoot;
  if (sourceRoot != null) {
    sourceFile = util$2.relative(sourceRoot, sourceFile);
  }
  var newSources = new ArraySet$1();
  var newNames = new ArraySet$1();
  this._mappings.unsortedForEach(function(mapping) {
    if (mapping.source === sourceFile && mapping.originalLine != null) {
      var original = aSourceMapConsumer.originalPositionFor({
        line: mapping.originalLine,
        column: mapping.originalColumn
      });
      if (original.source != null) {
        mapping.source = original.source;
        if (aSourceMapPath != null) {
          mapping.source = util$2.join(aSourceMapPath, mapping.source);
        }
        if (sourceRoot != null) {
          mapping.source = util$2.relative(sourceRoot, mapping.source);
        }
        mapping.originalLine = original.line;
        mapping.originalColumn = original.column;
        if (original.name != null) {
          mapping.name = original.name;
        }
      }
    }
    var source = mapping.source;
    if (source != null && !newSources.has(source)) {
      newSources.add(source);
    }
    var name = mapping.name;
    if (name != null && !newNames.has(name)) {
      newNames.add(name);
    }
  }, this);
  this._sources = newSources;
  this._names = newNames;
  aSourceMapConsumer.sources.forEach(function(sourceFile2) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
    if (content != null) {
      if (aSourceMapPath != null) {
        sourceFile2 = util$2.join(aSourceMapPath, sourceFile2);
      }
      if (sourceRoot != null) {
        sourceFile2 = util$2.relative(sourceRoot, sourceFile2);
      }
      this.setSourceContent(sourceFile2, content);
    }
  }, this);
};
SourceMapGenerator$2.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
  if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
    throw new Error(
      "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
    );
  }
  if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
    return;
  } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
    return;
  } else {
    throw new Error("Invalid mapping: " + JSON.stringify({
      generated: aGenerated,
      source: aSource,
      original: aOriginal,
      name: aName
    }));
  }
};
SourceMapGenerator$2.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
  var previousGeneratedColumn = 0;
  var previousGeneratedLine = 1;
  var previousOriginalColumn = 0;
  var previousOriginalLine = 0;
  var previousName = 0;
  var previousSource = 0;
  var result = "";
  var next;
  var mapping;
  var nameIdx;
  var sourceIdx;
  var mappings = this._mappings.toArray();
  for (var i = 0, len = mappings.length; i < len; i++) {
    mapping = mappings[i];
    next = "";
    if (mapping.generatedLine !== previousGeneratedLine) {
      previousGeneratedColumn = 0;
      while (mapping.generatedLine !== previousGeneratedLine) {
        next += ";";
        previousGeneratedLine++;
      }
    } else {
      if (i > 0) {
        if (!util$2.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
          continue;
        }
        next += ",";
      }
    }
    next += base64VLQ$1.encode(mapping.generatedColumn - previousGeneratedColumn);
    previousGeneratedColumn = mapping.generatedColumn;
    if (mapping.source != null) {
      sourceIdx = this._sources.indexOf(mapping.source);
      next += base64VLQ$1.encode(sourceIdx - previousSource);
      previousSource = sourceIdx;
      next += base64VLQ$1.encode(mapping.originalLine - 1 - previousOriginalLine);
      previousOriginalLine = mapping.originalLine - 1;
      next += base64VLQ$1.encode(mapping.originalColumn - previousOriginalColumn);
      previousOriginalColumn = mapping.originalColumn;
      if (mapping.name != null) {
        nameIdx = this._names.indexOf(mapping.name);
        next += base64VLQ$1.encode(nameIdx - previousName);
        previousName = nameIdx;
      }
    }
    result += next;
  }
  return result;
};
SourceMapGenerator$2.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
  return aSources.map(function(source) {
    if (!this._sourcesContents) {
      return null;
    }
    if (aSourceRoot != null) {
      source = util$2.relative(aSourceRoot, source);
    }
    var key = util$2.toSetString(source);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
  }, this);
};
SourceMapGenerator$2.prototype.toJSON = function SourceMapGenerator_toJSON() {
  var map = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  if (this._file != null) {
    map.file = this._file;
  }
  if (this._sourceRoot != null) {
    map.sourceRoot = this._sourceRoot;
  }
  if (this._sourcesContents) {
    map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
  }
  return map;
};
SourceMapGenerator$2.prototype.toString = function SourceMapGenerator_toString() {
  return JSON.stringify(this.toJSON());
};
sourceMapGenerator.SourceMapGenerator = SourceMapGenerator$2;
var binarySearch$1 = {};
(function(exports) {
  exports.GREATEST_LOWER_BOUND = 1;
  exports.LEAST_UPPER_BOUND = 2;
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      return mid;
    } else if (cmp > 0) {
      if (aHigh - mid > 1) {
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return aHigh < aHaystack.length ? aHigh : -1;
      } else {
        return mid;
      }
    } else {
      if (mid - aLow > 1) {
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return mid;
      } else {
        return aLow < 0 ? -1 : aLow;
      }
    }
  }
  exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
      return -1;
    }
    var index3 = recursiveSearch(
      -1,
      aHaystack.length,
      aNeedle,
      aHaystack,
      aCompare,
      aBias || exports.GREATEST_LOWER_BOUND
    );
    if (index3 < 0) {
      return -1;
    }
    while (index3 - 1 >= 0) {
      if (aCompare(aHaystack[index3], aHaystack[index3 - 1], true) !== 0) {
        break;
      }
      --index3;
    }
    return index3;
  };
})(binarySearch$1);
var quickSort$1 = {};
function SortTemplate(comparator) {
  function swap(ary, x2, y) {
    var temp = ary[x2];
    ary[x2] = ary[y];
    ary[y] = temp;
  }
  function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
  }
  function doQuickSort(ary, comparator2, p, r) {
    if (p < r) {
      var pivotIndex = randomIntInRange(p, r);
      var i = p - 1;
      swap(ary, pivotIndex, r);
      var pivot = ary[r];
      for (var j2 = p; j2 < r; j2++) {
        if (comparator2(ary[j2], pivot, false) <= 0) {
          i += 1;
          swap(ary, i, j2);
        }
      }
      swap(ary, i + 1, j2);
      var q = i + 1;
      doQuickSort(ary, comparator2, p, q - 1);
      doQuickSort(ary, comparator2, q + 1, r);
    }
  }
  return doQuickSort;
}
function cloneSort(comparator) {
  let template = SortTemplate.toString();
  let templateFn = new Function(`return ${template}`)();
  return templateFn(comparator);
}
let sortCache = /* @__PURE__ */ new WeakMap();
quickSort$1.quickSort = function(ary, comparator, start = 0) {
  let doQuickSort = sortCache.get(comparator);
  if (doQuickSort === void 0) {
    doQuickSort = cloneSort(comparator);
    sortCache.set(comparator, doQuickSort);
  }
  doQuickSort(ary, comparator, start, ary.length - 1);
};
var util$1 = util$5;
var binarySearch = binarySearch$1;
var ArraySet = arraySet.ArraySet;
var base64VLQ = base64Vlq;
var quickSort = quickSort$1.quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = util$1.parseSourceMapInput(aSourceMap);
  }
  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
SourceMapConsumer.prototype._version = 3;
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__originalMappings;
  }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index3) {
  var c = aStr.charAt(index3);
  return c === ";" || c === ",";
};
SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;
  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
  }
  var sourceRoot = this.sourceRoot;
  var boundCallback = aCallback.bind(context);
  var names = this._names;
  var sources = this._sources;
  var sourceMapURL = this._sourceMapURL;
  for (var i = 0, n2 = mappings.length; i < n2; i++) {
    var mapping = mappings[i];
    var source = mapping.source === null ? null : sources.at(mapping.source);
    source = util$1.computeSourceURL(sourceRoot, source, sourceMapURL);
    boundCallback({
      source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : names.at(mapping.name)
    });
  }
};
SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util$1.getArg(aArgs, "line");
  var needle = {
    source: util$1.getArg(aArgs, "source"),
    originalLine: line,
    originalColumn: util$1.getArg(aArgs, "column", 0)
  };
  needle.source = this._findSourceIndex(needle.source);
  if (needle.source < 0) {
    return [];
  }
  var mappings = [];
  var index3 = this._findMapping(
    needle,
    this._originalMappings,
    "originalLine",
    "originalColumn",
    util$1.compareByOriginalPositions,
    binarySearch.LEAST_UPPER_BOUND
  );
  if (index3 >= 0) {
    var mapping = this._originalMappings[index3];
    if (aArgs.column === void 0) {
      var originalLine = mapping.originalLine;
      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util$1.getArg(mapping, "generatedLine", null),
          column: util$1.getArg(mapping, "generatedColumn", null),
          lastColumn: util$1.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index3];
      }
    } else {
      var originalColumn = mapping.originalColumn;
      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util$1.getArg(mapping, "generatedLine", null),
          column: util$1.getArg(mapping, "generatedColumn", null),
          lastColumn: util$1.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index3];
      }
    }
  }
  return mappings;
};
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = util$1.parseSourceMapInput(aSourceMap);
  }
  var version2 = util$1.getArg(sourceMap, "version");
  var sources = util$1.getArg(sourceMap, "sources");
  var names = util$1.getArg(sourceMap, "names", []);
  var sourceRoot = util$1.getArg(sourceMap, "sourceRoot", null);
  var sourcesContent = util$1.getArg(sourceMap, "sourcesContent", null);
  var mappings = util$1.getArg(sourceMap, "mappings");
  var file = util$1.getArg(sourceMap, "file", null);
  if (version2 != this._version) {
    throw new Error("Unsupported version: " + version2);
  }
  if (sourceRoot) {
    sourceRoot = util$1.normalize(sourceRoot);
  }
  sources = sources.map(String).map(util$1.normalize).map(function(source) {
    return sourceRoot && util$1.isAbsolute(sourceRoot) && util$1.isAbsolute(source) ? util$1.relative(sourceRoot, source) : source;
  });
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this._absoluteSources = this._sources.toArray().map(function(s2) {
    return util$1.computeSourceURL(sourceRoot, s2, aSourceMapURL);
  });
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util$1.relative(this.sourceRoot, relativeSource);
  }
  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }
  return -1;
};
BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(
    smc._sources.toArray(),
    smc.sourceRoot
  );
  smc.file = aSourceMap._file;
  smc._sourceMapURL = aSourceMapURL;
  smc._absoluteSources = smc._sources.toArray().map(function(s2) {
    return util$1.computeSourceURL(smc.sourceRoot, s2, aSourceMapURL);
  });
  var generatedMappings = aSourceMap._mappings.toArray().slice();
  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];
  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;
    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;
      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }
      destOriginalMappings.push(destMapping);
    }
    destGeneratedMappings.push(destMapping);
  }
  quickSort(smc.__originalMappings, util$1.compareByOriginalPositions);
  return smc;
};
BasicSourceMapConsumer.prototype._version = 3;
Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
  get: function() {
    return this._absoluteSources.slice();
  }
});
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
const compareGenerated = util$1.compareByGeneratedPositionsDeflatedNoLine;
function sortGenerated(array, start) {
  let l2 = array.length;
  let n2 = array.length - start;
  if (n2 <= 1) {
    return;
  } else if (n2 == 2) {
    let a2 = array[start];
    let b = array[start + 1];
    if (compareGenerated(a2, b) > 0) {
      array[start] = b;
      array[start + 1] = a2;
    }
  } else if (n2 < 20) {
    for (let i = start; i < l2; i++) {
      for (let j2 = i; j2 > start; j2--) {
        let a2 = array[j2 - 1];
        let b = array[j2];
        if (compareGenerated(a2, b) <= 0) {
          break;
        }
        array[j2 - 1] = b;
        array[j2] = a2;
      }
    }
  } else {
    quickSort(array, compareGenerated, start);
  }
}
BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings2(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index3 = 0;
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, segment, end, value;
  let subarrayStart = 0;
  while (index3 < length) {
    if (aStr.charAt(index3) === ";") {
      generatedLine++;
      index3++;
      previousGeneratedColumn = 0;
      sortGenerated(generatedMappings, subarrayStart);
      subarrayStart = generatedMappings.length;
    } else if (aStr.charAt(index3) === ",") {
      index3++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine;
      for (end = index3; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }
      aStr.slice(index3, end);
      segment = [];
      while (index3 < end) {
        base64VLQ.decode(aStr, index3, temp);
        value = temp.value;
        index3 = temp.rest;
        segment.push(value);
      }
      if (segment.length === 2) {
        throw new Error("Found a source, but no line and column");
      }
      if (segment.length === 3) {
        throw new Error("Found a source and line, but no column");
      }
      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;
      if (segment.length > 1) {
        mapping.source = previousSource + segment[1];
        previousSource += segment[1];
        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine;
        mapping.originalLine += 1;
        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;
        if (segment.length > 4) {
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }
      generatedMappings.push(mapping);
      if (typeof mapping.originalLine === "number") {
        let currentSource = mapping.source;
        while (originalMappings.length <= currentSource) {
          originalMappings.push(null);
        }
        if (originalMappings[currentSource] === null) {
          originalMappings[currentSource] = [];
        }
        originalMappings[currentSource].push(mapping);
      }
    }
  }
  sortGenerated(generatedMappings, subarrayStart);
  this.__generatedMappings = generatedMappings;
  for (var i = 0; i < originalMappings.length; i++) {
    if (originalMappings[i] != null) {
      quickSort(originalMappings[i], util$1.compareByOriginalPositionsNoSource);
    }
  }
  this.__originalMappings = [].concat(...originalMappings);
};
BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
  }
  if (aNeedle[aColumnName] < 0) {
    throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
  }
  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index3 = 0; index3 < this._generatedMappings.length; ++index3) {
    var mapping = this._generatedMappings[index3];
    if (index3 + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index3 + 1];
      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    }
    mapping.lastGeneratedColumn = Infinity;
  }
};
BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util$1.getArg(aArgs, "line"),
    generatedColumn: util$1.getArg(aArgs, "column")
  };
  var index3 = this._findMapping(
    needle,
    this._generatedMappings,
    "generatedLine",
    "generatedColumn",
    util$1.compareByGeneratedPositionsDeflated,
    util$1.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
  );
  if (index3 >= 0) {
    var mapping = this._generatedMappings[index3];
    if (mapping.generatedLine === needle.generatedLine) {
      var source = util$1.getArg(mapping, "source", null);
      if (source !== null) {
        source = this._sources.at(source);
        source = util$1.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
      }
      var name = util$1.getArg(mapping, "name", null);
      if (name !== null) {
        name = this._names.at(name);
      }
      return {
        source,
        line: util$1.getArg(mapping, "originalLine", null),
        column: util$1.getArg(mapping, "originalColumn", null),
        name
      };
    }
  }
  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }
  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
    return sc == null;
  });
};
BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }
  var index3 = this._findSourceIndex(aSource);
  if (index3 >= 0) {
    return this.sourcesContent[index3];
  }
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util$1.relative(this.sourceRoot, relativeSource);
  }
  var url;
  if (this.sourceRoot != null && (url = util$1.urlParse(this.sourceRoot))) {
    var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }
    if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + relativeSource + '" is not in the SourceMap.');
  }
};
BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util$1.getArg(aArgs, "source");
  source = this._findSourceIndex(source);
  if (source < 0) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }
  var needle = {
    source,
    originalLine: util$1.getArg(aArgs, "line"),
    originalColumn: util$1.getArg(aArgs, "column")
  };
  var index3 = this._findMapping(
    needle,
    this._originalMappings,
    "originalLine",
    "originalColumn",
    util$1.compareByOriginalPositions,
    util$1.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
  );
  if (index3 >= 0) {
    var mapping = this._originalMappings[index3];
    if (mapping.source === needle.source) {
      return {
        line: util$1.getArg(mapping, "generatedLine", null),
        column: util$1.getArg(mapping, "generatedColumn", null),
        lastColumn: util$1.getArg(mapping, "lastGeneratedColumn", null)
      };
    }
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = util$1.parseSourceMapInput(aSourceMap);
  }
  var version2 = util$1.getArg(sourceMap, "version");
  var sections = util$1.getArg(sourceMap, "sections");
  if (version2 != this._version) {
    throw new Error("Unsupported version: " + version2);
  }
  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function(s2) {
    if (s2.url) {
      throw new Error("Support for url field in sections not implemented.");
    }
    var offset = util$1.getArg(s2, "offset");
    var offsetLine = util$1.getArg(offset, "line");
    var offsetColumn = util$1.getArg(offset, "column");
    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error("Section offsets must be ordered and non-overlapping.");
    }
    lastOffset = offset;
    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util$1.getArg(s2, "map"), aSourceMapURL)
    };
  });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
IndexedSourceMapConsumer.prototype._version = 3;
Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
  get: function() {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j2 = 0; j2 < this._sections[i].consumer.sources.length; j2++) {
        sources.push(this._sections[i].consumer.sources[j2]);
      }
    }
    return sources;
  }
});
IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util$1.getArg(aArgs, "line"),
    generatedColumn: util$1.getArg(aArgs, "column")
  };
  var sectionIndex = binarySearch.search(
    needle,
    this._sections,
    function(needle2, section2) {
      var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
      if (cmp) {
        return cmp;
      }
      return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
    }
  );
  var section = this._sections[sectionIndex];
  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }
  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function(s2) {
    return s2.consumer.hasContentsOfAllSources();
  });
};
IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);
    if (content) {
      return content;
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    if (section.consumer._findSourceIndex(util$1.getArg(aArgs, "source")) === -1) {
      continue;
    }
    var generatedPosition = section.consumer.generatedPositionFor(aArgs);
    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }
  return {
    line: null,
    column: null
  };
};
IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;
    for (var j2 = 0; j2 < sectionMappings.length; j2++) {
      var mapping = sectionMappings[j2];
      var source = section.consumer._sources.at(mapping.source);
      source = util$1.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
      this._sources.add(source);
      source = this._sources.indexOf(source);
      var name = null;
      if (mapping.name) {
        name = section.consumer._names.at(mapping.name);
        this._names.add(name);
        name = this._names.indexOf(name);
      }
      var adjustedMapping = {
        source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name
      };
      this.__generatedMappings.push(adjustedMapping);
      if (typeof adjustedMapping.originalLine === "number") {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }
  quickSort(this.__generatedMappings, util$1.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util$1.compareByOriginalPositions);
};
var SourceMapGenerator$1 = sourceMapGenerator.SourceMapGenerator;
var util = util$5;
var REGEX_NEWLINE = /(\r?\n)/;
var NEWLINE_CODE = 10;
var isSourceNode = "$$$isSourceNode$$$";
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null)
    this.add(aChunks);
}
SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
  var node = new SourceNode();
  var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
  var remainingLinesIndex = 0;
  var shiftNextLine = function() {
    var lineContents = getNextLine();
    var newLine = getNextLine() || "";
    return lineContents + newLine;
    function getNextLine() {
      return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
    }
  };
  var lastGeneratedLine = 1, lastGeneratedColumn = 0;
  var lastMapping = null;
  aSourceMapConsumer.eachMapping(function(mapping) {
    if (lastMapping !== null) {
      if (lastGeneratedLine < mapping.generatedLine) {
        addMappingWithCode(lastMapping, shiftNextLine());
        lastGeneratedLine++;
        lastGeneratedColumn = 0;
      } else {
        var nextLine = remainingLines[remainingLinesIndex] || "";
        var code2 = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
        addMappingWithCode(lastMapping, code2);
        lastMapping = mapping;
        return;
      }
    }
    while (lastGeneratedLine < mapping.generatedLine) {
      node.add(shiftNextLine());
      lastGeneratedLine++;
    }
    if (lastGeneratedColumn < mapping.generatedColumn) {
      var nextLine = remainingLines[remainingLinesIndex] || "";
      node.add(nextLine.substr(0, mapping.generatedColumn));
      remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
      lastGeneratedColumn = mapping.generatedColumn;
    }
    lastMapping = mapping;
  }, this);
  if (remainingLinesIndex < remainingLines.length) {
    if (lastMapping) {
      addMappingWithCode(lastMapping, shiftNextLine());
    }
    node.add(remainingLines.splice(remainingLinesIndex).join(""));
  }
  aSourceMapConsumer.sources.forEach(function(sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);
    if (content != null) {
      if (aRelativePath != null) {
        sourceFile = util.join(aRelativePath, sourceFile);
      }
      node.setSourceContent(sourceFile, content);
    }
  });
  return node;
  function addMappingWithCode(mapping, code2) {
    if (mapping === null || mapping.source === void 0) {
      node.add(code2);
    } else {
      var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
      node.add(new SourceNode(
        mapping.originalLine,
        mapping.originalColumn,
        source,
        code2,
        mapping.name
      ));
    }
  }
};
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function(chunk) {
      this.add(chunk);
    }, this);
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  } else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length - 1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  } else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    } else {
      if (chunk !== "") {
        aFn(chunk, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }
  }
};
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len - 1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  } else if (typeof lastChild === "string") {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  } else {
    this.children.push("".replace(aPattern, aReplacement));
  }
  return this;
};
SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
  this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
  for (var i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i][isSourceNode]) {
      this.children[i].walkSourceContents(aFn);
    }
  }
  var sources = Object.keys(this.sourceContents);
  for (var i = 0, len = sources.length; i < len; i++) {
    aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
  }
};
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function(chunk) {
    str += chunk;
  });
  return str;
};
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator$1(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function(chunk, original) {
    generated.code += chunk;
    if (original.source !== null && original.line !== null && original.column !== null) {
      if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function(sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });
  return { code: generated.code, map };
};
var SourceMapGenerator = sourceMapGenerator.SourceMapGenerator;
/*!
  * message-compiler v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const LOCATION_STUB = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 }
};
function createPosition(line, column, offset) {
  return { line, column, offset };
}
function createLocation(start, end, source) {
  const loc = { start, end };
  if (source != null) {
    loc.source = source;
  }
  return loc;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
};
const errorMessages$2 = {
  // tokenizer error messages
  [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
  [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
  [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
  [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
  [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
  [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
  [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
  [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
  [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
  [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
  // parser error messages
  [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
  [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`,
  // generator error messages
  [CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`,
  // minimizer error messages
  [CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'`
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages: messages2, args } = options;
  const msg = process.env.NODE_ENV !== "production" ? format$1((messages2 || errorMessages$2)[code2] || "", ...args || []) : code2;
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
function defaultOnError(error) {
  throw error;
}
const RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
const detectHtmlTag = (source) => RE_HTML_TAG.test(source);
const CHAR_SP = " ";
const CHAR_CR = "\r";
const CHAR_LF = "\n";
const CHAR_LS = String.fromCharCode(8232);
const CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = (index4) => _buf[index4] === CHAR_CR && _buf[index4 + 1] === CHAR_LF;
  const isLF = (index4) => _buf[index4] === CHAR_LF;
  const isPS = (index4) => _buf[index4] === CHAR_PS;
  const isLS = (index4) => _buf[index4] === CHAR_LS;
  const isLineEnd = (index4) => isCRLF(index4) || isLF(index4) || isPS(index4) || isLS(index4);
  const index3 = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index: index3,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek
  };
}
const EOF = void 0;
const DOT = ".";
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
  const location2 = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 14,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 14,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ""
  };
  const context = () => _context;
  const { onError } = options;
  function emitError(code2, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = location2 ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN$3,
        args
      });
      onError(err);
    }
  }
  function getToken(context2, type, value) {
    context2.endLoc = currentPosition();
    context2.currentType = type;
    const token = { type };
    if (location2) {
      token.loc = createLocation(context2.startLoc, context2.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = (context2) => getToken(
    context2,
    14
    /* TokenTypes.EOF */
  );
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return "";
    }
  }
  function peekSpaces(scnr) {
    let buf = "";
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc === 95;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function isNamedIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 8) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ".";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 9) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context2) {
    const { currentType } = context2;
    if (!(currentType === 8 || currentType === 12)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 10) {
      return false;
    }
    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" || ch === "%" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      } else {
        return isIdentifierStart(ch);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|";
    scnr.resetPeek();
    return ret;
  }
  function detectModuloStart(scnr) {
    const spaces = peekSpaces(scnr);
    const ret = scnr.currentPeek() === "%" && scnr.peek() === "{";
    scnr.resetPeek();
    return {
      isModulo: ret,
      hasSpace: spaces.length > 0
    };
  }
  function isTextStart(scnr, reset = true) {
    const fn = (hasSpace = false, prev = "", detectModulo = false) => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return prev === "%" ? false : hasSpace;
      } else if (ch === "@" || !ch) {
        return prev === "%" ? true : hasSpace;
      } else if (ch === "%") {
        scnr.peek();
        return fn(hasSpace, "%", true);
      } else if (ch === "|") {
        return prev === "%" || detectModulo ? true : !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP, detectModulo);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF, detectModulo);
      } else {
        return true;
      }
    };
    const ret = fn();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function takeIdentifierChar(scnr) {
    const closure = (ch) => {
      const cc = ch.charCodeAt(0);
      return cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || // _
      cc === 36;
    };
    return takeChar(scnr, closure);
  }
  function takeDigit(scnr) {
    const closure = (ch) => {
      const cc = ch.charCodeAt(0);
      return cc >= 48 && cc <= 57;
    };
    return takeChar(scnr, closure);
  }
  function takeHexDigit(scnr) {
    const closure = (ch) => {
      const cc = ch.charCodeAt(0);
      return cc >= 48 && cc <= 57 || // 0-9
      cc >= 65 && cc <= 70 || // A-F
      cc >= 97 && cc <= 102;
    };
    return takeChar(scnr, closure);
  }
  function getDigits(scnr) {
    let ch = "";
    let num = "";
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readModulo(scnr) {
    skipSpaces(scnr);
    const ch = scnr.currentChar();
    if (ch !== "%") {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
    }
    scnr.next();
    return "%";
  }
  function readText(scnr) {
    let buf = "";
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
        break;
      } else if (ch === "%") {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else {
          break;
        }
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let name = "";
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = "";
    if (scnr.currentChar() === "-") {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    eat(scnr, `'`);
    let ch = "";
    let literal = "";
    const fn = (x2) => x2 !== LITERAL_DELIMITER && x2 !== CHAR_LF;
    while (ch = takeChar(scnr, fn)) {
      if (ch === "\\") {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      if (current === CHAR_LF) {
        scnr.next();
        eat(scnr, `'`);
      }
      return literal;
    }
    eat(scnr, `'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case "\\":
      case `'`:
        scnr.next();
        return `\\${ch}`;
      case "u":
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case "U":
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return "";
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = "";
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let identifiers = "";
    const closure = (ch2) => ch2 !== "{" && ch2 !== "}" && ch2 !== CHAR_SP && ch2 !== CHAR_LF;
    while (ch = takeChar(scnr, closure)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = "";
    let name = "";
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    return name;
  }
  function readLinkedRefer(scnr) {
    const fn = (detect = false, buf) => {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "%" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn(detect, buf);
      } else {
        buf += ch;
        scnr.next();
        return fn(true, buf);
      }
    };
    return fn(false, "");
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(
      scnr,
      "|"
      /* TokenChars.Pipe */
    );
    skipSpaces(scnr);
    return plural;
  }
  function readTokenInPlaceholder(scnr, context2) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        if (context2.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          2,
          "{"
          /* TokenChars.BraceLeft */
        );
        skipSpaces(scnr);
        context2.braceNest++;
        return token;
      case "}":
        if (context2.braceNest > 0 && context2.currentType === 2) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
        context2.braceNest--;
        context2.braceNest > 0 && skipSpaces(scnr);
        if (context2.inLinked && context2.braceNest === 0) {
          context2.inLinked = false;
        }
        return token;
      case "@":
        if (context2.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context2) || getEndToken(context2);
        context2.braceNest = 0;
        return token;
      default:
        let validNamedIdentifier = true;
        let validListIdentifier = true;
        let validLiteral = true;
        if (isPluralStart(scnr)) {
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (context2.braceNest > 0 && (context2.currentType === 5 || context2.currentType === 6 || context2.currentType === 7)) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          context2.braceNest = 0;
          return readToken(scnr, context2);
        }
        if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
          token = getToken(context2, 5, readNamedIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
          token = getToken(context2, 6, readListIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validLiteral = isLiteralStart(scnr, context2)) {
          token = getToken(context2, 7, readLiteral(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
          token = getToken(context2, 13, readInvalidIdentifier(scnr));
          emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
          skipSpaces(scnr);
          return token;
        }
        break;
    }
    return token;
  }
  function readTokenInLinked(scnr, context2) {
    const { currentType } = context2;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 8 || currentType === 9 || currentType === 12 || currentType === 10) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@":
        scnr.next();
        token = getToken(
          context2,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        );
        context2.inLinked = true;
        return token;
      case ".":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context2);
        }
        if (isLinkedModifierStart(scnr, context2)) {
          skipSpaces(scnr);
          return getToken(context2, 12, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context2)) {
          skipSpaces(scnr);
          if (ch === "{") {
            return readTokenInPlaceholder(scnr, context2) || token;
          } else {
            return getToken(context2, 11, readLinkedRefer(scnr));
          }
        }
        if (currentType === 8) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context2.braceNest = 0;
        context2.inLinked = false;
        return readToken(scnr, context2);
    }
  }
  function readToken(scnr, context2) {
    let token = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (context2.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
    }
    if (context2.inLinked) {
      return readTokenInLinked(scnr, context2) || getEndToken(context2);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      case "}":
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        const { isModulo, hasSpace } = detectModuloStart(scnr);
        if (isModulo) {
          return hasSpace ? getToken(context2, 0, readText(scnr)) : getToken(context2, 4, readModulo(scnr));
        }
        if (isTextStart(scnr)) {
          return getToken(context2, 0, readText(scnr));
        }
        break;
    }
    return token;
  }
  function nextToken() {
    const { currentType, offset, startLoc, endLoc } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(
        _context,
        14
        /* TokenTypes.EOF */
      );
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN$2 = "parser";
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    case `\\'`:
      return `'`;
    default: {
      const codePoint = parseInt(codePoint4 || codePoint6, 16);
      if (codePoint <= 55295 || codePoint >= 57344) {
        return String.fromCodePoint(codePoint);
      }
      return "�";
    }
  }
}
function createParser(options = {}) {
  const location2 = options.location !== false;
  const { onError } = options;
  function emitError(tokenzer, code2, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = location2 ? createLocation(start, end) : null;
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN$2,
        args
      });
      onError(err);
    }
  }
  function startNode(type, offset, loc) {
    const node = { type };
    if (location2) {
      node.start = offset;
      node.end = offset;
      node.loc = { start: loc, end: loc };
    }
    return node;
  }
  function endNode(node, offset, pos, type) {
    if (type) {
      node.type = type;
    }
    if (location2) {
      node.end = offset;
      if (node.loc) {
        node.loc.end = pos;
      }
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index3) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(5, offset, loc);
    node.index = parseInt(index3, 10);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(4, offset, loc);
    node.key = key;
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(9, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(8, offset, loc);
    if (token.type !== 12) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = "";
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || "";
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 9) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    if (token.type !== 10) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    if (token.type === 2) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 11:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
        break;
      case 5:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || "");
        break;
      case 6:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || "");
        break;
      case 7:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || "");
        break;
      default:
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
        const nextContext = tokenizer.context();
        const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
        emptyLinkedKeyNode.value = "";
        endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
        linkedNode.key = emptyLinkedKeyNode;
        endNode(linkedNode, nextContext.offset, nextContext.startLoc);
        return {
          nextConsumeToken: token,
          node: linkedNode
        };
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
    const node = startNode(2, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ""));
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ""));
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || ""));
          break;
        case 7:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ""));
          break;
        case 8:
          const parsed = parseLinked(tokenizer);
          node.items.push(parsed.node);
          nextToken = parsed.nextConsumeToken || null;
          break;
      }
    } while (context.currentType !== 14 && context.currentType !== 1);
    const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 14);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const { offset, startLoc } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 14) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset, startLoc, msgNode);
    }
  }
  function parse2(source) {
    const tokenizer = createTokenizer(source, assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0, context.offset, context.startLoc);
    if (location2 && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (options.onCacheKey) {
      node.cacheKey = options.onCacheKey(source);
    }
    if (context.currentType !== 14) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return { parse: parse2 };
}
function getTokenCaption(token) {
  if (token.type === 14) {
    return "EOF";
  }
  const name = (token.value || "").replace(/\r?\n/gu, "\\n");
  return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
  const _context = {
    ast,
    helpers: /* @__PURE__ */ new Set()
  };
  const context = () => _context;
  const helper = (name) => {
    _context.helpers.add(name);
    return name;
  };
  return { context, helper };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++) {
    traverseNode(nodes[i], transformer);
  }
}
function traverseNode(node, transformer) {
  switch (node.type) {
    case 1:
      traverseNodes(node.cases, transformer);
      transformer.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      traverseNodes(node.items, transformer);
      break;
    case 6:
      const linked = node;
      traverseNode(linked.key, transformer);
      transformer.helper(
        "linked"
        /* HelperNameMap.LINKED */
      );
      transformer.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    case 5:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function transform(ast, options = {}) {
  const transformer = createTransformer(ast);
  transformer.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  );
  ast.body && traverseNode(ast.body, transformer);
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2) {
    optimizeMessageNode(body);
  } else {
    body.cases.forEach((c) => optimizeMessageNode(c));
  }
  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 || item.type === 9) {
      message.static = item.value;
      delete item.value;
    }
  } else {
    const values = [];
    for (let i = 0; i < message.items.length; i++) {
      const item = message.items[i];
      if (!(item.type === 3 || item.type === 9)) {
        break;
      }
      if (item.value == null) {
        break;
      }
      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = join(values);
      for (let i = 0; i < message.items.length; i++) {
        const item = message.items[i];
        if (item.type === 3 || item.type === 9) {
          delete item.value;
        }
      }
    }
  }
}
const ERROR_DOMAIN$1 = "minifier";
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0:
      const resource2 = node;
      minify(resource2.body);
      resource2.b = resource2.body;
      delete resource2.body;
      break;
    case 1:
      const plural = node;
      const cases = plural.cases;
      for (let i = 0; i < cases.length; i++) {
        minify(cases[i]);
      }
      plural.c = cases;
      delete plural.cases;
      break;
    case 2:
      const message = node;
      const items = message.items;
      for (let i = 0; i < items.length; i++) {
        minify(items[i]);
      }
      message.i = items;
      delete message.items;
      if (message.static) {
        message.s = message.static;
        delete message.static;
      }
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const valueNode = node;
      if (valueNode.value) {
        valueNode.v = valueNode.value;
        delete valueNode.value;
      }
      break;
    case 6:
      const linked = node;
      minify(linked.key);
      linked.k = linked.key;
      delete linked.key;
      if (linked.modifier) {
        minify(linked.modifier);
        linked.m = linked.modifier;
        delete linked.modifier;
      }
      break;
    case 5:
      const list = node;
      list.i = list.index;
      delete list.index;
      break;
    case 4:
      const named = node;
      named.k = named.key;
      delete named.key;
      break;
    default:
      if (process.env.NODE_ENV !== "production") {
        throw createCompileError(CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: ERROR_DOMAIN$1,
          args: [node.type]
        });
      }
  }
  delete node.type;
}
const ERROR_DOMAIN = "parser";
function createCodeGenerator(ast, options) {
  const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
  const location2 = options.location !== false;
  const _context = {
    filename,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  if (location2 && ast.loc) {
    _context.source = ast.loc.source;
  }
  const context = () => _context;
  function push(code2, node) {
    _context.code += code2;
    if (_context.map) {
      if (node && node.loc && node.loc !== LOCATION_STUB) {
        addMapping(node.loc.start, getMappingName(node));
      }
      advancePositionWithSource(_context, code2);
    }
  }
  function _newline(n2, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : "";
    push(_needIndent ? _breakLineCode + `  `.repeat(n2) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = (key) => `_${key}`;
  const needIndent = () => _context.needIndent;
  function addMapping(loc, name) {
    _context.map.addMapping({
      name,
      source: _context.filename,
      original: {
        line: loc.line,
        column: loc.column - 1
      },
      generated: {
        line: _context.line,
        column: _context.column - 1
      }
    });
  }
  if (location2 && sourceMap) {
    _context.map = new SourceMapGenerator();
    _context.map.setSourceContent(filename, _context.source);
  }
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const { helper } = generator;
  generator.push(`${helper(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
    generator.push(`, _type`);
  } else {
    generator.push(`, undefined, _type`);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const { helper, needIndent } = generator;
  generator.push(`${helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1) {
      break;
    }
    generator.push(", ");
  }
  generator.deindent(needIndent());
  generator.push("])");
}
function generatePluralNode(generator, node) {
  const { helper, needIndent } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push("null");
  }
}
function generateNode(generator, node) {
  const { helper } = generator;
  switch (node.type) {
    case 0:
      generateResource(generator, node);
      break;
    case 1:
      generatePluralNode(generator, node);
      break;
    case 2:
      generateMessageNode(generator, node);
      break;
    case 6:
      generateLinkedNode(generator, node);
      break;
    case 8:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "list"
        /* HelperNameMap.LIST */
      )}(${node.index}))`, node);
      break;
    case 4:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3:
      generator.push(JSON.stringify(node.value), node);
      break;
    default:
      if (process.env.NODE_ENV !== "production") {
        throw createCompileError(CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: ERROR_DOMAIN,
          args: [node.type]
        });
      }
  }
}
const generate = (ast, options = {}) => {
  const mode = isString(options.mode) ? options.mode : "normal";
  const filename = isString(options.filename) ? options.filename : "message.intl";
  const sourceMap = !!options.sourceMap;
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
  const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    mode,
    filename,
    sourceMap,
    breakLineCode,
    needIndent
  });
  generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${join(helpers.map((s2) => `${s2}: _${s2}`), ", ")} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  delete ast.helpers;
  const { code: code2, map } = generator.context();
  return {
    ast,
    code: code2,
    map: map ? map.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function getMappingName(node) {
  switch (node.type) {
    case 3:
    case 9:
    case 8:
    case 7:
      return node.value;
    case 5:
      return node.index.toString();
    case 4:
      return node.key;
    default:
      return void 0;
  }
}
function advancePositionWithSource(pos, source, numberOfCharacters = source.length) {
  let linesCount = 0;
  let lastNewLinePos = -1;
  for (let i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10) {
      linesCount++;
      lastNewLinePos = i;
    }
  }
  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}
function baseCompile$1(source, options = {}) {
  const assignedOptions = assign({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  } else {
    enambeOptimize && optimize(ast);
    enalbeMinify && minify(ast);
    return { ast, code: "" };
  }
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function initFeatureFlags$1() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
  if (typeof __INTLIFY_JIT_COMPILATION__ !== "boolean") {
    getGlobalThis().__INTLIFY_JIT_COMPILATION__ = false;
  }
  if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") {
    getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
  }
}
const pathStateMachine = [];
pathStateMachine[
  0
  /* States.BEFORE_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    0
    /* States.BEFORE_PATH */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* States.IN_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1
    /* States.IN_PATH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* States.BEFORE_IDENT */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  3
  /* States.IN_IDENT */
] = {
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    1
    /* Actions.PUSH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2,
    1
    /* Actions.PUSH */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    1
    /* Actions.PUSH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    1
    /* Actions.PUSH */
  ]
};
pathStateMachine[
  4
  /* States.IN_SUB_PATH */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ],
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* PathCharTypes.RIGHT_BRACKET */
  ]: [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a2 = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a2 === b && (a2 === 34 || a2 === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index3 = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* Actions.APPEND */
  ] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[
    1
    /* Actions.PUSH */
  ] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* Actions.APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* Actions.APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[
          1
          /* Actions.PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index3 + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index3++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* Actions.APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index3++;
    c = path[index3];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      "l"
      /* PathCharTypes.ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index3 = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index3 : index3;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages2) => {
    return messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index3) => _list[index3];
  const _named = options.named || {};
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction(options.messages) ? options.messages(key) : isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type2 = arg2 || type2;
      }
    }
    const ret = message(key)(ctx);
    const msg = (
      // The message in vnode resolved with linked are returned as an array by processor.nomalize
      type2 === "vnode" && isArray(ret) && modifier ? ret[0] : ret
    );
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    [
      "list"
      /* HelperNameMap.LIST */
    ]: list,
    [
      "named"
      /* HelperNameMap.NAMED */
    ]: named,
    [
      "plural"
      /* HelperNameMap.PLURAL */
    ]: plural,
    [
      "linked"
      /* HelperNameMap.LINKED */
    ]: linked,
    [
      "message"
      /* HelperNameMap.MESSAGE */
    ]: message,
    [
      "type"
      /* HelperNameMap.TYPE */
    ]: type,
    [
      "interpolate"
      /* HelperNameMap.INTERPOLATE */
    ]: interpolate,
    [
      "normalize"
      /* HelperNameMap.NORMALIZE */
    ]: normalize,
    [
      "values"
      /* HelperNameMap.VALUES */
    ]: assign({}, _list, _named)
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version2, meta) {
  devtools && devtools.emit("i18n:init", {
    timestamp: Date.now(),
    i18n,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
};
const warnMessages$1 = {
  [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
  [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
  [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
  [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: `This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.`
};
function getWarnMessage$1(code2, ...args) {
  return format$1(warnMessages$1[code2], ...args);
}
function getLocale(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
function resolveLocale(locale) {
  return isString(locale) ? locale : _resolveLocale != null && locale.resolvedOnce ? _resolveLocale : _resolveLocale = locale();
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults2 = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString(defaults2) ? [defaults2] : defaults2;
    if (isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale = block[i];
    if (isString(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.5.0";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const version2 = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = isFunction(locale) ? DEFAULT_LOCALE : locale;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages2 = isPlainObject(options.messages) ? options.messages : { [_locale]: {} };
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale]: {} };
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  if (process.env.NODE_ENV !== "production" && true && true && isFunction(options.messageCompiler)) {
    warnOnce(getWarnMessage$1(CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  }
  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
  const internalOptions = options;
  const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages: messages2,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  if (process.env.NODE_ENV !== "production") {
    context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
  }
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version2, __meta);
  }
  return context;
}
function isTranslateFallbackWarn(fallback, key) {
  return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
function isTranslateMissingWarn(missing, key) {
  return missing instanceof RegExp ? missing.test(key) : missing;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (process.env.NODE_ENV !== "production") {
    const emitter = context.__v_emitter;
    if (emitter) {
      emitter.emit("missing", {
        locale,
        key,
        type,
        groupId: `${type}:${key}`
      });
    }
  }
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString(ret) ? ret : key;
  } else {
    if (process.env.NODE_ENV !== "production" && isTranslateMissingWarn(missingWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.NOT_FOUND_KEY, { key, locale }));
    }
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
function format(ast) {
  const msg = (ctx) => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = ast.b || ast.body;
  if ((body.t || body.type) === 1) {
    const plural = body;
    const cases = plural.c || plural.cases;
    return ctx.plural(cases.reduce((messages2, c) => [
      ...messages2,
      formatMessageParts(ctx, c)
    ], []));
  } else {
    return formatMessageParts(ctx, body);
  }
}
function formatMessageParts(ctx, node) {
  const _static = node.s || node.static;
  if (_static) {
    return ctx.type === "text" ? _static : ctx.normalize([_static]);
  } else {
    const messages2 = (node.i || node.items).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
    return ctx.normalize(messages2);
  }
}
function formatMessagePart(ctx, node) {
  const type = node.t || node.type;
  switch (type) {
    case 3:
      const text = node;
      return text.v || text.value;
    case 9:
      const literal = node;
      return literal.v || literal.value;
    case 4:
      const named = node;
      return ctx.interpolate(ctx.named(named.k || named.key));
    case 5:
      const list = node;
      return ctx.interpolate(ctx.list(list.i != null ? list.i : list.index));
    case 6:
      const linked = node;
      const modifier = linked.m || linked.modifier;
      return ctx.linked(formatMessagePart(ctx, linked.k || linked.key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
    case 7:
      const linkedKey = node;
      return linkedKey.v || linkedKey.value;
    case 8:
      const linkedModifier = node;
      return linkedModifier.v || linkedModifier.value;
    default:
      throw new Error(`unhandled node type on format message part: ${type}`);
  }
}
const code$2 = CompileErrorCodes.__EXTEND_POINT__;
const inc$2 = incrementer(code$2);
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$2,
  INVALID_DATE_ARGUMENT: inc$2(),
  INVALID_ISO_DATE_ARGUMENT: inc$2(),
  NOT_SUPPORT_NON_STRING_MESSAGE: inc$2(),
  __EXTEND_POINT__: inc$2()
  // 22
};
function createCoreError(code2) {
  return createCompileError(code2, null, process.env.NODE_ENV !== "production" ? { messages: errorMessages$1 } : void 0);
}
const errorMessages$1 = {
  [CoreErrorCodes.INVALID_ARGUMENT]: "Invalid arguments",
  [CoreErrorCodes.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
};
const WARN_MESSAGE = `Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.`;
function checkHtmlMessage(source, warnHtmlMessage) {
  if (warnHtmlMessage && detectHtmlTag(source)) {
    warn(format$1(WARN_MESSAGE, { source }));
  }
}
const defaultOnCacheKey = (message) => message;
let compileCache = /* @__PURE__ */ Object.create(null);
const isMessageAST = (val) => isObject(val) && (val.t === 0 || val.type === 0) && ("b" in val || "body" in val);
function baseCompile(message, options = {}) {
  let detectError = false;
  const onError = options.onError || defaultOnError;
  options.onError = (err) => {
    detectError = true;
    onError(err);
  };
  return { ...baseCompile$1(message, options), detectError };
}
function compile(message, context) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && isString(message)) {
    const warnHtmlMessage = isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
    process.env.NODE_ENV !== "production" && checkHtmlMessage(message, warnHtmlMessage);
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    const { ast, detectError } = baseCompile(message, {
      ...context,
      location: process.env.NODE_ENV !== "production",
      jit: true
    });
    const msg = format(ast);
    return !detectError ? compileCache[cacheKey] = msg : msg;
  } else {
    if (process.env.NODE_ENV !== "production" && !isMessageAST(message)) {
      warn(`the message that is resolve with key '${context.key}' is not supported for jit compilation`);
      return () => message;
    }
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached) {
        return cached;
      }
      return compileCache[cacheKey] = format(message);
    } else {
      return format(message);
    }
  }
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages: messages2 } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = getLocale(context, options);
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages2[locale] || {}
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  if (process.env.NODE_ENV !== "production" && isString(format2) && context.messageCompiler == null) {
    warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
    return key;
  }
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages: messages2, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (process.env.NODE_ENV !== "production" && locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
        key,
        target: targetLocale
      }));
    }
    if (process.env.NODE_ENV !== "production" && locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`
        });
      }
    }
    message = messages2[targetLocale] || {};
    let start = null;
    let startTag;
    let endTag;
    if (process.env.NODE_ENV !== "production" && inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-resolve-start";
      endTag = "intlify-message-resolve-end";
    }
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (process.env.NODE_ENV !== "production" && inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start && format2) {
        emitter.emit("message-resolve", {
          type: "message-resolve",
          key,
          message: format2,
          time: end - start,
          groupId: `${type}:${key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message resolve", startTag, endTag);
      }
    }
    if (isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) {
      break;
    }
    const missingRet = handleMissing(
      context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      key,
      targetLocale,
      missingWarn,
      type
    );
    if (missingRet !== key) {
      format2 = missingRet;
    }
    from = to;
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  let start = null;
  let startTag;
  let endTag;
  if (process.env.NODE_ENV !== "production" && inBrowser) {
    start = window.performance.now();
    startTag = "intlify-message-compilation-start";
    endTag = "intlify-message-compilation-end";
  }
  const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
  if (process.env.NODE_ENV !== "production" && inBrowser) {
    const end = window.performance.now();
    const emitter = context.__v_emitter;
    if (emitter && start) {
      emitter.emit("message-compilation", {
        type: "message-compilation",
        message: format2,
        time: end - start,
        groupId: `${"translate"}:${key}`
      });
    }
    if (startTag && endTag && mark && measure) {
      mark(endTag);
      measure("intlify message compilation", startTag, endTag);
    }
  }
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  let start = null;
  let startTag;
  let endTag;
  if (process.env.NODE_ENV !== "production" && inBrowser) {
    start = window.performance.now();
    startTag = "intlify-message-evaluation-start";
    endTag = "intlify-message-evaluation-end";
  }
  const messaged = msg(msgCtx);
  if (process.env.NODE_ENV !== "production" && inBrowser) {
    const end = window.performance.now();
    const emitter = context.__v_emitter;
    if (emitter && start) {
      emitter.emit("message-evaluation", {
        type: "message-evaluation",
        value: messaged,
        time: end - start,
        groupId: `${"translate"}:${msg.key}`
      });
    }
    if (startTag && endTag && mark && measure) {
      mark(endTag);
      measure("intlify message evaluation", startTag, endTag);
    }
  }
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
  return {
    locale,
    key,
    warnHtmlMessage,
    onError: (err) => {
      onError && onError(err);
      if (process.env.NODE_ENV !== "production") {
        const _source = getSourceForCodeFrame(source);
        const message = `Message compilation error: ${err.message}`;
        const codeFrame = err.location && _source && generateCodeFrame(_source, err.location.start.offset, err.location.end.offset);
        const emitter = context.__v_emitter;
        if (emitter && _source) {
          emitter.emit("compile-error", {
            message: _source,
            error: err.message,
            start: err.location && err.location.start.offset,
            end: err.location && err.location.end.offset,
            groupId: `${"translate"}:${key}`
          });
        }
        console.error(codeFrame ? `${message}
${codeFrame}` : message);
      } else {
        throw err;
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
  };
}
function getSourceForCodeFrame(source) {
  var _a2;
  if (isString(source))
    ;
  else {
    if ((_a2 = source.loc) == null ? void 0 : _a2.source) {
      return source.loc.source;
    }
  }
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key) => {
    let val = resolveValue2(message, key);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key);
    }
    if (isString(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
const intlDefined = typeof Intl !== "undefined";
const Availabilities = {
  dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
  numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
};
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  if (process.env.NODE_ENV !== "production" && !Availabilities.dateTimeFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_DATE));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (process.env.NODE_ENV !== "production" && locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
        key,
        target: targetLocale
      }));
    }
    if (process.env.NODE_ENV !== "production" && locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`
        });
      }
    }
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  if (process.env.NODE_ENV !== "production" && !Availabilities.numberFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (process.env.NODE_ENV !== "production" && locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
        key,
        target: targetLocale
      }));
    }
    if (process.env.NODE_ENV !== "production" && locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key,
          from,
          to,
          groupId: `${type}:${key}`
        });
      }
    }
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  initFeatureFlags$1();
}
/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.5.0";
function initFeatureFlags() {
  if (typeof __INTLIFY_JIT_COMPILATION__ !== "boolean") {
    getGlobalThis().__INTLIFY_JIT_COMPILATION__ = false;
  }
  if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") {
    getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
  }
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
const code$1 = CoreWarnCodes.__EXTEND_POINT__;
const inc$1 = incrementer(code$1);
const I18nWarnCodes = {
  FALLBACK_TO_ROOT: code$1,
  NOT_SUPPORTED_PRESERVE: inc$1(),
  NOT_SUPPORTED_FORMATTER: inc$1(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
  NOT_FOUND_PARENT_SCOPE: inc$1(),
  IGNORE_OBJ_FLATTEN: inc$1(),
  NOTICE_DROP_ALLOW_COMPOSITION: inc$1()
  // 17
};
const warnMessages = {
  [I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE]: `Not supported 'preserve'.`,
  [I18nWarnCodes.NOT_SUPPORTED_FORMATTER]: `Not supported 'formatter'.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: `Not supported 'preserveDirectiveContent'.`,
  [I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX]: `Not supported 'getChoiceIndex'.`,
  [I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE]: `Component name legacy compatible: '{name}' -> 'i18n'`,
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`,
  [I18nWarnCodes.IGNORE_OBJ_FLATTEN]: `Ignore object flatten: '{key}' key has an string value`,
  [I18nWarnCodes.NOTICE_DROP_ALLOW_COMPOSITION]: `'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze`
};
function getWarnMessage(code2, ...args) {
  return format$1(warnMessages[code2], ...args);
}
const code = CoreErrorCodes.__EXTEND_POINT__;
const inc = incrementer(code);
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: code,
  // legacy module errors
  INVALID_ARGUMENT: inc(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSTALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  // directive module errors
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSTALLED_WITH_PROVIDE: inc(),
  // unexpected error
  UNEXPECTED_ERROR: inc(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  // for enhancement
  __EXTEND_POINT__: inc()
  // 37
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, process.env.NODE_ENV !== "production" ? { messages: errorMessages, args } : void 0);
}
const errorMessages = {
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [I18nErrorCodes.INVALID_ARGUMENT]: "Invalid argument",
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [I18nErrorCodes.NOT_INSTALLED]: "Need to install with `app.use` function",
  [I18nErrorCodes.UNEXPECTED_ERROR]: "Unexpected error",
  [I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
  [I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
  [I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [I18nErrorCodes.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
};
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const EnableEmitter = /* @__PURE__ */ makeSymbol("__enableEmitter");
const DisableEmitter = /* @__PURE__ */ makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
const DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        if (!isObject(currentObj[subKeys[i]])) {
          process.env.NODE_ENV !== "production" && warn(getWarnMessage(I18nWarnCodes.IGNORE_OBJ_FLATTEN, {
            key: subKeys[i]
          }));
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i]];
      }
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
      }
      if (isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages: messages2, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages2) ? messages2 : isArray(__i18n) ? {} : { [locale]: {} };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource: resource2 } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource2, ret[locale2]);
        } else {
          deepCopy(resource2, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  let messages2 = isObject(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages2 = getLocaleMessages(gl.locale.value, {
      messages: messages2,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages2);
  if (locales.length) {
    locales.forEach((locale) => {
      gl.mergeLocaleMessage(locale, messages2[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root, __injectWithOption } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    if (process.env.NODE_ENV !== "production") {
      ctxOptions.__v_emitter = isPlainObject(_context) ? _context.__v_emitter : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages2 = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler2) {
    _postTranslation = handler2;
    _context.postTranslation = handler2;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler2) {
    if (handler2 !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler2);
    }
    _missing = handler2;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type, arg) {
    return type !== "translate" || !arg.resolvedMessage;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    try {
      if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
        setAdditionalMeta(getMetaInfo());
      }
      if (!_isGlobal) {
        _context.fallbackContext = __root ? getFallbackContext() : void 0;
      }
      ret = fn(_context);
    } finally {
      if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
        setAdditionalMeta(null);
      }
      if (!_isGlobal) {
        _context.fallbackContext = void 0;
      }
    }
    if (isNumber(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      if (process.env.NODE_ENV !== "production" && __root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
        if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
          warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
            key,
            type: warnType
          }));
        }
        if (process.env.NODE_ENV !== "production") {
          const { __v_emitter: emitter } = _context;
          if (emitter && _fallbackRoot) {
            emitter.emit("fallback", {
              type: warnType,
              key,
              to: "global",
              groupId: `${warnType}:${key}`
            });
          }
        }
      }
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t2(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root3) => Reflect.apply(root3.t, root3, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t2(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d2(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root3) => Reflect.apply(root3.d, root3, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n2(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root3) => Reflect.apply(root3.n, root3, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root3) => root3[TranslateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => isArray(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root3) => root3[NumberPartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root3) => root3[DatetimePartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te2(key, locale2) {
    if (!key)
      return false;
    const targetLocale = isString(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages3 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages3 = messageValue;
        break;
      }
    }
    return messages3;
  }
  function tm(key) {
    const messages3 = resolveMessages(key);
    return messages3 != null ? messages3 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages: messages2,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t: t2,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te2;
    composer.tm = tm;
    composer.d = d2;
    composer.n = n2;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  if (process.env.NODE_ENV !== "production") {
    composer[EnableEmitter] = (emitter) => {
      _context.__v_emitter = emitter;
    };
    composer[DisableEmitter] = () => {
      _context.__v_emitter = void 0;
    };
  }
  return composer;
}
function convertComposerOptions(options) {
  const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = isFunction(options.missing) ? options.missing : void 0;
  const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
  const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = isBoolean(options.sync) ? options.sync : true;
  if (process.env.NODE_ENV !== "production" && options.formatter) {
    warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
  }
  if (process.env.NODE_ENV !== "production" && options.preserveDirectiveContent) {
    warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  }
  let messages2 = options.messages;
  if (isPlainObject(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages2 = locales.reduce((messages3, locale2) => {
      const message = messages3[locale2] || (messages3[locale2] = {});
      assign(message, sharedMessages[locale2]);
      return messages3;
    }, messages2 || {});
  }
  const { __i18n, __root, __injectWithOption } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale,
    fallbackLocale,
    messages: messages2,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
function createVueI18n(options = {}, VueI18nLegacy) {
  {
    const composer = createComposer(convertComposerOptions(options));
    const { __extender } = options;
    const vueI18n = {
      // id
      id: composer.id,
      // locale
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      // fallbackLocale
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      // messages
      get messages() {
        return composer.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return composer.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return composer.availableLocales;
      },
      // formatter
      get formatter() {
        process.env.NODE_ENV !== "production" && warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
        process.env.NODE_ENV !== "production" && warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
      },
      // missing
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler2) {
        composer.setMissingHandler(handler2);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      // modifiers
      get modifiers() {
        return composer.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      // postTranslation
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler2) {
        composer.setPostTranslationHandler(handler2);
      },
      // sync
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        process.env.NODE_ENV !== "production" && warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
        return true;
      },
      set preserveDirectiveContent(val) {
        process.env.NODE_ENV !== "production" && warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      // for internal
      __composer: composer,
      // t
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      rt(...args) {
        return Reflect.apply(composer.rt, composer, [...args]);
      },
      // tc
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      // te
      te(key, locale) {
        return composer.te(key, locale);
      },
      // tm
      tm(key) {
        return composer.tm(key);
      },
      // getLocaleMessage
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      // setLocaleMessage
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      // d
      d(...args) {
        return Reflect.apply(composer.d, composer, [...args]);
      },
      // getDateTimeFormat
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      // setDateTimeFormat
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      // n
      n(...args) {
        return Reflect.apply(composer.n, composer, [...args]);
      },
      // getNumberFormat
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      // setNumberFormat
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      // mergeNumberFormat
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(choice, choicesLength) {
        process.env.NODE_ENV !== "production" && warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX));
        return -1;
      }
    };
    vueI18n.__extender = __extender;
    if (process.env.NODE_ENV !== "production") {
      vueI18n.__enableEmitter = (emitter) => {
        const __composer = composer;
        __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
      };
      vueI18n.__disableEmitter = () => {
        const __composer = composer;
        __composer[DisableEmitter] && __composer[DisableEmitter]();
      };
    }
    return vueI18n;
  }
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign({}, attrs);
      const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index3) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index: index3, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index3}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: "parent",
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[NumberPartsSymbol](...args)
    ));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: "parent",
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[DatetimePartsSymbol](...args)
    ));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    if (process.env.NODE_ENV !== "production" && modifiers.preserve) {
      warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE));
    }
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (process.env.NODE_ENV !== "production" && globalInstall && useI18nComponentName) {
    warn(getWarnMessage(I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE, {
      name: Translation.name
    }));
  }
  if (globalInstall) {
    [!useI18nComponentName ? Translation.name : "i18n", "I18nT"].forEach((name) => app.component(name, Translation));
    [NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
    [DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const VueDevToolsLabels = {
  [
    "vue-devtools-plugin-vue-i18n"
    /* VueDevToolsIDs.PLUGIN */
  ]: "Vue I18n devtools",
  [
    "vue-i18n-resource-inspector"
    /* VueDevToolsIDs.CUSTOM_INSPECTOR */
  ]: "I18n Resources",
  [
    "vue-i18n-timeline"
    /* VueDevToolsIDs.TIMELINE */
  ]: "Vue I18n"
};
const VueDevToolsPlaceholders = {
  [
    "vue-i18n-resource-inspector"
    /* VueDevToolsIDs.CUSTOM_INSPECTOR */
  ]: "Search for scopes ..."
};
const VueDevToolsTimelineColors = {
  [
    "vue-i18n-timeline"
    /* VueDevToolsIDs.TIMELINE */
  ]: 16764185
};
const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
let devtoolsApi;
async function enableDevTools(app, i18n) {
  return new Promise((resolve, reject) => {
    try {
      setupDevtoolsPlugin({
        id: "vue-devtools-plugin-vue-i18n",
        label: VueDevToolsLabels[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (api) => {
        devtoolsApi = api;
        api.on.visitComponentTree(({ componentInstance, treeNode }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n);
        });
        api.on.inspectComponent(({ componentInstance, instanceData }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n.mode === "legacy") {
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            } else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api.addInspector({
          id: "vue-i18n-resource-inspector",
          label: VueDevToolsLabels[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: VueDevToolsPlaceholders[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        });
        api.on.getInspectorTree((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            registerScope(payload, i18n);
          }
        });
        const roots = /* @__PURE__ */ new Map();
        api.on.getInspectorState(async (payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            api.unhighlightElement();
            inspectScope(payload, i18n);
            if (payload.nodeId === "global") {
              if (!roots.has(payload.app)) {
                const [root3] = await api.getComponentInstances(payload.app);
                roots.set(payload.app, root3);
              }
              api.highlightElement(roots.get(payload.app));
            } else {
              const instance = getComponentInstance(payload.nodeId, i18n);
              instance && api.highlightElement(instance);
            }
          }
        });
        api.on.editInspectorState((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            editScope(payload, i18n);
          }
        });
        api.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: VueDevToolsLabels[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: VueDevToolsTimelineColors[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        });
        resolve(true);
      });
    } catch (e) {
      console.error(e);
      reject(false);
    }
  });
}
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || "Anonymous";
}
function updateComponentTreeTags(instance, treeNode, i18n) {
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    if (instance.vnode.el.__VUE_I18N__ !== global2) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: "locale",
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type,
    key: "availableLocales",
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type,
    key: "fallbackLocale",
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type,
    key: "inheritLocale",
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type,
    key: "messages",
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  {
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
}
function getLocaleMessageValue(messages2) {
  const value = {};
  Object.keys(messages2).forEach((key) => {
    const v2 = messages2[key];
    if (isFunction(v2) && "source" in v2) {
      value[key] = getMessageFunctionDetails(v2);
    } else if (isMessageAST(v2) && v2.loc && v2.loc.source) {
      value[key] = v2.loc.source;
    } else if (isObject(v2)) {
      value[key] = getLocaleMessageValue(v2);
    } else {
      value[key] = v2;
    }
  });
  return value;
}
const ESC = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function escape(s2) {
  return s2.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a2) {
  return ESC[a2] || a2;
}
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    const composer = i18n.mode === "composition" ? instance : instance.__composer;
    if (global2 === composer) {
      continue;
    }
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`
    });
  }
}
function getComponentInstance(nodeId, i18n) {
  let instance = null;
  if (nodeId !== "global") {
    for (const [component, composer] of i18n.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$1(nodeId, i18n) {
  if (nodeId === "global") {
    return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  } else {
    const instance = Array.from(i18n.__instances.values()).find((item) => item.id.toString() === nodeId);
    if (instance) {
      return i18n.mode === "composition" ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    payload.state = makeScopeInspectState(composer);
  }
  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = "Locale related info";
  const localeStates = [
    {
      type: localeType,
      key: "locale",
      editable: true,
      value: composer.locale.value
    },
    {
      type: localeType,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    },
    {
      type: localeType,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    },
    {
      type: localeType,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    }
  ];
  state[localeType] = localeStates;
  const localeMessagesType = "Locale messages info";
  const localeMessagesStates = [
    {
      type: localeMessagesType,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    }
  ];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && "groupId" in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
      }
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === "locale" && isString(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}
function defineMixin(vuei18n, composer, i18n) {
  return {
    beforeCreate() {
      const instance = getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          this.$i18n = mergeToGlobal(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          optionsI18n.__extender = i18n.__vueI18nExtend;
          this.$i18n = createVueI18n(optionsI18n);
          const _vueI18n = this.$i18n;
          if (_vueI18n.__extender) {
            _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
          }
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          this.$i18n = mergeToGlobal(vuei18n, options);
        } else {
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __extender: i18n.__vueI18nExtend,
            __root: composer
          });
          const _vueI18n = this.$i18n;
          if (_vueI18n.__extender) {
            _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
          }
        }
      } else {
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key, locale) => this.$i18n.te(key, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = (key) => this.$i18n.tm(key);
      i18n.__setInstance(instance, this.$i18n);
    },
    mounted() {
      if ((process.env.NODE_ENV !== "production" || false) && true && this.$el && this.$i18n) {
        const _vueI18n = this.$i18n;
        this.$el.__VUE_I18N__ = _vueI18n.__composer;
        const emitter = this.__v_emitter = createEmitter();
        _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
        emitter.on("*", addTimelineEvent);
      }
    },
    unmounted() {
      const instance = getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const _vueI18n = this.$i18n;
      if ((process.env.NODE_ENV !== "production" || false) && true && this.$el && this.$el.__VUE_I18N__) {
        if (this.__v_emitter) {
          this.__v_emitter.off("*", addTimelineEvent);
          delete this.__v_emitter;
        }
        if (this.$i18n) {
          _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
          delete this.$el.__VUE_I18N__;
        }
      }
      delete this.$t;
      delete this.$rt;
      delete this.$tc;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      if (_vueI18n.__disposer) {
        _vueI18n.__disposer();
        delete _vueI18n.__disposer;
        delete _vueI18n.__extender;
      }
      i18n.__deleteInstance(instance);
      delete this.$i18n;
    }
  };
}
function mergeToGlobal(g2, options) {
  g2.locale = options.locale || g2.locale;
  g2.fallbackLocale = options.fallbackLocale || g2.fallbackLocale;
  g2.missing = options.missing || g2.missing;
  g2.silentTranslationWarn = options.silentTranslationWarn || g2.silentFallbackWarn;
  g2.silentFallbackWarn = options.silentFallbackWarn || g2.silentFallbackWarn;
  g2.formatFallbackMessages = options.formatFallbackMessages || g2.formatFallbackMessages;
  g2.postTranslation = options.postTranslation || g2.postTranslation;
  g2.warnHtmlInMessage = options.warnHtmlInMessage || g2.warnHtmlInMessage;
  g2.escapeParameterHtml = options.escapeParameterHtml || g2.escapeParameterHtml;
  g2.sync = options.sync || g2.sync;
  g2.__composer[SetPluralRulesSymbol](options.pluralizationRules || g2.pluralizationRules);
  const messages2 = getLocaleMessages(g2.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages2).forEach((locale) => g2.mergeLocaleMessage(locale, messages2[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach((locale) => g2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach((locale) => g2.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return g2;
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = __legacyMode ? !!options.allowComposition : true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options, __legacyMode);
  const symbol = /* @__PURE__ */ makeSymbol(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  if (process.env.NODE_ENV !== "production") {
    if (__legacyMode && __allowComposition && true) {
      warn(getWarnMessage(I18nWarnCodes.NOTICE_DROP_ALLOW_COMPOSITION));
    }
  }
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      // mode
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return __allowComposition;
      },
      // install plugin
      async install(app, ...options2) {
        if ((process.env.NODE_ENV !== "production" || false) && true) {
          app.__VUE_I18N__ = i18n;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (isPlainObject(options2[0])) {
          const opts = options2[0];
          i18n.__composerExtend = opts.__composerExtend;
          i18n.__vueI18nExtend = opts.__vueI18nExtend;
        }
        let globalReleaseHandler = null;
        if (!__legacyMode && __globalInjection) {
          globalReleaseHandler = injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n));
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          globalReleaseHandler && globalReleaseHandler();
          i18n.dispose();
          unmountApp();
        };
        if ((process.env.NODE_ENV !== "production" || false) && true) {
          const ret = await enableDevTools(app, i18n);
          if (!ret) {
            throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          }
          const emitter = createEmitter();
          if (__legacyMode) {
            const _vueI18n = __global;
            _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          } else {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      // global accessor
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      // @internal
      __instances,
      // @internal
      __getInstance,
      // @internal
      __setInstance,
      // @internal
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  {
    if (i18n.mode === "legacy" && !options.__useComponent) {
      if (!i18n.allowComposition) {
        throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
      }
      return useI18nForLegacy(instance, scope, gl, options);
    }
  }
  if (scope === "global") {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      if (process.env.NODE_ENV !== "production") {
        warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
      }
      composer2 = gl;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    setupLifeCycle(i18nInternal, instance, composer);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root3 = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
          if (useComponent && composer && !composer[InejctWithOptionSymbol]) {
            composer = null;
          }
        }
      }
    }
    if (composer != null) {
      break;
    }
    if (root3 === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  {
    return !useComponent ? target.parent : target.vnode.ctx || target.parent;
  }
}
function setupLifeCycle(i18n, target, composer) {
  {
    onUnmounted(() => {
      const _composer = composer;
      if ((process.env.NODE_ENV !== "production" || false) && true && target.vnode.el && target.vnode.el.__VUE_I18N__) {
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n.__deleteInstance(target);
      const dispose = _composer[DisposeSymbol];
      if (dispose) {
        dispose();
        delete _composer[DisposeSymbol];
      }
    }, target);
  }
}
function useI18nForLegacy(instance, scope, root3, options = {}) {
  const isLocalScope = scope === "local";
  const _composer = shallowRef(null);
  if (isLocalScope && instance.proxy && !(instance.proxy.$options.i18n || instance.proxy.$options.__i18n)) {
    throw createI18nError(I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  }
  const _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : !isString(options.locale);
  const _locale = ref(
    // prettier-ignore
    !isLocalScope || _inheritLocale ? root3.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = ref(
    // prettier-ignore
    !isLocalScope || _inheritLocale ? root3.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  const _missingWarn = isLocalScope ? root3.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const _fallbackWarn = isLocalScope ? root3.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const _fallbackRoot = isLocalScope ? root3.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const _fallbackFormat = !!options.fallbackFormat;
  const _missing = isFunction(options.missing) ? options.missing : null;
  const _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const _warnHtmlMessage = isLocalScope ? root3.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const _escapeParameter = !!options.escapeParameter;
  const _modifiers = isLocalScope ? root3.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  const _pluralRules = options.pluralRules || isLocalScope && root3.pluralRules;
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => {
      return _composer.value ? _composer.value.locale.value : _locale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.locale.value = val;
      }
      _locale.value = val;
    }
  });
  const fallbackLocale = computed({
    get: () => {
      return _composer.value ? _composer.value.fallbackLocale.value : _fallbackLocale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.fallbackLocale.value = val;
      }
      _fallbackLocale.value = val;
    }
  });
  const messages2 = computed(() => {
    if (_composer.value) {
      return _composer.value.messages.value;
    } else {
      return _messages.value;
    }
  });
  const datetimeFormats = computed(() => _datetimeFormats.value);
  const numberFormats = computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return _composer.value ? _composer.value.getPostTranslationHandler() : _postTranslation;
  }
  function setPostTranslationHandler(handler2) {
    if (_composer.value) {
      _composer.value.setPostTranslationHandler(handler2);
    }
  }
  function getMissingHandler() {
    return _composer.value ? _composer.value.getMissingHandler() : _missing;
  }
  function setMissingHandler(handler2) {
    if (_composer.value) {
      _composer.value.setMissingHandler(handler2);
    }
  }
  function warpWithDeps(fn) {
    trackReactivityValues();
    return fn();
  }
  function t2(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.t, null, [...args])) : warpWithDeps(() => "");
  }
  function rt(...args) {
    return _composer.value ? Reflect.apply(_composer.value.rt, null, [...args]) : "";
  }
  function d2(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.d, null, [...args])) : warpWithDeps(() => "");
  }
  function n2(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.n, null, [...args])) : warpWithDeps(() => "");
  }
  function tm(key) {
    return _composer.value ? _composer.value.tm(key) : {};
  }
  function te2(key, locale2) {
    return _composer.value ? _composer.value.te(key, locale2) : false;
  }
  function getLocaleMessage(locale2) {
    return _composer.value ? _composer.value.getLocaleMessage(locale2) : {};
  }
  function setLocaleMessage(locale2, message) {
    if (_composer.value) {
      _composer.value.setLocaleMessage(locale2, message);
      _messages.value[locale2] = message;
    }
  }
  function mergeLocaleMessage(locale2, message) {
    if (_composer.value) {
      _composer.value.mergeLocaleMessage(locale2, message);
    }
  }
  function getDateTimeFormat(locale2) {
    return _composer.value ? _composer.value.getDateTimeFormat(locale2) : {};
  }
  function setDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setDateTimeFormat(locale2, format2);
      _datetimeFormats.value[locale2] = format2;
    }
  }
  function mergeDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeDateTimeFormat(locale2, format2);
    }
  }
  function getNumberFormat(locale2) {
    return _composer.value ? _composer.value.getNumberFormat(locale2) : {};
  }
  function setNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setNumberFormat(locale2, format2);
      _numberFormats.value[locale2] = format2;
    }
  }
  function mergeNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeNumberFormat(locale2, format2);
    }
  }
  const wrapper = {
    get id() {
      return _composer.value ? _composer.value.id : -1;
    },
    locale,
    fallbackLocale,
    messages: messages2,
    datetimeFormats,
    numberFormats,
    get inheritLocale() {
      return _composer.value ? _composer.value.inheritLocale : _inheritLocale;
    },
    set inheritLocale(val) {
      if (_composer.value) {
        _composer.value.inheritLocale = val;
      }
    },
    get availableLocales() {
      return _composer.value ? _composer.value.availableLocales : Object.keys(_messages.value);
    },
    get modifiers() {
      return _composer.value ? _composer.value.modifiers : _modifiers;
    },
    get pluralRules() {
      return _composer.value ? _composer.value.pluralRules : _pluralRules;
    },
    get isGlobal() {
      return _composer.value ? _composer.value.isGlobal : false;
    },
    get missingWarn() {
      return _composer.value ? _composer.value.missingWarn : _missingWarn;
    },
    set missingWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackWarn() {
      return _composer.value ? _composer.value.fallbackWarn : _fallbackWarn;
    },
    set fallbackWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackRoot() {
      return _composer.value ? _composer.value.fallbackRoot : _fallbackRoot;
    },
    set fallbackRoot(val) {
      if (_composer.value) {
        _composer.value.fallbackRoot = val;
      }
    },
    get fallbackFormat() {
      return _composer.value ? _composer.value.fallbackFormat : _fallbackFormat;
    },
    set fallbackFormat(val) {
      if (_composer.value) {
        _composer.value.fallbackFormat = val;
      }
    },
    get warnHtmlMessage() {
      return _composer.value ? _composer.value.warnHtmlMessage : _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      if (_composer.value) {
        _composer.value.warnHtmlMessage = val;
      }
    },
    get escapeParameter() {
      return _composer.value ? _composer.value.escapeParameter : _escapeParameter;
    },
    set escapeParameter(val) {
      if (_composer.value) {
        _composer.value.escapeParameter = val;
      }
    },
    t: t2,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    rt,
    d: d2,
    n: n2,
    tm,
    te: te2,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getDateTimeFormat,
    setDateTimeFormat,
    mergeDateTimeFormat,
    getNumberFormat,
    setNumberFormat,
    mergeNumberFormat
  };
  return wrapper;
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach((method) => {
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
{
  initFeatureFlags();
}
if (__INTLIFY_JIT_COMPILATION__) {
  registerMessageCompiler(compile);
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
if (process.env.NODE_ENV !== "production")
  ;
const optionsLoader = () => Promise.resolve({});
const resource = {
  "hello": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Hello"]);
  },
  "goodbye": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Good Bye"]);
  },
  "pageTitles": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["About"]);
    },
    "resume": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Resume"]);
    },
    "portfolio": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Portfolio"]);
    },
    "projects": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Projects"]);
    },
    "contact": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Contact"]);
    }
  }
};
const messages = { "en": resource };
const isEmpty = (obj) => Object.keys(obj).length === 0;
const plugin_FRmGFsEaPh = /* @__PURE__ */ defineNuxtPlugin(async (nuxt) => {
  let __temp, __restore;
  const { vueApp: app } = nuxt;
  const loadedOptions = ([__temp, __restore] = executeAsync(() => optionsLoader()), __temp = await __temp, __restore(), __temp);
  if (!isEmpty(messages)) {
    loadedOptions.messages = messages;
  }
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    ...loadedOptions
  });
  app.use(i18n);
});
const preference = "system";
const plugin_server_tmwfwJppjt = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const cookies_fWsGjKD4Pq = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueCookies);
});
const i18n_VfGcjrvSkj = /* @__PURE__ */ defineNuxtPlugin(() => {
  createI18n({
    legacy: false,
    inheritLocale: false,
    globalInjection: true,
    localeDir: "locales",
    fallbackLocale: "en",
    locale: "en"
  });
});
function _createForOfIteratorHelper$1(o2, allowArrayLike) {
  var it2 = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (!it2) {
    if (Array.isArray(o2) || (it2 = _unsupportedIterableToArray$2$1(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it2)
        o2 = it2;
      var i = 0;
      var F3 = function F4() {
      };
      return { s: F3, n: function n2() {
        if (i >= o2.length)
          return { done: true };
        return { done: false, value: o2[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F3 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s2() {
    it2 = it2.call(o2);
  }, n: function n2() {
    var step = it2.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f2() {
    try {
      if (!normalCompletion && it2["return"] != null)
        it2["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _toConsumableArray$2(arr) {
  return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2$1(arr) || _nonIterableSpread$2();
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$2$1(arr);
}
function _typeof$2$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$2$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$2$1(o2);
}
function _slicedToArray$1$1(arr, i) {
  return _arrayWithHoles$1$1(arr) || _iterableToArrayLimit$1$1(arr, i) || _unsupportedIterableToArray$2$1(arr, i) || _nonIterableRest$1$1();
}
function _nonIterableRest$1$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2$1(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$2$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$2$1(o2, minLen);
}
function _arrayLikeToArray$2$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$1$1(r, l2) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e, n2, i, u, a2 = [], f2 = true, o2 = false;
    try {
      if (i = (t2 = t2.call(r)).next, 0 === l2) {
        if (Object(t2) !== t2)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e = i.call(t2)).done) && (a2.push(e.value), a2.length !== l2); f2 = true)
          ;
    } catch (r2) {
      o2 = true, n2 = r2;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u = t2["return"](), Object(u) !== u))
          return;
      } finally {
        if (o2)
          throw n2;
      }
    }
    return a2;
  }
}
function _arrayWithHoles$1$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
var DomHandler = {
  innerWidth: function innerWidth(el) {
    if (el) {
      var width2 = el.offsetWidth;
      var style2 = getComputedStyle(el);
      width2 += parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
      return width2;
    }
    return 0;
  },
  width: function width(el) {
    if (el) {
      var width2 = el.offsetWidth;
      var style2 = getComputedStyle(el);
      width2 -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
      return width2;
    }
    return 0;
  },
  getWindowScrollTop: function getWindowScrollTop() {
    var doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },
  getWindowScrollLeft: function getWindowScrollLeft() {
    var doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },
  getOuterWidth: function getOuterWidth(el, margin) {
    if (el) {
      var width2 = el.offsetWidth;
      if (margin) {
        var style2 = getComputedStyle(el);
        width2 += parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
      }
      return width2;
    }
    return 0;
  },
  getOuterHeight: function getOuterHeight(el, margin) {
    if (el) {
      var height = el.offsetHeight;
      if (margin) {
        var style2 = getComputedStyle(el);
        height += parseFloat(style2.marginTop) + parseFloat(style2.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getClientHeight: function getClientHeight(el, margin) {
    if (el) {
      var height = el.clientHeight;
      if (margin) {
        var style2 = getComputedStyle(el);
        height += parseFloat(style2.marginTop) + parseFloat(style2.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getViewport: function getViewport() {
    var win = window, d2 = document, e = d2.documentElement, g2 = d2.getElementsByTagName("body")[0], w2 = win.innerWidth || e.clientWidth || g2.clientWidth, h2 = win.innerHeight || e.clientHeight || g2.clientHeight;
    return {
      width: w2,
      height: h2
    };
  },
  getOffset: function getOffset(el) {
    if (el) {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: "auto",
      left: "auto"
    };
  },
  index: function index(element) {
    if (element) {
      var children = element.parentNode.childNodes;
      var num = 0;
      for (var i = 0; i < children.length; i++) {
        if (children[i] === element)
          return num;
        if (children[i].nodeType === 1)
          num++;
      }
    }
    return -1;
  },
  addMultipleClasses: function addMultipleClasses(element, className) {
    var _this = this;
    if (element && className) {
      className.split(" ").forEach(function(style2) {
        return _this.addClass(element, style2);
      });
    }
  },
  addClass: function addClass(element, className) {
    if (element && className && !this.hasClass(element, className)) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  },
  removeClass: function removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  },
  hasClass: function hasClass(element, className) {
    if (element) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  },
  addStyles: function addStyles(element) {
    var styles = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (element) {
      Object.entries(styles).forEach(function(_ref) {
        var _ref2 = _slicedToArray$1$1(_ref, 2), key = _ref2[0], value = _ref2[1];
        return element.style[key] = value;
      });
    }
  },
  find: function find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : [];
  },
  findSingle: function findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  },
  createElement: function createElement(type) {
    var attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (type) {
      var element = document.createElement(type);
      this.setAttributes(element, attributes);
      for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }
      element.append.apply(element, children);
      return element;
    }
    return void 0;
  },
  setAttribute: function setAttribute(element) {
    var attribute = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var value = arguments.length > 2 ? arguments[2] : void 0;
    if (this.isElement(element) && value !== null && value !== void 0) {
      element.setAttribute(attribute, value);
    }
  },
  setAttributes: function setAttributes(element) {
    var _this2 = this;
    var attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.isElement(element)) {
      var computedStyles = function computedStyles2(rule, value) {
        var _element$$attrs, _element$$attrs2;
        var styles = element !== null && element !== void 0 && (_element$$attrs = element.$attrs) !== null && _element$$attrs !== void 0 && _element$$attrs[rule] ? [element === null || element === void 0 || (_element$$attrs2 = element.$attrs) === null || _element$$attrs2 === void 0 ? void 0 : _element$$attrs2[rule]] : [];
        return [value].flat().reduce(function(cv, v2) {
          if (v2 !== null && v2 !== void 0) {
            var type = _typeof$2$1(v2);
            if (type === "string" || type === "number") {
              cv.push(v2);
            } else if (type === "object") {
              var _cv = Array.isArray(v2) ? computedStyles2(rule, v2) : Object.entries(v2).map(function(_ref3) {
                var _ref4 = _slicedToArray$1$1(_ref3, 2), _k = _ref4[0], _v = _ref4[1];
                return rule === "style" && (!!_v || _v === 0) ? "".concat(_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(_v) : !!_v ? _k : void 0;
              });
              cv = _cv.length ? cv.concat(_cv.filter(function(c) {
                return !!c;
              })) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(function(_ref5) {
        var _ref6 = _slicedToArray$1$1(_ref5, 2), key = _ref6[0], value = _ref6[1];
        if (value !== void 0 && value !== null) {
          var matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === "p-bind") {
            _this2.setAttributes(element, value);
          } else {
            value = key === "class" ? _toConsumableArray$2(new Set(computedStyles("class", value))).join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  },
  getAttribute: function getAttribute(element, name) {
    if (this.isElement(element)) {
      var value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  },
  isAttributeEquals: function isAttributeEquals(element, name, value) {
    return this.isElement(element) ? this.getAttribute(element, name) === value : false;
  },
  isAttributeNotEquals: function isAttributeNotEquals(element, name, value) {
    return !this.isAttributeEquals(element, name, value);
  },
  getHeight: function getHeight(el) {
    if (el) {
      var height = el.offsetHeight;
      var style2 = getComputedStyle(el);
      height -= parseFloat(style2.paddingTop) + parseFloat(style2.paddingBottom) + parseFloat(style2.borderTopWidth) + parseFloat(style2.borderBottomWidth);
      return height;
    }
    return 0;
  },
  getWidth: function getWidth(el) {
    if (el) {
      var width2 = el.offsetWidth;
      var style2 = getComputedStyle(el);
      width2 -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight) + parseFloat(style2.borderLeftWidth) + parseFloat(style2.borderRightWidth);
      return width2;
    }
    return 0;
  },
  absolutePosition: function absolutePosition(element, target) {
    if (element) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var elementOuterHeight = elementDimensions.height;
      var elementOuterWidth = elementDimensions.width;
      var targetOuterHeight = target.offsetHeight;
      var targetOuterWidth = target.offsetWidth;
      var targetOffset = target.getBoundingClientRect();
      var windowScrollTop = this.getWindowScrollTop();
      var windowScrollLeft = this.getWindowScrollLeft();
      var viewport = this.getViewport();
      var top, left;
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        element.style.transformOrigin = "bottom";
        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
        element.style.transformOrigin = "top";
      }
      if (targetOffset.left + elementOuterWidth > viewport.width)
        left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
      else
        left = targetOffset.left + windowScrollLeft;
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  relativePosition: function relativePosition(element, target) {
    if (element) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var targetHeight = target.offsetHeight;
      var targetOffset = target.getBoundingClientRect();
      var viewport = this.getViewport();
      var top, left;
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        element.style.transformOrigin = "bottom";
        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
        element.style.transformOrigin = "top";
      }
      if (elementDimensions.width > viewport.width) {
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        left = 0;
      }
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  getParents: function getParents(element) {
    var parents = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  },
  getScrollableParents: function getScrollableParents(element) {
    var scrollableParents = [];
    if (element) {
      var parents = this.getParents(element);
      var overflowRegex = /(auto|scroll)/;
      var overflowCheck = function overflowCheck2(node) {
        try {
          var styleDeclaration = window["getComputedStyle"](node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
        } catch (err) {
          return false;
        }
      };
      var _iterator = _createForOfIteratorHelper$1(parents), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var parent = _step.value;
          var scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
          if (scrollSelectors) {
            var selectors = scrollSelectors.split(",");
            var _iterator2 = _createForOfIteratorHelper$1(selectors), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var selector = _step2.value;
                var el = this.findSingle(parent, selector);
                if (el && overflowCheck(el)) {
                  scrollableParents.push(el);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (parent.nodeType !== 9 && overflowCheck(parent)) {
            scrollableParents.push(parent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return scrollableParents;
  },
  getHiddenElementOuterHeight: function getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      var elementHeight = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementHeight;
    }
    return 0;
  },
  getHiddenElementOuterWidth: function getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      var elementWidth = element.offsetWidth;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementWidth;
    }
    return 0;
  },
  getHiddenElementDimensions: function getHiddenElementDimensions(element) {
    if (element) {
      var dimensions = {};
      element.style.visibility = "hidden";
      element.style.display = "block";
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return dimensions;
    }
    return 0;
  },
  fadeIn: function fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0;
      var last = +/* @__PURE__ */ new Date();
      var opacity = 0;
      var tick = function tick2() {
        opacity = +element.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +/* @__PURE__ */ new Date();
        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick2) || setTimeout(tick2, 16);
        }
      };
      tick();
    }
  },
  fadeOut: function fadeOut(element, ms2) {
    if (element) {
      var opacity = 1, interval = 50, duration = ms2, gap = interval / duration;
      var fading = setInterval(function() {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    }
  },
  getUserAgent: function getUserAgent() {
    return navigator.userAgent;
  },
  appendChild: function appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target.el && target.elElement)
      target.elElement.appendChild(element);
    else
      throw new Error("Cannot append " + target + " to " + element);
  },
  isElement: function isElement(obj) {
    return (typeof HTMLElement === "undefined" ? "undefined" : _typeof$2$1(HTMLElement)) === "object" ? obj instanceof HTMLElement : obj && _typeof$2$1(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  },
  scrollInView: function scrollInView(container, item) {
    var borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    var paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    var containerRect = container.getBoundingClientRect();
    var itemRect = item.getBoundingClientRect();
    var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    var scroll = container.scrollTop;
    var elementHeight = container.clientHeight;
    var itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  },
  clearSelection: function clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  },
  getSelection: function getSelection() {
    if (window.getSelection)
      return window.getSelection().toString();
    else if (document.getSelection)
      return document.getSelection().toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  },
  calculateScrollbarWidth: function calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth;
    var scrollDiv = document.createElement("div");
    this.addStyles(scrollDiv, {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-9999px"
    });
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  calculateBodyScrollbarWidth: function calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  },
  getBrowser: function getBrowser() {
    if (!this.browser) {
      var matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  },
  resolveUserAgent: function resolveUserAgent() {
    var ua = navigator.userAgent.toLowerCase();
    var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  },
  isVisible: function isVisible(element) {
    return element && element.offsetParent != null;
  },
  invokeElementMethod: function invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  },
  isExist: function isExist(element) {
    return !!(element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode);
  },
  isClient: function isClient() {
    return false;
  },
  focus: function focus(el, options) {
    el && document.activeElement !== el && el.focus(options);
  },
  isFocusableElement: function isFocusableElement(element) {
    var selector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.isElement(element) ? element.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector)) : false;
  },
  getFocusableElements: function getFocusableElements(element) {
    var selector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var focusableElements = this.find(element, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector));
    var visibleFocusableElements = [];
    var _iterator3 = _createForOfIteratorHelper$1(focusableElements), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var focusableElement = _step3.value;
        if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
          visibleFocusableElements.push(focusableElement);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return visibleFocusableElements;
  },
  getFirstFocusableElement: function getFirstFocusableElement(element, selector) {
    var focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  },
  getLastFocusableElement: function getLastFocusableElement(element, selector) {
    var focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  },
  getNextFocusableElement: function getNextFocusableElement(container, element, selector) {
    var focusableElements = this.getFocusableElements(container, selector);
    var index3 = focusableElements.length > 0 ? focusableElements.findIndex(function(el) {
      return el === element;
    }) : -1;
    var nextIndex = index3 > -1 && focusableElements.length >= index3 + 1 ? index3 + 1 : -1;
    return nextIndex > -1 ? focusableElements[nextIndex] : null;
  },
  isClickable: function isClickable(element) {
    if (element) {
      var targetNode = element.nodeName;
      var parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === "INPUT" || targetNode === "TEXTAREA" || targetNode === "BUTTON" || targetNode === "A" || parentNode === "INPUT" || parentNode === "TEXTAREA" || parentNode === "BUTTON" || parentNode === "A" || !!element.closest(".p-button, .p-checkbox, .p-radiobutton");
    }
    return false;
  },
  applyStyle: function applyStyle(element, style2) {
    if (typeof style2 === "string") {
      element.style.cssText = style2;
    } else {
      for (var prop in style2) {
        element.style[prop] = style2[prop];
      }
    }
  },
  isIOS: function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  },
  isAndroid: function isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice: function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  hasCSSAnimation: function hasCSSAnimation(element) {
    if (element) {
      var style2 = getComputedStyle(element);
      var animationDuration = parseFloat(style2.getPropertyValue("animation-duration") || "0");
      return animationDuration > 0;
    }
    return false;
  },
  hasCSSTransition: function hasCSSTransition(element) {
    if (element) {
      var style2 = getComputedStyle(element);
      var transitionDuration = parseFloat(style2.getPropertyValue("transition-duration") || "0");
      return transitionDuration > 0;
    }
    return false;
  },
  exportCSV: function exportCSV(csv, filename) {
    var blob = new Blob([csv], {
      type: "application/csv;charset=utf-8;"
    });
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename + ".csv");
    } else {
      var link = document.createElement("a");
      if (link.download !== void 0) {
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", filename + ".csv");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        csv = "data:text/csv;charset=utf-8," + csv;
        window.open(encodeURI(csv));
      }
    }
  },
  blockBodyScroll: function blockBodyScroll() {
    var className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  },
  unblockBodyScroll: function unblockBodyScroll() {
    var className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
};
function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$1$1(arr, i) || _nonIterableRest$2();
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit$2(r, l2) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e, n2, i, u, a2 = [], f2 = true, o2 = false;
    try {
      if (i = (t2 = t2.call(r)).next, 0 === l2) {
        if (Object(t2) !== t2)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e = i.call(t2)).done) && (a2.push(e.value), a2.length !== l2); f2 = true)
          ;
    } catch (r2) {
      o2 = true, n2 = r2;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u = t2["return"](), Object(u) !== u))
          return;
      } finally {
        if (o2)
          throw n2;
      }
    }
    return a2;
  }
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1$1(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1$1(arr);
}
function _createForOfIteratorHelper(o2, allowArrayLike) {
  var it2 = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (!it2) {
    if (Array.isArray(o2) || (it2 = _unsupportedIterableToArray$1$1(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it2)
        o2 = it2;
      var i = 0;
      var F3 = function F4() {
      };
      return { s: F3, n: function n2() {
        if (i >= o2.length)
          return { done: true };
        return { done: false, value: o2[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F3 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s2() {
    it2 = it2.call(o2);
  }, n: function n2() {
    var step = it2.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f2() {
    try {
      if (!normalCompletion && it2["return"] != null)
        it2["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$1$1(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$1$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1$1(o2, minLen);
}
function _arrayLikeToArray$1$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _typeof$6(o2) {
  "@babel/helpers - typeof";
  return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$6(o2);
}
var ObjectUtils = {
  equals: function equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.deepEquals(obj1, obj2);
  },
  deepEquals: function deepEquals(a2, b) {
    if (a2 === b)
      return true;
    if (a2 && b && _typeof$6(a2) == "object" && _typeof$6(b) == "object") {
      var arrA = Array.isArray(a2), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a2.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a2[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a2 instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a2.getTime() == b.getTime();
      var regexpA = a2 instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a2.toString() == b.toString();
      var keys = Object.keys(a2);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a2[key], b[key]))
          return false;
      }
      return true;
    }
    return a2 !== a2 && b !== b;
  },
  resolveFieldData: function resolveFieldData(data, field) {
    if (!data || !field) {
      return null;
    }
    try {
      var value = data[field];
      if (this.isNotEmpty(value))
        return value;
    } catch (_unused) {
    }
    if (Object.keys(data).length) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") === -1) {
        return data[field];
      } else {
        var fields = field.split(".");
        var _value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (_value == null) {
            return null;
          }
          _value = _value[fields[i]];
        }
        return _value;
      }
    }
    return null;
  },
  getItemValue: function getItemValue(obj) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
  },
  filter: function filter(value, fields, filterValue) {
    var filteredItems = [];
    if (value) {
      var _iterator = _createForOfIteratorHelper(value), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;
          var _iterator2 = _createForOfIteratorHelper(fields), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var field = _step2.value;
              if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                filteredItems.push(item);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return filteredItems;
  },
  reorderArray: function reorderArray(value, from, to) {
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  },
  findIndexInList: function findIndexInList(value, list) {
    var index3 = -1;
    if (list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index3 = i;
          break;
        }
      }
    }
    return index3;
  },
  contains: function contains(value, list) {
    if (value != null && list && list.length) {
      var _iterator3 = _createForOfIteratorHelper(list), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var val = _step3.value;
          if (this.equals(value, val))
            return true;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    return false;
  },
  insertIntoOrderedArray: function insertIntoOrderedArray(item, index3, arr, sourceArr) {
    if (arr.length > 0) {
      var injected = false;
      for (var i = 0; i < arr.length; i++) {
        var currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index3) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  },
  removeAccents: function removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
      str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
    }
    return str;
  },
  getVNodeProp: function getVNodeProp(vnode, prop) {
    var props = vnode.props;
    if (props) {
      var kebabProp = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      var propName = Object.prototype.hasOwnProperty.call(props, kebabProp) ? kebabProp : prop;
      return vnode.type["extends"].props[prop].type === Boolean && props[propName] === "" ? true : props[propName];
    }
    return null;
  },
  toFlatCase: function toFlatCase(str) {
    return this.isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
  },
  toKebabCase: function toKebabCase(str) {
    return this.isString(str) ? str.replace(/(_)/g, "-").replace(/[A-Z]/g, function(c, i) {
      return i === 0 ? c : "-" + c.toLowerCase();
    }).toLowerCase() : str;
  },
  toCapitalCase: function toCapitalCase(str) {
    return this.isString(str, {
      empty: false
    }) ? str[0].toUpperCase() + str.slice(1) : str;
  },
  isEmpty: function isEmpty2(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof$6(value) === "object" && Object.keys(value).length === 0;
  },
  isNotEmpty: function isNotEmpty(value) {
    return !this.isEmpty(value);
  },
  isFunction: function isFunction2(value) {
    return !!(value && value.constructor && value.call && value.apply);
  },
  isObject: function isObject2(value) {
    var empty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
  },
  isDate: function isDate2(value) {
    return value instanceof Date && value.constructor === Date;
  },
  isArray: function isArray2(value) {
    var empty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return Array.isArray(value) && (empty || value.length !== 0);
  },
  isString: function isString2(value) {
    var empty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return typeof value === "string" && (empty || value !== "");
  },
  isPrintableCharacter: function isPrintableCharacter() {
    var _char = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast: function findLast(arr, callback) {
    var item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch (_unused2) {
        item = _toConsumableArray$1(arr).reverse().find(callback);
      }
    }
    return item;
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex: function findLastIndex(arr, callback) {
    var index3 = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index3 = arr.findLastIndex(callback);
      } catch (_unused3) {
        index3 = arr.lastIndexOf(_toConsumableArray$1(arr).reverse().find(callback));
      }
    }
    return index3;
  },
  sort: function sort(value1, value2) {
    var order = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    var comparator = arguments.length > 3 ? arguments[3] : void 0;
    var nullSortOrder = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1;
    var result = this.compare(value1, value2, comparator, order);
    var finalSortOrder = order;
    if (this.isEmpty(value1) || this.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  },
  compare: function compare(value1, value2, comparator) {
    var order = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
    var result = -1;
    var emptyValue1 = this.isEmpty(value1);
    var emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2)
      result = 0;
    else if (emptyValue1)
      result = order;
    else if (emptyValue2)
      result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string")
      result = comparator(value1, value2);
    else
      result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  },
  localeComparator: function localeComparator() {
    return new Intl.Collator(void 0, {
      numeric: true
    }).compare;
  },
  nestedKeys: function nestedKeys() {
    var _this = this;
    var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var parentKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return Object.entries(obj).reduce(function(o2, _ref) {
      var _ref2 = _slicedToArray$2(_ref, 2), key = _ref2[0], value = _ref2[1];
      var currentKey = parentKey ? "".concat(parentKey, ".").concat(key) : key;
      _this.isObject(value) ? o2 = o2.concat(_this.nestedKeys(value, currentKey)) : o2.push(currentKey);
      return o2;
    }, []);
  }
};
var lastId = 0;
function UniqueComponentId() {
  var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  lastId++;
  return "".concat(prefix).concat(lastId);
}
var FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
function _typeof$5(o2) {
  "@babel/helpers - typeof";
  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$5(o2);
}
function ownKeys$5(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t2), true).forEach(function(r2) {
      _defineProperty$5(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$5(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$5(obj, key, value) {
  key = _toPropertyKey$5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$5(arg) {
  var key = _toPrimitive$5(arg, "string");
  return _typeof$5(key) === "symbol" ? key : String(key);
}
function _toPrimitive$5(input, hint) {
  if (_typeof$5(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$5(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var defaultOptions = {
  ripple: false,
  inputStyle: "outlined",
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: false,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    // @deprecated Use 'emptySearchMessage' option instead.
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left"
    }
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  pt: void 0,
  ptOptions: {
    mergeSections: true,
    mergeProps: false
  },
  unstyled: false,
  csp: {
    nonce: void 0
  }
};
var PrimeVueSymbol = Symbol();
function switchTheme(currentTheme, newTheme, linkElementId, callback) {
  if (currentTheme !== newTheme) {
    var linkElement = document.getElementById(linkElementId);
    var cloneLinkElement = linkElement.cloneNode(true);
    var newThemeUrl = linkElement.getAttribute("href").replace(currentTheme, newTheme);
    cloneLinkElement.setAttribute("id", linkElementId + "-clone");
    cloneLinkElement.setAttribute("href", newThemeUrl);
    cloneLinkElement.addEventListener("load", function() {
      linkElement.remove();
      cloneLinkElement.setAttribute("id", linkElementId);
      if (callback) {
        callback();
      }
    });
    linkElement.parentNode && linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
  }
}
var PrimeVue = {
  install: function install(app, options) {
    var configOptions = options ? _objectSpread$5(_objectSpread$5({}, defaultOptions), options) : _objectSpread$5({}, defaultOptions);
    var PrimeVue2 = {
      config: reactive(configOptions),
      changeTheme: switchTheme
    };
    app.config.globalProperties.$primevue = PrimeVue2;
    app.provide(PrimeVueSymbol, PrimeVue2);
  }
};
function _typeof$4(o2) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$4(o2);
}
function ownKeys$4(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t2), true).forEach(function(r2) {
      _defineProperty$4(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$4(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$4(obj, key, value) {
  key = _toPropertyKey$4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$4(arg) {
  var key = _toPrimitive$4(arg, "string");
  return _typeof$4(key) === "symbol" ? key : String(key);
}
function _toPrimitive$4(input, hint) {
  if (_typeof$4(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$4(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
var _id = 0;
function useStyle(css2) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var isLoaded = ref(false);
  var cssRef = ref(css2);
  var styleRef = ref(null);
  var defaultDocument = DomHandler.isClient() ? window.document : void 0;
  var _options$document = options.document, document2 = _options$document === void 0 ? defaultDocument : _options$document, _options$immediate = options.immediate, immediate = _options$immediate === void 0 ? true : _options$immediate, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media, _options$nonce = options.nonce, nonce = _options$nonce === void 0 ? void 0 : _options$nonce, _options$props = options.props, props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop2() {
  };
  var load = function load2(_css) {
    var _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!document2)
      return;
    var _styleProps = _objectSpread$4(_objectSpread$4({}, props), _props);
    var _name = _styleProps.name || name, _id2 = _styleProps.id || id, _nonce = _styleProps.nonce || nonce;
    styleRef.value = document2.querySelector('style[data-primevue-style-id="'.concat(_name, '"]')) || document2.getElementById(_id2) || document2.createElement("style");
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css2;
      DomHandler.setAttributes(styleRef.value, {
        type: "text/css",
        id: _id2,
        media,
        nonce: _nonce
      });
      document2.head.appendChild(styleRef.value);
      DomHandler.setAttribute(styleRef.value, "data-primevue-style-id", name);
      DomHandler.setAttributes(styleRef.value, _styleProps);
    }
    if (isLoaded.value)
      return;
    stop = watch(cssRef, function(value) {
      styleRef.value.textContent = value;
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload2() {
    if (!document2 || !isLoaded.value)
      return;
    stop();
    DomHandler.isExist(styleRef.value) && document2.head.removeChild(styleRef.value);
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  return {
    id,
    name,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}
function _typeof$3(o2) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$3(o2);
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$2(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$2(o2, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$1(r, l2) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e, n2, i, u, a2 = [], f2 = true, o2 = false;
    try {
      if (i = (t2 = t2.call(r)).next, 0 === l2) {
        if (Object(t2) !== t2)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e = i.call(t2)).done) && (a2.push(e.value), a2.length !== l2); f2 = true)
          ;
    } catch (r2) {
      o2 = true, n2 = r2;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u = t2["return"](), Object(u) !== u))
          return;
      } finally {
        if (o2)
          throw n2;
      }
    }
    return a2;
  }
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys$3(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t2), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$3(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$3(arg) {
  var key = _toPrimitive$3(arg, "string");
  return _typeof$3(key) === "symbol" ? key : String(key);
}
function _toPrimitive$3(input, hint) {
  if (_typeof$3(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$3(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var css$4 = "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: var(--scrollbar-width);\n}\n";
var classes$3 = {};
var inlineStyles = {};
var BaseStyle = {
  name: "base",
  css: css$4,
  classes: classes$3,
  inlineStyles,
  loadStyle: function loadStyle() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.css ? useStyle(this.css, _objectSpread$3({
      name: this.name
    }, options)) : {};
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var _props = Object.entries(props).reduce(function(acc, _ref) {
        var _ref2 = _slicedToArray$1(_ref, 2), k2 = _ref2[0], v2 = _ref2[1];
        return acc.push("".concat(k2, '="').concat(v2, '"')) && acc;
      }, []).join(" ");
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(_props, ">").concat(this.css).concat(extendedCSS, "</style>");
    }
    return "";
  },
  extend: function extend(style2) {
    return _objectSpread$3(_objectSpread$3({}, this), {}, {
      css: void 0
    }, style2);
  }
};
var css$3 = "\n@layer primevue {\n    .p-badge {\n        display: inline-block;\n        border-radius: 10px;\n        text-align: center;\n        padding: 0 .5rem;\n    }\n\n    .p-overlay-badge {\n        position: relative;\n    }\n\n    .p-overlay-badge .p-badge {\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(50%,-50%);\n        transform-origin: 100% 0;\n        margin: 0;\n    }\n\n    .p-badge-dot {\n        width: .5rem;\n        min-width: .5rem;\n        height: .5rem;\n        border-radius: 50%;\n        padding: 0;\n    }\n\n    .p-badge-no-gutter {\n        padding: 0;\n        border-radius: 50%;\n    }\n}\n";
var classes$2 = {
  root: function root(_ref) {
    var props = _ref.props, instance = _ref.instance;
    return ["p-badge p-component", {
      "p-badge-no-gutter": ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
      "p-badge-dot": ObjectUtils.isEmpty(props.value) && !instance.$slots["default"],
      "p-badge-lg": props.size === "large",
      "p-badge-xl": props.size === "xlarge",
      "p-badge-info": props.severity === "info",
      "p-badge-success": props.severity === "success",
      "p-badge-warning": props.severity === "warning",
      "p-badge-danger": props.severity === "danger"
    }];
  }
};
var BadgeStyle = BaseStyle.extend({
  name: "badge",
  css: css$3,
  classes: classes$2
});
function _typeof$1$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1$1(o2);
}
function ownKeys$1(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t2), true).forEach(function(r2) {
      _defineProperty$1$1(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$1$1(obj, key, value) {
  key = _toPropertyKey$1$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1$1(arg) {
  var key = _toPrimitive$1$1(arg, "string");
  return _typeof$1$1(key) === "symbol" ? key : String(key);
}
function _toPrimitive$1$1(input, hint) {
  if (_typeof$1$1(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1$1(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var buttonCSS = "\n.p-button {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    align-items: center;\n    vertical-align: bottom;\n    text-align: center;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-button-label {\n    flex: 1 1 auto;\n}\n\n.p-button-icon-right {\n    order: 1;\n}\n\n.p-button:disabled {\n    cursor: default;\n}\n\n.p-button-icon-only {\n    justify-content: center;\n}\n\n.p-button-icon-only .p-button-label {\n    visibility: hidden;\n    width: 0;\n    flex: 0 0 auto;\n}\n\n.p-button-vertical {\n    flex-direction: column;\n}\n\n.p-button-icon-bottom {\n    order: 2;\n}\n\n.p-buttonset .p-button {\n    margin: 0;\n}\n\n.p-buttonset .p-button:not(:last-child), .p-buttonset .p-button:not(:last-child):hover {\n    border-right: 0 none;\n}\n\n.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-buttonset .p-button:first-of-type:not(:only-of-type) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-buttonset .p-button:last-of-type:not(:only-of-type) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.p-buttonset .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n";
var checkboxCSS = "\n.p-checkbox {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    vertical-align: bottom;\n    position: relative;\n}\n\n.p-checkbox.p-checkbox-disabled {\n    cursor: default;\n}\n\n.p-checkbox-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n";
var inputTextCSS = "\n.p-fluid .p-inputtext {\n    width: 100%;\n}\n\n/* InputGroup */\n.p-inputgroup {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup-addon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-inputgroup .p-float-label {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-fluid .p-inputgroup .p-inputtext,\n.p-inputgroup .p-inputwrapper,\n.p-fluid .p-inputgroup .p-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n/* Floating Label */\n.p-float-label {\n    display: block;\n    position: relative;\n}\n\n.p-float-label label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    margin-top: -.5rem;\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n}\n\n.p-float-label textarea ~ label {\n    top: 1rem;\n}\n\n.p-float-label input:focus ~ label,\n.p-float-label input.p-filled ~ label,\n.p-float-label input:-webkit-autofill ~ label,\n.p-float-label textarea:focus ~ label,\n.p-float-label textarea.p-filled ~ label,\n.p-float-label .p-inputwrapper-focus ~ label,\n.p-float-label .p-inputwrapper-filled ~ label {\n    top: -.75rem;\n    font-size: 12px;\n}\n\n\n.p-float-label .p-placeholder,\n.p-float-label input::placeholder,\n.p-float-label .p-inputtext::placeholder {\n    opacity: 0;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-float-label .p-focus .p-placeholder,\n.p-float-label input:focus::placeholder,\n.p-float-label .p-inputtext:focus::placeholder {\n    opacity: 1;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-input-icon-left,\n.p-input-icon-right {\n    position: relative;\n    display: inline-block;\n}\n\n.p-input-icon-left > i,\n.p-input-icon-left > svg,\n.p-input-icon-right > i,\n.p-input-icon-right > svg {\n    position: absolute;\n    top: 50%;\n    margin-top: -.5rem;\n}\n\n.p-fluid .p-input-icon-left,\n.p-fluid .p-input-icon-right {\n    display: block;\n    width: 100%;\n}\n";
var radioButtonCSS = "\n.p-radiobutton {\n    position: relative;\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    vertical-align: bottom;\n}\n\n.p-radiobutton.p-radiobutton-disabled {\n    cursor: default;\n}\n\n.p-radiobutton-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.p-radiobutton-icon {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transform: translateZ(0) scale(.1);\n    border-radius: 50%;\n    visibility: hidden;\n}\n\n.p-radiobutton-box.p-highlight .p-radiobutton-icon {\n    transform: translateZ(0) scale(1.0, 1.0);\n    visibility: visible;\n}\n";
var css$2 = "\n@layer primevue {\n.p-component, .p-component * {\n    box-sizing: border-box;\n}\n\n.p-hidden-space {\n    visibility: hidden;\n}\n\n.p-reset {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    text-decoration: none;\n    font-size: 100%;\n    list-style: none;\n}\n\n.p-disabled, .p-disabled * {\n    cursor: default !important;\n    pointer-events: none;\n    user-select: none;\n}\n\n.p-component-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-unselectable-text {\n    user-select: none;\n}\n\n.p-sr-only {\n    border: 0;\n    clip: rect(1px, 1px, 1px, 1px);\n    clip-path: inset(50%);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    word-wrap: normal !important;\n}\n\n.p-link {\n	text-align: left;\n	background-color: transparent;\n	margin: 0;\n	padding: 0;\n	border: none;\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-link:disabled {\n	cursor: default;\n}\n\n/* Non vue overlay animations */\n.p-connected-overlay {\n    opacity: 0;\n    transform: scaleY(0.8);\n    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-visible {\n    opacity: 1;\n    transform: scaleY(1);\n}\n\n.p-connected-overlay-hidden {\n    opacity: 0;\n    transform: scaleY(1);\n    transition: opacity .1s linear;\n}\n\n/* Vue based overlay animations */\n.p-connected-overlay-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n\n.p-connected-overlay-leave-to {\n    opacity: 0;\n}\n\n.p-connected-overlay-enter-active {\n    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-leave-active {\n    transition: opacity .1s linear;\n}\n\n/* Toggleable Content */\n.p-toggleable-content-enter-from,\n.p-toggleable-content-leave-to {\n    max-height: 0;\n}\n\n.p-toggleable-content-enter-to,\n.p-toggleable-content-leave-from {\n    max-height: 1000px;\n}\n\n.p-toggleable-content-leave-active {\n    overflow: hidden;\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n}\n\n.p-toggleable-content-enter-active {\n    overflow: hidden;\n    transition: max-height 1s ease-in-out;\n}\n".concat(buttonCSS, "\n").concat(checkboxCSS, "\n").concat(inputTextCSS, "\n").concat(radioButtonCSS, "\n}\n");
var BaseComponentStyle = BaseStyle.extend({
  name: "common",
  css: css$2,
  loadGlobalStyle: function loadGlobalStyle(globalCSS) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return useStyle(globalCSS, _objectSpread$1({
      name: "global"
    }, options));
  }
});
function _typeof$2(o2) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$2(o2);
}
function ownKeys$2(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t2), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$2(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$2(arg) {
  var key = _toPrimitive$2(arg, "string");
  return _typeof$2(key) === "symbol" ? key : String(key);
}
function _toPrimitive$2(input, hint) {
  if (_typeof$2(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var script$5 = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      "default": void 0
    },
    ptOptions: {
      type: Object,
      "default": void 0
    },
    unstyled: {
      type: Boolean,
      "default": void 0
    }
  },
  inject: {
    $parentInstance: {
      "default": void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: true,
      handler: function handler(newValue) {
        if (!newValue) {
          var _this$$config, _this$$config2;
          BaseComponentStyle.loadStyle({
            nonce: (_this$$config = this.$config) === null || _this$$config === void 0 || (_this$$config = _this$$config.csp) === null || _this$$config === void 0 ? void 0 : _this$$config.nonce
          });
          this.$options.style && this.$style.loadStyle({
            nonce: (_this$$config2 = this.$config) === null || _this$$config2 === void 0 || (_this$$config2 = _this$$config2.csp) === null || _this$$config2 === void 0 ? void 0 : _this$$config2.nonce
          });
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var _this$pt, _this$pt2, _this$pt3, _ref, _ref$onBeforeCreate, _this$$config3, _this$$primevue, _this$$primevue2, _this$$primevue3, _ref2, _ref2$onBeforeCreate;
    var _usept = (_this$pt = this.pt) === null || _this$pt === void 0 ? void 0 : _this$pt["_usept"];
    var originalValue = _usept ? (_this$pt2 = this.pt) === null || _this$pt2 === void 0 || (_this$pt2 = _this$pt2.originalValue) === null || _this$pt2 === void 0 ? void 0 : _this$pt2[this.$.type.name] : void 0;
    var value = _usept ? (_this$pt3 = this.pt) === null || _this$pt3 === void 0 || (_this$pt3 = _this$pt3.value) === null || _this$pt3 === void 0 ? void 0 : _this$pt3[this.$.type.name] : this.pt;
    (_ref = value || originalValue) === null || _ref === void 0 || (_ref = _ref.hooks) === null || _ref === void 0 || (_ref$onBeforeCreate = _ref["onBeforeCreate"]) === null || _ref$onBeforeCreate === void 0 || _ref$onBeforeCreate.call(_ref);
    var _useptInConfig = (_this$$config3 = this.$config) === null || _this$$config3 === void 0 || (_this$$config3 = _this$$config3.pt) === null || _this$$config3 === void 0 ? void 0 : _this$$config3["_usept"];
    var originalValueInConfig = _useptInConfig ? (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.pt) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.originalValue : void 0;
    var valueInConfig = _useptInConfig ? (_this$$primevue2 = this.$primevue) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.config) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.pt) === null || _this$$primevue2 === void 0 ? void 0 : _this$$primevue2.value : (_this$$primevue3 = this.$primevue) === null || _this$$primevue3 === void 0 || (_this$$primevue3 = _this$$primevue3.config) === null || _this$$primevue3 === void 0 ? void 0 : _this$$primevue3.pt;
    (_ref2 = valueInConfig || originalValueInConfig) === null || _ref2 === void 0 || (_ref2 = _ref2[this.$.type.name]) === null || _ref2 === void 0 || (_ref2 = _ref2.hooks) === null || _ref2 === void 0 || (_ref2$onBeforeCreate = _ref2["onBeforeCreate"]) === null || _ref2$onBeforeCreate === void 0 || _ref2$onBeforeCreate.call(_ref2);
  },
  created: function created() {
    this._hook("onCreated");
  },
  beforeMount: function beforeMount() {
    var _this$$config4;
    BaseStyle.loadStyle({
      nonce: (_this$$config4 = this.$config) === null || _this$$config4 === void 0 || (_this$$config4 = _this$$config4.csp) === null || _this$$config4 === void 0 ? void 0 : _this$$config4.nonce
    });
    this._loadGlobalStyles();
    this._hook("onBeforeMount");
  },
  mounted: function mounted() {
    this._hook("onMounted");
  },
  beforeUpdate: function beforeUpdate() {
    this._hook("onBeforeUpdate");
  },
  updated: function updated() {
    this._hook("onUpdated");
  },
  beforeUnmount: function beforeUnmount() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function unmounted() {
    this._hook("onUnmounted");
  },
  methods: {
    _hook: function _hook(hookName) {
      if (!this.$options.hostName) {
        var selfHook = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(hookName));
        var defaultHook = this._useDefaultPT(this._getOptionValue, "hooks.".concat(hookName));
        selfHook === null || selfHook === void 0 || selfHook();
        defaultHook === null || defaultHook === void 0 || defaultHook();
      }
    },
    _loadGlobalStyles: function _loadGlobalStyles() {
      var _this$$config5;
      var globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      ObjectUtils.isNotEmpty(globalCSS) && BaseComponentStyle.loadGlobalStyle(globalCSS, {
        nonce: (_this$$config5 = this.$config) === null || _this$$config5 === void 0 || (_this$$config5 = _this$$config5.csp) === null || _this$$config5 === void 0 ? void 0 : _this$$config5.nonce
      });
    },
    _getHostInstance: function _getHostInstance(instance) {
      return instance ? this.$options.hostName ? instance.$.type.name === this.$options.hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
    },
    _getPropValue: function _getPropValue(name) {
      var _this$_getHostInstanc;
      return this[name] || ((_this$_getHostInstanc = this._getHostInstance(this)) === null || _this$_getHostInstanc === void 0 ? void 0 : _this$_getHostInstanc[name]);
    },
    _getOptionValue: function _getOptionValue(options) {
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var fKeys = ObjectUtils.toFlatCase(key).split(".");
      var fKey = fKeys.shift();
      return fKey ? ObjectUtils.isObject(options) ? this._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find(function(k2) {
        return ObjectUtils.toFlatCase(k2) === fKey;
      }) || ""], params), fKeys.join("."), params) : void 0 : ObjectUtils.getItemValue(options, params);
    },
    _getPTValue: function _getPTValue() {
      var _this$$config6;
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var searchInDefaultPT = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      var datasetPrefix = "data-pc-";
      var searchOut = /./g.test(key) && !!params[key.split(".")[0]];
      var _ref3 = this._getPropValue("ptOptions") || ((_this$$config6 = this.$config) === null || _this$$config6 === void 0 ? void 0 : _this$$config6.ptOptions) || {}, _ref3$mergeSections = _ref3.mergeSections, mergeSections = _ref3$mergeSections === void 0 ? true : _ref3$mergeSections, _ref3$mergeProps = _ref3.mergeProps, useMergeProps = _ref3$mergeProps === void 0 ? false : _ref3$mergeProps;
      var global2 = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
      var self2 = searchOut ? void 0 : this._usePT(this._getPT(obj, this.$name), this._getPTClassValue, key, _objectSpread$2(_objectSpread$2({}, params), {}, {
        global: global2 || {}
      }));
      var datasets = key !== "transition" && _objectSpread$2(_objectSpread$2({}, key === "root" && _defineProperty$2({}, "".concat(datasetPrefix, "name"), ObjectUtils.toFlatCase(this.$.type.name))), {}, _defineProperty$2({}, "".concat(datasetPrefix, "section"), ObjectUtils.toFlatCase(key)));
      return mergeSections || !mergeSections && self2 ? useMergeProps ? mergeProps(global2, self2, datasets) : _objectSpread$2(_objectSpread$2(_objectSpread$2({}, global2), self2), datasets) : _objectSpread$2(_objectSpread$2({}, self2), datasets);
    },
    _getPTClassValue: function _getPTClassValue() {
      var value = this._getOptionValue.apply(this, arguments);
      return ObjectUtils.isString(value) || ObjectUtils.isArray(value) ? {
        "class": value
      } : value;
    },
    _getPT: function _getPT(pt) {
      var _this = this;
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var callback = arguments.length > 2 ? arguments[2] : void 0;
      var getValue = function getValue2(value) {
        var _ref5;
        var checkSameKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var computedValue = callback ? callback(value) : value;
        var _key = ObjectUtils.toFlatCase(key);
        var _cKey = ObjectUtils.toFlatCase(_this.$name);
        return (_ref5 = checkSameKey ? _key !== _cKey ? computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key] : void 0 : computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key]) !== null && _ref5 !== void 0 ? _ref5 : computedValue;
      };
      return pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept") ? {
        _usept: pt["_usept"],
        originalValue: getValue(pt.originalValue),
        value: getValue(pt.value)
      } : getValue(pt, true);
    },
    _usePT: function _usePT(pt, callback, key, params) {
      var fn = function fn2(value2) {
        return callback(value2, key, params);
      };
      if (pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept")) {
        var _this$$config7;
        var _ref6 = pt["_usept"] || ((_this$$config7 = this.$config) === null || _this$$config7 === void 0 ? void 0 : _this$$config7.ptOptions) || {}, _ref6$mergeSections = _ref6.mergeSections, mergeSections = _ref6$mergeSections === void 0 ? true : _ref6$mergeSections, _ref6$mergeProps = _ref6.mergeProps, useMergeProps = _ref6$mergeProps === void 0 ? false : _ref6$mergeProps;
        var originalValue = fn(pt.originalValue);
        var value = fn(pt.value);
        if (originalValue === void 0 && value === void 0)
          return void 0;
        else if (ObjectUtils.isString(value))
          return value;
        else if (ObjectUtils.isString(originalValue))
          return originalValue;
        return mergeSections || !mergeSections && value ? useMergeProps ? mergeProps(originalValue, value) : _objectSpread$2(_objectSpread$2({}, originalValue), value) : value;
      }
      return fn(pt);
    },
    _useGlobalPT: function _useGlobalPT(callback, key, params) {
      return this._usePT(this.globalPT, callback, key, params);
    },
    _useDefaultPT: function _useDefaultPT(callback, key, params) {
      return this._usePT(this.defaultPT, callback, key, params);
    },
    ptm: function ptm() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, key, _objectSpread$2(_objectSpread$2({}, this.$params), params));
    },
    ptmo: function ptmo() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(obj, key, _objectSpread$2({
        instance: this
      }, params), false);
    },
    cx: function cx() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return !this.isUnstyled ? this._getOptionValue(this.$style.classes, key, _objectSpread$2(_objectSpread$2({}, this.$params), params)) : void 0;
    },
    sx: function sx() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (when) {
        var self2 = this._getOptionValue(this.$style.inlineStyles, key, _objectSpread$2(_objectSpread$2({}, this.$params), params));
        var base = this._getOptionValue(BaseComponentStyle.inlineStyles, key, _objectSpread$2(_objectSpread$2({}, this.$params), params));
        return [base, self2];
      }
      return void 0;
    }
  },
  computed: {
    globalPT: function globalPT() {
      var _this$$config8, _this2 = this;
      return this._getPT((_this$$config8 = this.$config) === null || _this$$config8 === void 0 ? void 0 : _this$$config8.pt, void 0, function(value) {
        return ObjectUtils.getItemValue(value, {
          instance: _this2
        });
      });
    },
    defaultPT: function defaultPT() {
      var _this$$config9, _this3 = this;
      return this._getPT((_this$$config9 = this.$config) === null || _this$$config9 === void 0 ? void 0 : _this$$config9.pt, void 0, function(value) {
        return _this3._getOptionValue(value, _this3.$name, _objectSpread$2({}, _this3.$params)) || ObjectUtils.getItemValue(value, _objectSpread$2({}, _this3.$params));
      });
    },
    isUnstyled: function isUnstyled() {
      var _this$$config10;
      return this.unstyled !== void 0 ? this.unstyled : (_this$$config10 = this.$config) === null || _this$$config10 === void 0 ? void 0 : _this$$config10.unstyled;
    },
    $params: function $params() {
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        parentInstance: this.$parentInstance
      };
    },
    $style: function $style() {
      return _objectSpread$2(_objectSpread$2({
        classes: void 0,
        inlineStyles: void 0,
        loadStyle: function loadStyle2() {
        },
        loadCustomStyle: function loadCustomStyle() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $config: function $config() {
      var _this$$primevue4;
      return (_this$$primevue4 = this.$primevue) === null || _this$$primevue4 === void 0 ? void 0 : _this$$primevue4.config;
    },
    $name: function $name() {
      return this.$options.hostName || this.$.type.name;
    }
  }
};
var script$1$1 = {
  name: "BaseBadge",
  "extends": script$5,
  props: {
    value: {
      type: [String, Number],
      "default": null
    },
    severity: {
      type: String,
      "default": null
    },
    size: {
      type: String,
      "default": null
    }
  },
  style: BadgeStyle,
  provide: function provide2() {
    return {
      $parentInstance: this
    };
  }
};
var script$4 = {
  name: "Badge",
  "extends": script$1$1
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "badge"
  }), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode(toDisplayString$1(_ctx.value), 1)];
  })], 16);
}
script$4.render = render$2;
var css$1 = "\n.p-icon {\n    display: inline-block;\n}\n\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n\n@-webkit-keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n@keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n";
var BaseIconStyle = BaseStyle.extend({
  name: "baseicon",
  css: css$1
});
var script$3 = {
  name: "BaseIcon",
  props: {
    label: {
      type: String,
      "default": void 0
    },
    spin: {
      type: Boolean,
      "default": false
    }
  },
  beforeMount: function beforeMount2() {
    var _this$$config;
    BaseIconStyle.loadStyle({
      nonce: (_this$$config = this.$config) === null || _this$$config === void 0 || (_this$$config = _this$$config.csp) === null || _this$$config === void 0 ? void 0 : _this$$config.nonce
    });
  },
  methods: {
    pti: function pti() {
      var isLabelEmpty = ObjectUtils.isEmpty(this.label);
      return {
        "class": ["p-icon", {
          "p-icon-spin": this.spin
        }],
        role: !isLabelEmpty ? "img" : void 0,
        "aria-label": !isLabelEmpty ? this.label : void 0,
        "aria-hidden": isLabelEmpty
      };
    }
  },
  computed: {
    $config: function $config2() {
      var _this$$primevue;
      return (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.config;
    }
  }
};
var script$2 = {
  name: "SpinnerIcon",
  "extends": script$3,
  computed: {
    pathId: function pathId() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$1 = ["clipPath"];
var _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = ["id"];
var _hoisted_5 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6 = [_hoisted_5];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3, 8, _hoisted_1$1), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6, 8, _hoisted_4)])], 16);
}
script$2.render = render$1;
function _typeof$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1(o2);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o2, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l2) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e, n2, i, u, a2 = [], f2 = true, o2 = false;
    try {
      if (i = (t2 = t2.call(r)).next, 0 === l2) {
        if (Object(t2) !== t2)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e = i.call(t2)).done) && (a2.push(e.value), a2.length !== l2); f2 = true)
          ;
    } catch (r2) {
      o2 = true, n2 = r2;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u = t2["return"](), Object(u) !== u))
          return;
      } finally {
        if (o2)
          throw n2;
      }
    }
    return a2;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(arg) {
  var key = _toPrimitive$1(arg, "string");
  return _typeof$1(key) === "symbol" ? key : String(key);
}
function _toPrimitive$1(input, hint) {
  if (_typeof$1(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var BaseDirective = {
  _getMeta: function _getMeta() {
    return [ObjectUtils.isObject(arguments.length <= 0 ? void 0 : arguments[0]) ? void 0 : arguments.length <= 0 ? void 0 : arguments[0], ObjectUtils.getItemValue(ObjectUtils.isObject(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function _getConfig(binding, vnode) {
    var _ref, _binding$instance, _vnode$ctx;
    return (_ref = (binding === null || binding === void 0 || (_binding$instance = binding.instance) === null || _binding$instance === void 0 ? void 0 : _binding$instance.$primevue) || (vnode === null || vnode === void 0 || (_vnode$ctx = vnode.ctx) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.appContext) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.config) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.globalProperties) === null || _vnode$ctx === void 0 ? void 0 : _vnode$ctx.$primevue)) === null || _ref === void 0 ? void 0 : _ref.config;
  },
  _getOptionValue: function _getOptionValue2(options) {
    var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var fKeys = ObjectUtils.toFlatCase(key).split(".");
    var fKey = fKeys.shift();
    return fKey ? ObjectUtils.isObject(options) ? BaseDirective._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find(function(k2) {
      return ObjectUtils.toFlatCase(k2) === fKey;
    }) || ""], params), fKeys.join("."), params) : void 0 : ObjectUtils.getItemValue(options, params);
  },
  _getPTValue: function _getPTValue2() {
    var _instance$binding, _instance$$config;
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var obj = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    var params = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var searchInDefaultPT = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    var getValue = function getValue2() {
      var value = BaseDirective._getOptionValue.apply(BaseDirective, arguments);
      return ObjectUtils.isString(value) || ObjectUtils.isArray(value) ? {
        "class": value
      } : value;
    };
    var datasetPrefix = "data-pc-";
    var _ref2 = ((_instance$binding = instance.binding) === null || _instance$binding === void 0 || (_instance$binding = _instance$binding.value) === null || _instance$binding === void 0 ? void 0 : _instance$binding.ptOptions) || ((_instance$$config = instance.$config) === null || _instance$$config === void 0 ? void 0 : _instance$$config.ptOptions) || {}, _ref2$mergeSections = _ref2.mergeSections, mergeSections = _ref2$mergeSections === void 0 ? true : _ref2$mergeSections, _ref2$mergeProps = _ref2.mergeProps, useMergeProps = _ref2$mergeProps === void 0 ? false : _ref2$mergeProps;
    var global2 = searchInDefaultPT ? BaseDirective._useDefaultPT(instance, instance.defaultPT(), getValue, key, params) : void 0;
    var self2 = BaseDirective._usePT(instance, BaseDirective._getPT(obj, instance.$name), getValue, key, _objectSpread(_objectSpread({}, params), {}, {
      global: global2 || {}
    }));
    var datasets = _objectSpread(_objectSpread({}, key === "root" && _defineProperty$1({}, "".concat(datasetPrefix, "name"), ObjectUtils.toFlatCase(instance.$name))), {}, _defineProperty$1({}, "".concat(datasetPrefix, "section"), ObjectUtils.toFlatCase(key)));
    return mergeSections || !mergeSections && self2 ? useMergeProps ? mergeProps(global2, self2, datasets) : _objectSpread(_objectSpread(_objectSpread({}, global2), self2), datasets) : _objectSpread(_objectSpread({}, self2), datasets);
  },
  _getPT: function _getPT2(pt) {
    var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var callback = arguments.length > 2 ? arguments[2] : void 0;
    var getValue = function getValue2(value) {
      var _computedValue$_key;
      var computedValue = callback ? callback(value) : value;
      var _key = ObjectUtils.toFlatCase(key);
      return (_computedValue$_key = computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key]) !== null && _computedValue$_key !== void 0 ? _computedValue$_key : computedValue;
    };
    return pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept") ? {
      _usept: pt["_usept"],
      originalValue: getValue(pt.originalValue),
      value: getValue(pt.value)
    } : getValue(pt);
  },
  _usePT: function _usePT2() {
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var pt = arguments.length > 1 ? arguments[1] : void 0;
    var callback = arguments.length > 2 ? arguments[2] : void 0;
    var key = arguments.length > 3 ? arguments[3] : void 0;
    var params = arguments.length > 4 ? arguments[4] : void 0;
    var fn = function fn2(value2) {
      return callback(value2, key, params);
    };
    if (pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept")) {
      var _instance$$config2;
      var _ref4 = pt["_usept"] || ((_instance$$config2 = instance.$config) === null || _instance$$config2 === void 0 ? void 0 : _instance$$config2.ptOptions) || {}, _ref4$mergeSections = _ref4.mergeSections, mergeSections = _ref4$mergeSections === void 0 ? true : _ref4$mergeSections, _ref4$mergeProps = _ref4.mergeProps, useMergeProps = _ref4$mergeProps === void 0 ? false : _ref4$mergeProps;
      var originalValue = fn(pt.originalValue);
      var value = fn(pt.value);
      if (originalValue === void 0 && value === void 0)
        return void 0;
      else if (ObjectUtils.isString(value))
        return value;
      else if (ObjectUtils.isString(originalValue))
        return originalValue;
      return mergeSections || !mergeSections && value ? useMergeProps ? mergeProps(originalValue, value) : _objectSpread(_objectSpread({}, originalValue), value) : value;
    }
    return fn(pt);
  },
  _useDefaultPT: function _useDefaultPT2() {
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var defaultPT2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var callback = arguments.length > 2 ? arguments[2] : void 0;
    var key = arguments.length > 3 ? arguments[3] : void 0;
    var params = arguments.length > 4 ? arguments[4] : void 0;
    return BaseDirective._usePT(instance, defaultPT2, callback, key, params);
  },
  _hook: function _hook2(directiveName, hookName, el, binding, vnode, prevVnode) {
    var _binding$value, _config$pt;
    var name = "on".concat(ObjectUtils.toCapitalCase(hookName));
    var config = BaseDirective._getConfig(binding, vnode);
    var instance = el === null || el === void 0 ? void 0 : el.$instance;
    var selfHook = BaseDirective._usePT(instance, BaseDirective._getPT(binding === null || binding === void 0 || (_binding$value = binding.value) === null || _binding$value === void 0 ? void 0 : _binding$value.pt, directiveName), BaseDirective._getOptionValue, "hooks.".concat(name));
    var defaultHook = BaseDirective._useDefaultPT(instance, config === null || config === void 0 || (_config$pt = config.pt) === null || _config$pt === void 0 || (_config$pt = _config$pt.directives) === null || _config$pt === void 0 ? void 0 : _config$pt[directiveName], BaseDirective._getOptionValue, "hooks.".concat(name));
    var options = {
      el,
      binding,
      vnode,
      prevVnode
    };
    selfHook === null || selfHook === void 0 || selfHook(instance, options);
    defaultHook === null || defaultHook === void 0 || defaultHook(instance, options);
  },
  _extend: function _extend(name) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var handleHook = function handleHook2(hook, el, binding, vnode, prevVnode) {
      var _el$$instance$hook, _el$$instance7;
      el._$instances = el._$instances || {};
      var config = BaseDirective._getConfig(binding, vnode);
      var $prevInstance = el._$instances[name] || {};
      var $options = ObjectUtils.isEmpty($prevInstance) ? _objectSpread(_objectSpread({}, options), options === null || options === void 0 ? void 0 : options.methods) : {};
      el._$instances[name] = _objectSpread(_objectSpread({}, $prevInstance), {}, {
        /* new instance variables to pass in directive methods */
        $name: name,
        $host: el,
        $binding: binding,
        $el: $prevInstance["$el"] || void 0,
        $style: _objectSpread({
          classes: void 0,
          inlineStyles: void 0,
          loadStyle: function loadStyle2() {
          }
        }, options === null || options === void 0 ? void 0 : options.style),
        $config: config,
        /* computed instance variables */
        defaultPT: function defaultPT2() {
          return BaseDirective._getPT(config === null || config === void 0 ? void 0 : config.pt, void 0, function(value) {
            var _value$directives;
            return value === null || value === void 0 || (_value$directives = value.directives) === null || _value$directives === void 0 ? void 0 : _value$directives[name];
          });
        },
        isUnstyled: function isUnstyled2() {
          var _el$$instance, _el$$instance2;
          return ((_el$$instance = el.$instance) === null || _el$$instance === void 0 || (_el$$instance = _el$$instance.$binding) === null || _el$$instance === void 0 || (_el$$instance = _el$$instance.value) === null || _el$$instance === void 0 ? void 0 : _el$$instance.unstyled) !== void 0 ? (_el$$instance2 = el.$instance) === null || _el$$instance2 === void 0 || (_el$$instance2 = _el$$instance2.$binding) === null || _el$$instance2 === void 0 || (_el$$instance2 = _el$$instance2.value) === null || _el$$instance2 === void 0 ? void 0 : _el$$instance2.unstyled : config === null || config === void 0 ? void 0 : config.unstyled;
        },
        /* instance's methods */
        ptm: function ptm2() {
          var _el$$instance3;
          var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return BaseDirective._getPTValue(el.$instance, (_el$$instance3 = el.$instance) === null || _el$$instance3 === void 0 || (_el$$instance3 = _el$$instance3.$binding) === null || _el$$instance3 === void 0 || (_el$$instance3 = _el$$instance3.value) === null || _el$$instance3 === void 0 ? void 0 : _el$$instance3.pt, key, _objectSpread({}, params));
        },
        ptmo: function ptmo2() {
          var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
          var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return BaseDirective._getPTValue(el.$instance, obj, key, params, false);
        },
        cx: function cx2() {
          var _el$$instance4, _el$$instance5;
          var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return !((_el$$instance4 = el.$instance) !== null && _el$$instance4 !== void 0 && _el$$instance4.isUnstyled()) ? BaseDirective._getOptionValue((_el$$instance5 = el.$instance) === null || _el$$instance5 === void 0 || (_el$$instance5 = _el$$instance5.$style) === null || _el$$instance5 === void 0 ? void 0 : _el$$instance5.classes, key, _objectSpread({}, params)) : void 0;
        },
        sx: function sx2() {
          var _el$$instance6;
          var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          var when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return when ? BaseDirective._getOptionValue((_el$$instance6 = el.$instance) === null || _el$$instance6 === void 0 || (_el$$instance6 = _el$$instance6.$style) === null || _el$$instance6 === void 0 ? void 0 : _el$$instance6.inlineStyles, key, _objectSpread({}, params)) : void 0;
        }
      }, $options);
      el.$instance = el._$instances[name];
      (_el$$instance$hook = (_el$$instance7 = el.$instance)[hook]) === null || _el$$instance$hook === void 0 || _el$$instance$hook.call(_el$$instance7, el, binding, vnode, prevVnode);
      BaseDirective._hook(name, hook, el, binding, vnode, prevVnode);
    };
    return {
      created: function created2(el, binding, vnode, prevVnode) {
        handleHook("created", el, binding, vnode, prevVnode);
      },
      beforeMount: function beforeMount3(el, binding, vnode, prevVnode) {
        var _config$csp, _el$$instance8, _el$$instance9, _config$csp2;
        var config = BaseDirective._getConfig(binding, vnode);
        BaseStyle.loadStyle(void 0, {
          nonce: config === null || config === void 0 || (_config$csp = config.csp) === null || _config$csp === void 0 ? void 0 : _config$csp.nonce
        });
        !((_el$$instance8 = el.$instance) !== null && _el$$instance8 !== void 0 && _el$$instance8.isUnstyled()) && ((_el$$instance9 = el.$instance) === null || _el$$instance9 === void 0 || (_el$$instance9 = _el$$instance9.$style) === null || _el$$instance9 === void 0 ? void 0 : _el$$instance9.loadStyle(void 0, {
          nonce: config === null || config === void 0 || (_config$csp2 = config.csp) === null || _config$csp2 === void 0 ? void 0 : _config$csp2.nonce
        }));
        handleHook("beforeMount", el, binding, vnode, prevVnode);
      },
      mounted: function mounted3(el, binding, vnode, prevVnode) {
        handleHook("mounted", el, binding, vnode, prevVnode);
      },
      beforeUpdate: function beforeUpdate2(el, binding, vnode, prevVnode) {
        handleHook("beforeUpdate", el, binding, vnode, prevVnode);
      },
      updated: function updated2(el, binding, vnode, prevVnode) {
        handleHook("updated", el, binding, vnode, prevVnode);
      },
      beforeUnmount: function beforeUnmount2(el, binding, vnode, prevVnode) {
        handleHook("beforeUnmount", el, binding, vnode, prevVnode);
      },
      unmounted: function unmounted3(el, binding, vnode, prevVnode) {
        handleHook("unmounted", el, binding, vnode, prevVnode);
      }
    };
  },
  extend: function extend2() {
    var _BaseDirective$_getMe = BaseDirective._getMeta.apply(BaseDirective, arguments), _BaseDirective$_getMe2 = _slicedToArray(_BaseDirective$_getMe, 2), name = _BaseDirective$_getMe2[0], options = _BaseDirective$_getMe2[1];
    return _objectSpread({
      extend: function extend3() {
        var _BaseDirective$_getMe3 = BaseDirective._getMeta.apply(BaseDirective, arguments), _BaseDirective$_getMe4 = _slicedToArray(_BaseDirective$_getMe3, 2), _name = _BaseDirective$_getMe4[0], _options = _BaseDirective$_getMe4[1];
        return BaseDirective.extend(_name, _objectSpread(_objectSpread(_objectSpread({}, options), options === null || options === void 0 ? void 0 : options.methods), _options));
      }
    }, BaseDirective._extend(name, options));
  }
};
var css = "\n@keyframes ripple {\n    100% {\n        opacity: 0;\n        transform: scale(2.5);\n    }\n}\n\n@layer primevue {\n    .p-ripple {\n        overflow: hidden;\n        position: relative;\n    }\n\n    .p-ink {\n        display: block;\n        position: absolute;\n        background: rgba(255, 255, 255, 0.5);\n        border-radius: 100%;\n        transform: scale(0);\n        pointer-events: none;\n    }\n\n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n\n    .p-ripple-disabled .p-ink {\n        display: none !important;\n    }\n}\n";
var classes$1 = {
  root: "p-ink"
};
var RippleStyle = BaseStyle.extend({
  name: "ripple",
  css,
  classes: classes$1
});
var BaseRipple = BaseDirective.extend({
  style: RippleStyle
});
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var Ripple = BaseRipple.extend("ripple", {
  mounted: function mounted2(el) {
    var _el$$instance;
    var config = el === null || el === void 0 || (_el$$instance = el.$instance) === null || _el$$instance === void 0 ? void 0 : _el$$instance.$config;
    if (config && config.ripple) {
      this.create(el);
      this.bindEvents(el);
      el.setAttribute("data-pd-ripple", true);
    }
  },
  unmounted: function unmounted2(el) {
    this.remove(el);
  },
  timeout: void 0,
  methods: {
    bindEvents: function bindEvents(el) {
      el.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function unbindEvents(el) {
      el.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    create: function create(el) {
      var ink = DomHandler.createElement("span", {
        role: "presentation",
        "aria-hidden": true,
        "data-p-ink": true,
        "data-p-ink-active": false,
        "class": !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this),
        "p-bind": this.ptm("root")
      });
      el.appendChild(ink);
      this.$el = ink;
    },
    remove: function remove(el) {
      var ink = this.getInk(el);
      if (ink) {
        this.unbindEvents(el);
        ink.removeEventListener("animationend", this.onAnimationEnd);
        ink.remove();
      }
    },
    onMouseDown: function onMouseDown(event) {
      var _this = this;
      var target = event.currentTarget;
      var ink = this.getInk(target);
      if (!ink || getComputedStyle(ink, null).display === "none") {
        return;
      }
      !this.isUnstyled() && DomHandler.removeClass(ink, "p-ink-active");
      ink.setAttribute("data-p-ink-active", "false");
      if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
        var d2 = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));
        ink.style.height = d2 + "px";
        ink.style.width = d2 + "px";
      }
      var offset = DomHandler.getOffset(target);
      var x2 = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
      var y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
      ink.style.top = y + "px";
      ink.style.left = x2 + "px";
      !this.isUnstyled() && DomHandler.addClass(ink, "p-ink-active");
      ink.setAttribute("data-p-ink-active", "true");
      this.timeout = setTimeout(function() {
        if (ink) {
          !_this.isUnstyled() && DomHandler.removeClass(ink, "p-ink-active");
          ink.setAttribute("data-p-ink-active", "false");
        }
      }, 401);
    },
    onAnimationEnd: function onAnimationEnd(event) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      !this.isUnstyled() && DomHandler.removeClass(event.currentTarget, "p-ink-active");
      event.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function getInk(el) {
      return el && el.children ? _toConsumableArray(el.children).find(function(child) {
        return DomHandler.getAttribute(child, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
});
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var classes = {
  root: function root2(_ref) {
    var _ref2;
    var instance = _ref.instance, props = _ref.props;
    return ["p-button p-component", (_ref2 = {
      "p-button-icon-only": instance.hasIcon && !props.label && !props.badge,
      "p-button-vertical": (props.iconPos === "top" || props.iconPos === "bottom") && props.label,
      "p-disabled": instance.$attrs.disabled || instance.$attrs.disabled === "" || props.loading,
      "p-button-loading": props.loading,
      "p-button-loading-label-only": props.loading && !instance.hasIcon && props.label,
      "p-button-link": props.link
    }, _defineProperty(_ref2, "p-button-".concat(props.severity), props.severity), _defineProperty(_ref2, "p-button-raised", props.raised), _defineProperty(_ref2, "p-button-rounded", props.rounded), _defineProperty(_ref2, "p-button-text", props.text), _defineProperty(_ref2, "p-button-outlined", props.outlined), _defineProperty(_ref2, "p-button-sm", props.size === "small"), _defineProperty(_ref2, "p-button-lg", props.size === "large"), _defineProperty(_ref2, "p-button-plain", props.plain), _ref2)];
  },
  loadingIcon: "p-button-loading-icon pi-spin",
  icon: function icon(_ref3) {
    var props = _ref3.props;
    return ["p-button-icon", {
      "p-button-icon-left": props.iconPos === "left" && props.label,
      "p-button-icon-right": props.iconPos === "right" && props.label,
      "p-button-icon-top": props.iconPos === "top" && props.label,
      "p-button-icon-bottom": props.iconPos === "bottom" && props.label
    }];
  },
  label: "p-button-label"
};
var ButtonStyle = BaseStyle.extend({
  name: "button",
  classes
});
var script$1 = {
  name: "BaseButton",
  "extends": script$5,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    iconPos: {
      type: String,
      "default": "left"
    },
    iconClass: {
      type: String,
      "default": null
    },
    badge: {
      type: String,
      "default": null
    },
    badgeClass: {
      type: String,
      "default": null
    },
    loading: {
      type: Boolean,
      "default": false
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    link: {
      type: Boolean,
      "default": false
    },
    severity: {
      type: String,
      "default": null
    },
    raised: {
      type: Boolean,
      "default": false
    },
    rounded: {
      type: Boolean,
      "default": false
    },
    text: {
      type: Boolean,
      "default": false
    },
    outlined: {
      type: Boolean,
      "default": false
    },
    size: {
      type: String,
      "default": null
    },
    plain: {
      type: Boolean,
      "default": false
    }
  },
  style: ButtonStyle,
  provide: function provide3() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Button",
  "extends": script$1,
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _this$$parent, _this$$parent2;
      return this.ptm(key, {
        parent: {
          props: (_this$$parent = this.$parent) === null || _this$$parent === void 0 ? void 0 : _this$$parent.$props,
          state: (_this$$parent2 = this.$parent) === null || _this$$parent2 === void 0 ? void 0 : _this$$parent2.$data
        },
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function disabled() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function defaultAriaLabel() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs["aria-label"];
    },
    hasIcon: function hasIcon() {
      return this.icon || this.$slots.icon;
    }
  },
  components: {
    SpinnerIcon: script$2,
    Badge: script$4
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["aria-label", "disabled", "data-pc-severity"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_Badge = resolveComponent("Badge");
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    "class": _ctx.cx("root"),
    type: "button",
    "aria-label": $options.defaultAriaLabel,
    disabled: $options.disabled
  }, $options.getPTOptions("root"), {
    "data-pc-name": "button",
    "data-pc-severity": _ctx.severity
  }), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [_ctx.loading ? renderSlot(_ctx.$slots, "loadingicon", {
      key: 0,
      "class": normalizeClass([_ctx.cx("loadingIcon"), _ctx.cx("icon")])
    }, function() {
      return [_ctx.loadingIcon ? (openBlock(), createElementBlock("span", mergeProps({
        key: 0,
        "class": [_ctx.cx("loadingIcon"), _ctx.cx("icon"), _ctx.loadingIcon]
      }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
        key: 1,
        "class": [_ctx.cx("loadingIcon"), _ctx.cx("icon")],
        spin: ""
      }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
    }) : renderSlot(_ctx.$slots, "icon", {
      key: 1,
      "class": normalizeClass([_ctx.cx("icon")])
    }, function() {
      return [_ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
        key: 0,
        "class": [_ctx.cx("icon"), _ctx.icon, _ctx.iconClass]
      }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true)];
    }), createElementVNode("span", mergeProps({
      "class": _ctx.cx("label")
    }, _ctx.ptm("label")), toDisplayString$1(_ctx.label || " "), 17), _ctx.badge ? (openBlock(), createBlock(_component_Badge, mergeProps({
      key: 2,
      value: _ctx.badge,
      "class": _ctx.badgeClass,
      unstyled: _ctx.unstyled
    }, _ctx.ptm("badge")), null, 16, ["value", "class", "unstyled"])) : createCommentVNode("", true)];
  })], 16, _hoisted_1)), [[_directive_ripple]]);
}
script.render = render;
const primevue_TdXjRgL1MA = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.component("Button", script);
});
const plugins = [
  unhead_WFIwUEKfov,
  plugin$1,
  plugin,
  revive_payload_server_QKWDBuGpcc,
  components_plugin_KR1HBZs4kY,
  plugin_FRmGFsEaPh,
  plugin_server_tmwfwJppjt,
  cookies_fWsGjKD4Pq,
  i18n_VfGcjrvSkj,
  primevue_TdXjRgL1MA
];
const _imports_0$3 = "" + __publicAssetsURL("AL.png");
const LoadingPage_vue_vue_type_style_index_0_scoped_e71b8ca2_lang$1 = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$e = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen w-full flex items-center justify-center" }, _attrs))} data-v-e71b8ca2><h2 class="animate" data-v-e71b8ca2><img${ssrRenderAttr("src", _imports_0$3)} class="w-40" data-v-e71b8ca2></h2></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoadingPage.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e71b8ca2"]]);
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a2;
    return props ? h(component, props, slots) : (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
  } };
};
const layouts = {
  default: () => Promise.resolve().then(function() {
    return _default;
  }).then((m2) => m2.default || m2),
  home: () => Promise.resolve().then(function() {
    return home$1;
  }).then((m2) => m2.default || m2)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_1$1 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            // @ts-expect-error seems to be an issue in vue types
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = /* @__PURE__ */ defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a2, _b2;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b2 = (_a2 = context.slots).default) == null ? void 0 : _b2.call(_a2);
      }
      return h(
        // @ts-expect-error seems to be an issue in vue types
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m2) => {
    var _a2;
    return ((_a2 = m2.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2$1 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const app_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$d = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n({ useScope: "global" });
    locale.value = "en";
    const loadingPage = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingPage = __nuxt_component_0$1;
      const _component_NuxtLayout = __nuxt_component_1$1;
      const _component_NuxtPage = __nuxt_component_2$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LoadingPage, {
        style: !unref(loadingPage) ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, { transition: "" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage, { transition: "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const AppComponent = _sfc_main$d;
const _sfc_main$c = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
      return error404$1;
    }).then((r) => r.default || r));
    const _Error = /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
      return error500$1;
    }).then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.8.0_eslint@8.52.0_typescript@4.9.5_vite@2.9.0/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$c;
const _sfc_main$b = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
      return islandRenderer$1;
    }).then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.8.0_eslint@8.52.0_typescript@4.9.5_vite@2.9.0/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const RootComponent = _sfc_main$b;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
const tailwind = `/*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.fixed{position:fixed}.relative{position:relative}.bottom-20{bottom:5rem}.left-0{left:0}.right-0{right:0}.z-\\[100\\]{z-index:100}.mx-auto{margin-left:auto;margin-right:auto}.my-auto{margin-bottom:auto;margin-top:auto}.mb-20{margin-bottom:5rem}.mb-5{margin-bottom:1.25rem}.mt-2{margin-top:.5rem}.mt-5{margin-top:1.25rem}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-screen{height:100vh}.w-40{width:10rem}.w-full{width:100%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}.animate-bounce{animation:bounce 1s infinite}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-5{gap:1.25rem}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.bg-\\[\\#383838\\]{--tw-bg-opacity:1;background-color:rgb(56 56 56/var(--tw-bg-opacity))}.bg-\\[\\#3f3f40\\]{--tw-bg-opacity:1;background-color:rgb(63 63 64/var(--tw-bg-opacity))}.bg-ranko-500{--tw-bg-opacity:1;background-color:rgb(243 156 18/var(--tw-bg-opacity))}.p-2{padding:.5rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-20{padding-bottom:5rem;padding-top:5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-center{text-align:center}.text-justify{text-align:justify}.text-\\[3rem\\]{font-size:3rem}.text-\\[5rem\\]{font-size:5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.italic{font-style:italic}.text-\\[\\#1e1e1f\\]{--tw-text-opacity:1;color:rgb(30 30 31/var(--tw-text-opacity))}.text-\\[\\#f39c12\\]{--tw-text-opacity:1;color:rgb(243 156 18/var(--tw-text-opacity))}.text-\\[\\#fafafa\\]{--tw-text-opacity:1;color:rgb(250 250 250/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-ranko-500{--tw-text-opacity:1;color:rgb(243 156 18/var(--tw-text-opacity))}.opacity-25{opacity:.25}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-md,.shadow-xl{box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.after\\:content-\\[\\'\\2c \\'\\]:after{--tw-content:",";content:var(--tw-content)}.hover\\:bg-\\[\\#1e1e1f\\]:hover{--tw-bg-opacity:1;background-color:rgb(30 30 31/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:mb-0{margin-bottom:0}.md\\:block{display:block}.md\\:w-\\[25\\%\\]{width:25%}}@media (min-width:1280px){.xl\\:block{display:block}.xl\\:after\\:content-\\[\\'\\'\\]:after{--tw-content:"";content:var(--tw-content)}}`;
const style = ':root{--bg-gradient-onyx:linear-gradient(to bottom right,#3f3f40 3%,#303030 97%);--bg-gradient-jet:linear-gradient(to bottom right,rgba(45,45,46,.251),rgba(27,27,29,0)),#202022;--bg-gradient-yellow-1:linear-gradient(to bottom right,#ffda6b,rgba(255,192,97,0) 50%);--bg-gradient-yellow-2:linear-gradient(135deg,rgba(255,218,107,.251),rgba(255,187,92,0) 59.86%),#202022;--border-gradient-onyx:linear-gradient(to bottom right,#404040,rgba(64,64,64,0) 50%);--text-gradient-yellow:linear-gradient(90deg,#ffdb70,#ffbb5c);--jet:#383838;--onyx:#22262a;--eerie-black-1:#202022;--eerie-black-2:#1e1e1f;--smoky-black:#121212;--white-1:#fff;--white-2:#fafafa;--orange-yellow-crayola:#ffdb70;--vegas-gold:#f39c12;--light-gray:#d6d6d6;--light-gray-70:hsla(0,0%,84%,.7);--bittersweet-shimmer:#b84c4c;--text-gradient-yellow:#f39c12;--ff-poppins:"Poppins",sans-serif;--fs-1:24px;--fs-2:18px;--fs-3:17px;--fs-4:16px;--fs-5:15px;--fs-6:14px;--fs-7:13px;--fs-8:11px;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--shadow-1:-4px 8px 24px rgba(0,0,0,.25);--shadow-2:0 16px 30px rgba(0,0,0,.25);--shadow-3:0 16px 40px rgba(0,0,0,.25);--shadow-4:0 25px 50px rgba(0,0,0,.15);--shadow-5:0 24px 80px rgba(0,0,0,.25);--transition-1:0.25s ease;--transition-2:0.5s ease-in-out}*,:after,:before{box-sizing:border-box;margin:0;padding:0}a{text-decoration:none}li{list-style:none}a,button,img,ion-icon,span,time{display:block}button{border:none;cursor:pointer;text-align:left}button,input,textarea{background:none;font:inherit}input,textarea{display:block;width:100%}::-moz-selection{background:#f39c12;background:var(--vegas-gold);color:#121212;color:var(--smoky-black)}::selection{background:#f39c12;background:var(--vegas-gold);color:#121212;color:var(--smoky-black)}:focus{outline-color:#f39c12;outline-color:var(--vegas-gold)}html{font-family:Poppins,sans-serif;font-family:var(--ff-poppins)}body{background:#121212;background:var(--smoky-black)}.sidebar,article{background:#1e1e1f;background:var(--eerie-black-2);border:1px solid #383838;border:1px solid var(--jet);border-radius:20px;box-shadow:-4px 8px 24px rgba(0,0,0,.25);box-shadow:var(--shadow-1);padding:15px;z-index:1}.separator{background:#383838;background:var(--jet);height:1px;margin:16px 0;width:100%}.icon-box{align-items:center;background:linear-gradient(to bottom right,#404040,rgba(64,64,64,0) 50%);background:var(--border-gradient-onyx);border-radius:8px;box-shadow:-4px 8px 24px rgba(0,0,0,.25);box-shadow:var(--shadow-1);color:#f39c12;color:var(--vegas-gold);display:flex;font-size:16px;height:30px;justify-content:center;position:relative;width:30px;z-index:1}.icon-box:before{background:#202022;background:var(--eerie-black-1);border-radius:inherit;content:"";inset:1px;position:absolute;z-index:-1}.icon-box ion-icon{--ionicon-stroke-width:35px}article{display:none}article.active{animation:fade .5s ease backwards;display:block}@keyframes fade{0%{opacity:0}to{opacity:1}}.h2,.h3,.h4,.h5{color:#fafafa;color:var(--white-2);text-transform:capitalize}.h2{font-size:24px;font-size:var(--fs-1)}.h3{font-size:18px;font-size:var(--fs-2)}.h4{font-size:16px;font-size:var(--fs-4)}.h5{font-size:13px;font-size:var(--fs-7);font-weight:500;font-weight:var(--fw-500)}.article-title{padding-bottom:7px;position:relative}.article-title:after{background:#f39c12;background:var(--text-gradient-yellow);border-radius:3px;bottom:0;content:"";height:3px;left:0;position:absolute;width:30px}.has-scrollbar::-webkit-scrollbar{height:5px;width:5px}.has-scrollbar::-webkit-scrollbar-track{background:#22262a;background:var(--onyx);border-radius:5px}.has-scrollbar::-webkit-scrollbar-thumb{background:#f39c12;background:var(--vegas-gold);border-radius:5px}.has-scrollbar::-webkit-scrollbar-button{width:20px}.content-card{background:linear-gradient(to bottom right,#404040,rgba(64,64,64,0) 50%);background:var(--border-gradient-onyx);border-radius:14px;box-shadow:0 16px 30px rgba(0,0,0,.25);box-shadow:var(--shadow-2);cursor:pointer;padding:45px 15px 15px;position:relative;z-index:1}.content-card:before{background:linear-gradient(to bottom right,rgba(45,45,46,.251),rgba(27,27,29,0)),#202022;background:var(--bg-gradient-jet);border-radius:inherit;content:"";inset:1px;position:absolute;z-index:-1}main{margin:15px 12px 75px;min-width:259px}.sidebar{margin-bottom:15px;max-height:112px;overflow:hidden;transition:.5s ease-in-out;transition:var(--transition-2)}.sidebar.active{max-height:405px}.sidebar-info{align-items:center;display:flex;gap:15px;justify-content:flex-start;position:relative}.avatar-box{background:linear-gradient(to bottom right,#3f3f40 3%,#303030 97%);background:var(--bg-gradient-onyx);border-radius:20px}.info-content .name{color:#fafafa;color:var(--white-2);font-size:17px;font-size:var(--fs-3);font-weight:500;font-weight:var(--fw-500);letter-spacing:-.25px;margin-bottom:10px}.info-content .title{background:#22262a;background:var(--onyx);border-radius:8px;color:#fff;color:var(--white-1);font-size:11px;font-size:var(--fs-8);font-weight:300;font-weight:var(--fw-300);padding:3px 12px;width:-moz-max-content;width:max-content}.info_more-btn{background:linear-gradient(to bottom right,#404040,rgba(64,64,64,0) 50%);background:var(--border-gradient-onyx);border-radius:0 15px;box-shadow:0 16px 30px rgba(0,0,0,.25);box-shadow:var(--shadow-2);color:#f39c12;color:var(--vegas-gold);font-size:13px;padding:10px;right:-15px;top:-15px;z-index:1}.info_more-btn,.info_more-btn:before{position:absolute;transition:.25s ease;transition:var(--transition-1)}.info_more-btn:before{background:linear-gradient(to bottom right,rgba(45,45,46,.251),rgba(27,27,29,0)),#202022;background:var(--bg-gradient-jet);border-radius:inherit;content:"";inset:1px;z-index:-1}.info_more-btn:focus,.info_more-btn:hover{background:linear-gradient(to bottom right,#ffda6b,rgba(255,192,97,0) 50%);background:var(--bg-gradient-yellow-1)}.info_more-btn:focus:before,.info_more-btn:hover:before{background:linear-gradient(135deg,rgba(255,218,107,.251),rgba(255,187,92,0) 59.86%),#202022;background:var(--bg-gradient-yellow-2)}.info_more-btn span{display:none}.sidebar-info_more{opacity:0;transition:.5s ease-in-out;transition:var(--transition-2);visibility:hidden}.sidebar.active .sidebar-info_more{opacity:1;visibility:visible}.contacts-list{display:grid;gap:16px;grid-template-columns:1fr}.contact-item{align-items:center;display:flex;gap:16px;min-width:100%}.contact-info{max-width:calc(100% - 46px);width:calc(100% - 46px)}.contact-title{color:hsla(0,0%,84%,.7);color:var(--light-gray-70);font-size:11px;font-size:var(--fs-8);margin-bottom:2px;text-transform:uppercase}.contact-info :is(.contact-link,time,address){color:#fafafa;color:var(--white-2);font-size:13px;font-size:var(--fs-7)}.contact-info address{font-style:normal}.social-list{align-items:center;display:flex;gap:15px;justify-content:flex-start;padding-bottom:4px;padding-left:7px}.social-item .social-link{color:hsla(0,0%,84%,.7);color:var(--light-gray-70);font-size:18px}.social-item .social-link:hover{color:#d6d6d6;color:var(--light-gray)}.navbar{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(43,43,44,.75);border:1px solid #383838;border:1px solid var(--jet);border-radius:12px 12px 0 0;bottom:0;box-shadow:0 16px 30px rgba(0,0,0,.25);box-shadow:var(--shadow-2);left:0;position:fixed;width:100%;z-index:5}.navbar-list{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding:0 10px}.navbar-link{color:#d6d6d6;color:var(--light-gray);font-size:11px;font-size:var(--fs-8);padding:20px 7px;transition:color .25s ease;transition:color var(--transition-1)}.navbar-link:focus,.navbar-link:hover{color:hsla(0,0%,84%,.7);color:var(--light-gray-70)}.navbar-link.active{color:#f39c12;color:var(--vegas-gold)}.about .article-title{margin-bottom:15px}.about-text{color:#d6d6d6;color:var(--light-gray);font-size:14px;font-size:var(--fs-6);font-weight:300;font-weight:var(--fw-300);line-height:1.6}.about-text p{margin-bottom:15px}.service{margin-bottom:35px}.service-title{margin-bottom:20px}.service-list{display:grid;gap:20px;grid-template-columns:1fr}.service-item{background:linear-gradient(to bottom right,#404040,rgba(64,64,64,0) 50%);background:var(--border-gradient-onyx);border-radius:14px;box-shadow:0 16px 30px rgba(0,0,0,.25);box-shadow:var(--shadow-2);padding:20px;position:relative;z-index:1}.service-item:before{background:linear-gradient(to bottom right,rgba(45,45,46,.251),rgba(27,27,29,0)),#202022;background:var(--bg-gradient-jet);border-radius:inherit;content:"";inset:1px;position:absolute;z-index:-1}.service-icon-box{margin-bottom:10px}.service-icon-box img{margin:auto}.service-content-box{text-align:center}.service-item-title{margin-bottom:7px}.service-item-text{color:#d6d6d6;color:var(--light-gray);font-size:14px;font-size:var(--fs-6);font-weight:var(--fw-3);line-height:1.6}.testimonials{margin-bottom:30px}.testimonials-title{margin-bottom:20px}.testimonials-list{align-items:flex-start;display:flex;gap:15px;justify-content:flex-start;margin:0 -15px;overflow-x:auto;overscroll-behavior-inline:contain;padding:25px 15px 35px;scroll-behavior:smooth;scroll-snap-type:inline mandatory}.testimonials-item{min-width:100%;scroll-snap-align:center}.testimonials-avatar-box{background:linear-gradient(to bottom right,#3f3f40 3%,#303030 97%);background:var(--bg-gradient-onyx);border-radius:14px;box-shadow:-4px 8px 24px rgba(0,0,0,.25);box-shadow:var(--shadow-1);left:0;position:absolute;top:0;transform:translate(15px,-25px)}.testimonials-item-title{margin-bottom:7px}.testimonials-text{line-clamp:4;-webkit-line-clamp:4;-webkit-box-orient:vertical;color:#d6d6d6;color:var(--light-gray);display:-webkit-box;font-size:14px;font-size:var(--fs-6);font-weight:300;font-weight:var(--fw-300);line-height:1.6;overflow:hidden}.modal-container{align-items:center;display:flex;height:100%;justify-content:center;left:0;overflow-y:auto;overscroll-behavior:contain;pointer-events:none;position:fixed;top:0;visibility:hidden;width:100%;z-index:20}.modal-container::-webkit-scrollbar{display:none}.modal-container.active{pointer-events:all;visibility:visible}.overlay{background:#0d0d0d;height:100vh;left:0;opacity:0;pointer-events:none;position:fixed;top:0;transition:.25s ease;transition:var(--transition-1);visibility:hidden;width:100%;z-index:1}.overlay.active{opacity:.8;pointer-events:all;visibility:visible}.testimonials-modal{background:#1e1e1f;background:var(--eerie-black-2);border:1px solid #383838;border:1px solid var(--jet);border-radius:14px;box-shadow:0 24px 80px rgba(0,0,0,.25);box-shadow:var(--shadow-5);margin:15px 12px;opacity:0;padding:15px;position:relative;transform:scale(1.2);transition:.25s ease;transition:var(--transition-1);z-index:2}.modal-container.active .testimonials-modal{opacity:1;transform:scale(1)}.modal-close-btn{align-items:center;background:#22262a;background:var(--onyx);border-radius:8px;color:#fafafa;color:var(--white-2);display:flex;font-size:18px;height:32px;justify-content:center;opacity:.7;position:absolute;right:15px;top:15px;width:32px}.modal-close-btn:focus,.modal-close-btn:hover{opacity:1}.modal-close-btn ion-icon{--ionicon-stroke-width:50px}.modal-avatar-box{background:linear-gradient(to bottom right,#3f3f40 3%,#303030 97%);background:var(--bg-gradient-onyx);border-radius:14px;box-shadow:0 16px 30px rgba(0,0,0,.25);box-shadow:var(--shadow-2);margin-bottom:15px;width:-moz-max-content;width:max-content}.modal-img-wrapper>img{display:none}.modal-title{margin-bottom:4px}.modal-content time{color:hsla(0,0%,84%,.7);color:var(--light-gray-70);margin-bottom:10px}.modal-content p,.modal-content time{font-size:14px;font-size:var(--fs-6);font-weight:300;font-weight:var(--fw-300)}.modal-content p{color:#d6d6d6;color:var(--light-gray);line-height:1.6}.clients{margin-bottom:15px}.clients-list{align-items:flex-start;display:flex;gap:15px;justify-content:flex-start;margin:0 -15px;overflow-x:auto;overscroll-behavior-inline:contain;padding:25px;scroll-behavior:smooth;scroll-padding-inline:25px;scroll-snap-type:inline mandatory}.clients-item{min-width:50%;scroll-snap-align:start}.clients-item img{filter:grayscale(1);transition:.25s ease;transition:var(--transition-1);width:100%}.clients-item img:hover{filter:grayscale(0)}.article-title,.timeline{margin-bottom:30px}.timeline .title-wrapper{align-items:center;display:flex;gap:15px;margin-bottom:25px}.timeline-list{font-size:14px;font-size:var(--fs-6);margin-left:45px}.timeline-item{position:relative}.timeline-item:not(:last-child){margin-bottom:20px}.timeline-item-title{font-size:14px;font-size:var(--fs-6);line-height:1.3;margin-bottom:7px}.timeline-list span{color:#f39c12;color:var(--vegas-gold);font-weight:400;font-weight:var(--fw-400);line-height:1.6}.timeline-item:not(:last-child):before{background:#383838;background:var(--jet);content:"";height:calc(100% + 50px);left:-30px;position:absolute;top:-25px;width:1px}.timeline-item:after{background:#f39c12;background:var(--text-gradient-yellow);border-radius:50%;box-shadow:0 0 0 4px #383838;box-shadow:0 0 0 4px var(--jet);content:"";height:6px;left:-33px;position:absolute;top:5px;width:6px}.timeline-text{color:#d6d6d6;color:var(--light-gray);font-weight:300;font-weight:var(--fw-300);line-height:1.6}.skills-title{margin-bottom:20px}.skills-list{padding:20px}.skills-item:not(:last-child){margin-bottom:15px}.skill .title-wrapper{align-items:center;display:flex;gap:5px;margin-bottom:8px}.skill .title-wrapper data{color:#d6d6d6;color:var(--light-gray);font-size:13px;font-size:var(--fs-7);font-weight:300;font-weight:var(--fw-300)}.skill-progress-bg{background:#383838;background:var(--jet);border-radius:10px;height:8px;width:100%}.skill-progress-fill{background:#f39c12;background:var(--text-gradient-yellow);border-radius:inherit;height:100%}.filter-list{display:none}.filter-select-box{margin-bottom:25px;position:relative}.filter-select{align-items:center;background:#1e1e1f;background:var(--eerie-black-2);border:1px solid #383838;border:1px solid var(--jet);border-radius:14px;color:#d6d6d6;color:var(--light-gray);display:flex;font-size:14px;font-size:var(--fs-6);font-weight:300;font-weight:var(--fw-300);justify-content:space-between;padding:12px 16px;width:100%}.filter-select.active .select-icon{transform:rotate(.5turn)}.select-list{background:#1e1e1f;background:var(--eerie-black-2);border:1px solid #383838;border:1px solid var(--jet);border-radius:14px;opacity:0;padding:6px;pointer-events:none;position:absolute;top:calc(100% + 6px);transition:.15s ease-in-out;visibility:hidden;width:100%;z-index:2}.filter-select.active+.select-list{opacity:1;pointer-events:all;visibility:visible}.select-item button{background:#1e1e1f;background:var(--eerie-black-2);border-radius:8px;color:#d6d6d6;color:var(--light-gray);font-size:14px;font-size:var(--fs-6);font-weight:300;font-weight:var(--fw-300);padding:8px 10px;text-transform:capitalize;width:100%}.select-item button:hover{--eerie-black-2:#323234}.project-list{display:grid;gap:30px;grid-template-columns:1fr;margin-bottom:10px}.project-item{display:none}.project-item.active{animation:scaleUp .25s ease forwards;display:block}@keyframes scaleUp{0%{transform:scale(.5)}to{transform:scale(1)}}.project-item>a{width:100%}.project-img{border-radius:16px;height:200px;margin-bottom:15px;overflow:hidden;position:relative;width:100%}.project-img:before{background:transparent;content:"";height:100%;left:0;position:absolute;top:0;transition:.25s ease;transition:var(--transition-1);width:100%;z-index:1}.project-item>a:hover .project-img:before{background:rgba(0,0,0,.5)}.project-item-icon-box{--scale:0.8;background:#383838;background:var(--jet);border-radius:12px;color:#f39c12;color:var(--vegas-gold);font-size:20px;left:50%;opacity:0;padding:18px;position:absolute;top:50%;transform:translate(-50%,-50%) scale(var(--scale));transition:.25s ease;transition:var(--transition-1);z-index:1}.project-item>a:hover .project-item-icon-box{--scale:1;opacity:1}.project-item-icon-box ion-icon{--ionicon-stroke-width:50px}.project-img img{height:100%;-o-object-fit:cover;object-fit:cover;transition:.25s ease;transition:var(--transition-1);width:100%}.project-item>a:hover img{transform:scale(1.1)}.project-category,.project-title{margin-left:10px}.project-title{color:#fafafa;color:var(--white-2);font-size:15px;font-size:var(--fs-5);font-weight:400;font-weight:var(--fw-400);line-height:1.3;text-transform:capitalize}.project-category{color:hsla(0,0%,84%,.7);color:var(--light-gray-70);font-size:14px;font-size:var(--fs-6);font-weight:300;font-weight:var(--fw-300)}.blog-posts{margin-bottom:10px}.blog-posts-list{display:grid;gap:20px;grid-template-columns:1fr}.blog-post-item>a{background:linear-gradient(to bottom right,#404040,rgba(64,64,64,0) 50%);background:var(--border-gradient-onyx);border-radius:16px;box-shadow:0 25px 50px rgba(0,0,0,.15);box-shadow:var(--shadow-4);height:100%;position:relative;z-index:1}.blog-post-item>a:before{background:#202022;background:var(--eerie-black-1);border-radius:inherit;content:"";inset:1px;position:absolute;z-index:-1}.blog-banner-box{border-radius:12px;height:200px;overflow:hidden;width:100%}.blog-banner-box img{height:100%;-o-object-fit:cover;object-fit:cover;transition:.25s ease;transition:var(--transition-1);width:100%}.blog-post-item>a:hover .blog-banner-box img{transform:scale(1.1)}.blog-content{padding:15px}.blog-meta{align-items:center;display:flex;gap:7px;justify-content:flex-start;margin-bottom:10px}.blog-meta :is(.blog-category,time){color:hsla(0,0%,84%,.7);color:var(--light-gray-70);font-size:14px;font-size:var(--fs-6);font-weight:300;font-weight:var(--fw-300)}.blog-meta .dot{background:hsla(0,0%,84%,.7);background:var(--light-gray-70);border-radius:4px;height:4px;width:4px}.blog-item-title{line-height:1.3;margin-bottom:10px;transition:.25s ease;transition:var(--transition-1)}.blog-post-item>a:hover .blog-item-title{color:#f39c12;color:var(--vegas-gold)}.blog-text{color:#d6d6d6;color:var(--light-gray);font-size:14px;font-size:var(--fs-6);font-weight:300;font-weight:var(--fw-300);line-height:1.6}.mapbox{border:1px solid #383838;border:1px solid var(--jet);border-radius:16px;height:250px;margin-bottom:30px;overflow:hidden;position:relative;width:100%}.mapbox figure{height:100%}.mapbox iframe{border:none;filter:grayscale(1) invert(1);height:100%;width:100%}.contact-form{margin-bottom:10px}.form-title{margin-bottom:20px}.input-wrapper{display:grid;gap:25px;grid-template-columns:1fr;margin-bottom:25px}.form-input{border:1px solid #383838;border:1px solid var(--jet);border-radius:14px;color:#fafafa;color:var(--white-2);font-size:14px;font-size:var(--fs-6);font-weight:400;font-weight:var(--fw-400);outline:none;padding:13px 20px}.form-input::-moz-placeholder{font-weight:500;font-weight:var(--fw-500)}.form-input::placeholder{font-weight:500;font-weight:var(--fw-500)}.form-input:focus{border-color:#f39c12;border-color:var(--vegas-gold)}textarea.form-input{height:120px;margin-bottom:25px;max-height:200px;min-height:100px;resize:vertical}textarea.form-input::-webkit-resizer{display:none}.form-input:focus:invalid{border-color:#b84c4c;border-color:var(--bittersweet-shimmer)}.form-btn{align-items:center;background:linear-gradient(to bottom right,#404040,rgba(64,64,64,0) 50%);background:var(--border-gradient-onyx);border-radius:14px;box-shadow:0 16px 40px rgba(0,0,0,.25);box-shadow:var(--shadow-3);color:#f39c12;color:var(--vegas-gold);display:flex;font-size:14px;font-size:var(--fs-6);gap:10px;justify-content:center;padding:13px 20px;position:relative;text-transform:capitalize;width:100%;z-index:1}.form-btn,.form-btn:before{transition:.25s ease;transition:var(--transition-1)}.form-btn:before{background:linear-gradient(to bottom right,rgba(45,45,46,.251),rgba(27,27,29,0)),#202022;background:var(--bg-gradient-jet);border-radius:inherit;content:"";inset:1px;position:absolute;z-index:-1}.form-btn ion-icon{font-size:16px}.form-btn:hover{background:linear-gradient(to bottom right,#ffda6b,rgba(255,192,97,0) 50%);background:var(--bg-gradient-yellow-1)}.form-btn:hover:before{background:linear-gradient(135deg,rgba(255,218,107,.251),rgba(255,187,92,0) 59.86%),#202022;background:var(--bg-gradient-yellow-2)}.form-btn:disabled{cursor:not-allowed;opacity:.7}.form-btn:disabled:hover{background:linear-gradient(to bottom right,#404040,rgba(64,64,64,0) 50%);background:var(--border-gradient-onyx)}.form-btn:disabled:hover:before{background:linear-gradient(to bottom right,rgba(45,45,46,.251),rgba(27,27,29,0)),#202022;background:var(--bg-gradient-jet)}@media (min-width:450px){.clients-item{min-width:calc(33.33% - 10px)}.blog-banner-box,.project-img{height:auto}}@media (min-width:580px){:root{--fs-1:32px;--fs-2:24px;--fs-3:26px;--fs-4:18px;--fs-6:15px;--fs-7:15px;--fs-8:12px}.sidebar,article{margin-inline:auto;padding:30px;width:520px}.article-title{font-weight:600;font-weight:var(--fw-600);padding-bottom:15px}.article-title:after{height:5px;width:40px}.icon-box{border-radius:12px;font-size:18px;height:48px;width:48px}main{margin-bottom:100px;margin-top:60px}.sidebar{margin-bottom:30px;max-height:180px}.sidebar.active{max-height:584px}.sidebar-info{gap:25px}.avatar-box{border-radius:30px}.avatar-box img{width:120px}.info-content .name{margin-bottom:15px}.info-content .title{padding:5px 18px}.info_more-btn{padding:10px 15px;right:-30px;top:-30px}.info_more-btn span{display:block;font-size:11px;font-size:var(--fs-8)}.info_more-btn ion-icon{display:none}.separator{margin:32px 0}.contacts-list{gap:20px}.contact-info{max-width:calc(100% - 64px);width:calc(100% - 64px)}.navbar{border-radius:20px 20px 0 0}.navbar-list{gap:20px}.navbar-link{--fs-8:14px}.about .article-title{margin-bottom:20px}.about-text{margin-bottom:40px}.service-item{align-items:flex-start;display:flex;gap:18px;justify-content:flex-start;padding:30px}.service-icon-box{margin-bottom:0;margin-top:5px}.service-content-box{text-align:left}.testimonials-title{margin-bottom:25px}.testimonials-list{gap:30px;margin:0 -30px;padding:30px 30px 35px}.content-card{padding:25px 30px 30px}.testimonials-avatar-box{border-radius:20px;transform:translate(30px,-30px)}.testimonials-avatar-box img{width:80px}.testimonials-item-title{margin-bottom:10px;margin-left:95px}.testimonials-text{line-clamp:2;-webkit-line-clamp:2}.modal-container{padding:20px}.testimonials-modal{align-items:stretch;border-radius:20px;gap:25px;justify-content:flex-start;padding:30px}.modal-img-wrapper{align-items:center;display:flex;flex-direction:column}.modal-avatar-box{border-radius:18px;margin-bottom:0}.modal-avatar-box img{width:65px}.modal-img-wrapper>img{display:block;flex-grow:1;width:35px}.clients-list{gap:50px;margin:0 -30px;padding:45px;scroll-padding-inline:45px}.clients-item{min-width:calc(33.33% - 35px)}.timeline-list{margin-left:65px}.timeline-item:not(:last-child):before{left:-40px}.timeline-item:after{height:8px;left:-43px;width:8px}.skills-item:not(:last-child){margin-bottom:25px}.blog-banner-box,.project-img{border-radius:16px}.blog-posts-list{gap:30px}.blog-content{padding:25px}.mapbox{border-radius:18px;height:380px}.input-wrapper{gap:30px;margin-bottom:30px}.form-input{padding:15px 20px}textarea.form-input{margin-bottom:30px}.form-btn{--fs-6:16px;padding:16px 20px}.form-btn ion-icon{font-size:18px}}@media (min-width:768px){.sidebar,article{width:700px}.has-scrollbar::-webkit-scrollbar-button{width:100px}.contacts-list{gap:30px 15px;grid-template-columns:1fr 1fr}.navbar-link{--fs-8:15px}.testimonials-modal{gap:35px;max-width:680px}.modal-avatar-box img{width:80px}.article-title{padding-bottom:20px}.filter-select-box{display:none}.filter-list{align-items:center;display:flex;gap:25px;justify-content:flex-start;margin-bottom:30px;padding-left:5px}.filter-item button{color:#d6d6d6;color:var(--light-gray);font-size:15px;font-size:var(--fs-5);transition:.25s ease;transition:var(--transition-1)}.filter-item button:hover{color:hsla(0,0%,84%,.7);color:var(--light-gray-70)}.filter-item button.active{color:#f39c12;color:var(--vegas-gold)}.blog-posts-list,.input-wrapper,.project-list{grid-template-columns:1fr 1fr}.form-btn{margin-left:auto;width:-moz-max-content;width:max-content}}@media (min-width:1024px){:root{--shadow-1:-4px 8px 24px rgba(0,0,0,.125);--shadow-2:0 16px 30px rgba(0,0,0,.125);--shadow-3:0 16px 40px rgba(0,0,0,.125)}.sidebar,article{box-shadow:0 24px 80px rgba(0,0,0,.25);box-shadow:var(--shadow-5);width:950px}main{margin-bottom:60px}.main-content{margin:auto;position:relative}.main-content,.navbar{width:-moz-max-content;width:max-content}.navbar{border-radius:0 20px;bottom:auto;box-shadow:none;left:auto;padding:0 20px;position:absolute;right:0;top:0}.navbar-list{gap:30px;padding:0 20px}.navbar-link{font-weight:500;font-weight:var(--fw-500)}.service-list{gap:20px 25px;grid-template-columns:1fr 1fr}.testimonials-item{min-width:calc(50% - 15px)}.clients-item{min-width:calc(25% - 38px)}.project-list{grid-template-columns:repeat(3,1fr)}.blog-banner-box{height:230px}}@media (min-width:1250px){body::-webkit-scrollbar{width:20px}body::-webkit-scrollbar-track{background:#121212;background:var(--smoky-black)}body::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.1);border:5px solid #121212;border:5px solid var(--smoky-black);border-radius:20px;box-shadow:inset 1px 1px 0 hsla(0,0%,100%,.11),inset -1px -1px 0 hsla(0,0%,100%,.11)}body::-webkit-scrollbar-thumb:hover{background:hsla(0,0%,100%,.15)}body::-webkit-scrollbar-button{height:60px}.sidebar,article{width:auto}article{min-height:100%}main{align-items:stretch;display:flex;gap:25px;justify-content:center;margin-inline:auto;max-width:1200px}.main-content{margin:0;min-width:75%;width:75%}.sidebar{height:100%;margin-bottom:0;max-height:50rem;padding-top:60px;position:sticky;top:60px;z-index:1}.sidebar-info{flex-direction:column}.avatar-box img{width:150px}.info-content .name{text-align:center;white-space:nowrap}.info-content .title{margin:auto}.info_more-btn{display:none}.sidebar-info_more{opacity:1;visibility:visible}.contacts-list{grid-template-columns:1fr}.contact-info :is(.contact-link){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.contact-info :is(.contact-link,time,address){--fs-7:14px;font-weight:300;font-weight:var(--fw-300)}.separator:last-of-type{margin:15px 0;opacity:0}.social-list{justify-content:center}.timeline-text{max-width:700px}}';
const LoadingPage_vue_vue_type_style_index_0_scoped_e71b8ca2_lang = "@keyframes load-e71b8ca2{0%{filter:blur(5px);letter-spacing:3px;opacity:.08}}.animate[data-v-e71b8ca2]{align-items:center;animation:load-e71b8ca2 1.2s ease-in-out 0s infinite;animation-direction:alternate;display:flex;font-family:Helvetica,sans-serif,Arial;height:100%;justify-content:center;margin:auto;text-shadow:0 0 1px #fff}";
const app_vue_vue_type_style_index_0_lang = ".v-enter-active,.v-leave-active{transition:opacity .5s ease}.v-enter-from,.v-leave-to{opacity:0}";
const error404_vue_vue_type_style_index_0_scoped_f5c0a1bb_lang$1 = '.spotlight[data-v-f5c0a1bb]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-f5c0a1bb]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-f5c0a1bb]{background-color:hsla(0,0%,100%,.3)}.gradient-border[data-v-f5c0a1bb]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-f5c0a1bb]{background-color:hsla(0,0%,8%,.3)}.gradient-border[data-v-f5c0a1bb]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-f5c0a1bb]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-f5c0a1bb]:hover:before{background-position:-50% 0;opacity:1}.bg-white[data-v-f5c0a1bb]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-f5c0a1bb]{cursor:pointer}.flex[data-v-f5c0a1bb]{display:flex}.grid[data-v-f5c0a1bb]{display:grid}.place-content-center[data-v-f5c0a1bb]{place-content:center}.items-center[data-v-f5c0a1bb]{align-items:center}.justify-center[data-v-f5c0a1bb]{justify-content:center}.font-sans[data-v-f5c0a1bb]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.font-medium[data-v-f5c0a1bb]{font-weight:500}.font-light[data-v-f5c0a1bb]{font-weight:300}.text-8xl[data-v-f5c0a1bb]{font-size:6rem;line-height:1}.text-xl[data-v-f5c0a1bb]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-f5c0a1bb]{line-height:1.25}.mb-8[data-v-f5c0a1bb]{margin-bottom:2rem}.mb-16[data-v-f5c0a1bb]{margin-bottom:4rem}.max-w-520px[data-v-f5c0a1bb]{max-width:520px}.min-h-screen[data-v-f5c0a1bb]{min-height:100vh}.overflow-hidden[data-v-f5c0a1bb]{overflow:hidden}.px-8[data-v-f5c0a1bb]{padding-left:2rem;padding-right:2rem}.py-2[data-v-f5c0a1bb]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-f5c0a1bb]{padding-left:1rem;padding-right:1rem}.fixed[data-v-f5c0a1bb]{position:fixed}.left-0[data-v-f5c0a1bb]{left:0}.right-0[data-v-f5c0a1bb]{right:0}.text-center[data-v-f5c0a1bb]{text-align:center}.text-black[data-v-f5c0a1bb]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-f5c0a1bb]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-f5c0a1bb]{width:100%}.z-10[data-v-f5c0a1bb]{z-index:10}.z-20[data-v-f5c0a1bb]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-f5c0a1bb]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-f5c0a1bb]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-f5c0a1bb]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-f5c0a1bb]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-f5c0a1bb]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-f5c0a1bb]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-f5c0a1bb]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-f5c0a1bb]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}';
const error500_vue_vue_type_style_index_0_scoped_b86faff8_lang$1 = ".spotlight[data-v-b86faff8]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.bg-white[data-v-b86faff8]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-b86faff8]{display:grid}.place-content-center[data-v-b86faff8]{place-content:center}.font-sans[data-v-b86faff8]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.font-medium[data-v-b86faff8]{font-weight:500}.font-light[data-v-b86faff8]{font-weight:300}.h-1\\/2[data-v-b86faff8]{height:50%}.text-8xl[data-v-b86faff8]{font-size:6rem;line-height:1}.text-xl[data-v-b86faff8]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-b86faff8]{line-height:1.25}.mb-8[data-v-b86faff8]{margin-bottom:2rem}.mb-16[data-v-b86faff8]{margin-bottom:4rem}.max-w-520px[data-v-b86faff8]{max-width:520px}.min-h-screen[data-v-b86faff8]{min-height:100vh}.overflow-hidden[data-v-b86faff8]{overflow:hidden}.px-8[data-v-b86faff8]{padding-left:2rem;padding-right:2rem}.fixed[data-v-b86faff8]{position:fixed}.left-0[data-v-b86faff8]{left:0}.right-0[data-v-b86faff8]{right:0}.-bottom-1\\/2[data-v-b86faff8]{bottom:-50%}.text-center[data-v-b86faff8]{text-align:center}.text-black[data-v-b86faff8]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-b86faff8]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-b86faff8]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-b86faff8]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-b86faff8]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-b86faff8]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-b86faff8]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}";
const Sidebar_vue_vue_type_style_index_0_lang$1 = "figure.avatar-box{border:.2rem solid #fff;border-radius:.8rem}img{border-radius:.5rem}";
const Navbar_vue_vue_type_style_index_0_scoped_df807ea0_lang$1 = "a.router-link-active[data-v-df807ea0]{font-weight:700}a.router-link-exact-active[data-v-df807ea0]{color:var(--vegas-gold)}";
const CookieBar_vue_vue_type_style_index_0_scoped_1144c8c8_lang$1 = ".bounce-enter-active[data-v-1144c8c8]{animation:bounce-in-1144c8c8 .5s}.bounce-leave-active[data-v-1144c8c8]{animation:bounce-in-1144c8c8 .5s reverse}@keyframes bounce-in-1144c8c8{0%{transform:scale(0)}50%{transform:scale(1.25)}to{transform:scale(1)}}";
var B = Object.defineProperty;
var E = (u, a2) => B(u, "name", { value: a2, configurable: true });
let D = 0;
const t = { START_BOUNDARY: D++, HEADER_FIELD_START: D++, HEADER_FIELD: D++, HEADER_VALUE_START: D++, HEADER_VALUE: D++, HEADER_VALUE_ALMOST_DONE: D++, HEADERS_ALMOST_DONE: D++, PART_DATA_START: D++, PART_DATA: D++, END: D++ };
let w = 1;
const R = { PART_BOUNDARY: w, LAST_BOUNDARY: w *= 2 }, g = 10, N = 13, x = 32, P = 45, C = 58, I = 97, M = 122, $ = E((u) => u | 32, "lower"), m = E(() => {
}, "noop"), F = class F2 {
  constructor(a2) {
    this.index = 0, this.flags = 0, this.onHeaderEnd = m, this.onHeaderField = m, this.onHeadersEnd = m, this.onHeaderValue = m, this.onPartBegin = m, this.onPartData = m, this.onPartEnd = m, this.boundaryChars = {}, a2 = `\r
--` + a2;
    const n2 = new Uint8Array(a2.length);
    for (let r = 0; r < a2.length; r++)
      n2[r] = a2.charCodeAt(r), this.boundaryChars[n2[r]] = true;
    this.boundary = n2, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = t.START_BOUNDARY;
  }
  write(a2) {
    let n2 = 0;
    const r = a2.length;
    let d2 = this.index, { lookbehind: l2, boundary: c, boundaryChars: H, index: e, state: i, flags: A2 } = this;
    const p = this.boundary.length, O = p - 1, y = a2.length;
    let o2, L;
    const f2 = E((h2) => {
      this[h2 + "Mark"] = n2;
    }, "mark"), s2 = E((h2) => {
      delete this[h2 + "Mark"];
    }, "clear"), T = E((h2, S, _, U) => {
      (S === void 0 || S !== _) && this[h2](U && U.subarray(S, _));
    }, "callback"), b = E((h2, S) => {
      const _ = h2 + "Mark";
      _ in this && (S ? (T(h2, this[_], n2, a2), delete this[_]) : (T(h2, this[_], a2.length, a2), this[_] = 0));
    }, "dataCallback");
    for (n2 = 0; n2 < r; n2++)
      switch (o2 = a2[n2], i) {
        case t.START_BOUNDARY:
          if (e === c.length - 2) {
            if (o2 === P)
              A2 |= R.LAST_BOUNDARY;
            else if (o2 !== N)
              return;
            e++;
            break;
          } else if (e - 1 === c.length - 2) {
            if (A2 & R.LAST_BOUNDARY && o2 === P)
              i = t.END, A2 = 0;
            else if (!(A2 & R.LAST_BOUNDARY) && o2 === g)
              e = 0, T("onPartBegin"), i = t.HEADER_FIELD_START;
            else
              return;
            break;
          }
          o2 !== c[e + 2] && (e = -2), o2 === c[e + 2] && e++;
          break;
        case t.HEADER_FIELD_START:
          i = t.HEADER_FIELD, f2("onHeaderField"), e = 0;
        case t.HEADER_FIELD:
          if (o2 === N) {
            s2("onHeaderField"), i = t.HEADERS_ALMOST_DONE;
            break;
          }
          if (e++, o2 === P)
            break;
          if (o2 === C) {
            if (e === 1)
              return;
            b("onHeaderField", true), i = t.HEADER_VALUE_START;
            break;
          }
          if (L = $(o2), L < I || L > M)
            return;
          break;
        case t.HEADER_VALUE_START:
          if (o2 === x)
            break;
          f2("onHeaderValue"), i = t.HEADER_VALUE;
        case t.HEADER_VALUE:
          o2 === N && (b("onHeaderValue", true), T("onHeaderEnd"), i = t.HEADER_VALUE_ALMOST_DONE);
          break;
        case t.HEADER_VALUE_ALMOST_DONE:
          if (o2 !== g)
            return;
          i = t.HEADER_FIELD_START;
          break;
        case t.HEADERS_ALMOST_DONE:
          if (o2 !== g)
            return;
          T("onHeadersEnd"), i = t.PART_DATA_START;
          break;
        case t.PART_DATA_START:
          i = t.PART_DATA, f2("onPartData");
        case t.PART_DATA:
          if (d2 = e, e === 0) {
            for (n2 += O; n2 < y && !(a2[n2] in H); )
              n2 += p;
            n2 -= O, o2 = a2[n2];
          }
          if (e < c.length)
            c[e] === o2 ? (e === 0 && b("onPartData", true), e++) : e = 0;
          else if (e === c.length)
            e++, o2 === N ? A2 |= R.PART_BOUNDARY : o2 === P ? A2 |= R.LAST_BOUNDARY : e = 0;
          else if (e - 1 === c.length)
            if (A2 & R.PART_BOUNDARY) {
              if (e = 0, o2 === g) {
                A2 &= ~R.PART_BOUNDARY, T("onPartEnd"), T("onPartBegin"), i = t.HEADER_FIELD_START;
                break;
              }
            } else
              A2 & R.LAST_BOUNDARY && o2 === P ? (T("onPartEnd"), i = t.END, A2 = 0) : e = 0;
          if (e > 0)
            l2[e - 1] = o2;
          else if (d2 > 0) {
            const h2 = new Uint8Array(l2.buffer, l2.byteOffset, l2.byteLength);
            T("onPartData", 0, d2, h2), d2 = 0, f2("onPartData"), n2--;
          }
          break;
        case t.END:
          break;
        default:
          throw new Error(`Unexpected state entered: ${i}`);
      }
    b("onHeaderField"), b("onHeaderValue"), b("onPartData"), this.index = e, this.state = i, this.flags = A2;
  }
  end() {
    if (this.state === t.HEADER_FIELD_START && this.index === 0 || this.state === t.PART_DATA && this.index === this.boundary.length)
      this.onPartEnd();
    else if (this.state !== t.END)
      throw new Error("MultipartParser.end(): stream ended unexpectedly");
  }
};
E(F, "MultipartParser");
let k = F;
function v(u) {
  const a2 = u.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!a2)
    return;
  const n2 = a2[2] || a2[3] || "";
  let r = n2.slice(n2.lastIndexOf("\\") + 1);
  return r = r.replace(/%22/g, '"'), r = r.replace(/&#(\d{4});/g, (d2, l2) => String.fromCharCode(l2)), r;
}
E(v, "_fileName");
async function Z(u, a2) {
  if (!/multipart/i.test(a2))
    throw new TypeError("Failed to fetch");
  const n2 = a2.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!n2)
    throw new TypeError("no or bad content-type header, no multipart boundary");
  const r = new k(n2[1] || n2[2]);
  let d2, l2, c, H, e, i;
  const A2 = [], p = new dr(), O = E((s2) => {
    c += f2.decode(s2, { stream: true });
  }, "onPartData"), y = E((s2) => {
    A2.push(s2);
  }, "appendToFile"), o2 = E(() => {
    const s2 = new wn(A2, i, { type: e });
    p.append(H, s2);
  }, "appendFileToFormData"), L = E(() => {
    p.append(H, c);
  }, "appendEntryToFormData"), f2 = new TextDecoder("utf-8");
  f2.decode(), r.onPartBegin = function() {
    r.onPartData = O, r.onPartEnd = L, d2 = "", l2 = "", c = "", H = "", e = "", i = null, A2.length = 0;
  }, r.onHeaderField = function(s2) {
    d2 += f2.decode(s2, { stream: true });
  }, r.onHeaderValue = function(s2) {
    l2 += f2.decode(s2, { stream: true });
  }, r.onHeaderEnd = function() {
    if (l2 += f2.decode(), d2 = d2.toLowerCase(), d2 === "content-disposition") {
      const s2 = l2.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      s2 && (H = s2[2] || s2[3] || ""), i = v(l2), i && (r.onPartData = y, r.onPartEnd = o2);
    } else
      d2 === "content-type" && (e = l2);
    l2 = "", d2 = "";
  };
  for await (const s2 of u)
    r.write(s2);
  return r.end(), p;
}
E(Z, "toFormData");
const multipartParser = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  toFormData: Z
});
const _sfc_main$a = {
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useHead({
      title: "Ooups!"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "active",
        "data-page": "resume"
      }, _attrs))}><header><h2 class="h2 article-title"> Page Not Found </h2></header><div class="grid grid-cols-1 text-center mb-20 md:mb-0"><div class="text-[5rem] text-[#f39c12] font-bold"> 404 </div><div class="text-xl text-[#fafafa]"><span>The Page you are looking for doesn&#39;t exist or an other error occured. 😞</span><span class="mx-auto w-40 py-2 mt-5 cursor-pointer font-semibold bg-ranko-500 text-[#1e1e1f] rounded text-sm"> Go back </span></div></div></article>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$a
});
defineStore("localeStore", () => {
  const locale = ref(useCookie("locale"));
  function setLocale(val) {
    return this.locale = val;
  }
  const getLocale2 = computed(() => {
    return locale.value;
  });
  return { locale, setLocale, getLocale: getLocale2 };
});
const _imports_0$2 = "" + __publicAssetsURL("images/python.png");
const _imports_1$1 = "" + __publicAssetsURL("images/pytorch2.png");
const _imports_2$1 = "" + __publicAssetsURL("images/pandas.png");
const _imports_3$1 = "" + __publicAssetsURL("images/c++2.png");
const _imports_4$1 = "" + __publicAssetsURL("images/docker.png");
const _imports_5 = "" + __publicAssetsURL("images/github.png");
const _imports_6 = "" + __publicAssetsURL("images/linux.png");
const _imports_7 = "" + __publicAssetsURL("images/kicad.png");
const _imports_8 = "" + __publicAssetsURL("images/solidworks.png");
const _imports_9 = "" + __publicAssetsURL("images/fusion360.png");
const _sfc_main$9 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({});
    ref({});
    ref(false);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "about active",
        "data-page": "about"
      }, _attrs))}><header><h2 class="h2 article-title">${ssrInterpolate(_ctx.$t("pageTitles.about"))}</h2></header><section class="about-text"><p> I am an undergraduate student in Creative Technology studying Human-Computer Interactions. As part of the Artificial Lives group, I am interested in computer science, deep learning and electronics. I&#39;m working on projects aiming at making human-computer interfaces seameless, smooth and intuitive. </p><p> Over the last few years, I&#39;ve developed a deep interest in the field of Deep Learning and the versatility of its applications, particularly in the world of audio. </p></section><section class="clients"><h3 class="h3 clients-title"> Programming Skills </h3><ul class="clients-list has-scrollbar"><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_0$2)} alt="client logo" style="${ssrRenderStyle({ "width": "150px", "height": "auto" })}"></a></li><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_1$1)} alt="client logo" style="${ssrRenderStyle({ "width": "auto", "height": "auto" })}"></a></li><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_2$1)} alt="client logo" style="${ssrRenderStyle({ "width": "auto", "height": "auto" })}"></a></li><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_3$1)} alt="client logo" style="${ssrRenderStyle({ "width": "150px", "height": "auto" })}"></a></li><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_4$1)} alt="client logo" style="${ssrRenderStyle({ "width": "auto", "height": "auto" })}"></a></li><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_5)} alt="client logo" style="${ssrRenderStyle({ "width": "auto", "height": "auto" })}"></a></li><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_6)} alt="client logo" style="${ssrRenderStyle({ "width": "auto", "height": "auto" })}"></a></li></ul></section><section class="clients"><h3 class="h3 clients-title"> Other Skills </h3><ul class="clients-list has-scrollbar"><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_7)} alt="client logo" style="${ssrRenderStyle({ "width": "auto", "height": "auto" })}"></a></li><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_8)} alt="client logo" style="${ssrRenderStyle({ "width": "auto", "height": "auto" })}"></a></li><li class="clients-item"><a href="#"><img${ssrRenderAttr("src", _imports_9)} alt="client logo" style="${ssrRenderStyle({ "width": "auto", "height": "auto" })}"></a></li></ul></section></article>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$9
});
const _imports_0$1 = "" + __publicAssetsURL("images/flashgpt.png");
const _imports_1 = "" + __publicAssetsURL("images/whisper.jpeg");
const _imports_2 = "" + __publicAssetsURL("images/project_voicecommands.png");
const _imports_3 = "" + __publicAssetsURL("images/project_movementsurfaces.png");
const _imports_4 = "" + __publicAssetsURL("images/project_multitouchsurfaces.png");
const _sfc_main$8 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Projects"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "projects active",
        "data-page": "projects"
      }, _attrs))}><header><h2 class="h2 article-title">${ssrInterpolate(_ctx.$t("pageTitles.projects"))}</h2></header><section class="projects-posts"><ul class="projects-posts-list"><li class="blog-post-item"><a href="https://github.com/electron260/Flash_GPT"><figure class="blog-banner-box"><img${ssrRenderAttr("src", _imports_0$1)} alt="Hey FlashMate !" loading="lazy"></figure><div class="blog-content"><div class="blog-meta"><p class="blog-category">Deep Learning</p><span class="dot"></span><time datetime="2022-02-23">work in progress...</time></div><h3 class="h3 blog-item-title">Hey FlashMate !</h3><p class="blog-text"> Home Assistant using the ChatGPT API </p></div></a></li><li class="blog-post-item"><a href="https://github.com/electron260/inference_whisper_benchmark"><figure class="blog-banner-box"><img${ssrRenderAttr("src", _imports_1)} alt="How to make a multitouch surface ?" loading="lazy"></figure><div class="blog-content"><div class="blog-meta"><p class="blog-category">Deep Learning</p><span class="dot"></span><time datetime="2022-02-23">2023</time></div><h3 class="h3 blog-item-title">Benchmark of whisper implementations</h3><p class="blog-text"> Comparaison of the inference speed of different whisper implementations (on GPU) </p></div></a></li><li class="blog-post-item"><a href="https://dvic.devinci.fr/projects/GOSAI-vocal-commands"><figure class="blog-banner-box"><img${ssrRenderAttr("src", _imports_2)} alt="Implementation of voice commands for augmented reality applications" loading="lazy"></figure><div class="blog-content"><div class="blog-meta"><p class="blog-category">Deep Learning</p><span class="dot"></span><time datetime="2022-02-23">2022 - 2023</time></div><h3 class="h3 blog-item-title">Voice Commands for GOSAI</h3><p class="blog-text"> Implementation of voice commands in GOSAI OS system for augmented reality applications </p></div></a></li><li class="blog-post-item"><a href="https://dvic.devinci.fr/tutorial/gesture-recognition-embedded"><figure class="blog-banner-box"><img${ssrRenderAttr("src", _imports_3)} alt="Exploring Gesture Recognition on Embedded Hardware" loading="lazy"></figure><div class="blog-content"><div class="blog-meta"><p class="blog-category">Design</p><span class="dot"></span><time datetime="2022-02-23">2023</time></div><h3 class="h3 blog-item-title">Exploring Gesture Recognition on Embedded Hardware</h3><p class="blog-text"> Predicting multiple fingers gesture or hand gestures on multi-touch systems </p></div></a></li><li class="blog-post-item"><a href="https://dvic.devinci.fr/tutorial/how-to-make-a-multitouch-surface"><figure class="blog-banner-box"><img${ssrRenderAttr("src", _imports_4)} alt="How to make a multitouch surface ?" loading="lazy"></figure><div class="blog-content"><div class="blog-meta"><p class="blog-category">Deep Learning &amp; Electronics</p><span class="dot"></span><time datetime="2022-02-23">2022 - 2023</time></div><h3 class="h3 blog-item-title">How to make a multitouch surface ?</h3><p class="blog-text"> Tutorial providing step-by-step instructions for creating a multi-touch surface capable of recognizing simple movements </p></div></a></li></ul></section></article>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const index2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$8
});
const _sfc_main$7 = {
  __name: "resume",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Resume"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "resume active",
        "data-page": "resume"
      }, _attrs))}><header><h2 class="h2 article-title">${ssrInterpolate(_ctx.$t("pageTitles.resume"))}</h2></header><section class="timeline"><div class="title-wrapper"><div class="icon-box"><ion-icon name="book-outline"></ion-icon></div><h3 class="h3"> Education </h3></div><ol class="timeline-list"><li class="timeline-item"><h4 class="h4 timeline-item-title"> De Vinci Innovation Center (ESILV) </h4><span>2022 — 2024</span><p class="timeline-text"> Master Creative Technology - Teachings: Deep Learning (Pytorch), Electronics, Modeling, Research methods </p></li><li class="timeline-item"><h4 class="h4 timeline-item-title"> ESILV - Paris France </h4><span>2019 — 2024</span><p class="timeline-text"> 5th year of engineering school (Bac+5) - Teachings: Mathematics, Physics, Computer Science, Electronics </p></li><li class="timeline-item"><h4 class="h4 timeline-item-title"> Sungkyunkwan University - South Korea </h4><span>2021</span><p class="timeline-text"> Semester of study - Computer Science </p></li><li class="timeline-item"><h4 class="h4 timeline-item-title"> MPSI Descartes Highschool - Tours France </h4><span>2018 - 2019</span><p class="timeline-text"> Preparatory class MPSI </p></li></ol></section><section class="timeline"><div class="title-wrapper"><div class="icon-box"><ion-icon name="book-outline"></ion-icon></div><h3 class="h3"> Experience </h3></div><ol class="timeline-list"><li class="timeline-item"><h4 class="h4 timeline-item-title"> Emobot (5 months internship) </h4><span>2023</span><p class="timeline-text"> Deploying a transformer based model to improve the quality of the visual emotion predictions using the speech </p></li><li class="timeline-item"><h4 class="h4 timeline-item-title"> Deep Learning Project - Vocal Commands </h4><span>2022 - 2023</span><p class="timeline-text"> Project allowing the activation of features by voice on augmented reality platforms </p></li><li class="timeline-item"><h4 class="h4 timeline-item-title"> Treasurer of a ski association </h4><span>2022 - 2023</span><p class="timeline-text"> Skills developed: sponsor approach, budget management, event organization </p></li><li class="timeline-item"><h4 class="h4 timeline-item-title"> APVL ingénierie (3 months internship) </h4><span>2021</span><p class="timeline-text"> Research department : Solidworks modeling </p></li><li class="timeline-item"><h4 class="h4 timeline-item-title"> Imagination and exploration projects (PIX) </h4><span>2019 — 2022</span><p class="timeline-text"> Skills developed: drawing up specifications, planning and budget. </p></li></ol></section></article>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resume.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const resume = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$7
});
const _imports_0 = "" + __publicAssetsURL("images/17.jpg");
const Sidebar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    let isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: ["sidebar", { active: unref(isOpen) }]
      }, _attrs))}><div class="sidebar-info"><figure class="avatar-box"><img${ssrRenderAttr("src", _imports_0)} alt="Hugo Daumain" width="80"></figure><div class="info-content"><h1 class="name" title="Hugo Daumain"> Hugo Daumain </h1><p class="title text-center xl:block flex items-center justify-center gap-1"><span class="xl:after:content-[&#39;&#39;] after:content-[&#39;,&#39;]">Creative Technology Student</span><span>Deep Learning Student</span></p></div><button class="info_more-btn"><span>Show Contacts</span><ion-icon name="chevron-down"></ion-icon></button></div><div class="sidebar-info_more"><div class="separator"></div><ul class="contacts-list"><li class="contact-item"><div class="icon-box"><ion-icon name="mail-outline"></ion-icon></div><div class="contact-info"><p class="contact-title"> Email </p><a href="mailto:hugo.daumain@edu.devinci.fr" class="contact-link">hugo.daumain@edu.devinci.fr</a></div></li><li class="contact-item"><div class="icon-box"><ion-icon name="logo-github"></ion-icon></div><div class="contact-info"><p class="contact-title"> Github </p><a href="https://github.com/electron260" class="contact-link" target="_blank">electron260</a></div></li><li class="contact-item"><div class="icon-box"><ion-icon name="logo-linkedin"></ion-icon></div><div class="contact-info"><p class="contact-title"> Linkedin </p><a href="https://tr.linkedin.com/in/hugo-daumain" class="contact-link" target="_blank">Hugo Daumain</a></div></li><li class="contact-item"><div class="icon-box"><ion-icon name="location-outline"></ion-icon></div><div class="contact-info"><p class="contact-title"> Location </p><address>Paris, France</address></div></li></ul><div class="separator"></div></div></aside>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$6;
const Navbar_vue_vue_type_style_index_0_scoped_df807ea0_lang = "";
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-df807ea0><ul class="navbar-list" data-v-df807ea0><li class="navbar-item" data-v-df807ea0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "navbar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("pageTitles.about"))}`);
      } else {
        return [
          createTextVNode(toDisplayString$1(_ctx.$t("pageTitles.about")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navbar-item" data-v-df807ea0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/resume",
    class: "navbar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("pageTitles.resume"))}`);
      } else {
        return [
          createTextVNode(toDisplayString$1(_ctx.$t("pageTitles.resume")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navbar-item" data-v-df807ea0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "navbar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("pageTitles.projects"))}`);
      } else {
        return [
          createTextVNode(toDisplayString$1(_ctx.$t("pageTitles.projects")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-df807ea0"]]);
const useCookieStore = defineStore("cookieStore", () => {
  const cookie = ref(useCookie("accept-cookie"));
  const $cookies = inject("$cookies");
  function setCookie2() {
    $cookies.set("accept-cookie", true, "30d");
    return this.cookie = true;
  }
  const getCookie2 = computed(() => {
    return cookie.value;
  });
  return { cookie, setCookie: setCookie2, getCookie: getCookie2 };
});
const CookieBar_vue_vue_type_style_index_0_scoped_1144c8c8_lang = "";
const _sfc_main$4 = {
  __name: "CookieBar",
  __ssrInlineRender: true,
  setup(__props) {
    const cookie = useCookieStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: !unref(cookie).getCookie ? null : { display: "none" },
        class: "container left-0 right-0 mx-auto child md:w-[25%] bg-[#3f3f40] rounded-lg shadow-xl px-6 py-3 bottom-20 fixed z-[100] flex items-center justify-between animate-bounce"
      }, _attrs))} data-v-1144c8c8><span class="text-[#fafafa]" data-v-1144c8c8>This site use cookies! 🍪</span><span class="cursor-pointer p-2 shadow-md rounded bg-[#383838] text-[#fafafa] hover:bg-[#1e1e1f] transition" data-v-1144c8c8><ion-icon name="close-outline" data-v-1144c8c8></ion-icon></span></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1144c8c8"]]);
const _sfc_main$3 = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n({ useScope: "global" });
    useHead({
      htmlAttrs: {
        lang: locale
      },
      titleTemplate: (pageTitle) => {
        return pageTitle ? `${pageTitle} - Hugo Daumain` : "Hugo Daumain";
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/nuxt.png"
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
          crossorigin: ""
        }
      ],
      script: [
        {
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
          body: false,
          type: "module"
        },
        {
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
          body: false,
          nomodule: true
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sidebar = __nuxt_component_0;
      const _component_Navbar = __nuxt_component_1;
      const _component_CookieBar = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
      _push(`<div class="main-content">`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CookieBar, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$3
});
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "py-20 px-10 text-center" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="mt-5 mx-auto text-center opacity-25 text-sm"> [Home Layout] </div></main>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const home$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: home
});
const error404_vue_vue_type_style_index_0_scoped_f5c0a1bb_lang = "";
const _sfc_main$1 = {
  __name: "error-404",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 404
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-f5c0a1bb><div class="fixed left-0 right-0 spotlight z-10" data-v-f5c0a1bb></div><div class="max-w-520px text-center z-20" data-v-f5c0a1bb><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-f5c0a1bb>${ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-f5c0a1bb>${ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-f5c0a1bb>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              createTextVNode(toDisplayString$1(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@1.3.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const error404 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f5c0a1bb"]]);
const error404$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: error404
});
const error500_vue_vue_type_style_index_0_scoped_b86faff8_lang = "";
const _sfc_main = {
  __name: "error-500",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 500
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-b86faff8><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-b86faff8></div><div class="max-w-520px text-center" data-v-b86faff8><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-b86faff8>${ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-b86faff8>${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@1.3.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error500 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b86faff8"]]);
const error500$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: error500
});
const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = /* @__PURE__ */ defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    return () => createVNode(component || "span", { ...props.context.props, "nuxt-ssr-component-uid": "" });
  }
});
const islandRenderer$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: islandRenderer
});
export {
  CookieBar_vue_vue_type_style_index_0_scoped_1144c8c8_lang$1 as C,
  LoadingPage_vue_vue_type_style_index_0_scoped_e71b8ca2_lang as L,
  Navbar_vue_vue_type_style_index_0_scoped_df807ea0_lang$1 as N,
  Sidebar_vue_vue_type_style_index_0_lang$1 as S,
  app_vue_vue_type_style_index_0_lang as a,
  error500_vue_vue_type_style_index_0_scoped_b86faff8_lang$1 as b,
  entry$1 as default,
  error404_vue_vue_type_style_index_0_scoped_f5c0a1bb_lang$1 as e,
  style as s,
  tailwind as t
};
//# sourceMappingURL=server.mjs.map
