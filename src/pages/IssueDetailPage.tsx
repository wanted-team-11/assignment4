import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AssignmentContext } from "../context";
import styled from "styled-components";
import Spinner from "../assets/Spinner.gif";

const IssueDetailPage = () => {
  const { number } = useParams();
  const { getIssueDetail, issueDetail, isLoading } =
    useContext(AssignmentContext);
  useEffect(() => {
    if (number) {
      getIssueDetail(number);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <LoadingImage src={Spinner} />
        </LoadingContainer>
      ) : (
        <div>{issueDetail?.title}</div>
      )}
      ;
    </>
  );
};

export default IssueDetailPage;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingImage = styled.img`
  width: 150px;
  height: 150px;
`;
