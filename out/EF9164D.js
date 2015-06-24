goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__595__i = 0, G__595__a = new Array(arguments.length -  0);
while (G__595__i < G__595__a.length) {G__595__a[G__595__i] = arguments[G__595__i + 0]; ++G__595__i;}
  args = new cljs.core.IndexedSeq(G__595__a,0);
} 
return G__594__delegate.call(this,args);};
G__594.cljs$lang$maxFixedArity = 0;
G__594.cljs$lang$applyTo = (function (arglist__596){
var args = cljs.core.seq(arglist__596);
return G__594__delegate(args);
});
G__594.cljs$core$IFn$_invoke$arity$variadic = G__594__delegate;
return G__594;
})()
;
});