'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import project1Yellow from '@/public/ourProjects/project1_yellow.jpg';

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
    userName: 'Commercial',
    comment: 'Upgraded meter service and panel replacement.',
  },
  {
    image: project1Yellow,
    name: 'Project Name Here',
    userName: 'Residential',
    comment: 'Installed EV charger and emergency generator for residential property.',
  },

  {
    image: project1Yellow,
    name: 'Project Name Here',
    userName: 'Industrial',
    comment: 'Installed EV charger and emergency generator for residential property.',
  },
  {
    image: project1Yellow,
    name: 'Project Name Here',
    userName: 'Residential',
    comment:
      'Changed out a 200 amp panel and installed a 400 amp panel for a residential property.',
  },
  {
    image: project1Yellow,
    name: 'Project Name Here',
    userName: 'Residential',
    comment:
      'Changed out a 200 amp panel and installed a 400 amp panel for a residential property.',
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
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">{`"${review.comment}"`}</CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                    <Image src={project1Yellow} alt="Generac Logo" className="h-16 w-auto" />
                  </div>
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
