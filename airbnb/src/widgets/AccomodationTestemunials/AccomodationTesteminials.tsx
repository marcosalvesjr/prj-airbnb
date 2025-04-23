import React from "react";
import { IconStarFilled } from "@/assets/icons";
import Image from "next/image";
import { Testimonials } from "@/types/AirBnbDates";

type AccomodationTesteminialsProps = {
 testimonials: Testimonials[];
};

const AccomodationTestemunials = (props:AccomodationTesteminialsProps) => {
  const testemunials = props.testimonials;

  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-semibold">Depoimentos</h2>
      <div className="flex gap-1.5 items-center">
        <IconStarFilled className="size-4" />
        <span>4.9 (+400 avaliações)</span>
      </div>
      {testemunials.map((testemunial, index) => (
        <div key={index} className="flex gap-4 items-start py-4">
          <Image
            className="aspect-square object-cover rounded-full"
            src={testemunial.image}
            alt={testemunial.name}
            width={48}
            height={48}
          />
          <div>
            <h4 className="font-semibold">{testemunial.name}</h4>
            <span>{testemunial.comment}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccomodationTestemunials;
