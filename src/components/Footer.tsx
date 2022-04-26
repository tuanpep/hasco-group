import * as React from "react";
import styled from "styled-components";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt";
import { Tiktok } from "@styled-icons/fa-brands/Tiktok";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";

export interface IFooterProps {}

const FooterContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #0f74ba;
  color: #ffffff;

  .line-logo {
    display: flex;
    justify-content: center;

    img {
      width: 100px;
    }
  }

  .contentFooter {
    display: flex;
    gap: 40px;
    justify-content: center;

    p {
      font-size: 16px;
      font-weight: 400;
    }

    .social {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
`;

export function Footer(props: IFooterProps) {
  return (
    <FooterContainer>
      <div className="line-logo">
        <img src="/logo-white.png" alt="" />
      </div>

      <div className="contentFooter">
        <div className="line-2">
          <p>Theo dõi để nhận những tin tức, khuyến mãi mới nhất!</p>
          <div className="social">
            <FacebookCircle size={30} />
            <InstagramAlt size={30} />
            <Tiktok size={30} />
            <Twitter size={30} />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
