import pa2adventureBound from './project-architect-2/pa2-adventure-bound.png';
import pa2banner from './project-architect-2/pa2-banner.png';
import pa2completed from './project-architect-2/pa2-completion.png';
import pa2emcAutomation from './project-architect-2/pa2-emc-automation.png';
import pa2finalStar from './project-architect-2/pa2-final-star.png';
import pa2icon from './project-architect-2/pa2-icon.png';
import pa2logistics from './project-architect-2/pa2-logistics.png';
import pa2magic from './project-architect-2/pa2-magic.png';
import pa2power from './project-architect-2/pa2-power.png';
import pa2projecte from './project-architect-2/pa2-project-e.png';
import pa2qol from './project-architect-2/pa2-qol.png';
import pa2resource from './project-architect-2/pa2-resource-gen.png';
import pa2start from './project-architect-2/pa2-starting-out.png';
import pa2storage from './project-architect-2/pa2-storage.png';
import pa2tech from './project-architect-2/pa2-tech.png';
import pa2tome from './project-architect-2/pa2-tome-of-knowledge.png';

import uioBanner from './universio/uio-banner.png';
import uioFinalStar1 from './universio/uio-fs-1.png';
import uioFinalStar2 from './universio/uio-fs-2.png';
import uioIcon from './universio/uio-icon.gif';

import mbAllAchievements1 from './mystical-block/mb-all-1.png';
import mbAllAchievements2 from './mystical-block/mb-all-2.png';
import mbCreativeChest from './mystical-block/mb-cc.png';
import mbIcon from './mystical-block/mb-icon.png';
import mbBanner from './mystical-block/mb-banner.png';
import { Modpack } from 'types';

const projectArchitectTwo = {
  icon: pa2icon,
  banner: pa2banner,
  completionDate: "Aug 30 2024",
  packLink: "https://www.curseforge.com/minecraft/modpacks/project-architect-2",
  alt: "Project Architect 2 Icon",
  proofs: [
    pa2start,
    pa2projecte,
    pa2qol,
    pa2storage,
    pa2logistics,
    pa2tech,
    pa2power,
    pa2resource,
    pa2magic,
    pa2adventureBound,
    pa2emcAutomation,
    pa2finalStar,
    pa2tome,
    pa2completed,
  ]
};

const universio = {
  icon: uioIcon,
  banner: uioBanner,
  completionDate: "Aug 26 2024",
  packLink: "https://www.curseforge.com/minecraft/modpacks/universio",
  alt: "UniversIO Icon",
  proofs: [
    uioFinalStar1,
    uioFinalStar2,
  ]
};

const mysticalBlock = {
  icon: mbIcon,
  banner: mbBanner,
  completionDate: "Aug 23 2024",
  packLink: "https://www.curseforge.com/minecraft/modpacks/mystical-block",
  alt: "Mystical Block Icon",
  proofs: [
    mbCreativeChest,
    mbAllAchievements1,
    mbAllAchievements2,
  ]
};

const modpacks: Modpack[] = [
  projectArchitectTwo,
  universio,
  mysticalBlock,
];

export default modpacks;