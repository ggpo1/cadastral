"use strict";(self.webpackChunkcadastral=self.webpackChunkcadastral||[]).push([[2259],{43244:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(37762),n=i(15671),s=i(43144),a=i(92026),u=function(){function e(t){(0,n.Z)(this,e),this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}return(0,s.Z)(e,[{key:"entries",get:function(){return this._buffer}},{key:"enqueue",value:function(e){if(this.size===this.maxSize){var t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}},{key:"dequeue",value:function(){if(0===this.size)return null;var e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}},{key:"peek",value:function(){return 0===this.size?null:this._buffer[this._start]}},{key:"find",value:function(e){if(0===this.size)return null;var t,i=(0,r.Z)(this._buffer);try{for(i.s();!(t=i.n()).done;){var n=t.value;if((0,a.pC)(n)&&e(n))return n}}catch(s){i.e(s)}finally{i.f()}return null}},{key:"clear",value:function(e){for(var t=this.dequeue();(0,a.pC)(t);)e&&e(t),t=this.dequeue()}}]),e}()},84328:function(e,t,i){i.d(t,{_I:function(){return r},xp:function(){return a},PX:function(){return s},QS:function(){return l},KS:function(){return f},jL:function(){return o},vs:function(){return u},nE:function(){return h}});var r=8388607,n=8388608,s=0,a=1,u=function(e){return(e&n)>>>23},o=function(e){return e&r},f=function(e){return u(e)===a?254:255};function h(e){return u(e)===a}function l(e,t){return((t?n:0)|e)>>>0}},64668:function(e,t,i){i.d(t,{J:function(){return n},g:function(){return r}});var r=function(e,t){return e&&function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return t.warn.apply(t,["DEBUG:"].concat(i))}||function(){return null}},n=!1},40639:function(e,t,i){i.d(t,{Z:function(){return c}});var r=i(15671),n=i(43144),s=i(60136),a=i(29388),u=i(27366),o=i(41691),f=i(49861),h=(i(63780),i(93169),i(25243),i(69912)),l=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).tiles=new Map,n}return(0,n.Z)(i,[{key:"destroy",value:function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}},{key:"updating",get:function(){return this.isUpdating()}},{key:"acquireTile",value:function(e){var t=this,i=this.createTile(e);return i.once("isReady",(function(){return t.notifyChange("updating")})),this.tiles.set(e.id,i),i}},{key:"forceAttributeTextureUpload",value:function(){}},{key:"forEachTile",value:function(e){this.tiles.forEach(e)}},{key:"releaseTile",value:function(e){this.tiles.delete(e.key.id),this.disposeTile(e)}},{key:"isUpdating",value:function(){var e=!0;return this.tiles.forEach((function(t){e=e&&t.isReady})),!e}},{key:"setHighlight",value:function(){}},{key:"invalidateLabels",value:function(){}},{key:"requestUpdate",value:function(){this.layerView.requestUpdate()}}]),i}(o.r);(0,u._)([(0,f.Cb)()],l.prototype,"layer",void 0),(0,u._)([(0,f.Cb)()],l.prototype,"layerView",void 0),(0,u._)([(0,f.Cb)()],l.prototype,"tileInfoView",void 0),(0,u._)([(0,f.Cb)()],l.prototype,"updating",null);var c=l=(0,u._)([(0,h.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],l)},87347:function(e,t,i){i.r(t),i.d(t,{default:function(){return ee}});var r=i(15861),n=i(15671),s=i(43144),a=i(11752),u=i(61120),o=i(60136),f=i(29388),h=i(87757),l=i(27366),c=i(93169),d=i(66978),_=(i(32718),i(25243),i(63780),i(75366),i(69912)),y=i(65156),v=i(37762),p=i(43244),k=i(92026),g=i(22018),m=i(11245),x=i(88396),b=i(15245),w=i(80613),E=i(46640),C=i(98774),Z=4294967296,S=function(){function e(t){(0,n.Z)(this,e),this._head=t,this._cursor=t}return(0,s.Z)(e,[{key:"id",get:function(){return this._cursor.id}},{key:"baseZoom",get:function(){return this._cursor.baseZoom}},{key:"anchorX",get:function(){return this._cursor.anchorX}},{key:"anchorY",get:function(){return this._cursor.anchorY}},{key:"directionX",get:function(){return this._cursor.directionX}},{key:"directionY",get:function(){return this._cursor.directionY}},{key:"size",get:function(){return this._cursor.size}},{key:"materialKey",get:function(){return this._cursor.materialKey}},{key:"boundsCount",get:function(){return this._cursor.boundsCount}},{key:"computedMinZoom",value:function(){return this._cursor.computedMinZoom()}},{key:"setComputedMinZoom",value:function(e){return this._cursor.setComputedMinZoom(e)}},{key:"boundsComputedAnchorX",value:function(e){return this._cursor.boundsComputedAnchorX(e)}},{key:"boundsComputedAnchorY",value:function(e){return this._cursor.boundsComputedAnchorY(e)}},{key:"setBoundsComputedAnchorX",value:function(e,t){return this._cursor.setBoundsComputedAnchorX(e,t)}},{key:"setBoundsComputedAnchorY",value:function(e,t){return this._cursor.setBoundsComputedAnchorY(e,t)}},{key:"boundsX",value:function(e){return this._cursor.boundsX(e)}},{key:"boundsY",value:function(e){return this._cursor.boundsY(e)}},{key:"boundsWidth",value:function(e){return this._cursor.boundsWidth(e)}},{key:"boundsHeight",value:function(e){return this._cursor.boundsHeight(e)}},{key:"link",value:function(e){if((0,k.pC)(e._head))return this._cursor.link(e._head)}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var t,i=new e(null==(t=this._head)?void 0:t.copy());if(!i._head)return i;for(var r=i._head,n=i._head._link;n;)r._link=n.copy(),n=(r=n)._link;return i}},{key:"peekId",value:function(){var e;return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}},{key:"nextId",value:function(){for(var e=this.id;e===this.id;)if(!this.next())return!1;return!0}},{key:"save",value:function(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}},{key:"restore",value:function(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}},{key:"next",value:function(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}},{key:"lookup",value:function(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}},{key:"delete",value:function(e){for(var t=this._head,i=null;t;){if(t.delete(e))return t.isEmpty()&&(0,k.pC)(i)&&(i._link=t._link),!0;i=t,t=t._link}return!1}}],[{key:"from",value:function(t){return new e(T.from(new Float32Array(t)))}}]),e}(),T=function(){function e(t){(0,n.Z)(this,e),this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}return(0,s.Z)(e,[{key:"isEmpty",value:function(){return this._deletedCount===this.count}},{key:"count",get:function(){return this._count||(this._count=this._computeCount()),this._count}},{key:"id",get:function(){return this._buffer[this._offset+0]},set:function(e){this._buffer[this._offset+0]=e}},{key:"baseZoom",get:function(){return this._buffer[this._offset+1]}},{key:"anchorX",get:function(){return this._buffer[this._offset+2]}},{key:"anchorY",get:function(){return this._buffer[this._offset+3]}},{key:"directionX",get:function(){return this._buffer[this._offset+4]}},{key:"directionY",get:function(){return this._buffer[this._offset+5]}},{key:"size",get:function(){return this._buffer[this._offset+6]}},{key:"materialKey",get:function(){return this._buffer[this._offset+7]}},{key:"computedMinZoom",value:function(){return this._buffer[this._offset+8]}},{key:"setComputedMinZoom",value:function(e){this._buffer[this._offset+8]=e}},{key:"boundsCount",get:function(){return this._buffer[this._offset+9]}},{key:"boundsComputedAnchorX",value:function(e){return this._buffer[this._offset+10+6*e+0]}},{key:"boundsComputedAnchorY",value:function(e){return this._buffer[this._offset+10+6*e+1]}},{key:"setBoundsComputedAnchorX",value:function(e,t){this._buffer[this._offset+10+6*e+0]=t}},{key:"setBoundsComputedAnchorY",value:function(e,t){this._buffer[this._offset+10+6*e+1]=t}},{key:"boundsX",value:function(e){return this._buffer[this._offset+10+6*e+2]}},{key:"boundsY",value:function(e){return this._buffer[this._offset+10+6*e+3]}},{key:"boundsWidth",value:function(e){return this._buffer[this._offset+10+6*e+4]}},{key:"boundsHeight",value:function(e){return this._buffer[this._offset+10+6*e+5]}},{key:"link",value:function(e){for(var t=this;t._link;)t=t._link;t._link=e}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var t=new e(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}},{key:"peekId",value:function(){var e=this._offset+10+6*this.boundsCount+0;return e>=this._buffer.length?0:this._buffer[e]}},{key:"next",value:function(){for(var e=0;this._offset<this._buffer.length&&e++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,this.id===Z););return this.id!==Z&&this._offset<this._buffer.length}},{key:"delete",value:function(e){var t=this._offset,i=this.lookup(e);if(i)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===e;)this.id=4294967295,++this._deletedCount;return this._offset=t,i}},{key:"lookup",value:function(e){var t=this._offset;if((0,k.Wi)(this._offsets.instance)){this._offsets.instance=new Map;var i=this.copy();i._offset=-1;for(var r=0;i.next();)i.id!==r&&(this._offsets.instance.set(i.id,i._offset),r=i.id)}return!!this._offsets.instance.has(e)&&(this._offset=this._offsets.instance.get(e),this.id!==Z||(this._offset=t,!1))}},{key:"_computeCount",value:function(){var e=this._offset,t=0;for(this._offset=-1;this.next();)t++;return this._offset=e,t}}],[{key:"from",value:function(t){return new e(new Float32Array(t))}}]),e}(),V=function(){function e(t){if((0,n.Z)(this,e),Array.isArray(t)){this.data=t[0];for(var i=this,r=1;r<t.length;r++)i.next=new e([t[r]]),i=i.next}else this.data=t}return(0,s.Z)(e,[{key:"values",value:h.mark((function e(){var t;return h.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this;case 1:if(!t){e.next=7;break}return e.next=4,t.data;case 4:t=t.next;case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e,this)}))},{key:"forEach",value:function(e){for(var t=this;t;)e(t.data),t=t.next}},{key:"find",value:function(e){var t;return e(this.data)?this:null==(t=this.next)?void 0:t.find(e)}},{key:"max",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=e(this.data)>e(t.data)?this:t;return this.next?this.next.max(e,i):i}},{key:"remove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this===e?t?(t.next=this.next,t):this.next:this.next.remove(e,this)}},{key:"last",get:function(){return this.next?this.next.last:this}}]),e}(),B=function(){function e(t){(0,n.Z)(this,e),this._head=null,(0,k.Wi)(t)||(this._head=new V(t))}return(0,s.Z)(e,[{key:"head",get:function(){return this._head}},{key:"maxAvailableSpace",value:function(){if((0,k.Wi)(this._head))return 0;var e=this._head.max((function(e){return e.end-e.start}));return e.data.end-e.data.start}},{key:"firstFit",value:function(e){if((0,k.Wi)(this._head))return null;for(var t=null,i=this._head;i;){var r=i.data.end-i.data.start;if(r===e)return t?t.next=i.next:this._head=i.next,i.data.start;if(r>e){var n=i.data.start;return i.data.start+=e,n}t=i,i=i.next}return null}},{key:"free",value:function(e,t){var i=e+t;if((0,k.Wi)(this._head)){var r=new V({start:e,end:i});this._head=r}else{if(i<=this._head.data.start){if(i===this._head.data.start)return void(this._head.data.start-=t);var n=new V({start:e,end:i});return n.next=this._head,void(this._head=n)}for(var s=this._head,a=s.next;a;){if(a.data.start>=i){if(s.data.end===e){if(s.data.end+=t,s.data.end===a.data.start){var u=a.data.end-a.data.start;return s.data.end+=u,void(s.next=a.next)}return}if(a.data.start===i)return void(a.data.start-=t);var o=new V({start:e,end:i});return o.next=s.next,void(s.next=o)}s=a,a=a.next}if(e!==s.data.end){var f=new V({start:e,end:i});s.next=f}else s.data.end+=t}}}]),e}(),L=function(){function e(t,i,r,s,a){(0,n.Z)(this,e),this.target=t,this.geometryType=i,this.materialKey=r,this.indexFrom=s,this.indexCount=a}return(0,s.Z)(e,[{key:"indexEnd",get:function(){return this.indexFrom+this.indexCount}},{key:"extend",value:function(e){this.indexCount+=e}},{key:"draw",value:function(e,t,i){this.target.draw(e,t,i,this.indexFrom,this.indexCount)}}]),e}(),A=function(){function e(t,i){(0,n.Z)(this,e),this.geometryType=0,this._target=t,this.geometryType=i}return(0,s.Z)(e,[{key:"addRecord",value:function(e){var t=this._target,i=this.geometryType,r=e.materialKey,n=e.indexFrom,s=e.indexCount;if((0,k.Wi)(this._head)){var a=new L(t,i,r,n,s);this._head=new V(a)}else{for(var u=null,o=this._head;o;){if(n<o.data.indexFrom)return this._insert(r,n,s,u,o);u=o,o=o.next}this._insert(r,n,s,u,null)}}},{key:"forEach",value:function(e){(0,k.pC)(this._head)&&this._head.forEach(e)}},{key:"infos",value:h.mark((function e(){var t,i,r;return h.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,k.pC)(this._head)){e.next=18;break}t=(0,v.Z)(this._head.values()),e.prev=2,t.s();case 4:if((i=t.n()).done){e.next=10;break}return r=i.value,e.next=8,r;case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),t.e(e.t0);case 15:return e.prev=15,t.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[2,12,15,18]])}))},{key:"_insert",value:function(e,t,i,r,n){if((0,k.Wi)(r)&&(0,k.Wi)(n)){var s=new L(this._target,this.geometryType,e,t,i);this._head=new V(s)}return(0,k.Wi)(r)&&(0,k.pC)(n)?this._insertAtHead(e,t,i,n):(0,k.pC)(r)&&(0,k.Wi)(n)?this._insertAtEnd(e,t,i,r):(0,k.pC)(r)&&(0,k.pC)(n)?this._insertAtMiddle(e,t,i,r,n):void 0}},{key:"_insertAtHead",value:function(e,t,i,r){var n=t+i;if(e===r.data.materialKey&&n===r.data.indexFrom)r.data.indexFrom=t,r.data.indexCount+=i;else{var s=new L(this._target,this.geometryType,e,t,i);this._head=new V(s),this._head.next=r}}},{key:"_insertAtEnd",value:function(e,t,i,r){if(r.data.materialKey===e&&r.data.indexEnd===t)r.data.indexCount+=i;else{var n=new L(this._target,this.geometryType,e,t,i),s=new V(n);r.next=s}}},{key:"_insertAtMiddle",value:function(e,t,i,r,n){var s=t+i;if(r.data.materialKey===e&&r.data.indexEnd===t)r.data.indexCount+=i,r.data.materialKey===n.data.materialKey&&r.data.indexEnd===n.data.indexFrom&&(r.data.indexCount+=n.data.indexCount,r.next=n.next);else if(e===n.data.materialKey&&s===n.data.indexFrom)n.data.indexFrom=t,n.data.indexCount+=i;else{var a=new L(this._target,this.geometryType,e,t,i),u=new V(a);r.next=u,u.next=n}}}],[{key:"from",value:function(t,i,r,n){var s=new e(t,i);if((0,k.pC)(n)){var a,u=(0,v.Z)(n);try{for(u.s();!(a=u.n()).done;){var o=a.value;r.seekIndex(o),s.addRecord(r)}}catch(f){u.e(f)}finally{u.f()}}else for(;r.next();)s.addRecord(r);return s}}]),e}(),M=i(44070),U=(i(53634),i(37825),i(8548),i(3667),i(51378),i(45412)),I=(0,c.Z)("esri-2d-log-allocations"),R=function(){function e(t){(0,n.Z)(this,e),this._array=t}return(0,s.Z)(e,[{key:"array",get:function(){return this._array}},{key:"length",get:function(){return this._array.length}},{key:"expand",value:function(e){var t=F.acquire(e);t.set(this._array),F.release(this._array),this._array=t}},{key:"destroy",value:function(){F.release(this._array)}},{key:"set",value:function(e,t){this._array.set(e._array,t)}},{key:"slice",value:function(){var t=F.acquire(this._array.byteLength);return t.set(this._array),new e(t)}}],[{key:"create",value:function(t){return new e(F.acquire(t))}}]),e}(),P=function(){function e(){(0,n.Z)(this,e),this._data=new ArrayBuffer(e.BYTE_LENGTH),this._freeList=new B({start:0,end:this._data.byteLength})}return(0,s.Z)(e,[{key:"buffer",get:function(){return this._data}},{key:"allocate",value:function(e){var t=this._freeList.firstFit(e);return(0,k.Wi)(t)?null:new Uint32Array(this._data,t,e/Uint32Array.BYTES_PER_ELEMENT)}},{key:"free",value:function(e){this._freeList.free(e.byteOffset,e.byteLength)}}],[{key:"BYTE_LENGTH",get:function(){return 64e6}}]),e}(),z=function(){function e(){(0,n.Z)(this,e),this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}return(0,s.Z)(e,[{key:"_bytesTotal",get:function(){return this._pages.length*P.BYTE_LENGTH}},{key:"acquire",value:function(e){if(this._bytesAllocated+=e,I&&console.log("Allocating ".concat(e,", (").concat(this._bytesAllocated," / ").concat(this._bytesTotal,")")),e>P.BYTE_LENGTH)return new Uint32Array(e/Uint32Array.BYTES_PER_ELEMENT);var t,i=(0,v.Z)(this._pages);try{for(i.s();!(t=i.n()).done;){var r=t.value.allocate(e);if((0,k.pC)(r))return r}}catch(n){i.e(n)}finally{i.f()}return(0,k.s3)(this._addPage().allocate(e),"Expected to allocate page")}},{key:"release",value:function(e){this._bytesAllocated-=e.byteLength,I&&console.log("Freeing ".concat(e.byteLength,", (").concat(this._bytesAllocated," / ").concat(this._bytesTotal,")"));var t=this._pagesByBuffer.get(e.buffer);t&&t.free(e)}},{key:"_addPage",value:function(){var e=new P;return this._pages.push(e),this._pagesByBuffer.set(e.buffer,e),e}}]),e}(),F=new z,q=function(){function e(t,i,r){(0,n.Z)(this,e);var s=R.create(i*r*Uint32Array.BYTES_PER_ELEMENT);this.strideInt=r,this.bufferType=t,this.dirty={start:1/0,end:0},this.gpu=null,this._cpu=s,this.clear()}return(0,s.Z)(e,[{key:"elementSize",get:function(){return this._cpu.length/this.strideInt}},{key:"destroy",value:function(){(0,k.Po)(this.gpu,(function(e){return e.dispose()})),(0,k.Po)(this._cpu,(function(e){return e.destroy()})),(0,k.Po)(this._cpu2,(function(e){return e.destroy()}))}},{key:"clear",value:function(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new B({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}},{key:"ensure",value:function(e){if(!(this.maxAvailableSpace()>=e)&&e*this.strideInt>this._cpu.length-this.fillPointer){(0,k.pC)(this.gpu)&&(this.gpu=null);var t=this._cpu.length/this.strideInt,i=Math.round(1.25*(t+e)),r=i*this.strideInt;this._cpu.expand(r*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(t,i-t)}}},{key:"set",value:function(e,t){this._cpu.array[e]!==t&&(this._cpu.array[e]=t,this.dirty.start=Math.min(e,this.dirty.start),this.dirty.end=Math.max(e,this.dirty.end))}},{key:"getBuffer",value:function(){if(!this._cpu2){var e=this._cpu.slice();this._cpu2=e}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}},{key:"bufferSize",get:function(){return this._cpu.length/this.strideInt}},{key:"maxAvailableSpace",value:function(){return this.freeList.maxAvailableSpace()}},{key:"insert",value:function(e,t,i,r){var n=i*this.strideInt,s=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=new Uint32Array(e,s,n),u=(0,k.s3)(this.freeList.firstFit(i),"First fit region must be defined")*this.strideInt,o=n,f=u/this.strideInt-t;if(0!==r)for(var h=0;h<a.length;h++)a[h]+=r;return this._cpu.array.set(a,u),this.dirty.start=Math.min(this.dirty.start,u),this.dirty.end=Math.max(this.dirty.end,u+o),this.fillPointer=Math.max(this.fillPointer,u+o),f}},{key:"free",value:function(e,t,i){var r=e*this.strideInt,n=(e+t)*this.strideInt;if(!0===i)for(var s=e;s!==e+t;s++)this._cpu.array[s*this.strideInt]=2147450879;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,n),this.freeList.free(e,t)}},{key:"upload",value:function(e){if(this.dirty.end){if((0,k.Wi)(this.gpu))return this.gpu=this._createBuffer(e),this.dirty.start=1/0,void(this.dirty.end=0);this.gpu.setSubDataFromView(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}},{key:"_createBuffer",value:function(e){return"index"===this.bufferType?M.Z.createIndex(e,35048,this._cpu.array):M.Z.createVertex(e,35048,this._cpu.array)}}]),e}(),W=i(50477),Y=function(){function e(t,i){(0,n.Z)(this,e),this._indicesInvalid=!1,this.geometryType=t}return(0,s.Z)(e,[{key:"destroy",value:function(){this._vao&&(this._vao.dispose(),this._vao=null),this._indexBuffer&&this._indexBuffer.destroy(),this._vertexBuffer&&this._vertexBuffer.destroy()}},{key:"insert",value:function(e,t,i){if(e.records.byteLength){var r=e.stride;if(this._vertexBuffer&&this._indexBuffer){var n=e.indices.byteLength/4,s=e.vertices.byteLength/r;this._indexBuffer.ensure(n),this._vertexBuffer.ensure(s);var a=e.vertices,u=e.indices,o=W.$.from(e.records),f=this._vertexBuffer.insert(a,0,a.byteLength/r,0),h=this._indexBuffer.insert(u,0,u.byteLength/4,f);if(o.forEach((function(e){e.indexFrom+=h,e.vertexFrom+=f})),(0,k.s3)(this._records,"Expected records to be defined").link(o),t)this._indicesInvalid=!0;else if(this._displayList)for(var l=o.getCursor();l.next();)this._displayList.addRecord(l)}else{var c=e.indices.byteLength/4,d=e.vertices.byteLength/r,_=r/Uint32Array.BYTES_PER_ELEMENT;this._records=W.$.from(e.records),this._indexBuffer=new q("index",c,1),this._vertexBuffer=new q("vertex",d,_),this._indexBuffer.insert(e.indices,0,e.indices.byteLength/4,0),this._vertexBuffer.insert(e.vertices,0,e.vertices.byteLength/r,0),t&&(this._indicesInvalid=!0)}}}},{key:"remove",value:function(e){if(!(0,k.Wi)(this._records)){var t,i=(0,v.Z)(e);try{for(i.s();!(t=i.n()).done;){var r=t.value,n=this._records.getCursor();if(n.lookup(r)){for(var s=n.indexFrom,a=n.vertexFrom,u=n.indexCount,o=n.vertexCount;n.next()&&n.id===r;)u+=n.indexCount,o+=n.vertexCount;this._indexBuffer.free(s,u),this._vertexBuffer.free(a,o,!0),this._records.delete(r)}}}catch(f){i.e(f)}finally{i.f()}}}},{key:"draw",value:function(e,t,i,r,n){if(this._vertexBuffer&&this._indexBuffer&&!(0,k.Wi)(this._records)){if(((0,k.Wi)(this._vertexBuffer.gpu)||(0,k.Wi)(this._indexBuffer.gpu))&&(this._vao&&(this._vao.dispose(),this._vao=null),this._vertexBuffer.gpu=null,this._indexBuffer.gpu=null),this._vertexBuffer.upload(e),this._indexBuffer.upload(e),!this._vao){var s=this._vertexBuffer.gpu,a=this._indexBuffer.gpu;if(!a||!s)return;this._vao=new U.Z(e,i,t,{geometry:s},a)}var u=this._vao,o=r*Uint32Array.BYTES_PER_ELEMENT;e.bindVAO(u),e.drawElements(4,n,5125,o)}}},{key:"forEachCommand",value:function(e){if(!(0,k.Wi)(this._records)){if(this._sortIndices(this._records),!this._displayList){var t=this._cursorIndexOrder;this._displayList=A.from(this,this.geometryType,this._records.getCursor(),t)}this._displayList.forEach(e)}}},{key:"_sortIndices",value:function(e){if(this._indicesInvalid){this._indicesInvalid=!1;for(var t=0,i=e.getCursor(),r=this._indexBuffer.getBuffer(),n=[],s=[],a=[];i.next();)s.push(i.index),a.push(i.sortKey),n.push(i.id);s.sort((function(e,t){var i=a[t],r=a[e];return r===i?n[t]-n[e]:i-r}));for(var u=e.getCursor(),o=0,f=s;o<f.length;o++){var h=f[o];if(!u.seekIndex(h))throw new Error("Expected to find index");var l=u.indexFrom,c=u.indexCount;u.indexFrom=t;for(var d=0;d<c;d++)this._indexBuffer.set(t++,r.array[l+d])}this._cursorIndexOrder=s,this._displayList=null}}}]),e}(),X=0,D=function(e){(0,o.Z)(i,e);var t=(0,f.Z)(i);function i(e,r,s,a,u){var o;return(0,n.Z)(this,i),(o=t.call(this,e,r,s)).instanceId=X++,o.patchCount=0,o._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},o._patches=new p.Z(100),o._bufferPatches=new p.Z(100),o._lastCommitTime=0,o._lastMessageWasClear=!1,o.transforms.labelMat2d=(0,m.c)(),o._store=a,o._requestLabelUpdate=u,o}return(0,s.Z)(i,[{key:"destroy",value:function(){(0,a.Z)((0,u.Z)(i.prototype),"destroy",this).call(this),this._renderState.current.geometry.forEach((function(e){return e.destroy()}))}},{key:"labelMetrics",get:function(){return this._renderState.current.metrics}},{key:"hasData",get:function(){return!!this._renderState.current.geometry.size}},{key:"getGeometry",value:function(e){return this._renderState.current.geometry.get(e)}},{key:"setTransform",value:function(e,t){(0,a.Z)((0,u.Z)(i.prototype),"setTransform",this).call(this,e,t);var r=this.transforms.labelMat2d,n=e.getScreenTransform(r,t),s=(0,b.c)();(0,x.t)(s,[this.x,this.y],n),(0,g.i)(r),(0,g.t)(r,r,s),(0,g.m)(r,e.viewMat2d,r)}},{key:"patch",value:function(e,t){if(this.patchCount++,!e.clear||!this._lastMessageWasClear){this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=50&&this._dropPatches();var i=e,r=i.addOrUpdate&&this.key.id!==i.addOrUpdate.tileKeyOrigin;t&&r?this._bufferPatches.enqueue(i):(i.sort=i.sort&&!t,this._patches.enqueue(i)),this.requestRender()}}},{key:"commit",value:function(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(var t=0;t<4;t++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}},{key:"lock",value:function(){this._renderState.locked=!0}},{key:"unlock",value:function(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}},{key:"_swapRenderStates",value:function(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=8,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}},{key:"_swap",value:function(){this._renderState.swap&&(this._renderState.swap=!1,(0,k.pC)(this._renderState.next)&&(this._renderState.current.geometry.forEach((function(e){return e.destroy()})),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}},{key:"_flushUpdates",value:function(){for(var e=this._patches.maxSize;this._patches.size&&e--;)this._updateMesh(),this._swap()}},{key:"_updateBufferMesh",value:function(){var e=this._bufferPatches.peek();if(!(0,k.pC)(e)||!e.clear||null===this._renderState.next)for(;this._bufferPatches.size;){var t=this._bufferPatches.dequeue();(0,k.pC)(t)&&this._patchBuffer(t)}}},{key:"_updateMesh",value:function(){var e=this._patches.peek();if(!(0,k.pC)(e)||!e.clear||null===this._renderState.next){var t=this._patches.dequeue();if((0,k.pC)(t)){if(!0===t.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(t),t.end&&(this.ready(),this._swapRenderStates())}}}},{key:"_patch",value:function(e){var t=this;(0,E.Z_)((function(i){t._remove(i,e.remove),t._insert(i,e,!1)}))}},{key:"_patchBuffer",value:function(e){var t=this;(0,E.Z_)((function(i){t._insert(i,e,!0)}))}},{key:"_insert",value:function(e,t,i){try{var r,n=(0,k.Pt)(this._renderState.next,this._renderState.current),s=null==(r=t.addOrUpdate)?void 0:r.data[e],a=n.geometry;if((0,k.Wi)(s))return;a.has(e)||a.set(e,new Y(e,this.stage)),a.get(e).insert(s,t.sort,i),e===w.LW.LABEL&&this._insertLabelMetrics(t.type,s.metrics,t.clear)}catch(L){}}},{key:"_insertLabelMetrics",value:function(e,t,i){var r=(0,k.Pt)(this._renderState.next,this._renderState.current);if(!(0,k.Wi)(t)){var n=S.from(t);if((0,k.Wi)(r.metrics))r.metrics=n;else{if("update"===e)for(var s=n.getCursor();s.next();)r.metrics.delete(s.id);r.metrics.link(n)}}}},{key:"_remove",value:function(e,t){var i=(0,k.Pt)(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&i&&(i.remove(t),this._removeLabelMetrics(t))}},{key:"_removeLabelMetrics",value:function(e){var t=(0,k.Pt)(this._renderState.next,this._renderState.current).metrics;if(!(0,k.Wi)(t)&&e.length){var i,r=(0,v.Z)(e);try{for(r.s();!(i=r.n()).done;)for(var n=i.value;t.delete(n););}catch(s){r.e(s)}finally{r.f()}}}},{key:"_dropPatches",value:function(){for(var e=this,t=new Array,i=!1;this._patches.size;){var r=this._patches.dequeue();if((0,k.Wi)(r))break;if(r.clear){if(i)break;i=!0}t.push(r)}this._patches.clear(),t.forEach((function(t){return e._patches.enqueue(t)}))}}]),i}(C.o),K=i(65760),H=i(40639),N=i(98290),O=i(93433),G=i(37826),j=i(80391),$=(0,c.Z)("featurelayer-order-by-server-enabled"),J=function(e){(0,o.Z)(i,e);var t=(0,f.Z)(i);function i(e,r,s,a){var u;return(0,n.Z)(this,i),(u=t.call(this,e))._pointToCallbacks=new Map,u._layer=s,u._layerView=r,u._onUpdate=a,u}return(0,s.Z)(i,[{key:"renderChildren",value:function(e){this.attributeView.update(),this.hasAnimation&&e.painter.effects.integrate.draw(e,e.attributeView),(0,a.Z)((0,u.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"hasEmptyAttributeView",value:function(){return this.attributeView.isEmpty()}},{key:"isUpdating",value:function(){return this.attributeView.isUpdating()}},{key:"hitTest",value:function(e){var t=(0,d.hh)();return this._pointToCallbacks.set(e,t),this.requestRender(),t.promise}},{key:"onTileData",value:function(e,t){var i=$&&"orderBy"in this._layer&&this._layer.orderBy,r=(null==i?void 0:i.length)&&!i[0].valueExpression&&i[0].field,n=i&&this._layerView.orderByFields===r;e.patch(t,n),this.contains(e)||this.addChild(e),this.requestRender()}},{key:"onTileError",value:function(e){this.contains(e)||this.addChild(e)}},{key:"updateTransitionProperties",value:function(e,t){(0,a.Z)((0,u.Z)(i.prototype),"updateTransitionProperties",this).call(this,e,t),this._layerView.featureEffectView.transitionStep(e,t),this._layerView.featureEffectView.transitioning&&this.requestRender()}},{key:"doRender",value:function(e){var t=this._layer,r=t.minScale,n=t.maxScale,s=e.state.scale;s<=(r||1/0)&&s>=n&&(0,a.Z)((0,u.Z)(i.prototype),"doRender",this).call(this,e)}},{key:"onAttributeStoreUpdate",value:function(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}},{key:"hasAnimation",get:function(){return this.hasLabels}},{key:"hasLabels",get:function(){if("sublayers"in this._layer)return this._layer.sublayers.some((function(e){return e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible}));var e=this._layer.featureReduction,t=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}},{key:"prepareRenderPasses",value:function(e){var t=this,r=e.registerRenderPass({name:"label",brushes:[G.U.label],target:function(){return t.hasLabels?t.children:null},drawPhase:w.jx.LABEL|w.jx.LABEL_ALPHA}),n=e.registerRenderPass({name:"geometry",brushes:[G.U.fill,G.U.line,G.U.marker,G.U.text],target:function(){return t.children},enableDefaultDraw:function(){return!t._layerView.featureEffectView.hasEffects},effects:[{apply:e.effects.outsideEffect,enable:function(){return t._layerView.featureEffectView.hasEffects},args:function(){return t._layerView.featureEffectView.excludedEffects}},{apply:e.effects.insideEffect,enable:function(){return t._layerView.featureEffectView.hasEffects},args:function(){return t._layerView.featureEffectView.includedEffects}},{apply:e.effects.hittest,enable:function(){return!!t._pointToCallbacks.size},args:function(){return t._pointToCallbacks}}]}),s=e.registerRenderPass({name:"highlight",brushes:[G.U.fill,G.U.line,G.U.marker,G.U.text],target:function(){return t.children},drawPhase:w.jx.HIGHLIGHT,enableDefaultDraw:function(){return!1},effects:[{apply:e.effects.highlight,enable:function(){return!!t._layerView.hasHighlight()}}]});return[].concat((0,O.Z)((0,a.Z)((0,u.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[n,s,r])}}]),i}(j.T),Q=function(e){(0,o.Z)(i,e);var t=(0,f.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,s.Z)(i,[{key:"install",value:function(e){var t=this,i=new J(this.tileInfoView,this.layerView,this.layer,(function(){return t.notifyChange("updating")}));this.featuresView=i,e.addChild(i)}},{key:"uninstall",value:function(e){e.removeChild(this.featuresView),this.featuresView.destroy()}},{key:"fetchResource",value:function(e,t){var i=e.url,r=this.featuresView.stage;try{return r.resourceManager.fetchResource(i,{signal:t.signal})}catch(A){return(0,d.D_)(A)?Promise.resolve({width:0,height:0}):Promise.reject(A)}}},{key:"isUpdating",value:function(){var e,t=(0,a.Z)((0,u.Z)(i.prototype),"isUpdating",this).call(this),r=!this.featuresView||this.featuresView.isUpdating(),n=null==(e=this.featuresView)?void 0:e.hasEmptyAttributeView(),s=t||r||t&&n;return(0,c.Z)("esri-2d-log-updating")&&console.log("Updating SymbolTileRenderer ".concat(s,"\n  -> updatingTiles ").concat(t,"\n  -> hasFeaturesView ").concat(!!this.featuresView,"\n  -> updatingFeaturesView ").concat(r)),s}},{key:"hitTest",value:function(e){return this.featuresView.hitTest(e)}},{key:"supportsRenderer",value:function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}},{key:"onConfigUpdate",value:function(e){var t=null;if("visualVariables"in e){var i=((0,K.a)(e).visualVariables||[]).map((function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=(0,N.I)(i)}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect)}},{key:"onTileData",value:function(e){var t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}},{key:"onTileError",value:function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}},{key:"forceAttributeTextureUpload",value:function(){this.featuresView.attributeView.forceTextureUpload()}},{key:"lockGPUUploads",value:function(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((function(e){return e.lock()}))}},{key:"unlockGPUUploads",value:function(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((function(e){return e.unlock()}))}},{key:"getMaterialItems",value:function(){var e=(0,r.Z)(h.mark((function e(t){return h.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.featuresView.getMaterialItems(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"invalidateLabels",value:function(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}},{key:"createTile",value:function(e){var t=this,i=this.tileInfoView.getTileBounds((0,y.Ue)(),e);return new D(e,i[0],i[3],this.featuresView.attributeView,(function(){return t.layerView.view.labelManager.requestUpdate()}))}},{key:"disposeTile",value:function(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}}]),i}(H.Z),ee=Q=(0,l._)([(0,_.j)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],Q)},98290:function(e,t,i){i.d(t,{I:function(){return y},qc:function(){return l}});var r=i(1413),n=i(37762),s=i(92026),a=i(17842),u=i(65800),o=i(94109),f=i(80613),h=i(18745);function l(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function c(e){return e.map((function(e){return function(e){return{value:e.value,size:(0,a.t_)(e.size)}}(e)}))}function d(e){if("string"==typeof e||"number"==typeof e)return(0,a.t_)(e);var t=e;return{type:"size",expression:t.expression,stops:c(t.stops)}}var _=function(e){for(var t=[],i=[],r=c(e),n=r.length,s=0;s<6;s++){var u=r[Math.min(s,n-1)];t.push(u.value),i.push(null==u.size?o.AI:(0,a.F2)(u.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}};function y(e){var t=e&&e.length>0?{}:null,i=t?{}:null;if(!t)return{vvFields:t,vvRanges:i};var s,a=(0,n.Z)(e);try{for(a.s();!(s=a.n()).done;){var u=s.value;if(u.field&&(t[u.type]=u.field),"size"===u.type){i.size||(i.size={});var o=u;switch((0,h.a)(o)){case f.X.SIZE_MINMAX_VALUE:i.size.minMaxValue={minDataValue:o.minDataValue,maxDataValue:o.maxDataValue,minSize:d(o.minSize),maxSize:d(o.maxSize)};break;case f.X.SIZE_SCALE_STOPS:i.size.scaleStops={stops:c(o.stops)};break;case f.X.SIZE_FIELD_STOPS:if(o.levels){var l={};for(var y in o.levels)l[y]=_(o.levels[y]);i.size.fieldStops={type:"level-dependent",levels:l}}else i.size.fieldStops=(0,r.Z)({type:"static"},_(o.stops));break;case f.X.SIZE_UNIT_VALUE:i.size.unitValue={unit:o.valueUnit,valueRepresentation:o.valueRepresentation}}}else if("color"===u.type)i.color=k(u);else if("opacity"===u.type)i.opacity=v(u);else if("rotation"===u.type){var p=u;i.rotation={type:p.rotationType}}}}catch(g){a.e(g)}finally{a.f()}return{vvFields:t,vvRanges:i}}function v(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;for(var i=e.stops,r=0;r<8;++r){var n=i[Math.min(r,i.length-1)];t.values[r]=n.value,t.opacities[r]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var s=e.stops&&e.stops.length>=0&&e.stops[0].opacity,a=0;a<8;a++)t.values[a]=1/0,t.opacities[a]=s}return t}function p(e,t,i){e[4*t+0]=i.r/255,e[4*t+1]=i.g/255,e[4*t+2]=i.b/255,e[4*t+3]=i.a}function k(e){if((0,s.Wi)(e))return null;if(e.normalizationField)return null;var t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;t.field=e.field;for(var i=e.stops,r=0;r<8;++r){var n=i[Math.min(r,i.length-1)];t.values[r]=n.value,p(t.colors,r,n.color)}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var a=e.stops&&e.stops.length>=0&&e.stops[0].color,o=0;o<8;o++)t.values[o]=1/0,p(t.colors,o,a)}for(var f=0;f<32;f+=4)(0,u.pr)(t.colors,f,!0);return t}}}]);
//# sourceMappingURL=2259.fc2cc21b.chunk.js.map