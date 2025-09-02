import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="products" className="w-full px-6 py-28">
        {/* Judul */}
        <div className="w-full mb-12">
          <h2 className="text-4xl font-bold text-center">Produk Kami</h2>
        </div>

        {/* Grid produk */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onAdd={(i) => alert(`Ditambahkan: ${i.name}`)}
            />
          ))}
        </div>
      </section>

      <About />
    </>
  );
}
