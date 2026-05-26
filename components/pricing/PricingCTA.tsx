import Link from "next/link";

export default function PricingCTA() {
  return (
    <section
      className="py-24 px-6 text-center rounded-3xl mx-6 mb-16 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #0D2B1F 0%, #0F172A 70%)",
      }}
    >
      <h3 className="text-white text-4xl md:text-5xl font-extrabold">
        Find your altitude.
      </h3>
      <p className="text-gray-300 text-base mt-4 max-w-md mx-auto">
        Start free, upgrade when you&apos;re ready. The math will sell itself.
      </p>
      <div className="flex flex-wrap gap-3 justify-center mt-8">
        <Link
          href="/contact"
          className="bg-emerald-500 text-white rounded-full px-8 py-3.5 font-semibold hover:bg-emerald-600 transition-colors"
        >
          Start free forever →
        </Link>
        <Link
          href="/contact"
          className="border border-gray-500 text-white rounded-full px-8 py-3.5 font-semibold hover:border-white transition-colors"
        >
          Book a 30-min demo
        </Link>
      </div>
    </section>
  );
}
