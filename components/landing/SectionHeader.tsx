// components/landing/SectionHeader.tsx

import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px flex-1 bg-zinc-800" />

        <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 whitespace-nowrap">
          {eyebrow}
        </span>

        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
        {title}
      </h2>

      {description && (
        <div className="max-w-3xl text-zinc-400 text-lg leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
}