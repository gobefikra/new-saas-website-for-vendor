import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-display font-semibold tracking-[-0.02em] text-navy mb-2">{title}</h1>
        <p className="text-gray-400 text-sm mb-6">Last updated: {lastUpdated}</p>
        {children}
      </article>
      <Footer />
    </main>
  );
}
