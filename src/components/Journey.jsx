import React from 'react';

const steps = [
  {
    title: 'Setup Your Branch',
    desc: "Get started with Kotak's dedicated support team.",
  },
  {
    title: 'Build Your Team & Grow',
    desc: 'Attract, train, and lead professionals.',
  },
  {
    title: 'Achieve Financial Freedom',
    desc: 'Watch your business scale year after year.',
  },
];

const Journey = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">Your Journey</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Build, lead, and scale your success.
          </p>
        </div>

        <ol className="relative border-s border-rose-200 max-w-3xl mx-auto">
          {steps.map((s, idx) => (
            <li key={s.title} className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white text-xs">
                {idx + 1}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>

        <p className="text-center text-sm text-gray-600 mt-8">
          Most partners see steady growth after their initial setup phase.
        </p>
      </div>
    </section>
  );
};

export default Journey;
