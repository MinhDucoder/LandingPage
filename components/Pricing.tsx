
import React from 'react';
import { PACKAGES } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white scroll-mt-20">
      <div className="px-5">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Exclusive Offers</h2>
          <p className="text-gray-400 text-sm font-medium">Free Worldwide Shipping for Today's Orders</p>
        </div>

        <div className="space-y-6">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-white rounded-[2rem] p-6 border-2 transition-all shadow-sm ${
                pkg.isPopular ? 'border-rose-500 bg-rose-50/20' : 'border-gray-100'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3 right-6 bg-rose-500 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                  BEST SELLER
                </div>
              )}

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-1">{pkg.name}</h3>
                  <p className="text-[10px] text-gray-400 font-medium">{pkg.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-300 line-through text-xs font-bold">${pkg.originalPrice}</div>
                  <div className="text-2xl font-black text-rose-600">${pkg.price}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white border border-rose-100 text-rose-500 text-[9px] font-black px-2 py-1 rounded-lg">5000MG MARINE COLLAGEN</span>
                {pkg.gift && <span className="bg-rose-500 text-white text-[9px] font-black px-2 py-1 rounded-lg uppercase">FREE GIFT: {pkg.gift}</span>}
              </div>

              <a 
                href="#order" 
                className={`block w-full text-center py-3.5 rounded-xl font-black text-sm tracking-widest uppercase transition-all active:scale-95 ${
                  pkg.isPopular ? 'bg-rose-500 text-white shadow-lg shadow-rose-100' : 'bg-gray-900 text-white'
                }`}
              >
                SELECT PACKAGE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
