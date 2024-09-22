// components/Carousel.js
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
      <ArrowLeftCircleIcon className="hover:!text-gray-500  text-white w-100" />
    </div>
  );
};

const NextArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <div className="nxt-cls d-lg-block d-none cursor-pointer" onClick={onClick}>
      <ArrowRightCircleIcon className="hover:!text-gray-500  text-white w-100" />
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

  const images = [
    "/images/Slide+1.jpg",
    "/images/Slide+2.jpg",
    "/images/Slide+3.jpg",
    "/images/Slide+4.jpg",
  ];

  return (
    <CarouselStyle>
      <div className="carousel mb-10">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image-div">
              <Image
                src={image}
                layout="responsive"
                width={800}
                height={200}
                alt={`Slide ${index + 1}`}
                className="carousel-img"
              />
            </div>
          ))}
        </Slider>
      </div>
    </CarouselStyle>
  );
};
