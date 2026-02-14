import React from "react";

function Top10Carousel({ title, items = [] }) {
  // Fallback dummy items if none are passed

  return (
    <section className="px-8 py-6">
      <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
        {items.map((item, index) => (
          <div key={index} className="relative flex-shrink-0 w-48">
            {/* Number badge */}
            <div className="absolute -left-6 top-2 text-6xl font-extrabold text-gray-800 opacity-80">
              {index + 1}
            </div>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="rounded hover:scale-105 transition-transform duration-200"
            />
            <p className="text-gray-300 text-sm mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Top10Carousel;
