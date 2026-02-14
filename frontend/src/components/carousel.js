import React from "react";

function Carousel({ title, items = [] }) {
  // Fallback dummy items if none are passed
  return (
    <section className="px-8 py-6">
      <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-40">
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

export default Carousel;
