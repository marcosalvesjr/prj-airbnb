import Link from "next/link";
import React from "react";

const FooterWidget = () => {
  return (
    <div className="container mx-auto py-5">
      <span className="text-lg font-semibold pb-4">&copy; AirBnb INC</span>
      <ul className="flex gap-2">
        <li className="hover:text-red-500">
          <Link href={"/"}>Privacidade</Link>
        </li>
        <li>&middot;</li>
        <li className="hover:text-red-500">
          <Link href={"/"}>Termos</Link>
        </li>
        <li>&middot;</li>
        <li className="hover:text-red-500">
          <Link href={"/"}>Mapa do site</Link>
        </li>
        <li>&middot;</li>
        <li className="hover:text-red-500">
          <Link href={"/"}>Informações</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterWidget;
