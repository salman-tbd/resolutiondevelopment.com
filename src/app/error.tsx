'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/utils/constants';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for debugging
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-200 mb-4">⚠️</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Something went wrong
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We encountered an unexpected error. Please try again or return to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg"
          >
            Try Again
          </button>
          <Link
            href={ROUTES.home}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

