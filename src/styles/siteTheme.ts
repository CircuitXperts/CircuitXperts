import { createGlobalStyle } from "styled-components";
import {
  BarlowRegular,
  BarlowBold,
  BarlowMedium,
  BarlowItalic,
  BarlowItalicBold,
  BarlowSemiBold,
  BarlowExtraLight,
} from "@/src/styles/fonts";

export const SiteTheme = {
  size: {
    xs: "0",
    sm: "576px",
    md: "768px",
    lg: "992px",
    lgx: "1024px",
    xl: "1200px",
    xll: "1280px",
    xxl: "1400px",
  },

  device: {
    xs: `(min-width: 0)`,
    xsmax: `(max-width: 400px)`,
    sm: `(min-width: 576px)`,
    smmin: `(min-width: 414px)`,
    smmax: `(max-width: 576px)`,
    md: `(min-width: 768px)`,
    mdmax: `(max-width: 991px)`,
    mdminmax: `(min-width: 768px) and (max-width: 991px)`,
    lg: `(min-width: 992px)`,
    lgx: `(min-width: 1024px)`,
    lgmax: `(min-width: 992px) and (max-width: 1100px)`,
    lgminmax: `(min-width: 1140px) and (max-width: 1365px)`,
    xl: `(min-width: 1200px)`,
    xll: `(min-width: 1275px)`,
    xxl: `(min-width: 1400px)`,
  },

  color: {
    white: "#fff",
    black: "#000",
    bodyColor: "#232323",
    deepBlue: "#243746",
    red: "#eb3300",
    navyBlue: "#253746",
    link: "#283ac3",
    ash: "#ebebeb",
    blue: "#003479",
    backBlue: "#1c75bb33",
    lightBlue: "#1c75bb",
    lightViolet: "#374ba7",
    darkViolet: "#191929",
    lightGreen: "#24c0a3",
    lightergreen: "#5ac7a5",
    lightOrange6B: "#e46c6b",
    lightOrange67: "#f66267",
    grey: "#b3b2b2",
    lightred: "#cd3d51",
    darkblue: "#3b4dbc",
    green: "#FC6850",
    darkgrey: "#3c3c3c",
    darkred: "#dc545c",
    limegreen: "#429b82",
    darkerblue: "#061536",
    darkestblue: "#0A2751",
    blueshade: "#2662a5",
    blueshadedark: "#0f315f",
    blueheading: "#293fbc",
    blueborder: "#3a4da0;",
    yellow: "#fafa3d",
    blackblue: "#030e22",
    backBlue172: "#172b4d",
    bgblue: "#051531",
    lighterred: "#ef6e6a",
    lightestred: "#ef6c6a",
    lightyellow: "#f3eb44",
    softyellow: "#f2d952",
    softeryellow: "#f5e184",
    softred: "#ef7e6b",
    darkerred: "#c4304a",
    darkpink: "#b72b44",
    redcolor: "#d15250",
    lighteryellow: "#f9f93d",
    aqua: "#5ec1a3",
    borderline: "rgba(3, 14, 34, 0)",
    graybackground: "rgba(0, 0, 0, .4)",
    graybgbackground: "rgba(0, 0, 0, .2)",
    graydarkbgbackground: "rgba(0, 0, 0, .5)",
    bluebackground: "rgba(59, 77, 188, .1)",
    greenbackground: "rgba(95, 194, 163, .1)",
    blackbackground: "rgba(0,0,0,.1)",
    blackdarkbackground: "rgba(0,0,0,0.075)",
    peach: "#f06e68",
    borderGray: "#7c7c7c",
    bluetitle: "#2e3eb5",
    bluecolor: "#1b3361",
    bluecolordark: "#192134",
    bluecolorlight: "#2349a5",
    greybackground: "#e3e3e3",
    redborder: "#ef6b6a",
    graybg: "#f7f7f7",
    brightwhite: "#e6e9f5",
    swipegray: "#707070",
    borderlinegray: "#b7b7b7",
    skyblue: "#d5daef",
    redform: "#f26447",
    brightred: "#ccc",
    lightblue: "#66afe9",
    orange: "#FC6850",
  },

  font: {
    barlowRegular: BarlowRegular.style.fontFamily,
    barlowExtraLight: BarlowExtraLight.style.fontFamily,
    barlowBold: BarlowBold.style.fontFamily,
    barlowMedium: BarlowMedium.style.fontFamily,
    barlowItalic: BarlowItalic.style.fontFamily,
    barlowItalicBold: BarlowItalicBold.style.fontFamily,
    barlowSemiBold: BarlowSemiBold.style.fontFamily,
  },
};

export const SiteStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${BarlowRegular.style.fontFamily};
    font-size: 16px;

    @media ${SiteTheme.device.lg} {
      /* font-size: 18px; */
    }

    a {
      color: ${SiteTheme.color.link};
      text-decoration: none;
    }

    .sticky {
      z-index: 999!important;
    }
  }

  .container-fluid {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  * {
    box-sizing: border-box;
  }

  .img-responsive {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .container h1 {
    margin-top: 25px;
    text-align: center;
  }

  sup {
    top: -0.25em;
  }

  .nowrap {
    white-space: nowrap;
  }

  .gradient-text {
    color: ${(props) => props.theme.color.blue};
    font-size: 30px;
    font-family: ${(props) => props.theme.font.barlowBold};

    @media ${SiteTheme.device.lg} { 
        font-size: 40px;
    }
  }

    .text-orange {
      color: ${(props) => props.theme.color.orange};
      border-bottom: 4px solid;
      font-family: ${(props) => props.theme.font.barlowBold};
      font-size: 24px;

      @media ${SiteTheme.device.lg} { 
        font-size: 32px;
      }
    }

    .text-size {
      font-size: 20px;

      @media ${SiteTheme.device.lg} { 
        font-size: 24px;
      }
    }

    .site-container {
      max-width: 1216px;
      margin: auto;

      @media (max-width: 1250px) {
        padding: 0 16px;
    }
  }
`;
