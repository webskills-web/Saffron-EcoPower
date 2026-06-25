function Careers() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] bg-slate-50 p-10 shadow-soft">
        <h1 className="text-4xl font-extrabold text-slate-950">Careers</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Join the Saffron EcoPower team to help drive India’s transition to sustainable solar energy.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Why Work with Us',
              description: 'Collaborate in a mission-driven team focused on renewable energy impact.',
            },
            {
              title: 'Culture & Benefits',
              description: 'Flexible work, continuous learning, and support for career growth.',
            },
            {
              title: 'Open Roles',
              description: 'Solar consultants, project managers, technical specialists, and more.',
            },
            {
              title: 'Apply Today',
              description: 'Send your resume and tell us why you’re passionate about clean energy.',
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

export default Careers;
