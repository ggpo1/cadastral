"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[8023],{28023:function(e,t,r){r.r(t),r.d(t,{execute:function(){return o}});var a,n=r(1413),s=r(15861),u=r(87757),c=r(10064),i=r(92026);function o(e,t){var r=t.responseType;r?"array-buffer"!==r&&"blob"!==r&&"json"!==r&&"native"!==r&&"native-request-init"!==r&&"text"!==r&&(r="text"):r="json",t.responseType=r;var o=(0,i.Wg)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:o}).then(function(){var i=(0,s.Z)(u.mark((function s(i){var b,l,p,f,k,x,d;return u.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!i.data){s.next=22;break}if(!(i.data instanceof ArrayBuffer)){s.next=16;break}if("json"!==r&&"text"!==r&&"blob"!==r||(b=new Blob([i.data]),"json"!==r&&"text"!==r||(a||(a=new FileReaderSync),f=a.readAsText(b),"json"!==r))){s.next=14;break}s.prev=3,l=JSON.parse(f||null),s.next=11;break;case 7:throw s.prev=7,s.t0=s.catch(3),x=(0,n.Z)((0,n.Z)({},s.t0),{},{url:e,requestOptions:t}),new c.Z("request:server",s.t0.message,x);case 11:if(!l.error){s.next=14;break}throw d=(0,n.Z)((0,n.Z)({},l.error),{},{url:e,requestOptions:t}),new c.Z("request:server",l.error.message,d);case 14:s.next=22;break;case 16:if(s.t1="native"===r,!s.t1){s.next=22;break}return i.data.signal=o,s.next=21,fetch(i.data.url,i.data);case 21:p=s.sent;case 22:s.t2=r,s.next="blob"===s.t2?25:"json"===s.t2?27:"native"===s.t2?29:"text"===s.t2?31:33;break;case 25:return k=b,s.abrupt("break",34);case 27:return k=l,s.abrupt("break",34);case 29:return k=p,s.abrupt("break",34);case 31:return k=f,s.abrupt("break",34);case 33:k=i.data;case 34:return s.abrupt("return",{data:k,requestOptions:t,ssl:i.ssl,url:e});case 35:case"end":return s.stop()}}),s,null,[[3,7]])})));return function(e){return i.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=8023.7aaba3a1.chunk.js.map