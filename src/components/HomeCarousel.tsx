import * as React from "react";
import styled from "styled-components";
import SwiperCore, { Autoplay, EffectFade, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/virtual";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageData } from "../data/images";
import { getGdriverImage } from "../helpers/getGdiverImage";
export interface IOverviewProps {}

const CarouselContainer = styled.div`
  width: 100%;
  min-height: 600px;
`;

const SliderItemContainer = styled.div`
  width: 100%;
  height: 95vh;
  background-image: ${(props: { image: string }) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 60px;
`;

export function HomeCarousel(props: IOverviewProps) {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <CarouselContainer>
      <Swiper
        slidesPerView={1}
        modules={[Virtual, Autoplay, EffectFade]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        virtual
        effect="fade"
      >
        {ImageData.carouselOverview.map((data, index) => {
          return (
            <SwiperSlide>
              <SliderItemContainer
                image={getGdriverImage(data.id)}
              ></SliderItemContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CarouselContainer>
  );
}
