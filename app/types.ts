import { StaticImageData } from 'next/image';

export type Modpack = {
  icon: StaticImageData,
  banner: StaticImageData,
  completionDate: string,
  packLink: string,
  alt: string,
  proofs: StaticImageData[],
};