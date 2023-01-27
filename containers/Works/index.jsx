import React from 'react';

const Works = () => {
  return (
    <section id="works" className="bg-white">
      <div className="bg-[#F5F5F5] pb-32">
        <div className="relative pt-8 pb-16 text-center lg:pt-24 xl:pt-32 max-w-6xl mx-auto px-4 md:px-0">
          <div className="border-b-[1px] border-slate-400 md:border-0 pb-6">
            <h1 className="mx-auto max-w-4xl px-4 text-3xl font-extrabold tracking-tight sm:text-7xl mb-6">
              How it works.
            </h1>
            <p className="mx-auto max-w-4xl px-4 text-lg font-medium tracking-tight sm:text-xl">
              We focus on working lean and iteratively, delivering quick
              results.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          <div className="flex flex-col rounded-2xl bg-white shadow-xl">
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
              <div className="absolute -top-6 left-3 w-12 h-12 rounded-full bg-[#DFBA00] text-white text-xl flex items-center justify-center">
                1
              </div>
              <h3 className="text-xl font-medium text-gray-900">Define</h3>
              <p className="mt-4 text-base text-gray-500">
                We start by getting to know you. We need to understand your
                situation and your product. We formulate the goal we want to
                achieve together, and the problem we want to solve. We set the
                scope, plan, budget, and communication.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-white shadow-xl">
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
              <div className="absolute -top-6 left-3 w-12 h-12 rounded-full bg-[#DFBA00] text-white text-xl flex items-center justify-center">
                2
              </div>
              <h3 className="text-xl font-medium text-gray-900">Make</h3>
              <p className="mt-4 text-base text-gray-500">
                The first sprint starts. We work on the delivery. Depending on
                what we agree on, this could be a first mockup, prototype, UX
                audit, user survey, or user journey map. We aim to have the
                first tangible result as quickly as possible.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-white shadow-xl">
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
              <div className="absolute -top-6 left-3 w-12 h-12 rounded-full bg-[#DFBA00] text-white text-xl flex items-center justify-center">
                3
              </div>
              <h3 className="text-xl font-medium text-gray-900">Check</h3>
              <p className="mt-4 text-base text-gray-500">
                We finish the first sprint and together review the result. We
                verify that we are on the right track. This is the time we
                decide if we want to continue working together. If yes, we do
                any necessary adjustments and get to work on the next sprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
