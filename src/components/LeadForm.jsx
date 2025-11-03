import React, { useState } from 'react';

const LeadForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!/^\+?[0-9]{7,15}$/.test(form.phone.replace(/\s|-/g, ''))) return 'Enter a valid contact number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Enter a valid email address.';
    if (!form.city.trim()) return 'Please enter your city or area.';
    return '';
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError('');

    // This demo shows instant confirmation. Backend submission can be added later.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="lead-form" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Thank you! Our team will reach out soon.
          </h3>
          <p className="mt-3 text-gray-600">
            If you can’t wait to jump in, call us directly at{' '}
            <a href="tel:+919876543210" className="text-rose-600 font-medium underline">+91 98765 43210</a>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">Ready to Lead with Kotak?</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Share your details and we’ll connect within 48 hours to begin your onboarding.
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:gap-6">
          {error && (
            <div className="rounded-lg bg-rose-50 text-rose-700 px-4 py-3 text-sm border border-rose-100">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="e.g., +91 98765 43210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City / Area</label>
              <input
                id="city"
                name="city"
                value={form.city}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="e.g., Anna Nagar, Chennai"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="submit"
              className="inline-flex justify-center items-center rounded-lg bg-rose-600 text-white px-6 py-3 text-sm md:text-base font-medium shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              I’m Ready to Lead with Kotak
            </button>
            <a
              href="tel:+919876543210"
              className="inline-flex justify-center items-center rounded-lg bg-white text-rose-700 ring-1 ring-rose-200 px-6 py-3 text-sm md:text-base font-medium shadow hover:bg-rose-50"
            >
              Or Call Us Now
            </a>
          </div>

        </form>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="rounded-xl bg-rose-50 p-4 text-rose-700 text-sm">
            You’ll be leading a branch under the Kotak brand with full guidance and structure.
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-rose-700 text-sm">
            From training to marketing and daily operations, Kotak’s support team helps every step.
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-rose-700 text-sm">
            Once you register, our team connects within 48 hours to begin your onboarding.
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
