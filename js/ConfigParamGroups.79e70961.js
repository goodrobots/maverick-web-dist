(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ConfigParamGroups"],{"1d44":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-alert",{attrs:{type:"info",value:!0}},[e._v("This grouped parameter interface is out of date, and left for reference only")]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Edit Parameter")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("div",{domProps:{innerHTML:e._s(e.editedItem.id)}})])],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs9:"",sm9:"",md9:""}},[e.editedItem.meta&&e.editedItem.meta.values?[a("v-select",{staticClass:"input-group--focused",attrs:{items:e.editedItem.selectValues,label:"Parameter Value",dense:"","single-line":"",bottom:"",autofocus:"","persistent-hint":"",hint:e.editedItem.meta&&e.editedItem.meta.humanName,suffix:e.editedItem.meta&&e.editedItem.meta.fields&&JSON.parse(e.editedItem.meta.fields).Units},model:{value:e.editedItem.value,callback:function(t){e.$set(e.editedItem,"value",t)},expression:"editedItem.value"}})]:[a("v-text-field",{attrs:{label:"Value",autofocus:"","persistent-hint":"",hint:e.editedItem.meta&&e.editedItem.meta.humanName,suffix:e.editedItem.meta&&e.editedItem.meta.fields&&JSON.parse(e.editedItem.meta.fields).Units},model:{value:e.editedItem.value,callback:function(t){e.$set(e.editedItem,"value",t)},expression:"editedItem.value"}})]],2)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{"xs-12":"",sm12:"",md12:""}},[e.editedItem.meta&&e.editedItem.meta.documentation?a("div",{domProps:{innerHTML:e._s(e.editedItem.meta.documentation)}}):e._e()]),e.editedItem.meta&&e.editedItem.meta.fields?[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},e._l(JSON.parse(e.editedItem.meta.fields),(function(t,i){return a("div",[a("span",[a("strong",[e._v(e._s(i)+": "+e._s(t))])])])})),0)]:e._e(),e.editedItem.meta&&e.editedItem.meta.values?[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("div",[a("span",[a("strong",[e._v("Available Values")])]),e._l(JSON.parse(e.editedItem.meta.values),(function(t,i){return a("div",[i==e.editedItem.value?a("span",{staticClass:"primary--text"},[e._v(e._s(i)+": "),a("strong",[e._v(e._s(t))]),e._v(" (Active)")]):a("span",[e._v(e._s(i)+": "),a("strong",[e._v(e._s(t))])])])}))],2)])]:e._e()],2)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.close(t)}}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.save(t)}}},[e._v("Save")])],1)],1)],1)],1),a("v-expansion-panel",{staticClass:"px-0 py-0",attrs:{popout:"",focusable:""}},e._l(e.paramGroups,(function(t,i){return a("v-expansion-panel-content",{key:i,attrs:{lazy:""}},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(t))]),a("v-card",[a("v-data-table",{staticClass:"elevation-1 px-4 py-4",attrs:{items:e.params,headers:e.headers,search:t,"custom-filter":e.groupFilter,"hide-actions":"","hide-headers":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("tr",{on:{click:function(e){t.expanded=!t.expanded}}},[a("td",{domProps:{innerHTML:e._s(t.item.id)}}),t.item.meta&&t.item.meta.humanName?a("td",{domProps:{innerHTML:e._s(t.item.meta.humanName)}}):a("td",[e._v("--")]),a("td",{domProps:{innerHTML:e._s(e.valueFormat(t.item))}}),a("td",{staticClass:"justify-center px-0 text-xs-right"},[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){return a.stopPropagation(),e.editItem(t.item)}}},[a("v-icon",[e._v("edit")])],1)],1)])]}},{key:"expand",fn:function(t){return[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("table",{staticClass:"px-0 py-0"},[t.item.meta&&t.item.meta.documentation?a("tr",[a("td",[a("strong",[e._v("Documentation")])]),a("td",[a("span",{domProps:{innerHTML:e._s(t.item.meta.documentation)}})])]):e._e(),t.item.meta&&t.item.meta.fields?[a("tr",[a("td",[a("strong",[e._v("Fields")])]),a("td",e._l(JSON.parse(t.item.meta.fields),(function(t,i){return a("div",[a("strong",[e._v(e._s(i)+": "+e._s(t))])])})),0)])]:e._e(),t.item.meta&&t.item.meta.values?[a("tr",[a("td",[a("strong",[e._v("Values")])]),a("td",e._l(JSON.parse(t.item.meta.values),(function(i,s){return a("div",[s==t.item.value?a("span",{staticClass:"primary--text"},[e._v(e._s(s)+": "),a("strong",[e._v(e._s(i))]),e._v(" (Active)")]):a("span",[e._v(e._s(s)+": "),a("strong",[e._v(e._s(i))])])])})),0)])]:e._e()],2)])],1)]}}],null,!0)})],1)],1)})),1)],1)],1)],1)},s=[],n=(a("99af"),a("4de4"),a("c975"),a("d81d"),a("b64b"),a("d3b7"),a("25f0"),a("6062"),a("3ca3"),a("ddb0"),a("2909")),r=a("3900"),d={name:"ConfigParamGroups",data:function(){return{params:[],loading:0,headers:[{},{},{}],dialog:!1,editedIndex:-1,editedItem:{id:null,value:null,meta:null}}},computed:{activeApi:function(){return this.$store.state.activeApi},paramGroups:function(){return this.params?Object(n["a"])(new Set(this.params.map((function(e){return e.meta?e.meta.group:null})))).sort():[]}},methods:{groupFilter:function(e,t,a){return e.filter((function(e){return e.meta&&a(e.meta.group,t.toString().toLowerCase())}))},valueFormat:function(e){if(e&&e.meta&&e.meta.fields){var t=JSON.parse(e.meta.fields);if(t.Units)return"".concat(e.value,' <span class="caption"><strong>').concat(t.Units,"</strong></span>")}if(e&&e.meta&&e.meta.values){var a=JSON.parse(e.meta.values);if(a[e.value])return a[e.value]}return e?e.value:null},editItem:function(e){var t=this;this.editedIndex=this.params.indexOf(e),this.editedItem=Object.assign({},e),this.editedItem.meta&&this.editedItem.meta.values&&(this.editedItem.selectValues=Object.keys(JSON.parse(this.editedItem.meta.values)).map((function(e){return{value:e,text:JSON.parse(t.editedItem.meta.values)[e]}})),this.editedItem.value=this.editedItem.value.toString(),this.editedItem.selectedValue={value:this.editedItem.value.toString(),text:JSON.parse(this.editedItem.meta.values)[this.editedItem.value].text}),this.dialog=!0},close:function(){this.dialog=!1},save:function(){this.$apollo.mutate({mutation:r["updateParam"],variables:{id:this.editedItem.id,value:this.editedItem.value}}),this.close()}},apollo:{$client:function(){return this.activeApi},params:{query:r["paramsQuery"],subscribeToMore:{document:r["paramsSubscription"],updateQuery:function(e,t){var a=t.subscriptionData,i=a.data.params;return{params:e.params.map((function(e){if(e.id===i.id){var t=JSON.parse(JSON.stringify(e));return t.value=i.value,t}return e}))}}},mutation:r["updateParam"]}}},m=d,l=a("2877"),o=a("6544"),u=a.n(o),c=a("0798"),v=a("8336"),p=a("b0af"),f=a("99d9"),_=a("a523"),I=a("8fea"),x=a("169a"),h=a("cd55"),g=a("49e2"),b=a("0e8f"),V=a("132d"),y=a("a722"),S=a("b974"),O=a("2fa4"),C=a("8654"),N=Object(l["a"])(m,i,s,!1,null,null,null);t["default"]=N.exports;u()(N,{VAlert:c["a"],VBtn:v["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VContainer:_["a"],VDataTable:I["a"],VDialog:x["a"],VExpansionPanel:h["a"],VExpansionPanelContent:g["a"],VFlex:b["a"],VIcon:V["a"],VLayout:y["a"],VSelect:S["a"],VSpacer:O["a"],VTextField:C["a"]})}}]);
//# sourceMappingURL=ConfigParamGroups.79e70961.js.map