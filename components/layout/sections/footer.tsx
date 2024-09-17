import { Separator } from '@/components/ui/separator';
import { ChevronsDownIcon } from 'lucide-react';
import Link from 'next/link';

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32 ">
      <div className="p-12 bg-card border border-secondary rounded-2xl ">
        <section className="flex justify-center items-center">
          <Link href="#" className="flex font-bold items-center">
            <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

            <h3 className="text-2xl">METER ELECTRIC</h3>
          </Link>
        </section>
        <Separator className="my-6" />
        <section className="text-center">
          <h3 className="">Copyright &copy; 2024 Meter Electric LLC.</h3>
        </section>
      </div>
    </footer>
  );
};
