import * as React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header";

export interface IHomeLayoutProps {}

const HomeLayoutContainer = styled.div`
  position: relative;
`;

const HomeContent = styled.div``;

export function HomeLayout(props: IHomeLayoutProps) {
  return (
    <HomeLayoutContainer>
      <Header />
      <HomeContent>
        <Outlet />
      </HomeContent>
    </HomeLayoutContainer>
  );
}
