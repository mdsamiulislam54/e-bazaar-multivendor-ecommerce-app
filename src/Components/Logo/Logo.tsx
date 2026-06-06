import React from "react";

interface LogoProps {
  logoColor?: "black" | "white" | "primary";
}

const Logo: React.FC<LogoProps> = ({ logoColor = "black" }) => {
  const colorMap = {
    black: "text-black dark:text-white",
    white: "text-white",
    primary: "text-primary",
  };

  return (
    <div className="flex items-center gap-2 select-none">
      
      {/* ICON */}
      <div className="relative">
        <div className="w-8 h-8 rounded-lg bg-black dark:bg-white rotate-45" />
        <span className="absolute inset-0 flex items-center justify-center text-white dark:text-black font-bold text-sm">
          E
        </span>
      </div>

      {/* TEXT */}
      <h2 className={`font-extrabold tracking-wide text-xl ${colorMap[logoColor]}`}>
        <span className="text-2xl">E</span>-bazaar
      </h2>

    </div>
  );
};

export default Logo;