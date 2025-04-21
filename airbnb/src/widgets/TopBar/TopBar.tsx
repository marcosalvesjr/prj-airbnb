//components
import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import ButtonIcon from "@/components/ButtonIcon";
import { IconUserCircle } from "@/assets/icons";

const TopBar = () => {
  return (
    <div className="py-6 flex justify-between items-center">
      <Logo />
      <div className="flex gap-6">
        <Link href={"/"}>Acomodações</Link>
        <Link className="text-gray-400" href={"#"}>
          Experiência
        </Link>
      </div>
      <ButtonIcon
        icone={<IconUserCircle aria-label="Ícone de usuário" size={20} />}
      >
        Entrar
      </ButtonIcon>
    </div>
  );
};

export default TopBar;
