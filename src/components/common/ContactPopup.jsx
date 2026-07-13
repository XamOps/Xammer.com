import { useEffect, useState } from 'react';
import { X, Send, Mail } from 'lucide-react';
import './ContactPopup.css';

/**
 * Formspree endpoint — replace YOUR_FORM_ID with the real form ID from
 * https://formspree.io (sign up, create a form, set its notification
 * email to ajit.singh@xammer.com, then paste the endpoint it gives you).
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const SHOW_DELAY_MS = 3000;
const DISMISS_KEY = 'xammer_popup_dismissed';

const ContactPopup = () => {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, '1');
  };

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `New enquiry from xammer.com popup — ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      setStatus('error');
    }
  };

  if (!visible) return null;

  return (
    <div className="contact-popup__overlay" onClick={close}>
      <div className="contact-popup__card" onClick={(e) => e.stopPropagation()}>
        <button className="contact-popup__close" onClick={close} aria-label="Close popup">
          <X size={18} />
        </button>

        {status === 'success' ? (
          <div className="contact-popup__success">
            <div className="contact-popup__success-icon">✅</div>
            <h3>Thank You!</h3>
            <p>We've received your message and will get back to you shortly.</p>
          </div>
        ) : (
          <>
            <div className="contact-popup__header">
              <div className="contact-popup__icon"><Mail size={20} /></div>
              <div>
                <h3>Let's Talk</h3>
                <p>Get a free cloud consultation — drop us your details.</p>
              </div>
            </div>

            <form className="contact-popup__form" onSubmit={handleSubmit}>
              <div className="contact-popup__field">
                <label htmlFor="popup-name">Full Name *</label>
                <input id="popup-name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="contact-popup__field">
                <label htmlFor="popup-email">Email *</label>
                <input id="popup-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
              </div>
              <div className="contact-popup__field">
                <label htmlFor="popup-phone">Phone</label>
                <input id="popup-phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
              </div>
              <div className="contact-popup__field">
                <label htmlFor="popup-message">Message</label>
                <textarea id="popup-message" name="message" rows={3} value={form.message} onChange={handleChange} placeholder="How can we help?" />
              </div>

              {status === 'error' && (
                <p className="contact-popup__error">Something went wrong. Please try again.</p>
              )}

              <button type="submit" className="contact-popup__submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : <>Send Message <Send size={14} /></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactPopup;
