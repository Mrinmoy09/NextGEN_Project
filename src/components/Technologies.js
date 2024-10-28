import React from 'react';

const Technologies = () => {
  return (
    <section className="py-12 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-green-800">Key Innovations and Technologies</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          <div className="p-4 border border-green-300 rounded-lg">
            <h3 className="font-semibold">Precision Agriculture</h3>
            <p>GPS-guided equipment, drones, and data analytics for monitoring.</p>
          </div>
          <div className="p-4 border border-green-300 rounded-lg">
            <h3 className="font-semibold">Vertical Farming</h3>
            <p>Stacking crops vertically to maximize space and yield.</p>
          </div>
          <div className="p-4 border border-green-300 rounded-lg">
            <h3 className="font-semibold">Hydroponics & Aquaponics</h3>
            <p>Soil-free systems for water-efficient and nutrient-rich cultivation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
