import React from "react";

const Card = ({ elem }) => {
  return (
    <a
      href={elem.url}
      target="_blank"
      className="group block w-[260px] rounded-2xl overflow-hidden bg-neutral-900/80 
                 ring-1 ring-white/10 backdrop-blur 
                 hover:scale-[1.03] transition-all duration-300 
                 shadow-lg hover:shadow-amber-400/30"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={elem.download_url}
          alt={elem.author}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      <div className="p-3">
        <h2 className="font-semibold text-sm text-gray-100 truncate">
          {elem.author}
        </h2>
        <p className="text-xs text-gray-400 mt-1">View full image →</p>
      </div>
    </a>
  );
};

export default Card;
