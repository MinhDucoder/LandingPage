
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { OrderForm } from './components/OrderForm';
import { ChatBot } from './components/ChatBot';
import { TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pb-24">
        <Hero />

        {/* Section: The Discovery */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif italic text-gray-900 leading-tight">
                Beauty that <span className="text-rose-500">works</span> <br/> from the inside out.
              </h2>
              <div className="w-12 h-1 bg-rose-500"></div>
            </div>
            
            <div className="space-y-8 text-gray-600 leading-loose">
              <p className="text-lg font-medium">
                Healthmate GLOW isn't just a supplement; it's a sophisticated daily ritual designed for the modern individual who refuses to compromise on quality or convenience.
              </p>
              <p className="text-sm opacity-80">
                Specializing in a line of products for those who want to live a healthier and more active lifestyle, our Beauty White 4-in-1 formula represents the peak of nutritional science. We’ve combined pure, premium glutathione with essential beauty vitamins to ensure your glow isn't just on the surface—it’s cellular.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <p className="text-3xl font-black text-rose-500">100%</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pure Glutathione</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black text-gray-900">4in1</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Formula</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: The Sensory Experience */}
        <section className="relative py-24 bg-rose-50/30 overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <span className="text-[20rem] font-black tracking-tighter">GLOW</span>
          </div>
          
          <div className="px-6 space-y-16 max-w-xl mx-auto relative z-10">
            <div className="text-center space-y-4">
              <p className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em]">The Experience</p>
              <h2 className="text-5xl font-black text-gray-900 tracking-tighter italic font-serif leading-none">"Freshness Every Day."</h2>
            </div>

            <div className="space-y-12">
              <div className="group space-y-4">
                <h3 className="text-xl font-serif italic text-gray-800 border-b border-rose-100 pb-2">The Strawberry Fix</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Say goodbye to fishy-smelling collagen and large, hard-to-swallow pills. Our signature Strawberry Chewables melt in your mouth, providing a delightful burst of flavor that you'll actually look forward to every morning.
                </p>
              </div>

              <div className="group space-y-4">
                <h3 className="text-xl font-serif italic text-gray-800 border-b border-rose-100 pb-2">Slimming & Brightening</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Infused with hydrolyzed marine collagen and reduced L-Glutathione, our formula is supercharged with L-Carnitine. It’s the perfect fix for those looking to maintain their figure while illuminating their skin.
                </p>
              </div>

              <div className="group space-y-4">
                <h3 className="text-xl font-serif italic text-gray-800 border-b border-rose-100 pb-2">Safe for All</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We believe beauty should be accessible. Healthmate GLOW is non-acidic, keto-friendly, and safe for diabetics. No compromises, just results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Ingredient Science (Typography Focus) */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-xl mx-auto space-y-16">
            <div className="space-y-2">
               <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter leading-none">The Science of <br/> the Glow.</h2>
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">4-in-1 Premium Formulation</p>
            </div>

            <div className="space-y-12">
              {[
                { name: 'Nano Collagen', dose: 'Marine Sourced', desc: 'Sourced from the deep sea and broken down into nano-sized particles for superior cellular absorption.' },
                { name: 'Pure Biotin', dose: 'High Potency', desc: 'The beauty vitamin that works tirelessly to strengthen your hair follicles and nail beds from within.' },
                { name: 'Vitamin B Complex', dose: 'Metabolic Boost', desc: 'A full spectrum of B-vitamins to keep your energy levels high and your skin cells regenerating at peak speed.' },
                { name: 'Omega-3 Fatty Acid', dose: 'Essential Radiance', desc: 'Critical for maintaining the lipid barrier of your skin, resulting in that hydrated, dewy look.' }
              ].map((ing, i) => (
                <div key={i} className="flex gap-6 group">
                   <span className="text-4xl font-serif italic text-rose-200 group-hover:text-rose-500 transition-colors">0{i+1}</span>
                   <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight">{ing.name}</h4>
                        <span className="text-[8px] font-black bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase tracking-widest">{ing.dose}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        {ing.desc}
                      </p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Shopee-Style Feedback (Refined) */}
        <section id="testimonials" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="max-w-xl mx-auto px-6 space-y-8">
            <div className="flex items-end justify-between border-b border-gray-200 pb-4">
               <div>
                  <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">Community Feedback</h2>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-sm font-black text-gray-900">4.9</span>
                    <div className="flex text-yellow-500 text-[10px]">★★★★★</div>
                    <span className="text-[10px] text-gray-400 font-bold border-l pl-2">15k+ Sold</span>
                  </div>
               </div>
               <a href="#order" className="text-[10px] font-black text-rose-500 uppercase">SEE ALL </a>
            </div>

            <div className="space-y-4">
              {TESTIMONIALS.map(t => (
                <div key={t.id} className="bg-white rounded-xl p-4 shadow-sm space-y-3 border border-gray-100 animate-in fade-in duration-500">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 font-black text-xs uppercase">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                           <p className="text-xs font-black text-gray-900">{t.name}</p>
                           <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 1.414z"/></svg>
                        </div>
                        <div className="flex text-yellow-400 text-[8px]">★★★★★</div>
                      </div>
                    </div>
                    <p className="text-[9px] text-gray-400 font-medium">{t.date}</p>
                  </div>
                  
                  <div className="text-[9px] text-gray-400 flex gap-2">
                    <span>Bundle: <span className="text-gray-700 font-bold">{t.variation}</span></span>
                  </div>

                  <p className="text-xs text-gray-700 leading-relaxed font-medium">
                    {t.comment}
                  </p>

                  <div className="grid grid-cols-4 gap-2">
                    {t.images.map((img, idx) => (
                      <div key={idx} className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-50">
                         <img src={img} className="w-full h-full object-cover" alt="user photo" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-2 flex items-center justify-between border-t border-gray-50 mt-2">
                     <div className="flex items-center gap-1 text-[9px] text-green-600 font-bold uppercase tracking-widest">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 1.414z" clipRule="evenodd"/></svg>
                        Verified Purchase
                     </div>
                     <div className="flex items-center gap-1 text-[9px] text-gray-300 font-bold">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
                        Helpful (8)
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />
        <OrderForm />
      </main>

      <footer className="bg-gray-900 text-white pt-24 pb-32 text-center px-6 border-t border-rose-500/20">
        <div className="max-w-xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif italic tracking-tighter text-white">Healthmate <span className="text-rose-500">GLOW</span></h2>
            <div className="flex justify-center flex-wrap gap-4 pt-4">
               {['ISO CERTIFIED', 'GMP QUALITY', 'HALAL APPROVED', 'FDA PH'].map((cert, i) => (
                 <span key={i} className="text-[8px] font-black text-gray-500 border border-gray-800 px-3 py-1 rounded-full tracking-[0.2em]">{cert}</span>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-gray-600 font-bold uppercase tracking-widest text-[9px]">
             <a href="#" className="hover:text-rose-500">Privacy</a>
             <a href="#" className="hover:text-rose-500">Terms</a>
             <a href="#" className="hover:text-rose-500">Verify</a>
          </div>

          <div className="space-y-6 pt-12 border-t border-gray-800">
            <p className="text-[10px] text-gray-500 leading-relaxed max-w-xs mx-auto">
              Luxury Beauty White Made Affordable. Beauty White 4in1 is a legitimate brand under You Glow Babe, manufactured by an ISO Certified institution.
            </p>
            <div className="text-[9px] text-gray-600 font-black uppercase tracking-[0.4em]">
              © 2024 HEALTHMATE GLOBAL <br/>
              FR-4000013932279
            </div>
          </div>
        </div>
      </footer>

      <ChatBot />

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 glass border-t border-rose-100 p-4 z-[90] pb-safe flex items-center gap-4">
        <div className="flex-1">
          <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Flash Sale</p>
          <div className="flex items-center gap-1">
             <p className="text-sm font-black text-rose-600">Save $23</p>
             <span className="w-1 h-1 bg-rose-200 rounded-full"></span>
             <p className="text-[10px] font-bold text-gray-400 line-through">$78</p>
          </div>
        </div>
        <a href="#order" className="flex-[2] bg-rose-500 text-white text-center py-4 rounded-2xl font-black text-xs shadow-2xl active:scale-95 transition-all uppercase tracking-[0.2em]">
          Claim My Bundle
        </a>
      </div>
    </div>
  );
};

export default App;
