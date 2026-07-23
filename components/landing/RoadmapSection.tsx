import SectionHeader from "@/components/landing/SectionHeader";

export default function RoadmapSection() {
  return (
    <section className="py-28 px-6" id="roadmap">

      <div className="max-w-5xl mx-auto">

        <SectionHeader
          eyebrow="What's Next"
          title="The Journey Ahead"
          description="Every month the platform expands with new motion components, visual systems and specialized widgets requested by the community."
        />

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="font-black text-2xl mb-6">
              Recently Added
            </h3>

            <ul className="space-y-2">
              <li>✓ Global Themes</li>
              <li>✓ Dark Neon</li>
              <li>✓ Light Filled</li>
              <li>✓ Light Stroke</li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-6">
              Coming Next
            </h3>

            <ul className="space-y-2">
              <li>→ More Typography Systems</li>
              <li>→ SVG Character Systems</li>
              <li>→ Mechanical Rigs</li>
              <li>→ Marketplace</li>
              <li>→ Collaboration</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}