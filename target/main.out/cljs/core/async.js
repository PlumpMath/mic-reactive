// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14982 = [];
var len__8426__auto___14988 = arguments.length;
var i__8427__auto___14989 = (0);
while(true){
if((i__8427__auto___14989 < len__8426__auto___14988)){
args14982.push((arguments[i__8427__auto___14989]));

var G__14990 = (i__8427__auto___14989 + (1));
i__8427__auto___14989 = G__14990;
continue;
} else {
}
break;
}

var G__14984 = args14982.length;
switch (G__14984) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14982.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14985 = (function (f,blockable,meta14986){
this.f = f;
this.blockable = blockable;
this.meta14986 = meta14986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14987,meta14986__$1){
var self__ = this;
var _14987__$1 = this;
return (new cljs.core.async.t_cljs$core$async14985(self__.f,self__.blockable,meta14986__$1));
});

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14987){
var self__ = this;
var _14987__$1 = this;
return self__.meta14986;
});

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14986], null);
});

cljs.core.async.t_cljs$core$async14985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14985";

cljs.core.async.t_cljs$core$async14985.cljs$lang$ctorPrWriter = (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async14985");
});

cljs.core.async.__GT_t_cljs$core$async14985 = (function cljs$core$async$__GT_t_cljs$core$async14985(f__$1,blockable__$1,meta14986){
return (new cljs.core.async.t_cljs$core$async14985(f__$1,blockable__$1,meta14986));
});

}

return (new cljs.core.async.t_cljs$core$async14985(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14994 = [];
var len__8426__auto___14997 = arguments.length;
var i__8427__auto___14998 = (0);
while(true){
if((i__8427__auto___14998 < len__8426__auto___14997)){
args14994.push((arguments[i__8427__auto___14998]));

var G__14999 = (i__8427__auto___14998 + (1));
i__8427__auto___14998 = G__14999;
continue;
} else {
}
break;
}

var G__14996 = args14994.length;
switch (G__14996) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14994.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args15001 = [];
var len__8426__auto___15004 = arguments.length;
var i__8427__auto___15005 = (0);
while(true){
if((i__8427__auto___15005 < len__8426__auto___15004)){
args15001.push((arguments[i__8427__auto___15005]));

var G__15006 = (i__8427__auto___15005 + (1));
i__8427__auto___15005 = G__15006;
continue;
} else {
}
break;
}

var G__15003 = args15001.length;
switch (G__15003) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15001.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args15008 = [];
var len__8426__auto___15011 = arguments.length;
var i__8427__auto___15012 = (0);
while(true){
if((i__8427__auto___15012 < len__8426__auto___15011)){
args15008.push((arguments[i__8427__auto___15012]));

var G__15013 = (i__8427__auto___15012 + (1));
i__8427__auto___15012 = G__15013;
continue;
} else {
}
break;
}

var G__15010 = args15008.length;
switch (G__15010) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15008.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15015 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15015) : fn1.call(null,val_15015));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15015,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15015) : fn1.call(null,val_15015));
});})(val_15015,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args15016 = [];
var len__8426__auto___15019 = arguments.length;
var i__8427__auto___15020 = (0);
while(true){
if((i__8427__auto___15020 < len__8426__auto___15019)){
args15016.push((arguments[i__8427__auto___15020]));

var G__15021 = (i__8427__auto___15020 + (1));
i__8427__auto___15020 = G__15021;
continue;
} else {
}
break;
}

var G__15018 = args15016.length;
switch (G__15018) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15016.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6726__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6726__auto__)){
var ret = temp__6726__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6726__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__6726__auto__)){
var retb = temp__6726__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__6726__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__6726__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8256__auto___15023 = n;
var x_15024 = (0);
while(true){
if((x_15024 < n__8256__auto___15023)){
(a[x_15024] = (0));

var G__15025 = (x_15024 + (1));
x_15024 = G__15025;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15026 = (i + (1));
i = G__15026;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15030 = (function (alt_flag,flag,meta15031){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15031 = meta15031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15032,meta15031__$1){
var self__ = this;
var _15032__$1 = this;
return (new cljs.core.async.t_cljs$core$async15030(self__.alt_flag,self__.flag,meta15031__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15032){
var self__ = this;
var _15032__$1 = this;
return self__.meta15031;
});})(flag))
;

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15030.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15031], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15030";

cljs.core.async.t_cljs$core$async15030.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async15030");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15030 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15030(alt_flag__$1,flag__$1,meta15031){
return (new cljs.core.async.t_cljs$core$async15030(alt_flag__$1,flag__$1,meta15031));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15030(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15036 = (function (alt_handler,flag,cb,meta15037){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15037 = meta15037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15038,meta15037__$1){
var self__ = this;
var _15038__$1 = this;
return (new cljs.core.async.t_cljs$core$async15036(self__.alt_handler,self__.flag,self__.cb,meta15037__$1));
});

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15038){
var self__ = this;
var _15038__$1 = this;
return self__.meta15037;
});

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15037], null);
});

cljs.core.async.t_cljs$core$async15036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15036";

cljs.core.async.t_cljs$core$async15036.cljs$lang$ctorPrWriter = (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async15036");
});

cljs.core.async.__GT_t_cljs$core$async15036 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15036(alt_handler__$1,flag__$1,cb__$1,meta15037){
return (new cljs.core.async.t_cljs$core$async15036(alt_handler__$1,flag__$1,cb__$1,meta15037));
});

}

return (new cljs.core.async.t_cljs$core$async15036(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15039_SHARP_){
var G__15043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15039_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15043) : fret.call(null,G__15043));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15040_SHARP_){
var G__15044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15040_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15044) : fret.call(null,G__15044));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__7243__auto__ = wport;
if(cljs.core.truth_(or__7243__auto__)){
return or__7243__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15045 = (i + (1));
i = G__15045;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7243__auto__ = ret;
if(cljs.core.truth_(or__7243__auto__)){
return or__7243__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__6728__auto__ = (function (){var and__7231__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7231__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7231__auto__;
}
})();
if(cljs.core.truth_(temp__6728__auto__)){
var got = temp__6728__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8433__auto__ = [];
var len__8426__auto___15051 = arguments.length;
var i__8427__auto___15052 = (0);
while(true){
if((i__8427__auto___15052 < len__8426__auto___15051)){
args__8433__auto__.push((arguments[i__8427__auto___15052]));

var G__15053 = (i__8427__auto___15052 + (1));
i__8427__auto___15052 = G__15053;
continue;
} else {
}
break;
}

var argseq__8434__auto__ = ((((1) < args__8433__auto__.length))?(new cljs.core.IndexedSeq(args__8433__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8434__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15048){
var map__15049 = p__15048;
var map__15049__$1 = ((((!((map__15049 == null)))?((((map__15049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15049):map__15049);
var opts = map__15049__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15046){
var G__15047 = cljs.core.first(seq15046);
var seq15046__$1 = cljs.core.next(seq15046);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15047,seq15046__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args15054 = [];
var len__8426__auto___15104 = arguments.length;
var i__8427__auto___15105 = (0);
while(true){
if((i__8427__auto___15105 < len__8426__auto___15104)){
args15054.push((arguments[i__8427__auto___15105]));

var G__15106 = (i__8427__auto___15105 + (1));
i__8427__auto___15105 = G__15106;
continue;
} else {
}
break;
}

var G__15056 = args15054.length;
switch (G__15056) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15054.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14923__auto___15108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___15108){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___15108){
return (function (state_15080){
var state_val_15081 = (state_15080[(1)]);
if((state_val_15081 === (7))){
var inst_15076 = (state_15080[(2)]);
var state_15080__$1 = state_15080;
var statearr_15082_15109 = state_15080__$1;
(statearr_15082_15109[(2)] = inst_15076);

(statearr_15082_15109[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (1))){
var state_15080__$1 = state_15080;
var statearr_15083_15110 = state_15080__$1;
(statearr_15083_15110[(2)] = null);

(statearr_15083_15110[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (4))){
var inst_15059 = (state_15080[(7)]);
var inst_15059__$1 = (state_15080[(2)]);
var inst_15060 = (inst_15059__$1 == null);
var state_15080__$1 = (function (){var statearr_15084 = state_15080;
(statearr_15084[(7)] = inst_15059__$1);

return statearr_15084;
})();
if(cljs.core.truth_(inst_15060)){
var statearr_15085_15111 = state_15080__$1;
(statearr_15085_15111[(1)] = (5));

} else {
var statearr_15086_15112 = state_15080__$1;
(statearr_15086_15112[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (13))){
var state_15080__$1 = state_15080;
var statearr_15087_15113 = state_15080__$1;
(statearr_15087_15113[(2)] = null);

(statearr_15087_15113[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (6))){
var inst_15059 = (state_15080[(7)]);
var state_15080__$1 = state_15080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15080__$1,(11),to,inst_15059);
} else {
if((state_val_15081 === (3))){
var inst_15078 = (state_15080[(2)]);
var state_15080__$1 = state_15080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15080__$1,inst_15078);
} else {
if((state_val_15081 === (12))){
var state_15080__$1 = state_15080;
var statearr_15088_15114 = state_15080__$1;
(statearr_15088_15114[(2)] = null);

(statearr_15088_15114[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (2))){
var state_15080__$1 = state_15080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15080__$1,(4),from);
} else {
if((state_val_15081 === (11))){
var inst_15069 = (state_15080[(2)]);
var state_15080__$1 = state_15080;
if(cljs.core.truth_(inst_15069)){
var statearr_15089_15115 = state_15080__$1;
(statearr_15089_15115[(1)] = (12));

} else {
var statearr_15090_15116 = state_15080__$1;
(statearr_15090_15116[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (9))){
var state_15080__$1 = state_15080;
var statearr_15091_15117 = state_15080__$1;
(statearr_15091_15117[(2)] = null);

(statearr_15091_15117[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (5))){
var state_15080__$1 = state_15080;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15092_15118 = state_15080__$1;
(statearr_15092_15118[(1)] = (8));

} else {
var statearr_15093_15119 = state_15080__$1;
(statearr_15093_15119[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (14))){
var inst_15074 = (state_15080[(2)]);
var state_15080__$1 = state_15080;
var statearr_15094_15120 = state_15080__$1;
(statearr_15094_15120[(2)] = inst_15074);

(statearr_15094_15120[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (10))){
var inst_15066 = (state_15080[(2)]);
var state_15080__$1 = state_15080;
var statearr_15095_15121 = state_15080__$1;
(statearr_15095_15121[(2)] = inst_15066);

(statearr_15095_15121[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15081 === (8))){
var inst_15063 = cljs.core.async.close_BANG_(to);
var state_15080__$1 = state_15080;
var statearr_15096_15122 = state_15080__$1;
(statearr_15096_15122[(2)] = inst_15063);

(statearr_15096_15122[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___15108))
;
return ((function (switch__14755__auto__,c__14923__auto___15108){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_15100 = [null,null,null,null,null,null,null,null];
(statearr_15100[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_15100[(1)] = (1));

return statearr_15100;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_15080){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15080);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15101){if((e15101 instanceof Object)){
var ex__14759__auto__ = e15101;
var statearr_15102_15123 = state_15080;
(statearr_15102_15123[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15080);

return cljs.core.cst$kw$recur;
} else {
throw e15101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15124 = state_15080;
state_15080 = G__15124;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_15080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_15080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___15108))
})();
var state__14925__auto__ = (function (){var statearr_15103 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___15108);

return statearr_15103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___15108))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15312){
var vec__15313 = p__15312;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15313,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15313,(1),null);
var job = vec__15313;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14923__auto___15499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___15499,res,vec__15313,v,p,job,jobs,results){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___15499,res,vec__15313,v,p,job,jobs,results){
return (function (state_15320){
var state_val_15321 = (state_15320[(1)]);
if((state_val_15321 === (1))){
var state_15320__$1 = state_15320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15320__$1,(2),res,v);
} else {
if((state_val_15321 === (2))){
var inst_15317 = (state_15320[(2)]);
var inst_15318 = cljs.core.async.close_BANG_(res);
var state_15320__$1 = (function (){var statearr_15322 = state_15320;
(statearr_15322[(7)] = inst_15317);

return statearr_15322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15320__$1,inst_15318);
} else {
return null;
}
}
});})(c__14923__auto___15499,res,vec__15313,v,p,job,jobs,results))
;
return ((function (switch__14755__auto__,c__14923__auto___15499,res,vec__15313,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0 = (function (){
var statearr_15326 = [null,null,null,null,null,null,null,null];
(statearr_15326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__);

(statearr_15326[(1)] = (1));

return statearr_15326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1 = (function (state_15320){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15320);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15327){if((e15327 instanceof Object)){
var ex__14759__auto__ = e15327;
var statearr_15328_15500 = state_15320;
(statearr_15328_15500[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15320);

return cljs.core.cst$kw$recur;
} else {
throw e15327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15501 = state_15320;
state_15320 = G__15501;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = function(state_15320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1.call(this,state_15320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___15499,res,vec__15313,v,p,job,jobs,results))
})();
var state__14925__auto__ = (function (){var statearr_15329 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___15499);

return statearr_15329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___15499,res,vec__15313,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15330){
var vec__15331 = p__15330;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15331,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15331,(1),null);
var job = vec__15331;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8256__auto___15502 = n;
var __15503 = (0);
while(true){
if((__15503 < n__8256__auto___15502)){
var G__15334_15504 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15334_15504) {
case "compute":
var c__14923__auto___15506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15503,c__14923__auto___15506,G__15334_15504,n__8256__auto___15502,jobs,results,process,async){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (__15503,c__14923__auto___15506,G__15334_15504,n__8256__auto___15502,jobs,results,process,async){
return (function (state_15347){
var state_val_15348 = (state_15347[(1)]);
if((state_val_15348 === (1))){
var state_15347__$1 = state_15347;
var statearr_15349_15507 = state_15347__$1;
(statearr_15349_15507[(2)] = null);

(statearr_15349_15507[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15348 === (2))){
var state_15347__$1 = state_15347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15347__$1,(4),jobs);
} else {
if((state_val_15348 === (3))){
var inst_15345 = (state_15347[(2)]);
var state_15347__$1 = state_15347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15347__$1,inst_15345);
} else {
if((state_val_15348 === (4))){
var inst_15337 = (state_15347[(2)]);
var inst_15338 = process(inst_15337);
var state_15347__$1 = state_15347;
if(cljs.core.truth_(inst_15338)){
var statearr_15350_15508 = state_15347__$1;
(statearr_15350_15508[(1)] = (5));

} else {
var statearr_15351_15509 = state_15347__$1;
(statearr_15351_15509[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15348 === (5))){
var state_15347__$1 = state_15347;
var statearr_15352_15510 = state_15347__$1;
(statearr_15352_15510[(2)] = null);

(statearr_15352_15510[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15348 === (6))){
var state_15347__$1 = state_15347;
var statearr_15353_15511 = state_15347__$1;
(statearr_15353_15511[(2)] = null);

(statearr_15353_15511[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15348 === (7))){
var inst_15343 = (state_15347[(2)]);
var state_15347__$1 = state_15347;
var statearr_15354_15512 = state_15347__$1;
(statearr_15354_15512[(2)] = inst_15343);

(statearr_15354_15512[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15503,c__14923__auto___15506,G__15334_15504,n__8256__auto___15502,jobs,results,process,async))
;
return ((function (__15503,switch__14755__auto__,c__14923__auto___15506,G__15334_15504,n__8256__auto___15502,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0 = (function (){
var statearr_15358 = [null,null,null,null,null,null,null];
(statearr_15358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__);

(statearr_15358[(1)] = (1));

return statearr_15358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1 = (function (state_15347){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15347);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15359){if((e15359 instanceof Object)){
var ex__14759__auto__ = e15359;
var statearr_15360_15513 = state_15347;
(statearr_15360_15513[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15347);

return cljs.core.cst$kw$recur;
} else {
throw e15359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15514 = state_15347;
state_15347 = G__15514;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = function(state_15347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1.call(this,state_15347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__;
})()
;})(__15503,switch__14755__auto__,c__14923__auto___15506,G__15334_15504,n__8256__auto___15502,jobs,results,process,async))
})();
var state__14925__auto__ = (function (){var statearr_15361 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___15506);

return statearr_15361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(__15503,c__14923__auto___15506,G__15334_15504,n__8256__auto___15502,jobs,results,process,async))
);


break;
case "async":
var c__14923__auto___15515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15503,c__14923__auto___15515,G__15334_15504,n__8256__auto___15502,jobs,results,process,async){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (__15503,c__14923__auto___15515,G__15334_15504,n__8256__auto___15502,jobs,results,process,async){
return (function (state_15374){
var state_val_15375 = (state_15374[(1)]);
if((state_val_15375 === (1))){
var state_15374__$1 = state_15374;
var statearr_15376_15516 = state_15374__$1;
(statearr_15376_15516[(2)] = null);

(statearr_15376_15516[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15375 === (2))){
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15374__$1,(4),jobs);
} else {
if((state_val_15375 === (3))){
var inst_15372 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15374__$1,inst_15372);
} else {
if((state_val_15375 === (4))){
var inst_15364 = (state_15374[(2)]);
var inst_15365 = async(inst_15364);
var state_15374__$1 = state_15374;
if(cljs.core.truth_(inst_15365)){
var statearr_15377_15517 = state_15374__$1;
(statearr_15377_15517[(1)] = (5));

} else {
var statearr_15378_15518 = state_15374__$1;
(statearr_15378_15518[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15375 === (5))){
var state_15374__$1 = state_15374;
var statearr_15379_15519 = state_15374__$1;
(statearr_15379_15519[(2)] = null);

(statearr_15379_15519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15375 === (6))){
var state_15374__$1 = state_15374;
var statearr_15380_15520 = state_15374__$1;
(statearr_15380_15520[(2)] = null);

(statearr_15380_15520[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15375 === (7))){
var inst_15370 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15381_15521 = state_15374__$1;
(statearr_15381_15521[(2)] = inst_15370);

(statearr_15381_15521[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15503,c__14923__auto___15515,G__15334_15504,n__8256__auto___15502,jobs,results,process,async))
;
return ((function (__15503,switch__14755__auto__,c__14923__auto___15515,G__15334_15504,n__8256__auto___15502,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0 = (function (){
var statearr_15385 = [null,null,null,null,null,null,null];
(statearr_15385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__);

(statearr_15385[(1)] = (1));

return statearr_15385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1 = (function (state_15374){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15374);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15386){if((e15386 instanceof Object)){
var ex__14759__auto__ = e15386;
var statearr_15387_15522 = state_15374;
(statearr_15387_15522[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15374);

return cljs.core.cst$kw$recur;
} else {
throw e15386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15523 = state_15374;
state_15374 = G__15523;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = function(state_15374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1.call(this,state_15374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__;
})()
;})(__15503,switch__14755__auto__,c__14923__auto___15515,G__15334_15504,n__8256__auto___15502,jobs,results,process,async))
})();
var state__14925__auto__ = (function (){var statearr_15388 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___15515);

return statearr_15388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(__15503,c__14923__auto___15515,G__15334_15504,n__8256__auto___15502,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15524 = (__15503 + (1));
__15503 = G__15524;
continue;
} else {
}
break;
}

var c__14923__auto___15525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___15525,jobs,results,process,async){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___15525,jobs,results,process,async){
return (function (state_15410){
var state_val_15411 = (state_15410[(1)]);
if((state_val_15411 === (1))){
var state_15410__$1 = state_15410;
var statearr_15412_15526 = state_15410__$1;
(statearr_15412_15526[(2)] = null);

(statearr_15412_15526[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15411 === (2))){
var state_15410__$1 = state_15410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15410__$1,(4),from);
} else {
if((state_val_15411 === (3))){
var inst_15408 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15410__$1,inst_15408);
} else {
if((state_val_15411 === (4))){
var inst_15391 = (state_15410[(7)]);
var inst_15391__$1 = (state_15410[(2)]);
var inst_15392 = (inst_15391__$1 == null);
var state_15410__$1 = (function (){var statearr_15413 = state_15410;
(statearr_15413[(7)] = inst_15391__$1);

return statearr_15413;
})();
if(cljs.core.truth_(inst_15392)){
var statearr_15414_15527 = state_15410__$1;
(statearr_15414_15527[(1)] = (5));

} else {
var statearr_15415_15528 = state_15410__$1;
(statearr_15415_15528[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15411 === (5))){
var inst_15394 = cljs.core.async.close_BANG_(jobs);
var state_15410__$1 = state_15410;
var statearr_15416_15529 = state_15410__$1;
(statearr_15416_15529[(2)] = inst_15394);

(statearr_15416_15529[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15411 === (6))){
var inst_15396 = (state_15410[(8)]);
var inst_15391 = (state_15410[(7)]);
var inst_15396__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15398 = [inst_15391,inst_15396__$1];
var inst_15399 = (new cljs.core.PersistentVector(null,2,(5),inst_15397,inst_15398,null));
var state_15410__$1 = (function (){var statearr_15417 = state_15410;
(statearr_15417[(8)] = inst_15396__$1);

return statearr_15417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15410__$1,(8),jobs,inst_15399);
} else {
if((state_val_15411 === (7))){
var inst_15406 = (state_15410[(2)]);
var state_15410__$1 = state_15410;
var statearr_15418_15530 = state_15410__$1;
(statearr_15418_15530[(2)] = inst_15406);

(statearr_15418_15530[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15411 === (8))){
var inst_15396 = (state_15410[(8)]);
var inst_15401 = (state_15410[(2)]);
var state_15410__$1 = (function (){var statearr_15419 = state_15410;
(statearr_15419[(9)] = inst_15401);

return statearr_15419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15410__$1,(9),results,inst_15396);
} else {
if((state_val_15411 === (9))){
var inst_15403 = (state_15410[(2)]);
var state_15410__$1 = (function (){var statearr_15420 = state_15410;
(statearr_15420[(10)] = inst_15403);

return statearr_15420;
})();
var statearr_15421_15531 = state_15410__$1;
(statearr_15421_15531[(2)] = null);

(statearr_15421_15531[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___15525,jobs,results,process,async))
;
return ((function (switch__14755__auto__,c__14923__auto___15525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0 = (function (){
var statearr_15425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__);

(statearr_15425[(1)] = (1));

return statearr_15425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1 = (function (state_15410){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15410);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15426){if((e15426 instanceof Object)){
var ex__14759__auto__ = e15426;
var statearr_15427_15532 = state_15410;
(statearr_15427_15532[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15410);

return cljs.core.cst$kw$recur;
} else {
throw e15426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15533 = state_15410;
state_15410 = G__15533;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = function(state_15410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1.call(this,state_15410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___15525,jobs,results,process,async))
})();
var state__14925__auto__ = (function (){var statearr_15428 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___15525);

return statearr_15428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___15525,jobs,results,process,async))
);


var c__14923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto__,jobs,results,process,async){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto__,jobs,results,process,async){
return (function (state_15466){
var state_val_15467 = (state_15466[(1)]);
if((state_val_15467 === (7))){
var inst_15462 = (state_15466[(2)]);
var state_15466__$1 = state_15466;
var statearr_15468_15534 = state_15466__$1;
(statearr_15468_15534[(2)] = inst_15462);

(statearr_15468_15534[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (20))){
var state_15466__$1 = state_15466;
var statearr_15469_15535 = state_15466__$1;
(statearr_15469_15535[(2)] = null);

(statearr_15469_15535[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (1))){
var state_15466__$1 = state_15466;
var statearr_15470_15536 = state_15466__$1;
(statearr_15470_15536[(2)] = null);

(statearr_15470_15536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (4))){
var inst_15431 = (state_15466[(7)]);
var inst_15431__$1 = (state_15466[(2)]);
var inst_15432 = (inst_15431__$1 == null);
var state_15466__$1 = (function (){var statearr_15471 = state_15466;
(statearr_15471[(7)] = inst_15431__$1);

return statearr_15471;
})();
if(cljs.core.truth_(inst_15432)){
var statearr_15472_15537 = state_15466__$1;
(statearr_15472_15537[(1)] = (5));

} else {
var statearr_15473_15538 = state_15466__$1;
(statearr_15473_15538[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (15))){
var inst_15444 = (state_15466[(8)]);
var state_15466__$1 = state_15466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15466__$1,(18),to,inst_15444);
} else {
if((state_val_15467 === (21))){
var inst_15457 = (state_15466[(2)]);
var state_15466__$1 = state_15466;
var statearr_15474_15539 = state_15466__$1;
(statearr_15474_15539[(2)] = inst_15457);

(statearr_15474_15539[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (13))){
var inst_15459 = (state_15466[(2)]);
var state_15466__$1 = (function (){var statearr_15475 = state_15466;
(statearr_15475[(9)] = inst_15459);

return statearr_15475;
})();
var statearr_15476_15540 = state_15466__$1;
(statearr_15476_15540[(2)] = null);

(statearr_15476_15540[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (6))){
var inst_15431 = (state_15466[(7)]);
var state_15466__$1 = state_15466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15466__$1,(11),inst_15431);
} else {
if((state_val_15467 === (17))){
var inst_15452 = (state_15466[(2)]);
var state_15466__$1 = state_15466;
if(cljs.core.truth_(inst_15452)){
var statearr_15477_15541 = state_15466__$1;
(statearr_15477_15541[(1)] = (19));

} else {
var statearr_15478_15542 = state_15466__$1;
(statearr_15478_15542[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (3))){
var inst_15464 = (state_15466[(2)]);
var state_15466__$1 = state_15466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15466__$1,inst_15464);
} else {
if((state_val_15467 === (12))){
var inst_15441 = (state_15466[(10)]);
var state_15466__$1 = state_15466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15466__$1,(14),inst_15441);
} else {
if((state_val_15467 === (2))){
var state_15466__$1 = state_15466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15466__$1,(4),results);
} else {
if((state_val_15467 === (19))){
var state_15466__$1 = state_15466;
var statearr_15479_15543 = state_15466__$1;
(statearr_15479_15543[(2)] = null);

(statearr_15479_15543[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (11))){
var inst_15441 = (state_15466[(2)]);
var state_15466__$1 = (function (){var statearr_15480 = state_15466;
(statearr_15480[(10)] = inst_15441);

return statearr_15480;
})();
var statearr_15481_15544 = state_15466__$1;
(statearr_15481_15544[(2)] = null);

(statearr_15481_15544[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (9))){
var state_15466__$1 = state_15466;
var statearr_15482_15545 = state_15466__$1;
(statearr_15482_15545[(2)] = null);

(statearr_15482_15545[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (5))){
var state_15466__$1 = state_15466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15483_15546 = state_15466__$1;
(statearr_15483_15546[(1)] = (8));

} else {
var statearr_15484_15547 = state_15466__$1;
(statearr_15484_15547[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (14))){
var inst_15444 = (state_15466[(8)]);
var inst_15446 = (state_15466[(11)]);
var inst_15444__$1 = (state_15466[(2)]);
var inst_15445 = (inst_15444__$1 == null);
var inst_15446__$1 = cljs.core.not(inst_15445);
var state_15466__$1 = (function (){var statearr_15485 = state_15466;
(statearr_15485[(8)] = inst_15444__$1);

(statearr_15485[(11)] = inst_15446__$1);

return statearr_15485;
})();
if(inst_15446__$1){
var statearr_15486_15548 = state_15466__$1;
(statearr_15486_15548[(1)] = (15));

} else {
var statearr_15487_15549 = state_15466__$1;
(statearr_15487_15549[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (16))){
var inst_15446 = (state_15466[(11)]);
var state_15466__$1 = state_15466;
var statearr_15488_15550 = state_15466__$1;
(statearr_15488_15550[(2)] = inst_15446);

(statearr_15488_15550[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (10))){
var inst_15438 = (state_15466[(2)]);
var state_15466__$1 = state_15466;
var statearr_15489_15551 = state_15466__$1;
(statearr_15489_15551[(2)] = inst_15438);

(statearr_15489_15551[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (18))){
var inst_15449 = (state_15466[(2)]);
var state_15466__$1 = state_15466;
var statearr_15490_15552 = state_15466__$1;
(statearr_15490_15552[(2)] = inst_15449);

(statearr_15490_15552[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15467 === (8))){
var inst_15435 = cljs.core.async.close_BANG_(to);
var state_15466__$1 = state_15466;
var statearr_15491_15553 = state_15466__$1;
(statearr_15491_15553[(2)] = inst_15435);

(statearr_15491_15553[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto__,jobs,results,process,async))
;
return ((function (switch__14755__auto__,c__14923__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0 = (function (){
var statearr_15495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__);

(statearr_15495[(1)] = (1));

return statearr_15495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1 = (function (state_15466){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15466);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15496){if((e15496 instanceof Object)){
var ex__14759__auto__ = e15496;
var statearr_15497_15554 = state_15466;
(statearr_15497_15554[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15466);

return cljs.core.cst$kw$recur;
} else {
throw e15496;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15555 = state_15466;
state_15466 = G__15555;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__ = function(state_15466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1.call(this,state_15466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto__,jobs,results,process,async))
})();
var state__14925__auto__ = (function (){var statearr_15498 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto__);

return statearr_15498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto__,jobs,results,process,async))
);

return c__14923__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15556 = [];
var len__8426__auto___15559 = arguments.length;
var i__8427__auto___15560 = (0);
while(true){
if((i__8427__auto___15560 < len__8426__auto___15559)){
args15556.push((arguments[i__8427__auto___15560]));

var G__15561 = (i__8427__auto___15560 + (1));
i__8427__auto___15560 = G__15561;
continue;
} else {
}
break;
}

var G__15558 = args15556.length;
switch (G__15558) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15556.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15563 = [];
var len__8426__auto___15566 = arguments.length;
var i__8427__auto___15567 = (0);
while(true){
if((i__8427__auto___15567 < len__8426__auto___15566)){
args15563.push((arguments[i__8427__auto___15567]));

var G__15568 = (i__8427__auto___15567 + (1));
i__8427__auto___15567 = G__15568;
continue;
} else {
}
break;
}

var G__15565 = args15563.length;
switch (G__15565) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15563.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15570 = [];
var len__8426__auto___15623 = arguments.length;
var i__8427__auto___15624 = (0);
while(true){
if((i__8427__auto___15624 < len__8426__auto___15623)){
args15570.push((arguments[i__8427__auto___15624]));

var G__15625 = (i__8427__auto___15624 + (1));
i__8427__auto___15624 = G__15625;
continue;
} else {
}
break;
}

var G__15572 = args15570.length;
switch (G__15572) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15570.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14923__auto___15627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___15627,tc,fc){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___15627,tc,fc){
return (function (state_15598){
var state_val_15599 = (state_15598[(1)]);
if((state_val_15599 === (7))){
var inst_15594 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
var statearr_15600_15628 = state_15598__$1;
(statearr_15600_15628[(2)] = inst_15594);

(statearr_15600_15628[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (1))){
var state_15598__$1 = state_15598;
var statearr_15601_15629 = state_15598__$1;
(statearr_15601_15629[(2)] = null);

(statearr_15601_15629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (4))){
var inst_15575 = (state_15598[(7)]);
var inst_15575__$1 = (state_15598[(2)]);
var inst_15576 = (inst_15575__$1 == null);
var state_15598__$1 = (function (){var statearr_15602 = state_15598;
(statearr_15602[(7)] = inst_15575__$1);

return statearr_15602;
})();
if(cljs.core.truth_(inst_15576)){
var statearr_15603_15630 = state_15598__$1;
(statearr_15603_15630[(1)] = (5));

} else {
var statearr_15604_15631 = state_15598__$1;
(statearr_15604_15631[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (13))){
var state_15598__$1 = state_15598;
var statearr_15605_15632 = state_15598__$1;
(statearr_15605_15632[(2)] = null);

(statearr_15605_15632[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (6))){
var inst_15575 = (state_15598[(7)]);
var inst_15581 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15575) : p.call(null,inst_15575));
var state_15598__$1 = state_15598;
if(cljs.core.truth_(inst_15581)){
var statearr_15606_15633 = state_15598__$1;
(statearr_15606_15633[(1)] = (9));

} else {
var statearr_15607_15634 = state_15598__$1;
(statearr_15607_15634[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (3))){
var inst_15596 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15598__$1,inst_15596);
} else {
if((state_val_15599 === (12))){
var state_15598__$1 = state_15598;
var statearr_15608_15635 = state_15598__$1;
(statearr_15608_15635[(2)] = null);

(statearr_15608_15635[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (2))){
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15598__$1,(4),ch);
} else {
if((state_val_15599 === (11))){
var inst_15575 = (state_15598[(7)]);
var inst_15585 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15598__$1,(8),inst_15585,inst_15575);
} else {
if((state_val_15599 === (9))){
var state_15598__$1 = state_15598;
var statearr_15609_15636 = state_15598__$1;
(statearr_15609_15636[(2)] = tc);

(statearr_15609_15636[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (5))){
var inst_15578 = cljs.core.async.close_BANG_(tc);
var inst_15579 = cljs.core.async.close_BANG_(fc);
var state_15598__$1 = (function (){var statearr_15610 = state_15598;
(statearr_15610[(8)] = inst_15578);

return statearr_15610;
})();
var statearr_15611_15637 = state_15598__$1;
(statearr_15611_15637[(2)] = inst_15579);

(statearr_15611_15637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (14))){
var inst_15592 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
var statearr_15612_15638 = state_15598__$1;
(statearr_15612_15638[(2)] = inst_15592);

(statearr_15612_15638[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (10))){
var state_15598__$1 = state_15598;
var statearr_15613_15639 = state_15598__$1;
(statearr_15613_15639[(2)] = fc);

(statearr_15613_15639[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15599 === (8))){
var inst_15587 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
if(cljs.core.truth_(inst_15587)){
var statearr_15614_15640 = state_15598__$1;
(statearr_15614_15640[(1)] = (12));

} else {
var statearr_15615_15641 = state_15598__$1;
(statearr_15615_15641[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___15627,tc,fc))
;
return ((function (switch__14755__auto__,c__14923__auto___15627,tc,fc){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_15619 = [null,null,null,null,null,null,null,null,null];
(statearr_15619[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_15619[(1)] = (1));

return statearr_15619;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_15598){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15598);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15620){if((e15620 instanceof Object)){
var ex__14759__auto__ = e15620;
var statearr_15621_15642 = state_15598;
(statearr_15621_15642[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15598);

return cljs.core.cst$kw$recur;
} else {
throw e15620;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15643 = state_15598;
state_15598 = G__15643;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_15598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_15598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___15627,tc,fc))
})();
var state__14925__auto__ = (function (){var statearr_15622 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___15627);

return statearr_15622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___15627,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto__){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto__){
return (function (state_15707){
var state_val_15708 = (state_15707[(1)]);
if((state_val_15708 === (7))){
var inst_15703 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
var statearr_15709_15730 = state_15707__$1;
(statearr_15709_15730[(2)] = inst_15703);

(statearr_15709_15730[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (1))){
var inst_15687 = init;
var state_15707__$1 = (function (){var statearr_15710 = state_15707;
(statearr_15710[(7)] = inst_15687);

return statearr_15710;
})();
var statearr_15711_15731 = state_15707__$1;
(statearr_15711_15731[(2)] = null);

(statearr_15711_15731[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (4))){
var inst_15690 = (state_15707[(8)]);
var inst_15690__$1 = (state_15707[(2)]);
var inst_15691 = (inst_15690__$1 == null);
var state_15707__$1 = (function (){var statearr_15712 = state_15707;
(statearr_15712[(8)] = inst_15690__$1);

return statearr_15712;
})();
if(cljs.core.truth_(inst_15691)){
var statearr_15713_15732 = state_15707__$1;
(statearr_15713_15732[(1)] = (5));

} else {
var statearr_15714_15733 = state_15707__$1;
(statearr_15714_15733[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (6))){
var inst_15694 = (state_15707[(9)]);
var inst_15690 = (state_15707[(8)]);
var inst_15687 = (state_15707[(7)]);
var inst_15694__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15687,inst_15690) : f.call(null,inst_15687,inst_15690));
var inst_15695 = cljs.core.reduced_QMARK_(inst_15694__$1);
var state_15707__$1 = (function (){var statearr_15715 = state_15707;
(statearr_15715[(9)] = inst_15694__$1);

return statearr_15715;
})();
if(inst_15695){
var statearr_15716_15734 = state_15707__$1;
(statearr_15716_15734[(1)] = (8));

} else {
var statearr_15717_15735 = state_15707__$1;
(statearr_15717_15735[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (3))){
var inst_15705 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15707__$1,inst_15705);
} else {
if((state_val_15708 === (2))){
var state_15707__$1 = state_15707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15707__$1,(4),ch);
} else {
if((state_val_15708 === (9))){
var inst_15694 = (state_15707[(9)]);
var inst_15687 = inst_15694;
var state_15707__$1 = (function (){var statearr_15718 = state_15707;
(statearr_15718[(7)] = inst_15687);

return statearr_15718;
})();
var statearr_15719_15736 = state_15707__$1;
(statearr_15719_15736[(2)] = null);

(statearr_15719_15736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (5))){
var inst_15687 = (state_15707[(7)]);
var state_15707__$1 = state_15707;
var statearr_15720_15737 = state_15707__$1;
(statearr_15720_15737[(2)] = inst_15687);

(statearr_15720_15737[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (10))){
var inst_15701 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
var statearr_15721_15738 = state_15707__$1;
(statearr_15721_15738[(2)] = inst_15701);

(statearr_15721_15738[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15708 === (8))){
var inst_15694 = (state_15707[(9)]);
var inst_15697 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15694) : cljs.core.deref.call(null,inst_15694));
var state_15707__$1 = state_15707;
var statearr_15722_15739 = state_15707__$1;
(statearr_15722_15739[(2)] = inst_15697);

(statearr_15722_15739[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto__))
;
return ((function (switch__14755__auto__,c__14923__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14756__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14756__auto____0 = (function (){
var statearr_15726 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15726[(0)] = cljs$core$async$reduce_$_state_machine__14756__auto__);

(statearr_15726[(1)] = (1));

return statearr_15726;
});
var cljs$core$async$reduce_$_state_machine__14756__auto____1 = (function (state_15707){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15707);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15727){if((e15727 instanceof Object)){
var ex__14759__auto__ = e15727;
var statearr_15728_15740 = state_15707;
(statearr_15728_15740[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15707);

return cljs.core.cst$kw$recur;
} else {
throw e15727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15741 = state_15707;
state_15707 = G__15741;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14756__auto__ = function(state_15707){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14756__auto____1.call(this,state_15707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14756__auto____0;
cljs$core$async$reduce_$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14756__auto____1;
return cljs$core$async$reduce_$_state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto__))
})();
var state__14925__auto__ = (function (){var statearr_15729 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto__);

return statearr_15729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto__))
);

return c__14923__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto__,f__$1){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto__,f__$1){
return (function (state_15761){
var state_val_15762 = (state_15761[(1)]);
if((state_val_15762 === (1))){
var inst_15756 = cljs.core.async.reduce(f__$1,init,ch);
var state_15761__$1 = state_15761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15761__$1,(2),inst_15756);
} else {
if((state_val_15762 === (2))){
var inst_15758 = (state_15761[(2)]);
var inst_15759 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15758) : f__$1.call(null,inst_15758));
var state_15761__$1 = state_15761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15761__$1,inst_15759);
} else {
return null;
}
}
});})(c__14923__auto__,f__$1))
;
return ((function (switch__14755__auto__,c__14923__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14756__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14756__auto____0 = (function (){
var statearr_15766 = [null,null,null,null,null,null,null];
(statearr_15766[(0)] = cljs$core$async$transduce_$_state_machine__14756__auto__);

(statearr_15766[(1)] = (1));

return statearr_15766;
});
var cljs$core$async$transduce_$_state_machine__14756__auto____1 = (function (state_15761){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15761);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15767){if((e15767 instanceof Object)){
var ex__14759__auto__ = e15767;
var statearr_15768_15770 = state_15761;
(statearr_15768_15770[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15761);

return cljs.core.cst$kw$recur;
} else {
throw e15767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15771 = state_15761;
state_15761 = G__15771;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14756__auto__ = function(state_15761){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14756__auto____1.call(this,state_15761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14756__auto____0;
cljs$core$async$transduce_$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14756__auto____1;
return cljs$core$async$transduce_$_state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto__,f__$1))
})();
var state__14925__auto__ = (function (){var statearr_15769 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto__);

return statearr_15769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto__,f__$1))
);

return c__14923__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15772 = [];
var len__8426__auto___15824 = arguments.length;
var i__8427__auto___15825 = (0);
while(true){
if((i__8427__auto___15825 < len__8426__auto___15824)){
args15772.push((arguments[i__8427__auto___15825]));

var G__15826 = (i__8427__auto___15825 + (1));
i__8427__auto___15825 = G__15826;
continue;
} else {
}
break;
}

var G__15774 = args15772.length;
switch (G__15774) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15772.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto__){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto__){
return (function (state_15799){
var state_val_15800 = (state_15799[(1)]);
if((state_val_15800 === (7))){
var inst_15781 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
var statearr_15801_15828 = state_15799__$1;
(statearr_15801_15828[(2)] = inst_15781);

(statearr_15801_15828[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (1))){
var inst_15775 = cljs.core.seq(coll);
var inst_15776 = inst_15775;
var state_15799__$1 = (function (){var statearr_15802 = state_15799;
(statearr_15802[(7)] = inst_15776);

return statearr_15802;
})();
var statearr_15803_15829 = state_15799__$1;
(statearr_15803_15829[(2)] = null);

(statearr_15803_15829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (4))){
var inst_15776 = (state_15799[(7)]);
var inst_15779 = cljs.core.first(inst_15776);
var state_15799__$1 = state_15799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15799__$1,(7),ch,inst_15779);
} else {
if((state_val_15800 === (13))){
var inst_15793 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
var statearr_15804_15830 = state_15799__$1;
(statearr_15804_15830[(2)] = inst_15793);

(statearr_15804_15830[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (6))){
var inst_15784 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
if(cljs.core.truth_(inst_15784)){
var statearr_15805_15831 = state_15799__$1;
(statearr_15805_15831[(1)] = (8));

} else {
var statearr_15806_15832 = state_15799__$1;
(statearr_15806_15832[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (3))){
var inst_15797 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15799__$1,inst_15797);
} else {
if((state_val_15800 === (12))){
var state_15799__$1 = state_15799;
var statearr_15807_15833 = state_15799__$1;
(statearr_15807_15833[(2)] = null);

(statearr_15807_15833[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (2))){
var inst_15776 = (state_15799[(7)]);
var state_15799__$1 = state_15799;
if(cljs.core.truth_(inst_15776)){
var statearr_15808_15834 = state_15799__$1;
(statearr_15808_15834[(1)] = (4));

} else {
var statearr_15809_15835 = state_15799__$1;
(statearr_15809_15835[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (11))){
var inst_15790 = cljs.core.async.close_BANG_(ch);
var state_15799__$1 = state_15799;
var statearr_15810_15836 = state_15799__$1;
(statearr_15810_15836[(2)] = inst_15790);

(statearr_15810_15836[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (9))){
var state_15799__$1 = state_15799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15811_15837 = state_15799__$1;
(statearr_15811_15837[(1)] = (11));

} else {
var statearr_15812_15838 = state_15799__$1;
(statearr_15812_15838[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (5))){
var inst_15776 = (state_15799[(7)]);
var state_15799__$1 = state_15799;
var statearr_15813_15839 = state_15799__$1;
(statearr_15813_15839[(2)] = inst_15776);

(statearr_15813_15839[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (10))){
var inst_15795 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
var statearr_15814_15840 = state_15799__$1;
(statearr_15814_15840[(2)] = inst_15795);

(statearr_15814_15840[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15800 === (8))){
var inst_15776 = (state_15799[(7)]);
var inst_15786 = cljs.core.next(inst_15776);
var inst_15776__$1 = inst_15786;
var state_15799__$1 = (function (){var statearr_15815 = state_15799;
(statearr_15815[(7)] = inst_15776__$1);

return statearr_15815;
})();
var statearr_15816_15841 = state_15799__$1;
(statearr_15816_15841[(2)] = null);

(statearr_15816_15841[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto__))
;
return ((function (switch__14755__auto__,c__14923__auto__){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_15820 = [null,null,null,null,null,null,null,null];
(statearr_15820[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_15820[(1)] = (1));

return statearr_15820;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_15799){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_15799);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e15821){if((e15821 instanceof Object)){
var ex__14759__auto__ = e15821;
var statearr_15822_15842 = state_15799;
(statearr_15822_15842[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15799);

return cljs.core.cst$kw$recur;
} else {
throw e15821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__15843 = state_15799;
state_15799 = G__15843;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_15799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_15799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto__))
})();
var state__14925__auto__ = (function (){var statearr_15823 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_15823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto__);

return statearr_15823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto__))
);

return c__14923__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7956__auto__ = (((_ == null))?null:_);
var m__7957__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7957__auto__.call(null,_));
} else {
var m__7957__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7957__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7956__auto__ = (((m == null))?null:m);
var m__7957__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7957__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7957__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7957__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7956__auto__ = (((m == null))?null:m);
var m__7957__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7957__auto__.call(null,m,ch));
} else {
var m__7957__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7957__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7956__auto__ = (((m == null))?null:m);
var m__7957__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7957__auto__.call(null,m));
} else {
var m__7957__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7957__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__16072 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16072) : cljs.core.atom.call(null,G__16072));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16073 = (function (mult,ch,cs,meta16074){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16074 = meta16074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16075,meta16074__$1){
var self__ = this;
var _16075__$1 = this;
return (new cljs.core.async.t_cljs$core$async16073(self__.mult,self__.ch,self__.cs,meta16074__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16075){
var self__ = this;
var _16075__$1 = this;
return self__.meta16074;
});})(cs))
;

cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16073.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16076_16300 = self__.cs;
var G__16077_16301 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16076_16300,G__16077_16301) : cljs.core.reset_BANG_.call(null,G__16076_16300,G__16077_16301));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16073.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16074], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16073";

cljs.core.async.t_cljs$core$async16073.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async16073");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16073 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16073(mult__$1,ch__$1,cs__$1,meta16074){
return (new cljs.core.async.t_cljs$core$async16073(mult__$1,ch__$1,cs__$1,meta16074));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16073(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14923__auto___16302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___16302,cs,m,dchan,dctr,done){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___16302,cs,m,dchan,dctr,done){
return (function (state_16212){
var state_val_16213 = (state_16212[(1)]);
if((state_val_16213 === (7))){
var inst_16208 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16214_16303 = state_16212__$1;
(statearr_16214_16303[(2)] = inst_16208);

(statearr_16214_16303[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (20))){
var inst_16111 = (state_16212[(7)]);
var inst_16123 = cljs.core.first(inst_16111);
var inst_16124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16123,(0),null);
var inst_16125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16123,(1),null);
var state_16212__$1 = (function (){var statearr_16215 = state_16212;
(statearr_16215[(8)] = inst_16124);

return statearr_16215;
})();
if(cljs.core.truth_(inst_16125)){
var statearr_16216_16304 = state_16212__$1;
(statearr_16216_16304[(1)] = (22));

} else {
var statearr_16217_16305 = state_16212__$1;
(statearr_16217_16305[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (27))){
var inst_16155 = (state_16212[(9)]);
var inst_16153 = (state_16212[(10)]);
var inst_16080 = (state_16212[(11)]);
var inst_16160 = (state_16212[(12)]);
var inst_16160__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16153,inst_16155);
var inst_16161 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16160__$1,inst_16080,done);
var state_16212__$1 = (function (){var statearr_16218 = state_16212;
(statearr_16218[(12)] = inst_16160__$1);

return statearr_16218;
})();
if(cljs.core.truth_(inst_16161)){
var statearr_16219_16306 = state_16212__$1;
(statearr_16219_16306[(1)] = (30));

} else {
var statearr_16220_16307 = state_16212__$1;
(statearr_16220_16307[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (1))){
var state_16212__$1 = state_16212;
var statearr_16221_16308 = state_16212__$1;
(statearr_16221_16308[(2)] = null);

(statearr_16221_16308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (24))){
var inst_16111 = (state_16212[(7)]);
var inst_16130 = (state_16212[(2)]);
var inst_16131 = cljs.core.next(inst_16111);
var inst_16089 = inst_16131;
var inst_16090 = null;
var inst_16091 = (0);
var inst_16092 = (0);
var state_16212__$1 = (function (){var statearr_16222 = state_16212;
(statearr_16222[(13)] = inst_16092);

(statearr_16222[(14)] = inst_16089);

(statearr_16222[(15)] = inst_16091);

(statearr_16222[(16)] = inst_16130);

(statearr_16222[(17)] = inst_16090);

return statearr_16222;
})();
var statearr_16223_16309 = state_16212__$1;
(statearr_16223_16309[(2)] = null);

(statearr_16223_16309[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (39))){
var state_16212__$1 = state_16212;
var statearr_16227_16310 = state_16212__$1;
(statearr_16227_16310[(2)] = null);

(statearr_16227_16310[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (4))){
var inst_16080 = (state_16212[(11)]);
var inst_16080__$1 = (state_16212[(2)]);
var inst_16081 = (inst_16080__$1 == null);
var state_16212__$1 = (function (){var statearr_16228 = state_16212;
(statearr_16228[(11)] = inst_16080__$1);

return statearr_16228;
})();
if(cljs.core.truth_(inst_16081)){
var statearr_16229_16311 = state_16212__$1;
(statearr_16229_16311[(1)] = (5));

} else {
var statearr_16230_16312 = state_16212__$1;
(statearr_16230_16312[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (15))){
var inst_16092 = (state_16212[(13)]);
var inst_16089 = (state_16212[(14)]);
var inst_16091 = (state_16212[(15)]);
var inst_16090 = (state_16212[(17)]);
var inst_16107 = (state_16212[(2)]);
var inst_16108 = (inst_16092 + (1));
var tmp16224 = inst_16089;
var tmp16225 = inst_16091;
var tmp16226 = inst_16090;
var inst_16089__$1 = tmp16224;
var inst_16090__$1 = tmp16226;
var inst_16091__$1 = tmp16225;
var inst_16092__$1 = inst_16108;
var state_16212__$1 = (function (){var statearr_16231 = state_16212;
(statearr_16231[(13)] = inst_16092__$1);

(statearr_16231[(14)] = inst_16089__$1);

(statearr_16231[(15)] = inst_16091__$1);

(statearr_16231[(17)] = inst_16090__$1);

(statearr_16231[(18)] = inst_16107);

return statearr_16231;
})();
var statearr_16232_16313 = state_16212__$1;
(statearr_16232_16313[(2)] = null);

(statearr_16232_16313[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (21))){
var inst_16134 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16236_16314 = state_16212__$1;
(statearr_16236_16314[(2)] = inst_16134);

(statearr_16236_16314[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (31))){
var inst_16160 = (state_16212[(12)]);
var inst_16164 = done(null);
var inst_16165 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16160);
var state_16212__$1 = (function (){var statearr_16237 = state_16212;
(statearr_16237[(19)] = inst_16164);

return statearr_16237;
})();
var statearr_16238_16315 = state_16212__$1;
(statearr_16238_16315[(2)] = inst_16165);

(statearr_16238_16315[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (32))){
var inst_16152 = (state_16212[(20)]);
var inst_16155 = (state_16212[(9)]);
var inst_16153 = (state_16212[(10)]);
var inst_16154 = (state_16212[(21)]);
var inst_16167 = (state_16212[(2)]);
var inst_16168 = (inst_16155 + (1));
var tmp16233 = inst_16152;
var tmp16234 = inst_16153;
var tmp16235 = inst_16154;
var inst_16152__$1 = tmp16233;
var inst_16153__$1 = tmp16234;
var inst_16154__$1 = tmp16235;
var inst_16155__$1 = inst_16168;
var state_16212__$1 = (function (){var statearr_16239 = state_16212;
(statearr_16239[(20)] = inst_16152__$1);

(statearr_16239[(9)] = inst_16155__$1);

(statearr_16239[(10)] = inst_16153__$1);

(statearr_16239[(21)] = inst_16154__$1);

(statearr_16239[(22)] = inst_16167);

return statearr_16239;
})();
var statearr_16240_16316 = state_16212__$1;
(statearr_16240_16316[(2)] = null);

(statearr_16240_16316[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (40))){
var inst_16180 = (state_16212[(23)]);
var inst_16184 = done(null);
var inst_16185 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16180);
var state_16212__$1 = (function (){var statearr_16241 = state_16212;
(statearr_16241[(24)] = inst_16184);

return statearr_16241;
})();
var statearr_16242_16317 = state_16212__$1;
(statearr_16242_16317[(2)] = inst_16185);

(statearr_16242_16317[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (33))){
var inst_16171 = (state_16212[(25)]);
var inst_16173 = cljs.core.chunked_seq_QMARK_(inst_16171);
var state_16212__$1 = state_16212;
if(inst_16173){
var statearr_16243_16318 = state_16212__$1;
(statearr_16243_16318[(1)] = (36));

} else {
var statearr_16244_16319 = state_16212__$1;
(statearr_16244_16319[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (13))){
var inst_16101 = (state_16212[(26)]);
var inst_16104 = cljs.core.async.close_BANG_(inst_16101);
var state_16212__$1 = state_16212;
var statearr_16245_16320 = state_16212__$1;
(statearr_16245_16320[(2)] = inst_16104);

(statearr_16245_16320[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (22))){
var inst_16124 = (state_16212[(8)]);
var inst_16127 = cljs.core.async.close_BANG_(inst_16124);
var state_16212__$1 = state_16212;
var statearr_16246_16321 = state_16212__$1;
(statearr_16246_16321[(2)] = inst_16127);

(statearr_16246_16321[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (36))){
var inst_16171 = (state_16212[(25)]);
var inst_16175 = cljs.core.chunk_first(inst_16171);
var inst_16176 = cljs.core.chunk_rest(inst_16171);
var inst_16177 = cljs.core.count(inst_16175);
var inst_16152 = inst_16176;
var inst_16153 = inst_16175;
var inst_16154 = inst_16177;
var inst_16155 = (0);
var state_16212__$1 = (function (){var statearr_16247 = state_16212;
(statearr_16247[(20)] = inst_16152);

(statearr_16247[(9)] = inst_16155);

(statearr_16247[(10)] = inst_16153);

(statearr_16247[(21)] = inst_16154);

return statearr_16247;
})();
var statearr_16248_16322 = state_16212__$1;
(statearr_16248_16322[(2)] = null);

(statearr_16248_16322[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (41))){
var inst_16171 = (state_16212[(25)]);
var inst_16187 = (state_16212[(2)]);
var inst_16188 = cljs.core.next(inst_16171);
var inst_16152 = inst_16188;
var inst_16153 = null;
var inst_16154 = (0);
var inst_16155 = (0);
var state_16212__$1 = (function (){var statearr_16249 = state_16212;
(statearr_16249[(20)] = inst_16152);

(statearr_16249[(9)] = inst_16155);

(statearr_16249[(10)] = inst_16153);

(statearr_16249[(27)] = inst_16187);

(statearr_16249[(21)] = inst_16154);

return statearr_16249;
})();
var statearr_16250_16323 = state_16212__$1;
(statearr_16250_16323[(2)] = null);

(statearr_16250_16323[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (43))){
var state_16212__$1 = state_16212;
var statearr_16251_16324 = state_16212__$1;
(statearr_16251_16324[(2)] = null);

(statearr_16251_16324[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (29))){
var inst_16196 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16252_16325 = state_16212__$1;
(statearr_16252_16325[(2)] = inst_16196);

(statearr_16252_16325[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (44))){
var inst_16205 = (state_16212[(2)]);
var state_16212__$1 = (function (){var statearr_16253 = state_16212;
(statearr_16253[(28)] = inst_16205);

return statearr_16253;
})();
var statearr_16254_16326 = state_16212__$1;
(statearr_16254_16326[(2)] = null);

(statearr_16254_16326[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (6))){
var inst_16144 = (state_16212[(29)]);
var inst_16143 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16144__$1 = cljs.core.keys(inst_16143);
var inst_16145 = cljs.core.count(inst_16144__$1);
var inst_16146 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16145) : cljs.core.reset_BANG_.call(null,dctr,inst_16145));
var inst_16151 = cljs.core.seq(inst_16144__$1);
var inst_16152 = inst_16151;
var inst_16153 = null;
var inst_16154 = (0);
var inst_16155 = (0);
var state_16212__$1 = (function (){var statearr_16255 = state_16212;
(statearr_16255[(20)] = inst_16152);

(statearr_16255[(9)] = inst_16155);

(statearr_16255[(10)] = inst_16153);

(statearr_16255[(30)] = inst_16146);

(statearr_16255[(21)] = inst_16154);

(statearr_16255[(29)] = inst_16144__$1);

return statearr_16255;
})();
var statearr_16256_16327 = state_16212__$1;
(statearr_16256_16327[(2)] = null);

(statearr_16256_16327[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (28))){
var inst_16152 = (state_16212[(20)]);
var inst_16171 = (state_16212[(25)]);
var inst_16171__$1 = cljs.core.seq(inst_16152);
var state_16212__$1 = (function (){var statearr_16257 = state_16212;
(statearr_16257[(25)] = inst_16171__$1);

return statearr_16257;
})();
if(inst_16171__$1){
var statearr_16258_16328 = state_16212__$1;
(statearr_16258_16328[(1)] = (33));

} else {
var statearr_16259_16329 = state_16212__$1;
(statearr_16259_16329[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (25))){
var inst_16155 = (state_16212[(9)]);
var inst_16154 = (state_16212[(21)]);
var inst_16157 = (inst_16155 < inst_16154);
var inst_16158 = inst_16157;
var state_16212__$1 = state_16212;
if(cljs.core.truth_(inst_16158)){
var statearr_16260_16330 = state_16212__$1;
(statearr_16260_16330[(1)] = (27));

} else {
var statearr_16261_16331 = state_16212__$1;
(statearr_16261_16331[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (34))){
var state_16212__$1 = state_16212;
var statearr_16262_16332 = state_16212__$1;
(statearr_16262_16332[(2)] = null);

(statearr_16262_16332[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (17))){
var state_16212__$1 = state_16212;
var statearr_16263_16333 = state_16212__$1;
(statearr_16263_16333[(2)] = null);

(statearr_16263_16333[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (3))){
var inst_16210 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16212__$1,inst_16210);
} else {
if((state_val_16213 === (12))){
var inst_16139 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16264_16334 = state_16212__$1;
(statearr_16264_16334[(2)] = inst_16139);

(statearr_16264_16334[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (2))){
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16212__$1,(4),ch);
} else {
if((state_val_16213 === (23))){
var state_16212__$1 = state_16212;
var statearr_16265_16335 = state_16212__$1;
(statearr_16265_16335[(2)] = null);

(statearr_16265_16335[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (35))){
var inst_16194 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16266_16336 = state_16212__$1;
(statearr_16266_16336[(2)] = inst_16194);

(statearr_16266_16336[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (19))){
var inst_16111 = (state_16212[(7)]);
var inst_16115 = cljs.core.chunk_first(inst_16111);
var inst_16116 = cljs.core.chunk_rest(inst_16111);
var inst_16117 = cljs.core.count(inst_16115);
var inst_16089 = inst_16116;
var inst_16090 = inst_16115;
var inst_16091 = inst_16117;
var inst_16092 = (0);
var state_16212__$1 = (function (){var statearr_16267 = state_16212;
(statearr_16267[(13)] = inst_16092);

(statearr_16267[(14)] = inst_16089);

(statearr_16267[(15)] = inst_16091);

(statearr_16267[(17)] = inst_16090);

return statearr_16267;
})();
var statearr_16268_16337 = state_16212__$1;
(statearr_16268_16337[(2)] = null);

(statearr_16268_16337[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (11))){
var inst_16111 = (state_16212[(7)]);
var inst_16089 = (state_16212[(14)]);
var inst_16111__$1 = cljs.core.seq(inst_16089);
var state_16212__$1 = (function (){var statearr_16269 = state_16212;
(statearr_16269[(7)] = inst_16111__$1);

return statearr_16269;
})();
if(inst_16111__$1){
var statearr_16270_16338 = state_16212__$1;
(statearr_16270_16338[(1)] = (16));

} else {
var statearr_16271_16339 = state_16212__$1;
(statearr_16271_16339[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (9))){
var inst_16141 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16272_16340 = state_16212__$1;
(statearr_16272_16340[(2)] = inst_16141);

(statearr_16272_16340[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (5))){
var inst_16087 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16088 = cljs.core.seq(inst_16087);
var inst_16089 = inst_16088;
var inst_16090 = null;
var inst_16091 = (0);
var inst_16092 = (0);
var state_16212__$1 = (function (){var statearr_16273 = state_16212;
(statearr_16273[(13)] = inst_16092);

(statearr_16273[(14)] = inst_16089);

(statearr_16273[(15)] = inst_16091);

(statearr_16273[(17)] = inst_16090);

return statearr_16273;
})();
var statearr_16274_16341 = state_16212__$1;
(statearr_16274_16341[(2)] = null);

(statearr_16274_16341[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (14))){
var state_16212__$1 = state_16212;
var statearr_16275_16342 = state_16212__$1;
(statearr_16275_16342[(2)] = null);

(statearr_16275_16342[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (45))){
var inst_16202 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16276_16343 = state_16212__$1;
(statearr_16276_16343[(2)] = inst_16202);

(statearr_16276_16343[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (26))){
var inst_16144 = (state_16212[(29)]);
var inst_16198 = (state_16212[(2)]);
var inst_16199 = cljs.core.seq(inst_16144);
var state_16212__$1 = (function (){var statearr_16277 = state_16212;
(statearr_16277[(31)] = inst_16198);

return statearr_16277;
})();
if(inst_16199){
var statearr_16278_16344 = state_16212__$1;
(statearr_16278_16344[(1)] = (42));

} else {
var statearr_16279_16345 = state_16212__$1;
(statearr_16279_16345[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (16))){
var inst_16111 = (state_16212[(7)]);
var inst_16113 = cljs.core.chunked_seq_QMARK_(inst_16111);
var state_16212__$1 = state_16212;
if(inst_16113){
var statearr_16280_16346 = state_16212__$1;
(statearr_16280_16346[(1)] = (19));

} else {
var statearr_16281_16347 = state_16212__$1;
(statearr_16281_16347[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (38))){
var inst_16191 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16282_16348 = state_16212__$1;
(statearr_16282_16348[(2)] = inst_16191);

(statearr_16282_16348[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (30))){
var state_16212__$1 = state_16212;
var statearr_16283_16349 = state_16212__$1;
(statearr_16283_16349[(2)] = null);

(statearr_16283_16349[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (10))){
var inst_16092 = (state_16212[(13)]);
var inst_16090 = (state_16212[(17)]);
var inst_16100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16090,inst_16092);
var inst_16101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16100,(0),null);
var inst_16102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16100,(1),null);
var state_16212__$1 = (function (){var statearr_16284 = state_16212;
(statearr_16284[(26)] = inst_16101);

return statearr_16284;
})();
if(cljs.core.truth_(inst_16102)){
var statearr_16285_16350 = state_16212__$1;
(statearr_16285_16350[(1)] = (13));

} else {
var statearr_16286_16351 = state_16212__$1;
(statearr_16286_16351[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (18))){
var inst_16137 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16287_16352 = state_16212__$1;
(statearr_16287_16352[(2)] = inst_16137);

(statearr_16287_16352[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (42))){
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16212__$1,(45),dchan);
} else {
if((state_val_16213 === (37))){
var inst_16080 = (state_16212[(11)]);
var inst_16180 = (state_16212[(23)]);
var inst_16171 = (state_16212[(25)]);
var inst_16180__$1 = cljs.core.first(inst_16171);
var inst_16181 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16180__$1,inst_16080,done);
var state_16212__$1 = (function (){var statearr_16288 = state_16212;
(statearr_16288[(23)] = inst_16180__$1);

return statearr_16288;
})();
if(cljs.core.truth_(inst_16181)){
var statearr_16289_16353 = state_16212__$1;
(statearr_16289_16353[(1)] = (39));

} else {
var statearr_16290_16354 = state_16212__$1;
(statearr_16290_16354[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (8))){
var inst_16092 = (state_16212[(13)]);
var inst_16091 = (state_16212[(15)]);
var inst_16094 = (inst_16092 < inst_16091);
var inst_16095 = inst_16094;
var state_16212__$1 = state_16212;
if(cljs.core.truth_(inst_16095)){
var statearr_16291_16355 = state_16212__$1;
(statearr_16291_16355[(1)] = (10));

} else {
var statearr_16292_16356 = state_16212__$1;
(statearr_16292_16356[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___16302,cs,m,dchan,dctr,done))
;
return ((function (switch__14755__auto__,c__14923__auto___16302,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14756__auto__ = null;
var cljs$core$async$mult_$_state_machine__14756__auto____0 = (function (){
var statearr_16296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16296[(0)] = cljs$core$async$mult_$_state_machine__14756__auto__);

(statearr_16296[(1)] = (1));

return statearr_16296;
});
var cljs$core$async$mult_$_state_machine__14756__auto____1 = (function (state_16212){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_16212);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e16297){if((e16297 instanceof Object)){
var ex__14759__auto__ = e16297;
var statearr_16298_16357 = state_16212;
(statearr_16298_16357[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16212);

return cljs.core.cst$kw$recur;
} else {
throw e16297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__16358 = state_16212;
state_16212 = G__16358;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14756__auto__ = function(state_16212){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14756__auto____1.call(this,state_16212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14756__auto____0;
cljs$core$async$mult_$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14756__auto____1;
return cljs$core$async$mult_$_state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___16302,cs,m,dchan,dctr,done))
})();
var state__14925__auto__ = (function (){var statearr_16299 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_16299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___16302);

return statearr_16299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___16302,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args16359 = [];
var len__8426__auto___16362 = arguments.length;
var i__8427__auto___16363 = (0);
while(true){
if((i__8427__auto___16363 < len__8426__auto___16362)){
args16359.push((arguments[i__8427__auto___16363]));

var G__16364 = (i__8427__auto___16363 + (1));
i__8427__auto___16363 = G__16364;
continue;
} else {
}
break;
}

var G__16361 = args16359.length;
switch (G__16361) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16359.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7956__auto__ = (((m == null))?null:m);
var m__7957__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7957__auto__.call(null,m,ch));
} else {
var m__7957__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7957__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7956__auto__ = (((m == null))?null:m);
var m__7957__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7957__auto__.call(null,m,ch));
} else {
var m__7957__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7957__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7956__auto__ = (((m == null))?null:m);
var m__7957__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7957__auto__.call(null,m));
} else {
var m__7957__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7957__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7956__auto__ = (((m == null))?null:m);
var m__7957__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7957__auto__.call(null,m,state_map));
} else {
var m__7957__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7957__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7956__auto__ = (((m == null))?null:m);
var m__7957__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7957__auto__.call(null,m,mode));
} else {
var m__7957__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7957__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8433__auto__ = [];
var len__8426__auto___16376 = arguments.length;
var i__8427__auto___16377 = (0);
while(true){
if((i__8427__auto___16377 < len__8426__auto___16376)){
args__8433__auto__.push((arguments[i__8427__auto___16377]));

var G__16378 = (i__8427__auto___16377 + (1));
i__8427__auto___16377 = G__16378;
continue;
} else {
}
break;
}

var argseq__8434__auto__ = ((((3) < args__8433__auto__.length))?(new cljs.core.IndexedSeq(args__8433__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8434__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16370){
var map__16371 = p__16370;
var map__16371__$1 = ((((!((map__16371 == null)))?((((map__16371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16371):map__16371);
var opts = map__16371__$1;
var statearr_16373_16379 = state;
(statearr_16373_16379[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6728__auto__ = cljs.core.async.do_alts(((function (map__16371,map__16371__$1,opts){
return (function (val){
var statearr_16374_16380 = state;
(statearr_16374_16380[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16371,map__16371__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6728__auto__)){
var cb = temp__6728__auto__;
var statearr_16375_16381 = state;
(statearr_16375_16381[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16366){
var G__16367 = cljs.core.first(seq16366);
var seq16366__$1 = cljs.core.next(seq16366);
var G__16368 = cljs.core.first(seq16366__$1);
var seq16366__$2 = cljs.core.next(seq16366__$1);
var G__16369 = cljs.core.first(seq16366__$2);
var seq16366__$3 = cljs.core.next(seq16366__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16367,G__16368,G__16369,seq16366__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16551 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16551) : cljs.core.atom.call(null,G__16551));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__16552 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16552) : cljs.core.atom.call(null,G__16552));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16553 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16554){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16554 = meta16554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16555,meta16554__$1){
var self__ = this;
var _16555__$1 = this;
return (new cljs.core.async.t_cljs$core$async16553(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16554__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16555){
var self__ = this;
var _16555__$1 = this;
return self__.meta16554;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16556_16720 = self__.cs;
var G__16557_16721 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16556_16720,G__16557_16721) : cljs.core.reset_BANG_.call(null,G__16556_16720,G__16557_16721));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16553.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16553.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16554], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16553";

cljs.core.async.t_cljs$core$async16553.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async16553");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16553 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16553(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16554){
return (new cljs.core.async.t_cljs$core$async16553(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16554));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16553(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14923__auto___16722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___16722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___16722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16657){
var state_val_16658 = (state_16657[(1)]);
if((state_val_16658 === (7))){
var inst_16573 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16659_16723 = state_16657__$1;
(statearr_16659_16723[(2)] = inst_16573);

(statearr_16659_16723[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (20))){
var inst_16585 = (state_16657[(7)]);
var state_16657__$1 = state_16657;
var statearr_16660_16724 = state_16657__$1;
(statearr_16660_16724[(2)] = inst_16585);

(statearr_16660_16724[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (27))){
var state_16657__$1 = state_16657;
var statearr_16661_16725 = state_16657__$1;
(statearr_16661_16725[(2)] = null);

(statearr_16661_16725[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (1))){
var inst_16561 = (state_16657[(8)]);
var inst_16561__$1 = calc_state();
var inst_16563 = (inst_16561__$1 == null);
var inst_16564 = cljs.core.not(inst_16563);
var state_16657__$1 = (function (){var statearr_16662 = state_16657;
(statearr_16662[(8)] = inst_16561__$1);

return statearr_16662;
})();
if(inst_16564){
var statearr_16663_16726 = state_16657__$1;
(statearr_16663_16726[(1)] = (2));

} else {
var statearr_16664_16727 = state_16657__$1;
(statearr_16664_16727[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (24))){
var inst_16608 = (state_16657[(9)]);
var inst_16631 = (state_16657[(10)]);
var inst_16617 = (state_16657[(11)]);
var inst_16631__$1 = (inst_16608.cljs$core$IFn$_invoke$arity$1 ? inst_16608.cljs$core$IFn$_invoke$arity$1(inst_16617) : inst_16608.call(null,inst_16617));
var state_16657__$1 = (function (){var statearr_16665 = state_16657;
(statearr_16665[(10)] = inst_16631__$1);

return statearr_16665;
})();
if(cljs.core.truth_(inst_16631__$1)){
var statearr_16666_16728 = state_16657__$1;
(statearr_16666_16728[(1)] = (29));

} else {
var statearr_16667_16729 = state_16657__$1;
(statearr_16667_16729[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (4))){
var inst_16576 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16576)){
var statearr_16668_16730 = state_16657__$1;
(statearr_16668_16730[(1)] = (8));

} else {
var statearr_16669_16731 = state_16657__$1;
(statearr_16669_16731[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (15))){
var inst_16602 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16602)){
var statearr_16670_16732 = state_16657__$1;
(statearr_16670_16732[(1)] = (19));

} else {
var statearr_16671_16733 = state_16657__$1;
(statearr_16671_16733[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (21))){
var inst_16607 = (state_16657[(12)]);
var inst_16607__$1 = (state_16657[(2)]);
var inst_16608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16607__$1,cljs.core.cst$kw$solos);
var inst_16609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16607__$1,cljs.core.cst$kw$mutes);
var inst_16610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16607__$1,cljs.core.cst$kw$reads);
var state_16657__$1 = (function (){var statearr_16672 = state_16657;
(statearr_16672[(12)] = inst_16607__$1);

(statearr_16672[(9)] = inst_16608);

(statearr_16672[(13)] = inst_16609);

return statearr_16672;
})();
return cljs.core.async.ioc_alts_BANG_(state_16657__$1,(22),inst_16610);
} else {
if((state_val_16658 === (31))){
var inst_16639 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16639)){
var statearr_16673_16734 = state_16657__$1;
(statearr_16673_16734[(1)] = (32));

} else {
var statearr_16674_16735 = state_16657__$1;
(statearr_16674_16735[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (32))){
var inst_16616 = (state_16657[(14)]);
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16657__$1,(35),out,inst_16616);
} else {
if((state_val_16658 === (33))){
var inst_16607 = (state_16657[(12)]);
var inst_16585 = inst_16607;
var state_16657__$1 = (function (){var statearr_16675 = state_16657;
(statearr_16675[(7)] = inst_16585);

return statearr_16675;
})();
var statearr_16676_16736 = state_16657__$1;
(statearr_16676_16736[(2)] = null);

(statearr_16676_16736[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (13))){
var inst_16585 = (state_16657[(7)]);
var inst_16592 = inst_16585.cljs$lang$protocol_mask$partition0$;
var inst_16593 = (inst_16592 & (64));
var inst_16594 = inst_16585.cljs$core$ISeq$;
var inst_16595 = (inst_16593) || (inst_16594);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16595)){
var statearr_16677_16737 = state_16657__$1;
(statearr_16677_16737[(1)] = (16));

} else {
var statearr_16678_16738 = state_16657__$1;
(statearr_16678_16738[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (22))){
var inst_16616 = (state_16657[(14)]);
var inst_16617 = (state_16657[(11)]);
var inst_16615 = (state_16657[(2)]);
var inst_16616__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16615,(0),null);
var inst_16617__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16615,(1),null);
var inst_16618 = (inst_16616__$1 == null);
var inst_16619 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16617__$1,change);
var inst_16620 = (inst_16618) || (inst_16619);
var state_16657__$1 = (function (){var statearr_16679 = state_16657;
(statearr_16679[(14)] = inst_16616__$1);

(statearr_16679[(11)] = inst_16617__$1);

return statearr_16679;
})();
if(cljs.core.truth_(inst_16620)){
var statearr_16680_16739 = state_16657__$1;
(statearr_16680_16739[(1)] = (23));

} else {
var statearr_16681_16740 = state_16657__$1;
(statearr_16681_16740[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (36))){
var inst_16607 = (state_16657[(12)]);
var inst_16585 = inst_16607;
var state_16657__$1 = (function (){var statearr_16682 = state_16657;
(statearr_16682[(7)] = inst_16585);

return statearr_16682;
})();
var statearr_16683_16741 = state_16657__$1;
(statearr_16683_16741[(2)] = null);

(statearr_16683_16741[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (29))){
var inst_16631 = (state_16657[(10)]);
var state_16657__$1 = state_16657;
var statearr_16684_16742 = state_16657__$1;
(statearr_16684_16742[(2)] = inst_16631);

(statearr_16684_16742[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (6))){
var state_16657__$1 = state_16657;
var statearr_16685_16743 = state_16657__$1;
(statearr_16685_16743[(2)] = false);

(statearr_16685_16743[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (28))){
var inst_16627 = (state_16657[(2)]);
var inst_16628 = calc_state();
var inst_16585 = inst_16628;
var state_16657__$1 = (function (){var statearr_16686 = state_16657;
(statearr_16686[(7)] = inst_16585);

(statearr_16686[(15)] = inst_16627);

return statearr_16686;
})();
var statearr_16687_16744 = state_16657__$1;
(statearr_16687_16744[(2)] = null);

(statearr_16687_16744[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (25))){
var inst_16653 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16688_16745 = state_16657__$1;
(statearr_16688_16745[(2)] = inst_16653);

(statearr_16688_16745[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (34))){
var inst_16651 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16689_16746 = state_16657__$1;
(statearr_16689_16746[(2)] = inst_16651);

(statearr_16689_16746[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (17))){
var state_16657__$1 = state_16657;
var statearr_16690_16747 = state_16657__$1;
(statearr_16690_16747[(2)] = false);

(statearr_16690_16747[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (3))){
var state_16657__$1 = state_16657;
var statearr_16691_16748 = state_16657__$1;
(statearr_16691_16748[(2)] = false);

(statearr_16691_16748[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (12))){
var inst_16655 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16657__$1,inst_16655);
} else {
if((state_val_16658 === (2))){
var inst_16561 = (state_16657[(8)]);
var inst_16566 = inst_16561.cljs$lang$protocol_mask$partition0$;
var inst_16567 = (inst_16566 & (64));
var inst_16568 = inst_16561.cljs$core$ISeq$;
var inst_16569 = (inst_16567) || (inst_16568);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16569)){
var statearr_16692_16749 = state_16657__$1;
(statearr_16692_16749[(1)] = (5));

} else {
var statearr_16693_16750 = state_16657__$1;
(statearr_16693_16750[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (23))){
var inst_16616 = (state_16657[(14)]);
var inst_16622 = (inst_16616 == null);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16622)){
var statearr_16694_16751 = state_16657__$1;
(statearr_16694_16751[(1)] = (26));

} else {
var statearr_16695_16752 = state_16657__$1;
(statearr_16695_16752[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (35))){
var inst_16642 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16642)){
var statearr_16696_16753 = state_16657__$1;
(statearr_16696_16753[(1)] = (36));

} else {
var statearr_16697_16754 = state_16657__$1;
(statearr_16697_16754[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (19))){
var inst_16585 = (state_16657[(7)]);
var inst_16604 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16585);
var state_16657__$1 = state_16657;
var statearr_16698_16755 = state_16657__$1;
(statearr_16698_16755[(2)] = inst_16604);

(statearr_16698_16755[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (11))){
var inst_16585 = (state_16657[(7)]);
var inst_16589 = (inst_16585 == null);
var inst_16590 = cljs.core.not(inst_16589);
var state_16657__$1 = state_16657;
if(inst_16590){
var statearr_16699_16756 = state_16657__$1;
(statearr_16699_16756[(1)] = (13));

} else {
var statearr_16700_16757 = state_16657__$1;
(statearr_16700_16757[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (9))){
var inst_16561 = (state_16657[(8)]);
var state_16657__$1 = state_16657;
var statearr_16701_16758 = state_16657__$1;
(statearr_16701_16758[(2)] = inst_16561);

(statearr_16701_16758[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (5))){
var state_16657__$1 = state_16657;
var statearr_16702_16759 = state_16657__$1;
(statearr_16702_16759[(2)] = true);

(statearr_16702_16759[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (14))){
var state_16657__$1 = state_16657;
var statearr_16703_16760 = state_16657__$1;
(statearr_16703_16760[(2)] = false);

(statearr_16703_16760[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (26))){
var inst_16617 = (state_16657[(11)]);
var inst_16624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16617);
var state_16657__$1 = state_16657;
var statearr_16704_16761 = state_16657__$1;
(statearr_16704_16761[(2)] = inst_16624);

(statearr_16704_16761[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (16))){
var state_16657__$1 = state_16657;
var statearr_16705_16762 = state_16657__$1;
(statearr_16705_16762[(2)] = true);

(statearr_16705_16762[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (38))){
var inst_16647 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16706_16763 = state_16657__$1;
(statearr_16706_16763[(2)] = inst_16647);

(statearr_16706_16763[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (30))){
var inst_16608 = (state_16657[(9)]);
var inst_16609 = (state_16657[(13)]);
var inst_16617 = (state_16657[(11)]);
var inst_16634 = cljs.core.empty_QMARK_(inst_16608);
var inst_16635 = (inst_16609.cljs$core$IFn$_invoke$arity$1 ? inst_16609.cljs$core$IFn$_invoke$arity$1(inst_16617) : inst_16609.call(null,inst_16617));
var inst_16636 = cljs.core.not(inst_16635);
var inst_16637 = (inst_16634) && (inst_16636);
var state_16657__$1 = state_16657;
var statearr_16707_16764 = state_16657__$1;
(statearr_16707_16764[(2)] = inst_16637);

(statearr_16707_16764[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (10))){
var inst_16561 = (state_16657[(8)]);
var inst_16581 = (state_16657[(2)]);
var inst_16582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16581,cljs.core.cst$kw$solos);
var inst_16583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16581,cljs.core.cst$kw$mutes);
var inst_16584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16581,cljs.core.cst$kw$reads);
var inst_16585 = inst_16561;
var state_16657__$1 = (function (){var statearr_16708 = state_16657;
(statearr_16708[(16)] = inst_16582);

(statearr_16708[(17)] = inst_16583);

(statearr_16708[(7)] = inst_16585);

(statearr_16708[(18)] = inst_16584);

return statearr_16708;
})();
var statearr_16709_16765 = state_16657__$1;
(statearr_16709_16765[(2)] = null);

(statearr_16709_16765[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (18))){
var inst_16599 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16710_16766 = state_16657__$1;
(statearr_16710_16766[(2)] = inst_16599);

(statearr_16710_16766[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (37))){
var state_16657__$1 = state_16657;
var statearr_16711_16767 = state_16657__$1;
(statearr_16711_16767[(2)] = null);

(statearr_16711_16767[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16658 === (8))){
var inst_16561 = (state_16657[(8)]);
var inst_16578 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16561);
var state_16657__$1 = state_16657;
var statearr_16712_16768 = state_16657__$1;
(statearr_16712_16768[(2)] = inst_16578);

(statearr_16712_16768[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___16722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14755__auto__,c__14923__auto___16722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14756__auto__ = null;
var cljs$core$async$mix_$_state_machine__14756__auto____0 = (function (){
var statearr_16716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16716[(0)] = cljs$core$async$mix_$_state_machine__14756__auto__);

(statearr_16716[(1)] = (1));

return statearr_16716;
});
var cljs$core$async$mix_$_state_machine__14756__auto____1 = (function (state_16657){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_16657);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e16717){if((e16717 instanceof Object)){
var ex__14759__auto__ = e16717;
var statearr_16718_16769 = state_16657;
(statearr_16718_16769[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16657);

return cljs.core.cst$kw$recur;
} else {
throw e16717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__16770 = state_16657;
state_16657 = G__16770;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14756__auto__ = function(state_16657){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14756__auto____1.call(this,state_16657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14756__auto____0;
cljs$core$async$mix_$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14756__auto____1;
return cljs$core$async$mix_$_state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___16722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14925__auto__ = (function (){var statearr_16719 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_16719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___16722);

return statearr_16719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___16722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7956__auto__ = (((p == null))?null:p);
var m__7957__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7957__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7957__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7957__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7956__auto__ = (((p == null))?null:p);
var m__7957__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7957__auto__.call(null,p,v,ch));
} else {
var m__7957__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7957__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16771 = [];
var len__8426__auto___16774 = arguments.length;
var i__8427__auto___16775 = (0);
while(true){
if((i__8427__auto___16775 < len__8426__auto___16774)){
args16771.push((arguments[i__8427__auto___16775]));

var G__16776 = (i__8427__auto___16775 + (1));
i__8427__auto___16775 = G__16776;
continue;
} else {
}
break;
}

var G__16773 = args16771.length;
switch (G__16773) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16771.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7956__auto__ = (((p == null))?null:p);
var m__7957__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7957__auto__.call(null,p));
} else {
var m__7957__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7957__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7956__auto__ = (((p == null))?null:p);
var m__7957__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7956__auto__)]);
if(!((m__7957__auto__ == null))){
return (m__7957__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7957__auto__.call(null,p,v));
} else {
var m__7957__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7957__auto____$1 == null))){
return (m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7957__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7957__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16779 = [];
var len__8426__auto___16907 = arguments.length;
var i__8427__auto___16908 = (0);
while(true){
if((i__8427__auto___16908 < len__8426__auto___16907)){
args16779.push((arguments[i__8427__auto___16908]));

var G__16909 = (i__8427__auto___16908 + (1));
i__8427__auto___16908 = G__16909;
continue;
} else {
}
break;
}

var G__16781 = args16779.length;
switch (G__16781) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16779.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16782 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16782) : cljs.core.atom.call(null,G__16782));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7243__auto__)){
return or__7243__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7243__auto__,mults){
return (function (p1__16778_SHARP_){
if(cljs.core.truth_((p1__16778_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16778_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16778_SHARP_.call(null,topic)))){
return p1__16778_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16778_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7243__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16783 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16784){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16784 = meta16784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16785,meta16784__$1){
var self__ = this;
var _16785__$1 = this;
return (new cljs.core.async.t_cljs$core$async16783(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16784__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16785){
var self__ = this;
var _16785__$1 = this;
return self__.meta16784;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6728__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__6728__auto__)){
var m = temp__6728__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16786 = self__.mults;
var G__16787 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16786,G__16787) : cljs.core.reset_BANG_.call(null,G__16786,G__16787));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16783.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16784], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16783";

cljs.core.async.t_cljs$core$async16783.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async16783");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16783 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16783(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16784){
return (new cljs.core.async.t_cljs$core$async16783(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16784));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16783(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14923__auto___16911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___16911,mults,ensure_mult,p){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___16911,mults,ensure_mult,p){
return (function (state_16859){
var state_val_16860 = (state_16859[(1)]);
if((state_val_16860 === (7))){
var inst_16855 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16861_16912 = state_16859__$1;
(statearr_16861_16912[(2)] = inst_16855);

(statearr_16861_16912[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (20))){
var state_16859__$1 = state_16859;
var statearr_16862_16913 = state_16859__$1;
(statearr_16862_16913[(2)] = null);

(statearr_16862_16913[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (1))){
var state_16859__$1 = state_16859;
var statearr_16863_16914 = state_16859__$1;
(statearr_16863_16914[(2)] = null);

(statearr_16863_16914[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (24))){
var inst_16838 = (state_16859[(7)]);
var inst_16847 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16838);
var state_16859__$1 = state_16859;
var statearr_16864_16915 = state_16859__$1;
(statearr_16864_16915[(2)] = inst_16847);

(statearr_16864_16915[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (4))){
var inst_16790 = (state_16859[(8)]);
var inst_16790__$1 = (state_16859[(2)]);
var inst_16791 = (inst_16790__$1 == null);
var state_16859__$1 = (function (){var statearr_16865 = state_16859;
(statearr_16865[(8)] = inst_16790__$1);

return statearr_16865;
})();
if(cljs.core.truth_(inst_16791)){
var statearr_16866_16916 = state_16859__$1;
(statearr_16866_16916[(1)] = (5));

} else {
var statearr_16867_16917 = state_16859__$1;
(statearr_16867_16917[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (15))){
var inst_16832 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16868_16918 = state_16859__$1;
(statearr_16868_16918[(2)] = inst_16832);

(statearr_16868_16918[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (21))){
var inst_16852 = (state_16859[(2)]);
var state_16859__$1 = (function (){var statearr_16869 = state_16859;
(statearr_16869[(9)] = inst_16852);

return statearr_16869;
})();
var statearr_16870_16919 = state_16859__$1;
(statearr_16870_16919[(2)] = null);

(statearr_16870_16919[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (13))){
var inst_16814 = (state_16859[(10)]);
var inst_16816 = cljs.core.chunked_seq_QMARK_(inst_16814);
var state_16859__$1 = state_16859;
if(inst_16816){
var statearr_16871_16920 = state_16859__$1;
(statearr_16871_16920[(1)] = (16));

} else {
var statearr_16872_16921 = state_16859__$1;
(statearr_16872_16921[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (22))){
var inst_16844 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
if(cljs.core.truth_(inst_16844)){
var statearr_16873_16922 = state_16859__$1;
(statearr_16873_16922[(1)] = (23));

} else {
var statearr_16874_16923 = state_16859__$1;
(statearr_16874_16923[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (6))){
var inst_16790 = (state_16859[(8)]);
var inst_16840 = (state_16859[(11)]);
var inst_16838 = (state_16859[(7)]);
var inst_16838__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16790) : topic_fn.call(null,inst_16790));
var inst_16839 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16840__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16839,inst_16838__$1);
var state_16859__$1 = (function (){var statearr_16875 = state_16859;
(statearr_16875[(11)] = inst_16840__$1);

(statearr_16875[(7)] = inst_16838__$1);

return statearr_16875;
})();
if(cljs.core.truth_(inst_16840__$1)){
var statearr_16876_16924 = state_16859__$1;
(statearr_16876_16924[(1)] = (19));

} else {
var statearr_16877_16925 = state_16859__$1;
(statearr_16877_16925[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (25))){
var inst_16849 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16878_16926 = state_16859__$1;
(statearr_16878_16926[(2)] = inst_16849);

(statearr_16878_16926[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (17))){
var inst_16814 = (state_16859[(10)]);
var inst_16823 = cljs.core.first(inst_16814);
var inst_16824 = cljs.core.async.muxch_STAR_(inst_16823);
var inst_16825 = cljs.core.async.close_BANG_(inst_16824);
var inst_16826 = cljs.core.next(inst_16814);
var inst_16800 = inst_16826;
var inst_16801 = null;
var inst_16802 = (0);
var inst_16803 = (0);
var state_16859__$1 = (function (){var statearr_16879 = state_16859;
(statearr_16879[(12)] = inst_16803);

(statearr_16879[(13)] = inst_16802);

(statearr_16879[(14)] = inst_16800);

(statearr_16879[(15)] = inst_16825);

(statearr_16879[(16)] = inst_16801);

return statearr_16879;
})();
var statearr_16880_16927 = state_16859__$1;
(statearr_16880_16927[(2)] = null);

(statearr_16880_16927[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (3))){
var inst_16857 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16859__$1,inst_16857);
} else {
if((state_val_16860 === (12))){
var inst_16834 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16881_16928 = state_16859__$1;
(statearr_16881_16928[(2)] = inst_16834);

(statearr_16881_16928[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (2))){
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16859__$1,(4),ch);
} else {
if((state_val_16860 === (23))){
var state_16859__$1 = state_16859;
var statearr_16882_16929 = state_16859__$1;
(statearr_16882_16929[(2)] = null);

(statearr_16882_16929[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (19))){
var inst_16790 = (state_16859[(8)]);
var inst_16840 = (state_16859[(11)]);
var inst_16842 = cljs.core.async.muxch_STAR_(inst_16840);
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16859__$1,(22),inst_16842,inst_16790);
} else {
if((state_val_16860 === (11))){
var inst_16814 = (state_16859[(10)]);
var inst_16800 = (state_16859[(14)]);
var inst_16814__$1 = cljs.core.seq(inst_16800);
var state_16859__$1 = (function (){var statearr_16883 = state_16859;
(statearr_16883[(10)] = inst_16814__$1);

return statearr_16883;
})();
if(inst_16814__$1){
var statearr_16884_16930 = state_16859__$1;
(statearr_16884_16930[(1)] = (13));

} else {
var statearr_16885_16931 = state_16859__$1;
(statearr_16885_16931[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (9))){
var inst_16836 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16886_16932 = state_16859__$1;
(statearr_16886_16932[(2)] = inst_16836);

(statearr_16886_16932[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (5))){
var inst_16797 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16798 = cljs.core.vals(inst_16797);
var inst_16799 = cljs.core.seq(inst_16798);
var inst_16800 = inst_16799;
var inst_16801 = null;
var inst_16802 = (0);
var inst_16803 = (0);
var state_16859__$1 = (function (){var statearr_16887 = state_16859;
(statearr_16887[(12)] = inst_16803);

(statearr_16887[(13)] = inst_16802);

(statearr_16887[(14)] = inst_16800);

(statearr_16887[(16)] = inst_16801);

return statearr_16887;
})();
var statearr_16888_16933 = state_16859__$1;
(statearr_16888_16933[(2)] = null);

(statearr_16888_16933[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (14))){
var state_16859__$1 = state_16859;
var statearr_16892_16934 = state_16859__$1;
(statearr_16892_16934[(2)] = null);

(statearr_16892_16934[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (16))){
var inst_16814 = (state_16859[(10)]);
var inst_16818 = cljs.core.chunk_first(inst_16814);
var inst_16819 = cljs.core.chunk_rest(inst_16814);
var inst_16820 = cljs.core.count(inst_16818);
var inst_16800 = inst_16819;
var inst_16801 = inst_16818;
var inst_16802 = inst_16820;
var inst_16803 = (0);
var state_16859__$1 = (function (){var statearr_16893 = state_16859;
(statearr_16893[(12)] = inst_16803);

(statearr_16893[(13)] = inst_16802);

(statearr_16893[(14)] = inst_16800);

(statearr_16893[(16)] = inst_16801);

return statearr_16893;
})();
var statearr_16894_16935 = state_16859__$1;
(statearr_16894_16935[(2)] = null);

(statearr_16894_16935[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (10))){
var inst_16803 = (state_16859[(12)]);
var inst_16802 = (state_16859[(13)]);
var inst_16800 = (state_16859[(14)]);
var inst_16801 = (state_16859[(16)]);
var inst_16808 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16801,inst_16803);
var inst_16809 = cljs.core.async.muxch_STAR_(inst_16808);
var inst_16810 = cljs.core.async.close_BANG_(inst_16809);
var inst_16811 = (inst_16803 + (1));
var tmp16889 = inst_16802;
var tmp16890 = inst_16800;
var tmp16891 = inst_16801;
var inst_16800__$1 = tmp16890;
var inst_16801__$1 = tmp16891;
var inst_16802__$1 = tmp16889;
var inst_16803__$1 = inst_16811;
var state_16859__$1 = (function (){var statearr_16895 = state_16859;
(statearr_16895[(12)] = inst_16803__$1);

(statearr_16895[(13)] = inst_16802__$1);

(statearr_16895[(14)] = inst_16800__$1);

(statearr_16895[(17)] = inst_16810);

(statearr_16895[(16)] = inst_16801__$1);

return statearr_16895;
})();
var statearr_16896_16936 = state_16859__$1;
(statearr_16896_16936[(2)] = null);

(statearr_16896_16936[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (18))){
var inst_16829 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
var statearr_16897_16937 = state_16859__$1;
(statearr_16897_16937[(2)] = inst_16829);

(statearr_16897_16937[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16860 === (8))){
var inst_16803 = (state_16859[(12)]);
var inst_16802 = (state_16859[(13)]);
var inst_16805 = (inst_16803 < inst_16802);
var inst_16806 = inst_16805;
var state_16859__$1 = state_16859;
if(cljs.core.truth_(inst_16806)){
var statearr_16898_16938 = state_16859__$1;
(statearr_16898_16938[(1)] = (10));

} else {
var statearr_16899_16939 = state_16859__$1;
(statearr_16899_16939[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___16911,mults,ensure_mult,p))
;
return ((function (switch__14755__auto__,c__14923__auto___16911,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_16903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16903[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_16903[(1)] = (1));

return statearr_16903;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_16859){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_16859);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e16904){if((e16904 instanceof Object)){
var ex__14759__auto__ = e16904;
var statearr_16905_16940 = state_16859;
(statearr_16905_16940[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16859);

return cljs.core.cst$kw$recur;
} else {
throw e16904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__16941 = state_16859;
state_16859 = G__16941;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_16859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_16859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___16911,mults,ensure_mult,p))
})();
var state__14925__auto__ = (function (){var statearr_16906 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_16906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___16911);

return statearr_16906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___16911,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16942 = [];
var len__8426__auto___16945 = arguments.length;
var i__8427__auto___16946 = (0);
while(true){
if((i__8427__auto___16946 < len__8426__auto___16945)){
args16942.push((arguments[i__8427__auto___16946]));

var G__16947 = (i__8427__auto___16946 + (1));
i__8427__auto___16946 = G__16947;
continue;
} else {
}
break;
}

var G__16944 = args16942.length;
switch (G__16944) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16942.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16949 = [];
var len__8426__auto___16952 = arguments.length;
var i__8427__auto___16953 = (0);
while(true){
if((i__8427__auto___16953 < len__8426__auto___16952)){
args16949.push((arguments[i__8427__auto___16953]));

var G__16954 = (i__8427__auto___16953 + (1));
i__8427__auto___16953 = G__16954;
continue;
} else {
}
break;
}

var G__16951 = args16949.length;
switch (G__16951) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16949.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16956 = [];
var len__8426__auto___17027 = arguments.length;
var i__8427__auto___17028 = (0);
while(true){
if((i__8427__auto___17028 < len__8426__auto___17027)){
args16956.push((arguments[i__8427__auto___17028]));

var G__17029 = (i__8427__auto___17028 + (1));
i__8427__auto___17028 = G__17029;
continue;
} else {
}
break;
}

var G__16958 = args16956.length;
switch (G__16958) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16956.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14923__auto___17031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___17031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___17031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16997){
var state_val_16998 = (state_16997[(1)]);
if((state_val_16998 === (7))){
var state_16997__$1 = state_16997;
var statearr_16999_17032 = state_16997__$1;
(statearr_16999_17032[(2)] = null);

(statearr_16999_17032[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (1))){
var state_16997__$1 = state_16997;
var statearr_17000_17033 = state_16997__$1;
(statearr_17000_17033[(2)] = null);

(statearr_17000_17033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (4))){
var inst_16961 = (state_16997[(7)]);
var inst_16963 = (inst_16961 < cnt);
var state_16997__$1 = state_16997;
if(cljs.core.truth_(inst_16963)){
var statearr_17001_17034 = state_16997__$1;
(statearr_17001_17034[(1)] = (6));

} else {
var statearr_17002_17035 = state_16997__$1;
(statearr_17002_17035[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (15))){
var inst_16993 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
var statearr_17003_17036 = state_16997__$1;
(statearr_17003_17036[(2)] = inst_16993);

(statearr_17003_17036[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (13))){
var inst_16986 = cljs.core.async.close_BANG_(out);
var state_16997__$1 = state_16997;
var statearr_17004_17037 = state_16997__$1;
(statearr_17004_17037[(2)] = inst_16986);

(statearr_17004_17037[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (6))){
var state_16997__$1 = state_16997;
var statearr_17005_17038 = state_16997__$1;
(statearr_17005_17038[(2)] = null);

(statearr_17005_17038[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (3))){
var inst_16995 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16997__$1,inst_16995);
} else {
if((state_val_16998 === (12))){
var inst_16983 = (state_16997[(8)]);
var inst_16983__$1 = (state_16997[(2)]);
var inst_16984 = cljs.core.some(cljs.core.nil_QMARK_,inst_16983__$1);
var state_16997__$1 = (function (){var statearr_17006 = state_16997;
(statearr_17006[(8)] = inst_16983__$1);

return statearr_17006;
})();
if(cljs.core.truth_(inst_16984)){
var statearr_17007_17039 = state_16997__$1;
(statearr_17007_17039[(1)] = (13));

} else {
var statearr_17008_17040 = state_16997__$1;
(statearr_17008_17040[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (2))){
var inst_16960 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16961 = (0);
var state_16997__$1 = (function (){var statearr_17009 = state_16997;
(statearr_17009[(7)] = inst_16961);

(statearr_17009[(9)] = inst_16960);

return statearr_17009;
})();
var statearr_17010_17041 = state_16997__$1;
(statearr_17010_17041[(2)] = null);

(statearr_17010_17041[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (11))){
var inst_16961 = (state_16997[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16997,(10),Object,null,(9));
var inst_16970 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16961) : chs__$1.call(null,inst_16961));
var inst_16971 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16961) : done.call(null,inst_16961));
var inst_16972 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16970,inst_16971);
var state_16997__$1 = state_16997;
var statearr_17011_17042 = state_16997__$1;
(statearr_17011_17042[(2)] = inst_16972);


cljs.core.async.impl.ioc_helpers.process_exception(state_16997__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (9))){
var inst_16961 = (state_16997[(7)]);
var inst_16974 = (state_16997[(2)]);
var inst_16975 = (inst_16961 + (1));
var inst_16961__$1 = inst_16975;
var state_16997__$1 = (function (){var statearr_17012 = state_16997;
(statearr_17012[(7)] = inst_16961__$1);

(statearr_17012[(10)] = inst_16974);

return statearr_17012;
})();
var statearr_17013_17043 = state_16997__$1;
(statearr_17013_17043[(2)] = null);

(statearr_17013_17043[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (5))){
var inst_16981 = (state_16997[(2)]);
var state_16997__$1 = (function (){var statearr_17014 = state_16997;
(statearr_17014[(11)] = inst_16981);

return statearr_17014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16997__$1,(12),dchan);
} else {
if((state_val_16998 === (14))){
var inst_16983 = (state_16997[(8)]);
var inst_16988 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16983);
var state_16997__$1 = state_16997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16997__$1,(16),out,inst_16988);
} else {
if((state_val_16998 === (16))){
var inst_16990 = (state_16997[(2)]);
var state_16997__$1 = (function (){var statearr_17015 = state_16997;
(statearr_17015[(12)] = inst_16990);

return statearr_17015;
})();
var statearr_17016_17044 = state_16997__$1;
(statearr_17016_17044[(2)] = null);

(statearr_17016_17044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (10))){
var inst_16965 = (state_16997[(2)]);
var inst_16966 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16997__$1 = (function (){var statearr_17017 = state_16997;
(statearr_17017[(13)] = inst_16965);

return statearr_17017;
})();
var statearr_17018_17045 = state_16997__$1;
(statearr_17018_17045[(2)] = inst_16966);


cljs.core.async.impl.ioc_helpers.process_exception(state_16997__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16998 === (8))){
var inst_16979 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
var statearr_17019_17046 = state_16997__$1;
(statearr_17019_17046[(2)] = inst_16979);

(statearr_17019_17046[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___17031,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14755__auto__,c__14923__auto___17031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_17023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17023[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_17023[(1)] = (1));

return statearr_17023;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_16997){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_16997);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e17024){if((e17024 instanceof Object)){
var ex__14759__auto__ = e17024;
var statearr_17025_17047 = state_16997;
(statearr_17025_17047[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16997);

return cljs.core.cst$kw$recur;
} else {
throw e17024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__17048 = state_16997;
state_16997 = G__17048;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_16997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_16997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___17031,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14925__auto__ = (function (){var statearr_17026 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_17026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___17031);

return statearr_17026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___17031,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args17050 = [];
var len__8426__auto___17108 = arguments.length;
var i__8427__auto___17109 = (0);
while(true){
if((i__8427__auto___17109 < len__8426__auto___17108)){
args17050.push((arguments[i__8427__auto___17109]));

var G__17110 = (i__8427__auto___17109 + (1));
i__8427__auto___17109 = G__17110;
continue;
} else {
}
break;
}

var G__17052 = args17050.length;
switch (G__17052) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17050.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14923__auto___17112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___17112,out){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___17112,out){
return (function (state_17084){
var state_val_17085 = (state_17084[(1)]);
if((state_val_17085 === (7))){
var inst_17064 = (state_17084[(7)]);
var inst_17063 = (state_17084[(8)]);
var inst_17063__$1 = (state_17084[(2)]);
var inst_17064__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17063__$1,(0),null);
var inst_17065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17063__$1,(1),null);
var inst_17066 = (inst_17064__$1 == null);
var state_17084__$1 = (function (){var statearr_17086 = state_17084;
(statearr_17086[(7)] = inst_17064__$1);

(statearr_17086[(8)] = inst_17063__$1);

(statearr_17086[(9)] = inst_17065);

return statearr_17086;
})();
if(cljs.core.truth_(inst_17066)){
var statearr_17087_17113 = state_17084__$1;
(statearr_17087_17113[(1)] = (8));

} else {
var statearr_17088_17114 = state_17084__$1;
(statearr_17088_17114[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17085 === (1))){
var inst_17053 = cljs.core.vec(chs);
var inst_17054 = inst_17053;
var state_17084__$1 = (function (){var statearr_17089 = state_17084;
(statearr_17089[(10)] = inst_17054);

return statearr_17089;
})();
var statearr_17090_17115 = state_17084__$1;
(statearr_17090_17115[(2)] = null);

(statearr_17090_17115[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17085 === (4))){
var inst_17054 = (state_17084[(10)]);
var state_17084__$1 = state_17084;
return cljs.core.async.ioc_alts_BANG_(state_17084__$1,(7),inst_17054);
} else {
if((state_val_17085 === (6))){
var inst_17080 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17091_17116 = state_17084__$1;
(statearr_17091_17116[(2)] = inst_17080);

(statearr_17091_17116[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17085 === (3))){
var inst_17082 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17084__$1,inst_17082);
} else {
if((state_val_17085 === (2))){
var inst_17054 = (state_17084[(10)]);
var inst_17056 = cljs.core.count(inst_17054);
var inst_17057 = (inst_17056 > (0));
var state_17084__$1 = state_17084;
if(cljs.core.truth_(inst_17057)){
var statearr_17093_17117 = state_17084__$1;
(statearr_17093_17117[(1)] = (4));

} else {
var statearr_17094_17118 = state_17084__$1;
(statearr_17094_17118[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17085 === (11))){
var inst_17054 = (state_17084[(10)]);
var inst_17073 = (state_17084[(2)]);
var tmp17092 = inst_17054;
var inst_17054__$1 = tmp17092;
var state_17084__$1 = (function (){var statearr_17095 = state_17084;
(statearr_17095[(10)] = inst_17054__$1);

(statearr_17095[(11)] = inst_17073);

return statearr_17095;
})();
var statearr_17096_17119 = state_17084__$1;
(statearr_17096_17119[(2)] = null);

(statearr_17096_17119[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17085 === (9))){
var inst_17064 = (state_17084[(7)]);
var state_17084__$1 = state_17084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17084__$1,(11),out,inst_17064);
} else {
if((state_val_17085 === (5))){
var inst_17078 = cljs.core.async.close_BANG_(out);
var state_17084__$1 = state_17084;
var statearr_17097_17120 = state_17084__$1;
(statearr_17097_17120[(2)] = inst_17078);

(statearr_17097_17120[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17085 === (10))){
var inst_17076 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17098_17121 = state_17084__$1;
(statearr_17098_17121[(2)] = inst_17076);

(statearr_17098_17121[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17085 === (8))){
var inst_17054 = (state_17084[(10)]);
var inst_17064 = (state_17084[(7)]);
var inst_17063 = (state_17084[(8)]);
var inst_17065 = (state_17084[(9)]);
var inst_17068 = (function (){var cs = inst_17054;
var vec__17059 = inst_17063;
var v = inst_17064;
var c = inst_17065;
return ((function (cs,vec__17059,v,c,inst_17054,inst_17064,inst_17063,inst_17065,state_val_17085,c__14923__auto___17112,out){
return (function (p1__17049_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17049_SHARP_);
});
;})(cs,vec__17059,v,c,inst_17054,inst_17064,inst_17063,inst_17065,state_val_17085,c__14923__auto___17112,out))
})();
var inst_17069 = cljs.core.filterv(inst_17068,inst_17054);
var inst_17054__$1 = inst_17069;
var state_17084__$1 = (function (){var statearr_17099 = state_17084;
(statearr_17099[(10)] = inst_17054__$1);

return statearr_17099;
})();
var statearr_17100_17122 = state_17084__$1;
(statearr_17100_17122[(2)] = null);

(statearr_17100_17122[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___17112,out))
;
return ((function (switch__14755__auto__,c__14923__auto___17112,out){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_17104 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17104[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_17104[(1)] = (1));

return statearr_17104;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_17084){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_17084);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e17105){if((e17105 instanceof Object)){
var ex__14759__auto__ = e17105;
var statearr_17106_17123 = state_17084;
(statearr_17106_17123[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17084);

return cljs.core.cst$kw$recur;
} else {
throw e17105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__17124 = state_17084;
state_17084 = G__17124;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_17084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_17084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___17112,out))
})();
var state__14925__auto__ = (function (){var statearr_17107 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_17107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___17112);

return statearr_17107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___17112,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args17125 = [];
var len__8426__auto___17174 = arguments.length;
var i__8427__auto___17175 = (0);
while(true){
if((i__8427__auto___17175 < len__8426__auto___17174)){
args17125.push((arguments[i__8427__auto___17175]));

var G__17176 = (i__8427__auto___17175 + (1));
i__8427__auto___17175 = G__17176;
continue;
} else {
}
break;
}

var G__17127 = args17125.length;
switch (G__17127) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17125.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14923__auto___17178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___17178,out){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___17178,out){
return (function (state_17151){
var state_val_17152 = (state_17151[(1)]);
if((state_val_17152 === (7))){
var inst_17133 = (state_17151[(7)]);
var inst_17133__$1 = (state_17151[(2)]);
var inst_17134 = (inst_17133__$1 == null);
var inst_17135 = cljs.core.not(inst_17134);
var state_17151__$1 = (function (){var statearr_17153 = state_17151;
(statearr_17153[(7)] = inst_17133__$1);

return statearr_17153;
})();
if(inst_17135){
var statearr_17154_17179 = state_17151__$1;
(statearr_17154_17179[(1)] = (8));

} else {
var statearr_17155_17180 = state_17151__$1;
(statearr_17155_17180[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17152 === (1))){
var inst_17128 = (0);
var state_17151__$1 = (function (){var statearr_17156 = state_17151;
(statearr_17156[(8)] = inst_17128);

return statearr_17156;
})();
var statearr_17157_17181 = state_17151__$1;
(statearr_17157_17181[(2)] = null);

(statearr_17157_17181[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17152 === (4))){
var state_17151__$1 = state_17151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17151__$1,(7),ch);
} else {
if((state_val_17152 === (6))){
var inst_17146 = (state_17151[(2)]);
var state_17151__$1 = state_17151;
var statearr_17158_17182 = state_17151__$1;
(statearr_17158_17182[(2)] = inst_17146);

(statearr_17158_17182[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17152 === (3))){
var inst_17148 = (state_17151[(2)]);
var inst_17149 = cljs.core.async.close_BANG_(out);
var state_17151__$1 = (function (){var statearr_17159 = state_17151;
(statearr_17159[(9)] = inst_17148);

return statearr_17159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17151__$1,inst_17149);
} else {
if((state_val_17152 === (2))){
var inst_17128 = (state_17151[(8)]);
var inst_17130 = (inst_17128 < n);
var state_17151__$1 = state_17151;
if(cljs.core.truth_(inst_17130)){
var statearr_17160_17183 = state_17151__$1;
(statearr_17160_17183[(1)] = (4));

} else {
var statearr_17161_17184 = state_17151__$1;
(statearr_17161_17184[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17152 === (11))){
var inst_17128 = (state_17151[(8)]);
var inst_17138 = (state_17151[(2)]);
var inst_17139 = (inst_17128 + (1));
var inst_17128__$1 = inst_17139;
var state_17151__$1 = (function (){var statearr_17162 = state_17151;
(statearr_17162[(8)] = inst_17128__$1);

(statearr_17162[(10)] = inst_17138);

return statearr_17162;
})();
var statearr_17163_17185 = state_17151__$1;
(statearr_17163_17185[(2)] = null);

(statearr_17163_17185[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17152 === (9))){
var state_17151__$1 = state_17151;
var statearr_17164_17186 = state_17151__$1;
(statearr_17164_17186[(2)] = null);

(statearr_17164_17186[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17152 === (5))){
var state_17151__$1 = state_17151;
var statearr_17165_17187 = state_17151__$1;
(statearr_17165_17187[(2)] = null);

(statearr_17165_17187[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17152 === (10))){
var inst_17143 = (state_17151[(2)]);
var state_17151__$1 = state_17151;
var statearr_17166_17188 = state_17151__$1;
(statearr_17166_17188[(2)] = inst_17143);

(statearr_17166_17188[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17152 === (8))){
var inst_17133 = (state_17151[(7)]);
var state_17151__$1 = state_17151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17151__$1,(11),out,inst_17133);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___17178,out))
;
return ((function (switch__14755__auto__,c__14923__auto___17178,out){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_17170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17170[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_17170[(1)] = (1));

return statearr_17170;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_17151){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_17151);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e17171){if((e17171 instanceof Object)){
var ex__14759__auto__ = e17171;
var statearr_17172_17189 = state_17151;
(statearr_17172_17189[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17151);

return cljs.core.cst$kw$recur;
} else {
throw e17171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__17190 = state_17151;
state_17151 = G__17190;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_17151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_17151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___17178,out))
})();
var state__14925__auto__ = (function (){var statearr_17173 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_17173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___17178);

return statearr_17173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___17178,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17200 = (function (map_LT_,f,ch,meta17201){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17201 = meta17201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17202,meta17201__$1){
var self__ = this;
var _17202__$1 = this;
return (new cljs.core.async.t_cljs$core$async17200(self__.map_LT_,self__.f,self__.ch,meta17201__$1));
});

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17202){
var self__ = this;
var _17202__$1 = this;
return self__.meta17201;
});

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17203 = (function (map_LT_,f,ch,meta17201,_,fn1,meta17204){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17201 = meta17201;
this._ = _;
this.fn1 = fn1;
this.meta17204 = meta17204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17205,meta17204__$1){
var self__ = this;
var _17205__$1 = this;
return (new cljs.core.async.t_cljs$core$async17203(self__.map_LT_,self__.f,self__.ch,self__.meta17201,self__._,self__.fn1,meta17204__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17205){
var self__ = this;
var _17205__$1 = this;
return self__.meta17204;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17191_SHARP_){
var G__17206 = (((p1__17191_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17191_SHARP_) : self__.f.call(null,p1__17191_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17206) : f1.call(null,G__17206));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17203.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17201,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17200], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17204], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17203";

cljs.core.async.t_cljs$core$async17203.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async17203");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17203 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17203(map_LT___$1,f__$1,ch__$1,meta17201__$1,___$2,fn1__$1,meta17204){
return (new cljs.core.async.t_cljs$core$async17203(map_LT___$1,f__$1,ch__$1,meta17201__$1,___$2,fn1__$1,meta17204));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17203(self__.map_LT_,self__.f,self__.ch,self__.meta17201,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7231__auto__ = ret;
if(cljs.core.truth_(and__7231__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7231__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17207 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17207) : self__.f.call(null,G__17207));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17201], null);
});

cljs.core.async.t_cljs$core$async17200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17200";

cljs.core.async.t_cljs$core$async17200.cljs$lang$ctorPrWriter = (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async17200");
});

cljs.core.async.__GT_t_cljs$core$async17200 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17200(map_LT___$1,f__$1,ch__$1,meta17201){
return (new cljs.core.async.t_cljs$core$async17200(map_LT___$1,f__$1,ch__$1,meta17201));
});

}

return (new cljs.core.async.t_cljs$core$async17200(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17211 = (function (map_GT_,f,ch,meta17212){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17212 = meta17212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17213,meta17212__$1){
var self__ = this;
var _17213__$1 = this;
return (new cljs.core.async.t_cljs$core$async17211(self__.map_GT_,self__.f,self__.ch,meta17212__$1));
});

cljs.core.async.t_cljs$core$async17211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17213){
var self__ = this;
var _17213__$1 = this;
return self__.meta17212;
});

cljs.core.async.t_cljs$core$async17211.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17211.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17211.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17212], null);
});

cljs.core.async.t_cljs$core$async17211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17211";

cljs.core.async.t_cljs$core$async17211.cljs$lang$ctorPrWriter = (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async17211");
});

cljs.core.async.__GT_t_cljs$core$async17211 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17211(map_GT___$1,f__$1,ch__$1,meta17212){
return (new cljs.core.async.t_cljs$core$async17211(map_GT___$1,f__$1,ch__$1,meta17212));
});

}

return (new cljs.core.async.t_cljs$core$async17211(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17217 = (function (filter_GT_,p,ch,meta17218){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17218 = meta17218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17219,meta17218__$1){
var self__ = this;
var _17219__$1 = this;
return (new cljs.core.async.t_cljs$core$async17217(self__.filter_GT_,self__.p,self__.ch,meta17218__$1));
});

cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17219){
var self__ = this;
var _17219__$1 = this;
return self__.meta17218;
});

cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17218], null);
});

cljs.core.async.t_cljs$core$async17217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17217";

cljs.core.async.t_cljs$core$async17217.cljs$lang$ctorPrWriter = (function (this__7895__auto__,writer__7896__auto__,opt__7897__auto__){
return cljs.core._write(writer__7896__auto__,"cljs.core.async/t_cljs$core$async17217");
});

cljs.core.async.__GT_t_cljs$core$async17217 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17217(filter_GT___$1,p__$1,ch__$1,meta17218){
return (new cljs.core.async.t_cljs$core$async17217(filter_GT___$1,p__$1,ch__$1,meta17218));
});

}

return (new cljs.core.async.t_cljs$core$async17217(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args17220 = [];
var len__8426__auto___17264 = arguments.length;
var i__8427__auto___17265 = (0);
while(true){
if((i__8427__auto___17265 < len__8426__auto___17264)){
args17220.push((arguments[i__8427__auto___17265]));

var G__17266 = (i__8427__auto___17265 + (1));
i__8427__auto___17265 = G__17266;
continue;
} else {
}
break;
}

var G__17222 = args17220.length;
switch (G__17222) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17220.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14923__auto___17268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___17268,out){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___17268,out){
return (function (state_17243){
var state_val_17244 = (state_17243[(1)]);
if((state_val_17244 === (7))){
var inst_17239 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17245_17269 = state_17243__$1;
(statearr_17245_17269[(2)] = inst_17239);

(statearr_17245_17269[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17244 === (1))){
var state_17243__$1 = state_17243;
var statearr_17246_17270 = state_17243__$1;
(statearr_17246_17270[(2)] = null);

(statearr_17246_17270[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17244 === (4))){
var inst_17225 = (state_17243[(7)]);
var inst_17225__$1 = (state_17243[(2)]);
var inst_17226 = (inst_17225__$1 == null);
var state_17243__$1 = (function (){var statearr_17247 = state_17243;
(statearr_17247[(7)] = inst_17225__$1);

return statearr_17247;
})();
if(cljs.core.truth_(inst_17226)){
var statearr_17248_17271 = state_17243__$1;
(statearr_17248_17271[(1)] = (5));

} else {
var statearr_17249_17272 = state_17243__$1;
(statearr_17249_17272[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17244 === (6))){
var inst_17225 = (state_17243[(7)]);
var inst_17230 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17225) : p.call(null,inst_17225));
var state_17243__$1 = state_17243;
if(cljs.core.truth_(inst_17230)){
var statearr_17250_17273 = state_17243__$1;
(statearr_17250_17273[(1)] = (8));

} else {
var statearr_17251_17274 = state_17243__$1;
(statearr_17251_17274[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17244 === (3))){
var inst_17241 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17243__$1,inst_17241);
} else {
if((state_val_17244 === (2))){
var state_17243__$1 = state_17243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17243__$1,(4),ch);
} else {
if((state_val_17244 === (11))){
var inst_17233 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17252_17275 = state_17243__$1;
(statearr_17252_17275[(2)] = inst_17233);

(statearr_17252_17275[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17244 === (9))){
var state_17243__$1 = state_17243;
var statearr_17253_17276 = state_17243__$1;
(statearr_17253_17276[(2)] = null);

(statearr_17253_17276[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17244 === (5))){
var inst_17228 = cljs.core.async.close_BANG_(out);
var state_17243__$1 = state_17243;
var statearr_17254_17277 = state_17243__$1;
(statearr_17254_17277[(2)] = inst_17228);

(statearr_17254_17277[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17244 === (10))){
var inst_17236 = (state_17243[(2)]);
var state_17243__$1 = (function (){var statearr_17255 = state_17243;
(statearr_17255[(8)] = inst_17236);

return statearr_17255;
})();
var statearr_17256_17278 = state_17243__$1;
(statearr_17256_17278[(2)] = null);

(statearr_17256_17278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17244 === (8))){
var inst_17225 = (state_17243[(7)]);
var state_17243__$1 = state_17243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17243__$1,(11),out,inst_17225);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___17268,out))
;
return ((function (switch__14755__auto__,c__14923__auto___17268,out){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_17260 = [null,null,null,null,null,null,null,null,null];
(statearr_17260[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_17260[(1)] = (1));

return statearr_17260;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_17243){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_17243);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e17261){if((e17261 instanceof Object)){
var ex__14759__auto__ = e17261;
var statearr_17262_17279 = state_17243;
(statearr_17262_17279[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17243);

return cljs.core.cst$kw$recur;
} else {
throw e17261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__17280 = state_17243;
state_17243 = G__17280;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_17243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_17243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___17268,out))
})();
var state__14925__auto__ = (function (){var statearr_17263 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_17263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___17268);

return statearr_17263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___17268,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17281 = [];
var len__8426__auto___17284 = arguments.length;
var i__8427__auto___17285 = (0);
while(true){
if((i__8427__auto___17285 < len__8426__auto___17284)){
args17281.push((arguments[i__8427__auto___17285]));

var G__17286 = (i__8427__auto___17285 + (1));
i__8427__auto___17285 = G__17286;
continue;
} else {
}
break;
}

var G__17283 = args17281.length;
switch (G__17283) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17281.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14923__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto__){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto__){
return (function (state_17453){
var state_val_17454 = (state_17453[(1)]);
if((state_val_17454 === (7))){
var inst_17449 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17455_17496 = state_17453__$1;
(statearr_17455_17496[(2)] = inst_17449);

(statearr_17455_17496[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (20))){
var inst_17419 = (state_17453[(7)]);
var inst_17430 = (state_17453[(2)]);
var inst_17431 = cljs.core.next(inst_17419);
var inst_17405 = inst_17431;
var inst_17406 = null;
var inst_17407 = (0);
var inst_17408 = (0);
var state_17453__$1 = (function (){var statearr_17456 = state_17453;
(statearr_17456[(8)] = inst_17407);

(statearr_17456[(9)] = inst_17408);

(statearr_17456[(10)] = inst_17430);

(statearr_17456[(11)] = inst_17406);

(statearr_17456[(12)] = inst_17405);

return statearr_17456;
})();
var statearr_17457_17497 = state_17453__$1;
(statearr_17457_17497[(2)] = null);

(statearr_17457_17497[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (1))){
var state_17453__$1 = state_17453;
var statearr_17458_17498 = state_17453__$1;
(statearr_17458_17498[(2)] = null);

(statearr_17458_17498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (4))){
var inst_17394 = (state_17453[(13)]);
var inst_17394__$1 = (state_17453[(2)]);
var inst_17395 = (inst_17394__$1 == null);
var state_17453__$1 = (function (){var statearr_17459 = state_17453;
(statearr_17459[(13)] = inst_17394__$1);

return statearr_17459;
})();
if(cljs.core.truth_(inst_17395)){
var statearr_17460_17499 = state_17453__$1;
(statearr_17460_17499[(1)] = (5));

} else {
var statearr_17461_17500 = state_17453__$1;
(statearr_17461_17500[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (15))){
var state_17453__$1 = state_17453;
var statearr_17465_17501 = state_17453__$1;
(statearr_17465_17501[(2)] = null);

(statearr_17465_17501[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (21))){
var state_17453__$1 = state_17453;
var statearr_17466_17502 = state_17453__$1;
(statearr_17466_17502[(2)] = null);

(statearr_17466_17502[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (13))){
var inst_17407 = (state_17453[(8)]);
var inst_17408 = (state_17453[(9)]);
var inst_17406 = (state_17453[(11)]);
var inst_17405 = (state_17453[(12)]);
var inst_17415 = (state_17453[(2)]);
var inst_17416 = (inst_17408 + (1));
var tmp17462 = inst_17407;
var tmp17463 = inst_17406;
var tmp17464 = inst_17405;
var inst_17405__$1 = tmp17464;
var inst_17406__$1 = tmp17463;
var inst_17407__$1 = tmp17462;
var inst_17408__$1 = inst_17416;
var state_17453__$1 = (function (){var statearr_17467 = state_17453;
(statearr_17467[(8)] = inst_17407__$1);

(statearr_17467[(14)] = inst_17415);

(statearr_17467[(9)] = inst_17408__$1);

(statearr_17467[(11)] = inst_17406__$1);

(statearr_17467[(12)] = inst_17405__$1);

return statearr_17467;
})();
var statearr_17468_17503 = state_17453__$1;
(statearr_17468_17503[(2)] = null);

(statearr_17468_17503[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (22))){
var state_17453__$1 = state_17453;
var statearr_17469_17504 = state_17453__$1;
(statearr_17469_17504[(2)] = null);

(statearr_17469_17504[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (6))){
var inst_17394 = (state_17453[(13)]);
var inst_17403 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17394) : f.call(null,inst_17394));
var inst_17404 = cljs.core.seq(inst_17403);
var inst_17405 = inst_17404;
var inst_17406 = null;
var inst_17407 = (0);
var inst_17408 = (0);
var state_17453__$1 = (function (){var statearr_17470 = state_17453;
(statearr_17470[(8)] = inst_17407);

(statearr_17470[(9)] = inst_17408);

(statearr_17470[(11)] = inst_17406);

(statearr_17470[(12)] = inst_17405);

return statearr_17470;
})();
var statearr_17471_17505 = state_17453__$1;
(statearr_17471_17505[(2)] = null);

(statearr_17471_17505[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (17))){
var inst_17419 = (state_17453[(7)]);
var inst_17423 = cljs.core.chunk_first(inst_17419);
var inst_17424 = cljs.core.chunk_rest(inst_17419);
var inst_17425 = cljs.core.count(inst_17423);
var inst_17405 = inst_17424;
var inst_17406 = inst_17423;
var inst_17407 = inst_17425;
var inst_17408 = (0);
var state_17453__$1 = (function (){var statearr_17472 = state_17453;
(statearr_17472[(8)] = inst_17407);

(statearr_17472[(9)] = inst_17408);

(statearr_17472[(11)] = inst_17406);

(statearr_17472[(12)] = inst_17405);

return statearr_17472;
})();
var statearr_17473_17506 = state_17453__$1;
(statearr_17473_17506[(2)] = null);

(statearr_17473_17506[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (3))){
var inst_17451 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17453__$1,inst_17451);
} else {
if((state_val_17454 === (12))){
var inst_17439 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17474_17507 = state_17453__$1;
(statearr_17474_17507[(2)] = inst_17439);

(statearr_17474_17507[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (2))){
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17453__$1,(4),in$);
} else {
if((state_val_17454 === (23))){
var inst_17447 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17475_17508 = state_17453__$1;
(statearr_17475_17508[(2)] = inst_17447);

(statearr_17475_17508[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (19))){
var inst_17434 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17476_17509 = state_17453__$1;
(statearr_17476_17509[(2)] = inst_17434);

(statearr_17476_17509[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (11))){
var inst_17419 = (state_17453[(7)]);
var inst_17405 = (state_17453[(12)]);
var inst_17419__$1 = cljs.core.seq(inst_17405);
var state_17453__$1 = (function (){var statearr_17477 = state_17453;
(statearr_17477[(7)] = inst_17419__$1);

return statearr_17477;
})();
if(inst_17419__$1){
var statearr_17478_17510 = state_17453__$1;
(statearr_17478_17510[(1)] = (14));

} else {
var statearr_17479_17511 = state_17453__$1;
(statearr_17479_17511[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (9))){
var inst_17441 = (state_17453[(2)]);
var inst_17442 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17453__$1 = (function (){var statearr_17480 = state_17453;
(statearr_17480[(15)] = inst_17441);

return statearr_17480;
})();
if(cljs.core.truth_(inst_17442)){
var statearr_17481_17512 = state_17453__$1;
(statearr_17481_17512[(1)] = (21));

} else {
var statearr_17482_17513 = state_17453__$1;
(statearr_17482_17513[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (5))){
var inst_17397 = cljs.core.async.close_BANG_(out);
var state_17453__$1 = state_17453;
var statearr_17483_17514 = state_17453__$1;
(statearr_17483_17514[(2)] = inst_17397);

(statearr_17483_17514[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (14))){
var inst_17419 = (state_17453[(7)]);
var inst_17421 = cljs.core.chunked_seq_QMARK_(inst_17419);
var state_17453__$1 = state_17453;
if(inst_17421){
var statearr_17484_17515 = state_17453__$1;
(statearr_17484_17515[(1)] = (17));

} else {
var statearr_17485_17516 = state_17453__$1;
(statearr_17485_17516[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (16))){
var inst_17437 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17486_17517 = state_17453__$1;
(statearr_17486_17517[(2)] = inst_17437);

(statearr_17486_17517[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17454 === (10))){
var inst_17408 = (state_17453[(9)]);
var inst_17406 = (state_17453[(11)]);
var inst_17413 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17406,inst_17408);
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17453__$1,(13),out,inst_17413);
} else {
if((state_val_17454 === (18))){
var inst_17419 = (state_17453[(7)]);
var inst_17428 = cljs.core.first(inst_17419);
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17453__$1,(20),out,inst_17428);
} else {
if((state_val_17454 === (8))){
var inst_17407 = (state_17453[(8)]);
var inst_17408 = (state_17453[(9)]);
var inst_17410 = (inst_17408 < inst_17407);
var inst_17411 = inst_17410;
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17411)){
var statearr_17487_17518 = state_17453__$1;
(statearr_17487_17518[(1)] = (10));

} else {
var statearr_17488_17519 = state_17453__$1;
(statearr_17488_17519[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto__))
;
return ((function (switch__14755__auto__,c__14923__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14756__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14756__auto____0 = (function (){
var statearr_17492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17492[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14756__auto__);

(statearr_17492[(1)] = (1));

return statearr_17492;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14756__auto____1 = (function (state_17453){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_17453);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e17493){if((e17493 instanceof Object)){
var ex__14759__auto__ = e17493;
var statearr_17494_17520 = state_17453;
(statearr_17494_17520[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17453);

return cljs.core.cst$kw$recur;
} else {
throw e17493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__17521 = state_17453;
state_17453 = G__17521;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14756__auto__ = function(state_17453){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14756__auto____1.call(this,state_17453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14756__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14756__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto__))
})();
var state__14925__auto__ = (function (){var statearr_17495 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_17495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto__);

return statearr_17495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto__))
);

return c__14923__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17522 = [];
var len__8426__auto___17525 = arguments.length;
var i__8427__auto___17526 = (0);
while(true){
if((i__8427__auto___17526 < len__8426__auto___17525)){
args17522.push((arguments[i__8427__auto___17526]));

var G__17527 = (i__8427__auto___17526 + (1));
i__8427__auto___17526 = G__17527;
continue;
} else {
}
break;
}

var G__17524 = args17522.length;
switch (G__17524) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17522.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args17529 = [];
var len__8426__auto___17532 = arguments.length;
var i__8427__auto___17533 = (0);
while(true){
if((i__8427__auto___17533 < len__8426__auto___17532)){
args17529.push((arguments[i__8427__auto___17533]));

var G__17534 = (i__8427__auto___17533 + (1));
i__8427__auto___17533 = G__17534;
continue;
} else {
}
break;
}

var G__17531 = args17529.length;
switch (G__17531) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17529.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args17536 = [];
var len__8426__auto___17587 = arguments.length;
var i__8427__auto___17588 = (0);
while(true){
if((i__8427__auto___17588 < len__8426__auto___17587)){
args17536.push((arguments[i__8427__auto___17588]));

var G__17589 = (i__8427__auto___17588 + (1));
i__8427__auto___17588 = G__17589;
continue;
} else {
}
break;
}

var G__17538 = args17536.length;
switch (G__17538) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17536.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14923__auto___17591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___17591,out){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___17591,out){
return (function (state_17562){
var state_val_17563 = (state_17562[(1)]);
if((state_val_17563 === (7))){
var inst_17557 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17564_17592 = state_17562__$1;
(statearr_17564_17592[(2)] = inst_17557);

(statearr_17564_17592[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (1))){
var inst_17539 = null;
var state_17562__$1 = (function (){var statearr_17565 = state_17562;
(statearr_17565[(7)] = inst_17539);

return statearr_17565;
})();
var statearr_17566_17593 = state_17562__$1;
(statearr_17566_17593[(2)] = null);

(statearr_17566_17593[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (4))){
var inst_17542 = (state_17562[(8)]);
var inst_17542__$1 = (state_17562[(2)]);
var inst_17543 = (inst_17542__$1 == null);
var inst_17544 = cljs.core.not(inst_17543);
var state_17562__$1 = (function (){var statearr_17567 = state_17562;
(statearr_17567[(8)] = inst_17542__$1);

return statearr_17567;
})();
if(inst_17544){
var statearr_17568_17594 = state_17562__$1;
(statearr_17568_17594[(1)] = (5));

} else {
var statearr_17569_17595 = state_17562__$1;
(statearr_17569_17595[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (6))){
var state_17562__$1 = state_17562;
var statearr_17570_17596 = state_17562__$1;
(statearr_17570_17596[(2)] = null);

(statearr_17570_17596[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (3))){
var inst_17559 = (state_17562[(2)]);
var inst_17560 = cljs.core.async.close_BANG_(out);
var state_17562__$1 = (function (){var statearr_17571 = state_17562;
(statearr_17571[(9)] = inst_17559);

return statearr_17571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17562__$1,inst_17560);
} else {
if((state_val_17563 === (2))){
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17562__$1,(4),ch);
} else {
if((state_val_17563 === (11))){
var inst_17542 = (state_17562[(8)]);
var inst_17551 = (state_17562[(2)]);
var inst_17539 = inst_17542;
var state_17562__$1 = (function (){var statearr_17572 = state_17562;
(statearr_17572[(7)] = inst_17539);

(statearr_17572[(10)] = inst_17551);

return statearr_17572;
})();
var statearr_17573_17597 = state_17562__$1;
(statearr_17573_17597[(2)] = null);

(statearr_17573_17597[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (9))){
var inst_17542 = (state_17562[(8)]);
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17562__$1,(11),out,inst_17542);
} else {
if((state_val_17563 === (5))){
var inst_17539 = (state_17562[(7)]);
var inst_17542 = (state_17562[(8)]);
var inst_17546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17542,inst_17539);
var state_17562__$1 = state_17562;
if(inst_17546){
var statearr_17575_17598 = state_17562__$1;
(statearr_17575_17598[(1)] = (8));

} else {
var statearr_17576_17599 = state_17562__$1;
(statearr_17576_17599[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (10))){
var inst_17554 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17577_17600 = state_17562__$1;
(statearr_17577_17600[(2)] = inst_17554);

(statearr_17577_17600[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17563 === (8))){
var inst_17539 = (state_17562[(7)]);
var tmp17574 = inst_17539;
var inst_17539__$1 = tmp17574;
var state_17562__$1 = (function (){var statearr_17578 = state_17562;
(statearr_17578[(7)] = inst_17539__$1);

return statearr_17578;
})();
var statearr_17579_17601 = state_17562__$1;
(statearr_17579_17601[(2)] = null);

(statearr_17579_17601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___17591,out))
;
return ((function (switch__14755__auto__,c__14923__auto___17591,out){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_17583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17583[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_17583[(1)] = (1));

return statearr_17583;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_17562){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_17562);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e17584){if((e17584 instanceof Object)){
var ex__14759__auto__ = e17584;
var statearr_17585_17602 = state_17562;
(statearr_17585_17602[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17562);

return cljs.core.cst$kw$recur;
} else {
throw e17584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__17603 = state_17562;
state_17562 = G__17603;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_17562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_17562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___17591,out))
})();
var state__14925__auto__ = (function (){var statearr_17586 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_17586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___17591);

return statearr_17586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___17591,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17604 = [];
var len__8426__auto___17674 = arguments.length;
var i__8427__auto___17675 = (0);
while(true){
if((i__8427__auto___17675 < len__8426__auto___17674)){
args17604.push((arguments[i__8427__auto___17675]));

var G__17676 = (i__8427__auto___17675 + (1));
i__8427__auto___17675 = G__17676;
continue;
} else {
}
break;
}

var G__17606 = args17604.length;
switch (G__17606) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17604.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14923__auto___17678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___17678,out){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___17678,out){
return (function (state_17644){
var state_val_17645 = (state_17644[(1)]);
if((state_val_17645 === (7))){
var inst_17640 = (state_17644[(2)]);
var state_17644__$1 = state_17644;
var statearr_17646_17679 = state_17644__$1;
(statearr_17646_17679[(2)] = inst_17640);

(statearr_17646_17679[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (1))){
var inst_17607 = (new Array(n));
var inst_17608 = inst_17607;
var inst_17609 = (0);
var state_17644__$1 = (function (){var statearr_17647 = state_17644;
(statearr_17647[(7)] = inst_17609);

(statearr_17647[(8)] = inst_17608);

return statearr_17647;
})();
var statearr_17648_17680 = state_17644__$1;
(statearr_17648_17680[(2)] = null);

(statearr_17648_17680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (4))){
var inst_17612 = (state_17644[(9)]);
var inst_17612__$1 = (state_17644[(2)]);
var inst_17613 = (inst_17612__$1 == null);
var inst_17614 = cljs.core.not(inst_17613);
var state_17644__$1 = (function (){var statearr_17649 = state_17644;
(statearr_17649[(9)] = inst_17612__$1);

return statearr_17649;
})();
if(inst_17614){
var statearr_17650_17681 = state_17644__$1;
(statearr_17650_17681[(1)] = (5));

} else {
var statearr_17651_17682 = state_17644__$1;
(statearr_17651_17682[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (15))){
var inst_17634 = (state_17644[(2)]);
var state_17644__$1 = state_17644;
var statearr_17652_17683 = state_17644__$1;
(statearr_17652_17683[(2)] = inst_17634);

(statearr_17652_17683[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (13))){
var state_17644__$1 = state_17644;
var statearr_17653_17684 = state_17644__$1;
(statearr_17653_17684[(2)] = null);

(statearr_17653_17684[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (6))){
var inst_17609 = (state_17644[(7)]);
var inst_17630 = (inst_17609 > (0));
var state_17644__$1 = state_17644;
if(cljs.core.truth_(inst_17630)){
var statearr_17654_17685 = state_17644__$1;
(statearr_17654_17685[(1)] = (12));

} else {
var statearr_17655_17686 = state_17644__$1;
(statearr_17655_17686[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (3))){
var inst_17642 = (state_17644[(2)]);
var state_17644__$1 = state_17644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17644__$1,inst_17642);
} else {
if((state_val_17645 === (12))){
var inst_17608 = (state_17644[(8)]);
var inst_17632 = cljs.core.vec(inst_17608);
var state_17644__$1 = state_17644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17644__$1,(15),out,inst_17632);
} else {
if((state_val_17645 === (2))){
var state_17644__$1 = state_17644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17644__$1,(4),ch);
} else {
if((state_val_17645 === (11))){
var inst_17624 = (state_17644[(2)]);
var inst_17625 = (new Array(n));
var inst_17608 = inst_17625;
var inst_17609 = (0);
var state_17644__$1 = (function (){var statearr_17656 = state_17644;
(statearr_17656[(10)] = inst_17624);

(statearr_17656[(7)] = inst_17609);

(statearr_17656[(8)] = inst_17608);

return statearr_17656;
})();
var statearr_17657_17687 = state_17644__$1;
(statearr_17657_17687[(2)] = null);

(statearr_17657_17687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (9))){
var inst_17608 = (state_17644[(8)]);
var inst_17622 = cljs.core.vec(inst_17608);
var state_17644__$1 = state_17644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17644__$1,(11),out,inst_17622);
} else {
if((state_val_17645 === (5))){
var inst_17612 = (state_17644[(9)]);
var inst_17617 = (state_17644[(11)]);
var inst_17609 = (state_17644[(7)]);
var inst_17608 = (state_17644[(8)]);
var inst_17616 = (inst_17608[inst_17609] = inst_17612);
var inst_17617__$1 = (inst_17609 + (1));
var inst_17618 = (inst_17617__$1 < n);
var state_17644__$1 = (function (){var statearr_17658 = state_17644;
(statearr_17658[(12)] = inst_17616);

(statearr_17658[(11)] = inst_17617__$1);

return statearr_17658;
})();
if(cljs.core.truth_(inst_17618)){
var statearr_17659_17688 = state_17644__$1;
(statearr_17659_17688[(1)] = (8));

} else {
var statearr_17660_17689 = state_17644__$1;
(statearr_17660_17689[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (14))){
var inst_17637 = (state_17644[(2)]);
var inst_17638 = cljs.core.async.close_BANG_(out);
var state_17644__$1 = (function (){var statearr_17662 = state_17644;
(statearr_17662[(13)] = inst_17637);

return statearr_17662;
})();
var statearr_17663_17690 = state_17644__$1;
(statearr_17663_17690[(2)] = inst_17638);

(statearr_17663_17690[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (10))){
var inst_17628 = (state_17644[(2)]);
var state_17644__$1 = state_17644;
var statearr_17664_17691 = state_17644__$1;
(statearr_17664_17691[(2)] = inst_17628);

(statearr_17664_17691[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17645 === (8))){
var inst_17617 = (state_17644[(11)]);
var inst_17608 = (state_17644[(8)]);
var tmp17661 = inst_17608;
var inst_17608__$1 = tmp17661;
var inst_17609 = inst_17617;
var state_17644__$1 = (function (){var statearr_17665 = state_17644;
(statearr_17665[(7)] = inst_17609);

(statearr_17665[(8)] = inst_17608__$1);

return statearr_17665;
})();
var statearr_17666_17692 = state_17644__$1;
(statearr_17666_17692[(2)] = null);

(statearr_17666_17692[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___17678,out))
;
return ((function (switch__14755__auto__,c__14923__auto___17678,out){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_17670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17670[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_17670[(1)] = (1));

return statearr_17670;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_17644){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_17644);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e17671){if((e17671 instanceof Object)){
var ex__14759__auto__ = e17671;
var statearr_17672_17693 = state_17644;
(statearr_17672_17693[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17644);

return cljs.core.cst$kw$recur;
} else {
throw e17671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__17694 = state_17644;
state_17644 = G__17694;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_17644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_17644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___17678,out))
})();
var state__14925__auto__ = (function (){var statearr_17673 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_17673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___17678);

return statearr_17673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___17678,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17695 = [];
var len__8426__auto___17769 = arguments.length;
var i__8427__auto___17770 = (0);
while(true){
if((i__8427__auto___17770 < len__8426__auto___17769)){
args17695.push((arguments[i__8427__auto___17770]));

var G__17771 = (i__8427__auto___17770 + (1));
i__8427__auto___17770 = G__17771;
continue;
} else {
}
break;
}

var G__17697 = args17695.length;
switch (G__17697) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17695.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14923__auto___17773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14923__auto___17773,out){
return (function (){
var f__14924__auto__ = (function (){var switch__14755__auto__ = ((function (c__14923__auto___17773,out){
return (function (state_17739){
var state_val_17740 = (state_17739[(1)]);
if((state_val_17740 === (7))){
var inst_17735 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
var statearr_17741_17774 = state_17739__$1;
(statearr_17741_17774[(2)] = inst_17735);

(statearr_17741_17774[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (1))){
var inst_17698 = [];
var inst_17699 = inst_17698;
var inst_17700 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17739__$1 = (function (){var statearr_17742 = state_17739;
(statearr_17742[(7)] = inst_17700);

(statearr_17742[(8)] = inst_17699);

return statearr_17742;
})();
var statearr_17743_17775 = state_17739__$1;
(statearr_17743_17775[(2)] = null);

(statearr_17743_17775[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (4))){
var inst_17703 = (state_17739[(9)]);
var inst_17703__$1 = (state_17739[(2)]);
var inst_17704 = (inst_17703__$1 == null);
var inst_17705 = cljs.core.not(inst_17704);
var state_17739__$1 = (function (){var statearr_17744 = state_17739;
(statearr_17744[(9)] = inst_17703__$1);

return statearr_17744;
})();
if(inst_17705){
var statearr_17745_17776 = state_17739__$1;
(statearr_17745_17776[(1)] = (5));

} else {
var statearr_17746_17777 = state_17739__$1;
(statearr_17746_17777[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (15))){
var inst_17729 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
var statearr_17747_17778 = state_17739__$1;
(statearr_17747_17778[(2)] = inst_17729);

(statearr_17747_17778[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (13))){
var state_17739__$1 = state_17739;
var statearr_17748_17779 = state_17739__$1;
(statearr_17748_17779[(2)] = null);

(statearr_17748_17779[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (6))){
var inst_17699 = (state_17739[(8)]);
var inst_17724 = inst_17699.length;
var inst_17725 = (inst_17724 > (0));
var state_17739__$1 = state_17739;
if(cljs.core.truth_(inst_17725)){
var statearr_17749_17780 = state_17739__$1;
(statearr_17749_17780[(1)] = (12));

} else {
var statearr_17750_17781 = state_17739__$1;
(statearr_17750_17781[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (3))){
var inst_17737 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17739__$1,inst_17737);
} else {
if((state_val_17740 === (12))){
var inst_17699 = (state_17739[(8)]);
var inst_17727 = cljs.core.vec(inst_17699);
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17739__$1,(15),out,inst_17727);
} else {
if((state_val_17740 === (2))){
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17739__$1,(4),ch);
} else {
if((state_val_17740 === (11))){
var inst_17707 = (state_17739[(10)]);
var inst_17703 = (state_17739[(9)]);
var inst_17717 = (state_17739[(2)]);
var inst_17718 = [];
var inst_17719 = inst_17718.push(inst_17703);
var inst_17699 = inst_17718;
var inst_17700 = inst_17707;
var state_17739__$1 = (function (){var statearr_17751 = state_17739;
(statearr_17751[(11)] = inst_17717);

(statearr_17751[(7)] = inst_17700);

(statearr_17751[(8)] = inst_17699);

(statearr_17751[(12)] = inst_17719);

return statearr_17751;
})();
var statearr_17752_17782 = state_17739__$1;
(statearr_17752_17782[(2)] = null);

(statearr_17752_17782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (9))){
var inst_17699 = (state_17739[(8)]);
var inst_17715 = cljs.core.vec(inst_17699);
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17739__$1,(11),out,inst_17715);
} else {
if((state_val_17740 === (5))){
var inst_17700 = (state_17739[(7)]);
var inst_17707 = (state_17739[(10)]);
var inst_17703 = (state_17739[(9)]);
var inst_17707__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17703) : f.call(null,inst_17703));
var inst_17708 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17707__$1,inst_17700);
var inst_17709 = cljs.core.keyword_identical_QMARK_(inst_17700,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17710 = (inst_17708) || (inst_17709);
var state_17739__$1 = (function (){var statearr_17753 = state_17739;
(statearr_17753[(10)] = inst_17707__$1);

return statearr_17753;
})();
if(cljs.core.truth_(inst_17710)){
var statearr_17754_17783 = state_17739__$1;
(statearr_17754_17783[(1)] = (8));

} else {
var statearr_17755_17784 = state_17739__$1;
(statearr_17755_17784[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (14))){
var inst_17732 = (state_17739[(2)]);
var inst_17733 = cljs.core.async.close_BANG_(out);
var state_17739__$1 = (function (){var statearr_17757 = state_17739;
(statearr_17757[(13)] = inst_17732);

return statearr_17757;
})();
var statearr_17758_17785 = state_17739__$1;
(statearr_17758_17785[(2)] = inst_17733);

(statearr_17758_17785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (10))){
var inst_17722 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
var statearr_17759_17786 = state_17739__$1;
(statearr_17759_17786[(2)] = inst_17722);

(statearr_17759_17786[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17740 === (8))){
var inst_17707 = (state_17739[(10)]);
var inst_17703 = (state_17739[(9)]);
var inst_17699 = (state_17739[(8)]);
var inst_17712 = inst_17699.push(inst_17703);
var tmp17756 = inst_17699;
var inst_17699__$1 = tmp17756;
var inst_17700 = inst_17707;
var state_17739__$1 = (function (){var statearr_17760 = state_17739;
(statearr_17760[(7)] = inst_17700);

(statearr_17760[(8)] = inst_17699__$1);

(statearr_17760[(14)] = inst_17712);

return statearr_17760;
})();
var statearr_17761_17787 = state_17739__$1;
(statearr_17761_17787[(2)] = null);

(statearr_17761_17787[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14923__auto___17773,out))
;
return ((function (switch__14755__auto__,c__14923__auto___17773,out){
return (function() {
var cljs$core$async$state_machine__14756__auto__ = null;
var cljs$core$async$state_machine__14756__auto____0 = (function (){
var statearr_17765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17765[(0)] = cljs$core$async$state_machine__14756__auto__);

(statearr_17765[(1)] = (1));

return statearr_17765;
});
var cljs$core$async$state_machine__14756__auto____1 = (function (state_17739){
while(true){
var ret_value__14757__auto__ = (function (){try{while(true){
var result__14758__auto__ = switch__14755__auto__(state_17739);
if(cljs.core.keyword_identical_QMARK_(result__14758__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14758__auto__;
}
break;
}
}catch (e17766){if((e17766 instanceof Object)){
var ex__14759__auto__ = e17766;
var statearr_17767_17788 = state_17739;
(statearr_17767_17788[(5)] = ex__14759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17739);

return cljs.core.cst$kw$recur;
} else {
throw e17766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14757__auto__,cljs.core.cst$kw$recur)){
var G__17789 = state_17739;
state_17739 = G__17789;
continue;
} else {
return ret_value__14757__auto__;
}
break;
}
});
cljs$core$async$state_machine__14756__auto__ = function(state_17739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14756__auto____1.call(this,state_17739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14756__auto____0;
cljs$core$async$state_machine__14756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14756__auto____1;
return cljs$core$async$state_machine__14756__auto__;
})()
;})(switch__14755__auto__,c__14923__auto___17773,out))
})();
var state__14925__auto__ = (function (){var statearr_17768 = (f__14924__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14924__auto__.cljs$core$IFn$_invoke$arity$0() : f__14924__auto__.call(null));
(statearr_17768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14923__auto___17773);

return statearr_17768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14925__auto__);
});})(c__14923__auto___17773,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

