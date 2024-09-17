import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: 'Commercial',
    description:
      'Top-quality commercial services, from EV charger installations to emergency generators, meter service upgrades, panel replacements, and more.',
    pro: 0,
  },
  {
    title: 'Residential',
    description:
      'Top-quality residential services, from EV charger installations to emergency generators, meter service upgrades, panel replacements, and more.',
    pro: 0,
  },
  {
    title: 'Industrial',
    description:
      'From control systems troubleshooting to automations & controls, Meter Electric provides tailored solutions for every industry.',
    pro: 0,
  },
  {
    title: 'Automations & Control Systems',
    description:
      'From control systems troubleshooting to automations & controls, Meter Electric provides tailored solutions for every industry.',
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Our Services</h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">What We Offer</h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        At Meter Electric, we provide expert electrical solutions for commercial, residential, and
        industrial needs. From automation and control systems to EV charger installations and
        emergency generators, we tailor our services to ensure efficiency and reliability for every
        project.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card key={title} className="bg-muted/60 dark:bg-card h-full relative">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden">
              NEW
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
