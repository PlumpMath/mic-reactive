// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('mic_reactive.live');
goog.require('cljs.core');
goog.require('mic_reactive.engine_interface');
goog.require('cljs.core.async');
goog.require('cljs.core.match');
mic_reactive.live.scenes = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$scenes);
mic_reactive.live.objects = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$objects);
mic_reactive.live.transform = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$transform);
mic_reactive.live.material = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$material);
mic_reactive.live.rgba = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$rgba);
mic_reactive.live.light = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$lights);
mic_reactive.live.m_container = mic_reactive.engine_interface.load_b4w_module(cljs.core.cst$kw$container);
mic_reactive.live.replicate_obj = (function mic_reactive$live$replicate_obj(obj_str,n){

var n__8256__auto__ = n;
var m = (0);
while(true){
if((m < n__8256__auto__)){
if(cljs.core.truth_(mic_reactive.live.scenes.check_object_by_name([cljs.core.str(obj_str),cljs.core.str("-"),cljs.core.str(m)].join('')))){
} else {
mic_reactive.live.scenes.append_object(mic_reactive.live.objects.copy(mic_reactive.live.scenes.get_object_by_name(obj_str),[cljs.core.str(mic_reactive.live.scenes.get_object_name(mic_reactive.live.scenes.get_object_by_name(obj_str))),cljs.core.str("-"),cljs.core.str(m)].join('')));
}

var G__22547 = (m + (1));
m = G__22547;
continue;
} else {
return null;
}
break;
}
});
mic_reactive.live.mic = (new Tone.Microphone());
mic_reactive.live.analyser = (new Tone.Analyser(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"waveform",cljs.core.cst$kw$size,(256)], null))));
mic_reactive.live.mic.connect(mic_reactive.live.analyser);
mic_reactive.live.average = (function mic_reactive$live$average(input_array){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,input_array) / cljs.core.count(input_array));
});
mic_reactive.live.mic.open();
mic_reactive.live.mic.start();
mic_reactive.live.actions = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expand_DASH_shrink,(function (time,scene_map){
var raw_audio = cljs.core.aclone(mic_reactive.live.analyser.analyse());
var monkey_count = (50);
var audio_scale = (function (){var G__22548 = (cljs.core.count(raw_audio) / monkey_count);
return Math.round(G__22548);
})();
var audio = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$min,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,raw_audio),cljs.core.cst$kw$max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,raw_audio),cljs.core.cst$kw$avg,mic_reactive.live.average(raw_audio),cljs.core.cst$kw$nth_DASH_level,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(audio_scale,raw_audio)], null);
mic_reactive.live.replicate_obj("Suzanne",monkey_count);

var n__8256__auto___22549 = monkey_count;
var x_22550 = (0);
while(true){
if((x_22550 < n__8256__auto___22549)){
mic_reactive.live.transform.set_translation(mic_reactive.live.scenes.get_object_by_name([cljs.core.str("Suzanne"),cljs.core.str("-"),cljs.core.str(x_22550)].join('')),((x_22550 * 0.25) - (6)),(0),((2.5 + (- ((300) / cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nth_DASH_level.cljs$core$IFn$_invoke$arity$1(audio),x_22550)))) / (0.0044 * cljs.core.cst$kw$avg.cljs$core$IFn$_invoke$arity$1(audio))));

mic_reactive.live.transform.set_scale(mic_reactive.live.scenes.get_object_by_name([cljs.core.str("Suzanne"),cljs.core.str("-"),cljs.core.str(x_22550)].join('')),0.2,0.2,0.2);

mic_reactive.live.transform.set_rotation_euler(mic_reactive.live.scenes.get_object_by_name([cljs.core.str("Suzanne"),cljs.core.str("-"),cljs.core.str(x_22550)].join('')),(0),(0),(time * 1.0));

mic_reactive.live.material.set_diffuse_intensity(mic_reactive.live.scenes.get_object_by_name([cljs.core.str("Suzanne"),cljs.core.str("-"),cljs.core.str(x_22550)].join('')),"Material",(cljs.core.cst$kw$avg.cljs$core$IFn$_invoke$arity$1(audio) - (128)));

mic_reactive.live.material.set_diffuse_color(mic_reactive.live.scenes.get_object_by_name([cljs.core.str("Suzanne"),cljs.core.str("-"),cljs.core.str(x_22550)].join('')),"Material",mic_reactive.live.rgba.from_values(cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(audio),(cljs.core.mod(time,(10)) * cljs.core.mod(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(audio),(256))),(cljs.core.cst$kw$avg.cljs$core$IFn$_invoke$arity$1(audio) * (10)),0.2));

var G__22551 = (x_22550 + (1));
x_22550 = G__22551;
continue;
} else {
}
break;
}

mic_reactive.live.light.set_light_color(cljs.core.cst$kw$lamp.cljs$core$IFn$_invoke$arity$1(scene_map),mic_reactive.live.rgba.from_values((cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(audio) / (255)),(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(audio) / (255)),(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(audio) / (255)),(1)));

mic_reactive.live.light.set_light_energy(cljs.core.cst$kw$lamp.cljs$core$IFn$_invoke$arity$1(scene_map),(5.0E-5 * cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(audio)));

return mic_reactive.live.scenes.set_environment_colors(mic_reactive.live.rgba.from_values((cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(audio) / (100)),(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(audio) / (100)),(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(audio) / (100)),(1)));
})], null);
mic_reactive.live.continuous_timeline_sensor = (function mic_reactive$live$continuous_timeline_sensor(time){
var monkey = mic_reactive.live.scenes.get_object_by_name("Suzanne");
var lamp = mic_reactive.live.scenes.get_object_by_name("Lamp");
var original_scene = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$monkey,monkey,cljs.core.cst$kw$lamp,lamp], null);
mic_reactive.live.m_container.resize((1200),(800),true);

mic_reactive.live.scenes.set_active("Scene");

return cljs.core.cst$kw$expand_DASH_shrink.cljs$core$IFn$_invoke$arity$1(mic_reactive.live.actions).call(null,time,original_scene);
});
