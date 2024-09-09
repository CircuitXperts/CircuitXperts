import React from "react";
import LogoImage from "/public/images/circuit-xperts-logo.svg";
import Image from "next/image";
import { LogoStyle } from "./styles";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <LogoStyle>
      <Link href="/" className="navbar-brand flex items-center">
        <Image
          src={LogoImage}
          width={500}
          height={186}
          alt="Logo"
          className="site-logo"
        />
      </Link>
    </LogoStyle>
  );
};
