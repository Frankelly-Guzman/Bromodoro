import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FaFaceFrown } from "react-icons/fa6";

const NotFound = () => {
  const nav = useNavigate();

  const handleGoHome = () => {
    nav('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <FaFaceFrown className='w-1/2 h-36 max-w-md mb-8 text-red-700' />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Button onClick={handleGoHome} className="px-6 py-3">
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;