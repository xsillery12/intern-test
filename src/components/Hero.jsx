import HeroImg from "../assets/Hero.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-white w-full">
      <div className="w-full px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="absolute inset-0">
          <img
            src={HeroImg}
            alt="Kopi"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-4 text-xs tracking-widest text-amber-300 uppercase">
              Discover the perfect cup
            </p>
            <h1 className="text-4xl md:text-6xl text-white font-extrabold leading-tight">
              Perfect Coffee
            </h1>
            <p className="mt-4 max-w-xl text-neutral-200">
              Kami bekerja sama dengan petani untuk menghadirkan kopi segar berkualitas. Minum kopi, dukung UMKM.
            </p>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-[#c6a179] px-6 py-3 mt-8 font-semibold text-white hover:text-black transition"
            >
              Explore Now
            </a>
          </div>

          {/* Jika mau gambar fokus cangkir terpisah, bisa taruh di sini */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
