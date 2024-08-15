import React, { useState, useEffect } from "react";
import { Menu } from "@/src/components/MainMenu";
import { MenuLink } from "@/src/types";
import { HeaderStyle } from "./styles";

interface Props {
  menuLink?: MenuLink;
}
export const Header: React.FC<Props> = ({ menuLink }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerHideOffset = 100;

  const controlNavbar = () => {
    if (
      window.scrollY > lastScrollY &&
      window.scrollY >
        (document.getElementById("header-component")?.clientHeight ?? 0) + headerHideOffset
    ) {
      // if scroll down hide the navbar
      setShowHeader(false);
    } else {
      // if scroll up show the navbar
      setShowHeader(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  return (
    <HeaderStyle id="header-component">
      <div
        className={`${showHeader ? "navdown" : "navup"} non-print`}
        id="header-inner"
        data-testid="header-inner"
      >
        <Menu menuLink={menuLink} />
      </div>
      {/* <Container className="mx-2"></Container> */}
    </HeaderStyle>
  );
};
