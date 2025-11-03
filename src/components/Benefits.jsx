import React from 'react';
import { Shield, GraduationCap, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    title: 'Lead with Trust',
    desc: 'Build your business under one of India\'s most trusted financial brands.',
    icon: Shield,
  },
  {
    title: 'Grow with Guidance',
    desc: 'Our team supports your setup, operations, and training.',
    icon: GraduationCap,
  },
  {
    title: 'Earn & Expand',
    desc: 'You run the branch, you lead the success.',
    icon: TrendingUp,
  },
  {
    title: 'Backed by Experts',
    desc: 'From marketing to compliance, we\'re with you at every step.',
    icon: Users,
  },
];

const Benefits = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Why Join <span className="text-rose-600">Kotak Life</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A long-term partnership with solid growth potential. Strong foundations yield strong returns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-rose-100 bg-rose-50/50 p-6 hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
