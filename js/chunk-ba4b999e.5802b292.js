(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba4b999e"],{3900:function(e,a,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"paramQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Parameter"},directives:[]}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"paramsQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ParameterList"},arguments:[{kind:"Argument",name:{kind:"Name",value:"query"},value:{kind:"StringValue",value:"*",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"parameters"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Parameter"},directives:[]}]}}]}}]}},{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"paramSubscription"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Parameter"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Parameter"},directives:[]}]}}]}},{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"updateParam"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"value"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ParamValue"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Parameter"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"value"},value:{kind:"Variable",name:{kind:"Name",value:"value"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Parameter"},directives:[]}]}}]}}],loc:{start:0,end:363}};i.loc.source={body:'#import "./ParametersFragment.gql"\n\nquery paramQuery {\n  ...Parameter\n}\n\nquery paramsQuery {\n  ParameterList(query: "*") {\n    parameters {\n      ...Parameter\n    }\n  }\n}\n\nsubscription paramSubscription {\n  Parameter {\n    ...Parameter\n  }\n}\n\nmutation updateParam ($id: String!, $value: ParamValue!) {\n  Parameter(id: $id, value: $value) {\n    ...Parameter\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function r(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var a=e.name.value;return!n[a]&&(n[a]=!0,!0)}))}function d(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&a.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,a)})),e.definitions&&e.definitions.forEach((function(e){d(e,a)}))}i.definitions=i.definitions.concat(r(t("db57").definitions));var s={};function m(e,a){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==a)return i}}function o(e,a){var t={kind:e.kind,definitions:[m(e,a)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=s[a]||new Set,n=new Set,r=new Set;i.forEach((function(e){r.add(e)}));while(r.size>0){var d=r;r=new Set,d.forEach((function(e){if(!n.has(e)){n.add(e);var a=s[e]||new Set;a.forEach((function(e){r.add(e)}))}}))}return n.forEach((function(a){var i=m(e,a);i&&t.definitions.push(i)})),t}(function(){i.definitions.forEach((function(e){if(e.name){var a=new Set;d(e,a),s[e.name.value]=a}}))})(),e.exports=i,e.exports["paramQuery"]=o(i,"paramQuery"),e.exports["paramsQuery"]=o(i,"paramsQuery"),e.exports["paramSubscription"]=o(i,"paramSubscription"),e.exports["updateParam"]=o(i,"updateParam")},"99d9":function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return m}));var i=t("b0af"),n=t("80d2"),r=Object(n["i"])("v-card__actions"),d=Object(n["i"])("v-card__subtitle"),s=Object(n["i"])("v-card__text"),m=Object(n["i"])("v-card__title");i["a"]},db57:function(e,a){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Parameter"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Parameter"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bitmask"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"decimal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"documentation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"humanGroup"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"humanName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"increment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"max"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"min"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"rebootRequired"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"unitText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"units"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"values"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:225}};t.loc.source={body:"fragment Parameter on Parameter {\n  id\n  value\n  meta {\n    bitmask\n    decimal\n    documentation\n    group\n    humanGroup\n    humanName\n    increment\n    max\n    min\n    rebootRequired\n    unitText\n    units\n    values\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=t},e925:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"fluid grid-list-xl"},[t("v-layout",{staticClass:"row wrap"},[t("v-flex",{staticClass:"xs12 sm6 md6"},[t("v-card",[t("v-toolbar",{attrs:{dense:""}},[t("v-toolbar-title",[e._v("Overview")])],1),t("v-card-text",[t("table",{attrs:{width:"50%"}},[t("tr",[t("td",[e._v("Vehicle Type")]),t("td",{staticClass:"primary--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("SYSID_SW_TYPE")))}})]),e.findParam("FRAME_CLASS")?[t("tr",[t("td",[e._v("Frame Class")]),t("td",{staticClass:"primary--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("FRAME_CLASS")))}})]),t("tr",[t("td",[e._v("Frame Type")]),t("td",{staticClass:"primary--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("FRAME_TYPE")))}})])]:e.findParam("MAV_TYPE")?[t("tr",[t("td",[e._v("Frame Type")]),t("td",{staticClass:"primary--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("MAV_TYPE")))}})])]:e._e()],2)])],1)],1),t("v-flex",{staticClass:"xs12 sm6 md6"},[t("v-card",[t("v-toolbar",{attrs:{dense:""}},[t("v-toolbar-title",[e._v("Parameter Checklist")])],1),t("v-card-title",{attrs:{"primary-title":""}},[t("div",[t("h3",{staticClass:"headline mb-0 grey--text"},[e._v("Logging")])]),t("table",{attrs:{width:"100%"}},[t("tr",[t("td",[e._v("Mavlink Logging")]),e.findParam("LOG_BACKEND_TYPE")&&3==e.findParam("LOG_BACKEND_TYPE").value?[t("td",{staticClass:"green--text"},[e._v("Good")]),t("td",{staticClass:"green--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("LOG_BACKEND_TYPE")))}})]:[t("td",{staticClass:"red--text"},[e._v("Bad")]),t("td",{staticClass:"red--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("LOG_BACKEND_TYPE")))}})]],2),t("tr",[t("td",[e._v("Logging while Disarmed")]),e.findParam("LOG_DISARMED")&&0==e.findParam("LOG_DISARMED").value?[t("td",{staticClass:"green--text"},[e._v("Good")]),t("td",{staticClass:"green--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("LOG_DISARMED")))}})]:[t("td",{staticClass:"red--text"},[e._v("Bad")]),t("td",{staticClass:"red--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("LOG_DISARMED")))}})]],2),t("tr",[t("td",[e._v("Stop/Rotate log on Disarm")]),e.findParam("LOG_FILE_DSRMROT")&&1==e.findParam("LOG_FILE_DSRMROT").value?[t("td",{staticClass:"green--text"},[e._v("Good")]),t("td",{staticClass:"green--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("LOG_FILE_DSRMROT")))}})]:[t("td",{staticClass:"red--text"},[e._v("Bad")]),t("td",{staticClass:"red--text",domProps:{innerHTML:e._s(e.valueFormat(e.findParam("LOG_FILE_DSRMROT")))}})]],2)])])],1)],1)],1)],1)},n=[],r=(t("99af"),t("7db0"),t("d3b7"),t("ac1f"),t("5319"),t("ddb0"),t("3900")),d={name:"ConfigParamSummary",data:function(){return{params:[],paramData:[]}},watch:{activeApi:{handler:function(e){this.logDebug("activeApi changed: "+e),this.createQlQueries()}}},mounted:function(){this.createQlQueries()},methods:{createQlQueries:function(){this.activeApi&&this.createQuery("Params",r["paramsQuery"],this.activeApi,"paramsData",!this.apis[this.activeApi].state)},findParam:function(e){return this.params.find((function(a){return a.id===e}))},processParamQuery:function(e,a){var t=a.replace("Status_","");this.logDebug(e.data),e.data&&"Status"in e.data&&(!0!==this.apis[t].state&&this.$store.commit("data/setApiState",{api:t,value:!0}),null===this.apistate[t].lasteen&&this.$store.commit("core/setApiState",{api:t,field:"lastseen",value:performance.now()}),t in this.$store.state.statusData||this.$store.commit("core/setStatusData",{api:t,message:e.data.Status}))},valueFormat:function(e){if(e&&e.meta&&e.meta.units)return"".concat(e.value,' <span class="caption"><strong>').concat(e.meta.units,"</strong></span>");if(e&&e.meta&&e.meta.values){var a=JSON.parse(e.meta.values);if(a[e.value])return a[e.value]}return e?e.value:null}}},s=d,m=t("2877"),o=t("6544"),l=t.n(o),u=t("b0af"),c=t("99d9"),v=t("a523"),f=t("0e8f"),p=t("a722"),k=t("71d9"),S=t("2a7f"),P=Object(m["a"])(s,i,n,!1,null,null,null);a["default"]=P.exports;l()(P,{VCard:u["a"],VCardText:c["b"],VCardTitle:c["c"],VContainer:v["a"],VFlex:f["a"],VLayout:p["a"],VToolbar:k["a"],VToolbarTitle:S["b"]})}}]);
//# sourceMappingURL=chunk-ba4b999e.5802b292.js.map