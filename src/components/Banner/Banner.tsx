import React from "react";
import Image from "next/image";
import { BannerType } from "@/src/types/Banner";
import { BannerStyle } from "./styles";

interface CustomBanner {
  banner: BannerType;
}

export const Banner: React.FC<CustomBanner> = ({ banner }) => {
  const { DImage, MbImage, bannerTitle, text, subtext } = banner;
  const parseHTML = (htmlString: string) => {
    return React.createElement("div", {
      dangerouslySetInnerHTML: { __html: htmlString },
    });
  };
  return (
    <BannerStyle>
      <div className="banner-wrapper">
        <div className="banner-grad">
          <p className="banner-gradient"></p>
        </div>
        <div className="banner-Image">
          <Image
            src={DImage}
            alt="Home Hero Desktop Image"
            className="banner-img desktop-img d-none d-lg-block"
          />
          <Image
            src={MbImage}
            alt="Home Hero Desktop Image"
            className="banner-img mobile-img d-lg-none"
          />
        </div>
        <div className="banner-text">
          <div className="banner-wrap">
            <div className="title-container">
              {bannerTitle && (
                <h5 className="title-text">{parseHTML(bannerTitle)}</h5>
              )}
            </div>
            <div className="banner-content">
              {text && <h1 className="main-text">{parseHTML(text)}</h1>}
            </div>
          </div>
        </div>
      </div>
    </BannerStyle>
  );
};
