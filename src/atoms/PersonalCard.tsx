import React, { useEffect, useState } from "react";
import { IPerson } from "../types/interfaces";
import axios from "axios";

export const PersonalCard = () => {
  const [state, setState] = useState<IPerson[]>([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/api/employee";
    axios.get(apiUrl).then((resp) => {
      const data = resp.data;
      setState(data);
    });
  }, [setState]);

  return (
    <article>
      {state?.map((pers: IPerson) => {
        return (
          <div
            key={pers.id}
            className="grid grid-rows-2 grid-flow-col justify-start my-5"
          >
            <img
              className="row-span-3 mr-4 w-18 rounded-full"
              src={pers.avatarurl}
              alt="Упс..."
            />
            <p className="mt-3 font-semibold ">
              {pers.firstname + " " + pers.lastname}
            </p>
            <p className="text-s">{pers.position}</p>
          </div>
        );
      })}
    </article>
  );
};
