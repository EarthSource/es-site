"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import AsciinemaPlayer from '@/components/asciinema-player'
import 'asciinema-player/dist/bundle/asciinema-player.css'


type AnimationState = "init" | "idle" | "erasing1" | "erasing2" | "typing1" | "typing2"

export default function Page() {
  const firstWords = ["Earth", "Weather", "Fire", "Methane", "Satellite", "Geospatial", "Wind", "Ocean", "Climate", "Crop", "Rain"]
  const secondWords = ["AI", "Forecasting", "LLMs", "Commodities", "Training AI", "Agriculture", "Disaster Response", "Mining", "Utilities", "Tensorflow", "PyTorch", "Keras", "Ray"]

  const [, setFirstWord] = useState("Earth")
  const [, setSecondWord] = useState("AI")
  const [displayFirst, setDisplayFirst] = useState("Earth")
  const [displaySecond, setDisplaySecond] = useState("AI")
  const [animationState, setAnimationState] = useState<AnimationState>("idle")
  const nextWordsRef = useRef<[string, string]>(["Earth", "AI"])

  useEffect(() => {
    const typeDelay = 100
    const eraseDelay = 50
    const pauseDelay = 400
    const initialDelay = 5000
    let timeout: NodeJS.Timeout

    const animateNextState = () => {
      switch (animationState) {
        case "init":
          timeout = setTimeout(() => setAnimationState("idle"), initialDelay)
          break

        case "idle":
          const nextFirst = firstWords[Math.floor(Math.random() * firstWords.length)]
          const nextSecond = secondWords[Math.floor(Math.random() * secondWords.length)]
          nextWordsRef.current = [nextFirst, nextSecond]
          timeout = setTimeout(() => setAnimationState("erasing1"), 4000)
          break

        case "erasing1":
          if (displayFirst.length > 0) {
            timeout = setTimeout(() => {
              setDisplayFirst((prev) => prev.slice(0, -1))
            }, eraseDelay)
          } else {
            setAnimationState("erasing2")
          }
          break

        case "erasing2":
          if (displaySecond.length > 0) {
            timeout = setTimeout(() => {
              setDisplaySecond((prev) => prev.slice(0, -1))
            }, eraseDelay)
          } else {
            setFirstWord(nextWordsRef.current[0])
            setSecondWord(nextWordsRef.current[1])
            timeout = setTimeout(() => setAnimationState("typing1"), pauseDelay)
          }
          break

        case "typing1":
          if (displayFirst.length < nextWordsRef.current[0].length) {
            timeout = setTimeout(() => {
              setDisplayFirst((prev) => nextWordsRef.current[0].slice(0, prev.length + 1))
            }, typeDelay)
          } else {
            setAnimationState("typing2")
          }
          break

        case "typing2":
          if (displaySecond.length < nextWordsRef.current[1].length) {
            timeout = setTimeout(() => {
              setDisplaySecond((prev) => nextWordsRef.current[1].slice(0, prev.length + 1))
            }, typeDelay)
          } else {
            setAnimationState("idle")
          }
          break
      }
    }

    animateNextState()

    return () => clearTimeout(timeout)
  }, [animationState, displayFirst, displaySecond])


  return (

    <div>
      <main className="flex-1 flex flex-col items-center justify-center p-4 min-h-[85vh]">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight flex items-center justify-center gap-4">
            <span className="text-blue-500 flex items-center">
              {displayFirst}
              {animationState === "typing1" && (
                <span className="inline-block w-[2px] h-[1em] bg-blue-500 animate-pulse" />
              )}
            </span>
            <span>data for</span>
            <span className="text-green-500 flex items-center">
              {displaySecond}
              {animationState === "typing2" && (
                <span className="inline-block w-[2px] h-[1em] bg-green-500 animate-pulse" />
              )}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Create planet-scale AI models from satellite data. Access AI-ready geospatial data for your next
            breakthrough.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf0a5t1EkFv9d6_sAzR4pRAe3RrUTYyGWiYHnnnBZhLQVctDQ/viewform?usp=header"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Join Waitlist
            </Link>
            <Link
              href="#preview"
              className="border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      <section id="preview" className="w-full bg-gray-900/50 py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">Unlock the Power of Earth Data</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-time Processing</h3>
                    <p className="text-gray-400">
                      Process petabytes of satellite imagery in real-time with our distributed infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI-Ready Formats</h3>
                    <p className="text-gray-400">
                      Pre-processed and formatted data, optimized for machine learning models
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Advanced Analytics</h3>
                    <p className="text-gray-400">Built-in tools for visualization, analysis, and pattern detection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg blur-3xl" />
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-4">
                <AsciinemaPlayer src="/asciinema/demo-cut2.cast" autoPlay={true} preload={false} loop={true} controls={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

