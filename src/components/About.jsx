import aboutImg from "../assets/coffee-about.jpg";
import latteBadge from "../assets/latte-badge.png";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#f9f3ee]">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-neutral-900">
              BIG OR SMALL, LET'S<br /> COFFEE TRIP!
            </h2>

            <div className="mt-6">
              <p className="text-sm tracking-widest text-amber-700 font-semibold">
                ROASTING EVENTS
              </p>
              <p className="mt-2 text-neutral-600 max-w-xl">
                Event kopi favorit kami hadir tiap bulan. Mulai dari sesi cupping kecil
                hingga kelas roasting singkat. Nikmati perjalanan rasa kopi: origin, proses,
                hingga profiling. Durasi ±90 menit di brewbar kami—booking dulu ya!
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-[#c6a179] px-5 py-2.5 text-white hover:text-black font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={aboutImg}
              alt="Menuang latte"
              className="w-full rounded-2xl object-cover shadow-md"
            />

            <img
              src={latteBadge}
              alt="Latte art"
              className="hidden md:block absolute -left-6 -top-6 w-20 h-20 rounded-full ring-4 ring-white shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/[0.02] to-transparent" />
    </section>
  );
}