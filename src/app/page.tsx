import React from 'react'
import Hero from '@/components/hero'
import Statement from '@/components/statement'
import { MDXRemote } from 'next-mdx-remote/rsc'
 
export default function Home() {
  const content = `
    # This is a markdown heading
  `

  return (
      <section className="py-4">
        <div className="">
          <Hero/>
          <Statement/>
          <div className="h-screen bg-green-500"></div>

          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
          <MDXRemote source={content}/>
        </div>
      </section>
  )
}
