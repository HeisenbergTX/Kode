import React from "react";

export const PanelFilter = () => {
  return (
    <article className="flex gap-4 px-4 mt-4 pb-2 text-color overflow-auto scrollbar-hide border-b border-[#C3C3C6]">
      <button>Все</button>
      <button>Designer</button>
      <button>Analysts</button>
      <button>Managers</button>
      <button>iOS</button>
      <button>Android</button>
    </article>
  );
};
