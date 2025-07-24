import React from 'react'
import Hero from '@/components/hero'
import { MDXRemote } from 'next-mdx-remote/rsc'
 
export default function Home() {
  const content = `
    # This is a markdown heading
  `

  return (
      <section className="py-4">
        <div className="">
          <Hero/>
            {/* <div className="h-screen bg-gray-50"></div> */}

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
