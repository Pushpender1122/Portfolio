import React from 'react';
import image from '../assets/images/404.png';

const Page_404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <img src={image} alt="404 Not Found" className="mb-8 w-64 h-auto" />
      <p className="text-2xl font-semibold mb-4">Oops, looks like the page is lost.</p>
      <p className="text-lg text-gray-500">
        This is not a fault, just an accident that was not intentional.
      </p>
    </div>
  );
};

export default Page_404;
