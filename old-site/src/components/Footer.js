import React from 'react';
import { SiGatsby, SiTailwindcss, SiNetlify } from 'react-icons/si';

const LogoLink = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-1 rounded-md px-2 text-gray-50 shadow-md"
      style={styles}
    >
      {children}
    </a>
  );
};

const Footer = () => (
  <footer className="text-md m-4 mx-auto mb-8 p-2 text-center lg:mx-0 lg:p-4">
    <p className="my-2">
      This site was built by hand with{' '}
      <LogoLink href="https://www.gatsbyjs.com" baseColour="#672ab2">
        <SiGatsby /> GatsbyJS
      </LogoLink>{' '}
      and{' '}
      <LogoLink href="https://www.tailwindcss.com" baseColour="#52b3d1">
        <SiTailwindcss /> TailwindCSS,
      </LogoLink>{' '}
      and hosted on{' '}
      <LogoLink href="https://www.netlify.com" baseColour="#4caa9f">
        <SiNetlify /> Netlify
      </LogoLink>
    </p>
    <p className="mt-8 mb-4">
      Mike Bowman &copy; 2016 - {new Date().getFullYear()}
    </p>
  </footer>
);
export default Footer;
