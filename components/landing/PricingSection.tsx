// components/landing/PricingSection.tsx
import SectionHeader from "@/components/landing/SectionHeader";

const PAYNOW_INTEGRATION_ID = "25729"; // Your Integration ID from Paynow

/**
 * Generates a Paynow Advanced Payment Link
 */
function createPaynowLink(amount: number, packageName: string, locked = true): string {
  // 1. Build key-value arguments
  const params = new URLSearchParams({
    id: PAYNOW_INTEGRATION_ID,
    amount: amount.toFixed(2),
    f1: packageName, // Optional custom field passed to Paynow template
    l: locked ? "1" : "0",
  });

  // 2. Base64 encode the query string
  const base64Encoded = typeof window !== "undefined"
    ? btoa(params.toString())
    : Buffer.from(params.toString()).toString("base64");

  // 3. URL encode the result
  const urlEncoded = encodeURIComponent(base64Encoded);

  return `https://www.paynow.co.zw/payment/billpaymentlink?q=${urlEncoded}`;
}

const packages = [
  {
    name: "Single",
    price: 49,
    description: "Perfect for one-off projects",
    videos: 1,
    savings: 0,
    perVideo: 49,
  },
  {
    name: "3‑Pack",
    price: 129,
    description: "Great for small batches",
    videos: 3,
    savings: 18,
    perVideo: 43,
  },
  {
    name: "5‑Pack",
    price: 199,
    description: "Most popular – best value",
    videos: 5,
    savings: 46,
    perVideo: 39.8,
    popular: true,
  },
  {
    name: "10‑Pack",
    price: 349,
    description: "For heavy production needs",
    videos: 10,
    savings: 141,
    perVideo: 34.9,
  },
];

const customWidgetTiers = [
  {
    name: "Brand Kit",
    price: 499,
    description: "Custom widget pack with your logo, fonts, and colours",
    includes: [
      "Logo reveal widget (fade, pop, slide)",
      "2 brand colour palettes",
      "Custom font integration",
      "Unlimited renders of these widgets",
      "Delivery in 7 days",
    ],
  },
  {
    name: "Widget Suite",
    price: 1499,
    description: "A full suite of branded widgets for your business",
    includes: [
      "Brand Kit (all features)",
      "5 custom chart types (bar, line, donut, etc.)",
      "2 process flow widgets (branded nodes)",
      "Animated callouts & lower thirds",
      "Unlimited renders of all widgets",
      "Delivery in 14 days",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full white‑label platform with custom widget development",
    includes: [
      "All Widget Suite features",
      "Exclusive, non‑reusable widgets",
      "Dedicated developer support",
      "1‑year maintenance & updates",
      "Custom timeline & integrations",
    ],
    isCustom: true,
  },
];

export default function PricingSection() {
  return (
    <section className="py-32 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Pricing"
          title="Early Access Pricing"
          description="Lock in founding-member pricing and gain access to every new widget released during the beta phase."
        />

        {/* ── Shared features ── */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 mt-6 mb-12">
          <span>✓ All typography systems</span>
          <span>✓ Data visualizations</span>
          <span>✓ Commercial use</span>
          <span>✓ Early access features</span>
          <span>✓ Unlimited revisions</span>
          <span className="text-gray-400">(up to 5 min each)</span>
        </div>

        {/* ── Standard pricing cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="border-4 border-black bg-white p-8 flex flex-col text-center"
            >
              <div className="h-6 mb-4">
                {pkg.popular && (
                  <span className="text-xs font-bold uppercase tracking-widest bg-black text-white py-1 px-3">
                    Most Popular
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold">{pkg.name}</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">{pkg.description}</p>

              <div className="mt-auto">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-black">${pkg.price}</span>
                  <span className="text-sm text-gray-500 mb-1">/ {pkg.videos} videos</span>
                </div>

                {pkg.savings > 0 && (
                  <p className="text-sm text-green-600 font-medium mt-1">
                    ${pkg.perVideo.toFixed(1)}/video · Save ${pkg.savings}
                  </p>
                )}

                <a 
                  href={createPaynowLink(pkg.price, `${pkg.name} Video Package`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-6 bg-black text-white text-center px-6 py-3 font-medium hover:bg-gray-800 transition"
                >
                  Buy {pkg.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Custom Widgets Section ── */}
        <div className="border-t border-zinc-200 pt-20">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Custom Solutions
            </div>
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Branded Widgets for Your Business
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Want your logo, colours, and fonts to appear in every render?
              We'll build custom widgets that match your brand identity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {customWidgetTiers.map((tier) => (
              <div
                key={tier.name}
                className={`border-4 p-8 flex flex-col text-center ${
                  tier.popular ? 'border-black bg-black text-white' : 'border-black bg-white'
                }`}
              >
                <div className="h-6 mb-4">
                  {tier.popular && (
                    <span className={`text-xs font-bold uppercase tracking-widest py-1 px-3 ${
                      tier.popular ? 'bg-white text-black' : 'bg-black text-white'
                    }`}>
                      Best for Teams
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className={`text-sm mt-1 mb-4 ${tier.popular ? 'text-zinc-400' : 'text-gray-500'}`}>
                  {tier.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-end justify-center gap-1">
                    <span className={`text-5xl font-black ${tier.isCustom ? 'text-4xl' : ''}`}>
                      {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                    </span>
                    {typeof tier.price === 'number' && (
                      <span className={`text-sm mb-1 ${tier.popular ? 'text-zinc-400' : 'text-gray-500'}`}>
                        one‑time
                      </span>
                    )}
                  </div>

                  <ul className={`text-sm space-y-2 mt-4 text-left ${tier.popular ? 'text-zinc-300' : 'text-gray-600'}`}>
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={
                      typeof tier.price === "number"
                        ? createPaynowLink(tier.price, `${tier.name} Custom Tier`)
                        : "#contact"
                    }
                    target={typeof tier.price === "number" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`block w-full mt-6 text-center px-6 py-3 font-medium transition ${
                      tier.popular
                        ? 'bg-white text-black hover:bg-zinc-200'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {typeof tier.price === 'number' ? 'Purchase' : 'Contact Us'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-zinc-400 text-center mt-8">
            Custom widgets are built once and yours forever. Updates and maintenance included for 1 year.
          </p>
        </div>
      </div>
    </section>
  );
}