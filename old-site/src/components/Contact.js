import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelopeOpen } from 'react-icons/fa';

const ContactMethod = ({ href, text, methodName, children }) => (
  <li className="m-4">
    <a href={href}>
      <div className="mx-auto flex w-full items-center justify-center border border-gray-400 bg-sage p-2 shadow-lg md:w-1/2">
        {children}
        {text}
      </div>
      <p className="sr-only">{methodName}</p>
    </a>
  </li>
);

const Contact = () => (
  <div className="grid items-center">
    <h3 className="mx-auto w-1/2 self-end border-b-4 border-sage pb-2 text-center text-3xl">
      Find Me Here!
    </h3>
    <ul className="text-center text-lg">
      <ContactMethod
        text="mike@mikebowman.dev"
        href="mailto:mike@mikebowman.dev"
        methodName="Email Address"
      >
        <FaEnvelopeOpen className="mr-2 inline-block" />
      </ContactMethod>
      <ContactMethod
        text="bowmanmike"
        href="https://github.com/bowmanmike"
        methodName="Github Profile"
      >
        <FaGithub className="mr-2 inline-block" />
      </ContactMethod>
      <ContactMethod
        href="https://www.linkedin.com/in/bowmanmike1/"
        text="Mike Bowman"
        methodName="LinkedIn Profile"
      >
        <FaLinkedin className="mr-2 inline-block" />
      </ContactMethod>
    </ul>
  </div>
);

export default Contact;
