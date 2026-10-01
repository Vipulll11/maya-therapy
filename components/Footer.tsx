'use client';

import {
  ArrowRight,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Clock3,
} from 'lucide-react';

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';

const footerLinks = {
  Explore: [
    { label: 'Home', href: '#top' },
    { label: 'About Us', href: '#about' },
    { label: 'Therapies', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
  ],
  Services: [
     { label: 'Individual Therapy', href: '#services' },
  { label: 'Anxiety & Stress', href: '#services' },
  { label: 'Trauma Therapy', href: '#services' },
  { label: 'Burnout & Perfectionism', href: '#services' },
  { label: 'Panic & Overthinking', href: '#services' },
  { label: 'Online Therapy', href: '#services' },
  ],
};

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#31583f] text-[#f7f3e9]">

      {/* CTA / Newsletter */}
      <div className="border-b border-white/15">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#d8b875]">
                A space for you
              </p>

              <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-5xl">
                You don't have to navigate
                <em className="font-normal text-[#d8b875]">
                  {' '}everything alone.
                </em>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-[#dce4dc]/80 sm:text-base">
                Take the first step toward feeling more grounded, understood,
                and connected. Get occasional insights and resources for
                your mental well-being.
              </p>
            </div>

            <div className="w-full lg:w-[430px]">
              <form className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6d7d70]" />

                  <input
                    type="email"
                    placeholder="Your email address"
                    className="h-12 w-full rounded-md border border-white/20 bg-[#f7f3e9] pl-11 pr-4 text-sm text-[#243126] outline-none placeholder:text-[#7a837b] focus:border-[#d8b875]"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex h-12 items-center justify-center gap-2 rounded-md bg-[#d8b875] px-6 text-sm font-semibold text-[#243126] transition-all hover:bg-[#e2c68d]"
                >
                  Stay Connected
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <p className="mt-3 text-[11px] text-white/50">
                No spam. Just occasional resources for your well-being.
              </p>
            </div>

          </div>
        </div>
      </div>


      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-10 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="max-w-sm">

            <a
              href="#top"
              className="inline-flex items-center gap-3"
              aria-label="Mindful Minds Psychology home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b875]/70 text-[#d8b875]">
                <Leaf className="h-6 w-6" strokeWidth={1.5} />
              </span>

              <span className="leading-none">
                <strong className="block font-serif text-[24px] font-medium tracking-tight text-[#fffdf8]">
                  Dr. Maya Reynolds
                </strong>

                <small className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.32em] text-[#cbd5cc]">
                  Clinical Psychology
                </small>
              </span>
            </a>

            <p className="mt-7 text-sm leading-6 text-[#dce4dc]/75">
              A warm, grounded space for adults navigating anxiety, trauma,
              burnout, perfectionism, and the pressure to keep everything
              together.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#dce4dc] transition-all hover:border-[#d8b875] hover:bg-[#d8b875] hover:text-[#243126]"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>

          </div>


          {/* Explore */}
          <div>
            <h3 className="mb-5 font-serif text-lg text-[#fffdf8]">
              Explore
            </h3>

            <ul className="grid gap-3">
              {footerLinks.Explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#dce4dc]/70 transition-colors hover:text-[#d8b875]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="mb-5 font-serif text-lg text-[#fffdf8]">
              Therapies
            </h3>

            <ul className="grid gap-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#dce4dc]/70 transition-colors hover:text-[#d8b875]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="mb-5 font-serif text-lg text-[#fffdf8]">
              Here's how to find me
            </h3>

            <div className="grid gap-5">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b875]" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#dce4dc]/50">
                    Visit the office
                  </p>

                  <p className="mt-1 text-sm leading-5 text-[#dce4dc]/80">
                    123th Street 45 W
                    <br />
                    Santa Monica, CA 90401
                  </p>
                </div>
              </div>


              {/* Hours */}
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b875]" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#dce4dc]/50">
                    Session hours
                  </p>

                  <p className="mt-1 text-sm leading-5 text-[#dce4dc]/80">
                    Mon–Fri · 9am – 6pm
                    <br />
                    In-person & telehealth
                  </p>
                </div>
              </div>


              {/* Email */}
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b875]" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#dce4dc]/50">
                    Email
                  </p>

                  <a
                    href="mailto:hello@drmayareynolds.com"
                    className="mt-1 block text-sm text-[#dce4dc]/80 transition-colors hover:text-[#d8b875]"
                  >
                    hello@drmayareynolds.com
                  </a>
                </div>
              </div>


              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b875]" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#dce4dc]/50">
                    Phone
                  </p>

                  <a
                    href="tel:+13105550142"
                    className="mt-1 block text-sm text-[#dce4dc]/80 transition-colors hover:text-[#d8b875]"
                  >
                    (310) 555-0142
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 text-xs text-[#dce4dc]/55 sm:px-10 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition-colors hover:text-[#d8b875]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#d8b875]"
            >
              Terms of Use
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#d8b875]"
            >
              Accessibility
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}