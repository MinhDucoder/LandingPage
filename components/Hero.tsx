
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#fff9f9]">
      {/* Abstract Background Art */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-rose-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-rose-200/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 px-6 pt-20 pb-10 text-center space-y-8 max-w-xl mx-auto">
        <div className="space-y-4">
          <p className="text-[10px] font-black tracking-[0.4em] text-rose-500 uppercase animate-in fade-in slide-in-from-bottom-2 duration-700">
            Healthmate Global Beauty
          </p>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] italic font-serif">
            The <span className="text-rose-500">Ultimate</span> <br/> Glow.
          </h1>
          <p className="text-lg font-serif italic text-gray-500 pt-2 animate-in fade-in duration-1000">
            Luxury Beauty White Made Affordable.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-rose-400/20 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
          <div className="relative bg-white p-2 rounded-[3.5rem] shadow-2xl border border-white">
            <img 
              src="/assets/logo.jpg" 
              alt="Healthmate GLOW" 
              className="w-full h-auto rounded-[3rem] object-cover"
            />
          </div>
          
          {/* Floating Accents */}
          <div className="absolute -top-10 -left-6 bg-white p-4 rounded-3xl shadow-xl border border-rose-50 flex items-center gap-3 animate-float">
             <span className="text-2xl">🍓</span>
             <div className="text-left">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Natural</p>
                <p className="text-[11px] font-bold text-gray-900">Strawberry</p>
             </div>
          </div>
          
          <div className="absolute -bottom-6 -right-4 bg-rose-500 text-white px-6 py-4 rounded-3xl shadow-2xl border-4 border-white transform rotate-3 active:rotate-0 transition-transform">
             <p className="text-[10px] font-black uppercase tracking-widest leading-none">Best Seller</p>
             <p className="text-2xl font-black">60 Tabs</p>
          </div>
        </div>

        <div className="space-y-6 pt-10">
          <p className="text-sm text-gray-600 font-medium leading-relaxed italic max-w-sm mx-auto">
            "Your journey to a better version of yourself begins with a single, delicious chewable tablet."
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="#order" className="bg-gray-900 text-white py-5 rounded-2xl font-black text-sm tracking-[0.2em] uppercase shadow-2xl hover:bg-rose-600 transition-colors">
              Reveal My Radiance
            </a>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">FDA PH REGISTERED: FR-4000013932279</p>
          </div>
        </div>
      </div>
    </section>
  );
};
