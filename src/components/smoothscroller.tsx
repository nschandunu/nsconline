'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const SmoothScroller = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function to destroy lenis instance on unmount
    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}

export default SmoothScroller
