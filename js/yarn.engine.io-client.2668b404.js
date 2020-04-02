(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["yarn.engine.io-client"],{"01d3":function(t,e,s){var r=s("c9eb");t.exports=function(t){var e=t.xdomain,s=t.xscheme,i=t.enablesXDR;try{if("undefined"!==typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(o){}try{if("undefined"!==typeof XDomainRequest&&!s&&i)return new XDomainRequest}catch(o){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(o){}}},"0882":function(t,e,s){(function(e){var r,i,o=s("19b7"),n=s("5a6e"),a=s("4f2a"),p=s("62fa"),h=s("0299"),c=s("34eb")("engine.io-client:websocket");if("undefined"!==typeof WebSocket?r=WebSocket:"undefined"!==typeof self&&(r=self.WebSocket||self.MozWebSocket),"undefined"===typeof window)try{i=s("9043")}catch(l){}var u=r||i;function d(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=r&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(u=i),o.call(this,t)}t.exports=d,p(d,o),d.prototype.name="websocket",d.prototype.supportsBinary=!0,d.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,s={agent:this.agent,perMessageDeflate:this.perMessageDeflate};s.pfx=this.pfx,s.key=this.key,s.passphrase=this.passphrase,s.cert=this.cert,s.ca=this.ca,s.ciphers=this.ciphers,s.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(s.headers=this.extraHeaders),this.localAddress&&(s.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new u(t,e):new u(t):new u(t,e,s)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},d.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},d.prototype.write=function(t){var s=this;this.writable=!1;for(var r=t.length,i=0,o=r;i<o;i++)(function(t){n.encodePacket(t,s.supportsBinary,(function(i){if(!s.usingBrowserWebSocket){var o={};if(t.options&&(o.compress=t.options.compress),s.perMessageDeflate){var n="string"===typeof i?e.byteLength(i):i.length;n<s.perMessageDeflate.threshold&&(o.compress=!1)}}try{s.usingBrowserWebSocket?s.ws.send(i):s.ws.send(i,o)}catch(l){c("websocket closed before onclose event")}--r||a()}))})(t[i]);function a(){s.emit("flush"),setTimeout((function(){s.writable=!0,s.emit("drain")}),0)}},d.prototype.onClose=function(){o.prototype.onClose.call(this)},d.prototype.doClose=function(){"undefined"!==typeof this.ws&&this.ws.close()},d.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",s="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(s=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=h()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+s+this.path+t},d.prototype.check=function(){return!!u&&!("__initialize"in u&&this.name===d.prototype.name)}}).call(this,s("b639").Buffer)},"0949":function(t,e,s){var r=s("19b7"),i=s("4f2a"),o=s("5a6e"),n=s("62fa"),a=s("0299"),p=s("34eb")("engine.io-client:polling");t.exports=c;var h=function(){var t=s("01d3"),e=new t({xdomain:!1});return null!=e.responseType}();function c(t){var e=t&&t.forceBase64;h&&!e||(this.supportsBinary=!1),r.call(this,t)}n(c,r),c.prototype.name="polling",c.prototype.doOpen=function(){this.poll()},c.prototype.pause=function(t){var e=this;function s(){p("paused"),e.readyState="paused",t()}if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(p("we are currently polling - waiting to pause"),r++,this.once("pollComplete",(function(){p("pre-pause polling complete"),--r||s()}))),this.writable||(p("we are currently writing - waiting to pause"),r++,this.once("drain",(function(){p("pre-pause writing complete"),--r||s()})))}else s()},c.prototype.poll=function(){p("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},c.prototype.onData=function(t){var e=this;p("polling got data %s",t);var s=function(t,s,r){if("opening"===e.readyState&&e.onOpen(),"close"===t.type)return e.onClose(),!1;e.onPacket(t)};o.decodePayload(t,this.socket.binaryType,s),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():p('ignoring poll - transport state "%s"',this.readyState))},c.prototype.doClose=function(){var t=this;function e(){p("writing close packet"),t.write([{type:"close"}])}"open"===this.readyState?(p("transport open - closing"),e()):(p("transport not open - deferring close"),this.once("open",e))},c.prototype.write=function(t){var e=this;this.writable=!1;var s=function(){e.writable=!0,e.emit("drain")};o.encodePayload(t,this.supportsBinary,(function(t){e.doWrite(t,s)}))},c.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",s="";!1!==this.timestampRequests&&(t[this.timestampParam]=a()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(s=":"+this.port),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+s+this.path+t}},"0a5e":function(t,e,s){(function(e){var r=s("0949"),i=s("62fa");t.exports=c;var o,n=/\n/g,a=/\\n/g;function p(){}function h(){return"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}function c(t){if(r.call(this,t),this.query=this.query||{},!o){var e=h();o=e.___eio=e.___eio||[]}this.index=o.length;var s=this;o.push((function(t){s.onData(t)})),this.query.j=this.index,"function"===typeof addEventListener&&addEventListener("beforeunload",(function(){s.script&&(s.script.onerror=p)}),!1)}i(c,r),c.prototype.supportsBinary=!1,c.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),r.prototype.doClose.call(this)},c.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var s=document.getElementsByTagName("script")[0];s?s.parentNode.insertBefore(e,s):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!==typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout((function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)}),100)},c.prototype.doWrite=function(t,e){var s=this;if(!this.form){var r,i=document.createElement("form"),o=document.createElement("textarea"),p=this.iframeId="eio_iframe_"+this.index;i.className="socketio",i.style.position="absolute",i.style.top="-1000px",i.style.left="-1000px",i.target=p,i.method="POST",i.setAttribute("accept-charset","utf-8"),o.name="d",i.appendChild(o),document.body.appendChild(i),this.form=i,this.area=o}function h(){c(),e()}function c(){if(s.iframe)try{s.form.removeChild(s.iframe)}catch(e){s.onError("jsonp polling iframe removal error",e)}try{var t='<iframe src="javascript:0" name="'+s.iframeId+'">';r=document.createElement(t)}catch(e){r=document.createElement("iframe"),r.name=s.iframeId,r.src="javascript:0"}r.id=s.iframeId,s.form.appendChild(r),s.iframe=r}this.form.action=this.uri(),c(),t=t.replace(a,"\\\n"),this.area.value=t.replace(n,"\\n");try{this.form.submit()}catch(u){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===s.iframe.readyState&&h()}:this.iframe.onload=h}}).call(this,s("c8ba"))},"19b7":function(t,e,s){var r=s("5a6e"),i=s("7297");function o(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}t.exports=o,i(o.prototype),o.prototype.onError=function(t,e){var s=new Error(t);return s.type="TransportError",s.description=e,this.emit("error",s),this},o.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},o.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},o.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},o.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},o.prototype.onData=function(t){var e=r.decodePacket(t,this.socket.binaryType);this.onPacket(e)},o.prototype.onPacket=function(t){this.emit("packet",t)},o.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},"6a44":function(t,e,s){var r=s("01d3"),i=s("d33e"),o=s("0a5e"),n=s("0882");function a(t){var e,s=!1,n=!1,a=!1!==t.jsonp;if("undefined"!==typeof location){var p="https:"===location.protocol,h=location.port;h||(h=p?443:80),s=t.hostname!==location.hostname||h!==t.port,n=t.secure!==p}if(t.xdomain=s,t.xscheme=n,e=new r(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new o(t)}e.polling=a,e.websocket=n},"94ac":function(t,e,s){t.exports=s("da92"),t.exports.parser=s("5a6e")},d33e:function(t,e,s){var r=s("01d3"),i=s("0949"),o=s("7297"),n=s("62fa"),a=s("34eb")("engine.io-client:polling-xhr");function p(){}function h(t){if(i.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!==typeof location){var e="https:"===location.protocol,s=location.port;s||(s=e?443:80),this.xd="undefined"!==typeof location&&t.hostname!==location.hostname||s!==t.port,this.xs=t.secure!==e}}function c(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}if(t.exports=h,t.exports.Request=c,n(h,i),h.prototype.supportsBinary=!0,h.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new c(t)},h.prototype.doWrite=function(t,e){var s="string"!==typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:s}),i=this;r.on("success",e),r.on("error",(function(t){i.onError("xhr post error",t)})),this.sendXhr=r},h.prototype.doPoll=function(){a("xhr poll");var t=this.request(),e=this;t.on("data",(function(t){e.onData(t)})),t.on("error",(function(t){e.onError("xhr poll error",t)})),this.pollXhr=t},o(c.prototype),c.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new r(t),s=this;try{a("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders)for(var i in e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0),this.extraHeaders)this.extraHeaders.hasOwnProperty(i)&&e.setRequestHeader(i,this.extraHeaders[i])}catch(o){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(o){}try{e.setRequestHeader("Accept","*/*")}catch(o){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){s.onLoad()},e.onerror=function(){s.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(s.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(o){}4===e.readyState&&(200===e.status||1223===e.status?s.onLoad():setTimeout((function(){s.onError("number"===typeof e.status?e.status:0)}),0))},a("xhr data %s",this.data),e.send(this.data)}catch(o){return void setTimeout((function(){s.onError(o)}),0)}"undefined"!==typeof document&&(this.index=c.requestsCount++,c.requests[this.index]=this)},c.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},c.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},c.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},c.prototype.cleanup=function(t){if("undefined"!==typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=p:this.xhr.onreadystatechange=p,t)try{this.xhr.abort()}catch(e){}"undefined"!==typeof document&&delete c.requests[this.index],this.xhr=null}},c.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(s){}t=("application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e)&&this.xhr.response||this.xhr.responseText}catch(s){this.onError(s)}null!=t&&this.onData(t)},c.prototype.hasXDR=function(){return"undefined"!==typeof XDomainRequest&&!this.xs&&this.enablesXDR},c.prototype.abort=function(){this.cleanup()},c.requestsCount=0,c.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",d);else if("function"===typeof addEventListener){var u="onpagehide"in self?"pagehide":"unload";addEventListener(u,d,!1)}function d(){for(var t in c.requests)c.requests.hasOwnProperty(t)&&c.requests[t].abort()}},da92:function(t,e,s){var r=s("6a44"),i=s("7297"),o=s("34eb")("engine.io-client:socket"),n=s("ee34"),a=s("5a6e"),p=s("5317"),h=s("4f2a");function c(t,e){if(!(this instanceof c))return new c(t,e);e=e||{},t&&"object"===typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!==typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!==typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"===typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"===typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function u(t){var e={};for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);return e}t.exports=c,c.priorWebsocketSuccess=!1,i(c.prototype),c.protocol=a.protocol,c.Socket=c,c.Transport=s("19b7"),c.transports=s("6a44"),c.parser=s("5a6e"),c.prototype.createTransport=function(t){o('creating transport "%s"',t);var e=u(this.query);e.EIO=a.protocol,e.transport=t;var s=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var i=new r[t]({query:e,socket:this,agent:s.agent||this.agent,hostname:s.hostname||this.hostname,port:s.port||this.port,secure:s.secure||this.secure,path:s.path||this.path,forceJSONP:s.forceJSONP||this.forceJSONP,jsonp:s.jsonp||this.jsonp,forceBase64:s.forceBase64||this.forceBase64,enablesXDR:s.enablesXDR||this.enablesXDR,withCredentials:s.withCredentials||this.withCredentials,timestampRequests:s.timestampRequests||this.timestampRequests,timestampParam:s.timestampParam||this.timestampParam,policyPort:s.policyPort||this.policyPort,pfx:s.pfx||this.pfx,key:s.key||this.key,passphrase:s.passphrase||this.passphrase,cert:s.cert||this.cert,ca:s.ca||this.ca,ciphers:s.ciphers||this.ciphers,rejectUnauthorized:s.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:s.perMessageDeflate||this.perMessageDeflate,extraHeaders:s.extraHeaders||this.extraHeaders,forceNode:s.forceNode||this.forceNode,localAddress:s.localAddress||this.localAddress,requestTimeout:s.requestTimeout||this.requestTimeout,protocols:s.protocols||void 0,isReactNative:this.isReactNative});return i},c.prototype.open=function(){var t;if(this.rememberUpgrade&&c.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout((function(){e.emit("error","No transports available")}),0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(s){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},c.prototype.setTransport=function(t){o("setting transport %s",t.name);var e=this;this.transport&&(o("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",(function(){e.onDrain()})).on("packet",(function(t){e.onPacket(t)})).on("error",(function(t){e.onError(t)})).on("close",(function(){e.onClose("transport close")}))},c.prototype.probe=function(t){o('probing transport "%s"',t);var e=this.createTransport(t,{probe:1}),s=!1,r=this;function i(){if(r.onlyBinaryUpgrades){var i=!this.supportsBinary&&r.transport.supportsBinary;s=s||i}s||(o('probe transport "%s" opened',t),e.send([{type:"ping",data:"probe"}]),e.once("packet",(function(i){if(!s)if("pong"===i.type&&"probe"===i.data){if(o('probe transport "%s" pong',t),r.upgrading=!0,r.emit("upgrading",e),!e)return;c.priorWebsocketSuccess="websocket"===e.name,o('pausing current transport "%s"',r.transport.name),r.transport.pause((function(){s||"closed"!==r.readyState&&(o("changing transport and sending upgrade packet"),d(),r.setTransport(e),e.send([{type:"upgrade"}]),r.emit("upgrade",e),e=null,r.upgrading=!1,r.flush())}))}else{o('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=e.name,r.emit("upgradeError",n)}})))}function n(){s||(s=!0,d(),e.close(),e=null)}function a(s){var i=new Error("probe error: "+s);i.transport=e.name,n(),o('probe transport "%s" failed because of error: %s',t,s),r.emit("upgradeError",i)}function p(){a("transport closed")}function h(){a("socket closed")}function u(t){e&&t.name!==e.name&&(o('"%s" works - aborting "%s"',t.name,e.name),n())}function d(){e.removeListener("open",i),e.removeListener("error",a),e.removeListener("close",p),r.removeListener("close",h),r.removeListener("upgrading",u)}c.priorWebsocketSuccess=!1,e.once("open",i),e.once("error",a),e.once("close",p),this.once("close",h),this.once("upgrading",u),e.open()},c.prototype.onOpen=function(){if(o("socket open"),this.readyState="open",c.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){o("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},c.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(o('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data);break}else o('packet received with socket readyState "%s"',this.readyState)},c.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},c.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout((function(){"closed"!==e.readyState&&e.onClose("ping timeout")}),t||e.pingInterval+e.pingTimeout)},c.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout((function(){o("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)}),t.pingInterval)},c.prototype.ping=function(){var t=this;this.sendPacket("ping",(function(){t.emit("ping")}))},c.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},c.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(o("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},c.prototype.write=c.prototype.send=function(t,e,s){return this.sendPacket("message",t,e,s),this},c.prototype.sendPacket=function(t,e,s,r){if("function"===typeof e&&(r=e,e=void 0),"function"===typeof s&&(r=s,s=null),"closing"!==this.readyState&&"closed"!==this.readyState){s=s||{},s.compress=!1!==s.compress;var i={type:t,data:e,options:s};this.emit("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}},c.prototype.close=function(){if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var t=this;this.writeBuffer.length?this.once("drain",(function(){this.upgrading?r():e()})):this.upgrading?r():e()}function e(){t.onClose("forced close"),o("socket closing - telling transport to close"),t.transport.close()}function s(){t.removeListener("upgrade",s),t.removeListener("upgradeError",s),e()}function r(){t.once("upgrade",s),t.once("upgradeError",s)}return this},c.prototype.onError=function(t){o("socket error %j",t),c.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},c.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){o('socket close with reason: "%s"',t);var s=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),s.writeBuffer=[],s.prevBufferLen=0}},c.prototype.filterUpgrades=function(t){for(var e=[],s=0,r=t.length;s<r;s++)~n(this.transports,t[s])&&e.push(t[s]);return e}}}]);
//# sourceMappingURL=yarn.engine.io-client.2668b404.js.map