import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const footerLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Terms & Conditions', href: '/#' },
  { label: 'Privacy Policy', href: '/#' },
  { label: 'FAQ', href: '/#' },
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-4">
        <div>
          <div className="mb-4 text-2xl font-extrabold tracking-tight text-white">
            ⚡ Saffron<span className="text-accent">EcoPower</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            Empowering with sustainable solar energy solutions for homes, businesses, and industries.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-400">
            <div>📞 <span className="font-semibold text-white">+91 78939 96527</span></div>
            <div>✉️ info@saffronecopower.com</div>
            <div>3rd Floor, Next Space Building, NH-Service Road, Kunchanapalli Village, Tadepalli, Guntur Dist, A.P – 522501</div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Latest Posts</h3>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex gap-3">
              <div className="h-14 w-14 rounded-lg bg-slate-800" />
              <div>
                <p className="font-semibold text-white">PM Surya Ghar Yojana 2026: Benefits & How to Apply</p>
                <p className="text-xs text-accent">February 11, 2026</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-14 w-14 rounded-lg bg-slate-800" />
              <div>
                <p className="font-semibold text-white">The Future of Clean Energy in India</p>
                <p className="text-xs text-accent">February 11, 2026</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Newsletter</h3>
          <p className="mb-6 max-w-xs text-sm leading-7 text-slate-400">
            Get the latest news and offers from Saffron EcoPower in your inbox.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button type="submit" className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primaryDark">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        Copyright © 2026 Saffron EcoPower, All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
