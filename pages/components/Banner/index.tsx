import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';
import 'swiper/css';
import styles from './styles.module.css';

export const Banner = () => {
    return(
        <div className = {styles.container}>
          <Swiper
          
          slidesPerView={1}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
       className = {styles.swiper}
          
          
          >
            <SwiperSlide className = {styles.slide}><img src= "/temp/banner1.png" alt=""  /></SwiperSlide>
            <SwiperSlide className = {styles.slide}><img src= "/temp/banner2.png" alt=""  /></SwiperSlide>
      
          </Swiper>
        </div>
    );
}