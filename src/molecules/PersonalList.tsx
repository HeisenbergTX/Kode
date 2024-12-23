import React from "react";
import GAGAGA from "../assets/GAGAGA.svg";
import { PersonalCard } from "../atoms/PersonalCard";
import { IPerson } from "../types/interfaces";

export const PersonalList = () => {
  const dataPers: IPerson[] = [
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
    {
      avatar: GAGAGA,
      firstName: "Алексей",
      secondName: "Миногаров",
      specialty: "Analyst",
    },
  ];

  return (
    <article className="mx-4">
      {dataPers.map((pers) => {
        return (
          <div key={dataPers.indexOf(pers)}>
            <PersonalCard
              avatar={pers?.avatar}
              firstName={pers?.firstName}
              secondName={pers?.secondName}
              specialty={pers?.specialty}
            />
          </div>
        );
      })}
    </article>
  );
};
