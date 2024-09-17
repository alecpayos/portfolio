'use client';

import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import modpacks from '@/app/assets/hobbies/minecraft-modpacks';
import { Modpack } from 'types';
import Icons from '../assets';
import ScrollContext, { ScrollContextProvider } from '../context/Scroll';

const PackProofCarousel = ({ pack } : { pack: Modpack }) => {
  const [ proofIndex, setProofIndex ] = useState(0);
  const [ proof, setProof ] = useState(pack.proofs[proofIndex]);
  const { chevronLeftDouble, chevronRightDouble } = Icons.misc;

  useEffect(() => {
    setProof(pack.proofs[proofIndex]);
  }, [ pack ]);

  const changeProofHighlight = (key: string) => {
    const edgeIndices = proofIndex == 0 || proofIndex == pack.proofs.length - 1;

    if (edgeIndices) {
      key == 'left'
        ? setProofIndex(pack.proofs.length - 1)
        : setProofIndex(0);
    }

    else {
      key == 'left'
        ? setProofIndex(proofIndex - 1)
        : setProofIndex(proofIndex + 1);
    }
  }

  return (
    <div>
      <div className='w-full flex items-center justify-evenly p-4 h-full'>
        <div className=''>
          <Image className='w-full' src={proof.src} alt={pack.alt} width={0} height={0} />
        </div>
      </div>

      <div>
        <button className='p-2 m-2 rounded-full hover:bg-zinc-600' onClick={() => changeProofHighlight('left')}>
          <Image src={chevronLeftDouble.icon} alt={pack.alt} width={32} height={32} />
        </button>

        <button className='p-2 m-2 rounded-full hover:bg-zinc-600' onClick={() => changeProofHighlight('right')}>
          <Image src={chevronRightDouble.icon} alt={pack.alt} width={32} height={32} />
        </button>
      </div>
    </div>
  );
}

const RenderModpackIcons = ({ packShowcase, setPackShowcase } : { packShowcase: number, setPackShowcase : any }) => {
  const packIcons = modpacks.map(({ icon, alt }, index) => {
    const shouldHighlight = index == packShowcase ? 'border-yellow-500' : '';

    return (
      <button className='pb-4' onClick={() => setPackShowcase(index)} key={index}>
        <Image
          src={icon}
          alt={alt}
          className={`mx-4 border-4 max-w-[80px] ${shouldHighlight}`}
        />
      </button>
    )
  });

  return <div className='flex flex-col px-4'>{packIcons}</div>;
}

const MinecraftModpacks = () => {
  const [ packShowcase, setPackShowcase ] = useState(0);
  const [ pack, setPack ] = useState(modpacks[packShowcase]);
  const scroll = useContext(ScrollContext);
  
  console.log(scroll)

  useEffect(() => {
    setPack(modpacks[packShowcase]);
  }, [ packShowcase ]);

  return (
    <ScrollContextProvider>
      <div className='h-[40in] screen-primary'>
        <div className="
          flex
          w-full
          items-center
          flex-col
          fixed
          screen-primary
          pt-28
          min-w-[320px]
        ">
          <div className='h-[256px] w-1/2'>
            <Image
              src={pack.banner}
              alt={pack.alt}
              className='max-h-[256px]'
            />
          </div>

          <div className='flex justify-center mt-8'>
            <RenderModpackIcons 
              packShowcase={packShowcase}
              setPackShowcase={setPackShowcase}
            />

            <div className='
              screen-secondary
              w-1/2
              rounded-2xl
            '>
              <PackProofCarousel pack={pack} />
            </div>
          </div>
        </div>
      </div>
    </ScrollContextProvider>
  )
}

export default function Hobbies() {
  return (
    <main>
      <MinecraftModpacks />
    </main>
  );
}
