import React from 'react'
import { Button } from '@/components/ui/button'
import Intro from '@/components/hero'

export default function Home() {
  return (
      <section className="py-24">
        <div className="container max-w-3xl">
          <Intro/>
        </div>
      </section>
  )
}
