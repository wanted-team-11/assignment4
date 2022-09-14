import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../assets/Spinner.gif";
import { AssignmentContext } from "../context";

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
        <Container>
          <Wrapper>
            <Avatar src={issueDetail?.user.avatar_url} alt="avatar" />
            <div>
              <div>
                #{issueDetail?.number} {issueDetail?.title}
              </div>
              <div>
                작성자: {issueDetail?.user.login}, 작성일:{" "}
                {issueDetail?.created_at}
              </div>
            </div>
            <div>코멘트: {issueDetail?.comments}</div>
          </Wrapper>
          <div>{issueDetail?.body}</div>
        </Container>
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

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1.3rem;
`;

const Avatar = styled.img`
  width: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;
