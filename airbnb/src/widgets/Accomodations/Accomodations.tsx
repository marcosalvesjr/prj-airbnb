"use client";
import Accomodation from "@/components/Accomodation";
import { Accommodation } from "@/types/AirBnbDates";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type AccomodationProps = {
  accommodation:Accommodation[]
}

const Accomodations = (props:AccomodationProps) => {

  const accomodations = props.accommodation;
  
  return (
    <section className="py-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {accomodations.map((accomodation, index) => (
        <div key={index}>
          <Link href={accomodation.slug}>
            <Accomodation
              local={accomodation.location.description}
              host={accomodation.host}
              date={accomodation.date}
              price={accomodation.price}
              rating={accomodation.rating}
              hasBadge={accomodation.hasBadge}
            >
              <Image
                className="w-full aspect-square object-cover rounded-xl"
                src={accomodation.photos[0].source}
                alt={accomodation.photos[0].description}
                width={300}
                height={300}
              />
            </Accomodation>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Accomodations;
