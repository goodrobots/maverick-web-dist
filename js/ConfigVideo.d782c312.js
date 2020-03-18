(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ConfigVideo"],{"0e57":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-iterator",{attrs:{items:e.items,"item-key":"name","hide-default-footer":"","single-expand":e.expand},scopedSlots:e._u([{key:"header",fn:function(){return[a("v-toolbar",{staticClass:"mb-1",attrs:{color:e.navColor,dark:"",flat:""}},[a("v-toolbar-title",[e._v("Video Streams")]),a("v-spacer"),a("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-spacer"),a("v-btn",{attrs:{light:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-plus-box")]),a("span",[e._v("Add Video Stream")])],1)],1)]},proxy:!0},{key:"default",fn:function(t){var i=t.items,n=t.isExpanded,o=t.expand;return[a("v-row",e._l(i,(function(t){return a("v-col",{key:t.name,attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[e._v(e._s(t.name))]),a("v-spacer"),a("v-switch",{staticClass:"mt-4",attrs:{color:e.navColor,"input-value":n(t),label:n(t)?"Editing":"Edit"},on:{change:function(e){return o(t,e)}}})],1)],1),n(t)?a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-divider")],1),a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{label:"Stream Name/Description"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),a("v-list-item-content",{staticClass:"align-end"})],1),a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{label:"WebRTC Endpoint"},model:{value:t.webrtcEndpoint,callback:function(a){e.$set(t,"webrtcEndpoint",a)},expression:"item.webrtcEndpoint"}})],1),a("v-list-item-content",{staticClass:"align-end"})],1),a("v-list-item",[a("v-divider")],1),a("v-list-item",[a("v-btn",{attrs:{color:"green"},on:{click:function(a){return e.save(t)}}},[e._v("Save")]),a("v-btn",{staticClass:"ml-4",attrs:{color:"blue"}},[e._v("Test")]),a("v-spacer"),a("v-btn",{attrs:{color:"red"},on:{click:function(a){return e.remove(t)}}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-delete")]),a("span",[e._v("Delete")])],1)],1)],1):e._e()],1)})),1)]}}])}),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline",class:e.navColor,attrs:{"primary-title":""}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-plus-box")]),a("span",[e._v("Add Video Stream")])],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Stream Key (Short)",required:""},model:{value:e.newitem.key,callback:function(t){e.$set(e.newitem,"key",t)},expression:"newitem.key"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Stream Name/Description",required:""},model:{value:e.newitem.name,callback:function(t){e.$set(e.newitem,"name",t)},expression:"newitem.name"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Hostname (FQDN) / IP Address",required:""},model:{value:e.newitem.hostname,callback:function(t){e.$set(e.newitem,"hostname",t)},expression:"newitem.hostname"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Port",hint:"Maverick default port is 6796",required:""},model:{value:e.newitem.port,callback:function(t){e.$set(e.newitem,"port",t)},expression:"newitem.port"}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-btn",{staticClass:"ma-2",attrs:{color:"green"},on:{click:function(t){return e.createStream()}}},[e._v("Create Stream")]),a("v-btn",{staticClass:"ma-2",attrs:{color:"grey"},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")])],1)],1)],1),e.deleteitem?a("v-dialog",{attrs:{"max-width":"400"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline red--text"},[e._v("Delete Stream: "),a("strong",[e._v(e._s(e.deleteitem.key))]),e._v("?")])]),a("v-card-text",[a("h3",[e._v(e._s(e.deleteitem.name))]),a("div",[e._v("Are you sure you want to delete this video stream?")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(t){e.deleteDialog=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"red darken-1"},on:{click:function(t){return e.removeStream()}}},[e._v("Delete")])],1)],1)],1):e._e()],1)},n=[],o=(a("99af"),a("b0c0"),a("07ac"),{name:"ConfigVideo",components:{},data:function(){return{search:"",filter:{},dialog:!1,deleteDialog:!1,newitem:{},deleteitem:null,expand:!0}},computed:{items:function(){return Object.values(this.$store.state.data.videostreams)}},methods:{save:function(e){this.$store.commit("data/updateVideoStream",{key:e.key,data:e})},createStream:function(){this.dialog=!1,this.logDebug("Creating new video stream: "+this.newitem.key);var e="wss",t={key:this.newitem.key,name:this.newitem.name,webrtcEndpoint:"".concat(e,"://").concat(this.newitem.hostname,":").concat(this.newitem.port),enabled:!1,action:start};this.$store.commit("data/addVideoStream",{key:t.key,data:t})},remove:function(e){this.deleteitem=e,this.deleteDialog=!0},removeStream:function(){this.logDebug("Deleting stream: "+this.deleteitem.key),this.$store.commit("data/removeVideoStream",this.deleteitem.key),this.deleteitem=null}}}),l=o,r=a("2877"),s=a("6544"),c=a.n(s),d=a("8336"),m=a("b0af"),v=a("99d9"),u=a("62ad"),f=a("a523"),p=a("c377"),b=a("169a"),h=a("ce7e"),w=a("132d"),k=a("8860"),g=a("da13"),x=a("5d23"),V=a("0fd9"),_=a("2fa4"),C=a("b73d"),y=a("8654"),S=a("71d9"),D=a("2a7f"),$=Object(r["a"])(l,i,n,!1,null,null,null);t["default"]=$.exports;c()($,{VBtn:d["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:u["a"],VContainer:f["a"],VDataIterator:p["a"],VDialog:b["a"],VDivider:h["a"],VIcon:w["a"],VList:k["a"],VListItem:g["a"],VListItemContent:x["a"],VRow:V["a"],VSpacer:_["a"],VSwitch:C["a"],VTextField:y["a"],VToolbar:S["a"],VToolbarTitle:D["b"]})}}]);
//# sourceMappingURL=ConfigVideo.d782c312.js.map