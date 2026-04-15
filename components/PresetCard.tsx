// components/PresetCard.tsx
import { Preset } from '../data/presets';

export default function PresetCard({ preset }: { preset: Preset }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-3">{preset.icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{preset.name}</h3>
      <p className="text-gray-600 mt-2">{preset.description}</p>
    </div>
  );
}