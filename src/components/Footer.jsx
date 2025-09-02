export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="text-xl font-extrabold">Cofku</div>
          <p className="mt-2 text-sm text-neutral-600 max-w-md">
            Kopi lokal, rasa nasional. Kami bekerja sama dengan petani untuk menghadirkan
            kopi segar berkualitas. Minum kopi, dukung UMKM.
          </p>
        </div>
        <div className="md:text-right text-sm text-neutral-500">
          © {new Date().getFullYear()} Cofku. All rights reserved.
        </div>
      </div>
    </footer>
  );
}