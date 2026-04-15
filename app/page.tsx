'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar'; // Import the new navbar
import PresetVideoCard from '@/components/PresetVideoCard';
import CombinationCard from '@/components/CombinationCard';
import { presets } from '@/data/presets';
import { combinations } from '@/data/combinations';
import ScrollToTop from '@/components/ScrollToTop';

const presetAllowance = {
  '30-60': 3,
  '61-90': 5,
  '91-120': 8,
  custom: 0,
};

const extraPresetCost = 49;

const basePrices = {
  '30-60': { single: 199, weekly: 599 },
  '61-90': { single: 299, weekly: 899 },
  '91-120': { single: 399, weekly: 1199 },
  custom: { single: 'Quote', weekly: 'Quote' },
};

export default function Home() {
  const [duration, setDuration] = useState<'30-60' | '61-90' | '91-120' | 'custom'>('30-60');
  const [selectedPresets, setSelectedPresets] = useState<string[]>([]);
  const [billingType, setBillingType] = useState<'single' | 'weekly'>('single');

  const togglePreset = (id: string) => {
    setSelectedPresets(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const allowance = presetAllowance[duration];
  const extraCount = Math.max(0, selectedPresets.length - allowance);
  const extraCost = extraCount * extraPresetCost;
  
  const basePrice = basePrices[duration][billingType];
  const totalPrice = typeof basePrice === 'number' ? basePrice + extraCost : basePrice;

  const selectedPresetNames = selectedPresets.map(id => presets.find(p => p.id === id)?.name).join(', ');
  const messageBody = `Hi! I'm interested in the ${billingType} plan for a ${duration}s video. I've picked: ${selectedPresetNames || 'no specific presets yet'}. Total: $${totalPrice}`;

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />
      <ScrollToTop />
      
      {/* 01. HERO SECTION */}
      <section className="pt-40 pb-24 px-6 border-b border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 border border-zinc-700 text-xs font-mono text-zinc-300 mb-6 uppercase tracking-widest">
            v2.0 // Animation Engine
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Professional 2D <br />
            <span className="text-zinc-500">Animations</span>
          </h1>
          <p className="text-lg text-zinc-300 max-w-xl mx-auto font-mono leading-relaxed">
            High-quality, frame-accurate character movement for builders. 
            No rigging headaches—just smooth motion that works.
          </p>
          <div className="mt-10 flex justify-center flex-wrap gap-4">
            <a href="#pricing" className="bg-white text-black px-8 py-4 font-bold uppercase text-xs hover:bg-zinc-200 transition">
              Configure Order
            </a>
            <a href="#presets" className="border border-zinc-700 px-8 py-4 font-bold uppercase text-xs hover:bg-zinc-900 transition">
              View Library
            </a>
          </div>
        </div>
      </section>

      {/* 02. PRESETS */}
      <section id="styles" className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm font-mono text-zinc-100 uppercase mb-12 tracking-widest">// Preset Styles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {presets.map(preset => (
              <PresetVideoCard key={preset.id} preset={preset} />
            ))}
          </div>
        </div>
      </section>

      {/* 03. COMBINATION CARDS */}
      <section id="combinations" className="py-24 px-6 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-zinc-100 uppercase mb-12 tracking-widest text-center">// Preset Combinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {combinations.map(combo => (
              <CombinationCard key={combo.id} combo={combo} />
            ))}
          </div>
        </div>
      </section>

      {/* 04. PRICING & CONFIG */}
      <section id="pricing" className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 text-white">System Configuration</h2>
                
                <div className="bg-zinc-900 border-l-4 border-white p-6 mb-10 font-mono text-sm">
                  <span className="text-zinc-300 block mb-2 font-bold uppercase tracking-widest text-xs">Capacity Rules:</span>
                  <ul className="space-y-1">
                    <li className={duration === '30-60' ? 'text-white' : 'text-zinc-500'}>30-60s: 3 Free Presets</li>
                    <li className={duration === '61-90' ? 'text-white' : 'text-zinc-600'}>61-90s: 5 Free Presets</li>
                    <li className={duration === '91-120' ? 'text-white' : 'text-zinc-600'}>91-120s: 8 Free Presets</li>
                    <li className="mt-2 text-zinc-400 italic font-sans text-xs">Extra presets: ${extraPresetCost}/unit</li>
                  </ul>
                </div>

                <h3 className="text-xs font-mono text-zinc-100 uppercase mb-4 tracking-widest">01. How long is the video?</h3>
                <div className="grid grid-cols-2 gap-2">
                  {(['30-60', '61-90', '91-120', 'custom'] as const).map(d => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`p-4 border text-left transition ${duration === d ? 'border-white bg-white text-black font-bold' : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600'}`}
                    >
                      {d === 'custom' ? 'Custom Quote' : `${d} Seconds`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono text-zinc-100 uppercase mb-4 tracking-widest">02. Pick your modules ({selectedPresets.length}/{allowance})</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {presets.map(preset => (
                    <button
                      key={preset.id}
                      onClick={() => togglePreset(preset.id)}
                      className={`p-3 border text-xs text-left transition ${selectedPresets.includes(preset.id) ? 'bg-zinc-100 text-black border-white' : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'}`}
                    >
                      {preset.icon} {preset.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 border border-zinc-800 bg-zinc-900 p-8 rounded-sm">
                <h3 className="text-[10px] font-mono text-zinc-100 uppercase mb-8 tracking-[0.2em]">Live Summary</h3>
                <div className="space-y-4 mb-8 font-mono text-sm">
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-400">Base Rate</span>
                    <span className="text-zinc-100 font-bold">${typeof basePrice === 'number' ? basePrice : '--'}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-400">Overage</span>
                    <span className="text-zinc-100">+${extraCost}</span>
                  </div>
                  <div className="flex justify-between pt-6">
                    <span className="font-black uppercase text-white">Total</span>
                    <span className="text-3xl font-black text-white">
                       {typeof totalPrice === 'number' ? `$${totalPrice}` : totalPrice}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                   <button onClick={() => setBillingType('single')} className={`py-3 text-[10px] font-bold uppercase border ${billingType === 'single' ? 'bg-white text-black' : 'border-zinc-800 text-zinc-500'}`}>Single Job</button>
                   <button onClick={() => setBillingType('weekly')} className={`py-3 text-[10px] font-bold uppercase border ${billingType === 'weekly' ? 'bg-white text-black' : 'border-zinc-800 text-zinc-500'}`}>Weekly Routine</button>
                </div>

                <a href={`#contact?message=${encodeURIComponent(messageBody)}`} className="block w-full bg-white text-black text-center py-5 font-black uppercase text-xs tracking-widest hover:invert transition-all">
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-zinc-900 bg-zinc-900/40">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">Ready to start?</h2>
            <p className="text-zinc-300">Drop us a line about your project. We usually reply within a few hours.</p>
          </div>
          <form className="space-y-4">
            <input type="email" placeholder="Your email" className="w-full bg-zinc-950 border border-zinc-800 p-4 font-mono text-sm text-white focus:border-white outline-none" />
            <textarea rows={5} placeholder="Tell me about your project style and goals..." className="w-full bg-zinc-950 border border-zinc-800 p-4 font-mono text-sm text-white focus:border-white outline-none"></textarea>
            <button className="w-full bg-white text-black py-4 font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-900 text-center font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Journey 18 Miles // Built for Scale
      </footer>
    </div>
  );
}