"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[519,3139,3388],{20519:function(e,r,t){t.r(r),t.d(r,{populateOperationalLayers:function(){return b}});var a=t(1413),n=t(37762),u=t(15861),i=t(87757),c=t(40110),s=(t(93169),t(66978)),l=t(19610),o=t(98995),y=t(73117);function p(e,r){return d(e,r,"notes","Map Notes")}function f(e,r){return d(e,r,"route","Route Layer")}function d(e,r,t,a){return L.apply(this,arguments)}function L(){return L=(0,u.Z)(i.mark((function e(r,t,a,n){var u;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.layerType&&"ArcGISFeatureLayer"===r.layerType){e.next=2;break}return e.abrupt("return",!1);case 2:if(!r.url){e.next=4;break}return e.abrupt("return",!1);case 4:if(!r.featureCollectionType||r.featureCollectionType!==a){e.next=6;break}return e.abrupt("return",!0);case 6:if(!r.itemId){e.next=11;break}return u=new o.default({id:r.itemId,portal:t}),e.next=10,u.load();case 10:return e.abrupt("return","Feature Collection"===u.type&&(0,y._$)(u,n));case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}var m=t(43139),v=t(21371);function b(e,r,t){return S.apply(this,arguments)}function S(){return(S=(0,u.Z)(i.mark((function e(r,t,a){var u,c,l,o,y,p,f,d,L;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:u=[],c=(0,n.Z)(t);try{for(c.s();!(l=c.n()).done;)o=l.value,y=k(o,a),"GroupLayer"===o.layerType?u.push(O(y,o,a)):u.push(y)}catch(i){c.e(i)}finally{c.f()}return e.next=7,(0,s.as)(u);case 7:p=e.sent,f=(0,n.Z)(p);try{for(f.s();!(d=f.n()).done;)!(L=d.value).value||a.filter&&!a.filter(L.value)||r.add(L.value)}catch(i){f.e(i)}finally{f.f()}case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"UnsupportedLayer"},I={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},T={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},x={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISFeatureLayer:"FeatureLayer"},w={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function k(e,r){return M.apply(this,arguments)}function M(){return(M=(0,u.Z)(i.mark((function e(r,t){return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=G,e.next=3,F(r,t);case 3:return e.t1=e.sent,e.t2=r,e.t3=t,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,r,t){return A.apply(this,arguments)}function A(){return(A=(0,u.Z)(i.mark((function e(r,t,a){var n;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=new r).read(t,a.context),e.t0="group"===n.type&&C(t),!e.t0){e.next=6;break}return e.next=6,V(n,t,a.context);case 6:return e.next=8,(0,v.y)(n,a.context);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,r){return N.apply(this,arguments)}function N(){return N=(0,u.Z)(i.mark((function e(r,t){var a,n,u,c,s,y,d,L;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.context,n=W(a),!(u=r.layerType||r.type)&&t&&t.defaultLayerType&&(u=t.defaultLayerType),c=n[u],s=c?l.T[c]:l.T.UnknownLayer,y=a&&a.portal,!Z(r)){e.next=20;break}if(!r.itemId){e.next=18;break}return d=new o.default({id:r.itemId,portal:y}),e.next=11,d.load();case 11:return e.next=13,(0,m.selectLayerClassPath)(d);case 13:if(e.t0=e.sent.className,e.t0){e.next=16;break}e.t0="UnknownLayer";case 16:L=e.t0,s=l.T[L];case 18:e.next=37;break;case 20:if("ArcGISFeatureLayer"!==u){e.next=36;break}return e.next=23,p(r,y);case 23:if(!e.sent){e.next=27;break}s=l.T.MapNotesLayer,e.next=34;break;case 27:return e.next=29,f(r,y);case 29:if(!e.sent){e.next=33;break}s=l.T.RouteLayer,e.next=34;break;case 33:C(r)&&(s=l.T.GroupLayer);case 34:e.next=37;break;case 36:r.wmtsInfo&&r.wmtsInfo.url&&r.wmtsInfo.layerIdentifier?s=l.T.WMTSLayer:"WFS"===u&&"2.0.0"!==r.wfsInfo.version&&(s=l.T.UnsupportedLayer);case 37:return e.abrupt("return",s());case 38:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function C(e){if("ArcGISFeatureLayer"!==e.layerType||Z(e))return!1;var r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function Z(e){return"Feature Collection"===e.type}function W(e){var r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=T;break;case"ground":r=I;break;default:r=h}else switch(e.layerContainerType){case"basemap":r=w;break;case"tables":r=g;break;default:r=x}return r}function O(e,r,t){return D.apply(this,arguments)}function D(){return(D=(0,u.Z)(i.mark((function e(r,t,a){var n,u,s;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new c.Z,u=b(n,Array.isArray(t.layers)?t.layers:[],a),e.next=4,r;case 4:return s=e.sent,e.next=7,u;case 7:if("group"!==s.type){e.next=9;break}return e.abrupt("return",(s.layers.addMany(n),s));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,r,t){return B.apply(this,arguments)}function B(){return B=(0,u.Z)(i.mark((function e(r,t,n){var u,c,s,o,y;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=l.T.FeatureLayer,e.next=3,u();case 3:c=e.sent,s=t.featureCollection,o=s.showLegend,y=s.layers.map((function(e,u){var i,s,l=new c;l.read(e,n);var y=(0,a.Z)((0,a.Z)({},n),{},{ignoreDefaults:!0});return l.read({id:"".concat(r.id,"-sublayer-").concat(u),visibility:null==(i=null==(s=t.visibleLayers)?void 0:s.includes(u))||i},y),null!=o&&l.read({showLegend:o},y),l})),r.layers.addMany(y);case 8:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return x},getNumLayersAndTables:function(){return w},load:function(){return y},preprocessFSItemData:function(){return I}});var a=t(15861),n=t(87757),u=t(10064),i=t(19610),c=t(70032),s=t(32698),l=t(21371),o=t(41226);function y(e,r){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(n.mark((function e(r,t){var a;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=r.instance.portalItem)||!a.id){e.next=8;break}return e.next=4,a.load(t);case 4:f(r),e.t0=d(r,t),e.next=9;break;case 8:e.t0=Promise.resolve();case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new u.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function d(e,r){return L.apply(this,arguments)}function L(){return L=(0,a.Z)(n.mark((function e(r,t){var a,u,i,c,o,y;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.instance,u=a.portalItem,i=u.url,c=u.title,o=(0,s.m)(u),"group"!==a.type){e.next=3;break}return e.abrupt("return",(a.read({title:c},o),m(a,r)));case 3:return i&&a.read({url:i},o),e.next=6,h(r,t);case 6:return y=e.sent,e.abrupt("return",(y&&a.read(y,o),a.resourceReferences={portalItem:u,paths:o.readResourcePaths},a.read({title:c},o),(0,l.y)(a,o)));case 8:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function m(e,r){var t,c,s=e.portalItem.type;switch(s){case"Feature Service":case"Feature Collection":t=i.T.FeatureLayer;break;case"Stream Service":t=i.T.StreamLayer;break;case"Scene Service":t=i.T.SceneLayer;break;default:throw new u.Z("portal:unsupported-item-type-as-group","The item type '".concat(s,"' is not supported as a 'IGroupLayer'"))}return t().then((function(e){return c=e,h(r)})).then(function(){var r=(0,a.Z)(n.mark((function r(t){return n.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==s){r.next=7;break}return r.next=3,I(t,e.portalItem.url);case 3:t=r.sent,r.t0=b(e,c,t),r.next=8;break;case 7:r.t0=w(t)>0?b(e,c,t):v(e,c);case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function v(e,r){return e.portalItem.url?(0,o.b)(e.portalItem.url).then((function(t){var a,n;function u(e){return{id:e.id,name:e.name}}t&&b(e,r,{layers:null==(a=t.layers)?void 0:a.map(u),tables:null==(n=t.tables)?void 0:n.map(u)})})):Promise.resolve()}function b(e,r,t){var a=t.layers||[],n=t.tables||[];"Feature Collection"===e.portalItem.type&&(a.forEach((function(e){var r;"Table"===(null==e||null==(r=e.layerDefinition)?void 0:r.type)&&n.push(e)})),a=a.filter((function(e){var r;return"Table"!==(null==e||null==(r=e.layerDefinition)?void 0:r.type)}))),a.reverse().forEach((function(a){var n=S(e,r,t,a);e.add(n)})),n.reverse().forEach((function(a){var n=S(e,r,t,a);e.tables.add(n)}))}function S(e,r,t,a){var n=new r({portalItem:e.portalItem.clone(),layerId:a.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||c.Z.getDefault()};n.read(a,u);var i=t.showLegend;null!=i&&n.read({showLegend:i},u)}return n}function h(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then(function(){var e=(0,a.Z)(n.mark((function e(r){var a,u;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k(t)){e.next=3;break}return u=!0,e.abrupt("return",(r&&w(r)>0&&(null==t.layerId&&(t.layerId=x(r)),(a=g(r,t.layerId))&&(1===w(r)&&(u=!1),null!=r.showLegend&&(a.showLegend=r.showLegend))),u&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),a));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}function I(e,r){return T.apply(this,arguments)}function T(){return(T=(0,a.Z)(n.mark((function e(r,t){var a,u,i;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null==(a=r)?void 0:a.layers)&&null!=(null==(u=r)?void 0:u.tables)){e.next=5;break}return e.next=3,(0,o.b)(t);case 3:i=e.sent,(r=r||{}).layers=r.layers||(null==i?void 0:i.layers),r.tables=r.tables||(null==i?void 0:i.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function g(e,r){var t=e.layers;if(t)for(var a=0;a<t.length;a++)if(t[a].id===r)return t[a];var n=e.tables;if(n)for(var u=0;u<n.length;u++)if(n[u].id===r)return n[u];return null}function w(e){var r,t,a,n;return(null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(a=null==e||null==(n=e.tables)?void 0:n.length)?a:0)}function k(e){return"stream"!==e.type&&"layerId"in e}},73117:function(e,r,t){function a(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}t.d(r,{_$:function(){return a}})},43139:function(e,r,t){t.r(r),t.d(r,{fromItem:function(){return p},selectLayerClassPath:function(){return f}});var a=t(15861),n=t(1413),u=t(87757),i=t(10064),c=t(19610),s=t(98995),l=t(33388),o=t(73117),y=t(41226);function p(e){return!e.portalItem||e.portalItem instanceof s.default||(e=(0,n.Z)((0,n.Z)({},e),{},{portalItem:new s.default(e.portalItem)})),function(e){return e.load().then(f).then(d)}(e.portalItem).then((function(r){var t=(0,n.Z)({portalItem:e.portalItem},r.properties),a=r.constructor;return Promise.resolve(new a(t))}))}function f(e){switch(e.type){case"Map Service":return function(e){return(0,y.b)(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}));case"Feature Service":return function(e){return v(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return L.apply(this,arguments)}(e);case"Scene Service":return function(e){return v(e).then((function(r){if("object"==typeof r){var t,a={};if(null!=r.id?(a.layerId=r.id,t="".concat(e.url,"/layers/").concat(r.id)):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var n={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},u=0,i=Object.keys(n);u<i.length;u++){var c=i[u];if(-1!==e.typeKeywords.indexOf(c))return{className:n[c]}}return(0,y.b)(t).then((function(e){var r="SceneLayer",t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:a}}))}return!1===r?(0,y.b)(e.url).then((function(e){return"Voxel"===(null==e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"}})):{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return m.apply(this,arguments)}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new i.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,c.T[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function L(){return(L=(0,a.Z)(u.mark((function e(r){var t;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!(0,o._$)(r,"Map Notes")){e.next=4;break}return e.abrupt("return",{className:"MapNotesLayer"});case 4:if(!(0,o._$)(r,"Route Layer")){e.next=6;break}return e.abrupt("return",{className:"RouteLayer"});case 6:return e.next=8,r.fetchData();case 8:return t=e.sent,e.abrupt("return",1===(0,l.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=(0,a.Z)(u.mark((function e(r){var t,a,n,i,c,s;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(i=null!=(t=null==(a=r.typeKeywords)?void 0:a.map((function(e){return e.toLowerCase()})))?t:[],!(i.indexOf("elevation 3d layer")>-1)){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!(i.indexOf("tiled imagery")>-1)){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(c=e.sent,"ArcGISTiledImageServiceLayer"!==(s=null==c?void 0:c.layerType)){e.next=13;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 13:if("ArcGISImageServiceLayer"!==s){e.next=15;break}return e.abrupt("return",{className:"ImageryLayer"});case 15:return e.next=17,(0,y.b)(r.url);case 17:if(e.t0=n=e.sent.cacheType,null!=e.t0){e.next=22;break}e.t1=void 0,e.next=23;break;case 22:e.t1=n.toLowerCase();case 23:if(e.t2=e.t1,"map"!==e.t2){e.next=28;break}e.t3={className:"ImageryTileLayer"},e.next=29;break;case 28:e.t3={className:"ImageryLayer"};case 29:return e.abrupt("return",e.t3);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((function(){return e.fetchData()})).then(function(){var r=(0,a.Z)(u.mark((function r(t){return u.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==e.type){r.next=6;break}return r.t0=b,r.next=4,(0,l.preprocessFSItemData)(t,e.url);case 4:return r.t1=t=r.sent,r.abrupt("return",(0,r.t0)(r.t1));case 6:return r.abrupt("return",(0,l.getNumLayersAndTables)(t)>0?b(t):(0,y.b)(e.url).then(b));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function b(e){return 1===(0,l.getNumLayersAndTables)(e)&&{id:(0,l.getFirstLayerOrTableId)(e)}}},41226:function(e,r,t){t.d(r,{b:function(){return i}});var a=t(15861),n=t(87757),u=t(76200);function i(e){return c.apply(this,arguments)}function c(){return c=(0,a.Z)(n.mark((function e(r){var t,a;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)(r,{responseType:"json",query:{f:"json"}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}}}]);
//# sourceMappingURL=519.8f91db9a.chunk.js.map