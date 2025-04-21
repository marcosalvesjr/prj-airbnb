"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ButtonIcon from "@/components/ButtonIcon";
import { IconAdjustmentsHorizontal } from "@/assets/icons";
import Link from "next/link";
import Image from "next/image";
import { Photo } from "@/types/AirBnbDates";

type HorizontalTabbedNagivationProps = {
  icons: Photo[];
};

const HorizontalTabbedNagivation = (props: HorizontalTabbedNagivationProps) => {
  const icons = props.icons;
  return (
    <div className="flex flex-row items-center">
      {/*Navegação Filtros*/}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          764: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 9 },
        }}
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={index}>
            <Link
              href={icon.url}
              className="flex flex-col items-center hover:text-red-500"
            >
              <Image
                src={icon.source}
                alt={icon.description}
                width={24}
                height={24}
              />
              <span className="text-sm">{icon.description}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*Filtros*/}
      <div>
        <ButtonIcon
          icone={
            <IconAdjustmentsHorizontal size={20} aria-label="icone de filtro" />
          }
        >
          Filtros
        </ButtonIcon>
      </div>
    </div>
  );
};

export default HorizontalTabbedNagivation;
