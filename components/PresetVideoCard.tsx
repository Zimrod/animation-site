import { Preset } from '@/data/presets';

export default function PresetVideoCard({ preset }: { preset: Preset }) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group hover:border-zinc-500 transition-colors">
      <div className="aspect-video bg-zinc-900 flex items-center justify-center text-zinc-700 font-mono text-xs">
        {/* Visual Noise or Video Placeholder */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <span>[ PREVIEW_STREAM ]</span>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold uppercase tracking-tight">{preset.name}</h3>
          <span className="text-xl">{preset.icon}</span>
        </div>
        <p className="text-zinc-500 text-sm font-mono leading-tight">{preset.description}</p>
      </div>
    </div>
  );
}