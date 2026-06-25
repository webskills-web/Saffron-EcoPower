function Products() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] bg-slate-50 p-10 shadow-soft">
        <h1 className="text-4xl font-extrabold text-slate-950">Products</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Explore our reliable solar panel packages, inverter setups, energy monitoring systems, and full-project solutions built for performance and durability.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[
            { title: 'Solar Panel Bundles', description: 'High-efficiency solar panels built for long life and strong output.' },
            { title: 'Inverter Systems', description: 'Smart inverter packages engineered for seamless power conversion and reliability.' },
            { title: 'Battery Storage', description: 'Integrated battery solutions for backup power and load shifting.' },
            { title: 'Monitoring Tools', description: 'Digital energy dashboards for performance monitoring and analytics.' },
          ].map((product) => (
            <div key={product.title} className="rounded-[28px] border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-semibold text-slate-950">{product.title}</h2>
              <p className="mt-3 text-slate-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
