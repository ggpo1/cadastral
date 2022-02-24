"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[2170,2463],{92463:function(e,n,r){r.r(n),r.d(n,{hydratedAdapter:function(){return c}});var t=r(53866),i=r(77577),a=r(7882),u=r(80885),o=r(29909),c={convertToGEGeometry:function(e,n){if(null==n)return null;var r="cache"in n?n.cache._geVersion:void 0;return null==r&&(r=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=r)),r},exportPoint:function(e,n,r){var t=e.hasZ(n),i=e.hasM(n),u=new a.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:r});return t&&(u.z=e.getPointZ(n)),i&&(u.m=e.getPointM(n)),u.cache._geVersion=n,u},exportPolygon:function(e,n,r){var t=new u.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:r});return t.cache._geVersion=n,t},exportPolyline:function(e,n,r){var t=new o.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:r});return t.cache._geVersion=n,t},exportMultipoint:function(e,n,r){var t=new i.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:r});return t.cache._geVersion=n,t},exportExtent:function(e,n,r){var i=e.hasZ(n),a=e.hasM(n),u=new t.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:r});if(i){var o=e.getZExtent(n);u.zmin=o.vmin,u.zmax=o.vmax}if(a){var c=e.getMExtent(n);u.mmin=c.vmin,u.mmax=c.vmax}return u.cache._geVersion=n,u}}},2170:function(e,n,r){r.r(n),r.d(n,{buffer:function(){return V},clip:function(){return o},contains:function(){return f},convexHull:function(){return m},crosses:function(){return d},cut:function(){return c},densify:function(){return H},difference:function(){return w},disjoint:function(){return y},distance:function(){return l},equals:function(){return s},extendedSpatialReferenceInfo:function(){return u},flipHorizontal:function(){return k},flipVertical:function(){return C},generalize:function(){return D},geodesicArea:function(){return O},geodesicBuffer:function(){return P},geodesicDensify:function(){return J},geodesicLength:function(){return X},intersect:function(){return M},intersects:function(){return p},isSimple:function(){return G},nearestCoordinate:function(){return I},nearestVertex:function(){return S},nearestVertices:function(){return z},offset:function(){return Z},overlaps:function(){return A},planarArea:function(){return L},planarLength:function(){return N},relate:function(){return v},rotate:function(){return b},simplify:function(){return x},symmetricDifference:function(){return E},touches:function(){return h},union:function(){return R},within:function(){return g}});var t=r(99058),i=r(92463);function a(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function u(e){return t.G.extendedSpatialReferenceInfo(e)}function o(e,n){return t.G.clip(i.hydratedAdapter,a(e),e,n)}function c(e,n){return t.G.cut(i.hydratedAdapter,a(e),e,n)}function f(e,n){return t.G.contains(i.hydratedAdapter,a(e),e,n)}function d(e,n){return t.G.crosses(i.hydratedAdapter,a(e),e,n)}function l(e,n,r){return t.G.distance(i.hydratedAdapter,a(e),e,n,r)}function s(e,n){return t.G.equals(i.hydratedAdapter,a(e),e,n)}function p(e,n){return t.G.intersects(i.hydratedAdapter,a(e),e,n)}function h(e,n){return t.G.touches(i.hydratedAdapter,a(e),e,n)}function g(e,n){return t.G.within(i.hydratedAdapter,a(e),e,n)}function y(e,n){return t.G.disjoint(i.hydratedAdapter,a(e),e,n)}function A(e,n){return t.G.overlaps(i.hydratedAdapter,a(e),e,n)}function v(e,n,r){return t.G.relate(i.hydratedAdapter,a(e),e,n,r)}function G(e){return t.G.isSimple(i.hydratedAdapter,a(e),e)}function x(e){return t.G.simplify(i.hydratedAdapter,a(e),e)}function m(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.G.convexHull(i.hydratedAdapter,a(e),e,n)}function w(e,n){return t.G.difference(i.hydratedAdapter,a(e),e,n)}function E(e,n){return t.G.symmetricDifference(i.hydratedAdapter,a(e),e,n)}function M(e,n){return t.G.intersect(i.hydratedAdapter,a(e),e,n)}function R(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.G.union(i.hydratedAdapter,a(e),e,n)}function Z(e,n,r,u,o,c){return t.G.offset(i.hydratedAdapter,a(e),e,n,r,u,o,c)}function V(e,n,r){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.G.buffer(i.hydratedAdapter,a(e),e,n,r,u)}function P(e,n,r,u,o,c){return t.G.geodesicBuffer(i.hydratedAdapter,a(e),e,n,r,u,o,c)}function I(e,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.G.nearestCoordinate(i.hydratedAdapter,a(e),e,n,r)}function S(e,n){return t.G.nearestVertex(i.hydratedAdapter,a(e),e,n)}function z(e,n,r,u){return t.G.nearestVertices(i.hydratedAdapter,a(e),e,n,r,u)}function _(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function b(e,n,r){var i;if(null==e)throw new Error("Illegal Argument Exception");var a=e.spatialReference;if(null==(r=null!=(i=r)?i:_(e)))throw new Error("Illegal Argument Exception");var u=e.constructor.fromJSON(t.G.rotate(e,n,r));return u.spatialReference=a,u}function k(e,n){var r;if(null==e)throw new Error("Illegal Argument Exception");var i=e.spatialReference;if(null==(n=null!=(r=n)?r:_(e)))throw new Error("Illegal Argument Exception");var a=e.constructor.fromJSON(t.G.flipHorizontal(e,n));return a.spatialReference=i,a}function C(e,n){var r;if(null==e)throw new Error("Illegal Argument Exception");var i=e.spatialReference;if(null==(n=null!=(r=n)?r:_(e)))throw new Error("Illegal Argument Exception");var a=e.constructor.fromJSON(t.G.flipVertical(e,n));return a.spatialReference=i,a}function D(e,n,r,u){return t.G.generalize(i.hydratedAdapter,a(e),e,n,r,u)}function H(e,n,r){return t.G.densify(i.hydratedAdapter,a(e),e,n,r)}function J(e,n,r){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.G.geodesicDensify(i.hydratedAdapter,a(e),e,n,r,u)}function L(e,n){return t.G.planarArea(i.hydratedAdapter,a(e),e,n)}function N(e,n){return t.G.planarLength(i.hydratedAdapter,a(e),e,n)}function O(e,n,r){return t.G.geodesicArea(i.hydratedAdapter,a(e),e,n,r)}function X(e,n,r){return t.G.geodesicLength(i.hydratedAdapter,a(e),e,n,r)}}}]);
//# sourceMappingURL=2170.429573a7.chunk.js.map