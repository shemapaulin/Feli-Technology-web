import { Swiper, SwiperSlide } from 'swiper/react';
import { HighlightsProps } from '@/modal';

import "swiper/css";
import "swiper/scss/pagination";

import "./swipper.scss";
import "./swipper-wrapper.scss";

// import { Autoplay } from 'swiper';

type Props = {
  items: HighlightsProps[];
}

export const Swipper2: React.FC<Props> = ({ items }) => {
  return (
        <Swiper
          spaceBetween={10}
          loop
          direction={"vertical"}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          speed={2000}
          // modules={[Autoplay]}
          style={{ overflow: 'hidden' }}
          className="mySwiper h-[30rem] md:h-[30rem] w-[120%] rounded-[2rem]"
          // className="object-cover inline-block mx-w-[100%] md:h-[30rem] rounded-[2rem]"
        >
          {items?.map((item: HighlightsProps) => (
          <SwiperSlide key={item.name}>
              <img className="object-cover mx-w-[130%] -ml-6 h-[30rem] md:h-[30rem]" src={item.image} alt={item.name} />
          </SwiperSlide>
          ))}
        </Swiper>
    );
  };