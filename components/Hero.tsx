'use client';

import {
  ArrowRight,
  CalendarDays,
  Check,
  HeartHandshake,
  Leaf,
  ShieldCheck,
} from 'lucide-react';

const therapyOptions = [
  'Individual Therapy',
  'Anxiety & Stress',
  'Trauma Therapy',
  'Burnout & Perfectionism',
  'Panic & Overthinking',
  'Online Therapy',
];

const benefits = [
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    text: 'Therapy tailored to your unique needs and goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed Psychologist',
    text: 'Experienced professional committed to your well-being.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Confidential',
    text: 'Your privacy is our priority. A safe space to heal and grow.',
  },
  {
    icon: CalendarDays,
    title: 'Flexible Scheduling',
    text: 'Convenient appointment times, including online sessions.',
  },
  {
    icon: Leaf,
    title: 'Holistic Approach',
    text: 'Evidence-based therapies for mind, body, and emotional well-being.',
  },
];

const patientPhotos = [
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80',
  'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80',
];

export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="top"
        className="
          mx-auto grid w-full max-w-[1440px]
          grid-cols-1 items-center
          gap-10
          px-4 pb-14 pt-8
          sm:px-6 sm:pb-16 sm:pt-10
          md:px-8
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-6
          lg:px-10 lg:pb-20 lg:pt-8
          xl:px-16
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            relative z-10
            w-full max-w-xl
            lg:pr-6
            xl:pr-12
          "
        >
          {/* Location */}
          <p
            className="
              mb-4 flex items-center gap-2
              text-[10px] font-semibold uppercase
              tracking-[0.18em] text-[#647064]
              sm:mb-5 sm:text-xs
              md:text-sm
            "
          >
            Therapy in Santa Monica, California.
          </p>

          {/* Heading */}
          <h1
            className="
              max-w-[560px]
              font-serif
              text-[3.2rem]
              leading-[0.94]
              tracking-[-0.045em]
              text-[#18241b]
              min-[380px]:text-[3.6rem]
              sm:text-[4.2rem]
              md:text-[4.8rem]
              lg:text-[5.2rem]
              xl:text-[6rem]
            "
          >
            Better Mind.
            <br />
            <em className="font-normal text-[#31583f]">
              Better Life.
            </em>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-md
              text-sm
              leading-6
              text-[#5e665d]
              sm:mt-7 sm:text-base sm:leading-7
              lg:text-lg
            "
          >
            A warm, grounded space for adults navigating anxiety,
            trauma, burnout, perfectionism, and the pressure to keep
            everything together.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex flex-col
              gap-3
              min-[420px]:flex-row
              sm:mt-8
            "
          >
            <button
              type="button"
             onClick={() => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
  });
}}
              className="
                group
                flex w-full items-center justify-center
                gap-3
                rounded-md
                bg-[#31583f]
                px-5 py-3.5
                font-serif text-sm font-semibold
                text-white
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:bg-[#244c34]
                hover:shadow-lg
                min-[420px]:w-auto
              "
            >
              Book an Appointment
              <CalendarDays
                className="h-4 w-4 transition-transform group-hover:scale-110"
              />
            </button>

            <a
              href="#services"
              className="
                group
                flex w-full items-center justify-center
                gap-3
                rounded-md
                border border-[#9ba499]
                bg-transparent
                px-5 py-3.5
                font-serif text-sm font-semibold
                text-[#27362a]
                transition-colors
                hover:border-[#31583f]
                hover:bg-[#edf0e9]
                min-[420px]:w-auto
              "
            >
              Our Services
              <ArrowRight
                className="
                  h-4 w-4
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* Reviews */}
          <div className="mt-7 flex items-center gap-3 sm:mt-8">
            <div className="flex -space-x-2">
              {patientPhotos.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Patient"
                  className="
                    h-7 w-7
                    rounded-full
                    border-2 border-[#faf8f3]
                    object-cover
                    sm:h-8 sm:w-8
                  "
                />
              ))}
            </div>

            <div className="h-5 w-px bg-[#d7d3c9]" />

            <div>
              <div className="flex gap-0.5 text-sm text-[#d39f35]">
                ★★★★★
              </div>

              <p className="text-[10px] font-medium text-[#59635a] sm:text-[11px]">
                4.9 (350+ Reviews)
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="
            relative
            min-h-[420px]
            w-full
            sm:min-h-[500px]
            md:min-h-[560px]
            lg:min-h-[600px]
          "
        >
          {/* Main image */}
          <div
            className="
              absolute inset-0
              overflow-hidden
              rounded-[28%_3%_3%_28%/18%_3%_3%_18%]
              bg-[#e6e0d2]
              shadow-[0_22px_60px_rgba(39,59,40,0.14)]
              sm:rounded-[30%_3%_3%_30%/20%_3%_3%_20%]
            "
          >
            <img
              src="/images/Dr. Maya Reynolds.png"
              alt="Therapist in a calm, welcoming office"
              className="
                h-full w-full
                object-contain object-top
                transition-transform duration-700
                hover:scale-[1.03]
              "
            />
          </div>

          {/* Safe space badge */}
          <div
            className="
              absolute
              left-2 top-5
              rounded-full
              bg-[#d8b875]
              px-3 py-2
              font-serif
              text-[10px] font-semibold
              text-[#243126]
              shadow-md
              sm:left-4 sm:top-10
              sm:px-4 sm:py-2
              sm:text-xs
              md:left-[-12px]
              lg:left-[-26px]
              lg:top-16
            "
          >
            <span className="mr-1.5">●</span>
            A safe space to heal
          </div>

          {/* Therapy card */}
          <div
            className="
              absolute
              -bottom-6
              right-2
              w-[calc(100%-32px)]
              max-w-[260px]
              rounded-2xl
              border border-white/70
              bg-[#fffdf8]/95
              p-4
              shadow-xl
              backdrop-blur
              sm:bottom-3
              sm:right-[-10px]
              sm:w-[245px]
              sm:p-5
              md:right-[-15px]
            "
          >
            <p
              className="
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#6c766e]
                sm:text-[12px]
              "
            >
              Here for your journey
            </p>

            <div
              className="
                grid gap-2
                text-xs
                font-medium
                text-[#303a31]
                sm:gap-2.5
                sm:text-sm
              "
            >
              {therapyOptions.slice(0, 5).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span
                    className="
                      flex h-5 w-5 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-[#e6eee5]
                      text-[#31583f]
                    "
                  >
                    <Check className="h-3 w-3" />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section
        className="
          relative z-10
          mx-4
          rounded-2xl
          border border-[#e4e0d5]
          bg-[#fffdf9]
          shadow-[0_12px_30px_rgba(32,53,37,0.08)]
          sm:mx-6
          md:mx-8
          lg:mx-auto
          lg:max-w-[1360px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            divide-y divide-gray-200
            sm:grid-cols-2
            lg:grid-cols-5
            lg:divide-x
            lg:divide-y-0
          "
        >
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="
                flex
                items-start
                gap-4
                p-5
                sm:p-6
                lg:block
                lg:p-6
                xl:p-7
              "
            >
              {/* Icon */}
              <Icon
                className="
                  mt-0.5
                  h-8 w-8
                  shrink-0
                  text-[#31583f]
                  lg:mx-auto
                  lg:h-9 lg:w-9
                "
                strokeWidth={1.35}
              />

              {/* Text */}
              <div
                className="
                  text-left
                  lg:mt-4
                  lg:text-center
                "
              >
                <h2
                  className="
                    text-base
                    font-semibold
                    text-[#253126]
                    sm:text-lg
                  "
                >
                  {title}
                </h2>

                <p
                  className="
                    mt-1.5
                    text-sm
                    leading-5
                    text-[#6a726a]
                    sm:text-base
                  "
                >
                  {text}
                </p>
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