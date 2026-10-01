"use client";

import { useState } from 'react';
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';

const focusAreas = [
  'Anxiety & Stress',
  'Depression Support',
  'Trauma & EMDR',
  'Burnout',
  'Relationships',
  'Something else',
];

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit the office',
    lines: ['123th Street 45 W', 'Santa Monica, CA 90401'],
  },
  {
    icon: Clock,
    title: 'Session hours',
    lines: ['Mon–Fri · 9am – 6pm', 'In-person & telehealth'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['hello@drmayareynolds.com'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['(310) 555-0142'],
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  focus: string;
  format: string;
  date: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  focus: '',
  format: 'In-person',
  date: '',
  message: '',
};

const inputClasses =
  'w-full rounded-xl border border-[#dfe4da] bg-white/80 px-4 py-3 text-[15px] text-[#253126] placeholder:text-[#9aa39a] outline-none transition-colors focus:border-[#31583f] focus:ring-2 focus:ring-[#e6eee5]';

const labelClasses =
  'mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6c766e]';

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (form.phone.trim() && !/^[\d\s()+-]{7,}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid phone number.';
    if (!form.focus) next.focus = 'Please choose a focus area.';
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-20 sm:px-10 lg:py-28">
      {/* soft background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#e6eee5] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-16 h-[360px] w-[360px] rounded-full bg-[#f3ecd9] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1360px]">
        {/* Heading */}
        <div className="mx-auto text-center">
          <p className="mb-5 text-xm font-semibold uppercase tracking-[0.22em] text-[#647064]">
            Contact
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,4.6vw,4.2rem)] leading-[1.02] tracking-[-0.04em] text-[#18241b]">
            Ready when you are —{' '}
            <em className="font-normal text-[#31583f]">let&apos;s begin.</em>
          </h2>
          <p className="mt-6 text-base leading-7 text-[#5e665d] sm:text-lg">
            Reach out to book a first session or simply ask a question. Every
            message is read personally and answered with care, usually within
            one business day.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Contact details */}
          <div>
            <div className="rounded-3xl border border-white/70 bg-[#fffdf8]/95 p-8 shadow-[0_18px_45px_rgba(32,53,37,0.12)]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6c766e]">
                Here&apos;s how to find me
              </p>
              <div className="mt-6 grid gap-6">
                {contactDetails.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6eee5] text-[#31583f]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#253126]">
                        {title}
                      </h3>
                      {lines.map((line) => (
                        <p key={line} className="mt-0.5 text-sm leading-6 text-[#6a726a]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#31583f] px-6 py-5 text-[#f4f1e6] shadow-[0_18px_45px_rgba(32,53,37,0.2)]">
              <CalendarCheck className="h-8 w-8 shrink-0 text-[#d8b875]" strokeWidth={1.4} />
              <p className="text-sm leading-6">
                <span className="font-serif text-base font-semibold text-[#faf8f3]">
                  Not sure yet?
                </span>{' '}
                Book a free 15-minute intro call — no pressure, just a
                conversation.
              </p>
            </div>
          </div>

          {/* Booking form */}
          <div className="rounded-3xl border border-white/70 bg-[#fffdf8]/95 p-8 shadow-[0_18px_45px_rgba(32,53,37,0.12)] sm:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e6eee5]">
                  <CheckCircle2 className="h-8 w-8 text-[#31583f]" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-3xl text-[#18241b]">
                  Request received.
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-7 text-[#5e665d]">
                  Thank you, {form.name.trim().split(' ')[0]}. I&apos;ll be in
                  touch within one business day to confirm your{' '}
                  {form.format.toLowerCase()} session
                  {form.date ? ` around ${form.date}` : ''}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="mt-8 rounded-md border border-[#9ba499] px-5 py-3 font-serif text-sm font-semibold text-[#27362a] transition-colors hover:border-[#31583f] hover:bg-[#edf0e9]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6c766e]">
                  Book an appointment
                </p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Full name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name"
                      maxLength={100}
                      className={inputClasses}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-[#a4553d]">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@email.com"
                      maxLength={255}
                      className={inputClasses}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-[#a4553d]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="(310) 555-0000"
                      maxLength={20}
                      className={inputClasses}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-[#a4553d]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="format" className={labelClasses}>
                      Session format
                    </label>
                    <select
                      id="format"
                      value={form.format}
                      onChange={(e) => update('format', e.target.value)}
                      className={inputClasses}
                    >
                      <option>In-person</option>
                      <option>Telehealth (online)</option>
                      <option>Either works for me</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="focus" className={labelClasses}>
                      What would you like to work on? *
                    </label>
                    <select
                      id="focus"
                      value={form.focus}
                      onChange={(e) => update('focus', e.target.value)}
                      className={inputClasses}
                    >
                      <option value="">Select a focus area</option>
                      {focusAreas.map((area) => (
                        <option key={area}>{area}</option>
                      ))}
                    </select>
                    {errors.focus && (
                      <p className="mt-1.5 text-xs font-medium text-[#a4553d]">
                        {errors.focus}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="date" className={labelClasses}>
                      Preferred date (optional)
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                  {/* <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClasses}>
                      Anything you&apos;d like to share (optional)
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="A sentence or two about what brings you here — only what feels comfortable."
                      rows={4}
                      maxLength={1000}
                      className={`${inputClasses} resize-none`}
                    />
                  </div> */}
                </div>

                <button
                  type="submit"
                  className="group mt-7 flex w-full items-center justify-center gap-3 rounded-md bg-[#31583f] px-5 py-4 font-serif text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#244c34] hover:shadow-lg sm:w-auto"
                >
                  Request appointment
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-4 text-xs leading-5 text-[#9aa39a]">
                  Everything you share is confidential. Submitting this form
                  doesn&apos;t create a therapeutic relationship yet — we&apos;ll
                  confirm your appointment first.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
