import * as React from "react";
import styled from "styled-components";
import { ImageData } from "../data/images";
import { getGdriverImage } from "../helpers/getGdiverImage";

export interface ILocationProps {}

const LocationContainer = styled.div`
  width: 100%;
  padding: 80px 0;
  background-color: #ffffff;
  color: #000;
  font-family: "Roboto Slab", sans-serif;
`;

const LocationContent = styled.div`
  z-index: 999;
  width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  & > div.left-column {
    width: 40%;
    padding: 20px 0 0 50px;

    & > h2 {
      font-size: 2rem;
      font-weight: 400;
      font-family: "Source Sans Pro", sans-serif;
    }

    div.explain-box {
      margin-top: 10px;
      width: 100%;

      p {
        font-size: 1rem;
        line-height: 1.5;
        font-weight: 300;
      }

      div.explain-btn {
        display: flex;
        justify-content: center;
        margin-top: 30px;

        button {
          background-color: #000;
          outline: 0;
          color: #fff;
          border: 0;
          padding: 10px 15px;
          cursor: pointer;
          font-family: "Roboto Slab", sans-serif;
          text-transform: uppercase;
          font-weight: 500;
        }
      }
    }
  }

  & > div.right-column {
    width: 60%;

    img {
      width: 100%;
      box-shadow: rgba(126, 193, 131, 0.56) 0px 22px 70px 0px;
    }
  }
`;

export function Location(props: ILocationProps) {
  return (
    <LocationContainer id="location">
      <LocationContent>
        <div className="right-column">
          <img src={getGdriverImage(ImageData.location)} alt="" />
        </div>

        <div className="left-column">
          <h2>– Thành phố quốc tế sôi động phía Tây Hà Nội</h2>

          <div className="explain-box">
            <p>
              Tại Hasco City, chúng tôi mong muốn mang đến cho bạn một nơi tận
              hưởng cuộc sống sang trọng, đẳng cấp, một đại đô thị thông minh
              đầu tiên tại Việt Nam.
            </p>

            <div className="explain-btn">
              <a href="https://goo.gl/maps/gUj2J6eBm5StW7Em8" target="_blank">
                <button>Bản đồ chi tiết</button>
              </a>
            </div>
          </div>
        </div>
      </LocationContent>
    </LocationContainer>
  );
}
