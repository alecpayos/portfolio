import React from 'react'
import { HeaderFont } from '../props'
import Image from 'next/image'
import Icons from '../assets'

export default function GrabADrink(headerFont: HeaderFont) {
  const { projectPreviews: { grabADrinkPreview } } = Icons
  const { misc: { chainLinkIcon } } = Icons

  return (
    <div className="screen screen-primary !justify-start">
      <h1 className={`!text-5xl screen-header mb-4 ${headerFont}`}>Grab A Drink</h1>

      <section className='flex px-24 mt-16 items-center'>
        <div className='w-7/12 flex flex-col items-center me-4'>
          <Image 
            src={grabADrinkPreview.preview}
            alt={grabADrinkPreview.alt}
            className='w-[864px] rounded-2xl border-2 border-white'
          />

          <a href="https://grab-a-drink.web.app" target='_blank' className='flex items-center mt-8'>
            <Image src={chainLinkIcon.icon} alt={chainLinkIcon.alt} />
            <p className='text-xl ms-2 hover:text-yellow-500'>grab-a-drink.web.app</p>
          </a>
        </div>

        <div className='w-5/12 ms-4'>
          <p>
            <b>Grab A Drink</b> was my first ever project. 
            I consider this to be my very first informal front-end project. 
            This was made upon the request of a friend for a school project. 
            I was responsible for everything from planning and design, development and maintenance. 
            This was also my first ever exposure to Agile Development as I initially thought of adapting the process. 
            With that, this website has gone through 3 iterations:
          </p>

          <ol className='list-decimal ps-8 mt-4'>
            <li>Barebones HTML, CSS and JavaScript</li>
            <li>Website redesign upon request and assistance of my friend</li>
            <li>Personal revamp of the entire codebase which I ported from bare HTML to ReactJS</li>
          </ol>

          <p className='mt-4'>This website uses the following frameworks, packages, and libraries</p>

          <ol className='list-decimal ps-8'>
            <li>First it used MaterialUI, then was transitioned to AntDesign by personal choice.</li>
            <li>Vanilla JS to ReactJS.</li>
            <li>I also aimed to attach a back-end to this which would’ve used Flask but wasn’t finished due to circumstances.</li>
          </ol>
        </div>
      </section>
    </div>
  )
}
