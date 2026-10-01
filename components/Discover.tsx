const Discover = () => {
  return (
    <section className="relative my-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="images/beach.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-[#18241b]/45" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[360px] max-w-[1440px] items-center justify-center px-6 py-20 sm:px-10">
        <div className="max-w-3xl text-center text-white">
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-[#e4d5b7]">
            A moment to pause
          </span>

          <blockquote className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.08] tracking-[-0.025em]">
            “You don’t have to have it all figured out.
            <br className="hidden sm:block" />
            You just have to take the next step.”
          </blockquote>

          <div className="mx-auto mt-7 h-px w-12 bg-[#d8b875]" />

          <p className="mt-5 text-sm tracking-wide text-white/80">
            Healing begins with giving yourself permission to slow down.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discover;