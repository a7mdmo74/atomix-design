/* eslint-disable react/no-unescaped-entities */
import Quote from '@/components/Quote';
import React from 'react';

const Accordion = () => {
  return (
    <section id="services" className="bg-white pt-8">
      <div className="relative pb-16 text-center max-w-6xl mx-auto px-4 md:px-0">
        <div className="pb-6">
          <h1 className="mx-auto max-w-4xl px-4 text-3xl font-extrabold tracking-tight sm:text-5xl mb-6">
            Frequently asked questions.
          </h1>
          <p className="mx-auto max-w-4xl px-4 text-lg font-medium tracking-tight sm:text-xl">
            If you have anything else you want to ask,{' '}
            <span className="text-blue-500">reach out to us.</span>
          </p>
        </div>
        <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
          <div className="flex flex-col items-start justify-center text-start">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Who are Atomix services for?
            </h3>
            <p className="mt-2 text-base text-gray-600">
              We can help tech companies with existing products, or startups and
              individual founders who just started to build their products. You
              can use our expertise wherever you are on your product journey.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center text-start">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              How big is the Atomix team?
            </h3>
            <p className="mt-2 text-base text-gray-600">
              Atomix is at the moment Lukáš Soukup, a product designer and
              project leader with 20+ years of experience working on projects
              for corporates, SMEs, and startups. Formally, Atomix services are
              under the umbrella of LukyLab, a registered LLC in the Czech
              Republic.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center text-start">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              How do you differ from other UX/UI designers?
            </h3>
            <p className="mt-2 text-base text-gray-600">
              We help not only with product design but also with business cases
              and project implementation. Having a beautifully designed product
              is nice, but making the product useful and in a way that it can be
              developed and become sustainable is what we consider part of our
              job too.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center text-start">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Can I hire you for ongoing product design work for a flat rate?
            </h3>
            <p className="mt-2 text-base text-gray-600">
              Absolutely! Our goal is to work with clients in the long term.
              Please get in touch so we can discuss how we could help.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center text-start">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              How much does a typical project cost?
            </h3>
            <p className="mt-2 text-base text-gray-600">
              This is impossible to say without knowing the goal and the scope
              of a project. However, we always want to come up with a solution.
              Let us know what problem you need to solve and don't worry about
              the budget.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center text-start">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              How does the risk-free guarantee work?
            </h3>
            <p className="mt-2 text-base text-gray-600">
              Once there is the first result of our work, together we decide
              whether to continue our collaboration or not. If for some reason
              you are not happy with our work and you are not going to use it,
              we won't charge you for it.
            </p>
          </div>
        </div>
      </div>
      <Quote />
    </section>
  );
};

export default Accordion;
