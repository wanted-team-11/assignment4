import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../assets/Spinner.gif";
import { AssignmentContext } from "../context";
import { StyleVariables } from "../styles/GlobalStyle";
import Markdown from "../components/Markdown";

const IssueDetailPage = () => {
  const { number } = useParams();

  const { getIssueDetail, issueDetail, isLoading, setHeader, isError } =
    useContext(AssignmentContext);

  const { user, title, created_at, comments, body, repository_url } =
    issueDetail || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headerTitle = repository_url
    ?.split("https://api.github.com/repos/")
    .join("");
  useEffect(() => {
    if (headerTitle) {
      setHeader(headerTitle);
    }
  }, [setHeader, headerTitle]);

  useEffect(() => {
    if (number) {
      getIssueDetail(number);
    }
  }, [getIssueDetail, number]);

  if (isError) {
    return <div>Oops, something went wrong...</div>;
  }

  return (
    <>
      {isLoading ? (
        <S_LoadingContainer>
          <S_LoadingImage src={Spinner} />
        </S_LoadingContainer>
      ) : (
        <S_Container>
          <S_Wrapper>
            <S_Avatar src={user?.avatar_url} alt="avatar" />
            <div>
              <S_Title>
                #{number} {title}
              </S_Title>
              <S_Describe>
                작성자: {user?.login}, 작성일:{" "}
                {new Date(created_at || "").getFullYear()}년{" "}
                {new Date(created_at || "").getMonth() + 1}월{" "}
                {new Date(created_at || "").getDate()}일
              </S_Describe>
            </div>
            <S_Comment>코멘트: {comments}</S_Comment>
          </S_Wrapper>
          {typeof body === "string" && <Markdown content={body} />}
        </S_Container>
      )}
    </>
  );
};

export default IssueDetailPage;

const S_LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const S_LoadingImage = styled.img`
  width: 150px;
  height: 150px;
`;

const S_Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 15px;
  background-color: ${StyleVariables.lighterBackgroundColor};
  min-height: 100vh;
`;

const S_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const S_Avatar = styled.img`
  width: 50px;
  margin-right: 10px;
`;

const S_Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const S_Describe = styled.div`
  font-size: 12px;
`;

const S_Comment = styled.div`
  text-align: right;
  font-size: 12px;
  width: 70px;
  flex-shrink: 0;
`;
