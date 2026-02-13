import React from "react";

function Carousel({ title, items = [] }) {
  // Fallback dummy items if none are passed
  const dummyItems = [
    { title: "Movie 1", imageUrl: "https://via.placeholder.com/150x220?text=Movie+1" },
    { title: "Movie 2", imageUrl: "https://via.placeholder.com/150x220?text=Movie+2" },
    { title: "Movie 3", imageUrl: "https://via.placeholder.com/150x220?text=Movie+3" },
    { title: "Movie 4", imageUrl: "https://via.placeholder.com/150x220?text=Movie+4" },
  ];

  const displayItems = items.length > 0 ? items : dummyItems;

  return (
    <section className="px-8 py-6">
      <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {displayItems.map((item, index) => (
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
