import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance text readability without blocking the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh] md:min-h-screen">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-rose-700 text-sm font-medium mb-4">
            Chennai Opportunity · Limited Openings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
            Bring Kotak Closer to Your City —
            <span className="block text-rose-600">Lead Your Own Branch.</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 max-w-2xl">
            An opportunity to build and manage your own Kotak Life office. Backed by the brand. Driven by you.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#lead-form"
              className="inline-flex justify-center items-center rounded-lg bg-rose-600 text-white px-6 py-3 text-sm md:text-base font-medium shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Join the Kotak Partner Program
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex justify-center items-center rounded-lg bg-white text-rose-700 ring-1 ring-rose-200 px-6 py-3 text-sm md:text-base font-medium shadow hover:bg-rose-50"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
