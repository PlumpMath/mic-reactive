// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('mic_reactive.engine_interface');
goog.require('cljs.core');
mic_reactive.engine_interface.b4w_modules = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$constraints,cljs.core.cst$kw$hmd,cljs.core.cst$kw$rgba,cljs.core.cst$kw$anchors,cljs.core.cst$kw$transform,cljs.core.cst$kw$gp_DASH_conf,cljs.core.cst$kw$preloader,cljs.core.cst$kw$nla,cljs.core.cst$kw$objects,cljs.core.cst$kw$config,cljs.core.cst$kw$screenshooter,cljs.core.cst$kw$logic_DASH_nodes,cljs.core.cst$kw$assets,cljs.core.cst$kw$mat3,cljs.core.cst$kw$vec3,cljs.core.cst$kw$time,cljs.core.cst$kw$util,cljs.core.cst$kw$rgb,cljs.core.cst$kw$armature,cljs.core.cst$kw$mouse,cljs.core.cst$kw$controls,cljs.core.cst$kw$debug,cljs.core.cst$kw$hud,cljs.core.cst$kw$geometry,cljs.core.cst$kw$vec4,cljs.core.cst$kw$physics,cljs.core.cst$kw$ns_DASH_compat,cljs.core.cst$kw$npc_DASH_ai,cljs.core.cst$kw$gyroscope,cljs.core.cst$kw$scenes,cljs.core.cst$kw$camera_anim,cljs.core.cst$kw$material,cljs.core.cst$kw$container,cljs.core.cst$kw$lights,cljs.core.cst$kw$app,cljs.core.cst$kw$mat4,cljs.core.cst$kw$camera,cljs.core.cst$kw$storage,cljs.core.cst$kw$tsr,cljs.core.cst$kw$textures,cljs.core.cst$kw$hmd_DASH_conf,cljs.core.cst$kw$input,cljs.core.cst$kw$version,cljs.core.cst$kw$main,cljs.core.cst$kw$sfx,cljs.core.cst$kw$particles,cljs.core.cst$kw$mixer,cljs.core.cst$kw$math,cljs.core.cst$kw$quat,cljs.core.cst$kw$data],["constraints","hmd","rgba","anchors","transform","gp_conf","preloader","nla","objects","config","screenshooter","logic_nodes","assets","mat3","vec3","time","util","rgb","armature","mouse","controls","debug","hud","geometry","vec4","physics","ns_compat","npc_ai","gyroscope","scenes","camera_anim","material","container","lights","app","mat4","camera","storage","tsr","textures","hmd_conf","input","version","main","sfx","particles","mixer","math","quat","data"]);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mic_reactive.engine_interface.b4wData = (function (json,canvas,__meta,__extmap,__hash){
this.json = json;
this.canvas = canvas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
mic_reactive.engine_interface.b4wData.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7913__auto__,k__7914__auto__){
var self__ = this;
var this__7913__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7913__auto____$1,k__7914__auto__,null);
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7915__auto__,k17793,else__7916__auto__){
var self__ = this;
var this__7915__auto____$1 = this;
var G__17795 = (((k17793 instanceof cljs.core.Keyword))?k17793.fqn:null);
switch (G__17795) {
case "json":
return self__.json;

break;
case "canvas":
return self__.canvas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17793,else__7916__auto__);

}
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7927__auto__,writer__7928__auto__,opts__7929__auto__){
var self__ = this;
var this__7927__auto____$1 = this;
var pr_pair__7930__auto__ = ((function (this__7927__auto____$1){
return (function (keyval__7931__auto__){
return cljs.core.pr_sequential_writer(writer__7928__auto__,cljs.core.pr_writer,""," ","",opts__7929__auto__,keyval__7931__auto__);
});})(this__7927__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7928__auto__,pr_pair__7930__auto__,"#mic-reactive.engine-interface.b4wData{",", ","}",opts__7929__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$json,self__.json],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$canvas,self__.canvas],null))], null),self__.__extmap));
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$IIterable$ = true;

mic_reactive.engine_interface.b4wData.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17792){
var self__ = this;
var G__17792__$1 = this;
return (new cljs.core.RecordIter((0),G__17792__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$json,cljs.core.cst$kw$canvas], null),cljs.core._iterator(self__.__extmap)));
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7911__auto__){
var self__ = this;
var this__7911__auto____$1 = this;
return self__.__meta;
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7907__auto__){
var self__ = this;
var this__7907__auto____$1 = this;
return (new mic_reactive.engine_interface.b4wData(self__.json,self__.canvas,self__.__meta,self__.__extmap,self__.__hash));
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7917__auto__){
var self__ = this;
var this__7917__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7908__auto__){
var self__ = this;
var this__7908__auto____$1 = this;
var h__7680__auto__ = self__.__hash;
if(!((h__7680__auto__ == null))){
return h__7680__auto__;
} else {
var h__7680__auto____$1 = cljs.core.hash_imap(this__7908__auto____$1);
self__.__hash = h__7680__auto____$1;

return h__7680__auto____$1;
}
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7909__auto__,other__7910__auto__){
var self__ = this;
var this__7909__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7231__auto__ = other__7910__auto__;
if(cljs.core.truth_(and__7231__auto__)){
var and__7231__auto____$1 = (this__7909__auto____$1.constructor === other__7910__auto__.constructor);
if(and__7231__auto____$1){
return cljs.core.equiv_map(this__7909__auto____$1,other__7910__auto__);
} else {
return and__7231__auto____$1;
}
} else {
return and__7231__auto__;
}
})())){
return true;
} else {
return false;
}
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7922__auto__,k__7923__auto__){
var self__ = this;
var this__7922__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$canvas,null,cljs.core.cst$kw$json,null], null), null),k__7923__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7922__auto____$1),self__.__meta),k__7923__auto__);
} else {
return (new mic_reactive.engine_interface.b4wData(self__.json,self__.canvas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7923__auto__)),null));
}
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7920__auto__,k__7921__auto__,G__17792){
var self__ = this;
var this__7920__auto____$1 = this;
var pred__17796 = cljs.core.keyword_identical_QMARK_;
var expr__17797 = k__7921__auto__;
if(cljs.core.truth_((function (){var G__17799 = cljs.core.cst$kw$json;
var G__17800 = expr__17797;
return (pred__17796.cljs$core$IFn$_invoke$arity$2 ? pred__17796.cljs$core$IFn$_invoke$arity$2(G__17799,G__17800) : pred__17796.call(null,G__17799,G__17800));
})())){
return (new mic_reactive.engine_interface.b4wData(G__17792,self__.canvas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17801 = cljs.core.cst$kw$canvas;
var G__17802 = expr__17797;
return (pred__17796.cljs$core$IFn$_invoke$arity$2 ? pred__17796.cljs$core$IFn$_invoke$arity$2(G__17801,G__17802) : pred__17796.call(null,G__17801,G__17802));
})())){
return (new mic_reactive.engine_interface.b4wData(self__.json,G__17792,self__.__meta,self__.__extmap,null));
} else {
return (new mic_reactive.engine_interface.b4wData(self__.json,self__.canvas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7921__auto__,G__17792),null));
}
}
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7925__auto__){
var self__ = this;
var this__7925__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$json,self__.json],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$canvas,self__.canvas],null))], null),self__.__extmap));
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7912__auto__,G__17792){
var self__ = this;
var this__7912__auto____$1 = this;
return (new mic_reactive.engine_interface.b4wData(self__.json,self__.canvas,G__17792,self__.__extmap,self__.__hash));
});

mic_reactive.engine_interface.b4wData.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7918__auto__,entry__7919__auto__){
var self__ = this;
var this__7918__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7919__auto__)){
return cljs.core._assoc(this__7918__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7919__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7919__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7918__auto____$1,entry__7919__auto__);
}
});

mic_reactive.engine_interface.b4wData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$json,cljs.core.cst$sym$canvas], null);
});

mic_reactive.engine_interface.b4wData.cljs$lang$type = true;

mic_reactive.engine_interface.b4wData.cljs$lang$ctorPrSeq = (function (this__7949__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"mic-reactive.engine-interface/b4wData");
});

mic_reactive.engine_interface.b4wData.cljs$lang$ctorPrWriter = (function (this__7949__auto__,writer__7950__auto__){
return cljs.core._write(writer__7950__auto__,"mic-reactive.engine-interface/b4wData");
});

mic_reactive.engine_interface.__GT_b4wData = (function mic_reactive$engine_interface$__GT_b4wData(json,canvas){
return (new mic_reactive.engine_interface.b4wData(json,canvas,null,null,null));
});

mic_reactive.engine_interface.map__GT_b4wData = (function mic_reactive$engine_interface$map__GT_b4wData(G__17794){
return (new mic_reactive.engine_interface.b4wData(cljs.core.cst$kw$json.cljs$core$IFn$_invoke$arity$1(G__17794),cljs.core.cst$kw$canvas.cljs$core$IFn$_invoke$arity$1(G__17794),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17794,cljs.core.cst$kw$json,cljs.core.array_seq([cljs.core.cst$kw$canvas], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mic_reactive.engine_interface.SensorManifold = (function (one_obj_QMARK_,id,control_type,fn_arr,custom_fn,__meta,__extmap,__hash){
this.one_obj_QMARK_ = one_obj_QMARK_;
this.id = id;
this.control_type = control_type;
this.fn_arr = fn_arr;
this.custom_fn = custom_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7913__auto__,k__7914__auto__){
var self__ = this;
var this__7913__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7913__auto____$1,k__7914__auto__,null);
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7915__auto__,k17805,else__7916__auto__){
var self__ = this;
var this__7915__auto____$1 = this;
var G__17807 = (((k17805 instanceof cljs.core.Keyword))?k17805.fqn:null);
switch (G__17807) {
case "one-obj?":
return self__.one_obj_QMARK_;

break;
case "id":
return self__.id;

break;
case "control-type":
return self__.control_type;

break;
case "fn-arr":
return self__.fn_arr;

break;
case "custom-fn":
return self__.custom_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17805,else__7916__auto__);

}
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7927__auto__,writer__7928__auto__,opts__7929__auto__){
var self__ = this;
var this__7927__auto____$1 = this;
var pr_pair__7930__auto__ = ((function (this__7927__auto____$1){
return (function (keyval__7931__auto__){
return cljs.core.pr_sequential_writer(writer__7928__auto__,cljs.core.pr_writer,""," ","",opts__7929__auto__,keyval__7931__auto__);
});})(this__7927__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7928__auto__,pr_pair__7930__auto__,"#mic-reactive.engine-interface.SensorManifold{",", ","}",opts__7929__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$one_DASH_obj_QMARK_,self__.one_obj_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$control_DASH_type,self__.control_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn_DASH_arr,self__.fn_arr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$custom_DASH_fn,self__.custom_fn],null))], null),self__.__extmap));
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$IIterable$ = true;

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17804){
var self__ = this;
var G__17804__$1 = this;
return (new cljs.core.RecordIter((0),G__17804__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$one_DASH_obj_QMARK_,cljs.core.cst$kw$id,cljs.core.cst$kw$control_DASH_type,cljs.core.cst$kw$fn_DASH_arr,cljs.core.cst$kw$custom_DASH_fn], null),cljs.core._iterator(self__.__extmap)));
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7911__auto__){
var self__ = this;
var this__7911__auto____$1 = this;
return self__.__meta;
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7907__auto__){
var self__ = this;
var this__7907__auto____$1 = this;
return (new mic_reactive.engine_interface.SensorManifold(self__.one_obj_QMARK_,self__.id,self__.control_type,self__.fn_arr,self__.custom_fn,self__.__meta,self__.__extmap,self__.__hash));
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7917__auto__){
var self__ = this;
var this__7917__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7908__auto__){
var self__ = this;
var this__7908__auto____$1 = this;
var h__7680__auto__ = self__.__hash;
if(!((h__7680__auto__ == null))){
return h__7680__auto__;
} else {
var h__7680__auto____$1 = cljs.core.hash_imap(this__7908__auto____$1);
self__.__hash = h__7680__auto____$1;

return h__7680__auto____$1;
}
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7909__auto__,other__7910__auto__){
var self__ = this;
var this__7909__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7231__auto__ = other__7910__auto__;
if(cljs.core.truth_(and__7231__auto__)){
var and__7231__auto____$1 = (this__7909__auto____$1.constructor === other__7910__auto__.constructor);
if(and__7231__auto____$1){
return cljs.core.equiv_map(this__7909__auto____$1,other__7910__auto__);
} else {
return and__7231__auto____$1;
}
} else {
return and__7231__auto__;
}
})())){
return true;
} else {
return false;
}
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7922__auto__,k__7923__auto__){
var self__ = this;
var this__7922__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$control_DASH_type,null,cljs.core.cst$kw$fn_DASH_arr,null,cljs.core.cst$kw$custom_DASH_fn,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$one_DASH_obj_QMARK_,null], null), null),k__7923__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7922__auto____$1),self__.__meta),k__7923__auto__);
} else {
return (new mic_reactive.engine_interface.SensorManifold(self__.one_obj_QMARK_,self__.id,self__.control_type,self__.fn_arr,self__.custom_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7923__auto__)),null));
}
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7920__auto__,k__7921__auto__,G__17804){
var self__ = this;
var this__7920__auto____$1 = this;
var pred__17808 = cljs.core.keyword_identical_QMARK_;
var expr__17809 = k__7921__auto__;
if(cljs.core.truth_((function (){var G__17811 = cljs.core.cst$kw$one_DASH_obj_QMARK_;
var G__17812 = expr__17809;
return (pred__17808.cljs$core$IFn$_invoke$arity$2 ? pred__17808.cljs$core$IFn$_invoke$arity$2(G__17811,G__17812) : pred__17808.call(null,G__17811,G__17812));
})())){
return (new mic_reactive.engine_interface.SensorManifold(G__17804,self__.id,self__.control_type,self__.fn_arr,self__.custom_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17813 = cljs.core.cst$kw$id;
var G__17814 = expr__17809;
return (pred__17808.cljs$core$IFn$_invoke$arity$2 ? pred__17808.cljs$core$IFn$_invoke$arity$2(G__17813,G__17814) : pred__17808.call(null,G__17813,G__17814));
})())){
return (new mic_reactive.engine_interface.SensorManifold(self__.one_obj_QMARK_,G__17804,self__.control_type,self__.fn_arr,self__.custom_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17815 = cljs.core.cst$kw$control_DASH_type;
var G__17816 = expr__17809;
return (pred__17808.cljs$core$IFn$_invoke$arity$2 ? pred__17808.cljs$core$IFn$_invoke$arity$2(G__17815,G__17816) : pred__17808.call(null,G__17815,G__17816));
})())){
return (new mic_reactive.engine_interface.SensorManifold(self__.one_obj_QMARK_,self__.id,G__17804,self__.fn_arr,self__.custom_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17817 = cljs.core.cst$kw$fn_DASH_arr;
var G__17818 = expr__17809;
return (pred__17808.cljs$core$IFn$_invoke$arity$2 ? pred__17808.cljs$core$IFn$_invoke$arity$2(G__17817,G__17818) : pred__17808.call(null,G__17817,G__17818));
})())){
return (new mic_reactive.engine_interface.SensorManifold(self__.one_obj_QMARK_,self__.id,self__.control_type,G__17804,self__.custom_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17819 = cljs.core.cst$kw$custom_DASH_fn;
var G__17820 = expr__17809;
return (pred__17808.cljs$core$IFn$_invoke$arity$2 ? pred__17808.cljs$core$IFn$_invoke$arity$2(G__17819,G__17820) : pred__17808.call(null,G__17819,G__17820));
})())){
return (new mic_reactive.engine_interface.SensorManifold(self__.one_obj_QMARK_,self__.id,self__.control_type,self__.fn_arr,G__17804,self__.__meta,self__.__extmap,null));
} else {
return (new mic_reactive.engine_interface.SensorManifold(self__.one_obj_QMARK_,self__.id,self__.control_type,self__.fn_arr,self__.custom_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7921__auto__,G__17804),null));
}
}
}
}
}
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7925__auto__){
var self__ = this;
var this__7925__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$one_DASH_obj_QMARK_,self__.one_obj_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$control_DASH_type,self__.control_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn_DASH_arr,self__.fn_arr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$custom_DASH_fn,self__.custom_fn],null))], null),self__.__extmap));
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7912__auto__,G__17804){
var self__ = this;
var this__7912__auto____$1 = this;
return (new mic_reactive.engine_interface.SensorManifold(self__.one_obj_QMARK_,self__.id,self__.control_type,self__.fn_arr,self__.custom_fn,G__17804,self__.__extmap,self__.__hash));
});

mic_reactive.engine_interface.SensorManifold.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7918__auto__,entry__7919__auto__){
var self__ = this;
var this__7918__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7919__auto__)){
return cljs.core._assoc(this__7918__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7919__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7919__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7918__auto____$1,entry__7919__auto__);
}
});

mic_reactive.engine_interface.SensorManifold.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$one_DASH_obj_QMARK_,cljs.core.cst$sym$id,cljs.core.cst$sym$control_DASH_type,cljs.core.cst$sym$fn_DASH_arr,cljs.core.cst$sym$custom_DASH_fn], null);
});

mic_reactive.engine_interface.SensorManifold.cljs$lang$type = true;

mic_reactive.engine_interface.SensorManifold.cljs$lang$ctorPrSeq = (function (this__7949__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"mic-reactive.engine-interface/SensorManifold");
});

mic_reactive.engine_interface.SensorManifold.cljs$lang$ctorPrWriter = (function (this__7949__auto__,writer__7950__auto__){
return cljs.core._write(writer__7950__auto__,"mic-reactive.engine-interface/SensorManifold");
});

mic_reactive.engine_interface.__GT_SensorManifold = (function mic_reactive$engine_interface$__GT_SensorManifold(one_obj_QMARK_,id,control_type,fn_arr,custom_fn){
return (new mic_reactive.engine_interface.SensorManifold(one_obj_QMARK_,id,control_type,fn_arr,custom_fn,null,null,null));
});

mic_reactive.engine_interface.map__GT_SensorManifold = (function mic_reactive$engine_interface$map__GT_SensorManifold(G__17806){
return (new mic_reactive.engine_interface.SensorManifold(cljs.core.cst$kw$one_DASH_obj_QMARK_.cljs$core$IFn$_invoke$arity$1(G__17806),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__17806),cljs.core.cst$kw$control_DASH_type.cljs$core$IFn$_invoke$arity$1(G__17806),cljs.core.cst$kw$fn_DASH_arr.cljs$core$IFn$_invoke$arity$1(G__17806),cljs.core.cst$kw$custom_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__17806),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17806,cljs.core.cst$kw$one_DASH_obj_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$control_DASH_type,cljs.core.cst$kw$fn_DASH_arr,cljs.core.cst$kw$custom_DASH_fn], 0)),null));
});

mic_reactive.engine_interface.enter_b4w_data = (function mic_reactive$engine_interface$enter_b4w_data(json,canvas){

return mic_reactive.engine_interface.__GT_b4wData(json,canvas);
});
mic_reactive.engine_interface.enter_sensor_manifold_data = (function mic_reactive$engine_interface$enter_sensor_manifold_data(one_obj_QMARK_,id,control_type,fn_arr,custom_fn){

return mic_reactive.engine_interface.__GT_SensorManifold(one_obj_QMARK_,id,control_type,fn_arr,custom_fn);
});
mic_reactive.engine_interface.load_b4w_module = (function mic_reactive$engine_interface$load_b4w_module(m_name){
var mod = (m_name.cljs$core$IFn$_invoke$arity$1 ? m_name.cljs$core$IFn$_invoke$arity$1(mic_reactive.engine_interface.b4w_modules) : m_name.call(null,mic_reactive.engine_interface.b4w_modules));
if(cljs.core.truth_(mod)){
return b4w.require(mod);
} else {
throw (function (){var G__17823 = [cljs.core.str("B4w module "),cljs.core.str(m_name),cljs.core.str(" does not exist.")].join('');
return Error(G__17823);
})();
}
});
mic_reactive.engine_interface.init_b4w = (function mic_reactive$engine_interface$init_b4w(var_args){
var args17824 = [];
var len__8426__auto___17829 = arguments.length;
var i__8427__auto___17830 = (0);
while(true){
if((i__8427__auto___17830 < len__8426__auto___17829)){
args17824.push((arguments[i__8427__auto___17830]));

var G__17831 = (i__8427__auto___17830 + (1));
i__8427__auto___17830 = G__17831;
continue;
} else {
}
break;
}

var G__17828 = args17824.length;
switch (G__17828) {
case 0:
return mic_reactive.engine_interface.init_b4w.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__8449__auto__ = (new cljs.core.IndexedSeq(args17824.slice((1)),(0),null));
return mic_reactive.engine_interface.init_b4w.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8449__auto__);

}
});

mic_reactive.engine_interface.init_b4w.cljs$core$IFn$_invoke$arity$0 = (function (){
throw (new Error("load a b4w scene: b4wData record needed for minimal start."));
});

mic_reactive.engine_interface.init_b4w.cljs$core$IFn$_invoke$arity$variadic = (function (load_data,sensors_arg){
if(cljs.core.truth_((function (){var and__7231__auto__ = cljs.core.cst$kw$json.cljs$core$IFn$_invoke$arity$1(load_data);
if(cljs.core.truth_(and__7231__auto__)){
return cljs.core.cst$kw$canvas.cljs$core$IFn$_invoke$arity$1(load_data);
} else {
return and__7231__auto__;
}
})())){
var data = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$data);
var main = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$main);
if((cljs.core.count(sensors_arg) > (0))){
var stageload_cb = ((function (data,main){
return (function mic_reactive$engine_interface$stageload_cb(data_id,success){
if(cljs.core.truth_(data.is_primary_loaded())){
var sensor_17833 = cljs.core.first(sensors_arg);
var manifold_17834 = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$controls).create_sensor_manifold(cljs.core.cst$kw$one_DASH_obj_QMARK_.cljs$core$IFn$_invoke$arity$1(sensor_17833),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(sensor_17833),cljs.core.cst$kw$control_DASH_type.cljs$core$IFn$_invoke$arity$1(sensor_17833),cljs.core.cst$kw$fn_DASH_arr.cljs$core$IFn$_invoke$arity$1(sensor_17833),cljs.core.cst$kw$custom_DASH_fn.cljs$core$IFn$_invoke$arity$1(sensor_17833));
} else {
}


return success;
});})(data,main))
;
var loaded_cb = ((function (data,main){
return (function mic_reactive$engine_interface$loaded_cb(data_id,success){
cljs.core.List.EMPTY;


return success;
});})(data,main))
;
data.load(cljs.core.cst$kw$json.cljs$core$IFn$_invoke$arity$1(load_data),loaded_cb,stageload_cb,true,false);

return main.init(cljs.core.cst$kw$canvas.cljs$core$IFn$_invoke$arity$1(load_data));
} else {
data.load(cljs.core.cst$kw$json.cljs$core$IFn$_invoke$arity$1(load_data));

return main.init(cljs.core.cst$kw$canvas.cljs$core$IFn$_invoke$arity$1(load_data));
}
} else {
return null;
}
});

mic_reactive.engine_interface.init_b4w.cljs$lang$applyTo = (function (seq17825){
var G__17826 = cljs.core.first(seq17825);
var seq17825__$1 = cljs.core.next(seq17825);
return mic_reactive.engine_interface.init_b4w.cljs$core$IFn$_invoke$arity$variadic(G__17826,seq17825__$1);
});

mic_reactive.engine_interface.init_b4w.cljs$lang$maxFixedArity = (1);

