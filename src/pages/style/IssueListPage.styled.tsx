import styled from "styled-components";
import { StyleVariables } from "../../styles/GlobalStyle";

export const IssueListContainer = styled.ul`
  background: ${StyleVariables.backgroundColor};
  margin: 0;
  padding: 10px 0 0;
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
