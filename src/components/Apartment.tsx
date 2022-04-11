import * as React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Virtual } from "swiper";
import { ImageData } from "../data/images";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/virtual";
import { getGdriverImage } from "../helpers/getGdiverImage";

export interface IApartmentProps {}

const ApartmentContainer = styled.div`
  width: 100%;
  padding: 70px 0;
  background-color: #151515;
  color: #fdfcfc;
`;

const ApartmentContent = styled.div`
  width: 1440px;
  margin: 0 auto;

  h2.head-title {
    font-size: 2rem;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
    text-transform: uppercase;
    margin-bottom: 50px;
  }
`;

const ApartmentItem = styled.div`
  background-size: cover;
  margin: 0 auto;
  width: 80%;

  img {
    width: 100%;
    max-height: 700px;
  }
`;

export function Apartment(props: IApartmentProps) {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <ApartmentContainer>
      <ApartmentContent>
        <h2 className="head-title">Thiết kế căn hộ tiện ích</h2>

        <Swiper
          slidesPerView={1}
          modules={[Virtual, Autoplay, EffectFade]}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          virtual
          loop={true}
          effect="fade"
        >
          {ImageData.apartment.map((data, index) => {
            return (
              <SwiperSlide>
                <ApartmentItem >
                  <img src={getGdriverImage(data)} alt="" />
                </ApartmentItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ApartmentContent>
    </ApartmentContainer>
  );
}
