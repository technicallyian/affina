import React from 'react';
import { Logo } from './Logo';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="block text-sm text-white opacity-50 hover:opacity-100 transition-opacity mt-4">
    {children}
  </a>
);

const socialLinks = [
  { label: 'Facebook', href: '#', Icon: FaFacebookF },
  { label: 'Instagram', href: '#', Icon: FaInstagram },
  { label: 'YouTube', href: '#', Icon: FaYoutube },
  { label: 'LinkedIn', href: '#', Icon: FaLinkedin },
];

const Footer = () => {
  return (
    <footer className="py-20 bg-gradient-to-br from-[#1B98E0] to-[#0C004B]">
      <div className="container mx-auto px-4 flex justify-between items-start text-white">
        <div className="flex flex-col items-start">
          <Logo className="mb-12 w-32" variant="white" />
          <div className="flex gap-x-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="border border-white/50 rounded-full p-6 text-white hover:text-white hover:border-white transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-x-16">
          <div>
            <h3 className="font-bold mb-2">Solutions</h3>
            <FooterLink href="#">Rethink Loyalty</FooterLink>
            <FooterLink href="#">Crowdplay</FooterLink>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Press</FooterLink>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;