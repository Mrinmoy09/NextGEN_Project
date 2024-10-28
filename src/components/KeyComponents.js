import React from 'react';

const KeyComponents = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-green-800">Key Components of the Project</h2>
        <div className="mt-6 space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold">Soil Conservation</h3>
            <p>Utilizing hydroponics and crop rotation to enhance soil health sustainably.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Water Management</h3>
            <p>Automated irrigation and recycling systems ensure efficient water use.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Biodiversity Preservation</h3>
            <p>Growing a diverse range of crops to support different ecosystems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyComponents;
