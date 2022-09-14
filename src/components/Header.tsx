import { AssignmentContext } from "../context";
import { useContext, useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  const { getListByPageNumber, issueList, isLoading } =
    useContext(AssignmentContext);

  useEffect(() => {
    getListByPageNumber("1");
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>
          {issueList[0] &&
            issueList[0].repository_url.split("https://api.github.com/repos/")}
        </HeaderTitle>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 60px;
  font-size: 15px;
  text-align: center;
`;
const HeaderTitle = styled.h1`
  font-size: 30px;
`;
