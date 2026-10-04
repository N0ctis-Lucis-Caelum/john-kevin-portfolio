import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-bg border-t border-dark-panel-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold tracking-widest text-white mb-2 uppercase">
          John Kevin Calibuso
        </h2>
        <p className="text-electric-blue text-sm font-medium tracking-wide mb-8">
          BSIT Student &middot; Frontend Developer &middot; PC &amp; Hardware Enthusiast
        </p>
        
        <div className="h-px w-24 bg-dark-panel-border mb-8"></div>
        
        <p className="text-gray-500 text-sm">
          &copy; 2026 John Kevin Calibuso. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
