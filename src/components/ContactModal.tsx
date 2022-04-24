import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import * as React from "react";
import styled from "styled-components";

export interface IContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormContainer = styled.div`
  padding: 20px;
`;

const TextFieldContainer = styled(TextField)`
  && {
    margin: 10px 0;
  }
`;

const DialogTitleContainer = styled(DialogTitle)`
  && {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  button {
    background-color: #0f74ba;
    outline: 0;
    color: #fff;
    border: 0;
    padding: 10px 15px;
    font-weight: bold;
    cursor: pointer;
    font-family: "Roboto Slab", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 0.3s;
    width: 100%;
    height: 50px;

    &:hover {
      background-color: #25aae2;
    }
  }
`;

export function ContactModal({ isOpen, onClose }: IContactModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitleContainer>
        <h2>Đăng ký nhận tư vấn & ưu đãi mới nhất</h2>
      </DialogTitleContainer>

      <DialogContent>
        <FormContainer>
          <form>
            <TextFieldContainer
              fullWidth
              id="filled-required"
              label="Họ và Tên"
              autoComplete="off"
            />
            <TextFieldContainer
              fullWidth
              id="filled-required"
              autoComplete="off"
              label="Email"
            />
            <TextFieldContainer
              fullWidth
              id="filled-required"
              label="Số điện thoại"
              autoComplete="off"
            />
          </form>

          <ButtonContainer>
            <button onClick={onClose}>Đăng ký nhận tư vấn </button>
          </ButtonContainer>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
}
