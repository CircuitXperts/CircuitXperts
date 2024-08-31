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
