/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { SiAltiumdesigner } from 'react-icons/si';
import { IoIosRocket } from 'react-icons/io';
import { MdOutlineCropRotate } from 'react-icons/md';
const Hero = () => {
  return (
    <section className="relative pt-8 pb-16 text-center lg:pt-24 xl:pt-32 max-w-6xl mx-auto px-4 md:px-0 border-b-[1px] border-slate-400 md:border-0">
      <div className="border-b-[1px] border-slate-400 md:border-0 pb-6">
        <h1 className="mx-auto max-w-4xl px-4 text-lg font-medium tracking-tight text-purple-500 sm:text-xl">
          RAPID UX/UI DESIGN SERVICES
        </h1>
        <p class="mx-auto max-w-4xl px-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
          <span class="text-slate-200">Let us make your product</span>{' '}
          <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            delightful.
          </span>
        </p>
        <p className="mx-auto mt-6 max-w-md px-4 text-xl font-medium tracking-tight text-slate-200">
          You develop, and we make UX/UI designs.
          <br />
          Together we can build delightful products.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link
            className="group inline-flex ring-1 items-center justify-center rounded-lg py-3 px-6 text-base font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 ring-rose-700 bg-rose-700 text-white hover:ring-rose-600 hover:text-slate-100 hover:bg-rose-600 active:rose active:text-blue-100 focus-visible:outline-blue-600 md:px-8"
            target="_blank"
            href="/"
            rel="noreferrer"
          >
            <span>
              Get started <span class="hidden lg:inline">today</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 px-4 lg:px-0">
        <div className="flex flex-col items-center space-y-4 bg-[#111111] px-4 py-8 rounded-lg shadow-2xl">
          <span className="text-5xl text-yellow-500">
            <SiAltiumdesigner />
          </span>
          <h2 className="text-2xl md:text-xl">Risk-Free</h2>
          <p>
            Pay after we deliver. We won't charge unless you're happy with the
            result.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 bg-[#111111] px-4 py-8 rounded-lg shadow-2xl">
          <span className="text-5xl text-yellow-500">
            <IoIosRocket />
          </span>
          <h2 className="text-2xl md:text-xl">Fast</h2>
          <p>
            Online collaboration and weekly sprints to deliver the first result
            asap.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 bg-[#111111] px-4 py-8 rounded-lg shadow-2xl">
          <span className="text-5xl text-yellow-500">
            <MdOutlineCropRotate />
          </span>
          <h2 className="text-2xl md:text-xl">Flexible</h2>
          <p>
            Wherever you are on your product journey, whenever you need UX/UI
            design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
