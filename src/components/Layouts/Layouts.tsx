import React, { useContext } from "react";
import { Header } from "@/src/components/Header";
import MenuLinks from "@/src/data/navigation.json";
import { MenuLink } from "@/src/types";
import { Container } from "react-bootstrap";
import { Footer } from "@/src/components/Footer";
import { LayoutStyle } from "./style";
import { SiteTheme, SiteStyle } from "@/src/styles/siteTheme";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Banner } from "@/src/components/Banner";
import { BannerType } from "@/src/types";
import { CrispChat } from "@/src/components/Crisp";

interface Props {
  menuLink?: MenuLink;
  banner?: BannerType;
  children?: React.ReactNode;
}

export const Layouts: React.FC<Props> = ({ banner, menuLink, children }) => {
  return (
    <ThemeProvider theme={SiteTheme}>
      <SiteStyle />
      <LayoutStyle>
        <ScrollToTop />
        <Header menuLink={menuLink} />
        {banner && <Banner banner={banner} />}
        <Container className="container-content">{children}</Container>
        <CrispChat />
        <Footer />
      </LayoutStyle>
    </ThemeProvider>
  );
};

const defaultProps: Props = {
  menuLink: MenuLinks,
};

Layouts.defaultProps = defaultProps;
