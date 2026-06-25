import { motion } from 'framer-motion';
import { FiCheckCircle, FiChevronRight } from 'react-icons/fi';

const featureItems = [
  { title: 'Simple & Easy to Use', description: 'Hassle-free setup & monitoring', icon: '💡' },
  { title: 'Predictable Payments', description: 'Zero-cost EMI options', icon: '💳' },
  { title: '25-Year Warranty', description: 'Long-term peace of mind', icon: '🛡️' },
  { title: 'Installation Included', description: 'End-to-end service delivery', icon: '🔧' },
];

const benefits = [
  { title: 'Pan-India Reach', description: 'Seamless project execution from Hyderabad to the farthest corners of the country.', icon: '🗺️' },
  { title: 'Transparent Financing', description: 'Zero-cost EMIs, MNRE subsidies fully facilitated, and clear ROI projections.', icon: '💰' },
  { title: 'End-to-End Support', description: 'Design → Installation → 24×7 monitoring → Annual maintenance — your system is in expert hands, every step of the way.', icon: '🔄' },
  { title: 'Advanced Monitoring', description: 'IoT-enabled performance dashboards deliver real-time system insights, with automated alerts and predictive diagnostics.', icon: '📊' },
  { title: 'Tailored System Design', description: 'Detailed on-site energy audits and simulations to craft a bespoke solar solution optimized for your consumption patterns.', icon: '🏗️' },
  { title: 'Home Appliance Value', description: 'Solar panels can increase the value of your home. Studies show solar installations boost property prices significantly.', icon: '🏠' },
];

const workflow = [
  { title: 'Book a Free Consultation', description: 'Talk to our solar experts and discuss your energy needs.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Review Proposal', description: 'Get a detailed, transparent proposal tailored to your site.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Track Project Installation', description: 'Our certified team handles the entire installation process.', image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Make it Happen', description: 'Go live, start saving, and monitor your system in real-time.', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80' },
];

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/95 to-primary px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80')] bg-center bg-cover opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/90">
              🌿 Renewable Energy Solutions
            </span>
            <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Save the Planet by Using <span className="text-accent">Renewable Energy</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Simple & easy to use solar solutions with predictable payments, 25-year warranty, and full installation included — for homes, businesses, and industries across India.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#benefits" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-500 sm:px-8">
                Apply Now
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:px-8">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[32px] bg-white p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {featureItems.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4 rounded-3xl border border-slate-200 p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primaryLight text-2xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Our Benefits</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Main Reasons Why <strong className="text-primary">Choose Us</strong>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              From design to maintenance, we provide comprehensive solar solutions backed by cutting-edge technology and expert support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-primaryLight text-3xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Saffron EcoPower</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Best Solution for <strong className="text-primary">Your Home Service</strong>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              We offer Residential Solar Rooftops, Commercial and Industrial Solar Rooftops with complete end-to-end execution.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[32px] bg-slate-950 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Solar Rooftops"
                className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-8 flex items-end">
                <div>
                  <h3 className="text-3xl font-bold text-white">Solar Rooftops</h3>
                  <p className="mt-3 max-w-xs text-sm text-slate-200">Residential solar solutions optimized for your home's energy needs.</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[32px] bg-slate-950 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80"
                alt="Commercial Solar"
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80';
                }}
                className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-8 flex items-end">
                <div>
                  <h3 className="text-3xl font-bold text-white">Commercial Solar Rooftops</h3>
                  <p className="mt-3 max-w-xs text-sm text-slate-200">Industrial-scale solar installations for businesses and enterprises.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryDark">
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">How We Work</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Our Project <strong className="text-primary">Work Flow Process</strong>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              A simple, transparent four-step process from consultation to go-live.
            </p>
          </div>
          <div className="mt-12 grid gap-6 xl:grid-cols-4">
            {workflow.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-r from-primary to-primaryDark p-10 text-white shadow-soft sm:p-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">Got an Incredible Project Right Now?</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
                This helps ensure quality, schedule, and that we're all working toward the same goal. Let's get started today.
              </p>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition hover:bg-slate-100">
              APPLY NOW
              <FiChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Saffron EcoPower</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">PM Surya Ghar: Muft Bijli Yojana</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              In order to further sustainable development and people's well-being, we are supporting the PM Surya Ghar: Muft Bijli Yojana. This project, with an investment of over ₹75,000 crores, aims to light up 1 crore households by providing up to 300 units of free electricity every month.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryDark">
                Apply Now
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10">
                Download Brochure
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] bg-white shadow-soft">
            <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80" alt="PM Surya Ghar Yojana" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Saffron EcoPower</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">PM Surya Ghar: <strong className="text-primary">News Insights</strong></h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {['PM Surya Ghar Yojana 2026: Benefits & How to Apply', 'The Future of Clean Energy in India: Why Solar Is Smart in 2026', 'From Design to Maintenance: Installing Commercial Solar With Saffron EcoPower'].map((title, index) => (
              <article key={title} className="overflow-hidden rounded-[32px] bg-white shadow-soft transition hover:-translate-y-1">
                <img src={`https://images.unsplash.com/photo-1538095739977-00fbc3d69a1a?auto=format&fit=crop&w=1200&q=80`} alt={title} className="h-60 w-full object-cover" />
                <div className="p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Blog · 11 Feb, 2026</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{title}</h3>
                  <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:underline">
                    Read More <FiChevronRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
