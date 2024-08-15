import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { MenuLink } from "@/src/types";
import Link from "next/link";
import { UtilityMenuStyle } from "./styles";
import { useRouter } from "next/router";

interface Props {
  menuLink?: MenuLink;
}

export const UtilityMenu: React.FC<Props> = ({ menuLink }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <UtilityMenuStyle>
      <Navbar className="top-nav-bar utility-menu-bar">
        <Nav
          className="mx-auto my-2 my-lg-0 justify-content-center align-items-center"
          as="ul"
          style={{ maxHeight: "100px" }}
        >
          <li className="healthcare">
            <em>For Professionals</em>
          </li>
          {menuLink?.topUtilityNav?.links.map((item, i) => (
            <li key={i}>
              <Link
                className="utility-nav-link"
                href={item.href}
                target={item.target}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </li>
          ))}
        </Nav>
      </Navbar>
    </UtilityMenuStyle>
  );
};
