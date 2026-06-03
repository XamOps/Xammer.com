import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import './ContactPage.css';

const services = [
  'AWS Managed Services', 'Microsoft Azure', 'Google Cloud Platform',
  'Yotta Sovereign Cloud', 'Cyber Security', 'Digital Transformation',
  'Odoo ERP', 'ERP Implementation', 'DevOps Automation', 'Other',
];

const faqs = [
  { q: 'How quickly can Xammer start?', a: 'We can begin a free assessment within 48 hours of first contact. Full managed services onboarding typically takes 2–4 weeks depending on complexity.' },
  { q: 'Do you work with startups or only enterprises?', a: 'Both. We work with Series-A startups on EC2 all the way to 500-person enterprises with multi-account AWS environments. Our engagement scope scales to your needs.' },
  { q: 'Is the initial audit really free?', a: 'Yes — completely free, no strings attached. You get a detailed report with prioritized recommendations regardless of whether you choose to engage us further.' },
  { q: 'What is your typical response time?', a: 'For existing clients: P1 incidents → 15 minutes. For new enquiries: we respond within 4 business hours on weekdays.' },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <SEO
        title="Contact Xammer | Get a Free Cloud Audit | Delhi, India"
        description="Contact Xammer for a free AWS, Azure, or Google Cloud cost audit. Based in Delhi, India. Reach us at operations@xammer.in or +91 98713 38979."
        keywords="contact Xammer, free cloud audit India, AWS consulting contact Delhi, cloud cost audit"
      />
      <main>
        <PageHero
          badge="Respond within 4 Business Hours"
          title="Let's Start a"
          highlight="Conversation"
          subtitle="Whether you need a free cloud cost audit, a migration partner, or 24x7 managed operations — our team is ready to help. No sales pitch, just honest advice."
          accent="violet"
        />

        <section className="contact section">
          <div className="container">
            <div className="contact__grid">

              {/* Left: Contact info */}
              <div className="contact__info">
                <h2 className="contact__info-title">Get in Touch</h2>
                <p className="contact__info-sub">Prefer to reach us directly? We're available Mon–Sat, 9 AM to 7 PM IST.</p>

                <div className="contact__cards">
                  <a href="tel:+919871338979" className="contact__card glass-card">
                    <div className="contact__card-icon contact__card-icon--violet"><Phone size={20} /></div>
                    <div>
                      <div className="contact__card-label">Call Us</div>
                      <div className="contact__card-value">+91 98713 38979</div>
                      <div className="contact__card-value">+91 87692 54249</div>
                    </div>
                  </a>
                  <a href="mailto:operations@xammer.in" className="contact__card glass-card">
                    <div className="contact__card-icon contact__card-icon--blue"><Mail size={20} /></div>
                    <div>
                      <div className="contact__card-label">Email Us</div>
                      <div className="contact__card-value">operations@xammer.in</div>
                    </div>
                  </a>
                  <div className="contact__card glass-card">
                    <div className="contact__card-icon contact__card-icon--teal"><MapPin size={20} /></div>
                    <div>
                      <div className="contact__card-label">Office</div>
                      <div className="contact__card-value">Delhi, India</div>
                      <div className="contact__card-note">Serving enterprises across India & globally</div>
                    </div>
                  </div>
                  <div className="contact__card glass-card">
                    <div className="contact__card-icon contact__card-icon--green"><Clock size={20} /></div>
                    <div>
                      <div className="contact__card-label">Business Hours</div>
                      <div className="contact__card-value">Mon – Sat: 9 AM – 7 PM IST</div>
                      <div className="contact__card-note">24x7 support for managed services clients</div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="contact__faq">
                  <h3 className="contact__faq-title">Quick Answers</h3>
                  {faqs.map((f, i) => (
                    <div key={i} className={`contact__faq-item${openFaq === i ? ' contact__faq-item--open' : ''}`}>
                      <button className="contact__faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        {f.q}
                        <span className="contact__faq-arrow">{openFaq === i ? '−' : '+'}</span>
                      </button>
                      {openFaq === i && <p className="contact__faq-a">{f.a}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="contact__form-wrap">
                {submitted ? (
                  <div className="contact__success glass-card">
                    <div className="contact__success-icon">✅</div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. Our team will respond within 4 business hours.</p>
                  </div>
                ) : (
                  <form className="contact__form glass-card" onSubmit={submit}>
                    <div className="contact__form-header">
                      <h2>Request a Free Cloud Audit</h2>
                      <p>Fill in your details and we'll schedule a free 60-minute assessment of your cloud environment.</p>
                    </div>
                    <div className="contact__form-row">
                      <div className="contact__field">
                        <label>Full Name *</label>
                        <input name="name" value={form.name} onChange={handle} placeholder="Rajesh Kumar" required />
                      </div>
                      <div className="contact__field">
                        <label>Work Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@company.com" required />
                      </div>
                    </div>
                    <div className="contact__form-row">
                      <div className="contact__field">
                        <label>Company Name *</label>
                        <input name="company" value={form.company} onChange={handle} placeholder="Acme Technologies" required />
                      </div>
                      <div className="contact__field">
                        <label>Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div className="contact__field">
                      <label>Service You're Interested In</label>
                      <select name="service" value={form.service} onChange={handle}>
                        <option value="">Select a service…</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="contact__field">
                      <label>Tell Us About Your Challenge</label>
                      <textarea name="message" value={form.message} onChange={handle} rows={4}
                        placeholder="e.g. Our AWS bill is growing 30% month-over-month and we don't know why…" />
                    </div>
                    <button type="submit" className="btn-primary contact__submit">
                      Send Message <Send size={15} />
                    </button>
                    <p className="contact__privacy">We respect your privacy. No spam, ever.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
