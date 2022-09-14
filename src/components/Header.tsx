import { AssignmentContext } from "../context";
import { useContext } from "react";
import styled from "styled-components";
import { StyleVariables } from "../styles/GlobalStyle";

const Header = () => {
  const { headerTitle } = useContext(AssignmentContext);

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>{headerTitle}</HeaderTitle>
      </HeaderContainer>
      <Padding />
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 15px;
  text-align: center;
  background-color: ${StyleVariables.lighterBackgroundColor};
`;
const HeaderTitle = styled.h1`
  font-size: 30px;
`;

const Padding = styled.div`
  padding-bottom: 60px;
`;
