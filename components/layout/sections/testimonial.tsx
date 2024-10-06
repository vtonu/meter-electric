'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image, { StaticImageData } from 'next/image';
import project1Yellow from '@/public/ourProjects/project1_yellow.jpg';
import project2 from '@/public/ourProjects/project2_redbluewires.jpg';
import project3 from '@/public/ourProjects/project3_yellowstickers.jpg';
import project4 from '@/public/ourProjects/project4_housebackground.jpg';
import project5 from '@/public/ourProjects/project5_EVcharger.jpg';
import project6 from '@/public/ourProjects/project6_GENERAC.jpg';
import project7 from '@/public/ourProjects/project6_GENERAC2.jpg';
import project8 from '@/public/ourProjects/project6_panel.jpg';
import project9 from '@/public/ourProjects/project7.jpg';
import project10 from '@/public/ourProjects/project8_panel1.jpg';
import project11 from '@/public/ourProjects/project8_panel2.jpg';

interface ReviewProps {
  image: StaticImageData;
  name: string;
  userName: string;
  comment: string;
}

const reviewList: ReviewProps[] = [
  {
    image: project1Yellow,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Service Upgrade.',
  },
  {
    image: project2,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Panel replacement.',
  },
  {
    image: project3,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Service Upgrade.',
  },
  {
    image: project4,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Service Upgrade.',
  },
  {
    image: project5,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Installed EV charger.',
  },
  {
    image: project6,
    name: 'Project Name Here',
    userName: 'Industrial',
    comment: 'Installed GENERAC Emergency Backup Generator.',
  },
  {
    image: project7,
    name: 'Project Name Here',
    userName: 'Commercial',
    comment: 'Installed GENERAC Emergency Backup Generator.',
  },
  {
    image: project8,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Panel replacement.',
  },
  {
    image: project9,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Installed AC unit.',
  },
  {
    image: project10,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Panel replacement.',
  },
  {
    image: project11,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Panel replacement.',
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Our Projects</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          See What Our Company Does
        </h2>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3 ">
              <Card className="bg-muted/50 dark:bg-card ">
                <CardHeader>
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.userName}</CardDescription>
                  </div>
                  <Image src={review.image} alt={`${review.name} Logo`} />
                  <CardContent className="pt-4">{`"${review.comment}"`}</CardContent>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
