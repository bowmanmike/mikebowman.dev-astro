import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';
import PastWork from '../components/PastWork';
import Contact from '../components/Contact';
import BlogHighlight from '../components/BlogHighlight';
import ContactForm from '../components/ContactForm';
import IndexContainer from '../components/IndexContainer';

import RailsLogo from '../assets/images/rails-logo.svg';
import ReactLogo from '../assets/images/react-icon.svg';
import GoLogo from '../assets/images/go-logo.svg';

const TechCard = ({ name, href, children }) => (
  <a href={href} className="border border-gray-400 shadow-md hover:underline">
    <div className="grid h-full min-h-full grid-rows-1 items-center justify-center p-4">
      {children}
      <p className="self-end text-center text-lg">{name}</p>
    </div>
  </a>
);

const IndexPage = () => (
  <>
    <Seo />
    <div className="mb-8 grid lg:grid-cols-2">
      <StaticImage
        src="../assets/images/mike-headshot-cropped.png"
        alt="Mike Bowman Headshot"
        className="my-8 mx-auto max-w-xs rounded-full shadow-lg sm:max-w-sm"
        imgClassName="rounded-full"
        aspectRatio={1}
        transformOptions={{ cropFocus: 'attention' }}
        placeholder="none"
      />
      <Contact />
    </div>
    <IndexContainer>
      <h2 className="mb-4 max-w-max border-b-4 border-sage pr-8 text-2xl">
        Hi! I'm Mike
      </h2>
      <p>
        I'm a software developer based in Toronto, currently working at{' '}
        <a href="https://rbc.com">RBC</a>.
      </p>
      <p>
        I have {new Date().getFullYear() - 2016}+ years of experience as a
        Full-Stack Developer. I've worked with a wide variety of modern web
        technologies, as seen below. I have worked in companies of all sizes,
        from a tiny real-estate startup, to a mid-size media company, all the
        way to a large Silicon Valley B2B company, and a globally-significant
        Canadian bank.
      </p>
      <p>
        I am passionate about clean code, testing, new technology, and cold brew
        coffee.
      </p>
    </IndexContainer>
    <IndexContainer>
      <BlogHighlight />
    </IndexContainer>
    <IndexContainer>
      <PastWork />
    </IndexContainer>
    <IndexContainer>
      <h2 className="mb-4 max-w-max border-b-4 border-sage pr-8 text-2xl">
        My Toolbelt
      </h2>
      <p>
        While I'll use whichever tool is best for the job, I have significant
        experience with these particular tools
      </p>
      <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4">
        <TechCard name="Ruby on Rails" href="https://rubyonrails.org">
          <RailsLogo className="w-full" alt="Rails Logo" />
        </TechCard>
        <TechCard name="Elixir & Phoenix" href="https://phoenixframework.com">
          <StaticImage
            src="../assets/images/phoenix-logo.png"
            alt="Phoenix Logo"
            className="w-full"
          />{' '}
        </TechCard>
        <TechCard name="React" href="https://reactjs.org">
          <ReactLogo alt="React Logo" className="w-full" />
        </TechCard>
        <TechCard name="Golang" href="https://golang.org">
          <GoLogo alt="Golang Logo" className="w-full" />
        </TechCard>
      </div>
    </IndexContainer>
  </>
);

export default IndexPage;
