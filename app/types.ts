import { StaticImageData } from 'next/image';

export type Icon = {
  icon: any,
  alt: string
  link: string
};

export type Modpack = {
  icon: StaticImageData,
  banner: StaticImageData,
  completionDate: string,
  packLink: string,
  alt: string,
  proofs: StaticImageData[],
};