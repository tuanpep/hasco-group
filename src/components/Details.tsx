import { Button, TextField } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

const DetailsContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 50px 0;

  .line-1 {
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: flex-end;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }

    span {
      font-size: 1rem;
      font-weight: bold;
    }

    img {
      width: 100px;
    }
  }
`;

const ButtonCustom = styled(Button)`
  height: 50px;
`;

export interface IDetailsProps {}

export function Details(props: IDetailsProps) {
  return (
    <DetailsContainer>
      <div className="line-1">
        <div className="left">
          <div>
            <img src="/logo-hasco.png" alt="" />
          </div>

          <div style={{ width: "50%" }}>
            <p>
              <span>CHỦ ĐẦU TƯ: Tập đoàn Hasco</span> <br /> Là dự án
              Swiss-Belresidences Upper East Saigon của tập đoàn Hasco. Dự án
              Swiss-Belresidences Upper East Saigon là dự án chung cư hạng sang
              gồm có 30 tầng, mỗi tầng có 11 phòng.
              <br />
              <br />
            </p>
          </div>
        </div>

        <div className="right" style={{ width: "50%", textAlign: "left" }}>
          <span>Diện tích</span>: 1000 HA
          <br />
          <span>Địa điểm xây dựng: </span> Quận 2, TP Hồ Chí Minh <br />
          <span>Khí hậu:</span> - Khí hậu mát mẻ quanh năm, nhiệt độ trung bình
          là 18˚C – 25˚C. - Mùa hè từ tháng 5 đến tháng 9 nhiệt độ khoảng 27˚C –
          38˚C.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <TextField
          style={{ width: "400px" }}
          id="filled-required"
          label="Email"
          autoComplete="off"
        />
        <ButtonCustom variant="contained">Theo dõi</ButtonCustom>
      </div>
    </DetailsContainer>
  );
}
