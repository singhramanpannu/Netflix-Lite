import React from "react";

function Billboard({ movie }) {
  return (
    <div
      className="relative h-[100vh] w-full text-white flex items-center justify-start px-8"
      style={{
        backgroundImage: `url(${movie?.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-5xl font-extrabold mb-4">{movie?.title}</h1>
        <p className="text-lg mb-6 line-clamp-3">{movie?.overview}</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition">
            ▶ Play
          </button>
          <button className="bg-gray-700 bg-opacity-70 px-6 py-2 rounded font-semibold hover:bg-gray-600 transition">
            + My List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
