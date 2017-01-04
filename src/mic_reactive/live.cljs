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
(def m-container (engine/load-b4w-module :container))

(defn replicate-obj [obj-str n]
  "Gets b4w to copy obj n times and adds it to current scene."
  (dotimes [m n]
      (when-not
        (.check-object-by-name scenes (str obj-str "-" m))
        (.append-object scenes
          (.copy objects (.get-object-by-name scenes obj-str)
              (str (.get-object-name scenes (.get-object-by-name scenes obj-str))
                    "-" m))))))

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
  {:expand-shrink (fn [time scene-map]
                (let [raw-audio (aclone (.analyse analyser))
                      monkey-count 50
                      audio-scale (Math.round
                                  (/ (count raw-audio) monkey-count))
                      audio {:min (apply min raw-audio)
                             :max (apply max raw-audio)
                             :avg (average raw-audio)
                             :nth-level (take-nth audio-scale raw-audio)}]

                  ;;Replicate monkeys if they aren't there already
                    (do (replicate-obj "Suzanne" monkey-count)

                        (dotimes [x monkey-count]
                          (.set-translation transform
                              (.get-object-by-name scenes (str "Suzanne" "-" x))
                                      (- (* x 0.25) 6)
                                      0
                                      (/ (+ 2.5 (- (/ 300 (nth (:nth-level audio) x))))
                                         (* 0.0044 (:avg audio))))
                          (.set-scale transform (.get-object-by-name scenes
                                                  (str "Suzanne" "-" x))
                                                  0.20
                                                  0.20
                                                  0.20)
                          (.set-rotation-euler transform (.get-object-by-name scenes
                                                  (str "Suzanne" "-" x))
                                                   0
                                                   0
                                                   (* time 1.0))
                          (.set-diffuse-intensity material (.get-object-by-name scenes
                                                  (str "Suzanne" "-" x))
                                                  "Material"
                                                  (- (:avg audio)
                                                  128))
                          (.set-diffuse-color material (.get-object-by-name scenes
                                                      (str "Suzanne" "-" x))
                                                  "Material"
                                                  (.from-values rgba
                                                    (:max audio)
                                                    (* (mod time 10)
                                                       (mod (:min audio) 256))
                                                    (* (:avg audio) 10)
                                                    0.2)))

                        (.set-light-color light (:lamp scene-map)
                                      (.from-values rgba
                                        (/ (:max audio) 255)
                                        (/ (:min audio) 255)
                                        (/ (:min audio) 255)
                                        1)))

                        (.set-light-energy light (:lamp scene-map)
                                           (* 0.00005 (:min audio)))

                        (.set-environment-colors scenes
                                                 (.from-values rgba
                                                    (/ (:max audio) 100)
                                                    (/ (:min audio) 100)
                                                    (/ (:min audio) 100)
                                                    1))))})

(defn continuous-timeline-sensor [time]
  (let [monkey (.get-object-by-name scenes "Suzanne")
        lamp   (.get-object-by-name scenes "Lamp")
        original-scene {:monkey monkey :lamp lamp}]

      (do (.resize m-container 600 400 true)
          (.set-active scenes "Scene")
          ((:expand-shrink actions) time original-scene))))
