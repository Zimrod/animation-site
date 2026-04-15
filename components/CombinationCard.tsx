import { Combination } from '@/data/combinations';

export default function CombinationCard({ combo }: { combo: Combination }) {
  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden group hover:border-zinc-700 transition-all">
      <div className="aspect-video bg-zinc-900 flex items-center justify-center text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
        [ STREAM_PREVIEW_00{combo.id.length} ]
      </div>
      <div className="p-6 border-t border-zinc-900">
        <h3 className="text-zinc-100 font-bold uppercase text-sm mb-2">{combo.name}</h3>
        <p className="text-zinc-300 text-xs font-mono leading-relaxed">{combo.description}</p>
      </div>
    </div>
  );
}