"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[9622],{69622:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var n=r(1413),a=r(15861),i=r(97326),o=r(11752),l=r(61120),y=r(37762),u=r(15671),s=r(43144),p=r(60136),c=r(29388),f=r(87757),d=r(27366),m=(r(59486),r(52639)),v=(r(76626),r(40110)),b=r(10064),h=r(84652),g=r(92026),S=r(97642),C=r(18202),w=r(51370),Z=r(49861),O=(r(25243),r(38511)),_=r(69912),k=r(31201),N=r(62315),x=r(64455),J=r(92975),L=r(94990),M=(r(63780),r(93169),r(68748)),T=r(74184),I=r(6693),R=r(56811),j=r(78983),D=r(75447),E=function(e){(0,p.Z)(r,e);var t=(0,c.Z)(r);function r(e){var n;return(0,u.Z)(this,r),(n=t.call(this,e)).elevationInfo=null,n.graphics=new j.J,n.screenSizePerspectiveEnabled=!0,n.type="graphics",n.internal=!1,n}return(0,s.Z)(r,[{key:"destroy",value:function(){this.removeAll(),this.graphics.destroy()}},{key:"add",value:function(e){return this.graphics.add(e),this}},{key:"addMany",value:function(e){return this.graphics.addMany(e),this}},{key:"removeAll",value:function(){return this.graphics.removeAll(),this}},{key:"remove",value:function(e){this.graphics.remove(e)}},{key:"removeMany",value:function(e){this.graphics.removeMany(e)}},{key:"on",value:function(e,t){return(0,o.Z)((0,l.Z)(r.prototype),"on",this).call(this,e,t)}},{key:"graphicChanged",value:function(e){this.emit("graphic-update",e)}}]),r}((0,I.h)((0,R.M)(T.Z)));(0,d._)([(0,Z.Cb)({type:D.Z})],E.prototype,"elevationInfo",void 0),(0,d._)([(0,Z.Cb)((0,M.z)(j.J,"graphics"))],E.prototype,"graphics",void 0),(0,d._)([(0,Z.Cb)({type:["show","hide"]})],E.prototype,"listMode",void 0),(0,d._)([(0,Z.Cb)()],E.prototype,"screenSizePerspectiveEnabled",void 0),(0,d._)([(0,Z.Cb)({readOnly:!0})],E.prototype,"type",void 0),(0,d._)([(0,Z.Cb)({constructOnly:!0})],E.prototype,"internal",void 0);var P=E=(0,d._)([(0,_.j)("esri.layers.GraphicsLayer")],E),G=r(25820),F=r(6061),W=r(29598),z=r(83040),A=r(61459),B=r(16851),X=r(16072),q=r(58009),U=r(78952),V=r(53866);function H(e){return e.layers.some((function(e){return null!=e.layerDefinition.visibilityField}))}var K=new z.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),Q=new z.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0}),Y=function(e){(0,p.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,u.Z)(this,r),(e=t.apply(this,arguments)).visibilityMode="inherited",e}return(0,s.Z)(r,[{key:"initialize",value:function(){var e,t=this,r=(0,y.Z)(this.graphics);try{for(r.s();!(e=r.n()).done;){e.value.sourceLayer=this.layer}}catch(n){r.e(n)}finally{r.f()}this.graphics.on("after-add",(function(e){e.item.sourceLayer=t.layer})),this.graphics.on("after-remove",(function(e){e.item.sourceLayer=null}))}},{key:"sublayers",get:function(){return this.graphics}}]),r}(P);(0,d._)([(0,Z.Cb)({readOnly:!0})],Y.prototype,"sublayers",null),(0,d._)([(0,Z.Cb)()],Y.prototype,"layer",void 0),(0,d._)([(0,Z.Cb)({readOnly:!0})],Y.prototype,"visibilityMode",void 0),Y=(0,d._)([(0,_.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],Y);var $=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new A.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new B.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new X.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new X.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new q.Z).toJSON()}],ee=function(e){(0,p.Z)(r,e);var t=(0,c.Z)(r);function r(e){var n;return(0,u.Z)(this,r),(n=t.call(this,e)).capabilities={operations:{supportsMapNotesEditing:!0}},n.featureCollections=null,n.featureCollectionJSON=null,n.featureCollectionType="notes",n.legendEnabled=!1,n.minScale=0,n.maxScale=0,n.spatialReference=U.Z.WGS84,n.sublayers=new v.Z($.map((function(e){return new Y({id:e.layerId,title:e.title,layer:(0,i.Z)(n)})}))),n.title="Map Notes",n.type="map-notes",n.visibilityMode="inherited",n}return(0,s.Z)(r,[{key:"readCapabilities",value:function(e,t,r){return{operations:{supportsMapNotesEditing:!H(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}},{key:"readFeatureCollections",value:function(e,t,r){if(!H(t))return null;var n=t.layers.map((function(e){var t=new L.default;return t.read(e,r),t}));return new v.Z({items:n})}},{key:"readLegacyfeatureCollectionJSON",value:function(e,t){return H(t)?(0,h.d9)(t.featureCollection):null}},{key:"readFullExtent",value:function(e,t){if(!t.layers.length||t.layers.every((function(e){return!e.layerDefinition.extent})))return new V.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:U.Z.WGS84});var r=U.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((function(e,t){var r=t.layerDefinition.extent;return r?V.Z.fromJSON(r).union(e):e}),new V.Z({spatialReference:r}))}},{key:"readMinScale",value:function(e,t){var r,n=(0,y.Z)(t.layers);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(null!=a.layerDefinition.minScale)return a.layerDefinition.minScale}}catch(i){n.e(i)}finally{n.f()}return 0}},{key:"readMaxScale",value:function(e,t){var r,n=(0,y.Z)(t.layers);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(null!=a.layerDefinition.maxScale)return a.layerDefinition.maxScale}}catch(i){n.e(i)}finally{n.f()}return 0}},{key:"multipointLayer",get:function(){return this._findSublayer("multipointLayer")}},{key:"pointLayer",get:function(){return this._findSublayer("pointLayer")}},{key:"polygonLayer",get:function(){return this._findSublayer("polygonLayer")}},{key:"polylineLayer",get:function(){return this._findSublayer("polylineLayer")}},{key:"readSpatialReference",value:function(e,t){return t.layers.length?U.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):U.Z.WGS84}},{key:"readSublayers",value:function(e,t,r){var n=this;if(H(t))return null;for(var a=[],i=function(e){var r=t.layers[e],i=r.layerDefinition,o=r.featureSet,y=null!=(l=i.geometryType)?l:o.geometryType,u=$.find((function(e){var t,r,n;return y===e.geometryTypeJSON&&(null==(t=i.drawingInfo)||null==(r=t.renderer)||null==(n=r.symbol)?void 0:n.type)===e.identifyingSymbol.type}));if(u){var s=new Y({id:u.layerId,title:i.name,layer:n,graphics:o.features.map((function(e){var t=e.geometry,r=e.symbol,n=e.attributes,a=e.popupInfo;return m.Z.fromJSON({attributes:n,geometry:t,symbol:r,popupTemplate:a})}))});a.push(s)}},o=0;o<t.layers.length;o++){var l;i(o)}return new v.Z(a)}},{key:"writeSublayers",value:function(e,t,r,n){var a=this,i=this.minScale,o=this.maxScale;if(!(0,g.Wi)(e)){var l=e.some((function(e){return e.graphics.length>0}));if(this.capabilities.operations.supportsMapNotesEditing){var u,s=[],p=this.spatialReference.toJSON(),c=(0,y.Z)(e);try{e:for(c.s();!(u=c.n()).done;){var f,d=u.value,m=(0,y.Z)(d.graphics);try{for(m.s();!(f=m.n()).done;){var v=f.value;if((0,g.pC)(v.geometry)){p=v.geometry.spatialReference.toJSON();break e}}}catch(O){m.e(O)}finally{m.f()}}}catch(O){c.e(O)}finally{c.f()}var h,S=(0,y.Z)($);try{var w=function(){var t=h.value,r=e.find((function(e){return t.layerId===e.id}));a._writeMapNoteSublayer(s,r,t,i,o,p,n)};for(S.s();!(h=S.n()).done;)w()}catch(O){S.e(O)}finally{S.f()}(0,C.RB)("featureCollection.layers",s,t)}else{var Z;l&&(null==n||null==(Z=n.messages)||Z.push(new b.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")))}}}},{key:"textLayer",get:function(){return this._findSublayer("textLayer")}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}},{key:"read",value:function(e,t){"featureCollection"in e&&(e=(0,h.d9)(e),Object.assign(e,e.featureCollection)),(0,o.Z)((0,l.Z)(r.prototype),"read",this).call(this,e,t)}},{key:"beforeSave",value:function(){var e=(0,a.Z)(f.mark((function e(){var t,r,n,a,i,o,l,u,s,p;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,g.Wi)(this.sublayers)){e.next=2;break}return e.abrupt("return");case 2:t=null,r=[],n=(0,y.Z)(this.sublayers),e.prev=5,n.s();case 7:if((a=n.n()).done){e.next=40;break}i=a.value,o=(0,y.Z)(i.graphics),e.prev=10,o.s();case 12:if((l=o.n()).done){e.next=30;break}if(u=l.value,!(0,g.pC)(u.geometry)){e.next=28;break}if(s=u.geometry,!t){e.next=26;break}if(e.t0=(0,J.fS)(s.spatialReference,t),e.t0){e.next=24;break}if(e.t1=(0,N.Up)(s.spatialReference,t)||(0,N.kR)(),e.t1){e.next=23;break}return e.next=23,(0,N.zD)();case 23:u.geometry=(0,N.iV)(s,t);case 24:e.next=27;break;case 26:t=s.spatialReference;case 27:r.push(u);case 28:e.next=12;break;case 30:e.next=35;break;case 32:e.prev=32,e.t2=e.catch(10),o.e(e.t2);case 35:return e.prev=35,o.f(),e.finish(35);case 38:e.next=7;break;case 40:e.next=45;break;case 42:e.prev=42,e.t3=e.catch(5),n.e(e.t3);case 45:return e.prev=45,n.f(),e.finish(45);case 48:return e.next=50,(0,x.aX)(r.map((function(e){return e.geometry})));case 50:p=e.sent,r.forEach((function(e,t){return e.geometry=p[t]}));case 52:case"end":return e.stop()}}),e,this,[[5,42,45,48],[10,32,35,38]])})));return function(){return e.apply(this,arguments)}}()},{key:"_findSublayer",value:function(e){var t,r;return(0,g.Wi)(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((function(t){return t.id===e})))?t:null}},{key:"_writeMapNoteSublayer",value:function(e,t,r,n,a,i,o){var l=[];if(!(0,g.Wi)(t)){var u,s=(0,y.Z)(t.graphics);try{for(s.s();!(u=s.n()).done;){var p=u.value;this._writeMapNote(l,p,r.geometryType,o)}}catch(c){s.e(c)}finally{s.f()}this._normalizeObjectIds(l,K),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,h.d9)(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:n,maxScale:a,objectIdField:"OBJECTID",fields:[K.toJSON(),Q.toJSON()],spatialReference:i},featureSet:{features:l,geometryType:r.geometryTypeJSON}})}}},{key:"_writeMapNote",value:function(e,t,r,a){if(!(0,g.Wi)(t)){var i,o,l=t.geometry,y=t.symbol,u=t.popupTemplate;if(!(0,g.Wi)(l))if(l.type===r)if((0,g.Wi)(y))null==a||null==(o=a.messages)||o.push(new w.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));else{var s={attributes:(0,n.Z)({},t.attributes),geometry:l.toJSON(),symbol:y.toJSON()};(0,g.pC)(u)&&(s.popupInfo=u.toJSON()),e.push(s)}else null==a||null==(i=a.messages)||i.push(new w.Z("map-notes-layer:invalid-geometry-type",'Geometry "'.concat(l.type,'" cannot be saved in "').concat(r,'" layer'),{graphic:t}))}}},{key:"_normalizeObjectIds",value:function(e,t){var r,n=t.name,a=(0,G.S)(n,e)+1,i=new Set,o=(0,y.Z)(e);try{for(o.s();!(r=o.n()).done;){var l=r.value;l.attributes||(l.attributes={});var u=l.attributes;(null==u[n]||i.has(u[n]))&&(u[n]=a++),i.add(u[n])}}catch(s){o.e(s)}finally{o.f()}}}]),r}((0,I.h)((0,R.M)((0,F.q)((0,W.I)((0,S.R)(T.Z))))));(0,d._)([(0,Z.Cb)({readOnly:!0})],ee.prototype,"capabilities",void 0),(0,d._)([(0,O.r)(["portal-item","web-map"],"capabilities",["layers"])],ee.prototype,"readCapabilities",null),(0,d._)([(0,Z.Cb)({readOnly:!0})],ee.prototype,"featureCollections",void 0),(0,d._)([(0,O.r)(["web-map","portal-item"],"featureCollections",["layers"])],ee.prototype,"readFeatureCollections",null),(0,d._)([(0,Z.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],ee.prototype,"featureCollectionJSON",void 0),(0,d._)([(0,O.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],ee.prototype,"readLegacyfeatureCollectionJSON",null),(0,d._)([(0,Z.Cb)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],ee.prototype,"featureCollectionType",void 0),(0,d._)([(0,Z.Cb)({json:{write:!1}})],ee.prototype,"fullExtent",void 0),(0,d._)([(0,O.r)(["web-map","portal-item"],"fullExtent",["layers"])],ee.prototype,"readFullExtent",null),(0,d._)([(0,Z.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy:function(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],ee.prototype,"legendEnabled",void 0),(0,d._)([(0,Z.Cb)({type:["show","hide"]})],ee.prototype,"listMode",void 0),(0,d._)([(0,Z.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],ee.prototype,"minScale",void 0),(0,d._)([(0,O.r)(["web-map","portal-item"],"minScale",["layers"])],ee.prototype,"readMinScale",null),(0,d._)([(0,Z.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],ee.prototype,"maxScale",void 0),(0,d._)([(0,O.r)(["web-map","portal-item"],"maxScale",["layers"])],ee.prototype,"readMaxScale",null),(0,d._)([(0,Z.Cb)({readOnly:!0})],ee.prototype,"multipointLayer",null),(0,d._)([(0,Z.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,d._)([(0,Z.Cb)({readOnly:!0})],ee.prototype,"pointLayer",null),(0,d._)([(0,Z.Cb)({readOnly:!0})],ee.prototype,"polygonLayer",null),(0,d._)([(0,Z.Cb)({readOnly:!0})],ee.prototype,"polylineLayer",null),(0,d._)([(0,Z.Cb)({type:U.Z})],ee.prototype,"spatialReference",void 0),(0,d._)([(0,O.r)(["web-map","portal-item"],"spatialReference",["layers"])],ee.prototype,"readSpatialReference",null),(0,d._)([(0,Z.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],ee.prototype,"sublayers",void 0),(0,d._)([(0,O.r)("web-map","sublayers",["layers"])],ee.prototype,"readSublayers",null),(0,d._)([(0,k.c)("web-map","sublayers")],ee.prototype,"writeSublayers",null),(0,d._)([(0,Z.Cb)({readOnly:!0})],ee.prototype,"textLayer",null),(0,d._)([(0,Z.Cb)()],ee.prototype,"title",void 0),(0,d._)([(0,Z.Cb)({readOnly:!0,json:{read:!1}})],ee.prototype,"type",void 0);var te=ee=(0,d._)([(0,_.j)("esri.layers.MapNotesLayer")],ee)},25820:function(e,t,r){r.d(t,{S:function(){return i},X:function(){return a}});var n=r(37762),a=1;function i(e,t){var r,a=0,i=(0,n.Z)(t);try{for(i.s();!(r=i.n()).done;){var o,l=null==(o=r.value.attributes)?void 0:o[e];"number"==typeof l&&isFinite(l)&&(a=Math.max(a,l))}}catch(y){i.e(y)}finally{i.f()}return a}}}]);
//# sourceMappingURL=9622.f61d039a.chunk.js.map