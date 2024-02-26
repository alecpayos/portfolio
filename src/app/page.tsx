import React from 'react'
import Hero from './components/Hero'
import { Inika } from 'next/font/google'

const inika = Inika({ weight: "400", subsets: ["latin"]})

export default function Home() {
  return (
    <main>
      <Hero headerFont={inika.className} />
    </main>
  )
}
