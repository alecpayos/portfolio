import Image from "next/image"
import React from "react"
import Icons from "../assets"

export default function Hero() {
  const { misc, versionControlIcons } = Icons

  return (
    <div className="
      flex
      flex-col
      min-h-screen
      items-center
      justify-center
      screen-primary
      py-16
      min-w-[320px]

      lg:flex-row
      lg:py-24
      xl:py-0
    ">
      <section className="flex flex-col xl:me-16">
        <h1 className="
          screen-header 
          text-[#EFBF6B]
          text-center
          !text-[48px]
          mb-4
          
          xs:mb-8
          xs:!text-[64px]
          xs:px-12
          sm:px-0
          sm:mb-0
          sm:!text-6xl
          sm:text-left
        ">ALEC MARVIN PAYOS</h1>

        <div className="
          sm:border-l-4
          sm:ps-4 
          sm:w-[640px]
        ">
          <p className="mb-4 px-2 2xs:px-8 sm:px-0 sm:mb-3">I’m a software engineer based in Cebu, PH and currently am a pioneer of multiple dashboard projects in my current company.</p>
          <p className="mb-4 px-2 2xs:px-8 sm:px-0 sm:mb-3">Revenue generation for companies and partners have long been the goal-setters for each and every feature I plan and develop.</p>
          <p className="mb-4 px-2 2xs:px-8 sm:px-0 sm:mb-3">I’m passionate about seamless UI/UX, clear workflows, task planning, and development processes.</p>
          <p className="mb-4 px-2 2xs:px-8 sm:px-0 sm:mb-0">I take it to heart, a perfect communication to all colleagues especially towards the executive committee of the company.</p>
        </div>
      </section>

      <section className="
        invisible 
        mt-2
        
        3xs:visible
        2xs:mt-4
        sm:mt-12
        lg:mt-0
        lg:ms-8
        xl:ms-16
      ">
        <a className="flex items-center mb-2 xl:mb-4 hover:text-sky-500" href="https://linkedin.com/in/alecpayos" target="_blank"><Image src={misc.linkedinIcon.icon} alt={misc.linkedinIcon.alt} className="w-8 me-6 bg-white rounded" /> linkedin.com/in/alecpayos</a>
        <a className="flex items-center mb-2 xl:mb-4 hover:text-sky-500" href="https://github.com/alecpayos" target="_blank"><Image src={versionControlIcons.githubIcon.icon} alt={versionControlIcons.githubIcon.alt} className="w-8 me-6 bg-white rounded-3xl" /> github.com/alecpayos</a>
        <span className="flex items-center mb-2 xl:mb-4"><Image src={misc.googleIcon.icon} alt={misc.googleIcon.alt} className="w-8 me-6" /> alecpayos.2020@gmail.com</span>
        <span className="flex items-center mb-2 xl:mb-4"><Image src={misc.icons8PhoneIcon.icon} alt={misc.icons8PhoneIcon.alt} className="w-8 me-6" /> (+63) 917 140 7063</span>
        <span className="flex items-center mb-2 xl:mb-4"><Image src={misc.googleMapsIcon.icon} alt={misc.googleMapsIcon.alt} className="w-8 h-8 me-6" /> 75 Real St. Tacloban City, Leyte</span>
      </section>
    </div>
  )
}