import SectionHeader from "@/components/landing/SectionHeader";

export default function HowItWorksSection() {
  return (
    <section className="py-28 px-6">

      <div className="max-w-5xl mx-auto text-center">
        
        <SectionHeader
            eyebrow="Workflow"
            title="From Script To Video In Minutes"
            description="Upload a script and voiceover. The engine analyzes the narrative, selects motion components and assembles a complete explainer video automatically."
        />

        <div className="text-2xl font-bold flex flex-wrap justify-center gap-6">

          <span>SCRIPT</span>

          <span>↓</span>

          <span>VOICEOVER</span>

          <span>↓</span>

          <span>SCENE ANALYSIS</span>

          <span>↓</span>

          <span>WIDGETS</span>

          <span>↓</span>

          <span>VIDEO</span>

        </div>

      </div>

    </section>
  );
}