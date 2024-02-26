import React from 'react'
import { HeaderFont } from '../props'
import Icons from '../assets'
import Image from 'next/image'

type ProjectPreview = {
  preview: any,
  alt: string
}

const ResumeCoverLetterSection = ({ preview, alt }: ProjectPreview) => {
  return (
    <div className='flex flex-col items-center'>
      <Image src={preview} alt={alt} className='w-[488px] h-[632px]' />
      <button className='
        rounded-lg 
        bg-yellow-500 
        hover:bg-yellow-600 
        px-4 
        py-3 
        text-white
        font-semibold
        mt-4
      '>Download {alt}</button>
    </div>
  )
}
export default function ResumeCoverLetter(headerFont: HeaderFont) {
  const { 
    projectPreviews: {
      resumePreview,
      coverLetterPreview
    }
  } = Icons

  return (
    <div className="screen screen-secondary">
      <h1 className={`!text-5xl screen-header mb-12 ${headerFont}`}>Resume and Cover Letter</h1>

      <section className='flex justify-evenly w-full px-64'>
        <ResumeCoverLetterSection preview={resumePreview.preview} alt={resumePreview.alt} />
        <ResumeCoverLetterSection preview={coverLetterPreview.preview} alt={coverLetterPreview.alt} />
      </section>
    </div>
  )
}
