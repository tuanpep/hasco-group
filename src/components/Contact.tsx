import { TextField } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import { getGdriverImage } from "../helpers/getGdiverImage";

export interface IContactProps {}

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props: { image: string }) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 0;
  background-position: 0 -400px;
`;

const ContactModalContainer = styled.div`
  width: 500px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
`;

const Title = styled.h2`
  text-align: center;
`;

const FormContainer = styled.div`
  padding: 20px;
`;

const TextFieldContainer = styled(TextField)`
  && {
    margin: 10px 0;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;

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
    width: 100%;
    height: 50px;
  }
`;

export function Contact(props: IContactProps) {
  return (
    <ContactContainer
      image={getGdriverImage("1OP-YIN4wsjfAAZ9tHCnw_TFPONNGcHdb")}
    >
      <ContactModalContainer>
        <Title>Đăng ký nhận tư vấn & ưu đãi mới nhất</Title>
        <FormContainer>
          <form>
            <TextFieldContainer
              fullWidth
              id="filled-required"
              label="Họ và Tên"
            />
            <TextFieldContainer fullWidth id="filled-required" label="Email" />
            <TextFieldContainer
              fullWidth
              id="filled-required"
              label="Số điện thoại"
            />
          </form>

          <ButtonContainer>
            <button>Đăng ký nhận tư vấn </button>
          </ButtonContainer>
        </FormContainer>
      </ContactModalContainer>
    </ContactContainer>
  );
}
