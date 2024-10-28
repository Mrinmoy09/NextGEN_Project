import React from 'react';

const ExpectedOutcomes = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-green-800">Expected Outcomes</h2>
        <div className="mt-6 space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold">Short-Term Outcomes (Year 1)</h3>
            <p>Establishment of a technologically advanced farm with successful small-scale production cycles.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Long-Term Outcomes (Years 2-5)</h3>
            <p>Increased yield and expanded distribution network with enhanced profitability.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedOutcomes;
