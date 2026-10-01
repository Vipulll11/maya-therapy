import { MapPin, MonitorSmartphone, ShieldCheck } from 'lucide-react';
import officeRoom from '@/public/images/office1.jpeg';

const details = [
  {
    icon: MapPin,
    title: 'Santa Monica, California',
    text: 'A quiet, easy-to-reach office with private parking and a waiting space that never feels crowded.',
  },
  {
    icon: MonitorSmartphone,
    title: 'In-person & hybrid sessions',
    text: 'Meet in the office or online — whichever feels safer and more comfortable for you.',
  },
  {
    icon: ShieldCheck,
    title: 'Comfort, safety & privacy',
    text: 'A fully confidential space, designed so nothing about being here adds to your load.',
  },
];

export default function OurOffice() {
  return (
    <section className="px-5 py-20 sm:px-10 lg:py-28 bg-white">
         
      <div className="mx-auto grid max-w-[1360px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Copy + details */}
        <div className="max-w-xl lg:order-1">
        
<p className="mb-5 text-xl font-semibold uppercase tracking-[0.16em] text-[#31583f]">
            Our office
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,4.6vw,4.2rem)] leading-[1.02] tracking-[-0.04em] text-[#18241b]">
            A calm space for healing,{' '}
            <em className="font-normal text-[#31583f]">made to feel like exhaling.</em>
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-[#5e665d] sm:text-lg">
            Soft light, warm textures, room to breathe. The office is where the
            work happens — so it was designed to be the opposite of clinical:
            gentle, unhurried, and entirely yours for the hour.
          </p>

          <div className="mt-10 grid gap-5">
            {details.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-white/70 bg-[#31583f]/95 p-5 shadow-[0_12px_30px_rgba(32,53,37,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(32,53,37,0.12)]"
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6eee5] text-[#31583f]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image collage */}
        <div className="lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/office1.jpeg"
              alt="The therapy office — soft light, plants, and a comfortable seating area"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-full w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(32,53,37,0.14)]"
            />
            <img
              src="images/office2.jpeg"
              alt="Two armchairs facing each other by the window in the counseling space"
              loading="lazy"
              width={1200}
              height={1504}
              className="mb-6 h-full w-full translate-y-6 rounded-2xl object-cover shadow-[0_18px_45px_rgba(32,53,37,0.14)] sm:translate-y-10"
            />
          </div>
          <img
            src="images/office2.jpeg"
            alt="A cozy reading corner of the office with books, plants, and warm sunlight"
            loading="lazy"
            width={1200}
            height={912}
            className="mt-14 w-full -translate-y-2 rounded-2xl object-cover shadow-[0_18px_45px_rgba(32,53,37,0.14)] sm:-translate-y-2"
          />
        </div>
      </div>
    </section>
  );
}
