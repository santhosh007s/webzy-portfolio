
import { Button } from "@/components/ui/button";

interface FooterProps {
  logo?: React.ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    license?: string;
  };
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24">
      <div className="px-4 lg:px-8">
        {/* Main layout */}
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between text-center md:text-left">
          
          {/* Logo + Brand */}
          <a
            href="/"
            className="flex items-center md:ml-[-55] gap-x-3  font-SpaceGrotesk-Regular"
            aria-label={brandName}
          >
            {logo}
            <span className="font-bold font-myfont text-3xl text-[#4A8BEF] md:translate-x-16">
              {brandName}
            </span>
          </a>

          {/* Social Icons */}
          <ul className="flex list-none mt-6 md:mt-0 space-x-3 justify-center md:justify-start">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 bg-black rounded-full"
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-sm leading-6 text-muted-foreground text-center md:text-left">
          <div>{copyright.text}</div>
          {copyright.license && <div>{copyright.license}</div>}
        </div>
      </div>
    </footer>
  );
}

