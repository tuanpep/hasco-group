import * as React from "react";
import styled from "styled-components";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageData } from "../data/images";
import { getGdriverImage } from "../helpers/getGdiverImage";

export interface IHighlightsProps {}

const HighlightsContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: #ffffff;
  color: #000;
  font-family: "Roboto Slab", sans-serif;
  padding-top: 50px;

  .swiper-container {
    max-width: 1200px;
  }
`;

const HighLightContent = styled.div`
  width: 1200px;
  margin: 0 auto;

  h2.title {
    font-size: 2rem;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
  }

  h4.sub-title {
    font-size: 1.3rem;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
    padding: 20px 0 0 20px;
    text-transform: uppercase;
  }
  margin-bottom: 20px;
`;

const HighLightItem = styled.div`
  width: 100%;
  height: 250px;
  background-image: ${(props: { image: string }) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  position: relative;
`;

const HighLightItemDesc = styled.div`
  padding-bottom: 50px;
  .title {
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Source Sans Pro", sans-serif;
    text-transform: uppercase;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    font-family: "Roboto Slab", sans-serif;
    color: #575757;
  }
`;

export function Highlights(props: IHighlightsProps) {
  return (
    <HighlightsContainer>
      <HighLightContent>
        <h2 className="title">THÀNH PHỐ QUY HOẠCH THÔNG MINH</h2>

        <h4 className="sub-title">– Khu tiện ích tích hợp đầy đủ</h4>
      </HighLightContent>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        className="swiper-container"
        scrollbar={{ draggable: true }}
      >
        {ImageData.highlights.map((item, index) => (
          <SwiperSlide>
            <HighLightItem image={getGdriverImage(item.url)}></HighLightItem>
            <HighLightItemDesc>
              <div className="title">{item.title}</div>
              <p>{item.desc}</p>
            </HighLightItemDesc>
          </SwiperSlide>
        ))}
      </Swiper>
    </HighlightsContainer>
  );
}
