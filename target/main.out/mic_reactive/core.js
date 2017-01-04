// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('mic_reactive.core');
goog.require('cljs.core');
goog.require('mic_reactive.engine_interface');
goog.require('mic_reactive.live');
mic_reactive.core.start = (function mic_reactive$core$start(){
var controls = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$controls);
var timeline_sensor = controls.create_timeline_sensor();
var sensor_manifold = mic_reactive.engine_interface.enter_sensor_manifold_data(false,"main",controls.CT_CONTINUOUS,cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline_sensor], null)),mic_reactive.live.continuous_timeline_sensor);
var load_data = mic_reactive.engine_interface.enter_b4w_data("monkey2.json",document.getElementById("container"));
var container = document.getElementById("container");
mic_reactive.engine_interface.init_b4w.cljs$core$IFn$_invoke$arity$variadic(load_data,cljs.core.array_seq([sensor_manifold], 0));

return Maptastic(container);
});
goog.exportSymbol('mic_reactive.core.start', mic_reactive.core.start);
