import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import './ImageSlider.css'

export default function CarouselWithIndicators() {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel" interval={3000}>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="bannerImage relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="./src/assets/banner-1.jpg"
              className="w-full h-full object-cover"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="bannerImage relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="./src/assets/banner-2.jpg"
              className="w-full h-full object-cover"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="bannerImage relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="./src/assets/banner-3.jpg"
              className="w-full h-full object-cover"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="bannerImage relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="./src/assets/banner-4.jpg"
              className="w-full h-full object-cover"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}