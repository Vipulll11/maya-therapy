import { ArrowRight, Check } from 'lucide-react';

const experiences = [
  'Constant worry or racing thoughts',
  'Feeling emotionally on edge',
  'Difficulty relaxing or sleeping',
  'Burnout from prolonged stress',
  'Perfectionism and high internal pressure',
  'Lingering effects of past experiences',
];

export default function WhoWeHelp() {
  return (
    <section className="px-5 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1360px] items-start gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="relative z-10 max-w-xl lg:pr-10 xl:pr-16">
          <p className="mb-2 text-base font-semibold uppercase tracking-[0.22em] text-[#647064]">
            Who I work with
          </p>

          <h2 className="font-serif text-[clamp(2.8rem,4.6vw,4.2rem)] leading-[1.02] tracking-[-0.04em] text-[#18241b]">
            Support for the parts of life that {' '}
            <em className="font-normal text-[#31583f]">feel harder than they look.</em>
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-[#5e665d] sm:text-lg">
            I work primarily with adults who are navigating anxiety, trauma,
            burnout, perfectionism, and the effects of chronic stress.
          </p>

          <a
            href="#book"
            className="group mt-9 inline-flex items-center gap-3 rounded-md bg-[#31583f] px-5 py-3.5 font-serif text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#244c34] hover:shadow-lg"
          >
            Book an Appointment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {experiences.map((item, index) => (
            <div
              key={item}
              className={`relative rounded-2xl border border-white/70 bg-[#fffdf8]/95 p-6 shadow-[0_12px_30px_rgba(32,53,37,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(32,53,37,0.12)] 
              }`}
            >
              <span className="font-serif text-lg italic text-[#31583f]">
                0{index + 1}
              </span>

              <div className="mt-6 flex items-start gap-3.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e6eee5] text-[#31583f]">
                  <Check className="h-3 w-3" />
                </span>
                <p className="text-[16px] font-medium leading-6 text-[#303a31]">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
