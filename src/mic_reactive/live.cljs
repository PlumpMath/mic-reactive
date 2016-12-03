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

;;Connect our microphone to Tonejs' analyser node
(.connect mic analyser)

;;I don't feel like finding the library for averaging.
(defn average [input-array]
  (/ (reduce + input-array)
     (count input-array)))

;;Open the mic to change audio-data
(.open mic)

(def actions
  {:expand-shrink (fn [obj time]
                (let [raw-audio (aclone (.analyse analyser))
                      audio {:min (apply min raw-audio)
                             :max (apply max raw-audio)
                             :avg (average raw-audio)}]
                 (do
                  ;;Now initialize the mic
                  (.start mic)

                  ;;Change scale of monkey head to audio data
                  (.set-scale transform obj
                      (/ (:min audio) 90))
                  (.set-rotation-euler transform obj
                         (* time 1.0)
                         2
                         (* time 0.3))
                  (.set-diffuse-color material obj
                              "Material"
                              (.from-values rgba
                                (/ (:min audio) 25)
                                (/ (:max audio) 20)
                                (/ (:min audio) 25)
                                1))
                  (.set-diffuse-intensity material obj
                              "Material"
                              (/ (:min audio) 255)))))})

(defn continuous-timeline-sensor [time]
  (let [monkey     (.get-object-by-name scenes "Suzanne")]
       ((:expand-shrink actions) monkey time)))
