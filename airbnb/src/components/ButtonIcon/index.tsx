import React from "react";

type ButtonIconProps = {
  icone: React.ReactNode;
  children: React.ReactNode;
};

const index = ({ icone, children }: ButtonIconProps) => {
  return (
    <>
      <button className="cursor-pointer border-1 rounded-lg py-1 px-2 flex items-center hover:border-gray-400 gap-2">
        <span>{icone}</span>
        <span>{children}</span>
      </button>
    </>
  );
};

export default index;
