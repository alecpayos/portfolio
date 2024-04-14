import React from 'react'
import { HeaderFont } from '../props'

const ExperienceTimeline = ({
  year,
  title,
  company,
  description,
}: {
  year: number,
  title: string,
  company: string,
  description: string[],
}) => {
  return (
    <section className="flex flex-col md:flex-row mb-12">
      <div className="flex h-max">
        <div className="timeline-date">{year}</div>
        <div className="timeline-date-arrow"></div>
      </div>

      <div className="hidden md:flex flex-col items-center justify-between mt-1 me-8">
        <div className="timeline-stamp"></div>
        <div className='timeline-border'></div>
      </div>
      
      <div className="flex flex-col mt-4 md:mt-0">
        <span className="mb-2 px-4 text-4xl">{title}</span>
        <span className="mb-2 px-4 text-xl">{company}</span>
        <ul className="text-lg px-6 sm:pe-8 md:max-w-[640px] text-zinc-400">
          {description.map((desc, index) => <li key={index} className="list-disc">{desc}</li>)}
        </ul>
      </div>
    </section>
  );
}

export default function Experiences(headerFont: HeaderFont) {
  const midExperience = [
    "Built multiple revenue increasing features utilizing the AWS ecosystem. From customer facing features to internal company tools as well as partner features and dashboards.",
    "Integrated and customized the open-source OHIF medical web viewer to alleviate the partner’s needs.",
    "Coordinated with another senior developer to release a serverless PACS system to integrate with the medical viewer application.",
    "Spearheaded 2 native fullstack dashboard projects for a medical web application.",
    "Developed a report generation feature where the company’s partners utilize the tool and the outputs are sold to its customers.",
    "Improved and developed features and fixed bugs, heavily on the frontend utilizing Vue and Laravel for the backend.",
    "Administered and maintained servers for the above mentioned projects using AWS and NGINX",
    "Implemented Figma designs by the company’s VP of Design into the dashboard projects.",
  ];

  const juniorExperience = [
    "Made a ReactJS + Flask landing page for one of my clients. The Flask ORM was paired up with PostgreSQL as part of an exploration research for its feasibility.",
    "Developed a static shop app with ReactJS + AntDesign. Figma designs were implemented into code after the design phase. The project was small and so the tasks were simple and didn't require too much time.",
    "Created layout for both projects using Figma. This was my first exposure to scrums and sprints as the client themselves were engaged in the project designs and overall of the user experience.",
  ];

  const freelanceExp = [
    "Developed a static web app and used Figma for designs. Was coded using barebones HTML, CSS and JavaScript as part of the acceptance criteria.",
  ]

  return (
    <div className="screen min-w-[320px] sm:!items-start md:!items-center screen-secondary">
      <h1 className={`!text-5xl !self-center screen-header mb-8 md:mb-16 ${headerFont}`}>Experiences</h1>

      <ExperienceTimeline year={2022} title='Mid-Level Web Developer' company='Wend PH Inc, Cebu' description={midExperience} />
      <ExperienceTimeline year={2020} title='Junior Web Developer' company='Wend PH Inc, Cebu' description={juniorExperience} />
      <ExperienceTimeline year={2019} title='Freelance Web Developer' company='Tacloban' description={freelanceExp} />
    </div>
  )
}
