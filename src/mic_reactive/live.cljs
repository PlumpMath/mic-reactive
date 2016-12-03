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
(def light (engine/load-b4w-module :lights))

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

;;Now initialize the mic
(.start mic)

(def actions
  {:expand-shrink (fn [obj lamp time]
                (let [raw-audio (aclone (.analyse analyser))
                      audio {:min (apply min raw-audio)
                             :max (apply max raw-audio)
                             :avg (average raw-audio)}]
                 (do
                  ;;Change scale of monkey head to audio data
                  (.set-scale transform obj
                      (/ (:max audio) 90))
                  (.set-rotation-euler transform obj
                         0
                         0
                         (* time 1.0))
                  (.set-diffuse-color material obj
                              "Material"
                              (.from-values rgba
                                (:max audio)
                                (* (mod time 10)
                                   (mod (:min audio) 256))
                                (* (:avg audio) 10)
                                0.2))

                  (.set-light-color light lamp (.from-values rgba
                                    (/ (:max audio) 255)
                                    (/ (:min audio) 255)
                                    (/ (:min audio) 255)
                                    1))
                   
                  (.set-light-energy light lamp (* 0.0005
                                                   (:min audio)))

                  (.set-active scenes "Scene")
                  (.log js/console (Math.round (/ (:max audio) 255)))

                  (.set-environment-colors scenes 0.4
                                           (.from-values rgba
                                              (/ (:max audio) 128)
                                              (/ (:min audio) 128)
                                              (/ (:min audio) 128)
                                              1))

                  (.set-diffuse-intensity material obj
                              "Material"
                              (- (:avg audio)
                                 128)))))})

(defn continuous-timeline-sensor [time]
  (let [monkey     (.get-object-by-name scenes "Suzanne")
        lamp       (.get-object-by-name scenes "Lamp")]
       ((:expand-shrink actions) monkey lamp time)))
