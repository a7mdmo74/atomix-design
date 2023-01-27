'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
const Navbar = ({ isActive, handleNavbar }) => {
  return (
    <>
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-8 border-b-[1px] border-slate-400 md:border-0 px-4 md:px-0">
        <div className="flex items-center space-x-6">
          <div className="flex select-none items-center space-x-2">
            <Image src="/logo.png" alt="atomix" width={35} height={35} />
            <h1 className="text-xl font-semibold">Atomix</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#services"
              className="inline-block rounded-lg py-1 px-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-100"
            >
              Services
            </a>
            <a
              href="#price"
              className="inline-block rounded-lg py-1 px-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-100"
            >
              Pricing
            </a>
            <a
              href="#works"
              className="inline-block rounded-lg py-1 px-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-100"
            >
              How it works
            </a>
          </div>
        </div>
        <div className="flex text-slate-100 items-center gap-x-5 md:gap-x-8">
          <div className="hidden md:block">
            <a
              className="inline-block rounded-lg py-1 px-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-100"
              href="mailto:a7mdmo74@gmail.com"
            >
              Contact
            </a>
          </div>
          <Link
            className="group inline-flex items-center justify-center rounded-lg py-1 px-2 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-rose-700 text-white hover:text-slate-100 hover:bg-rose-600 active:rose active:text-blue-100 focus-visible:outline-blue-600"
            target="_blank"
            href="/"
            rel="noreferrer"
          >
            <span>
              Get started <span class="hidden lg:inline">today</span>
            </span>
          </Link>
          <div className="block md:hidden">
            <FaBars className="text-xl" onClick={handleNavbar} />
          </div>
        </div>
      </nav>
      <div
        className={
          isActive
            ? '-left-[100%] duration-500 transition-all'
            : 'fixed inset-0 z-10 flex md:hidden justify-center items-start bg-slate-300/50 duration-500 transition-all'
        }
        onClick={handleNavbar}
      >
        <div
          className={`bg-white w-3/4 md:hidden flex flex-col justify-center space-y-4 absolute top-20 duration-500 transition-all ${
            isActive ? '-left-[100%]' : 'left-1/2 -translate-x-1/2'
          } rounded-lg shadow-xl px-4 py-6`}
        >
          <a
            href="#services"
            className="inline-block rounded-lg py-2 px-3 text-sm text-slate-800 hover:bg-slate-900 hover:text-slate-100"
          >
            Services
          </a>
          <a
            href="#price"
            className="inline-block rounded-lg py-1 px-2 text-sm text-slate-800 hover:bg-slate-900 hover:text-slate-100"
          >
            Pricing
          </a>
          <a
            href="#works"
            className="inline-block rounded-lg py-1 px-2 text-sm text-slate-800 hover:bg-slate-900 hover:text-slate-100"
          >
            How it works
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
