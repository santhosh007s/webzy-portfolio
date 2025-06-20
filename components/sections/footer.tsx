import { Twitter, Instagram, Mail, Linkedin } from "lucide-react";


import { Footer } from "@/components/ui/footer-elem"
import Image from "next/image";

function Footercomp() {
  return (
    <div className="w-full relative mt-[-25%] md:mt-0 md:-translate-y-0 ">
      <Footer
        brandName="Webzy Studios"
     
socialLinks={[
  {
    icon: <Twitter className="h-5 w-5 text-[#4b8aef]" />,
    href: "https://x.com/santhoshtechdev?s=21",
    label: "Twitter",
  },
  {
    icon: <Instagram className="h-5 w-5 text-[#4b8aef]" />,
    href: "https://www.instagram.com/webzystudios?igsh=YnUzNTNiZWpnajVs&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: <Mail className="h-5 w-5 text-[#4b8aef]" />,
    href: "mailto:webzystudios@gmail.com",
    label: "Email",
  },
  //   {
  //   icon: <Linkedin className="h-5 w-5 text-[#4b8aef] " />,
  //   href: "https://linkedin.com",
  //   label: "Linkedin",
  // },
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