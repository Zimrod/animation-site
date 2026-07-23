// components/landing/HeroSection.tsx
import Link from "next/link";
import HeroVideo from "@/components/landing/HeroVideo";

const STUDIO_URL = process.env.NEXT_PUBLIC_STUDIO_URL || "https://procedural-max-studio.onrender.com/";

export default function HeroSection() {
  return (
    <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto"> 
      {/* 1. Changed max-w-6xl to max-w-7xl on the outer layout wrapper to give it breathing room */}
      {/* 2. Added 'w-full' and ensured grid items match perfectly */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        
        {/* Left Column (Text Content) */}
        <div className="w-full">
          <div className="inline-flex border border-black px-3 py-1 text-xs font-mono mb-8">
            FOUNDING BETA • $49 for a VIDEO of up to 5 MINUTES
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight text-black">
            Generate
            <br />
            Explainer Videos
            <br />
            From Scripts
          </h1>

          <p className="max-w-xl mt-8 text-xl text-zinc-700">
            Built for freelancers, consultants and agencies.
            Upload a script and voiceover. Generate animated
            explainers using typography systems and data
            visualization widgets.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 font-bold inline-block"
            >
              Launch Studio
            </Link>

            <a
              href="#widgets"
              className="border border-black px-8 py-4 font-bold inline-block"
            >
              View Widgets
            </a>
          </div>
        </div>

        {/* Right Column (Video) */}
        <HeroVideo />
        
      </div>
    </section>
  );
}