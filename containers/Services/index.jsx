import { HiComputerDesktop } from 'react-icons/hi2';
import { AiOutlineMobile, AiOutlineAntDesign } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { MdDesignServices } from 'react-icons/md';
import { DiUikit } from 'react-icons/di';
const Services = () => {
  return (
    <section id="services" className="bg-[#111111] py-8">
      <div className="relative pt-8 pb-16 text-center lg:pt-24 xl:pt-32 max-w-6xl mx-auto px-4 md:px-0 border-b-[1px] border-slate-400 md:border-0 flex justify-center">
        <p className="max-w-prose text-2xl font-semibold tracking-tight text-gray-400 sm:text-lg lg:text-5xl lg:max-w-5xl lg:p-24">
          No need to hire a full-time UX/UI Designer.{' '}
          <span className="text-white">
            Atomix delivers product design services
          </span>{' '}
          just when you need them.
        </p>
      </div>
      {/* Prototyping.
       */}
      <div className="bg-black max-w-7xl mx-auto rounded-lg shadow-lg px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-10">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-200 lg:text-5xl lg:pr-24">
              Prototyping.
            </h2>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <p className="font-semibold text-xl mx-auto mt-8 text-gray-400 lg:mt-0">
              <span className="text-white">
                Get an interactive prototype for your product or a new feature.
              </span>
              Use it to validate your ideas with users, as a handover to
              developers, or for pitching to investors. From wireframes and
              mockups to high-fidelity interactive prototypes, we help you
              materialize your vision.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-start md:items-start justify-center space-y-4 px-4 py-8 rounded-lg shadow-2xl">
            <span className="text-5xl text-yellow-500">
              <HiComputerDesktop />
            </span>
            <h2 className="text-2xl md:text-xl text-white">Web Apps</h2>
            <p className="text-gray-400">
              Typically interactive prototypes of specific user journeys of SaaS
              applications.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-start md:items-start justify-center space-y-4 px-4 py-8 rounded-lg shadow-2xl">
            <span className="text-5xl text-yellow-500">
              <AiOutlineMobile />
            </span>
            <h2 className="text-2xl md:text-xl text-white">Mobile Apps</h2>
            <p className="text-gray-400">
              Concepts, mockups, and high-fidelity prototypes of iOS and Android
              apps.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-start md:items-start justify-center space-y-4 px-4 py-8 rounded-lg shadow-2xl">
            <span className="text-5xl text-yellow-500">
              <CgWebsite />
            </span>
            <h2 className="text-2xl md:text-xl text-white">Websites</h2>
            <p className="text-gray-400">
              Concepts, mockups, and prototypes of landing pages and company
              websites.
            </p>
          </div>
        </div>
      </div>
      {/* Research.
       */}
      <div className="bg-black max-w-7xl mx-auto rounded-lg shadow-lg px-12 py-20 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-10">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-200 lg:text-5xl lg:pr-24">
              Research.
            </h2>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <p className="font-semibold text-xl mx-auto mt-8 text-gray-400 lg:mt-0">
              <span className="text-white">
                Get a clear understanding of your users, their needs, goals, and
                frustrations.
              </span>
              Research is the foundation of UX/UI design. We can help you get
              answers and the necessary inputs to build your product with
              confidence.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:items-start justify-center space-y-4 px-4 py-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl md:text-xl text-yellow-500">UX Audits</h2>
            <p className="text-gray-400">
              Compare with industry standards including accessibility, best
              practices, and design principles. The UX Audit results in specific
              recommendations and action steps for improving your product.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:items-start justify-center space-y-4 px-4 py-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl md:text-xl text-yellow-500">
              Research Studies
            </h2>
            <p className="text-gray-400">
              Conduct the foundational research to validate the product
              proposition. Get the design research to obtain inputs for UX/UI
              design. Make the post-launch research to verify that the product
              met expectations.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:items-start justify-center space-y-4 px-4 py-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl md:text-xl text-yellow-500">
              Usability Tests
            </h2>
            <p className="text-gray-400">
              Verify the usability of a new feature or a product itself. The
              goal is to understand how well the product fulfills the job for a
              user and get insights to make the experience delightful.
            </p>
          </div>
        </div>
      </div>
      {/* Design Systems.
       */}
      <div className="bg-black max-w-7xl mx-auto rounded-lg shadow-lg px-12 py-20 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-10">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-200 lg:text-5xl lg:pr-24">
              Design Systems.
            </h2>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <p className="font-semibold text-xl mx-auto mt-8 text-gray-400 lg:mt-0">
              <span className="text-white">
                Streamline your product development with an integrated design
                library.
              </span>
              We can start with the Style Guide – defining the basics –
              typography, colors, layout, and spacing. We can continue with UI
              Kit with Figma components and deliver a complete Design System.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-start md:items-start justify-center space-y-4 px-4 py-8 rounded-lg shadow-2xl">
            <span className="text-5xl text-yellow-500">
              <MdDesignServices />
            </span>
            <h2 className="text-2xl md:text-xl text-white">Style Guide</h2>
            <p className="text-gray-400">
              Definition of the fundamental building blocks of the product UI -
              typography, colors, layout, spacing, iconography.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-start md:items-start justify-center space-y-4 px-4 py-8 rounded-lg shadow-2xl">
            <span className="text-5xl text-yellow-500">
              <DiUikit />
            </span>
            <h2 className="text-2xl md:text-xl text-white">UI Kit</h2>
            <p className="text-gray-400">
              Component library in Figma, which serves as a basis for fast and
              efficient prototyping and UI development.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-start md:items-start justify-center space-y-4 px-4 py-8 rounded-lg shadow-2xl">
            <span className="text-5xl text-yellow-500">
              <AiOutlineAntDesign />
            </span>
            <h2 className="text-2xl md:text-xl text-white">Design System</h2>
            <p className="text-gray-400">
              The complete base for design and development. Everything that
              makes a product unique is organized in a way that makes
              collaboration efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
