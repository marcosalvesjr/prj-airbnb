//components
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="container mx-auto py-6 flex justify-between items-center">
      <Logo />
      <div className="flex gap-6">
        <Link href={"/"}>Acomodações</Link>
        <Link href={"#"}>Experiência</Link>
      </div>
      <button className="cursor-pointer border-1 rounded-md py-1 px-2">
        Entrar
      </button>
    </div>
  );
};

export default TopBar;
