import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/react/24/outline';

const PrevArrow = (props: { onClick: any; }) => {
  const { onClick } = props;
  return (
    <div className="md-mx:hidden absolute z-10 cursor-pointer   slick-arrow top-[40%] left-5" onClick={onClick}>
      <ArrowLeftCircleIcon className="  h-10 hover:!text-gray-500 !text-white w-10"/>
     </div>
  );
};

const NextArrow = (props: { onClick: any; }) => {
  const { onClick } = props;
  return (
    <button className="md-mx:hidden absolute z-10 slick-arrow top-[40%] right-5" onClick={onClick}>
      <ArrowRightCircleIcon className="h-10  hover:!text-gray-500  !text-white w-10" />
    </button>
  );
};


export const HomeCarousel = () => {
  const sliderRef = useRef({});
  const offers=[1,2,3,4,5,6, 7];
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={undefined} />,
    nextArrow: <NextArrow onClick={undefined} />
  };

  return (
    <div className="w-full max-h-fit">
    <Slider {...settings} ref={sliderRef}>
    {
      offers.map((x, index)=>
       <div key={index} className=" cursor-pointer overflow-hidden">
        <img src={`/Images/img${x}.jpg`}  alt="Slide" className="w-full" />
      </div>
      )
    }
    </Slider>
    </div>
  );
};
