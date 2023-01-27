/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <div className="bg-[#F5F5F7] py-8">
      <div className="relative pt-8 pb-16 text-center lg:pt-24 xl:pt-32 max-w-6xl mx-auto px-4 md:px-0">
        <h1 className="mx-auto max-w-4xl px-4 text-3xl font-extrabold tracking-tight sm:text-7xl mb-6">
          Recent projects.
        </h1>
        <p class="mx-auto max-w-4xl px-4 text-lg font-medium tracking-tight sm:text-xl">
          We're working with tech companies, startups, and individual founders.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-4 xl:px-0">
          <div className="bg-white rounded-lg shadow-xl transition-all duration-500 hover:scale-110">
            <div className="relative w-full h-[200px]">
              <Image
                src="/project_01.webp"
                alt="project_01"
                fill
                className="rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6 rounded-lg">
              <p className="text-sm font-medium text-indigo-600">
                Prototype, Web App
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                SaaS application prototype.
              </h3>
              <p className="mt-3 text-base text-gray-500">
                Our job was to deliver a "clickable" prototype for three
                specific user journeys of a compliance reporting system. The
                client used our prototype for pitching to potential partners and
                investors.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl transition-all duration-500 hover:scale-110">
            <div className="relative w-full h-[200px]">
              <Image
                src="/project_02.webp"
                alt="project_02"
                fill
                className="rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6 rounded-lg">
              <p className="text-sm font-medium text-indigo-600">
                Prototype, Web App
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                SaaS application prototype.
              </h3>
              <p className="mt-3 text-base text-gray-500">
                Our job was to deliver a "clickable" prototype for three
                specific user journeys of a compliance reporting system. The
                client used our prototype for pitching to potential partners and
                investors.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl transition-all duration-500 hover:scale-110">
            <div className="relative w-full h-[200px]">
              <Image
                src="/project_03.webp"
                alt="project_03"
                fill
                className="rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6 rounded-lg">
              <p className="text-sm font-medium text-indigo-600">
                Design system, UI Kit, Web App
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                Design system, UI Kit, Web App
              </h3>
              <p className="mt-3 text-base text-gray-500">
                This project was a complex job and a lot of responsibility,
                especially because the client was a government agency. It was
                challenging and we are proud we delivered.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl transition-all duration-500 hover:scale-110">
            <div className="relative w-full h-[200px]">
              <Image
                src="/project_04.webp"
                alt="project_04"
                fill
                className="rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6 rounded-lg">
              <p className="text-sm font-medium text-indigo-600">
                Prototype, Mobile App
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                Art gallery app prototype.
              </h3>
              <p className="mt-3 text-base text-gray-500">
                The question was – can we make the booking of a tour in an art
                gallery delightful? The answer is yes, we can. This was a fun
                project, we love art and wish this app would become real.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl transition-all duration-500 hover:scale-110">
            <div className="relative w-full h-[200px]">
              <Image
                src="/project_05.webp"
                alt="project_05"
                fill
                className="rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6 rounded-lg">
              <p className="text-sm font-medium text-indigo-600">
                Prototype, Web app
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                Online bank website prototype.
              </h3>
              <p className="mt-3 text-base text-gray-500">
                The challenge in this project was to design a sign-up process
                for an online bank account simple and easy for "anyone" to
                complete. We tried different approaches and think we nailed it.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl transition-all duration-500 hover:scale-110">
            <div className="relative w-full h-[200px]">
              <Image
                src="/project_06.webp"
                alt="project_06"
                fill
                className="rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6 rounded-lg">
              <p className="text-sm font-medium text-indigo-600">
                Prototype, Mobile App, Landing page
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                Career coaching app prototype.
              </h3>
              <p className="mt-3 text-base text-gray-500">
                Our goal was to design an accessible mobile app and a supporting
                responsive website that would enable users easily find a career
                coach. We made finding a couch a breeze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
