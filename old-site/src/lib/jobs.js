import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import TheScoreLogo from '../assets/images/thescore-logo.svg';
import PagerDutyLogo from '../assets/images/pagerduty-logo.svg';
import RBCLogo from '../assets/images/rbc-logo.svg';
import TestDoubleLogo from '../assets/images/testdouble-logo.svg';

export const jobs = [
  {
    company: 'Test Double',
    logo: <TestDoubleLogo />,
    href: 'https://testdouble.com',
    startDate: 'October, 2024',
    endDate: 'Today',
    bulletPoints: [
      'Working as a consultant to help clients improve their software development practices.',
    ],
  },
  {
    company: 'RBC',
    logo: <RBCLogo width="100%" className="h-full" />,
    href: 'https://rbc.com',
    startDate: 'January, 2023',
    endDate: 'October, 2024',
    bulletPoints: [
      'Developed and maintained payment engines and related services using Scala and Java.',
      'Developed an internal tool using Angular to allow other teams to easily make manual adjustments to database records.',
    ],
  },
  {
    company: 'Mike Bowman Development',
    href: 'https://mikebowman.dev',
    startDate: 'January, 2022',
    endDate: 'January, 2023',
    bulletPoints: [
      'Freelance full-stack web development, primarily using Ruby on Rails & React',
    ],
  },
  {
    company: 'Pager Duty',
    logo: <PagerDutyLogo width="100%" className="h-full" />,
    href: 'https://pagerduty.com',
    startDate: 'April, 2021',
    endDate: 'October, 2021',
    bulletPoints: [
      'Worked to launch a customer notification system in a new service region.',
      'Helped to onboard new team members.',
      'Updated and maintained multiple legacy services in Ruby, Elixir, and Scala.',
    ],
  },
  {
    company: 'theScore',
    logo: <TheScoreLogo width="100%" className="h-full" />,
    href: 'https://thescore.com',
    startDate: 'April, 2018',
    endDate: 'March, 2021',
    colour: '#1a1a1c',
    bulletPoints: [
      'Maintained significant legacy Rails codebase to power main API, data ingestion, and push notifications.',
      'Designed and built two new data ingestion services using HTTP polling and socket connections, using Ruby and Elixir.',
      'Helped design and develop a payments gateway using Elixir and Phoenix.',
    ],
  },
  {
    company: 'Zoocasa',
    logo: (
      <StaticImage
        src="../assets/images/zoocasa-logo.png"
        alt="Zoocasa Logo"
        imgClassName="h-full"
      />
    ),
    href: 'https://zoocasa.com',
    startDate: 'May, 2016',
    endDate: 'March, 2018',
    colour: '#171a1c',
    bulletPoints: [
      'Design, build, and maintain tools to process data.',
      'Architect and scale APIs to power front-end features.',
      'Ensure high levels of testing and documentation.',
      'Utilize primarily Go, Ruby, and RethinkDB.',
    ],
  },
];
