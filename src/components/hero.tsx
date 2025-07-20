'use client'

import { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  // Create refs for the elements we're going to animate
  const componentRef = useRef(null)
  const imacRef = useRef(null)
  const contentRef = useRef(null)
  const glowRef = useRef(null)

  // useLayoutEffect is the best place for GSAP animations in React.
  // It runs synchronously after all DOM mutations, so GSAP can "see" the
  // final layout of the elements before painting.
  useLayoutEffect(() => {
    // A context lets us scope our GSAP selectors and makes cleanup easier.
    let ctx = gsap.context(() => {
      // Create a GSAP timeline that is controlled by the ScrollTrigger.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current, // The element that triggers the animation.
          start: 'top top',             // Start when the top of the trigger hits the top of the viewport.
          end: 'bottom bottom',         // End when the bottom of the trigger hits the bottom of the viewport.
          scrub: 1,                     // Smoothly "scrubs" the animation as you scroll.
          pin: true,                    // Pins the trigger element during the animation.
        },
      })

      // --- Add animations to the timeline ---

      // 1. Scale down the iMac.
      tl.fromTo(
        imacRef.current,
        { scale: 2.5 }, // Start state
        { scale: 1 }      // End state
      )

      // 2. Fade in the content. The '<' means it starts at the same time
      //    as the previous animation on the timeline.
      tl.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1 },
        '<'
      )

      // 3. Fade the glow in and then out using a "yoyo" effect.
      tl.fromTo(
        glowRef.current,
        { opacity: 0 },
        { opacity: 1, yoyo: true, repeat: 1 }, // Fade in, then on repeat, fade out.
        '<'
      )

    }, componentRef) // Scope the context to our component.

    // Cleanup function: This will be called when the component unmounts.
    // It's crucial for preventing memory leaks in a React app.
    return () => ctx.revert()
  }, [])

  return (
    // The ref for our component and GSAP context is attached here.
    <div ref={componentRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* The iMac container, which will be scaled by GSAP */}
        <div ref={imacRef} className="relative">
          <Image
            src="/assets/images/display2.webp"
            alt="iMac Display"
            width={1000}
            height={800}
            priority
            className="relative h-auto w-auto"
          />

          {/* This layout remains exactly as you liked it. */}
          <div
            ref={contentRef}
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
          >
            <div className="relative mb-4">
              <div
                ref={glowRef}
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-400 via-blue-400 to-purple-500 blur-xl"
              ></div>
              <div className="relative z-10 h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/IMG_5360.png"
                  alt="Senuka Chandunu"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="scale-110"
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <p className="text-lg font-medium text-gray-700">
                Senuka Chandunu
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h1 className="mt-1 text-5xl font-extrabold tracking-tighter text-gray-900">
              Jrteghert reh erge.
            </h1>

            <a
              href="#"
              className="mt-6 flex items-center text-lg font-medium text-blue-600 hover:underline"
            >
              Start a project request
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}