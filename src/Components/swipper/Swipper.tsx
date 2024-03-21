import { Swiper, SwiperSlide } from "swiper/react";
import { HighlightsProps } from '@/modal';

import "swiper/css";
import "swiper/scss/pagination";

import "./swipper.scss";

// import { Autoplay, Pagination } from 'swiper';

type Props = {
  items: HighlightsProps[];
}

export const Swipper: React.FC<Props> = ({ items }) => {
  return (
      <div className="swipper-sectiom relative w-full">
        <Swiper
          spaceBetween={70}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          speed={2000}
          // modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {items?.map((item: HighlightsProps) => (
          <SwiperSlide key={item.name}>
            <div className="swipper-img">
              <img src={item.image} alt={item.name} />
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
        <div className="swipper_content absolute">
           <p>Net working - software - Multimedia - Training Center - IT Support</p>
        </div>
      </div>
    );
  };