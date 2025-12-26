
import React, { useState } from 'react';
import { PACKAGES } from '../constants';

const REGIONS = [
  "North America", "United Kingdom", "Southeast Asia", "Australia", "Europe", "Middle East", "Other"
];

export const OrderForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    detailAddress: '',
    packageId: 'best-seller'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: document.getElementById('order')?.offsetTop || 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <section id="order" className="py-20 bg-white scroll-mt-24">
        <div className="px-6 text-center space-y-6">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">ORDER PLACED!</h2>
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            Thank you <span className="text-rose-600 font-bold">{formData.name}</span>! Our Beauty Expert will contact you via <span className="text-rose-600 font-bold">{formData.phone}</span> within 15 minutes to confirm.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="text-rose-500 font-black text-[10px] uppercase tracking-widest border-b-2 border-rose-100 pb-1">Place another order</button>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-16 bg-rose-50/50 scroll-mt-24">
      <div className="px-5">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Shipping Details</h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Pay upon delivery • Safe & Fast</p>
        </div>

        <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl shadow-rose-100/50 border border-white">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
              <input required type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-0 ring-1 ring-gray-100 focus:ring-2 focus:ring-rose-500 text-sm font-medium outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
              <input required type="tel" placeholder="Include country code" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-0 ring-1 ring-gray-100 focus:ring-2 focus:ring-rose-500 text-sm font-medium outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Region / Country</label>
              <div className="relative">
                <select required className="w-full px-5 py-4 rounded-xl bg-gray-50 border-0 ring-1 ring-gray-100 focus:ring-2 focus:ring-rose-500 text-sm font-bold outline-none appearance-none" value={formData.region} onChange={(e) => setFormData({...formData, region: e.target.value})}>
                  <option value="" disabled>Select Region</option>
                  {REGIONS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Address</label>
              <input required type="text" placeholder="Street, City, Zip Code" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-0 ring-1 ring-gray-100 focus:ring-2 focus:ring-rose-500 text-sm font-medium outline-none" value={formData.detailAddress} onChange={(e) => setFormData({...formData, detailAddress: e.target.value})} />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Select Bundle</label>
              <select className="w-full px-5 py-4 rounded-xl bg-rose-50 border-0 ring-2 ring-rose-100 text-sm font-black text-rose-700 outline-none appearance-none" value={formData.packageId} onChange={(e) => setFormData({...formData, packageId: e.target.value})}>
                {PACKAGES.map(p => <option key={p.id} value={p.id}>{p.name.toUpperCase()} — ${p.price}</option>)}
              </select>
            </div>

            <button type="submit" className="w-full bg-rose-500 text-white py-5 rounded-2xl font-black text-base shadow-xl shadow-rose-200 uppercase tracking-widest active:scale-95 transition-all mt-4">
              CONFIRM ORDER
            </button>

            <div className="flex flex-col items-center gap-2 pt-4 border-t border-gray-50">
               <div className="flex gap-4 text-[9px] font-black text-gray-400 uppercase tracking-tighter">
                  <span className="flex items-center gap-1"><span className="text-green-500 text-xs">✔</span> FREE WORLDWIDE SHIPPING</span>
                  <span className="flex items-center gap-1"><span className="text-green-500 text-xs">✔</span> 100% GENUINE</span>
               </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
