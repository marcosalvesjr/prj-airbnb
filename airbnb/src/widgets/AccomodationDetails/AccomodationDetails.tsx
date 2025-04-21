import React from "react";
import {
  IconPhoto,
  IconToolsKitchen2,
  IconDesk,
  IconPool,
  IconBrandCarbon,
  IconSailboat,
  IconWifi,
  IconParking,
  IconAlarmSmoke,
  IconDog,
} from "@/assets/icons";
import { Accommodation } from "@/types/AirBnbDates";

type AccomodationDetailsProps = {
  accommodation: Accommodation;
};

const AccomodationDetails = (props: AccomodationDetailsProps) => {
  const accommodation = props.accommodation;
  return (
    <div className="w-full py-4">
      <h2 className="pt-4 text-xl font-semibold">
        {accommodation.location.description}
      </h2>
      <ul className="flex gap-y-2 items-center">
        <li>10 hospodes</li>
        <li>&middot;</li>
        <li>5 quartos</li>
        <li>&middot;</li>
        <li>5 camas</li>
        <li>&middot;</li>
        <li>6 banheiros</li>
      </ul>

      <h2 className="py-4 text-xl font-semibold">O que esse lugar oferece?</h2>
      <ul className="py-4 grid grid-cols-2 gap-4 w-full">
        <li className="flex gap-2">
          <IconPhoto />
          <span>Vista apra as montanhas</span>
        </li>
        <li className="flex gap-2">
          <IconDesk />
          <span>Espaço de trabalho exclusivo</span>
        </li>
        <li className="flex gap-2">
          <IconBrandCarbon />
          <span>Alarme de segurança</span>
        </li>
        <li className="flex gap-2">
          <IconWifi />
          <span>Wi-Fi rápido (83Mbps)</span>
        </li>
        <li className="flex gap-2">
          <IconDog />
          <span>Permitido animais</span>
        </li>
        <li className="flex gap-2">
          <IconToolsKitchen2 />
          <span>Cozinha</span>
        </li>
        <li className="flex gap-2">
          <IconPool />
          <span>Piscina privativa</span>
        </li>
        <li className="flex gap-2">
          <IconSailboat />
          <span>Vista para as águas</span>
        </li>
        <li className="flex gap-2">
          <IconParking />
          <span>Estacionamento incluído</span>
        </li>
        <li className="flex gap-2">
          <IconAlarmSmoke />
          <span>Detector de fumaça</span>
        </li>
      </ul>
    </div>
  );
};

export default AccomodationDetails;
