import * as React from "react";
import styled from "styled-components";

export interface IInteriorPageProps {}

const InteriorContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: #ffffff;
  color: #000;
  font-family: "Roboto Slab", sans-serif;
  padding-top: 50px;
`;

export function InteriorPage(props: IInteriorPageProps) {
  return <InteriorContainer>hahah</InteriorContainer>;
}
