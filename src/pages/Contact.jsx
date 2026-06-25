import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', district: '', address: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', district: '', address: '' });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="rounded-[32px] bg-slate-50 p-10 shadow-soft">
          <h1 className="text-4xl font-extrabold text-slate-950">Contact Us</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Fill in your details and our team will get back to you shortly.
          </p>
          <div className="mt-10 space-y-4 text-sm text-slate-700">
            <p>📞 <strong className="text-slate-900">+91 94677 29999</strong></p>
            <p>✉️ info@ellvinenergy.com</p>
            <p>3rd Floor, Next Space Building, NH-Service Road, Kunchanapalli Village, Tadepalli, Guntur Dist, A.P – 522501</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-soft">
          <div className="grid gap-6">
            {[
              { name: 'name', label: 'Name', type: 'text' },
              { name: 'phone', label: 'Phone', type: 'tel' },
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'district', label: 'District', type: 'text' },
              { name: 'address', label: 'Address', type: 'text' },
            ].map((field) => (
              <label key={field.name} className="space-y-2 text-sm font-medium text-slate-900">
                {field.label}
                <input
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </label>
            ))}
          </div>
          <button type="submit" className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryDark">
            APPLY NOW
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
