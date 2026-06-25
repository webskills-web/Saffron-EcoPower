import { motion } from 'framer-motion';

const serviceList = [
  {
    title: 'Residential Solar Rooftops',
    description: 'Tailored rooftop systems for homes with guaranteed performance monitoring.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Commercial Solar Rooftops',
    description: 'Scalable solar solutions for businesses and industrial facilities.',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'End-to-End Installation',
    description: 'Full-service project delivery from design through commissioning.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Monitoring & Maintenance',
    description: '24x7 monitoring and proactive maintenance for long-term uptime.',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80',
  },
];

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Services</p>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-950">Solar Services Designed for Every Customer</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
          Explore our solar offerings that help homeowners and businesses reduce electricity costs and increase energy resilience.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {serviceList.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="group overflow-hidden rounded-[32px] bg-white shadow-soft"
          >
            <div className="h-80 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80';
                }}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-4 text-slate-600 leading-7">{service.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Services;
