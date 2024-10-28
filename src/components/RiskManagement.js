import React from 'react';

const RiskManagement = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-green-800">Risk Management</h2>
        <div className="mt-6 space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold">Technology Risks</h3>
            <p>Mitigation: Regular maintenance and partnerships with tech providers.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Weather and Climate Risks</h3>
            <p>Mitigation: Use controlled indoor environments and climate-resilient crop varieties.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Market Demand Risks</h3>
            <p>Mitigation: Adapt crops to market trends and focus on high-demand varieties.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskManagement;
