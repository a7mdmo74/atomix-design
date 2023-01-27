/* eslint-disable react/no-unescaped-entities */
import { IoMdCheckmarkCircle } from 'react-icons/io';
const Price = () => {
  return (
    <section id="price" className="bg-[#F5F5F7] py-8">
      <div className="relative pt-8 pb-16 text-center lg:pt-24 xl:pt-32 max-w-6xl mx-auto px-4 md:px-0 border-b-[1px] border-slate-400 md:border-0">
        <div className="border-b-[1px] border-slate-400 md:border-0 pb-6">
          <h1 className="mx-auto max-w-4xl px-4 text-3xl font-extrabold tracking-tight sm:text-7xl mb-6">
            Pricing.
          </h1>
          <p class="mx-auto max-w-4xl px-4 text-lg font-medium tracking-tight sm:text-xl">
            We aim for long-term and fair relationships.
          </p>
          <div className="max-w-7xl mx-auto rounded-lg shadow-lg mt-16">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-4 flex flex-col items-start justify-start flex-1 bg-white px-6 py-8 lg:p-12 rounded-tl-lg rounded-bl-lg">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Project-based pricing.
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  Each client is unique and needs an individual approach. We
                  first need to understand your situation and the goal you want
                  to achieve. After that, we can prepare for you a quote that
                  will include our proposal on how to approach the project with
                  a plan, deliverables, and price.
                </p>
                <div className="flex items-center w-full my-10">
                  <h4 className="flex-shrink-0 bg-white pr-4 text-lg font-semibold text-indigo-600">
                    What's included
                  </h4>
                  <div className="flex-1 border-t-2 border-gray-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
                  <div className="flex items-center space-x-4">
                    <IoMdCheckmarkCircle className="text-2xl text-green-400" />
                    <p className="ml-3 text-base text-gray-800">
                      Plan aligned with your goal.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <IoMdCheckmarkCircle className="text-2xl text-green-400" />
                    <p className="ml-3 text-base text-gray-800">
                      Dedicated UX/UI Designer.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <IoMdCheckmarkCircle className="text-2xl text-green-400" />
                    <p className="ml-3 text-base text-gray-800">
                      Source files & documentation.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <IoMdCheckmarkCircle className="text-2xl text-green-400" />
                    <p className="ml-3 text-base text-gray-800">
                      Slack & Figma for collaboration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-6 justify-center bg-[#FAFAFA] rounded-tr-lg rounded-br-lg">
                <p className="mt-6 text-lg text-black font-semibold">
                  Projects start from
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-4xl font-bold text-black">$900</span>
                  <span className="text-base text-gray-600">USD</span>
                </div>
                <a
                  className="group inline-flex items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-rose-700 text-white hover:text-slate-100 hover:bg-rose-600 active:rose active:text-blue-100 focus-visible:outline-blue-600"
                  target="_blank"
                  href="/"
                  rel="noreferrer"
                >
                  Get a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
