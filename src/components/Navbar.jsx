import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // ubah threshold sesuai kebutuhan
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-30 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-white border-b border-neutral-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className={`font-extrabold tracking-tight text-2xl hover:text-[#c6a179] ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Cofku
        </a>

        {/* Menu */}
        <nav
          className={`hidden md:flex items-center gap-6 text-md ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <a href="#" className="text-inherit hover:text-[#c6a179]">
            Home
          </a>
          <a href="#products" className="text-inherit hover:text-[#c6a179]">
            Product
          </a>
          <a href="#about" className="text-inherit hover:text-[#c6a179]">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
