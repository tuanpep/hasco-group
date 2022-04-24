import * as React from "react";
import styled from "styled-components";

export interface IFooterProps {}

const FooterContainer = styled.div`
  width: 100%;
  padding: 50px 50px;
  background-color: #000000;
  color: #ffffff;
  padding-top: 20px;

  .line-logo {
    display: flex;
    justify-content: center;

    img {
      width: 100px;
    }
  }

  .contentFooter {
    display: flex;
  }
`;

export function Footer(props: IFooterProps) {
  return (
    <FooterContainer>
      <div className="line-logo">
        <img src="/logo-hasco.png" alt="" />
      </div>

      <div className="contentFooter">
        <div></div>
        <div></div>
      </div>
    </FooterContainer>
  );
}
