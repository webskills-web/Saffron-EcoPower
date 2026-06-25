function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Blog</p>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-950">Latest Insights on Solar Energy</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
          Read about clean energy trends, government solar schemes, and how solar is transforming homes and businesses.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {[
          {
            title: 'PM Surya Ghar Yojana 2026: Benefits & How to Apply',
            date: 'Feb 11, 2026',
          },
          {
            title: 'The Future of Clean Energy in India: Why Solar Is Smart in 2026',
            date: 'Feb 11, 2026',
          },
          {
            title: 'From Design to Maintenance: Installing Commercial Solar With Ellvin Energy',
            date: 'Feb 11, 2026',
          },
        ].map((post) => (
          <article key={post.title} className="overflow-hidden rounded-[32px] bg-white shadow-soft transition hover:-translate-y-1">
            <div className="h-64 bg-slate-200" />
            <div className="p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Blog · {post.date}</div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">{post.title}</h2>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:underline">
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
