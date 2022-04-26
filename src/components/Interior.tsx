import * as React from "react";
import styled from "styled-components";
import { getGdriverImage } from "../helpers/getGdiverImage";

export interface IInteriorProps {
  data: any;
}

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
        max-height: 600px;
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
        min-width: 500px;
        object-fit: contain;
        max-height: 500px;
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
        max-height: 600px;
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
        max-height: 400px;
      }
    }
  }
`;

export function Interior({ data }: IInteriorProps) {
  return (
    <InteriorContainer id="interior">
      <div className="line-1">
        <div className="left">
          <img
            src={getGdriverImage(data.img1.img)}
            alt=""
            className="living-room"
          />
        </div>
        <div className="right">
          <div className="desc">
            <div className="top">
              <Title>{data.img1.title}</Title>

              <Description>{data.img1.desc}</Description>
            </div>

            <div className="bottom">
              <Title>{data.img2.title}</Title>

              <Description>{data.img2.desc}</Description>
            </div>
          </div>
          <img
            src={getGdriverImage(data.img2.img)}
            alt=""
            className="kitchen"
          />
        </div>
      </div>

      <div className="line-2">
        <div className="left">
          <img src={getGdriverImage(data.img3.img)} alt="" />

          <div className="desc">
            <Title>{data.img3.title}</Title>
            <Description>{data.img3.desc}</Description>
          </div>
        </div>

        <div className="right">
          <img src={getGdriverImage(data.img4.img)} alt="" />

          <div className="desc">
            <Title>{data.img4.title}</Title>
            <Description>{data.img4.desc}</Description>
          </div>
        </div>
      </div>
    </InteriorContainer>
  );
}
