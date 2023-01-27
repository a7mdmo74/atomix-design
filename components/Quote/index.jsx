/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Quote = () => {
  return (
    <section id="services" className="bg-[#111111] py-8">
      <div className="relative pt-16 pb-16 text-center max-w-6xl mx-auto px-4 md:px-0 border-b-[1px] border-slate-400 md:border-0 flex flex-col items-center space-y-6 justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          Let's build together.
          <br /> Start a new project today.
        </h2>
        <p className="mt-3 max-w-2xl text-xl text-slate-200 sm:mt-4">
          With Atomix, you get a partner with UX/UI design expertise for
          building useful and delightful products.
        </p>
        <a
          className="group inline-flex items-center justify-center rounded-lg py-3 px-6 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-rose-700 text-white hover:text-slate-100 hover:bg-rose-600 active:rose active:text-blue-100 focus-visible:outline-blue-600"
          target="_blank"
          href="/"
          rel="noreferrer"
        >
          Get a free quote
        </a>
      </div>
    </section>
  );
};

export default Quote;
