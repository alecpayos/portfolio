'use client';

import { Inika } from 'next/font/google';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Projects from './components/Projects';

const inika = Inika({ weight: "400", subsets: ["latin"]})

export default function Home() {
  return (
    <main>
      <Hero />
      <Experiences headerFont={inika.className} />
      <Projects />
      <Skills headerFont={inika.className} />
    </main>
  )
}
