"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[5903],{76551:function(e,n,a){a.d(n,{Z:function(){return g}});var t=a(15671),r=a(43144),i=a(60136),l=a(29388),u=a(27366),o=a(43404),s=a(49861),f=(a(63780),a(93169),a(25243),a(69912)),c=a(67123),v=a(57634),d=a(22061),m=new o.Xn({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"}),p=function(e){(0,i.Z)(a,e);var n=(0,l.Z)(a);function a(){var e;return(0,t.Z)(this,a),(e=n.apply(this,arguments)).baseSymbol=null,e.colorRamp=null,e.type=null,e}return(0,r.Z)(a)}(c.wq);(0,u._)([(0,s.Cb)({type:d.Z,json:{write:!0}})],p.prototype,"baseSymbol",void 0),(0,u._)([(0,s.Cb)({types:v.V,json:{read:{reader:v.i},write:!0}})],p.prototype,"colorRamp",void 0),(0,u._)([(0,s.Cb)({json:{read:m.read,write:m.write}})],p.prototype,"type",void 0);var h=p=(0,u._)([(0,f.j)("esri.rest.support.ClassificationDefinition")],p),b=new o.Xn({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),y=new o.Xn({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),V=function(e){(0,i.Z)(a,e);var n=(0,l.Z)(a);function a(){var e;return(0,t.Z)(this,a),(e=n.apply(this,arguments)).breakCount=null,e.classificationField=null,e.classificationMethod=null,e.normalizationField=null,e.normalizationType=null,e.type="class-breaks-definition",e}return(0,r.Z)(a,[{key:"standardDeviationInterval",set:function(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}},{key:"definedInterval",set:function(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}}]),a}(h);(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"breakCount",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"classificationField",void 0),(0,u._)([(0,s.Cb)({type:String,json:{read:b.read,write:b.write}})],V.prototype,"classificationMethod",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"normalizationField",void 0),(0,u._)([(0,s.Cb)({json:{read:y.read,write:y.write}})],V.prototype,"normalizationType",void 0),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"standardDeviationInterval",null),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"definedInterval",null),(0,u._)([(0,s.Cb)()],V.prototype,"type",void 0);var g=V=(0,u._)([(0,f.j)("esri.rest.support.ClassBreaksDefinition")],V)},15903:function(e,n,a){a.d(n,{G2:function(){return z},oF:function(){return S},XL:function(){return V},i5:function(){return y},H0:function(){return b},eT:function(){return M},Qm:function(){return C},Lq:function(){return g},fk:function(){return D},S5:function(){return h},F_:function(){return F},DL:function(){return I}});var t=a(37762),r=a(93433),i=a(76551);function l(e,n){return Number(e.toFixed(n))}function u(e){var n=e.definition,a=n.classificationMethod,t=n.breakCount,r=n.normalizationType,i=n.definedInterval,u=[],c=e.values;if(0===c.length)return[];c=c.sort((function(e,n){return e-n}));var v=c[0],d=c[c.length-1];if("equal-interval"===a)if(c.length>=t){for(var m=(d-v)/t,p=v,h=1;h<t;h++){var b=l(v+h*m,6);u.push({minValue:p,maxValue:b,label:o(p,b,r)}),p=b}u.push({minValue:p,maxValue:d,label:o(p,d,r)})}else c.forEach((function(e){u.push({minValue:e,maxValue:e,label:o(e,e,r)})}));else if("natural-breaks"===a){for(var y=s(c),V=e.valueFrequency||y.valueFrequency,g=f(y.uniqueValues,V,t),x=v,T=1;T<t;T++)if(y.uniqueValues.length>T){var F=l(y.uniqueValues[g[T]],6);u.push({minValue:x,maxValue:F,label:o(x,F,r)}),x=F}u.push({minValue:x,maxValue:d,label:o(x,d,r)})}else if("quantile"===a)if(c.length>=t&&v!==d){for(var M=v,C=Math.ceil(c.length/t),D=0,z=1;z<t;z++){var k=C+D-1;k>c.length&&(k=c.length-1),k<0&&(k=0),u.push({minValue:M,maxValue:c[k],label:o(M,c[k],r)}),M=c[k],D+=C,C=Math.ceil((c.length-D)/(t-z))}u.push({minValue:M,maxValue:d,label:o(M,d,r)})}else for(var I=-1,S=0;S<c.length;S++){var w=c[S];w!==I&&(I=w,u.push({minValue:I,maxValue:w,label:o(I,w,r)}),I=w)}else if("standard-deviation"===a){var N=function(e){for(var n=0,a=0;a<e.length;a++)n+=e[a];return n/e.length}(c),q=function(e,n){for(var a=0,t=0;t<e.length;t++){var r=e[t];a+=(r-n)*(r-n)}return a/=e.length,Math.sqrt(a)}(c,N);if(0===q)u.push({minValue:c[0],maxValue:c[0],label:o(c[0],c[0],r)});else{for(var _=function(e,n,a,t,r){var i=Math.max(t-e,n-t)/r/a;return i>=1?1:i>=.5?.5:.25}(v,d,t,N,q)*q,Z=0,B=v,j=t;j>=1;j--){var E=l(N-(j-.5)*_,6);u.push({minValue:B,maxValue:E,label:o(B,E,r)}),B=E,Z++}var G=l(N+.5*_,6);u.push({minValue:B,maxValue:G,label:o(B,G,r)}),B=G,Z++;for(var L=1;L<=t;L++)G=Z===2*t?d:l(N+(L+.5)*_,6),u.push({minValue:B,maxValue:G,label:o(B,G,r)}),B=G,Z++}}else if("defined-interval"===a){if(!i)return u;for(var P=c[0],U=c[c.length-1],O=Math.ceil((U-P)/i),X=P,A=1;A<O;A++){var Q=l(P+A*i,6);u.push({minValue:X,maxValue:Q,label:o(X,Q,r)}),X=Q}u.push({minValue:X,maxValue:U,label:o(X,U,r)})}return u}function o(e,n,a){return e===n?a&&"percent-of-total"===a?e+"%":e.toString():a&&"percent-of-total"===a?e+"% - "+n+"%":e+" - "+n}function s(e){for(var n=[],a=[],t=Number.MIN_VALUE,r=1,i=-1,l=0;l<e.length;l++){var u=e[l];u===t?(r++,a[i]=r):null!==u&&(n.push(u),t=u,r=1,a.push(r),i++)}return{uniqueValues:n,valueFrequency:a}}function f(e,n,a){var t=e.length,r=[];a>t&&(a=t);for(var i=0;i<a;i++)r.push(Math.round(i*t/a-1));r.push(t-1);var l=c(r,e,n,a);return function(e,n,a,t,r,i){for(var l=0,u=0,o=0,s=0,f=!0,c=0;c<2&&f;c++){0===c&&(f=!1);for(var d=0;d<i-1;d++)for(;a[d+1]+1!==a[d+2];){a[d+1]=a[d+1]+1;var m=v(d,a,t,r);o=m.sbMean,l=m.sbSdcm;var p=v(d+1,a,t,r);if(s=p.sbMean,!(l+(u=p.sbSdcm)<n[d]+n[d+1])){a[d+1]=a[d+1]-1;break}n[d]=l,n[d+1]=u,e[d]=o,e[d+1]=s,f=!0}for(var h=i-1;h>0;h--)for(;a[h]!==a[h-1]+1;){a[h]=a[h]-1;var b=v(h-1,a,t,r);o=b.sbMean,l=b.sbSdcm;var y=v(h,a,t,r);if(s=y.sbMean,!(l+(u=y.sbSdcm)<n[h-1]+n[h])){a[h]=a[h]+1;break}n[h-1]=l,n[h]=u,e[h-1]=o,e[h]=s,f=!0}}return f}(l.mean,l.sdcm,r,e,n,a)&&(l=c(r,e,n,a)),r}function c(e,n,a,t){for(var r=[],i=[],l=[],u=0,o=[],s=[],f=0;f<t;f++){var c=v(f,e,n,a);o.push(c.sbMean),s.push(c.sbSdcm),u+=s[f]}for(var d,m=u,p=!0;p||u<m;){p=!1,r=[];for(var h=0;h<t;h++)r.push(e[h]);for(var b=0;b<t;b++)for(var y=e[b]+1;y<=e[b+1];y++)if(d=n[y],b>0&&y!==e[b+1]&&Math.abs(d-o[b])>Math.abs(d-o[b-1]))e[b]=y;else if(b<t-1&&e[b]!==y-1&&Math.abs(d-o[b])>Math.abs(d-o[b+1])){e[b+1]=y-1;break}m=u,u=0,i=[],l=[];for(var V=0;V<t;V++){i.push(o[V]),l.push(s[V]);var g=v(V,e,n,a);o[V]=g.sbMean,s[V]=g.sbSdcm,u+=s[V]}}if(u>m){for(var x=0;x<t;x++)e[x]=r[x],o[x]=i[x],s[x]=l[x];u=m}return{mean:o,sdcm:s}}function v(e,n,a,t){for(var r=0,i=0,l=n[e]+1;l<=n[e+1];l++){var u=t[l];r+=a[l]*u,i+=u}i<=0&&console.log("Exception in Natural Breaks calculation");for(var o=r/i,s=0,f=n[e]+1;f<=n[e+1];f++)s+=t[f]*Math.pow(a[f]-o,2);return{sbMean:o,sbSdcm:s}}var d=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,m=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),p=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function h(e){var n=null!=e.normalizationField||null!=e.normalizationType,a=null!=e.minValue||null!=e.maxValue,t=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!a&&!t}function b(e){var n=e.returnDistinct?(0,r.Z)(new Set(e.values)):e.values,a=n.filter((function(e){return null!=e})).length,t={count:a};return e.supportsNullCount&&(t.nullcount=n.length-a),e.percentileParams&&(t.median=V(n,e.percentileParams)),t}function y(e){var n,a=e.values,r=e.useSampleStdDev,i=e.supportsNullCount,l=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,o=null,s=null,f=null,c=null,v=0,d=null==e.minValue?-1/0:e.minValue,m=null==e.maxValue?1/0:e.maxValue,p=(0,t.Z)(a);try{for(p.s();!(n=p.n()).done;){var h=n.value;Number.isFinite(h)?h>=d&&h<=m&&(o+=h,l=Math.min(l,h),u=Math.max(u,h),v++):"string"==typeof h&&v++}}catch(F){p.e(F)}finally{p.f()}if(v&&null!=o){s=o/v;var b,y=0,g=(0,t.Z)(a);try{for(g.s();!(b=g.n()).done;){var x=b.value;Number.isFinite(x)&&x>=d&&x<=m&&(y+=Math.pow(x-s,2))}}catch(F){g.e(F)}finally{g.f()}c=r?v>1?y/(v-1):0:v>0?y/v:0,f=Math.sqrt(c)}else l=null,u=null;var T={avg:s,count:v,max:u,min:l,stddev:f,sum:o,variance:c};return i&&(T.nullcount=a.length-v),e.percentileParams&&(T.median=V(a,e.percentileParams)),T}function V(e,n){var a=n.fieldType,t=n.value,i=n.orderBy,l=n.isDiscrete,u=g(a,"desc"===i);if(0===(e=(0,r.Z)(e).filter((function(e){return null!=e})).sort((function(e,n){return u(e,n)}))).length)return null;if(t<=0)return e[0];if(t>=1)return e[e.length-1];var o=(e.length-1)*t,s=Math.floor(o),f=s+1,c=o%1,v=e[s],d=e[f];return f>=e.length||l||"string"==typeof v||"string"==typeof d?v:v*(1-c)+d*c}function g(e,n){var a=n?1:-1,t=function(e){return e?function(e,n){return n-e}:function(e,n){return e-n}}(n),i=x(n);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID"].concat((0,r.Z)(m)).includes(e))return function(e,n){return"number"==typeof e&&"number"==typeof n?t(e,n):"string"==typeof e&&"string"==typeof n?i(e,n):a};if("esriFieldTypeDate"===e)return function(e,n){var r=new Date(e).getTime(),i=new Date(n).getTime();return isNaN(r)||isNaN(i)?a:t(r,i)};if(m.has(e))return function(e,n){return t(e,n)};if("esriFieldTypeString"===e)return function(e,n){return i(e,n)};if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){var l=x(n);return function(e,n){return l(T(e),T(n))}}return n?function(e,n){return 1}:function(e,n){return-1}}function x(e){return e?function(e,n){return(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:function(e,n){return(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}function T(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function F(e,n){var a;for(a in e)p.indexOf(a)>-1&&(Number.isFinite(e[a])||(e[a]=null));return n?(["avg","stddev","variance"].forEach((function(n){null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function M(e){var n,a={},r=(0,t.Z)(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;(null==i||"string"==typeof i&&""===i.trim())&&(i=null),null==a[i]?a[i]={count:1,data:i}:a[i].count++}}catch(l){r.e(l)}finally{r.f()}return{count:a}}function C(e,n,a){var t=e.count,r=[];for(var i in a&&n&&"coded-value"===n.type&&n.codedValues.forEach((function(e){var n=e.code;t.hasOwnProperty(n)||(t[n]={data:n,count:0})})),t){var l=t[i];r.push({value:l.data,count:l.count,label:l.label})}return{uniqueValueInfos:r}}function D(e,n,a,t){var r=null;switch(n){case"log":0!==e&&(r=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(t)&&0!==t&&(r=e/t*100);break;case"field":Number.isFinite(a)&&0!==a&&(r=e/a);break;case"natural-log":e>0&&(r=Math.log(e));break;case"square-root":e>0&&(r=Math.pow(e,.5))}return r}function z(e,n){var a=k({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||5});return e=function(e,n,a){return n=null==n?-1/0:n,a=null==a?1/0:a,e.filter((function(e){return Number.isFinite(e)&&e>=n&&e<=a}))}(e,n.minValue,n.maxValue),function(e){var n=e.normalizationTotal;return{classBreaks:u(e),normalizationTotal:n}}({definition:a,values:e,normalizationTotal:n.normalizationTotal})}function k(e){var n=e.field,a=e.classificationMethod||"equal-interval",t=e.normalizationType,r=e.normalizationField,l=new i.Z;return l.classificationField=n,l.breakCount=e.breakCount,l.classificationMethod=a,l.standardDeviationInterval="standard-deviation"===a?e.standardDeviationInterval||1:void 0,l.normalizationType=t,l.normalizationField="field"===t?r:void 0,l}function I(e,n){var a=e.classBreaks,t=a.length,r=a[0].minValue,i=a[t-1].maxValue,l="standard-deviation"===n,u=d;return a=a.map((function(e){var n=e.label,a={minValue:e.minValue,maxValue:e.maxValue,label:n};if(l&&n){var t=n.match(u).map((function(e){return+e.trim()}));2===t.length?(a.minStdDev=t[0],a.maxStdDev=t[1],t[0]<0&&t[1]>0&&(a.hasAvg=!0)):1===t.length&&(n.includes("<")?(a.minStdDev=null,a.maxStdDev=t[0]):n.includes(">")&&(a.minStdDev=t[0],a.maxStdDev=null))}return a})),{minValue:r,maxValue:i,classBreakInfos:a,normalizationTotal:e.normalizationTotal}}function S(e,n){var a,r=function(e,n){var a=n.field,t=n.classificationMethod,r=n.standardDeviationInterval,i=n.normalizationType,l=n.normalizationField,u=n.normalizationTotal,o=n.minValue,s=n.maxValue,f=n.numBins||10,c=null,v=null,d=null;if(t&&"equal-interval"!==t||i){var m=z(e,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:u,classificationMethod:t,standardDeviationInterval:r,minValue:o,maxValue:s,numClasses:f}).classBreaks;c=m[0].minValue,v=m[m.length-1].maxValue,d=m.map((function(e){return[e.minValue,e.maxValue]}))}else{if(null!=o&&null!=s)c=o,v=s;else{var p=y({values:e,minValue:o,maxValue:s,useSampleStdDev:!i,supportsNullCount:h({normalizationType:i,normalizationField:l,minValue:o,maxValue:s})});c=p.min,v=p.max}d=function(e,n,a){for(var t,r=(n-e)/a,i=[],l=e,u=1;u<=a;u++)t=l+r,t=Number(t.toFixed(16)),i.push([l,u===a?n:t]),l=t;return i}(c,v,f)}return{min:c,max:v,intervals:d}}(e,n),i=r.min,l=r.max,u=r.intervals,o=u.map((function(e,n){return{minValue:u[n][0],maxValue:u[n][1],count:0}})),s=(0,t.Z)(e);try{for(s.s();!(a=s.n()).done;){var f=a.value;if(null!=f&&f>=i&&f<=l){var c=w(u,f);c>-1&&o[c].count++}}}catch(v){s.e(v)}finally{s.f()}return{bins:o,minValue:i,maxValue:l,normalizationTotal:n.normalizationTotal}}function w(e,n){for(var a=-1,t=e.length-1;t>=0;t--)if(n>=e[t][0]){a=t;break}return a}}}]);
//# sourceMappingURL=5903.661ff47a.chunk.js.map