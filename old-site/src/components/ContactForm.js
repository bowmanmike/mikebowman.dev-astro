/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import startCase from 'lodash.startcase';
import { Transition } from '@headlessui/react';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    from: '',
    content: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    const newValues = Object.keys(values).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});

    setValues(newValues);
  };

  function updateValues(e) {
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }

    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    setSubmitting(true);

    if (process.env.NODE_ENV === 'production') {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(() => {
          setSubmitting(false);
          setSubmitted(true);
          resetForm();
        })
        .catch(err => {
          setSubmitting(false);
          console.log({ err });
        });
    } else {
      setSubmitting(false);
      setSubmitted(true);
      console.log({ values });
      resetForm();
    }
  }

  return (
    <>
      <h2 className="mb-4 max-w-max border-b-4 border-sage pr-8 text-2xl">
        Get In Touch!
      </h2>
      <Transition
        show={submitted}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="text-center">
          <p className="my-2 text-lg">
            Thanks, you'll be hearing back shortly!
          </p>
          <button
            type="button"
            className="my-4 border border-gray-400 py-2 px-6 shadow-md"
            onClick={() => setSubmitted(false)}
          >
            Show me the form again
          </button>
        </div>
      </Transition>
      <Transition
        show={!submitted}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <form
          name="contact"
          method="POST"
          netlify-honeypot="cool-stuff"
          data-netlify="true"
          onSubmit={submitForm}
          className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-2"
        >
          <input type="hidden" name="contact" value="contact" />
          <input type="hidden" name="cool-stuff" />
          {['name', 'email'].map(tag => (
            <label
              htmlFor={tag}
              className="block w-full"
              key={`form-input-${tag}`}
            >
              <span className="border-b-2 border-sage pr-2">
                {startCase(tag)}
              </span>
              <input
                type="text"
                id={tag}
                name={tag}
                value={values[tag]}
                onChange={updateValues}
                required
                className="my-2 block w-full shadow-md outline-none"
                placeholder={`Your ${startCase(tag)}`}
              />
            </label>
          ))}
          <label htmlFor="content">
            <span className="border-b-2 border-sage pr-2">How can I help?</span>
            <textarea
              id="content"
              name="content"
              value={values.content}
              onChange={updateValues}
              className="my-2 w-full shadow-md"
              placeholder="Let me know what I can do for you!"
            />
          </label>
          <label>
            <span className="border-b-2 border-sage pr-2">
              How did you hear about me?
            </span>
            <select
              name="from"
              onChange={updateValues}
              className="my-2 w-full shadow-md"
            >
              {['word-of-mouth', 'social-media', 'google', 'none'].map(
                source => (
                  <option value={source} key={`form-select-${source}`}>
                    {source === 'none'
                      ? 'Other (Let me know above!)'
                      : startCase(source)}
                  </option>
                )
              )}
            </select>
          </label>
          <button
            type="submit"
            className={`mx-auto mt-2 block w-full border border-gray-400 bg-sage-400 py-2 shadow-md md:col-span-2 md:w-1/4 ${
              submitting ? 'pointer-events-none bg-gray-300' : ''
            }`}
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </Transition>
    </>
  );
};

export default ContactForm;
