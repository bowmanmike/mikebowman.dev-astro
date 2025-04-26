import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';

const AboutPage = () => (
  <div>
    <Seo title="About" />
    <div className="relative mx-auto">
      <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h3 className="mb-4 text-2xl sm:text-2xl">Who Am I?</h3>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:col-start-2 lg:row-start-1">
          <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
            <div>
              <StaticImage
                src="../assets/images/mike-headshot.png"
                alt="Mike wearing a baseball cap and a blue jacket standing by a lake"
                width={3088}
                height={2320}
                placeholder="blurred"
                imgClassName="rounded-lg shadow-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="mx-auto max-w-prose text-base lg:max-w-none">
            <p className="text-lg text-gray-500">
              I'm a software developer based in Toronto. I love writing clean,
              well-tested code, solving complex problems, and cold-brew coffee.
            </p>
          </div>
          <div className="prose mx-auto mt-5 lg:col-start-1 lg:row-start-1 lg:max-w-none">
            <p>
              Software development brings me a fulfilling career that keeps me
              energized, engaged, and excited. I love the feeling of seeing a
              green test suite, especially after hours of wrangling with tricky
              code. I take enormous satisfaction in looking back at things I've
              built, and looking forward to what comes next.
            </p>
            <p>
              With an unconventional background, including a degree in Early
              Modern Philosophy, I bring fresh ideas to the table. I'm always
              open to trying something different, and can think outside the box
              to find answers.
            </p>
            <p>
              I've had success in the software industry in many areas,
              including:
            </p>
            <ul>
              <li>
                Architecting and developing back-end microservices using Elixir
                and Phoenix
              </li>
              <li>
                Maintaining a significant legacy codebase in Ruby on Rails
              </li>
              <li>Building concurrent command-line tooling using Go</li>
            </ul>
            {/* <h3>How I Can Help You</h3> */}
            {/* <p>I can help in lots of ways</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
