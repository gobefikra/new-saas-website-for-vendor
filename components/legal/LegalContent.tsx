export function LegalIntro({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-subtext text-base leading-relaxed mb-10">{children}</div>
  );
}

export function LegalSection({
  number,
  title,
  children,
  showDivider = true,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
  showDivider?: boolean;
}) {
  return (
    <section
      className={
        showDivider ? "border-t border-border-default mt-10 pt-10" : "mt-0"
      }
    >
      <h2 className="text-xl font-bold text-navy mb-3">
        {number}. {title}
      </h2>
      {children}
    </section>
  );
}

export function LegalSubheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">
      {children}
    </h3>
  );
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-subtext text-base leading-relaxed mb-4">{children}</p>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-2 text-subtext text-base ml-2 mb-4">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalEmailLink() {
  return (
    <a
      href="mailto:support@befikra.com"
      className="text-brand-green-dark hover:underline font-medium"
    >
      support@befikra.com
    </a>
  );
}
