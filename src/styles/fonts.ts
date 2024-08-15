// import localFont from "next/font/local";

// const RobotoBold = localFont({
//     src: [
//     {
//     path: "./fonts/Roboto/Roboto-Bold.ttf",
//     weight: "700",
//     style: "normal",
//     },
//     ],
// });

// const RobotoBoldItalic = localFont({
//     src: [
//     {
//     path: "./fonts/Roboto/Roboto-BoldItalic.ttf",
//     weight: "700",
//     style: "normal",
//     },
//     ],
// });

// const RobotoItalic = localFont({
//     src: [
//     {
//     path: "./fonts/Roboto/Roboto-Italic.ttf",
//     weight: "400",
//     style: "normal",
//     },
//     ],
// });

// const RobotoMedium = localFont({
//     src: [
//     {
//     path: "./fonts/Roboto/Roboto-Medium.ttf",
//     weight: "500",
//     style: "normal",
//     },
//     ],
// });

// const RobotoMediumItalic = localFont({
//     src: [
//     {
//     path: "./fonts/Roboto/Roboto-MediumItalic.ttf",
//     weight: "500",
//     style: "normal",
//     },
//     ],
// });

// const RobotoRegular = localFont({
//     src: [
//     {
//     path: "./fonts/Roboto/Roboto-Regular.ttf",
//     weight: "400",
//     style: "normal",
//     },
//     ],
// });

// export {
//     RobotoRegular,
//     RobotoMediumItalic,
//     RobotoMedium,
//     RobotoItalic,
//     RobotoBoldItalic,
//     RobotoBold,
// }

import { Barlow } from "next/font/google";

export const BarlowRegular = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow-regular",
});

export const BarlowExtraLight = Barlow({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-barlow-regular",
});

export const BarlowBold = Barlow({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-barlow-bold",
});

export const BarlowMedium = Barlow({
  subsets: ["latin"],
  weight: ["500"],
});

export const BarlowItalic = Barlow({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export const BarlowItalicBold = Barlow({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["700"],
});

export const BarlowSemiBold = Barlow({
  subsets: ["latin"],
  weight: ["600"],
});
