(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["yarn.apollo-link-persisted-queries"],{fb43:function(e,r,n){"use strict";n.r(r),n.d(r,"VERSION",(function(){return u})),n.d(r,"defaultGenerateHash",(function(){return a})),n.d(r,"defaultOptions",(function(){return c})),n.d(r,"createPersistedQueryLink",(function(){return v}));var t=n("d634"),o=n("6f47"),s=n("7506"),i=n("6eed"),u=1,a=function(e){return i().update(Object(s["print"])(e)).digest("hex")},c={generateHash:a,disable:function(e){var r=e.graphQLErrors,n=e.operation;if(r&&r.some((function(e){var r=e.message;return"PersistedQueryNotSupported"===r})))return!0;var t=n.getContext().response;return!(!t||!t.status||400!==t.status&&500!==t.status)},useGETForHashedQueries:!1};function f(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}function d(e){return!e.query.definitions.some(f)}var p=Object.prototype.hasOwnProperty,l="__createPersistedQueryLink_hashes",b="function"===typeof Symbol?Symbol.for(l):l,h=0,v=function(e){void 0===e&&(e={});var r=Object.assign({},c,e),n=r.generateHash,s=r.disable,i=r.useGETForHashedQueries,a=!0,f="forLink"+h++;function l(e){if(!e||"object"!==typeof e)return n(e);p.call(e,b)||Object.defineProperty(e,b,{value:Object.create(null),enumerable:!1});var r=e[b];return p.call(r,f)?r[f]:r[f]=n(e)}return new t["ApolloLink"]((function(e,r){if(!r)throw new Error("PersistedQueryLink cannot be the last link in the chain.");var n,t=e.query;if(a)try{e.extensions.persistedQuery={version:u,sha256Hash:l(t)}}catch(c){n=c}return new o["a"]((function(t){if(!n){var o,u,c=!1,f=!1,p=function(n,t){var i=n.response,d=n.networkError;if(!c&&(i&&i.errors||d)){c=!0;var p={response:i,networkError:d,operation:e,graphQLErrors:i?i.errors:void 0};if(a=!s(p),i&&i.errors&&i.errors.some((function(e){var r=e.message;return"PersistedQueryNotFound"===r}))||!a)return o&&o.unsubscribe(),e.setContext({http:{includeQuery:!0,includeExtensions:a}}),f&&e.setContext({fetchOptions:u}),void(o=r(e).subscribe(l))}t()},l={next:function(e){p({response:e},(function(){return t.next(e)}))},error:function(e){p({networkError:e},(function(){return t.error(e)}))},complete:t.complete.bind(t)};return e.setContext({http:{includeQuery:!a,includeExtensions:a}}),i&&a&&d(e)&&(e.setContext((function(e){var r=e.fetchOptions,n=void 0===r?{}:r;return u=n,{fetchOptions:Object.assign({},n,{method:"GET"})}})),f=!0),o=r(e).subscribe(l),function(){o&&o.unsubscribe()}}t.error(n)}))}))}}}]);
//# sourceMappingURL=yarn.apollo-link-persisted-queries.ed23f1b0.js.map