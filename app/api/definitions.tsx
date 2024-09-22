import grabADrinkPreview from '../assets/project-previews/grab-a-drink-preview.png';
import ohifCustomMprPreview from '../assets/project-previews/ohif-custom-mpr-preview.png';
import ohifWorklistPreview from '../assets/project-previews/ohif-worklist-preview.png';
import speccupPreivew from '../assets/project-previews/speccup-preivew.png';
import denimsteinPreview from '../assets/project-previews/denimstein.png';
import twrpgPreview from '../assets/project-previews/twrpg.png';
import { GrabADrink, SpeccUp, Denimstein, TheWorldRPG, OhifBase, OhifCustomMpr } from './preview-children';

const projectPreviews: any = {
  grabADrinkPreview: {
    date: 2020,
    name: "Grab A Drink",
    preview: grabADrinkPreview,
    alt: "Grab A Drink Project Preview",
    link: "https://grab-a-drink.web.app",
    child: <GrabADrink />,
    inspo: `
      was my first ever project. 
      I consider this to be my very first informal front-end project. 
      This was made upon the request of a friend for a school project. 
      I was responsible for everything from planning and design, development and maintenance. 
      This was also my first ever exposure to Agile Development as I initially thought of adapting the process. 
      With that, this website has gone through 3 iterations:
    `,
  },

  ohifWorklistPreview: {
    date: 2023,
    name: "OHIF Base Integration",
    preview: ohifWorklistPreview,
    alt: "OHIF Worklist Project Preview",
    link: "https://amnp-ohif.web.app",
    child: <OhifBase />,
    inspo: `
      is one of the open-source repositories I integrated into the company.
      This served as the solution to non-responsive 3rd-party medical web viewers
      as most of our partners either had a massive bug that delayed the operations by weeks
      or was downright underperfoming for the price that was paid for the service.
      I was responsible for everything, from scoping, planning, research, and integration.
    `,
  },

  ohifCustomMprPreview: {
    date: 2023,
    name: "OHIF Custom MPR",
    preview: ohifCustomMprPreview,
    alt: "OHIF Custom MPR Project Preview",
    link: "https://amnp-ohif.web.app/#/viewer?StudyInstanceUIDs=2.16.840.1.114362.1.11972228.22789312658.616067305.306.2",
    child: <OhifCustomMpr />,
    inspo: `
      is also one of my most recent projects immediately following the base web viewer integration.
      I was able to customize the functionality of the web viewer per the needs of the clients.
      Phase 2 of the project was to give the users customizability on their own and per their preference.
      I was able to get phase 1 out into production but phase 2 was halted due to complications with the
      cloud PACS solution.
    `,
  },

  speccupPreivew: {
    date: 2021,
    name: "SpeccUp",
    preview: speccupPreivew,
    alt: "SpeccUp Project Preview",
    link: "https://alecpayos.github.io/speccup.github.io/",
    child: <SpeccUp />,
    inspo: `
      is one of my inspirational projects aimed to help my own fitness and lifestyle.
      I planned to include a dashboard for the app when users sign up and log in.
      I also planned to have the dashboard show all necessary data to the user that aimed to help their own fitness journey.
      The app uses the following tech stack:
    `,
  },

  denimsteinPreview: {
    date: 2024,
    name: "Denimstein",
    preview: denimsteinPreview,
    alt: 'Denimstein Product Page Preview',
    link: "https://denimstein.web.app/",
    child: <Denimstein />,
    inspo: `
      is one my commissioned projects from an outside client of the company. 
      This project was simply a landing page for their customers and as their
      company was still small, not many features were needed. As per project vision,
      there were talks of transforming the landing page to a more robust e-commerce website.
      The plan was halted upon the requests of the client.
    `,
  },

  twrpgPreview: {
    date: 2024,
    name: "The World RPG Guidebook",
    preview: twrpgPreview,
    alt: 'The World RPG Preview',
    link: "https://amnp-twrpg.web.app",
    child: <TheWorldRPG />,
    inspo: `
      is one of my toy projects. I had to seriously deal with the lacking functionality
      of the suggested websites of the game I was passionately playing. And as I saw no other
      alternative. I made it with my own. The idea was just to make it for myself as well.
      This project is purely frontend. The data itself isn't so heavy which is why I didn't utilize
      a backend or database service for it.
    `,
  },
}

export {
  projectPreviews
}