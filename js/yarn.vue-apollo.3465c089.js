(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["yarn.vue-apollo"],{"522d":function(t,e,i){"use strict";(function(t){var o=i("9530"),r=i.n(o);function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?v(t):e}function b(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=f(t),null===t)break;return t}function g(t,e,i){return g="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var o=b(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(i):r.value}},g(t,e,i||t)}function m(t,e){return w(t)||S(t,e)||A()}function $(t){return k(t)||O(t)||_()}function k(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function w(t){if(Array.isArray(t))return t}function O(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function S(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var i=[],o=!0,r=!1,n=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done);o=!0)if(i.push(s.value),e&&i.length===e)break}catch(l){r=!0,n=l}finally{try{o||null==a["return"]||a["return"]()}finally{if(r)throw n}}return i}}function _(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function A(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(t,e){return e={exports:{}},t(e,e.exports),e.exports}function P(t,e,i,o){var r,n=!1,s=0;function a(){r&&clearTimeout(r)}function l(){a(),n=!0}function u(){var l=this,u=Date.now()-s,c=arguments;function h(){s=Date.now(),i.apply(l,c)}function p(){r=void 0}n||(o&&!r&&h(),a(),void 0===o&&u>t?h():!0!==e&&(r=setTimeout(o?p:h,void 0===o?t-u:t)))}return"boolean"!==typeof e&&(o=i,i=e,e=void 0),u.cancel=l,u}function q(t,e,i){return void 0===i?P(t,e,!1):P(t,i,!1!==e)}var D=Object.freeze({__proto__:null,throttle:P,debounce:q}),R=j((function(t,e){var i=e.Globals={};function o(t){return function(e,i){return t(i,e)}}e.throttle=o(D.throttle),e.debounce=o(D.debounce),e.getMergedDefinition=function(t){return i.Vue.util.mergeOptions({},t)},e.reapply=function(t,e){while("function"===typeof t)t=t.call(e);return t},e.omit=function(t,e){return Object.entries(t).filter((function(t){var i=m(t,1),o=i[0];return!e.includes(o)})).reduce((function(t,e){var i=m(e,2),o=i[0],r=i[1];return t[o]=r,t}),{})},e.addGqlError=function(t){t.graphQLErrors&&t.graphQLErrors.length&&(t.gqlError=t.graphQLErrors[0])},e.noop=function(){}})),Q=R.Globals,E=R.throttle,L=R.debounce,x=(R.getMergedDefinition,R.reapply),C=R.omit,I=R.addGqlError,M=(R.noop,function(){function t(e,i,o){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];s(this,t),u(this,"type",null),u(this,"vueApolloSpecialKeys",[]),this.vm=e,this.key=i,this.initialOptions=o,this.options=Object.assign({},o),this._skip=!1,this._pollInterval=null,this._watchers=[],this._destroyed=!1,this.lastApolloOptions=null,r&&this.autostart()}return l(t,[{key:"autostart",value:function(){var t=this;"function"===typeof this.options.skip?this._skipWatcher=this.vm.$watch((function(){return t.options.skip.call(t.vm,t.vm,t.key)}),this.skipChanged.bind(this),{immediate:!0,deep:this.options.deep}):this.options.skip?this._skip=!0:this.start(),"function"===typeof this.options.pollInterval&&(this._pollWatcher=this.vm.$watch(this.options.pollInterval.bind(this.vm),this.pollIntervalChanged.bind(this),{immediate:!0}))}},{key:"pollIntervalChanged",value:function(t,e){t!==e&&(this.pollInterval=t,null==t?this.stopPolling():this.startPolling(t))}},{key:"skipChanged",value:function(t,e){t!==e&&(this.skip=t)}},{key:"refresh",value:function(){this._skip||(this.stop(),this.start())}},{key:"start",value:function(){var t=this;this.starting=!0;for(var e=function(e,i){var o=i[e];if("function"===typeof t.initialOptions[o]){var r=t.initialOptions[o].bind(t.vm);t.options[o]=r();var n=function(e){t.options[o]=e,t.refresh()};t.vm.$isServer||(n=t.options.throttle?E(n,t.options.throttle):n,n=t.options.debounce?L(n,t.options.debounce):n),t._watchers.push(t.vm.$watch(r,n,{deep:t.options.deep}))}},i=0,o=["query","document","context"];i<o.length;i++)e(i,o);if("function"===typeof this.options.variables){var r=this.executeApollo.bind(this);this.vm.$isServer||(r=this.options.throttle?E(r,this.options.throttle):r,r=this.options.debounce?L(r,this.options.debounce):r),this._watchers.push(this.vm.$watch((function(){return t.options.variables.call(t.vm)}),r,{immediate:!0,deep:this.options.deep}))}else this.executeApollo(this.options.variables)}},{key:"stop",value:function(){for(var t=0,e=this._watchers;t<e.length;t++){var i=e[t];i()}this.sub&&(this.sub.unsubscribe(),this.sub=null)}},{key:"generateApolloOptions",value:function(t){var e=C(this.options,this.vueApolloSpecialKeys);return e.variables=t,this.lastApolloOptions=e,e}},{key:"executeApollo",value:function(t){this.starting=!1}},{key:"nextResult",value:function(t){var e=t.error;e&&I(e)}},{key:"callHandlers",value:function(t){for(var e=!1,i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];for(var n=0;n<t.length;n++){var s=t[n];if(s){e=!0;var a=s.apply(this.vm,o);if("undefined"!==typeof a&&!a)break}}return e}},{key:"errorHandler",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.callHandlers.apply(this,[[this.options.error,this.vm.$apollo.error,this.vm.$apollo.provider.errorHandler]].concat(e))}},{key:"catchError",value:function(t){I(t);var e=this.errorHandler(t,this.vm,this.key,this.type,this.lastApolloOptions);if(!e)if(t.graphQLErrors&&0!==t.graphQLErrors.length){console.error("GraphQL execution errors for ".concat(this.type," '").concat(this.key,"'"));for(var i=0,o=t.graphQLErrors;i<o.length;i++){var r=o[i];console.error(r)}}else if(t.networkError)console.error("Error sending the ".concat(this.type," '").concat(this.key,"'"),t.networkError);else{var n;if(console.error("[vue-apollo] An error has occurred for ".concat(this.type," '").concat(this.key,"'")),Array.isArray(t))(n=console).error.apply(n,$(t));else console.error(t)}}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,this.stop(),this._skipWatcher&&this._skipWatcher())}},{key:"pollInterval",get:function(){return this._pollInterval},set:function(t){this._pollInterval=t}},{key:"skip",get:function(){return this._skip},set:function(t){t?this.stop():this.start(),this._skip=t}}]),t}()),T=["variables","watch","update","result","error","loadingKey","watchLoading","skip","throttle","debounce","subscribeToMore","prefetch","manual"],K=function(t){function e(t,i,o){var r,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return s(this,e),t.$data.$apolloData&&!t.$data.$apolloData.queries[i]&&t.$set(t.$data.$apolloData.queries,i,{loading:!1}),r=y(this,f(e).call(this,t,i,o,!1)),u(v(r),"type","query"),u(v(r),"vueApolloSpecialKeys",T),u(v(r),"_loading",!1),u(v(r),"_linkedSubscriptions",[]),t.$isServer&&(r.firstRun=new Promise((function(t,e){r._firstRunResolve=t,r._firstRunReject=e}))),r.vm.$isServer&&(r.options.fetchPolicy="network-only"),o.manual||(r.hasDataField=r.vm.$data.hasOwnProperty(i),r.hasDataField?Object.defineProperty(r.vm.$data.$apolloData.data,i,{get:function(){return r.vm.$data[i]},enumerable:!0,configurable:!0}):Object.defineProperty(r.vm.$data,i,{get:function(){return r.vm.$data.$apolloData.data[i]},enumerable:!0,configurable:!0})),n&&r.autostart(),r}return p(e,t),l(e,[{key:"stop",value:function(){g(f(e.prototype),"stop",this).call(this),this.loadingDone(),this.observer&&(this.observer.stopPolling(),this.observer=null)}},{key:"executeApollo",value:function(t){var i=JSON.stringify(t);if(this.sub){if(i===this.previousVariablesJson)return;this.sub.unsubscribe();for(var o=0,r=this._linkedSubscriptions;o<r.length;o++){var n=r[o];n.stop()}}if(this.previousVariablesJson=i,this.observer=this.vm.$apollo.watchQuery(this.generateApolloOptions(t)),this.startQuerySubscription(),"no-cache"!==this.options.fetchPolicy||this.options.notifyOnNetworkStatusChange){var s=this.maySetLoading();s.loading&&!this.options.notifyOnNetworkStatusChange||this.nextResult(s)}g(f(e.prototype),"executeApollo",this).call(this,t);for(var a=0,l=this._linkedSubscriptions;a<l.length;a++){var u=l[a];u.start()}}},{key:"startQuerySubscription",value:function(){this.sub&&!this.sub.closed||(this.sub=this.observer.subscribe({next:this.nextResult.bind(this),error:this.catchError.bind(this)}))}},{key:"maySetLoading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.observer.currentResult();return(t||e.loading)&&(this.loading||this.applyLoadingModifier(1),this.loading=!0),e}},{key:"nextResult",value:function(t){g(f(e.prototype),"nextResult",this).call(this,t);var i=t.data,o=t.loading,r=t.error,n=t.errors;if((r||n)&&this.firstRunReject(),o||this.loadingDone(),n&&n.length){var s=new Error("GraphQL error: ".concat(n.map((function(t){return t.message})).join(" | ")));Object.assign(s,{graphQLErrors:n,networkError:null}),g(f(e.prototype),"catchError",this).call(this,s)}if("none"!==this.observer.options.errorPolicy||!r&&!n){var a="function"===typeof this.options.result;null==i||(this.options.manual?a||console.error("".concat(this.key," query must have a 'result' hook in manual mode")):"function"===typeof this.options.update?this.setData(this.options.update.call(this.vm,i)):"undefined"===typeof i[this.key]&&Object.keys(i).length?console.error("Missing ".concat(this.key," attribute on result"),i):this.setData(i[this.key])),a&&this.options.result.call(this.vm,t,this.key)}}},{key:"setData",value:function(t){this.vm.$set(this.hasDataField?this.vm.$data:this.vm.$data.$apolloData.data,this.key,t)}},{key:"catchError",value:function(t){g(f(e.prototype),"catchError",this).call(this,t),this.firstRunReject(),this.loadingDone(t),this.nextResult(this.observer.currentResult()),this.resubscribeToQuery()}},{key:"resubscribeToQuery",value:function(){var t=this.observer.getLastError(),e=this.observer.getLastResult();this.observer.resetLastResults(),this.startQuerySubscription(),Object.assign(this.observer,{lastError:t,lastResult:e})}},{key:"watchLoading",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.callHandlers.apply(this,[[this.options.watchLoading,this.vm.$apollo.watchLoading,this.vm.$apollo.provider.watchLoading]].concat(e,[this]))}},{key:"applyLoadingModifier",value:function(t){var e=this.loadingKey;e&&"number"===typeof this.vm[e]&&(this.vm[e]+=t),this.watchLoading(1===t,t)}},{key:"loadingDone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.loading&&this.applyLoadingModifier(-1),this.loading=!1,t||this.firstRunResolve()}},{key:"fetchMore",value:function(){var t,e=this;if(this.observer)return this.maySetLoading(!0),(t=this.observer).fetchMore.apply(t,arguments).then((function(t){return t.loading||e.loadingDone(),t}))}},{key:"subscribeToMore",value:function(){var t;if(this.observer)return{unsubscribe:(t=this.observer).subscribeToMore.apply(t,arguments)}}},{key:"refetch",value:function(t){var e=this;if(t&&(this.options.variables=t),this.observer){var i=this.observer.refetch(t).then((function(t){return t.loading||e.loadingDone(),t}));return this.maySetLoading(),i}}},{key:"setVariables",value:function(t,e){if(this.options.variables=t,this.observer){var i=this.observer.setVariables(t,e);return this.maySetLoading(),i}}},{key:"setOptions",value:function(t){if(Object.assign(this.options,t),this.observer){var e=this.observer.setOptions(t);return this.maySetLoading(),e}}},{key:"startPolling",value:function(){var t;if(this.observer)return(t=this.observer).startPolling.apply(t,arguments)}},{key:"stopPolling",value:function(){var t;if(this.observer)return(t=this.observer).stopPolling.apply(t,arguments)}},{key:"firstRunResolve",value:function(){this._firstRunResolve&&(this._firstRunResolve(),this._firstRunResolve=null)}},{key:"firstRunReject",value:function(t){this._firstRunReject&&(this._firstRunReject(t),this._firstRunReject=null)}},{key:"destroy",value:function(){g(f(e.prototype),"destroy",this).call(this),this.loading&&this.watchLoading(!1,-1),this.loading=!1}},{key:"client",get:function(){return this.vm.$apollo.getClient(this.options)}},{key:"loading",get:function(){return this.vm.$data.$apolloData&&this.vm.$data.$apolloData.queries[this.key]?this.vm.$data.$apolloData.queries[this.key].loading:this._loading},set:function(t){this._loading!==t&&(this._loading=t,this.vm.$data.$apolloData&&this.vm.$data.$apolloData.queries[this.key]&&(this.vm.$data.$apolloData.queries[this.key].loading=t,this.vm.$data.$apolloData.loading+=t?1:-1))}},{key:"loadingKey",get:function(){return this.options.loadingKey||this.vm.$apollo.loadingKey}}]),e}(M),N=function(t){function e(){var t,i;s(this,e);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return i=y(this,(t=f(e)).call.apply(t,[this].concat(r))),u(v(i),"type","subscription"),u(v(i),"vueApolloSpecialKeys",["variables","result","error","throttle","debounce","linkedQuery"]),i}return p(e,t),l(e,[{key:"executeApollo",value:function(t){var i=JSON.stringify(t);if(this.sub){if(i===this.previousVariablesJson)return;this.sub.unsubscribe()}this.previousVariablesJson=i;var o=this.generateApolloOptions(t);if("function"===typeof o.updateQuery&&(o.updateQuery=o.updateQuery.bind(this.vm)),this.options.linkedQuery){if("function"===typeof this.options.result){var r=this.options.result.bind(this.vm),n=o.updateQuery&&o.updateQuery.bind(this.vm);o.updateQuery=function(){return r.apply(void 0,arguments),n&&n.apply(void 0,arguments)}}this.sub=this.options.linkedQuery.subscribeToMore(o)}else this.observer=this.vm.$apollo.subscribe(o),this.sub=this.observer.subscribe({next:this.nextResult.bind(this),error:this.catchError.bind(this)});g(f(e.prototype),"executeApollo",this).call(this,t)}},{key:"nextResult",value:function(t){g(f(e.prototype),"nextResult",this).call(this,t),"function"===typeof this.options.result&&this.options.result.call(this.vm,t,this.key)}}]),e}(M),V=function(){function t(e){s(this,t),this._apolloSubscriptions=[],this._watchers=[],this.vm=e,this.queries={},this.subscriptions={},this.client=void 0,this.loadingKey=void 0,this.error=void 0}return l(t,[{key:"getClient",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!t||!t.client){if("object"===n(this.client))return this.client;if(this.client){if(this.provider.clients){var e=this.provider.clients[this.client];if(!e)throw new Error("[vue-apollo] Missing client '".concat(this.client,"' in 'apolloProvider'"));return e}throw new Error("[vue-apollo] Missing 'clients' options in 'apolloProvider'")}return this.provider.defaultClient}var i=this.provider.clients[t.client];if(!i)throw new Error("[vue-apollo] Missing client '".concat(t.client,"' in 'apolloProvider'"));return i}},{key:"query",value:function(t){return this.getClient(t).query(t)}},{key:"watchQuery",value:function(t){var e=this,i=this.getClient(t).watchQuery(t),o=i.subscribe.bind(i);return i.subscribe=function(t){var i=o(t);return e._apolloSubscriptions.push(i),i},i}},{key:"mutate",value:function(t){return this.getClient(t).mutate(t)}},{key:"subscribe",value:function(t){var e=this;if(!this.vm.$isServer){var i=this.getClient(t).subscribe(t),o=i.subscribe.bind(i);return i.subscribe=function(t){var i=o(t);return e._apolloSubscriptions.push(i),i},i}}},{key:"addSmartQuery",value:function(t,e){var i=this,o=x(e,this.vm);if(!o.query){var r=o;o={query:r}}var n,s=this.vm.$options.apollo,a=this.provider.defaultOptions;if(a&&a.$query&&(n=a.$query),s&&s.$query&&(n=h({},n||{},{},s.$query)),n)for(var l in n)"undefined"===typeof o[l]&&(o[l]=n[l]);var u=this.queries[t]=new K(this.vm,t,o,!1);if(this.vm.$isServer&&!1===o.prefetch||u.autostart(),!this.vm.$isServer){var c=o.subscribeToMore;c&&(Array.isArray(c)?c.forEach((function(e,o){i.addSmartSubscription("".concat(t).concat(o),h({},e,{linkedQuery:u}))})):this.addSmartSubscription(t,h({},c,{linkedQuery:u})))}return u}},{key:"addSmartSubscription",value:function(t,e){if(!this.vm.$isServer){e=x(e,this.vm);var i=this.subscriptions[t]=new N(this.vm,t,e,!1);return i.autostart(),e.linkedQuery&&e.linkedQuery._linkedSubscriptions.push(i),i}}},{key:"defineReactiveSetter",value:function(t,e,i){var o=this;this._watchers.push(this.vm.$watch(e,(function(e){o[t]=e}),{immediate:!0,deep:i}))}},{key:"destroy",value:function(){for(var t=0,e=this._watchers;t<e.length;t++){var i=e[t];i()}for(var o in this.queries)this.queries[o].destroy();for(var r in this.subscriptions)this.subscriptions[r].destroy();this._apolloSubscriptions.forEach((function(t){t.unsubscribe()}))}},{key:"provider",get:function(){return this.vm.$apolloProvider}},{key:"loading",get:function(){return 0!==this.vm.$data.$apolloData.loading}},{key:"data",get:function(){return this.vm.$data.$apolloData.data}},{key:"skipAllQueries",set:function(t){for(var e in this.queries)this.queries[e].skip=t}},{key:"skipAllSubscriptions",set:function(t){for(var e in this.subscriptions)this.subscriptions[e].skip=t}},{key:"skipAll",set:function(t){this.skipAllQueries=t,this.skipAllSubscriptions=t}}]),t}(),F=function(){function t(e){if(s(this,t),!e)throw new Error("Options argument required");this.clients=e.clients||{},e.defaultClient&&(this.clients.defaultClient=this.defaultClient=e.defaultClient),this.defaultOptions=e.defaultOptions,this.watchLoading=e.watchLoading,this.errorHandler=e.errorHandler,this.prefetch=e.prefetch}return l(t,[{key:"provide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"$apolloProvider";return console.warn("<ApolloProvider>.provide() is deprecated. Use the 'apolloProvider' option instead with the provider object directly."),u({},t,this)}}]),t}();function H(t){return Object.keys(t).length>0}var J={name:"ApolloQuery",provide:function(){return{getDollarApollo:this.getDollarApollo,getApolloQuery:this.getApolloQuery}},props:{query:{type:[Function,Object],required:!0},variables:{type:Object,default:void 0},fetchPolicy:{type:String,default:void 0},pollInterval:{type:Number,default:void 0},notifyOnNetworkStatusChange:{type:Boolean,default:void 0},context:{type:Object,default:void 0},update:{type:Function,default:function(t){return t}},skip:{type:Boolean,default:!1},debounce:{type:Number,default:0},throttle:{type:Number,default:0},clientId:{type:String,default:void 0},deep:{type:Boolean,default:void 0},tag:{type:String,default:"div"},prefetch:{type:Boolean,default:!0},options:{type:Object,default:function(){return{}}}},data:function(){return{result:{data:null,loading:!1,networkStatus:7,error:null},times:0}},watch:{fetchPolicy:function(t){this.$apollo.queries.query.setOptions({fetchPolicy:t})},pollInterval:function(t){this.$apollo.queries.query.setOptions({pollInterval:t})},notifyOnNetworkStatusChange:function(t){this.$apollo.queries.query.setOptions({notifyOnNetworkStatusChange:t})},"$data.$apolloData.loading":function(t){this.$emit("loading",!!t)}},apollo:{$client:function(){return this.clientId},query:function(){return h({query:function(){return"function"===typeof this.query?this.query(r.a):this.query},variables:function(){return this.variables},fetchPolicy:this.fetchPolicy,pollInterval:this.pollInterval,debounce:this.debounce,throttle:this.throttle,notifyOnNetworkStatusChange:this.notifyOnNetworkStatusChange,context:function(){return this.context},skip:function(){return this.skip},deep:this.deep,prefetch:this.prefetch},this.options,{manual:!0,result:function(t){var e=t,i=e.errors,o=e.loading,r=e.networkStatus,n=t,s=n.error;t=Object.assign({},t),i&&i.length&&(s=new Error("Apollo errors occurred (".concat(i.length,")")),s.graphQLErrors=i);var a={};o?Object.assign(a,this.$_previousData,t.data):s?Object.assign(a,this.$apollo.queries.query.observer.getLastResult()||{},t.data):(a=t.data,this.$_previousData=t.data);var l=H(a);this.result={data:l?this.update(a):void 0,fullData:l?a:void 0,loading:o,error:s,networkStatus:r},this.times=++this.$_times,this.$emit("result",this.result)},error:function(t){this.result.loading=!1,this.result.error=t,this.$emit("error",t)}})}},created:function(){this.$_times=0},methods:{getDollarApollo:function(){return this.$apollo},getApolloQuery:function(){return this.$apollo.queries.query}},render:function(t){var e=this.$scopedSlots["default"]({result:this.result,times:this.times,query:this.$apollo.queries.query,isLoading:this.$apolloData.loading,gqlError:this.result&&this.result.error&&this.result.error.gqlError});return e=Array.isArray(e)?e.concat(this.$slots["default"]):[e].concat(this.$slots["default"]),this.tag?t(this.tag,e):e[0]}},G=0,B={name:"ApolloSubscribeToMore",inject:["getDollarApollo","getApolloQuery"],props:{document:{type:[Function,Object],required:!0},variables:{type:Object,default:void 0},updateQuery:{type:Function,default:void 0}},watch:{document:"refresh",variables:"refresh"},created:function(){this.$_key="sub_component_".concat(G++)},mounted:function(){this.refresh()},beforeDestroy:function(){this.destroy()},methods:{destroy:function(){this.$_sub&&this.$_sub.destroy()},refresh:function(){this.destroy();var t=this.document;"function"===typeof t&&(t=t(r.a)),this.$_sub=this.getDollarApollo().addSmartSubscription(this.$_key,{document:t,variables:this.variables,updateQuery:this.updateQuery,linkedQuery:this.getApolloQuery()})}},render:function(t){return null}},W={props:{mutation:{type:[Function,Object],required:!0},variables:{type:Object,default:void 0},optimisticResponse:{type:Object,default:void 0},update:{type:Function,default:void 0},refetchQueries:{type:Function,default:void 0},clientId:{type:String,default:void 0},tag:{type:String,default:"div"}},data:function(){return{loading:!1,error:null}},watch:{loading:function(t){this.$emit("loading",t)}},methods:{mutate:function(t){var e=this;this.loading=!0,this.error=null;var i=this.mutation;"function"===typeof i&&(i=i(r.a)),this.$apollo.mutate(h({mutation:i,client:this.clientId,variables:this.variables,optimisticResponse:this.optimisticResponse,update:this.update,refetchQueries:this.refetchQueries},t)).then((function(t){e.$emit("done",t),e.loading=!1}))["catch"]((function(t){I(t),e.error=t,e.$emit("error",t),e.loading=!1}))}},render:function(t){var e=this.$scopedSlots["default"]({mutate:this.mutate,loading:this.loading,error:this.error,gqlError:this.error&&this.error.gqlError});return e=Array.isArray(e)?e.concat(this.$slots["default"]):[e].concat(this.$slots["default"]),this.tag?t(this.tag,e):e[0]}};function U(t,e){return"undefined"!==typeof t&&Object.prototype.hasOwnProperty.call(t,e)}function z(){var t=this.$options,e=t.apolloProvider;if(e)this.$apolloProvider="function"===typeof e?e():e;else if(t.parent&&t.parent.$apolloProvider)this.$apolloProvider=t.parent.$apolloProvider;else if(t.provide){var i="function"===typeof t.provide?t.provide.call(this):t.provide;i&&i.$apolloProvider&&(this.$apolloProvider=i.$apolloProvider)}}function X(){var t=this;this.$_apolloInitData={};var e=this.$options.apollo;if(e){var i=function(i){if("$"!==i.charAt(0)){var o=e[i];o.manual||U(t.$options.props,i)||U(t.$options.computed,i)||U(t.$options.methods,i)||Object.defineProperty(t,i,{get:function(){return t.$data.$apolloData.data[i]},set:function(e){return t.$_apolloInitData[i]=e},enumerable:!0,configurable:!0})}};for(var o in e)i(o)}}function Y(){var t=this,e=this.$apolloProvider;if(!this._apolloLaunched&&e){this._apolloLaunched=!0;var i=this.$options.apollo;if(i){for(var o in this.$_apolloPromises=[],i.$init||(i.$init=!0,e.defaultOptions&&(i=this.$options.apollo=Object.assign({},e.defaultOptions,i))),Z(this.$apollo,"skipAll",i.$skipAll,i.$deep),Z(this.$apollo,"skipAllQueries",i.$skipAllQueries,i.$deep),Z(this.$apollo,"skipAllSubscriptions",i.$skipAllSubscriptions,i.$deep),Z(this.$apollo,"client",i.$client,i.$deep),Z(this.$apollo,"loadingKey",i.$loadingKey,i.$deep),Z(this.$apollo,"error",i.$error,i.$deep),Z(this.$apollo,"watchLoading",i.$watchLoading,i.$deep),Object.defineProperty(this,"$apolloData",{get:function(){return t.$data.$apolloData},enumerable:!0,configurable:!0}),i)if("$"!==o.charAt(0)){var r=i[o],n=this.$apollo.addSmartQuery(o,r);this.$isServer&&(r=x(r,this),!1===e.prefetch||!1===r.prefetch||!1===i.$prefetch||n.skip||this.$_apolloPromises.push(n.firstRun))}if(i.subscribe&&Q.Vue.util.warn("vue-apollo -> `subscribe` option is deprecated. Use the `$subscribe` option instead."),i.$subscribe)for(var s in i.$subscribe)this.$apollo.addSmartSubscription(s,i.$subscribe[s])}}}function Z(t,e,i,o){"undefined"!==typeof i&&("function"===typeof i?t.defineReactiveSetter(e,i,o):t[e]=i)}function tt(){this.$_apollo&&this.$_apollo.destroy()}function et(t,e){t.mixin(h({},"1"===e?{init:z}:{},{},"2"===e?{data:function(){return{$apolloData:{queries:{},loading:0,data:this.$_apolloInitData}}},beforeCreate:function(){z.call(this),X.call(this)},serverPrefetch:function(){var t=this;if(this.$_apolloPromises)return Promise.all(this.$_apolloPromises).then((function(){tt.call(t)}))["catch"]((function(e){return tt.call(t),Promise.reject(e)}))}}:{},{created:Y,destroyed:tt}))}var it=["$subscribe"];function ot(t,e){if(!ot.installed){ot.installed=!0,Q.Vue=t;var i=t.version.substr(0,t.version.indexOf(".")),o=t.config.optionMergeStrategies.methods;t.config.optionMergeStrategies.apollo=function(t,e,i){if(!t)return e;if(!e)return t;for(var r=Object.assign({},C(t,it),t.data),n=Object.assign({},C(e,it),e.data),s={},a=0;a<it.length;a++){var l=it[a];s[l]=o(t[l],e[l])}return Object.assign(s,o(r,n))},Object.defineProperty(t.prototype,"$apollo",{get:function(){return this.$_apollo||(this.$_apollo=new V(this)),this.$_apollo}}),et(t,i),"2"===i&&(t.component("apollo-query",J),t.component("ApolloQuery",J),t.component("apollo-subscribe-to-more",B),t.component("ApolloSubscribeToMore",B),t.component("apollo-mutation",W),t.component("ApolloMutation",W))}}F.install=ot,F.version="3.0.3";var rt=null;"undefined"!==typeof window?rt=window.Vue:"undefined"!==typeof t&&(rt=t.Vue),rt&&rt.use(F),e["a"]=F}).call(this,i("c8ba"))}}]);
//# sourceMappingURL=yarn.vue-apollo.3465c089.js.map