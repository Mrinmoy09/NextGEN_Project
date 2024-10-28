import React from 'react';

const KeyInnovations = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-green-800">Key Innovations and Technologies</h2>
        <div className="mt-6 space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold">Precision Agriculture</h3>
            <p>Leveraging GPS-guided equipment, drones, and data analytics to monitor soil and crop health.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Vertical Farming</h3>
            <p>Stacking crops vertically to maximize space and increase yield per acre.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Hydroponics & Aquaponics</h3>
            <p>Soil-free systems to reduce water use and improve nutrient management.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">IoT Monitoring Systems</h3>
            <p>Sensors for soil moisture, temperature, and crop health monitoring, along with automated irrigation systems.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Renewable Energy Integration</h3>
            <p>Solar panels and wind turbines to power the facility sustainably.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInnovations;
