(ns mic-reactive.live
  (:require [mic-reactive.engine-interface :as engine]
            [tonejs]
            [clojure.core.async :as async]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;;First blend4web stuff
(def scenes (engine/load-b4w-module :scenes))
(def objects (engine/load-b4w-module :objects))
(def transform (engine/load-b4w-module :transform))
(def material (engine/load-b4w-module :material))
(def rgba (engine/load-b4w-module :rgba))

;;Now tonejs stuff
(def mic (new js/Tone.Microphone))
(def analyser (new js/Tone.Analyser (clj->js {:type "waveform"
                                              :size 256})))

(.connect mic analyser)

(defn average [input-array]
  (/ (reduce + (js->clj input-array))
     (count input-array)))

(.open mic (fn []

  (def actions
    {:expand-shrink (fn [obj time]
                                 (do
                                  (let [values (list (.analyse analyser))
                                        max-val (max values)]
                                    (.log js/console values))
                                  (match
                                   [(mod (Math.round time) 2)]
                                    [0] (.set-scale transform obj 2.3)
                                    [1] (.set-scale transform obj 0.75))
                                  (.set-rotation-euler transform obj
                                         (* time 1.0)
                                         3
                                         (* time 0.3))
                                  (.set-diffuse-color material obj
                                              "Material"
                                              (.from-values rgba
                                                            100
                                                            100
                                                            200
                                                            1))
                                  (.set-diffuse-intensity material obj
                                              "Material"
                                              (* time 0.0005))))})))

(defn continuous-timeline-sensor [time]
  (let [monkey (.get-object-by-name scenes "Suzanne")]
       ((:expand-shrink actions) monkey time)))
