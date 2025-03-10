import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  default as darkLogo,
  default as lightLogo,
} from "@/app/assets/equinox.svg";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const lightSelected = resolvedTheme === "light";

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // uses placeholder of babylon logo with primary color
  // since before theme is resolved, we don't know which logo to show
  if (!mounted) {
    return <div className="h-[40px] w-[159px]" />;
  }
  const style = {
    height: "40px",
    width: "50px",
  };
  const style2 = {
    marginTop: "10px",
    marginLeft: "10px",
  };
  return (
    <div className="flex">
      <a
        href="https://equinoxdao.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="flex"
      >
        <Image
          src={lightSelected ? darkLogo : lightLogo}
          alt="EquinoxDao"
          style={style}
        />
        <span style={style2}>EquinoxDao</span>
      </a>
    </div>
  );
};
