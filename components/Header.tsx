
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-[100] glass border-b border-rose-50 py-3">
      <div className="px-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center text-white font-black italic text-lg shadow-lg shadow-rose-100">G</div>
          <span className="text-lg font-black tracking-tighter text-rose-600 uppercase">GLOW</span>
        </div>
        
        <a href="#order" className="bg-rose-500 text-white px-5 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg shadow-rose-100 active:scale-95 transition-all">
          Buy Now
        </a>
      </div>
    </header>
  );
};
