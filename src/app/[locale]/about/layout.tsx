export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex relative flex-col items-start justify-center gap-5">
      {children}
    </section>
  );
}
