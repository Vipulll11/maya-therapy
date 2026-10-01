import { Brain, Quote, Sparkles, Video } from 'lucide-react';
// import portrait from '@/images/Dr. Maya Reynolds.png';

const modalities = ['CBT', 'EMDR', 'Mindfulness', 'Body-Oriented Therapy'];

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-10 lg:py-28">
      {/* soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#e6eee5] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full bg-[#f3ecd9] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1360px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-[440px] lg:mx-0">
          <div className="overflow-hidden rounded-t-[11rem] rounded-b-[2rem] border border-white/70 bg-[#e6e0d2] shadow-[0_26px_70px_rgba(39,59,40,0.16)]">
            <img
              src="images/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
              width={800}
              height={1200}
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* name card */}
          <div className="absolute -bottom-6 left-1/2 w-[240px] -translate-x-1/2 rounded-2xl border border-white/70 bg-[#fffdf8]/95 p-4 text-center shadow-[0_18px_40px_rgba(32,53,37,0.14)] backdrop-blur sm:left-auto sm:right-[-20px] sm:translate-x-0">
            <p className="font-serif text-lg font-semibold text-[#18241b]">
              Dr. Maya Reynolds
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6c766e]">
              Licensed Clinical Psychologist
            </p>
            <div className="mt-2 flex justify-center gap-0.5 text-[13px] text-[#d39f35]">
              ★★★★★
            </div>
          </div>

          {/* gold badge */}
          {/* <div className="absolute left-[-8px] top-10 rounded-full bg-[#d8b875] px-4 py-2 font-serif text-xs font-semibold text-[#243126] shadow-md sm:left-[-22px]">
            <span className="mr-1.5">●</span> Warm &amp; evidence-based
          </div> */}
        </div>

        {/* Copy */}
        <div className="max-w-2xl">
          <p className="mb-5 text-xm font-semibold uppercase tracking-[0.22em] text-[#647064]">
            About me
          </p>

          <h2 className="font-serif text-[clamp(2.8rem,4.6vw,4.2rem)] leading-[1.02] tracking-[-0.04em] text-[#18241b]">
            A warm, grounded approach{' '}
            <em className="font-normal text-[#31583f]">to therapy.</em>
          </h2>

          <p className="mt-7 text-base leading-7 text-[#5e665d] sm:text-lg">
            I&apos;m a licensed clinical psychologist in Santa Monica,
            California, helping adults navigate anxiety, stress, trauma,
            burnout, and the lingering effects of difficult experiences.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5e665d] sm:text-lg">
            My approach is warm, collaborative, and evidence-based — together,
            we&apos;ll create a supportive space to better understand what
            you&apos;re experiencing, build practical tools, and develop a
            stronger sense of balance and self-connection.
          </p>

          {/* modalities */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {modalities.map((m) => (
              <span
                key={m}
                className="flex items-center gap-2 rounded-full border border-[#dfe4da] bg-[#fffdf8]/95 px-4 py-2 text-[13px] font-semibold text-[#31583f] shadow-sm"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#d39f35]" strokeWidth={1.75} />
                {m}
              </span>
            ))}
          </div>

          {/* availability card */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border border-white/70 bg-[#fffdf8]/95 p-5 shadow-[0_12px_30px_rgba(32,53,37,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(32,53,37,0.12)]">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6eee5] text-[#31583f]">
                <Brain className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-[#253126]">
                  In-person in Santa Monica
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#6a726a]">
                  Meet in a calm, private office designed for unhurried work.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-white/70 bg-[#fffdf8]/95 p-5 shadow-[0_12px_30px_rgba(32,53,37,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(32,53,37,0.12)]">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6eee5] text-[#31583f]">
                <Video className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-[#253126]">
                  Secure telehealth statewide
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#6a726a]">
                  The same care, from anywhere in California.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-3 border-l-2 border-[#d8b875] pl-4">
            <Quote className="mt-1 h-4 w-4 shrink-0 text-[#d39f35]" strokeWidth={1.75} />
            <p className="font-serif text-lg italic leading-relaxed text-[#31583f]">
              Healing happens when you feel truly seen — my work is to make
              sure you do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
