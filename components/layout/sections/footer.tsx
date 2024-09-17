import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';
import logoBlack from '@/public/logo-black.png';
import logoWhite from '@/public/logo-white.png';
/* import { ToggleTheme } from '@/components/layout/toggle-theme.tsx';
import { useTheme } from 'next-themes'; */

export const FooterSection = () => {
  /* const { theme } = useTheme(); */
  return (
    <footer id="footer" className="container py-24 sm:py-32 ">
      <div className="p-12 bg-card border border-secondary rounded-2xl ">
        <section className="flex justify-center items-center">
          <Link href="#" className="flex font-bold items-center">
            {/* <Image
              width={350}
              height={350}
              src={theme === 'light' ? logoBlack : logoWhite}
              alt="official logo"
            /> */}
            <Image src={logoBlack} alt="Official Logo" width={350} height={350} />
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
