'use client';

import { useState } from 'react';
import { ChevronDown, Clock3, Leaf, Menu, Phone, Sparkles, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#top', active: true },
  { label: 'About Us', href: '#about' },
  { label: 'Therapies', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar({ onBookAppointment }: { onBookAppointment: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* <div className="flex min-h-10 items-center justify-center gap-2 bg-[#173b2b] px-4 py-2 text-center text-xs font-medium tracking-wide text-[#f7f3e9] sm:text-sm">
        <Sparkles className="h-3.5 w-3.5 text-[#d8b875]" />
        New here? Get 20% off your first session.
        <button onClick={onBookAppointment} className="ml-1 underline underline-offset-4 transition-colors hover:text-[#d8b875]">Claim offer</button>
      </div> */}

      {/* <div className="border-b border-[#dedbd1] bg-[#faf8f3] text-xs text-[#59635a]">
        <div className="mx-auto flex max-w-[1440px] justify-end gap-5 px-5 py-2 sm:px-10">
          <span className="hidden items-center gap-1.5 sm:flex"><Clock3 className="h-3.5 w-3.5" /> Mon–Sat: 9:00 AM–6:00 PM</span>
          <a href="tel:5551234567" className="flex items-center gap-1.5 hover:text-[#31583f]"><Phone className="h-3.5 w-3.5" /> (555) 123-4567</a>
        </div>
      </div> */}

      <header className=" flex items-center justify-between px-10 py-5 sm:px-20 lg:py-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Dr Maya home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#31583f] text-[#31583f]"><Leaf className="h-6 w-6" strokeWidth={1.5} /></span>
          <span className="leading-none">
            <strong className="block font-serif text-[30px] font-medium tracking-tight text-[#1d2b21]">Dr. Maya Reynolds</strong>
            <small className="mt-1 block text-[11px] uppercase font-semibold tracking-[0.32em] text-[#536056]">Clinical Psychology</small>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[17px] font-medium text-[#424b43] lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <a key={link.href} className={link.active ? 'border-b-2 border-[#31583f] pb-1 text-[#1d2b21]' : 'transition-colors hover:text-[#31583f]'} href={link.href}>{link.label}</a>
          ))}
          <button className="flex items-center gap-1 transition-colors hover:text-[#31583f]" onClick={() => setServicesOpen(!servicesOpen)}>Services <ChevronDown className="h-3.5 w-3.5" /></button>
          {navLinks.slice(2).map((link) => (
            <a key={link.href} className="transition-colors hover:text-[#31583f]" href={link.href}>{link.label}</a>
          ))}
        </nav>

        <button onClick={onBookAppointment} className="hidden rounded-md bg-[#31583f] px-5 py-3 text-xm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#244c34] hover:shadow-lg lg:block">Book an Appointment</button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-md p-2 text-[#31583f] lg:hidden" aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <div className="absolute left-5 right-5 top-[82px] rounded-xl border border-[#dedbd1] bg-[#fffdf8] p-3 shadow-xl lg:hidden">
            <div className="grid gap-1 text-sm font-medium">
              <a className="rounded-lg bg-[#edf0e9] px-4 py-3" href="#top">Home</a>
              <a className="rounded-lg px-4 py-3 hover:bg-[#edf0e9]" href="#about">About Us</a>
              <a className="rounded-lg px-4 py-3 hover:bg-[#edf0e9]" href="#services">Services & Therapies</a>
              <a className="rounded-lg px-4 py-3 hover:bg-[#edf0e9]" href="#contact">Contact Us</a>
              <button onClick={onBookAppointment} className="mt-2 rounded-lg bg-[#31583f] px-4 py-3 text-left font-semibold text-white">Book an Appointment</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
