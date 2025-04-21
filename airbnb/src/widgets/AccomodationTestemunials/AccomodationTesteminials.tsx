import React from "react";
import { IconStarFilled } from "@/assets/icons";
import Image from "next/image";

const AccomodationTestemunials = () => {
  const testemunials = [
    {
      id: "560b7417-4280-4afc-ae1d-9159934fde2a",
      name: "Eufrásio",
      image:
        "https://web.codans.com.br/airbnb/img/feedback/560b7417-4280-4afc-ae1d-9159934fde2a.jpg",
      comment: "Bacon ipsum dolor amet tenderloin swine t-bone flank.",
      rating: 5,
      customerTime: 5,
      createdAt: 7,
      stayedAt: 2,
    },
    {
      id: "63901507-1bf2-4e49-8798-eeaf2f4fc0a1",
      name: "Raquélen",
      image:
        "https://web.codans.com.br/airbnb/img/feedback/63901507-1bf2-4e49-8798-eeaf2f4fc0a1.jpg",
      comment:
        "Bacon ipsum dolor amet tenderloin pastrami brisket bresaola, ham burgdoggen chicken shankle swine strip steak venison frankfurter.",
      rating: 5,
      customerTime: 2,
      createdAt: 7,
      stayedAt: 8,
    },
    {
      id: "df3745f0-175e-4831-9ac7-b94ae7e76c1f",
      name: "Cristina",
      image:
        "https://web.codans.com.br/airbnb/img/feedback/df3745f0-175e-4831-9ac7-b94ae7e76c1f.jpg",
      comment:
        "Bacon ipsum dolor amet strip steak pork belly spare ribs, bacon tenderloin sausage cow.",
      rating: 3.5,
      customerTime: 4,
      createdAt: 5,
      stayedAt: 2,
    },
  ];

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
