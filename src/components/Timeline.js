import React from 'react';

const Timeline = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-semibold text-green-800">Project Timeline & Milestones</h2>
        <div className="mt-6">
          <ol className="relative border-l border-green-400 pl-6 md:pl-10">
            <li className="mb-6 ml-6">
              <div className="absolute -left-3.5 w-7 h-7 bg-green-800 rounded-full"></div>
              <h3 className="text-lg font-semibold text-green-800">Phase 1: Planning & Research</h3>
              <p className="text-gray-700">Market analysis, feasibility study, and resource planning.</p>
            </li>
            <li className="mb-6 ml-6">
              <div className="absolute -left-3.5 w-7 h-7 bg-green-800 rounded-full"></div>
              <h3 className="text-lg font-semibold text-green-800">Phase 2: Site Selection & Setup</h3>
              <p className="text-gray-700">Site acquisition, infrastructure installation.</p>
            </li>
            {/* Add more phases similarly */}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
