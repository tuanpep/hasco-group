import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ContactModal } from "../components/ContactModal";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export interface IHomeLayoutProps {}

const HomeLayoutContainer = styled.div`
  position: relative;
`;

const HomeContent = styled.div``;

export function HomeLayout(props: IHomeLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <HomeLayoutContainer>
      <Header openContactModal={openContactModal} />
      <ContactModal isOpen={isOpen} onClose={onClose} />
      <HomeContent>
        <Outlet context={{ openContactModal: openContactModal }} />
      </HomeContent>
      <Footer />
    </HomeLayoutContainer>
  );
}
