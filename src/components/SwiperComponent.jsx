import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

function SwiperComponent({ data }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={8}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      className="text-white"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
