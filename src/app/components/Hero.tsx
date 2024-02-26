import Image from 'next/image'
import React from 'react'
import { NextFont } from 'next/dist/compiled/@next/font'

import {
  googleIcon,
  googleMapsIcon,
  icons8PhoneIcon,
  linkedinIcon,
  githubIcon
} from '@/app/assets/index'

type HeaderFont = {
  headerFont: string
}

export default function Hero(props: HeaderFont) {
  return (
    <div className='flex min-h-screen items-center justify-center screen-primary'>
      <section className='flex flex-col me-16'>
        <h1 className={`text-6xl mb-3 ${props.headerFont}`}>ALEC MARVIN PAYOS</h1>
        <div className='border-l-4 ps-4 w-[640px]'>
          <p className='mb-3'>I’m a software engineer based in Cebu, PH and currently am a pioneer of multiple dashboard projects in my current company.</p>
          <p className='mb-3'>Revenue generation for companies and partners have long been the goal-setters for each and every feature I plan and develop.</p>
          <p className='mb-3'>I’m passionate about seamless UI/UX, clear workflows, task planning, and development processes.</p>
          <p>I take it to heart, a perfect communication to all colleagues especially towards the executive committee of the company.</p>
        </div>
      </section>

      <section className='ms-16'>
        <a className='flex items-center mb-4 hover:text-sky-500' href='https://linkedin.com/in/alecpayos'><Image src={linkedinIcon} alt='linkedin icon' className='w-8 me-6 bg-white rounded' /> linkedin.com/in/alecpayos</a>
        <a className='flex items-center mb-4 hover:text-sky-500' href='https://github.com/alecpayos'><Image src={githubIcon} alt='github icon' className='w-8 me-6 bg-white rounded-3xl' /> github.com/alecpayos</a>
        <span className='flex items-center mb-4'><Image src={googleIcon} alt='google email icon' className='w-8 me-6' /> alecpayos.2020@gmail.com</span>
        <span className='flex items-center mb-4'><Image src={icons8PhoneIcon} alt='contact phone icon' className='w-8 me-6' /> (+63) 917 140 7063</span>
        <span className='flex items-center mb-4'><Image src={googleMapsIcon} alt='location icon' className='w-8 h-8 me-6' /> 75 Real St. Tacloban City, Leyte</span>
      </section>
    </div>
  )
}