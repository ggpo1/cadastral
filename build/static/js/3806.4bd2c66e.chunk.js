"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[3806],{83806:function(n,r,t){t.r(r),t.d(r,{registerFunctions:function(){return y}});var e=t(37762),i=t(19545),u=t(47238),l=t(44715),a=t(95435),o=t(66978),f=t(53866),c=t(32238),s=t(84178),g=t(77577),h=t(7882),d=t(80885),w=t(29909),E=t(77981),p=t(68860);function A(n){return 0===i.i8.indexOf("4.")?d.Z.fromExtent(n):new d.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function m(n){if((0,l.p)(n,2,2),n[0]instanceof c.Z&&n[1]instanceof c.Z);else if(n[0]instanceof c.Z&&null===n[1]);else if(n[1]instanceof c.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function Z(n,r){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return(0,o.DB)(0);var t=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(t=(0,a._R)(n.spatialReference)/(0,p.c9)(n.spatialReference));var i=0;if("polyline"===n.type){var u,f=(0,e.Z)(n.paths);try{for(f.s();!(u=f.n()).done;)for(var c=u.value,g=1;g<c.length;g++)i+=(0,a.AW)(c[g],c[g-1],t)}catch(Z){f.e(Z)}finally{f.f()}}else if("polygon"===n.type){var h,d=(0,e.Z)(n.rings);try{for(d.s();!(h=d.n()).done;){for(var E=h.value,A=1;A<E.length;A++)i+=(0,a.AW)(E[A],E[A-1],t);(E[0][0]!==E[E.length-1][0]||E[0][1]!==E[E.length-1][1]||void 0!==E[0][2]&&E[0][2]!==E[E.length-1][2])&&(i+=(0,a.AW)(E[0],E[E.length-1],t))}}catch(Z){d.e(Z)}finally{d.f()}}else"extent"===n.type&&(i+=2*(0,a.AW)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],t),i+=2*(0,a.AW)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],t),i*=2,i+=4*Math.abs((0,l.E)(n.zmax,0)*t-(0,l.E)(n.zmin,0)*t));var m=new w.Z({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,i]]});return(0,s.sz)(m,r)}function y(n){"async"===n.mode&&(n.functions.disjoint=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null===t[0]||null===t[1]||(0,s.ED)(t[0],t[1])}))},n.functions.intersects=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null!==t[0]&&null!==t[1]&&(0,s.kK)(t[0],t[1])}))},n.functions.touches=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null!==t[0]&&null!==t[1]&&(0,s.W4)(t[0],t[1])}))},n.functions.crosses=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null!==t[0]&&null!==t[1]&&(0,s.jU)(t[0],t[1])}))},n.functions.within=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null!==t[0]&&null!==t[1]&&(0,s.uh)(t[0],t[1])}))},n.functions.contains=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null!==t[0]&&null!==t[1]&&(0,s.r3)(t[0],t[1])}))},n.functions.overlaps=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null!==t[0]&&null!==t[1]&&(0,s.Nm)(t[0],t[1])}))},n.functions.equals=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return(0,l.p)(t,2,2),t[0]===t[1]||(t[0]instanceof c.Z&&t[1]instanceof c.Z?(0,s.fS)(t[0],t[1]):!(!(0,l.n)(t[0])||!(0,l.n)(t[1]))&&t[0].getTime()===t[1].getTime())}))},n.functions.relate=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,3,3),t[0]instanceof c.Z&&t[1]instanceof c.Z)return(0,s.LV)(t[0],t[1],(0,l.d)(t[2]));if(t[0]instanceof c.Z&&null===t[1])return!1;if(t[1]instanceof c.Z&&null===t[0])return!1;if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null===t[0]||null===t[1]?null:(0,s.wf)(t[0],t[1])}))},n.functions.union=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,e){var i=[];if(0===(e=(0,l.K)(e)).length)throw new Error("Function called with wrong number of Parameters");if(1===e.length)if((0,l.a)(e[0])){for(var a=(0,l.K)(e[0]),o=0;o<a.length;o++)if(null!==a[o]){if(!(a[o]instanceof c.Z))throw new Error("Illegal Argument");i.push(a[o])}}else{if(!(0,l.b)(e[0])){if(e[0]instanceof c.Z)return(0,l.r)((0,u.r1)(e[0]),r.spatialReference);if(null===e[0])return null;throw new Error("Illegal Argument")}for(var f=(0,l.K)(e[0].toArray()),g=0;g<f.length;g++)if(null!==f[g]){if(!(f[g]instanceof c.Z))throw new Error("Illegal Argument");i.push(f[g])}}else for(var h=0;h<e.length;h++)if(null!==e[h]){if(!(e[h]instanceof c.Z))throw new Error("Illegal Argument");i.push(e[h])}return 0===i.length?null:(0,s.G0)(i)}))},n.functions.difference=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null!==t[0]&&null===t[1]?(0,u.r1)(t[0]):null===t[0]?null:(0,s.e5)(t[0],t[1])}))},n.functions.symmetricdifference=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return m(t=(0,l.K)(t)),null===t[0]&&null===t[1]?null:null===t[0]?(0,u.r1)(t[1]):null===t[1]?(0,u.r1)(t[0]):(0,s.Sp)(t[0],t[1])}))},n.functions.clip=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,2,2),!(t[1]instanceof f.Z)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return null;if(!(t[0]instanceof c.Z))throw new Error("Illegal Argument");return null===t[1]?null:(0,s.oq)(t[0],t[1])}))},n.functions.cut=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,2,2),!(t[1]instanceof w.Z)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return[];if(!(t[0]instanceof c.Z))throw new Error("Illegal Argument");return null===t[1]?[(0,u.r1)(t[0])]:(0,s.z7)(t[0],t[1])}))},n.functions.area=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,e){if((0,l.p)(e,1,2),null===(e=(0,l.K)(e))[0])return 0;if((0,l.o)(e[0]))return e[0].sumArea((0,u.EI)((0,l.E)(e[1],-1)),!1,r.abortSignal).then((function(n){if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,l.a)(e[0])||(0,l.b)(e[0])){var i=(0,l.M)(e[0],r.spatialReference);return null===i?0:(0,s.CJ)(i,(0,u.EI)((0,l.E)(e[1],-1)))}if(!(e[0]instanceof c.Z))throw new Error("Illegal Argument");return(0,s.CJ)(e[0],(0,u.EI)((0,l.E)(e[1],-1)))}))},n.functions.areageodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,e){if((0,l.p)(e,1,2),null===(e=(0,l.K)(e))[0])return 0;if((0,l.o)(e[0]))return e[0].sumArea((0,u.EI)((0,l.E)(e[1],-1)),!0,r.abortSignal).then((function(n){if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,l.a)(e[0])||(0,l.b)(e[0])){var i=(0,l.M)(e[0],r.spatialReference);return null===i?0:(0,s.Y4)(i,(0,u.EI)((0,l.E)(e[1],-1)))}if(!(e[0]instanceof c.Z))throw new Error("Illegal Argument");return(0,s.Y4)(e[0],(0,u.EI)((0,l.E)(e[1],-1)))}))},n.functions.length=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,e){if((0,l.p)(e,1,2),null===(e=(0,l.K)(e))[0])return 0;if((0,l.o)(e[0]))return e[0].sumLength((0,u.Lz)((0,l.E)(e[1],-1)),!1,r.abortSignal).then((function(n){if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,l.a)(e[0])||(0,l.b)(e[0])){var i=(0,l.L)(e[0],r.spatialReference);return null===i?0:(0,s.sz)(i,(0,u.Lz)((0,l.E)(e[1],-1)))}if(!(e[0]instanceof c.Z))throw new Error("Illegal Argument");return(0,s.sz)(e[0],(0,u.Lz)((0,l.E)(e[1],-1)))}))},n.functions.length3d=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,e){if((0,l.p)(e,1,2),null===(e=(0,l.K)(e))[0])return 0;if((0,l.a)(e[0])||(0,l.b)(e[0])){var i=(0,l.L)(e[0],r.spatialReference);return null===i?0:!0===i.hasZ?Z(i,(0,u.Lz)((0,l.E)(e[1],-1))):(0,s.sz)(i,(0,u.Lz)((0,l.E)(e[1],-1)))}if(!(e[0]instanceof c.Z))throw new Error("Illegal Argument");return!0===e[0].hasZ?Z(e[0],(0,u.Lz)((0,l.E)(e[1],-1))):(0,s.sz)(e[0],(0,u.Lz)((0,l.E)(e[1],-1)))}))},n.functions.lengthgeodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,e){if((0,l.p)(e,1,2),null===(e=(0,l.K)(e))[0])return 0;if((0,l.o)(e[0]))return e[0].sumLength((0,u.Lz)((0,l.E)(e[1],-1)),!0,r.abortSignal).then((function(n){if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,l.a)(e[0])||(0,l.b)(e[0])){var i=(0,l.L)(e[0],r.spatialReference);return null===i?0:(0,s.kQ)(i,(0,u.Lz)((0,l.E)(e[1],-1)))}if(!(e[0]instanceof c.Z))throw new Error("Illegal Argument");return(0,s.kQ)(e[0],(0,u.Lz)((0,l.E)(e[1],-1)))}))},n.functions.distance=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,e){e=(0,l.K)(e),(0,l.p)(e,2,3);var i=e[0];((0,l.a)(e[0])||(0,l.b)(e[0]))&&(i=(0,l.O)(e[0],r.spatialReference));var a=e[1];if(((0,l.a)(e[1])||(0,l.b)(e[1]))&&(a=(0,l.O)(e[1],r.spatialReference)),!(i instanceof c.Z))throw new Error("Illegal Argument");if(!(a instanceof c.Z))throw new Error("Illegal Argument");return(0,s.TE)(i,a,(0,u.Lz)((0,l.E)(e[2],-1)))}))},n.functions.distancegeodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){t=(0,l.K)(t),(0,l.p)(t,2,3);var e=t[0],i=t[1];if(!(e instanceof h.Z))throw new Error("Illegal Argument");if(!(i instanceof h.Z))throw new Error("Illegal Argument");var a=new w.Z({paths:[],spatialReference:e.spatialReference});return a.addPath([e,i]),(0,s.kQ)(a,(0,u.Lz)((0,l.E)(t[2],-1)))}))},n.functions.densify=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,2,3),null===t[0])return null;if(!(t[0]instanceof c.Z))throw new Error("Illegal Argument");var e=(0,l.t)(t[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return t[0]instanceof d.Z||t[0]instanceof w.Z?(0,s.Cz)(t[0],e,(0,u.Lz)((0,l.E)(t[2],-1))):t[0]instanceof f.Z?(0,s.Cz)(A(t[0]),e,(0,u.Lz)((0,l.E)(t[2],-1))):t[0]}))},n.functions.densifygeodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,2,3),null===t[0])return null;if(!(t[0]instanceof c.Z))throw new Error("Illegal Argument");var e=(0,l.t)(t[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return t[0]instanceof d.Z||t[0]instanceof w.Z?(0,s.j2)(t[0],e,(0,u.Lz)((0,l.E)(t[2],-1))):t[0]instanceof f.Z?(0,s.j2)(A(t[0]),e,(0,u.Lz)((0,l.E)(t[2],-1))):t[0]}))},n.functions.generalize=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,2,4),null===t[0])return null;if(!(t[0]instanceof c.Z))throw new Error("Illegal Argument");var e=(0,l.t)(t[1]);if(isNaN(e))throw new Error("Illegal Argument");return(0,s.D$)(t[0],e,(0,l.y)((0,l.E)(t[2],!0)),(0,u.Lz)((0,l.E)(t[3],-1)))}))},n.functions.buffer=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,2,3),null===t[0])return null;if(!(t[0]instanceof c.Z))throw new Error("Illegal Argument");var e=(0,l.t)(t[1]);if(isNaN(e))throw new Error("Illegal Argument");return 0===e?(0,u.r1)(t[0]):(0,s.f3)(t[0],e,(0,u.Lz)((0,l.E)(t[2],-1)))}))},n.functions.buffergeodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,2,3),null===t[0])return null;if(!(t[0]instanceof c.Z))throw new Error("Illegal Argument");var e=(0,l.t)(t[1]);if(isNaN(e))throw new Error("Illegal Argument");return 0===e?(0,u.r1)(t[0]):(0,s.rd)(t[0],e,(0,u.Lz)((0,l.E)(t[2],-1)))}))},n.functions.offset=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,2,6),null===t[0])return null;if(!(t[0]instanceof d.Z||t[0]instanceof w.Z))throw new Error("Illegal Argument");var e=(0,l.t)(t[1]);if(isNaN(e))throw new Error("Illegal Argument");var i=(0,l.t)((0,l.E)(t[4],10));if(isNaN(i))throw new Error("Illegal Argument");var a=(0,l.t)((0,l.E)(t[5],0));if(isNaN(a))throw new Error("Illegal Argument");return(0,s.cv)(t[0],e,(0,u.Lz)((0,l.E)(t[2],-1)),(0,l.d)((0,l.E)(t[3],"round")).toLowerCase(),i,a)}))},n.functions.rotate=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){t=(0,l.K)(t),(0,l.p)(t,2,3);var e=t[0];if(null===e)return null;if(!(e instanceof c.Z))throw new Error("Illegal Argument");e instanceof f.Z&&(e=d.Z.fromExtent(e));var i=(0,l.t)(t[1]);if(isNaN(i))throw new Error("Illegal Argument");var u=(0,l.E)(t[2],null);if(null===u)return(0,s.U1)(e,i);if(u instanceof h.Z)return(0,s.U1)(e,i,u);throw new Error("Illegal Argument")}))},n.functions.centroid=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,e){if(e=(0,l.K)(e),(0,l.p)(e,1,1),null===e[0])return null;var i=e[0];if(((0,l.a)(e[0])||(0,l.b)(e[0]))&&(i=(0,l.O)(e[0],r.spatialReference)),null===i)return null;if(!(i instanceof c.Z))throw new Error("Illegal Argument");return i instanceof h.Z?(0,l.r)((0,u.r1)(e[0]),r.spatialReference):i instanceof d.Z?i.centroid:i instanceof w.Z?(0,a.s9)(i):i instanceof g.Z?(0,a.Ay)(i):i instanceof f.Z?i.center:null}))},n.functions.multiparttosinglepart=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,e){e=(0,l.K)(e),(0,l.p)(e,1,1);var i=[];if(null===e[0])return null;if(!(e[0]instanceof c.Z))throw new Error("Illegal Argument");return e[0]instanceof h.Z||e[0]instanceof f.Z?[(0,l.r)((0,u.r1)(e[0]),r.spatialReference)]:(0,s.og)(e[0]).then((function(n){if(n instanceof d.Z){for(var t=[],a=[],o=0;o<n.rings.length;o++)if(n.isClockwise(n.rings[o])){var f=(0,E.im)({rings:[n.rings[o]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(f)}else a.push({ring:n.rings[o],pt:n.getPoint(o,0)});for(var c=0;c<a.length;c++)for(var s=0;s<t.length;s++)if(t[s].contains(a[c].pt)){t[s].addRing(a[c].ring);break}return t}if(n instanceof w.Z){for(var h=[],p=0;p<n.paths.length;p++){var A=(0,E.im)({paths:[n.paths[p]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});h.push(A)}return h}if(e[0]instanceof g.Z){for(var m=(0,l.r)((0,u.r1)(e[0]),r.spatialReference),Z=0;Z<m.points.length;Z++)i.push(m.getPoint(Z));return i}return null}))}))},n.functions.issimple=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,1,1),null===t[0])return!0;if(!(t[0]instanceof c.Z))throw new Error("Illegal Argument");return(0,s.Gg)(t[0])}))},n.functions.simplify=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,l.K)(t),(0,l.p)(t,1,1),null===t[0])return null;if(!(t[0]instanceof c.Z))throw new Error("Illegal Argument");return(0,s.og)(t[0])}))})}}}]);
//# sourceMappingURL=3806.4bd2c66e.chunk.js.map