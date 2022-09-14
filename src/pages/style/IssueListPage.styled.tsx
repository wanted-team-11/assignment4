import styled from "styled-components";
import { StyleVariables } from "../../styles/GlobalStyle";

export const IssueListContainer = styled.ul`
  background: ${StyleVariables.backgroundColor};
`;

export const AdItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 57.5px;
  img {
    height: 100%;
  }
`;
