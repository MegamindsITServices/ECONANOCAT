import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SimpleNotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#E6F6F3] flex items-center justify-center px-4">
      <Helmet>
        <title>404 | Page Not Found - Econanocat</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-[#14C77C] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#14C77C] to-[#A3EFD0] text-white font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SimpleNotFoundPage;