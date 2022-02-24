"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[8566],{38566:function(e,t,r){r.r(t),r.d(t,{default:function(){return se}});var n=r(15861),i=r(37762),o=r(15671),s=r(43144),a=r(97326),u=r(60136),p=r(29388),l=r(87757),c=r(27366),d=(r(59486),r(44055)),y=(r(94931),r(78451),r(34213),r(45130),r(49018),r(34999),r(79850),r(9014),r(40464)),f=r(92026),v=r(97642),m=r(18202),h=r(35995),g=r(49861),b=(r(63780),r(93169)),w=r(25243),C=r(69912),x=r(31201),F=r(27823),_=r(74184),k=r(29439),O=r(1413),S=r(10064),Z=r(41691),I=r(54472),R=r(66978),q=r(31009),P=r(63543),T=r(12622),j=r(49818),U=r(53866),E=function(e){(0,u.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).capabilities=(0,P.MS)(!1,!1),e.type="wfs",e.refresh=(0,R.Ds)(function(){var t=(0,n.Z)(l.mark((function t(r){var n,i;return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:return t.next=4,e._connection.invoke("refresh",r);case 4:return n=t.sent,i=n.extent,t.abrupt("return",(e.sourceJSON.extent=i,{dataChanged:!0,updates:{extent:e.sourceJSON.extent}}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return(0,s.Z)(r,[{key:"load",value:function(e){var t,r=null!=(t=(0,f.pC)(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null==(e=this._connection)||e.close(),this._connection=null}},{key:"openPorts",value:function(){var e=(0,n.Z)(l.mark((function e(){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this._connection.openPorts());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,n.Z)(l.mark((function e(t){var r,n,i=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryFeatures",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",j.default.fromJSON(n));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=(0,n.Z)(l.mark((function e(t){var r,n=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatures",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,n.Z)(l.mark((function e(t){var r,n=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatureCount",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,n.Z)(l.mark((function e(t){var r,n=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryObjectIds",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,n.Z)(l.mark((function e(t){var r,n,i=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryExtent",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",{count:n.count,extent:U.Z.fromJSON(n.extent)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,n.Z)(l.mark((function e(t){var r,n=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("querySnapping",t,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createLoadOptions",value:function(){var e=(0,n.Z)(l.mark((function e(t){var r,n,i,o,s,a,u,p,c,d,y,v,m,h=this;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer,n=r.url,i=r.customParameters,o=r.name,s=r.namespaceUri,a=r.spatialReference,u=r.fields,p=r.geometryType,c=r.swapXY,n){e.next=3;break}throw new S.Z("wfs-layer:missing-url","WFSLayer must be created with a url");case 3:if(e.t0=this.wfsCapabilities,e.t0){e.next=8;break}return e.next=7,(0,T.FU)(n,(0,O.Z)({customParameters:i},t));case 7:this.wfsCapabilities=e.sent;case 8:if(d=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((function(e){return null==h.layer[e]})),!d){e.next=15;break}return e.next=12,(0,T.be)(this.wfsCapabilities,o,s,{spatialReference:a,customParameters:i,signal:null==t?void 0:t.signal});case 12:e.t1=e.sent,e.next=16;break;case 15:e.t1=(0,O.Z)((0,O.Z)({},(0,T.eB)(u)),{},{geometryType:p,name:o,namespaceUri:s,spatialReference:a,swapXY:c});case 16:return y=e.t1,v=(0,f.Wg)((0,T.ft)(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri)),m=F.Mk.toJSON(y.geometryType),e.abrupt("return",{customParameters:i,featureType:v,fields:y.fields.map((function(e){return e.toJSON()})),geometryField:y.geometryField,geometryType:m,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:y.spatialReference.toJSON(),swapXY:y.swapXY});case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_startWorker",value:function(){var e=(0,n.Z)(l.mark((function e(t){var r,n,i,o,s,a,u,p,c;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,R.as)([this._createLoadOptions(t),(0,q.bA)("WFSSourceWorker",(0,O.Z)((0,O.Z)({},t),{},{strategy:(0,b.Z)("feature-layers-workers")?"dedicated":"local"}))]);case 2:if(r=e.sent,n=(0,k.Z)(r,2),i=n[0],o=n[1],s=i.error||o.error||null,a=o.value||null,!s){e.next=10;break}throw a&&a.close(),s;case 10:return u=i.value,this._connection=o.value,e.next=14,this._connection.invoke("load",u,t);case 14:p=e.sent,c=p.extent,this.sourceJSON={extent:c,fields:u.fields,geometryType:u.geometryType,objectIdField:u.objectIdField,geometryField:u.geometryField,drawingInfo:(0,P.bU)(u.geometryType),name:u.featureType.title,wfsInfo:{name:u.featureType.name,featureUrl:u.getFeatureUrl,maxFeatures:3e3,swapXY:u.swapXY,supportedSpatialReferences:u.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:u.featureType.namespaceUri}};case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}((0,Z.p)(I.Z));(0,c._)([(0,g.Cb)()],E.prototype,"capabilities",void 0),(0,c._)([(0,g.Cb)({constructOnly:!0})],E.prototype,"layer",void 0),(0,c._)([(0,g.Cb)()],E.prototype,"sourceJSON",void 0),(0,c._)([(0,g.Cb)()],E.prototype,"type",void 0),(0,c._)([(0,g.Cb)()],E.prototype,"wfsCapabilities",void 0);var N,D=E=(0,c._)([(0,C.j)("esri.layers.graphics.sources.WFSSource")],E),J=r(6693),Q=r(46671),M=r(7632),W=r(6061),Y=r(94207),X=r(29598),B=r(71684),G=r(56811),A=r(99063),L=r(45948),z=r(68118),V=r(83040),H=r(25610),K=r(80031),$=r(77748),ee=r(85116),te=r(21149),re=r(81085),ne=r(78952),ie=(0,H.v)(),oe=N=function(e){(0,u.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).capabilities=null,n.copyright=null,n.customParameters=null,n.definitionExpression=null,n.displayField=null,n.elevationInfo=null,n.featureReduction=null,n.featureUrl=void 0,n.fields=null,n.fieldsIndex=null,n.fullExtent=null,n.geometryType=null,n.labelsVisible=!0,n.labelingInfo=null,n.legendEnabled=!0,n.objectIdField=null,n.operationalLayerType="WFS",n.maxFeatures=3e3,n.mode=0,n.name=null,n.namespaceUri=null,n.outFields=null,n.popupEnabled=!0,n.popupTemplate=null,n.screenSizePerspectiveEnabled=!0,n.source=new D({layer:(0,a.Z)(n)}),n.spatialReference=ne.Z.WGS84,n.spatialReferences=[4326],n.swapXY=void 0,n.title="WFS",n.type="wfs",n.url=null,n.version=void 0,n}return(0,s.Z)(r,[{key:"destroy",value:function(){var e;null==(e=this.source)||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((function(){return t.source.load(e)})).then((function(){t.read(t.source.sourceJSON,{origin:"service",url:t.parsedUrl}),t.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,K.YN)(t.renderer,t.fieldsIndex),(0,K.UF)(t.timeInfo,t.fieldsIndex)}))),Promise.resolve(this)}},{key:"createQueryVersion",get:function(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"writeFields",value:function(e,t,r){var n=e.filter((function(e){return e.name!==T.M8}));this.geometryField&&n.unshift(new V.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,m.RB)(r,n.map((function(e){return e.toJSON()})),t)}},{key:"parsedUrl",get:function(){return this.url?(0,h.mN)(this.url):null}},{key:"renderer",set:function(e){(0,K.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"createPopupTemplate",value:function(e){return(0,re.eZ)(this,e)}},{key:"createQuery",value:function(){var e=new te.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";var t=this.timeOffset,r=this.timeExtent;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}},{key:"getFieldDomain",value:function(e,t){var r;return null==(r=this.getField(e))?void 0:r.domain}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(te.Z.from(e)||r.createQuery(),t)})).then((function(e){if(null!=e&&e.features){var t,n=(0,i.Z)(e.features);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.layer=o.sourceLayer=r}}catch(s){n.e(s)}finally{n.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(te.Z.from(e)||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(te.Z.from(e)||r.createQuery(),t)}))}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(te.Z.from(e)||r.createQuery(),t)}))}},{key:"hasDataChanged",value:function(){var e=(0,n.Z)(l.mark((function e(){var t,r,n;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.source.refresh(this.customParameters);case 3:return t=e.sent,r=t.dataChanged,n=t.updates,e.abrupt("return",((0,f.pC)(n)&&this.read(n,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),r));case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()}],[{key:"fromWFSLayerInfo",value:function(e){var t=e.customParameters,r=e.fields,n=e.geometryField,i=e.geometryType,o=e.name,s=e.namespaceUri,a=e.objectIdField,u=e.spatialReference,p=e.swapXY,l=e.url,c=e.wfsCapabilities;return new N({customParameters:t,fields:r,geometryField:n,geometryType:i,name:o,namespaceUri:s,objectIdField:a,spatialReference:u,swapXY:p,url:l,wfsCapabilities:c})}}]),r}((0,Y.c)((0,Q.N)((0,M.b)((0,J.h)((0,A.n)((0,B.Q)((0,G.M)((0,W.q)((0,X.I)((0,v.R)(_.Z)))))))))));(0,c._)([(0,g.Cb)({readOnly:!0,aliasOf:"source.capabilities"})],oe.prototype,"capabilities",void 0),(0,c._)([(0,g.Cb)({type:String})],oe.prototype,"copyright",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],oe.prototype,"createQueryVersion",null),(0,c._)([(0,g.Cb)({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],oe.prototype,"customParameters",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],oe.prototype,"defaultPopupTemplate",null),(0,c._)([(0,g.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],oe.prototype,"definitionExpression",void 0),(0,c._)([(0,g.Cb)({type:String})],oe.prototype,"displayField",void 0),(0,c._)([(0,g.Cb)(L.PV)],oe.prototype,"elevationInfo",void 0),(0,c._)([(0,g.Cb)(z.d)],oe.prototype,"featureReduction",void 0),(0,c._)([(0,g.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],oe.prototype,"featureUrl",void 0),(0,c._)([(0,g.Cb)({type:[V.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],oe.prototype,"fields",void 0),(0,c._)([(0,x.c)("fields")],oe.prototype,"writeFields",null),(0,c._)([(0,g.Cb)(ie.fieldsIndex)],oe.prototype,"fieldsIndex",void 0),(0,c._)([(0,g.Cb)({type:U.Z,json:{name:"extent"}})],oe.prototype,"fullExtent",void 0),(0,c._)([(0,g.Cb)()],oe.prototype,"geometryField",void 0),(0,c._)([(0,g.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:F.Mk.read},write:{target:"layerDefinition.geometryType",writer:F.Mk.write,ignoreOrigin:!0},origins:{service:{read:F.Mk.read}}}})],oe.prototype,"geometryType",void 0),(0,c._)([(0,g.Cb)({type:String})],oe.prototype,"id",void 0),(0,c._)([(0,g.Cb)(L.iR)],oe.prototype,"labelsVisible",void 0),(0,c._)([(0,g.Cb)({type:[$.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ee.r},write:!0}})],oe.prototype,"labelingInfo",void 0),(0,c._)([(0,g.Cb)(L.rn)],oe.prototype,"legendEnabled",void 0),(0,c._)([(0,g.Cb)({type:["show","hide"]})],oe.prototype,"listMode",void 0),(0,c._)([(0,g.Cb)({type:String})],oe.prototype,"objectIdField",void 0),(0,c._)([(0,g.Cb)({type:["WFS"]})],oe.prototype,"operationalLayerType",void 0),(0,c._)([(0,g.Cb)({type:w.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],oe.prototype,"maxFeatures",void 0),(0,c._)([(0,g.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],oe.prototype,"mode",void 0),(0,c._)([(0,g.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],oe.prototype,"name",void 0),(0,c._)([(0,g.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],oe.prototype,"namespaceUri",void 0),(0,c._)([(0,g.Cb)(L.bT)],oe.prototype,"opacity",void 0),(0,c._)([(0,g.Cb)(ie.outFields)],oe.prototype,"outFields",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],oe.prototype,"parsedUrl",null),(0,c._)([(0,g.Cb)(L.C_)],oe.prototype,"popupEnabled",void 0),(0,c._)([(0,g.Cb)({type:d.Z,json:{name:"popupInfo",write:!0}})],oe.prototype,"popupTemplate",void 0),(0,c._)([(0,g.Cb)({types:y.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:y.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],oe.prototype,"renderer",null),(0,c._)([(0,g.Cb)(L.YI)],oe.prototype,"screenSizePerspectiveEnabled",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],oe.prototype,"source",void 0),(0,c._)([(0,g.Cb)({type:ne.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],oe.prototype,"spatialReference",void 0),(0,c._)([(0,g.Cb)({readOnly:!0,type:[w.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],oe.prototype,"spatialReferences",void 0),(0,c._)([(0,g.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],oe.prototype,"swapXY",void 0),(0,c._)([(0,g.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],oe.prototype,"title",void 0),(0,c._)([(0,g.Cb)({json:{read:!1},readOnly:!0})],oe.prototype,"type",void 0),(0,c._)([(0,g.Cb)(L.HQ)],oe.prototype,"url",void 0),(0,c._)([(0,g.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],oe.prototype,"version",void 0),(0,c._)([(0,g.Cb)({aliasOf:"source.wfsCapabilities"})],oe.prototype,"wfsCapabilities",void 0);var se=oe=N=(0,c._)([(0,C.j)("esri.layers.WFSLayer")],oe)},60480:function(e,t,r){r.d(t,{g:function(){return n}});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:function(e,t,r){r.d(t,{MS:function(){return d},Dm:function(){return l},Hq:function(){return c},bU:function(){return p}});var n=r(4942),i=r(1413),o=r(93169),s=r(84652),a=r(60480),u=r(76115);function p(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.I4:"esriGeometryPolyline"===e?u.ET:u.lF}}}function l(e,t){if((0,o.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,n.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var s in e)r+="this".concat(s.includes(".")?'["'.concat(s,'"]'):".".concat(s)," = ").concat(JSON.stringify(e[s]),";");var a=new Function(r);return function(){return new a}}catch(u){return function(){return(0,i.Z)((0,n.Z)({},t,null),e)}}}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:a.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=8566.3c1edd72.chunk.js.map