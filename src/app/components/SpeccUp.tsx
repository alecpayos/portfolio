import React from 'react'
import { HeaderFont } from '../props'
import Image from 'next/image'
import Icons from '../assets'

export default function SpeccUp(headerFont: HeaderFont) {
  const { projectPreviews: { speccupPreivew } } = Icons
  const { misc: { chainLinkIcon } } = Icons

  return (
    <div className="screen screen-secondary !justify-start">
      <h1 className={`!text-5xl screen-header mb-4 ${headerFont}`}>SpeccUp</h1>

      <section className='flex px-24 mt-16 items-center'>
        <div className='w-5/12 me-4'>
          <p>
            <b>SpeccUp</b> is one of my inspirational projects aimed to help my own fitness and lifestyle.
            I planned to include a dashboard for the app when users sign up and log in.
            I also planned to have the dashboard show all necessary data to the user that aimed to help their own fitness journey.
            The app uses the following tech stack:
          </p>

          <ol className='list-decimal ps-8 mt-4'>
            <li>ReactJS</li>
            <li>AntDesign</li>
            <li>Figma for designs which were also designed by myself.</li>
          </ol>

          <p className='mt-4'>Project Vision</p>

          <ol className='list-decimal ps-8'>
            <li>Attach a back-end that would handle user sign up.</li>
            <li>Include a payment system as well to handle the subscriptions and/or package tiers.</li>
            <li>Mailing system for newsletters.</li>
          </ol>
        </div>

        <div className='w-7/12 flex flex-col items-center ms-4'>
          <Image
            src={speccupPreivew.preview}
            alt={speccupPreivew.alt}
            className='w-[864px] rounded-2xl border-2 border-black'
          />

          <a href="https://alecpayos.github.io/speccup.github.io/" target='_blank' className='flex items-center mt-8'>
            <Image src={chainLinkIcon.icon} alt={chainLinkIcon.alt} />
            <p className='text-xl ms-2 hover:text-yellow-500'>alecpayos.github.io/speccup.github.io/</p>
          </a>
        </div>
      </section>
    </div>
  )
}
