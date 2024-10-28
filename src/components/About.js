import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-green-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-green-800">Our Mission & Vision</h2>
        
        <h3 className="mt-8 text-2xl font-bold text-green-800 underline">
          Mission
        </h3>
        <p className="mt-4 text-lg text-gray-700">
          At NextGen Agriculture, we aim to revolutionize the agricultural landscape by seamlessly integrating cutting-edge smart technologies with sustainable farming practices. Our mission is to empower farmers with data-driven solutions that enhance productivity, reduce environmental impact, and ensure the longevity of our food systems. By prioritizing innovation, we seek to create a future where agriculture thrives in harmony with nature.
        </p>
        
        <h3 className="mt-8 text-2xl font-bold text-green-800 underline">
          Vision
        </h3>
        <p className="mt-4 text-lg text-gray-700">
          We envision NextGen AgroFarms as a leader in the realm of innovative and sustainable agriculture. Our vision is to harness smart farming techniques that not only yield high-quality crops but also prioritize environmental integrity and resilience. By setting new benchmarks in sustainability, we aspire to inspire a global movement towards responsible farming practices that benefit both farmers and the planet, ensuring food security for generations to come.
        </p>
      </div>
    </section>
  );
};

export default About;
