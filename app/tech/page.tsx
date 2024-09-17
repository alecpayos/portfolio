import Icons from '../assets';
import Image from 'next/image';

type Icon = {
  icon: any,
  alt: string
  link: string
}

const Card = ({ icon, alt, link }: Icon) => {
  return (
    <a href={link} target='_blank' className="card flex flex-col justify-between hover:bg-[#EFBF6B] hover:text-white">
      <Image src={icon} alt={alt} className='w-8 h-8 md:w-16 md:h-16' />
      <p className='text-center text-xs md:text-md leading-4'>{alt}</p>
    </a>
  )
}

const SectionCategory = ({ iconObjects }: any) => {
  const icons = Object.values(iconObjects)
  const length = 
    icons.length == 1 ? 'md:grid-cols-1' 
    : icons.length == 2 ? 'md:grid-cols-2'
    : icons.length == 3 ? 'md:grid-cols-3'
    : icons.length == 4 ? 'md:grid-cols-4'
    : 'md:grid-cols-5'

  return (
    <div className={`grid grid-cols-3 xs:grid-cols-4 ${length} gap-4`}>
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
        <h1 className='text-2xl font-medium mb-8 px-4 text-center md:px-0'>{header}</h1>
        <SectionCategory iconObjects={iconObject} />
      </section>
    )
  })
}

export default function Skills() {
  return (
    <div className='screen screen-primary min-w-[320px]'>
      <h1 className="mt-10 !text-5xl screen-header">Technologies</h1>
      <SkillSections />
    </div>
  )
}
