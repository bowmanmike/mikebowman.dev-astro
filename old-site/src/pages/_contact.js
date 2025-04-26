import React from 'react';

import Seo from '../components/Seo';

const ContactPage = () => (
  <div>
    <Seo title="Contact" />
    <div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <h2 className="text-2xl">Get in touch</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
          <div>
            <h3 className="text-lg font-medium leading-6">Email</h3>
            <dl className="mt-2 text-base text-gray-500">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href="mailto:hello@mikebowman.dev">hello@mikebowman.dev</a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="text-lg font-medium leading-6">Github</h3>
            <dl className="mt-2 text-base text-gray-500">
              <div>
                <dt className="sr-only">Github</dt>
                <dd>
                  <a href="https://github.com/bowmanmike">@bowmanmike</a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="text-lg font-medium leading-6">Instagram</h3>
            <dl className="mt-2 text-base text-gray-500">
              <div>
                <dt className="sr-only">Instagram</dt>
                <dd>
                  <a href="https://www.instagram.com/mikebowman.dev/">
                    @mikebowman.dev
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="text-lg font-medium leading-6">LinkedIn</h3>
            <dl className="mt-2 text-base text-gray-500">
              <div>
                <dt className="sr-only">LinkedIn</dt>
                <dd>
                  <a href="https://www.linkedin.com/in/bowmanmike1/">
                    Mike Bowman
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="text-lg font-medium leading-6">Twitter</h3>
            <dl className="mt-2 text-base text-gray-500">
              <div>
                <dt className="sr-only">Twitter</dt>
                <dd>
                  <a href="https://twitter.com/mikebowman_dev">
                    @mikebowman_dev
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
