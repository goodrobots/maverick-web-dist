(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["yarn.vue-match-media"],{"772b":function(e,t,i){"use strict";const n="VUE-MATCH-MEDIA-MQ",o="VUE-MATCH-MEDIA-MQUERIES";t["a"]=(e,t)=>{Object.defineProperty(e.prototype,"$mq",{get(){return this[n]}}),e.mixin({beforeCreate(){const t=this.$options.mq&&this.$options.mq.config&&this.$options.mq.config.isolated,i=this===this.$root,s=this.$parent&&this.$parent[o],r=t||i||!s?[]:Object.keys(s);if(this.$options.mq){this[o]={};const t=new Set(r.concat(Object.keys(this.$options.mq).filter(e=>"config"!==e))),i=Array.from(t).reduce((e,t)=>{const i=this.$options.mq[t],n=i?window.matchMedia(i):s[t];return n.addListener(i=>{e[t]=i.matches}),e[t]=n.matches,this[o][t]=n,e},{});Object.defineProperty(i,"all",{enumerable:!0,configurable:!0,get(){return Object.keys(this).filter(e=>"all"!==e).filter(e=>this[e])}}),e.util.defineReactive(this,n,i)}else s&&(this[o]=s,e.util.defineReactive(this,n,this.$parent[n]))}}),e.directive("onmedia",{bind(t,{value:i,expression:s,arg:r,modifiers:a},{context:c}){const h=[...Object.keys(a)],d=!h.length||a.any,l=r;if(i instanceof Function){if(l){if(d)return void e.util.warn('Error binding v-onmedia: a ":not" argument was passed without any modifiers',c);if("not"!==l)return void e.util.warn(`Error binding v-onmedia: unknown argument "${r}" was passed`,c)}Object.keys(c[o]).filter(e=>d||h.find(t=>l?t!==e:t===e)).forEach(e=>{c.$watch(`$mq.${e}`,(t,n)=>{i.call(c,e,t)}),c[n][e]&&i.call(c,e,!0,!0)})}else e.util.warn(`Error binding v-onmedia: expression "${s}" doesn't resolve to\n          a component method, so there's nothing to call back on change`,c)}})}}}]);
//# sourceMappingURL=yarn.vue-match-media.837baf7d.js.map