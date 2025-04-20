import React from "react";
import { IconHeartFilled, IconStarFilled } from "@/assets/icons";

type AccomodationProps = {
  children: React.ReactNode;
  local: string;
  host: string;
  date: string;
  price: number;
  rating: number;
  hasBadge: boolean;
};

const Accomodation = ({
  children,
  local,
  host,
  date,
  price,
  rating,
  hasBadge,
}: AccomodationProps) => {
  return (
    <figure className="relative">
      <div className="absolute w-full p-2 flex flex-row justify-between items-center">
        <div>
          {hasBadge && (
            <span className="bg-white py-1 px-2 rounded-full font-semibold">
              Preferido do hóspedes
            </span>
          )}
        </div>
        <IconHeartFilled
          className="stroke-white opacity-80"
          aria-label="Favorito"
          size={20}
        />
      </div>
      {children}
      <figcaption className="pt-2">
        <div className="flex flex-row justify-between">
          <span className="font-semibold">{local}</span>
          <div className="flex gap-1">
            <IconStarFilled size={20} aria-label="Avaliações" />
            <span className="font-semibold">{rating}</span>
          </div>
        </div>
        <div>Anfitriã(o): {host}</div>
        <div>{date}</div>
        <div className="font-semibold">R$ {price}</div>
      </figcaption>
    </figure>
  );
};

export default Accomodation;
