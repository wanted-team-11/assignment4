import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../assets/Spinner.gif";
import { AssignmentContext } from "../context";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const IssueDetailPage = () => {
  const { number } = useParams();

  const { getIssueDetail, issueDetail, isLoading } =
    useContext(AssignmentContext);

  const { user, title, created_at, comments, body } = issueDetail || {};

  const markdownOptions = {
    pre: ({ ...props }) => (
      <S_MultiCodeWrapper>
        <pre {...props} />
      </S_MultiCodeWrapper>
    ),
    code: ({ ...props }) => <S_Code {...props} />,
  };

  useEffect(() => {
    if (number) {
      getIssueDetail(number);
    }
  }, []);

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
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            skipHtml={true}
            components={markdownOptions}
          >
            {body || ""}
          </ReactMarkdown>
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

const S_MultiCodeWrapper = styled.div`
  background-color: #f6f8fa;
  overflow: auto;
  padding: 16px;
  code {
    background-color: #f6f8fa;
  }
`;

const S_Code = styled.code`
  background-color: #eff1f3;
  border-radius: 6px;
  padding: 0.2em 0.4em;
  font-size: 85%;
`;
