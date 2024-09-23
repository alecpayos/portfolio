'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import modpacks from '@/app/assets/hobbies/minecraft-modpacks';
import ScrollContext, { ScrollContextProvider } from '../context/Scroll';

const bannerFlatmap = modpacks.map(pack => pack.banner);
const proofFlatmap = modpacks.reduce((list: StaticImageData[], pack) => list.concat(...pack.proofs), []);

const MinecraftModpacks = () => {
  const [ banner, setBanner ] = useState(bannerFlatmap[0]);
  const [ pack, setPack ] = useState(modpacks[0]);
  const [ proof, setProof ] = useState(proofFlatmap[0]);
  const scroll = useContext(ScrollContext);

  useEffect(() => {
    let index = Math.floor(scroll.y / 100);
    proofFlatmap[index] !== undefined && setProof(proofFlatmap[index]);

    if (index <= 13) {
      setBanner(bannerFlatmap[0]);
      setPack(modpacks[0]);
    } 
    else if (index <= 16) {
      setBanner(bannerFlatmap[1]);
      setPack(modpacks[1]);
    } 
    else if (index <= 19) {
      setBanner(bannerFlatmap[2]);
      setPack(modpacks[2]);
    }
  }, [ scroll ]);

  return (
    <div className='h-[40in] screen-primary'>
      <div className="
        flex
        w-full
        items-center
        flex-col
        fixed
        screen-primary
        min-w-[320px]
        pt-40
        md:pt-28
      ">
        <div className='md:w-2/3 lg:w-1/2 mx-2'>
          <Image
            src={banner}
            alt={pack.alt}
            className='max-h-[192px] max-w-full'
          />
        </div>

        <div className='flex justify-center mt-4'>
          <div className='
            screen-secondary
            mx-2
            md:w-2/3
            lg:w-1/2
            rounded-2xl
          '>
            <div>
              <div className='w-full flex items-center justify-evenly p-4 h-full'>
                <div className=''>
                  <Image className='w-full' src={proof.src} alt={pack.alt} width={0} height={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hobbies() {
  return (
    <ScrollContextProvider>
      <main>
        <MinecraftModpacks />
      </main>
    </ScrollContextProvider>
  );
}
