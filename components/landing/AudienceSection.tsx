import SectionHeader from "@/components/landing/SectionHeader";

const cards = [
  {
    title: "Freelancers",
    text: "Deliver more videos without spending hours in After Effects."
  },
  {
    title: "Agencies",
    text: "Increase production throughput without adding headcount."
  },
  {
    title: "Consultants",
    text: "Turn reports, proposals and investment decks into videos."
  },
  {
    title: "Individuals & Companies",
    text: "Make your ideas more engaging and easier to understand with animated explainers."
  }
];

export default function AudienceSection() {
  return (
    <section className="py-28 px-6" id="audience">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          eyebrow="Who It's For"
          title="Built For People Who Already Buy Or Sell Explainer Videos"
          description="Freelancers, consultants and agencies who need to deliver professional explainer content faster without building every animation from scratch."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map(card => (
            <div
              key={card.title}
              className="border border-black p-8 bg-white"
            >
              <h3 className="font-black text-2xl mb-4">
                {card.title}
              </h3>

              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}