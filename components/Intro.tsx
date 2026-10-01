// const Intro = () =>{
//     return(
//         <section>
//             <h1>hero section</h1>
//         </section>
//     );
// };
// export default Intro;
export default function Intro() {
  return (
    <section className="bg-[#FFFF] px-4 py-12 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-lg font-semibold uppercase tracking-[0.2em] text-[#31583f]">
          You don't have to keep pushing through
        </p>

        <h2 className="mt-5 text-4xl leading-tight text-[#000000c7] sm:text-5xl lg:text-6xl">
          You can look like you have it all together and still feel
          overwhelmed inside.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#716F68]">
          Many of the adults I work with are thoughtful, capable, and
          high-achieving. Yet beneath the surface, they may be exhausted,
          caught in overthinking, struggling to sleep, or constantly bracing
          for something to go wrong.
        </p>
      </div>
    </section>
  );
}