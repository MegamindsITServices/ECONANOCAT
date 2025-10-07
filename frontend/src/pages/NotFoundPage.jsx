import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col bg-white">
      <section className="flex min-h-[calc(100vh-150px)] items-center justify-center px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-7xl font-bold text-gray-300 md:text-9xl">404</h1>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Page Not Found
          </h2>

          <p className="mt-6 text-lg leading-7 text-gray-600">
            Oops! The page you are looking for does not exist. It might have been moved, renamed, or you may have typed the address incorrectly.
          </p>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-block h-[60px] w-full max-w-xs rounded-xl bg-gradient-to-r from-[#14C77C] to-[#A3EFD0] px-8 py-4 text-lg font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14C77C]"
            >
              Go back home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;