### Audio-Reactive Suzanne

My attempt at getting a WebGL scene to react to microphone (Web-audio) input.  Using [blend4web](http://www.blend4web.com/) and [Tonejs](http://tonejs.org/) via [Clojurescript](http://clojurescript.org/).

Doesn't work yet, I'm just leaving it here for backup purposes.

If you want to fool around, make sure you have [boot-clj](http://boot-clj.com).  Download the repo, cd into into its base dir, and dial in:

```bash
boot live
```

...to live-code.  It'll only load the `actions` symbol in the `live.cljs`, but you can change that in the `(reload...)` task in `build.boot`.  Enjoy!
