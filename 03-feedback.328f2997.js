function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,u,f,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(S,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function S(){var e=m();if(j(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return d?v(n,i-(e-c)):n}(e))}function T(e){return u=void 0,p&&o?y(e):(o=r=void 0,a)}function w(){var e=m(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(d)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:T(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea");y.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,function(e){try{const t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}catch(e){console.error(e)}}(S)}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(S),localStorage.removeItem("feedback-form-state")}));const S=JSON.parse(localStorage.getItem("feedback-form-state"))||{};var T;(T=S)&&(h.value=(null==T?void 0:T.email)||"",j.value=(null==T?void 0:T.message)||"");
//# sourceMappingURL=03-feedback.328f2997.js.map
