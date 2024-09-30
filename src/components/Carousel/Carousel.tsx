import Slider from "react-slick";
import Image from "next/image";
import React from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { CarouselStyle } from "./styles";

const PrevArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <div className="prv-cls d-lg-block d-none cursor-pointer" onClick={onClick}>
      <ArrowLeftCircleIcon className="hover:!text-gray-500 text-white w-100" />
    </div>
  );
};

const NextArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <div className="nxt-cls d-lg-block d-none cursor-pointer" onClick={onClick}>
      <ArrowRightCircleIcon className="hover:!text-gray-500 text-white w-100" />
    </div>
  );
};

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow onClick={undefined} />,
    nextArrow: <NextArrow onClick={undefined} />,
  };

  const slides = [
    {
      image: "/images/Slide+1.jpg",
      text: "Specializes in FPGA design, PCB manufacturing, and embedded software solutions.",
    },
    {
      image: "/images/Slide+2.jpg",
      text: "Offers signal and power integrity analysis for optimized electronic designs",
    },
    {
      image: "/images/Slide+3.jpg",
      text: "Focuses on delivering high-quality, tested, and reliable products.",
    },
    {
      image: "/images/Slide+4.jpg",
      text: "Innovation-driven, with a customer-centric approach to building long-term partnerships.",
    },
  ];

  return (
    <CarouselStyle>
      <div className="carousel mb-10">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="image-div relative">
              <Image
                src={slide.image}
                layout="responsive"
                width={800}
                height={200}
                alt={`Slide ${index + 1}`}
                className="carousel-img"
              />
              {/* Text overlay */}
              <div className="banner-text absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                <p className="carousel-text">{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </CarouselStyle>
  );
};
