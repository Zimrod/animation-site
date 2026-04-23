import { useState } from 'react';
import { Preset } from '@/data/presets';

export default function PresetVideoCard({ preset }: { preset: Preset }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoSources = (preset as any).videoUrls || [preset.videoUrl];

  const handleVideoEnd = () => {
    if (videoSources.length > 1) {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group hover:border-zinc-500 transition-colors">
      <div className="aspect-video bg-zinc-900 flex items-center justify-center text-zinc-700 font-mono text-xs relative">
        <video
          key={videoSources[currentVideoIndex]} // key forces re-render when source changes
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Visual Overlay Label */}
        <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 text-[10px] uppercase tracking-tighter">
          Stream_0{currentVideoIndex + 1}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-zinc-100 font-bold uppercase text-sm mb-2">{preset.name}</h3>
          <span className="text-xl">{preset.icon}</span>
        </div>
        <p className="text-zinc-300 text-xs font-mono leading-tight">{preset.description}</p>
      </div>
    </div>
  );
}