### Audio-Reactive Suzanne

Talk into the microphone, make suzanne grow and shrink (and change hue)!  Using [Blend4web](http://www.blend4web.com/) and [Tonejs](http://tonejs.org/) via [Clojurescript](http://clojurescript.org/).

[Try it out here](http://clojurescript-experiments.neocities.org/)

**Note: probably works best on latest Chrome, FF -- make sure you have your mic enabled.**

If you want to fool around, make sure you have [boot-clj](http://boot-clj.com).  Download the repo, cd into into its base dir, and dial in:

```bash
boot live
```

...to live-code.  It'll only load the `actions` symbol in the `live.cljs`, but you can change that in the `(reload...)` task in `build.boot`.  If you're finished live-editing and you want to publish it, do:

```bash
boot deploy
```

To get a more optimized, performant js.  It'll upload this ginomrous `main.out` folder too -- don't worry, that's just for source-maps.  For websites, all you need is:
* `index.html`
* `monkey.json`
* `monkey.bin`
* `uranium.js`
* `uranium.js.mem`


Enjoy!
