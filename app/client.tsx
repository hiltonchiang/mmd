'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('@/components/Home'), { ssr: false })
 
export function ClientOnly(basePath) {
  return <App basePath={basePath}/>
}

