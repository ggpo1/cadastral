"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[4650],{94650:function(e,r,t){t.r(r),t.d(r,{fromUrl:function(){return p}});var n=t(1413),a=t(15861),u=t(87757),s=t(76200),l=(t(10064),t(92026)),c=t(35995),o=t(25899),i=t(19610);function p(e){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(u.mark((function e(r){var a,s,l,c,o;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null==(a=r.properties)?void 0:a.customParameters,e.next=3,b(r.url,s);case 3:if(l=e.sent,c=(0,n.Z)((0,n.Z)({},r.properties),{},{url:r.url}),l.sublayerIds){e.next=7;break}return e.abrupt("return",(null!=l.layerOrTableId&&(c.layerId=l.layerOrTableId,c.sourceJSON=l.sourceJSON),new l.Constructor(c)));case 7:return e.next=10,t.e(5069).then(t.bind(t,65069));case 10:return e.t0=e.sent.default,e.t1={title:l.parsedUrl.title},o=new e.t0(e.t1),e.abrupt("return",(d(o,l,c),o));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,r){return e?e.find((function(e){return e.id===r})):null}function d(e,r,t){function a(e,a){var u=(0,n.Z)((0,n.Z)({},t),{},{layerId:e,sublayerTitleMode:"service-name"});return(0,l.pC)(a)&&(u.sourceJSON=a),new r.Constructor(u)}r.sublayerIds.forEach((function(t){var n=a(t,f(r.sublayerInfos,t));e.add(n)})),r.tableIds.forEach((function(t){var n=a(t,f(r.tableInfos,t));e.tables.add(n)}))}function b(e,r){return v.apply(this,arguments)}function v(){return v=(0,a.Z)(u.mark((function e(r,t){var n,a,s,c,i,p,y,f,d,b,v,I,S;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,o.Qc)(r),e.t0=(0,l.Wi)(n),!e.t0){e.next=6;break}return e.next=5,h(r,t);case 5:n=e.sent;case 6:if(!(0,l.Wi)(n)){e.next=8;break}throw new v("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:s=(a=n).serverType,c=a.sublayer,p={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t1=s,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?15:"SceneServer"===e.t1?17:19;break;case 13:return i=null!=c?"FeatureLayer":C(r,t).then((function(e){return e?"TileLayer":"MapImageLayer"})),e.abrupt("break",20);case 15:return i=P(r,t).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"})),e.abrupt("break",20);case 17:return i=P(n.url.path,t).then((function(e){if(e){if("Voxel"===(null==e?void 0:e.layerType))return"VoxelLayer";if(null!=e&&e.layers&&Array.isArray(e.layers)&&e.layers.length>0){var r,t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},n=null==(r=e.layers[0])?void 0:r.layerType;if(null!=t[n])return t[n]}}return"SceneLayer"})),e.abrupt("break",20);case 19:i=p[s];case 20:return y={FeatureLayer:!0,SceneLayer:!0},d={parsedUrl:n,Constructor:null,layerOrTableId:(f="FeatureServer"===s)?c:null,sublayerIds:null,tableIds:null},e.next=25,i;case 25:if(b=e.sent,!y[b]||null!=c){e.next=32;break}return e.next=29,x(r,s,t);case 29:v=e.sent,f&&(d.sublayerInfos=v.layerInfos,d.tableInfos=v.tableInfos),1!==v.layerIds.length+v.tableIds.length?(d.sublayerIds=v.layerIds,d.tableIds=v.tableIds):f&&(d.layerOrTableId=null!=(I=v.layerIds[0])?I:v.tableIds[0],d.sourceJSON=null!=(S=v.layerInfos[0])?S:v.tableInfos[0]);case 32:return e.next=34,L(b);case 34:return d.Constructor=e.sent,e.abrupt("return",d);case 36:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function h(e,r){return I.apply(this,arguments)}function I(){return I=(0,a.Z)(u.mark((function e(r,t){var n,a,s,i,p,y;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(r,t);case 2:if(a=e.sent,s=null,i=null,"Feature Layer"===(p=a.type)||"Table"===p?(s="FeatureServer",i=a.id):"indexedVector"===p?s="VectorTileServer":a.hasOwnProperty("mapName")?s="MapServer":a.hasOwnProperty("bandCount")&&a.hasOwnProperty("pixelSizeX")?s="ImageServer":a.hasOwnProperty("maxRecordCount")&&a.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":a.hasOwnProperty("streamUrls")?s="StreamServer":S(a)?(s="SceneServer",i=a.id):a.hasOwnProperty("layers")&&S(null==(n=a.layers)?void 0:n[0])&&(s="SceneServer"),s){e.next=7;break}return e.abrupt("return",null);case 7:return y=null!=i?(0,o.DR)(r):null,e.abrupt("return",{title:(0,l.pC)(y)&&a.name||(0,c.vt)(r),serverType:s,sublayer:i,url:{path:(0,l.pC)(y)?y.serviceUrl:(0,c.mN)(r).path}});case 9:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function S(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}function x(e,r,t){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(u.mark((function e(r,t,n){var a,s,l,c,o,i,p;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=!1,"FeatureServer"!==t){e.next=8;break}return e.next=4,k(r,n);case 4:o=e.sent,c=!!o.layersJSON,l=o.layersJSON||o.serviceJSON,e.next=11;break;case 8:return e.next=10,P(r,n);case 10:l=e.sent;case 11:return i=null==(a=l)?void 0:a.layers,p=null==(s=l)?void 0:s.tables,e.abrupt("return",{layerIds:(null==i?void 0:i.map((function(e){return e.id})).reverse())||[],tableIds:(null==p?void 0:p.map((function(e){return e.id})).reverse())||[],layerInfos:c?i:[],tableInfos:c?p:[]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return!e.type||"Feature Layer"===e.type}function k(e,r){return O.apply(this,arguments)}function O(){return(O=(0,a.Z)(u.mark((function e(r,t){var n,a,s,l,c;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(r,t);case 2:if((s=(s=e.sent)||{}).layers=(null==(n=s.layers)?void 0:n.filter(m))||[],l={serviceJSON:s},!(s.currentVersion<10.5)){e.next=7;break}return e.abrupt("return",l);case 7:return e.next=9,P(r+"/layers",t);case 9:return c=e.sent,e.abrupt("return",(l.layersJSON={layers:(null==c||null==(a=c.layers)?void 0:a.filter(m))||[],tables:(null==c?void 0:c.tables)||[]},l));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return T.apply(this,arguments)}function T(){return(T=(0,a.Z)(u.mark((function e(r){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.T[r])());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,r){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(u.mark((function e(r,t){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(r,t);case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,r){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(u.mark((function e(r,t){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.default)(r,{responseType:"json",query:(0,n.Z)({f:"json"},t)});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=4650.c11e591e.chunk.js.map