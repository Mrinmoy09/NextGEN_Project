import React from 'react';

const Goals = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-green-800">Project Goals & Objectives</h2>
        <div className="mt-6 text-gray-700">
          <h3 className="font-semibold">Short-Term Objectives (Year 1):</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Establish infrastructure and implement farming techniques.</li>
            <li>Conduct small-scale crop testing with smart technologies.</li>
            <li>Innovate farming techniques with precision agriculture.</li>
          </ul>
          <h3 className="mt-4 font-semibold">Long-Term Objectives (Years 2-5):</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Scale up operations and increase efficiency through data-driven methods.</li>
            <li>Pursue certifications for sustainable practices.</li>
            <li>Develop partnerships with distribution channels.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Goals;
