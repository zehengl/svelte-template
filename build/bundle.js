var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let i;function s(t){i=t}const d=[],p=[],m=[],h=[],g=Promise.resolve();let $=!1;function y(t){m.push(t)}let b=!1;const _=new Set;function x(){if(!b){b=!0;do{for(let t=0;t<d.length;t+=1){const n=d[t];s(n),v(n.$$)}for(d.length=0;p.length;)p.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];_.has(n)||(_.add(n),n())}m.length=0}while(d.length);for(;h.length;)h.pop()();$=!1,b=!1,_.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const w=new Set;function A(t,n){-1===t.$$.dirty[0]&&(d.push(t),$||($=!0,g.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(c,a,u,l,f,d,p=[-1]){const m=i;s(c);const h=a.props||{},g=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:p};let $=!1;var b,_;g.ctx=u?u(c,h,(t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),$&&A(c,t)),n}):[],g.update(),$=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),a.target&&(a.hydrate?g.fragment&&g.fragment.l(function(t){return Array.from(t.childNodes)}(a.target)):g.fragment&&g.fragment.c(),a.intro&&((b=c.$$.fragment)&&b.i&&(w.delete(b),b.i(_))),function(t,e,c){const{fragment:a,on_mount:u,on_destroy:l,after_update:f}=t.$$;a&&a.m(e,c),y(()=>{const e=u.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),f.forEach(y)}(c,a.target,a.anchor),x()),s(m)}function S(n){let e,o,r,c,i,s,d;return{c(){e=u("main"),o=u("h1"),r=l("Hello "),c=l(n[0]),i=l("!"),s=l(" "),d=u("p"),d.innerHTML='\n    Visit the\n    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>\n    to learn how to build Svelte apps.\n  ',f(o,"class","svelte-s59og4"),f(e,"class","svelte-s59og4")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),a(e,o),a(o,r),a(o,c),a(o,i),a(e,s),a(e,d)},p(t,[n]){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(c,t[0])},i:t,o:t,d(t){var n;t&&(n=e).parentNode.removeChild(n)}}}function k(t,n,e){let{name:o}=n;return t.$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),E(this,t,k,S,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
