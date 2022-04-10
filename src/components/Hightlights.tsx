import * as React from "react";
import styled from "styled-components";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

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
`;

const HighLightItem = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid #000;
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
        slidesPerView={2}
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide>
            <HighLightItem>{item}</HighLightItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </HighlightsContainer>
  );
}
