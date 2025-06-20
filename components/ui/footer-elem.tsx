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
        <div
          className="md:flex md:items-start md:justify-between"
        >
          <a
            href="/"
            className="flex items-center justify-items-center gap-x-3 transalate-y-[-20]  font-SpaceGrotesk-Regular"
            aria-label={brandName}
          >
            {logo}
            <span className="font-bold font-myfont text-3xl text-[#4A8BEF] md:transalate-x-60 transalate-x-700 ">{brandName}</span>
          </a>

          <ul
            className="flex list-none  mt-6 md:mt-0 space-x-3  md:translate-x-[-50] translate-x-40">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 bg-black  rounded-full "
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

          <div
            className="mt-6 text-sm leading-6 text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
    </footer>
  );
}
