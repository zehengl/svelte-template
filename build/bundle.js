var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function i(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function l(){return a(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function h(t){p=t}const $=[],m=[],g=[],x=[],b=Promise.resolve();let y=!1;function _(t){g.push(t)}let v=!1;const w=new Set;function k(){if(!v){v=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];h(e),E(e.$$)}for(h(null),$.length=0;m.length;)m.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];w.has(e)||(w.add(e),e())}g.length=0}while($.length);for(;x.length;)x.pop()();y=!1,v=!1,w.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const j=new Set;function A(t,e){-1===t.$$.dirty[0]&&($.push(t),y||(y=!0,b.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(c,s,u,a,l,f,d,$=[-1]){const m=p;h(c);const g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:s.context||[]),callbacks:n(),dirty:$,skip_bound:!1,root:s.target||m.$$.root};d&&d(g.root);let x=!1;if(g.ctx=u?u(c,s.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),x&&A(c,t)),e})):[],g.update(),x=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(i)}else g.fragment&&g.fragment.c();s.intro&&((b=c.$$.fragment)&&b.i&&(j.delete(b),b.i(y))),function(t,n,c,s){const{fragment:i,on_mount:u,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,c),s||_((()=>{const n=u.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(_)}(c,s.target,s.anchor,s.customElement),k()}var b,y;h(m)}function N(e){let n,o,r,c,p,h,$,m,g,x,b,y,_;return{c(){n=u("div"),o=u("main"),r=u("h1"),c=a("Hello "),p=a(e[0]),h=a("!"),$=l(),m=u("p"),m.innerHTML='Visit the\n      <a href="https://svelte.dev/tutorial">Svelte tutorial</a>\n      to learn how to build Svelte apps.',g=l(),x=u("footer"),b=u("p"),y=a("Version: "),_=a(e[1]),f(r,"class","text-5xl text-center text-indigo-700 py-8"),f(m,"class","text-2xl text-center py-2"),f(o,"class","mb-auto"),f(b,"class","text-center"),f(x,"class","h-10 bg-gray-300"),f(n,"class","flex flex-col h-screen justify-between")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),s(n,o),s(o,r),s(r,c),s(r,p),s(r,h),s(o,$),s(o,m),s(n,g),s(n,x),s(x,b),s(b,y),s(b,_)},p(t,[e]){1&e&&d(p,t[0]),2&e&&d(_,t[1])},i:t,o:t,d(t){t&&i(n)}}}function O(t,e,n){let{name:o}=e,{version:r}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"version"in t&&n(1,r=t.version)},[o,r]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,O,N,c,{name:0,version:1})}}({target:document.body,props:{name:"world",version:"1.4.2"}})}();
//# sourceMappingURL=bundle.js.map
