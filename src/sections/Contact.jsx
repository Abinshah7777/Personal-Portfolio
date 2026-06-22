import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '@/components/Button';
import SectionTag from '@/components/SectionTag';
import useReveal from '@/hooks/useReveal';

export default function Contact() {
  const [ref, isVisible] = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        'Missing EmailJS env vars. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, ' +
          'and VITE_EMAILJS_PUBLIC_KEY to a .env file at the project root.'
      );
      setStatus('error');
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        { name: formData.name, email: formData.email, message: formData.message },
        publicKey
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28">
      <div ref={ref} className="container mx-auto px-6 max-w-xl">
        <div className={`text-center mb-12 ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <SectionTag>
            <span className="mx-auto">contact</span>
          </SectionTag>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Let's build <span className="italic text-muted">something.</span>
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`card p-8 space-y-6 ${isVisible ? 'reveal' : 'opacity-0'}`}
          style={{ animationDelay: '100ms' }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange('name')}
              className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="name@domain.com"
              value={formData.email}
              onChange={handleChange('email')}
              className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              placeholder="What are you looking to build?"
              value={formData.message}
              onChange={handleChange('message')}
              className="w-full px-4 py-3 bg-background rounded-xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none transition-all"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
            {isLoading ? 'Sending…' : <>Send message <Send size={17} /></>}
          </Button>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl bg-accent-soft text-accent">
              <CheckCircle2 size={17} /> Message sent — I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl bg-red-50 text-red-600 border border-red-100">
              <AlertCircle size={17} /> Something went wrong. Please email me directly instead.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
