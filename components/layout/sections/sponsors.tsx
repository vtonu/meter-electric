'use client';

import Image from 'next/image';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import generacLogo from '/public/generac-logo.jpg';
import { Card } from '@/components/ui/card';

const sponsors = [
  {
    image: generacLogo,
  },
  {
    image: generacLogo,
  },
  {
    image: generacLogo,
  },
  {
    image: generacLogo,
  },
  {
    image: generacLogo,
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center pb-4 font-bold">Our Partners</h2>
      <Marquee>
        <div className="flex justify-center items-center space-x-4">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="p-4 bg-zinc-900 text-white">
              <Image src={sponsor.image} alt="Generac Logo" className="h-16 w-auto" />
            </Card>
          ))}
        </div>
      </Marquee>
    </section>
  );
};
