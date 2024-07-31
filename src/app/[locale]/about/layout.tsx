export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex relative flex-col items-start justify-center gap-5 py-8 md:py-10">
      {children}
    </section>
  );
}
