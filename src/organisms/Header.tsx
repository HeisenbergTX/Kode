import React from "react";
import { Search } from "../atoms/Search";
import { PanelFilter } from "../atoms/PanelFilter";

export const Header = () => {
  return (
    <section>
      <Search />
      <PanelFilter />
    </section>
  );
};
