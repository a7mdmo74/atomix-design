import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <a className="flex items-center space-x-2" href="/">
            <Image src="/logo.png" alt="Atomix Design" width={40} height={40} />
            <span className="text-xl">Atomix</span>
          </a>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <a
                className="inline-block rounded-lg py-1 px-2 text-base text-slate-900 hover:bg-slate-200 hover:text-slate-900"
                href="#services"
              >
                Services
              </a>
              <a
                className="inline-block rounded-lg py-1 px-2 text-base text-slate-900 hover:bg-slate-200 hover:text-slate-900"
                href="#price"
              >
                Pricing
              </a>
              <a
                className="inline-block rounded-lg py-1 px-2 text-base text-slate-900 hover:bg-slate-200 hover:text-slate-900"
                href="#works"
              >
                How it works
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex text-sm gap-x-4">
            <a className="px-2" target="_blank" href="/terms">
              Terms
            </a>
            <a className="px-2" target="_blank" href="/privacy">
              Privacy
            </a>
            <a className="flex items-center space-x-2" href="/">
              <Image
                src="/logo.png"
                alt="Atomix Design"
                width={20}
                height={20}
              />
              <span>Atomix</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright{' '}
            <a
              className="text-gray-400 underline"
              target="_blank"
              href="www.github.com/a7mdmo74"
            >
              @a7mdmo74
            </a>{' '}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
