'use client';

import { useState } from 'react';
import {
  ChevronDown,
  Leaf,
  Menu,
  X,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#top', active: true },
  { label: 'About Us', href: '#about' },
  { label: 'Therapies', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar({
  onBookAppointment,
}: {
  onBookAppointment: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const handleBooking = () => {
    closeMenu();
    onBookAppointment();
  };

  return (
    <header className="relative z-50 w-full border-b border-[#dedbd1] bg-[#faf8f3]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:px-10 xl:px-16">

        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3"
          aria-label="Dr. Maya Reynolds home"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#31583f] text-[#31583f] sm:h-11 sm:w-11">
            <Leaf className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
          </span>

          <span className="min-w-0 leading-none">
            <strong className="block whitespace-nowrap font-serif text-[clamp(16px,3.5vw,30px)] font-medium tracking-tight text-[#1d2b21]">
              Dr. Maya Reynolds
            </strong>
            <small className="mt-1.5 block text-[8px] font-semibold uppercase tracking-[0.16em] text-[#536056] min-[380px]:text-[9px] sm:text-[11px] sm:tracking-[0.32em]">
              Clinical Psychology
            </small>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 text-sm font-medium text-[#424b43] lg:flex xl:gap-7 xl:text-base">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? 'border-b-2 border-[#31583f] pb-1 text-[#1d2b21]'
                  : 'transition-colors hover:text-[#31583f]'
              }
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 transition-colors hover:text-[#31583f]"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                id="services-dropdown"
                className="absolute left-0 top-full mt-3 w-52 rounded-xl border border-[#dedbd1] bg-[#fffdf8] p-2 shadow-xl"
              >
                <a
                  href="#services"
                  onClick={() => setServicesOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm hover:bg-[#edf0e9]"
                >
                  All Therapies
                </a>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#31583f]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop booking button */}
        <button
          type="button"
          onClick={handleBooking}
          className="hidden shrink-0 rounded-md bg-[#31583f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#244c34] hover:shadow-lg lg:block xl:px-5"
        >
          Book an Appointment
        </button>

        {/* Mobile / tablet menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#31583f] transition-colors hover:bg-[#edf0e9] lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile / tablet dropdown */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-t border-[#dedbd1] bg-[#fffdf8] px-4 pb-5 pt-3 shadow-xl sm:px-6 lg:hidden"
        >
          <div className="mx-auto grid max-w-[1440px] gap-1 text-sm font-medium text-[#424b43]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 transition-colors hover:bg-[#edf0e9] ${
                  link.active
                    ? 'bg-[#edf0e9] text-[#1d2b21]'
                    : ''
                }`}
              >
                {link.label === 'Therapies'
                  ? 'Services & Therapies'
                  : link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={handleBooking}
              className="mt-2 w-full rounded-lg bg-[#31583f] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[#244c34]"
            >
              Book an Appointment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}