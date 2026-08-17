import { useContext } from "react"
import { projectPreviews } from "~/data/definitions"
import Icons from "~/assets"
import FontContext from "~/context/font-context-provider"

const PreviewTemplate = ({ project }: { project: any }) => {
  const headerFont = useContext(FontContext)
  const {
    misc: { chainLinkIcon },
  } = Icons
  const urlText = project.link.split("/")[2]
  const bg = project.index % 2 == 0 ? "screen-primary" : "screen-secondary"
  const reverse =
    project.index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"

  return (
    <div className={`screen ${bg} !justify-center`}>
      <h1
        className={`mb-4 text-center !text-4xl screen-header lg:!text-5xl ${headerFont.className}`}
      >
        {project.name}
      </h1>

      <section
        className={`${reverse} mt-4 flex flex-col items-center px-8 lg:mt-16 lg:gap-8 lg:px-24`}
      >
        <div className="me-4 flex w-full flex-col items-center lg:w-7/12">
          <img
            className="w-[864px] rounded-2xl border-2 border-white"
            src={project.preview}
            alt={project.alt}
          />

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-2 mb-8 flex items-center lg:mt-8 lg:mb-0"
          >
            <img src={chainLinkIcon.icon} alt={chainLinkIcon.alt} />
            <p className="ms-2 text-xl hover:text-yellow-500">{urlText}</p>
          </a>
        </div>

        <div className="w-full sm:w-10/12 lg:w-7/12">
          <p>
            <b>{project.name}</b>
            {project.inspo}
          </p>

          {project.child}
        </div>
      </section>
    </div>
  )
}

export default function Projects() {
  const views = Object.values(projectPreviews)
    .sort((a: any, b: any) => b.date - a.date)
    .map((project: any, index) => {
      project.index = index

      return <PreviewTemplate key={index} project={project}></PreviewTemplate>
    })

  return <main className="pt-20 md:pt-0">{views}</main>
}
