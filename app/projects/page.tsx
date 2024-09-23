import Image from 'next/image';
import { projectPreviews } from 'definitions';
import Icons from '../assets';

const PreviewTemplate = ({ project, headerFont } : { project: any, headerFont: string }) => {
  const { misc: { chainLinkIcon } } = Icons;
  const urlText = project.link.split('/')[2];
  const bg = project.index % 2 == 0 ? 'screen-primary' : 'screen-secondary';
  const reverse = project.index % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse';

  return (
    <div className={`screen ${bg} !justify-center`}>
      <h1 className={`!text-4xl text-center lg:!text-5xl screen-header mb-4 ${headerFont}`}>{project.name}</h1>

      <section className={`${reverse} flex items-center flex-col mt-4 px-8 lg:gap-8 lg:px-24 lg:mt-16`}>
        <div className="w-full flex flex-col items-center me-4 lg:w-7/12">
          <Image className='w-[864px] rounded-2xl border-2 border-white' src={project.preview} alt={project.alt} />

          <a href={project.link} target='_blank' className='flex items-center mt-2 mb-8 lg:mt-8 lg:mb-0'>
            <Image src={chainLinkIcon.icon} alt={chainLinkIcon.alt} />
            <p className='text-xl ms-2 hover:text-yellow-500'>{urlText}</p>
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
  );
};

export default function Projects({ headerFont } : { headerFont: string }) {
  const views = Object.values(projectPreviews)
    .sort((a: any, b: any) => b.date - a.date)
    .map((project: any, index) => {
      project.index = index;

      return <PreviewTemplate headerFont={headerFont} key={index} project={project}></PreviewTemplate>
    });

  return (
    <main className='pt-20 md:pt-0'>
      {views}
    </main>
  );
}