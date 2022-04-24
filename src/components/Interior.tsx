import * as React from "react";
import styled from "styled-components";
import { getGdriverImage } from "../helpers/getGdiverImage";

export interface IInteriorProps {}

const Title = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: #0a0a0b;
  max-width: 80%;
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 14px;
  line-height: 24px;
  color: #303036;
  margin-bottom: 5px;
`;

const InteriorContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: #ffffff;
  color: #000;
  font-family: "Roboto Slab", sans-serif;
  padding-top: 50px;
  gap: 50px;
  justify-content: space-between;
  background-image: url("/bgr-abc.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  .line-1 {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 30px;
    div.left {
      width: 50%;
      img.living-room {
        width: 100%;
        object-fit: contain;
      }
    }

    div.right {
      width: 50%;
      display: flex;
      justify-content: space-between;

      .desc {
        .top {
          width: 80%;
          float: left;
        }

        .bottom {
          width: 80%;
          float: right;
          margin-top: 200px;
          margin-right: 20px;
        }
      }

      .kitchen {
        width: 60%;
        object-fit: contain;
      }
    }
  }

  .line-2 {
    display: flex;
    max-width: 90%;
    justify-content: center;
    margin: 0 auto;
    gap: 50px;

    .left {
      width: 60%;
      display: flex;
      gap: 30px;
      img {
        width: 70%;
      }

      .desc {
        width: 20%;
      }
    }

    .right {
      width: 40%;
      img {
        width: 80%;
        transform: translateY(-60px);
      }
    }
  }
`;

export function Interior(props: IInteriorProps) {
  return (
    <InteriorContainer id="interior">
      <div className="line-1">
        <div className="left">
          <img
            src={getGdriverImage("1KPX0rDjqODbLawWY8_DjcIVsJyb_igDl")}
            alt=""
            className="living-room"
          />
        </div>
        <div className="right">
          <div className="desc">
            <div className="top">
              <Title>Không gian phòng khách</Title>

              <Description>
                Phòng khách là không gian chính của ngôi nhà, là nơi sum họp gia
                đình
              </Description>
            </div>

            <div className="bottom">
              <Title>Không gian phòng bếp</Title>

              <Description>
                Một bữa ăn ngon luôn là mong ước của mỗi gia đình. Không gian
                phòng ăn đóng vai trò rất quan trọng trong văn hóa Việt
              </Description>
            </div>
          </div>
          <img
            src={getGdriverImage("1I8KvwdcBDkN0yMzHsFtCHHRPGDUFQ6SH")}
            alt=""
            className="kitchen"
          />
        </div>
      </div>

      <div className="line-2">
        <div className="left">
          <img
            src={getGdriverImage("121FFeebFXXIa8T4Tl357rGXhswXUqnK8")}
            alt=""
          />

          <div className="desc">
            <Title>Không gian làm việc</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              quaerat dolores debitis ipsa, tempora modi.
            </Description>
          </div>
        </div>

        <div className="right">
          <img
            src={getGdriverImage("1GCjON7EDYTcbq7bs8MS4TICXDNKAoUdx")}
            alt=""
          />

          <div className="desc">
            <Title>Không gian phòng ngủ</Title>
            <Description>
              Những mẫu phòng ngủ của Nhà Xinh mang đến cảm giác ấm cúng, gần
              gũi và thoải mái
            </Description>
          </div>
        </div>
      </div>
    </InteriorContainer>
  );
}
