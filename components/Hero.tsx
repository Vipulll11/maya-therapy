'use client';

import { ArrowRight, CalendarDays, Check, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react';

const therapyOptions = [
  'Individual Therapy',
  'Anxiety & Stress',
  'Trauma Therapy',
  'Burnout & Perfectionism',
  'Panic & Overthinking',
  'Online Therapy',
];

const benefits = [
  { icon: HeartHandshake, title: 'Personalized Care', text: 'Therapy tailored to your unique needs and goals.' },
  { icon: ShieldCheck, title: 'Licensed Psychologist', text: 'Experienced professional committed to your well-being.' },
  { icon: ShieldCheck, title: 'Safe & Confidential', text: 'Your privacy is our priority. A safe space to heal and grow.' },
  { icon: CalendarDays, title: 'Flexible Scheduling', text: 'Convenient appointment times, including online sessions.' },
  { icon: Leaf, title: 'Holistic Approach', text: 'Evidence-based therapies for mind, body, and emotional well-being.' },
];

const patientPhotos = [
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80',
];

export default function Hero({ onBookAppointment }: { onBookAppointment: () => void }) {
  return (
    <>
      <section id="top" className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-12 pt-5 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0 lg:pb-20 lg:pt-5">
        <div className="relative z-10 max-w-xl lg:pr-10 xl:pr-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#647064]">
             Therapy in Santa Monica, California.
          </p>
          <h1 className="max-w-[560px] font-serif text-[clamp(3.4rem,6.5vw,6.0rem)] leading-[0.95] tracking-[-0.04em] text-[#18241b]">
            Better Mind.<br /><em className="font-normal text-[#31583f]">Better Life.</em>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#5e665d] sm:text-lg">
            A warm, grounded space for adults navigating anxiety, trauma,        burnout, perfectionism, and the pressure to keep everything         together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onBookAppointment} className="group flex items-center font-serif gap-3 rounded-md bg-[#31583f] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#244c34] hover:shadow-lg">
              Book an Appointment <CalendarDays className="h-4 w-4 transition-transform group-hover:scale-110" />
            </button>
            <a href="#services" className="group flex font-serif items-center gap-3 rounded-md border border-[#9ba499] bg-transparent px-5 py-3.5 text-sm font-semibold text-[#27362a] transition-colors hover:border-[#31583f] hover:bg-[#edf0e9]">
              Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {patientPhotos.map((src) => (
                <img key={src} src={src} alt="Patient" className="h-8 w-8 rounded-full border-2 border-[#faf8f3] object-cover" />
              ))}
            </div>
            <div className="h-5 w-px bg-[#d7d3c9]" />
            <div>
              <div className="flex gap-0.5 text-[#d39f35]">★★★★★</div>
              <p className="text-[11px] font-medium text-[#59635a]">4.9 (350+ Reviews)</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[430px] overflow-visible sm:min-h-[560px] lg:min-h-[600px]">
          <div className="absolute inset-0 overflow-hidden rounded-[34%_3%_3%_34%/22%_3%_3%_22%] bg-[#e6e0d2] shadow-[0_22px_60px_rgba(39,59,40,0.14)]">
            <img src="images/Dr. Maya Reynolds.png" alt="Therapist in a calm, welcoming office" className="h-full w-full object-contain object-top transition-transform duration-700 hover:scale-[1.03]" />
          </div>
          <div className="absolute -bottom-5 right-2 w-[210px] rounded-2xl border border-white/70 bg-[#fffdf8]/95 p-5 shadow-xl backdrop-blur sm:bottom-4 sm:right-[-18px] sm:w-[245px]">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6c766e]">Here for your journey</p>
            <div className="grid gap-2.5 text-xm font-medium text-[#303a31]">
              {therapyOptions.slice(0, 5).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e6eee5] text-[#31583f]"><Check className="h-3 w-3" /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -left-3 font-serif top-8 rounded-full bg-[#d8b875] px-4 py-2 text-xs font-semibold text-[#243126] shadow-md sm:left-[-26px] sm:top-16">
            <span className="mr-1.5">●</span> A safe space to heal
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-5 rounded-2xl border border-[#e4e0d5] bg-[#fffdf9] shadow-[0_12px_30px_rgba(32,53,37,0.08)] sm:mx-10 lg:mx-auto lg:max-w-[1360px]">
        <div className="grid divide-y divide-gray-300 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 p-5 lg:block lg:p-6">
              <Icon className="mt-0.5 h-9 mx-auto w-9 shrink-0 text-[#31583f]" strokeWidth={1.35} />
              <div className="lg:mt-4 text-center">
                <h2 className="text-lg font-semibold text-[#253126]">{title}</h2>
                <p className="mt-1.5 text-base leading-5 text-[#6a726a]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
// import { ArrowRight } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#344B46] text-white">
//       <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
        
//         <div className="max-w-2xl">
//           <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#D8CBBB]">
//             Therapy in Santa Monica, California
//           </p>

//           <h1 className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
//             Anxiety & Trauma Therapy for Adults
//           </h1>

//           <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
//             A warm, grounded space for adults navigating anxiety, trauma,
//             burnout, perfectionism, and the pressure to keep everything
//             together.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-4">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 rounded-full bg-[#B56F5A] px-7 py-4 text-sm font-semibold transition hover:opacity-90"
//             >
//               Schedule a Consultation
//               <ArrowRight size={17} />
//             </a>

//             <a
//               href="#approach"
//               className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold transition hover:bg-white/10"
//             >
//               Explore My Approach
//             </a>
//           </div>

//           <div className="mt-12 flex gap-8 text-sm text-white/60">
//             <span>In-Person</span>
//             <span>•</span>
//             <span>Telehealth Across California</span>
//           </div>
//         </div>

//         <div className="relative hidden h-[600px] lg:block">
//           <div className="absolute inset-0 overflow-hidden rounded-[180px_180px_20px_20px]">
//             <img
//               src="/images/Dr. Maya Reynolds.png"
//               alt="Calm therapy environment"
//               className="h-full w-full object-cover"
//             />
//           </div>

//           <div className="absolute -bottom-5 -left-8 rounded-2xl bg-[#F7F3ED] p-6 text-[#26312F] shadow-xl">
//             <p className="font-serif text-2xl">A space to slow down.</p>
//             <p className="mt-1 text-sm text-[#716F68]">
//               Therapy grounded in safety and connection.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }