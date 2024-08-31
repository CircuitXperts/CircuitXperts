import React from "react";
import Image from "next/image";
import { BannerType } from "@/src/types/Banner";
import { BannerStyle } from "./styles";
interface CustomBanner {
  banner: BannerType;
}

export const Banner: React.FC<CustomBanner> = ({ banner }) => {
  const { DImage, MbImage, bannerTitle, text1, text2 } = banner;
  const parseHTML = (htmlString: string) => {
    return React.createElement("div", {
      dangerouslySetInnerHTML: { __html: htmlString },
    });
  };
  return (
    <BannerStyle>
      <div className="banner-wrapper">
        <div className="banner-img">
          <Image
            src={DImage}
            alt="Home Hero Desktop Image"
            className="banner-img desktop-img d-none d-lg-block"
          />
          <Image
            src={MbImage}
            alt="Home Hero Mobile Image"
            className="banner-img mobile-img d-lg-none"
          />
        </div>
        <div className="heading-wrap position-absolute w-100">
          <div className="site-container">
            <p className="heading">{bannerTitle}</p>
          </div>
        </div>
        <div className="banner-text">
          <div className="banner-wrap">
            <div className="banner-content">
              {text1 && <div className="banner-text1">{parseHTML(text1)}</div>}
              {text2 && <h1 className="banner-text2">{parseHTML(text2)}</h1>}
            </div>
          </div>
        </div>
      </div>
    </BannerStyle>
  );
};
