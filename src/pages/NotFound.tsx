import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Page Not Found | Yaalex Executive Lodge";
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F6F2EC] text-[#1C1814] px-4 pt-32 pb-20">
      <div className="max-w-md w-full text-center">
        <p className="font-sans font-medium uppercase text-xs tracking-[0.2em] text-[#8A6340] mb-2">
          ERROR 404
        </p>
        <h1 className="font-serif fluid-h1 font-normal text-[#1C1814] mb-4">
          Page Not Found
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#6B6158] leading-relaxed mb-8">
          The page or resource you are looking for does not exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/">
            <Button variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
              Return to Home
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#8A6340] text-[#8A6340] hover:bg-[#8A6340]/10 text-xs font-sans uppercase font-medium tracking-[0.14em] rounded-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
