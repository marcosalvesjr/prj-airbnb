import Link from "next/link";
import React from "react";

const FooterWidget = () => {
  return (
    <div className="container mx-auto py-5 flex justify-between items-center">
      <div>
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
          <li>&middot;</li>
        </ul>
      </div>

      <div className="text-sm">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://github.com/marcosalvesjr"
            className="hover:text-red-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marcos Alves
          </a>
          <a
            href="https://github.com/marcosalvesjr"
            className="flex
          gap-1.5 items-center hover:text-red-500"
          >
            
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterWidget;
