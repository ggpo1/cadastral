"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[4178],{84178:function(t,n,r){r.d(n,{f3:function(){return Q},oq:function(){return x},r3:function(){return k},jU:function(){return b},z7:function(){return v},Cz:function(){return X},e5:function(){return R},ED:function(){return z},TE:function(){return g},fS:function(){return Z},D$:function(){return M},Y4:function(){return ut},rd:function(){return V},j2:function(){return tt},kQ:function(){return ct},wf:function(){return q},kK:function(){return A},Gg:function(){return J},cv:function(){return I},Nm:function(){return C},CJ:function(){return rt},sz:function(){return et},LV:function(){return D},U1:function(){return F},og:function(){return N},Sp:function(){return G},W4:function(){return E},G0:function(){return W},uh:function(){return S}});var e,u=r(15861),c=r(87757),i=(r(59486),r(31009)),a=(r(7882),r(77981));function s(t){var n;return Array.isArray(t)?null==(n=t[0])?void 0:n.spatialReference:null==t?void 0:t.spatialReference}function o(t){return t?Array.isArray(t)?t.map(o):t.toJSON?t.toJSON():t:t}function f(t){return Array.isArray(t)?t.map((function(t){return(0,a.im)(t)})):(0,a.im)(t)}function p(t,n){var r;return Array.isArray(t)?r=t:((r=[]).push(t),null!=n&&r.push(n)),r}function l(){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(c.mark((function t(){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(e||(e=(0,i.bA)("geometryEngineWorker",{strategy:"distributed"})),e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,n){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)(c.mark((function t(n,r){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return t.abrupt("return",t.sent.invoke("executeGEOperation",{operation:n,parameters:o(r)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,n){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)(c.mark((function t(n,r){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,y("clip",[s(n),n,r]);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,n){return m.apply(this,arguments)}function m(){return(m=(0,u.Z)(c.mark((function t(n,r){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,y("cut",[s(n),n,r]);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,n){return y("contains",[s(t),t,n])}function b(t,n){return y("crosses",[s(t),t,n])}function g(t,n,r){return y("distance",[s(t),t,n,r])}function Z(t,n){return y("equals",[s(t),t,n])}function A(t,n){return y("intersects",[s(t),t,n])}function E(t,n){return y("touches",[s(t),t,n])}function S(t,n){return y("within",[s(t),t,n])}function z(t,n){return y("disjoint",[s(t),t,n])}function C(t,n){return y("overlaps",[s(t),t,n])}function D(t,n,r){return y("relate",[s(t),t,n,r])}function J(t){return y("isSimple",[s(t),t])}function N(t){return O.apply(this,arguments)}function O(){return(O=(0,u.Z)(c.mark((function t(n){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,y("simplify",[s(n),n]);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,n){return j.apply(this,arguments)}function j(){return(j=(0,u.Z)(c.mark((function t(n,r){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,y("difference",[s(n),n,r]);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(t,n){return L.apply(this,arguments)}function L(){return(L=(0,u.Z)(c.mark((function t(n,r){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,y("symmetricDifference",[s(n),n,r]);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(t,n){return U.apply(this,arguments)}function U(){return(U=(0,u.Z)(c.mark((function t(n,r){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,y("intersect",[s(n),n,r]);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(t){return B.apply(this,arguments)}function B(){return B=(0,u.Z)(c.mark((function t(n){var r,e,u=arguments;return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:null,e=p(n,r),t.t0=f,t.next=5,y("union",[s(e),e]);case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}function I(t,n,r,e,u,c){return K.apply(this,arguments)}function K(){return K=(0,u.Z)(c.mark((function t(n,r,e,u,i,a){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,y("offset",[s(n),n,r,e,u,i,a]);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)}))),K.apply(this,arguments)}function Q(t,n,r){return T.apply(this,arguments)}function T(){return T=(0,u.Z)(c.mark((function t(n,r,e){var u,i,a=arguments;return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=a.length>3&&void 0!==a[3]&&a[3],i=[s(n),n,r,e,u],t.t0=f,t.next=5,y("buffer",i);case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}function V(t,n,r,e,u,c){return Y.apply(this,arguments)}function Y(){return Y=(0,u.Z)(c.mark((function t(n,r,e,u,i,a){var o;return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=[s(n),n,r,e,u,i,a],t.t0=f,t.next=4,y("geodesicBuffer",o);case 4:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 6:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}function $(t){return"xmin"in t?t.center:"x"in t?t:t.extent.center}function F(t,n,r){return H.apply(this,arguments)}function H(){return H=(0,u.Z)(c.mark((function t(n,r,e){var u,i,a;return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=n){t.next=2;break}throw new Error("Illegal Argument Exception");case 2:return i=n.spatialReference,e=null!=(u=e)?u:$(n),t.t0=n.constructor,t.next=7,y("rotate",[i,n,r,e]);case 7:return t.t1=t.sent,a=t.t0.fromJSON.call(t.t0,t.t1),t.abrupt("return",(a.spatialReference=i,a));case 10:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}function M(t,n,r,e){return P.apply(this,arguments)}function P(){return P=(0,u.Z)(c.mark((function t(n,r,e,u){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,y("generalize",[s(n),n,r,e,u]);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function X(t,n,r){return _.apply(this,arguments)}function _(){return(_=(0,u.Z)(c.mark((function t(n,r,e){return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,y("densify",[s(n),n,r,e]);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function tt(t,n,r){return nt.apply(this,arguments)}function nt(){return nt=(0,u.Z)(c.mark((function t(n,r,e){var u,i=arguments;return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=i.length>3&&void 0!==i[3]?i[3]:0,t.t0=f,t.next=4,y("geodesicDensify",[s(n),n,r,e,u]);case 4:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 6:case"end":return t.stop()}}),t)}))),nt.apply(this,arguments)}function rt(t,n){return y("planarArea",[s(t),t,n])}function et(t,n){return y("planarLength",[s(t),t,n])}function ut(t,n,r){return y("geodesicArea",[s(t),t,n,r])}function ct(t,n,r){return y("geodesicLength",[s(t),t,n,r])}}}]);
//# sourceMappingURL=4178.9b30e2ed.chunk.js.map