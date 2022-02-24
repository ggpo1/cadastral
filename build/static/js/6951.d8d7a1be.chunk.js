"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[6951],{46951:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ie}});var i,n=r(15861),a=r(1413),l=r(15671),o=r(43144),s=r(97326),u=r(60136),c=r(29388),p=r(87757),d=r(27366),f=r(76200),y=r(40110),v=r(10064),h=r(100),m=r(84652),g=r(97642),x=r(18202),w=r(66978),b=r(35995),M=r(49861),S=(r(25243),r(38511)),I=r(69912),C=r(31201),_=r(53866),L=r(74184),T=r(89200),k=r(6693),E=r(6061),P=r(29598),O=r(71684),Z=r(56811),F=r(22824),R=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.lods.length-1;(0,l.Z)(this,e),this.tileInfo=t,this.minLOD=r,this.maxLOD=i}return(0,o.Z)(e,[{key:"getAvailability",value:function(e,t,r){var i=this.tileInfo.lodAt(e);return!i||e<this.minLOD||e>this.maxLOD?"unavailable":i.cols&&i.rows?r>=i.cols[0]&&r<=i.cols[1]&&t>=i.rows[0]&&t<=i.rows[1]?"available":"unavailable":"available"}},{key:"fetchAvailability",value:function(){var e=(0,n.Z)(p.mark((function e(t,r,i,n){return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.Yn)(n);case 2:return e.abrupt("return",this.getAvailability(t,r,i));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n){return e.apply(this,arguments)}}()},{key:"fetchAvailabilityUpsample",value:function(){var e=(0,n.Z)(p.mark((function e(t,r,i,n,a){var l,o;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.Yn)(a);case 2:n.level=t,n.row=r,n.col=i,(l=this.tileInfo).updateTileInfo(n);case 7:if("unavailable"===(o=this.getAvailability(n.level,n.row,n.col))){e.next=10;break}return e.abrupt("return",o);case 10:if(l.upsampleTile(n)){e.next=12;break}return e.abrupt("return","unavailable");case 12:e.next=7;break;case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n,a){return e.apply(this,arguments)}}()}]),e}(),A=r(4961),V=r(67123),j=(r(63780),r(93169),i=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(e){var i;return(0,l.Z)(this,r),(i=t.call(this,e)).fullExtent=null,i.id=null,i.tileInfo=null,i}return(0,o.Z)(r,[{key:"clone",value:function(){var e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}}]),r}(V.wq));(0,d._)([(0,M.Cb)({type:_.Z,json:{read:{source:"fullExtent"}}})],j.prototype,"fullExtent",void 0),(0,d._)([(0,M.Cb)({type:String,json:{read:{source:"id"}}})],j.prototype,"id",void 0),(0,d._)([(0,M.Cb)({type:F.Z,json:{read:{source:"tileInfo"}}})],j.prototype,"tileInfo",void 0);var U,N=j=i=(0,d._)([(0,I.j)("esri.layer.support.TileMatrixSet")],j),D=U=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(e){var i;return(0,l.Z)(this,r),(i=t.call(this,e)).id=null,i.title=null,i.description=null,i.legendUrl=null,i}return(0,o.Z)(r,[{key:"clone",value:function(){var e=new U;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(V.wq);(0,d._)([(0,M.Cb)({json:{read:{source:"id"}}})],D.prototype,"id",void 0),(0,d._)([(0,M.Cb)({json:{read:{source:"title"}}})],D.prototype,"title",void 0),(0,d._)([(0,M.Cb)({json:{read:{source:"abstract"}}})],D.prototype,"description",void 0),(0,d._)([(0,M.Cb)({json:{read:{source:"legendUrl"}}})],D.prototype,"legendUrl",void 0),(0,d._)([(0,M.Cb)({json:{read:{source:"isDefault"}}})],D.prototype,"isDefault",void 0),(0,d._)([(0,M.Cb)({json:{read:{source:"keywords"}}})],D.prototype,"keywords",void 0);var W,K=D=U=(0,d._)([(0,I.j)("esri.layer.support.WMTSStyle")],D),B=W=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(e){var i;return(0,l.Z)(this,r),(i=t.call(this,e)).fullExtent=null,i.fullExtents=null,i.imageFormats=null,i.id=null,i.layer=null,i.styles=null,i.tileMatrixSetId=null,i.tileMatrixSets=null,i}return(0,o.Z)(r,[{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"readFullExtent",value:function(e,t){return(e=t.fullExtent)?_.Z.fromJSON(e):null}},{key:"readFullExtents",value:function(e,t){var r;return null!=(r=t.fullExtents)&&r.length?t.fullExtents.map((function(e){return _.Z.fromJSON(e)})):t.tileMatrixSets.map((function(e){return _.Z.fromJSON(e.fullExtent)})).filter((function(e){return e}))}},{key:"imageFormat",get:function(){var e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){var t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}},{key:"styleId",get:function(){var e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e},set:function(e){this._set("styleId",e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"tileMatrixSet",get:function(){var e=this;return this.tileMatrixSets?this.tileMatrixSets.find((function(t){return t.id===e.tileMatrixSetId})):null}},{key:"clone",value:function(){var e=new W;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(V.wq);(0,d._)([(0,M.Cb)()],B.prototype,"description",null),(0,d._)([(0,M.Cb)()],B.prototype,"fullExtent",void 0),(0,d._)([(0,S.r)("fullExtent",["fullExtent"])],B.prototype,"readFullExtent",null),(0,d._)([(0,M.Cb)({readOnly:!0})],B.prototype,"fullExtents",void 0),(0,d._)([(0,S.r)("fullExtents",["fullExtents","tileMatrixSets"])],B.prototype,"readFullExtents",null),(0,d._)([(0,M.Cb)()],B.prototype,"imageFormat",null),(0,d._)([(0,M.Cb)({json:{read:{source:"formats"}}})],B.prototype,"imageFormats",void 0),(0,d._)([(0,M.Cb)()],B.prototype,"id",void 0),(0,d._)([(0,M.Cb)()],B.prototype,"layer",void 0),(0,d._)([(0,M.Cb)()],B.prototype,"styleId",null),(0,d._)([(0,M.Cb)({type:y.Z.ofType(K),json:{read:{source:"styles"}}})],B.prototype,"styles",void 0),(0,d._)([(0,M.Cb)({value:null,json:{write:{ignoreOrigin:!0}}})],B.prototype,"title",null),(0,d._)([(0,M.Cb)()],B.prototype,"tileMatrixSetId",void 0),(0,d._)([(0,M.Cb)({readOnly:!0})],B.prototype,"tileMatrixSet",null),(0,d._)([(0,M.Cb)({type:y.Z.ofType(N),json:{read:{source:"tileMatrixSets"}}})],B.prototype,"tileMatrixSets",void 0);var H=B=W=(0,d._)([(0,I.j)("esri.layers.support.WMTSSublayer")],B),q=r(37762),J=r(29439),G=r(92026),Y=r(7882),z=r(92183),Q=r(89093),X=r(39098),$=90.71428571428571,ee=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function te(e,t){var r,i;e=e.replace(/ows:/gi,"");var n=(new DOMParser).parseFromString(e,"text/xml").documentElement,a=new Map,l=new Map,o=ne("Contents",n);if(!o)throw new v.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");var s,u,c=ne("OperationsMetadata",n),p=null==c?void 0:c.querySelector("[name='GetTile']"),d=null==p?void 0:p.getElementsByTagName("Get"),f=d&&Array.prototype.slice.call(d),y=null!=(r=(null==t||null==(i=t.url)?void 0:i.indexOf("https"))>-1)&&r,h=t.serviceMode,m=t&&t.url;if(f&&f.length&&f.some((function(e){var t=ne("Constraint",e);return!t||se("AllowedValues","Value",h,t)?(m=e.attributes[0].nodeValue,!0):(!t||se("AllowedValues","Value","RESTful",t)||se("AllowedValues","Value","REST",t)?u=e.attributes[0].nodeValue:t&&!se("AllowedValues","Value","KVP",t)||(s=e.attributes[0].nodeValue),!1)})),!m)if(u)m=u,h="RESTful";else if(s)m=s,h="KVP";else{var g=ne("ServiceMetadataURL",n);m=g&&g.getAttribute("xlink:href")}var x=m.indexOf("1.0.0/");-1===x&&"RESTful"===h?m+="/":x>-1&&(m=m.substring(0,x)),"KVP"===h&&(m+=x>-1?"":"?"),y&&(m=m.replace(/^http:/i,"https:"));var w=oe("ServiceIdentification>ServiceTypeVersion",n),b=oe("ServiceIdentification>AccessConstraints",n),M=ae("Layer",o),S=ae("TileMatrixSet",o),I=M.map((function(e){var t=oe("Identifier",e);return a.set(t,e),ue(t,e,S,y,w)}));return{copyright:b,dimensionMap:l,layerMap:a,layers:I,serviceMode:h,tileUrl:m}}function re(e){return e.layers.forEach((function(e){e.tileMatrixSets.forEach((function(e){var t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((function(r){r.scale=96*r.scale/t.dpi,r.resolution=we(t.spatialReference.wkid,r.scale*$/96,e.id)})),t.dpi=96)}))})),e}function ie(e){return e.nodeType===Node.ELEMENT_NODE}function ne(e,t){for(var r=0;r<t.childNodes.length;r++){var i=t.childNodes[r];if(ie(i)&&i.nodeName===e)return i}return null}function ae(e,t){for(var r=[],i=0;i<t.childNodes.length;i++){var n=t.childNodes[i];ie(n)&&n.nodeName===e&&r.push(n)}return r}function le(e,t){for(var r=[],i=0;i<t.childNodes.length;i++){var n=t.childNodes[i];ie(n)&&n.nodeName===e&&r.push(n)}return r.map((function(e){return e.textContent}))}function oe(e,t){return e.split(">").forEach((function(e){t&&(t=ne(e,t))})),t&&t.textContent}function se(e,t,r,i){var n;return Array.prototype.slice.call(i.childNodes).some((function(i){if(i.nodeName.indexOf(e)>-1){var a=ne(t,i),l=a&&a.textContent;if(l===r||r.split(":")&&r.split(":")[1]===l)return n=i,!0}return!1})),n}function ue(e,t,r,i,n){var a=oe("Abstract",t),l=le("Format",t);return{id:e,fullExtent:de(t),fullExtents:fe(t),description:a,formats:l,styles:ye(t,i),title:oe("Title",t),tileMatrixSets:ve(n,t,r)}}function ce(e,t){var r,i=[],n=null==(r=e.layerMap)?void 0:r.get(t);if(n){var a,l,o,s,u=ae("ResourceURL",n),c=ae("Dimension",n);return c.length&&(a=oe("Identifier",c[0]),l=le("Default",c[0])||le("Value",c[0])),c.length>1&&(o=oe("Identifier",c[1]),s=le("Default",c[1])||le("Value",c[1])),e.dimensionMap.set(t,{dimensions:l,dimensions2:s}),u.forEach((function(e){var t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(a&&l.length)if(t.indexOf("{"+a+"}")>-1)t=t.replace("{"+a+"}","{dimensionValue}");else{var r=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");r>-1&&(t=t.substring(0,r)+"{dimensionValue}"+t.substring(r+a.length+2))}if(o&&s.length)if(t.indexOf("{"+o+"}")>-1)t=t.replace("{"+o+"}","{dimensionValue2}");else{var n=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");n>-1&&(t=t.substring(0,n)+"{dimensionValue2}"+t.substring(n+o.length+2))}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),i}}function pe(e,t,r,i,n,a,l,o){var s,u,c=function(e,t,r){var i=ce(e,t),n=i.filter((function(e){return e.format===r}));return n.length?n:i}(e,t,i);if(!((null==c?void 0:c.length)>0))return"";var p=e.dimensionMap,d=null==(s=p.get(t).dimensions)?void 0:s[0],f=null==(u=p.get(t).dimensions2)?void 0:u[0];return c[l%c.length].template.replace(/\{Style\}/gi,n).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,d).replace(/\{dimensionValue2\}/gi,f)}function de(e){var t=ne("WGS84BoundingBox",e),r=t?oe("LowerCorner",t).split(" "):["-180","-90"],i=t?oe("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function fe(e){var t=[];return(0,X.h)(e,{BoundingBox:function(e){var r,i,n,a,l=e.getAttribute("crs").toLowerCase(),o=he(l),s=l.includes("epsg")&&ge(o.wkid);(0,X.h)(e,{LowerCorner:function(e){var t,n,a;t=e.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),n=(0,J.Z)(t,2),r=n[0],i=n[1],s&&(r=(a=[i,r])[0],i=a[1])},UpperCorner:function(e){var t,r,i;t=e.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),r=(0,J.Z)(t,2),n=r[0],a=r[1],s&&(n=(i=[a,n])[0],a=i[1])}}),t.push({xmin:r,ymin:i,xmax:n,ymax:a,spatialReference:o})}}),t}function ye(e,t){return ae("Style",e).map((function(e){var r=ne("LegendURL",e),i=ne("Keywords",e),n=i&&le("Keyword",i),a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:oe("Abstract",e),id:oe("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:n,legendUrl:a,title:oe("Title",e)}}))}function ve(e,t,r){return ae("TileMatrixSetLink",t).map((function(t){return function(e,t,r){var i=ne("TileMatrixSet",t).textContent,n=le("TileMatrix",t),a=r.find((function(e){var t=ne("Identifier",e),r=t&&t.textContent;return!!(r===i||i.split(":")&&i.split(":")[1]===r)})),l=ne("TileMatrixSetLimits",t),o=l&&ae("TileMatrixLimits",l),s=new Map;if(null!=o&&o.length){var u,c=(0,q.Z)(o);try{for(c.s();!(u=c.n()).done;){var p=u.value,d=ne("TileMatrix",p).textContent,f=+ne("MinTileRow",p).textContent,y=+ne("MaxTileRow",p).textContent,v=+ne("MinTileCol",p).textContent,h=+ne("MaxTileCol",p).textContent;s.set(d,{minCol:v,maxCol:h,minRow:f,maxRow:y})}}catch(C){c.e(C)}finally{c.f()}}var m=oe("SupportedCRS",a).toLowerCase(),g=function(e,t){return me(ne("TileMatrix",e),t)}(a,m),x=g.spatialReference,w=ne("TileMatrix",a),b=[parseInt(oe("TileWidth",w),10),parseInt(oe("TileHeight",w),10)],M=[];n.length?n.forEach((function(e,t){var r=se("TileMatrix","Identifier",e,a);M.push(xe(r,m,t,i,s))})):ae("TileMatrix",a).forEach((function(e,t){M.push(xe(e,m,t,i,s))}));var S=function(e,t,r,i,n){var a,l,o,s,u,c,p=ne("BoundingBox",t);if(p&&(a=oe("LowerCorner",p).split(" "),l=oe("UpperCorner",p).split(" ")),a&&a.length>1&&l&&l.length>1)o=parseFloat(a[0]),u=parseFloat(a[1]),s=parseFloat(l[0]),c=parseFloat(l[1]);else{var d=ne("TileMatrix",t),f=parseInt(oe("MatrixWidth",d),10),y=parseInt(oe("MatrixHeight",d),10);o=r.x,c=r.y,s=o+f*i[0]*n.resolution,u=c-y*i[1]*n.resolution}return function(e,t){return"1.0.0"===e&&ge(t.wkid)}(e,r.spatialReference)?new _.Z(u,o,c,s,r.spatialReference):new _.Z(o,u,s,c,r.spatialReference)}(e,a,g,b,M[0]).toJSON(),I=new F.Z({dpi:96,spatialReference:x,size:b,origin:g,lods:M}).toJSON();return{id:i,fullExtent:S,tileInfo:I}}(e,t,r)}))}function he(e){e=e.toLowerCase();var t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);var r=function(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}(e);return(0,G.pC)(r)&&(t=r),{wkid:t}}function me(e,t){var r=he(t),i=oe("TopLeftCorner",e).split(" ").map((function(e){return parseFloat(e)})),n=(0,J.Z)(i,2),a=n[0],l=n[1],o=t.includes("epsg")&&ge(r.wkid);return new Y.Z(o?{x:l,y:a,spatialReference:r}:{x:a,y:l,spatialReference:r})}function ge(e){return ee.some((function(t){var r=(0,J.Z)(t,2),i=r[0],n=r[1];return e>=i&&e<=n}))}function xe(e,t,r,i,n){var a,l=he(t),o=oe("Identifier",e),s=parseFloat(oe("ScaleDenominator",e)),u=we(l.wkid,s,i);s*=96/$;var c=+oe("MatrixWidth",e),p=+oe("MatrixHeight",e),d=null!=(a=n.get(o))?a:{},f=d.maxCol,y=void 0===f?c-1:f,v=d.maxRow,h=void 0===v?p-1:v,m=d.minCol,g=void 0===m?0:m,x=d.minRow,w=void 0===x?0:x,b=me(e,t);return{cols:[g,y],level:r,levelValue:o,origin:[b.x,b.y],scale:s,resolution:u,rows:[w,h]}}function we(e,t,r){return 7*t/25e3/(Q.Z.hasOwnProperty(""+e)?Q.Z.values[Q.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,z.e8)(e).metersPerDegree)}var be={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},Me=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]),Se=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;(0,l.Z)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n)))._sublayersHandles=new h.Z,e.copyright="",e.customParameters=null,e.customLayerParameters=null,e.fullExtent=null,e.operationalLayerType="WebTiledLayer",e.resourceInfo=null,e.serviceMode="RESTful",e.sublayers=null,e.type="wmts",e.version="1.0.0",e.watch("activeLayer",(function(t,r){r&&(r.layer=null),t&&(t.layer=(0,s.Z)(e))}),!0),e.watch("sublayers",(function(t,r){r&&(r.forEach((function(e){e.layer=null})),e._sublayersHandles.removeAll(),e._sublayersHandles=null),t&&(t.forEach((function(t){t.layer=(0,s.Z)(e)})),e._sublayersHandles||(e._sublayersHandles=new h.Z),e._sublayersHandles.add([t.on("after-add",(function(t){t.item.layer=(0,s.Z)(e)})),t.on("after-remove",(function(e){e.item.layer=null}))]))}),!0),e}return(0,o.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this;if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(w.r9).then((function(){return t._fetchService(e)})).catch((function(e){throw(0,w.r9)(e),new v.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}},{key:"activeLayer",get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)}},{key:"readActiveLayerFromService",value:function(e,t,r){var i=this;this.activeLayer||(this.activeLayer=new H);var n=t.layers.find((function(e){return e.id===i.activeLayer.id}));return n||(n=t.layers[0]),this.activeLayer.read(n,r),this.activeLayer}},{key:"readActiveLayerFromItemOrWebDoc",value:function(e,t){var r=t.templateUrl,i=t.wmtsInfo,n=r?this._getLowerCasedUrlParams(r):null,a=null==i?void 0:i.layerIdentifier,l=null,o=null==i?void 0:i.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);var s=null==n?void 0:n.format,u=null==n?void 0:n.style;return new H({id:a,imageFormat:s,styleId:u,tileMatrixSetId:l})}},{key:"writeActiveLayer",value:function(e,t,r,i){var n=this.activeLayer;t.templateUrl=this.getUrlTemplate(n.id,n.tileMatrixSetId,n.imageFormat,n.styleId);var l=(0,x.hS)("tileMatrixSet.tileInfo",n);t.tileInfo=l?l.toJSON(i):null,t.wmtsInfo=(0,a.Z)((0,a.Z)({},t.wmtsInfo),{},{layerIdentifier:n.id,tileMatrixSet:n.tileMatrixSetId})}},{key:"readCustomParameters",value:function(e,t){var r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}},{key:"fullExtents",get:function(){return this.activeLayer.fullExtents}},{key:"readServiceMode",value:function(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}},{key:"readSublayersFromService",value:function(e,t,r){return function(e,t){return e.map((function(e){var r=new H;return r.read(e,t),r}))}(t.layers,r)}},{key:"supportedSpatialReferences",get:function(){return this.activeLayer.tileMatrixSets.map((function(e){return e.tileInfo.spatialReference})).toArray()}},{key:"tilemapCache",get:function(){var e,t,r=null==(e=this.activeLayer)||null==(t=e.tileMatrixSet)?void 0:t.tileInfo;return new R(r)}},{key:"title",get:function(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"},set:function(e){e?this._override("title",e):this._clearOverride("title")}},{key:"url",get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}},{key:"createWebTileLayer",value:function(e){var t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,n=new A.Z({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(n.customLayerParameters=this.customLayerParameters),this.customParameters&&(n.customParameters=this.customParameters),new T.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:n})}},{key:"fetchTile",value:function(e,t,r){var i=this.getTileUrl(e,t,r);return(0,f.default)(i,{responseType:"image"}).then((function(e){return e.data}))}},{key:"findSublayerById",value:function(e){return this.sublayers.find((function(t){return t.id===e}))}},{key:"getTileUrl",value:function(e,t,r){var i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],n=i?i.levelValue?i.levelValue:"".concat(i.level):"".concat(e),a=this.resourceInfo?"":pe({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,n,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,n).replace(/\{row\}/gi,"".concat(t)).replace(/\{col\}/gi,"".concat(r))),a=this._appendCustomLayerParameters(a)}},{key:"getUrlTemplate",value:function(e,t,r,i){if(!this.resourceInfo){var n=function(e,t,r,i){var n=e.dimensionMap,a=ce(e,t),l="";if(a&&a.length>0){var o=n.get(t).dimensions&&n.get(t).dimensions[0],s=n.get(t).dimensions2&&n.get(t).dimensions2[0];(l=a[0].template).indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=(l=(l=(l=(l=(l=(l=l.replace(/\{Style\}/gi,i)).replace(/\{TileMatrixSet\}/gi,r)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,o)).replace(/\{dimensionValue2\}/gi,s)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(n)return n}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){var a="";return be[r.toLowerCase()]&&(a=be[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+a}return""}},{key:"_fetchService",value:function(){var e=(0,n.Z)(p.mark((function e(t){var r,i;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.resourceInfo){e.next=4;break}"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),r={ssl:!1,data:this.resourceInfo},e.next=23;break;case 4:return e.prev=4,e.next=7,this._getCapabilities(this.serviceMode,t);case 7:r=e.sent,e.next=23;break;case 10:return e.prev=10,e.t0=e.catch(4),i="KVP"===this.serviceMode?"RESTful":"KVP",e.prev=13,e.next=16,this._getCapabilities(i,t);case 16:r=e.sent,this.serviceMode=i,e.next=23;break;case 20:throw e.prev=20,e.t1=e.catch(13),new v.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e.t1});case 23:this.resourceInfo?r.data=re(r.data):r.data=te(r.data,{serviceMode:this.serviceMode,url:this.url}),r.data&&this.read(r.data,{origin:"service"});case 24:case"end":return e.stop()}}),e,this,[[4,10],[13,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getCapabilities",value:function(){var e=(0,n.Z)(p.mark((function e(t,r){var i;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this._getCapabilitiesUrl(t),e.next=3,(0,f.default)(i,(0,a.Z)((0,a.Z)({},r),{},{responseType:"text"}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getTileMatrixSetById",value:function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((function(t){return t.id===e}))}},{key:"_appendCustomParameters",value:function(e){return this._appendParameters(e,this.customParameters)}},{key:"_appendCustomLayerParameters",value:function(e){return this._appendParameters(e,(0,a.Z)((0,a.Z)({},(0,m.d9)(this.customParameters)),this.customLayerParameters))}},{key:"_appendParameters",value:function(e,t){var r=(0,b.mN)(e),i=(0,a.Z)((0,a.Z)({},r.query),t),n=(0,b.B7)(i);return""===n?r.path:"".concat(r.path,"?").concat(n)}},{key:"_getCapabilitiesUrl",value:function(e){var t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t)}},{key:"_getLowerCasedUrlParams",value:function(e){if(!e)return null;var t=(0,b.mN)(e).query;if(!t)return null;var r={};return Object.keys(t).forEach((function(e){r[e.toLowerCase()]=t[e]})),r}},{key:"_mergeParams",value:function(e,t){var r=this._getLowerCasedUrlParams(t);if(r){var i=Object.keys(r);i.length&&(e=e?(0,m.d9)(e):{},i.forEach((function(t){e.hasOwnProperty(t)||Me.has(t)||(e[t]=r[t])})))}return e}}]),r}((0,k.h)((0,O.Q)((0,Z.M)((0,E.q)((0,P.I)((0,g.R)(L.Z)))))));(0,d._)([(0,M.Cb)()],Se.prototype,"dimensionMap",void 0),(0,d._)([(0,M.Cb)()],Se.prototype,"layerMap",void 0),(0,d._)([(0,M.Cb)({type:H,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],Se.prototype,"activeLayer",null),(0,d._)([(0,S.r)("service","activeLayer",["layers"])],Se.prototype,"readActiveLayerFromService",null),(0,d._)([(0,S.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],Se.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,d._)([(0,C.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:F.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],Se.prototype,"writeActiveLayer",null),(0,d._)([(0,M.Cb)({type:String,value:"",json:{write:!0}})],Se.prototype,"copyright",void 0),(0,d._)([(0,M.Cb)({type:["show","hide"]})],Se.prototype,"listMode",void 0),(0,d._)([(0,M.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],Se.prototype,"customParameters",void 0),(0,d._)([(0,S.r)(["portal-item","web-document"],"customParameters")],Se.prototype,"readCustomParameters",null),(0,d._)([(0,M.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],Se.prototype,"customLayerParameters",void 0),(0,d._)([(0,M.Cb)({type:_.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],Se.prototype,"fullExtent",void 0),(0,d._)([(0,M.Cb)({readOnly:!0})],Se.prototype,"fullExtents",null),(0,d._)([(0,M.Cb)({type:["WebTiledLayer"]})],Se.prototype,"operationalLayerType",void 0),(0,d._)([(0,M.Cb)()],Se.prototype,"resourceInfo",void 0),(0,d._)([(0,M.Cb)()],Se.prototype,"serviceMode",void 0),(0,d._)([(0,S.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],Se.prototype,"readServiceMode",null),(0,d._)([(0,M.Cb)({type:y.Z.ofType(H)})],Se.prototype,"sublayers",void 0),(0,d._)([(0,S.r)("service","sublayers",["layers"])],Se.prototype,"readSublayersFromService",null),(0,d._)([(0,M.Cb)({readOnly:!0})],Se.prototype,"supportedSpatialReferences",null),(0,d._)([(0,M.Cb)({readOnly:!0})],Se.prototype,"tilemapCache",null),(0,d._)([(0,M.Cb)({json:{read:{source:"title"}}})],Se.prototype,"title",null),(0,d._)([(0,M.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],Se.prototype,"type",void 0),(0,d._)([(0,M.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],Se.prototype,"url",null),(0,d._)([(0,M.Cb)()],Se.prototype,"version",void 0);var Ie=Se=(0,d._)([(0,I.j)("esri.layers.WMTSLayer")],Se)},39098:function(e,t,r){r.d(t,{H:function(){return o},h:function(){return l}});var i=r(37762),n=r(87757),a=n.mark(o);function l(e,t){var r,n=(0,i.Z)(e.children);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(a.localName in t){var o=t[a.localName];if("function"==typeof o){var s=o(a);s&&l(a,s)}else l(a,o)}}}catch(u){n.e(u)}finally{n.f()}}function o(e,t){var r,l,s,u;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=(0,i.Z)(e.children),n.prev=1,r.s();case 3:if((l=r.n()).done){n.next=15;break}if(!((s=l.value).localName in t)){n.next=13;break}if("function"!=typeof(u=t[s.localName])){n.next=12;break}return n.next=10,u(s);case 10:n.next=13;break;case 12:return n.delegateYield(o(s,u),"t0",13);case 13:n.next=3;break;case 15:n.next=20;break;case 17:n.prev=17,n.t1=n.catch(1),r.e(n.t1);case 20:return n.prev=20,r.f(),n.finish(20);case 23:case"end":return n.stop()}}),a,null,[[1,17,20,23]])}}}]);
//# sourceMappingURL=6951.d8d7a1be.chunk.js.map