import React from "react";
import SearchIcon from "../assets/searchIcon.svg?react";
import FilterIcon from "../assets/filterIcon.svg?react";

export const Search = () => {
  return (
    <article className="flex mx-4 items-center gap-2 bg-input p-2 rounded-3xl overflow-hidden">
      <SearchIcon />
      <input
        className="appearance-none flex-1 bg-transparent outline-none"
        type="text"
        placeholder="Введите имя, тег, почту..."
      />
      <button>
        <FilterIcon />
      </button>
    </article>
  );
};
