import Icons from "~/assets"
import type { Icon } from "~/types"

const Card = ({ icon, alt, link }: Icon) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="card flex flex-col justify-between hover:bg-[#efbf6b] hover:text-white"
    >
      <img src={icon} alt={alt} className="h-8 w-8 md:h-16 md:w-16" />
      <p className="text-center text-xs leading-4 md:text-md">{alt}</p>
    </a>
  )
}

const SectionCategory = ({ iconObjects }: { iconObjects: Record<string, Icon> }) => {
  const icons = Object.values(iconObjects)
  const length =
    icons.length == 1
      ? "md:grid-cols-1"
      : icons.length == 2
        ? "md:grid-cols-2"
        : icons.length == 3
          ? "md:grid-cols-3"
          : icons.length == 4
            ? "md:grid-cols-4"
            : "md:grid-cols-5"

  return (
    <div className={`grid grid-cols-3 gap-4 xs:grid-cols-4 ${length}`}>
      {icons.map(({ icon, alt, link }, index) => {
        return <Card key={index} icon={icon} alt={alt} link={link} />
      })}
    </div>
  )
}

const SkillSections = () => {
  const sectionHeaders = [
    {
      iconObject: Icons.languageAndFrameworksIcons,
      header: "Languages and Frameworks",
    },
    { iconObject: Icons.awsIcons, header: "Amazon Web Services" },
    { iconObject: Icons.versionControlIcons, header: "Version Control" },
    { iconObject: Icons.designFrameworksIcons, header: "Design Frameworks" },
    { iconObject: Icons.databaseIcons, header: "Databases" },
    {
      iconObject: Icons.projectManagementIcons,
      header: "Project Management",
    },
    { iconObject: Icons.operatingSystemIcons, header: "Operating Systems" },
  ]

  return sectionHeaders.map(({ iconObject, header }, index) => {
    return (
      <section key={index} className="mt-12 flex flex-col items-center">
        <h1 className="mb-8 px-4 text-center text-2xl font-medium md:px-0">
          {header}
        </h1>
        <SectionCategory iconObjects={iconObject} />
      </section>
    )
  })
}

export default function Skills() {
  return (
    <div className="screen min-w-[320px] !pt-28 screen-primary md:pt-0">
      <h1 className="mt-10 !text-5xl screen-header">Technologies</h1>
      <SkillSections />
    </div>
  )
}
