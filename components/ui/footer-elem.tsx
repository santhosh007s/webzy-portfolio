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
        {/* Container for logo and social links */}
        <div
          className="md:flex md:items-start md:justify-between"
          // You can modify these flexbox properties to move content:
          // justify-between: spreads items left and right
          // justify-center: center items horizontally
          // justify-start / justify-end: align left or right
          // items-start / items-center / items-end: vertical alignment
          // You can also change 'md:flex' to 'md:grid' and use grid for custom layout
        >
          <a
            href="/"
            className="flex items-center justify-items-center gap-x-3 font-SpaceGrotesk-Regular"
            aria-label={brandName}
            // This flex container controls logo and brand name layout
            // Change 'items-center' to 'items-start' or 'items-end' to move vertically
          >
            {logo}
            <span className="font-bold  text-3xl text-[#4A8BEF]">{brandName}</span>
          </a>

          <ul
            className="flex list-none mt-6 md:mt-0 space-x-3"
            // This is the container for social icons
            // Change 'flex' direction or justify-content here to move icons
            // For example, add 'justify-end' or 'justify-center' for horizontal alignment
          >
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full"
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

        {/* Container for mainLinks, legalLinks and copyright */}
        <div
          className="border-t mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10"
          // This uses CSS grid on large screens:
          // You can adjust 'lg:grid-cols-10' to another number for different column layouts
          // Or change to flexbox here if you want flex control
        >
          <nav
            className="lg:mt-0 lg:col-[4/11]"
            // Controls the position of main links in grid columns 4 to 10
            // Change col span to move left/right, or replace with flexbox for vertical/horizontal changes
          >
            <ul
              className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end"
              // Flex container for main links
              // Change 'flex-wrap' to 'flex-nowrap' to keep all on one line
              // Change 'justify-end' to 'justify-start' or 'justify-center' for alignment
            >
              {/* {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    // href={link.href}
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))} */}
            </ul>
          </nav>

          <div
            className="mt-6 lg:mt-0 lg:col-[4/11]"
            // Container for legal links
            // Shares same grid columns as main links, can be adjusted independently
          >
            <ul
              className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end"
              // Similar to main links - adjust flex properties for alignment and spacing
            >
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="mt-6 text-sm leading-6 text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]"
            // Copyright container
            // Located in grid rows 1 to 3 and columns 1 to 3
            // Adjust grid row and column spans here to move position vertically and horizontally
          >
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
