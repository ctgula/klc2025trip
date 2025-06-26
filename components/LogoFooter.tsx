'use client';

import Image from 'next/image';

const LogoFooter = () => {
  return (
    <footer className="py-6 px-4 bg-slate-100 dark:bg-slate-800 mt-8 border-t sticky bottom-0 z-10 hidden md:block">
      <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-4">
        Presented by Kingdom Life Community Church
      </p>
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-xl p-2 shadow-sm dark:bg-white">
          <Image src="/klc logo.jpeg" alt="KLCC logo" width={120} height={50} className="w-[40%] sm:w-[150px] object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default LogoFooter;
