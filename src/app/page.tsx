import React from 'react'
import Hero from './components/Hero'
import ResumeCoverLetter from './components/ResumeCoverLetter'
import Skills from './components/Skills'
import { Inika } from 'next/font/google'
import GrabADrink from './components/GrabADrink'
import SpeccUp from './components/SpeccUp'

const inika = Inika({ weight: "400", subsets: ["latin"]})

export default function Home() {
  return (
    <main>
      <Hero headerFont={inika.className} />
      <ResumeCoverLetter headerFont={inika.className} />
      <GrabADrink headerFont={inika.className} />
      <SpeccUp headerFont={inika.className} />
      <Skills headerFont={inika.className} />
    </main>
  )
}
