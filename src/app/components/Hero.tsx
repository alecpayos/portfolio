import Image from 'next/image'
import React from 'react'
import Icons from '../assets'
import { HeaderFont } from '../props'

export default function Hero(headerFont: HeaderFont) {
  const { misc, versionControlIcons } = Icons

  return (
    <div className='flex min-h-screen items-center justify-center screen-primary'>
      <section className='flex flex-col me-16'>
        <h1 className={`screen-header ${headerFont} text-yellow-500`}>ALEC MARVIN PAYOS</h1>
        <div className='border-l-4 ps-4 w-[640px]'>
          <p className='mb-3'>I’m a software engineer based in Cebu, PH and currently am a pioneer of multiple dashboard projects in my current company.</p>
          <p className='mb-3'>Revenue generation for companies and partners have long been the goal-setters for each and every feature I plan and develop.</p>
          <p className='mb-3'>I’m passionate about seamless UI/UX, clear workflows, task planning, and development processes.</p>
          <p>I take it to heart, a perfect communication to all colleagues especially towards the executive committee of the company.</p>
        </div>
      </section>

      <section className='ms-16'>
        <a className='flex items-center mb-4 hover:text-sky-500' href='https://linkedin.com/in/alecpayos' target='_blank'><Image src={misc.linkedinIcon.icon} alt={misc.linkedinIcon.alt} className='w-8 me-6 bg-white rounded' /> linkedin.com/in/alecpayos</a>
        <a className='flex items-center mb-4 hover:text-sky-500' href='https://github.com/alecpayos' target='_blank'><Image src={versionControlIcons.githubIcon.icon} alt={versionControlIcons.githubIcon.alt} className='w-8 me-6 bg-white rounded-3xl' /> github.com/alecpayos</a>
        <span className='flex items-center mb-4'><Image src={misc.googleIcon.icon} alt={misc.googleIcon.alt} className='w-8 me-6' /> alecpayos.2020@gmail.com</span>
        <span className='flex items-center mb-4'><Image src={misc.icons8PhoneIcon.icon} alt={misc.icons8PhoneIcon.alt} className='w-8 me-6' /> (+63) 917 140 7063</span>
        <span className='flex items-center mb-4'><Image src={misc.googleMapsIcon.icon} alt={misc.googleMapsIcon.alt} className='w-8 h-8 me-6' /> 75 Real St. Tacloban City, Leyte</span>
      </section>
    </div>
  )
}