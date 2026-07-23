import SectionHeader from "@/components/landing/SectionHeader";

const sections = {
  Typography: [
    "Floating Cards",
    "Kinetic Typography",
    "Split Reveal",
    "Blueprint Text",
    "Terminal Text",
    "Typewriter",
    "Word Cascade",
    "Metric Counters",
    "Quote Systems",
    "Stencil Typography"
  ],

  Charts: [
    "Line Charts",
    "Area Charts",
    "Donut Charts",
    "Waterfalls",
    "Timelines",
    "Calendars",
    "Capacity Gauges"
  ],

  Experimental: [
    "Mechanical SVG Rigs",
    "Parametric Motion",
    "Marketplace"
  ]
};

export default function WidgetLibrarySection() {
  return (
    <section
      id="widgets"
      className="py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        <SectionHeader
          eyebrow="Widget Library"
          title="Motion Components Built For Explainers"
          description="Typography systems, charts, timelines and visual storytelling widgets."
        />

        <div className="grid md:grid-cols-3 gap-8">

          {Object.entries(sections).map(([title, items]) => (
            <div
              key={title}
              className="border border-black p-8 bg-white"
            >
              <h3 className="font-black text-2xl mb-6">
                {title}
              </h3>

              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}