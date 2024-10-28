import React from 'react';

const Entrepreneurs = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-green-800">Entrepreneurs</h2>
        <ul className="mt-4 text-lg text-gray-700 grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="flex flex-col items-center">
            <img 
              src={require('../asset/image/ovi.jpg')} // Use require for local images
              alt="Ovi Hasan"
              className="w-32 h-32 object-cover rounded-full" 
            />
            <span className="mt-2">Ovi Hasan</span>
          </li>
          <li className="flex flex-col items-center">
            <img 
              src={require('../asset/image/jahed.jpg')}
              alt="Jahed Ahmed"
              className="w-32 h-32 object-cover rounded-full"
            />
            <span className="mt-2">Jahed Ahmed</span>
          </li>
          <li className="flex flex-col items-center">
            <img 
              src={require('../asset/image/adnan.jpg')}
              alt="Asif Adnan"
              className="w-32 h-32 object-cover rounded-full"
            />
            <span className="mt-2">Asif Adnan</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Entrepreneurs;
