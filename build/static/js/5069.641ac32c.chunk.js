"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[5069],{65069:function(i,e,t){t.r(e),t.d(e,{default:function(){return M}});var s=t(15671),r=t(43144),l=t(97326),n=t(60136),a=t(29388),o=t(27366),y=t(93002),u=t(92026),v=t(97642),h=t(49861),c=(t(63780),t(93169),t(23879)),b=(t(25243),t(69912)),d=t(31201),f=t(74184),p=t(6693),_=t(6061),k=t(29598),w=t(56811),m=t(84938),L=t(16791),g=t(41190),C=function(i){(0,n.Z)(t,i);var e=(0,a.Z)(t);function t(i){var r;return(0,s.Z)(this,t),(r=e.call(this,i))._visibilityHandles={},r.fullExtent=void 0,r.operationalLayerType="GroupLayer",r.spatialReference=void 0,r.type="group",r._visibilityWatcher=r._visibilityWatcher.bind((0,l.Z)(r)),r}return(0,r.Z)(t,[{key:"initialize",value:function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}},{key:"_writeLayers",value:function(i,e,t,s){var r=[];if(!i)return r;i.forEach((function(i){var e=(0,g.Nw)(i,s.webmap?s.webmap.getLayerJSONFromResourceInfo(i):null,s);(0,u.pC)(e)&&e.layerType&&r.push(e)})),e.layers=r}},{key:"portalItem",set:function(i){this._set("portalItem",i)}},{key:"visibilityMode",set:function(i){var e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}},{key:"load",value:function(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}},{key:"loadAll",value:function(){var i=this;return(0,y.GZ)(this,(function(e){e(i.layers)}))}},{key:"layerAdded",value:function(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}},{key:"layerRemoved",value:function(i){var e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}},{key:"_turnOffOtherLayers",value:function(i){this.layers.forEach((function(e){e!==i&&(e.visible=!1)}))}},{key:"_enforceVisibility",value:function(i,e){if((0,c.vw)(this).initialized){var t=this.layers,s=t.find((function(i){return i.visible}));switch(i){case"exclusive":t.length&&!s&&((s=t.getItemAt(0)).visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((function(i){i.visible=e}))}}}},{key:"_visibleWatcher",value:function(i){"inherited"===this.visibilityMode&&this.layers.forEach((function(e){e.visible=i}))}},{key:"_visibilityWatcher",value:function(i,e,t,s){var r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible}}},{key:"_isAnyLayerVisible",value:function(){return this.layers.some((function(i){return i.visible}))}}]),t}((0,p.h)((0,w.M)((0,_.q)((0,k.I)((0,L.Q)((0,m.K)((0,v.R)(f.Z))))))));(0,o._)([(0,h.Cb)()],C.prototype,"fullExtent",void 0),(0,o._)([(0,h.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],C.prototype,"layers",void 0),(0,o._)([(0,d.c)("layers")],C.prototype,"_writeLayers",null),(0,o._)([(0,h.Cb)({type:["GroupLayer"]})],C.prototype,"operationalLayerType",void 0),(0,o._)([(0,h.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],C.prototype,"portalItem",null),(0,o._)([(0,h.Cb)()],C.prototype,"spatialReference",void 0),(0,o._)([(0,h.Cb)({json:{read:!1},readOnly:!0,value:"group"})],C.prototype,"type",void 0),(0,o._)([(0,h.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],C.prototype,"visibilityMode",null);var M=C=(0,o._)([(0,b.j)("esri.layers.GroupLayer")],C)}}]);
//# sourceMappingURL=5069.641ac32c.chunk.js.map