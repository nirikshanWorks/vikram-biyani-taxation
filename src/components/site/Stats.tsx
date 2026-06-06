const stats = [
  { value: "50,000+", label: "Students Trained" },
  { value: "100K+", label: "Hours Delivered" },
  { value: "500+", label: "Video Lectures" },
  { value: "95%", label: "Satisfaction Rate" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-navy">{s.value}</div>
            <div className="mt-1 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
