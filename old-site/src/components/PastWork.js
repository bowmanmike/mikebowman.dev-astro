import React from 'react';
import { FaEnvelopeOpen } from 'react-icons/fa';

import { jobs } from '../lib/jobs';

const LogoCard = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a href={href}>
      <div
        className={`flex items-center ${
          baseColour && 'p-2'
        } h-full max-w-full rounded-md`}
        style={styles}
      >
        {children}
      </div>
    </a>
  );
};

const JobSection = ({ job }) => {
  return (
    <>
      <div className="mb-6 flex flex-col gap-x-4 md:flex-row">
        <div className="mb-2 flex-shrink-0 md:mb-auto md:w-1/4">
          <div className="mb-1 w-1/2">
            {job.logo ? (
              <LogoCard href={job.href} baseColour={job.colour}>
                {job.logo}
              </LogoCard>
            ) : (
              <div>
                <a href={job.href}>
                  <p>{job.company}</p>
                </a>
              </div>
            )}
          </div>
          <p className="text-sm font-thin italic">
            {job.startDate} - {job.endDate}
          </p>
        </div>
        <ul>
          {job.bulletPoints.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
      <div className="my-4 border-b-2 border-sage" />
    </>
  );
};

const PastWork = () => (
  <>
    <h2 className="mb-4 max-w-max border-b-4 border-sage pr-8 text-2xl">
      Work Experience
    </h2>
    <div className="pt-2">
      {jobs.map(job => {
        return <JobSection job={job} key={job.company} />;
      })}
    </div>
    <div className="mx-auto max-w-max border border-gray-400 p-2 text-center text-xl shadow-md md:p-4 md:text-left">
      <p className="mb-2 inline-block">Next Adventure: You!</p>
      <a
        href="mailto:mike@mikebowman.dev"
        className="inline-block w-full border border-gray-400 md:ml-4 md:w-max"
      >
        <p className="sr-only">Email Address</p>
        <p className="flex items-center bg-sage py-2 px-4 text-center text-lg">
          <FaEnvelopeOpen className="mr-2 inline-block" />
          mike@mikebowman.dev
        </p>
      </a>
    </div>
  </>
);

export default PastWork;
