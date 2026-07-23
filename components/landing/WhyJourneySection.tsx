// src/components/landing/WhyJourneySection.tsx
import Image from "next/image";
import SectionHeader from "@/components/landing/SectionHeader";

const workflowSteps = [
  {
    title: "Paste Script",
    description: "Start with your existing script.",
    iconPath: "/differentiation/script.svg", // Replace with your actual file names
  },
  {
    title: "Upload Voiceover",
    description: "Synchronize visuals to narration timing.",
    iconPath: "/differentiation/voiceover.svg",
  },
  {
    title: "Generate Draft",
    description: "Typography and chart systems are assigned automatically.",
    iconPath: "/differentiation/draft.svg",
  },
  {
    title: "Render",
    description: "Export a production-ready video in minutes.",
    iconPath: "/differentiation/render.svg",
  },
];

export default function WhyJourneySection() {
  return (
    <section className="py-28 px-6 border-t border-black/10" id="why-journey">
      <div className="max-w-5xl mx-auto">

        <SectionHeader
          eyebrow="Differentiation"
          title="Explainer videos shouldn't require a motion design team."
          description={
            <>
              <p style={{ marginBottom: "16px" }}>
                Most business explainers are slow and expensive to produce. A simple script can require days of work across:
              </p>
              <ul style={{ paddingLeft: "20px", marginBottom: "16px", listStyleType: "disc" }}>
                <li>Writing and script timing edits</li>
                <li>Storyboarding static concepts</li>
                <li>Manual character and text animation keyframing</li>
                <li>Endless revision feedback cycles</li>
                <li>Heavy, time-consuming local rendering bottlenecks</li>
              </ul>
              <p style={{ marginTop: "16px" }}>
                <strong>Journey18Miles</strong> bypasses this friction by converting scripts and voiceovers into animated explainer video drafts instantly, using a growing library of typography systems, charts, and reusable motion widgets.
              </p>
            </>
          }
        />

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={step.iconPath}
                alt={step.title}
                width={300}
                height={300}
                className="w-full h-auto"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 border-2 border-black bg-white p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-black mb-4">
                Traditional Workflow
              </h3>

              <ul className="space-y-3 text-zinc-700">
                <li>✕ Storyboarding</li>
                <li>✕ After Effects setup</li>
                <li>✕ Motion design revisions</li>
                <li>✕ Asset sourcing</li>
                <li>✕ Long turnaround times</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">
                Journey18Miles Workflow
              </h3>

              <ul className="space-y-3 text-zinc-700">
                <li>✓ Script-first generation</li>
                <li>✓ Voiceover synchronization</li>
                <li>✓ Reusable widget systems</li>
                <li>✓ Rapid iteration</li>
                <li>✓ Minutes instead of days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}