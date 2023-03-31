var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e){e=""+e,t.data!==e&&(t.data=e)}let p;function h(t){p=t}const $=[],m=[];let g=[];const x=[],y=Promise.resolve();let b=!1;function _(t){g.push(t)}const v=new Set;let w=0;function k(){if(0!==w)return;const t=p;do{try{for(;w<$.length;){const t=$[w];w++,h(t),E(t.$$)}}catch(t){throw $.length=0,w=0,t}for(h(null),$.length=0,w=0;m.length;)m.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];v.has(e)||(v.add(e),e())}g.length=0}while($.length);for(;x.length;)x.pop()();b=!1,v.clear(),h(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const j=new Set;function A(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];g.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),g=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&($.push(t),b||(b=!0,y.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(c,s,a,i,f,l,d,$=[-1]){const m=p;h(c);const g=c.$$={fragment:null,ctx:[],props:l,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:$,skip_bound:!1,root:s.target||m.$$.root};d&&d(g.root);let x=!1;if(g.ctx=a?a(c,s.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),x&&N(c,t)),e})):[],g.update(),x=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();s.intro&&((y=c.$$.fragment)&&y.i&&(j.delete(y),y.i(b))),function(t,n,c,s){const{fragment:u,after_update:a}=t.$$;u&&u.m(n,c),s||_((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(_)}(c,s.target,s.anchor,s.customElement),k()}var y,b;h(m)}function S(e){let n,o,r,c,p,h,$,m,g,x,y,b,_;return{c(){n=a("div"),o=a("main"),r=a("h1"),c=i("Hello "),p=i(e[0]),h=i("!"),$=f(),m=a("p"),m.innerHTML='Visit the\n      <a href="https://svelte.dev/tutorial">Svelte tutorial</a>\n      to learn how to build Svelte apps.',g=f(),x=a("footer"),y=a("p"),b=i("Version: "),_=i(e[1]),l(r,"class","text-5xl text-center text-indigo-700 py-8"),l(m,"class","text-2xl text-center py-2"),l(o,"class","mb-auto"),l(y,"class","text-center"),l(x,"class","h-10 bg-gray-300"),l(n,"class","flex flex-col h-screen justify-between")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),s(n,o),s(o,r),s(r,c),s(r,p),s(r,h),s(o,$),s(o,m),s(n,g),s(n,x),s(x,y),s(y,b),s(y,_)},p(t,[e]){1&e&&d(p,t[0]),2&e&&d(_,t[1])},i:t,o:t,d(t){t&&u(n)}}}function C(t,e,n){let{name:o}=e,{version:r}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"version"in t&&n(1,r=t.version)},[o,r]}return new class extends class{$destroy(){A(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,C,S,c,{name:0,version:1})}}({target:document.body,props:{name:"world",version:"1.4.9"}})}();
//# sourceMappingURL=bundle.js.map
