import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/MainBefore.jpg" ;
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={40}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className='rounded-lg' src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg'src={img1} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
