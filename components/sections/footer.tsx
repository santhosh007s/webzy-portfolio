import { Twitter, Instagram, Mail, Linkedin } from "lucide-react";


import { Footer } from "@/components/ui/footer-elem"
import Image from "next/image";

function Footercomp() {
  return (
    <div className="w-full relative mt-[-25%] md:mt-0 md:-translate-y-0 ">
      <Footer
          //  logo={
          // <Image
          //   src="/logo.png" // Make sure this path is correct and the image exists
          //   alt="Webzy Studios Logo"
          //   href="/"
          //   width={60}
          //   height={60}
          //   className="ml-10 w-auto"
          //   priority
          // />}
          
        brandName="Webzy Studios"
     
socialLinks={[
  {
    icon: <Twitter className="h-5 w-5 text-[#4b8aef]" />,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: <Instagram className="h-5 w-5 text-[#4b8aef]" />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <Mail className="h-5 w-5 text-[#4b8aef]" />,
    href: "mailto:webzystudios@gmail.com",
    label: "Email",
  },
    {
    icon: <Linkedin className="h-5 w-5 text-[#4b8aef] " />,
    href: "https://linkedin.com",
    label: "Linkedin",
  },
]}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Webzystudios",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}

export { Footercomp }