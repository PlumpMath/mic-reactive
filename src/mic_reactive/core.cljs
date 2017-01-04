(ns mic-reactive.core
  (:require [blend4web]
            [mic-reactive.engine-interface :as engine]
            [mic-reactive.live :as live]
            [maptastic]))

(defn ^:export start
  []
  (let [controls (engine/load-b4w-module :controls)

        timeline-sensor (.create-timeline-sensor controls)

        sensor-manifold
          (engine/enter-sensor-manifold-data
            false
            "main"
            (.-CT_CONTINUOUS controls)
            (clj->js [timeline-sensor])
            live/continuous-timeline-sensor);;<- I prefer naming this after the sensor/controls that creates it.

        load-data (engine/enter-b4w-data "monkey2.json"
                   (.getElementById js/document "container"))

        container (.getElementById js/document "container")
        picture (.getElementById js/document "bbb")]

      (do (engine/init-b4w load-data sensor-manifold)
          (js/Maptastic container picture))))
