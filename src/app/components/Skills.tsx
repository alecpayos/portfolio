import React from 'react'
import Icons from '../assets'
import Image from 'next/image'
import { HeaderFont } from '../props'

type Icon = {
  icon: any,
  alt: string
  link: string
}

const Card = ({ icon, alt, link }: Icon) => {
  return (
    <a href={link} target='_blank' className="card flex flex-col justify-between hover:bg-yellow-500 hover:text-white">
      <Image src={icon} alt={alt} className='w-16 h-16' />
      <p className='text-center leading-4'>{alt}</p>
    </a>
  )
}

const SectionCategory = ({ iconObjects }: any) => {
  const icons = Object.values(iconObjects)
  const length = icons.length > 4 ? 5 : icons.length

  return (
    <div className={`grid grid-cols-${length} gap-4`}>
      {icons.map(({ icon, alt, link }: any, index: number) => {
        return <Card key={index} icon={icon} alt={alt} link={link} />
      })}
    </div>
  )
}

const SkillSections = () => {
  const sectionHeaders = [
    { iconObject: Icons.languageAndFrameworksIcons, header: 'Languages and Frameworks'},
    { iconObject: Icons.awsIcons, header: 'Amazon Web Services'},
    { iconObject: Icons.versionControlIcons, header: 'Version Control'},
    { iconObject: Icons.designFrameworksIcons, header: 'Design Frameworks'},
    { iconObject: Icons.databaseIcons, header: 'Databases'},
    { iconObject: Icons.projectManagementIcons, header: 'Project Management'},
    { iconObject: Icons.operatingSystemIcons, header: 'Operating Systems'},
  ]

  return sectionHeaders.map(({ iconObject, header }, index: number) => {
    return (
      <section key={index} className="flex flex-col items-center mt-12">
        <h1 className='text-2xl font-medium mb-8'>{header}</h1>
        <SectionCategory iconObjects={iconObject} />
      </section>
    )
  })
}

export default function Skills(headerFont: HeaderFont) {
  return (
    <div className='screen screen-primary'>
      <h1 className={`!text-5xl screen-header ${headerFont}`}>MY SKILLS</h1>
      <SkillSections />
    </div>
  )
}
