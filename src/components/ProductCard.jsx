function RatingStars({ value = 0, size = "w-4 h-4" }) {
  const full = Math.round(value);
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 20"
      fill="currentColor"
      className={`${size} ${i < full ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`}
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  ));
  return <div className="flex items-center space-x-1 rtl:space-x-reverse">{stars}</div>;
}

export default function ProductCard({ item, onAdd }) {
  const hasDiscount = item.compareAt && item.compareAt > item.price;

  return (
    <div className="w-full max-w-sm bg-[#f7f7f7] border border-gray-200 rounded-lg shadow-sm">
      <a href="#" className="block">
        <img
          className="p-6 rounded-t-lg mx-auto object-contain h-48"
          src={item.image}
          alt={item.name}
        />
      </a>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-base md:text-lg font-semibold tracking-tight text-gray-900 line-clamp-2">
            {item.name}
          </h5>
        </a>

        <div className="flex items-center mt-2.5 mb-4">
          <RatingStars value={item.rating ?? 5} />
          <span className="bg-[#c6a179] text-white text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
            {(item.rating ?? 5).toFixed(1)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">
              Rp {item.price.toLocaleString("id-ID")}
            </span>
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through">
                Rp {item.compareAt.toLocaleString("id-ID")}
              </span>
            )}
          </div>

          <button
            onClick={() => onAdd?.(item)}
            className="text-white bg-[#c6a179] focus:ring-4 focus:outline-none
                       focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}