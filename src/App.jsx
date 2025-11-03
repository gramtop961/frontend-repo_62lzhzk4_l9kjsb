import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Journey from './components/Journey';
import LeadForm from './components/LeadForm';

function App() {
  return (
    <div className="font-inter text-gray-900">
      {/* Hero with Spline background */}
      <Hero />

      {/* Benefits */}
      <Benefits />

      {/* Journey timeline */}
      <Journey />

      {/* Lead capture form */}
      <LeadForm />

      {/* Footer */}
      <footer className="bg-rose-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">Kotak Partner Opportunity</p>
              <p className="text-white/80 text-sm">Your city deserves a leader like you. Start your Kotak journey today.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <a href="tel:+919876543210" className="underline hover:text-white">+91 98765 43210</a>
              <a href="mailto:partner@kotaklife.com" className="underline hover:text-white">partner@kotaklife.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
