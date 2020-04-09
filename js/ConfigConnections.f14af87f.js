(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ConfigConnections"],{e5c6:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-data-iterator",{attrs:{items:t.items,"item-key":"key","hide-default-footer":"","single-expand":t.expand},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-toolbar",{staticClass:"mb-1",attrs:{color:"primary lighten-1",dense:""}},[i("v-toolbar-title",[t._v("API Connections")]),i("v-spacer"),i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-plus-box")]),i("span",[t._v("Add API Connection")])],1)],1)]},proxy:!0},{key:"no-data",fn:function(){return[i("v-alert",{staticClass:"ma-8",attrs:{border:"left",outlined:"",type:"info",color:"primary"}},[i("span",[t._v("No API Connections are defined."),i("v-btn",{staticClass:"ml-2",attrs:{color:t.navColor+" darken-2",small:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[i("span",[t._v("Add API Connection")])])],1)])]},proxy:!0},{key:"default",fn:function(e){var s=e.items,n=e.isExpanded,a=e.expand;return[i("v-row",t._l(s,(function(e){return i("v-col",{key:e.key,attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[i("v-card",[i("v-toolbar",{attrs:{dense:""}},[i("v-toolbar-title",[i("span",[t._v(t._s(e.name))]),t.isApiReady(e.key)?i("v-chip",{staticClass:"ma-2",attrs:{color:"success",small:""}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-check-circle")]),i("span",[t._v("Connected")])],1):i("v-chip",{staticClass:"ma-2",attrs:{color:"error",small:""}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-alert-circle")]),i("span",[t._v("Not Connected")])],1)],1),i("v-spacer"),i("v-switch",{staticClass:"mt-4",attrs:{color:t.navColor,"input-value":n(e),label:n(e)?"Editing":"Edit"},on:{change:function(t){return a(e,t)}}})],1)],1),n(e)?i("v-row",[i("v-container",{staticClass:"mt-0 pt-0",attrs:{fluid:""}},[i("v-card",[i("v-row",[i("v-col",{staticClass:"pt-0 pr-1",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-content",[i("v-text-field",{attrs:{label:"API Name/Description"},model:{value:e.name,callback:function(i){t.$set(e,"name",i)},expression:"item.name"}})],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-text-field",{attrs:{label:"GraphQL Endpoint"},model:{value:e.httpEndpoint,callback:function(i){t.$set(e,"httpEndpoint",i)},expression:"item.httpEndpoint"}})],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-text-field",{attrs:{label:"Encrypted GraphQL Endpoint"},model:{value:e.httpsEndpoint,callback:function(i){t.$set(e,"httpsEndpoint",i)},expression:"item.httpsEndpoint"}})],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-text-field",{attrs:{label:"Websockets Endpoint"},model:{value:e.wsEndpoint,callback:function(i){t.$set(e,"wsEndpoint",i)},expression:"item.wsEndpoint"}})],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-text-field",{attrs:{label:"Encrypted Websockets Endpoint"},model:{value:e.wssEndpoint,callback:function(i){t.$set(e,"wssEndpoint",i)},expression:"item.wssEndpoint"}})],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-text-field",{attrs:{label:"Schema Endpoint"},model:{value:e.schemaEndpoint,callback:function(i){t.$set(e,"schemaEndpoint",i)},expression:"item.schemaEndpoint"}})],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-text-field",{attrs:{label:"Encrypted Schema Endpoint"},model:{value:e.schemasEndpoint,callback:function(i){t.$set(e,"schemasEndpoint",i)},expression:"item.schemasEndpoint"}})],1)],1),i("v-list-item",[i("v-btn",{attrs:{color:"success"},on:{click:function(i){return t.save(e)}}},[t._v("Save")]),i("v-btn",{staticClass:"ml-2",attrs:{color:"blue"},on:{click:function(i){return t.connect(e)}}},[t._v("Connect")]),i("v-spacer"),i("v-btn",{attrs:{color:"error"},on:{click:function(i){return t.remove(e)}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-delete")]),i("span",[t._v("Delete")])],1)],1)],1)],1),i("v-col",{staticClass:"pt-0 pl-1",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-content",[t._v("API Unique ID")]),i("v-list-item-content",[t.apistate[e.key].uuid?i("span",{staticClass:"success--text text--lighten-1"},[t._v(t._s(t.apistate[e.key].uuid))]):i("v-icon",{attrs:{color:"error"}},[t._v("mdi-alert-circle-outline")])],1)],1),i("v-list-item",[i("v-list-item-content",[t._v("API Last Seen")]),i("v-list-item-content",[t.lastseen(e.key)<60?i("span",{staticClass:"success--text text--lighten-1"},[t._v(t._s(t.lastseen(e.key).toFixed(2))+" seconds ago")]):i("span",{staticClass:"error--text text--lighten-1"},[t._v(t._s(t.lastseen(e.key).toFixed(2))+" seconds ago")])])],1),i("v-list-item",[i("v-list-item-content",[t._v("API Connection State")]),i("v-list-item-content",[t.apistate[e.key].state?i("v-icon",{attrs:{color:"success"}},[t._v("mdi-check-circle-outline")]):i("v-icon",{attrs:{color:"error"}},[t._v("mdi-alert-circle-outline")])],1)],1),i("v-list-item",[i("v-list-item-content",[t._v("API Schema Ready")]),i("v-list-item-content",[t.apistate[e.key].schemaready?i("v-icon",{attrs:{color:"success"}},[t._v("mdi-check-circle-outline")]):i("v-icon",{attrs:{color:"error"}},[t._v("mdi-alert-circle-outline")])],1)],1),i("v-list-item",[i("v-list-item-content",[t._v("Authentication Set")]),i("v-list-item-content",[t.apistate[e.key].auth?i("v-icon",{attrs:{color:"success"}},[t._v("mdi-check-circle-outline")]):i("v-icon",{attrs:{color:"error"}},[t._v("mdi-alert-circle-outline")])],1)],1),i("v-list-item",[i("v-list-item-content",[t._v("Icon Set")]),i("v-list-item-content",[t.apistate[e.key].icon?i("v-icon",{attrs:{color:"success"}},[t._v(t._s(t.apistate[e.key].icon))]):i("v-icon",{attrs:{color:"error"}},[t._v("mdi-alert-circle-outline")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-content",[t._v("SSL Status")]),i("v-list-item-content",[!0===t.apistate[e.key].sslstate?i("v-icon",{attrs:{color:"success"}},[t._v("mdi-check-circle-outline")]):i("v-icon",{attrs:{color:"error"}},[t._v("mdi-alert-circle-outline")])],1)],1),!0!==t.apistate[e.key].sslstate?i("v-list-item",[i("v-list-item-content",[i("v-btn",{attrs:{color:"primary"},on:{click:function(i){return t.setupSsl(e.key)}}},[t._v("Setup SSL")])],1)],1):t._e()],1)],1)],1)],1)],1)],1):t._e()],1)})),1)]}}])}),i("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline primary",attrs:{"primary-title":""}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-plus-box")]),i("span",[t._v("Add API Connection")])],1),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"API Key (Short)",required:""},model:{value:t.newitem.key,callback:function(e){t.$set(t.newitem,"key",e)},expression:"newitem.key"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{attrs:{label:"API Name/Description",required:""},model:{value:t.newitem.name,callback:function(e){t.$set(t.newitem,"name",e)},expression:"newitem.name"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Hostname (FQDN) / IP Address",required:""},model:{value:t.newitem.hostname,callback:function(e){t.$set(t.newitem,"hostname",e)},expression:"newitem.hostname"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Port",required:""},model:{value:t.newitem.port,callback:function(e){t.$set(t.newitem,"port",e)},expression:"newitem.port"}})],1)],1)],1)],1),i("v-card-actions",[i("v-btn",{staticClass:"ma-2",attrs:{color:"success"},on:{click:function(e){return t.createConnection()}}},[t._v("Create Connection")]),i("v-btn",{staticClass:"ma-2",attrs:{color:"error"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"600px","overlay-opacity":"0.85"},model:{value:t.sslDialog,callback:function(e){t.sslDialog=e},expression:"sslDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline primary",attrs:{"primary-title":""}},[i("span",[t._v("SSL Setup")]),t.sslitem?i("v-spacer"):t._e(),t.sslitem?i("span",{staticClass:"subtitle-1"},[t._v(" "+t._s(t.sslitem.name))]):t._e()],1),t.sslitem?i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("div",[t._v("1. Please click on the button below to download the SSL Certificate")]),i("v-btn",{attrs:{color:"primary",small:"",href:"http://"+t.sslitem.hostname+"/security/mavCA.crt"}},[t._v("Download SSL CA Certificate")])],1)],1),t.$browserDetect.isFirefox?i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("div",[t._v("2. In Firefox, a dialog should popup asking which permissions to give the certificate:")]),i("img",{attrs:{src:"img/ssl/firefox-sslca.png"}}),i("div",[t._v("Click to enable 'Trust this CA to identify web sites'")])])],1):(t.$browserDetect.isChrome||t.$browserDetect.isSafari)&&(/OS X/.test(t.$browserDetect.meta.ua)||/OSX/.test(t.$browserDetect.meta.ua))?i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("div",[t._v("2. In MacOS Chrome or Safari, click on the downloaded file in the footer of the browser.")]),i("img",{attrs:{src:"img/ssl/macffsafari-1.png"}}),i("div",[t._v("This will import the certificate into MacOS system Keychain Access app.")]),i("img",{attrs:{src:"img/ssl/macffsafari-2.png"}}),i("div",[t._v("Choose the default 'login' option and click Add")])]),i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("div",[t._v("3. Double click on the untrusted certificate (with red X)")]),i("img",{attrs:{src:"img/ssl/macffsafari-3.png"}})]),i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("div",[t._v("4. Open the 'Trust' section and change 'When using this certificate' to 'Always Trust'")]),i("img",{attrs:{src:"img/ssl/macffsafari-4.png"}}),i("div",[t._v("Close the window and it will ask you to authenticate, to verify the system certificate update.")])])],1):i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("div",[t._v("2. Unknown browser - please search on the internet for installation instructions for your OS/Browser:")]),i("div",[t._v(t._s(t.$browserDetect.meta.ua))])])],1),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("div",[t._v("3. Reload the website to activate the new certificate.")]),i("v-btn",{attrs:{color:"primary",small:""},on:{click:function(e){return t.reloadPage()}}},[t._v("Reload")])],1)],1)],1)],1):t._e(),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"ma-2",attrs:{color:"error"},on:{click:function(e){t.sslDialog=!1}}},[t._v("Close")])],1)],1)],1),t.deleteitem?i("v-dialog",{attrs:{"max-width":"400"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline error--text"},[t._v("Delete Connection: "),i("strong",[t._v(t._s(t.deleteitem.key))]),t._v("?")])]),i("v-card-text",[i("h3",[t._v(t._s(t.deleteitem.name))]),i("div",[t._v("Are you sure you want to delete this API connection?")])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{text:"",color:"error darken-1"},on:{click:function(e){return t.removeConnection()}}},[t._v("Delete")])],1)],1)],1):t._e()],1)},n=[],a=(i("99af"),i("b0c0"),i("b64b"),i("d3b7"),i("07ac"),i("2532"),i("96cf"),i("1da1")),o={name:"ConfigConnections",components:{},data:function(){return{search:"",filter:{},dialog:!1,deleteDialog:!1,sslDialog:!1,newitem:{},deleteitem:null,sslitem:null,expand:!0}},computed:{items:function(){return Object.values(this.apis)}},mounted:function(){for(var t=0,e=Object.keys(this.apis);t<e.length;t++)e[t]},methods:{connect:function(t){this.logDebug("Connecting: "+t.key),this.$apollo.provider.clients[t.key]||this.createClient(t.key,this.apis[t.key])},createConnection:function(){this.dialog=!1,this.logDebug("Creating new connection: "+this.newitem.key);var t="http:",e=t.includes("https")?"wss:":"ws:",i={key:this.newitem.key,httpEndpoint:"".concat(t,"//").concat(this.newitem.hostname,":").concat(this.newitem.port,"/graphql"),wsEndpoint:"".concat(e,"//").concat(this.newitem.hostname,":").concat(this.newitem.port,"/subscriptions"),schemaEndpoint:"".concat(t,"//").concat(this.newitem.hostname,":").concat(this.newitem.port,"/schema"),websocketsOnly:!1,name:this.newitem.name,colorLight:"rgba(166,11,11,0.3)",colorDark:"rgba(166,11,11,0.9)",authToken:null};this.$store.commit("data/addApi",{key:i.key,data:i})},lastseen:function(t){var e=this.$store.state.core.apiSeen.hasOwnProperty(t)?this.$store.state.core.apiSeen[t]:0;return performance.now()-e},reloadPage:function(){window.location.reload()},remove:function(t){this.deleteitem=t,this.deleteDialog=!0},removeConnection:function(){this.logDebug("Deleting connection:"+this.deleteitem.key),this.logDebug(this.activeApi),this.deleteitem.key==this.activeApi&&(this.logDebug("Unsetting active connection"),this.$store.commit("data/setActiveApi",null)),delete this.$apollo.provider.clients[this.deleteitem.key],this.$store.commit("data/removeApi",this.deleteitem.key),this.deleteitem=null},save:function(t){this.$store.commit("data/setApiData",{api:t.key,data:t})},setupSsl:function(t){this.logDebug("Opening setupSsl for Api: ".concat(this.apis[t].name)),this.sslitem=this.apis[t],this.sslDialog=!0},testSsl:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var s,n,a,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=function(t){return new Promise((function(e,i){var s=new Image;s.addEventListener("load",(function(){return e(s)})),s.addEventListener("error",(function(t){return i(t)})),s.src=t}))},n=e.apis[t],a=null,o=s("https://".concat(n.hostname,"/img/misc/onepixel.png")).then((function(t){a=!0})).catch((function(t){e.logDebug("Error loading https image"),a=!1})),i.next=6,o;case 6:e.logDebug("SSL state for ".concat(n.name,": ").concat(a));case 7:case"end":return i.stop()}}),i)})))()}}},c=o,r=i("2877"),l=i("6544"),v=i.n(l),d=i("0798"),m=i("8336"),p=i("b0af"),u=i("99d9"),h=i("cc20"),f=i("62ad"),g=i("a523"),b=i("c377"),w=i("169a"),k=i("ce7e"),_=i("132d"),y=i("8860"),C=i("da13"),x=i("5d23"),D=i("0fd9"),S=i("2fa4"),E=i("b73d"),A=i("8654"),$=i("71d9"),I=i("2a7f"),P=Object(r["a"])(c,s,n,!1,null,null,null);e["default"]=P.exports;v()(P,{VAlert:d["a"],VBtn:m["a"],VCard:p["a"],VCardActions:u["a"],VCardText:u["c"],VCardTitle:u["d"],VChip:h["a"],VCol:f["a"],VContainer:g["a"],VDataIterator:b["a"],VDialog:w["a"],VDivider:k["a"],VIcon:_["a"],VList:y["a"],VListItem:C["a"],VListItemContent:x["a"],VRow:D["a"],VSpacer:S["a"],VSwitch:E["a"],VTextField:A["a"],VToolbar:$["a"],VToolbarTitle:I["b"]})}}]);
//# sourceMappingURL=ConfigConnections.f14af87f.js.map