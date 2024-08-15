import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Logo } from "@/src/components/Logo";
import { UtilityMenu } from "@/src/components/UtilityMenu";
import { MenuLink } from "@/src/types";
import Link from "next/link";
import { MenuStyle } from "./styles";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

interface Props {
  menuLink?: MenuLink;
}

export const Menu: React.FC<Props> = ({ menuLink }) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleMenuClick = () => {
    setHoveredItem(null);
  };
  const handleOnClick = () => {
    if (showNavbar) setShowNavbar(false);
  };
  const handleDropdownClick = (index: number) => {
    if (hoveredItem === index) {
      handleMouseLeave();
    } else {
      handleMouseEnter(index);
    }
  };

  useEffect(() => {
    handleMenuClick();
    handleOnClick();
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MenuStyle>
      <Container className={`koro-header non-print ${isFixed ? "fixed" : ""}`}>
        <Navbar
          expanded={expanded}
          expand="lg"
          className="main-menu"
          style={{
            display: "flex",
            justifyContent: "left",
            flexWrap: "nowrap",
            width: "100%",
            boxShadow: "0 1px 4px 1px rgba(0,0,0,.1)",
          }}
        >
          <div className="d-lg-none techcare">
            <Link className="utility-nav-link" href="/" target="_self">
              <em>For Professionals</em>
            </Link>
          </div>
          <div className="top-utility-menu d-none d-lg-block">
            <UtilityMenu menuLink={menuLink} />
          </div>
          <div id="header-navigation" className="header-navigation">
            <div className="header-logo" onClick={() => setExpanded(false)}>
              <Logo />
            </div>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              onClick={() => setExpanded(!expanded)}
              data-testid="hamburger-btn"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll" className="navigation-menu">
              <div className="navigation-menu-inner">
                <div>
                  <Nav
                    className="mx-auto my-2 my-lg-0 justify-content-center align-items-center"
                    as="ul"
                    navbarScroll
                  >
                    <li className="nav-item">
                      <Link
                        href="/"
                        className="d-lg-none nav-item"
                        onClick={() => setExpanded(false)}
                      >
                        Home
                      </Link>
                    </li>
                    {menuLink?.mainNav?.links.map((item, index) => {
                      return item.subMenu ? (
                        <NavDropdown
                          key={index}
                          title={
                            <span
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                          }
                          id={`navbar-mainnav-dropdown-${index}`}
                          show={hoveredItem === index}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave()}
                          onClick={() => {
                            isMobile && handleDropdownClick(index);
                          }}
                          className={`${item.class ? item.class : ""}${
                            item.subMenu.some(
                              (subItem) => subItem.href === router.pathname
                            )
                              ? "active"
                              : ""
                          }`}
                        >
                          {item.subMenu.map((link, subIndex) => {
                            return (
                              <NavDropdown.Item
                                as={Link}
                                href={link.href}
                                key={subIndex}
                                className={
                                  router.pathname === link.href ? "active" : ""
                                }
                                onClick={() => {
                                  handleOnClick();
                                  handleMenuClick();
                                }}
                              >
                                {link.title}
                              </NavDropdown.Item>
                            );
                          })}
                        </NavDropdown>
                      ) : (
                        <Nav.Item
                          as="li"
                          key={index}
                          className={item.class || ""}
                          onClick={() => setExpanded(false)}
                        >
                          <Link
                            href={item.href}
                            className={
                              router.pathname === item.href ? "active" : ""
                            }
                          >
                            {item.title}
                          </Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </div>
                <div className="d-lg-none mobile-utility-menu">
                  <ul>
                    {menuLink?.topUtilityNav?.links.map((item, i) => (
                      <li key={i}>
                        <Link
                          className="utility-nav-link"
                          href={item.href}
                          target={item.target}
                          dangerouslySetInnerHTML={{ __html: item.title }}
                          data-testid={i}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Container>
    </MenuStyle>
  );
};
