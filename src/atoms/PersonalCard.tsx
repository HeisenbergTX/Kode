import React from "react";
import { IPerson } from "../types/interfaces";

export const PersonalCard = ({
  avatar,
  firstName,
  secondName,
  specialty,
}: IPerson) => {
  console.log(firstName);

  return (
    <article className="grid grid-rows-2 grid-flow-col justify-start my-5">
      <img className="row-span-3 mr-4" src={avatar} alt="Упс..." />
      <p className="mt-3 font-semibold ">
        {firstName} {secondName}
      </p>
      <p className="text-s">{specialty}</p>
    </article>
  );
};
