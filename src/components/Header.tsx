import * as React from "react";
import styled from "styled-components";

export interface IHeaderProps {}

const HeaderContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-bottom: 1px solid #e7e4e4;
  position: fixed;
  z-index: 9999;
`;

const HeaderContent = styled.div`
  width: 1440px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const MenuItem = styled.div`
  font-family: "Roboto Slab", sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 0px;
    transition: all 0.2;
  }

  &:hover {
    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 2px;
      background-color: #000;
      bottom: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      transition: all 0.3;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 25%;

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
`;

const menuList = [
  {
    name: "Tổng quan",
  },
  {
    name: "Vị trí",
  },
  {
    name: "Điểm nhấn",
  },
  {
    name: "Căn Hộ",
  },
  {
    name: "Nội thất",
  },
];

export function Header(props: IHeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src="/logo-hasco.png" />
        <MenuContainer>
          {menuList.map((item, index) => (
            <MenuItem key={index}>{item.name}</MenuItem>
          ))}
        </MenuContainer>

        <ButtonContainer>
          <button>Đăng ký tư vấn </button>
        </ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
