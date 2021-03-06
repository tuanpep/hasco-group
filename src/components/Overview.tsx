import * as React from "react";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";

export interface IOverviewProps {}

const OverviewContainer = styled.div`
  width: 100%;
  padding: 100px 0;
  background-color: #0f74ba;
  color: #fdfcfc;
  font-family: "Roboto Slab", sans-serif;
`;

const OverviewContent = styled.div`
  z-index: 999;
  width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  & > div.left-column {
    width: 50%;

    & > h2 {
      font-size: 2rem;
      font-weight: 400;
      font-family: "Source Sans Pro", sans-serif;
      width: 80%;
    }

    div.explain-box {
      box-shadow: rgba(240, 240, 240, 0.45) 0px 25px 20px -20px;
      margin-top: 10px;
      padding: 20px;
      padding-left: 0;
      width: 90%;

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
          background-color: #ffffff;
          outline: 0;
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
    width: 50%;

    img {
      width: 100%;
      box-shadow: rgba(126, 193, 131, 0.56) 0px 22px 70px 0px;
      border-radius: 50px 0 50px 0;
    }
  }
`;

export function Overview(props: IOverviewProps) {
  return (
    <OverviewContainer id="overview">
      <OverviewContent>
        <div className="left-column">
          <h2>– HASCO CITY - Thành phố quốc tế của những công dân toàn cầu</h2>

          <div className="explain-box">
            <p>
              Tại Hasco City, chúng tôi mong muốn mang đến cho bạn một nơi tận
              hưởng cuộc sống sang trọng, đẳng cấp, một đại đô thị thông minh
              đầu tiên tại Việt Nam.
            </p>

            <div className="explain-btn">
              <button>Đăng ký nhận tư vấn</button>
            </div>
          </div>
        </div>

        <div className="right-column">
          {/* <iframe
            src="https://drive.google.com/file/d/1Pmz738Tl6CMzwVcgBCoVc5ETRifYLR_S/preview"
            width="100%"
            height={400}
          ></iframe> */}
          <ReactPlayer
            width={"100%"}
            height={420}
            url="https://www.youtube.com/watch?v=_qr2Gcnl5oc"
          />
        </div>
      </OverviewContent>
    </OverviewContainer>
  );
}
