import { Hexagon, Github, Twitter } from "lucide-react"
import { Footer } from "@/components/ui/footer-elem"
import Image from "next/image";

function Footercomp() {
  return (
    <div className="w-full">
      <Footer
           logo={
          <Image
            src="/logo.png" // Make sure this path is correct and the image exists
            alt="Webzy Studios Logo"
            width={60}
            height={60}
            className="ml-10 w-auto"
            priority
          />}
          
        brandName="Webzy Studios"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
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
          text: "© 2025 WEBZY STUDIOS",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}

export { Footercomp }