function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] bg-slate-50 p-10 shadow-soft">
        <h1 className="text-4xl font-extrabold text-slate-950">About Ellvin Energy</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Ellvin Energy delivers renewable solar energy solutions for homes, businesses, and industries across India. We are committed to predictable financing, long-term reliability, and simplified usage.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Our Mission',
              description: 'Empower communities with sustainable solar systems and transparent solar financing.',
            },
            {
              title: 'Our Vision',
              description: 'Be the trusted solar partner for households and enterprises throughout India.',
            },
            {
              title: 'Our Promise',
              description: 'Best-in-class installation, monitoring, and support for every project.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-4 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
