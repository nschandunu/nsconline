'use client'

import { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const componentRef = useRef(null)
  const stickyRef = useRef(null)
  const imageWrapperRef = useRef(null)
  const textWrapperRef = useRef(null)
  const glowRef = useRef(null)

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: componentRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            pin: stickyRef.current
          }
        })

        // Keep the SAME image scale animation as before (2.5 → 1)
        tl.fromTo(
          imageWrapperRef.current,
          { scale: 2.5 },
          { scale: 1, duration: 2, ease: 'power1.inOut' }
        )

        // Text wrapper animation - scale from 1 to 0.4 (matching the ratio of 2.5 → 1)
        tl.fromTo(
          textWrapperRef.current,
          { scale: 1 },
          {
            scale: 0.38,
            duration: 2,
            ease: 'power1.inOut',
            force3D: true
          },
          '<' // Start at the same time as image animation
        )

        // Keep the glow effect as before
        tl.fromTo(
          glowRef.current,
          { opacity: 1 },
          {
            opacity: 1,
            repeat: 1,
            yoyo: true,
            duration: 1,
            ease: 'power1.inOut'
          },
          '<' // Start at the same time as the scale animation
        )
      }, componentRef)

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={componentRef} className="relative h-[200vh]">
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
      >
        {/* Container for proper layering */}
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Image Wrapper - This will be scaled */}
          <div
            ref={imageWrapperRef}
            className="mac14:max-w-6xl absolute inset-0 mx-auto flex w-full max-w-4xl items-center justify-center 2xl:max-w-6xl"
            style={{
              // Performance optimizations for smooth scaling
              willChange: 'transform',
              transformOrigin: 'center center'
            }}
          >
            <Image
              src="/assets/images/display.webp"
              alt="iMac Display"
              width={1100}
              height={1100}
              priority
              className="h-auto w-full"
              style={{
                marginTop: '210px',
                // Ensure image scales smoothly
                transformOrigin: 'center center'
              }}
            />
          </div>

          {/* Text Wrapper - Always stays at scale(1) for crisp text */}
          <div
            ref={textWrapperRef}
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{
              // Safari text rendering optimizations
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility',
              // Force hardware acceleration for text layer
              transform: 'translate3d(0, 0, 0)',
              willChange: 'opacity, transform',
              // Ensure text always renders at scale(1)
              transformOrigin: 'center center'
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="pad pt-[7px]"></div>
              <div className="relative -mt-[10px] mb-19 pb-3">
                {/* Glow effect */}
                <div
                  ref={glowRef}
                  className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-400 via-blue-400 to-purple-500 blur-xl"
                ></div>
                <div className="relative z-10 h-90 w-90 overflow-hidden rounded-full">
                  <Image
                    src="/assets/images/IMG_5360.png"
                    alt="Senuka Chandunu"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="scale-110"
                  />
                </div>
              </div>
              <div className="mb-3 flex items-center gap-1">
                <p
                  className="font-medium font-semibold"
                  style={{
                    color: 'var(--primary-text-color)',
                    fontSize: '1.975rem',
                    letterSpacing: '-1px'
                  }}
                >
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
              <h1
                className="mt-1 text-9xl font-semibold tracking-tighter"
                style={{ color: '#000000', letterSpacing: '-7px' }}
              >
                Create Build Elevate.
              </h1>
              <a
                href="#"
                className="mt-6 flex items-center text-[1.70rem] font-medium hover:underline"
                style={{ color: 'var(--blue)', letterSpacing: '-1px' }}
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
    </div>
  )
}
