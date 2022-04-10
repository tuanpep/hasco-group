import * as React from "react";
import styled from "styled-components";

export interface IOverviewProps {}

const OverviewContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: #083454;
  color: #fff;
  font-family: "Roboto Slab", sans-serif;
`;

const OverviewContent = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export function Overview(props: IOverviewProps) {
  return (
    <OverviewContainer>
      <OverviewContent>
        <h2>Overview</h2>
      </OverviewContent>
    </OverviewContainer>
  );
}
